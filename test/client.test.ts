import { type MockedFunction, describe, expect, it, vi } from 'vitest';
import { Hydrafetch, HydrafetchError, HydrafetchTimeoutError } from '../src/index.js';

type FetchMock = MockedFunction<typeof globalThis.fetch>;

/** A fetch mock with the real two-argument signature, so call assertions stay typed. */
function mockFetch(
  handler: (url: string, init: RequestInit) => Response | Promise<Response>,
): FetchMock {
  return vi.fn(async (input: URL | RequestInfo, init?: RequestInit) =>
    handler(String(input), (init ?? {}) as RequestInit),
  ) as FetchMock;
}

/** The request the mock saw, with the tuple narrowing done once instead of at every call site. */
function callAt(f: FetchMock, i = 0): { url: string; init: RequestInit } {
  const call = f.mock.calls[i];
  if (!call) throw new Error(`no fetch call at index ${i}`);
  return { url: String(call[0]), init: (call[1] ?? {}) as RequestInit };
}

function headersOf(f: FetchMock, i = 0): Record<string, string> {
  return (callAt(f, i).init.headers ?? {}) as Record<string, string>;
}

function bodyOf(f: FetchMock, i = 0): Record<string, unknown> {
  const raw = callAt(f, i).init.body;
  return raw ? (JSON.parse(String(raw)) as Record<string, unknown>) : {};
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function clientWith(fetchImpl: typeof globalThis.fetch, overrides = {}) {
  return new Hydrafetch({ apiKey: 'hf_test', fetch: fetchImpl, maxRetries: 0, ...overrides });
}

describe('auth', () => {
  // REST authenticates with X-API-Key. The MCP endpoint is the one that takes
  // Authorization: Bearer, and confusing the two is a real mistake that shipped once.
  it('sends the key as X-API-Key and never as a bearer token', async () => {
    const fetchImpl = mockFetch(() => jsonResponse({ success: true, data: { url: 'u' } }));
    await clientWith(fetchImpl).scrape('https://example.com');

    const headers = headersOf(fetchImpl);
    expect(headers['X-API-Key']).toBe('hf_test');
    expect(headers.Authorization).toBeUndefined();
  });

  it('refuses to construct without a key rather than failing at the first call', () => {
    expect(() => new Hydrafetch({ apiKey: '', fetch: (() => {}) as never })).toThrow(HydrafetchError);
  });
});

describe('request shaping', () => {
  it('unwraps the data envelope', async () => {
    const fetchImpl = mockFetch(() =>
      jsonResponse({ success: true, data: { markdown: '# hi' }, meta: { requestId: 'r1' } }),
    );
    const out = await clientWith(fetchImpl).scrape('https://example.com');
    expect(out.markdown).toBe('# hi');
  });

  it('puts scrape options in the body alongside the url', async () => {
    const fetchImpl = mockFetch(() => jsonResponse({ success: true, data: {} }));
    await clientWith(fetchImpl).scrape('https://example.com', {
      formats: ['markdown', 'links'],
      preferStructure: true,
    });
    const body = bodyOf(fetchImpl);
    expect(body).toEqual({
      url: 'https://example.com',
      formats: ['markdown', 'links'],
      preferStructure: true,
    });
  });

  it('wraps a single extract url into an array', async () => {
    const fetchImpl = mockFetch(() => jsonResponse({ success: true, data: {} }));
    await clientWith(fetchImpl).extract('https://example.com', { prompt: 'price' });
    const body = bodyOf(fetchImpl);
    expect(body.urls).toEqual(['https://example.com']);
  });

  it('sends GET query parameters rather than a body for brand lookups', async () => {
    const fetchImpl = mockFetch(() => jsonResponse({ success: true, data: {} }));
    await clientWith(fetchImpl).logo('stripe.com', { theme: 'dark' });
    const { url, init } = callAt(fetchImpl);
    expect(url).toContain('domain=stripe.com');
    expect(url).toContain('theme=dark');
    expect(init.body).toBeUndefined();
  });
});

describe('errors', () => {
  it('surfaces code, status and requestId from the error envelope', async () => {
    const fetchImpl = mockFetch(() =>
      jsonResponse(
        { success: false, error: { code: 'UNAUTHORIZED', message: 'Invalid API key' }, meta: { requestId: 'abc' } },
        401,
      ),
    );
    await expect(clientWith(fetchImpl).scrape('https://example.com')).rejects.toMatchObject({
      code: 'UNAUTHORIZED',
      status: 401,
      requestId: 'abc',
    });
  });

  it('classifies statuses so callers do not have to memorise them', async () => {
    const cases: Array<[number, 'isAuth' | 'isOutOfCredits' | 'isInvalidRequest' | 'isRetryable']> = [
      [401, 'isAuth'],
      [402, 'isOutOfCredits'],
      [422, 'isInvalidRequest'],
      [429, 'isRetryable'],
      [503, 'isRetryable'],
    ];
    for (const [status, flag] of cases) {
      const fetchImpl = mockFetch(() => jsonResponse({ success: false, error: { message: 'x' } }, status));
      const err = await clientWith(fetchImpl)
        .scrape('https://example.com')
        .catch((e: HydrafetchError) => e);
      expect((err as HydrafetchError)[flag], `status ${status} -> ${flag}`).toBe(true);
    }
  });

  it('does not retry a validation failure, which would just spend another request', async () => {
    const fetchImpl = mockFetch(() => jsonResponse({ success: false, error: { message: 'bad url' } }, 422));
    await expect(
      new Hydrafetch({ apiKey: 'hf_test', fetch: fetchImpl, maxRetries: 3 }).scrape('nope'),
    ).rejects.toBeInstanceOf(HydrafetchError);
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it('retries a 503 and returns the eventual success', async () => {
    let n = 0;
    const fetchImpl = mockFetch(() => {
      n += 1;
      return n < 3
        ? jsonResponse({ success: false, error: { message: 'upstream' } }, 503)
        : jsonResponse({ success: true, data: { markdown: 'ok' } });
    });
    const out = await new Hydrafetch({ apiKey: 'hf_test', fetch: fetchImpl, maxRetries: 3 }).scrape(
      'https://example.com',
    );
    expect(out.markdown).toBe('ok');
    expect(fetchImpl).toHaveBeenCalledTimes(3);
  });
});

describe('jobs', () => {
  it('reads batchId from the top level, not from data', async () => {
    const fetchImpl = mockFetch(() => jsonResponse({ batchId: 'b_1', status: 'pending' }, 201));
    const id = await clientWith(fetchImpl).startBatch(['https://a.example']);
    expect(id).toBe('b_1');
  });

  it('nests per-page options under scrapeOptions, where the API expects them', async () => {
    const fetchImpl = mockFetch(() => jsonResponse({ batchId: 'b_1' }, 201));
    await clientWith(fetchImpl).startBatch(['https://a.example'], {
      scrapeOptions: { formats: ['markdown'] },
    });
    const body = bodyOf(fetchImpl);
    expect(body.scrapeOptions).toEqual({ formats: ['markdown'] });
    expect(body.formats).toBeUndefined();
  });

  it('polls until a terminal status and reports progress', async () => {
    const statuses = ['pending', 'running', 'completed'];
    let i = 0;
    const fetchImpl = mockFetch((url) =>
      url.includes('/batch/')
        ? jsonResponse({ success: true, data: { status: statuses[i++] ?? 'completed' } })
        : jsonResponse({ batchId: 'b_1' }, 201),
    );
    const seen: string[] = [];
    const job = await clientWith(fetchImpl).batchAndWait(
      ['https://a.example'],
      {},
      { pollIntervalMs: 1, onProgress: (j) => seen.push(String(j.status)) },
    );
    expect(job.status).toBe('completed');
    expect(seen).toEqual(['pending', 'running', 'completed']);
  });

  it('times out rather than polling forever', async () => {
    const fetchImpl = mockFetch((url) =>
      url.includes('/batch/')
        ? jsonResponse({ success: true, data: { status: 'running' } })
        : jsonResponse({ batchId: 'b_1' }, 201),
    );
    await expect(
      clientWith(fetchImpl).batchAndWait(['https://a.example'], {}, { timeoutMs: 5, pollIntervalMs: 1 }),
    ).rejects.toBeInstanceOf(HydrafetchTimeoutError);
  });
});
