# Enterprise Ops re-review at 95339fa

Reviewed 15 September 2026 against `95339fa`. Scope: Enterprise Ops page, its case-study facts, metric guard and CI, plus localhost rendering at 1440px and 390px. No application source, production records or deployment settings were changed.

**Assessment: meaningful improvements, but not ready to describe as fully reconciled.** The five new facts are declared and the business-workflow section is better. Metadata/JSON-LD extraction and CI integration are fixed. The rendered page nevertheless retains conflicting scope counts, withdrawn business figures and an unsupported extension of the Meta refund claim.

## Confirmed improvements

- Five added records: imported production rows, type normalisation, production states, Meta functions and email templates. Each has a method note and date.
- The production card explains the 1,779-row import and 27-to-13 type normalisation; the lead and email cards have the reported additions. The five production states are in the registry, while the visible card explains the distinction without enumerating them.
- The numerical automation, efficiency and review-score hero claims have been removed. Founder-affiliation disclosure and the redacted product screenshot remain.
- The new buyer section describes made-to-order work, agent commissions, production queues, reports, invoices and attendance rather than only listing technologies.
- `scripts/metrics_guard.py` extracts meta content and JSON-LD before stripping tags. Isolated injection tests confirmed detection for 95% in ordinary, OG and Twitter descriptions and in JSON-LD.
- `.github/workflows/ci.yml:47` now runs `guard:all` after build; `npm run verify` includes the guards. The earlier CI finding is closed. Ordinary `npm run build` alone does not include them; remote deployment settings were not inspected.

## P1 — the visible scope table still contradicts the new facts

`src/app/work/enterprise-ops/page.tsx:229` defines the old `byNumbers` array. It is rendered at line 442 under **“The platform today, in production.”** This is not unused code or an explicitly historical comparison.

| Still displayed | Current declared scope |
| --- | --- |
| 23 staff routes | 27 |
| 8+ reporting modules | 12; the older lower bound is not mathematically false, but is stale alongside an exact current count |
| 20 Edge Functions | 26 |
| 13 order statuses | 17 defined, 14 in live use |
| 3 roles, 11 permissions | 7 roles; 11 permissions apply to the original roles and newer roles have separate allowlists |
| 10 database migrations | 86 |

The branch-status caption at line 526 still says 13 total. Other scope lists retain the older reporting/role descriptions. Render these values through the case-study facts rather than repairing another independent array of literals. This page currently does not import its metrics registry.

Evidence: [desktop screenshot](ops-95339fa/1440-numbers.png), [captured DOM/text](ops-95339fa/render.json).

## P1 — withdrawn savings still appear in the FAQ and structured data

- `page.tsx:38`: **“$80/month plus 20+ hours of manual work per month.”**
- `page.tsx:648`: **“not a 30-minute spreadsheet.”**
- `page.tsx:425–426` says no hours/subscription figures are published because no records were kept.

The FAQ is visibly rendered, and its answers also feed FAQ JSON-LD. Removing the old headline scores did not close these repeated claims. Replace the unsupported figures with the specific workflow change; do not assign fresh estimates.

## P1 — the new attribution card repeats the method conflict

`page.tsx:406` now says observed and self-reported sources are recorded **“rather than merged into one figure.”** The public first-party revenue evidence elsewhere explicitly combines them. The earlier contradiction now exists on this case page too.

Describe the implemented source classification accurately. If the historical evidence-type split is unavailable, disclose that limitation instead of promising separate totals. A combined, deduplicated order total is not automatically invalid, but its underlying classification, overlap, repeat-order treatment and revenue population require confirmation. The missing split does not block honest wording; the inconsistent promise should not remain while waiting for data.

The title **“Every lead, with where it actually came from”** and the statement that click identifiers are captured also need the existing availability limitation. A source field or click-ID capture capability is not complete knowledge of every buyer's journey.

Suggested direction: “Carry available source information from enquiry to order.” Explain observed referral/campaign data and customer-reported discovery without guaranteeing complete attribution.

## P1 — the Meta claim goes beyond the evidence recorded

The registry identifies six functions, including `reverse-meta-purchase`, and states refund/cancellation handling. The buyer card goes further: it says purchases and leads are reversed automatically **“so the ad platform is not left optimising against revenue that went back.”**

A function listing supports the existence/count of functions. It does not establish what a reversal payload does to previously accepted Meta events or ad optimisation. This checkout does not include that implementation or a before/after Meta receipt. Do not infer behaviour from a function name.

To retain the stronger claim, preserve the actual function/trigger implementation at a revision, request endpoint/payload semantics, redacted acceptance response, and evidence of the claimed reporting effect. Clarify whether the action handles a purchase refund, adjusts an internal source record, emits another event, or changes an earlier conversion. These are different things. The wording currently extends a purchase-refund claim to leads as well.

Pending that verification, describe server-side Meta event reporting and the system's refund-handling workflow without promising a downstream optimisation correction. This review does not assert that Meta reversal is impossible. Attempts to read Meta's relevant developer parameter pages returned HTTP 429; no platform-level behaviour conclusion is drawn from those failed fetches.

## P2 — the five facts have provenance summaries, but the evidence packet is not preserved here

The new methods refer to a CRM repository audit, tables, functions and a date. Those are improvements. Searches in this workspace found the questions document, but no retrievable returned audit, reconciliation export or source revision for the five new facts. The separate private repository was not inspected. Treat these as internally reported findings in this review, not independently recomputed results.

For the strongest example, preserve a redacted reconciliation containing:

- source workbook/export identifier and audit/source revision;
- imported rows before cleanup, 20 removed blanks and final retained rows;
- duplicate/rejected-row handling and the reconciliation result.

The current note does not establish whether **1,779** is before or after removing the 20 blanks. Do not infer a different total from that ambiguity or claim 1,779 is false. Record the actual totals.

The email note names three template IDs, which is useful. Use the fixed period **since 10 August 2026, checked 15 September** instead of “in the last month alone.” The same evidence says two templates could not send until a syntax problem was fixed on 15 September. The paid-invoice automation is separately marked owner-stated and awaiting a template check; those two levels of evidence should remain distinguishable.

## P2 — factual capabilities still need verification

The new section's code comment says evidence discipline does not apply to capabilities. Capabilities do not need invented before/after percentages, but factual operational claims still need appropriate verification.

Current overstatements include:

- “Seven roles. Zero data leakage.” (`page.tsx:553`)
- Row-level isolation means simultaneous edits cannot overwrite each other (`:720`). Access control does not itself demonstrate conflict handling.
- Profit calculations are “Always accurate.” (`:723`)
- “Any production issue is caught before the team notices.” (`:285`)
- “Everything else on this page is counted from the repository and says where it was counted.” (`:848–849`)

State the implemented controls and supported behaviour. Do not convert a feature into a universal correctness, security or monitoring outcome. Strict TypeScript and RLS enablement are implementation facts, not proof of complete type safety or zero data leakage.

## Buyer presentation

The 1,779-row reconciliation and type normalisation are more useful to a business owner than database-migration or function counts. Keep the current H1, but bring that production example and a short problem/scope introduction before the engineering statistics. Preserve the actual screenshot and relationship disclosure.

In the sampled desktop viewport, the page H1 begins around 1,061px because the screenshot and disclosure precede it; on mobile it starts around 888px. This is a structure observation, not proof of bouncing. The buyer section now helps, but the first stat cards still foreground functions, RLS and database migrations.

Add one contextual **“Discuss your workflow”** enquiry action after the business explanation or case summary, with a route to the custom-software service. The page currently relies on shared contact CTAs and blog links rather than connecting this case directly to that buying journey.

## Guard verification and remaining limits

The root run against existing build output returned **zero failures, 37 metrics checked, 149 pages**. The page/source contradictions above were still present. That clean result is therefore not evidence that all copy matches canon.

Isolated fixtures using the actual guard and selected registry entries demonstrated:

| Test | Observed result |
| --- | --- |
| 95% only in description / OG / Twitter / JSON-LD | Correctly rejected |
| 95% far from client name on its own case page | Correctly rejected |
| 1,779 with no method or year | Correctly rejected |
| Same number with only a copyright/metadata year | Incorrectly accepted |
| Declared 1,779 changed to 1,780 | Incorrectly accepted |
| Undeclared 99% automation | Incorrectly accepted |
| Withdrawn 10× where registry says 10x | Incorrectly accepted |

The method-year check remains inadequate. Verified-value checks only run when the exact registered value is present; a different value can bypass the check. The withdrawal-label path skips this case without a public `url`, and some withdrawn records have no numeric value to match. Metadata and visible evidence need separate treatment: a year in metadata must not establish an adjacent visible method.

Preserve regression fixtures, normalise equivalent numeric formats/entities, require declared IDs for result rendering, compare actual values against declarations, and check contextual evidence instead of an arbitrary year. The extraction fix is real; the broader guard is not complete.

The audit-only [fixture harness](ops-95339fa/guard-fixtures.py) and [results](ops-95339fa/guard-fixture-results.json) preserve 16 isolated cases, including the eight observed false negatives. These files do not change the application guard or its release configuration. Reproduce with `python docs/research/business-progress-audit-2026-09-15/ops-95339fa/guard-fixtures.py`.

## Validation and handoff

- Localhost desktop/mobile: HTTP 200, no captured page errors or horizontal overflow. [Render capture](ops-95339fa/render.json). Six viewport screenshots saved; representative top, buyer and numbers screenshots inspected.
- Existing build metric guard: clean result retained as an observation, not sign-off on claims. No new full build was needed for this read-only review.
- No code changes, deployment, enquiry submission or private customer-data retrieval.

Priority: remove the visible contradictions and narrow unsupported attribution/security claims before calling this page reconciled. In parallel, preserve the source packet and repair the guard. The buyer section and production-data examples should stay.
