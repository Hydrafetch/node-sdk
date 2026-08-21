# @hydrafetch/node-sdk

[![npm](https://img.shields.io/npm/v/@hydrafetch/node-sdk)](https://www.npmjs.com/package/@hydrafetch/node-sdk)
[![CI](https://github.com/Hydrafetch/node-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/Hydrafetch/node-sdk/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/@hydrafetch/node-sdk)](./LICENSE)

Official TypeScript client for the [Hydrafetch](https://hydrafetch.com) web data API.

Turn any URL into clean Markdown or schema-shaped JSON. Zero runtime dependencies, ESM and CJS, Node 18+.

## Installation

```bash
npm install @hydrafetch/node-sdk
```

## Quick start

```ts
import { Hydrafetch } from '@hydrafetch/node-sdk';

const hf = new Hydrafetch(process.env.HYDRAFETCH_API_KEY);

const page = await hf.scrape('https://example.com/article');
console.log(page.markdown);
```

Create a key at [app.hydrafetch.com](https://app.hydrafetch.com). The constructor reads `HYDRAFETCH_API_KEY` when no key is passed.

## Scraping

```ts
const page = await hf.scrape('https://example.com/article', {
  formats: ['markdown', 'links'],
  onlyMainContent: true,
  preferStructure: true,
  blockAds: true,
  maxAge: 3_600_000,
});
```

The return type narrows to the formats you request:

```ts
const a = await hf.scrape(url);                         // a.markdown is string
const b = await hf.scrape(url, { formats: ['html'] });  // b.html is string, b.markdown is string | undefined
```

| Format | Field | Contains |
| --- | --- | --- |
| `markdown` | `markdown` | clean Markdown, the default |
| `html` | `html` | rendered HTML |
| `rawHtml` | `rawHtml` | the untouched response body |
| `links` | `links` | every link on the page |
| `structured` | `structured` | the page's own JSON-LD and microdata |
| `summary` | `summary` | a short summary |
| `json` | `json` | schema-shaped JSON, see `jsonOptions` |
| `brand` | `brand` | the site's brand record |

`hf.markdown(url)` returns the Markdown string directly.

## Structured extraction

```ts
interface Product {
  name: string;
  priceUsd: number;
}

const out = await hf.extract<Product>(['https://example.com/product/1'], {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      priceUsd: { type: 'number' },
    },
  },
});

out.results.forEach((item) => console.log(item.url, item.data?.name));
```

Pass `prompt` instead of, or alongside, `schema` to describe the fields in plain language.

## Discovery and bulk work

`map` lists a site's URLs for one credit without fetching any page.

```ts
const { links } = await hf.map('https://example.com', { limit: 1000 });
const docs = links.filter((url) => url.includes('/docs/'));
```

`batchAndWait` and `crawlAndWait` submit a job and poll until it finishes.

```ts
const job = await hf.batchAndWait(
  docs,
  { scrapeOptions: { formats: ['markdown'] } },
  { onProgress: (j) => console.log(j.status, j.completed, '/', j.total) },
);

for (const page of job.pages ?? []) {
  console.log(page.url, page.data?.markdown?.length);
}
```

Pass a `webhook` and use `startCrawl` or `startBatch` to return immediately instead of polling.

```ts
const crawlId = await hf.startCrawl('https://example.com', {
  limit: 500,
  maxDepth: 3,
  includePaths: ['/docs'],
  webhook: 'https://your.app/hooks/hydrafetch',
});
```

## Search

```ts
const { results } = await hf.search('post-quantum TLS adoption', {
  limit: 5,
  scrapeResults: true,
});

results.forEach((r) => console.log(r.title, r.url, r.data?.markdown));
```

## Brand data

```ts
await hf.brand('stripe.com');                                 // logos, colours, fonts, socials
await hf.logo('stripe.com', { theme: 'dark', type: 'icon' }); // one asset
await hf.styleguide('stripe.com');                            // computed design system
```

For logos in a browser use [`@hydrafetch/client-sdk`](https://github.com/Hydrafetch/client-sdk) or [`@hydrafetch/react`](https://github.com/Hydrafetch/react-sdk) with a publishable key. Those bill against logo pulls rather than credits.

## Error handling

All failures throw `HydrafetchError`, carrying the API's error code, HTTP status and request id.

```ts
import { HydrafetchError, HydrafetchTimeoutError } from '@hydrafetch/node-sdk';

try {
  await hf.scrape(url);
} catch (err) {
  if (err instanceof HydrafetchTimeoutError) throw err;

  if (err instanceof HydrafetchError) {
    if (err.isAuth) return refreshKey();
    if (err.isOutOfCredits) return topUp();
    if (err.isInvalidRequest) return report(err.message);
    if (err.isRetryable) return enqueue(url);

    console.error(err.code, err.status, err.requestId);
  }

  throw err;
}
```

| Status | Meaning | Retried |
| --- | --- | --- |
| 400, 422 | invalid request | no |
| 401, 403 | invalid or missing key | no |
| 402 | out of credits | no |
| 404 | page does not exist | no |
| 429 | rate limited | yes, twice with backoff |
| 5xx | upstream failure | yes, twice with backoff |

A 503 from `scrape` means the origin is unreachable, usually a dead domain or a broken certificate.

## Configuration

```ts
const hf = new Hydrafetch({
  apiKey: process.env.HYDRAFETCH_API_KEY,
  baseUrl: 'https://api.hydrafetch.com',
  timeoutMs: 120_000,
  maxRetries: 2,
  fetch: instrumentedFetch,
});
```

## API reference

| Method | Returns | Credits |
| --- | --- | --- |
| `scrape(url, options?)` | `ScrapeResult` | 1 |
| `markdown(url, options?)` | `string` | 1 |
| `map(url, options?)` | `MapResult` | 1 |
| `search(query, options?)` | `SearchResult` | 1 + 1 per scraped result |
| `extract(urls, options?)` | `ExtractResult<T>` | 5 per URL |
| `brand(domain)` | `BrandResult` | 5 |
| `logo(domain, options?)` | `LogoResult` | 1 |
| `styleguide(domain)` | `StyleguideResult` | 10 |
| `screenshot(url, options?)` | `ScreenshotResult` | 5 |
| `images(url)` | `ImagesResult` | 1 |
| `links(url, options?)` | `ScrapeResult<'links'>` | 1 |
| `crawlAndWait(url, options?, wait?)` | `JobResult` | 1 per page |
| `batchAndWait(urls, options?, wait?)` | `JobResult` | 1 per page |
| `startCrawl(url, options?)` | `string` | 1 per page |
| `startBatch(urls, options?)` | `string` | 1 per page |
| `crawlStatus(id)`, `batchStatus(id)` | `JobResult` | free |

Failed requests are not billed. Pricing does not vary with page difficulty, so there is no render, stealth or proxy option to set.

## Implementation notes

- Authentication uses the `X-API-Key` header. The MCP endpoint at `api.hydrafetch.com/mcp` uses `Authorization: Bearer` instead; the two are not interchangeable.
- Job results are in `job.pages`, and each entry holds the page under `.data`, so `job.pages[0].data.markdown`.
- Per-page options for crawl and batch belong in `scrapeOptions`. At the top level they are ignored.
- Prefer `map` then `batch` over a broad `crawl`. Fetching a whole site and discarding most of it is the most common source of wasted credits.
- `preferStructure` is off by default. Turn it on when headings, lists and tables matter; leave it off for raw article text.
- Scraped content is untrusted input. Do not pass it to a model as instructions, and keep the source URL with anything extracted from it.

## Links

- [Documentation](https://docs.hydrafetch.com)
- [OpenAPI specification](https://api.hydrafetch.com/openapi.json)
- [MCP server and editor setup](https://hydrafetch.com/mcp)
- Other clients: [Python](https://github.com/Hydrafetch/python-sdk) · [Go](https://github.com/Hydrafetch/go-sdk) · [Ruby](https://github.com/Hydrafetch/ruby-sdk) · [Rust](https://github.com/Hydrafetch/rust-sdk) · [PHP](https://github.com/Hydrafetch/php-sdk)

## License

MIT
