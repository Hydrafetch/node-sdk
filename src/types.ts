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
  finalUrl?: string;
  redirected?: boolean;
  status?: number;
  cached?: boolean;
  warning?: string;
  metadata?: PageMetadata;
  usage?: Usage;
  quality?: Record<string, unknown>;
}

export type ScrapeResult<F extends Format = 'markdown'> = ScrapeBase &
  { [K in F]: ScrapeContent[K] } & Partial<Omit<ScrapeContent, F>>;

export interface ScrapeOptions<F extends readonly Format[] = readonly Format[]> {
  formats?: F;
  maxAge?: number;
  cacheOnly?: boolean;
  storeInCache?: boolean;
  preferStructure?: boolean;
  onlyMainContent?: boolean;
  includeTags?: string[];
  excludeTags?: string[];
  removeBase64Images?: boolean;
  blockAds?: boolean;
  includeLinks?: boolean;
  waitFor?: number;
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
  data?: ScrapeResult;
}

export interface SearchResult {
  query: string;
  status?: string;
  results: SearchResultItem[];
}

/**
 * A standards-compliant JSON Schema, or a Zod schema you already have.
 *
 * Zod is not a dependency of this package and never will be: it is loaded only if you actually
 * pass one. The reason to pass one is `.describe()`. A field description reaches the model that
 * does the extraction, and on a page carrying several products or several dates it is what tells
 * the model which one you meant.
 */
export type ExtractSchema = Record<string, unknown> | ZodLike;

/** Structurally a Zod schema, without importing Zod to say so. */
export interface ZodLike {
  _zod?: unknown;
  _def?: unknown;
  parse?: (value: unknown) => unknown;
}

export interface ExtractOptions {
  schema?: ExtractSchema;
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
  data?: T;
  fields?: Record<string, unknown>;
  error?: string;
}

export interface ExtractResult<T = unknown> {
  results: ExtractItem<T>[];
  sources?: unknown[];
  collection?: { data?: T; sources?: unknown[] }[];
}

export interface CrawlOptions {
  limit?: number;
  maxDepth?: number;
  includePaths?: string[];
  excludePaths?: string[];
  allowSubdomains?: boolean;
  webhook?: string;
  scrapeOptions?: ScrapeOptions;
}

export interface BatchOptions {
  webhook?: string;
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
  pages?: JobPage[];
}

export interface BrandOptions {
  theme?: 'light' | 'dark' | 'auto';
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
  timeoutMs?: number;
  pollIntervalMs?: number;
  onProgress?: (job: JobResult) => void;
}
