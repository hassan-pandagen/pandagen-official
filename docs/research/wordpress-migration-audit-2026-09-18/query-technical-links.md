# WordPress migration: query evidence, technical source, and internal links

Read-only source review, 18 September 2026. This sub-audit did not change `src` files or archived evidence. Public HTML and browser verification are handled separately in this audit. Source findings below describe the original working-tree baseline, not independently verified production behavior. A later scoped project-proof revision is recorded in the [implementation follow-up](implementation-follow-up.md); its dedicated case links supersede the original shared-grid finding below without changing the historical GSC evidence.

## What the 138 impressions actually establish

The original archive `GSC/pandacodegen.com-Performance-on-Search-2026-09-13.zip` contains this exact `Queries.csv` record at **CSV line 87** (header is line 1):

```csv
Top queries,Clicks,Impressions,CTR,Position
wordpress to next.js migration services,0,138,0%,12.22
```

- Archive SHA-256: `aaae4f1e1de03ca856d8feb638f3a2ebcc3437fa203bcae5818680e71ca39277`.
- `Filters.csv:2`: `Search type,Web`; `Filters.csv:3`: `Date,Last 3 months`.
- Actual `Chart.csv` dates: **2026-06-12 through 2026-09-11**, 92 daily rows. The export date is September 13, not the observation end date.
- No country, device, page, or query filter appears in `Filters.csv`. This is the exported cross-country/cross-device query aggregate. The archive has 203 country rows and Desktop/Mobile/Tablet device rows, but none are jointly broken down by this query.
- The archive contains only `Chart.csv`, `Queries.csv`, `Pages.csv`, `Countries.csv`, `Devices.csv`, `Search appearance.csv`, and `Filters.csv`. No preserved **Pages table filtered to this query** was found among the seven GSC ZIPs or loose GSC CSVs examined.
- The matching loose `GSC/Queries.csv:87` is convenient to inspect. Do not pair it with loose `GSC/Pages.csv`, whose header is impressions-only and whose service row is **38 AI impressions** at line 25. The mixed loose-file problem is documented in `GSC_EVIDENCE_AND_SEO_PRIORITIES_2026-09-13.md:17`.

**Ownership is unconfirmed.** The exact query's 12.22 average is not the service page's position. Google distinguishes property-aggregated query rows from page-aggregated page rows; the tables cannot be joined on assumed intent. See [Google's Performance report definitions](https://support.google.com/webmasters/answer/7576553?hl=en). The separate September 13 Web `Pages.csv` gives:

| CSV line | Page | Clicks | Impressions | CTR | Average position |
|---|---|---:|---:|---:|---:|
| 24 | `/services/wordpress-migration` | 2 | 553 | 0.36% | 15.00 |
| 8 | `/blog/how-to-migrate-wordpress-to-nextjs` | 7 | 1,031 | 0.68% | 16.46 |
| 34 | `/blog/wordpress-vs-nextjs` | 1 | 432 | 0.23% | 25.52 |
| 54 | `/blog/wordpress-migration-cost` | 0 | 531 | 0% | 22.43 |
| 96 | `/blog/topic/wordpress` | 0 | 41 | 0% | 38.44 |

These rows establish that the URLs receive search visibility, not that they compete for the same query. **No cannibalization diagnosis is supported.** No evidence here attributes zero query clicks to the title, a competitor, an AI result, page design, or technical SEO.

The older exact-query rows remain preserved:

| Web archive | Actual chart window | `Queries.csv` line | Clicks | Impressions | Position |
|---|---|---:|---:|---:|---:|
| `...Search-2026-08-25.zip` | May 24–August 23 | 119 | 0 | 87 | 12.44 |
| `...Search-2026-08-29.zip` | May 27–August 26 | 113 | 0 | 94 | 12.15 |
| `...Search-2026-09-04.zip` | June 3–September 2 | 99 | 0 | 115 | 11.96 |
| `...Search-2026-09-13.zip` | June 12–September 11 | 87 | 0 | 138 | 12.22 |

These overlapping rolling windows are not independent before/after periods. Old `?ref=blog/gohighlevel-migration` service-page rows appear in August Web exports; they are historical URL observations, not proof of current duplicate indexing or current query ownership. Missing rows, missing joint metrics, and absent AI click/position columns remain **unknown**, not zero. `classified-queries.csv` is a historical model-derived artifact, not an authoritative current query export.

**Required next measurement:** In GSC Performance, set Web and the same explicit dates, filter the exact query, and export Pages, Dates, Countries, and Devices with filters retained. Repeat for a current complete comparable window. Use an exact-match query filter or anchored regex `^wordpress to next\.js migration services$`. Then filter the service URL and export its Queries. Google documents multi-dimension filtering and the caveat that filtering can change totals through truncation and anonymization: [advanced filtering](https://support.google.com/webmasters/answer/17011165?hl=en).

## Related query family from the same September 13 Web archive

All values below come directly from that archive's `Queries.csv`, for the same June 12–September 11 period and unchanged filters. Line numbers are **physical CSV start lines**, accounting for multiline fields elsewhere in the file. Intent is an editorial reading of the wording, not a measured searcher preference, controlled SERP finding, or landing-page assignment. No rows have been combined or joined to Pages.

| CSV line | Exact query | Clicks | Impressions | Average position | Plausible intent / priority implication |
|---|---|---:|---:|---:|---|
| 87 | `wordpress to next.js migration services` | 0 | 138 | 12.22 | Explicit commissioning intent; strongest direct service fit in this selection. |
| 666 | `wordpress to next.js migration agency` | 0 | 16 | 9.56 | Explicit provider selection; support the same service and its proof. |
| 314 | `wordpress to nextjs migration` | 0 | 38 | 15.84 | Mixed implementation research / commissioning; guide and service both plausible. |
| 549 | `wordpress to next.js migration` | 0 | 20 | 18.75 | Same ambiguity; retain the guide-to-service path. |
| 609 | `wordpress website to next js migration` | 0 | 18 | 19.06 | Mixed migration evaluation / implementation; destination URL unknown. |
| 702 | `migrate wordpress to nextjs` | 0 | 15 | 21.67 | Task/how-to wording; guide intent is plausible. |
| 723 | `wordpress to next.js migration guide` | 0 | 14 | 9.07 | Explicit guide intent; do not turn the tutorial into a second service page. |
| 488 | `wordpress migration cost` | 0 | 23 | 12.30 | Cost research; existing cost guide plus service scope/tiers are plausible. |
| 652 | `wordpress to next.js migration cost` | 0 | 16 | 7.88 | Destination-specific cost research; support existing scope/pricing content. |
| 745 | `how much does wordpress migration cost?` | 0 | 13 | 6.69 | Explicit price question; cost guide or concise service answer is plausible. |
| 57 | `next.js development agency` | 0 | 246 | 23.39 | Broader agency selection, not WordPress-specific; adjacent engineering/agency intent. |
| 126 | `nextjs development agency` | 0 | 97 | 23.77 | Same broader provider intent; not evidence for a separate spelling-variant page. |
| 4 | `website migration cost` | 1 | 428 | 14.14 | Broad cost research; cannot assume WordPress or Next.js requirement. |
| 29 | `headless commerce` | 0 | 722 | 23.34 | Adjacent architecture/definition research; commerce is not headless WordPress. |
| 197 | `headless commerce development` | 0 | 63 | 29.21 | Adjacent commerce implementation/provider intent; not evidence of WordPress demand. |

No exported query contains both `headless` and `wordpress`. This is **absence from the available 1,000-query table**, not zero demand or zero unexported impressions. The observed service/agency pair supports prioritizing clear WordPress-to-Next.js commissioning language and relevant proof; the guide/cost rows support keeping those existing supporting intents distinct. The larger generic agency and headless-commerce counts do not justify broadening this service page away from WordPress migration. Actual query ownership still requires the filtered Pages export above.

## Technical source findings

| Item | Source evidence | Assessment/action |
|---|---|---|
| Canonical | `src/app/services/wordpress-migration/page.tsx:7` and `:14`; `src/app/layout.tsx:49` | Canonical path points to itself and composes with `https://www.pandacodegen.com`. No source evidence of a wrong canonical. Confirm emitted HTML and Google-selected canonical separately. |
| Index directives | `src/app/layout.tsx:85`; route and services layouts contain only children | Root declares index/follow for robots and Googlebot. No route override found. This is not proof of current indexing. |
| Crawl access | `src/app/robots.ts:37`; `next.config.js:129` | Robots allows `/`, excluding `/api/` and `/_next/data/`. The explicit X-Robots-Tag noindex rule is limited to `/_next/static/:path*`, not this service route. |
| Sitemap | `src/app/sitemap.ts:33` | Route exists. `lastModified` remains `2026-08-03`, while Git records September 11–15 content edits, including `41f4048` on September 15. On the next substantive release, use the real material content-change date. Do not present date maintenance as the explanation for ranking. |
| Legacy service route | `src/app/services/wordpress/page.tsx:4` | `/services/wordpress` calls `permanentRedirect('/services/wordpress-migration')`; its layout adds no metadata. No competing source page exists there. |
| Search title | `src/app/services/wordpress-migration/page.tsx:8`; `src/app/layout.tsx:52` | Expected title is **WordPress Website Migration \| PandaCodeGen**. It describes migration but omits the destination platform and explicit services phrase. A more precise `WordPress to Next.js Migration Services` title is a relevance/clarity hypothesis, not a demonstrated CTR fix. Preserve the route. |
| Description | `src/app/services/wordpress-migration/page.tsx:9` | Lists content, URLs, metadata, forms, integrations, validation, rollback, ownership. Useful controls, but omits Next.js and the commercial offering's plain summary. Align any revision with actual scoped delivery and the hero. |
| Structured data | `src/components/services/ServicePageSchema.tsx:22`, `:24`, `:33`, `:43`; service `page.tsx:20` | Emits WebPage, BreadcrumbList, FAQPage. FAQ data is shared with visible UI via `PageContent.tsx:21` and `:589`. No Service/Offer node is emitted here; that absence is not established as a ranking defect, and adding schema is not a substitute for buyer clarity. |

Relevant installed Next.js guidance was read at `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`; title inheritance is described at line 243 and relative metadata URL composition at line 391.

## Cluster, headless overlap, and actual links

The commercial destination is already declared in `src/data/topical-map.ts:244` for a **17-article WordPress cluster** and at `:381` for the four-article cross-platform migration cluster. The WordPress hub has a distinct guides title and a service introduction (`src/data/hubs.ts:72`, `:76`, `:81`). `TopicUpLink` gives cluster articles both a hub link and a commercial link, with the service anchor “how we scope a WordPress migration” (`src/components/blog/TopicUpLink.tsx:17`, `:65`). The service also appears in navigation (`Header.tsx:60`), footer (`Footer.tsx:105`), the services hub (`ServicesHub.tsx:14`), and related service grids (`RelatedServicesGrid.tsx:6`). It is not an orphan.

Existing contextual article-to-service routes include:

| Source | Exact location | Anchor/role |
|---|---|---|
| Migration guide | `src/app/blog/how-to-migrate-wordpress-to-nextjs/page.tsx:536` | “View WordPress Migration Service”; URL includes `?ref=blog/how-to-migrate-wordpress-to-nextjs`; shared uplink also at `:559` |
| Migration cost | `src/app/blog/wordpress-migration-cost/page.tsx:250` | “WordPress migration service page”; shared uplink at `:635` |
| Comparison | `src/app/blog/wordpress-vs-nextjs/page.tsx:573` | “WordPress migration service page”; shared uplink at `:621` |
| Divi diagnosis | `src/app/blog/divi-theme-slow/page.tsx:541` | “WordPress migration service page” |
| Slow WordPress diagnosis | `src/app/blog/how-to-fix-slow-wordpress/page.tsx:384` | “WordPress migration service” |
| SEO migration risk | `src/app/blog/will-migrating-hurt-my-seo/page.tsx:218` | “website migrations” beside the technical guide |

Headless WordPress is already explained as a separate architecture decision in the technical guide (`how-to-migrate-wordpress-to-nextjs/page.tsx:228`) and comparison (`wordpress-vs-nextjs/page.tsx:532`). The service instead describes moving to owned Next.js code (`PageContent.tsx:92`) and Next.js plus Sanity (`:189`). Its source has no headless WordPress section. That is an opportunity to make **the service's actual destination and editorial workflow explicit**, not evidence that another headless article or landing page is necessary. Do not imply that retained-WordPress headless implementation is offered unless confirmed. Keep the guide instructional, comparison evaluative, cost article scope/pricing focused, and service page focused on commissioning delivery. Shared terminology alone does not establish harmful overlap.

The more useful link gap is **service → relevant inspected proof**:

- Service `PageContent.tsx:170` labels the shared case grid “Real WordPress Migrations,” while its subheading at `:173` says “Four sites we built or migrated.”
- `CaseStudyGrid.tsx:56`, `:67`, `:81`, `:92` defines Panda Patches, MyCustomPatches, Saforne, and Obare. Cards link to their external live websites at `:160`; the internal next step is generic `/work` at `:194`.
- No direct `/work/mycustompatches` link occurs in `PageContent.tsx` itself. The shared testimonial carousel can render one when Matt Conner's review is centered (`StaggerTestimonials.tsx:132`–139; `reviews.ts:134`); it was absent in the initial live capture. Add a permanent contextual path from the independent WordPress migration description to its named internal case study, with preserved content/functionality, project relationship, accepted scope, and evidence limitations. This lets a buyer examine delivery without finding the conditional testimonial link or inferring it from an external live homepage.
- The service's eight article links already exist at `PageContent.tsx:646`. Extra generic blog cards or a new hub would add little to this particular journey.

## Priorities and limits

1. **Confirm query ownership and establish current baseline.** Retain archives. Do not rename, merge, or redirect articles on an assumed query/page match.
2. **Make the existing service unmistakably transactional.** The current H1 says “Your WordPress site got slower every year you kept it” (`PageContent.tsx:49`), while the clear service/destination summary appears later at `:92`. Bring the actual migration offering, destination CMS/editor, price basis, fit, and next step into the main opening. Coordinate title/description with that truthful offering. This is a buyer-intent improvement hypothesis, not a ranking guarantee.
3. **Strengthen the specific proof path and remove contradictory claims.** Source contains “No monthly fees” at `PageContent.tsx:389` despite provider hosting costs at `:103`; the ranking FAQ starts “No” before disclaiming any ranking guarantee (`src/data/service-faqs.ts:306`). These contradictions can erode the credibility of the otherwise useful scope and risk controls. Preserve verified evidence; do not restore withdrawn figures or substitute zeros.
4. **Maintain technical correctness on release.** Recheck live canonical, robots, schema/visible FAQ parity, sitemap, redirect, and status. Record a real release date. Do not expand schema or links simply to increase counts.
5. **Evaluate commercial results as well as visibility.** Query/page exports contain no article-to-service clickthrough, qualified enquiries, or accepted-project attribution. Review those actual events with equivalent time windows before claiming a commercial result.

Unknowns: current Google-selected canonical/index state, exact query's landing page(s), current query/device/country distribution, live-vs-source parity, SERP feature exposure, field Core Web Vitals, conversion attribution, and whether a retained-WordPress headless service is actually offered. None are resolved by these separate aggregate CSVs or by the presence of source metadata.
