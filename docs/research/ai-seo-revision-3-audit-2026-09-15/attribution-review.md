# Revision 3: attribution wording fact-check

Reviewed **15 September 2026** against the [revision-3 draft](../ai-seo-page-for-review-2026-09-14.md), [service-page source](../../../src/app/services/ai-seo/PageContent.tsx) and [first-party measurement registry](../../../src/data/first-party-measurements.json). This is an audit, not an application change or inspection of private order records. All online sources below were accessed on the review date.

**Recommendation: keep the attribution offer and the owner's customer-discovery experience. Correct the platform generalisations and replace the unproven lower-bound claim.** The valuable work is connecting available evidence to real enquiries and orders. Incomplete coverage does not make that work futile.

## Findings that affect publication

| Current wording / location | Assessment | Calibrated correction |
| --- | --- | --- |
| Most assistants pass a referrer; source line 228 and comment line 33 | Not established as a current majority across assistants, apps, link types and devices. | Say AI visits can carry referral or campaign information. Use a named, documented example if helpful. |
| Google AI Overviews pass none and arrive unattributed; lines 228–230 | Confuses absence of a distinct AI identifier with absence of source attribution. Google's current Analytics documentation includes this traffic in Organic Search. | Explain that standard source reporting does not separately identify an AI Overview click within Google organic traffic. |
| Meta AI passes none; line 229 | Unsupported universal platform claim. Official material establishes several surfaces, not a shared no-referrer rule. | Omit the blanket statement. If supported by order records, describe the specific store observation and period. |
| No amount of engineering recovers them; lines 229–230 | Correct only when no usable evidence exists anywhere; too broad when URL parameters, retained sessions or customer statements exist. | Engineering can preserve and connect available evidence; it cannot invent missing evidence. |
| Asking closes much of the gap; large share of customers self-report; lines 230–231 | Owner experience can support the existence of customer reports. The size of the otherwise unknown gap is not demonstrated. | Retain customer-reported discovery; use a measured numerator/denominator and period before quantifying its prevalence. |
| It is a floor; source line 232 and registry line 111 | Not established merely because some sources are missing. | Call it recorded attribution under the stated method, not a complete count of AI-assisted business. |

## What the primary evidence establishes

### Google: source attribution and AI-feature attribution are different

**Verified current documentation:** Google's Analytics channel definitions put AI Overviews and AI Mode in Organic Search and explicitly exclude them from the AI Assistant channel. The latter uses recognised assistant referrers. Google Search Central also includes its AI-feature traffic within Web search reporting. Neither document says every AI Overview visit arrives without any referrer. [GA4 default channel definitions](https://support.google.com/analytics/answer/9756891?hl=en), [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)

**Technical interpretation:** a visit can be attributable to Google organic search while lacking an identifier that distinguishes an AI Overview link from another organic link. The usual Google-origin source signal is not a dedicated AI Overview source. Therefore, change the category-level explanation rather than claiming those visits universally become direct or unknown. This audit did not capture a new end-to-end Google click trace; channel documentation establishes the supported classification, not identical headers in every browser.

### ChatGPT: a useful documented signal beyond the header

**Verified current documentation:** OpenAI's publisher FAQ says ChatGPT search referral URLs include `utm_source=chatgpt.com` for analytics. This is a URL parameter, distinct from the HTTP `Referer` header. It is a concrete reason to capture both campaign information and referrers. It does not establish that every ChatGPT mode, copied link or app journey exposes a referrer. [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)

**Engineering inference:** if the parameter reaches the landing page, the system can preserve that source information and associate it with a later conversion under an agreed rule. A missing header alone does not make such a visit unclassifiable.

### Meta AI: avoid treating several products as one tested path

**Verified official scope:** Meta describes an assistant available through its website, standalone app and products including WhatsApp, Instagram, Facebook and Messenger. That establishes multiple entry paths. It does not document a universal outbound referrer policy. No current official cross-surface policy supporting the page's absolute claim was found. [Meta's app announcement](https://about.fb.com/news/2025/04/introducing-meta-ai-app-new-way-access-ai-assistant/)

**Dated firsthand observation, not official policy:** Patrick Stox's 26 May 2025 test reported a referrer from Meta AI's web version and explicitly excluded its social-app versions from that test. He used `document.referrer` to inspect arrivals. This historical primary observation is a counterexample to a timeless claim that Meta AI never passes one; it is not proof of every surface's September 2026 behaviour. [Original Ahrefs test and method](https://ahrefs.com/blog/generative-engines-are-breaking-web-analytics/)

Do not replace “Meta AI never passes one” with “Meta AI always passes one.” A platform-specific statement should name the tested web/app surface, link type, date and observed evidence. The commercial page does not need a constantly changing platform matrix.

### What cannot be reconstructed

**Verified mechanism:** `no-referrer` omits the HTTP referrer; other policies can retain only its origin. Policies can apply at page or individual-link level. [MDN Referrer-Policy documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy)

**Engineering conclusion:** a server cannot recover an omitted header from that request alone. It may still have URL tags, a prior recorded session or a later customer statement. The precise boundary is absence of usable evidence, not absence of one particular field. Preserve the distinction between an observed click source and what a customer says influenced discovery.

## Owner observations and the registry's floor claim

The registry's instrument at line 108 records referrer capture plus email-declared source. The owner also says customers volunteer where they found the store. That supports describing customer-reported discovery as part of the operating method. It does not by itself establish which platform failed to send a header, the proportion of all customers who answered, or the fraction of missing AI influence recovered. A customer can report an assistant after later searching Google, revisiting directly or purchasing on a different device.

The registry at line 111 reasons from missing referrals to a lower bound. **That conclusion needs more than missingness.** A mathematical floor requires the counted records to be valid members of the defined population, no duplicate counting and a clear definition of AI involvement. Combining observed and declared sources can be a useful estimate. It does not automatically prove those requirements, nor isolate incremental revenue caused by AI SEO. This is a limitation of the claim, not an allegation that the customers or owner are unreliable.

“Recorded AI-attributed orders” is supportable as a label for records classified under a disclosed method. “AI-referred orders” can imply every order followed an observed AI click. “AI-assisted orders” is broader but still needs the criterion stated. Keep the relationship disclosure already present.

Recommended internal method fields, without requiring more public copy:

- Record captured referral/campaign evidence and customer-declared discovery separately.
- Retain the original evidence, period, attribution rule and order identifier; count a matching order once when both methods identify it.
- Define how disagreement, repeat orders, refunds and unknowns are handled.
- If publishing a self-report percentage, state eligible customers, respondents and period. Do not use response rate as the percentage of all missing AI influence recovered.

These are recommendations for making the method reviewable, not assertions that the existing store lacks those controls. This audit did not access its private records.

## Suggested replacement copy

### Short commercial version

> We connect captured referral and campaign data to enquiries or orders, with server-side tracking where needed. Customers can also tell you where they found you; we keep that evidence separate from recorded clicks. On Panda Patches, which shares an owner with us, our records combine captured referrers and customer-declared sources. They show recorded attribution, not every AI-assisted purchase. We check what your platform already records before quoting.

The future-tense delivery wording is a proposed clarification of the existing offer. It is not a finding that every proposed integration is already built or that the current store's reporting interface separates these fields visually.

### Optional platform explanation if the page keeps one

> AI visits can carry source information, including referral data and URL tags. ChatGPT documents a source tag on its search links. Google AI Overviews sit within Google organic traffic, so standard source reporting does not separately identify those AI clicks. Customer-reported discovery can add information the click record misses. We preserve the available evidence and state what remains unknown.

Use the short version on the service page; the platform detail belongs in a linked measurement note if needed. For the registry limitation, replace the floor rationale with:

> One store, one month and one product category. Orders are classified using captured referrers and customer-declared sources. The total is recorded attribution under that method, not a complete count of AI-assisted purchases or a measure of incremental revenue. It does not establish results for another business or sales cycle.

Synchronise the source comment, public paragraph and review-document introduction when implementing the correction. Otherwise the incorrect universal claim remains available to be reused in later copy. No such implementation was performed in this audit.
