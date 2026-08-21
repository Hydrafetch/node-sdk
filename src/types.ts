export type Format =
  | 'markdown'
  | 'html'
  | 'rawHtml'
  | 'links'
  | 'structured'
  | 'summary'
  | 'json'
  | 'brand';

export interface Usage {
  creditsUsed: number;
  creditsRemaining: number;
  freshness?: string;
}

export interface PageMetadata {
  title?: string;
  description?: string;
  language?: string;
  [key: string]: unknown;
}

/** What each format puts on a scrape result. */
export interface ScrapeContent {
  markdown: string;
  html: string;
  rawHtml: string;
  links: string[];
  structured: unknown;
  summary: string;
  json: unknown;
  brand: BrandResult;
}

export interface ScrapeBase {
  url: string;
  /** Where the request landed after redirects. */
  finalUrl?: string;
  redirected?: boolean;
  status?: number;
  cached?: boolean;
  warning?: string;
  metadata?: PageMetadata;
  usage?: Usage;
  quality?: Record<string, unknown>;
}

/**
 * A scrape result, narrowed to the formats you asked for.
 *
 * The requested formats are required; every other format stays optional, so
 * `page.markdown` needs no null check when you asked for markdown.
 */
export type ScrapeResult<F extends Format = 'markdown'> = ScrapeBase &
  { [K in F]: ScrapeContent[K] } & Partial<Omit<ScrapeContent, F>>;

export interface ScrapeOptions<F extends readonly Format[] = readonly Format[]> {
  /** Which outputs to return. Defaults to `['markdown']`. */
  formats?: F;
  /** Serve a cached capture up to this many milliseconds old. */
  maxAge?: number;
  /** Only answer from cache; never fetch. */
  cacheOnly?: boolean;
  storeInCache?: boolean;
  /**
   * Keep headings, lists and tables. Off by default, which optimises for raw
   * content and can read as one unstructured blob on marketing and listing
   * pages — turn it on and retry when the structure matters.
   */
  preferStructure?: boolean;
  /** Drop navigation, footers and banners. */
  onlyMainContent?: boolean;
  includeTags?: string[];
  excludeTags?: string[];
  removeBase64Images?: boolean;
  blockAds?: boolean;
  includeLinks?: boolean;
  /** Milliseconds to wait after load before capturing. */
  waitFor?: number;
  /** Per-request ceiling in milliseconds. */
  timeout?: number;
  headers?: Record<string, string>;
  jsonOptions?: Record<string, unknown>;
}

export interface MapOptions {
  includeLinks?: boolean;
  limit?: number;
  search?: string;
  sitemap?: string;
  sitemapInclude?: string[];
  sitemapExclude?: string[];
  order?: string;
  includeSubdomains?: boolean;
  ignoreQueryParameters?: boolean;
}

export interface MapResult {
  url: string;
  links: string[];
  count: number;
  total?: number;
  truncated?: boolean;
}

export interface SearchOptions {
  limit?: number;
  /** Also fetch each result as markdown, at one extra credit per page. */
  scrapeResults?: boolean;
  scrapeOptions?: ScrapeOptions;
  timeRange?: string;
  country?: string;
  includeDomains?: string[];
  excludeDomains?: string[];
}

export interface SearchResultItem {
  title: string;
  url: string;
  snippet: string;
  rank: number;
  /** Populated only when `scrapeResults` was set. */
  data?: ScrapeResult;
}

export interface SearchResult {
  query: string;
  status?: string;
  results: SearchResultItem[];
}

export interface ExtractOptions {
  /** A JSON Schema the result must conform to. */
  schema?: Record<string, unknown>;
  /** Natural-language description of what to pull, instead of or alongside a schema. */
  prompt?: string;
  preferStructure?: boolean;
  enableWebSearch?: boolean;
  showSources?: boolean;
  showConfidence?: boolean;
  mergeEntities?: boolean;
  maxAge?: number;
}

export interface ExtractItem<T = unknown> {
  url: string;
  /** The extracted object, shaped by your schema. */
  data?: T;
  fields?: Record<string, unknown>;
  error?: string;
}

export interface ExtractResult<T = unknown> {
  /** One entry per URL, in the order you passed them. */
  results: ExtractItem<T>[];
  sources?: unknown[];
  /** Present when `mergeEntities` folded the pages into one record. */
  collection?: { data?: T; sources?: unknown[] }[];
}

export interface CrawlOptions {
  limit?: number;
  maxDepth?: number;
  includePaths?: string[];
  excludePaths?: string[];
  allowSubdomains?: boolean;
  /** Called on progress and completion instead of you polling. */
  webhook?: string;
  /** Per-page options. These do NOT go at the top level. */
  scrapeOptions?: ScrapeOptions;
}

export interface BatchOptions {
  webhook?: string;
  /** Per-page options. These do NOT go at the top level. */
  scrapeOptions?: ScrapeOptions;
}

export type JobStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

export interface JobPage {
  url: string;
  requestedUrl?: string;
  status: string;
  depth?: number;
  error?: string;
  errorCode?: string;
  retryable?: boolean;
  /** The page itself, once it succeeded. */
  data?: ScrapeResult;
}

export interface JobResult {
  id: string;
  kind?: 'crawl' | 'batch' | string;
  status: JobStatus | string;
  seedUrl?: string;
  total?: number;
  completed?: number;
  failed?: number;
  creditsUsed?: number;
  /** The per-page results. Note: `pages`, not `data`. */
  pages?: JobPage[];
}

export interface BrandOptions {
  /** The background the logo will sit on. */
  theme?: 'light' | 'dark' | 'auto';
  /** The square mark, or the full logotype. */
  type?: 'icon' | 'wordmark';
}

export interface BrandResult {
  domain?: string;
  name?: string;
  description?: string;
  logos?: Array<Record<string, unknown>>;
  colors?: Array<Record<string, unknown>>;
  fonts?: Array<Record<string, unknown>>;
  socials?: Record<string, string>;
  [key: string]: unknown;
}

export interface LogoResult {
  url?: string;
  domain?: string;
  theme?: string;
  type?: string;
  [key: string]: unknown;
}

export interface StyleguideResult {
  domain?: string;
  colors?: Record<string, unknown>;
  typography?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface ScreenshotOptions {
  /** Capture the whole scrollable page rather than the viewport. */
  fullPage?: boolean;
  waitFor?: number;
  timeout?: number;
  maxAge?: number;
  viewport?: { width: number; height: number };
}

export interface ScreenshotResult {
  url: string;
  finalUrl?: string;
  status?: number;
  /** Public URL of the captured PNG. */
  screenshot: string;
  screenshotType?: string;
  width?: number;
  height?: number;
  cached?: boolean;
}

export interface PageImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface ImagesResult {
  url: string;
  finalUrl?: string;
  images: PageImage[];
}

export interface WaitOptions {
  /** How long to keep polling before giving up. Default 300000. */
  timeoutMs?: number;
  /** Gap between polls. Default 2000. */
  pollIntervalMs?: number;
  /** Called after every poll, for progress reporting. */
  onProgress?: (job: JobResult) => void;
}
