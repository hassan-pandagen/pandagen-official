# AI website builders: current capability check

Research date: 16 September 2026. Scope: official Wix/Wix Harmony, Framer and Webflow documentation and changelogs. This is a documentation review, not a controlled generation benchmark or an audit of customers' published sites. A documented capability does not establish that it appears in every first draft, is configured correctly, or works for every business. Conversely, a screenshot checklist is not evidence that a product lacks a feature.

## Decision

**Do not publish “AI builders miss metadata, sitemaps, mobile menus, accessibility, forms and tracking” as a general comparison.** These products supply many of those features, and their AI workflows have advanced substantially. Distinguish hosted site builders with existing production infrastructure from prompt-to-code app builders and from an individual poorly configured site.

A defensible service angle is **“What to check before launching an AI-built website”** or **“From an AI draft to a website your business can use.”** The sellable work is checking the actual customer journey, factual copy, integrations, permissions, event definitions, accessibility and handover. Neither custom code nor a human agency automatically gets those right.

## What changed recently

| Product | Dated primary evidence | Practical implication |
| --- | --- | --- |
| Wix Harmony | Harmony launched January 2026; current support documents describe its AI SEO workflow, accessibility wizard and automatic mobile adaptation | Its AI-generated pages sit on Wix's existing site-management capabilities, not just generated HTML |
| Framer | [Framer 3.0 launched 16 June 2026](https://www.framer.com/blog/framer-3/) with canvas-native Agents and branching | Comparing only the old Wireframer workflow misses the current product |
| Framer | [CMS List Field, 8 September 2026](https://www.framer.com/updates), includes Agent support for converting repeated fields and reconnecting canvas data | CMS authoring and site maintenance are improving alongside generation; this is not proof that every resulting content model is suitable |
| Webflow | [5 February 2026 update](https://webflow.com/fr/updates/ai-site-builder-evolved) added multi-page creation, animations and Enterprise access | It is no longer accurate to describe its AI builder as only a homepage theme generator |
| Webflow | [29 October 2025 release](https://webflow.com/updates/ai-seo-aeo) introduced AI-assisted SEO/AEO audits and generation; current help updated 11 September 2026 | Titles, descriptions, alt text and schema are explicitly addressed by product tooling |
| Webflow | [20 August 2026 sitemap update](https://webflow.com/updates/lastmod-timestamp) added per-page lastmod and publishing improvements | Even routine technical SEO infrastructure is still being developed |

The Webflow sitemap announcement also makes broad predictions about indexing and AI citation. This report uses it only as evidence of the shipped sitemap changes, not of those predicted outcomes.

## Wix / Wix Harmony

### SEO and discovery

Harmony's [SEO workflow](https://support.wix.com/en/article/wix-harmony-editor-optimizing-your-site-with-seo) asks for business information and topics, then supports AI or manual page optimisation, including focus keywords and meta descriptions. Users review and approve recommendations. Search Console verification and social-share settings are available. The document explicitly identifies Harmony as the editor released in January 2026; it does not expose a separate last-updated date.

Platform-wide Wix documentation states that [default canonical URLs are created automatically](https://support.wix.com/en/article/changing-the-canonical-tags-for-your-sites-pages), [sitemaps are generated and updated automatically](https://support.wix.com/en/article/understanding-your-sites-sitemap-file), and [robots.txt is provided and editable](https://support.wix.com/en/article/editing-your-sites-robotstxt-file). The canonical editing instructions explicitly show Wix Editor/Studio UI, so do not assume every advanced-editor path is identical in Harmony. The supported infrastructure is sufficient to reject “Wix lacks canonicals/sitemaps/robots.”

The assisted [Search Console connection](https://support.wix.com/en/article/submitting-your-sitemap-and-urls-directly-to-search-engines) requires a Premium plan and connected domain. That restriction concerns Wix's connection workflow; it is not a claim that free sites cannot be indexed or that Google's verification generally requires paying Wix.

### Responsive design, interaction and accessibility

[Harmony mobile documentation](https://support.wix.com/en/article/wix-harmony-editor-adjusting-your-site-for-mobile) describes automatic responsive adaptation, mobile-specific adjustments and an automatic hamburger-menu arrangement for header elements. It also tells owners to preview and fine-tune. Therefore “AI builders miss a mobile menu” is not a defensible product-wide claim.

The [Harmony Accessibility Wizard](https://support.wix.com/en/article/wix-harmony-editor-using-the-accessibility-wizard) covers focus indicators and skip-to-content tasks as well as page issues. It explicitly excludes areas including CMS, third-party apps, Velo, side carts and checkout pages, and calls for manual checks. **The limitation is incomplete coverage, not absence of accessibility tooling.** Meaningful keyboard, screen-reader, contrast and zoom testing still requires checking the finished experience.

### Forms, consent and integrations

Harmony's [element library](https://support.wix.com/en/article/wix-harmony-editor-adding-elements) includes contact/subscription forms, menus and Wix business applications. Its [embed controls](https://support.wix.com/en/article/wix-harmony-editor-embedding-a-link-or-html-code) include accessible names and a cookie category for embedded content, while external code support is limited.

Wix has a [Privacy Center and cookie banner](https://support.wix.com/en/article/cookies-and-your-wix-site). Added apps and integrations can introduce additional cookies. An actual implementation still needs an inventory and behaviour checks. Do not equate “banner visible” with “all scripts correctly controlled.” [Wix's Meta troubleshooting guide](https://support.wix.com/en/article/troubleshooting-facebook-pixel-issues) specifically warns about duplicate integrations and manual code interfering with Conversions API, and explains consent-dependent Pixel loading.

For ownership comparisons, [Harmony's page-management documentation](https://support.wix.com/en/article/wix-harmony-editor-adding-and-managing-pages) says sites/pages cannot be downloaded for offline editing. This is a concrete portability distinction. It does not imply that Wix customers lack ownership of their business content.

## Framer

### Generation now goes beyond an initial layout

[Framer's June 2026 AI-credits announcement](https://www.framer.com/blog/ai-credits-simpler-plans-and-lower-prices/) describes Agent work on responsive layouts and interactions, copy and metadata, CMS organisation, broken-link/accessibility/style audits and localisation. Agent tasks consume credits, with allowances on plans and further credits available. These are vendor-described capabilities, not independently measured audit accuracy.

The [current Agent guide](https://www.framer.com/help/articles/how-to-use-agents/), updated 7 August 2026, recommends working section by section, selecting context and refining results. It explicitly supports screenshots/assets and generating content, layouts, interactions and code. That workflow itself acknowledges that effective direction and review remain part of the work.

### SEO infrastructure

[Framer's AI-readability documentation](https://www.framer.com/help/articles/make-site-readable-by-ai-agents/) states pages are pre-rendered into HTML, including headings, metadata, social cards, canonical URLs and any supplied JSON-LD. Robots.txt and sitemap.xml are generated automatically. Users can control indexing. It also documents markdown delivery. Those are platform capabilities; they do not prove a citation advantage, and structured data must still be supplied correctly.

Thus the site must not claim that switching away from Framer is inherently necessary for HTML-readable content, AI crawling or a sitemap. The distinction must be an observed need on the specific site.

### Accessibility, forms and attribution

Framer's [accessibility guide](https://www.framer.com/help/articles/guide-to-web-accessibility-in-framer/) describes semantic tags and accessibility controls while making clear that authors assign meaning to elements. Tool availability does not establish the semantics or keyboard flow of an individual site.

There are [native forms](https://www.framer.com/help/articles/how-can-i-add-a-contact-form-to-my-framer-website/) and [default form spam protection](https://www.framer.com/help/articles/how-framer-s-built-in-form-spam-protection-works/). Configuring and testing the intended recipient, CRM destination, validation and failure experience remains a project responsibility.

Framer also offers [automatic UTM/GCLID capture in native forms](https://www.framer.com/help/articles/track-utm-and-google-ads-ids/), documented 7 August 2026. It requires enabling campaign tracking and publishing. The FAQ says **Enterprise plans**; the introduction contains a duplicated “Enterprise and Enterprise” label, so do not invent a second eligible tier. Additional custom parameters can use hidden fields and custom implementation. This directly rebuts “builders cannot do lead attribution,” while leaving substantial work in downstream CRM reconciliation and event definitions.

[Framer's cookie guidance](https://www.framer.com/help/articles/gdpr-and-cookies/), updated 7 August 2026, distinguishes its own cookieless analytics from added third-party services. Treat it as the vendor's implementation description, not a blanket legal determination for every customer site. The customer's particular integrations and processing still matter.

## Webflow AI

### Site creation and current limits

The [builder guide](https://help.webflow.com/hc/en-us/articles/38840145286035-Build-a-site-with-Webflow-s-AI-site-builder), updated 11 September 2026, describes multi-page structure/content/theme generation. It is available for new sites and existing AI-created sites, not arbitrary existing non-AI-built sites. Without a paid Site or Workspace plan, the site is limited to two pages; a paid plan permits up to five initially generated pages, with further pages afterwards. Site-builder generation itself does not consume Webflow AI credits under this current document.

### SEO and accessibility

The [AI audit guide](https://help.webflow.com/hc/en-us/articles/45696502240147-Audit-and-improve-SEO-AEO-with-Webflow-AI), updated 11 September 2026, documents missing title/description/alt/schema checks and AI generation. A paid Site plan or paid Workspace is required; AI must be enabled; generation consumes credits. It explicitly requires review of generated text/schema, excludes alt-text checks in components, lightboxes and CMS, and generates only for the primary locale. “No issues found” therefore means the tool's checked fields passed, not that the whole site is accessible, accurate or production-ready.

Webflow supports [automatic sitemaps when enabled](https://help.webflow.com/hc/en-us/articles/33961355371667-Create-a-sitemap-in-Webflow), [configurable global and page-level canonical tags](https://help.webflow.com/hc/en-us/articles/33961263684115-Set-canonical-tags-to-improve-SEO), and [robots rules](https://help.webflow.com/hc/en-us/articles/41954080897683-Set-robots-txt-rules). These require appropriate configuration; do not label all three “automatic with no setup.” The current canonical document is dated 19 May 2026 and sitemap help 19 August 2026.

### Real forms and operational limits

[Webflow form processing](https://help.webflow.com/hc/en-us/articles/33961344521235-Form-submissions) exists natively. Its free Starter Site plan has 50 total submissions; other Site plans have unlimited submissions under the current help. A custom form action bypasses Webflow processing and its notifications. That is a useful example of a capability existing while a particular integration can still fail.

[Spam controls](https://help.webflow.com/hc/en-us/articles/34277758554771-Prevent-spam-in-form-submissions), dated 31 October 2025, include bot blocking, filtering and CAPTCHA options. [Delivery troubleshooting](https://help.webflow.com/hc/en-us/articles/40586232381331-Why-am-I-not-receiving-form-notification-emails), dated 11 March 2026, distinguishes form submission failure from notification-delivery failure, and states filtering is enabled by default on new sites. “The button works” is therefore insufficient acceptance evidence on custom and builder sites alike.

## How to use the screenshot lists honestly

| Checklist idea | Appropriate interpretation |
| --- | --- |
| Metadata, sitemap, canonical, robots, mobile menu | Baseline checks of the finished site. Existing builder capabilities, not automatic agency differentiators |
| Hover states | Check equivalent keyboard focus, touch behaviour and errors as well; hovering alone is not evidence of accessibility |
| Forms and newsletter signup | Include only if useful; test actual delivery, consent choices, spam handling and success/error states |
| UTM tracking | Check campaign capture and downstream record association. Merely adding UTMs to internal links is not an attribution strategy |
| FAQ, sticky header, scroll progress, dark mode, floating contact, print styles | Context-dependent product decisions. Missing one is not by itself a defect |
| Short paragraphs, specific headings, evidence and matched CTAs | Useful editorial review principles across every building method |
| Ban em dashes, always use 1–3 bullets, “write for lazy people” | Stylistic preferences, not SEO/accessibility requirements or established conversion laws |
| “Handle objections before CTA” | Put relevant reassurance near the decision, but don't prevent a ready buyer from contacting you earlier |
| Updated dates on posts | Show meaningful editorial dates; do not fabricate freshness merely to make content look current |

## Suggested commercial/editorial framing

Draft angle, not a new published promise:

> **Before you launch, check what happens after the click.**
>
> AI builders can produce useful layouts and handle many technical basics. Your business still needs accurate content, working enquiries, the right integrations and an editing workflow your team understands. We review the finished site, identify what needs attention and agree the work before changing it.

Possible article title: **“AI-built website checklist: what to test before launch.”** Possible section title on a relevant service page: **“Already built a site with AI?”** Do not insert a broad anti-AI comparison into every service page or change the homepage positioning merely to follow these screenshots.

If a stronger comparative claim is wanted, use a controlled test: name the builder/version/plan/date, preserve prompts and generated output, define an allowed revision budget, run the same acceptance tasks, and publish both strengths and failures. This documentation review does not establish how often any builder misses a task or whether newer releases improve conversion rates.
