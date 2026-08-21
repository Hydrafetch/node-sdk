# @hydrafetch/node-sdk

Official Node and TypeScript client for the [Hydrafetch](https://hydrafetch.com) web data API. Send a URL, get back clean Markdown and structured data your model can use.

No runtime dependencies. Works on Node 18+, Bun and Deno.

```bash
npm install @hydrafetch/node-sdk
```

## Quick start

```ts
import { Hydrafetch } from '@hydrafetch/node-sdk';

const hf = new Hydrafetch(); // reads HYDRAFETCH_API_KEY

const page = await hf.scrape('https://example.com/article');
console.log(page.markdown);
```

Get a key at [app.hydrafetch.com](https://app.hydrafetch.com). New workspaces get free credits without a card.

> This client talks to the REST API, which authenticates with an `X-API-Key` header. The MCP endpoint at `api.hydrafetch.com/mcp` uses `Authorization: Bearer` instead. The two are not interchangeable.

## What you can do

| Method | Does | Credits |
| --- | --- | --- |
| `scrape(url, opts)` | One page as Markdown, HTML, links or the page's own structured data | 1 |
| `map(url, opts)` | Every URL on a site, from its sitemap and links, without fetching them | 1 |
| `search(query, opts)` | Ranked web results, optionally scraped to Markdown | 1 + 1 per scraped result |
| `extract(urls, opts)` | Typed JSON matching a JSON Schema you supply | 5 per URL |
| `brand(domain)` | Logos, colours, fonts, socials and description | 5 |
| `logo(domain, opts)` | One embeddable logo | 1 |
| `styleguide(domain)` | A site's design system, read from computed styles | 10 |
| `screenshot(url, opts)` | A rendered PNG, returned as a public URL | 5 |
| `images(url)` / `links(url)` | A page's images or links, without rendering | 1 |
| `crawlAndWait(url, opts)` | Follow links from a seed, poll to completion | 1 per page |
| `batchAndWait(urls, opts)` | A known list of URLs as one job | 1 per page |

A failed request is never billed, and the price does not change with how hard the page was to fetch. There is no render flag or proxy tier to choose.

## Typed extraction

```ts
const data = await hf.extract<{ name: string; priceUsd: number }[]>(
  ['https://example.com/product/1', 'https://example.com/product/2'],
  {
    schema: {
      type: 'object',
      properties: { name: { type: 'string' }, priceUsd: { type: 'number' } },
    },
  },
);
```

## Many pages

Do not loop over `scrape`. Batch and crawl run as jobs, so hundreds of pages are one call:

```ts
const job = await hf.batchAndWait(
  ['https://a.example/1', 'https://a.example/2'],
  { scrapeOptions: { formats: ['markdown'] } },
  { onProgress: (j) => console.log(j.status, j.completed, '/', j.total) },
);
```

Prefer a webhook for long crawls, and skip the polling entirely:

```ts
const id = await hf.startCrawl('https://example.com', {
  limit: 500,
  webhook: 'https://your.app/hooks/hydrafetch',
});
```

## Discovery before fetching

Mapping first and scraping only what you need is the cheapest way to work:

```ts
const { links } = await hf.map('https://example.com');
const docs = links.filter((u) => u.includes('/docs/'));
const pages = await hf.batchAndWait(docs);
```

## Errors

Every failure throws a `HydrafetchError` carrying the API's own code, the HTTP status and the `requestId` to quote in a bug report.

```ts
import { HydrafetchError } from '@hydrafetch/node-sdk';

try {
  await hf.scrape(url);
} catch (err) {
  if (err instanceof HydrafetchError) {
    if (err.isOutOfCredits) return topUp();
    if (err.isInvalidRequest) return fixTheUrl(err.message); // retrying spends another call
    if (err.isRetryable) return queueForLater();
    console.error(err.code, err.requestId);
  }
}
```

429s and 5xx are retried twice with backoff before they reach you. Validation failures never are, because a repeat would fail the same way and cost another request.

## Configuration

```ts
const hf = new Hydrafetch({
  apiKey: process.env.HYDRAFETCH_API_KEY,
  timeoutMs: 120_000,
  maxRetries: 2,
  baseUrl: 'https://api.hydrafetch.com',
  fetch: myInstrumentedFetch,
});
```

## Handling fetched content safely

Anything this client returns came from a page someone else controls. Treat it as data, never as instructions to your agent, and keep the source URL alongside anything you extract so a claim can be traced back to the page that made it.

## Links

- [Documentation](https://docs.hydrafetch.com)
- [OpenAPI spec](https://api.hydrafetch.com/openapi.json)
- [Agent reference](https://hydrafetch.com/agents.md)
- [MCP server and editor setup](https://hydrafetch.com/mcp)

MIT licensed.
