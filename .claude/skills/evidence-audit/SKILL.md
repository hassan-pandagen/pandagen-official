---
name: evidence-audit
description: Verify that every consequential claim on a page is supported, that every cited source exists and says what the page claims it says, and that no unsupported causation, inflated significance, manufactured authority or generation residue survives to publication. Use when fact-checking or reviewing any blog post, research report, comparison page or service page before publishing; when the user asks to "check the sources", "fact-check this", "verify the claims", "audit the citations", "does the source actually say that", "are we overclaiming", or wants a draft checked for made-up statistics. Always use on pages citing studies, vendor prices, competitor pricing, or any number. Complements deslop (voice), citability-audit (extractability) and google-content-audit (quality gate) — those judge how a page reads; this one judges whether it is true.
metadata:
  internal: true
---

# Evidence Audit

A page can read beautifully, pass every style check, and still be wrong. This skill checks
the thing the other skills do not: **is it true, and can we show it?**

Built 12 Sept 2026 from `docs/evidence-audit/ai-writing-and-wikipedia-research.md` (50 sources, checked
11 Sept 2026). That review's central finding drives this skill.

## The core principle

**Style is not evidence. Audit the claim, not the voice.**

No word, dash, paragraph shape, or detector score establishes how a passage was produced.
What *can* be established is whether a claim is supported. So never argue about whether
prose "sounds AI". Ask instead: which source establishes this, and does it actually say so?

This cuts both ways. A fluent, confident paragraph can be fabricated. An awkward,
hedge-laden one can be perfectly sourced. Fix the defect you can demonstrate.

Two verdicts stay separate at all times:

| Question | Verdict vocabulary |
|---|---|
| **What needs fixing?** | unsupported claim · citation mismatch · source unreachable · overstated scope · stale figure |
| **How was it produced?** | usually *insufficient evidence* — and usually irrelevant |

You can confidently correct an unsupported assertion while leaving authorship unresolved.
Most audits should never need the second column.

## What counts as evidence

Rank what you find. Only the bottom two rows support a published claim.

| What you have | What it establishes |
|---|---|
| The prose sounds polished or formulaic | Nothing. Humans write this way too |
| Several odd patterns in one page | A reason to look closer, not a finding |
| A source that cannot be located | A real sourcing defect — fix required |
| A source whose content contradicts the claim | A real accuracy defect — fix required |
| A dated, retrievable source that states the claim | The claim is publishable |
| A first-party measurement you can re-run | The strongest asset on the page |

## Run it in six passes

### 1. Claim inventory

Extract every **consequential** claim — one where being wrong costs a reader money, a
decision, or trust. Prioritise in this order:

1. **Numbers** — prices, percentages, limits, quotas, allowances, timings
2. **Dates** — when a plan changed, a feature sunset, a study ran
3. **Identity** — who a vendor is, what a product is called, which tier is which
4. **Causation** — X caused, drove, improved, or led to Y
5. **Superlatives and scope** — "every", "all", "most", "always", "nobody else"
6. **Quotations** and attributed opinions

Ignore restatements of already-audited claims, and opinion openly marked as opinion.

### 2. Source audit — the six checks

For each consequential claim, run all six. A working link satisfies only the last one.

| Check | The question | Common innocent cause |
|---|---|---|
| **Existence** | Can the source be located at all? | Renamed page, moved docs, another edition |
| **Identity** | Do title, author, publisher, year, DOI agree? | Transcription slip, different edition |
| **Relevance** | Is it about this subject? | Citation attached to the wrong sentence |
| **Support** | Does it state *this* claim? | Overstatement in our wording |
| **Quotation** | Does the wording match exactly? | Translation, paraphrase, edition drift |
| **Access** | Does the link resolve today? | Link rot, paywall, region block |

**Support is the check that fails most and gets skipped most.** A real, relevant,
resolving source that does not actually say the thing is the single most common defect.

Reference points for why this matters, from the research: in a 2023 test, 55% of GPT-3.5
and 18% of GPT-4 bibliographic references were fabricated outright, and among the *real*
ones 43% and 24% carried substantive errors. A 2025 test found 21 of 33 fabricated
references shipped with working DOIs pointing at unrelated papers. Historical rates, not
current ones — but they are why "the link opens" is not a check.

Full protocol, alternative explanations and worked examples: `references/source-checks.md`

### 3. Unsupported synthesis

Two sourced facts do not license a third, unsourced claim built from them. Name the extra
step being taken, then find the source that takes it — or cut it.

The six steps to hunt for: **causation · importance · motive · trend · comparison · prediction.**

> Shopify launched the feature in March. Store conversion rose 4% that quarter.
> **Therefore the feature drove the lift.** ← third sentence needs its own source

This is the highest-value pass for comparison and cost pages, where accurate ingredients
routinely get assembled into a conclusion nobody published.

### 4. Inflated significance and manufactured authority

Four patterns, each with the same fix — replace the gesture with the fact:

- **Vague attribution.** "Studies show", "experts agree", "industry leaders recommend".
  → Name the study, the expert, the leader. If you cannot, delete the sentence.
- **Metacoverage.** Listing prestigious outlets that covered something without saying what
  they reported. → State the finding and attribute it. Naming the outlet is fine when its
  identity matters; it is not a substitute for the content.
- **Unearned impact.** "Transformed the industry", "changed how businesses think".
  → Which source establishes the influence, and what observable consequence?
- **Marketing buzzspeak.** "Superior solutions", "best-in-class", "award-winning" with no
  named award. → A named, dated award is evidence. "Award-winning" alone is not.

Softening a superlative does not supply evidence. "Significantly improved" is as unsourced
as "revolutionised".

### 5. Residue and provenance leftovers

Grep the draft before it ships. Any hit is a hard block on publishing:

```
oaicite | contentReference | turn0search | turn0news | citeturn
[ADD  | [TODO | [INSERT | [PLACEHOLDER | [VERIFY | [X]
As an AI | as a large language model | I cannot browse | my training data
knowledge cutoff | I don't have access to | Certainly! | Here's the
```

Also check for: markdown code fences left inside published HTML, "Sources:" blocks with
no links under them, headings that stop mid-sentence, and stale access dates.

Preserve the exact string in your report before cleaning it — the raw text is the evidence.

### 6. Statistic hygiene

Every number that came from a study or vendor page carries conditions. Strip the
conditions and the number becomes false. The six traps:

1. **Publication date ≠ currency.** A 2026 paper may test 2024 systems or 2023 prices.
2. **Population ≠ individual.** An estimate that 13.5% of a corpus shows a trait says
   nothing about any single member of it.
3. **Historical rate ≠ current rate.** Quote the year alongside the figure, always.
4. **Different metrics are not interchangeable.** Accuracy, precision, sensitivity,
   specificity and F1 answer different questions. So do "coverage" and "correctness".
5. **Correlated signals are not independent confirmations.** Five observations sharing one
   cause are one observation.
6. **Base rates decide what a rate means.** 99% specificity does not make a flagged item
   99% likely to be a true positive.

Detail and worked arithmetic: `references/statistic-traps.md`

## Output format

Report findings most severe first. One row per defect, with the line reference.

```markdown
## Evidence audit — <page> — <date>

**Consequential claims checked:** N of M   **Blocking defects:** N

| Line | Claim | Check failed | Finding | Fix |
|---|---|---|---|---|
| L42 | "$49 Growth Workspace for redirects" | Support | Paid Site plans include redirects | Remove the charge |

**Blocking (do not publish):** …
**Should fix:** …
**Not checked:** <claims you could not verify, and why>
**Evidence boundary suggested for the page:** <what the page should openly not claim>
```

State the **narrowest supported finding**. "The cited page does not mention this figure"
beats "this looks made up". Never invent a confidence percentage.

The "Not checked" line is mandatory. An audit that hides its own coverage gaps is worth
less than one that admits them.

## Rules that override this skill

- **Never run an AI-text detector on our own drafts, and never cite one as evidence.**
  The research is unambiguous: detectors falsely flagged non-native English writing at
  61% in one study, every tool in a 14-tool test scored under 80% accuracy, and at a 1%
  false-positive setting true-positive rates ranged 3–58%. A score tells you nothing
  actionable and creates false certainty.
- **Never edit to evade detection.** Injecting errors, fake personal experience, or
  arbitrary sentence variation damages quality and resolves nothing.
- **Do not delete a good source because it arrived in a bad draft.** A legitimate citation
  stays legitimate. Verify it; keep it.
- **Unreachable is not fabricated.** A paywalled, offline or obscure source is *unverified*.
  Report it as unverified and say so on the page if it stays.
- **Uncertainty gets one home.** If a claim needs a caveat, state it once in an evidence
  boundary — do not sprinkle hedges through the prose. That is `citability-audit`'s job and
  this skill must not fight it.

## How it fits the other skills

Run order for any page: **evidence-audit → deslop → citability-audit → google-content-audit.**

Truth first. There is no point polishing the voice of a claim that is about to be cut,
and no point optimising a page for citation when the thing being cited is wrong.

| Skill | Judges |
|---|---|
| `evidence-audit` | Is it true, and can we show it |
| `deslop` | Does it read like a person wrote it |
| `citability-audit` | Can an answer engine lift and trust it |
| `google-content-audit` | Does it meet Google's helpful-content bar |
| `semantic-triples` / `ai-overview-gap-fill` | Entity facts and coverage gaps |

The three research reports in this repo (`PLATFORM_COMPARISONS_*`, `AI_CUSTOM_FEATURES_*`,
`EARLY_STAGE_*`) already practise this discipline — dated vendor prices, labelled
illustrative arithmetic, explicit "this establishes X but not Y". Use them as the worked
model for what an audited page looks like.
