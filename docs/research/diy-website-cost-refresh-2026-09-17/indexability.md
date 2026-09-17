# DIY website cost article: indexability audit

Checked 17 September 2026. Target: <https://www.pandacodegen.com/blog/is-it-cheaper-to-build-your-own-website>.

## Conclusion

No obvious public crawl or indexability blocker was found. The article returns HTTP 200, declares the correct self-canonical, allows indexing, includes substantive article text in the initial HTML, appears in the live sitemap and has crawlable internal links from the blog index, its topic hub and four sampled related articles.

The user's Search Console screenshot says **Discovered — currently not indexed**, with **Last crawled: N/A**. This is not the same as **Crawled — currently not indexed**. It does not establish that Google read and rejected the article, that an AI penalty exists, or that adding keywords will fix indexing. Google's documentation says this state means the URL is known but has not yet been crawled; it describes expected server load as a typical scheduling reason, not a diagnosis we have established for this site. [Google's report definitions](https://support.google.com/webmasters/answer/7440203?hl=en).

Improving the article is justified by buyer usefulness and accuracy. It must not be sold as a proven repair for the screenshot's crawl status. There is no indexing guarantee.

## Evidence and limitations

The machine-readable [public capture](./public-indexability-capture.json) records UTC retrieval times, response status, final URL, response headers, body hashes, metadata, headings and actual anchor links. Requests used a normal browser user-agent and Python's HTTP client without JavaScript. They do **not** test real Googlebot access, prove the Google-selected canonical, or establish the latest Search Console status. The authenticated URL Inspection tool and hosting crawl logs were not accessed.

The web search fetcher returned an internal error for this domain; direct public HTTP GETs succeeded. The fetcher's error is not evidence of a site failure.

| Check | Public result before this refresh | Interpretation |
|---|---|---|
| Exact URL | HTTP 200, same final URL | Accessible without login in this request. |
| Content type | `text/html; charset=utf-8` | Correct document type. |
| Robots metadata | `index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1` | No HTML noindex directive found. |
| HTTP indexing directive | No `X-Robots-Tag` in captured response | No header noindex found. |
| Canonical | Exact `https://www.pandacodegen.com/blog/is-it-cheaper-to-build-your-own-website` | Correct declared canonical; Google-selected canonical remains unknown. |
| Initial HTML | H1, full essay, FAQs and related content present; approximately 2,910 visible words including shared UI | Not a blank client-only article shell. |
| Rendering/cache | `X-Nextjs-Prerender: 1`, `X-Vercel-Cache: HIT` | Consistent with static delivery; not evidence of crawl history. |
| robots.txt | HTTP 200; `User-Agent: *`, `Allow: /`, disallow only `/api/` and `/_next/data/` | Article route is allowed. Sitemap is advertised. |
| sitemap.xml | HTTP 200; exact target entry, lastmod `2026-09-13T00:00:00.000Z` | Discovery path exists already. Do not add duplicate entries. |
| HTTPS/www/slash variants | HTTP, non-www and trailing-slash requests all finished at the exact HTTPS www canonical with 200 | No competing final URL observed in these samples. Redirect hops were not retained, so do not assert individual hop status codes. |
| Page age | Article metadata says published 13 September 2026 | A recent article by its declared date; this does not independently establish its first production deployment. |

Actual incoming `<a href>` links were found in the server HTML of all six sampled pages:

- `/blog`
- `/blog/topic/custom-development`
- `/blog/custom-website-5000-whats-included`
- `/blog/how-long-does-a-custom-website-take`
- `/blog/do-you-own-your-website`
- `/blog/build-vs-buy-software-2026-cost-comparison`

These are live anchor links, not merely IDs inside serialized JavaScript. The article is not an orphan in this sample. This is a targeted sample, not a complete incoming-link inventory. The valid hub URL is `/blog/topic/custom-development`; the taxonomy ID is `custom`.

## Repository implementation

Reviewed `AGENTS.md` and the installed Next.js references for metadata, robots and sitemaps before interpreting the source. No application code was changed by this audit.

- `src/app/blog/is-it-cheaper-to-build-your-own-website/page.tsx` declares `dynamic = "force-static"`, explicit metadata, index/follow and a route-specific canonical. Its Article and WebPage schema use the same canonical.
- `src/app/layout.tsx` defines `metadataBase` as `https://www.pandacodegen.com`. The installed `generate-metadata.md` documentation confirms that the page's relative canonical is composed with this base; the live output verifies the result.
- `src/app/robots.ts` permits the article. Its output agrees with the live file.
- `src/app/sitemap.ts` creates blog entries from `src/data/blog.ts`. Updating this article's existing `lastModified` after a substantive refresh is enough; another route entry is unnecessary.
- `src/data/topical-map.ts` places the post in the `custom` cluster. `src/data/hubs.ts` maps that cluster to `custom-development`; `src/app/blog/topic/[topic]/page.tsx` renders its links on the server.
- `src/proxy.ts` sets security headers but does not add an indexing restriction. The public response likewise has no indexing header restriction.

The live version at capture time still used the original title, H1 and cost essay. A local edit is not a production change. Recheck the public output after deployment before asking Google to inspect the new revision.

## Concrete refresh recommendations

1. **Keep the existing URL and canonical.** This refresh is the same DIY-versus-hire question. A new keyword slug would add migration work without an established benefit.
2. **Improve the cost answer and evidence, not just the title.** Initial HTML already contains the article. Reader-relevant comparisons, explicit cost assumptions and fair DIY use cases are the substantive opportunity.
3. **Make the date truthful and consistent.** Preserve original publication date. Update `dateModified`, Open Graph `modifiedTime`, visible updated date where used and the existing blog data `lastModified` together when the substantive revision is ready. The sitemap then follows from the same record.
4. **Avoid double FAQ headings.** The live document has both `Frequently asked questions` and `Frequently Asked Questions` because the page and shared accordion each add one. Render a single heading. This is a structure improvement, not an established indexing cause.
5. **Retain the existing hub and sibling links.** Add an editorial link from a pricing or build-versus-hire discussion only if it helps that reader. No sitewide exact-match footer links or new near-duplicate pages are needed.
6. **After deployment, inspect the exact URL in GSC.** Check the indexed-status report, then Test live URL and View tested page → HTML. Confirm the revised answer, title and intended indexability are visible. Request indexing once for the substantive updated page if eligible. A successful live test checks access, not indexing or canonical selection. [URL Inspection documentation](https://support.google.com/webmasters/answer/9012289?hl=en).
7. **If it remains unvisited, examine evidence outside copy.** Check Crawl Stats host availability and verified crawler requests in hosting logs. Only fix capacity, blocking or response errors if those records establish them. The current public 200 response is one sample, not proof that all historical requests succeeded.

Do not repeatedly submit unchanged URLs or promise a turnaround date. Google says crawl requests do not guarantee inclusion and can take days to weeks. [Requesting a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

## Separate performance observation

The captured article response was approximately 669 KB uncompressed, including framework payloads and shared UI. That is a useful future page-weight investigation, but this audit did not measure compressed transfer, Core Web Vitals, resource timing or Google's crawl-resource use. It is **not** evidence that page weight caused the reported status and is not a reason to delay this focused editorial correction.
