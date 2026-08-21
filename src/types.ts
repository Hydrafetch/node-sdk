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

export interface ScrapeOptions {
  /** Serve a cached capture up to this many milliseconds old. */
  maxAge?: number;
  cacheOnly?: boolean;
  storeInCache?: boolean;
  /**
   * Keep headings, lists and tables. Off by default, which optimises for raw content
   * and can return unstructured text on marketing and listing pages.
   */
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
  formats?: Format[];
  jsonOptions?: Record<string, unknown>;
}

export interface ScrapeResult {
  url: string;
  finalUrl?: string;
  redirected?: boolean;
  status?: number;
  cached?: boolean;
  warning?: string;
  metadata?: PageMetadata;
  usage?: Usage;
  quality?: Record<string, unknown>;
  markdown?: string;
  html?: string;
  rawHtml?: string;
  links?: string[];
  structured?: unknown;
  summary?: string;
  json?: unknown;
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
  title?: string;
  url: string;
  snippet?: string;
  markdown?: string;
  [key: string]: unknown;
}

export interface SearchResult {
  query: string;
  status?: string;
  results: SearchResultItem[];
}

export interface ExtractOptions {
  schema?: Record<string, unknown>;
  prompt?: string;
  preferStructure?: boolean;
  enableWebSearch?: boolean;
  showSources?: boolean;
  showConfidence?: boolean;
  mergeEntities?: boolean;
  maxAge?: number;
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

export type JobStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | string;

export interface JobHandle {
  id: string;
  status: JobStatus;
}

export interface JobResult<T = ScrapeResult> {
  id?: string;
  status: JobStatus;
  total?: number;
  completed?: number;
  creditsUsed?: number;
  data?: T[];
  [key: string]: unknown;
}

export interface BrandOptions {
  theme?: 'light' | 'dark' | 'auto';
  type?: 'icon' | 'wordmark';
}

export interface ScreenshotOptions {
  fullPage?: boolean;
  waitFor?: number;
  timeout?: number;
  maxAge?: number;
  viewport?: { width: number; height: number };
}

export interface WaitOptions {
  /** How long to keep polling before giving up. Default 300000 (5 minutes). */
  timeoutMs?: number;
  /** Gap between polls. Default 2000. */
  pollIntervalMs?: number;
  /** Called after every poll, for progress reporting. */
  onProgress?: (job: JobResult) => void;
}
