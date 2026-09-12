# Grammatical Signals: Measured Differences in Non-Fiction

`structural-signals.md` covers narrative structure and says outright that most of it is
fiction-only. This file is the non-fiction counterpart: measured **grammatical**
distributions in essays, articles and news prose.

Added 12 Sept 2026 from `docs/evidence-audit/ai-writing-and-wikipedia-research.md`.

## Read this first

Every ratio below is a **population distribution**, not a test. GPT-4o using present
participial clauses at 5.3 times the human rate does not make any single participial
clause machine-written — humans write them constantly. Use these to notice when *your own
draft* leans on one construction, not to judge a passage's origin.

The whole point of the parent research is that style is not evidence. This file is for
writing better, never for accusing.

## The studies

| Study | Setting | Finding |
|---|---|---|
| Reinhart et al., PNAS, Feb 2025 | GPT-4o, GPT-4o Mini, four Llama 3 variants; two corpora; 8,290 and 9,615 human texts; 66 linguistic features | GPT-4o used present-participial clauses at **5.3×** the human rate, nominalizations **2.1×**, phrasal coordination **1.9×** |
| Zamaraeva et al., ACL, July 2025 | Six models vs human New York Times writing, formal grammar framework | Systematic distributional differences **within that genre** |
| Juzek & Ward, COLING, Jan 2025 | Systematic comparison identifying 21 focal words | Lexical overrepresentation confirmed; single causal explanation not settled |
| Kobak et al., Science Advances, July 2025 | 15M+ biomedical abstracts | Estimated ≥13.5% LLM-processed in 2024 — explicitly **cannot** identify which ones |

Model families sometimes have **opposite** preferences, so none of this generalises to
"AI writes like X".

## The four patterns worth editing out

### 1. Present-participial clauses — the strongest signal (5.3×)

A clause hung off the main sentence with an `-ing` verb, usually appending an
interpretation to a fact.

| Instead of | Write |
|---|---|
| The store migrated in March, **improving** load times across the catalog. | The store migrated in March. Load times dropped from 3.2s to 0.7s. |
| Redirects were mapped before launch, **preserving** the site's rankings. | Redirects were mapped before launch. Rankings held. |
| We rebuilt the checkout, **allowing** customers to pay in three steps. | We rebuilt the checkout. It now takes three steps. |

Two reasons to cut them beyond rhythm: they bury the second fact in a subordinate clause,
and they usually smuggle in an **unverified causal claim**. "Improving" asserts the
migration caused the improvement. Splitting the sentence forces you to either prove that
or drop it — which is why this pattern is also pass 3 of `evidence-audit`.

**Check:** more than one `-ing` clause per paragraph, split them.

### 2. Nominalizations (2.1×)

An action turned into a noun. Bloats the sentence and hides who did what.

| Instead of | Write |
|---|---|
| the implementation of the redirect map | we mapped the redirects |
| the optimization of load times | we made it faster |
| a reduction in maintenance costs | maintenance got cheaper |
| the migration of product data | we moved the products |

**Check:** grep the draft for `-tion`, `-ment`, `-ance`, `-ity`. Each hit, ask whether a
verb does the job.

### 3. Phrasal coordination (1.9×)

Paired terms where one would do — usually two near-synonyms joined by "and".

| Instead of | Write |
|---|---|
| clear and transparent pricing | the price is on the page |
| fast and performant | fast |
| robust and reliable hosting | hosting that stays up |
| tools and solutions | tools |

**Check:** every `X and Y` where X and Y mean roughly the same thing. Delete one.

### 4. Elegant variation

Forcing a different label on each mention of the same thing. Models do it to avoid
repetition; it destroys precision.

> Shopify... the platform... the ecommerce solution... the hosted system...

Four names for one thing makes a reader wonder whether they're four things. **Repeat the
correct noun.** In technical and pricing writing this matters more than the repetition
does — a reader tracking which plan you mean cannot afford the guesswork.

Same rule for plan and product names: "Growth", not "the mid-tier", not "the middle
option", not "the $3,500 package".

## Calibration: what is NOT a tell

The parent research lists indicators that sound diagnostic and are not: grammar quality,
register, blandness, formality, smooth transitions, missing citations, odd markup. Any of
these can have a dozen human causes.

**Em dashes specifically.** A 2026 preprint tested twelve models from five providers and
found substantial variation in dash production, and in whether dashes survived formatting
instructions. The character is model-dependent, not a signature.

This does not overturn the `SKILL.md` rule that removes em dashes — that rule is about
voice and rhythm, and it stands. What changes is the justification: strip em dashes
because they make the rhythm uniform, **never** because their presence indicates AI. The
difference matters the moment someone points at a colleague's writing.

Same for smart quotes and tidy formatting: keyboards, word processors and house styles
all produce them.

## Hard rules

- **Never edit to evade a detector.** Injecting errors, faking personal experience, or
  varying sentences at random damages the writing and proves nothing. Detectors falsely
  flagged non-native English writing at 61% in one study; every tool in a 14-tool test
  scored under 80% accuracy. Their output is not a target.
- **Never cite a detector score** in a review, a post, or a client deliverable.
- **A distribution is not a verdict.** 5.3× describes a corpus. It says nothing about the
  sentence in front of you.
- **Do not sacrifice accuracy to voice.** If a deslop edit changes what a sentence claims,
  the edit is wrong. Re-check meaning after every rewrite — especially after cutting a
  participial clause, which can quietly drop a qualifier.

## Related

- `structural-signals.md` — the narrative layer (fiction; marked transfers only)
- `evidence-audit` skill — whether the claims survive; run it **before** deslop
