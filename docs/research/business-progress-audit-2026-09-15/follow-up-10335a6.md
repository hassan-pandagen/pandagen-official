# Review of the response to the business-progress audit

Reviewed 15 September 2026 at checkout `e23be37`, including application changes in `10335a6`. This is a source review, not a new deployment check, full rendered crawl or measurement of search/conversion outcomes. Application source was not changed. Existing unrelated working-tree changes were preserved.

## Conclusion

Claude is right about the four completed copy/CTA corrections and about fixing the software journey before reconsidering the homepage H1. The MyCustomPatches reconciliation is only partial. The attribution contradiction is real, but the existence of a combined total does not by itself invalidate that total. The enterprise-ops discovery is important, and the enforcement gap extends beyond missing declarations.

The original README and its captures describe `93ec417`. They remain a historical baseline, not a current open-items list. This follow-up supersedes their affected recommendations.

## What closed in 10335a6

| Item | Verified source change | Status |
| --- | --- | --- |
| Homepage expertise heading | Now “Engineered around how your business runs, and what can break.” | Closed for the heading |
| Homepage FAQ heading | Now “Common questions about working with us” | Closed |
| Ecommerce opening | Now includes new stores and rebuilds, with the $1,500 small-store starting point and the measure-first diagnostic retained | Closed for the opening; not a claim that every lower-page statement has been re-audited |
| CAPI article and old migration-plan CTAs | CAPI close is “Scope your tracking setup” and its calendar button says “Book a 15-min call.” A case-insensitive source search finds the old phrase only in a historical CookieConsent comment. | Closed for the reported label mismatch; this pass did not repeat the commit's claimed 149-page rendered verification |
| MyCustomPatches | Case metadata now qualifies rankings by the 30-day window. Services copy now matches several declarations in case-study-facts.json. | Partial: conflicting retirement record and permanent/pending wording remain |

## MyCustomPatches: the remaining contradiction

- `src/data/case-study-facts.json:94` declares no ranking losses recorded in a 30-day post-launch window as verified, with a dated method description.
- `src/data/retired-claims.json:87–88` still retires an assertion containing both hosting savings and held rankings, says the dated confirmation is not held, and says only the delivery scope stands. Although the entry's regex targets hosting prices, its prose also contradicts the ranking/delivery narrative.
- The new `src/app/services/PageContent.tsx:67` groups hosting costs with performance as “withdrawn pending reconciliation.” The hosting record is permanently withdrawn; `src/data/case-study-facts.ts:36` explicitly explains why “pending” is inappropriate for it.

The fix needs separate records for delivery scope, monitored rankings, performance and permanently retired hosting costs. A status or owner-approval date in JSON is not a substitute for a retrievable underlying record. This review did not authenticate the private Search Console window or invent a preferred version.

## Homepage H1: leave it unchanged for now

The current H1 is not shown to be underperforming. Improve the existing software destination, visible service label and navigation before considering another homepage headline. Keep the existing URL to avoid an unnecessary URL migration. Review the route's title, description, H1, examples and CTA together.

Do not turn this into a rule that frequent local edits automatically hurt search rankings. Unpublished changes are not visible to Google. Google's documentation says visible headings can influence search title links and that published updates require recrawling/reprocessing; it does not establish an automatic daily-edit penalty. The practical reasons to hold this H1 are a coherent buyer journey and a stable published comparison. [Google title-link documentation](https://developers.google.com/search/docs/appearance/title-link).

## Attribution: distinguish an inconsistent description from an invalid total

`src/app/services/ai-seo/PageContent.tsx:242` says the records are kept apart “rather than reporting one total.” `src/data/ai-referral-data.json:28`, `src/app/blog/ai-referral-revenue-2026/page.tsx:168`, and `src/data/company-facts.ts:208` describe combined source classification and a published total. Those statements conflict.

However, one order-level total can legitimately include recorded referrers and customer-declared sources if the classification method is disclosed and each order is counted once. A missing published split is not proof of double counting or an invalid total. Likewise, separate input fields do not prohibit publishing an aggregate.

Check the underlying order identifiers and classification rules, not just two subtotals:

- Referrer-observed, self-reported, both, and unresolved classifications; a rule for disagreements and overlap.
- Whether repeat orders inherit a customer's original acquisition source, or have a new observed referral.
- The date window, payment/order statuses, refunds, revenue definition and excluded order population.

The aggregate JSON cannot reconstruct a split it never stored. If the historical split cannot be recovered, state that limitation and describe the actual combined classification. Do not invent a split, call it referrer-only revenue, or call it a guaranteed lower bound without checking classification and counting errors. Validate the distinct-order total before deciding what figure can remain.

## Enterprise Ops: the discovery is correct, with a small counting correction

`src/app/work/enterprise-ops/page.tsx:348–351` has four cards: **95% Process Automation**, **Live Reporting**, **10× Efficiency Gain**, and **9.0/10 Developer Rating**. There are three numeric headline values, not four; the Live Reporting card is still a factual capability claim. The registry at `src/data/case-study-facts.json:165–170` has `metrics: []`.

The original audit identified 95% and the internal rating but missed 10× and the undeclared-card enforcement hole. The commissioned-review qualification must accompany the rating wherever it is used, not merely appear much later in the case study. Outcomes need their actual baseline, denominator, period and source. A live-reporting capability or current route count needs an operational check/count definition and date, not an invented before/after denominator.

Additional enforcement gaps found in the current source:

1. `scripts/metrics_guard.py:91–92` strips scripts and tags. This removes JSON-LD and metadata content attributes, despite comments describing metadata coverage. Title text survives, but meta descriptions and OG descriptions do not.
2. `scripts/metrics_guard.py:283–284` accepts a method year appearing anywhere on the page as a visible-method check. An unrelated date can satisfy it.
3. `guard:metrics` and `guard:all` exist as package scripts, but neither is called by `npm run build`, `npm run check`, or the checked-in CI workflow. Separate public-claims checks do run, but are not a general declaration/evidence check for these metrics.

Use registered facts through shared rendering helpers, reject undeclared result-card claims, check metadata/structured data explicitly, require the relevant nearby method/disclosure, and run the guard after build in release checks. Merely moving literals into JSON does not establish those guarantees.

## Notes on enterprise-ops-canon-questions.md

The questions are a useful evidence request. Keep repo-verifiable implementation counts separate from deployed-state assertions and business outcomes. Files in a repo do not prove Edge Functions are deployed, a payment integration is live, or RLS is enabled on every production table. TypeScript strictness alone does not prove all code is TypeScript or that explicit any is absent.

Distinguish the historical case-study state from the current system: include the relevant commit/deployment and observation date. A larger role count today does not by itself disprove the earlier count. The hardcoded August 10 `dateModified` is not sufficient evidence of the last source edit. The current 95% claim is in OG/Twitter descriptions, not the title itself. Also request support for the 10-week delivery claim and the absolute “Any production issue is caught before the team notices” statement; numeric-only review would miss the latter.

The example JSON should use unmistakable placeholders rather than illustrative dates and a made-up 40-process denominator that could be copied into canon. Ask for a source locator and revision/export identifier alongside the method note; keep private records private. The instruction to permit an “estimate” also needs to agree with the later verified/withdrawn-only status policy: accepting an estimate as an answer is not automatically permission to render it as a measured result.

The actual method schema supports `lab`, `field`, `invoice` and `record`, not just the two options listed in the questions. Withdrawals should include their real date and reason. Do not invent approvals to fill an example. Commercial pricing belongs to the business owner's offer definition, not a code repository's judgement.

## Updated priority

1. Correct or suspend unsupported public result claims and reconcile attribution/retirement wording; this need not wait for a software redesign or a perfect historical split.
2. In parallel, improve “Custom software” naming, the software opening/examples and service-menu order, retaining the homepage H1 and existing software URL.
3. Repair the metric guard's declaration coverage, extraction, method checks and release integration.
4. Define any standalone tracking service's scope, acceptance, handover and commercial model. A project-specific quote is valid; a public fixed starting price is not required to explain a real service.
5. Preserve still-open locale parity and article navigation work. Deploy a coherent revision and record the boundary before evaluating search or lead changes.

This pass reviewed files and diffs only. No application edits, commits, deployments or private-data requests were made.
