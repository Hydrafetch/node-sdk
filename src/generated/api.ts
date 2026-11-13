export interface paths {
    "/v1/web/jobs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a job
         * @description Poll a call that answered 202. Completed jobs carry exactly the body the call returns when it answers in time; failed jobs carry the error it would have answered with. Results are kept for an hour.
         */
        get: operations["jobsGet"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/brand": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Resolve a brand
         * @description Everything needed to render a company: logos that suit light and dark backgrounds, its real colours, name, description and social presence. Resolved on the spot if we have never seen the domain, and served from storage after that. Every field states whether the company declared it or we harvested it.
         */
        get: operations["brandGet"];
        put?: never;
        /**
         * Resolve many brands
         * @description The same lookup for up to 50 domains at once. Only resolved brands are billed.
         */
        post: operations["brandBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/brand/logo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a company logo
         * @description The one asset most callers want, without the rest of the record: a direct image URL for the company's mark, chosen for the background you name. Cheaper than a full brand resolve. The image itself is public and immutable, so the URL can be embedded anywhere.
         */
        get: operations["brandLogo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/brand/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search brands
         * @description Find brands we already hold by company name or domain, so you can turn what a user typed into a domain and then resolve it. Returns the domain, name, primary logo and primary colour — enough to render a picker. Never resolves a new domain, and is not billed.
         */
        get: operations["brandSearch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/styleguide": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read a company's design system
         * @description The colours, type scale, corner radius, buttons and component treatments a site actually paints, read from computed styles in a real browser, so a value defined through four layers of CSS variables comes back as the hex it resolved to. Colours are given by role (background, surface, text, accent) with contrast ratios, plus the dark theme when the site has one, so they drop into a theme without guesswork. Panels, the header bar, tabs and dark bands come back as values and as paste-ready CSS. A render every time, which is why it costs more than a brand lookup; cached for weeks after the first call unless you pass `maxAge`.
         */
        get: operations["styleguideGet"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/scrape": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Scrape a URL
         * @description Fetch a single URL and return it in the formats you ask for. Waits up to 90 seconds (or your `timeout`) for the result; past that it answers 202 with a job id to poll at /v1/web/jobs/{id}, and the work carries on for up to 300 seconds. Set `async` to get the job id immediately.
         */
        post: operations["scrape"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/markdown": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Scrape to Markdown
         * @description Fetch a URL and return clean Markdown of its main content.
         */
        post: operations["scrapeMarkdown"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/html": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Scrape to HTML
         * @description Fetch a URL and return its cleaned main-content HTML.
         */
        post: operations["scrapeHtml"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/raw-html": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Scrape raw HTML
         * @description Fetch a URL and return its unmodified page HTML.
         */
        post: operations["scrapeRawHtml"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get a page's links
         * @description Fetch a URL and return its internal and external links.
         */
        post: operations["scrapeLinks"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/structured": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get structured data
         * @description Fetch a URL and return the page's own machine-authored structured data (JSON-LD, microdata, OpenGraph), normalised.
         */
        post: operations["scrapeStructured"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/scrape/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get scrape job status
         * @description Poll a scrape started with `async`.
         */
        get: operations["scrapeStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Harvest a page's images
         * @description Harvest all images from a page with their metadata.
         */
        post: operations["mediaImages"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/screenshot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Screenshot a page
         * @description Capture a full-page PNG screenshot of a rendered page.
         */
        post: operations["mediaScreenshot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/logo/{domain}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Serve a company logo
         * @description The image bytes for a domain, ready to drop into an `<img>` tag. Authenticated with a publishable key in the `token` parameter, so it is safe to put in a browser. A domain we have not seen yet answers with a monogram immediately and the real logo on the next request.
         */
        get: operations["logoServe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Map a site
         * @description Quickly enumerate a site's URLs without scraping them. Costs one credit.
         */
        post: operations["crawlMapUrls"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/crawl": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start a crawl
         * @description Discover and scrape a whole site as one asynchronous job. Returns a crawl id immediately; poll it or register a webhook. One credit per page scraped.
         */
        post: operations["crawlStartCrawl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start a batch
         * @description Scrape an explicit list of URLs as one asynchronous job. Returns a batch id immediately; poll it or register a webhook. One credit per URL scraped.
         */
        post: operations["crawlStartBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/crawl/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get crawl status
         * @description Poll a crawl for its progress and per-page results.
         */
        get: operations["crawlStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/batch/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get batch status
         * @description Poll a batch for its progress and per-URL results.
         */
        get: operations["crawlBatchStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/crawl/{id}/deliveries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webhook deliveries for a crawl
         * @description Every webhook callback we've attempted for this crawl, with its status, attempt count, and last response — so you can see whether and why a delivery failed.
         */
        get: operations["crawlDeliveries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/batch/{id}/deliveries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webhook deliveries for a batch
         * @description Every webhook callback we've attempted for this batch, with its status, attempt count, and last response — so you can see whether and why a delivery failed.
         */
        get: operations["crawlBatchDeliveries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search the web
         * @description Search the web for a query and get back ranked results: title, url and snippet. Costs 1 credit. Set `scrapeResults` to true to also fetch each result as clean data, which costs 1 additional credit per page scraped.
         */
        post: operations["searchRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/index/jobs/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search open jobs across company career sites
         * @description Search open jobs collected from company career sites and hiring platforms, by words in the title, with optional location, remote and posted-within filters. Newest first. Costs 1 credit per 10 jobs returned; a search with no jobs is free.
         */
        post: operations["jobsIndexSearch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/index/jobs/changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * What changed in a company's hiring
         * @description For each company website, what is open now and what opened and closed since a date, by department, seniority and location, with the postings themselves. Costs 1 credit per company we have jobs for; companies we do not track are free.
         */
        post: operations["jobsIndexChanges"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/news": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search the news
         * @description Find recent news articles about a query, newest first, each with its outlet and publish time. Costs 1 credit; a search that finds nothing is free. Set `scrapeResults` to true to also read each article as clean data, at 1 additional credit per article read.
         */
        post: operations["newsRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/extract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Extract structured data from URLs
         * @description Pull schema-shaped JSON out of one or many pages in a single call. An LLM maps each page onto your schema and/or prompt. Point at a single page, a list, or a crawl scope with a trailing `/*` wildcard; optionally let web search find extra source pages, return per-field confidence with the source passage behind each value, and merge everything into one deduplicated collection of entities. Charged per page that returns data.
         */
        post: operations["extractRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/web/feedback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rate a result
         * @description Tell us whether a result was accurate. Rate a request by its id (the X-Request-Id header) or by the URL it read. Rating the same request again replaces the earlier rating. Free.
         */
        post: operations["resultFeedbackRateResult"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CallJobErrorDto: {
            /** @example SERVICE_UNAVAILABLE */
            code: string;
            /** @example The origin served an anti-bot challenge rather than the page; retryable. */
            message: string;
            /**
             * @description The HTTP status the call would have answered with.
             * @example 503
             */
            status: number;
            details?: {
                [key: string]: unknown;
            };
        };
        CallJobStateDto: {
            /** @example 019f3c09-6fae-740f-9257-10c2b6af7f43 */
            jobId: string;
            /** @enum {string} */
            status: "running" | "completed" | "failed";
            /** @description When completed: exactly the body the call returns when it answers in time. */
            result?: {
                [key: string]: unknown;
            };
            error?: components["schemas"]["CallJobErrorDto"];
        };
        BrandNaicsSectorDto: {
            /** @example 52 */
            code: string;
            /** @example Finance and Insurance */
            title: string;
        };
        BrandNaicsDto: {
            /** @example 5223 */
            code: string;
            /** @example Activities Related to Credit Intermediation */
            title: string;
            /**
             * @description How specific the answer is. `industry_group` is the 4-digit level, `national_industry` the 6-digit one.
             * @example industry_group
             * @enum {string}
             */
            level: "sector" | "industry_group" | "national_industry";
            sector: components["schemas"]["BrandNaicsSectorDto"];
            /**
             * @description How much evidence the classification found, not a model's self-report.
             * @example 0.8
             */
            confidence: number;
        };
        BrandResolutionDto: {
            /** @example 180 */
            width: number;
            /** @example 180 */
            height: number;
            /**
             * @description Width over height — what a caller reserves layout space with.
             * @example 1
             */
            aspectRatio: number;
        };
        BrandColorDto: {
            /** @example #533afd */
            hex: string;
            /**
             * @description Nearest CSS colour name, so a swatch reads as something and not only as six digits.
             * @example Indigo
             */
            name?: string;
            /**
             * @description How much the site itself uses it — the ranking that makes this the brand's colour.
             * @example 0.42
             */
            weight: number;
            /**
             * @example primary
             * @enum {string}
             */
            role?: "primary" | "accent" | "background" | "text";
        };
        BrandAssetDto: {
            /**
             * @description What kind of mark this is.
             * @example symbol
             * @enum {string}
             */
            kind: "wordmark" | "symbol" | "favicon" | "backdrop";
            /**
             * @description Which background the asset is legible on. `mono` is a single-colour mark that works on both.
             * @example light
             * @enum {string}
             */
            variant: "light" | "dark" | "mono";
            /**
             * @description Public and immutable, so it can be embedded anywhere.
             * @example https://media.hydrafetch.com/brand/a0/a07c2695173dde0a1ffa.svg
             */
            url: string;
            /** @example svg */
            format: string;
            resolution: components["schemas"]["BrandResolutionDto"] | null;
            /** @description The colours in the asset itself. A logo's own palette is the brand's, by definition. */
            colors: components["schemas"]["BrandColorDto"][];
            /**
             * @description Tiny placeholder hash, so a client can render something before the image lands.
             * @example LmGk_aoh4sWHohWEWDt506WD?Sod
             */
            blurhash: string | null;
        };
        BrandFontDto: {
            /** @example Sohne */
            family: string;
            /**
             * @description How much of the site's type this face sets, 1 for the most-used one.
             * @example 1
             */
            weight: number;
            /**
             * @description Absent when the page does not say which the face is.
             * @example body
             * @enum {string}
             */
            role?: "heading" | "body";
        };
        BrandSocialDto: {
            /** @example x */
            platform: string;
            /** @example https://x.com/stripe */
            url: string;
            /**
             * @description The account name, without the `@`.
             * @example stripe
             */
            handle?: string;
        };
        BrandLinksDto: {
            /** @example https://stripe.com/pricing */
            pricing?: string;
            /** @example https://stripe.com/blog */
            blog?: string;
            /** @example https://stripe.com/jobs */
            careers?: string;
            /** @example https://stripe.com/contact */
            contact?: string;
            /** @example https://stripe.com/privacy */
            privacy?: string;
            /** @example https://stripe.com/legal */
            terms?: string;
            /** @example https://docs.stripe.com */
            docs?: string;
        };
        BrandFieldProvenanceDto: {
            /**
             * @description `declared` the site said it in its own markup. `harvested` we processed an asset or read its CSS. `inferred` we worked it out rather than read it, such as a name taken from the domain. `external` an enrichment source rather than the site.
             * @example declared
             * @enum {string}
             */
            source: "declared" | "harvested" | "inferred" | "external";
            /** @example 0.9 */
            confidence?: number;
        };
        BrandAddressDto: {
            /** @example 354 Oyster Point Blvd */
            street: string | null;
            /** @example South San Francisco */
            city: string | null;
            /** @example CA */
            region: string | null;
            /** @example 94080 */
            postalCode: string | null;
            /** @example US */
            country: string | null;
        };
        WebBrandDataDto: {
            /**
             * @description The canonical domain for this company.
             * @example stripe.com
             */
            domain: string;
            /**
             * @description Only when you asked for a different domain that resolved here.
             * @example stripe.co.uk
             */
            queriedDomain?: string;
            /** @description Only when this brand is known by more than its canonical domain. */
            aliases?: string[];
            /** @example Stripe */
            name: string | null;
            /** @example Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes. */
            description: string | null;
            /** @example Financial infrastructure to grow your revenue. */
            tagline: string | null;
            /** @description Industry, as a real NAICS code rather than a phrase nobody can group on. */
            naics?: components["schemas"]["BrandNaicsDto"];
            assets: components["schemas"]["BrandAssetDto"][];
            colors: components["schemas"]["BrandColorDto"][];
            fonts: components["schemas"]["BrandFontDto"][];
            socials: components["schemas"]["BrandSocialDto"][];
            links: components["schemas"]["BrandLinksDto"];
            /** @example support@stripe.com */
            email?: string;
            /** @example Stripe, Inc. */
            legalName?: string;
            /**
             * @description The site's own meta description, word for word.
             * @example Stripe powers online and in-person payment processing for businesses of all sizes.
             */
            metaDescription?: string;
            /**
             * @description A phone number the site publishes for the company.
             * @example +1 888 926 2289
             */
            phone?: string;
            /** @description The address the site publishes for the company. */
            address?: components["schemas"]["BrandAddressDto"];
            /**
             * @description The year the site says the company was founded.
             * @example 2010
             */
            foundedYear?: number;
            /** @description Per-field provenance, keyed by field name. Lets you tell "their markup says this" from "a model guessed this". */
            sources: {
                [key: string]: components["schemas"]["BrandFieldProvenanceDto"];
            };
            /** @example 2026-08-22T10:14:03.000Z */
            resolvedAt: string | null;
        };
        BrandResponseDto: {
            /** @description Null when the domain could not be resolved at all. Unresolved domains are free. */
            data: components["schemas"]["WebBrandDataDto"] | null;
        };
        CallAcceptedDto: {
            /** @example 019f3c09-6fae-740f-9257-10c2b6af7f43 */
            jobId: string;
            /**
             * @example running
             * @enum {string}
             */
            status: "running";
            /**
             * @description Poll this path until the status is completed or failed.
             * @example /v1/web/jobs/019f3c09-6fae-740f-9257-10c2b6af7f43
             */
            poll: string;
        };
        LogoDescriptionDto: {
            /** @example stripe.com */
            domain: string;
            /**
             * @description Public and immutable, so it can be embedded anywhere.
             * @example https://media.hydrafetch.com/brand/fe/fe927b2695157fca9fb3.webp
             */
            url: string;
            /** @example symbol */
            kind: string;
            /**
             * @example light
             * @enum {string}
             */
            variant: "light" | "dark" | "mono";
            /** @example webp */
            format: string;
            /** @example 180 */
            width: number | null;
            /** @example 180 */
            height: number | null;
            /** @example #543cfc */
            dominantColor: string | null;
            /** @example LmGk_aoh4sWHohWEWDt506WD?Sod */
            blurhash: string | null;
        };
        BrandLogoResponseDto: {
            /** @description Null when we hold no mark for the domain. A domain with no logo is free. */
            data: components["schemas"]["LogoDescriptionDto"] | null;
        };
        BrandSearchResultDto: {
            /** @example stripe.com */
            domain: string;
            /** @example Stripe */
            name: string | null;
            /**
             * @description The primary logo, so a picker can render a recognisable row.
             * @example https://media.hydrafetch.com/brand/a0/a07c2695173dde0a1ffa.svg
             */
            logo?: string;
            /**
             * @description The brand's primary colour.
             * @example #533afd
             */
            color?: string;
        };
        WebBrandSearchDataDto: {
            /** @example stripe */
            query: string;
            /** @description Best match first. */
            results: components["schemas"]["BrandSearchResultDto"][];
        };
        BrandSearchResponseDto: {
            data: components["schemas"]["WebBrandSearchDataDto"];
        };
        BrandBatchDto: {
            /**
             * @example [
             *       "stripe.com",
             *       "linear.app"
             *     ]
             */
            domains?: string[];
        };
        BrandBatchResponseDto: {
            /** @description One entry per requested domain, in the order you sent them. Null where unresolved. */
            data: components["schemas"]["WebBrandDataDto"][] | null;
        };
        StyleguideWebfontDto: {
            /**
             * @example custom
             * @enum {string}
             */
            type: "google" | "custom";
            /** @description Weight to file URL on the site's own servers, for a family that has no public source. The files are licensed to the site, so check the licence before linking to them. Empty for a Google family: use `stylesheet` instead. */
            files: {
                [key: string]: string;
            };
            /**
             * @description For a family published on Google Fonts, its Google stylesheet, even when the site hosts its own copy.
             * @example https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap
             */
            stylesheet?: string;
        };
        StyleguideColorDto: {
            /** @example #533afd */
            hex: string;
            /** @example Indigo */
            name?: string;
            /**
             * @description Roles rather than a ranked list, so a colour drops straight into a theme instead of leaving you to guess which one is safe behind text.
             * @example accent
             * @enum {string}
             */
            role: "background" | "surface" | "text" | "accent";
        };
        StyleguideDarkButtonDto: {
            /** @example #ededed */
            background: string;
            /** @example #0a0a0a */
            color?: string;
        };
        StyleguideContrastDto: {
            /**
             * @description Contrast ratio of text against background.
             * @example 21
             */
            textOnBackground?: number;
            /**
             * @description Whether that ratio clears WCAG AA.
             * @example true
             */
            meetsAA?: boolean;
            /** @example 6.19 */
            accentOnBackground?: number;
        };
        StyleguideDarkDto: {
            colors: components["schemas"]["StyleguideColorDto"][];
            button?: components["schemas"]["StyleguideDarkButtonDto"];
            contrast?: components["schemas"]["StyleguideContrastDto"];
        };
        StyleguidePanelBorderDto: {
            /** @example 2 */
            width?: number;
            /** @example solid */
            style?: string;
            /**
             * @description A hex color, or rgba() when the border is translucent.
             * @example #0f172a
             */
            color?: string;
        };
        StyleguideDecorationDto: {
            /**
             * @description A layer the site draws behind or beside its panels: a patterned image, a solid block or an outline, offset to read as a shadow.
             * @example pattern
             * @enum {string}
             */
            kind: "pattern" | "fill" | "outline";
            /** @example 8 */
            offsetX?: number;
            /** @example 8 */
            offsetY?: number;
            /**
             * @description The pattern's image on the site's own server. Recreate it rather than linking to it.
             * @example https://turbopuffer.com/dotted.svg
             */
            image?: string;
            /** @example #0f172a */
            color?: string;
        };
        StyleguidePanelDto: {
            border?: components["schemas"]["StyleguidePanelBorderDto"];
            /** @example 0px */
            radius?: string;
            /** @example #f9fafc */
            background?: string;
            /** @example rgba(0, 0, 0, 0.1) 0px 4px 12px 0px */
            shadow?: string;
            decoration?: components["schemas"]["StyleguideDecorationDto"];
            /**
             * @description Vertical then horizontal padding.
             * @example 24px 24px
             */
            padding?: string;
            /**
             * @description Text color inside the panel.
             * @example #0f172a
             */
            color?: string;
            /**
             * @description How many boxes on the page share this treatment.
             * @example 5
             */
            count?: number;
            /**
             * @description The panel as CSS declarations. A patterned decoration is not included; read `decoration` for it.
             * @example background-color: #f9fafc; border: 2px solid #0f172a; border-radius: 0px; padding: 24px 24px;
             */
            css?: string;
        };
        StyleguideHeaderBorderDto: {
            /** @example 1 */
            width?: number;
            /** @example rgba(255, 255, 255, 0.08) */
            color?: string;
        };
        StyleguideHeaderDto: {
            /** @example #0f172a */
            background: string;
            /** @example #ffffff */
            color?: string;
            /** @example 72 */
            height?: number;
            /**
             * @description Whether the bar stays pinned while the page scrolls.
             * @example true
             */
            sticky?: boolean;
            borderBottom?: components["schemas"]["StyleguideHeaderBorderDto"];
            /** @example background-color: #0f172a; color: #ffffff; height: 72px; position: sticky; top: 0; */
            css?: string;
        };
        StyleguideTabDto: {
            /** @example #f9fafc */
            background?: string;
            /** @example #0f172a */
            color: string;
            /** @example 600 */
            fontWeight?: string;
            /** @example 0px */
            radius?: string;
            border?: components["schemas"]["StyleguideHeaderBorderDto"];
            /** @description Absent with `border` set means the tab is open at the bottom, joined to the panel below. */
            borderBottom?: components["schemas"]["StyleguideHeaderBorderDto"];
            /** @example background-color: #f9fafc; color: #0f172a; border: 2px solid #0f172a; border-bottom: none; */
            css?: string;
        };
        StyleguideTabsDto: {
            /** @description The selected tab. */
            active?: components["schemas"]["StyleguideTabDto"];
            /** @description A tab that is not selected. */
            inactive?: components["schemas"]["StyleguideTabDto"];
        };
        StyleguideBandDto: {
            /** @example #0f172a */
            background: string;
            /** @example #ffffff */
            color?: string;
            /** @example 1 */
            count?: number;
        };
        StyleguideComponentsDto: {
            /** @description The treatment most large boxes on the page share: cards, panels, framed sections. */
            panel?: components["schemas"]["StyleguidePanelDto"];
            /** @description The top navigation bar. */
            header?: components["schemas"]["StyleguideHeaderDto"];
            /**
             * @description Where a panel's title sits: across its top border like a fieldset legend, inside its padding, or just above it.
             * @example on-border
             * @enum {string}
             */
            headingOnPanel?: "on-border" | "inside" | "above";
            /** @description How the selected and other tabs are drawn. */
            tabs?: components["schemas"]["StyleguideTabsDto"];
            /** @description A full-width section painted in a color far from the page, such as a dark hero band. */
            band?: components["schemas"]["StyleguideBandDto"];
        };
        StyleguideFontDto: {
            /**
             * @example body
             * @enum {string}
             */
            role: "h1" | "h2" | "h3" | "h4" | "body" | "link";
            /** @example sohne-var */
            family: string;
            /**
             * @description Computed size in pixels.
             * @example 16
             */
            size?: number;
            /** @example 400 */
            weight?: string | null;
            /** @example 24 */
            lineHeight?: number;
            /** @example normal */
            letterSpacing?: string;
            /** @description The rest of the declared stack, for rendering before the webfont arrives. */
            fallbacks?: string[];
        };
        StyleguideFontUsageDto: {
            /** @example sohne-var */
            family: string;
            /** @example 1840 */
            words: number;
            /** @example 92.4 */
            percentWords: number;
        };
        StyleguideRadiusDto: {
            /** @example 6px */
            default?: string;
            /** @example 6px */
            card?: string;
            /** @example 4px */
            button?: string;
        };
        StyleguideButtonBorderDto: {
            /** @example 1 */
            width: number;
            /** @example solid */
            style: string;
            /** @example #533afd */
            color: string | null;
        };
        StyleguideButtonDto: {
            /**
             * @description The fill. Absent on an outlined button, which has only a border.
             * @example #533afd
             */
            background?: string;
            /** @example #ffffff */
            color?: string | null;
            /** @example 4px */
            radius: string;
            /** @example 24 */
            paddingX?: number;
            /** @example 15.5 */
            paddingY?: number;
            /** @example 400 */
            fontWeight?: string | null;
            /** @example 16 */
            fontSize?: number;
            /**
             * @description Width of the sampled button as it rendered, not a minimum the site sets. A button centring its label with flex has no padding to report, so this is the size to copy.
             * @example 210
             */
            minWidth?: number;
            /**
             * @description Height of the sampled button as it rendered, not a minimum the site sets.
             * @example 48
             */
            minHeight?: number;
            border?: components["schemas"]["StyleguideButtonBorderDto"];
            /** @example rgba(23, 23, 23, 0.08) 0px 15px 35px 0px */
            shadow?: string;
            /**
             * @description The same button as CSS declarations you can paste into a rule.
             * @example background-color: #533afd; color: #ffffff; border-radius: 4px; padding: 15.5px 24px; font-size: 16px; min-height: 48px;
             */
            css?: string;
        };
        WebStyleguideDataDto: {
            /** @example stripe.com */
            domain: string;
            /**
             * @description The page that was read, when you asked for one with `url`.
             * @example https://stripe.com/pricing
             */
            page?: string;
            /**
             * @description Whether the page as first loaded is light or dark. `colors` describe this mode.
             * @example light
             * @enum {string}
             */
            mode?: "light" | "dark";
            /** @description The colors the site switches to when the visitor prefers a dark theme. Null means we checked and the site does not change, so do not invent a dark palette from it. Absent on guides read before we checked. */
            dark?: components["schemas"]["StyleguideDarkDto"] | null;
            /** @description How the parts are drawn, beyond the tokens: panel borders and decorative shadows, the header bar, and where headings sit on panels. This is what makes a site recognisable. */
            components?: components["schemas"]["StyleguideComponentsDto"];
            colors: components["schemas"]["StyleguideColorDto"][];
            typography: components["schemas"]["StyleguideFontDto"][];
            /** @description Keyed by family name. */
            webfonts?: {
                [key: string]: components["schemas"]["StyleguideWebfontDto"];
            };
            fontUsage?: components["schemas"]["StyleguideFontUsageDto"][];
            radius?: components["schemas"]["StyleguideRadiusDto"];
            /** @description Keyed by size, for example `sm`, `md`, `lg`. */
            shadows?: {
                [key: string]: string;
            };
            /** @description Keyed by step, for example `xs` through `xl`. */
            spacing?: {
                [key: string]: string;
            };
            button?: components["schemas"]["StyleguideButtonDto"];
            /** @description The second call to action, painted differently from the first, or outlined. */
            secondaryButton?: components["schemas"]["StyleguideButtonDto"];
            /** @description Whether you can put text on what we handed you. */
            contrast?: components["schemas"]["StyleguideContrastDto"];
            /** @example 2026-08-22T10:14:03.000Z */
            resolvedAt: string | null;
            /**
             * @description The same design as a stylesheet you can paste in: `@font-face` rules for the webfonts and a `:root` block of CSS variables for colors, fonts, the type scale, radius, shadows and spacing. Values that are not plain colors, lengths, font names or https font files are left out.
             * @example @font-face {
             *       font-family: "sohne-var";
             *       src: url("https://b.stripecdn.com/fonts/Sohne.woff2") format("woff2");
             *       font-weight: 400;
             *       font-display: swap;
             *     }
             *
             *     :root {
             *       --color-background: #ffffff;
             *       --color-accent: #533afd;
             *       --font-body: "sohne-var", sans-serif;
             *       --radius-button: 4px;
             *     }
             */
            css?: string;
            /**
             * @description The same tokens as a Tailwind CSS v4 stylesheet. Paste it as your main CSS file and classes such as `bg-accent`, `font-heading`, `text-h1`, `rounded-button` and `shadow-md` use the site's design.
             * @example @import "tailwindcss";
             *
             *     @theme {
             *       --color-accent: #533afd;
             *       --font-body: "sohne-var", sans-serif;
             *       --radius-button: 4px;
             *     }
             */
            tailwind?: string;
            /**
             * @description The colors, radius and fonts under shadcn/ui variable names (`--background`, `--foreground`, `--primary`, `--card`, `--muted`, `--border` and the rest). Replace the `:root` block in a shadcn project's globals.css with it.
             * @example :root {
             *       --background: #ffffff;
             *       --foreground: #0a2540;
             *       --primary: #533afd;
             *       --primary-foreground: #ffffff;
             *       --radius: 4px;
             *     }
             */
            shadcn?: string;
        };
        StyleguideResponseDto: {
            /** @description Null when the domain could not be rendered. An unresolved domain is free. */
            data: components["schemas"]["WebStyleguideDataDto"] | null;
        };
        LocationDto: {
            /**
             * @description Two-letter country to read the page from: `us` or `de`. Any other country is refused with a 400 that lists the supported codes.
             * @example us
             */
            country?: string;
            /**
             * @description Preferred content languages, most-preferred first.
             * @example [
             *       "en-US",
             *       "en"
             *     ]
             */
            languages?: string[];
        };
        JsonOptionsDto: {
            /** @description JSON Schema describing the shape you want the `json` format to return. */
            schema?: {
                [key: string]: unknown;
            };
            /**
             * @description Natural-language instruction for the `json` format. Use with or instead of a schema.
             * @example Extract the product name, price, and availability.
             */
            prompt?: string;
        };
        ScrapeRequestDto: {
            /**
             * @description The URL to scrape. Must be http(s); a bare domain such as example.com is read over https.
             * @example https://example.com
             */
            url: string;
            /** @description Serve from cache if a capture of this URL is younger than this many milliseconds. Omit for the default window, two days for a page and one hour for a feed; 0 always fetches fresh. Capped at 7 days. */
            maxAge?: number;
            /** @description Only serve from cache. If there is no fresh cached copy, return 404 instead of fetching. */
            cacheOnly?: boolean;
            /** @description Persist the capture for later re-extraction. Default true. */
            storeInCache?: boolean;
            /** @description Preserve document structure (headings, lists, tables) over prose density — good for marketing and service pages. Default off. */
            preferStructure?: boolean;
            /** @description Return a job id immediately instead of waiting for the result. Poll GET /v1/web/scrape/{id}. Opt in only: a synchronous call never degrades to a job id on its own, so you get a page or an error, not two response shapes. */
            async?: boolean;
            /** @description Return only the main content, dropping nav/boilerplate. Default true. */
            onlyMainContent?: boolean;
            /**
             * @description CSS selectors to keep. When set, only matching elements are considered.
             * @example [
             *       "article",
             *       "main"
             *     ]
             */
            includeTags?: string[];
            /**
             * @description CSS selectors to strip before extraction.
             * @example [
             *       ".ad",
             *       "#comments"
             *     ]
             */
            excludeTags?: string[];
            /** @description Strip inline base64 images from the output. Default true. */
            removeBase64Images?: boolean;
            /** @description Remove ads and tracking elements. Default true. */
            blockAds?: boolean;
            /** @description Remove cookie and consent banners. Default true. Set false to keep them; a banner the site adds with scripts after load is kept only when the page is rendered. */
            dismissCookies?: boolean;
            /** @description Close newsletter and promotion popups when the page is rendered. Default true. Set false to keep them. */
            dismissPopups?: boolean;
            /** @description Always read the page in a browser, as a visitor sees it once its scripts have run. Default false: the page is read in a browser only when its HTML is not enough. Combine with dismissCookies and dismissPopups set to false to keep what scripts add after load. */
            render?: boolean;
            /** @description Keep inline links in the markdown. By default links are kept wherever the page text carries them. Set true to keep them on every page, or false for the densest prose. */
            includeLinks?: boolean;
            /** @description Extra milliseconds to let the page settle before capture. */
            waitFor?: number;
            /** @description Overall time budget for the request, in milliseconds. */
            timeout?: number;
            location?: components["schemas"]["LocationDto"];
            /** @description Extra request headers to send when fetching the page. */
            headers?: {
                [key: string]: string;
            };
            /**
             * @description HTTP method to fetch the URL with. Use POST for endpoints that only answer a POST, such as JSON and GraphQL APIs. Defaults to GET.
             * @default GET
             * @enum {string}
             */
            method?: "GET" | "POST";
            /**
             * @description Request body, sent verbatim. Only used when `method` is POST. Set the content type yourself via `headers`; nothing is assumed about the format.
             * @example {"limit":25,"offset":0}
             */
            body?: string;
            /**
             * @description What to return. Omit for Markdown only. `structured` is the page's own data (no LLM, cheapest); `summary` and `json` are LLM-backed and cost more.
             * @example [
             *       "markdown"
             *     ]
             */
            formats?: ("markdown" | "html" | "rawHtml" | "links" | "structured" | "summary" | "json" | "brand")[];
            /** @description Schema and/or prompt for the `json` format. One is required when `json` is requested. */
            jsonOptions?: components["schemas"]["JsonOptionsDto"];
        };
        WebScrapeMetadataDto: {
            /**
             * @description The page title.
             * @example Example Domain
             */
            title: string | null;
            /**
             * @description Whether the content carries markdown structure (headings, lists, emphasis) or is plain prose. `plain` is not an error — the default extractor optimises for capturing every word and wins on listing and forum pages. If you need the structure, re-request with `preferStructure: true`.
             * @example markdown
             * @enum {string}
             */
            structure: "markdown" | "plain";
            /**
             * @description Coarse page classification (e.g. article, listing, forum, docs).
             * @example article
             */
            pageType: string;
            /**
             * @description Word count of the extracted main content.
             * @example 214
             */
            wordCount: number;
            /**
             * @description The page's own description (meta description / og:description).
             * @example A short summary of the page, as published by the page itself.
             */
            description: string | null;
            /**
             * @description The language the page declares.
             * @example en
             */
            language: string | null;
            /**
             * @description The declared author.
             * @example Jane Doe
             */
            author: string | null;
            /**
             * @description The declared site name.
             * @example Example Blog
             */
            siteName: string | null;
            /**
             * @description When the page says it was published (ISO 8601).
             * @example 2026-01-05
             */
            publishedTime: string | null;
            /**
             * @description When the page says it was last updated (ISO 8601).
             * @example 2026-02-11
             */
            modifiedTime: string | null;
            /**
             * @description The page's lead image (og:image).
             * @example https://example.com/cover.png
             */
            image: string | null;
        };
        WebUsageDto: {
            /**
             * @description Credits this call consumed. Charged only on success.
             * @example 1
             */
            creditsUsed: number;
            /**
             * @description Credits left in your workspace's balance after this call.
             * @example 4999
             */
            creditsRemaining: number;
            /**
             * @description Whether the result was served from cache or freshly fetched.
             * @example fresh
             * @enum {string}
             */
            freshness: "cache" | "fresh";
        };
        WebQualityDto: {
            /**
             * @description How trustworthy the extraction is, from 0 to 1. High when independent checks corroborate substantial content; near zero when the page yielded almost nothing.
             * @example 0.94
             */
            confidence: number;
            /**
             * @description Whether the result captured the bulk of the content available on the page. False when the result looks thin or truncated.
             * @example true
             */
            complete: boolean;
            /**
             * @description Whether the page appeared to be behind a challenge or bot wall.
             * @example false
             */
            blocked: boolean;
        };
        WebLinksDto: {
            /** @description Links pointing to the same site. */
            internal: string[];
            /** @description Links pointing to other sites. */
            external: string[];
        };
        WebStructuredEntityDto: {
            /**
             * @description The schema.org type of the entity.
             * @example Product
             */
            type: string;
            /**
             * @description Which structured-data syntax the entity came from.
             * @enum {string}
             */
            source: "json-ld" | "microdata" | "opengraph";
            /** @description The entity's properties, as published. */
            properties: {
                [key: string]: unknown;
            };
        };
        WebStructuredDataDto: {
            /** @description The page's own structured data, normalised into one deduplicated list of typed entities. */
            entities: components["schemas"]["WebStructuredEntityDto"][];
            /** @description Raw JSON-LD blocks, as found on the page. */
            jsonLd: Record<string, never>[];
            /** @description Raw microdata items. */
            microdata: Record<string, never>[];
            /** @description Raw OpenGraph/Twitter-card tags. */
            opengraph: Record<string, never>[];
            /** @description Names of embedded framework app-state blocks detected on the page. */
            appState: string[];
        };
        WebScrapeDataDto: {
            /**
             * @description The URL you requested.
             * @example https://example.com
             */
            url: string;
            /**
             * @description The final URL after any redirects.
             * @example https://example.com/
             */
            finalUrl: string;
            /**
             * @description Whether the origin redirected: true when `finalUrl` differs from the URL you requested. Explicit so a page with no redirect is distinguishable from one whose redirect was not tracked.
             * @example false
             */
            redirected: boolean;
            /**
             * @description HTTP status of the fetched page.
             * @example 200
             */
            status: number;
            /**
             * @description Whether this result was served from cache.
             * @example false
             */
            cached: boolean;
            /** @description Set when the page was returned with a caveat (e.g. partial content). */
            warning?: string;
            metadata: components["schemas"]["WebScrapeMetadataDto"];
            usage?: components["schemas"]["WebUsageDto"];
            /** @description Per-page extraction quality signals. */
            quality?: components["schemas"]["WebQualityDto"];
            /** @description Clean Markdown of the main content. Returned when `markdown` is requested. */
            markdown?: string;
            /** @description Cleaned main-content HTML. Returned when `html` is requested. */
            html?: string;
            /** @description The unmodified page HTML. Returned when `rawHtml` is requested. */
            rawHtml?: string;
            /** @description Returned when `links` is requested. */
            links?: components["schemas"]["WebLinksDto"];
            /** @description Returned when `structured` is requested. */
            structured?: components["schemas"]["WebStructuredDataDto"];
            /** @description A concise factual summary. Returned when `summary` is requested (LLM-backed). */
            summary?: string;
            /** @description Schema-shaped JSON. Returned when `json` is requested (LLM-backed). */
            json?: {
                [key: string]: unknown;
            };
            /** @description The site's brand: logos, colours and fonts. Returned when `brand` is requested. */
            brand?: components["schemas"]["WebBrandDataDto"];
        };
        ScrapeResponseDto: {
            data: components["schemas"]["WebScrapeDataDto"];
        };
        ScrapeFormatRequestDto: {
            /**
             * @description The URL to scrape. Must be http(s); a bare domain such as example.com is read over https.
             * @example https://example.com
             */
            url: string;
            /** @description Serve from cache if a capture of this URL is younger than this many milliseconds. Omit for the default window, two days for a page and one hour for a feed; 0 always fetches fresh. Capped at 7 days. */
            maxAge?: number;
            /** @description Only serve from cache. If there is no fresh cached copy, return 404 instead of fetching. */
            cacheOnly?: boolean;
            /** @description Persist the capture for later re-extraction. Default true. */
            storeInCache?: boolean;
            /** @description Preserve document structure (headings, lists, tables) over prose density — good for marketing and service pages. Default off. */
            preferStructure?: boolean;
            /** @description Return a job id immediately instead of waiting for the result. Poll GET /v1/web/scrape/{id}. Opt in only: a synchronous call never degrades to a job id on its own, so you get a page or an error, not two response shapes. */
            async?: boolean;
            /** @description Return only the main content, dropping nav/boilerplate. Default true. */
            onlyMainContent?: boolean;
            /**
             * @description CSS selectors to keep. When set, only matching elements are considered.
             * @example [
             *       "article",
             *       "main"
             *     ]
             */
            includeTags?: string[];
            /**
             * @description CSS selectors to strip before extraction.
             * @example [
             *       ".ad",
             *       "#comments"
             *     ]
             */
            excludeTags?: string[];
            /** @description Strip inline base64 images from the output. Default true. */
            removeBase64Images?: boolean;
            /** @description Remove ads and tracking elements. Default true. */
            blockAds?: boolean;
            /** @description Remove cookie and consent banners. Default true. Set false to keep them; a banner the site adds with scripts after load is kept only when the page is rendered. */
            dismissCookies?: boolean;
            /** @description Close newsletter and promotion popups when the page is rendered. Default true. Set false to keep them. */
            dismissPopups?: boolean;
            /** @description Always read the page in a browser, as a visitor sees it once its scripts have run. Default false: the page is read in a browser only when its HTML is not enough. Combine with dismissCookies and dismissPopups set to false to keep what scripts add after load. */
            render?: boolean;
            /** @description Keep inline links in the markdown. By default links are kept wherever the page text carries them. Set true to keep them on every page, or false for the densest prose. */
            includeLinks?: boolean;
            /** @description Extra milliseconds to let the page settle before capture. */
            waitFor?: number;
            /** @description Overall time budget for the request, in milliseconds. */
            timeout?: number;
            location?: components["schemas"]["LocationDto"];
            /** @description Extra request headers to send when fetching the page. */
            headers?: {
                [key: string]: string;
            };
            /**
             * @description HTTP method to fetch the URL with. Use POST for endpoints that only answer a POST, such as JSON and GraphQL APIs. Defaults to GET.
             * @default GET
             * @enum {string}
             */
            method?: "GET" | "POST";
            /**
             * @description Request body, sent verbatim. Only used when `method` is POST. Set the content type yourself via `headers`; nothing is assumed about the format.
             * @example {"limit":25,"offset":0}
             */
            body?: string;
        };
        ScrapeStatusResponseDto: {
            /**
             * @description Job state.
             * @example completed
             * @enum {string}
             */
            status: "waiting" | "active" | "completed" | "failed";
            /** @description Present when completed. */
            data?: components["schemas"]["WebScrapeDataDto"];
            /** @description Present when the job failed. */
            error?: string;
        };
        ImagesRequestDto: {
            /**
             * @description The URL to harvest images from. Must be http(s).
             * @example https://example.com
             */
            url: string;
            /** @description Serve from cache if a capture of this URL is younger than this many milliseconds. Omit for the default window; 0 always fetches fresh. Capped at 7 days. */
            maxAge?: number;
        };
        WebImageDto: {
            /**
             * @description The image URL, resolved to absolute.
             * @example https://example.com/logo.png
             */
            src: string;
            /**
             * @description The image alt text, if any.
             * @example Company logo
             */
            alt: string | null;
            /**
             * @description The image width in pixels, if declared.
             * @example 320
             */
            width: number | null;
            /**
             * @description The image height in pixels, if declared.
             * @example 240
             */
            height: number | null;
        };
        WebImagesDataDto: {
            /**
             * @description The URL you requested.
             * @example https://example.com
             */
            url: string;
            /**
             * @description The final URL after any redirects.
             * @example https://example.com/
             */
            finalUrl: string;
            /** @description Every image found on the page, with its metadata. */
            images: components["schemas"]["WebImageDto"][];
        };
        ImagesResponseDto: {
            data: components["schemas"]["WebImagesDataDto"];
        };
        ScreenshotRequestDto: {
            /**
             * @description The URL to screenshot. Must be http(s).
             * @example https://example.com
             */
            url: string;
            /**
             * @description Capture the entire scrollable page instead of just the viewport. Default off.
             * @example true
             */
            fullPage?: boolean;
            /** @description Extra milliseconds to let the page settle before capture. */
            waitFor?: number;
            /** @description Overall time budget for the request, in milliseconds. */
            timeout?: number;
            /** @description Reuse a stored screenshot if it is younger than this many milliseconds. Defaults to 7 days, so a repeated request returns the stored PNG with `cached: true` without re-rendering — which also means it returns immediately and does not apply `waitFor`. Pass 0 to force a fresh capture. */
            maxAge?: number;
            /**
             * @description Screen size to render at. Defaults to desktop (1920x1080). Ignored when width/height are given explicitly.
             * @example desktop
             * @enum {string}
             */
            viewport?: "desktop" | "laptop" | "tablet" | "mobile";
            /** @description Exact viewport width in pixels. Overrides `viewport`. */
            viewportWidth?: number;
            /** @description Exact viewport height in pixels. Overrides `viewport`. With fullPage the capture still extends to the full page height. */
            viewportHeight?: number;
            /** @description Accept cookie and consent banners before the capture. Default true. Set false to capture them. */
            dismissCookies?: boolean;
            /** @description Clear popups and overlays covering the page before the capture. Default true. Set false to capture them. */
            dismissPopups?: boolean;
        };
        WebScreenshotDataDto: {
            /**
             * @description The URL you requested.
             * @example https://example.com
             */
            url: string;
            /**
             * @description The final URL after any redirects.
             * @example https://example.com/
             */
            finalUrl: string;
            /**
             * @description HTTP status of the captured page.
             * @example 200
             */
            status: number;
            /**
             * @description Public URL of the captured PNG. Stable for the same URL and options.
             * @example https://media.hydrafetch.com/screenshots/a1/a1b2c3.png
             */
            screenshot: string;
            /**
             * @description Whether the capture covers the whole scrollable page or just the viewport.
             * @example viewport
             * @enum {string}
             */
            screenshotType: "fullPage" | "viewport";
            /**
             * @description Image width in pixels.
             * @example 1920
             */
            width: number;
            /**
             * @description Image height in pixels.
             * @example 1080
             */
            height: number;
            /**
             * @description True when a stored screenshot was reused instead of capturing a new one.
             * @example false
             */
            cached: boolean;
        };
        ScreenshotResponseDto: {
            data: components["schemas"]["WebScreenshotDataDto"];
        };
        MapRequestDto: {
            /**
             * @description The site whose URLs you want to enumerate. Must be http(s).
             * @example https://example.com
             */
            url: string;
            /**
             * @description Also include same-site links found on the starting page, not just the site's page list.
             * @example true
             */
            includeLinks?: boolean;
            /**
             * @description Maximum number of URLs to return.
             * @example 1000
             */
            limit?: number;
            /**
             * @description Keep only discovered URLs containing this term.
             * @example pricing
             */
            search?: string;
            /**
             * @description Whether to use the site's published page list: skip it, include it alongside discovered links, or use it only.
             * @example include
             * @enum {string}
             */
            sitemap?: "skip" | "include" | "only";
            /**
             * @description On sitemap-index sites, only descend into sub-sitemaps whose URL contains one of these comma-separated terms (case-insensitive). E.g. "post" to target article sitemaps.
             * @example post
             */
            sitemapInclude?: string;
            /**
             * @description Skip sub-sitemaps whose URL contains any of these comma-separated terms (case-insensitive). Compose with sitemapInclude — e.g. include "post" + exclude "tag,category,author" avoids WordPress taxonomy sitemaps (post_tag-sitemap, …-taxonomies-post_tag-*) that also contain "post".
             * @example tag,category,author
             */
            sitemapExclude?: string;
            /**
             * @description Sort order by sitemap lastmod. "newest" (default) returns the most recent URLs first — the wanted end of a large archive under the limit. URLs without a lastmod sort last.
             * @default newest
             * @enum {string}
             */
            order?: "newest" | "oldest" | "sitemap";
            /**
             * @description Cursor for paging a large archive newest→oldest: return only URLs with lastmod at or before this ISO timestamp. Page by passing the oldest lastmod from the previous page; dedupe by url across pages.
             * @example 2024-06-01T00:00:00Z
             */
            before?: string;
            /**
             * @description Skip the first N results (in the sorted order) then return the next `limit`. Pagination for sources with no lastmod (WordPress-core), where the date cursor can't apply. Page sequentially (0, limit, 2·limit, …) so the sub-sitemap cache keeps deep pages fast.
             * @example 5000
             */
            offset?: number;
            /**
             * @description Also include URLs on subdomains of the site. Default off.
             * @example false
             */
            includeSubdomains?: boolean;
            /**
             * @description Treat URLs that differ only by query string as one. Default off.
             * @example false
             */
            ignoreQueryParameters?: boolean;
        };
        MapUrlEntryDto: {
            /** @example https://example.com/blog/hello */
            url: string;
            /**
             * @description The <lastmod> from the sitemap, if present. null for links found on the page.
             * @example 2026-05-01T12:00:00Z
             */
            lastmod: string | null;
        };
        MapResultDto: {
            /**
             * @description The site you requested.
             * @example https://example.com
             */
            url: string;
            /** @description The site's discovered URLs, each with its sitemap lastmod (null when unknown). */
            links: components["schemas"]["MapUrlEntryDto"][];
            /**
             * @description How many URLs were returned.
             * @example 2
             */
            count: number;
            /**
             * @description Total URLs in the enumeration this page is a slice of. Page with `offset` until offset+count reaches this — do not infer the end from a short page.
             * @example 9051
             */
            total: number;
            /**
             * @description Whether enumeration hit its ceiling or time budget. When true, `total` is a floor rather than the real size of the site.
             * @example false
             */
            truncated: boolean;
        };
        MapResponseDto: {
            data: components["schemas"]["MapResultDto"];
        };
        WebhookDto: {
            /**
             * @description The URL to POST events to. Must be a public http(s) URL — private, loopback, and link-local addresses are rejected.
             * @example https://your-app.com/hooks/hydrafetch
             */
            url: string;
            /**
             * @description Which events to receive. `page` fires as each page finishes; `completed` fires once when the job ends. Defaults to both.
             * @example [
             *       "page",
             *       "completed"
             *     ]
             */
            events?: ("page" | "completed")[];
            /**
             * @description Extra headers to send with each callback, e.g. for authentication.
             * @example {
             *       "Authorization": "Bearer your-token"
             *     }
             */
            headers?: {
                [key: string]: string;
            };
            /**
             * @description A shared secret. When set, each callback carries an X-Hydrafetch-Signature header you can verify to prove the request came from us and is not a replay.
             * @example whsec_a_long_random_string
             */
            secret?: string;
        };
        ScrapeOptionsDto: {
            /**
             * @description What to return per page. Omit for Markdown only.
             * @example [
             *       "markdown"
             *     ]
             */
            formats?: ("markdown" | "html" | "rawHtml" | "links" | "structured")[];
            /** @description Return only the main content, dropping boilerplate. Default true. */
            onlyMainContent?: boolean;
            /** @description CSS selectors to keep. */
            includeTags?: string[];
            /** @description CSS selectors to strip before extraction. */
            excludeTags?: string[];
            /** @description Strip inline base64 images. Default true. */
            removeBase64Images?: boolean;
            /** @description Remove ads and tracking elements. Default true. */
            blockAds?: boolean;
            /** @description Remove cookie and consent banners. Default true. Set false to keep them; a banner the site adds with scripts after load is kept only when the page is rendered. */
            dismissCookies?: boolean;
            /** @description Close newsletter and promotion popups when the page is rendered. Default true. Set false to keep them. */
            dismissPopups?: boolean;
            /** @description Always read the page in a browser, as a visitor sees it once its scripts have run. Default false: the page is read in a browser only when its HTML is not enough. Combine with dismissCookies and dismissPopups set to false to keep what scripts add after load. */
            render?: boolean;
            /** @description Keep inline links in the markdown. By default links are kept wherever the page text carries them. Set true to keep them on every page, or false for the densest prose. */
            includeLinks?: boolean;
            /** @description Extra milliseconds to let the page settle before capture. */
            waitFor?: number;
            /** @description Per-page time budget, in milliseconds. */
            timeout?: number;
            location?: components["schemas"]["LocationDto"];
            /** @description Extra request headers to send when fetching each page. */
            headers?: {
                [key: string]: string;
            };
            /** @description Preserve document structure over prose density. Default off. */
            preferStructure?: boolean;
            /** @description Serve a page from cache if younger than this many milliseconds. */
            maxAge?: number;
        };
        CrawlRequestDto: {
            /**
             * @description The site to start from. Must be http(s).
             * @example https://example.com
             */
            url: string;
            /**
             * @description Maximum number of pages to scrape.
             * @example 100
             */
            limit?: number;
            /**
             * @description How many links deep from the starting page to follow.
             * @example 2
             */
            maxDepth?: number;
            /**
             * @description Only follow URLs whose path matches every one of these patterns.
             * @example [
             *       "^/blog/.*"
             *     ]
             */
            includePaths?: string[];
            /**
             * @description Skip URLs whose path matches any of these patterns.
             * @example [
             *       "^/tag/.*"
             *     ]
             */
            excludePaths?: string[];
            /**
             * @description Also follow links into subdomains of the starting site. Default off.
             * @example false
             */
            allowSubdomains?: boolean;
            /**
             * @description Also follow links that lead off the starting site. Default off.
             * @example false
             */
            allowExternalLinks?: boolean;
            /**
             * @description Treat URLs that differ only by query string as the same page. Default off.
             * @example false
             */
            ignoreQueryParameters?: boolean;
            /**
             * @description Whether to seed discovery from the site's published page list. Default includes it.
             * @example include
             * @enum {string}
             */
            sitemap?: "skip" | "include";
            /** @description Register a callback to be notified as the crawl progresses instead of polling. */
            webhook?: components["schemas"]["WebhookDto"];
            /** @description How to scrape each page. Same options as a single scrape. */
            scrapeOptions?: components["schemas"]["ScrapeOptionsDto"];
        };
        CrawlAcceptedDto: {
            /**
             * @description Poll this crawl id for progress and results.
             * @example 019f3c09-6fae-740f-9257-10c2b6af7f43
             */
            crawlId: string;
            /**
             * @description The job has been accepted.
             * @example queued
             * @enum {string}
             */
            status: "queued";
        };
        BatchRequestDto: {
            /**
             * @description The explicit list of URLs to scrape. Each must be http(s).
             * @example [
             *       "https://example.com/a",
             *       "https://example.com/b"
             *     ]
             */
            urls: string[];
            /** @description Register a callback to be notified as the batch progresses instead of polling. */
            webhook?: components["schemas"]["WebhookDto"];
            /** @description How to scrape each URL. Same options as a single scrape. */
            scrapeOptions?: components["schemas"]["ScrapeOptionsDto"];
        };
        BatchAcceptedDto: {
            /**
             * @description Poll this batch id for progress and results.
             * @example 019f3c09-6fae-740f-9257-10c2b6af7f43
             */
            batchId: string;
            /**
             * @description The job has been accepted.
             * @example queued
             * @enum {string}
             */
            status: "queued";
        };
        CrawlPageResultDto: {
            /**
             * @description The page URL.
             * @example https://example.com/blog/post
             */
            url: string;
            /**
             * @description For a batch, the URL exactly as you sent it, present only when it differed from `url` after normalisation (a trailing slash or #fragment). A batch always returns one entry per URL you submitted, in order, including duplicates — so you can match results back to your input list positionally.
             * @example https://example.com/blog/post/
             */
            requestedUrl?: string;
            /**
             * @description State of this page.
             * @example completed
             * @enum {string}
             */
            status: "queued" | "running" | "completed" | "failed";
            /**
             * @description How many links deep this page was from the start.
             * @example 1
             */
            depth: number;
            /**
             * @description How this URL entered the job. `requested` is a URL you gave us, meaning the crawl seed or a batch entry. `sitemap` came from the site's sitemap, `link` from following a link on a page we had already fetched.
             * @example sitemap
             * @enum {string}
             */
            discoveredVia: "requested" | "sitemap" | "link";
            /** @description Human-readable failure message. Set when this page failed. */
            error: string | null;
            /**
             * @description Stable machine-readable failure code. Set when this page failed.
             * @example TOO_MANY_REQUESTS
             */
            errorCode: string | null;
            /**
             * @description When failed: true if it gave up after real retries (transient — safe to re-submit), false if a terminal failure.
             * @example false
             */
            retryable: boolean | null;
            /** @description The scraped page, once completed. */
            data: components["schemas"]["WebScrapeDataDto"] | null;
        };
        CrawlStatusResponseDto: {
            /**
             * @description The crawl or batch id.
             * @example 019f3c09-6fae-740f-9257-10c2b6af7f43
             */
            id: string;
            /**
             * @description Which kind of job this is.
             * @example crawl
             * @enum {string}
             */
            kind: "crawl" | "batch";
            /**
             * @description Overall job state.
             * @example running
             * @enum {string}
             */
            status: "running" | "completed" | "failed" | "cancelled";
            /**
             * @description The starting URL, for a crawl.
             * @example https://example.com
             */
            seedUrl: string | null;
            /**
             * @description Total pages in this job.
             * @example 100
             */
            total: number;
            /**
             * @description Pages scraped so far.
             * @example 42
             */
            completed: number;
            /**
             * @description Pages that failed.
             * @example 1
             */
            failed: number;
            /**
             * @description Credits consumed so far. One per scraped page.
             * @example 42
             */
            creditsUsed: number;
            /** @description Per-page status and results. */
            pages: components["schemas"]["CrawlPageResultDto"][];
        };
        CrawlStatusEnvelopeDto: {
            data: components["schemas"]["CrawlStatusResponseDto"];
        };
        WebhookDeliveryDto: {
            /** @example 019f3c09-6fae-740f-9257-10c2b6af7f43 */
            id: string;
            /**
             * @description The event this delivery carried.
             * @example crawl.completed
             */
            event: string;
            /**
             * @description pending while retries remain, success once delivered, failed once given up.
             * @example success
             * @enum {string}
             */
            status: "pending" | "success" | "failed";
            /**
             * @description How many delivery attempts have been made.
             * @example 2
             */
            attempts: number;
            /**
             * @description HTTP status your endpoint returned on the last attempt.
             * @example 200
             */
            responseStatus: number | null;
            /**
             * @description Why the last attempt failed, if it did.
             * @example connect ETIMEDOUT
             */
            error: string | null;
            /** @description When the delivery succeeded (ISO 8601). */
            deliveredAt: string | null;
            /** @description When the delivery was first created (ISO 8601). */
            createdAt: string;
        };
        WebhookDeliveriesResponseDto: {
            deliveries: components["schemas"]["WebhookDeliveryDto"][];
        };
        SearchRequestDto: {
            /**
             * @description What to search the web for.
             * @example best open source vector databases
             */
            query: string;
            /**
             * @description How many ranked results to return. Omit for the default.
             * @example 5
             */
            limit?: number;
            /**
             * @description When true, each result also comes back with its page fetched and returned as clean data, at 1 additional credit per page scraped. Defaults to false, which returns just the ranked title, url and snippet for the flat search credit.
             * @example false
             */
            scrapeResults?: boolean;
            scrapeOptions?: components["schemas"]["ScrapeOptionsDto"];
            /**
             * @description Restrict results to a recency window relative to now.
             * @example week
             * @enum {string}
             */
            timeRange?: "day" | "week" | "month" | "year";
            /**
             * @description ISO 3166 alpha-2 country code to bias results toward a region.
             * @example us
             */
            country?: string;
            /**
             * @description Only return results from these domains.
             * @example [
             *       "github.com",
             *       "arxiv.org"
             *     ]
             */
            includeDomains?: string[];
            /**
             * @description Drop results from these domains.
             * @example [
             *       "pinterest.com"
             *     ]
             */
            excludeDomains?: string[];
        };
        SearchResultItemDto: {
            /**
             * @description The result title.
             * @example Best open source vector databases
             */
            title: string;
            /**
             * @description The result URL.
             * @example https://example.com/vector-databases
             */
            url: string;
            /**
             * @description A short snippet describing the result.
             * @example A rundown of the leading open source vector databases and how they compare.
             */
            snippet: string;
            /**
             * @description The result's position in the ranked list.
             * @example 1
             */
            rank: number;
            /** @description The scraped page for this result, or null when scraping is off or unavailable. */
            data: components["schemas"]["WebScrapeDataDto"] | null;
        };
        SearchResultDto: {
            /**
             * @description The query you searched.
             * @example best open source vector databases
             */
            query: string;
            /**
             * @description Whether the search found anything: `ok` when it returned results, `no_results` when the web had no match. An empty `results` with `no_results` is a real miss — if the search cannot be completed at all, the request fails with 503 rather than returning an empty list.
             * @example ok
             * @enum {string}
             */
            status: "ok" | "no_results";
            /** @description The ranked results. */
            results: components["schemas"]["SearchResultItemDto"][];
        };
        SearchResponseDto: {
            data: components["schemas"]["SearchResultDto"];
        };
        JobsIndexSearchRequestDto: {
            /**
             * @description Words to find in the job title. Every word must appear.
             * @example data engineer
             */
            query: string;
            /**
             * @description A city, region or country the job location must mention.
             * @example Berlin
             */
            location?: string;
            /**
             * @description Only jobs marked remote.
             * @example false
             */
            remoteOnly?: boolean;
            /**
             * @description Only jobs posted in the last N days.
             * @example 7
             */
            postedWithinDays?: number;
            /**
             * @description How many jobs to return, newest first. Defaults to 10.
             * @example 10
             */
            limit?: number;
            /**
             * @description Include each job description when we have it.
             * @example false
             */
            includeDescriptions?: boolean;
        };
        JobsIndexPayDto: {
            /** @example 70000 */
            min: number | null;
            /** @example 90000 */
            max: number | null;
            /** @example EUR */
            currency: string | null;
            /** @example year */
            interval: string | null;
        };
        JobsIndexJobDto: {
            /** @example Senior Data Engineer */
            title: string;
            /** @example Acme */
            company: string | null;
            /**
             * @description The company's website.
             * @example acme.com
             */
            domain: string;
            /**
             * @description The hiring platform the job is posted on.
             * @example greenhouse
             */
            board: string;
            /** @example Engineering */
            department: string | null;
            /** @example Berlin, Germany */
            location: string | null;
            /** @example false */
            remote: boolean | null;
            /** @example Full-time */
            employmentType: string | null;
            /** @example 2026-11-01T00:00:00.000Z */
            postedAt: string | null;
            /**
             * @description When we first saw it open.
             * @example 2026-11-01T06:00:00.000Z
             */
            firstSeenAt: string;
            /** @description Link to the employer's posting. */
            url: string | null;
            /** @description Direct apply link, when different. */
            applyUrl: string | null;
            pay: components["schemas"]["JobsIndexPayDto"] | null;
            /** @description Present when includeDescriptions is true. */
            description?: string | null;
        };
        JobsIndexSearchResponseDto: {
            data: components["schemas"]["JobsIndexJobDto"][];
        };
        JobsIndexChangesRequestDto: {
            /**
             * @description Company websites to report on.
             * @example [
             *       "stripe.com"
             *     ]
             */
            domains: string[];
            /**
             * @description Report changes since this time, at most about 400 days back.
             * @example 2026-11-01T00:00:00Z
             */
            since: string;
            /**
             * @description Include the description of each newly opened job when we have it.
             * @example false
             */
            includeDescriptions?: boolean;
        };
        JobsIndexCountsDto: {
            /**
             * @description Open now.
             * @example 42
             */
            open: number;
            /**
             * @description Opened since the date.
             * @example 6
             */
            opened: number;
            /**
             * @description Closed since the date.
             * @example 3
             */
            closed: number;
        };
        JobsIndexChangePostingDto: {
            title: string;
            department: string | null;
            location: string | null;
            /**
             * @description intern, junior, mid, senior, lead, manager, director, vp or c-level, from the title.
             * @example senior
             */
            seniority: string;
            board: string;
            url: string | null;
            postedAt: string | null;
            firstSeenAt: string;
            closedAt: string | null;
            description?: string | null;
        };
        JobsIndexCompanyChangesDto: {
            /** @example acme.com */
            domain: string;
            /** @example Acme */
            company: string | null;
            /** @description When we last read the company. */
            lastReadAt: string | null;
            since: string;
            totals: components["schemas"]["JobsIndexCountsDto"];
            byDepartment: {
                [key: string]: components["schemas"]["JobsIndexCountsDto"];
            };
            bySeniority: {
                [key: string]: components["schemas"]["JobsIndexCountsDto"];
            };
            /** @description The top locations by open jobs. */
            byLocation: {
                [key: string]: components["schemas"]["JobsIndexCountsDto"];
            };
            /** @description Newest first, up to 200. */
            opened: components["schemas"]["JobsIndexChangePostingDto"][];
            /** @description Newest first, up to 200. */
            closed: components["schemas"]["JobsIndexChangePostingDto"][];
            /** @description True when the company had more postings than one call reports. */
            truncated: boolean;
        };
        JobsIndexChangesResponseDto: {
            data: components["schemas"]["JobsIndexCompanyChangesDto"][];
        };
        NewsRequestDto: {
            /**
             * @description What to find news about.
             * @example startup raises series A
             */
            query: string;
            /**
             * @description How many articles to return, newest first.
             * @default 10
             * @example 10
             */
            limit?: number;
            /**
             * @description Only articles published within this window before now.
             * @default week
             * @example week
             * @enum {string}
             */
            timeRange?: "hour" | "day" | "week" | "month";
            /**
             * @description Accept a recent answer to the same search no older than this many milliseconds. Leave it out to accept answers up to 5 minutes old for `hour`, 15 for `day` and 30 for `week` or `month`. `0` always searches fresh.
             * @example 0
             */
            maxAge?: number;
            /**
             * @description ISO 3166 alpha-2 country code to lean results toward that edition.
             * @example us
             */
            country?: string;
            /**
             * @description Only return articles from these sites.
             * @example [
             *       "techcrunch.com"
             *     ]
             */
            includeDomains?: string[];
            /**
             * @description Drop articles from these sites.
             * @example [
             *       "prnewswire.com"
             *     ]
             */
            excludeDomains?: string[];
            /**
             * @description When true, each article also comes back with its page read and returned as clean data, at 1 additional credit per article read.
             * @example false
             */
            scrapeResults?: boolean;
            scrapeOptions?: components["schemas"]["ScrapeOptionsDto"];
        };
        NewsResultItemDto: {
            /**
             * @description The headline.
             * @example Acme raises $45M in Series A round
             */
            title: string;
            /**
             * @description The article's address on the publisher's own site.
             * @example https://example.com/news/acme-series-a
             */
            url: string;
            /**
             * @description The outlet that published it.
             * @example Example News
             */
            source: string | null;
            /**
             * @description When it was published. Exact when the listing gives a time, otherwise worked out from its stated age, such as 2 days ago.
             * @example 2026-11-03T09:12:00.000Z
             */
            publishedAt: string;
            /**
             * @description A short summary of the article.
             * @example The startup raised $45 million to expand into Europe.
             */
            snippet: string | null;
            /** @description The article read as clean data, or null when `scrapeResults` is off or the page could not be read. */
            data: components["schemas"]["WebScrapeDataDto"] | null;
        };
        NewsResultDto: {
            /**
             * @description The query you searched.
             * @example startup raises series A
             */
            query: string;
            /**
             * @description `ok` when articles were found, `no_results` when none matched in the window. If news cannot be searched at all, the request fails with 503 rather than returning an empty list.
             * @example ok
             * @enum {string}
             */
            status: "ok" | "no_results";
            /** @description Articles, newest first. */
            results: components["schemas"]["NewsResultItemDto"][];
        };
        NewsResponseDto: {
            data: components["schemas"]["NewsResultDto"];
        };
        ExtractRequestDto: {
            /**
             * @description The pages to extract from. Each must be an http(s) URL. A trailing `/*` marks a crawl scope: every page discovered under that path is extracted and merged into the result.
             * @example [
             *       "https://example.com/products/widget",
             *       "https://example.com/products/*"
             *     ]
             */
            urls: string[];
            /** @description JSON Schema describing the shape you want back. Optional if `prompt` is given; when both are present the schema fixes the field names and types while the prompt guides what to pull. */
            schema?: {
                [key: string]: unknown;
            };
            /**
             * @description Natural-language instruction for what to extract. Use with or instead of a schema.
             * @example Pull the product name, price in USD, and whether it is in stock.
             */
            prompt?: string;
            /** @description Preserve document structure (headings, lists, tables) over prose density when reading the page — good for listing and catalog pages. Default off. */
            preferStructure?: boolean;
            /** @description Pull in extra source pages by web-searching your prompt, to fill fields your URLs do not cover. Requires a `prompt`. */
            enableWebSearch?: boolean;
            /** @description Return the concrete list of URLs that were actually extracted, after any wildcard and web-search expansion. Default off. */
            showSources?: boolean;
            /** @description For each field, return a confidence score and the exact source passage the value was drawn from. Default off. */
            showConfidence?: boolean;
            /** @description Merge the per-page results into one deduplicated collection — one row per entity, with its contributing source URLs — instead of a separate result per page. Default off. */
            mergeEntities?: boolean;
            /** @description Reuse a recent capture of each page if it is younger than this many milliseconds. Omit or 0 to always fetch fresh. Capped at 7 days. */
            maxAge?: number;
            /** @description Fetch each page as if from this country and with these preferred languages, for sites that change prices or content by region. */
            location?: components["schemas"]["LocationDto"];
            /**
             * @description Extra request headers to send when fetching each page, such as a cookie that picks the store or delivery area a site prices by.
             * @example {
             *       "Cookie": "store_id=1234"
             *     }
             */
            headers?: {
                [key: string]: string;
            };
        };
        FieldProvenanceDto: {
            /**
             * @description How certain the value is correct given the page, from 0 to 1.
             * @example 0.92
             */
            confidence: number;
            /**
             * @description The exact short passage the value was drawn from, or an empty string if none.
             * @example Priced at $49.00 with free shipping.
             */
            evidence: string;
        };
        ExtractItemResultDto: {
            /**
             * @description The page this result came from.
             * @example https://example.com/products/widget
             */
            url: string;
            /** @description The extracted data, shaped by your schema and/or prompt. Null when nothing matched. */
            data: {
                [key: string]: unknown;
            } | null;
            /** @description Per-field confidence and source passage, keyed by field name. Present only when `showConfidence` is set. */
            fields?: {
                [key: string]: components["schemas"]["FieldProvenanceDto"];
            };
            /**
             * @description Set when this page could not be extracted; null on success.
             * @example null
             */
            error: string | null;
        };
        MergedEntityDto: {
            /** @description The unioned data for one entity, filled across every contributing page. */
            data: {
                [key: string]: unknown;
            };
            /** @description Every source URL that contributed to this entity. */
            sources: string[];
        };
        ExtractResultDto: {
            /** @description One result per extracted page. */
            results: components["schemas"]["ExtractItemResultDto"][];
            /** @description The concrete URLs actually extracted, after wildcard and web-search expansion. Present only when `showSources` is set. */
            sources?: string[];
            /** @description The deduplicated collection, one row per entity. Present only when `mergeEntities` is set. */
            collection?: components["schemas"]["MergedEntityDto"][];
        };
        ExtractResponseDto: {
            data: components["schemas"]["ExtractResultDto"];
        };
        ResultFeedbackDto: {
            /**
             * Format: uuid
             * @description The request being rated: the X-Request-Id response header, or usage.requestId from an MCP tool. Give this or url.
             */
            requestId?: string;
            /** @description The URL that was read, when the request id is not to hand. Rates the latest request for it in the last 24 hours. */
            url?: string;
            /**
             * @description Whether the result was accurate.
             * @enum {string}
             */
            rating: "good" | "bad";
            /** @description What was wrong, for a bad rating. */
            reasons?: ("missing_content" | "wrong_content" | "blocked" | "slow" | "formatting" | "other")[];
            /** @description More detail, in your own words. */
            note?: string;
        };
        ResultFeedbackDataDto: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            requestId: string;
            /** @enum {string} */
            rating: "good" | "bad";
        };
        ResultFeedbackResponseDto: {
            data: components["schemas"]["ResultFeedbackDataDto"];
        };
        WebErrorBody: {
            /**
             * @description Stable, machine-readable reason. Branch on this rather than on the message, which may be reworded.
             * @example INSUFFICIENT_CREDITS
             * @enum {string}
             */
            code: "VALIDATION_ERROR" | "INVALID_INPUT" | "UNAUTHORIZED" | "INSUFFICIENT_CREDITS" | "FORBIDDEN" | "WORKSPACE_BANNED" | "NOT_FOUND" | "TOO_MANY_REQUESTS" | "UPSTREAM_UNREACHABLE" | "SERVICE_UNAVAILABLE" | "INTERNAL_SERVER_ERROR";
            /**
             * @description Human-readable explanation. Safe to show a user, not to parse.
             * @example Insufficient credits
             */
            message: string;
            /** @description Optional machine-readable context, present on validation failures. */
            details?: {
                [key: string]: unknown;
            };
        };
        WebErrorMeta: {
            /**
             * @description Quote this when contacting support about a specific failure.
             * @example 019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c
             */
            requestId?: string;
        };
        /** @description Every failure on this API returns this shape, whatever the status. Successful responses never carry it. */
        WebError: {
            /**
             * @example false
             * @enum {boolean}
             */
            success: false;
            error: components["schemas"]["WebErrorBody"];
            meta: components["schemas"]["WebErrorMeta"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    jobsGet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job id from the 202 answer. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallJobStateDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    brandGet: {
        parameters: {
            query: {
                /** @description Domain to resolve. A URL works too. */
                domain: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resolved brand. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BrandResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    brandBatch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BrandBatchDto"];
            };
        };
        responses: {
            /** @description One entry per requested domain, in the order you sent them. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BrandBatchResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    brandLogo: {
        parameters: {
            query: {
                /** @description Domain to fetch the logo for. A URL works too. */
                domain: string;
                /** @description The background you are drawing on. `auto` prefers a single-colour mark. */
                theme?: "light" | "dark" | "auto";
                /** @description The square mark, or the full wordmark. */
                type?: "icon" | "wordmark";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The chosen logo, or null when we have no mark for the domain. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BrandLogoResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    brandSearch: {
        parameters: {
            query: {
                /** @description Company name or domain to search for. */
                query: string;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Matching brands, best match first. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BrandSearchResponseDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    styleguideGet: {
        parameters: {
            query?: {
                /** @description Domain to read the design system from, using its homepage. Send this or `url`. */
                domain?: string;
                /** @description One page to read instead of the homepage, for a section styled differently from the rest of the site. Send this or `domain`. */
                url?: string;
                /** @description Accept a stored result no older than this many milliseconds. 0 reads the page fresh. Defaults to 30 days for a domain and 7 days for a page. */
                maxAge?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The design system. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StyleguideResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    scrape: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScrapeRequestDto"];
            };
        };
        responses: {
            /** @description The scraped page. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScrapeResponseDto"];
                };
            };
            /** @description Still running after the wait; poll the job id at /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    scrapeMarkdown: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScrapeFormatRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScrapeResponseDto"];
                };
            };
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    scrapeHtml: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScrapeFormatRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScrapeResponseDto"];
                };
            };
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    scrapeRawHtml: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScrapeFormatRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScrapeResponseDto"];
                };
            };
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    scrapeLinks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScrapeFormatRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScrapeResponseDto"];
                };
            };
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    scrapeStructured: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScrapeFormatRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScrapeResponseDto"];
                };
            };
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    scrapeStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job id returned by the scrape call. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScrapeStatusResponseDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    mediaImages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImagesRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImagesResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    mediaScreenshot: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScreenshotRequestDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScreenshotResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    logoServe: {
        parameters: {
            query: {
                fallback?: "monogram" | "404" | "transparent";
                type?: "icon" | "wordmark";
                theme?: "light" | "dark" | "auto";
                /** @description Longest edge in pixels. Bounds the placeholder; a stored logo is served as-is. */
                size?: unknown;
                /** @description Your publishable key. */
                token: unknown;
            };
            header?: never;
            path: {
                domain: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The logo. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    crawlMapUrls: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MapRequestDto"];
            };
        };
        responses: {
            /** @description The discovered URLs. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MapResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    crawlStartCrawl: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CrawlRequestDto"];
            };
        };
        responses: {
            /** @description The crawl was accepted. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CrawlAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    crawlStartBatch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BatchRequestDto"];
            };
        };
        responses: {
            /** @description The batch was accepted. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    crawlStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The crawl id returned when the crawl started. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CrawlStatusEnvelopeDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    crawlBatchStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The batch id returned when the batch started. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CrawlStatusEnvelopeDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    crawlDeliveries: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The crawl id. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookDeliveriesResponseDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    crawlBatchDeliveries: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The batch id. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookDeliveriesResponseDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    searchRun: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchRequestDto"];
            };
        };
        responses: {
            /** @description The ranked search results. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    jobsIndexSearch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["JobsIndexSearchRequestDto"];
            };
        };
        responses: {
            /** @description Matching open jobs. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JobsIndexSearchResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    jobsIndexChanges: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["JobsIndexChangesRequestDto"];
            };
        };
        responses: {
            /** @description Hiring changes per company. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JobsIndexChangesResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    newsRun: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NewsRequestDto"];
            };
        };
        responses: {
            /** @description Matching articles, newest first. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NewsResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    extractRun: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExtractRequestDto"];
            };
        };
        responses: {
            /** @description The extracted data. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExtractResponseDto"];
                };
            };
            /** @description Still running; poll /v1/web/jobs/{id}. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallAcceptedDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
    resultFeedbackRateResult: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResultFeedbackDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResultFeedbackResponseDto"];
                };
            };
            /** @description The request body or query failed validation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "VALIDATION_ERROR",
                     *         "message": "url must be a valid URL"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The X-API-Key header is missing, malformed, or names a key that no longer exists. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UNAUTHORIZED",
                     *         "message": "Missing X-API-Key header. Agents: https://hydrafetch.com/auth.md"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace has no credits left for this request. Nothing was charged and nothing was fetched. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INSUFFICIENT_CREDITS",
                     *         "message": "Insufficient credits"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The key is valid but the workspace may not make this request. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "WORKSPACE_BANNED",
                     *         "message": "This workspace has been suspended and cannot make API requests."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description No such job, or the id belongs to another workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "NOT_FOUND",
                     *         "message": "Job not found"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The target site did not respond, or we could not read that page. This is a fact about that URL rather than a fault on our side, and retrying it will not change the answer. When details.retryAfterSeconds is present, asking again before then returns this same answer. Nothing was charged. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "UPSTREAM_UNREACHABLE",
                     *         "message": "The origin did not respond to any attempt we made."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description The workspace exceeded its per-minute request limit. Read the RateLimit headers, or Retry-After on this response, and retry after the window resets. */
            429: {
                headers: {
                    /** @description Seconds to wait before retrying. Prefer this over a fixed backoff. */
                    "Retry-After"?: number;
                    /** @description Requests remaining (r) and seconds until the window resets (t). */
                    RateLimit?: string;
                    /** @description The quota (q) for your plan and the window it applies over (w), in seconds. */
                    "RateLimit-Policy"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "TOO_MANY_REQUESTS",
                     *         "message": "Rate limit exceeded for this workspace and plan."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description Unexpected server error. Nothing was charged. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "INTERNAL_SERVER_ERROR",
                     *         "message": "Internal server error"
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
            /** @description A dependency needed for the requested formats is unavailable. Safe to retry. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "success": false,
                     *       "error": {
                     *         "code": "SERVICE_UNAVAILABLE",
                     *         "message": "The summary and json formats are not available."
                     *       },
                     *       "meta": {
                     *         "requestId": "019e8a3c-9f0b-7c12-88ab-1d2e3f4a5b6c"
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["WebError"];
                };
            };
        };
    };
}
