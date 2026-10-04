# G-ctr-and-legal: CTR/snippet review and legal/regulatory review of the new build

Audit date: 4 Oct 2026. New build: http://localhost:3400 (source snapshot in scratchpad\newsite). Live site used only for before/after title comparison and one pre-consent network check.
Skills run: `ctr-snippet-optimization`, `legal-regulatory-compliance`.
Every finding is marked CONFIRMED (observed) or INFERRED.

## Top findings (ranked by impact)

1. **The website assistant uses Google's unpaid Gemini tier and is served to UK and EU visitors, which Google's Gemini API terms do not allow.** CONFIRMED. Google's Gemini API Additional Terms (read today, ai.google.dev/gemini-api/terms): "You may use only Paid Services when making API Clients available to users in the European Economic Area, Switzerland, or the United Kingdom." The code says it runs on the free tier (`src/app/api/assistant/route.ts:13`) and has no country check. The privacy policy also says so openly (section 2.4). In the last 90 days GSC shows 9,683 UK, 3,381 Dutch and 3,273 German impressions (`device_country_90d.json`). Fix: move to a paid key, or turn the assistant off for EEA/UK/Swiss visitors. Have a lawyer look at the GDPR side too, because under the unpaid tier Google may use what people type, and the assistant has no consent step.
2. **The policies say Vercel Web Analytics waits for consent. The code loads it before any choice is made.** CONFIRMED. `src/components/consent/ConsentManagedServices.tsx:27-34` moved `<Analytics />` out of the consent gate on 14 Sep 2026. The Privacy Policy (updated 3 Oct, section 7) and the Cookie Policy (updated 22 Jul, section 3: "Their client-side code loads only after you allow analytics") both put Vercel in the consent-gated analytics group. On the live site, a fresh visit with no choice made requested `/_vercel/insights/script.js` (Playwright, 4 Oct). Locally it does not fire only because the code skips it on localhost. Either rewrite both policies to describe cookieless analytics that runs without consent, or put it back behind the gate. Whether cookieless analytics needs consent for UK/EU visitors is a legal question, so get a professional view.
3. **The new design loads a font from Fontshare on every page before consent, and no policy names Fontshare.** CONFIRMED. On all five tested pages, before any choice, the browser requested `api.fontshare.com/v2/css` and `cdn.fontshare.com/wf/...`. The source is `src/components/redesign/PreviewShell.tsx:17,30-31` (Zodiak font). This is new: the live site does not do it. Each request sends the visitor's IP address to a third party. A German court has ruled against websites embedding Google Fonts this way (INFERRED to apply by analogy). Self-host the font file. That also removes a render-blocking third-party request.
4. **First-touch attribution is saved in the browser before consent and later sent with enquiries. Neither policy mentions it.** CONFIRMED. `ConsentProvider.tsx:181-186` runs `captureFirstTouch()` "regardless of preferences". That writes `pcg_first_touch_source` (referrer, landing page, timestamp) to sessionStorage on every page, live and new. `/api/submit-quote/route.ts:114-117,173-179` emails it with each lead. It is missing from the Cookie Policy inventory (section 4) and the Privacy Policy (section 2). At minimum, disclose it. Under UK/EU device-storage rules it may need consent because it is not strictly necessary, so get professional review (INFERRED).
5. **A blog post makes a false statement inside its own commercial disclosure.** CONFIRMED. `/blog/top-custom-web-development-agencies-usa-2026` (`page.tsx:307`) says "PandaCodeGen is not on those directories", meaning Clutch and DesignRush. The site links its own Clutch profile from the homepage, the case studies and the Organization `sameAs` (`company-facts.ts:303`; `SocialProof.tsx:40`). Correct it, for example: "PandaCodeGen has one Clutch review and is not ranked in these lists."
6. **There is little to gain from CTR work right now, and no candidate is free to change yet.** CONFIRMED. Leaving out the frozen Vercel post, every page below the site's own CTR line adds up to about **26 estimated lost clicks per 90 days**. All of them have an open window: the Experiment 5 read is on 8 Oct, content was edited on 1 to 4 Oct, and the redesign deploy is still pending. Recommendation: change no titles now, then pilot 3 titles about 4 weeks after the redesign is live (plan below).
7. **Best CTR candidates once the windows close:** `shopify-app-costs-real-monthly-bill` (5,556 impressions, CTR 0.13% against a 0.25% bucket median; the "Checked Aug 2" in the title is aging) and `wix-too-slow` (impressions went from 19 to 387 between the last two 28-day periods with 0 clicks; search results for "why is wix so slow" are mostly about editor lag, which the page covers but the title does not mention). Rewrites are in Part A, section 3. CONFIRMED data, INFERRED diagnosis.
8. **Accessibility is strong, with one real gap: the cookie banner covers the item that has keyboard focus.** CONFIRMED. axe-core 4.11.1 (WCAG 2.0/2.1/2.2 A and AA) on home, a service page, a blog post, pricing and contact, desktop and mobile, found 1 violation in total (1.85:1 contrast on an 11px eyebrow on `/services/wordpress-migration`). All images have alt text, every form field has a label, there is a skip link, and the focus ring is visible on every tab stop tested. The problem: at 1366x900 the fixed 121px banner completely hides 15 of 110 focused elements on home and 16 of 97 on `/blog/divi-theme-slow`. The banner itself only gets focus after about 112 Tab presses. This is a risk under WCAG 2.2 SC 2.4.11, Focus Not Obscured (INFERRED reading of the criterion).
9. **Disclosure is mostly in good shape. The gap is the referral programme.** CONFIRMED. There are no affiliate links or referral parameters in `src`. Both "top agencies" posts open with a commercial disclosure saying we are on the list and nobody paid to be included. All 10 `/work` pages show a relationship disclosure. Reviews are linked to their source and there is no AggregateRating. The gap: `/partners` pays a "15% commission on the final sale" to referral partners but never asks them to say they are paid when they recommend PandaCodeGen. Under the FTC Endorsement Guides an advertiser is expected to tell paid endorsers to disclose. Add that requirement to the partner terms.
10. **Small title fixes.** CONFIRMED. `/about/hassan` and `/about/imran` show the brand twice in the title on both live and new ("... at PandaCodeGen | PandaCodeGen"), because the page title already contains the name and `layout.tsx:52` adds `%s | PandaCodeGen`. The redesign also changes the meta description of the homepage, the top click page (40 clicks in 90 days), dropping "Fixed pricing from $1,500" and "code you own". Record that as a snippet change that ships with the deploy.

---

# Part A: CTR and snippet optimization

## Step 0 answers (fallbacks used)

| Question | Answer |
|---|---|
| GSC data available? | Yes. 90-day page and page+query exports, plus two 28-day windows. CONFIRMED |
| Templated or unique titles? | Unique. Each blog post sets `const title` in its own `page.tsx`; site pages use `layout.tsx` template `%s \| PandaCodeGen`. CONFIRMED |
| Title/description changes in the last 6 weeks? | Titles of candidate pages have not changed since at least 8 Sep (the files were re-added at that date; `git log -L` shows no later title edits). But bodies changed 30 Sep to 4 Oct (redesign move, split-cover opening, plain-wording pass, Reddit quotes, EmDash 1.0 update). The undeployed redesign is itself a large change to every page. CONFIRMED |
| Brand placement rule? | Not written down. In practice: blog titles carry no brand; site pages end with "\| PandaCodeGen". INFERRED |
| Success target? | Not stated. I used clicks on a small set of pages, as the skill's default. |
| Growth-stage gate | 252 clicks and 161,550 impressions in 90 days (about 2.8 clicks a day). This is low volume: page-level CTR differences of 1 to 3 clicks are noise. The skill says a site this small should favour content and indexing work. CTR work here should stay small and be read as a direction only. CONFIRMED numbers, INFERRED judgement |

## 1. Candidate list

Method. I merged www, non-www and trailing-slash variants (157 rows became 147 pages). Buckets were built on the site's own data. Among pages with 50+ impressions the median CTR is **0%** in every bucket, because over half of these pages have never had a click. So the "below own median" rule picks nothing. I used the median of pages with **200+ impressions** instead, leaving out the homepage, which is branded:

- Position 6 to 10: median CTR **0.27%** (21 pages)
- Position 11 to 15: median CTR **0.25%** (9 pages)
- Positions 1 to 5 hold only 6 pages and 72 impressions in total, too few to set a line.

Estimated lost clicks = impressions x (bucket median - page CTR), over 90 days (5 Jul to 3 Oct 2026).

| Page | Top query (impr, pos) | Pos | Impr | Clicks | CTR | Gap | Est. lost clicks | Status |
|---|---|---|---|---|---|---|---|---|
| /blog/nextjs-hosting-zero-cost | vercel free tier bandwidth 100gb 2026 (1,280, 7.0) | 8.5 | 101,772 | 25 | 0.02% | 0.24pp | 248.9 | **Excluded**: frozen by 6 Sep decision; spec-verification queries answered in the SERP |
| /blog/shopify-app-costs-real-monthly-bill | shopify app pricing (245, 11.7) | 13.1 | 5,556 | 7 | 0.13% | 0.13pp | 7.1 | **Candidate**, after windows close |
| /blog/website-migration-cost-2026 | website migration cost (463, 9.6) | 8.7 | 2,260 | 2 | 0.09% | 0.18pp | 4.1 | **Hold**: Exp 5 HOLDOUT until the 8 Oct read; cost query, AI Overview tax |
| /blog/shopify-stocky-sunset-date-2026 | stocky migration (13, 9.5) | 7.2 | 1,559 | 2 | 0.13% | 0.14pp | 2.2 | **Excluded**: date query, answer absorbed; Exp 5 holdout |
| /blog/cloudflare-emdash-wordpress-replacement | cloudflare wordpress replacement (36, 12.3) | 12.7 | 853 | 0 | 0% | 0.25pp | 2.2 | **Candidate**, after the 4 Oct content update settles |
| /blog/webflow-user-accounts-sunset-date-2026 | webflow user accounts sunset january 29 2026 official (11, 4.8) | 6.4 | 800 | 0 | 0% | 0.27pp | 2.2 | **Excluded**: date query; tracker already ruled "no snippet rewrite fixes it"; Exp 5 treatment |
| /blog/saas-software-pricing-audit-2026 | "jira cloud premium" "$40,000" (18, 4.4) | 5.6 | 724 | 0 | 0% | 0.27pp | 1.9 | **Excluded**: machine verification query |
| /ai-info/competitor-comparison | bejamas vs pagepro for next.js projects in united states (339, 6.7) | 7.3 | 515 | 0 | 0% | 0.27pp | 1.4 | **Excluded**: now 308-redirects to /pricing on live and new; query is a synthetic fan-out query |
| /blog/wordpress-ai-security-risk-2026 | wordpressaiplugin (7, 16.9) | 8.1 | 510 | 0 | 0% | 0.27pp | 1.4 | **Excluded**: Exp 5 holdout; query rows too thin |
| /blog/wix-too-slow | why is wix so slow (24, 12.6) | 10.2 | 423 | 0 | 0% | 0.27pp | 1.1 | **Candidate** after the 8 Oct read (Exp 5 treatment page). Position stable at 10.1 to 11.3, but almost all impressions are from the last 28 days |
| /about/hassan | hassan jamal (292, 8.7) | 8.1 | 585 | 1 | 0.17% | 0.10pp | 0.6 | **Excluded**: name query, most likely people looking for other people with the same name. Fix the doubled brand anyway (finding 10) |
| /blog/gohighlevel-keep-crm-replace-website | (no query rows; all anonymized) | 7.2 | 287 | 0 | 0% | 0.27pp | 0.8 | **Watch**: cannot diagnose without query data |
| /blog/core-web-vitals-explained | web.dev vitals business impact vodafone (9, 8.4) | 13.6 | 274 | 0 | 0% | 0.25pp | 0.7 | **Excluded**: Exp 5 holdout; verification-style queries |

Not candidates, because they are at or above the line: divi-theme-slow (0.77%), gohighlevel-website-speed (0.91%), squarespace-too-slow (1.27%), best-website-builder-for-gohighlevel-agencies (0.27%), fix-meta-ad-tracking-2026 (0.25%), wix-migration-cost (0.24%). The two top click earners must not be touched (skill Step 5).

**Data-anomaly check.** CONFIRMED. Google's "Data anomalies in Search Console" page, read today, lists nothing for web Search performance inside 5 Jul to 3 Oct 2026. The 13 to 17 Aug item covers the Generative AI report only, and the long impressions logging error ended 27 Apr 2026. The last 2 days of the export are fresh (dataState=all) and incomplete. Query rows add up to only 46 of 252 clicks, so most clicks sit on anonymized queries: rank pages by page-level data, not query rows.

**Device split** (90 days): desktop CTR 0.14% at position 11.0, mobile 0.28% at 10.5. Mobile is 10% of impressions. CONFIRMED.

**AI Overview / zero-click accounting.** `GSC_TRACKER.md` records the "AI Overview citation tax" on cost pages (Wk 9, 18 May) and, on 23 Aug and 29 Aug, that spec, date and price queries "earn impressions and no clicks at any position". I applied that here. The Vercel post, both sunset-date posts, the SaaS pricing audit and the competitor-comparison URL are excluded as answer-absorbed or machine-verification traffic. The migration-cost and Shopify app-cost pages are cost pages, so even a good title may not move clicks much. Treat any lift there as uncertain.

## 2. Per candidate: what is shown, diagnosis

I could not see what Google actually displays in signed-out results (no SERP or screenshot tool that shows AI Overviews). The title and description below are the tags. Competitor framing comes from a US web search via Firecrawl (organic results only; AI Overviews not visible). New and live title tags are **identical** for every candidate below. Only the EmDash description differs, because the 4 Oct update has not been deployed.

**/blog/shopify-app-costs-real-monthly-bill**
- New and live title: "Shopify App Costs 2026: Published Prices, Checked Aug 2". H1: "Shopify App Costs in 2026: Audit the Real Bill".
- New and live description: "Published entry prices for 15 common Shopify apps, checked August 2, 2026, plus Shopify's four app charge types and what uninstalling does and does not cancel."
- Top queries: shopify app pricing (245, 11.7), shopify mobile app pricing (184, 36.8), instant.one shopify app pricing (100, 9.2), shopify app builder pricing (82, 30.7).
- Competitor framing: Shopify's own developer docs ("Shopify App Pricing", which is about charging for your app), the App Store "pricing apps" category and Shopify plan pages. The head query is partly developer intent.
- Diagnosis: **Staleness** ("Checked Aug 2" reads two months old in October and uses title space) plus **specificity** (the title never says "15 apps"). Some **intent mismatch** on developer queries is not fixable by a title. This page was the 4th AI Overview breakout (tracker, 7 Jun), so part of the gap is the citation tax. **Actionable after the windows close.**

**/blog/wix-too-slow**
- New and live title: "Why Is My Wix Site So Slow? A 2026 Measurement and Fix Guide". H1: "Why Is My Wix Site So Slow? Measure Before Migrating".
- New and live description: "Diagnose a slow Wix site with real-user and repeatable lab evidence, fix media, fonts, apps, scripts, layout and data work, then decide whether migration is justified."
- Top queries: why is wix so slow (24, 12.6), why wix is so slow (7, 8.6), why is my wix so laggy (5, 8.4), wix editor slow (3, 16.3).
- Competitor framing: positions 1 to 3 and 6 are about **editor** lag (Reddit, Facebook group, Wix Studio forum, Wix help "Editor performance").
- Diagnosis: **Intent/relevance.** Searchers often mean the editor. The page has a section "First: is the site slow, or is the editor slow?" but the title and description only talk about the site and lab evidence. **Actionable after the 8 Oct Exp 5 read.**

**/blog/cloudflare-emdash-wordpress-replacement**
- New and live title: "Cloudflare EmDash vs WordPress in 2026: Readiness Guide". H1: "Is Cloudflare EmDash a WordPress Replacement?"
- New description: "EmDash 1.0 shipped on 28 September 2026. What changed since Cloudflare's April launch, ..." Live description: "Cloudflare announced EmDash on April 1, 2026, so people reasonably ask whether it is a joke. ..."
- Top queries: cloudflare wordpress replacement (36, 12.3), cloudflare as opensource successor to wordpress (33, 11.8), cloudflare emdash as opensource successor to (28, 16.2).
- Competitor framing: the top results all repeat Cloudflare's phrase "spiritual successor to WordPress" (Cloudflare blog, Reddit, GitHub, CMSWire, Cloudflare's 1.0 post).
- Diagnosis: **Intent/relevance.** Searchers type "successor"; our title says "readiness guide". This is news-led, so the answer may be absorbed. The body changed today, so **wait about 4 weeks after deploy before testing the title.**

**/blog/website-migration-cost-2026** (hold until the Exp 5 holdout is released)
- New and live title: "Website Migration Cost in 2026: Seven-Platform Scope Guide". New and live description: "What it costs to move OFF WordPress, ... Price the migration from current inventory, export limits, integrations, SEO, acceptance and operation."
- Top queries: website migration cost (463, 9.6), website migration costs (283, 5.3), what is the cost of website migration (238, 9.2).
- Competitor framing: every result description leads with a dollar range ("starts from $300", "under $100 to over $50,000", "$2,500 to 6,000").
- Diagnosis: **Specificity.** The query asks for a price; our title and description give none, though the body states our tiers and a starting price per platform. A cost query, so the AI Overview tax applies.
- Side note for the claims/pricing group (INFERRED): the body still says Squarespace stores with Member Areas run "$5,000 to $10,000". Check whether that is the retired ceiling from the 9 Sep sweep or a deliberate per-scope range.

**/about/hassan, /about/imran** (hygiene, not a CTR test). The title reads "Hassan Jamal | Co-founder and Lead Engineer at PandaCodeGen | PandaCodeGen". A doubled brand invites Google to rewrite the title. It is an accuracy-class fix: change only the duplicated token (use `title: { absolute: ... }` or drop the suffix).

## 3. Proposed titles and descriptions (proposals only, nothing edited)

Each figure below was checked against the rendered page body on localhost:3400. No em dashes.

**shopify-app-costs-real-monthly-bill**
- A (recommended): Title "Shopify App Costs in 2026: Prices for 15 Popular Apps". Description: "Published prices for 15 common Shopify apps, including Klaviyo, Judge.me, Recharge and Gorgias, plus the four ways apps charge you and how to find app charges that never reach your Shopify bill."
  Truth check: PASS. The table lists exactly 15 apps, including all four named. Section 2 covers the four charge types and section 3 covers charges outside Shopify. "2026" is true.
- B: "What Shopify Apps Really Cost in 2026: 15 Apps Compared". PASS, but "compared" slightly oversells a price list.
- C: Keep the title and change only the date, after re-checking every price: "Shopify App Costs 2026: Published Prices, Checked Oct [day]". This passes only if the prices are re-verified first (`spec-facts.json` verifiedAt).
- Why A: it puts the head term first, says what you get (15 apps), and drops a date that keeps aging.

**wix-too-slow** (after the 8 Oct read)
- A (recommended): Title "Why Is Wix So Slow? Editor Lag vs a Slow Site, and What to Fix". Description: "First find out whether the editor or your published site is slow. Then work through the eight common causes on Wix, from images and fonts to apps and scripts, before you think about moving."
  Truth check: PASS. The page has "First: is the site slow, or is the editor slow?", "Eight common Wix performance contributors" listing images, fonts, apps and scripts, and a "When should you consider migration?" section.
- B: "Wix Site or Wix Editor Slow? How to Tell, and 8 Things to Check". PASS.
- Why A: it uses the exact head query ("why is wix so slow") and answers the editor question that most of the SERP is about.

**cloudflare-emdash-wordpress-replacement** (about 4 weeks after deploy)
- A (recommended): Title "Cloudflare EmDash 1.0: Is It Really a WordPress Successor?". Description: "Cloudflare calls EmDash the spiritual successor to WordPress, and version 1.0 shipped on 28 September 2026. What changed since the April beta, what it still cannot do, and when a WordPress site should try it."
  Truth check: PASS. The body quotes Cloudflare's "spiritual successor" wording, says "The 1.0 release ... was published on 28 September 2026", and covers limits (Astro only, no Next.js front end) and "When to pilot EmDash". It stays true after 1.1.0, because it names the 1.0 milestone and not the current version.
- B: "Cloudflare EmDash vs WordPress: Is the Successor Ready in 2026?". PASS.

**website-migration-cost-2026** (only after Experiment 5 closes)
- A (recommended): Title "Website Migration Cost in 2026: Our Prices by Platform, From $1,500". Description: "What it costs to move a site off WordPress, WooCommerce, Webflow, Wix, Squarespace, Shopify or GoHighLevel. Our migrations start at $1,500, $3,500 or $5,000 depending on size, and each platform section explains why."
  Truth check: PASS. The tiers and per-platform starting prices are in the body. The word "Our" keeps it clear this is our price and not a market average.
- B: "How Much Does a Website Migration Cost? 2026 Prices for 7 Platforms". PASS.

## 4. Batch, baselines, control, gate

- **Gate result:** low-volume site. Run one small pilot. Do not roll out widely.
- **Order:** (1) Deploy the redesign and let it settle for about 4 weeks. (2) Pilot 1, titles only: shopify-app-costs, wix-too-slow, cloudflare-emdash. (3) Later batch: website-migration-cost-2026, after the Exp 5 holdout is formally released.
- **Note for the owner:** deploying the redesign before the 8 Oct Exp 5 read changes the template of every cohort page. That adds a third confounder to a read the tracker already calls confounded (INFERRED).
- **Control (unchanged, comparable, not in a known Exp 5 cohort):** fix-meta-ad-tracking-2026, wix-migration-cost, best-website-builder-for-gohighlevel-agencies. Check them against the plain-language control list in `GSC_TRACKER.md` (around line 1770) before starting.
- **Baselines, last 28 days (6 Sep to 3 Oct):**

| Page | Clicks | Impr | CTR | Pos |
|---|---|---|---|---|
| shopify-app-costs-real-monthly-bill (pilot) | 0 | 1,136 | 0.00% | 12.0 |
| wix-too-slow (pilot) | 0 | 387 | 0.00% | 10.1 |
| cloudflare-emdash-wordpress-replacement (pilot) | 0 | 233 | 0.00% | 9.1 |
| fix-meta-ad-tracking-2026 (control) | 0 | 91 | 0.00% | 4.7 |
| wix-migration-cost (control) | 0 | 63 | 0.00% | 6.7 |
| best-website-builder-for-gohighlevel-agencies (control) | 0 | 173 | 0.00% | 10.6 |

Re-pull these on the day of the edit; the numbers above are a pre-deploy snapshot.

## 5. Measurement window, success, revert

- **Earliest start:** 4 weeks after the redesign deploy, and not before 8 Oct. With deploy date D, the edit goes out on D+28.
- **Before window:** the 6 whole weeks ending the day before the edit. **After window:** 6 whole weeks starting 7 days after the edit (time for recrawl).
- **Success:** pilot clicks (3 pages combined) rise more than the control's change over the same dates, by at least 5 clicks in absolute terms because the volume is tiny, with each pilot page's average position within 1.5 places of its baseline. A CTR rise that comes from falling impressions does not count.
- **Revert:** if pilot clicks fall against control, or any pilot page drops more than 2 positions while control holds, restore the logged old title.
- **Flat result:** one more attempt on a different diagnosis, then the watch list.

## 6. Confirmed vs inferred, and log entry

- CONFIRMED: all GSC figures, bucket medians, title and description text (new and live), body facts behind each rewrite, title-change history (git), the data-anomaly check.
- INFERRED: the diagnoses (intent, staleness), the AI-Overview share of the gap, the SERP framing (organic only, US, Firecrawl), and the estimate that the whole opportunity is about 26 clicks per 90 days.
- Suggested `GSC_TRACKER.md` entry (not written): "4 Oct 2026, CTR review. No title edits. Candidates queued for pilot 1 at D+28 after redesign deploy: shopify-app-costs, wix-too-slow, cloudflare-emdash (titles only). Controls: fix-meta-ad-tracking-2026, wix-migration-cost, best-website-builder-for-gohighlevel-agencies. website-migration-cost-2026 waits for Exp 5 release. Excluded as answer-absorbed: nextjs-hosting-zero-cost, both sunset-date posts, saas-software-pricing-audit-2026. Hygiene fix pending: doubled brand on /about/hassan and /about/imran. Homepage meta description changes with the redesign deploy (old: '...Fixed pricing from $1,500.'); record its 28-day baseline: 10 clicks, 327 impressions, position 8.2."

---

# Part B: Legal and regulatory compliance

## Step 0 answers

| Question | Answer |
|---|---|
| Licensed-profession advice? | No core licensed advice. Web development and cost guidance. Some legal-adjacent posts: copyright ownership (`do-you-own-your-website`, `website-developer-agency`) and ADA filing statistics (`web-accessibility-statistics-2026`). No tax advice found (no deduction, depreciation or write-off content). CONFIRMED |
| Affiliate or material connections? | No affiliate links or referral parameters in `src`. Material connections that exist: self-inclusion in two "top agencies" lists, founder-owned case studies (Panda Patches, Enterprise Ops), a paid referral programme (/partners, 15% commission). CONFIRMED |
| User data collected? | Yes: lead forms, audit tool (optional email), website assistant (Gemini), GA4, Clarity, Meta Pixel, Vercel Web Analytics, Cal.com, Tawk.to. CONFIRMED |
| Jurisdiction | US company. Panda Group Ventures L.L.C., formed in Wyoming 12 Aug 2026, mailing address Stafford, TX (`company-facts.ts:58-68`). Audience mostly US (91,909 of 159,763 impressions) with UK, Netherlands, Germany and other EU traffic. **Rules applied as a working baseline:** US FTC Endorsement Guides (16 CFR 255) and the FTC consumer-reviews rule (16 CFR 465) for disclosure and reviews; EU GDPR and ePrivacy and UK GDPR and PECR for consent and device storage; CCPA/CPRA principles for California; WCAG 2.2 AA as the accessibility yardstick (ADA Title III case law for US). Confirm which actually bind this business with a qualified professional. |

## 1. Licensed-advice boundary: COMPLIANT

- `/blog/do-you-own-your-website`: "This is general information about US copyright law rather than advice on your situation ... Use qualified legal counsel for the actual agreement." CONFIRMED.
- `/blog/web-accessibility-statistics-2026` and `/blog/website-developer-agency`: "never as legal advice ... We are engineers, not lawyers." CONFIRMED.
- `/terms`: the free audit "is not ... an accessibility certification, legal review"; scores "do not guarantee ... accessibility conformance". CONFIRMED.
- No service page claims to deliver ADA or WCAG "compliance" (grep of services, pricing, home, components and data). This matters because "compliance" promises are a known enforcement target. CONFIRMED.
- Nothing at risk found. No professional review needed for this area.

## 2. Affiliate, sponsorship and material connections

Compliant:
- `/blog/top-nextjs-agencies-2026` opens with "Commercial disclosure. PandaCodeGen publishes this comparison, provides Next.js services, and is one of the eight options. The table is alphabetical and non-ranked. No company paid for inclusion." The FAQ "Where does PandaCodeGen rank?" repeats it. CONFIRMED.
- `/blog/top-custom-web-development-agencies-usa-2026` has a disclosure at the top: "PandaCodeGen publishes this article, sells web-development services, and appears in the shortlist. We do not rank ourselves first." CONFIRMED.
- All 10 `/work` pages render a "Relationship disclosure" block (`src/components/work/RelationshipDisclosure.tsx`, driven by `case-study-facts`). Founder-owned work is labelled on the case study and on the homepage ("Founder-affiliated, clearly labelled"). CONFIRMED.
- `company-facts.ts:170` states a no-paid-placement policy. CONFIRMED.

At risk:
- **False statement inside a disclosure** (Top finding 5). CONFIRMED. A legal-risk item, because a misleading statement inside a disclosure is still a misleading statement. Correct it and have it reviewed.
- **Paid referral partners are not asked to disclose.** `/partners` offers "15% commission on the final sale, paid net-14 after client payment" with "zero commitment. Send a lead, get commission." Nothing on the page or in the FAQ requires partners to tell their audience they are paid. Under the FTC Endorsement Guides, the advertiser should instruct and monitor paid endorsers. Recommendation: add a disclosure clause to the partner agreement and a line on /partners, and have counsel draft the wording. CONFIRMED gap, INFERRED legal weight.

## 3. Testimonials and reviews

Compliant:
- Five reviews, each linked to its source (Trustpilot or Clutch), with date and platform (`src/data/reviews.ts`). The "Unprompted" label is credited to Trustpilot and the "Verified" label to Clutch, never claimed as our own. No AggregateRating or Review schema (`reviews.ts` rule 3; `work/panda-patches/page.tsx:173-181`). CONFIRMED.
- Homepage renders the full verbatim quotes. The service page shows a trimmed excerpt labelled "Client review excerpt" that keeps the meaning. CONFIRMED.
- The Matt Conner name is used with recorded consent, and the file notes that Clutch shows him as "Anonymous" (`reviews.ts`, comment above the entry). CONFIRMED.

Watch:
- The `snippet` for the Ladies 4 Jesus review re-punctuates the quote ("I was hesitant at first because ... I am so glad ...") and shows it in a `<blockquote>` in `StaggerTestimonials.tsx:91`. The meaning is unchanged, but rule 1 of `reviews.ts` says quotes are verbatim. Either use the exact words or mark the edit. Low risk. CONFIRMED.
- The FTC consumer-reviews rule (16 CFR 465) bars undisclosed reviews by insiders or relatives. I cannot check reviewer independence from public data. Keep a short internal record, per review, of the client relationship and that the reviewer is not staff or family. INFERRED good practice.

## 4. Privacy: policy versus what the code does

Playwright test on the new build (fresh browser, no consent, mouse movement, scroll, 11 s wait, which covers the 10 s lazy-load fallbacks) on /, /services/wordpress-migration, /blog/divi-theme-slow, /pricing and /contact:

| Check | Result |
|---|---|
| GA4, Clarity, Meta Pixel, Tawk.to, Cal.com before consent | **None requested** on any page. CONFIRMED |
| Cookies before consent | **None**. CONFIRMED |
| Third-party requests before consent | **api.fontshare.com, cdn.fontshare.com on every page** (Top finding 3). CONFIRMED |
| Browser storage before consent | sessionStorage `pcg_first_touch_source` on every page (Top finding 4); `pcg-assistant-v1` on home (disclosed in privacy section 2.4). CONFIRMED |
| Vercel Web Analytics before consent | Skipped on localhost by design; **loads on the live site with no consent** (`/_vercel/insights/script.js`), and the same code ships in the new build (Top finding 2). CONFIRMED |
| Banner | Non-modal, "Reject optional" and "Accept all" are equal in weight, plus "Choose which ones" and a Cookie Policy link. No pre-ticked boxes. CONFIRMED |
| After "Reject optional" | Only Fontshare requested; choice stored with analytics, marketing and functional all false. CONFIRMED |
| After "Accept all" | Cal.com loaded on the blog post (sets `.cal.com __cf_bm`). GA4, Clarity and Pixel did not load, because the local build appears to have no measurement IDs, so their post-consent behaviour is checked **from code only** (`GoogleAnalytics.tsx`, `ConsentManagedServices.tsx:36-43`, all gated). CONFIRMED / code-read |
| Global Privacy Control | With GPC on, "Accept all" saved marketing=false. Matches the policy. CONFIRMED |

Policy versus code mismatches, which need fixing and a professional look:
1. Vercel Web Analytics described as consent-gated, but it is not (Top finding 2).
2. Fontshare not named anywhere and loads before consent (Top finding 3).
3. First-touch attribution storage and its transfer with leads not disclosed (Top finding 4).
4. Gemini unpaid tier used for EEA/UK visitors against Google's terms (Top finding 1). The privacy policy correctly says Google may use the content.
5. The Cookie Policy is dated 22 Jul 2026, which is before the 14 Sep Vercel change, the redesign's font change and the assistant's question log. Its inventory (section 4) is out of date: it has no Fontshare and no `pcg_first_touch_source`, and the assistant's sessionStorage appears only in the privacy policy.

Other points:
- The privacy policy names the controller ("a trading name of Panda Group Ventures L.L.C."), gives a contact address and email, lists GDPR and CCPA rights, mentions the ICO and GPC, and does not use continued browsing as consent. These are good basics. CONFIRMED.
- No UK or EU representative is named (GDPR Art. 27 / UK GDPR Art. 27). Whether one is required depends on how far the business targets EU/UK people. Raise it with counsel. INFERRED.

## 5. Accessibility

Tool: axe-core 4.11.1 (from `C:\Projects\pandagen-official\node_modules\axe-core`, injected with Playwright 1.63), tags wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa. Desktop 1366x900 on 5 pages; mobile 390x844 on /, /blog/divi-theme-slow and /contact.

| Page | axe violations | Images without alt | Unlabelled inputs | Skip link | Focus ring visible (first 12 stops) | Video/audio |
|---|---|---|---|---|---|---|
| / | 0 | 0 of 22 | 0 of 5 | yes | 12/12 | none |
| /services/wordpress-migration | **1: color-contrast** (1.85:1, `#7a2e0e` on `#1c1917`, 11px eyebrow "02 / Decide what the site needs") | 0 of 9 | 0 of 4 | yes | 12/12 | none |
| /blog/divi-theme-slow | 0 | 0 of 7 | 0 of 4 | yes | 12/12 | none |
| /pricing | 0 (1 "needs review": `aria-label` on a plain `div`, `.PricingPreview_proposal`) | 0 of 6 | 0 of 4 | yes | 12/12 | none |
| /contact | 0 | 0 of 6 | 0 of 13 | yes | 12/12 | none |
| Mobile (3 pages) | 0 | n/a | n/a | n/a | n/a | no horizontal scroll |

"Needs review" contrast items (38 on home, 45 on the blog post) are text over images or overlapping layers, which axe cannot measure. They need a human check against the screenshots, mainly the split-cover blog opening and the hero.

At risk:
- **Cookie banner hides the focused element** (Top finding 8). At 1366x900, 15 of 110 focus stops on home and 16 of 97 on the blog post sit completely under the fixed banner. On mobile it was 1 stop per page. The banner is last in the DOM (`<section>`, element 1,050 of 1,106) and is reached after about 112 Tab presses. Fixes: add `scroll-padding-bottom` equal to the banner height while it is open, or put the banner first in the focus order. CONFIRMED observation, INFERRED SC 2.4.11 reading.
- **Contrast failure** on the services eyebrow: raise the text to the light cognac token used elsewhere on dark backgrounds. CONFIRMED.
- No accessibility statement page. Not required for a US private business. For EU customers, the European Accessibility Act exempts microenterprises providing services, which likely covers this business. Confirm with counsel (INFERRED).

## Recommend professional review for

1. Gemini unpaid tier offered to EEA/UK users (contract terms, and GDPR lawful basis for sending visitors' questions to Google for its own use).
2. Whether cookieless Vercel Analytics, `pcg_first_touch_source` and the Fontshare request need prior consent for UK/EU visitors, and the matching policy wording.
3. Partner-agreement disclosure clause for paid referrers.
4. The corrected disclosure sentence in the US agencies post.
5. Whether a GDPR Art. 27 representative is needed.

Penalty amounts are deliberately not stated, as the skill requires. Check the regulator's own site if a figure is ever needed.

---

## Not checked, and why

- **Live SERPs and AI Overviews for candidate queries**: I have no signed-out SERP screenshot tool. Firecrawl returns organic results only. So "what Google displays" is the tag text, not the observed snippet.
- **GA4, Clarity and Meta Pixel after consent, at runtime**: the local build has no measurement IDs; checked from code only. I did not accept cookies on the live site, to keep the owner's GA data clean.
- **Whether Vercel Analytics sends a pageview event pre-consent on live**: the script loaded; I did not wait for or inspect the beacon (headless runs may be filtered as bots).
- **Tawk.to after consent**: not triggered (it loads on demand from a chat button, and I did not open chat, per the no-chat rule).
- **Forms**: inspected for labels only; nothing submitted.
- **Screen-reader pass, zoom/reflow at 400%, reduced-motion, captions**: manual testing beyond axe was limited to tab order and focus. No video or audio exists on the tested pages.
- **Contrast "needs review" items (about 100 across pages)**: these need human visual checks.
- **Reviewer independence**: cannot be checked from public data.
- **Whether the plain-language control pages overlap my proposed CTR controls**: the list is in `GSC_TRACKER.md` around line 1770; not cross-checked.
- **GSC URL Inspection**: not used (quota); no candidate showed signs of an indexing problem.
