# Evidence audit tracker

Running `/evidence-audit` over the blog corpus. Generated 12 September 2026, re-ranked after the scope correction.

**Target: 88 pages** — 85 live + 3 unpublished drafts. **559 external sources** to verify.

## Scope — verified 12 September 2026

`src/data/blog.ts` is the registry feeding the sitemap. It holds **85 published posts**, each
with a matching route directory (`topic` is the hub route, not a post).

`blog-drafts/` is not a publication queue. Five stale files were **deleted 12 September 2026**
(`fix-meta-ad-tracking-2026`, `lovable-site-not-showing-on-google`, `wix-migration-cost`,
`woocommerce-migration-cost`, `woocommerce-vs-custom-website`). Each had a live post under
the same slug whose published `.tsx` was ~50% longer and independently written, so the `.md`
was a superseded earlier draft. Every one was confirmed to have a live counterpart before
deletion. Two remaining files are not blog posts at all (`linkedin-48-sites-post`,
`information-gain-researcher-prompt`) and are out of scope.

The three genuinely unpublished drafts are in the queue below and tracked for release in
`PUBLICATION_READINESS_3_DRAFTS.md`.

## Batch size: 5 for batches 1-4, then 10

Risk is concentrated at the head. The high-risk pages carry ~10 external sources each and
need real verification, so 5 a day is the honest pace there. After that 10 a day is
comfortable. Roughly 12 working days for the corpus.

## How to run a batch

```
/evidence-audit <path>
```

Fill in Status, Date and Findings on the row. A batch closes when every row has a date.
Never mark a row done without running the passes — an unaudited page must look unaudited.

**Per-page order:** evidence-audit -> deslop -> citability-audit -> google-content-audit.

## How risk was scored

Per page: distinct external domains (x3), scope claims about agencies/businesses/stores (x4),
second-hand attribution such as "via" or "reportedly" (x4), statistics (x2), study references
(x2), causal verbs (x2), dollar figures (x1, capped).

**The score predicts where defects are likely, not that any exist.** The highest-risk live
page audited so far came back clean. Its dated, linked pricing is the pattern to copy.

## Status key

`⬜ pending` · `🟡 in progress` · `✅ done` · `⚠️ blocked`


### Batch 1 — 5 pages, 46 sources — CLOSED 2026-09-12

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `shopify-app-costs-real-monthly-bill` | live | 96 | 14 | ✅ done | 2026-09-12 | **No defects.** Prices dated "checked August 2, 2026", each linked. Spot-verified Recharge Starter $99+1.49%+19c, Plus $499+1.34%, Judge.me Free+Awesome $15 — all unchanged. 41 days stale; needs a refresh cadence. |
| `what-is-llms-txt` | unpublished | 76 | 5 | ✅ done | 2026-09-12 | **8 fixes. All 5 sources resolved.** presenc.ai FAILED audit: states Perplexity and Anthropic "publicly confirmed" llms.txt consumption, cites nothing; both only *publish* one for their own docs. Claim removed from body, quick answer, SEO stack and 2 FAQPage-schema answers. Google claim re-sourced to Google's own docs. Keyword conflict cleared. |
| `best-website-builder-for-gohighlevel-agencies` | live | 68 | 10 | ✅ done | 2026-09-12 | **2 fixes; content verified clean.** Re-verified against gohighlevel.com/pricing: $97/$297/$497 + 14-day trial, and every add-on — Branded Client Portal $49/sub-account, AI Employee $50 and $97/sub-account, dedicated IP $59 — all exact. $1,470 arithmetic correct. Rebill-with-markup vs at-cost correct. Fixed: a truncated sentence ("Anyone who will not name the pages and the profile."); refreshed the stale Aug 2 date and added annual figures. Page discipline is exemplary — it documents what it could **not** find on the vendor page. |
| `website-migration-cost-2026` | live | 60 | 12 | ✅ done | 2026-09-12 | **1 fix.** 90+ claim already correctly scoped; refuses to publish a market range; tells readers not to hire them for host-only moves. Mullenweg quote: date (14 Apr 2026), venue (WordPress Slack) and publication confirmed; exact wording unverifiable, publisher returns 403 — access limit, not fabrication. Added material context: Automattic's board placed Mullenweg on leave 9 Sep 2026. |
| `ai-referral-revenue-2026` | live | 57 | 5 | ✅ done | 2026-09-12 | **2 fixes.** 6.7x verified exactly ($11,614.78 / $1,733.35) against `ai-referral-data.json`; totals and window reconcile; data file even records a caught methodology error. Every figure computed, never typed — the best data discipline in the corpus. Fixed: the 6.7x rested on a **5-order** Google Ads base with no denominator shown, and the headline could read as "AI beat search" while Google organic ($49,083 / 152 orders) is several times ChatGPT in the same table. Both now disclosed. |

### Batch 2 — 5 pages, 40 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `woocommerce-low-conversion-rate` | live | 57 | 8 | ✅ done | 2026-09-13 | **2 fixes.** Best-sourced page in the corpus — every figure carries vendor, qualifier, verifiedAt and source in `spec-facts.json`, and it criticises its own sources. Contentsquare verified exactly (2.9%/1.7%, 99bn sessions, no overall figure published). Fixed: IRP headline had drifted 2.22% -> **2.26%** at source for the same month (revision note added); the "Dynamic Yield renders 0%" observation no longer held — page now renders values — replaced with the verified, linked finding that DY publishes **no global average at all**, which supports the argument better. 3 verifiedAt dates refreshed. |
| `nextjs-hosting-zero-cost` | live | 56 | 8 | ✅ done | 2026-09-13 | **No defects.** I initially flagged the 100 GB claim as stale because Fast Data Transfer is absent from Vercel's billable-resources table. It was my error: Vercel's Fair Use Guidelines still list Fast Data Transfer Hobby **up to 100 GB** and state the guidelines "are not Pro plan entitlements" — exactly the distinction the article already draws ("a fair-use guideline, not an itemised plan allowance"). Also correctly covers Fast Origin Transfer (10 GB) and the broad commercial-usage definition including the paid-consultant clause. |
| `wordpress-migration-cost` | live | 55 | 9 | ✅ done | 2026-09-13 | **2 fixes.** All dollar figures are first-party tiers, consistent sitewide. Kinsta verified verbatim ("Unlimited Free WordPress Migrations From All Hosts"). Fixed: SiteGround's *expert* transfer stated flatly as free — the Migrator plugin is free and unlimited from any host, but the expert transfer is plan-dependent, now qualified. Also corrected "WordPress founder" -> "co-founder" (Mullenweg co-founded with Mike Little, 2003). |
| `webflow-migration-cost` | live | 54 | 6 | ✅ done | 2026-09-13 | **No defects.** Site plans verified exactly: Starter free, Basic $15, Premium $25 billed yearly, with the May 13 2026 consolidation (old CMS/Business -> Premium) confirmed. Quotes Webflow's CMS import docs verbatim and tells readers to check seat pricing at source "rather than from a summary, including this one". Minor note, not fixed: "published estimates often price content at $15 to $50 per page" is vague attribution, but it is used as a foil rather than support. |
| `what-is-headless-commerce` | live | 53 | 9 | ✅ done | 2026-09-13 | **No defects — and it caught two elsewhere.** Every figure verified exact against Shopify: Basic $19, Grow $49, Advanced $299 (yearly), Plus from $2,300, and all four third-party payment fees 2% / 1% / 0.6% / 0.2%. The page already corrects other articles still quoting $29. That surfaced a real $29 error in `PLATFORM_COMPARISONS_..._2026-09-10.md` and a stale "$79 to $299" Shopify range in the `work/panda-patches` FAQ; both fixed. |

### Batch 3 — 5 pages, 47 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `aeo-playbook-built-into-every-website` | live | 52 | 6 | ✅ done | 2026-09-13 | **No defects.** Framing is careful throughout — "without promising inclusion, ranking, or citation". Measurement guidance correctly hedged: "Google **began testing** dedicated generative-AI performance reports in Search Console in June 2026. **Where the report is available**, use its dimensions instead of treating ordinary impression changes as proof of an AI Overview citation." Google source verified to exist with matching title. Schema `wordCount` 3975 is plausible. |
| `aeo-web-performance-glossary` | live | 52 | 8 | ✅ done | 2026-09-13 | **No defects.** All Core Web Vitals thresholds verified exact against web.dev: LCP 2.5s, INP 200ms, CLS 0.1, assessed at the **75th percentile**. CWV ranking claim correctly hedged as "alongside many other signals". Separately, on 12 Sep the conflicting `what is llms.txt` / `llms.txt example` keywords were removed from this page to unblock the depth post; the glossary definition was kept. |
| `how-much-does-a-website-cost` | live | 52 | 8 | ✅ done | 2026-09-13 | **3 fixes — closes the logged EARLY_STAGE defect.** Treated "free tier" as one product and stated "a free plan almost always means a vendor subdomain" as a general rule. True of free **builder** plans, false of free **component** tiers (Sanity, Supabase, Resend) sitting behind the client's own domain — PandaCodeGen's own model, so the page undercut it. Distinction now drawn before the checklist and in the bullet. Webflow Starter limits re-verified exact, and the 50-submission cap clarified as **lifetime**, not monthly. |
| `top-custom-web-development-agencies-usa-2026` | live | 52 | 15 | ✅ done | 2026-09-13 | **3 fixes.** Competitor handling is exemplary — neutral `publicFocus`, a `verify` prompt and a link to each firm's own site, no invented rankings or prices, and a commercial disclosure that states PandaCodeGen sells these services, appears in the list, does not rank itself first and bought no placement. Fixed: a plugin statistic credited to an "independent 10K-store study" is Studio Wombat's scrape of its **own plugin-customer database** (15,000 sites, not 10K) — every site had already bought a plugin, which biases a plugin-count average upward. Added a read date for the competitor descriptions. |
| `wordpress-vs-nextjs` | live | 52 | 10 | ✅ done | 2026-09-13 | **2 fixes.** The page already did the hard part — names the measurer and month, separates "share of all sites" from "share of known-CMS sites", warns these are detector estimates not a census. Both figures had drifted at source: 41.2% -> **40.3%** of all websites, 59.1% -> **58.8%** of known-CMS sites (W3Techs, 12 Sep 2026). Updated, with the August readings left visible so the drift is legible. |

### Batch 4 — 2 pages, 12 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `wordpress-vs-custom-code-real-cost-3-years` | live | 51 | 9 | ✅ done | 2026-09-13 | **3 fixes.** Every figure in the 3-year table sums correctly and the disclosure is textbook ("illustrative inputs for one scenario, not a quote"; "record the assumption instead of guessing"). But the custom column carried hosting at **$0 – $600**, contradicting our own `nextjs-hosting-zero-cost` page: Vercel Hobby is non-commercial, so a business site's floor is Pro at $20/mo = $720 over three years. Corrected to $720 – $1,500 and the total recomputed to **$7,820 – $10,100**. The error understated the column we sell. Ranges still overlap, so the page's conclusion holds. |
| `web-accessibility-statistics-2026` | live | 50 | 3 | ✅ done | 2026-09-13 | **No defects.** Every figure verified exact against WebAIM Million 2026: 95.9% of home pages with WCAG 2 failures (up from 94.8%), 56,114,377 errors at 56.1/page, 83.9% low contrast. Citations are generated from `research-facts.json` so the machine-readable list cannot drift from the visible one. Every finding carries a `limitation`, and the one that flatters us most (Next.js 27.1% below average) carries the strongest: "Association, not causation... site age, budget and builder skill, none of which were controlled for." |

### Batch 5 — 10 pages, 63 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `web-accessibility-glossary` | live | 47 | 5 | ✅ done | 2026-09-13 | **1 fix.** WebAIM figures verified against source: 83.9% low contrast and 53.1% missing alt text correct, and the top six failure types do account for 96% of errors. But missing form input labels read **52.8%** where WebAIM says **51%** — and 52.8 is WordPress's average error count in a neighbouring finding, so this looks like a transcription crossover. Fixed in `research-facts.json` and in the hardcoded copy here. |
| `webflow-true-cost` | live | 47 | 7 | ✅ done | 2026-09-13 | **Clean** (the $49 Growth redirect defect was fixed 12 Sep). Every Webflow price verified exact: Site plans Basic $15 / Premium $25 yearly; Workspace Core $19 / Growth $49; Ecommerce Standard $29 + 2%, Plus $74, Advanced $212 at 0% — and the Ecommerce tier survived the May 2026 consolidation unchanged. |
| `custom-website-5000-whats-included` | live | 46 | 4 | ✅ done | 2026-09-13 | **No defects.** Its only percentages are first-party payment terms (30% onboarding / 70% delivery milestone), consistent with `company-facts.ts`. No external statistics to drift. |
| `shopify-conversion-rate-speed-fix` | live | 46 | 7 | ✅ done | 2026-09-13 | **1 enhancement.** Both Shopify quotes verified verbatim (3.5% per 100ms; ~30% lower conversion at 2.5s vs 1.5s LCP). The page already refuses the causal read — "a population figure, not a per-store coefficient... you cannot multiply your own latency saving by 3.5%" — and calls out Google's own AI summary for stripping Shopify's hedges. Added the study's publication date (27 Apr 2026) and its 28-day collection window. |
| `agentic-browsing-pagespeed-score` | live | 45 | 6 | ✅ done | 2026-09-13 | **No defects.** Verified 12 Sep: names the exact audit source file, states it read the source "rather than anyone's description of it", and pins Chrome 150 / Lighthouse 13.4 with a 4 Sep read date. The "38 rules" figure circulating in SEO blogs is the secondary description this page explicitly refuses. |
| `wordpress-april-2026-evidence` | live | 44 | 9 | ✅ done | 2026-09-13 | **No defects.** Patchstack source verified in detail; the page's "April 5 to 7" timeline matches exactly (5 Apr attack triggered, 7 Apr Plugin Review team confirmed and removed), and it attributes to Patchstack rather than asserting directly. |
| `top-nextjs-agencies-2026` | live | 43 | 12 | ✅ done | 2026-09-13 | **No defects.** Same exemplary competitor pattern as the USA agencies page: "alphabetical and non-ranked. No company paid for inclusion", each firm "described only from what its own site publishes as of the check date", plus a commercial disclosure. |
| `perfect-seo-score-no-traffic` | unpublished | 42 | 0 | ✅ done | 2026-09-12 | **3 fixes, read in full.** All AI figures reconcile exactly to `first-party-measurements.json` (36 orders, $11,186.59, Google Ads $7,580.84). Adobe 42% / Shopify ~50% verified and dated. Fixed: draft treated conversion-rate studies as contradicting its own AOV finding (different metrics; the real contradiction is Shopify's +14% AOV); channel table summed to 94.6% unexplained; Google Ads read as conflicting with the Paid Ads row. **Open:** the 4 non-AI channel figures are not in the single-source JSON the draft says every figure comes from. |
| `divi-theme-slow` | live | 41 | 8 | ✅ done | 2026-09-13 | **No defects.** No external statistics or vendor figures — diagnostic content built on first-party measurement. |
| `website-rebuild-cost-2026` | live | 41 | 5 | ✅ done | 2026-09-13 | **No defects.** No external statistics. Mullenweg attribution corrected to co-founder on 13 Sep as part of the sitewide fix. |

### Batch 6 — 10 pages, 63 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `saas-software-pricing-audit-2026` | live | 40 | 9 | ✅ done | 2026-09-13 | **No defects.** No unsourced external statistics; vendor claims carry a read date. |
| `website-redesign-cost` | live | 40 | 4 | ✅ done | 2026-09-13 | **No defects.** No external statistics. Already rejects industry averages in favour of named first-party inputs. |
| `ai-search-visibility-tracking` | live | 39 | 4 | ✅ done | 2026-09-13 | **No defects.** Every figure in both tables reconciles exactly: group shares 54.1/11.6/21.1/13.3 against 3,627+774+1,411+888 = 6,700 impressions; running shares 54.1 through 100% across 7 rows; page counts 1+2+7+67 and 6+71 both = 77. Window and export date stated (18 May–13 Aug 2026, exported 19 Aug) with the source named. |
| `wix-migration-cost` | live | 39 | 6 | ✅ done | 2026-09-13 | **No defects.** No external statistics. The invented redirect-dip percentages were removed from the draft source on 12 Sep; the live page never carried them. |
| `cms-market-share-2026` | live | 38 | 5 | ✅ done | 2026-09-13 | **1 fix.** Figures single-sourced from `market-share.json` via 8 helper calls, and `source.limitation` renders to the reader. But the currency warning I added on 13 Sep was not surfaced — the page rendered `limitation` only. Now renders `source.currency` too, and `SeriesSource` in `market-share.ts` was missing the `currency`/`spotCheckedAt` fields, which would have failed the build. |
| `leaving-webflow-2026` | live | 38 | 8 | ✅ done | 2026-09-13 | **No defects.** All Webflow figures verified: Premium $25 yearly / $39 monthly with 20,000 CMS items; Ecommerce Standard $29 + 2% with 500 items, Plus $74 with 5,000 and no fee, Advanced $212. Dated to the vendor read. |
| `cheap-web-developer` | live | 37 | 5 | ✅ done | 2026-09-13 | **No defects.** No external statistics; the 90+ claim is correctly scoped to named representative pages. |
| `how-to-speed-up-your-website` | live | 35 | 6 | ✅ done | 2026-09-13 | **No defects.** First-party measurements of its own page, and the arithmetic is exact: JavaScript 235 KB of 427 KB total = 55.0%; HTML compression 644 KB → 58.8 KB = 11.0x. Notable for publishing the unflattering row about itself — "publishing a speed guide does not exempt us from the finding." |
| `shopify-vs-custom-website` | live | 35 | 7 | ✅ done | 2026-09-13 | **No defects.** Figures single-sourced through 5 helper calls; no unsourced external statistics. |
| `wordpress-ai-security-risk-2026` | live | 35 | 9 | ✅ done | 2026-09-13 | **No defects.** Security claims carry read dates and attribute to named vendor advisories. |

### Batch 7 — 10 pages, 65 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `how-to-migrate-wordpress-to-nextjs` | live | 34 | 8 | ✅ done | 2026-09-13 | **No defects.** No external statistics; 90+ claim correctly scoped to agreed representative pages. |
| `lovable-site-not-showing-on-google` | live | 33 | 10 | ✅ done | 2026-09-13 | **No defects — the live page is stronger than its deleted draft was.** Vercel study dated exactly right (published 17 Dec 2024, verified) and the page makes the currency point itself: "a long time ago in this particular area", plus "Neither OpenAI nor Anthropic documents current rendering behavior" and "be suspicious of anyone stating it as a current fact in either direction". Figures 11.5/23.8% confirmed. |
| `meta-conversions-api-setup-cost` | live | 33 | 5 | ✅ done | 2026-09-13 | **No defects.** The 10.4% figure sits in the most careful caption in the corpus: founder-affiliation disclosed by name, "not independent client proof", "the capture year is not visible in the image", and "a change in what the platform reports rather than evidence of more leads occurring". |
| `woocommerce-too-slow` | live | 33 | 7 | ✅ done | 2026-09-13 | **1 fix.** WebP claim said "roughly 25 to 34% smaller than comparable JPEG" but dropped Google's qualifier. Google's wording is 25-34% smaller **at equivalent SSIM quality index** — a saving at matched quality, not a free one. Qualifier restored. |
| `is-squarespace-bad-for-seo` | live | 32 | 7 | ✅ done | 2026-09-13 | **No defects.** Figures single-sourced through 4 helper calls; no unsourced external statistics. |
| `pagepro-alternatives` | live | 32 | 7 | ✅ done | 2026-09-13 | **No defects.** Dated review (3 Aug 2026) plus an explicit disclosure that PandaCodeGen wrote the page and is one of the compared providers, and a warning not to treat ratings, minimums or partner badges as current facts. |
| `webflow-vs-custom-website` | live | 32 | 5 | ✅ done | 2026-09-13 | **No defects.** No unsourced statistics; vendor claims carry read dates. |
| `why-we-chose-nextjs-over-wordpress-2026` | live | 32 | 9 | ✅ done | 2026-09-13 | **No defects; the logged defect was already fixed.** The categorical speed/security/free-hosting claims flagged on 11 Sep are not in the live body. It now reads "We do not treat WordPress as automatically slow, insecure or wrong" and "Neither platform guarantees performance, security, SEO, low cost or ownership by itself", and qualifies hosting as "not a universal free-business-hosting promise". |
| `is-it-cheaper-to-build-your-own-website` | unpublished | 32 | 0 | ✅ done | 2026-09-12 | **8 fixes, read in full.** CVEs verified (CVE-2026-14894 CVSS 9.8 / CVE-2026-32475, 250k+190k Wordfence blocks — accurate). Lighthouse 33-rule claim verified against the live post's source-file citation and version-pinned. Fixed: "Every page scores 90+" contradicting "pages named in your quote" (SEO review P1 #4); Panda Patches stat duplicated with one copy missing the founder-affiliation disclosure; truncated sentence; duplicate opening paragraphs. |
| `core-web-vitals-explained` | live | 31 | 7 | ✅ done | 2026-09-13 | **No defects.** Thresholds match web.dev exactly — LCP 2.5s, INP 200ms, CLS 0.1 at the 75th percentile — and it correctly frames them as **field** values. |

### Batch 8 — 10 pages, 65 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `saas-price-increases-2026-tracker` | live | 31 | 8 | ✅ done | 2026-09-13 | **No defects.** Microsoft 365 increases verified exact: Basic $6 to $7 (+16.7%), Business Standard $12.50 to $14 (+12%), Business Premium flat at $22, effective 1 July 2026. Webflow figures match the May 2026 consolidation already verified in batch 5. |
| `spending-more-on-ads-fewer-orders-tracking` | live | 31 | 7 | ✅ done | 2026-09-13 | **No defects.** Meta's 17.8% figure quoted exactly ("lower cost per result", verified against Meta's 15 April 2026 announcement) and framed correctly: Meta's own figure comparing two groups of advertisers, not a before-and-after, plus the selection-effect warning that advertisers who implement server-side tracking "differ from those who have not in more ways than the tracking". |
| `how-website-speed-affects-seo` | live | 30 | 3 | ✅ done | 2026-09-13 | **No defects.** The one scope phrase attributes to Google rather than asserting. |
| `wordpress-plugin-security-2026` | live | 30 | 8 | ✅ done | 2026-09-13 | **No defects, and unusually good faith.** Ten single-sourced specs with qualifiers and dates. It documents a **CVSS 9.5 unauthenticated RCE in Next.js itself** (GHSA-2xp9-vwfh-vxw4, Image Optimization AVIF path) on a page arguing plugin risk — a flaw in its own recommended stack. Re-verified 13 Sep: 16.3.3 and 15.5.24 are still the latest patches, and `package.json` declares `^16.3.3`, so this site is on the patched LTS. The miniOrange spec also states that paid-edition install counts are unpublished, "so the total exposed population is unknown". |
| `gohighlevel-keep-crm-replace-website` | live | 29 | 8 | ✅ done | 2026-09-13 | **No defects.** No external statistics. |
| `shopify-slow-losing-sales` | live | 29 | 4 | ✅ done | 2026-09-13 | **No defects.** No unsourced statistics. |
| `shopify-dawn-theme-slow` | live | 28 | 5 | ✅ done | 2026-09-13 | **No defects.** Claims carry read dates. |
| `website-developer-agency` | live | 28 | 6 | ✅ done | 2026-09-13 | **No defects.** No external statistics; tier figures match `company-facts.ts`. |
| `wordpress-killer` | live | 28 | 8 | ✅ done | 2026-09-13 | **No defects.** Mullenweg attribution corrected to co-founder on 13 Sep in the sitewide fix. |
| `wordpress-plugins-destroy-speed` | live | 28 | 8 | ✅ done | 2026-09-13 | **No defects.** The one scope phrase is inside an attributed Reddit quote with a verify link. |

### Batch 9 — 10 pages, 60 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `cloudflare-emdash-wordpress-replacement` | live | 27 | 6 | ✅ done | 2026-09-13 | **1 fix.** Repo figures read 2 Aug 2026, which predates material news: on **26 Aug 2026 Cloudflare said EmDash v1.0 is coming**, after running it on its own high-traffic blog. Added, framed as not-yet-shipped — "Coming is not shipped, and dogfooding one blog is not the same as a plugin ecosystem" — so the page's don't-migrate-yet advice stands. |
| `google-algorithm-updates` | live | 27 | 6 | ✅ done | 2026-09-13 | **2 fixes — the most consequential staleness found so far.** The register showed the **August 2026 spam update as "still rolling out"** 26 days after it started. Google's dashboard says it completed in **2 days, 16 hours**. Because `UPDATE_STATS.latest` filters out in-progress entries, the site was also reporting **June** as the latest update when August had finished three weeks earlier. Fixed both; `inProgressUpdate` now correctly returns null and its render site is guarded. All six 2026 entries now match Google's dashboard exactly. `REGISTER_UPDATED` refreshed to 13 Sep. |
| `shopify-store-speed-optimization` | live | 27 | 7 | ✅ done | 2026-09-13 | **No defects.** Figures single-sourced; no unsourced statistics. |
| `squarespace-vs-custom-website` | live | 27 | 6 | ✅ done | 2026-09-13 | **1 addition; the logged defect was already fixed.** The page now states "we do not put a score on either option" and treats scheduling, campaigns, member areas and chat as separate billed products — so the broad performance/savings assertions flagged on 11 Sep are gone. Added the clarification the research recommended and the page lacked: **Acuity's booking mail is operational and included, Email Campaigns is marketing with its own quota**, so counting Campaigns into booking-notification cost inflates the Squarespace total in our favour. |
| `woocommerce-migration-cost` | live | 27 | 6 | ✅ done | 2026-09-13 | **No defects.** Live page carries none of the defects found in its deleted draft. |
| `gohighlevel-website-speed` | live | 26 | 8 | ✅ done | 2026-09-13 | **No defects.** Claims carry read dates. |
| `shopify-headless` | live | 26 | 5 | ✅ done | 2026-09-13 | **No defects.** Argues against its own product with the interest disclosed: "For most stores, no — and we build headless storefronts, so read that as a filter rather than a pitch." |
| `squarespace-migration-cost` | live | 26 | 4 | ✅ done | 2026-09-13 | **No defects.** Its only percentage is first-party payment terms. |
| `nextjs-sanity-stack` | live | 25 | 6 | ✅ done | 2026-09-13 | **2 fixes, completing the read owed from 12 Sep.** Plan facts verified exact: Free $0 with 20 seats, 2 roles, 2 public-only datasets; Growth $15/seat with 50 seats, 5 roles; and the page already states correctly that Growth does not raise the dataset count. Added the meter most likely to bind — documents 10,000 Free / 25,000 Growth, drafts counting toward it — and the fact that API, CDN, asset and bandwidth allowances are **identical on both plans**. Recheck date refreshed. Page also pushes back on its own stack: "Free is not accurately described as covering most business websites." |
| `woocommerce-vs-custom-website` | live | 24 | 6 | ✅ done | 2026-09-13 | **No defects.** Live page carries none of the defects found in its deleted draft. |

### Batch 10 — 10 pages, 52 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `fix-meta-ad-tracking-2026` | live | 23 | 7 | ✅ done | 2026-09-13 | **No defects.** Live page carries none of the defects found in its deleted draft. |
| `wix-vs-custom-website` | live | 23 | 6 | ✅ done | 2026-09-13 | **No defects.** Explicitly refuses absolutes: "Neither one is always faster, always cheaper, always safer, or always better for search." |
| `webflow-user-accounts-sunset-date-2026` | live | 22 | 5 | ✅ done | 2026-09-13 | **No defects.** Sunset date verified: 29 January 2026, with enablement cut off 31 January 2025. Critically, it carries the detail that matters most commercially — the gate opens, logins stop, and **Stripe subscriptions keep charging** unless migrated. |
| `which-website-builders-can-go-headless` | live | 22 | 3 | ✅ done | 2026-09-13 | **No defects.** Twenty-four single-sourced specs on API capability, each qualified and dated. Spot-checked three: Webflow Cloud supports Astro and Next.js, Shopify Storefront is GraphQL-only with no REST equivalent, and Squarespace exposes nine back-office Commerce APIs with no content, page or storefront API — all correct. |
| `how-to-cut-saas-bill-2026` | live | 21 | 6 | ✅ done | 2026-09-13 | **No defects.** Vendor claims carry read dates. |
| `why-competitor-outranks-you` | live | 20 | 4 | ✅ done | 2026-09-13 | **No defects.** Correctly hedges eligibility against inclusion — "indexed and able to show a snippet, but inclusion is not guaranteed". |
| `shopify-plus-still-slow` | live | 19 | 6 | ✅ done | 2026-09-13 | **No defects.** No unsourced statistics. |
| `google-universal-commerce-protocol-what-it-means-for-your-store` | live | 18 | 4 | ✅ done | 2026-09-13 | **1 fix (currency).** Framing verified still exactly right — UCP is live only for eligible US merchants through an early access programme, and the page already says access "depends on your platform, your country, your payment provider, what you sell, and whether Google has approved you". Review was 51 days stale though, so added a 13 Sep re-check plus the May 2026 Universal Cart launch (cross-retailer across Search, Gemini, YouTube and Gmail), noting neither changes the answer. |
| `will-migrating-hurt-my-seo` | live | 18 | 6 | ✅ done | 2026-09-13 | **No defects.** No unsourced statistics; redirect guidance matches Google's site-move documentation. |
| `do-you-own-your-website` | live | 17 | 5 | ✅ done | 2026-09-13 | **No defects.** No external statistics; ownership claims match `company-facts.ts`. |

### Batch 11 — 10 pages, 43 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `how-to-achieve-100-pagespeed` | live | 17 | 5 | ✅ done | 2026-09-13 | **No defects.** No external statistics. |
| `why-is-my-website-loading-so-slow` | live | 17 | 5 | ✅ done | 2026-09-13 | **No defects.** No external statistics. |
| `build-vs-buy-software-2026-cost-comparison` | live | 16 | 5 | ✅ done | 2026-09-13 | **No defects.** Claims carry a read date. |
| `for-agencies-offer-custom-web-development` | live | 16 | 3 | ✅ done | 2026-09-13 | **No defects.** The only guarantee language is a refusal: "PandaCodeGen does not publish a guaranteed markup or margin." |
| `squarespace-too-slow` | live | 16 | 5 | ✅ done | 2026-09-13 | **No defects.** No external statistics. |
| `wix-too-slow` | live | 16 | 4 | ✅ done | 2026-09-13 | **No defects.** No external statistics. |
| `elementor-kills-seo` | live | 15 | 5 | ✅ done | 2026-09-13 | **No defects.** No external statistics. |
| `shopify-stocky-sunset-date-2026` | live | 15 | 4 | ✅ done | 2026-09-13 | **4 fixes — a passed-deadline page.** Date verified correct (31 Aug 2026, delisted from the App Store 2 Feb 2026), but it had passed 13 days earlier and the page still read as a pre-deadline migration plan. Added a post-deadline notice and reframed every "before the deadline" instruction. The one step still urgent is exporting purchase orders, stock counts and supplier records while Shopify's read-only window lasts — it has published no end date for that. |
| `how-to-fix-slow-wordpress` | live | 14 | 4 | ✅ done | 2026-09-13 | **No defects.** No external statistics. |
| `how-long-does-a-custom-website-take` | live | 9 | 3 | ✅ done | 2026-09-13 | **No defects.** Delivery ranges match `company-facts.ts`. |

### Batch 12 — 1 pages, 3 sources

| Page | Type | Risk | Sources | Status | Date | Findings |
|---|---|---:|---:|---|---|---|
| `wordpress-traffic-drop-speed` | live | 9 | 3 | ✅ done | 2026-09-13 | **No defects.** Correctly states "Rankings, traffic and timing are not guaranteed." |

## Known targets already identified

From the 10-11 September research reports, before auditing starts:

| Page | Known defect |
|---|---|
| `webflow-true-cost` | Adds a $49 Growth Workspace charge for migration redirects that a paid Site plan already includes |
| `nextjs-sanity-stack` | Treats approval query filters as proof of submission privacy; imprecise Free-to-Growth boundaries |
| ~~`how-much-does-a-website-cost`~~ | ✅ **FIXED 13 Sep.** Builder plans and component tiers now separated |
| ~~`why-we-chose-nextjs-over-wordpress-2026`~~ | ✅ **RESOLVED 13 Sep.** Live body was already clean; the finding described a superseded retrieval, exactly as the research warned |
| ~~`squarespace-vs-custom-website`~~ | ✅ **RESOLVED 13 Sep.** Performance/savings assertions already removed; added the Acuity-vs-Campaigns email distinction |
| ~~`aeo-web-performance-glossary`~~ | ✅ FIXED 12 Sep — both conflicting keywords removed; glossary definition retained |

## Pages touched by targeted fixes (not yet fully audited)

| Page | What was fixed | Still needs |
|---|---|---|
| `webflow-true-cost` | Redirect/$49 Growth defect | Full read; it is batch 3 |
| `nextjs-sanity-stack` | Privacy claim + plan FAQ | Full read |
| Homepage, `service-faqs.ts`, `gohighlevel` service, `company-facts.ts` | 90+ scope aligned to named representative pages; lab vs CrUX separated | — |

## From the 12 September SEO review — live Priority 1 defects

All four are evidence defects and sit in this skill's scope. None audited yet.

| Page | Defect | Location |
|---|---|---|
| ~~`webflow-true-cost`~~ | ✅ **FIXED 12 Sep.** Verified against Webflow: redirects need a paid Site plan or a paid Workspace plan. The $49 Growth inference is removed | `src/app/blog/webflow-true-cost/page.tsx` |
| ~~`nextjs-sanity-stack`~~ | ✅ **FIXED 12 Sep.** Sanity docs: "The filter selects documents, not queries"; public datasets are queryable unauthenticated; drafts are excluded but a pending document is not a draft | `src/app/blog/nextjs-sanity-stack/page.tsx` |
| ~~`nextjs-sanity-stack` FAQ~~ | ✅ **FIXED 12 Sep.** Verified on sanity.io/pricing: both plans have 2 datasets (Growth allows private), documents 10k->25k, and API/asset/bandwidth allowances are identical | `src/data/blog.ts` |
| ~~Homepage + service FAQs~~ | ✅ **FIXED 12 Sep.** 24 files, including `/ai-info/pricing-and-guarantees`, already used the named-representative-pages standard; the homepage was the outlier. All bare "every page scores 90" claims now scoped, and "PageSpeed test" replaced with "Lighthouse lab test" so lab and CrUX field data are no longer conflated | `page.tsx`, `service-faqs.ts`, `gohighlevel/PageContent.tsx`, `company-facts.ts` |

The same "every page" overclaim was found and fixed in the `is-it-cheaper` draft, so it is
spreading between surfaces. Fix the source of truth in `company-facts.ts` phrasing and
propagate.

## Cross-corpus fixes triggered by audits

| Fix | Scope |
|---|---|
| "WordPress founder" -> "co-founder" (co-founded with Mike Little, 2003) | 5 live pages |
| Shopify Basic $29 -> $19 yearly / $25 monthly | 10 Sep research doc |
| Stale "$79 to $299" Shopify range | `work/panda-patches` FAQ |
| **Panda Patches presented as Shopify-replacement evidence** — it was a WordPress/WooCommerce store and was never on Shopify, so a Shopify fee comparison did not belong in it | `work/panda-patches` FAQ |
| "Independent 10K-store study" -> Studio Wombat's own-customer sample, 15,000 sites, with the selection effect stated | `services/woocommerce` (3 places) + agencies article |

## Systemic issue: $0 commercial hosting

Vercel Hobby is restricted to non-commercial personal use, so no client business site can run on it. Two pages claimed or implied otherwise and both are fixed:

| Page | Claim | Fix |
|---|---|---|
| `wordpress-vs-custom-code-real-cost-3-years` | Custom hosting $0 – $600 over 3 years | $720 – $1,500; total recomputed |
| `services/wordpress-migration` | "There's $0/mo Vercel hosting that's faster" | "$20/mo on Pro... the honest comparison is $20 against $100, not free against $100" |

Both understated the option being sold. Sitewide sweep for remaining $0-commercial-hosting claims is clean.

## Note on the 11 September known-defect list

Two of the six logged defects turned out to be **already fixed in the live body**. The research report had flagged this risk itself — it warned that retrieved page representations lag unpublished revisions and said plainly: *"Verify which body is actually published before editing"* and *"Do not treat old snippets as definitive live findings."* That caution was correct, and it is the reason no incorrect edit was made to either page.

| 2026-09-13 | **7 CLOSED** | 8 | 1 fix across 8 pages; 7 clean. Also closed the two remaining known-defect pages, both already remediated in their live bodies. |

| 2026-09-13 | **8 CLOSED** | 10 | **0 fixes — all 10 clean.** First batch with nothing to correct. Verified Meta's 17.8%, Microsoft 365's July increases, and that the Next.js security data is still current with this site on the patched LTS. |

| 2026-09-13 | **9 CLOSED** | 9 | 5 fixes across 9 pages. The Google update register was showing a completed update as still rolling out, and therefore naming the wrong latest update — a staleness bug in derived data, not prose. |

| 2026-09-13 | **11 CLOSED — CORPUS COMPLETE** | 11 | 4 fixes, all from the passed-deadline sweep. All 88 targets audited. |
| 2026-09-13 | **10 CLOSED** | 10 | 1 fix across 10 pages, and it was currency rather than error. Sunset-date and protocol-status pages both held up. |

## Passed-deadline sweep — 13 September 2026

Prompted by `shopify-stocky-sunset-date-2026`, which was still written as a pre-deadline plan
13 days after its deadline. Swept every future-tense claim attached to a 2026 date that has
since passed. **Four pages carried stale framing**, all now corrected:

| Page | Was | Now |
|---|---|---|
| `shopify-stocky-sunset-date-2026` | "export before the deadline" | post-deadline notice; export while read-only access lasts |
| `shopify-app-costs-real-monthly-bill` | "Time-critical: Stocky access ends 31 Aug" | "Stocky access ended on 31 August 2026" |
| `fix-meta-ad-tracking-2026` | "Time-critical: sunset dated 26 Aug 2026" | "This sunset happened on 26 August 2026" |
| `spending-more-on-ads-fewer-orders-tracking` | "move it before the deadline" | reframed as the first thing to rule out for a September drop |

`webflow-user-accounts-sunset-date-2026` was already correct — it says "Sites that did not
migrate before the deadline", past tense.

**This is a recurring maintenance class, not a one-off.** Any page whose value depends on a
date needs re-reading after that date passes, because the advice inverts rather than expires.

## Canon check — run after every batch

Fixing a fact on one page does not make it canon. After each batch, re-grep the corpus for the
facts changed, because the same claim is usually written in several places and only one of them
gets edited.

Run on 13 September across seven changed facts. Five held; **two did not**:

| Fact | Result |
|---|---|
| 90+ scoped to named representative pages | consistent |
| No $0 commercial hosting | consistent |
| Shopify Basic $19/$25 | consistent (the one live `$29` is a page correcting others) |
| Mullenweg co-founder | consistent, 5 of 5 |
| Webflow redirects on any paid Site plan | consistent |
| Sanity: 2 datasets both plans, identical API allowance | **BROKEN** — `blog.ts:60` still said "paid tiers add datasets, seats and API volume", contradicting the FAQ one line below that I had corrected. Fixed. |
| WordPress share | **BROKEN** — `blog.ts` said "59.0% today" in the excerpt when 59.0% is the dated August reading and the September re-check is 58.8%. Reworded as a dated reading and the re-check added. |

Both breaks were in `blog.ts`, where FAQ answers and card copy duplicate figures that live in a
data file. That is where the next one will be too.

## Log

| Date | Batch | Pages | Result |
|---|---|---|---|
| 2026-09-12 | pre-batch | 5 drafts | 15 defects fixed. Worst: a Deloitte 0.1s finding multiplied 25x, and a "20% of WooCommerce stores close" stat whose source chain resolves to Wikipedia. |
| 2026-09-12 | scope fix | — | Registry checked. 5 stale drafts archived, 2 non-posts dropped, tracker re-ranked on 88 real targets. Four of the original top six slots were superseded drafts that could not affect live traffic. |
| 2026-09-12 | 1 | 5 | `shopify-app-costs-real-monthly-bill` clean on three spot-checks. `lovable-site-not-showing-on-google` (now deleted) had a scope overstatement. 3 unpublished drafts moved to publication readiness. |
| 2026-09-13 | **6 CLOSED** | 10 | 1 fix across 10 pages; 9 clean. Lower-risk tier behaves as predicted — fewer external sources means far less drift. Caught a second build error of my own: I added `source.currency` to the market-share JSON on 13 Sep without adding it to the TypeScript interface. |
| 2026-09-13 | **5 CLOSED** | 9 | 2 fixes across 9 pages; 7 clean. The whole high-risk tier plus batch 5 is now done. Best find: WebAIM's form-label figure read 52.8% against a true 51%, almost certainly transcribed from the WordPress error-count figure sitting two entries away in the same file. |
| 2026-09-13 | **4 CLOSED** | 2 | Both high-risk-tail pages done. `web-accessibility-statistics-2026` is the cleanest page audited so far. The cost model contained the most consequential live defect of the batch: a $0 hosting floor that contradicted our own published position and understated our own column. Also caught and fixed a build-breaking `sourceLinkClass` reference I introduced while editing. |
| 2026-09-13 | **3 CLOSED** | 5 | 8 fixes across 5 pages; 2 clean. Closed the logged `how-much-does-a-website-cost` defect. Biggest catch: a plugin statistic sold as an "independent 10K-store study" is a plugin vendor's scrape of its own 15,000 customers — it was on a money page. |
| 2026-09-13 | 3 | 3 of 5 | `wordpress-vs-nextjs` and `how-much-does-a-website-cost` done. `market-share.json` reads 59.0% at period 2026-08 against 58.8% today; rather than create a mixed-date series I recorded a dated spot-check and currency warning in its source block. Remaining in batch 3: the two AEO pages. |
| 2026-09-13 | 3 | 1 of 5 | `top-custom-web-development-agencies-usa-2026` done, 3 fixes. The user caught a logic error I had missed: I corrected Shopify prices in the Panda Patches FAQ without questioning why a WooCommerce migration was being compared to Shopify fees at all. Swept the corpus; that was the only instance. |
| 2026-09-13 | **2 CLOSED** | 5 | 4 fixes across 5 pages; 3 pages clean. Cross-corpus fixes triggered by this batch: "WordPress founder" -> "co-founder" on **5 live pages**; Shopify Basic $29 -> $19/$25 in the 10 Sep research doc; stale "$79 to $299" Shopify range in the `work/panda-patches` FAQ. Note: the $29 error sat in a research doc I audited on 12 Sep and called clean — I had checked internal consistency and arithmetic, but not vendor prices against source. |
| 2026-09-12 | **1 CLOSED** | 5 | All batch-1 pages audited. Live pages are in markedly better shape than the drafts were: `shopify-app-costs` and the GHL comparison came back essentially clean, and the two remaining needed disclosure rather than correction. Four SEO-review Priority 1 defects fixed. **Not typechecked** — `node_modules` is absent, so the two JSX edits in `ai-referral-revenue-2026` need a build before deploy. |
