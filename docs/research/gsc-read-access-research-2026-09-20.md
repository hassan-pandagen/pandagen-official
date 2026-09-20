# GSC read access: repository comparison and coverage plan

Researched 20 September 2026. Request: broad read access without repeated screenshots, no property edits. No software installed, OAuth grant created, or Google account connected during this research. Repository documentation and selected source were reviewed; no end-to-end authentication or security audit was performed.

## Recommendation

Use a small local, read-only GSC MCP with credentials minted for `https://www.googleapis.com/auth/webmasters.readonly`, plus an authenticated browser for reports Google does not expose through its public API. Start with jurgisgavenas/search-console-mcp as an inspectable base, not a claim of mature production certification. Pin and test the selected revision before connecting private data. More MCP tools do not create more underlying GSC data.

## Candidates

| Repository | Reviewed capabilities | Decision |
| --- | --- | --- |
| https://github.com/jurgisgavenas/search-console-mcp | Five read tools covering sites, performance, sitemap list/detail and URL inspection. Inspected server.py and mint_token.py. Performance exposes dimensions, filters, row limit, offset and data state. Auth helper explicitly requests readonly scope. | Best minimal base for this request. Very short visible history (two commits); not an established reliability record. No explicit aggregationType parameter in inspected wrapper; could be added if needed. Runtime and Windows credential permissions still require testing. |
| https://github.com/sudomichael/search-console-mcp | Read-only scope; performance, period comparison, batched inspection and analysis prompts. Inspected auth.ts and index.ts as well as README. Own OAuth client override supported. | Convenient alternative, but Windows auth launcher uses spawn('start', ...) without a shell/error listener in the inspected source: potential Windows problem, not a reproduced failure. Login redirects browser to a vendor success page; do not repeat a literal claim that no third-party page is contacted. No evidence found in inspected auth code that credentials are sent to that page. |
| https://github.com/saurabhsharma2u/search-console-mcp | Broad documented GSC/Bing/GA4/AdSense suite and derived SEO analysis. Read and write tools coexist. README describes AI-query detection as heuristic, not official AI citation data. | Useful broader-suite candidate; not preferred out of the box for strictly read-only GSC. Must restrict credentials and tool surface before use. More analysis does not unlock GSC Links, Crawl Stats or complete coverage reports. Do not treat its 'instantly indexes' description as a guarantee. |
| https://github.com/ahonn/mcp-server-gsc | Documented query/page filtering, regex and performance analysis. | Performance-focused; README does not establish the inspection coverage needed here. |
| https://github.com/surendranb/google-search-console-mcp | Performance, inspection, sitemaps and site listing, plus sitemap writes. Telemetry documented with opt-out. | Broader controls than needed. README's real-time inspection wording must not be interpreted as Google's live URL test. |
| https://github.com/crunchtools/mcp-google-search-console | GSC API coverage, browser OAuth and streamable HTTP deployment instructions; sitemap/site management. README requests full webmasters scope. | Remote deployment option, not simplest read-only local choice; additional configuration/review needed. |
| https://github.com/wyattxmgmt/google-search-console-mcp-server | Search analytics, inspection, sitemap reads/writes, OAuth/service accounts. | Same GSC data families, no special route to otherwise unavailable dashboard reports. |

The inspected jurgis source comment claims that requesting readonly scopes downscopes previously broader credentials. Do not rely on that comment as a universal OAuth guarantee: issue a fresh grant with only readonly scope and verify granted scopes. The auth helper does request only that scope.

## Coverage

Google's complete API resource list: https://developers.google.com/webmaster-tools/v1/api_reference_index

| Desired data | Route and limits |
| --- | --- |
| Clicks, impressions, CTR, average position | Search Analytics API, with dates and page/query/country/device/searchAppearance dimensions. |
| Query-to-landing-page mapping | Request page and query together, preserving date range and filters. Separate page/query tables cannot establish that relationship. |
| Country and locale comparisons | Country filters plus page paths for /fr and /de. GSC has no direct content-language dimension in this API. |
| Cannibalization candidates, gains/losses, low CTR | Derived from real performance rows. Two pages appearing for a query does not automatically prove harmful cannibalization. |
| Per-URL indexing, canonical and last crawl | URL Inspection API; stored Google index information, not a live crawl. |
| Submitted sitemaps and details | Sitemaps API read operations. |
| Full Page Indexing dashboard, its reason tables and examples | Authenticated GSC browser/export. Batch inspection of known sitemap/repository URLs is useful but is not a complete list of every URL Google knows. |
| Links report, Crawl Stats, manual actions and security reports | Authenticated browser/export: no corresponding public endpoint in Google's documented Search Console API. |
| GSC Core Web Vitals grouped report | Browser/export. CrUX API provides related field measurements, but not an exact reproduction of GSC grouping. PageSpeed/Lighthouse is a separate lab measurement. |
| Leads, conversions, revenue after the click | Separate GA4/CRM/payment data; not GSC metrics. |

## Limits and data handling

- Search Analytics returns at most 25,000 rows per request; startRow supports pagination. It does not guarantee every row. Google documents 50,000 performance rows per day per search type per property. Fetch day-sized slices when needed and preserve requested/returned scope; never call a truncated export complete.
- URL Inspection allows 2,000 calls per property per day and 600 per minute. Cache inspections and prioritize changed/unindexed/commercial routes.
- Keep final and preliminary data separate. Google's API supports dataState and newer hourly data; an MCP wrapper may expose fewer options than the API.
- BigQuery daily bulk export is a future performance archive option when needed. It does not unlock Links or full coverage reports, and anonymized query text stays unavailable. It is not required merely to connect a small site.
- Read-only GSC authorization is sufficient for both Search Analytics and URL Inspection. Do not confuse property permission level with OAuth scope.
- Browser read-only behavior is an operating restriction, not automatically a technically read-only Google login. Use it for inspection/downloads only; do not click submission, validation, removal or settings actions.

## Practical rollout and acceptance checks

1. Enable Google's Search Console API in an owner-controlled Cloud project. Mint fresh readonly credentials, stored outside the website repository and deployment env.
2. Review/pin the chosen MCP version, register it locally and authenticate using the account with access to sc-domain:pandacodegen.com.
3. Confirm list_sites, then compare a finalized 28-day property-total query against the same dates and search type in GSC.
4. Retrieve page+query rows for the WordPress migration term; identify the actual landing page before attributing position 12.2 to a service route.
5. Inspect homepage, WordPress/Webflow service routes and the known excluded blog URLs. Confirm chosen canonicals and last-crawl dates.
6. Test pagination and preserve raw response metadata. Confirm no write tools exposed and grant is readonly.
7. Enable access to an authenticated GSC browser session for UI-only reports. This should replace routine screenshot requests, subject to session/login availability and UI export limits.

## Primary references

- API coverage: https://developers.google.com/webmaster-tools/v1/api_reference_index
- Search query, scopes and pagination: https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- Export limits: https://support.google.com/webmasters/answer/12919192?hl=en
- URL inspection scope and no live test: https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect
- Inspection quotas: https://developers.google.com/webmaster-tools/limits
- Bulk export scope: https://support.google.com/webmasters/answer/12918484?hl=en
- Field/lab measurement: https://developers.google.com/codelabs/chrome-web-vitals-psi-crux
- Reviewed minimal server: https://github.com/jurgisgavenas/search-console-mcp/blob/main/src/search_console_mcp/server.py
- Reviewed auth helper: https://github.com/jurgisgavenas/search-console-mcp/blob/main/scripts/mint_token.py
- Reviewed alternative auth: https://github.com/sudomichael/search-console-mcp/blob/main/src/auth.ts
