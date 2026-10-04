# B: Migration safety and indexing health (4 Oct 2026)

Scope: shipping the redesign (new build, http://localhost:3400) over the live site (https://www.pandacodegen.com, built from origin/main 8fad4fca, 23 Sep).
Skills run: `site-migration-safety`, `indexing-crawl-health-audit`.
Raw data (all in `scratchpad\audit\B-raw\`): `crawl-results.json` (156 baseline paths on the new build, plus probes), `live-top30.json` (live baseline for the top 30 pages), `links-results.json` (every internal link on the 151 new-sitemap pages), `inspect-results.json` (8 URL Inspection results), `live-sitemap.xml`, `new-sitemap.xml`, and the two scripts `crawl.mjs` and `links.mjs`. Both scripts can be re-run against a Vercel preview URL before launch.

## Top findings (ranked by impact)

1. **`/services/wordpress` changes from a redirect to a new page, next to a WordPress page whose wording now overlaps it.** CONFIRMED. On the live site, `/services/wordpress` returns 308 to `/services/wordpress-migration` (origin/main `src/app/services/wordpress/page.tsx` calls `permanentRedirect`). In the new build it returns 200 as "WordPress Website Design & Development", and the new sitemap lists it. Meanwhile `/services/wordpress-migration` (599 impressions, 2 clicks in 90 days, indexed, crawled 3 Oct) gets a new title ("WordPress to Next.js Migration Services"), a new H1 ("Your WordPress site. A clear next step."), and a description that starts "Build or improve a WordPress website". Its page text drops from 4,413 to 1,908 words (whole-page count, nav and footer included). Any links pointing at `/services/wordpress` stop passing to the migration page. INFERRED risk: two WordPress service pages competing for the same queries. The rollout plan (REDESIGN_ROLLOUT_PLAN_2026-09-26.md:9) still describes `/services/wordpress` as a redirect, so the plan and the build disagree.
2. **One launch bundles a redesign, content rewrites and URL changes.** CONFIRMED. The deploy would ship the template redesign on every page, plus 84 commits not yet on origin/main. Those commits include title and H1 rewrites on two top-30 pages: `/blog/shopify-headless` (1,287 impressions, commit 6a016b46) and `/blog/webflow-true-cost` (763 impressions). It also adds 6 new indexable URLs and retires `/work/panda-codelab`. The skill says not to bundle these. If they ship together anyway, log each change separately, because a later drop could not otherwise be traced to its cause.
3. **The URL set is otherwise safe.** CONFIRMED. I checked all 156 baseline paths on the new build: the live sitemap (146), every GSC page with impressions in 90 days (147 paths), and the new sitemap (151). Results: 151 return 200 directly and 5 redirect in a single 308 hop to a 200 page. No 404s, chains or loops. Every 200 page has exactly one H1 and exactly one absolute self-referencing canonical, and none is noindex. All 9 GSC fragment URLs (for example `/blog/divi-theme-slow#what-changed-with-divi-5`) still find their anchor id. Of the top 30 pages by impressions, 26 keep the same title and H1.
4. **"146 submitted, 0 indexed" in gsc\sitemaps.json is an API artefact, not an indexing problem.** CONFIRMED. Google's Sitemaps API reference marks `contents[].indexed` as "Deprecated; do not use" (developers.google.com/webmaster-tools/v1/sitemaps), so it reads 0 for every property type. This has nothing to do with the property being a domain property. The submitted count (146) matches the live sitemap exactly. The real figure only comes from the Page indexing report: GSC_TRACKER.md:102 records 140 of 146 indexed on 21 Sep, confirmed by URL Inspection.
5. **Four live URLs still aren't indexed, and the redesign doesn't fix them.** CONFIRMED by URL Inspection today. `/services/webflow` is "Discovered - currently not indexed" and has never been crawled, even though it is in the sitemap and linked from 140 pages in the new build. `/de` is "URL is unknown to Google". `/blog/cheap-web-developer` is "Crawled - currently not indexed" and has not been crawled since 24 May. `/blog/webflow-true-cost` is "Crawled - currently not indexed" (last crawl 6 Aug), and it is also one of the pages getting a new title and H1.
6. **`/work/panda-codelab` changes from an indexed 200 page to a redirect to the `/work` index.** CONFIRMED (next.config.js:103-109; URL Inspection shows it indexed, last crawled 24 Aug; 65 impressions and 0 clicks in 90 days). INFERRED: `/work` is not an equivalent page, so Google may treat the redirect as a soft 404. Under the skill's rules, a 410 is the cleaner removal. The traffic at stake is negligible, and the comment records it as the owner's call. `/ai-info/competitor-comparison` → `/pricing` already works this way on the live site (515 impressions, 0 clicks).
7. **Preview routes reach production for the first time. They are safe for indexing, but the catch-all route is open-ended.** CONFIRMED. None of the 20 `/preview/*` routes exist on origin/main. All return `noindex, nofollow`, have no canonical, are absent from the sitemap, and no production page links to them. The `/preview/[...path]` catch-all returns 200 for any path one segment deep (for example `/preview/privacy` and `/preview/de`), each a noindex copy of a production page.
8. **The new `/blog` drops its direct links to the 11 topic hubs.** CONFIRMED. The live `/blog` links to all 11 `/blog/topic/*` pages. The new `/blog` links to none of them; it links to `/blog?topic=x#guides` filters instead, which canonicalise to `/blog`. The hubs still get 13 to 27 internal links each from posts, so none is orphaned.

## Part 1: Site migration safety

### Change type, risk level and reason

- **What changes:** templates and rendering on every page (redesign), copy on most service pages, the homepage, pricing and some posts, plus a small number of URL additions and one removal. The domain, protocol, host and URL structure all stay the same.
- **Risk level:** low to medium. URLs and output stay mostly identical, which is the lowest-risk class. It moves up a notch because the change is bundled with content rewrites on money pages and with one redirect being undone (Finding 1).
- **Benefit:** the redesign brief in REDESIGN_ROLLOUT_PLAN_2026-09-26.md. I did not judge whether the redesign is needed. Mechanically, it is safe to ship apart from the items below.
- **Timing:** I found no seasonal peak in daily_16mo.json. Site-wide impressions are already falling (61,333 → 27,436, prev 28d vs last 28d). A launch now makes it harder to separate the effect of the redesign from that existing trend. Record the pre-launch baseline below before shipping.

### Baseline captured (dated 4 Oct 2026)

| Item | Status | Where |
|---|---|---|
| URL inventory: live sitemap ∪ GSC 90-day pages ∪ new sitemap | 156 paths | crawl-results.json |
| Per-URL status, redirect chain, title, description, canonical, robots meta, X-Robots-Tag, H1, hreflang, JSON-LD types, html lang (new build) | All 156 | crawl-results.json |
| Same fields from the LIVE site | Top 30 by impressions only (light-load rule) | live-top30.json |
| Internal links in/out (new build) | 151 pages, 197 unique targets | links-results.json |
| Clicks, impressions, position per page | 90 days, 28d vs prev 28d | gsc\ |
| Indexed count | 140 of 146 (21 Sep, GSC_TRACKER.md:102); spot-checked 8 URLs today | inspect-results.json |
| Most-linked URLs (backlinks) | **Not captured.** No backlink tool | n/a |
| Server logs | **Not captured.** No access | n/a |
| Rollback point | Current Vercel production deployment, believed to be origin/main 8fad4fca (INFERRED; Vercel dashboard not checked) | n/a |

Sum of GSC page rows over 90 days: 161,550 impressions and 252 clicks. `/blog/nextjs-hosting-zero-cost` alone accounts for 63% of those impressions.

### Redirect map status

Coverage: every old URL in the baseline either keeps its address or has a 1:1 destination. All destinations return 200 in one hop, with and without a trailing slash. CONFIRMED.

| Source | Destination | Type | Where defined | New in this launch? | GSC 90d (impr / clicks) |
|---|---|---|---|---|---|
| `/work/panda-codelab` | `/work` | 308 | next.config.js:105-109 | **Yes** | 65 / 0 |
| `/services/wordpress` | (was `/services/wordpress-migration`) | **redirect removed; now a 200 page** | origin/main page.tsx `permanentRedirect` | **Yes** | 0 / 0 |
| `/preview/blog/how-to-speed-up-your-website` | `/blog/how-to-speed-up-your-website` | 308 | preview page.tsx | Yes (new route) | n/a |
| `/ai-info/competitor-comparison` | `/pricing` | 308 | next.config.js:57-61 | No | 515 / 0 |
| `/blog/webflow-migration-50-to-100-pages` | `/blog/webflow-migration-cost` | 308 | next.config.js:81-85 | No | 29 / 0 |
| `/blog/gohighlevel-migration` | `/blog/gohighlevel-keep-crm-replace-website` | 308 | next.config.js:89-93 | No | 25 / 0 |
| `/blog/google-march-2026-update` | `/blog/google-algorithm-updates` | 308 | next.config.js:98-102 | No | 3 / 0 |
| `/blog/topic` | `/blog` | 308 | next.config.js:64-68 | No | n/a |
| `/$` | `/` | 308 | next.config.js:73-77 | No | n/a |
| `http://…` | `https://www.pandacodegen.com/…` | 308 | next.config.js:110-115 (tested with an `x-forwarded-proto: http` header) | No | n/a |
| `pandacodegen.com/*` | `www.pandacodegen.com/*` | 308 | Vercel domain config, not in code (live test: 308) | No | 1 / 0 |
| `/path/` | `/path` | 308 | Next.js default | No | n/a |

`src/proxy.ts` only sets security headers; it does no redirects or rewrites. Apart from line endings, it is identical to origin/main.

404/410 decisions:
- `/work/panda-codelab`: the code redirects it to `/work`. The skill's rule (no equivalent page means 404 or 410) points to a 410. The stakes are tiny, so this is the owner's call.
- `/services/wordpress`: decide whether this is a new page or should stay a redirect. If it stays a page, give it and `/services/wordpress-migration` clearly separate intents: one for building a WordPress site, one for moving off WordPress. The new migration page's description currently covers both.

### Elements preserved vs changed (top 30 pages by impressions, live vs new)

CONFIRMED from live-top30.json against crawl-results.json:

| Page | Impr / clicks (90d) | Title | H1 | Description | Schema types |
|---|---|---|---|---|---|
| `/blog/shopify-headless` (#11) | 1,287 / 0 | **changed** ("Headless Shopify in 2026: Architecture and Migration Guide" → "Headless Shopify Cost in 2026: Plans, Hosting and Build") | **changed** | changed | same |
| `/blog/webflow-true-cost` (#23) | 763 / 0 | **changed** ("Webflow True Cost in 2026: Build It From Your Invoice" → "Webflow Pricing 2026: Monthly Costs and an Annual Budget") | **changed** ("How much does Webflow cost in 2026?") | changed | same |
| `/services/wordpress-migration` (#28) | 599 / 2 | **changed** ("WordPress Website Migration" → "WordPress to Next.js Migration Services") | **changed** | changed | same |
| `/ai-info/competitor-comparison` (#30, redirects to /pricing) | 515 / 0 | same | /pricing H1 changed | changed | same |
| `/` (#14) | 1,012 / 40 | same | same | changed | same |
| `/blog/what-is-headless-commerce` (#7) | 2,752 / 1 | same | same | changed | same |
| `/blog/cloudflare-emdash-wordpress-replacement` (#17) | 853 / 0 | same | same | changed | same |
| The other 23 | | same | same | same | same |

No canonical or robots value changed on any of the 30. No JSON-LD type was lost on any of them. On most blog posts the page text grows by 300 to 400 words, which looks like added template chrome (INFERRED). The homepage text falls from 3,228 to 2,817 words.

Other preserved elements:
- Search Console and directory verification block in `src/app/layout.tsx` lines 60-95: identical to origin/main. CONFIRMED.
- Analytics (GA, Clarity, Vercel Analytics): consent-gated in both versions, wired through `ConsentManagedServices.tsx`. I did not test firing, because that needs consent clicks. INFERRED unchanged.
- hreflang: reciprocal on all 5 page pairs (en/fr/de plus x-default). All 15 targets return 200 with self-canonicals, and `html lang` is correct. CONFIRMED.

### Sitemap: old vs new

- Only in the new sitemap (6): `/services/wordpress` (Finding 1), `/work/a-step-above-medical`, `/work/medical-template`, `/work/northdeck-group`, `/work/panda-publisher`, `/work/sleek-jackets`. All return 200, are self-canonical and indexable. Four of the /work pages have only one internal link each (from `/work`).
- Only in the old sitemap (1): `/work/panda-codelab` (now a redirect; correctly removed).
- Both sitemaps are valid XML with no duplicate entries. All 151 new entries return 200, are self-canonical, and none is noindex. The new sitemap has no redirecting URLs.

### Pre-launch test list (sized to this site)

Run these on the Vercel preview deployment of the exact commit you will promote:

1. Re-run `B-raw/crawl.mjs` with `LOCAL` set to the preview URL. Pass condition: 0 non-200 URLs other than the 5 known redirects, 0 chains, 0 canonical mismatches, 0 noindex in sitemap URLs, exactly one H1 per page.
2. Re-run `B-raw/links.mjs`. Pass condition: `bad` is empty and no production page links to `/preview/`.
3. Decide on `/services/wordpress` (keep it as a page, or restore the redirect) and record the decision before launch.
4. Hand-check these 12 URLs, the top pages by clicks over 90 days: `/`, `/blog/divi-theme-slow`, `/blog/gohighlevel-website-speed`, `/blog/nextjs-hosting-zero-cost`, `/blog/woocommerce-too-slow`, `/blog/squarespace-too-slow`, `/blog/shopify-app-costs-real-monthly-bill`, `/blog/agentic-browsing-pagespeed-score`, `/blog/how-to-migrate-wordpress-to-nextjs`, `/blog/nextjs-sanity-stack`, `/blog/shopify-dawn-theme-slow`, `/services/gohighlevel`.
5. Confirm that the X-Robots-Tag Vercel adds to preview deployments is absent on the production domain after promotion. INFERRED from Vercel's documented behaviour; I did not test it here.
6. Fetch `/robots.txt` and `/sitemap.xml` on production. robots.txt must be byte-identical to the local build (`Allow: /`, `Disallow: /api/`, `Disallow: /_next/data/`, plus the Sitemap line).

### Launch checklist

- [ ] Owner confirms go-live. Rollback point named: the current production deployment in Vercel. Owner: whoever holds Vercel access. Command: Vercel "Instant Rollback" to that deployment.
- [ ] Preview tests 1 to 6 above pass.
- [ ] `/services/wordpress` decision made and recorded.
- [ ] After promotion: spot-check the 12 URLs above and the 5 redirects (live, one request each).
- [ ] Resubmit `https://www.pandacodegen.com/sitemap.xml` in Search Console (same file, so there is no old sitemap to keep).
- [ ] Run URL Inspection on `/`, `/services/wordpress-migration`, `/services/wordpress` and `/services/webflow`, and request indexing for the last two.
- [ ] Log the deploy in GSC_TRACKER.md with the date, this baseline, and the list of title and H1 changes, so later changes can be attributed.
- [ ] Bing: no connection exists. Submitting the sitemap in Bing Webmaster Tools is still worth doing if anyone has access.

### Monitoring plan and rollback criteria

The site gets about 2.8 clicks a day (252 in 90 days), so daily click numbers are noise. Judge on weekly clicks, by page group, against the same weeks before launch. Before reading any impressions or position trend, check Google's Search Console data-anomalies page for the period.

| Window | Check | Roll back if | Wait if |
|---|---|---|---|
| 0-24 h | Status, canonical and robots on the 12 top URLs; robots.txt; sitemap; any 5xx | Any top URL is non-200 or noindex; robots.txt blocks `/`; the sitemap fails or lists `/preview/` URLs; site-wide 5xx | A single slow response |
| Days 2-14 | Page indexing report (count of 146+6); new 404s; URL Inspection on changed pages | Indexed count falls by more than a figure the owner sets (none is documented), traced to a canonical or noindex fault | Changed-title pages wobble |
| Weeks 2-6 | Weekly clicks for the 12 top URLs and the service pages | A mechanical fault that cannot be fixed quickly | Gradual movement |
| Week 8+ | Clicks against the same weeks before launch | Persistent loss with no cause found: run traffic-drop-diagnosis instead of rolling back | Stabilising |

The owner should set numeric thresholds before launch. No universal figure exists, and I have not invented one. Keep every existing redirect for at least a year.

## Part 2: Indexing and crawl health (new build)

### Status table

| Status | Count | Sample URLs | Verdict | Basis |
|---|---|---|---|---|
| Submitted and indexed | 140 of 146 (21 Sep) | `/blog/nextjs-hosting-zero-cost` (crawled 28 Sep), `/services/wordpress-migration` (3 Oct), `/blog/shopify-headless` | Healthy | GSC_TRACKER.md:102; 3 confirmed today |
| Crawled - currently not indexed | 2 or more | `/blog/cheap-web-developer` (last crawl 24 May), `/blog/webflow-true-cost` (6 Aug) | Engine decision. Resubmitting does not help; the content must earn it | CONFIRMED today |
| Discovered - currently not indexed | 1 or more | `/services/webflow` (never crawled; in sitemap; referred by /about/hassan, /blog/google-algorithm-updates, /services) | Engine priority decision | CONFIRMED today |
| URL is unknown to Google | 1 or more | `/de` (in the live sitemap since the 23 Sep "sitemap fixed" commit; sitemap last downloaded 2 Oct) | Not yet discovered. Should clear after the next sitemap read | CONFIRMED today |
| Page with redirect | several | http and non-www variants, the 4 merged blog URLs | Intentional | GSC_TRACKER.md:803 |
| Sitemap "indexed: 0" | n/a | gsc\sitemaps.json | API field deprecated; not a status | Finding 4 |

I did not export the full not-indexed list (that needs the GSC UI), so the counts above are minimums.

### Findings by layer

**robots.txt.** CONFIRMED. Returns 200 as text/plain: `User-Agent: *`, `Allow: /`, `Disallow: /api/`, `Disallow: /_next/data/`, plus the Sitemap line. The source (`src/app/robots.ts`) is unchanged from origin/main. Nothing render-critical is blocked, and the comment at next.config.js:130 correctly forbids disallowing `/_next/static/`.

**Sitemap.** CONFIRMED. 151 URLs. Valid XML, served as application/xml. Every URL returns 200, is self-canonical and indexable, and none redirects or carries parameters. No preview URLs are included.
- lastmod: no dates are in the future. 18 entries move to 2026-10-02 and line up with the redesign of the services, pricing, ai-info and home pages.
- 28 of 151 entries have no lastmod: `/about`, `/contact`, `/free-audit`, all 10 `/work/*` pages, `/manifesto`, the legal pages and all 10 `/de` and `/fr` pages. `/about`, `/contact` and `/work/*` are redesigned in this launch, so they are the pages that most need a lastmod.
- `/blog` still says 2026-09-19 although its layout and hub links change.
- Minor: this is a recrawl-signal gap, not an error.

**Canonical and noindex.** CONFIRMED.
- Every indexable page has exactly one absolute canonical on the www host with no trailing slash.
- Query strings canonicalise to the clean URL: `/pricing?utm_source=x` and `/blog?topic=wordpress` both point to the bare URL.
- No production route is noindex.
- All 20 preview routes are `noindex, nofollow`. Unknown preview paths 404, and `/demo/featured-products` returns 404.
- The 404 page carries two robots metas ("noindex" and "noindex, follow"). That is harmless.
- `/_next/static/*` and `/llms.txt` send `X-Robots-Tag: noindex` by design (next.config.js:135-138; llms.txt/route.ts:17-52). No HTML page receives an X-Robots-Tag.
- Blog posts carry two BreadcrumbList blocks with different trails: 3 levels, and 4 levels through the topic hub. That is a schema tidy-up, not an indexing fault. URL Inspection's "Unnamed item" label for breadcrumbs is how the API displays them; the items do have names.

**Redirects, status codes and soft 404s.** CONFIRMED.
- Trailing slash, `//`, `/$`, http and `/blog/topic` all resolve in one 308 hop.
- Unknown paths under `/`, `/blog/`, `/work/`, `/services/`, `/ai-info/`, `/de/` and `/fr/` return a real 404 with noindex, so there are no soft 404s.
- `/blog/topic/<unknown>` returns 404 but renders a bare page with no H1 or site chrome. The status is correct; this is cosmetic.
- Uppercase variants (`/Pricing`) return 404 instead of redirecting. That is acceptable, since no internal or GSC URL uses them.
- The only soft-404 risks are the two redirects to non-equivalent pages (Finding 6).

**Rendering and discovery.** CONFIRMED.
- Titles, canonicals, robots meta, H1s and body text all appear in the raw server HTML. The checks were run without JavaScript.
- No internal link points at a redirect or a 404, and no sitemap page is orphaned.
- 15 internal links carry parameters: 11 `/blog?topic=…` filter links and 4 `?ref=blog/…` tracking links from posts to service pages. Google has already crawled one of these (`/services/wordpress-migration?ref=blog/gohighlevel-migration`, seen in URL Inspection referrers). The canonical covers it, but the skill advises removing tracking parameters from internal links.
- Pages with only 1 or 2 internal inbound links: 4 new `/work/*` pages, `/ai-info/case-studies`, `/ai-info/team-and-company`, `/ai-info/migration-services` and `/blog/which-website-builders-can-go-headless`.

**hreflang (/de, /fr).** CONFIRMED. 5 translated pages per language. Every page lists en, fr, de and x-default (pointing at English). The annotations are reciprocal, every target is canonical and returns 200, and `html lang` matches. hreflang is not in the sitemap, but the HTML annotations are enough.

**Template quality.** INFERRED. The pages stuck in "crawled - not indexed" are single blog posts, not a whole template, so this looks like page-level priority rather than a template fault. GSC_TRACKER.md:153-165 diagnoses them as a recrawl problem.

### Prioritised fix list

1. **Decide on `/services/wordpress`** before launch. Restore the 308, or keep the page and rewrite the migration page's description and H1 so the two intents don't overlap. Effect: no split between two WordPress pages. Risk: low. Rollback: one file.
2. **Log the title and H1 changes** on `/blog/shopify-headless`, `/blog/webflow-true-cost` and `/services/wordpress-migration` as separate dated changes in GSC_TRACKER.md. Better still, ship them one launch apart from the template switch if the owner accepts the delay. Effect: post-launch movement can be attributed. Risk: none.
3. **Add a lastmod** to `/about`, `/contact`, `/work/*` and `/blog` dated to when they actually change at launch. Effect: a recrawl hint for redesigned pages. Risk: low. Only set a date where the content really changed, as the sitemap.ts comment requires.
4. **Optional: make the `/preview/[...path]` catch-all return 404 in production**, or access-gate `/preview`. Effect: closes an open-ended set of duplicate URLs. Risk: low. noindex already keeps them out of the index.
5. **Optional: return 410 for `/work/panda-codelab`** instead of the `/work` redirect. Effect: a clean removal signal. Risk: negligible. Owner's call.
6. **Optional: drop `?ref=` from internal links** and use an event or a data attribute instead. Effect: fewer parameter URLs crawled. Risk: low. Check first whether any analytics report depends on it.
7. After launch: request indexing for `/services/webflow` and `/services/wordpress`. Content decisions on `cheap-web-developer` and `webflow-true-cost` belong to the content groups.

### Verification plan

- Day 0: re-fetch the 12 top URLs, the 5 redirects, robots.txt and sitemap.xml on production (status, canonical, robots, X-Robots-Tag).
- Weeks 2, 4 and 8-12: Page indexing report. Target: indexed count at or above 140 of the 151 new sitemap URLs. Record not-indexed URLs by name, as the tracker rule requires. Run URL Inspection on `/services/webflow`, `/de`, `/services/wordpress` and the three pages whose titles changed.
- Clicks: weekly, the 12 top URLs against the same weeks before launch.

## Inferred vs confirmed (summary)

- CONFIRMED: everything measured on the new build; live statuses and fields for the top 30 pages and 4 redirect probes; the 8 URL Inspection results; the Sitemaps API deprecation; the source diffs against origin/main.
- INFERRED: that the live site is built from origin/main 8fad4fca; cannibalisation risk between the two WordPress pages; soft-404 treatment of the `/work/panda-codelab` redirect; Vercel's preview-deployment noindex header; that analytics firing is unchanged; that the word-count gains come from template chrome.

## Not checked, and why

- **Live baseline for pages 31 to 156** (titles, H1s, descriptions): skipped to keep load on the live site light. Only the top 30 were compared. Title or H1 changes further down are not reported here.
- **Backlinks and most-linked URLs:** no backlink tool. So I cannot say whether external links point at `/services/wordpress` or `/work/panda-codelab`.
- **Server logs and crawl stats:** no access.
- **The full Page indexing report export:** needs the GSC UI. I used the 21 Sep tracker entry plus 8 inspections (quota limit).
- **Bing:** no Bing Webmaster connection.
- **Google's Search Console data-anomalies page** for Aug to Oct 2026: not read here. It belongs to the traffic-drop work, and the skill says to read it before using any impressions trend.
- **Analytics firing and consent paths:** testing them needs consent interactions. I did not submit or click any forms.
- **The production edge** (Vercel domain config, CDN cache purge, firewall and bot rules): this can only be tested after deploy. The non-www → www redirect was tested on the live site only.
- **Rendered DOM vs raw HTML:** I compared raw HTML only. All key signals are in the raw HTML, so rendering is not needed for them.
