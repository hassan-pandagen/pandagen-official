# AI SEO page: buyer and implementation audit

Reviewed 14 September 2026. Scope: the supplied [review draft](../ai-seo-page-for-review-2026-09-14.md), current route source, shared CTA components, pricing, service navigation, topical map, measurement records, and the two local Search Console ZIP exports. This is a source and local evidence review, not a visual or live conversion test. No app files were changed, no forms submitted, and no private customer/order portal accessed.

## Verdict

The page makes an honest case for technically accessible websites, but it does not yet explain a sufficiently concrete monthly AI SEO service to buy. Its main mismatch is between the commercial search intent that justified creating it and the mostly website-build offer it actually describes. Adding a $500 starting price has corrected an earlier false rejection of monthly customers; it has not yet defined that service.

As a small business customer, I understand that a founder can look at my site and that the business will not promise rankings. As an owner allocating a marketing budget, I cannot establish what gets done each month, how it differs from general site maintenance, or how to decide whether to continue paying. As a midsize buyer, I cannot brief a colleague or compare a proposal without another substantial discovery conversation.

The answer is not to invent an enterprise package, promise citations, or remove the measurement caveats. The answer is to make the real offer and its boundaries visible before asking buyers to compare prices.

## What is already good

- One clear H1, descriptive sections, three concrete examples of technical work, and six visible FAQ answers. The FAQ uses the same data array as the structured data; the page does not duplicate the FAQ heading. [Page component](../../../src/app/services/ai-seo/PageContent.tsx), lines 73–135 and 214–223; [FAQ component](../../../src/components/ui/FAQAccordion.tsx), lines 31–56.
- The CTA offers a conversation with low commitment. The modal has already been corrected to “What would you like help with?” and “Send your question”; only name and email are required. Do not carry forward the previous audit's obsolete “Request a migration plan” modal finding. [Modal](../../../src/components/ui/QuoteModal.tsx), lines 235–321.
- The $500 amount is explicitly a floor, the retainer is optional, and the written quote defines the actual scope. These are useful commercial disclosures. [Hero offer](../../../src/app/services/ai-seo/PageContent.tsx), lines 84–95.
- The ownership relationship of Panda Patches is disclosed, and the page distinguishes Google's appearances from visits, sales, and other assistants. Keep those distinctions. [Evidence section](../../../src/app/services/ai-seo/PageContent.tsx), lines 144–183.
- The existing-site FAQ acknowledges that a rebuild may be unnecessary. This is a strong fit signal, although it should be introduced earlier and made more specific. [FAQ data](../../../src/data/service-faqs.ts), lines 76–79.
- Canonical, title, description, Open Graph, Twitter metadata, sitemap registration, and a dedicated cluster destination are present. Presence does not establish ranking, but there is no need to invent a duplicate commercial route just for AEO/GEO synonyms. [Route metadata](../../../src/app/services/ai-seo/page.tsx), [sitemap](../../../src/app/sitemap.ts), [topical map](../../../src/data/topical-map.ts), lines 386–404.

## Buyer questions the page currently leaves unanswered

| Buyer question | What the current page establishes | What is still needed |
| --- | --- | --- |
| Is this for an existing site or a new build? | New builds dominate the H1 and explanation; one late WordPress answer allows smaller work. | State whether standalone assessment, implementation on existing platforms, and retainers without a PandaCodeGen build are actually available. |
| What do I receive for $500/month? | “Ongoing monitoring and changes,” scoped per site. | A real entry-scope example: what is reviewed, what is changed, what is reported, and the main limits. Do not invent quantities to fill the page. |
| What changes the quote? | Size and a longer request list. | Actual drivers, if applicable: markets, languages, templates, monitored products/queries, implementation work, content production, integrations and reporting complexity. |
| What happens first? | Send a URL; founder decides whether the issue is build or editing. | Describe the assessment output, next decision, when the written scope arrives, and what access is needed. |
| What do you measure? | The firm's own historical impressions and a mention of store order attribution. | What the client receives: baseline, changes shipped, technical verification, named platform observations, referrals and business outcomes where measurable. |
| How long is the commitment? | Monthly is mentioned. | Whether rolling or minimum term, notice to stop, payment timing, onboarding/setup charges if any, third-party tools, and what happens to unused work or delayed approvals. |
| Who does the work? | A founder replies and Hassan wrote the measurement. | Who executes technical changes and who owns strategy/content/reporting; how an existing internal developer or agency is involved. |
| What does my team need to do? | No operational requirements. | Who approves copy, supplies subject expertise, grants access, and signs off changes; how delays affect delivery. |
| What do we own after stopping? | Code and accounts transferred for a build. | Access to reports, measurement configuration, content, dashboards, and ongoing changes for a retainer; distinguish client accounts from agency tool subscriptions. |
| Why choose this over our developer or SEO agency? | The build includes ordinary technical foundations. | Show the additional implementation or measurement responsibility the firm actually assumes. “We do ordinary good building” does not alone explain recurring value. |

These are commercial scope questions, not permission gates. The owner should supply the actual answers; a writer should not silently convert suggestions into commitments.

### Customer perspective

The plain explanation of server-delivered content is helpful, but the opening leads with JavaScript and HTML before answering the buyer's problem. A customer looking for an AI SEO agency may already have a readable site and want help understanding relevant visibility, recommendations, weak product/service content, or measurement. They have to read a long way to learn whether this business will help without rebuilding.

Introduce fit and the two actual engagement types first: foundations delivered with a website build, and optional ongoing work from $500/month. If existing-site-only work is available, state that alongside them. Avoid making the customer infer that all three are available from the WordPress FAQ.

The current three “readable” cards are examples of good work, not a complete purchasing specification. The page should connect each activity with what the buyer can inspect at handover: for example, named pages whose important facts are present in the served HTML, corrected source pages, and a dated check record. These are proposed forms of evidence, not claims that these deliverables are already sold.

### Owner and budget-holder perspective

The price is honestly described as a floor. Nevertheless, the repeated $500 anchor invites a comparison the page cannot currently substantiate: $500 of what, compared with $1,500–8,000 of what? More disclaimers about the floor will not solve missing scope. A short, actual entry example and the main quote drivers would do more work than the current repeated paragraph.

The whole hero price paragraph and first FAQ make essentially the same case. Use the hero for the two engagement choices and a concise floor; use the FAQ for contract and scope boundaries. Put a named, sourced comparison later only if comparable scope can be shown. Attribution merely to “agencies who publish their own rates” makes the evidence category clearer but gives the buyer no way to inspect it and does not create a like-for-like comparison.

At the floor, ongoing spend is $6,000 across twelve paid months. That arithmetic is not a suggested minimum term. A budget holder needs the monthly output and review criteria to justify that recurring amount, even when a contract is cancellable. A lightweight sample report or annotated completed implementation can explain value without a promised growth percentage.

The phrase “A citation, ranking or traffic target of any kind” appears in an exclusions list. A target and a guarantee are different. A responsible programme can agree what it will measure and try to improve without promising the engine's decisions. Replacing all goals with exclusions makes the retainer harder to evaluate. [Exclusions](../../../src/app/services/ai-seo/PageContent.tsx), lines 53–57 and 187–211.

### Midsize business and internal procurement perspective

For this buyer, the main absence is delivery coordination. They may have an established CMS, legal/brand review, multiple territories, an internal marketing lead, and another agency. An automatic rebuild assumption can disqualify the page before technical competence is assessed.

A concise “Working with your team” section would answer who implements changes, whether the existing platform and agency can remain, how access is granted, who approves content, and how findings turn into a prioritised work list. A separate proposal can carry detailed terms; the public page should establish that this way of working exists if it genuinely does.

Do not invent security certifications, staffing levels, SLAs, industry specialisms, reporting software or global coverage. Instead give a named responsible contact, an actual scope/report example with sensitive material removed, and a statement of how bespoke requirements are confirmed. A first-party example can support implementation competence even when it cannot serve as independent client outcome proof.

## Evidence: what the local records verify

I read both ZIP archives in place without extracting them or modifying them:

- [AI features ZIP](../../../GSC/pandacodegen.com-Performance-on-Search-Generative-AI-Features-2026-09-13.zip)
- [Regular Web search ZIP](../../../GSC/pandacodegen.com-Performance-on-Search-2026-09-13.zip)

| File / calculation | Verified result |
| --- | --- |
| AI Chart.csv | 92 unique daily rows, 12 June–11 September 2026 inclusive; sum 9,843 impressions. |
| AI Devices.csv | Desktop 8,261; mobile 1,521; tablet 61; sum 9,843. |
| AI Countries.csv | 163 rows; sum 9,843. |
| AI Pages.csv | 97 rows; sum 9,899 page impressions. |
| Leading AI page | `/blog/nextjs-hosting-zero-cost`: 5,583 page impressions. |
| Regular Web Chart.csv | Same 92 dates; sum 157,920 impressions and 259 clicks. |
| Regular Web Pages.csv | 142 rows; sum 159,506 impressions. |
| Both Filters.csv files | Search type: Web; Date: Last 3 months. |
| 9,843 / 157,920 | 6.2329%, correctly rounded to 6.2%. |
| 5,583 / 9,843 | 56.7205%, but mixes a page-table numerator with chart total. |
| 5,583 / 9,899 | 56.3996% of exported page-table impressions, approximately 56%. |

The archive contents support the reported chart total and date window. The ZIP names identify the AI report; the internal Filters.csv does not explicitly name the Generative AI report. This is verification of the stored artifacts and arithmetic, not independent access to Google's account or proof that an export was never edited.

The page's “57% of it” wording should be changed because page and property/chart aggregation are not interchangeable. A simpler defensible sentence is that the hosting-bandwidth article recorded 5,583 page impressions and dominates the page table. The main audit separately verifies Google's report definitions with current primary documentation.

The evidence registry calls this a “91-day window”; the dates cover **92 days inclusive**, and Chart.csv has 92 daily rows. Correct the registry if the number of days is retained. The rendered page itself uses dates and does not repeat that error. [Measurement record](../../../src/data/first-party-measurements.json), lines 310–338.

### What those figures do not establish

Keeping the limits strengthens the factual claim. It does not turn the claim into proof of the service's effect. There is no intervention baseline, comparable before/after window, or counterfactual demonstrating that the proposed build or retainer caused the 9,843 appearances. The FAQ question “What evidence do you have that any of it works?” currently invites that causal reading. A better role is “What we have measured on our own sites,” followed by what can and cannot be inferred.

The distinction between Google's visibility data and other assistants is good. Keep it, but avoid giving more visual weight to a property-wide number than to a relevant work example or the actual engagement scope. That last sentence is an information-priority recommendation, not a visual observation from a screenshot.

### Panda Patches proof destination

The service page's Panda Patches link goes to a substantial engineering/migration case study. It discusses conversion tracking, but it does not provide a clearly matched AI-referral measurement section for the service page's “attribution runs end to end” claim. [Service link](../../../src/app/services/ai-seo/PageContent.tsx), lines 178–182; [case study](../../../src/app/work/panda-patches/page.tsx), particularly the ownership disclosure at lines 311–313 and tracking description at lines 219–222.

The registry separately stores $11,186.59 and 36 orders for August 2026, with referrer capture plus email-declared source and an owner portal as its source. I did not access that portal or verify individual orders. Do not promote that number into the service page solely because it is available in JSON. A publishable example would need a retrievable redacted source, a clear attribution rule, window, gross/net and refund treatment, and a distinction between observed attributed orders and incremental revenue caused by the work. [Panda Patches registry record](../../../src/data/first-party-measurements.json), lines 49–115.

Use consistent affiliation wording: the case page says co-founder Imran Raza Ladhani owns the store and PandaCodeGen itself has no ownership stake. The service page's “our own company” is looser. Prefer “a business owned by our co-founder” everywhere. This preserves the positive disclosure without merging separate legal entities.

## Journey and implementation findings

### 1. Stale descriptions contradict the newly available retainer — fix before publication

The metadata description still says the work is part of a build “rather than as a monthly retainer.” That description feeds both social metadata and the WebPage structured-data description. The related-service card and llms.txt repeat an even clearer no-monthly implication. A buyer entering through those descriptions receives a different offer from the visible $500 option.

- [Route metadata](../../../src/app/services/ai-seo/page.tsx), line 10.
- [RelatedServicesGrid](../../../src/components/services/RelatedServicesGrid.tsx), line 13.
- [llms.txt source](../../../src/data/llms-txt.ts), line 83.

Use a description that names included build foundations and optional scoped ongoing work. Source comments in PageContent lines 66–69 also still instruct the page to turn monthly buyers away; they are not visible, but should be cleaned up so a future edit does not restore the wrong offer.

### 2. The supplied text is not the entire customer journey

The draft ends after the service-specific close. The real component then includes the full related-services grid and `<Footer />`. Footer defaults `showCta` to true and adds another large migration CTA with “Get your migration plan” and “Review Example Scopes.” The related grid contains all nine other choices, including agency partnerships, rather than a short selection. These are not present in the pasted full-text review.

The full page therefore reintroduces a migration ask after the carefully phrased AI SEO conversation close. Use the available page-local `showCta={false}` option or a genuinely relevant footer treatment. This is a low-impact local choice; the root audit will confirm the rendered appearance. [Page ending](../../../src/app/services/ai-seo/PageContent.tsx), lines 257–258; [footer default and CTA](../../../src/components/layout/Footer.tsx), lines 12 and 21–49; [related grid](../../../src/components/services/RelatedServicesGrid.tsx), lines 23–59.

Do not report the editorial policy as wholly absent: the global footer links to it, including lines 195 and 246. What is missing is a contextual method/source link beside this particular measurement, not every policy link on the page.

### 3. Main CTA is now coherent; modest refinements remain

The primary buttons correctly dispatch the shared quote modal and preserve the low-commitment reassurance. “Project details” remains the optional textarea label, and URLs are only suggested in its placeholder. An optional explicit website field or “Your question” label would fit a URL assessment better, but the current form is not broken simply because it lacks one. Name/email remain required; phone and detail are optional. [Modal](../../../src/components/ui/QuoteModal.tsx), lines 255–321.

The closing paragraph tells readers to run the free check, but its buttons are only “Ask us about your site” and “Book a call.” Add a simple inline link on “free check,” or change that sentence; no need for three competing primary buttons. [Closing section](../../../src/app/services/ai-seo/PageContent.tsx), lines 229–252.

The free audit destination is explicitly a point-in-time technical check, without signup, not a ranking prediction. That is an appropriate lower-commitment destination as long as the service page does not imply it measures how often ChatGPT recommends a brand. Its “Search & AI Foundations” logic explicitly disclaims inclusion/citation prediction and treats llms.txt as informational. [Audit page](../../../src/app/free-audit/page.tsx), lines 85–99; [audit checks](../../../src/lib/audit/deepChecks.ts), lines 639–880.

The call button uses the shared Cal integration. Source includes a fallback to the quote modal when no valid calendar link is configured and a consent interaction where necessary. An unset `NEXT_PUBLIC_CAL_LINK` alone is therefore not evidence of a dead button. Actual click behaviour is left to root's render check. [Calendar component](../../../src/components/ui/CalEmbed.tsx), lines 6–36.

### 4. Service discovery is only partly integrated

The new service is present in the related-services grid, sitemap, and both relevant topical-map destinations. It is absent from the shared header service dropdown and footer service list. This is a discoverability/offer-consistency gap, not an orphan-page claim. The Services index presents three build categories and exposes AI SEO through its related grid rather than a clear service-level introduction. [Header](../../../src/components/layout/Header.tsx), lines 39–48; [footer](../../../src/components/layout/Footer.tsx), lines 95–108; [Services index](../../../src/app/services/PageContent.tsx), lines 68–120.

The topical-map comment says the new route answers “who do I hire,” but current copy spends substantially more attention on why readable builds matter. Correcting the offer and process will make that intended destination real. [Cluster](../../../src/data/topical-map.ts), lines 387–404.

### 5. Pricing and ownership need a connected explanation

The review context says website builds start at $1,500, but the page-specific content never states that build floor or directly links to the pricing page near its scope explanation. The site's footer eventually links to pricing; that is less useful than giving the buyer a relevant next step while comparing the two engagement types.

The pricing page says code/accounts are owned at the end, and later explains client-owned accounts from the start plus a separately agreed hosting exception. The AI SEO page's simpler “code and accounts transferred to you” is an understandable summary but not enough for procurement or for a retainer on someone else's platform. Link to the actual terms and clarify what applies to a build versus ongoing work. [Pricing](../../../src/app/pricing/PricingPageClient.tsx), lines 73 and 364–388.

The pricing hero also says “no retainer” while its detailed terms correctly say “no compulsory retainer.” This is related cross-page copy debt: a user who follows the service's monthly offer into pricing can receive contradictory shorthand. Fix the shorthand without changing the actual approved offer.

### 6. Structured data and accessibility: bounded source conclusions

`ServicePageSchema` currently emits WebPage, BreadcrumbList and FAQPage, despite its component name. It does not emit a Service node. Adding an accurate Service node can be considered after the offer is defined; its absence is not an indexing blocker and should not be sold as a ranking or rich-result guarantee. FAQ text is sourced from the visible FAQ array, which is a positive consistency property. [Schema component](../../../src/components/services/ServicePageSchema.tsx), lines 18–54.

The route uses a client component, but that alone does not mean its text is absent from server-rendered HTML. Root is checking the actual response. Likewise, the custom motion wrapper must be read before assuming `initial={{opacity:0}}` leaves a no-JavaScript user with an empty hero: it maps mount animations to CSS. [Motion implementation](../../../src/components/ui/motion.tsx).

The source has labelled form inputs, error descriptions, an explicit dialog label, and static visible FAQ headings. This does not constitute a complete accessibility audit. Keyboard interaction, focus visibility, contrast, zoom, overflow and screen-reader behaviour require rendered checks. No visual defect or performance score is inferred here solely from source size or use of client components.

## Recommended page sequence

This is a proposed structure, not approved scope or a ready-to-publish promise.

1. **Service and fit:** make the AI SEO/AEO service explicit; identify new builds and existing sites the business actually supports.
2. **Two engagement choices:** included foundations for a build; optional ongoing work from $500/month; a direct pricing/terms link for builds.
3. **What the work includes:** the actual baseline, implementation, content responsibilities and verification artifacts; distinguish one-time from recurring tasks.
4. **Example and evidence:** one annotated implementation or reporting example, plus the existing labelled first-party data with its limits and source/method link.
5. **How delivery works:** assessment, written scope, implementation, review and ongoing decisions; responsibility on both sides.
6. **Ongoing scope and price drivers:** a genuine entry example and commercial boundaries, avoiding unsupported competitor price anchoring.
7. **Focused FAQ:** existing platforms, what can be measured, outcomes versus guarantees, content ownership, retainer term and stopping.
8. **Low-commitment close:** ask about the site, with a call option and a simple free-check link. Avoid the second migration-focused footer campaign.

Use the current technical explainer as supporting material, not the complete offer. Keep links to the relevant deeper blog articles for readers who want definitions or implementation detail.

## Priorities for the main audit

**Before publication:** define the actual ongoing offer enough to understand $500; align metadata/card/llms descriptions; remove or substantiate the broad competitor price comparison; correct the mixed-aggregation “57%”; distinguish accessibility from guaranteed reading/citation; clarify the “Can you get us cited?” answer without turning it into a guarantee.

**Next conversion improvements:** show fit for existing sites earlier, connect pricing and terms, provide a sample artifact and measurable review process, add the contextual evidence link, suppress the duplicate migration CTA, and expose the service in navigation.

**Useful later:** independently verifiable relevant client case evidence, richer monthly reporting examples, and segment-specific copy when actual customer demand and delivery experience justify it. None requires creating an unsupported success rate, inventing service units, or splitting AEO/GEO synonyms into competing pages.
