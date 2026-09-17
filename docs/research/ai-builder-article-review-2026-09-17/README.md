# How to make the AI-built website article publishable and useful

Research date: 17 September 2026. Reviewed the v2 draft, seven builders' official documentation, seven competing pages, the saved DataForSEO capture, and this repository's implementation and evidence records. This is a content and source audit, not a hands-on comparison of builder output or a ranking forecast.

## Recommendation

Make the article a practical guide to verifying an existing small-business website, before launch and after changes. Show the action, expected outcome, evidence and next step for each check. The recurring-cost argument already belongs to the existing DIY-cost article.

The central argument of v2 cannot be retained: multiple builders now perform recurring checks. The useful question is which checks are enabled, what they observe, and whether the evidence covers the actual business outcome.

Prepared assets:

- [Revised v3 article](revised-article-v3.md), a separate review candidate. The original v2 is unchanged. This candidate is kept with the research package because the repository ignores `blog-drafts/`.
- [Reusable website check record](website-check-record.md), a blank, printable Markdown worksheet. It is not a completed test report or a published download yet.
- [Seven-builder source verification](vendor-verification.md).
- [Search intent and seven competing pages](search-intent-and-competitors.md).
- [First-party evidence review](first-party-evidence.md).

## What the deeper research changed

### 1. The opening is contradicted by current documentation

[Lovable Project monitoring](https://docs.lovable.dev/features/project-monitoring) supports scheduled checks and owner alerts, subject to settings, plans and credits. [Replit monitoring](https://docs.replit.com/features/publishing/monitoring-a-deployment) provides recurring uptime checks; its separate [SEO Rating](https://docs.replit.com/features/publishing/seo-rating) reruns after publishing. [Webflow AEO agents](https://help.webflow.com/hc/en-us/articles/51704193319955-AEO-agents-overview) also refresh recommendations repeatedly on eligible plans.

Lovable's manual SEO-review limitation does not describe all Lovable monitoring. Replit SEO Agent's content remit does not describe all Replit features or all other builders. The vendor review records the exact boundaries.

Use this thesis: **AI builders can help build, test and monitor a site. Check what is enabled and verify the customer journey through to its business result.**

### 2. Live payment testing advice needs correction

The draft instructs readers to charge the smallest real amount and refund it. [Stripe's testing instructions](https://docs.stripe.com/testing) explicitly prohibit testing with real payment details in live mode. The revised guide uses sandbox scenarios, then separate production-configuration verification and reconciliation of genuine orders. Do not turn a general checklist into permission to trigger real fulfilment.

[Stripe's webhook documentation](https://docs.stripe.com/webhooks) supports checking duplicate handling. Refund confirmations can be legitimate: distinguish them from a stale production-start instruction. The original wording, “confirmation email fired for the sale and not for the refund,” was too broad.

### 3. Provider delivery logs answer only part of the question

[Resend's event definitions](https://resend.com/docs/webhooks/event-types) distinguish sending acceptance from delivery to the recipient's mail server. Check the destination inbox and ability to reply as well. The revised article and worksheet trace the stages that actually exist, without requiring a CRM or storage layer on a direct-to-email form.

### 4. The first-party form story was misclassified

The code deliberately returns success and sends nothing for anti-spam rejections. A fast Playwright submission triggering that rule is not proof of a broken human enquiry or customer loss. The revised example describes the code behavior and what it can establish.

The local timing-filter tests were run during this review: **7 passed, 0 failed**. Command: `node --test src/lib/forms/__tests__/quoteTiming.test.mjs`. This verifies the filter's tested decisions only. No email delivery, real browser journey, production CRM or live customer loss was tested.

The email-template canon supports two templates blocked until a syntax error was fixed on 15 September. It does not identify both as customer emails, quantify missed sends, or substantiate the exact deployment failure claimed in v2. The refund and permissions anecdotes need their own retrievable records before inclusion.

### 5. The competitor gap is execution quality

[TS Haus](https://tshausdigital.com/resources/qa-checklist-before-launching-ai-built-website) already discusses delivery verification, payment scenarios, evidence and rollback. [Shopify](https://www.shopify.com/blog/website-checklist) includes post-launch conversion tests and maintenance. [Squarespace](https://support.squarespace.com/hc/en-us/articles/360022518252-Site-launch-checklist) checks forms against storage and covers order notifications. The seven-page comparison records additional examples.

Do not claim everyone else checks only appearances. The improvement we can deliver is a guide an owner can finish: where to look, what constitutes a pass, what remains unverified and which task needs a developer. The worksheet makes that tangible. Its structure is a practical editorial recommendation, not a claim that nobody else provides templates.

## Corrections to the previous review

- The suggested correction from **59 to 58** checklist items was wrong. The interface screenshot includes a vertical scroll-to-top item. The local evidence records 19 + 20 + 20. Keep the count out of the revised article because it distracts, not because it is false.
- Saying that the exact spam-filter threshold is inherently dangerous to publish was overstated. The source describes a weak client-provided signal, not a secret security boundary. Omit it because the owner does not need it and it can distract from the evidence distinction. Do not hide real operational limitations merely to make the agency look better.
- A historical monitoring gap may be reported accurately with its audit date and known remediation state. Do not change it to “fixed” or imply present coverage without evidence.
- The previous 7/10 was an editorial impression, not a measured score. This review uses publication criteria rather than laundering that impression into a precise quality metric.
- Shared vocabulary does not prove search cannibalisation. There is substantial content overlap with the DIY-cost article, but the new draft is unpublished and has no competing query data.

## What “9/10” should mean here

Treat the following as an editorial acceptance bar, not a Google score or traffic promise.

| Requirement | Current disposition |
| --- | --- |
| A clear reader and job | V3 addresses owners verifying an existing site; no “best builder” promise |
| Accurate, current product claims | Seven-vendor recheck completed; false universal thesis removed |
| Useful answer near the opening | V3 begins with the action and applicability; checklist comes first |
| Executable checks | Each section gives expected result/evidence; specialised tasks are identified |
| Original first-party material without inflated conclusions | Examples narrowed to supported code/audit records; full delivery receipt still missing |
| Useful reusable asset | Blank worksheet prepared; needs publication and a working link |
| Distinct role within the site | DIY article owns cost; Lovable article owns indexing diagnosis; this article owns verification |
| Appropriate offer and CTA | Founder conversation; no invented free audit, maintenance price or SLA |
| Scannable, usable implementation | Markdown prepared; rendered mobile/keyboard/print checks remain for page implementation |
| Evidence that the guide works for its audience | Nontechnical-owner walkthrough remains to be performed |

These are the remaining steps toward a defensible high-quality result. Do not declare the article 10/10 just because its wording and metadata are polished.

## The work that would justify the last step

1. **Capture one real, redacted end-to-end example.** Record test date and site version, visitor action, configured downstream stages, result and limits. If using a defect story, include the fix and a successful retest. A screenshot of the success banner alone is insufficient. Do not manufacture a failure or relabel a synthetic example as customer data.
2. **Have a nontechnical owner use the guide.** Observe which steps they complete, where they need help and whether the pass criteria are understandable. Preserve the feedback and revise confusing wording. Do not claim broad usability validation from one person.
3. **Implement and inspect the actual page.** Check mobile table/card layout, anchor navigation, heading order, visible links, keyboard access, print/download behavior and the contact path. The researched Markdown is not evidence of a functioning published page.

A repeatable multi-builder experiment is optional future research, not required to publish this procedural guide. If undertaken, disclose the same brief, plans, dates, prompts/iterations, enabled settings, tests and fixes. Do not build a ranking from vendor descriptions.

## SEO and article presentation

**Recommended H1:** AI-Built Website Checklist: 8 Checks Before Launch and After Changes

**Title tag:** AI-Built Website Checklist: 8 Practical Checks

**Description:** Check enquiries, payments, mobile use and search access on your AI-built website. Eight practical checks, evidence to save and when to repeat them.

**Proposed new route:** `/blog/ai-built-website-checklist`. Nothing is published at this route by this task.

The exact checklist phrase was not queried in the saved DataForSEO capture. Do not attach the 480/month estimate for “ai built website” to this longer phrase. “AI website builder for small business” has LOW advertising competition and no organic difficulty value in that capture. The original interpretation that KD 2 is “close to free to rank for” is unsupported. Raw capture remains preserved; the new interpretation is in the search-intent report.

Suggested visual: a simple enquiry-flow diagram showing acknowledgement, configured storage, sending provider, receiving inbox and follow-up owner. Mark optional stages. A static accessible diagram with a text equivalent is sufficient; an animation can be optional and respect reduced motion. Decorative motion does not compensate for missing proof.

Place the worksheet action near the top and the founder CTA after the useful material. Use one relevant case-study link beside the own-system example, and contextual links to the existing DIY, ownership and Lovable guides. Use the actual topical-map cluster ID `custom`; `custom-development` is not the current registry ID. Add a contextual link from the DIY article after the new route exists.

Use accurate Article and Breadcrumb data, author information, a self-canonical and truthful publication/review dates. Keep FAQ copy visible if used. Do not promise FAQ rich results: Google [removed that feature](https://developers.google.com/search/updates) in 2026. Its [speakable guidance](https://developers.google.com/search/docs/appearance/structured-data/speakable) concerns an audio/news use case, not general AI-citation eligibility. Google says [no special AI schema is required](https://developers.google.com/search/docs/appearance/ai-features). Focus on content the reader can use and verify.

The recommended flow is an editorial decision, not a prescribed SEO word count. Google's [helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) asks for original value and a satisfying answer, and explicitly rejects a preferred word count.

## Safe scope of this pass

No builder account was exercised, no production enquiry/payment/refund was created, and no website route or existing article was rewritten. No source-only test is represented as a live business outcome. V3 and the worksheet are review artifacts; no commit, push or publication was performed.

Artifact verification: all local Markdown file links and the eight in-article jump links resolved. V3 contains eight numbered checks and approximately 2,300 words including tables, FAQs and its method note. A separate content review found no further material issue in its scope after adding the explicit Search Console HTML-view step. Browser layout, public download and owner usability remain untested.

Original v2 SHA-256 at review: `D505F357504476FA4C915D158DE90727C4DF3B18966598FEC7D6A3F0354E1236`.
