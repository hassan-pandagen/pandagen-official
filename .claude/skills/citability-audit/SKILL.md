---
name: citability-audit
description: Audit a page for whether AI answer engines can actually extract and cite it. Use this skill when reviewing or revising any blog post or landing page for AI search visibility, when the user asks to check "citability", "hedge density", "answer-first", "is this extractable", "why are we not getting cited", or when running the golden-standard pass over existing content. Scores hedge density, answer-first coverage, entity naming, chunk independence, fact density and structural extractability, then returns specific line-level fixes. Complements deslop (voice), google-content-audit (quality gate), semantic-triples (entity facts) and ai-overview-gap-fill (coverage gaps).
metadata:
  internal: true
---

# Citability Audit

A page can be accurate, well-written, and invisible to answer engines at the same time.
This skill checks the second thing: can a retrieval system lift a passage from this page,
attribute it, and trust it enough to cite?

Written 1 Aug 2026 for pandacodegen.com after the July remediation made the corpus safe
and uncitable simultaneously. Pairs with the `golden-standard-blog` memory.

## When to run it

- On any page being revised under the golden-standard pass.
- On any page with real impressions and near-zero clicks (the AI-citation-tax profile).
- Before publishing anything new, after `deslop` and before `google-content-audit`.
- NOT on legal pages, terms, or anything whose job is precision over extraction.

## The core principle

**Say what you can stand behind, definitively, in one place.**

This is not "make bolder claims". Hedged writing and overclaiming are both failures.
The target is a page that states verifiable things without apologising for them.

| | Verifiable | Not verifiable |
|---|---|---|
| **Definitive** | ✅ The goal | ❌ Overclaiming — the thing the remediation existed to remove |
| **Hedged** | ❌ Safe and uncitable — the current corpus failure | ❌ Worst of both |

"Shopify requires a minimum average Lighthouse score of 60 across the home, product and
collection pages to accept a theme" is definitive and verifiable.
"Platform ceilings vary and no universal figure can be given" is neither.
Both are honest. Only one can be cited.

## Run it in six passes

### 1. Hedge density

Count every sentence that exists to limit a claim rather than make one. Flag these
stems: "does not guarantee", "is not a promise", "cannot be inferred", "no universal",
"varies by", "should not be treated as", "we do not publish", "this does not prove",
"is not evidence that", "results may differ", "not a benchmark", "not attributable".

- **Count the DISTINCT caveats, and the number of times each is restated.**
- **Threshold: any single caveat stated more than twice on one page is a defect.**
- Reference points: `will-migrating-hurt-my-seo` had one caveat restated 11 times.
  `shopify-store-speed-optimization` had 20 restatements. Both were repaired.

**Fix:** give the disclaimer ONE home — an evidence-boundary box is ideal — and delete
the restatements. Never resolve a hedge by adding a claim.

### 2. Answer-first coverage

For every H2 on the page, check the paragraph directly beneath it.

- Does it **lead with the answer**, then add context? Or does it set up, qualify, and
  arrive at the answer in sentence four?
- Is it roughly **40–75 words**? Long enough to stand alone, short enough to lift.
- Would it make sense **quoted with nothing else around it**?

Also check the top of the page: is there a direct, extractable answer in the **first
one or two sentences after the H1**? A page that opens by explaining why the question
is hard to answer has already lost.

**Fix:** move the answer to the front of the paragraph. Keep the caveat, put it second.

### 3. Chunk independence

Read each section as if it were the only thing on the page.

- Does it rely on "as mentioned above", "this", "that approach", "the platform"?
- Would a reader arriving cold understand what it is about?

**Fix:** repeat the noun. Extractors do not carry context between chunks.

### 4. Entity naming

Scan for vague referents where a name belongs: "the platform", "the tool", "it", "this
provider", "the framework", "the standard".

**Fix:** name it — product, company, standard, version, date. "Shopify's Theme Store",
"WCAG 2.2", "the X-GHL-Signature header", "as of 1 August 2026". Entity names are how a
retrieval system decides the page is about the thing being asked.

### 5. Fact density and number coverage

- Count the **verifiable, dated, sourced numbers** on the page.
- Count places where a number was **removed and nothing replaced it**.

A page that discusses cost, speed, limits or pricing and contains no figures at all is
not citable on those topics, however well written.

**Fix:** replace with a verified primary-source number and put the check date on the
page. If no verifiable number exists, say so once and explain what the reader should
measure instead — that is itself a citable position.

### 6. Structural extractability

- Real `h2`/`h3`, real `ul`/`ol`, real `table` — not styled `div`s.
- A **comparison table** wherever the content is comparative.
- A **numbered list** wherever it is a process.
- One idea per paragraph; split anything carrying two.
- Headings **describe what the section answers**, and are addressed to the reader.
  A heading written to a writer ("Do not publish a universal speed ceiling") is a defect.

## Output format

```
CITABILITY: <page path>

Hedge density:        N distinct caveats, worst restated M times   [PASS / FAIL]
Answer-first:         X of Y H2s lead with the answer              [PASS / FAIL]
Chunk independence:   N sections depend on prior context           [PASS / FAIL]
Entity naming:        N vague referents where a name belongs       [PASS / FAIL]
Fact density:         N verified dated numbers, M unfilled holes   [PASS / FAIL]
Structure:            tables/lists/headings                        [PASS / FAIL]

VERDICT: citable / fix-first / uncitable

FIXES (ranked, with the signal behind each):
1. ...
2. ...
```

Thresholds: no caveat restated more than twice; at least 80% of H2s answer-first; zero
sections that cannot stand alone; zero vague referents on load-bearing claims.

## Rules that override this skill

Citability never beats truth. In order of precedence:

1. **Never add a claim the hedged version did not make.** Overclaiming is worse than
   being uncited. If the only way to make a passage definitive is to assert something
   unverified, leave it hedged and log it.
2. **Never restore a claim about a named person or company without a source link**, and
   never an adverse claim about a competitor at all.
3. **Deliberate exceptions:** glossary definitions (precision is the job), table cells
   (terse noun phrases are correct), legal and terms pages, required negations already
   agreed in the brand canon.

## How it fits the other four skills

- `deslop` — voice and AI tells. Run first. Its "be specific / state facts directly /
  do not dilute" rules overlap with pass 1 here; where its stylistic rules (vary rhythm,
  two items beat three) conflict with fact density or tables, **this skill wins.**
- `citability-audit` — this one. Extractability.
- `semantic-triples` — supplies the entity facts pass 4 asks for.
- `ai-overview-gap-fill` — finds missing sub-facts. Run after, so gaps get filled in an
  already-citable structure.
- `google-content-audit` — the quality gate. Run LAST, before publish. Its item 12
  (non-commodity first-hand take) is Information Gain and is blocking.
