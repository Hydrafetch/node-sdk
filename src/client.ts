import { HydrafetchError, HydrafetchTimeoutError } from './errors.js';
import type {
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
  /** Defaults to process.env.HYDRAFETCH_API_KEY. */
  apiKey?: string;
  baseUrl?: string;
  /** Per-request timeout in milliseconds. Default 120000. */
  timeoutMs?: number;
  /** Retries for 429 and 5xx only. Default 2. */
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

  /**
   * One page as clean Markdown and structured data. One credit.
   *
   * The return type follows the formats you ask for, so the ones you requested
   * are not optional:
   *
   * ```ts
   * const a = await hf.scrape(url);                            // a.markdown: string
   * const b = await hf.scrape(url, { formats: ['html'] });     // b.html: string
   * ```
   */
  scrape<const F extends readonly Format[] = ['markdown']>(
    url: string,
    options: ScrapeOptions<F> = {},
  ): Promise<ScrapeResult<F[number]>> {
    return this.request('POST', '/v1/web/scrape', { url, ...options });
  }

  /** A page straight to a Markdown string, for when that is all you want. */
  async markdown(url: string, options: Omit<ScrapeOptions, 'formats'> = {}): Promise<string> {
    const page = await this.scrape(url, { ...options, formats: ['markdown'] });
    return page.markdown;
  }

  /** A site's URLs from its sitemap and links, without fetching the pages. One credit. */
  map(url: string, options: MapOptions = {}): Promise<MapResult> {
    return this.request<MapResult>('POST', '/v1/web/map', { url, ...options });
  }

  /** Ranked web results. One credit, plus one per result when scrapeResults is set. */
  search(query: string, options: SearchOptions = {}): Promise<SearchResult> {
    return this.request<SearchResult>('POST', '/v1/web/search', { query, ...options });
  }

  /** Typed JSON from one or more URLs. Five credits per URL. */
  extract<T = unknown>(
    urls: string | string[],
    options: ExtractOptions = {},
  ): Promise<ExtractResult<T>> {
    return this.request<ExtractResult<T>>('POST', '/v1/web/extract', {
      urls: Array.isArray(urls) ? urls : [urls],
      ...options,
    });
  }

  /** A company's brand from its domain. Five credits. */
  brand(domain: string): Promise<BrandResult> {
    return this.request<BrandResult>('GET', '/v1/web/brand', undefined, { domain });
  }

  /** One embeddable logo. One credit, a fifth of a full brand resolve. */
  logo(domain: string, options: BrandOptions = {}): Promise<LogoResult> {
    return this.request<LogoResult>('GET', '/v1/web/brand/logo', undefined, { domain, ...options });
  }

  /** A site's design system, read from computed styles in a real browser. Ten credits. */
  styleguide(domain: string): Promise<StyleguideResult> {
    return this.request<StyleguideResult>('GET', '/v1/web/styleguide', undefined, { domain });
  }

  /** A rendered PNG of the page, returned as a public URL. Five credits. */
  screenshot(url: string, options: ScreenshotOptions = {}): Promise<ScreenshotResult> {
    return this.request<ScreenshotResult>('POST', '/v1/web/screenshot', { url, ...options });
  }

  /** A page's images with metadata, without rendering it. One credit. */
  images(url: string, options: { maxAge?: number } = {}): Promise<ImagesResult> {
    return this.request<ImagesResult>('POST', '/v1/web/images', { url, ...options });
  }

  /** A page's links. One credit. */
  links(url: string, options: Omit<ScrapeOptions, 'formats'> = {}): Promise<ScrapeResult<'links'>> {
    return this.request<ScrapeResult<'links'>>('POST', '/v1/web/links', { url, ...options });
  }

  /**
   * Start a crawl from a seed URL. Returns a job id immediately; poll with
   * crawlStatus, or use crawlAndWait to do both.
   */
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

  /**
   * Start a batch over a known list of URLs. Per-page options belong in scrapeOptions,
   * not at the top level.
   */
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

  /** Start a crawl and poll until it reaches a terminal state. */
  crawlAndWait(url: string, options: CrawlOptions = {}, wait: WaitOptions = {}): Promise<JobResult> {
    return this.startCrawl(url, options).then((id) => this.waitForJob(() => this.crawlStatus(id), wait));
  }

  /** Start a batch and poll until it reaches a terminal state. */
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
