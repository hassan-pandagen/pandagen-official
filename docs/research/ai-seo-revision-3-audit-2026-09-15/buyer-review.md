# Revision 3: buyer review

Reviewed 15 September 2026 against the current [review export](../ai-seo-page-for-review-2026-09-14.md), [service component](../../../src/app/services/ai-seo/PageContent.tsx), [FAQ source](../../../src/data/service-faqs.ts), and relevant shared components. The monthly scope is owner-adopted. The new shared-owner history is treated as user-provided information, not independent corporate-record verification. No app edits, browser render or fresh competitor research were performed in this contribution.

## Verdict

**The offer now leads clearly enough for a buyer with an existing site. The restructuring fixes the principal commercial problem.** A reader sees AI SEO services, the $500 starting price, existing-site eligibility and the monthly scope before the technical explanation. The close now asks for the business information needed to assess fit. Keep this structure.

There is no reason to force 1,627 words down to 1,400. Remaining work is concentrated: qualify the new attribution claims, correct two scope phrases, and make the older FAQs consistent with the new offer. If a shorter page is desired, repeated FAQ explanations provide room; the scope, evidence limits and ownership disclosure do not need removing.

## Previous findings now resolved

| Finding | Current source result |
| --- | --- |
| H1 sold only a build | H1 now promises the actual monthly service; price and purpose follow immediately. Lines 85–97. |
| Existing-site eligibility buried | “It works on a site you already have” is in the hero. Line 95. |
| Scope appeared after technical explanation and proof | Monthly table is the next section. Lines 118–148. |
| Blanket exclusion of content writing contradicted page edits | The blanket item has been removed. Remaining exclusions are at lines 62–65. |
| Monthly section concluded that the customer receives a new site | The obsolete build-only conclusion has gone. |
| Targets confused with guarantees | Exclusions and citation FAQ now distinguish objectives from guaranteed outcomes. Page line 63; FAQ lines 65–66. |
| Chart/page totals conflated | The body now says “5,583 page-level impressions” and identifies the 6.2% denominator as Web search. Lines 68–71 and 180–183. |
| Dashboard promised unspecified live data | It now names an agreed refresh schedule. Line 55. |
| Unsupported claim that most competitors only measure visibility | Removed from rendered copy. |
| Close only asked whether a rebuild/edit was needed | It now asks what customers should find the business for and explains the first-month conversation. Lines 270–273. |
| Competing migration footer | `showCta={false}` is now set. Line 297. |
| Missing AI SEO navigation | Header and footer service lists contain the route. [Header](../../../src/components/layout/Header.tsx), line 43; [footer](../../../src/components/layout/Footer.tsx), line 103. |

The enquiry CTA remains appropriate. The acknowledged local calendar fallback should still be checked against production configuration, but do not misreport it as a newly introduced dead button.

## Material remaining issues

### 1. The attribution rewrite introduces new certainty

The paragraph now says “Most assistants pass a referrer,” that two named surfaces “pass none,” that asking customers “closes much of that gap,” and that the resulting count is “a floor.” These are stronger claims than simply offering to connect recorded source information to orders. They need their own evidence and definitions; a working implementation on one store does not establish universal assistant behaviour. [Page](../../../src/app/services/ai-seo/PageContent.tsx), lines 228–233.

As a buyer, I need the useful capability without a promise of complete source recovery: the agency can preserve available referral/campaign information and record customer-declared discovery, while some origins remain unknown. Keep observed source and self-report distinguishable in the actual records. A combined attribution count is not automatically a mathematically proven lower bound if misclassification, duplicate credit or customer recall can affect it.

This does not make attribution futile. It means the page should sell the actual capture and reporting work, with the supported platform-specific details in the methodology. Root's claim review should determine the precise technical corrections; this review does not independently verify current behaviour for those platforms.

### 2. “A monthly fee” still contradicts larger monthly work

The list of additions includes original content and a larger implementation backlog, but line 64 excludes them as “quoted separately rather than absorbed into a monthly fee.” Change **“a monthly fee” to “the starting scope.”** It then remains clear that a larger retainer or initial project can include separately agreed work. No new section is required.

### 3. Implementation responsibility still needs one consistent sentence

The introduction to the table says the quote names “who publishes” (lines 123–124); the implementation row says PandaCodeGen ships the change and it is not for somebody else to action (line 48). Those can coexist when the agency implements the work and the client's release team provides approval or presses publish, but the distinction is currently left to inference.

Use a short statement that the work is implemented and verified with agreed access and approval, with any client-side release responsibility written into scope. Preserve the implemented deliverable; do not weaken it into an advice-only service.

### 4. Two FAQs retain the previous framing

The WordPress answer still reduces the choice to editing versus rebuilding and says a customer needing missing information “may not need us at all.” The honesty is useful, but missing buyer information is now explicitly the recurring service's main work. Reframe the answer around assessing the existing site: a rebuild is not automatically required; the quote distinguishes one-time fixes from continuing research/content work. Do not claim every WordPress site is eligible without inspection. [FAQ](../../../src/data/service-faqs.ts), lines 77–78.

The evidence FAQ still asks whether the service “works,” answers with observational impressions, and says “6.2% of all our impressions.” The body has already narrowed that denominator. Shorten the answer and use **Web-search impressions**, or link to the evidence section without repeating the figure. Keep the distinction between observed results and proof that a paid monthly intervention caused them. FAQ lines 69–70.

The commitment/notice/tool-cost gap is explicitly acknowledged in the review note. Those terms should be settled in the quote before a customer commits. Do not fabricate “cancel anytime,” included subscriptions or a minimum contract in order to complete a website paragraph.

## Ownership wording

**The service-page disclosure is sufficient to make the relevant commercial relationship clear:** the businesses share an owner and the example is first-party rather than an independent client result. It names Imran and states that he holds a stake in both companies. Do not infer that he is the sole owner or that the two companies are legally the same entity. Page lines 195–199.

There is no need to put the full trading-since-2023 history into this service page. That detail belongs in the case study if useful. “Shared owner” is the key information for evaluating the evidence.

The linked [case-study source](../../../src/app/work/panda-patches/page.tsx) was updated during this audit. On the final source check, the schema description at line 139, main disclosure at line 313 and later rendered paragraph at line 643 all explain the shared-owner relationship. The two older phrases seen in an earlier read are **resolved**, not current findings. This confirms copy consistency without asserting new ownership percentages or merging the company entities.

## Length: optional cuts, not a new target

The exported service body contains **1,628 whitespace-separated words**, consistent with the claimed 1,627 under slightly different extraction rules. However, the claimed **419-word FAQ is not supported by the current text**. The six source answers contain 527 words and their questions 52: **579 before the three-word FAQ heading**. The supplied rendered export contains the same 579-word FAQ content. This is a document-count correction, not a performance or SEO finding.

Further shortening does **not** require losing the table, evidence limitations or relationship disclosure. Optional low-impact cuts include:

- The monthly FAQ repeats the price, written scope, implemented-work promise and optional-retainer statement already above. It can point to the table and answer a purchase detail instead.
- The 108-word readability answer repeats the new “Why the pages need the work” section; shorten it or link to the existing guide.
- The 76-word evidence answer repeats the evidence block; a short method/evidence pointer is enough.
- The 105-word llms.txt answer is peripheral to buying the adopted monthly service; retain the limited answer and link to the detailed article.
- The “There is no per-website formula” paragraph repeats the sentence above the scope table. Remove the repetition and the vague “because the work is awkward” phrase. Page lines 236–239.

These changes can save a few hundred words without removing any adopted deliverable or honest evidence boundary. A concrete [shorter FAQ proposal](suggested-faq-copy.md) supplies six questions and answers and records the exact savings against the current FAQ. They are optional editing opportunities. The stronger recommendation is to correct the remaining factual and scope issues, then keep every sentence that helps a customer decide. Do not initiate another full rewrite simply to achieve a numeric length target.
