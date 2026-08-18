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
