# Group A: strategy and data

Audit date 4 Oct 2026. Data: Search Console exports in `scratchpad/gsc` (dataState=all), plus eight small read-only Search Console API pulls (named where used). The API reports `firstIncompleteDate` 2026-09-30, so 30 Sep to 3 Oct are preliminary and are left out of any judgment.

## Top findings (ranked by impact)

1. **The impression drop is mostly not lost human visibility. Do not edit pages in response to it.** CONFIRMED: 60% of the 28-day impression loss (20,568 of 34,170) is one page, `/blog/nextjs-hosting-zero-cost`, whose average position held at 7.6 to 9.7 the whole time. 83% of that page's query-level impressions (31,507 of 38,005 in `page_query_90d.json`) come from machine-shaped queries ("vercel free tier bandwidth limit 2026 100gb", "+site.vercel.com docs hobby ..."), with 0 clicks. Another 24% of the loss is pages that sat at position 20+ (page 3 and deeper). INFERRED: automated searches slowed down. The team predicted exactly this on 6 Sep (`GSC_TRACKER.md`, Vercel concentration analysis, decision 3: "a large impression drop that means nothing").
2. **Neither impression step moved clicks.** CONFIRMED from `daily_16mo.json` and API pulls: the week after the 20 Aug step had 25 clicks, the same as the week before. In the 14 days after the 17 Sep step, clicks rose (26 to 39). The two dates in the brief describe impressions only.
3. **The click decline is real but modest, and it has a different start date: about 30 Aug, as a slope.** CONFIRMED: rolling 28-day clicks peaked at 100 (28 days ending 29 Aug) and fell to 59 (ending 26 Sep). On complete data only: 84 to 49 (-42%). Branded clicks held at 7 to 7. Losses are spread across the established click pages, and their positions *improved* (GoHighLevel 8 to 6, Divi 8 to 6) while their impressions fell. That points to fewer searches or more answers kept on Google, not ranking loss. Clicks are now back at their July level (63 to 68 per 28 days). The cause is unattributed. No Google update was running when it started.
4. **Growth-stage verdict: early/growth stage, and heavily over-tinkered.** The site is 8 months old. It gets about 2 search clicks a day and, per commit 6b882696, one or two real leads a fortnight. Yet origin/main took 162 commits in 15 days (8 to 23 Sep), and 84 more are waiting on top of the redesign. At this volume no single page change can be measured. Effort belongs in new buyer-facing coverage and turning visits into leads, not more passes on existing pages.
5. **The redesign cannot be measured as more than one event, so do not try to.** CONFIRMED: the unpushed backlog alone is 572 files (+32,393/-8,882). It rewrites copy on the top three click-earning posts and on the Vercel post the team froze on 6 Sep (commit 556752ca, 1 Oct). It also moves all 88 posts to a new template (7bf40f00, 52575331). Measure the launch for breakage, not lift, and time it outside two open windows: the September 2026 spam update (started 24 Sep, "up to two weeks") and the pre-registered Read 2 on 6 Oct.
6. **The change record has holes that will hide the launch's effect.** CONFIRMED: origin/main history was re-rooted on 8 Sep (root commit 39d3c5e3 has no parent), so August deploys cannot be dated from origin/main. The 6 Sep deploy commit `b3939e1` cited in `GSC_TRACKER.md` no longer exists in the repo. `BLOG_PASS_TRACKER.md` and `content-refresh-tracker.md` are gitignored (`.gitignore:58 *.md`). The content-refresh tracker was last reviewed 14 Jul and its refresh log has one entry. The last deploy, 8fad4fca "sitemap fixed", changed only an outreach ledger JSON.
7. **The rules exist on paper, but changes keep getting stacked on top of each other.** CONFIRMED: the 14 Sep bundled deploy froze homepage edits for 28 days (`docs/evidence-audit/BASELINE_2026-09-13.md` §6). Nine more commits touching the homepage reached origin/main between 15 and 20 Sep (e.g. 6d0e3545, ac9e2ab1, 3e11f0b2). The tracker itself records Experiment 1 as "unreadable" and Experiment 5 as "contaminated".
8. **There is no post-deploy search monitoring, only pre-deploy guards.** CONFIRMED: CI runs type/lint/tests, `guard:all` and a structural SEO crawl (`.github/workflows/ci.yml`). Nothing in `scripts/` or `package.json` pulls Search Console data or alerts on clicks or indexing. The read-only GSC MCP connected on 22 Sep is the obvious place for it. Calibrated thresholds are in section 4.
9. **The 15 Aug AI-visibility baseline was captured inside a Google-acknowledged logging error.** CONFIRMED: Search Console's Data anomalies page lists a Generative AI report logging error for 13 to 17 Aug 2026, fixed 21 Aug. The 15 Aug and 19 Aug AI baselines in `GSC_TRACKER.md` were read during that window, so they undercount (by how much is unknown).

---

## 1. SEO growth-stage strategy

### Step 0 answers (from data, since nobody was asked)

| Question | Answer | Status |
|---|---|---|
| Coverage vs topic space | 146 URLs submitted in sitemap (`sitemaps.json`), 140 indexed on 21 Sep (`GSC_TRACKER.md` line ~100). About 88 blog posts on platform problems, platform costs and migrations, and 9 service pages. Problem-intent and cost posts are well covered. The tracker's own 6 Sep analysis found clicks come from "a constraint PandaCodeGen itself controls" (what a build costs here, no minimum, fixed price), and that topic family is thin. | CONFIRMED counts, INFERRED gap |
| Traffic maturity | First impressions 5 Feb 2026. Clicks grew for 11 straight weeks to a 28-day peak of 100 (29 Aug), then fell back to 59. 90-day page-level clicks: 252. | CONFIRMED |
| What is at stake | About 2 clicks per weekday and 1 per weekend day (Sep: 2.41 and 1.14). Leads "one to two a fortnight" (commit 6b882696, 9 Sep). | CONFIRMED |
| Tinkering vs new content | Far more tinkering than new content. Since 15 Aug: an accessibility sweep of 134 pages, pull quotes on ~75 posts, 47 headings rewritten, a plain-language pass on 32 pages, owned facts on 78 pages, a contextual link pass, quotes restored on 20 posts, a homepage repositioning, an Apple-style design system, now a full redesign plus split covers on all 88 posts and a rewrite of the top six posts. New posts in the same period: about a dozen. | CONFIRMED (git log) |
| Active concern | Yes: the impression drop in the brief. | CONFIRMED |
| Success right now | Not stated. INFERRED: leads, so conversion on existing traffic plus discovery coverage. | INFERRED |

### Stage assessment

**Early/growth stage.** Two clicks a day, 8 months of history, no year-over-year data, and a click curve that was still climbing until late August. All of that is a young site. It is not a mature site defending a traffic base. The unusual part is that it has been run as if it were mature: dozens of measured-optimization passes on existing pages, each with pre-registration, cohorts and read dates. At 50 to 100 clicks per 28 days, those passes cannot produce a readable result. The tracker's own verdicts say so ("no evidence the heading changes helped", Experiment 1 "unreadable", Experiment 5 "contaminated").

### Where effort should go now

1. **Coverage (most weight).** Add pages answering buyer discovery questions about constraints the business owns: price floors, timelines, what is included, who owns the accounts. Also add platform problem pages for platforms not yet covered. These are new URLs, so they do not compete for attribution (measurement-discipline Step 4).
2. **Conversion.** The clicks that exist land mostly on the homepage and a handful of diagnostic posts. Making those visits turn into enquiries is worth more than any rank change.
3. **Optimization of existing pages: stop, apart from fixing false claims.** After the redesign ships, leave existing pages alone for one full window (section 3).

### Active concern: broad or narrow

Classified in full in section 2. In short: **the impression loss is narrow in where it came from** (one page plus the page-3-and-deeper tail) **but external in cause** (automated query volume, not page content). **The click decline is broad-ish and modest**: spread across established non-brand pages, positions stable or better, no technical fault. Neither warrants page-level edits.

---

## 2. Traffic drop diagnosis

### 2.1 Confirmed real?

- **Impressions: real in the data, but mostly not human.** CONFIRMED that the numbers fell (61,333 to 27,436, prev 28 vs last 28). Google's Data anomalies page lists no web-search logging error for Aug or Sep 2026. The only 2026 entries near this window are Discover (13 Aug) and the Generative AI report (13 to 17 Aug, restored 21 Aug), and neither affects standard web-search totals. Desktop and mobile fell together (desktop 38,207 to 7,857, mobile 4,972 to 895; 14-day windows 5 to 18 Aug vs 18 Sep to 1 Oct, API pull), so this is not a single-device reporting change.
- **Clicks: real, smaller, and starting later.** CONFIRMED: 94 to 58 on the brief's windows (Sun to Sat aligned, both 28 days). Leaving out the preliminary days: 84 to 49 (8 Aug to 1 Sep vs 6 to 29 Sep, 24 days each). With counts this small, chance alone could move them by about ±12, and a 36-click drop is roughly three times that, so it is unlikely to be noise. The rolling 28-day series had only ever risen before September (+11% to +51%, 14 Saturdays from 27 Jun). The -41% on 26 Sep is the first fall.
- **Measurement:** analytics sessions were not checked (no GA4 access in this audit). Bing is not connected, so the Google-only cross-check in the skill could not be run. Live spot-check today: `/`, the Vercel post, the GoHighLevel and Divi posts all return 200, `index, follow`, self-canonical, and robots.txt allows everything except `/api/` and `/_next/data/`. CONFIRMED.
- **Calendar:** the weakest click week (6 to 12 Sep, 9 clicks) contains US Labor Day (7 Sep). No year-over-year comparison is possible because the site started in Feb 2026.

### 2.2 Onset and shape

| Event | Onset (Pacific dates) | Shape | Evidence |
|---|---|---|---|
| Impression step 1 | Starts 19 Aug (2,782 vs 3,964 the day before), bottoms 22 Aug (1,131) | Step over 4 days | `daily_16mo.json` |
| Impression step 2 | 17 Sep (1,016 vs 1,412), 18 Sep (656) | Step over 2 days | `daily_16mo.json` |
| Click decline | Week of 30 Aug (17, after weeks of 23, 27, 25, 25) | Slope with a low week, partial recovery | Weekly Sun to Sat clicks: 23, 27, 25, 25, 17, 9, 15, 18, then 16 (with preliminary days) |

Earlier history matters: impressions have stepped up or down by 50% or more at least four times before (19 May down, 2 Jul up, 2 Aug up, 19 Aug down). The 19 to 22 Aug step largely reverses the 2 to 3 Aug jump on the Vercel post (1,215 to 3,103 a day). CONFIRMED.

### 2.3 Size

- **Clicks:** -36 (-38%) prev 28 vs last 28. -35 (-42%) on complete data. Compared with July instead of the August peak, the drop is small: 28 days to 8 Aug had 85 clicks, and 28-day totals in July ran 63 to 68. CONFIRMED.
- **Impressions:** -33,897 (-55%). CONFIRMED.

### 2.4 Broad or narrow, by segment

**Impressions, prev 28 vs last 28 (`pages_prev28.json`, `pages_last28.json`):**

| Segment | Pages | Clicks | Impressions | Share of loss |
|---|---|---|---|---|
| `/blog/nextjs-hosting-zero-cost` | 1 | 8 → 5 | 33,229 → 12,661 | 60% |
| Pages at position >20 before | 43 | 7 → 5 | 11,495 → 3,430 | 24% |
| Pages at position 10 to 20 before | 39 | 23 → 12 | 7,636 → 4,346 | 10% |
| Pages at position ≤10 before | 53 | 56 → 34 | 9,815 → 7,266 | 7% |
| New in last 28 | 20 | 0 → 2 | 0 → 302 | -1% |

**Per-step split (API, daily, by page):**
- Step 1: the Vercel post fell from 2,244/day (9 to 18 Aug) to 438/day (22 to 31 Aug) at an unchanged position (7.6 to 9.7). The rest of the site fell from 1,180 to 846/day. The Vercel post is **84%** of the step. Rest-of-site clicks: 40 in the 11 days before, 34 in the 11 days after.
- Step 2: the Vercel post fell from 780/day (7 to 16 Sep) to 268/day (18 to 27 Sep), position about 8.5 to 9 throughout. The rest fell from 743 to 393/day, position about 10 both sides. The Vercel post is **59%** of the step. Rest-of-site clicks *rose*: 15 to 22 over the same 10-day windows.

**AI Overview or low position? (`page_query_90d.json`):** mostly neither of the obvious answers.
- Vercel post: 83% of its query impressions (31,507 of 38,005) carry an automated tell: year suffix, "official", "per month", "100gb" permutations, `+site:`/`%site.` prefixes. They have 0 clicks. Samples from the API for 18 Sep to 1 Oct include fragments like "and are they free", "cest gratuit ?", "costa?". CONFIRMED pattern. INFERRED source: non-human searches. Google said in 2025 that its own fan-out sub-queries do not show in Search Console (Search Engine Roundtable, 30 Jun 2025), so third-party agents or tools running real Google searches are the likelier source. Not provable from here.
- Rest of site: 63% of query-attributed impressions (12,006 of 19,083) sit at average position >20 and produced 1 click in 90 days. CONFIRMED. Pages that lost most of their impressions while their reported position *improved* (`shopify-headless` 1,276 → 8 at 24.6 → 9.2, `webflow-true-cost` 705 → 10, `google-algorithm-updates` 504 → 7) show this deep-position tail drying up.
- AI Overview: cannot be split by period from these exports. Search Console shows no AI appearance by query, and the Generative AI report has no clicks or queries. NOT measurable here.

**Clicks:** losses are spread out. GoHighLevel 15 → 7, Divi 17 → 12, homepage 13 → 10, how-to-migrate-wordpress-to-nextjs 4 → 0, agentic-browsing 4 → 0, Vercel post 8 → 5. Gain: squarespace-too-slow 2 → 8. Brand queries 7 → 7 (API, regex `panda|codegen`). On the two biggest losers, daily impressions halved or worse at a better position: GoHighLevel 50 to 90/day in Aug vs 25 to 35 in late Sep, position 8 → 6. Divi 70 to 190/day vs 20 to 35, position 8 → 6. CONFIRMED. A ranking loss would show worse positions; these show fewer impressions at the same or better rank. INFERRED: less demand, or Google answering on the results page. The GoHighLevel query set is itself paraphrase-shaped ("boost go high level website speed", "improve go high level page loading speed"), so some of its "demand" may also have been automated.

### 2.5 Ranked hypotheses

| # | Hypothesis | For | Against | Verdict |
|---|---|---|---|---|
| H1 | Automated query volume fell (agents, tools, AI-visibility trackers running Google searches) | Zero-click permutation queries are 83% of the main page's impressions. Position flat while volume swings. The page jumped into this volume on 2 Aug and fell out of it on 19 to 22 Aug and 17 Sep. Clicks unaffected. The 6 Sep tracker analysis found the same. | The source cannot be verified. No public announcement. | **Most likely cause of the impression loss.** INFERRED |
| H2 | Deep-position (page 3+) impressions shrank | 24% of loss is position >20 pages. Their reported position improves as impressions vanish. 1 click in 90 days from that band. | Exact mechanism unknown. | **Second contributor to impressions.** CONFIRMED pattern, INFERRED mechanism |
| H3 | August 2026 spam update (18 Aug 09:27 PT to 21 Aug 01:49 PT) | Exact overlap with step 1. | Positions on the click-earning pages held or improved. The Vercel post's position did not move. Clicks did not fall that week. Rest-of-site impressions came back up to ~1,200/day on 1 to 4 Sep. A spam demotion would show rank loss. | **Unlikely as the main cause; cannot be fully excluded.** Manual actions not checked (section 5). |
| H4 | Our own 19 Aug push (ten commits per `GSC_TRACKER.md`, including the 134-page accessibility sweep f1b5756a and the 5-page heading cohort 0f37ed29) | Same day as step 1 onset. | The page carrying 84% of the step was not edited after 15 Aug, and its position held. Edits that hurt a page usually move its rank. Click pages kept their rank. | **Unlikely.** INFERRED |
| H5 | Our own 14 to 20 Sep deploys (bundled 14 Sep release, then ~60 commits including homepage repositioning and a new design system) | Close to step 2. | The Vercel post was not edited between 8 Sep and 30 Sep (path log). Its position held. Clicks rose after the step. | **Unlikely for the impressions. Not tested for the homepage's small click change (13 → 10).** |
| H6 | Click slope from ~30 Aug: less demand, more on-SERP answers, Labor Day week, return to normal after an August peak | Same-or-better positions with fewer impressions on the click pages. Brand flat. Clicks back at July level. The lowest week contains a US holiday. | Small numbers. No year-over-year data. | **Unattributed.** Most consistent with demand or SERP layout, not ranking. |
| H7 | Indexing or technical break | None found. 140 of 146 indexed on 21 Sep, up from 132 on 4 Sep. Live pages 200 and indexable. Sitemap last downloaded 2 Oct, 0 errors. | | **Ruled out.** CONFIRMED |
| H8 | September 2026 spam update | | Began 24 Sep 09:15 PT, after both steps. | **Ruled out for both steps.** Still rolling, so it confounds anything measured now. |

### 2.6 Decision: wait (and investigate one thing)

- **Wait.** No technical fault, no manual action evidence, positions stable. The September spam update is rolling (Google: "up to two weeks" from 24 Sep). Per Google's guidance, compare a week after it completes against the week before 24 Sep.
- **Investigate further, cheaply:** whether the GoHighLevel and Divi click loss is demand or SERP layout. Check Google Trends for "gohighlevel website speed" and "divi slow", and view the live SERP for the top 3 human queries on each. No edits.
- **Do not:** edit the Vercel post or any page to "recover" impressions. Do not chase position or CTR on the deep-position tail. Do not read the redesign's effect against the August peak. Do not treat 27,436 impressions as a fall from a human baseline.

### 2.7 Monitor

- Metric: clicks (complete days only), plus human-only impressions (queries without automated tells, Vercel post reported separately).
- Segments: homepage; problem/diagnostic posts; cost posts; service pages; Vercel post on its own.
- Cadence: weekly breakage check, 28-day clicks read every 4 weeks (section 4).
- Review dates: one week after the September spam update is marked complete on the Status Dashboard (expected around 8 to 15 Oct); the pre-registered Read 2 on 6 Oct.
- Escalation: rolling 28-day clicks below 51 (the lowest since June) on complete data, or any indexing or technical failure.

---

## 3. Measurement discipline

### 3.1 Is there a real baseline-before-change record?

**Partly, and it is good when it exists.** CONFIRMED strengths: `docs/evidence-audit/BASELINE_2026-09-13.md` is a model baseline. It froze before the deploy, recorded a deploy record, a control group, a lock rule, and named confounders. `GSC_TRACKER.md` pre-registers read dates and pass/fail rules before the data arrives.

**Holes, all CONFIRMED:**
- origin/main history starts 8 Sep 2026 (root 39d3c5e3, no parent). August and early-September deploys can only be dated through dependabot branch ancestry, which disappears when those PRs close.
- `GSC_TRACKER.md` names the 6 Sep deploy as commit `b3939e1`. `git cat-file` says that object does not exist.
- `BLOG_PASS_TRACKER.md` and `content-refresh-tracker.md` are gitignored (`.gitignore:58 *.md`), so they are not versioned or backed up. The tracker notes the `/GSC` export folder is gitignored too.
- `content-refresh-tracker.md` was last reviewed 14 Jul. Its refresh log has one entry, despite dozens of content passes since.
- Commit messages are not a change record: "new fix", "new update", "new", and 8fad4fca "sitemap fixed", which changed only `docs/research/backlink-outreach-2026-09-16/outreach-ledger.json`.
- Deploy dates after 14 Sep are not recorded per push. All of 15 to 23 Sep was live by 23 Sep, but when each part went live is unknown.
- The 15 Aug and 19 Aug AI-visibility baselines fall inside Google's 13 to 17 Aug Generative AI logging error (Data anomalies page), so they undercount.

### 3.2 Layered changes / cannot isolate cause

**Present and recurring.** CONFIRMED examples:
- Homepage: changed in the 14 Sep bundled deploy, which set a 28-day lock. It was then changed again in 9 commits on origin/main between 15 and 20 Sep (6d0e3545 "lead with websites", ac9e2ab1, 5c76e708, 346a4795, a80f32e1, 10335a60, 9354b2e3, 961e2ee4, 9eff8af6). It changes again in the redesign.
- Vercel post: frozen by decision on 6 Sep ("Do not edit it"). Edited on 8 Sep (39d3c5e3) and again in the backlog (7bf40f00, 52575331, 556752ca).
- Divi post: edited 15 Aug, 19 Aug, 29 Aug, 8 Sep, 15 Sep, 16 Sep, and again in the backlog. GoHighLevel post: 15 Aug, 19 Aug, 8 Sep, 15 Sep, 16 Sep, and the backlog.
- Experiments: the tracker itself closes Experiment 1 as unreadable and records Experiment 5 as contaminated by the 6 Sep link pass.

### 3.3 Windows and control periods

They are used correctly on paper. Pre-registered read dates, 28-day before/after, waiting out rollouts, and a control group (the ~88 untouched posts in the 14 Sep baseline). In practice the control group was broken within days by sitewide passes (the CTA sweep on 15 Sep touched blog posts including Divi and GoHighLevel). At this site's volume, the noise band is wide: week-over-week click changes reach 47% at the 90th percentile, and rolling 28-day changes run -41% to +51%. Any per-page or per-pass result smaller than about ±40% at site level cannot be told apart from noise. CONFIRMED (computed from `daily_16mo.json`).

### 3.4 Does the cap apply to the right category?

Mostly yes. New articles were released on their own branch (`release/blog-articles-2026-09-17`) and treated as additions. But the backlog mixes the two: new posts ship in the same deploy as a full template change, so the new posts' early data will also carry the template effect.

### 3.5 Staleness backstop

**None.** Ledger updates are a habit, not a step in the process. CI enforces content guards (good) but nothing requires a deploy record, a tracker entry or a tag. The RELEASE_CHECKLIST asks to "Annotate monitoring and analytics with the release time", but there is no monitoring to annotate.

### 3.6 The key question: how to measure a ~270-file redesign plus an 84-commit backlog

What it is: one event touching every template. Backlog: 572 files, 91 blog files, 149 app route directories. Working tree: 269 entries (222 modified, 16 deleted, 31 untracked). CONFIRMED. Spot check: titles and H1s on the six top click pages are identical between live and `localhost:3400` (homepage, Divi, GoHighLevel, Squarespace, Vercel, WooCommerce). So for those pages the change is body copy and template, not title. CONFIRMED.

Recommendation (the owner decides; costs stated):

1. **Accept that it is one event. Measure for breakage, not lift.** At ~60 clicks per 28 days, a redesign that lifts clicks 20% will not show above noise for months. What can be detected is a break: indexing loss, canonical or robots errors, 404s on old URLs, a template that hides content from the crawler, or a sustained click fall beyond the band in section 4.
2. **Time it.** Ship after (a) the pre-registered Read 2 on 6 Oct is taken, and (b) the September 2026 spam update is marked complete. Otherwise both reads are confounded. Cost of waiting: about one to two weeks. Cost of not waiting: Read 2 is lost and any click movement in October cannot be separated from the update.
3. **Optional split, only if the owner wants a second reading:** push the 84-commit content backlog first, then the redesign template 4 weeks later. Cost: a month's delay for a reading that, at this volume, will probably be inconclusive anyway. I would not split. Ship together and protect the after-window instead.
4. **Freeze baselines before shipping, in a tracked file:**
   - Search Console: last 16 months by date, by page, and by page+query, saved into the repo or a backed-up location. `/GSC` is gitignored; the scratchpad exports from today are a start.
   - A URL-level before/after inventory from live vs local build: status, canonical, robots, title, H1, schema types, internal links in and out, word count, FAQ visibility. This, not commit messages, is the change record for 270 files.
   - The human-only baseline: clicks by segment (homepage, problem posts, cost posts, service pages, Vercel post separate) for the last 28 and 56 complete days.
5. **Deploy record, written at deploy time, in a tracked file:** commit SHA, git tag (`deploy-2026-10-xx`), Vercel deployment ID and time, and the list of URLs whose title, H1 or canonical changed.
6. **After-window rules:** 28 days minimum (Google recrawl on this site is slow; the tracker found `/services/webflow` unfetched for two months). Checks at days 2, 7, 14 and 28 for breakage. No edits to existing pages inside the window except false-claim fixes, logged with a date. New posts may ship but get tagged as new.
7. **What to compare against:** pre-launch rolling 28-day clicks (59 to 66 range over the last 3 weeks), not the August peak of 100. Report human-only impressions. Report the Vercel post separately and never as a KPI, as the tracker already decided.

### 3.7 Going-forward ledger

One tracked file (e.g. `CHANGELOG_SEARCH.md`, not gitignored). One row per deploy: date and time (PT), SHA/tag, pages touched (by template group), change type (new / correction / optimization / template), baseline numbers for the touched group, window close date, result. Make it a release-checklist item that CI can check: a deploy tag without a ledger row fails.

---

## 4. SEO health monitoring

### 4.1 Step 0 answers

| Question | Answer |
|---|---|
| Data | Search Console via the read-only GSC MCP (connected 22 Sep, `726bf026`). GA4 exists (tracker mentions it) but was not accessed. No Bing Webmaster connection. No server logs seen. |
| Who runs it | An agent can pull and compare. A human (owner) reads Messages, Manual actions and Security issues, and decides. |
| Critical groups | Homepage (main click page), problem/diagnostic posts (GoHighLevel, Divi, WooCommerce, Squarespace), service pages and contact (money pages), the Vercel post (traffic outlier, report on its own). |
| Volume | ~2 clicks per weekday, ~1 per weekend day. |
| Ledger | Partial (section 3). |
| Stage | Growth (section 1), so use the minimal routine plus deploy checks. |

### 4.2 What already exists

CONFIRMED from `package.json`, `.github/workflows/ci.yml`, `scripts/`:
- Pre-deploy: `npm run check`, `guard:all` (metrics, links, spec freshness, glossary, unicode, retired claims), `seo:check` (`seo-audit.mjs`, a structural crawl of server HTML run in CI), `smoke:release` (`release-smoke.mjs`), `dates:check`.
- Release helpers: `indexnow-ping.mjs` (Bing/IndexNow only), `docs/operations/RELEASE_CHECKLIST.md`.
- **Missing:** any scheduled pull of Search Console clicks, indexing or sitemap status, any alert, and any post-deploy check against production. `release-smoke.mjs` can point at production, but nothing schedules it.

### 4.3 Thresholds calibrated to this site (from `daily_16mo.json`, 1 Jun to 30 Sep, complete days)

- Daily clicks: 0 to 9. 11 zero-click days out of 122. Longest zero-click run: 2 days.
- Rolling 7-day clicks: 8 to 30 (10th percentile 11). Week-over-week absolute change, 90th percentile: 47%. Weekly click alerts would fire constantly, so do not use them.
- Rolling 28-day clicks: 51 to 102. Changes against the prior 28 days ran -41% to +51%.
- Every segment is under 100 clicks per period, so the skill's small-numbers rule applies: use 28-day windows for trends.

| Level | Trigger (complete days only; drop the last 3 days) |
|---|---|
| Critical | Homepage or a key template not 200, noindexed or wrongly canonicalized. robots.txt blocking. Manual action or security issue. Indexed count down >30% week on week (now 140). **3 or more consecutive complete days with 0 clicks**, which has never happened since June. Rolling 7-day clicks ≤4 (observed minimum 8). |
| Warning | Rolling 28-day clicks below 51 (the lowest since June) two weekly checks running. Any one page group down >50% in 28-day clicks while others hold. New indexing error type, or not-indexed above 10 (now 6). Sitemap errors. Homepage 28-day clicks below half its prior 28 days. |
| Info (log only) | Any impression move, including steps like 20 Aug and 17 Sep. Vercel post anything. Position drift. Single days. Weekend dips (weekend mean is about half the weekday mean). |

Recalibrate after the redesign's 28-day window closes, and quarterly after that.

### 4.4 Routine

- **Weekly, about 10 minutes (agent pulls, human reads the last two items):**
  1. Status Dashboard and Data anomalies page: anything new since last week?
  2. Rolling 7-day and 28-day clicks against the thresholds above, by segment.
  3. Indexing count and not-indexed URLs by name (the tracker's own 8 Sep rule).
  4. Sitemap: last downloaded, errors.
  5. Spot-check 5 URLs live: status, robots, canonical (`/`, `/contact`, one service page, GoHighLevel, Divi).
  6. Top gainers and losers by clicks, not impressions.
  7. Cross-check against the deploy ledger.
  8. Human: Search Console Messages, Manual actions, Security issues.
- **Monthly (30 to 60 minutes):** 28 days vs prior 28 by segment, human-only query view (tell-filtered), ledger windows that closed, at most 3 to 5 decisions with re-check dates.
- **Event-driven:** after any deploy, days 2, 7 and 14 on the affected group. After a Google update completes, compare the week after against the week before it began.
- **Automation that fits the repo:** a small `scripts/gsc_weekly.mjs` or `.py` that calls the read-only API, writes a dated JSON snapshot into a tracked folder (this also fixes the history-retention gap), and prints the threshold table. Keep the API quota in mind: about 6 calls a week covers it.

### 4.5 Weekly health check, as of 4 Oct 2026 (data to 29 Sep complete)

**Verdict: Watch.** Next action: do nothing to existing pages. Re-read one week after the September spam update completes.

| Signal | Status | Evidence |
|---|---|---|
| Known issues | Watch | September 2026 spam update rolling since 24 Sep. No Data anomalies entry for web search in Aug or Sep. |
| Clicks | Watch | Rolling 28-day 59 (to 26 Sep), above the 51 floor. Down from the 100 peak, back at July level. |
| Indexing | OK | 140 of 146 indexed, 21 Sep snapshot. |
| Crawl/server errors | Not checked | Crawl stats are not in the API. |
| Sitemap | OK | 146 submitted, downloaded 2 Oct, 0 errors, 0 warnings. The API's "indexed: 0" field is a known API quirk, not a real zero. |
| Messages / manual actions | Not checked | Not exposed to this audit. |
| Top pages | Info | GoHighLevel and Divi lost clicks at better positions. squarespace-too-slow gained. |
| Spot-check | OK | 4 key URLs plus robots.txt fine on live. |
| Ledger cross-check | Watch | 84 commits plus 269 working-tree changes not yet deployed. |

Inferred, not confirmed: the reason the automated query volume fell, and the reason human demand fell on two diagnostic posts.

---

## Not checked, and why

- **Manual actions, Security issues, Messages, Crawl stats:** not available through the read-only API, and no UI access in this audit.
- **Bing:** no Bing Webmaster connection, so the "Google down, Bing held" cross-check could not run.
- **GA4 / analytics sessions:** no access. A tracking-side break cannot be ruled out from here, though Search Console clicks fell independently.
- **Live SERPs for the losing queries, and Google Trends:** not viewed, to keep live load light and because the decision (wait) does not depend on them. Listed as the one cheap follow-up in 2.6.
- **AI Overview share by period:** Search Console has no per-query AI appearance and the Generative AI report has no clicks or queries, so the AI-Overview split asked for could not be measured. Only the automated-query and low-position splits could.
- **Exact push dates for commits from 15 to 23 Sep and for August:** not recorded anywhere I could find. origin/main history was re-rooted on 8 Sep.
- **Year-over-year:** the site started in Feb 2026.
- **Full before/after URL inventory of the redesign:** only the top 6 click pages' titles and H1s were compared. A full inventory is left to the migration-safety group.

## Sources (external, with dates)

- Google Search Status Dashboard, Ranking history (read 4 Oct 2026): https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history
- September 2026 spam update incident, began 24 Sep 2026 09:15 PDT, "may take up to two weeks": https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu
- Search Engine Journal, "Google Finishes Rolling Out The August 2026 Spam Update" (published 18 Aug, updated 21 Aug 2026; 18 Aug 09:27 PT to 21 Aug 01:49 PT): https://www.searchenginejournal.com/google-finishes-rolling-out-the-august-2026-spam-update/586301/
- Search Console Help, Data anomalies (read 4 Oct 2026; Generative AI report logging error 13 to 17 Aug 2026, restored 21 Aug): https://support.google.com/webmasters/answer/6211453
- Search Engine Roundtable, "PSA: Fan Out Queries Are Not In Google Search Console" (30 Jun 2025): https://www.seroundtable.com/fan-out-queries-are-not-in-google-search-console-39676.html
- IFACTORY, "Query Fan-Out, AI Mode & Bots: Reading Search Console in 2026" (28 Sep 2026): https://www.ifactory.com/insights/query-fan-out-search-console-2026/
