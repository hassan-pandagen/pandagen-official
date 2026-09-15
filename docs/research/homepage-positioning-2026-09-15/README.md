# PandaCodeGen homepage positioning

**Recommendation: lead with custom websites and online stores, and move source-platform names into the existing-website service route.** The current opening describes a migration engagement accurately enough to attract that buyer, but gives new-build and other website buyers an unnecessarily narrow picture of the business. The correction needs to cover the opening argument, service paths and search descriptions together.

This is a positioning recommendation, not a finding that WordPress, Wix or Squarespace caused visitors to leave. No experiment or visitor-level evidence establishes that causal claim. The evidence supports a clearer expression of the offer; it cannot identify a statistically best-performing headline.

## Scope and decision

The recommended hierarchy puts business websites and ecommerce first, with custom software and optional ongoing AI SEO as distinct supporting services. That reflects the existing breadth of delivery while retaining a clear entry category. Giving software equal prominence would require a broader headline and enquiry label; that is a different commercial priority, not a minor wording adjustment.

The current [company facts](../../../src/data/company-facts.ts) explicitly call migrations the primary offer. Broadening the homepage therefore constitutes a positioning decision. It should be adopted coherently rather than leaving the facts page, metadata and service introductions telling a different story.

Evidence checked on 15 September 2026 comprises current repository sources, eight comparable agencies' official homepages, primary usability research and Google documentation. Agencies were selected for overlapping website, commerce or technical services, not verified revenue or conversion leadership. Their published results have not been independently validated. Detailed observations are in the [business-agency benchmark](business-agency-benchmark.md), [technical-studio benchmark](technical-studio-benchmark.md) and [current-page review](current-page-review.md).

## The current buying message

The [hero](../../../src/components/sections/Hero.tsx) names three builders, repeats migration in its badge and lead, presents a migration result and asks for a migration plan. The [homepage route](../../../src/app/page.tsx) then reinforces that position in its summary and search metadata. The form beside it is broader: it already welcomes a project or a question. This makes the narrowness a property of the entire opening, not merely an overlong H1.

| Visitor's situation | Possible reading of the current opening | Recommended response |
| --- | --- | --- |
| Needs a first business website | This agency moves existing sites; perhaps it does not start new ones. | Name website design and development, and make new builds explicit in the service path. |
| Wants a stronger existing website | Relevant if using one of the named builders; uncertain otherwise. | Lead with the website requirement, then explain supported platforms. |
| Runs an online store | Commerce and the buying process are not apparent immediately. | Name online stores in the lead and show a relevant project. |
| Manages a marketing team | Needs editing, implementation and launch responsibilities clarified. | Explain the content editor, agreed scope and handover. |
| Needs an internal tool | The business may appear unrelated to software. | Provide a visible, separately quoted software route. |

These are interpretation risks, not observed customer quotations. A targeted migration landing page can reasonably exclude unrelated needs. The general company homepage should make the chosen wider offer recognisable.

The current language also spends valuable opening space defending the implementation: templates, migration mechanics, machine readability and a performance-related result all arrive before a named project. Those details can support a buying decision later. The first task is to explain what can be built, why it may fit the buyer and where to inspect it.

## Competitor patterns

The common pattern is recognisable service category plus buyer relevance, followed by proof and deeper options. Platform names vary with the intended buyer. Source order was verified; competitor fold positions and mobile layouts were not measured.

| Official homepage | Observed emphasis | Implication for PandaCodeGen |
| --- | --- | --- |
| [Webstacks](https://www.webstacks.com/) | Agency category and continued website development; platforms appear in deeper expertise. | Explain the purchase before the architecture. |
| [Huemor](https://huemor.rocks/) | B2B positioning, commercial purpose and distinct service routes. | Give website buyers an understandable route; its larger engagements are not your pricing model. |
| [Orbit Media](https://www.orbitmedia.com/) | Design/marketing category with editing and business usefulness. | Staff control is a practical benefit worth explaining. |
| [Lounge Lizard](https://www.loungelizard.com/) | Explicit agency category, location and company history. | Remain clear; do not imitate tenure or repeat a long introduction. |
| [Bejamas](https://bejamas.com/) | Migration framed around a marketing team's ability to operate the website. | Even migration copy can lead with its operational benefit. |
| [Naturaily](https://naturaily.com/) | Web development and Shopify appear prominently together. | A platform can be useful positioning when deliberately central to the offer. |
| [FocusReactive](https://focusreactive.com/) | CMS expertise and publishing at scale, with prominent technology terms. | Technical buyers deserve specific routes rather than hidden expertise. |
| [Blazity](https://www.blazity.com/) | Enterprise AI-agent engineering and Vercel positioning. | Shared technology does not make every studio a suitable homepage model. |

These examples do not establish that broad language converts better. They demonstrate viable ways to organise an offer. In particular, removing every platform reference would ignore counterexamples in the same market. The recommendation is to move qualification details to the point where they help the relevant buyer.

Nielsen Norman Group's company-information research supports clear purpose, plain language, authentic evidence and consistent information across surfaces. It included qualitative testing with more than 70 participants across three rounds, rather than a controlled agency-homepage conversion experiment. It supports the clarity rationale, not a predicted reduction in PandaCodeGen's bounce rate. [Kaley and Nielsen, 2019](https://www.nngroup.com/articles/about-us-information-on-websites/)

## Recommended opening

**Category:** Website design & development

**H1: Websites built for the way you do business.**

We design and build business websites and online stores around how your customers enquire and buy. Your team can edit the content, and you own the code.

**Primary action:** Ask us about your site  
**Secondary action:** See our work

**Price:** Business websites from $1,500. Online stores from $5,000.

Scope and price agreed before work starts.

**Supporting detail:** Work directly with the founders.

**Reassurance:** A founder replies, usually within one business day. Every message gets an answer, whether or not it turns into a quote.

The headline is intentionally plain. It is not a uniquely ownable slogan. Its value comes from accurately introducing a concrete explanation and inspectable work. Making content editing the whole headline would be specific, but would give a basic purchasing requirement more prominence than the wider custom-build offer. Promising more leads or sales would be commercially appealing but would exceed what the build alone controls.

The combination of agreed scope, founder access, editing, ownership and relevant projects gives the proposition substance. None should be claimed as exclusive. The $1,500 floor applies to the entry website scope, not every store, custom integration or software application. The nearby pricing route must make that distinction easy to see.

## CTA and form

Keep the already agreed **Ask us about your site** as the website enquiry invitation. It describes an action the existing form supports and accommodates someone who has identified a problem without deciding to commission a project. Pair it with **See our work**, a useful path for buyers still evaluating credibility.

The earlier defence of **Get your migration plan** established that it matched the topic. It did not establish that the destination delivered a plan. Opening an enquiry form is a different next step unless the promised planning deliverable is genuinely part of the offer. A broader homepage makes that label still less suitable.

NN/G's research on ambiguous calls to action describes users expecting information and encountering onboarding or sales flows instead. It supports describing the next interaction clearly; it does not prove this particular replacement will generate more enquiries. [Harley and Flaherty, 2017](https://www.nngroup.com/articles/get-started/)

The desktop inline form can remain available, but the page should not ask visitors to process several competing actions before seeing work. Use one primary enquiry route, one secondary portfolio route and a quiet alternative contact method. Keep the separate free scan within relevant diagnostic content if it adds a third competing homepage action.

On mobile, place the full inline form after the initial project selection while retaining the hero enquiry button's existing modal destination. In the current 390px render, the work heading begins around 2,242px down the document, after the form and summary. A shorter H1 alone cannot put proof ahead of those blocks. This is a proposed ordering change, not a demonstrated conversion improvement. [Current render measurements](render-check.md)

The compact mobile header still says **Get a plan**, while the desktop and expanded mobile-menu actions use the newer enquiry wording. This is visible in the [390px capture](screenshots/home-390-hero.png) and present in [Header.tsx](../../../src/components/layout/Header.tsx). Include that separate surface in the revision. If a shorter mobile label is necessary, **Ask a question** describes the same next step.

## Information order and platform placement

The proposed order is **offer → selected work → service choices → existing-site/platform route → price and delivery → relevant questions → close**. A short sourced review can sit beside the relevant work or delivery argument. Founder information remains useful beside delivery responsibility. This is a hierarchy, not a requirement for seven separate full-height sections.

Show real project imagery early. Lead with what the customer needed and what shipped: a catalogue and quotation experience, a service website, a storefront or an internal operations tool. Technical implementation detail belongs in the case study. Keep affiliated projects labelled at the card. Retain a concise link to the results publication policy beneath the work selection.

The main service choices should be company websites, online stores and custom software. Redesign and migration belong within the website buying situations. Ongoing AI SEO should have a distinct route and price, without making the homepage appear to sell only AI visibility or implying that a retainer is required for a build.

Place the platform section after initial proof and service choices:

> **Already have a website?**
>
> If your current site no longer fits the business, we can plan its replacement around the content, URLs and connected tools you need to keep.

Link WordPress, Wix, Squarespace, Webflow, WooCommerce and GoHighLevel to their relevant services. Explain Shopify separately where retaining its commerce backend is an option. The current umbrella **We migrate you off** is too absolute for that mixed list. Next.js and Sanity can appear in the delivery explanation, case studies and specialist routes where they help someone assess compatibility.

The [ready-to-review copy](recommended-copy.md) supplies the opening and downstream wording. It replaces repetitive migration arguments rather than adding another set of sections to the existing page.

## Search positioning

Keep a descriptive search title aligned with the wider category: **Custom Website Design & Development | PandaCodeGen**. Use the description to name business websites, ecommerce, founder access and code ownership. The hero should distinguish the website and store starting prices; a short search description need not carry both. Retain useful migration terminology in the corresponding service pages and homepage service links.

Google can use the title element, prominent page text, headings, Open Graph title and links when generating a result's title. Its guidance supports coherent, descriptive page signals. It does not justify claiming that an H1 change has no ranking effect. [Google Search Central, title links](https://developers.google.com/search/docs/appearance/title-link)

This review does not claim current volume or difficulty for a broader keyword. Earlier reconstructed US keyword estimates are not evidence that every commercial term belongs in the homepage H1. Nor should existing Search Console queries define all demand the company might serve. A homepage category and focused service pages can perform different jobs; preserve their distinct scopes rather than creating another page for every wording variant.

When implemented, update the homepage title, description, social previews, relevant schema descriptions and visible summary together. Review translated homepages and company-fact summaries for the same positioning decision. Do not rewrite unrelated articles as an incidental part of this change.

## Claims and implementation dependencies

Several current statements deserve attention in the same homepage revision. The generic traffic-preservation promise in metadata is stronger than a controlled migration process can guarantee. The unnamed migration result in the hero is less useful than a linked, identified project with its conditions. The summary's broad fee/retainer statements need to accommodate optional services and third-party running costs. The review disclosure should state the shared individual owner plainly. These findings are detailed with source locations in the [current-page review](current-page-review.md).

The source facts also combine a general promise of production accounts under client control at handover with an allowance for agency-account hosting until transfer is requested or the engagement ends. The proposed ownership answer preserves code ownership while explaining that hosting arrangements follow the quote. Do not reproduce the conflicting absolutes.

The CLS constraint is real engineering work, not a reason to freeze the old sentence. Loading and hydrated CTA variants must use matching copy and stable reserved space at relevant widths. Google's guidance recommends reserving space for content that arrives later. After changing copy, test wrapping and loading behaviour instead of assuming an old minimum height still fits. [Google web.dev, CLS optimisation](https://web.dev/articles/optimize-cls)

Specifically, review 390, 768, 1024 and 1440px, the CTA fallback and loaded state, font loading, form layout, keyboard focus and the enquiry destination. The historical CLS scores in comments are not current test results. No application copy or deployment is changed by this report.

A separate inspection of the existing local production build covered those four widths. No horizontal overflow was observed. At 390px the two hero actions fit within the initial viewport; at 1440px the platform names occupy two large italic lines beside the inline form. These observations support the visual diagnosis without claiming a new CLS measurement or a test of the proposed wording. See the [render check](render-check.md), [desktop capture](screenshots/home-1440-hero.png) and [mobile capture](screenshots/home-390-hero.png).

## Evaluation

Before publication, show the proposed opening and first projects to a small set of likely buyers. Ask what the company builds, whether it can help a new or existing business website, what starts at $1,500, what the buttons do and which project establishes relevance. Five to eight interviews would be a practical qualitative exercise, not a statistical conversion sample. Fix misunderstandings before debating preferences for individual adjectives.

After publication, record qualified homepage enquiries, service fit, portfolio visits and form completion, segmented where possible by source and device. Bounce rate alone cannot distinguish a confused visitor from someone who found an answer and left. If traffic is insufficient for a useful randomised comparison, describe pre/post changes as observations with competing explanations rather than attributing them solely to the headline.

The recommended decision is broader website positioning with specific proof and service paths. The remaining uncertainty is performance in front of actual buyers, not whether the existing implementation permits a different sentence.

## Sources

| Publisher / record | Date | Contribution |
| --- | --- | --- |
| PandaCodeGen [homepage](../../../src/app/page.tsx), [hero](../../../src/components/sections/Hero.tsx), [company facts](../../../src/data/company-facts.ts), linked component records in [local review](current-page-review.md) | Inspected 15 Sep 2026 | Current copy, offer boundaries, metadata, CTA and layout dependencies. |
| [Webstacks](https://www.webstacks.com/), [Huemor](https://huemor.rocks/), [Orbit Media](https://www.orbitmedia.com/), [Lounge Lizard](https://www.loungelizard.com/) | Current pages accessed 15 Sep 2026; publication dates unstated | Business-facing message hierarchy; exact excerpts and destinations in the benchmark. |
| [Bejamas](https://bejamas.com/), [Naturaily](https://naturaily.com/), [FocusReactive](https://focusreactive.com/), [Blazity](https://www.blazity.com/) | Current pages accessed 15 Sep 2026; publication dates unstated | Technical-studio positioning; exact excerpts and destinations in the benchmark. |
| Anna Kaley and Jakob Nielsen, NN/G, [About Us Information on Websites](https://www.nngroup.com/articles/about-us-information-on-websites/) | 26 May 2019 | Qualitative evidence for clarity, authenticity and consistency. |
| Aurora Harley and Kim Flaherty, NN/G, [Get Started Stops Users](https://www.nngroup.com/articles/get-started/) | 20 Aug 2017 | CTA expectation and destination mismatch. |
| Google Search Central, [Influencing title links](https://developers.google.com/search/docs/appearance/title-link) | Updated 10 Dec 2025; accessed 15 Sep 2026 | Descriptive titles and sources used to generate title links. |
| Google web.dev, [Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls) | Updated 7 Feb 2025; accessed 15 Sep 2026 | Reserved space and dynamic-content layout stability. |

Pagepro and Bop Design were excluded from the verified homepage sample because their openings could not be established from accessible pages. The benchmark files state the access limits. Competitor observations establish visible choices, not private business outcomes.
