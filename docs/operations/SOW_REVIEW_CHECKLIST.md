# Statement of work review checkpoint

Review date: 2026-07-21

Source: owner-supplied draft healthcare website SOW. The draft has blank effective-date and signature fields, so it is not evidence of an executed agreement or current entity status.

This is a product, delivery, security, privacy, and commercial-risk review, not legal advice. Healthcare counsel should review the final SOW and BAA before signature.

This SOW is specific to a regulated medical project and is not PandaCodeGen's universal contract, refund policy, or operating template. Straightforward engagements may instead use a concise quote or order summary explicitly accepted in email or project chat. Only the written terms accepted for a particular engagement apply to it.

## What is already directionally aligned

- A 30% onboarding payment and 70% final payment.
- Client control or transfer of the domain, hosting, repository, CMS, analytics, and business accounts.
- Client ownership of client-provided content and client-specific deliverables after the agreed payment/acceptance conditions.
- PandaCodeGen retention of reusable internal tools, templates, and pre-existing code.
- Third-party components remaining subject to their original licenses.
- Small adjustments being absorbed while material scope additions require written approval and separate pricing.
- A defined post-launch support window and optional maintenance without agency lock-in.

## Must-fix contradictions before signature

### 1. Contracting identity and authority

- The header, payment, and signature sections identify `MC Patches LLC d/b/a PandaCodeGen`, while Section 1 uses `PandaCodeGen LLC`. Only the exact active legal entity should be used throughout.
- The draft names one managing-member signatory, while the website owner separately said both founders may sign. The agreement should name only people who actually have authority for the contracting entity and use their correct legal titles.
- The notices clause refers to a registered address in Section 17, but Section 17 contains no registered address.
- The Stafford address (12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477) is owner-confirmed as mailing-only and must not be described as a registered or physical office address. It superseded the Austin address on 24 Aug 2026.

### 2. Delivery, acceptance, and the final 70%

- Section 5 gives the client a testing/acceptance period, but Section 6 makes final payment due at DNS cutover and repository transfer before all handover items are delivered. Define one unambiguous `Delivery Milestone` and state whether the 70% is due before or after acceptance.
- If payment is triggered before the five-business-day handover package, state the client's remedy if handover is incomplete.
- Define rejection requirements, cure cycles, deemed acceptance, critical defects, launch approval, and who may authorize production DNS changes.
- If this healthcare client is to receive the optional 100% contracted-scope failure protection, add its precise trigger, verification and cure process, amount, initiation target, payment-provider settlement treatment, and work-product consequences. The website does not automatically incorporate it into this SOW.

### 3. Cancellation, refund, and work-in-progress rights

- Sections 14.1 and 14.2 require work delivery in five business days and three business days respectively.
- The draft gives the client all delivered work and ownership on termination, while the owner has said that after a full refund the client keeps its content/data/accounts but receives no right to unpaid or refunded custom code.
- Separate these outcomes: successful completion; client convenience termination with paid/accepted work; contractor breach and cure; mutually agreed goodwill refund; and full refund with no license to refunded work product.
- Define how partial completion is valued. `Milestone completion percentage` is not objective without a task/value schedule.

### 4. Project revisions, support, warranty, and latent defects

- The draft combines 30 calendar days of open support, a 90-day quality warranty, integration cooperation through the warranty, and a 12-month latent-defect obligation. These are four different obligations and need separate scopes.
- The website lists 15 or 30 **business days** as package defaults, but those defaults do not automatically govern this draft, which says 30 calendar days. Keep the project-specific choice deliberate and internally consistent.
- Define the start event, business hours/time zone, response versus resolution targets, severity ownership, third-party dependencies, minor adjustments, defects, exclusions, emergency contact method, and the effect of client/third-party changes.
- A four-hour critical acknowledgment can imply round-the-clock coverage unless support hours and on-call arrangements are explicit.

### 5. Performance and accessibility promises

- A Lighthouse lab score and field Core Web Vitals are different evidence. Lighthouse cannot enforce real-user INP in a pull-request CI gate. Field LCP, INP, and CLS require eligible real-user data over time; lab gates should use the metrics Lighthouse actually measures.
- Google's current good field threshold for FCP is 1.8 seconds, not 1.0 second. A sub-1.0 target may be chosen as a stricter contract target, but it should not be described as Google's official threshold.
- The agreed method should name both mobile and desktop, the URL/template set, three recorded runs per page/profile, Lighthouse version, test location, cache/consent state, content fixtures, third-party conditions, and exclusions.
- Lazy loading does not make non-homepage routes irrelevant. At minimum, test each representative template and every critical conversion route; use an automated all-route budget when the contract promises every page.
- Replace the absolute `WCAG 2.1 AA compliance` promise with a WCAG 2.2 AA target for a named page/component/state/browser/assistive-technology scope, a manual-plus-automated test method, documented exceptions, and a remediation process. W3C encourages use of the latest WCAG version.

Primary references: [Google PageSpeed Insights: lab versus field data](https://developers.google.com/speed/docs/insights/v5/about), [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

### 6. HIPAA, PHI, forms, hosting, and tracking

- `Contractor will not access, process, or store patient data` conflicts with building, transmitting, testing, logging, troubleshooting, and supporting PHI-bearing flows. The real data flow and each party's role must be documented.
- A cloud provider that creates, receives, maintains, or transmits ePHI can be a business associate even when data is encrypted and the provider cannot view it. Every in-scope host, form endpoint, log, alert, CRM, calendar, payment, analytics, A/B testing, and support path needs a data-flow review and an appropriate BAA where required.
- TLS, no URL parameters, CSRF/XSS controls, and disabling session replay are necessary controls, not a complete HIPAA-compliance warranty. Administrative, physical, and technical safeguards plus risk analysis, incident handling, retention/deletion, access control, audit logging, backups, and subcontractor flow-down also matter.
- A normal cookie banner is not a HIPAA authorization. Hashing identifiers before sending them to an advertising platform does not by itself make a PHI disclosure permissible. Remove advertising pixels, Enhanced Conversions, Meta CAPI, session replay, and non-BAA analytics from appointment/intake/thank-you or other PHI-capable flows unless healthcare counsel confirms a lawful design and every required vendor agreement is in place.
- `Self-hosted` and `US region` do not by themselves make analytics HIPAA compliant.
- The BAA exhibit, responsibility matrix, breach workflow, vendor/subcontractor list, risk analysis, and tested PHI-safe logging configuration must exist before PHI work begins.

Primary references: [HHS online tracking guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html), [HHS cloud-computing guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html), [HHS business-associate overview](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html).

### 7. AI tooling and content operations

- The scope includes an Anthropic API integration for content operations but also says no client confidential or `PHI-adjacent` information is sent to AI providers. Define exactly what content can be submitted, by whom, for which purpose, under what vendor terms, with what retention/training controls, and how PHI is technically blocked.
- `PHI-adjacent` is undefined. Use a concrete data classification and approved-data list.
- Human review of generated code is good practice but does not replace dependency, license, security, privacy, and functional review.

### 8. Accounts, repositories, access, and credentials

- Prefer client-provisioned production accounts from kickoff where practical. Some vendor accounts or subscriptions cannot simply be transferred.
- Use a dedicated client repository. `Full commit history` must never include another client's material, internal secrets, or unrelated proprietary history.
- Do not hand API keys over in a document. Create client-owned credentials, transfer through an approved secret channel, rotate contractor-era secrets, revoke stale access, and record owners and recovery methods.
- `Contractor retains no access post-transfer` conflicts with 30-day support, 90-day warranty, and integration cooperation. Define time-limited least-privilege support access and a final revocation event.

### 9. Successful-project IP and portfolio use

- Client-provided content and assets remain the client's property; they are not newly transferred by PandaCodeGen.
- Assign client-specific custom deliverables after full payment and the agreed acceptance condition, subject to a signed written transfer.
- Keep PandaCodeGen's pre-existing/reusable IP. License only what is embedded and needed to operate, maintain, modify, and migrate the delivered site. Decide whether successor vendors may use it for the client while prohibiting standalone extraction, resale, or use in unrelated products.
- Preserve third-party/open-source license terms and provide a dependency/license inventory.
- The project is not complete, so no current case study, client claim, screenshot, metric, or portfolio link is authorized. The SOW can reserve a possible future right only. After completion, full payment, public launch, and the required written client approval, the intended portfolio use is limited to PandaCodeGen-created public-facing website work plus a link to the live client site; patient imagery, testimonials, clinical outcomes, and confidential metrics will not be reused without separate written approval.
- The current SOW limits portfolio use to written descriptions, so it does not clearly authorize screenshots of the design/development work. Add a limited portfolio-display license for approved public-facing screenshots after launch and full payment. Require separate written permission for the client's name, logo, patient imagery, before/after photography, quotes, clinical outcomes, non-public metrics, and other identifiable case-study details.
- Owner decision: remove the `dofollow` requirement. If this SOW requires a visible development credit, use a natural branded anchor such as `Website designed and developed by PandaCodeGen` with `rel="nofollow"`; it acknowledges the work but does not require ranking credit. Google expressly permits a contract-required link when it is qualified with `nofollow` or `sponsored`. For future clients, default every contract-required or contractor-inserted credit to `nofollow` (Google prefers `sponsored` when the placement is advertising or paid consideration). A client may independently choose to publish an ordinary unqualified editorial credit, but PandaCodeGen should not promise, price, or contract for that ranking credit and should not distribute keyword-rich footer links across client sites.

Recommended business intent for counsel to convert into final contract language:

> After public launch and full payment, Client grants Contractor a limited, non-exclusive right to display approved screenshots of the public-facing website deliverables created by Contractor and to describe Contractor's role in its portfolio. Use of Client's name, logo, patient imagery, before-and-after photography, testimonials, clinical outcomes, or non-public metrics requires Client's separate prior written approval. Contractor may link normally to Client's public website as a factual portfolio citation. If this agreement requires Client to display a branded development-credit link to PandaCodeGen, that link will use `rel="nofollow"`, a natural PandaCodeGen brand anchor, and no search-ranking-credit promise. Any different link treatment must be the Client's independent editorial choice and not consideration for services.

Primary references: [U.S. Copyright Office: ownership and written transfers](https://www.copyright.gov/title17/92chap2.html), [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

### 10. Scope, price, and schedule risk

- Up to 60 pages, custom motion, a CMS, AI content operations, healthcare forms, deposits, calendar/CRM integrations, analytics, A/B infrastructure, accessibility, performance, migration, training, BAA work, and launch in 4-6 weeks for $6,000 is a high delivery-risk combination.
- Replace raw page count with a signed URL and template inventory. State how many unique templates, migrated entries, forms, integrations, motion sequences, revision rounds, environments, and training hours are included.
- Choose exact integrations instead of alternatives such as `Cal.com or Google Calendar API` and define what `PatientNow reference integration` means.
- Make the two-business-day early landing page conditional on assets, approvals, domain access, form destination, privacy copy, and compliance review.
- A dedicated `AI visibility page structured for LLM indexing` has no special Google technical benefit. Replace it with a useful, evidence-backed physician/service/FAQ or editorial page tied to real user intent.

### 11. Liability, insurance, exclusivity, and dispute terms

- Uncapped HIPAA/BAA exposure, broad indemnity, a cap tied to hypothetical insurance proceeds, a 12-month latent-defect promise, attorney-fee shifting, and a 12-month/50-mile competitor restriction are material business risks for a $6,000 engagement.
- The assertion that commercial general liability is irrelevant because work is remote is not a safe substitute for counsel and insurance advice. Review technology E&O, cyber/privacy, professional liability, contractual liability, and any client-required coverage.
- Add indemnity procedures: prompt notice, control of defense, cooperation, settlement consent, and exclusions for client instructions/modifications.
- Have **Texas** and Minnesota counsel review governing law, arbitration, late fees, non-solicitation, exclusivity, insurance statements, healthcare duties, and enforceability before signature. The operating entity moved from Wyoming to Texas on 24 Aug 2026, so any Wyoming-law provision carried over from an earlier draft is now the wrong jurisdiction.

## Precise owner decisions still needed

1. ~~Is `MC Patches LLC` the exact active Wyoming entity and is `PandaCodeGen` its registered DBA/trade name?~~ **ANSWERED 24 Aug 2026.** Neither. The operating entity is **Panda Group Ventures L.L.C.**, formed in Texas, trading as PandaCodeGen. MC Patches LLC belongs to an independent client (MyCustomPatches) and is unrelated. Every `PandaCodeGen LLC` reference in the draft is wrong and must be replaced with the real legal name.
2. Who may bind that entity: the managing member named in the draft, Hassan Jamal, Imran Raza Ladhani, or a defined subset? What legal title should each signer use?
3. Is the final 70% due at production launch plus repository transfer, after the client's acceptance period, or only after the full handover package? What exact event is `delivery`?
4. On a successful fully paid project, should client-specific code and design be assigned to the client, with PandaCodeGen retaining reusable/pre-existing IP and licensing embedded pieces only for the client's site and successor maintainers?
5. May the client receive a dedicated repository and full client-only history, while PandaCodeGen keeps portfolio rights only after written approval and any contract-required branded credit uses `rel="nofollow"` with no ranking-credit promise?
6. Does included support run during the project, after production launch, or both? Recommendation: project revisions run until acceptance; the 15/30-business-day support window begins at production launch and covers defects plus genuinely minor adjustments.
7. Does this custom healthcare SOW intentionally add a separate 90-day warranty and 12-month latent-defect promise beyond the 30-business-day package support? If yes, define and price that additional exposure.
8. Should the performance promise cover representative templates/critical routes or every public URL? Homepage-only is not sufficient. Recommendation: every critical route plus one of each template, with an automated budget across all public URLs.
9. Confirm the governing-law/video-arbitration provision is intended for this healthcare engagement. **The Wyoming-law wording is now stale**: the entity is a Texas LLC as of 24 Aug 2026. Do not copy it into other clients' terms without a project- and jurisdiction-specific decision.
10. Which exact forms may collect health information, and which production vendors have signed BAAs covering every system that could create, receive, maintain, transmit, log, or support that information?
