# E: Facts and freshness (verify-primary-source + content-freshness-audit)

Audit date: 4 October 2026. Target: the NEW build (snapshot `scratchpad/newsite`, served at http://localhost:3400). All vendor pages were fetched today (WebFetch or Firecrawl with `maxAge: 0`). CONFIRMED means I saw it on the page or in the file. INFERRED means it is my reading of what I saw.

## Top findings (ranked by impact)

1. **The site's biggest page is now wrong about Vercel on two points it treats as its edge.** CONFIRMED. /blog/nextjs-hosting-zero-cost had 101,772 impressions in 90 days, more than the next 20 pages put together.
   - (a) The page says "100 GB isn't listed as an included Hobby allowance ... no data-transfer line appears in that table". Vercel's Hobby docs (last_updated 2026-09-14) now list "Fast Data Transfer: First 100 GB" and "Fast Origin Transfer: First 10 GB" in the Hobby Included Usage table.
   - (b) The page says Pro "includes 1 TB of Fast Data Transfer and 10 million Edge Requests ... Additional Fast Data Transfer starts at $0.15 per GB", and "usage-based billing turns a traffic spike into an invoice". Since 8 September 2026, Vercel's Flat Rate CDN is on by default for new Pro teams. Pro includes 1M CDN requests and 1 TB, with "No overages", and more capacity comes from tier upgrades ($20, $100 or $300 a month). Sources: vercel.com/docs/plans/pro-plan (2026-09-15), /docs/pricing/flat-rate-cdn (2026-09-14), the changelog dated 8 Sep 2026, and vercel.com/pricing.
   - (c) The page says Spend Management "is opt-in and isn't configured for you". The Pro docs say "By default, Vercel enables spend management notifications for new customers at a spend amount of $200".
   - The registry's `verifiedAt` for all five Vercel entries is still 2026-08-02. spec_freshness.py reports green, because 63 days is under its 90-day warning.
2. **A price ceiling that was deliberately retired is still live on 15 page files and 4 blog.ts FAQ answers.** CONFIRMED. Commit 8aeefe9c (9 Sep 2026) removed "the retired $5,000 to $10,000 ceiling from 37 files". The new build still renders "Scale normally falls between $5,000 and $10,000" and similar wording on 12+ URLs, including the FAQ answer on /blog/divi-theme-slow (5,160 impressions, 40 clicks). That answer is inside FAQPage JSON-LD. The same files carry the same text at HEAD, so this was carried over and not introduced by the redesign. The canonical `COMMERCIAL` list in src/data/company-facts.ts:101-102 and /pricing say "From $5,000" and "Anything bigger is quoted after a call". The ceiling is not in src/data/retired-claims.json, so retired_claims.py passes ("clean. 5 retired claims guarded").
3. **Our own WooCommerce price contradicts itself.** CONFIRMED. /blog/website-migration-cost-2026 (2,260 impressions) says "WooCommerce migrations start at $5,000". /services/woocommerce says "A focused store can start at the published $1,500 Starter scope", and company-facts.ts:101 says "a simple catalogue of a few products starts at Starter". /blog/custom-website-5000-whats-included is titled "Custom Website Starting at $5,000", while the home page, /pricing and llms.txt say custom builds start at $1,500.
4. **62 of 88 posts share one `lastModified` (2026-08-19).** CONFIRMED in src/data/blog.ts. This is false uniformity. It cannot be told apart from a bulk date stamp, and nothing records what changed that day: the refresh log in content-refresh-tracker.md has one entry. The date also does not move for real edits. divi-theme-slow, gohighlevel-website-speed and woocommerce-too-slow got a wording pass on 1 Oct (556752ca) and still say 08-19. nextjs-hosting-zero-cost was edited on 1 Oct and still says 08-02. The four date sources agree with each other (check_dates.py OK, 88 posts), so the guard checks agreement, not truth.
5. **Most third-party facts are outside the freshness clock.** CONFIRMED.
   - Only 9 of 88 blog page files read from spec-facts.json.
   - 37 rendered posts carry hand-typed "checked August 2, 2026"-style stamps that no script reads. /blog/shopify-app-costs-real-monthly-bill (#2 by impressions) dates 13 app prices to 2 Aug in prose.
   - research-facts.json (9 entries with `verifiedAt`) and first-party-measurements.json are not read by spec_freshness.py.
   - 13 of 76 registry entries are not referenced by any page, among them googlebot-crawl-size-limit and google-faq-rich-result-retired, so the "76 specs fresh" count overstates what is protected.
6. **The two "sunset" pages tell readers events from two months ago are still ahead.** CONFIRMED.
   - /blog/webflow-user-accounts-sunset-date-2026 (800 impressions, position 6.4) says the legacy Editor removal "from August 4, 2026" is "still ahead" and "the one still in front of you". The help article it cites (Feature-sunsets-deprecations) now returns 404.
   - /blog/shopify-stocky-sunset-date-2026 (1,559 impressions, position 7.2) contradicts itself. Its body says read-only export lasts "at least 90 days", which Shopify's transition page confirms. Its FAQ says "read-only access remains for an unspecified period" and "rechecked ... on July 24, 2026", while the header says "re-checked on 13 September 2026".
   - content-refresh-tracker.md files both pages under "DATED / NEWS: LEAVE", so no process will pick them up.
7. **Several registry `source` URLs do not state the value they back.** CONFIRMED.
   - vercel-hobby-fast-data-transfer and -fast-origin-transfer cite /docs/limits. That page only points to the fair-use page; the 100 GB and 10 GB figures appear on /docs/limits/fair-use-guidelines and /docs/plans/hobby.
   - nextjs-avif-rce (CVSS 9.5) cites the Next.js blog post. The post gives no CVSS score; the GitHub advisory GHSA-2xp9-vwfh-vxw4 does.
   - irp-conversion-rate-jul-2026 (2.26%) cites a rolling page that now shows August 2026 (2.23%, category range 0.57% to 5.81%). The July value can no longer be re-read there.
8. **The freshness guard is one flat clock (warn 90 days, fail 180) for every fact.** CONFIRMED in scripts/spec_freshness.py. The Vercel cluster has 69% year-qualified demand and drives most of the site's impressions, yet it gets the same 90 days as a WooCommerce constant from 2023. Finding 1 is what this design misses: Vercel changed three things between 8 and 16 Sep, inside the window. INFERRED fix: give this cluster a 30-day tier, or a change trigger. Vercel docs expose a `last_updated` value, which can be watched.

Report path: `scratchpad/audit/E-facts-and-freshness.md`

---

## Part 1: verify-primary-source

### Step 0 answers (fallback used where noted)
- Claim types on the site: vendor plan prices, plan limits and quotas, sunset and release dates, version numbers, CVE/CVSS figures, third-party statistics, and our own prices.
- Source-of-truth mapping exists for 76 third-party specs (src/data/spec-facts.json, each with `source` and `verifiedAt`). Our own prices map to `COMMERCIAL` in src/data/company-facts.ts. Everything else is inline prose (fallback: sampled straight from the rendered pages).
- Scope: 151 sitemap URLs on the new build. I sampled the 10 highest-impression pages plus /pricing, /, /services/*, llms.txt and the de/fr pricing pages.
- Change rate: vendor prices and limits change without notice (Vercel changed three on this page in September). Sunset dates are fixed but pass.

### Third-party claims checked (4 Oct 2026)

| # | Claim on new build (location) | Primary source fetched | Status |
|---|---|---|---|
| 1 | Vercel Hobby $0, personal non-commercial (nextjs-hosting-zero-cost) | vercel.com/pricing FAQ: "Our Hobby plan is for personal, non-commercial use" | Confirmed |
| 2 | Pro $20/mo platform fee, 1 deploying seat, $20 usage credit | vercel.com/docs/plans/pro-plan (2026-09-15) | Confirmed |
| 3 | Hobby 100 GB Fast Data Transfer, value | /docs/plans/hobby (2026-09-14), /docs/limits/fair-use-guidelines (2026-09-14): "First 100 GB" | Confirmed (value) |
| 4 | "100 GB isn't listed as an included Hobby allowance ... no data-transfer line appears in that table" | /docs/plans/hobby table "Hobby Included Usage" now lists Fast Data Transfer First 100 GB and Fast Origin Transfer First 10 GB | **Stale** |
| 5 | Hobby Fast Origin Transfer 10 GB | same as 3 | Confirmed |
| 6 | Hobby 100 deployments/day, 200 projects, 2 vCPU / 8 GB / 32 GB build | /docs/limits, /docs/plans/hobby | Confirmed |
| 7 | Hobby Active CPU 4 h, Provisioned Memory 360 GB-h, 1M invocations, 1M edge requests | /docs/plans/hobby | Confirmed |
| 8 | Hobby over limit: wait 30 days | /docs/plans/hobby: "you will have to wait until 30 days have passed" | Confirmed |
| 9 | Pro includes 1 TB FDT and 10M Edge Requests; overage from $0.15/GB; "turns a traffic spike into an invoice" | Pro docs: Flat Rate CDN lowest tier "1 million CDN requests and 1 TB"; flat-rate-cdn docs: on by default for new Pro teams since 8 Sep 2026, tier upgrades not per-GB; pricing page: "No overages". (The pricing page still mentions "$0.15 per GB" for on-demand.) | **Stale / conflicting**: true only for teams that stay on on-demand billing |
| 10 | Spend Management "is opt-in and isn't configured for you" | Pro docs: notifications on by default at $200 for new customers | **Conflicting** (pausing is opt-in, alerts are not) |
| 11 | Extra deploying seats $20/mo, viewer seats free | Pro docs | Confirmed |
| 12 | Vercel terms last updated 1 June 2026; Hobby/trial content may train models; opt-out | vercel.com/legal/terms | Confirmed |
| 13 | Shopify Basic $39, Grow $105, Advanced $399, Plus from $2,300; yearly $29/$79/$299 (shopify-headless, services/ecommerce, store-speed page) | shopify.com/pricing fetched with US location | Confirmed |
| 14 | Third-party transaction fee 2% / 1% / 0.6% / 0.2% (shopify-app-costs) | shopify.com/pricing (US) | Confirmed |
| 15 | App usage meters: 5 per plan, 6 tiers per meter, monthly, no caps | shopify.dev/docs/apps/launch/billing/shopify-app-pricing | Confirmed |
| 16 | Klaviyo: free to 250 contacts; Email $20/mo 251-500; SMS $15/mo 1,250 credits | apps.shopify.com/klaviyo-email-marketing | Confirmed |
| 17 | Judge.me: Forever Free; Awesome $15/mo | apps.shopify.com/judgeme | Confirmed |
| 18 | Vitals All-in-One $29.99/mo, usage fees after ~$1,000/mo attributed sales | apps.shopify.com/vitals | Confirmed |
| 19 | Stocky ends 31 Aug 2026, delisted 2 Feb 2026, APIs stop 31 Aug | help.shopify.com/en/manual/products/inventory/transitioning-from-stocky | Confirmed |
| 20 | Stocky read-only export "at least 90 days" (body) vs "unspecified period" (FAQ) | same page: "read-only access to export your data for at least 90 days" | Body confirmed; **FAQ stale** |
| 21 | Shopify API: new version every 3 months, each supported at least 12 months | shopify.dev/docs/api/usage/versioning | Confirmed |
| 22 | Oxygen free on paid plans (Starter ... Pause and build); 10 MB worker, 30 s CPU, 128 MB | shopify.dev/docs/storefronts/headless/hydrogen/fundamentals | Confirmed |
| 23 | Theme Store minimum Lighthouse performance 60 / accessibility 90 | shopify.dev/docs/storefronts/themes/store/requirements | Confirmed |
| 24 | Webflow User Accounts: no new sites after 31 Jan 2025; ended 29 Jan 2026; Logic ended 27 Jun 2025 | help.webflow.com User-Accounts-sunset; webflow.com/updates/deprecating-logic-and-user-accounts | Confirmed |
| 25 | Webflow legacy Editor removed from 4 Aug 2026, "still ahead" | Cited help article (36046081578515) returns 404 | **Could not verify**; "still ahead" framing is stale either way |
| 26 | Webflow Basic $15, Premium $25 (yearly), Team $2,500 | webflow.com/pricing (US) | Confirmed |
| 27 | Googlebot fetches first 2 MB; PDFs 64 MB | developers.google.com/search/docs/crawling-indexing/googlebot (updated 2026-02-03) | Confirmed |
| 28 | FAQ rich result no longer shown from 7 May 2026 | developers.google.com/.../faqpage | Confirmed |
| 29 | GSC counts AI Overview link clicks as clicks; Search Labs excluded | support.google.com/webmasters/answer/7042828 | Confirmed |
| 30 | Next.js AVIF RCE critical, CVSS 9.5; patched 16.3.3 and 15.5.24 | nextjs.org/blog/august-2026-security-release (25 Aug 2026) for versions; GHSA-2xp9-vwfh-vxw4 for 9.5 | Confirmed (but see source mismatch) |
| 31 | EmDash current version 1.1.0 | registry.npmjs.org/emdash/latest | Confirmed |
| 32 | EmDash 1.0 released 28 Sep 2026 | blog.cloudflare.com/emdash-cms-plugin-registry/ | Confirmed |
| 33 | EmDash registry 38 plugins | plugins.emdashcms.com: 38 plugin links today | Confirmed (moving number) |
| 34 | WooCommerce HPOS default for new installs from 8.2 (woocommerce-too-slow) | developer.woocommerce.com/docs/features/high-performance-order-storage | Confirmed |
| 35 | miniOrange SAML plugin 10,000+ installs | wordpress.org plugin page | Confirmed |
| 36 | Contentsquare returning 2.9% vs new 1.7% | contentsquare.com benchmark (2026 report, data Q4 2024 to Q4 2025) | Confirmed |
| 37 | IRP Commerce conversion 2.26% (Jul 2026), range 0.55% to 5.23% | irpcommerce.com now shows Aug 2026: 2.23%, 0.57% to 5.81% | **Could not verify** (rolling source moved on); value was dated, so not wrong as worded |
| 38 | Divi 5.9.0 released 9 Jul 2026 (divi-theme-slow) | Divi 4 changelog shows 4.27.9 (18 Sep 2026); Divi 5 status article would not render | **Could not verify** |

Totals: 38 claims checked. 29 confirmed, 1 confirmed in the body but stale in the FAQ, 2 stale, 2 conflicting, 4 could not verify. Reddit was not used as a source for any vendor fact.

### spec-facts.json sample: does the `source` URL actually state the value?

25 entries sampled. All values matched except those listed here.

| Entry | verifiedAt | Value matches source today? | Source states the value? |
|---|---|---|---|
| vercel-hobby-price, vercel-pro-price | 2026-08-02 | Yes | Yes |
| vercel-hobby-fast-data-transfer | 2026-08-02 | Value yes. The qualifier "published as a fair-use guideline, not an itemised plan allowance" is **stale**: the Hobby docs now itemise it | **No**: /docs/limits only links out; the value is on /docs/limits/fair-use-guidelines and /docs/plans/hobby |
| vercel-hobby-fast-origin-transfer | 2026-08-02 | Yes | **No** (same as above) |
| vercel-hobby-deployments | 2026-08-02 | Yes | Yes |
| googlebot-crawl-size-limit | 2026-08-11 | Yes | Yes (entry unused by any page) |
| webflow-basic/premium/team-price | 2026-09-25 | Yes | Yes |
| webflow-basic/premium-monthly-price | 2026-09-25 | Not checked | Help article returns 403 to fetchers; not checked |
| shopify-plan-basic/grow/advanced/plus | 2026-10-03 | Yes | Yes, but only with a US location: the page geo-redirects, as the shopify-app-costs page itself warns |
| shopify-theme-store-min-perf / -a11y | 2026-08-20 | Yes | Yes |
| shopify-api-version-support, shopify-oxygen-hosting, shopify-oxygen-limits | 2026-10-03 | Yes | Yes |
| nextjs-patched-versions-aug-2026 | 2026-08-26 | Yes | Yes |
| nextjs-avif-rce (CVSS 9.5) | 2026-08-26 | Yes | **No**: the blog post has no CVSS; the GHSA advisory does |
| emdash-current-version, emdash-1-0-release-date, emdash-registry-plugin-count | 2026-10-04 | Yes | Yes |
| wp-saml-installs | 2026-08-26 | Yes | Yes |
| gsc-ai-overview-click-counting, gsc-search-labs-excluded | 2026-08-28 | Yes | Yes |
| google-faq-rich-result-retired | 2026-08-28 | Yes | Yes (entry unused by any page) |
| irp-conversion-rate-jul-2026 | 2026-09-13 | Cannot re-read | **No longer**: the rolling page now shows August |
| contentsquare-returning-vs-new-2026 | 2026-09-13 | Yes | Yes |

### Our own prices against the canonical file

Canonical file: `src/data/company-facts.ts` `COMMERCIAL` (lines 83-118). It says: Starter from $1,500 (up to 7 pages), Growth from $3,500 (8 to 20 pages), Scale from $5,000 (above that, quoted after a call), AI SEO from $500 a month, 30/70 payment, delivery 1-2 / 2-4 / 3-6 weeks. `OFFER_LINE` (line 127) says custom builds from $1,500.

Consistent (CONFIRMED on the rendered local pages):
- /pricing, home, /services, all /services/* pages, /ai-info/pricing-and-guarantees, llms.txt, and de/fr pricing and services pages.
- 30/70 payment wording appears on about 20 pages, all consistent.
- Delivery ranges match on the three pages that state them.

Inconsistent:
- **Scale ceiling "$5,000 to $10,000"** (retired 9 Sep 2026; see commit 8aeefe9c). Variants include "normally falls between", "$5K-$10K", "run to $10,000", "$1,500 to $10,000 across our tiers" and "$3,500 to $10,000".
  - Source files: aeo-playbook-built-into-every-website, cheap-web-developer, custom-website-5000-whats-included, how-much-does-a-website-cost (4x, including a payment table with "$1,500 to $3,000 / $3,500 to $7,000"), shopify-dawn-theme-slow, shopify-slow-losing-sales, shopify-vs-custom-website, webflow-migration-cost, website-redesign-cost, why-we-chose-nextjs-over-wordpress-2026, wix-too-slow, wordpress-migration-cost, work/emblematic-studio.
  - Also src/data/blog.ts:309 (`cardStat: "$5K to $10K"`), 322, 1338 (Divi FAQ, in FAQPage JSON-LD), 1554 and 1635.
- **WooCommerce entry price**: "start at $5,000" (website-migration-cost-2026) vs "$1,500 Starter" (/services/woocommerce, company-facts.ts:101).
- **"Custom Website Starting at $5,000"** as the title and llms.txt link text of custom-website-5000-whats-included, against "custom builds from $1,500" everywhere else. The description makes clear it means the Scale tier. INFERRED: an answer engine lifting the title alone gets the wrong floor.
- **Included support "15 business days Starter / 30 Growth and Scale"** appears on /pricing FAQ, terms and about 8 posts, but it is not in `COMMERCIAL`. The sentence is consistent where it appears, but nothing in the canonical file holds it, so it can drift.

---

## Part 2: content-freshness-audit

### Step 0 (fallback: answered from the repo)
- What changes: vendor prices and limits (monthly risk), sunset and release dates (they pass), our own prices (owner decisions), and statistics on rolling sources.
- Records of when things were checked: yes, for 76 specs (`verifiedAt`), 9 research facts, 9 first-party measurements, and 88 post `lastModified` dates.
- Cadence: one flat clock (90/180 days) for specs. content-refresh-tracker.md sets 60-90 days for money pages and about 6 months for evergreen pages, by hand.

### Results of the read-only checks (run from the snapshot)
- `python scripts/spec_freshness.py`: "76 third-party specs, as of 2026-10-04 ... OK - every spec verified within 90 days (oldest: 63d)", exit 0. With `--today 2027-01-01`, most entries warn. Nothing fails before about 29 Jan 2027.
- `python scripts/check_dates.py`: "OK modified dates agree across all sources in 88 posts", exit 0. Rendered JSON-LD, og:modified_time and sitemap `<lastmod>` agree on the 6 pages spot-checked.
- `python scripts/retired_claims.py`: "clean. 5 retired claims guarded across 402 files". It is clean only because the Scale ceiling was never registered.
- CI (.github/workflows/ci.yml) runs `guard:all` after the build on push and PR (added 15 Sep). INFERRED: Vercel deploys may not wait for CI. I did not check this.

### Per content type

**Third-party specs (spec-facts.json, 76 entries)**
- Mechanism: yes. Value, source and verifiedAt are typed once and rendered with an "as of Month YYYY" stamp. That part is good.
- False uniformity: none of the harmful kind. The 14 distinct dates cluster by research session: 10 on 08-17 (one headless-builders article), 8 on 09-17 (one AI-builders article), 10 on 10-03 (shopify-headless). Each cluster maps to one article's sources, which is plausible.
- Does the verified field still discriminate? Partly. `verifiedAt` records when the article was written, not when the fact was last re-read. Only the Shopify plan prices (10-03) and EmDash (10-04) show re-verification after first entry. Vercel shows 08-02 although Vercel changed its pricing model on 8 Sep.
- Sourced or unearned: mostly sourced. Four entries cite a URL that does not state the value (see Part 1).
- Tiering: none. Every fact gets 90/180 days, whatever its traffic or how often it changes.
- Coverage: only 9 of 88 blog page files use the registry. 13 of 76 entries are not used by any page.

**Prose-carried facts (most posts)**
- Mechanism: none. 37 rendered posts carry hand-typed "checked <date>" or "as of <month> 2026" stamps. The most common are "checked August 2, 2026" (17x) and "checked July 24, 2026" (8x). No script reads them.
- /blog/shopify-app-costs-real-monthly-bill (5,556 impressions) prices 13 apps "on August 2, 2026" in prose only. I re-checked three (Klaviyo, Judge.me, Vitals) and all are still correct.

**Post dates (blog.ts `lastModified`)**
- False uniformity: **yes**. 62 of 88 posts read 2026-08-19. GSC_TRACKER.md notes the cluster but does not say what changed. INFERRED: a bulk rewrite or stamping pass that day. Rule 2 of content-refresh-tracker.md forbids date-only bumps, and nothing on record shows whether this one was real.
- Do bumps reflect real changes? Not reliably, in either direction. Several substantive edits since 19 Aug did not move the date: price-ceiling removals on 9 Sep, the claim audit on 13 Sep, plain-language passes on 26 Sep and 1 Oct, and the Stocky recheck on 13 Sep. Under the tracker's rules, corrections should not bump the date. But rewording the top six posts is arguably a refresh, and nothing records which way each edit was classed.
- Agreement across sources: enforced and passing (check_dates.py).

**Dated or sunset posts**
- The tracker says to leave these "unless the underlying facts change". Two of them now describe passed dates as upcoming (see Top finding 6), so their facts have changed. No mechanism flags a date in the text that has passed.

**Human-readable vs structured records**
- content-refresh-tracker.md is hand-maintained, last reviewed 2026-07-14, and has drifted. Its stale table lists divi-theme-slow at 2026-04-08 and how-to-fix-slow-wordpress at 2026-02-17; blog.ts says 2026-08-19 for both. Its refresh log has one entry (14 Jul).
- spec-facts.ts notes and the JSON are kept together by design (good). The verify date shown on each page is generated from the JSON (good). Visible "Reviewed August 2, 2026" lines in post prose are typed by hand and separate from `lastModified`.

### Recommendations (for the owner to decide; nothing was changed)
1. Re-read the Vercel pages and update the five Vercel entries plus the prose on nextjs-hosting-zero-cost: the Hobby table now itemises 100 GB, Flat Rate CDN is the default for new Pro teams, and spend alerts are on by default. Point the source URLs at /docs/plans/hobby and /docs/limits/fair-use-guidelines.
2. Remove the remaining $10,000 Scale ceiling (list in Part 1). Add it to retired-claims.json so it cannot come back. Settle WooCommerce at $1,500 or $5,000 in one place.
3. Tier the clock. Vercel, Shopify plan prices and Webflow prices (the money cluster) should warn at 30 days, or on a change in the vendor's docs `last_updated`. API and spec constants can keep 90/180.
4. Move the prose-carried vendor prices on the top 10 pages (shopify-app-costs first) into the registry, or add a check that dates in "checked <date>" text are no older than the registry threshold.
5. Add a passed-date check that flags "still ahead", "will" or "before" followed by a date earlier than today, and correct the Webflow and Stocky pages.
6. Generate the tracker's date table from blog.ts. Log each `lastModified` change with a one-line reason, so the 19 Aug cluster can be explained or corrected.

## Not checked, and why
- Webflow add-on prices (Optimize $299, Localize $9, Analyze $9) and the Workspace Core/Growth prices: the pricing page extraction did not return add-on rows, and the help article returns 403 to fetchers.
- Divi 5.9.0 date: the Divi 5 update-status page did not render for fetchers.
- The Webflow legacy Editor date (4 Aug 2026): the cited source is 404 and I found no replacement within budget.
- The other 10 app prices on shopify-app-costs (Postscript, Yotpo, Loox, Bold, Attentive, Helpdesk and others): only 3 of 13 were sampled.
- Whether the 19 Aug `lastModified` cluster reflects real content changes: repo history starts 8 Sep 2026 (246 commits), so the edit that set it is not in git.
- Whether Vercel deploys are gated on CI guards: this needs the Vercel project settings.
- Regional variants of Shopify card rates: US only.
- No forms were submitted. private-assets/ was not touched. Nothing in C:\Projects\pandagen-official was edited.
