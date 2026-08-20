# Why one post holds 52% of AI visibility

Analysis run 19 Aug 2026 against the Generative AI features export (18 May to
13 Aug) and the 18 May standard-search export transcribed in GSC_TRACKER.md.

## The distribution

6,257 AI impressions across 76 pages. Seven pages hold 80% of it. Thirty-one
pages have five or fewer. `/blog/nextjs-hosting-zero-cost` alone is 3,250, or
51.9%.

## What does NOT explain it

**On-page structure does not.** Comparing the top 7 against the 49 pages with
five or fewer impressions:

| | Top 7 | <=5 impressions |
|---|---|---|
| word count | 2,670 | 2,066 |
| H2 sections | 9 | 7 |
| FAQ entries | 8 | 6 |
| numbers in prose | 29 | 17 |
| title contains a number | 100% | 84% |
| question-shaped title | 29% | 27% |
| title contains a year | 100% | 80% |

Nothing there explains a 3,250-versus-5 gap. The clearest demonstration is a
matched pair with near-identical format:

- "WooCommerce Too Slow? A 2026 Diagnosis and Fix Guide" -> **336**
- "Squarespace Too Slow in 2026? Diagnose Before Migrating" -> **5**

**Search ranking does not either.** Pearson r between standard-search
impressions and AI impressions across 25 matched pages is **-0.03**. There is no
linear relationship. Counter-examples in both directions:

| page | search imp | position | AI imp | AI/search |
|---|---|---|---|---|
| webflow-migration-cost | 8,181 | 5.8 | 383 | 5% |
| webflow-migration-50-to-100-pages | 2,597 | 6.1 | 6 | 0% |
| divi-theme-slow | 461 | 7.4 | 311 | 67% |
| woocommerce-too-slow | 977 | **51.2** | 336 | 34% |
| **nextjs-hosting-zero-cost** | **224** | **13.6** | **3,250** | **1,451%** |

`woocommerce-too-slow` sits on page six of Google and still pulls 336 AI
impressions. The anchor page ranks 13.6 with 224 search impressions and pulls
3,250. **It is not winning because it ranks. It ranks badly.**

## The hypothesis

The anchor page is titled "Is Vercel Free? 2026 Hobby Limits and Business
Pricing". It answers a **dated factual lookup about a named third-party
product**, and it is the only mature page on this site that renders dated vendor
specs from `spec-facts.json`.

That file's own docblock records why it was built: 49% of this site's search
impressions are year-qualified queries, and in the Vercel cluster it is 69%.
Half that demand is explicitly asking AS OF WHEN. That is exactly the question
shape people put to an assistant rather than a search box, and answering it
requires a source carrying a current number with a check date attached.

Only three pages on the site render `spec()` at all:

| page | spec() calls | AI impressions |
|---|---|---|
| /blog/nextjs-hosting-zero-cost | 9 | 3,250 |
| /blog/which-website-builders-can-go-headless | 19 | 0 (published 18 Aug) |
| /services/webflow | 7 | 0 |

## What weakens it, stated plainly

**n = 1.** One mature page is not a pattern.

**`/services/webflow` is a counter-example.** Seven spec calls, zero AI
impressions. It may be that service pages behave differently from blog posts in
generative surfaces, or it may be that the spec hypothesis is wrong.

**Naming a vendor is not the lever.** All 7 top pages name a specific vendor in
the title, but so do 56% of the bottom 30. Necessary at best, nowhere near
sufficient.

**Topic demand is uncontrolled.** "Is Vercel free" may simply be asked of
assistants far more often than anything else this site covers. That alone could
produce the whole effect, and this analysis cannot separate it.

## The test already running

`/blog/which-website-builders-can-go-headless` shipped 18 Aug carrying **19
spec() calls**, twice the density of the anchor page. It is the most
spec-dense page on the site and it has no AI impressions yet because it did not
exist during the measurement window.

If the hypothesis holds, it should accumulate AI impressions out of proportion
to its search rank, the same signature as the anchor page. If it stays near zero
while ranking normally, the spec hypothesis is wrong and the anchor page is
explained by topic demand instead.

Read it no earlier than mid-September: the page needs indexing plus a
measurement window, and the August 2026 spam update plus the 19 Aug push
confound anything before ~26 Aug.

## The strategic tension worth noting

The `content-intent-ctr-rule` record says problem pages earn 0.60% CTR against
0.04% for third-party-spec pages. If this analysis holds, those same spec pages
are the ones winning AI surfacing. The page type that loses clicks may be the
page type that wins citations. Those are different jobs and probably want
different pages, rather than one page trying to do both.

---

## Pre-registered decision rule (written 19 Aug 2026, BEFORE any result)

Recorded in advance on purpose. With baselines this small it is very easy to
read noise as signal after the fact, so the threshold is fixed here first.

### The two groups

**Treatment (headings rewritten 19 Aug):**

| page | AI impressions, 18 May to 13 Aug |
|---|---|
| webflow-vs-custom-website | 0 |
| shopify-headless | 4 |
| squarespace-too-slow | 5 |
| shopify-stocky-sunset-date-2026 | 7 |
| gohighlevel-keep-crm-replace-website | 9 |
| **cohort total** | **25** |

**Control:** every other page at 10 or fewer AI impressions in the same export,
untouched. Roughly 26 pages. This group exists because site-wide AI impressions
grew +523% across the measurement window. If the tide lifts everything, the
cohort rising proves nothing on its own.

### Read date

**Not before 8 September 2026.** The pages need recrawling, then a window to
accumulate. Anything before ~26 Aug is confounded by the August 2026 spam update
(started 18 Aug) and the 19 Aug push.

### What counts as a pass

Pull the same Generative AI features export and compare **cohort growth against
control growth**, not raw numbers.

- **PASS:** at least 3 of 5 cohort pages more than double their baseline AND the
  cohort grows at least twice as fast as the control median.
- **INCONCLUSIVE:** cohort rises but within roughly the control's growth rate.
  That is the tide, not the headings. Extend to October rather than rolling out.
- **FAIL:** cohort flat or moving with the control. Headings are not the lever.
  Do not start the 10-a-day rollout. Go back to the topic-demand explanation,
  which this analysis could never rule out.

### Why 2 of 5 is not enough

Baselines of 0, 4 and 5 are small enough that a single query trend moves them.
Two pages improving is inside what chance produces at these numbers. Three of
five, with the control flat, is the point where headings become the better
explanation than luck.

### The separate test already running

`which-website-builders-can-go-headless` (published 18 Aug, 19 spec() calls,
twice the anchor page's density) tests the OTHER hypothesis, that dated vendor
specs drive AI surfacing. It is independent of this cohort. Both can be read on
the same date, and they can disagree, which would itself be informative.

---

## DO NOT EDIT THE COHORT BEFORE 8 SEPTEMBER 2026

The five treated pages are `squarespace-too-slow`, `shopify-headless`,
`shopify-stocky-sunset-date-2026`, `gohighlevel-keep-crm-replace-website` and
`webflow-vs-custom-website`. Any content change to them before the read date
makes the result unattributable and wastes the three weeks.

### Which skills were run, and which were held back

**Run, because they verify the change rather than alter the page:**

- `deslop` on all 47 new headings: zero AI tells, zero em dashes, zero numbered
  steps remaining, mean 7.8 words.
- `citability` on all 47: 98% now name a specific vendor or product, up from
  roughly 0%. 73% are posed as a reader question. The single heading naming no
  third party is "PandaCodeGen commercial and acceptance terms", which names us.

**Deliberately NOT run until after the read date:**

`google-content-audit`, `semantic-triples` and `ai-overview-gap-fill` all prompt
content changes. Running them now would take each diff past the current 24
insertions and 24 deletions and destroy the single-variable design. They are
owed on all five pages and should run the moment the cohort reports, whichever
way it goes.

This is the one situation on this site where NOT running the full five-skill
gate is correct. It is a deferral with a date on it, not a skip.

---

## Sample size caveat on Experiment 2 (recorded 19 Aug, before either result)

Experiment 1 (the heading cohort) runs on 5 pages. Experiment 2
(`which-website-builders-can-go-headless`, spec-density) runs on 1. That
asymmetry is real and was flagged before any data came back, specifically so it
cannot be argued away after the fact depending on which way the result breaks.

**Why the sample sizes differ, not fixed for fairness tonight:** a heading
rewrite adds no new facts and no new claims, so it scales cheaply. A spec()
call is a verified, dated, sourced fact. Matching Experiment 1's n=5 would mean
researching and verifying roughly 30+ new facts across 4 more topics under time
pressure, which risks exactly the kind of unverified or stale claim this site's
evidence policy exists to prevent. Padding the sample size that way would cost
more than it would prove.

**How the n=1 result must be read, decided now:**

- A single page moving the way the anchor moves (outsized AI impressions
  relative to its search rank, the signature already established) is
  SUGGESTIVE, not confirmatory. One data point cannot separate "specs are the
  lever" from "this particular topic has unusual demand."
- A single page staying flat does not kill the theory either, for the same
  reason in reverse.
- Neither outcome should be announced as a settled finding on 1 page. The
  correct action on a positive signal is to fund a second, properly-researched
  round (real verified specs, 3-5 more pages, done without time pressure), not
  to declare victory. The correct action on a flat result is to deprioritise
  the spec-density theory relative to whatever else surfaces, not to discard it
  outright on n=1.

---

## Direct investigation of the anchor page (20 Aug 2026)

Queued in `next-session-plan.md` as the priority for this session: what does
`nextjs-hosting-zero-cost` actually do that the rest of the site doesn't.

### What was tested

**Inline, per-claim external citation density.** The anchor page carries 21
external links, and unlike a generic "sources" list, 20 of 21 point at Vercel's
own primary documentation (docs, pricing, terms, blog), placed inline at the
exact sentence making that specific claim, not aggregated at the bottom. That
is structurally different from `which-website-builders-can-go-headless`
(Experiment 2), which has high spec() density (19 calls) but almost no inline
links, the sources are aggregated into one "Primary sources" list instead.

Tested across all 83 eligible posts:

- Pearson r (raw): 0.517 -- looks strong, but dominated by the anchor page
  being the extreme outlier on both axes at once.
- Pearson r (log-transformed AI impressions, to stop one outlier dominating):
  0.372
- **Pearson r, anchor page excluded, tested on the other 82: 0.242**
- **Spearman rank correlation, anchor excluded: 0.176**

### Verdict: real but weak

0.176 is a genuine positive signal, well above the -0.03 the search-rank
theory produced, but far too weak to call this the explanation. Counter-
examples are direct: `woocommerce-too-slow` gets 340 AI impressions with ZERO
inline external links. `shopify-app-costs-real-monthly-bill` ties the anchor's
citation count (21) and gets only 170 impressions, a fraction of the anchor's
3,627.

**Conclusion: inline citation density is a real, additive factor. It is not,
on its own, sufficient to explain the anchor page.**

### A fourth lead, not yet tested by either running experiment

The anchor page's title, "Is Vercel Free?", is a binary yes/no
product-pricing question about a named, widely-known platform. No other
high-performing post on the site shares that exact shape.
`gohighlevel-website-speed` and `webflow-migration-cost`, the next two highest
AI-impression pages, are diagnostic and cost-scoping titles respectively, not
binary questions. This is untested by both Experiment 1 (headings reworded to
name a vendor and pose a question, but not specifically a binary yes/no
pricing question) and Experiment 2 (spec density, no citation-inlining, no
title-shape control).

**Recommended next step, not started tonight:** when Experiment 2 reports,
regardless of outcome, consider a third natural experiment that combines all
three now-isolated variables on one new post -- inline per-claim citation to
primary sources, spec density, and a binary yes/no product-pricing title --
rather than continuing to test them one variable at a time on unrelated pages.

---

## Resolution: topic demand, tested directly (20 Aug 2026)

The remaining open question after the citation-density test was whether the
gap is explained by demand that cannot be manufactured, rather than anything
on the page. Tested directly against Google Ads Keyword Planner rather than
left as "cannot rule out."

| Page | Rank by AI impressions | Its own seed keyword | Monthly search volume |
|---|---|---|---|
| nextjs-hosting-zero-cost | 1st | "is vercel free" | **880** |
| nextjs-hosting-zero-cost | (same page, broader) | "vercel pricing" | **4,400** |
| gohighlevel-website-speed | 2nd | "gohighlevel site speed" | **ZERO_SEARCH_VOLUME** |
| webflow-migration-cost | 3rd | "webflow migration cost" | **ZERO_SEARCH_VOLUME** |
| woocommerce-too-slow | 4th | "woocommerce too slow" | 10 |
| divi-theme-slow | 5th | "divi theme slow" | 10 |

This is decisive, not marginal. The site's #1 AI-visibility page answers one of
the only topics on the entire site with real, four-figure monthly demand. The
#2 and #3 pages answer topics with literally no measurable search volume under
their own title's phrasing.

### How this reconciles with the citation-density finding, rather than replacing it

Demand alone does not guarantee citation. Every finding from tonight and two
nights ago now fits one coherent account instead of competing theories:

1. High topic demand is necessary and cannot be built. It is the reason this
   specific topic has enough underlying question volume, across search boxes
   and AI assistants alike, for a citation to be possible at this scale at all.
2. Inline citation to primary sources and dated spec density (Experiments 1
   and 2, plus the citation-density test above) are what CONVERT that existing
   demand into an actual AI citation once it exists. That is consistent with
   the citation signal being real but weak on its own (r=0.176): it multiplies
   demand, it does not create it, so on a low-demand page it has little to
   multiply.

### The honest limit of this test

Keyword Planner is built around classic search-box behaviour and, per
spec-facts.json's own docblock, "barely sees the long tail" of natural-language
phrasing that AI assistants are more likely to be asked in. Zero measured
volume for "gohighlevel site speed" does not prove zero real demand for
GoHighLevel speed questions asked in other words. It does prove that whatever
demand exists is not concentrated the way Vercel pricing demand is, which is
itself the point: the anchor page sits on unusually concentrated, measurable
demand that the comparison pages do not.

### What this changes about the plan

Do not expect the heading cohort (Experiment 1) or the spec-density page
(Experiment 2) to reproduce the anchor page's scale, even if both succeed on
their own pre-registered terms. Neither touches a topic with anything close to
Vercel pricing's demand. Success for both should be read as "citability
improved," not "we found another 3,600-impression page." The actual lever for
finding the next anchor-scale page is demand-led: identify which other topics
on this site, if any, carry four-figure monthly search volume the way Vercel
pricing does, and prioritise citability work there first.

---

## Correction: demand is necessary for the anchor's scale, not a clean predictor everywhere (20 Aug 2026)

Extended the demand test from a 6-page spot check to the full Wix (3), WordPress
(12) and Shopify (9) clusters, prompted by a direct question about whether the
method holds up at scale rather than on hand-picked examples.

### Real demand sitting unused

| Post | Measured demand | Current AI impressions |
|---|---|---|
| shopify-headless | "headless shopify" 590/mo | 6 |
| shopify-conversion-rate-speed-fix | "shopify conversion rate" 140/mo | 3 |
| shopify-store-speed-optimization | "shopify speed optimization" 170/mo | 1 |
| wix-too-slow | "why is wix so slow" 170/mo | 0 |
| wordpress-vs-nextjs | "wordpress vs nextjs" 20/mo | 2 |

`shopify-headless` is the standout: its demand (590/mo) is the same order of
magnitude as two of the anchor page's own keywords ("vercel free tier" and
"vercel hobby plan", both 590/mo), and it converts that into 6 AI impressions
against the anchor's 3,627.

### Real AI visibility with no measured demand behind it

| Post | Measured demand | Current AI impressions |
|---|---|---|
| how-to-fix-slow-wordpress | 10/mo | 62 |
| how-to-migrate-wordpress-to-nextjs | ZERO_SEARCH_VOLUME | 42 |
| wordpress-traffic-drop-speed | ZERO_SEARCH_VOLUME | 18 |

### Revised conclusion

Demand explains the ANCHOR PAGE's scale specifically: nothing else on the site
approaches 880-4,400/mo. It does not cleanly predict AI-impression rank across
the rest of the site. Two failure modes exist in both directions, and both are
now evidenced rather than theoretical:

1. Real, provable demand can sit almost entirely uncaptured (shopify-headless).
   This is a citability gap, not a demand gap, and it is fixable with the same
   toolkit as Experiments 1 and 2, on a page that does not need new demand
   found for it.
2. Meaningful AI visibility can exist on topics with no measured
   Keyword-Planner demand at all (how-to-fix-slow-wordpress,
   how-to-migrate-wordpress-to-nextjs), consistent with the standing caveat
   that Keyword Planner undercounts natural-language, assistant-style phrasing.

### What this changes about the plan, again

The 20 Aug entry above recommended a demand-led hunt for "the next anchor."
That is now qualified: demand-led search should specifically surface pages
like `shopify-headless`, where real demand already exists and citability is
the missing piece, rather than searching for entirely new topics. That is a
cheaper, more concrete target than finding a fresh 4,000-search/month topic
from nothing. Recommended as a candidate for the third combined-variable
experiment proposed above (inline citation + spec density + question-shaped
title), applied to shopify-headless specifically, once Experiments 1 and 2
report.
