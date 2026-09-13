# Changes for review — 13 September 2026

Five commits, **not yet pushed**, sitting on local `main` ahead of `origin/main`.
20 files, +510 / -72. Nothing below is live; production still serves the uncorrected version.

**Release strategy, corrected 14 Sep.** An earlier version of this line said each commit
gets its own measurement window. That was wrong, and a reviewer was right to flag it:
separate commits isolate *code*, not *visitor exposure*. Deploying them together produces
one window, not five, and calling it five would have invented an isolation the release does
not provide.

Pick one and record it in `BASELINE_2026-09-13.md` §5 before deploying:

- **Staged** — push `92871cb` alone, observe 28 days, then push the rest. Matches the
  baseline's lock rule and is the only option that isolates the corrections from the
  structural change.
- **Bundled** — push all of it, measure as one release, and attribute nothing to any
  individual commit.

Either is defensible. Claiming the second while doing the first is not. And neither is a
randomised experiment: a staged before/after still does not establish causation on its own.

The baseline's immediate-correction exception still applies to false claims, and must not
be stretched to let structural consolidation ride along as a "correction".

| Commit | Subject |
|---|---|
| `92871cb` | Claim corrections on ten live surfaces |
| `df94ef0` | Homepage 17 sections to 11; price shown before the quiz |
| `d3771ce` | Hero and `/services` retargeted at external keyword data |
| `d98d4ec` | Hero sub-line: state the gain, not only the continuity |
| `394b554` | AI-builder post: exact phrase in an H2, no retitle |

---

## 1. Claim corrections (`92871cb`)

Every item was a claim written once, copied to several surfaces, corrected on one and left
standing on the rest. The repo single-sources *figures* (`spec-facts`, `company-facts`,
`case-study-facts`, with a build-failing guard) but not *sentences*, so the guards were
blind to all of these.

| # | File | Was | Now |
|---|---|---|---|
| 1 | `src/app/pricing/PricingPageClient.tsx` #07 | "while you are on a monthly plan we host it on our account and there is no separate hosting bill" | hosting agreed per client, written into the quote, not a plan entitlement |
| 2 | `src/app/pricing/PricingPageClient.tsx` #08 | "Optional monthly support covers hosting, maintenance…" | hosting *can* form part of the arrangement, on agreed terms |
| 3 | `src/app/page.tsx` homepage FAQ | same wording, **and it feeds FAQPage schema** | same correction |
| 4 | `src/app/services/wordpress-migration/PageContent.tsx` | chart row "Monthly Cost … $0" while the prose above it said "the honest comparison is $20 against $100, not free against $100" | "From your invoices" / "Hosting from $20" |
| 5 | same file | "Maintenance: Zero" | "Plugin and core updates" / "Dependency updates" |
| 6 | same file | "AI Search: Invisible" | "Depends on the theme" / "Server-rendered HTML" |
| 7 | same file | "Ownership: Rented" | "Licensed themes and plugins" / "Code and accounts transferred to you" |
| 8 | same file | "Security: Vulnerable", our bar at 100 | "Plugin and core surface to patch" / "Dependency surface to patch", bar 80 |
| 9 | same file | headline and description asserted the reader's costs as fact | reframed as "add up what you pay" |
| 10 | `src/app/services/woocommerce/PageContent.tsx` | "Ownership: Rented" | brought in line with #7 |
| 11 | `src/app/work/mycustompatches/page.tsx` | "Zero attack surface" | "No plugin or theme surface; framework dependencies still patched" |
| 12 | same file | "Core Web Vitals: Failing → All green" | "Withdrawn pending reconciliation" |
| 13 | `src/app/services/ecommerce/PageContent.tsx` | "your checkout works exactly how your conversion data says it should" | checkout stays with Shopify; editing its steps is a Plus entitlement |
| 14 | same file | "Custom Checkout … Integrate Stripe" | "Custom Cart and Pre-Checkout" |
| 15 | same file | "Advanced checkout flow" | "Advanced cart and pre-checkout flow" |
| 16 | `src/app/partners/PartnersContent.tsx` | `rate: "35% margin"` beside a bullet saying "35% markup" | "35% markup", with $3,500 → $4,725 → 25.9% gross margin spelled out |
| 17 | `src/components/sections/Hero.tsx` | H1 "…without losing your traffic" | unconditional promise removed |
| 18 | same file | subhead "when someone asks ChatGPT, Claude or Google who to choose, your pages are what they see" | promise of selection removed (readability later restored, see §4) |
| 19 | `src/components/sections/AntiAgency.tsx` | "Book 30 minutes" while TierQuiz said 15 | both 15 |
| 20 | `src/components/services/PricingTiers.tsx` | `cta` declared on the tier type and **never read**; seven pages rendered "Get your migration plan", including custom engineering | prop wired up; custom engineering now "Scope your build" |
| 21 | `src/data/service-faqs.ts` webflow | "it doesn't cost you **your** 90-plus speed score" — a delivery target stated as an owned, permanent property | reworded to the handover target on the representative pages named in scope |
| 22 | same file | the timeline range never said what starts the clock | start conditions added: agreed scope, access, content; anything else is queue time |
| 23 | same file | no answer to who supplies copy and images, or what you pay after launch | two FAQs added |
| 24 | `src/app/services/webflow/PageContent.tsx` | the four migration stages described only Panda's work | "You supply / Panda handles / You approve" block added — nothing on the site had one |
| 25 | `src/app/blog/is-it-cheaper-to-build-your-own-website/page.tsx` and its `src/data/blog.ts` FAQ | "entry prices from $1,250" | names Brian Yang's published $700 three-page Starter, dated |

**Worth checking hardest:**

- **#1–#3, hosting.** The owner clarified on 13 Sep that hosting is arranged per client,
  not included with a plan. Two live examples: a $200/mo client whose usage costs a few
  dollars, and a non-profit on no plan at all. The prior wording was a commercial
  commitment a customer could rely on, and #3 was republishing it as schema.
- **#12, Core Web Vitals.** `case-study-facts.json` records that every performance figure
  for this project was withdrawn on 2026-08-04 after a PageSpeed claim inflated from 90+
  to 97 to 100 across edits. "All green" survived because it is a hardcoded string, not a
  value the guard reads.
- **#25.** $1,250 was not false — it is Sanjeewa's price — but it understated the
  competitor floor by $550 in a post arguing about minimums, an error that favoured us.

---

## 2. Homepage consolidation (`df94ef0`)

**4,098 words / 17 sections → 2,957 / 11.**

Measured against eleven competitor homepages with this repo's own extractor
(`audit/seo-review-2026-09-12/crawl.py`): median 1,925 words / 9 sections, longest
3,253 / 12. Ours was longer than all eleven. The excess was not spread evenly — it sat in
four services blocks, three pricing blocks, three "who we are" blocks and two CTAs, twelve
blocks doing the work of five.

Removed from `src/app/page.tsx` (components kept and still importable; re-adding a tag
restores the section): `WhoWeHelp`, `AntiAgency`, `AIPowered`, `UnfairAdvantage` (still
renders on `/services`), `RevenueCalculator`, `TrustLogoBar`.

**Nothing was cut to reach a word count.** The 1,200–1,600 target was withdrawn by its own
author on 13 Sep as unvalidated, and 2,957 is deliberately well above it.

`src/components/sections/TierQuiz.tsx`: the bands $1,500 / $3,500 / From $5,000 already
existed in `tierMap` and rendered only *after* three questions were answered. They now
render above the quiz and the heading leads with the number. Three of six competitors put a
price in a section heading; none makes the visitor work for one.

---

## 3. Hero and `/services` retargeted (`d3771ce`)

**The method changed, and that is the substance of this commit.** Every prior keyword
decision on this site came from our own Search Console, which only shows queries we already
rank for — a survivorship-biased sample that cannot show demand we are invisible for.

External US volume and difficulty, checked 13 Sep 2026. **Source: DataForSEO via the
Percuity MCP `get_keyword_data` tool, `location_code: 2840`, `language_code: "en"`,
`include_difficulty: true`.** Raw rows for all five calls, with the provider's own caveats,
are in `docs/evidence-audit/keyword-evidence/` (moved there 14 Sep from `audit/`, which
`.gitignore` excludes, so it existed on one machine only) — that record was written on 14 September after a
reviewer asked for the provider, which had not been recorded when these figures were first
reported. Volumes are provider estimates, difficulty is a modelled backlink score, and
`NO_VOLUME_REPORTED` means below the reporting floor rather than zero.

| Term | Vol/mo | KD |
|---|---:|---:|
| website redesign services | **6,600** | **10** |
| web development agency | 3,600 | 27 |
| website redesign | 2,900 | 24 |
| custom web design | 880 | 23 |
| website migration services | 720 | **3** |
| wordpress alternative | 720 | **6** |
| webflow alternative | 320 | **0** |
| seo migration services | 170 | **0** |
| nextjs development agency | **10** | 14 |
| migrate wordpress to nextjs | no value returned | — |
| ai ready website | no value returned | 12 |
| ai optimized website | no value returned | 19 |
| llms txt | no value returned | 46 |
| get cited by chatgpt | no value returned | — |

**Three corrections to this table, 14 Sep.** It previously showed a dash for
`nextjs development agency`'s difficulty when the capture returned KD 14, and grouped four
terms into one "no volume" row that hid KD 12, 19 and 46. A missing volume is not a missing
difficulty, and collapsing them made the evidence look thinner than it was. Second,
"no volume" now reads "no value returned": the cause of a null is not established, and
`ai website builder for business` returned 30/mo on 13 Sep and null on 14 Sep, so the status
is not even stable across a day. Third, these figures must not be summed — DataForSEO groups
close variants, so adding them and calling the total distinct searchers would double-count.

- `src/components/sections/Hero.tsx` H1 → **"Website redesign and migration for WordPress,
  Wix and Squarespace."**
- `src/app/services/PageContent.tsx` H1: **"Capabilities & Architecture."** →
  **"Website redesign and migration services."** That page received 35 impressions and 0
  clicks in 92 days.
- `src/app/services/page.tsx`: metadata, OG and Twitter titles aligned.
- `src/components/forms/HeroLeadForm.tsx`: `replyNote` already existed and was an empty
  string, so "a founder replies, usually within one business day" only ever reached people
  who had already submitted. Now filled.

  **Placement, corrected 14 Sep.** An earlier version of this line said the note renders
  before the submit button. It does not. The button is at line 225; the note renders at
  line 264, after the form and after the direct-contact block. The benefit is real — the
  expectation is now visible without submitting first — but it sits at the foot of the
  panel, not beside the action. Moving it directly above the button was not done and would
  be a separate change.

This also closes a gap the external research asked for by name.
`docs/research/keyword-gap-2026-09-13/README.md` states that "every inferred phrase still
needs country-specific keyword-volume validation" and asserts no volumes. Validating its own
P1 list moved `website redesign services` up and moved priorities #3–#5 down:
`webflow to nextjs migration`, `migrate webflow cms to nextjs`,
`gohighlevel website integration`, `export gohighlevel website` and
`cancel gohighlevel keep website` **all report no volume.**

Those buyers are real; the Reddit and HighLevel feature-request evidence is sound. An
earlier version of this paragraph said a problem with no volume is "a sales opportunity,
not an SEO one". **That is too absolute and a reviewer was right to say so.** A phrase
below the reporting floor can still receive searches, and is often a less common wording of
a topic that does have demand. The defensible version: these phrases do not justify being
ranked above a 6,600/mo term at KD 10 in a publishing order, and they do not each justify a
standalone page. Judge them as one topic on buyer fit and incremental value, not as
individual keyword targets.

---

## 4. Hero sub-line (`d98d4ec`)

After §3 the sub-line was all continuity — pages come across, links come across, your team
edits the same way. That answers "what breaks?" and never answers "why switch?". It now
leads with the gain before listing what survives.

AI readability was restored here, deliberately and narrowly. What `92871cb` removed was the
**promise** that AI engines would display the client's pages, which claims an outcome those
systems control. "Every page is built so Google and AI assistants can read it properly" is a
property of the build and is ours to deliver; the Generative AI Features export for
12 Jun – 11 Sep records 9,843 impressions. **Readability is the claim; selection is not.**

"Fast" is kept as a persuasion word, not a keyword — it is 3 queries and 115 impressions in
the export. It is backed by the 90+ handover target in `company-facts.ts` and is not the kind
of unqualified superlative `check-public-claims.mjs` blocks.

---

## 5. AI-builder post (`394b554`)

Asked to retitle at "ai website builder" (40,500/mo). **Not done.**

**Corrected 14 Sep.** The commit message for `394b554` says "the only real volume is the head
term". That is contradicted by rows in my own capture: `can ai build a website` 320,
`ai website builder for business` 30, `are ai website builders good` 10. A reviewer caught
it and is right. The commit message overstates and cannot now be edited; this is the record.

What the evidence does support: the five phrases that carry the post's actual argument —
`ai website builder problems`, `problems with ai website builders`,
`should i use an ai website builder`, `ai website builder limitations`,
`ai website builder vs developer` — all returned no volume. The head term at KD 44 is held
by the builders themselves, whose searchers want a tool rather than an argument against
using one. `can ai build a website` at 320/KD 48 is real and adjacent, but it is a
capability question, not a cost decision, so it does not by itself justify retitling a
cost-decision article. Relevance still has to carry that, and it does not.

One H2 now carries the exact phrase; title, URL, canonical, schema and positioning are
untouched.

---

## Open — needs an owner decision, not a review

**An AEO service page does not exist, and the commercial demand for one is unserved.**

| Term | Vol/mo | KD | CPC |
|---|---:|---:|---:|
| ai seo agency | 1,600 | **0** | $45.01 |
| ai seo services | 1,300 | **2** | $41.06 |
| geo agency | 720 | 24 | $44.22 |
| aeo services | 480 | 9 | $41.74 |

**No cannibalisation.** The eleven posts in the `seo-aeo` cluster all target informational
intent — `aeo playbook`, `what is answer engine optimization`, `how to measure ai search
visibility`, `does chatgpt drive sales`, `what is llms.txt`. None targets "agency" or
"services". The cluster's `pillarHref` in `src/data/topical-map.ts` is `/editorial-policy`,
a policy page, so the cluster has no commercial destination at all.

The topical map's rule — "NEVER MINT A HUB THAT COMPETES WITH A MONEY PAGE THAT ALREADY
EXISTS" — is not engaged here, because no money page exists for this cluster.

Writing the page needs the owner to state what the AEO service includes, what it costs and
how it is delivered. Drafting it without that would invent scope.

---

## Verification

`npm run build`, `npm run check` (15/15) and `npm run guard:all` all exit 0 at `394b554`.

Required before any after-window opens: `/services/wordpress-migration` was last crawled
**15 July 2026, 60 days ago**, and carries seven of the corrections in §1. `/pricing` is 15
days stale. Request Indexing is needed per page after deploy, and each page's measurement
window starts only once it is recrawled.
