# Crawled — currently not indexed: ten-URL review

Review date: 19 September 2026

## Decision

Do not rewrite these ten pages merely because they appear in the grouped Google Search Console report. The report mixes old crawl observations with current page versions. Nine of the ten URLs were found in public Google results during this review, while most dates in the screenshot predate the pages' August and September revisions.

The remaining URL, `/blog/why-competitor-outranks-you`, requires a live URL Inspection check. Its absence from one public search is not enough to diagnose an indexing problem.

## Technical verification

- A rendered crawl of all 146 sitemap URLs completed with zero failures and zero warnings.
- Each of the ten pages returns a substantive server-rendered article.
- Each page has a self-referencing canonical and permits indexing.
- Each URL is present in the generated sitemap and in a server-rendered topic hub.
- Each page has internal links beyond the blog catalogue. The smallest count found was two for the agency white-label article; the others had six to seventeen.
- No redirect, duplicate canonical, `noindex`, missing metadata, or client-only-content defect was found.

## URL decisions

| URL | GSC screenshot last crawl | Public search observation | Decision |
| --- | ---: | --- | --- |
| `/blog/wordpress-vs-custom-code-real-cost-3-years` | 4 Sep 2026 | Found | Keep current copy; inspect live URL only if the individual URL report disagrees. |
| `/blog/website-rebuild-cost-2026` | 8 Jul 2026 | Found | The grouped status predates the rewritten page; request recrawl. |
| `/blog/wix-vs-custom-website` | 7 Jul 2026 | Found | Google showed mixed old and current wording; request recrawl to refresh the indexed version. |
| `/blog/why-competitor-outranks-you` | 3 Jun 2026 | Not confirmed | Run URL Inspection, test the live URL, and request indexing if Google still excludes it. Do not rewrite unless the inspection result identifies a page-specific reason. |
| `/blog/shopify-conversion-rate-speed-fix` | 1 Jun 2026 | Found | Request recrawl; no content defect found. |
| `/blog/cheap-web-developer` | 24 May 2026 | Found | Request recrawl; no content defect found. |
| `/blog/for-agencies-offer-custom-web-development` | 19 May 2026 | Found | Request recrawl; no technical defect found. Its two contextual inbound links are adequate for discovery, though future relevant agency content should link here naturally. |
| `/blog/shopify-plus-still-slow` | 13 May 2026 | Found | Request recrawl; no content defect found. |
| `/blog/leaving-webflow-2026` | 10 May 2026 | Found | Request recrawl; no content defect found. |
| `/blog/how-to-speed-up-your-website` | 30 Apr 2026 | Found | Request recrawl; no content defect found. |

## Search Console action

1. Open URL Inspection for `/blog/why-competitor-outranks-you` first.
2. If the live test succeeds, request indexing for that URL.
3. Start validation on the grouped `Crawled — currently not indexed` report if Search Console offers it.
4. Inspect or request recrawling for the other nine only as quota allows. They already have public index evidence, so the unresolved issue is freshness rather than proven exclusion.
5. Recheck the individual URL states after Google processes the requests. Do not use the grouped row count alone as proof that a current page is excluded.

Google states that crawling and indexing are separate, that recrawling can take time, and that neither a sitemap nor a recrawl request guarantees indexing. The correct success test is the individual URL Inspection result plus whether Google serves the current URL and snippet, not whether the old grouped report immediately reaches zero.

## Change boundary

No production page was edited in this review. Updating copy or dates without finding a page defect would destroy the useful before-and-after boundary and ask Google to evaluate another version. Reopen content work only when URL Inspection, query data tied to the landing page, or a fresh competitive intent review supplies a specific reason.
