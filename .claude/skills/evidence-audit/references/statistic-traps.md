# Statistic traps

Expanded reference for pass 6 of `evidence-audit`. Every number carries the conditions it
was measured under. Strip the conditions and the number stops being true.

## 1. Publication date is not currency

A paper published in 2026 may test systems from 2024 and prices from 2023. A vendor page
retrieved today may describe a plan that stopped being sold to new customers last year.

**Rule:** cite the date of the *thing measured*, not the date of the document.

> ✅ "A 2023 test of GPT-3.5 found…"
> ❌ "Recent research shows…" (when the research tested a three-year-old system)

For vendor pricing this is the dominant failure mode. Our own reports handle it correctly
by stamping "checked on 10 September 2026" beside every price. Copy that pattern.

Legacy plans compound it: a price can be simultaneously current for existing accounts and
unavailable to new ones. Say which.

## 2. Population estimates do not identify individuals

A study estimating that 13.5% of a corpus shows some trait tells you nothing about any
single member of that corpus. The method that produces a population estimate usually
*cannot* classify individual cases — that is a different statistical task.

> ✅ "One analysis estimated a lower bound of 13.5% across 15 million abstracts."
> ❌ "13.5% of papers are AI-written, so this one probably is."

The same trap in our domain: "most small businesses overpay for plugins" cannot be inferred
from a survey of advertised prices. It needs a survey of what businesses actually pay.

## 3. A historical rate is not a current rate

Quote the year with the figure, permanently. A fabrication rate measured on GPT-3.5 in 2023
describes GPT-3.5 in 2023. A Shopify app price from a 2024 listing describes that listing.

**Rule:** if the sentence would be wrong without the year, the year is part of the claim.
Put it in the sentence, not in a footnote.

## 4. Different metrics answer different questions

These are not interchangeable, and swapping them silently changes the claim:

| Metric | Answers |
|---|---|
| Accuracy | Of all cases, what fraction did it get right? |
| Sensitivity / recall | Of the actual positives, what fraction did it catch? |
| Specificity | Of the actual negatives, what fraction did it correctly pass? |
| Precision | Of the things it flagged, what fraction were really positive? |
| AUROC | How well does it rank positives above negatives across all thresholds? |
| F1 / macro F1 | A balance of precision and recall; macro averages across classes |

Two more that get conflated constantly in AI-search writing: **coverage** (what share of
statements are supported) and **correctness** (what share of citations support their
statement). A study reporting 51.5% coverage and 74.5% citation correctness has reported
two different things about the same system. Neither is "the accuracy".

Vendor equivalents: "up to", "starting at", "average", and "typical" are four different
claims. So are "per month billed annually" and "per month".

## 5. Correlated signals are not independent confirmations

Five observations that share one cause are one observation. Matching headings, matching
list lengths, matching punctuation and matching paragraph shapes across a set of pages are
explained by one template — counting them as five signals badly overstates the evidence.

**Rule:** before stacking signals, ask what single cause would produce all of them. If one
exists, you have one signal.

Same logic for cost arguments: four apps from one vendor, cancelled together, are one
cancellation decision — not four independent savings.

## 6. Base rates decide what a rate means

The arithmetic that breaks most intuitions. An **invented example**, not a measurement:

- 10,000 documents; 1% are AI-written → 100 AI, 9,900 human
- Detector catches 90% of AI texts → **90 true positives**
- Detector falsely flags 1% of human texts → **99 false positives**
- Total flags: 189. Correct: 90 → **47.6% precision**

99% specificity did not make a flagged document 99% likely to be AI-written. It made it
*less likely than a coin flip*, because the starting prevalence was low.

Carry this into any "X% of Y" claim on our pages. A test's advertised accuracy tells the
reader nothing useful until they know how common the thing being tested for actually is.

## 7. Why we never cite detector scores

The research file's detection findings, which are the reason the skill forbids this:

| Study | Finding |
|---|---|
| Liang et al. 2023 | Mean 61.22% false-positive rate on TOEFL essays by non-native writers |
| Weber-Wulff et al. 2023 | All 14 tools scored under 80% overall accuracy; transformations made it worse |
| Tufts et al. 2025 | At a 1% false-positive setting, true-positive rates ranged 3%–58% across seven detectors |
| Saha & Feizi 2025 | Twelve detectors frequently classified lightly *polished human* text as generated |
| Sadasivan et al. 2025 | Paraphrasing and spoofing defeated multiple approaches |

A detector score is not evidence of authorship, not a percentage of generated words, and
not a measure of quality. It cannot appear in an audit finding, a blog post, or a client
deliverable.

The corollary matters too: **no watermark does not mean human authorship**, and a clean
detector result certifies nothing about originality, usefulness, or search-policy
compliance.

## Quick checklist

Before any number ships:

- [ ] Year of measurement stated in the sentence
- [ ] Tier, plan, region and currency stated for vendor figures
- [ ] Annual-equivalent vs month-to-month made explicit
- [ ] Metric named, not just "accuracy"
- [ ] Population claim not applied to an individual case
- [ ] Correlated signals collapsed to their shared cause
- [ ] Source link dated and, if load-bearing, archived
