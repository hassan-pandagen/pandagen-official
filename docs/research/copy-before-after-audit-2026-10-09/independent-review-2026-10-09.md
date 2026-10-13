# Independent review of the 9 October launch fixes

9 October 2026. Done from [the review brief](independent-review-brief.md) by a separate session (Claude), against current source and a fresh isolated build. Nothing was committed, pushed or deployed. Port 3001 and port 3000 were left alone; the candidate was served on port 3003.

**Short answer: the service-page and launch-copy work is right.** Every point the brief asked about checks out in source and in the built pages, with one missed copy spot (two lines in one article). The one thing still standing between this build and a full launch sign-off is mobile performance, which was already the open item.

The site owner asked that this review change nothing in the SEO or copy work. Two small fixes were tried during the review, then reverted. They're listed below as proposals for the owner to approve.

## What was run, and on what

All results below are new measurements from 9 October, on the isolated production build (`PANDACODEGEN_AUDIT_BUILD=1`, output in `.next-audit`). Raw output is in `.tmp/independent-review-2026-10-09/`.

| Check | Result |
|---|---|
| Production build | 170 routes, exit 0 (`build.log`, rebuilt twice more as `build2.log`, `build3.log`) |
| `npm run check` (types, lint, tests, claims, dates) | exit 0; date notes are informational |
| Built guards (metrics, links, unicode) | metrics OK, links OK, unicode report-only (10 occurrences on 6 pages, 0 invisible) |
| Structural SEO crawl | 158 sitemap URLs, 0 failures, 0 warnings |
| Release smoke | passed |
| Service pages, responsive | 78 cases: 12 services + 404, Chromium at 320/390/768/1440, WebKit at 390/1440. FAQ text matches the FAQ schema, no axe violations, no overflow (`responsive-results.json`) |
| Changed templates, responsive | 72 cases: homepage, /ai-info, five work pages, one article, Chromium at 320/390/768/1024/1440/1920 and WebKit at 390/1440. No real failures (`templates-results.json`, see note) |
| Interactions, mocked | 56 checks passed: navigation, cookie controls, assistant focus and persistence, forms, search. Assistant, quote, live-chat and audit requests were mocked (`final-interactions.json`) |
| Assistant source consistency | 14 of 14 buyer questions retrieve the right service and answer (`knowledge.log`) |
| 404 | real 404 status, `noindex` |
| Lighthouse | 3 runs per page, mobile and desktop, 5 pages (below) |

Note on the template check: the only flags were table cells on `/blog/cheap-web-developer` at 320 and 390px. That table sits in a labelled, keyboard-focusable horizontal-scroll region and the page itself does not overflow, so it is expected behaviour.

## Verified as right

Each was checked in current source and in the built HTML, not taken from earlier logs.

- **Fixed-scope pricing.** "The price is fixed once the written scope is agreed" agrees with the pricing page and service copy. Starting prices $1,500 / $3,500 / $5,000 match `src/data/company-facts.ts`.
- **Hosting.** Included on a maintenance or SEO package if the client wants it, agreed per client otherwise, and moved to an account in the client's name on request or at the end of an engagement. Pricing reads it from `fact("Hosting")`, so the page and the facts file can't drift apart.
- **Accounts and founder responsibility.** No leftover "always/every" founder claims or old account wording in source.
- **Support.** `POST_LAUNCH_SUPPORT` in `company-facts.ts` says 15 calendar days (Starter) and 30 calendar days (Growth, Scale, upgrades), starting on the day the site goes live, with free fixes for our own mistakes after that. Pages that read this fact are correct. One article missed it (see below).
- **WordPress host-to-host migration.** Presented as a separately quoted service, consistent across the service page, FAQ and assistant.
- **AI discovery.** `/blog/ai-referral-revenue-2026` describes recorded AI discovery as referrer signals plus the customer's own answer about where they found the store, and says referrer-only tracking undercounts.
- **Google impressions vs revenue.** The same article keeps Search Console impressions separate and says they do not verify the ChatGPT order attribution or the revenue ratio.
- **Dataset unchanged.** All 62 numbers in `src/data/ai-referral-data.json` are identical to the pre-edit backup.
- **Service destinations.** 12 distinct service links on `/services` at 390px and 1440px; each page has one H1, its own title, a self-referencing canonical and matching search/social descriptions.
- **Redirects.** `sanity-development` → `cms-development`, `supabase-development` → `backend-development`, `why-is-my-website-loading-so-slow` → `how-to-speed-up-your-website`, `ai-info/competitor-comparison` → `top-nextjs-agencies-2026` all return 308. Removed pages return 404.
- **Withdrawn claims.** No withdrawn project counts or retired claims in source; the claims and retired-claims guards pass.

## Current launch blockers

1. **Mobile performance is below the site's own 90+ handover target.** Every page tested sits at 61 to 71 on mobile (median), with desktop at 99 everywhere except the homepage. The site tells clients their representative pages get a 90+ Lighthouse target on mobile and desktop, so launching below it is the owner's call, not something a review can sign off. Details and causes below.
2. **No HTTPS preview and no physical devices.** The redesign is local-only (not pushed), so there is no production HTTPS preview to measure, and no real iPhone or Android was used. Menus, software keyboards and forms were checked only in emulated Chromium and WebKit. These two checks stay open; they are not passed.

## Should fix before launch (copy, owner approval needed)

*Fixed 10 October with owner approval; see "Fixed after the review" below. The finding is kept as it was written.*

**`/blog/cheap-web-developer`, lines 470 and 471 still say "15-business-day" and "30-business-day support boundary".** The owner-confirmed rule is calendar days. The other session fixed the same article's prose at line 392 but missed these two tier cards. Proposed wording, tried and reverted during this review:

> Final pages, features, tests and launch date follow the accepted terms. Includes 15 calendar days of support from the day the site goes live.

(and the same with 30 for Growth). Nothing else in `src/` still says business days for support. The repo's own `README.md` (lines 87 to 91) also says business days and gives Scale as $5,000 to $10,000, which no longer matches the site. That file isn't public, but it is what a new contributor reads first.

## Fixed after the review (owner-approved, 10 October)

The owner approved three of the follow-ups. Each was rebuilt and checked on the isolated build: `npm run check` exit 0, built guards exit 0, SEO crawl 158 URLs with 0 failures and 0 warnings, smoke passed.

- **Homepage heading order.** The chat card's "Where are you starting?" was an `h3` straight after the page's `h1`, which Lighthouse flagged (accessibility 99). It is now an `h2` in `src/components/assistant/AssistantPrompt.tsx`, with no visual change because the card styles it by class. Lighthouse accessibility is back to 100 with heading-order passing.
- **404 robots tags.** The 404 carried `noindex` twice: Next.js adds one to every 404 response, and `src/app/not-found.tsx` added `noindex, follow`. The page now sets `robots: null`, which clears the layout's index tags and leaves Next.js's single `noindex`. Checked on `/nope-xyz`, `/blog/topic/not-a-topic`, `/services/not-a-service` and `/work/nope`: status 404, one `noindex` tag each. Normal pages still read `index, follow`.
- **`llms.txt` agentic-browsing line.** Re-run on 9 October 2026 through the PageSpeed Insights API (mobile, Lighthouse 13.5.0): both sites 3 of 3 Agentic Browsing and SEO 100; pandapatches.com has Chrome UX Report data and pandacodegen.com does not. Same result as 4 September, so only the date in `src/data/llms-txt.ts` changed. The recheck is recorded beside the original in `src/data/first-party-measurements.json`. The two articles that quote the 4 September check were left alone; they describe that check accurately.

- **Support wording on `/blog/cheap-web-developer`.** Owner-approved 10 October. The Starter and Growth cards now say 15 and 30 calendar days of free post-launch support, starting the day the site goes live. The Scale card, which mentioned no support, now says 30 calendar days. The support paragraph (line 392) uses the `POST_LAUNCH_SUPPORT` wording instead of the hedged "can include… when written that way". The rendered page has no business-day support wording left.
- **Guard against it coming back.** `support-business-days` is registered in `src/data/retired-claims.json`, so `scripts/retired_claims.py` fails the build if "15/30 business days" is tied to support again. Reply times ("one business day") and refund settlement ("10 to 12 business days") are not affected.
- **Repo `README.md`.** Package terms now read calendar days and "Scale from $5,000" (the $5,000 to $10,000 range was retired on 9 September), and point to `POST_LAUNCH_SUPPORT` as the canon.

## Code review fixes, 10 October (owner-approved)

A `/code-review` run on the working tree raised ten findings. The owner approved seven; each was rebuilt and checked on the isolated build.

| Finding | Fix | Evidence |
|---|---|---|
| Broken sentence in the homepage migration FAQ ("reports about 22 days… losses were none recorded") | `src/data/home-faqs.ts` now reads "a delivery time of about 22 days… Ranking losses in its monitoring window: none recorded in the 30 days after launch." Metric values still come from the project record | Rendered homepage text |
| /terms stated the support start twice, two ways | `src/app/terms/page.tsx` keeps the `POST_LAUNCH_SUPPORT` canon and drops the "start milestone" clause | Rendered /terms text |
| FAQs collapsed into accordions | Kept the accordion (owner's design choice). Removed the shared `name="site-faq"` so rows open independently; corrected the stale comment in `preview-faqs.ts` | 12 page types × 2 widths: FAQ schema questions and answers all on the page, rows independent. Raw HTML fetched as GPTBot, ClaudeBot, PerplexityBot and Googlebot: 0 missing answers in 48 fetches |
| Menu links only existed after the first click | `src/components/layout/SiteNav.tsx` renders every menu link in the server HTML; the closed panel stays `visibility: hidden`, so links are not focusable or announced. Only the screenshot column waits for the first open | Links present while closed, not focusable; screenshots 0 before opening, loaded after |
| Starter questions no longer shown | Removed the starter list from `src/lib/assistant/presets.ts`, deleted the unused `AssistantStarters.tsx` and its CSS, and removed the first-answer cache in `src/app/api/assistant/route.ts` that only matched those questions | Build, types, lint and 56 mocked interaction checks pass |
| llms.txt prices typed by hand | `startingPrice()` in `src/data/company-facts.ts` reads Starter, Growth and Scale from `COMMERCIAL`; `NOT_A_FIT` and `AI_DESCRIPTION_GUIDE` use it | llms.txt renders $1,500 / $3,500 / $5,000 |
| Homepage carousel loads each slide on its turn | Not changed: owner's call, given the UK, US and Canada audience | n/a |

Collapsed-accordion limit, stated once: answers are in the page source and in FAQPage data, which is what search and AI crawlers read. Tools that read only on-screen text, like the 4 August 2026 extraction sweep, see a closed answer as empty. The service-page test now checks the page source instead of on-screen text for this reason.

Also found: `/partners` shows 8 FAQs but publishes no FAQPage data. The answers are in its HTML.

After the build: `npm run check` exit 0, built guards exit 0, SEO crawl 158 URLs with 0 failures and 0 warnings, smoke passed, service suite 78/78, templates 64 with only the known scroll-table flags.

### Second round, 10 October (owner-approved)

| Finding | Fix | Evidence |
|---|---|---|
| `/partners` showed 8 FAQs with no FAQPage data | The list moved to `src/data/partner-faqs.ts` (the page component is a client component, so a server page cannot read data from it). `PartnersContent.tsx` and the FAQPage block in `src/app/partners/page.tsx` both read it | Schema 8 = rows 8 at 390 and 1440; all 8 answers in the raw HTML for GPTBot, ClaudeBot, PerplexityBot and Googlebot |
| Assistant leaned on the CMS service | In `src/lib/assistant/knowledge.ts` the CMS topic now applies only when no platform is named, pins the single "Which CMS should our website use?" answer instead of all eight, and sits last so it cannot crowd out payment or timeline pins | "Can I edit my Webflow CMS myself?" now retrieves the Webflow service (before: 8 CMS passages, no Webflow). Payment and timeline pins kept on mixed questions. 14 of 14 buyer questions still exact, no unresolved pins |
| Carousel Play did nothing under keyboard focus or hover | `src/components/redesign/WorkCard.tsx`: hover and focus still pause automatic rotation, but after an explicit Play it rotates until the visitor pauses or steps (WAI-ARIA carousel pattern) | Keyboard and mouse Play both advance slides with focus or pointer on the button, with and without reduced motion; Next stops rotation |
| Service FAQ schema and the ownership section could drift | `serviceOwnershipAnswers()` in `src/data/service-ownership-answers.ts` returns answers only for services whose page shows the ownership section, and the build throws if `SERVICE_OWNERSHIP` has a service with no `SERVICE_PORTABILITY` entry. Schema, assistant and migration page all read through it | Removing a portability entry in a test harness makes the module throw with a message naming the service |

Verification on the isolated build (build ID unchanged for the whole run): `npm run check` exit 0, interactions 56 of 56, service suite 78 of 78, FAQ and menu suite 74 of 74, carousel 2 of 2, templates with only the known scroll-table flags, built guards exit 0, SEO crawl 158 URLs with 0 failures and 0 warnings, smoke passed.

Two notes on the test process. The interaction suite's assistant check had been failing since the other session renamed the empty-state send button to "Send question"; an earlier summary here read the suite's "COMPLETE" count as a pass and missed it. The locator now accepts both labels. Separately, the other session rebuilt `.next-audit` twice during this round, which broke a running server's script files mid-test; the final results come from a run where the build ID did not change.

Partner FAQ copy, owner-approved the same day: once the /partners answers went into FAQPage data, two of them no longer matched the company facts. In `src/data/partner-faqs.ts`, "What technologies do you build with?" no longer says "No WordPress, no Webflow, no page builders. Pure custom code"; it names WordPress where it suits the project, then the custom stack from the `Build stack` fact. "What happens if my client asks for changes after launch?" no longer says post-launch scope changes are "included free" or that "most partners" price retainers at 3 to 5 times our rate (no record supports that). It now follows `POST_LAUNCH_SUPPORT`: 15 or 30 calendar days from launch, our own mistakes fixed at no charge after that, and new work quoted to the agency before it starts. Verified in the rendered page and its FAQPage data; SEO crawl, guards and smoke pass.

Defect-cover wording, owner direction the same day: "If an issue comes from our mistake or omission… we fix it" read as apologetic. `POST_LAUNCH_SUPPORT` now says "Any bug or glitch in the work we delivered, or anything missing from the agreed scope, is fixed at no extra charge, even after that period", and the homepage summary says "Bugs and glitches in our work stay covered at no charge after that". The cover is unchanged: "anything missing from the agreed scope" keeps the omission part of the old promise. The partner FAQ and the cheap-web-developer paragraph use the same wording. Rendered on /, /terms, /partners, the article and llms.txt; no old wording left in `src/`.

Still open, not requested: the long "Support after launch" row in `HowWeWork.tsx`, and the unsourced "Most partners keep us invisible" line in the partner FAQ.

## Check of the other session's 10 October work

Covers the medical pages (ASAM and the practice demo), the AI SEO / AEO / GEO page, the new search sections on 11 service pages, the homepage paragraph and the interlinking audit. Fresh isolated build, ID unchanged across every run.

- **Automated:** `npm run check` exit 0; built guards exit 0; SEO crawl 158 URLs, 0 failures, 0 warnings; smoke passed; assistant 25 of 25 buyer questions; interactions 56 of 56; service suite 78 of 78; FAQ and menu 74 of 74; carousel 2 of 2; templates with only the known scroll-table flags.
- **Independent link crawl** (`.tmp/independent-review-2026-10-09/links.cjs`, from the sitemap, following every internal link): 163 pages, 0 broken links, 0 internal links through redirects, 0 missing anchors, 0 internal nofollow, 0 orphans, and every page linked from another page's main content. The five URLs outside the sitemap are downloadable files (CSV, .md, .mjs). This agrees with the other session's audit.
- **Copy, verified:** no ASAM fee or client price anywhere; ASAM reads "Built · In testing", nothing claims it is live; the medical demo is labelled a demo in its title, intro, alt text, disclosure and schema; the AI SEO price and scope match `company-facts.ts`; no ranking, citation or traffic guarantees; the Google AI-search claims match Google's guidance; the homepage paragraph matches the owner's text and the separate price line is still there.
- **Should fix (owner to decide):** the medical demo's H1 is just "Medical website design" (the demo label is in the title and subhead, not the H1); "AI SEO, AEO and GEO" appears twice on each of the 11 other service pages, unexplained; the search-section answers repeat their own section and the same checklist (23 to 31% shared wording between pages); the AI SEO page has 13 FAQs with two duplicate pairs; the support row is 38 words where the other rows are 12 to 18; three service titles run 62 to 63 characters.

## Optional follow-ups

- **`src/app/about/AboutPageClient.tsx`** is dead code from v1. Safe to remove in a cleanup.
- **Enterprise Ops case study** shows one blurred screenshot until more redacted screens are supplied.

## Performance, measured 9 October

Local production build over HTTP, Lighthouse 13.5.0, default mobile profile (simulated slow 4G, 4× CPU slowdown) and a desktop profile (1440×900, no CPU slowdown). A fresh browser for every run. Raw rows in `lighthouse-results.json`.

| Page | Mobile runs | Mobile median | Desktop runs | Desktop median |
|---|---|---|---|---|
| `/` | 64 / 60 / 61 | **61** (LCP 4.7s, TBT 815ms) | 74 / 76 / 80 | **76** (TBT 469ms) |
| `/pricing` | 71 / 70 / 71 | **71** | 99 / 99 / 99 * | **99** |
| `/services/wordpress-migration` | 67 / 63 / 67 | **67** | 98 / 99 / 99 * | **99** |
| `/blog/how-much-does-a-website-cost` | 66 / 69 / 68 | **68** | 97 / 99 / 99 | **99** |
| `/work/enterprise-ops` | 71 / 78 / 70 | **71** | 99 / 99 / 99 | **99** |

\* One desktop run each on `/pricing` and the service page stopped with a Lighthouse `NO_NAVSTART` tool error and was rerun once.

Accessibility, best practices and SEO scored 100 on every run, except the homepage heading-order flag above.

**How to read these numbers.** The test machine was busy during the runs: 85% CPU load, with a game and several editor and browser windows open. Lighthouse's CPU benchmark read about 1,600 to 1,980, against 2,945 for the 8 October run that produced the recorded 75. The JavaScript files have the same content hashes as on 8 October, and the same framework file took 1,263ms of CPU this time against 475ms then. **The drop from 75 to about 61 is mostly the machine, not a code regression.** Even on the faster 8 October machine, though, mobile reached only 76, so the 90+ target is unmet either way.

**Where the mobile time goes** (homepage, `lh-home-mobile-diag.json`). The server responds in 27ms and nothing blocks rendering. The cost is main-thread work after the HTML arrives: about 1.4s of script, 1.1s of style and layout, and 0.7s unattributed, most likely the WebGL paper shader behind the hero. The largest paint is the hero paragraph, which waits behind that work. The other pages share the same layout, scripts and fonts, which is why they cluster at 67 to 71. The homepage adds the shader, the chat card and the work cards on top.

Things worth trying, in rough order of likely effect (not done in this review):

- Load the paper shader only on desktop, or start it after the page is idle. The static gradient and grain are already there as its fallback.
- Load the chat card's interactive parts after first paint, keeping the static card as the initial render.
- Check what the shared 70KB framework chunk pulls in, and drop legacy polyfills (Lighthouse estimates 14KB).
- Re-measure on an HTTPS preview with a quiet machine before deciding whether the gap is real at 90.

## What this review did not establish

- Field performance, real-device behaviour, ranking or conversion change, or how a live AI model answers. All checks here are lab or emulated.
- New email delivery. Earlier provider receipts belong to their recorded date.
- Keyword volumes. Keyword snapshots in this folder are provider estimates with dates; no new ones were taken.

## Owner-approved copy follow-up - 11 October (implemented by Codex)

The owner approved the five observations listed in the 10 October review. They are now applied: "a practice demo" in the medical H1, plain AI-search links/shorter answers on the 11 service pages, consolidated AI SEO FAQs, the 19-word support row and three 53-character search/social titles. The original review observations remain above as historical findings; they are no longer awaiting an owner decision. This is Codex's implementation/test follow-up, not a new independent review by this document's original author.

The final production build, full check, guards, 158-page structural SEO crawl, initial-HTML/schema checks and 61 responsive/browser cases passed. The actual assistant index retrieved all 25 buyer questions consistently. Results and limitations are in [the main audit's follow-up](README.md#owner-approved-five-copy-fix-follow-up---11-october). No live delivery, PageSpeed-on-the-new-deployment or physical-device pass is claimed. ASAM's owner-supplied planned launch is 19 October; its page still accurately says In testing and will require a confirmed cutover before it becomes Live.
