# AI SEO service page: revision 3 recheck

Reviewed **15 September 2026** against the [current export](../ai-seo-page-for-review-2026-09-14.md), application source and a fresh local desktop/mobile render. No application copy was edited or published by this audit.

**Verdict: the restructuring now works. The offer and ownership disclosure are clear. Correct the new attribution paragraph and a few remaining scope phrases before treating the page as finished. Another structural rewrite is unnecessary.**

## Direct answers to the review questions

| Question | Answer |
| --- | --- |
| Does the offer lead clearly enough for an existing-site buyer? | **Yes.** The service, starting price and existing-site eligibility lead; the monthly table follows immediately. The technical explanation now supports the buying decision. |
| Is the attribution paragraph accurate in both directions? | **Not yet.** It correctly values captured sources and customer reports, but introduces unsupported platform absolutes and an unproven lower-bound claim. Keep the capability and correct those statements. |
| Is the shared-owner wording sufficient? | **Yes.** It identifies Imran, the shared ownership and the first-party nature of the evidence. The case-study copies were updated during this audit and are now consistent. |
| What should be cut to reach 1,400 words? | **No fixed target is necessary.** If desired, the [six shorter FAQs](suggested-faq-copy.md) save 270 words by themselves, taking the reported 1,627-word body to approximately 1,357. No scope row, evidence limit or ownership disclosure needs removing. |

These are review judgments, not measured conversion improvements.

## What is resolved

- The H1 and opening now sell monthly AI SEO, with the $500 starting price and project-based scope.
- Existing-site eligibility is explicit; a new build is no longer presented as the purchased retainer deliverable.
- The monthly scope comes before technical explanation and proof.
- The blanket exclusion of written content has gone. The adopted page improvement remains included.
- Objectives are distinguished from guaranteed citations, rankings and traffic.
- The body correctly identifies Web-search impressions as the 6.2% denominator and labels the 5,583 figure as page-level impressions.
- The dashboard now promises an agreed refresh schedule.
- The unsupported competitor-majority claim has gone.
- The close asks what customers should find the business for, keeping the low-pressure enquiry CTA.
- AI SEO is now in header/footer service navigation, and this route suppresses the shared migration footer CTA.
- The llms.txt answer no longer claims automatic Cursor/Copilot use or a fixed three-check score; it distinguishes retrieval from use in an answer.

Keep these changes. The full buyer assessment is in [buyer-review.md](buyer-review.md).

## The main correction: attribution

The current [paragraph](../../../src/app/services/ai-seo/PageContent.tsx:228) says most assistants pass a referrer, Google AI Overviews and Meta AI pass none, those visits arrive unattributed, customer reports close much of the gap, and the total is a floor. That combines several distinct claims.

### Google AI Overviews: unidentified AI feature does not mean unidentified source

Google's current Analytics documentation classifies AI Overviews and AI Mode visits under **Organic Search**, excluding them from the AI Assistant channel. It does not say those visits universally arrive without a referrer. The useful distinction is whether reporting identifies Google search versus the particular AI feature. [Google's channel definitions](https://support.google.com/analytics/answer/9756891?hl=en).

Change the explanation to say Google AI-feature visits can be recorded as Google organic traffic without separately identifying the AI interaction. Do not promise that this applies identically to every browser, consent state or journey; this audit checked documentation, not a new cross-device click experiment.

### Assistant attribution remains useful

OpenAI documents a `utm_source=chatgpt.com` parameter on ChatGPT search referral URLs. That is a useful source signal distinct from the HTTP referrer. Capturing available referral and campaign information can connect acquisition evidence to enquiries or orders. [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq).

The claim about **most assistants** needs a defined sample and current observations. The universal **Meta AI passes none** statement is also unsupported: Meta operates across web and app surfaces, and its public documentation does not establish a common no-referrer policy. A dated firsthand test even observed Meta's web version passing a referrer; it should not be extrapolated into a current promise for every app. Sources and boundaries are in [attribution-review.md](attribution-review.md).

The commercial page does not need a platform-behaviour matrix. Explain the measurement service and keep changing technical detail in a method note.

### Customer reports add evidence; missingness alone does not prove a floor

The owner's account and the registry support using captured referrers **plus customer-declared discovery**. Keep that operating experience. Distinguish an observed click from a customer's account of how they found the business.

Calling the result a floor requires defined inclusion and attribution rules and counting each qualifying order once. Missing sources make undercounting possible; they do not, by themselves, establish a reliable minimum for a combined classification. This is not an allegation that the customer statements are unreliable. The audit did not inspect the private order records.

Use **recorded AI-attributed orders under the stated method**, and avoid quantifying how much of an unknown gap self-report closes. “Customers also tell us where they found us” preserves the owner's observation without adding an unsupported proportion.

Suggested compact replacement:

> We can connect available referral and campaign data to enquiries or orders, with server-side tracking where needed. Customers can also tell you where they found you. On Panda Patches, a business owned by our co-founder, our records combine captured referrers and customer-declared sources. We distinguish those kinds of evidence and explain what remains unknown. We check what your platform already records before quoting.

This is proposed delivery wording, not verification that every client's integration is already implemented. Correct the same claims in the source comment, review introduction and registry limitation when applying the change; otherwise the old explanation remains available for reuse.

## Ownership: now resolved

The service page names the shared owner and says the example is first-party, not independent client evidence. That is sufficient for this page. The longer trading history does not need repeating here.

At the first read, the case page still had the previous company-stake wording in two places. It changed during the audit. **The final source check confirms shared-owner wording in the case's schema description, main disclosure and later results paragraph:** [schema](../../../src/app/work/panda-patches/page.tsx:139), [main disclosure](../../../src/app/work/panda-patches/page.tsx:313), [later paragraph](../../../src/app/work/panda-patches/page.tsx:643). The earlier remnants are not current findings.

This accepts the user's ownership account and verifies copy consistency. It does not imply sole ownership, ownership percentages or that the two companies are the same entity.

## Remaining small corrections

| Location | Remaining issue | Minimal fix |
| --- | --- | --- |
| [Exclusions](../../../src/app/services/ai-seo/PageContent.tsx:64) | Larger content/backlog work is offered above, then excluded from “a monthly fee” | Replace that phrase with **“the starting scope.”** A larger retainer can then clearly include separately agreed work. |
| [Scope introduction](../../../src/app/services/ai-seo/PageContent.tsx:123) and implementation row | “Who publishes” is negotiable while shipping is promised unconditionally | Explain that PandaCodeGen implements and verifies with agreed access/approval; name any client release responsibility in scope. |
| [WordPress FAQ](../../../src/data/service-faqs.ts:78) | Still frames missing buyer information as a reason the customer might not need the service, despite that being its main recurring work | Explain that an existing site is assessed first and a rebuild is not automatically required. Distinguish one-time fixes from continuing work. |
| [Evidence FAQ](../../../src/data/service-faqs.ts:70) | Still says “all our impressions” and repeats observations as the answer to whether the service works | Use **Web-search impressions**, or remove repeated numbers and point to the proof/method above. Do not imply causal proof of retainer results. |
| Header CTA | Still says “Get your migration plan” on desktop / “Get a plan” on mobile | A service-appropriate header CTA would complete the messaging cleanup. The main enquiry CTA is already appropriate. |

Commitment, notice and tool costs remain undecided, as the export acknowledges. Set them before accepting a customer engagement; do not fill the page with invented terms. The calendar URL is also absent in this local build, with the established enquiry-form fallback. Verify production configuration before describing booking as tested.

## Length and visual result

The present FAQ is **527 answer words plus 52 question words: 579**, or **582 including its heading**. Both parsed source and rendered output agree. The export's **419-word** statement needs correcting.

The [proposed FAQ replacement](suggested-faq-copy.md) contains six questions and answers totalling **309 words**, saving **270**. This alone brings the reported service body to about **1,357 words**. It preserves the offer, keeps honest limitations and avoids inventing cancellation or tool-cost terms. It has not been applied.

The “no per-website formula” paragraph is another optional cut: the scope introduction already explains project-based quoting. There is no need to remove important evidence or disclosure to achieve an arbitrary length.

Measured comparison with revision 2:

| Check | Revision 2 | Revision 3 |
| --- | --- | --- |
| Mobile monthly-scope section begins | 3,222 px | **997 px** |
| Desktop monthly-scope section begins | 2,208 px | **816 px** |
| Mobile first service enquiry button | 871 px | **737 px** |
| Full mobile page, including shared content | 15,204 px | **13,810 px** |
| Rendered FAQ words, including heading | 594 | **582** |

Widths were 1440 px desktop and 390 px mobile; the mobile viewport height was 844 px. No horizontal overflow was observed. The mobile table remains dense but fits. The first enquiry CTA now fits within the inspected viewport after dismissing optional consent. The default first-visit banner is preserved in the screenshots for context.

Current service-specific sections total **1,624 words** with this renderer's whitespace counting; the export's approximately 1,627 is consistent with small extraction differences. These layout observations support the reordered flow, not a prediction of conversion rate.

Screenshots: [desktop opening](screenshots/desktop-hero.png), [mobile opening](screenshots/mobile-hero.png), [mobile scope](screenshots/mobile-scope.png), [additions](screenshots/desktop-additions.png).

## Code and SEO verification

- TypeScript check passed: `node node_modules/typescript/bin/tsc --noEmit --incremental false`.
- `service-faqs.ts` parses without diagnostics. All six AI SEO question/answer objects are present; the remaining service groups also parse. The reported earlier splice failures are not current syntax failures.
- The current local production route renders successfully with the revised offer, table and FAQ. Title, canonical and indexable robots metadata remain appropriate; the commercial H1 now agrees with the title's service intent.
- FAQ JSON-LD is still generated from the same data as the visible answers. Future corrections should change that shared source.
- All **28 extracted local destinations returned HTTP 200**. AI SEO is reachable through the newly added service navigation.
- No new keyword-volume, ranking, conversion or Core Web Vitals claim is made by this recheck.

The build was regenerated by another process during this audit; an initial start attempt coincided with the missing-build interval, then the completed build started successfully. Application source changes were checked again before finalising. The input manifests retain this timing distinction. No fresh build, application edit, form submission, booking, commit or deployment was performed by the audit.

Evidence: [rendered measurements](rendered-measurements.json), [link results](local-link-checks.json), [verification](verification.json), [capture script](capture-render.mjs), [capture input manifest](input-manifest.json), [final input manifest](final-input-manifest.json). See also the focused [buyer review](buyer-review.md), [attribution sources](attribution-review.md) and [shorter FAQ proposal](suggested-faq-copy.md).
