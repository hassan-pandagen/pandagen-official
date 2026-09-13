# Independent review of the September 13 changes

The AEO service-page proposal has a credible structural basis, and the documented hosting correction and Core Web Vitals withdrawal are justified. The implementation is not ready for an unqualified approval: the homepage still exposes a traffic guarantee, the new hero overstates migration continuity, and the corrected comparison chart retains unsupported quantitative bars. Several evidence and release notes also need correction.

Scope: review of the five implementation commits `92871cb` through `394b554`, the documentation commit `571a960`, the corresponding current source, and the two September 13 review/baseline documents. The six-commit count is correct against the local `origin/main` reference: five implementation commits plus the review document. That reference was not refreshed and production deployment status was not independently rechecked.

This review changed no application code, sent no emails and performed no deployment. Build/check/guard results in the handoff are reported results, not checks rerun for this review.

## Findings requiring correction

### 1. P2: The price cards expose a traffic guarantee the hero correction removed

[`TierQuiz.tsx:31`](../../src/components/sections/TierQuiz.tsx#L31) still gives Growth the tagline “A full move, blog and all, without losing your search traffic.” Commit `df94ef0` adds unconditional rendering of that shared tagline in the price cards at line 149. The wording previously appeared only after the corresponding quiz result; consolidation exposes it to every visitor.

This conflicts with the homepage's no-ranking-guarantee FAQ and the stated purpose of `92871cb`. Correct the shared tagline so both presentations are fixed. Suggested replacement: **“A full website and blog move, with redirects and launch checks.”** That describes deliverable work rather than a search outcome.

### 2. P2: The new hero promises universal tool migration and an unchanged editing workflow

[`Hero.tsx:102`](../../src/components/sections/Hero.tsx#L102) says the existing tools “all come across,” followed by editing “the same way they do now.” These promises are wider than the described delivery model. Pricing names Sanity CMS at lines 201 and 217; the WordPress migration service names Next.js plus Sanity at line 189; the Wix service explicitly evaluates what is retained, reshaped or dropped at line 165.

The supported benefit is continued content editing and migration of agreed functionality. It is not an identical editor or universal compatibility with existing tools. Suggested replacement for that portion: **“We migrate the pages, URLs and integrations agreed in your plan, and give your team a content editor and handover training.”** Keep the gain-led opening, but define continuity through the actual scope.

### 3. P2: The revised comparison chart still implies measurements that have no disclosed basis

[`wordpress-migration/PageContent.tsx:109`](../../src/app/services/wordpress-migration/PageContent.tsx#L109) supplies arbitrary relative percentages for cost, security, maintenance, ownership and AI search. Examples include security at 35 versus 80 and AI search at 45 versus 90. [`PlatformKillerChart.tsx:220`](../../src/components/services/PlatformKillerChart.tsx#L220) renders the supplied values as comparative bar lengths.

Changing labels from absolute claims to more accurate descriptions does not establish a basis for those bar lengths. The cost row even says to use the buyer's invoices while already depicting a substantial saving. This is an incomplete correction within `92871cb`, not a newly discovered need for a statistical study. Use a qualitative side-by-side comparison without quantitative bars, or show only values calculated from disclosed evidence and a defined scale.

### 4. P2: The release plan does not actually provide separate measurement windows

[`CHANGES_FOR_REVIEW_2026-09-13.md:6`](CHANGES_FOR_REVIEW_2026-09-13.md#L6) ties separate measurement windows to separate commits. The baseline instead calls for a corrections-only deployment followed by its 28-day observation window, then a separate structural release. Deploying `571a960` would include all five implementation commits together.

Choose and record a real release strategy: staged deployment of selected commits with separate exposure periods, or one combined release measured as a bundle. Separate commits help isolate code but do not isolate visitor exposure. Even staged before/after observations are not randomized experiments and do not establish causation by themselves. Correct the deploy record and baseline groups for whichever release is actually chosen.

The documented immediate factual-correction exception remains appropriate; it should not be used to characterize structural consolidation as a factual correction.

### 5. P2: Provider attribution resolved; evidence interpretation still needs correction

**Updated 14 September:** the supplied [provenance README](../../audit/keyword-volume-2026-09-13/README.md) identifies DataForSEO through Percuity MCP's `get_keyword_data`, US (`2840`), English (`en`), with difficulty requested. The [JSON](../../audit/keyword-volume-2026-09-13/raw-captures.json) explicitly records a reconstruction written September 14 of reported September 13 results. The original finding that the provider was unidentified is superseded. This is usable provisional evidence, not an authenticated original response or an independent rerun.

The file parses into five batches of 20/18/18/16/11: 83 unique keyword rows. All four quoted AEO volume/KD/CPC rows and the principal redesign/migration figures agree with the reconstruction. The [detailed validation and revised priorities](KEYWORD_RECONSTRUCTION_VALIDATION_2026-09-14.md) preserve the checks and remaining limitations. Both supplied source files are currently untracked and excluded by `.gitignore`'s `/audit/` rule; they need deliberate preservation in Git before another checkout can retrieve them.

`NO_VOLUME_REPORTED` consistently accompanies null volume, but the file does not document the wrapper's status mapping or establish the cause. Use “no volume value returned under the recorded settings,” not a diagnosed reporting-floor result or “not an SEO opportunity.” DataForSEO documents causes of missing volume other than small demand; there is no evidence identifying the cause for these particular terms. [DataForSEO missing-volume guidance](https://dataforseo.com/help-center/no-search-volume-data-for-some-keywords).

The table omits returned KD 14 for `nextjs development agency`. The AI-builder explanation also overstates absence: the reconstruction reports 10 for `are ai website builders good`, 30 for `ai website builder for business`, and 320 for `can ai build a website`. Those do not force a retitle, but contradict “the only real volume is the head term.”

DataForSEO's KD uses backlink-derived scores for the top ten organic results; it is not a forecast for this site's authority or conversions. The monthly arrays, named measurement period, network and original response envelope are absent. The README's claimed 2–4× monthly swings therefore remain unverified, as do the claimed rarity and historical explanation of low KD with high CPC. Keep the caution about assuming easy rankings; remove unsupported certainty about why those scores occur. [DataForSEO KD methodology](https://dataforseo.com/help-center/what-is-keyword-difficulty-and-how-is-it-calculated).

### 6. P3: The response-note position is inaccurately documented

The handoff says the reply note renders before the submit button. The button is at [`HeroLeadForm.tsx:224`](../../src/components/forms/HeroLeadForm.tsx#L224); the note renders at line 264 after the form and direct-contact actions. Commit `d3771ce` fills an existing string and does not move that element.

The improvement is real: the response expectation can be seen without first submitting. Describe its placement accurately, or move it if positioning immediately before the button is an intended requirement. This is a documentation finding, not a claim that the form is broken.

## Nearby pre-existing inconsistencies

These were not introduced by the reviewed commits, but sit on the same claim-correction surfaces:

- [`mycustompatches/page.tsx:47`](../../src/app/work/mycustompatches/page.tsx#L47) says hosting costs await reconciliation of original invoices, and the answer also feeds FAQ schema. The central record at [`case-study-facts.json:131`](../../src/data/case-study-facts.json#L131) permanently retires those figures because invoices were not kept and the client cannot recall them. The page's line 523 already states that correctly. Align the FAQ, comparison row and other summaries with the permanent retirement record.
- [`mycustompatches/page.tsx:525`](../../src/app/work/mycustompatches/page.tsx#L525) says there will be no more late-night security patches or outages. That remains inconsistent with the corrected acknowledgement that framework dependencies require patching. Remove the absolute operating promise.

## Changes that hold up

The hosting corrections in pricing #07/#08 and the homepage FAQ match the owner's policy recorded in baseline section 7: hosting is agreed per engagement and is not automatically included in a monthly plan. The homepage's visible FAQ and FAQ structured data use the same `homeFaqs` array. This verifies consistency with the recorded clarification, not every client contract or hosting configuration.

Withdrawing the MyCustomPatches “All green” CWV row follows the central withdrawal of the project's performance figures. Keep that correction. A more modest proof page is the correct result when the stronger claim lacks its supporting record.

The six removed homepage components remain present in the repository. The retained homepage still contains projects/reviews, service links, pricing, launch checks, calls to action, founder information, support, ownership and migration-risk explanations. No source-level broken CTA/anchor caused by those removals was found. The review found no concrete information loss requiring the six components to be restored. That is not evidence that consolidation improves conversions.

The AI-builder change is narrowly represented by its diff: one H2 gains the word “website.” That commit does not retitle the post or change its URL, canonical or schema. Keeping a cost-decision article aligned with its existing purpose is reasonable; declaring the alternative keyword “unwinnable” is stronger than the evidence supports.

## AEO service-page decision

The `seo-aeo` cluster contains eleven entries and points to `/editorial-policy` at [`topical-map.ts:389`](../../src/data/topical-map.ts#L389). The AEO entity record also points there at line 217. No dedicated AEO service route exists in the inspected service directory.

A single commercial page is a reasonable addition once an actual offer exists. Fresh unbranded search samples for `ai seo agency` and `ai seo services` returned dedicated agency/service pages, such as [RankCite](https://rankcite.com/ai-seo) and [Enleaf](https://enleaf.com/services/ai-seo-services/). The `aeo services` sample also contained substantial buyer-guide intent. These examples support commercial relevance, not the quoted volume, CPC, ranking ease or suppliers' outcome claims.

The structural finding does not prove zero cannibalization. An intent distinction is a useful basis for the page, but keyword overlap and competing landing URLs remain empirical questions. Start with one primary service destination covering the relevant terminology instead of four synonym pages. Keep explanatory articles focused on their informational tasks and link them to the service where useful. Update both relevant `pillarHref` records when that destination actually exists.

A reviewable page brief can be prepared without inventing commercial terms:

| Page element | Required decision or evidence |
|---|---|
| Who it serves | Existing-site clients, migration clients, or both; target business type |
| Deliverables | Which access/indexing checks, content changes, factual/entity/schema work and measurement are included |
| Scope limits | Number of pages/topics, supported platforms, access needs and who supplies authoritative business information |
| Price | Approved price/range or a genuine quote-based process; separate setup and ongoing work if applicable |
| Delivery | Named stages, responsible person, start conditions, turnaround and revision/support limits |
| Proof | Dated, attributable observations; distinguish founder-affiliated results from client results |
| Success measurement | Accepted implementation checks, dated visibility observations and attributable enquiries; no citation or revenue guarantee |

Those terms remain undecided in the supplied handoff. No public AEO offer has been drafted or added by this review. Google itself cautions that third-party scores and advice are not evidence of Google ranking behavior; the service should describe the actual work delivered and its measurement limits. [Google guidance on third-party SEO tools and advice](https://developers.google.com/search/docs/fundamentals/third-party-seo).

## Outstanding verification

The two live test-email deliveries remain unverified in this review. No messages were sent. When those checks are authorized and run, a successful browser response alone is not inbox-delivery evidence; retain the relevant submission and receipt result.

Deployment and recrawl remain outstanding in the handoff. Record the actual deployed commit and timestamp before drawing before/after conclusions. Requesting indexing is a request, not a guarantee that a chosen measurement window has started.
