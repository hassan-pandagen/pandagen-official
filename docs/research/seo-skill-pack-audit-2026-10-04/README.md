# SEOO skill-pack audit of the redesign, 4 Oct 2026

All 20 skills in `seoo-skill-pack/` were run against the **new website**: the uncommitted
redesign in the working tree on top of HEAD 83239234. It was built in production mode
(`next build --webpack`) from a snapshot and served locally. The live site
(www.pandacodegen.com, origin/main 8fad4fca, deployed 23 Sep) was used only for before/after
comparisons. Search Console data was exported on 4 Oct 2026 for sc-domain:pandacodegen.com.

Nothing in the site was changed by this audit. The seven group reports in this folder hold the
evidence for every point below (file:line, URLs, GSC figures, source links with read dates).

| Report | Skills |
|---|---|
| A-strategy-and-data.md | seo-growth-stage-strategy, traffic-drop-diagnosis, measurement-discipline, seo-health-monitoring |
| B-migration-and-indexing.md | site-migration-safety, indexing-crawl-health-audit |
| C-technical-and-protected-fields.md | technical-seo-audit, protected-field-audit |
| D-quality-and-duplicates.md | duplicate-intent-audit, page-quality-audit, content-creation-standards |
| E-facts-and-freshness.md | verify-primary-source, content-freshness-audit |
| F-links-and-opportunities.md | internal-linking-audit, backlink-profile-audit, content-opportunity-discovery |
| G-ctr-and-legal.md | ctr-snippet-optimization, legal-regulatory-compliance |
| this file | site-audit-orchestrator (synthesis), change-and-decision-log |

## Where the site is

**Early/growth stage, and changed faster than anything can be measured.** Eight months old, about
2 search clicks a day, one or two leads a fortnight. origin/main took 162 commits between 8 and
23 Sep, and 84 more are unpushed. At this volume no single edit to an existing page can be read.
Effort pays most on new buyer-facing pages and on turning visits into leads.

**The traffic drop is mostly not people.** Impressions fell 61,333 to 27,436 (prior 28 days vs
last 28), in two steps on 19-22 Aug and 17-18 Sep. 60% of the loss is one page,
/blog/nextjs-hosting-zero-cost, whose impressions are 83% machine-shaped queries with 0 clicks,
and whose position held at 8 to 10. Clicks did not move at either step. Clicks did slide from
about 30 Aug (rolling 28-day peak 100, now 59), spread across established pages whose positions
improved. No Google update lines up with the start. Verdict: broad, external, wait. Do not edit
pages in response.

## Before the redesign ships (blockers)

1. **The website assistant would break Google's Gemini terms for UK/EU visitors.** It runs on the
   unpaid tier (`src/app/api/assistant/route.ts:13`). Google's Gemini API Additional Terms, read
   4 Oct: "You may use only Paid Services when making API Clients available to users in the
   European Economic Area, Switzerland, or the United Kingdom." The UK alone gave 9,683
   impressions in 90 days. Not live yet (not on origin/main). Fix: paid key, or hide the
   assistant for those countries.
2. **MyCustomPatches is labelled an independent client while the repo says that is unsettled**
   (`src/data/case-study-facts.ts:97-103`, note of 29 Sep). The new build says "no ownership or
   financial stake" on /work/mycustompatches and shows the Clutch review on three pages. NorthDeck
   and Saforne are not in `case-study-facts.json`, so the build-time disclosure check skips them,
   and Saforne carries three different labels.
3. **/services/wordpress turns from a 308 redirect into a new page**, and
   /services/wordpress-migration gets a new title, H1 and a description that starts "Build or
   improve a WordPress website" (4,413 to 1,908 words). The rollout plan still calls
   /services/wordpress a redirect. Decide which page owns "WordPress to Next.js migration" before
   launch; that query is already split three ways (service page 21.7, how-to post 26.8, cost post
   53.9).
4. **The redesigned service pages dropped 30 links into blog posts**, because the old
   PageContent.tsx files that held them are no longer rendered. Losers include
   gohighlevel-website-speed, woocommerce-too-slow and shopify-store-speed-optimization. The home
   page also lost its only body link to /free-audit. No guard caught it: seo-audit.mjs counts
   header/footer links, link_guard.py only checks posts linking up.
5. **The redesign loads Fontshare fonts before consent** (`src/components/redesign/PreviewShell.tsx:17,30-31`),
   sending visitor IPs to a third party no policy names. The live site does not. Self-host Zodiak.
6. **Headings lose their spaces in the HTML.** 48 headings on 27 pages are two spans with no space
   ("A store builtaround the order.", "HassanJamal", footer "Have somethingin mind?" on every
   page). Readers see a line break; crawlers that ignore CSS see one joined word. Add a space.
7. **Service-page H1s are slogans with no topic words** ("Your WordPress site. A clear next step.",
   "Make your answers easy to find.", blog index "Good questions. Worth a read."). Nine service
   pages share the H2 "A clear route to done." Titles still carry the keywords, so the risk is
   moderate, but the H1 is the cheapest place to name the service.

The rest of the migration checks pass: all 156 baseline URLs resolve (151 direct 200, 5 single
308 hops), every page has one self-canonical and index,follow, robots.txt is unchanged, the
sitemap is valid, hreflang for /de and /fr is reciprocal, no internal link hits a redirect or 404,
and no orphan pages. Schema parses everywhere and all 740 FAQ questions are visible. Mobile at
390px has no sideways scroll. axe found one contrast violation on five pages.

## Content that is wrong now (on the live site too)

8. **/blog/nextjs-hosting-zero-cost contradicts Vercel's own docs on three points** (verified
   4 Oct against vercel.com/docs/plans/hobby, updated 14 Sep, and /docs/plans/pro-plan, updated
   15 Sep): 100 GB IS now listed as Hobby included usage; Pro includes a 1 TB / 1M request
   capacity tier; spend notifications are on by default at $200. The five Vercel entries in
   spec-facts.json still say verifiedAt 2026-08-02 and pass the 90-day guard. This page is the
   site's largest by impressions. Note: the 6 Sep decision froze this page; fixing a factual
   error should override that freeze, but it is the owner's call.
9. **The retired "Scale $5,000 to $10,000" range is still on the site**: FAQ answers in
   `src/data/blog.ts` lines 322, 1338, 1554, 1635 (one is in FAQPage JSON-LD on divi-theme-slow)
   and about 15 page files. Canon is "From $5,000" (`company-facts.ts:101`). It is missing from
   retired-claims.json, so the guard passes. Also: website-migration-cost-2026 says WooCommerce
   migrations "start at $5,000" (canon: Starter $1,500), and
   /blog/custom-website-5000-whats-included is titled "starting at $5,000".
10. **/blog/google-algorithm-updates misses the September 2026 spam update** (began 24 Sep per
    Google's status dashboard). Fix `src/data/google-updates.ts`; the "39 updates" line on cards
    follows.
11. **Two sunset pages describe passed dates as still coming**: the Webflow User Accounts page
    calls 4 Aug 2026 "still ahead" (its cited help article now 404s); the Stocky FAQ says
    "unspecified period, rechecked July 24" while the body says "at least 90 days".
12. **A false sentence inside a disclosure**: /blog/top-custom-web-development-agencies-usa-2026
    (`page.tsx:307`) says "PandaCodeGen is not on those directories" (Clutch, DesignRush), but the
    site links its own Clutch profile.
13. **Policies do not match the code.** Vercel Web Analytics left the consent gate on 14 Sep
    (a deliberate, documented choice: it is cookieless), but the Privacy and Cookie policies still
    list it as consent-gated. A first-touch source is stored before consent and emailed with every
    lead, and neither policy mentions it. Fix the policies, or the code. Get professional review
    on items 1, 5 and 13.
14. **/partners pays a 15% referral commission without telling partners to disclose it** when they
    recommend us (FTC Endorsement Guides).

## Worth doing, not urgent

- **Dates readers can trust.** 62 of 88 posts share lastModified 2026-08-19, and edits on 1 Oct
  (divi, gohighlevel, woocommerce, nextjs-hosting) did not move them. 7 of 8 sampled posts show
  only the publish date to readers. check_dates.py only checks that the date sources agree.
- **Freshness tiers.** One 90/180-day clock covers every fact; Vercel changed three facts inside
  it. Put the Vercel cluster on 30 days. 37 posts carry hand-typed "checked August 2" stamps no
  script reads, and 9 research-facts.json entries are unwatched.
- **Duplicate FAQ heading on 47 posts** (page H2 plus FAQAccordion's own H2): one template fix.
- **Overlap.** The website-migration-cost hub outranks its own platform pages on their queries;
  trim each platform section on the hub to a summary plus link. Four low-traffic pairs are safe
  merges (listed in D). /ai-info/competitor-comparison redirects to /pricing but its traffic was
  "bejamas vs pagepro", where /blog/top-nextjs-agencies-2026 ranks 3.7; owner's call.
- **Under-linked near-rankers** (positions 6 to 17, half the median inbound links):
  gohighlevel-website-speed, best-website-builder-for-gohighlevel-agencies, cloudflare-emdash,
  wordpress-plugin-security-2026, webflow-user-accounts-sunset, top-nextjs-agencies-2026. Service
  pillars link 0 to 2 of their own cluster posts. Related-post cards pile 16 links onto 4 posts
  while 37 posts get none (recency tie-break in topical-map.ts).
- **Snippets.** 127 of 151 descriptions run past ~920px, 41 titles past ~600px (all 11 hubs).
  /about/hassan and /about/imran repeat the brand. Change no titles before the redesign settles;
  then pilot 3 changes against 3 controls (proposals in G).
- **The redesign changes the home page meta description**, the top click earner, dropping "Fixed
  pricing from $1,500" and "code you own". Log it as part of the launch.
- **New /work concept pages are thin** (331 to 488 words, no page schema, long titles);
  medical-template's description promises provider bios the page lacks;
  a-step-above-medical is indexable while saying it is not a finished case study.
- **Cookie banner hides the focused element** for 15 of 110 tab stops on the home page (WCAG 2.2
  SC 2.4.11). One 1.85:1 contrast eyebrow on /services/wordpress-migration.
- **Four live URLs are not indexed** and the redesign will not fix that alone: /services/webflow
  (never crawled), /de, /blog/cheap-web-developer, /blog/webflow-true-cost. Request indexing after
  launch.

## Content to build next (from Search Console near-misses)

Rework pages already at positions 8 to 20: GoHighLevel speed "optimization" wording (~616
impressions at 11-14), website migration cost (~890 at 9-13), Shopify app pricing (245 at 11.7),
WordPress to Next.js migration services (165 at 14.1, once item 3 is decided), WooCommerce
checkout slowness. New pages with the best evidence: "Is Wix bad for SEO" and "GoHighLevel vs
WordPress". Full ranked list of 14 in F. Backlinks: two new editorial links since 17 Sep (Scepter
Marketing, Farabiulder), nothing to disavow; check the quote BlogBowl attributes to us.

## How to ship and measure the redesign

It can only be measured as one event, so measure it for breakage, not lift. Ship after the
pre-registered Read 2 on 6 Oct and the Experiment 5 read on 8 Oct. Before deploy, freeze a
URL-level baseline (B's crawl.mjs can re-run against a Vercel preview). After deploy, leave
existing pages alone for 28 days, with checks at days 2, 7, 14 and 28. Alert thresholds from the
site's own history: critical at 3+ complete days in a row with 0 clicks (longest run since June is
2) or rolling 7-day clicks of 4 or fewer; warning at rolling 28-day clicks under 51 on two weekly
checks. Nothing currently pulls Search Console after a deploy.

## change-and-decision-log

- **Changelog:** git commit messages are detailed and act as the changelog, and dated code
  comments record decisions at the point of use (a strong habit). But origin/main was re-rooted
  on 8 Sep (root 39d3c5e3), so August deploys cannot be dated, and commit b3939e1 cited in
  GSC_TRACKER.md no longer exists.
- **Trackers are outside git.** `.gitignore:58` (`*.md`, "Internal docs and trackers (not for
  repo)") keeps BLOG_PASS_TRACKER.md, content-refresh-tracker.md and
  REDESIGN_ROLLOUT_PLAN_2026-09-26.md on this machine only, with no history. That is a deliberate
  rule; the cost is that a second machine or a lost disk loses them. docs/ is tracked, which is
  why this audit lives here.
- **Decisions are scattered** across GSC_TRACKER.md addenda, about 34 root docs, 26 research
  docs and code comments. There is no single decisions index. Smallest fix: a tracked
  `docs/DECISIONS.md` with one line per decision pointing to where the reasoning lives.
- **Staleness:** GSC_TRACKER.md weekly snapshots stopped on 1 Aug, so the whole Aug-Sep drop is
  unrecorded there. content-refresh-tracker.md was last reviewed 14 Jul. The homepage 28-day lock
  from 14 Sep was broken by nine commits in the next week.
- **Open flags from this audit** (owner decisions): items 1, 2, 3, 8 (freeze override), 13, 14,
  the competitor-comparison redirect target, and the wordpress-plugin-security title wording.

## Not checked

Manual actions, security issues, crawl stats and enhancement reports (not in the read-only API);
Bing and GA4 (no access); a backlink index (none connected, coverage partial); live result pages
and AI Overviews for candidate queries; GA4/Clarity/Pixel after consent (no IDs in the local
build); Tawk.to after consent; screen readers and 400% zoom; the Rich Results Test (build not
deployed); exact August and mid-September deploy dates.

## Fixed the same day (4 Oct 2026), on the owner's instruction

Committed (98eb07d3 and the commit that adds this file):
- Vercel facts on /blog/nextjs-hosting-zero-cost and spec-facts.json (item 8). The 6 Sep freeze
  on that page was overridden by the owner because the errors were factual.
- The retired Scale range, 24 copies (item 9), plus retired-claims entry
  `scale-tier-10000-ceiling`. Not changed: the WooCommerce "start at $5,000" line and the
  custom-website-5000 title, which were not in the owner's list.
- September 2026 spam update (item 10). It was still rolling out on 4 Oct; re-read the
  dashboard after about 8 Oct and record its duration.
- Clutch sentence in the agencies post (item 12).
- Cookie policy and the consent banner text (item 13).
- Heading spacing in committed files (item 6, part).

Left uncommitted, because the files also hold the other session's redesign work and should ship
with it: the privacy policy (item 13), the remaining heading-spacing fixes, the three service H1s
and the migration hero (items 3 and 7), the 30 restored service-page guide links in
`src/data/service-guides.ts` and MigrationDesign.tsx (item 4), the Zodiak build-time download
(item 5: `scripts/fetch-zodiak.mjs`, `prebuild`/`predev` in package.json, gitignored
`public/fonts/zodiak/`, Fontshare removed from the CSP), and NorthDeck's entry in
case-study-facts.json (item 2, part).

Decisions:
- `/services/wordpress-migration` owns "WordPress to Next.js migration": it is indexed, had 599
  impressions in 90 days and every WordPress post links up to it. `/services/wordpress` owns
  building or fixing a WordPress site. The migration page's hero, H1 and meta description were
  rewritten migration-first; its "Start" path still sends WordPress-build visitors to
  `/services/wordpress`. REDESIGN_ROLLOUT_PLAN still calls `/services/wordpress` a redirect;
  that line is out of date.
- Zodiak is not committed to the repo, because the repo is public and the ITF Free Font
  License forbids publishing the files in a repository. It is downloaded unmodified at build
  time and served from our own domain.
- NorthDeck Group: independent client per the owners (4 Oct), review pending.

Still open: MyCustomPatches relationship (item 2), Saforne labels, the Gemini assistant for
UK/EU visitors (item 1), /partners referral disclosure (item 14), the DesignRush profile showing
a $60 hourly rate and a $1,000 to $10,000 budget (fix on DesignRush), and whether session storage
written before consent needs consent for EU visitors (legal question).

## Later on 4 Oct 2026

- Assistant (item 1): moved from Google's unpaid Gemini tier to Vercel AI Gateway (uncommitted,
  in `src/app/api/assistant/route.ts`, with the privacy policy section 2.4 and the chat-panel
  notice). Defaults: `google/gemini-2.5-flash-lite` pinned to Vertex, then
  `deepseek/deepseek-v4-flash` pinned to Azure or DigitalOcean; Kimi allowed only through Amazon
  Bedrock. Every request sets `zeroDataRetention: true` (no extra cost on Pro). Auth is Vercel's
  OIDC token, so no key is stored. Excluded providers, checked against the gateway's endpoint
  list: Alibaba, Novita, GMI Cloud and Moonshot's own API. The team has $5 of free gateway credit
  a month, which covers only some models; buying credit ends it. `GEMINI_API_KEY` can be removed
  from Vercel once this is live.
- Saforne (item 2): independent client per the owners. Acquisition talks are under way; if it is
  acquired, relabel it founder-affiliated everywhere. Each surface already labels it the same way
  it labels the other independent clients.
- MyCustomPatches (item 2): owners want it kept as "Independent client" with no LLC named. Open
  question sent back: whether anyone who owns PandaCodeGen owns any part of the business behind
  MyCustomPatches, which is the test the disclosure rule uses (shared owners, not shared LLCs).

## Second round of fixes, 4 Oct 2026 (uncommitted, in the working tree with the redesign)

Verified together on one production build (150 sitemap URLs all 200, all JSON-LD parses, every
guard passes, no third-party request before consent, no horizontal scroll at 390px on the pages
checked).

- Dates: one FAQ heading per post (49 had two; `FAQAccordion showHeading={false}`); 32 posts got
  honest modified dates, each tied to a content commit; every byline shows "Published X · Updated Y"
  from blog.ts (`PostDateline`); check_dates.py checks bylines and warns on stale dates.
- Freshness: per-fact `reviewDays` (Vercel 30/60, vendor prices 60/120); research-facts.json is
  watched; `npm run guard:stamps` scans hand-typed "checked on" dates (not in guard:all yet; the
  first stamps pass 90 days on 22 Oct).
- Merges: wordpress-killer, how-to-cut-saas-bill-2026 and why-is-my-website-loading-so-slow merged
  into their survivors with 308s. shopify-slow-losing-sales was NOT merged (growing, different
  queries). /ai-info/competitor-comparison now redirects to /blog/top-nextjs-agencies-2026.
- website-migration-cost-2026 hub: platform sections cut to summaries plus links; generic
  answer-first opening; WooCommerce "start at $5,000" corrected to canon.
- Internal links: nine near-ranking posts gained 3 to 7 body links each; service-guides lists
  rebuilt per cluster; related cards now spread by a stable hash (max 16 to 11 inbound, posts with
  none 37 to 6). A temporary TITLE_PILOT_PAGES / POSTS_ADDED_DURING_PILOT guard in topical-map.ts
  keeps the pilot clean; remove it after the pilot is read.
- Title pilot: TITLE_PILOT.md (3 tests, 3 controls; starts the day the redesign deploys).
- Homepage description restores "Custom builds from $1,500" and "Code you own"; title unchanged
  (all homepage clicks are branded). /about titles no longer repeat the brand.
- Cookie banner: first in tab order, never hides the focused element (0 of 115 obscured, was 16).
  Contrast fix on /services/wordpress-migration (axe: 0 violations).
- /work concept pages: page JSON-LD, honest titles and descriptions; a-step-above-medical is
  noindex,follow and out of the sitemap until finished.
- Ownership: "What you keep" section on every service page from src/data/platform-portability.ts
  (66 quoted, dated vendor sources), Service schema with serviceOutput, a manifesto paragraph, and
  a new post /blog/website-portability.
- Near-miss reworks: gohighlevel-website-speed (9-step sequence), shopify-app-costs (how app
  pricing works; 15 prices rechecked, Okendo corrected), woocommerce-too-slow (add-to-cart and
  checkout), how-to-migrate-wordpress-to-nextjs (DIY intro, one link to the service page).
- New posts: /blog/is-wix-bad-for-seo, /blog/gohighlevel-vs-wordpress. Covers for the three new
  posts are placeholders or crops, not generated photographs.
- Assistant: Vercel AI Gateway with zero data retention and pinned non-China providers.

Owner decisions still open:
1. Sanity training as a standard handover item (not in company-facts.ts, so not published).
2. MyCustomPatches relationship (not settled).
3. HighLevel now publishes "Above 80 on mobile, above 95 on desktop" as a typical optimized
   score; gohighlevel-website-speed deliberately gives no score range. Quote it or not.
4. shopify-app-costs title still says "Checked Aug 2" (true but stale).
5. migration-projects.ts says A Step Above Medical testing "begins October 1, 2026".
6. Real cover photos for the three new posts.

## Assistant model choice, 4 Oct 2026 (tested with a real gateway key)

The gateway's free monthly credit accepts many models but rate-limits each one (roughly 8 to 10
requests a minute, undocumented). Six free models that run on zero-retention, non-China providers
with structured JSON were tested on the repo's 151-question suites (rate-limited answers
excluded): grok-4.1-fast-non-reasoning 1 wrong, gemini-2.5-flash 1, mistral-medium-3.5 5,
gemini-2.5-flash-lite about 6, gpt-oss-120b 12, gpt-5.4-nano 13 (mostly outcome promises).
DeepSeek V3.1's only allowed provider was too slow and throttled. DeepSeek V4 Flash is free
only on providers we exclude; Kimi only through Novita (excluded).
Decision: requests alternate between Grok 4.1 Fast and Gemini 2.5 Flash (both on Google Cloud
Vertex AI); Gemini 2.5 Flash-Lite is a fallback only. A rotation run at twice one model's rate
had 0 rate-limited answers and 3 wrong of 151, all from Flash-Lite. Estimated cost about $0.001
per answer, within the $5 monthly free credit at current traffic. The privacy policy names the
models and provider. Dev-only test hooks: x-assistant-models header and `--models=` in the eval
scripts.
