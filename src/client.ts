import { HydrafetchError, HydrafetchTimeoutError } from './errors.js';
import type {
  ExtractSchema,
  ZodLike,
  BatchOptions,
  BrandOptions,
  BrandResult,
  CrawlOptions,
  ExtractOptions,
  ExtractResult,
  Format,
  ImagesResult,
  JobResult,
  LogoResult,
  MapOptions,
  MapResult,
  ScrapeOptions,
  ScrapeResult,
  ScreenshotOptions,
  ScreenshotResult,
  SearchOptions,
  SearchResult,
  StyleguideResult,
  WaitOptions,
} from './types.js';

const DEFAULT_BASE_URL = 'https://api.hydrafetch.com';
const DEFAULT_TIMEOUT_MS = 120_000;
const DEFAULT_MAX_RETRIES = 2;

export interface HydrafetchOptions {
  apiKey?: string;
  baseUrl?: string;
  timeoutMs?: number;
  maxRetries?: number;
  fetch?: typeof globalThis.fetch;
}

interface Envelope<T> {
  success?: boolean;
  data?: T;
  error?: { code?: string; message?: string; details?: unknown };
  meta?: { requestId?: string };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Hand the API a JSON Schema, whatever the caller had.
 *
 * Zod is not a dependency and is imported only when a Zod schema is actually passed, so the
 * package still installs with none. Zod 4 converts its own schemas, so most callers need nothing
 * else. Zod 3 has no converter and is still widely used, so zod-to-json-schema is honoured when it
 * is present rather than refusing a schema we could have converted.
 */
async function toJsonSchema(schema: ExtractSchema): Promise<Record<string, unknown>> {
  const looksZod =
    typeof schema === 'object' &&
    schema !== null &&
    ('_zod' in schema || '_def' in schema) &&
    typeof (schema as ZodLike).parse === 'function';
  if (!looksZod) return schema as Record<string, unknown>;

  // Zod 4 converts its own schemas, so most callers need nothing else installed.
  const zod = await optionalImport<{ toJSONSchema?: (s: unknown) => Record<string, unknown> }>(
    'zod',
  );
  if (zod && typeof zod.toJSONSchema === 'function') return zod.toJSONSchema(schema);

  // Zod 3 has no converter of its own and is still widely used, so honour the package everyone
  // reaches for rather than refusing a schema we could convert.
  const legacy = await optionalImport<{
    zodToJsonSchema?: (s: unknown) => Record<string, unknown>;
  }>('zod-to-json-schema');
  if (legacy && typeof legacy.zodToJsonSchema === 'function') return legacy.zodToJsonSchema(schema);

  throw new HydrafetchError({
    code: 'SCHEMA_CONVERSION_FAILED',
    message:
      'A Zod schema was passed but nothing here can convert it. Use zod 4, which converts its ' +
      'own schemas, or install zod-to-json-schema alongside zod 3, or pass a JSON Schema.',
    status: 0,
  });
}

/** Import a package the caller may not have, without making it a dependency of this one. */
async function optionalImport<T>(name: string): Promise<T | null> {
  try {
    return (await import(/* @vite-ignore */ name)) as T;
  } catch {
    return null;
  }
}

export class Hydrafetch {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly fetchImpl: typeof globalThis.fetch;

  constructor(options: HydrafetchOptions | string = {}) {
    const opts = typeof options === 'string' ? { apiKey: options } : options;
    const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
    const apiKey = opts.apiKey ?? env?.HYDRAFETCH_API_KEY;
    if (!apiKey) {
      throw new HydrafetchError({
        code: 'MISSING_API_KEY',
        message:
          'No API key. Pass one to the constructor or set HYDRAFETCH_API_KEY. Create a key at https://app.hydrafetch.com.',
        status: 401,
      });
    }
    this.apiKey = apiKey;
    this.baseUrl = (opts.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, '');
    this.timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.maxRetries = opts.maxRetries ?? DEFAULT_MAX_RETRIES;
    this.fetchImpl = opts.fetch ?? globalThis.fetch;
    if (typeof this.fetchImpl !== 'function') {
      throw new HydrafetchError({
        code: 'NO_FETCH',
        message: 'No global fetch. Use Node 18 or newer, or pass a fetch implementation.',
        status: 500,
      });
    }
  }

  private async request<T>(
    method: 'GET' | 'POST',
    path: string,
    body?: unknown,
    query?: Record<string, unknown>,
  ): Promise<T> {
    const url = new URL(this.baseUrl + path);
    for (const [k, v] of Object.entries(query ?? {})) {
      if (v === undefined || v === null) continue;
      url.searchParams.set(k, String(v));
    }

    let lastError: HydrafetchError | undefined;
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), this.timeoutMs);
      try {
        const res = await this.fetchImpl(url.toString(), {
          method,
          headers: {
            'X-API-Key': this.apiKey,
            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: body === undefined ? undefined : JSON.stringify(body),
          signal: controller.signal,
        });

        const text = await res.text();
        let parsed: Envelope<T> | undefined;
        try {
          parsed = text ? (JSON.parse(text) as Envelope<T>) : undefined;
        } catch {
          parsed = undefined;
        }

        if (!res.ok || parsed?.success === false) {
          const err = new HydrafetchError({
            code: parsed?.error?.code ?? `HTTP_${res.status}`,
            message: parsed?.error?.message ?? text.slice(0, 300) ?? res.statusText,
            status: res.status,
            requestId: parsed?.meta?.requestId,
            details: parsed?.error?.details,
          });
          if (!err.isRetryable || attempt === this.maxRetries) throw err;
          lastError = err;
          await sleep(2 ** attempt * 500 + Math.floor(Math.random() * 250));
          continue;
        }

        return (parsed?.data ?? (parsed as unknown as T)) as T;
      } catch (error) {
        if (error instanceof HydrafetchError) {
          if (!error.isRetryable || attempt === this.maxRetries) throw error;
          lastError = error;
          continue;
        }
        if ((error as Error)?.name === 'AbortError') {
          throw new HydrafetchTimeoutError(
            `Request to ${path} exceeded ${this.timeoutMs}ms. Raise timeoutMs, or use async job endpoints for long work.`,
          );
        }
        if (attempt === this.maxRetries) throw error;
        await sleep(2 ** attempt * 500);
      } finally {
        clearTimeout(timer);
      }
    }
    throw lastError ?? new HydrafetchError({ code: 'UNKNOWN', message: 'Request failed', status: 500 });
  }

  scrape<const F extends readonly Format[] = ['markdown']>(
    url: string,
    options: ScrapeOptions<F> = {},
  ): Promise<ScrapeResult<F[number]>> {
    return this.request('POST', '/v1/web/scrape', { url, ...options });
  }

  async markdown(url: string, options: Omit<ScrapeOptions, 'formats'> = {}): Promise<string> {
    const page = await this.scrape(url, { ...options, formats: ['markdown'] });
    return page.markdown;
  }

  map(url: string, options: MapOptions = {}): Promise<MapResult> {
    return this.request<MapResult>('POST', '/v1/web/map', { url, ...options });
  }

  search(query: string, options: SearchOptions = {}): Promise<SearchResult> {
    return this.request<SearchResult>('POST', '/v1/web/search', { query, ...options });
  }

  async extract<T = unknown>(
    urls: string | string[],
    options: ExtractOptions = {},
  ): Promise<ExtractResult<T>> {
    const { schema, ...rest } = options;
    return this.request<ExtractResult<T>>('POST', '/v1/web/extract', {
      urls: Array.isArray(urls) ? urls : [urls],
      ...rest,
      ...(schema === undefined ? {} : { schema: await toJsonSchema(schema) }),
    });
  }

  brand(domain: string): Promise<BrandResult> {
    return this.request<BrandResult>('GET', '/v1/web/brand', undefined, { domain });
  }

  logo(domain: string, options: BrandOptions = {}): Promise<LogoResult> {
    return this.request<LogoResult>('GET', '/v1/web/brand/logo', undefined, { domain, ...options });
  }

  styleguide(domain: string): Promise<StyleguideResult> {
    return this.request<StyleguideResult>('GET', '/v1/web/styleguide', undefined, { domain });
  }

  screenshot(url: string, options: ScreenshotOptions = {}): Promise<ScreenshotResult> {
    return this.request<ScreenshotResult>('POST', '/v1/web/screenshot', { url, ...options });
  }

  images(url: string, options: { maxAge?: number } = {}): Promise<ImagesResult> {
    return this.request<ImagesResult>('POST', '/v1/web/images', { url, ...options });
  }

  links(url: string, options: Omit<ScrapeOptions, 'formats'> = {}): Promise<ScrapeResult<'links'>> {
    return this.request<ScrapeResult<'links'>>('POST', '/v1/web/links', { url, ...options });
  }

  async startCrawl(url: string, options: CrawlOptions = {}): Promise<string> {
    const res = await this.request<{ crawlId?: string; id?: string }>('POST', '/v1/web/crawl', {
      url,
      ...options,
    });
    const id = res.crawlId ?? res.id;
    if (!id) {
      throw new HydrafetchError({
        code: 'NO_JOB_ID',
        message: 'Crawl accepted but returned no id.',
        status: 502,
      });
    }
    return id;
  }

  crawlStatus(id: string): Promise<JobResult> {
    return this.request<JobResult>('GET', `/v1/web/crawl/${encodeURIComponent(id)}`);
  }

  async startBatch(urls: string[], options: BatchOptions = {}): Promise<string> {
    const res = await this.request<{ batchId?: string; id?: string }>('POST', '/v1/web/batch', {
      urls,
      ...options,
    });
    const id = res.batchId ?? res.id;
    if (!id) {
      throw new HydrafetchError({
        code: 'NO_JOB_ID',
        message: 'Batch accepted but returned no id.',
        status: 502,
      });
    }
    return id;
  }

  batchStatus(id: string): Promise<JobResult> {
    return this.request<JobResult>('GET', `/v1/web/batch/${encodeURIComponent(id)}`);
  }

  crawlAndWait(url: string, options: CrawlOptions = {}, wait: WaitOptions = {}): Promise<JobResult> {
    return this.startCrawl(url, options).then((id) => this.waitForJob(() => this.crawlStatus(id), wait));
  }

  batchAndWait(urls: string[], options: BatchOptions = {}, wait: WaitOptions = {}): Promise<JobResult> {
    return this.startBatch(urls, options).then((id) => this.waitForJob(() => this.batchStatus(id), wait));
  }

  private async waitForJob(poll: () => Promise<JobResult>, wait: WaitOptions): Promise<JobResult> {
    const timeoutMs = wait.timeoutMs ?? 300_000;
    const interval = wait.pollIntervalMs ?? 2_000;
    const deadline = Date.now() + timeoutMs;
    const terminal = new Set(['completed', 'failed', 'cancelled']);

    for (;;) {
      const job = await poll();
      wait.onProgress?.(job);
      if (terminal.has(String(job.status))) return job;
      if (Date.now() + interval > deadline) {
        throw new HydrafetchTimeoutError(
          `Job did not finish within ${timeoutMs}ms. It is still running server-side; poll its status directly, or pass a webhook.`,
        );
      }
      await sleep(interval);
    }
  }
}
