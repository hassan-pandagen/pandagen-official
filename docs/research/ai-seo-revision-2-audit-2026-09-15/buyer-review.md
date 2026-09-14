# Revision 2: customer and business-owner review

Reviewed 15 September 2026 against the [revision 2 draft](../ai-seo-page-for-review-2026-09-14.md), the current [page component](../../../src/app/services/ai-seo/PageContent.tsx), [FAQ data](../../../src/data/service-faqs.ts), metadata and relevant shared components. The monthly scope is owner-adopted: this review does not reopen approval for ten questions, two surfaces, five priority pages, one implemented improvement, report and review. App files were not changed. No new browser render, external competitor survey or form submission was performed in this contribution.

## Verdict

**The additions are useful and the $500 anchor is now substantially stronger. Keep the concrete monthly table and the ability to quote broader work.** The remaining problem is that the surrounding copy still describes the earlier build-only proposition. The current buyer receives a clear monthly scope, then an exclusion of written content and a promise that what they receive is a newly built site. Those contradictions dilute the offer more than the additions themselves.

The page does not need another large section. It needs the adopted offer moved earlier, the old exclusions corrected, and repeated explanations cut. Keep attribution as an available capability, but stop implying it supplies complete source knowledge or is unavailable from competitors.

## What revision 2 resolves

- The starting engagement now names recurring work a buyer can understand and compare. Research, observations, a shipped improvement, reporting and review are materially better than “monitoring and changes.”
- The distinction between a starting scope and a bigger project is explicit. There is no per-site pricing formula, and additions require a written scope.
- The misleading $1,500–8,000 comparison has left the hero and FAQ.
- Month one establishes a baseline while delivering a useful change; substantial setup is identified before commitment.
- Metadata includes “Services”; its description, related-service card and llms.txt now acknowledge the optional monthly offer. [Metadata](../../../src/app/services/ai-seo/page.tsx), lines 8–10; [related card](../../../src/components/services/RelatedServicesGrid.tsx), line 13; [llms source](../../../src/data/llms-txt.ts), line 83.
- The image wording is narrower. The primary CTA and current shared enquiry modal remain coherent. [Modal](../../../src/components/ui/QuoteModal.tsx), lines 237–241.

## Remaining scope contradictions

| Priority | Exact issue | Minimal correction |
| --- | --- | --- |
| Before publishing | The monthly offer includes improving page content, but the exclusions still say “Content written for you, unless copywriting is separately scoped.” A buyer cannot tell whether correcting missing information incurs another fee. | Say existing-page edits within the agreed improvement are included; separately scope new long-form production, interviews or substantial original research. Remove the broader blanket exclusion. |
| Before publishing | After monthly scope and additions, “What you do get is a site built this way from the start” resets the subject to a new build. It can imply $500 includes a new site or that a rebuild is required. | Remove this leftover paragraph from the monthly boundaries section. Put a short, explicitly labelled build-foundations explanation alongside the build offer. |
| Before publishing | “A citation, ranking or traffic target of any kind” excludes goals, not just guarantees. The FAQ then answers the question about getting cited with an unqualified “No.” | Distinguish agreed objectives and measured work from guaranteed engine outcomes. Change the FAQ question to “Can you guarantee citations or rankings?” and answer it directly without attacking other sellers. |
| Clarify | The scope says the quote determines “who publishes,” but the implementation row and FAQ unequivocally say PandaCodeGen ships the change, never someone else. | State the actual publication arrangement: PandaCodeGen implements and verifies with agreed access/approval; if the client's release team must publish, explicitly qualify that dependency. Do not turn a promised implementation into a recommendation-only engagement. |
| Clarify | New content/backlog work is listed as an addition, then excluded as “quoted separately rather than absorbed into a monthly fee.” This can sound excluded from every retainer. | Say it is outside **the starting scope** and separately scoped, either as initial work or in a larger monthly engagement. |

Source: [page](../../../src/app/services/ai-seo/PageContent.tsx), lines 53–57, 197–224 and 288–304; [FAQ](../../../src/data/service-faqs.ts), lines 57–78.

The table still omits the selected market/language, collection cadence and review duration. These can remain in the written scope rather than become another paragraph, but a compact sentence should explain that the quote names them. “Ten questions your customers actually ask” should not be read as ten wholly new questions every month: preserve and periodically review an agreed set. The current phrase “those ten questions tracked” helps, but naming the stable set would remove ambiguity.

The page does not explain cancellation after subscribing. “Optional” and “stopping after the build is normal” describe whether to buy, not how to leave. Replace a repetitive FAQ answer with the actual accepted commitment/notice and handoff terms when available; do not invent a term from the prior recommendations.

## Do the additions dilute the price anchor?

**Not inherently.** A midsize buyer needs to see that larger research, content and implementation needs can be accommodated. The paragraph saying additions are not assumed and are agreed in writing protects the starting price. Keep that sentence and the distinction between baseline scope and larger scope.

The current additions section is longer and less precise than it needs to be. Its attribution card, dashboard pitch, six additions and another pricing explanation create an agency-capabilities menu. Compress the list into three groups:

1. **More coverage:** pages/templates, questions/surfaces and markets.
2. **More production or implementation:** original content, larger technical work and catalogue/feed work.
3. **Measurement implementation:** source capture and a dashboard where the site's data and systems support them.

Keep attribution first if it is commercially important to the owner, but give it one bounded description rather than a competitive superiority argument. The heading “Additional work we quote separately” is clearer than “Where it goes beyond that.” Clarify which additions are one-time implementations and which increase recurring work; do not leave readers guessing whether a dashboard is another monthly subscription or a separately delivered build.

Cut the final “There is no per-website formula…” paragraph because the same point already appears directly above the scope table. “Because the work is awkward” is less useful than “because implementation or research is more involved.” These are copy cuts, not a change to project-based quoting.

## Attribution and dashboard promises need a different boundary

The platform hedge is useful but incomplete. “An enquiry or order carries where it came from” implies that the missing origin can always be recovered once tracking is installed. Source capture only has the information actually available. A buyer needs to understand that some journeys remain unknown, and that an attributed order is not proof the implementation created an incremental sale.

A tighter editorial proposal, retaining the capability:

> Where your platform and available data support it, we can capture available referral information alongside enquiries or orders. We have implemented this on a store owned by our co-founder. We check your setup before quoting and show where attribution remains incomplete.

Do not preserve “Most AI-search reporting stops at visibility” as an unqualified market fact. The existing [competitor benchmark](../ai-seo-audit-2026-09-14/competitor-comparison.md) already discusses referral/conversion reporting; the [retainer benchmark](../ai-seo-retainer-offer-2026-09-15/established-agency-offers.md) includes implementation and measurement systems. Those pages do not establish that every competitor implements the same tracking, but they also do not justify a blanket limitation. The source comment claiming competitors “structurally cannot match” this work should be removed as an unsupported internal rationale, even though it is not rendered. [Current attribution block and comment](../../../src/app/services/ai-seo/PageContent.tsx), lines 228–256.

“Live visibility, referral and enquiry data” is also too broad without refresh and access conditions. Describe a dashboard bringing the agreed available metrics together, with its update schedule and export/ownership boundaries stated in scope. Do not imply real-time data from systems that only expose periodic samples. [Dashboard copy](../../../src/app/services/ai-seo/PageContent.tsx), line 262.

The page keeps the important co-founder relationship disclosure. Use that exact relationship instead of the looser “our own company” so it remains consistent with the linked case study's separate-entity explanation.

## Minimal changes to sequence and length

The commercial table currently follows both a technical-readability explainer and the whole first-party evidence section. A customer who already has a functioning site must read through the build argument and its caveats before learning what monthly help buys. Move the table immediately after the hero. Keep the additions close to it so they qualify an already clear offer.

Recommended order with existing material:

1. Hero: name the service and explain new-build foundations versus ongoing help on an existing site.
2. The $500 starting scope, including first-month treatment.
3. Concise additions and a corrected starting-scope boundary.
4. Evidence, with a contextual method/source link and the existing limits.
5. A short build-foundations explanation, or a link to the detailed technical guide.
6. Buying FAQs and the relevant close.

Specific cuts that preserve the offer:

- Shorten the first monthly FAQ substantially; it currently repeats almost the entire table and the hero's optional-retainer point.
- Shorten the readability FAQ or point to the existing guide; the opening and three cards already explain it.
- Move the long llms.txt discussion to the existing educational article. A commercial FAQ about eligibility, content approval or stopping the retainer would answer a more important purchase question.
- Remove the obsolete build-only paragraph below exclusions and the repeated no-per-website paragraph.
- Keep the service-specific close and suppress the shared migration campaign on this page through its existing footer option.

This is likely to remove several hundred words, but no final copy was produced or recounted here. There is no defensible universal SEO limit of 1,700 versus 1,800 words. The draft itself says **1,682** at the top and asks about **1,795** later; a simple whitespace count of its extracted page body gives **1,684**. Treat that as a documentation inconsistency, not a ranking problem.

The nine H2s also include shared sections: the page component has six direct H2s, FAQ adds one, Related Services one, and the footer campaign one. The supplied body omits the related grid and footer content. Do not use its word count alone to describe the whole customer journey, and do not reuse the previous revision's rendered pixel measurements as if they measured this revision.

## CTA and proof details still open

- The close still asks how the site “reads” and promises to identify a build versus editing problem. Broaden it minimally to whether the site needs an initial fix or ongoing work; the offered retainer now covers more than readability. Keep “Ask us about your site.”
- The close says “Run the free check” without linking those words; only the hero supplies that link. Add an inline link or remove the invitation from the closing sentence.
- `<Footer />` still renders a second migration CTA. This remains a current source finding, not a solved revision-1 issue. [Page end](../../../src/app/services/ai-seo/PageContent.tsx), lines 326–355; [footer](../../../src/components/layout/Footer.tsx), lines 12–49.
- “5,583 of them came from…” still connects a page-table count to the preceding chart total, although removing the ratio improved it. Say “The page table records 5,583 impressions for the hosting-bandwidth article” to complete the correction. [Evidence wording](../../../src/app/services/ai-seo/PageContent.tsx), line 159; [previous archive verification](../ai-seo-audit-2026-09-14/buyer-and-implementation.md).
- The FAQ's “evidence that any of it works” still gives observational totals a causal role. The limitations should remain; use the evidence to show what has been measured and implemented, not to claim the retainer caused the results.

The revision is a meaningful improvement. Finish it by making the whole page describe the newly adopted service consistently, rather than adding another explanation of why the starting price needs exceptions.
