# Webflow service: indexing investigation

Audit date: 18 September 2026, Asia/Karachi. Public capture: 17 September 2026 at 19:12 UTC.

URL: https://www.pandacodegen.com/services/webflow

**Later revision, same day:** the user requested deeper problem/demand research. The [demand research and copy update](demand-and-copy-update.md) supersedes the title, layout and local validation counts described below. This file preserves the initial live indexing investigation and first correction pass; its public capture remains unchanged.

## Conclusion

No current technical indexing block was found in the public responses inspected. This does not establish that Google has crawled the page, selected its declared canonical, or decided to index it. The user's earlier Search Console screenshot said **Discovered – currently not indexed**, with last crawl **N/A**. A fresh URL Inspection result is still needed; the earlier screenshot must not be silently treated as current.

Google defines that status as a discovered URL that has not yet been crawled. It differs from **Crawled – currently not indexed**. Content overlap, word count, a weak headline and a stale sitemap date cannot establish the cause of either status without further evidence.

Corrections below are local and uncommitted at handoff. Nothing from this Webflow investigation has been pushed or deployed.

## Verified public signals

| Check | Result |
| --- | --- |
| Main URL | HTTP 200; HTML response |
| Declared canonical | Exactly one, pointing to the public URL above |
| Robots metadata | `index, follow`; Googlebot metadata also permits indexing |
| HTTP indexing restriction | No blocking `X-Robots-Tag` observed |
| robots.txt | Permits this service route; declares sitemap |
| Sitemap | Contains the exact URL; live lastmod was `2026-08-03T00:00:00.000Z` |
| Server-rendered content | One H1, substantial page copy and links in the initial HTML; approximately 4,152 text words including navigation/footer |
| Homepage and service index | Both return crawlable links to this route |
| Related articles | Crawlable links from `leaving-webflow-2026`, `webflow-migration-cost`, `webflow-true-cost` and `webflow-vs-custom-website` |
| URL variants | Non-www and trailing-slash probes resolve to the canonical URL; initial redirect status codes were not retained |
| User-agent comparison | Ordinary and spoofed Googlebot user agents returned identical page text |

The spoofed user agent is **not** a verified Google crawler test. Only Search Console and appropriate server/CDN evidence can establish actual Googlebot access. A correct declared canonical also does not prove Google selected it.

Machine-readable public observations are preserved in `live-indexability.json`. Full raw responses and the probe script remain in the ignored local directory `audit/webflow-indexing-2026-09-18/`.

## Corrections prepared

1. **Identify the service direction.** Title, description, service schema and OG image title now say **Webflow to Next.js Migration Services**. The opening explains the existing-site rebuild, content editor, planned CMS/URL/form/integration work, scope and starting price. Existing URL and canonical are unchanged.
2. **Remove contradictory commitments.** Hosting now follows the per-client written quote; recurring cost reductions and permanent third-party prices are not promised. Scope-dependent tier timelines replace the universal timeline and unsupported average. CMS URLs are preserved where possible, with agreed changes mapped and tested as redirects. Performance wording refers to the agreed Lighthouse target on the scoped pages.
3. **Match CTA reassurance to its action.** The hero button opens the question form; the adjacent text invites a website address and explains the founder reply and separately scoped paid work.
4. **Make the FAQ truthful to assistive technology.** Eight always-visible answers previously sat behind buttons announcing a collapsed state. They now use static headings and text. The same shared FAQ source supplies visible copy and structured data.
5. **Date this substantive revision accurately.** The Webflow sitemap lastmod is now `2026-09-18`. This is not a recurring timestamp bump or a guarantee of recrawling. Other routes' dates were not changed.
6. **Remove an unsupported internal explanation.** A source comment attributed non-indexing to shared service-page phrasing without evidence. That causal assertion was removed.

Changed source files: `src/app/services/webflow/page.tsx`, `src/app/services/webflow/PageContent.tsx`, the Webflow block of `src/data/service-faqs.ts`, `src/lib/seo/og.ts`, and the Webflow entry in `src/app/sitemap.ts`.

## Remaining editorial opportunity

The service page still spends substantial space on publication discipline, operating-cost comparison and migration decision-making before showing the practical delivery process. It could make the scope, relevant work and delivery steps easier to find. The four Reddit cards cite one discussion and include a repeated comment; they are not four independent pieces of evidence. No verified Webflow-specific migration case was found in the reviewed canon, so one was not invented.

Preserve separate article roles: migration cost explains quote inputs, true cost explains ongoing costs, leaving Webflow evaluates whether to move, and the comparison evaluates operating fit. This service route should primarily help a buyer assess the supplier, scope, process and quote. That is an editorial recommendation, not proof of keyword cannibalisation or an indexing diagnosis. No search-volume claim was made in this investigation.

## Validation

- `npm.cmd run check`: passed TypeScript, lint, existing tests, public-claim and article-date checks. The final two changes after this run were scoped copy strings; the subsequent production build and guards also passed.
- Production build: passed using `PANDACODEGEN_AUDIT_BUILD=1`, leaving the ordinary `.next` output alone. The first sandboxed attempt could not download Google Fonts; the network-enabled retry passed. Pagefind was not regenerated because the changes are to a service page.
- All six repository guards returned success. Build-reading guards were pointed to `.next-audit/server/app`, including the link guard's derived hub path; rules were unchanged. The Unicode guard remains advisory and reported 143 existing occurrences across 47 pages, with no invisible characters. This is not a claim of zero advisory findings.
- Structural SEO crawl: 146 sitemap URLs checked, zero failures and zero warnings.
- Browser verification: HTTP 200 at 390px and 1440px, correct title/canonical/robots, one H1, eight visible FAQ answers matching eight schema answers, no horizontal overflow, no page JavaScript errors, and hero CTA opens the question form. No form was submitted. The initial test checked the lazy-loaded modal too early; waiting for its visible heading resolved the test timing issue.
- `git diff --check`: passed. Unrelated profile/outreach work was preserved.

## Next evidence and release steps

1. Get the exact URL's current **URL Inspection → Page indexing** details: status/reason, last crawl, crawl/indexing permission, and Google-selected canonical when available. Run **Test live URL** to check present fetchability. A successful live test does not mean the URL is indexed.
2. Deploy the scoped corrections only when publishing is intended, then re-fetch the live title, canonical, robots, HTML and sitemap. Current local `main` includes unrelated unpublished work; do not use a broad push as a shortcut.
3. If live inspection allows indexing, request indexing once for this URL. Repeated requests do not accelerate crawling. Recheck after Google has had time to process it; indexing is not guaranteed.
4. If the status changes to **Crawled – currently not indexed**, inspect the actual crawl result and selected canonical before deciding whether a deeper content consolidation is warranted. If inspection reports a block or fetch failure, address that specific finding instead.

## Primary references

- [Google: Page indexing report](https://support.google.com/webmasters/answer/7440203?hl=en) — status definitions and individual-URL investigation.
- [Google: Ask Google to recrawl your URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) — timing, limits and lack of indexing guarantee.
- [Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) — accurate significant-change dates; `priority` and `changefreq` are ignored by Google.
