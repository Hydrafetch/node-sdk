import type { components, operations } from './generated/api';

type Schemas = components['schemas'];
type ScrapeData = Schemas['WebScrapeDataDto'];

export type Format = NonNullable<Schemas['ScrapeRequestDto']['formats']>[number];

export type Usage = Schemas['WebUsageDto'];

export type PageMetadata = Schemas['WebScrapeMetadataDto'];

export type ScrapeContent = Required<Pick<ScrapeData, Format>>;

export type ScrapeBase = Omit<ScrapeData, Format>;

export type ScrapeResult<F extends Format = 'markdown'> = ScrapeBase & {
  [K in F]: ScrapeContent[K];
} & Partial<Omit<ScrapeContent, F>>;

export type Location = Schemas['LocationDto'];

export type ScrapeOptions<F extends readonly Format[] = readonly Format[]> = Omit<
  Schemas['ScrapeRequestDto'],
  'url' | 'formats' | 'async'
> & { formats?: F };

export type MapOptions = Omit<Schemas['MapRequestDto'], 'url'>;

export type MapLink = Schemas['MapUrlEntryDto'];

export type MapResult = Schemas['MapResultDto'];

export type SearchOptions = Omit<Schemas['SearchRequestDto'], 'query'>;

export type SearchResultItem = Schemas['SearchResultItemDto'];

export type SearchResult = Schemas['SearchResultDto'];

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

export type ExtractOptions = Omit<Schemas['ExtractRequestDto'], 'urls' | 'schema'> & {
  schema?: ExtractSchema;
};

export type ExtractItem<T = unknown> = Omit<Schemas['ExtractItemResultDto'], 'data'> & {
  data: T | null;
};

export type ExtractResult<T = unknown> = Omit<Schemas['ExtractResultDto'], 'results'> & {
  results: ExtractItem<T>[];
};

export type Webhook = Schemas['WebhookDto'];

export type CrawlOptions = Omit<Schemas['CrawlRequestDto'], 'url'>;

export type BatchOptions = Omit<Schemas['BatchRequestDto'], 'urls'>;

export type JobResult = Schemas['CrawlStatusResponseDto'];

export type JobStatus = JobResult['status'];

export type JobPage = Schemas['CrawlPageResultDto'];

export type BrandOptions = Omit<operations['brandLogo']['parameters']['query'], 'domain'>;

export type BrandResult = Schemas['WebBrandDataDto'];

export type LogoResult = Schemas['LogoDescriptionDto'];

export type StyleguideOptions = Omit<
  NonNullable<operations['styleguideGet']['parameters']['query']>,
  'domain' | 'url'
>;

export type StyleguideResult = Schemas['WebStyleguideDataDto'];

export type ScreenshotOptions = Omit<Schemas['ScreenshotRequestDto'], 'url'>;

export type ScreenshotResult = Schemas['WebScreenshotDataDto'];

export type PageImage = Schemas['WebImageDto'];

export type ImagesResult = Schemas['WebImagesDataDto'];

export interface WaitOptions {
  timeoutMs?: number;
  pollIntervalMs?: number;
  onProgress?: (job: JobResult) => void;
}

export type RateResultInput = Schemas['ResultFeedbackDto'];

export type ResultRating = RateResultInput['rating'];

export type ResultFeedbackReason = NonNullable<RateResultInput['reasons']>[number];

export type RateResultResponse = Schemas['ResultFeedbackDataDto'];

export type SearchJobsOptions = Omit<Schemas['JobsIndexSearchRequestDto'], 'query'>;

export type JobPay = Schemas['JobsIndexPayDto'];

export type OpenJob = Schemas['JobsIndexJobDto'];

export type HiringChangesOptions = Omit<Schemas['JobsIndexChangesRequestDto'], 'domains' | 'since'>;

export type HiringCounts = Schemas['JobsIndexCountsDto'];

export type HiringChangePosting = Schemas['JobsIndexChangePostingDto'];

export type CompanyHiringChanges = Schemas['JobsIndexCompanyChangesDto'];

export type NewsOptions = Omit<Schemas['NewsRequestDto'], 'query'>;

export type NewsTimeRange = NonNullable<NewsOptions['timeRange']>;

export type NewsArticle = Schemas['NewsResultItemDto'];

export type NewsResult = Schemas['NewsResultDto'];
