# Work-page redesign and wider page audit

Completed 14 September 2026. The work index has been redesigned and checked in a local production build. The wider service and page review is an audit with prioritized recommendations; those pages have not been broadly rewritten in this change.

## Review the result

The production preview started for this review is [the redesigned work page](http://127.0.0.1:3002/work). This address is local to the development machine and requires that preview process to remain running. No production deployment or Git push was performed.

- [Desktop preview](../../../audit/work-redesign-2026-09-14/order-desktop-top.png)
- [Mobile preview](../../../audit/work-redesign-2026-09-14/order-mobile-top.png)
- [Browser QA summary](../../../audit/work-redesign-2026-09-14/QA_SUMMARY.md)
- [Six-agency benchmark](competitor-benchmark.md)
- [Page-by-page audit and recommended changes](site-page-audit.md)

Screenshots and browser logs are local review artifacts under the ignored `/audit/` directory. The implementation and the research reports are in normal source/documentation locations.

## What changed

The work page starts with a short introduction and visible projects. Following the owner's requested ordering, Emblematic Studio is featured first, followed by NorthDeck, Panda Patches, its operations/CRM platform, Ladies 4 Jesus and MyCustomPatches. Panda CodeLab remains a supplementary text entry after those six. The visible sequence and structured-data ItemList match. Panda Patches, its operations platform and Panda CodeLab remain clearly identified as founder-affiliated work.

Six existing project screenshots are displayed with descriptive alternatives and stable dimensions. NorthDeck opens its actual live website; the other six entries link to their existing case studies. CodeLab uses a supplementary text link because its existing screenshot contains unsupported promises; that image was not reused in the new gallery. The operations screenshot retains its existing redactions.

Project names and recorded relationships come from the central case-study source. The gallery explains delivered scope without repeating unsupported or withdrawn outcome figures. The longer methodology blocks have been replaced by a short note directing readers to the relevant case records. Following review, a visible **How we publish results** link beneath the project collection now leads directly to `/editorial-policy#publication-controls`. That policy's existing first-party-results paragraph explicitly retains recorded permission, comparable before-and-after conditions, and stated dates, samples, tools and definitions.

The warm paper, charcoal and cognac identity remains, with larger previews, clearer typography, responsive layouts, section navigation, keyboard focus and reduced-motion support. The page has one closing enquiry section. A default-on footer option suppresses its extra sales panel on this page while retaining the existing footer behavior elsewhere.

The `/work` canonical and all case-study routes are preserved. Page metadata, the social-image text and CollectionPage schema now describe selected work. An ItemList represents the seven visible project destinations.

## What the comparison supports

[Bejamas](https://bejamas.com/work) and [Clay](https://clay.global/work) were inspected in actual desktop browser captures as well as through page extraction. Both give project imagery substantially more attention than explanatory policy text. Bejamas places technical labels around project cards; Clay uses broad and staggered artwork with concise captions. The accompanying benchmark also covers FocusReactive, Naturaily, 10up/Fueled and Human Made, including their case-study and service-page structures. Its access and sampling limits are explicit.

The wider audit covers the service hub, all eight canonical service details, the six case studies, commercial/company pages, localized/reference/policy families and blog templates. It inventories 136 page files and samples two long article bodies; it is not an exhaustive review of all 87 articles. Production desktop/mobile browser review additionally covers services, pricing and contact.

The next priorities are factual consistency across translations and case studies, real project proof near service offers, shorter pricing/service explanations, and earlier access to the mobile contact form. Each recommendation is tied to a specific page or shared component in the audit.

## Validation

- Production Next.js build passed, generating 155 static pages. It used the existing `.next-audit` isolation setting and included the real Inter/Playfair fonts after a network-enabled retry. No font or package dependency was changed.
- TypeScript and ESLint passed for the implementation. The public-claim and retired-claim checks passed.
- Metric and internal-link guards passed against the new isolated production output. The report-only Unicode check still reports existing site-wide dash usage; it found no invisible characters. This is not a claim that every pre-existing content issue is corrected.
- Browser checks passed at widths 1440, 768, 390 and 320: no horizontal overflow, failed image loads, console errors or page errors. All six case-study routes returned HTTP 200; NorthDeck's external destination and new-tab attributes were checked.
- Section links, visible keyboard focus, cookie dismissal and the absence of the duplicate footer CTA were checked. Desktop/mobile views and individual project sections were visually inspected with the production fonts.

No enquiry was submitted, email sent, or client account accessed during the review.

Follow-up publication-link check: the refreshed production build and targeted ESLint checks passed. At 390px and 1440px, keyboard activation of **How we publish results** reached the publication-controls heading below the fixed header; the link had a visible focus outline and no horizontal overflow. The permission, comparison and measurement requirements were verified in the destination text. Local evidence: `audit/work-redesign-2026-09-14/publication-link-qa.json`.

Follow-up project-order check: the production build and targeted ESLint checks passed. At 390px and 1440px, the displayed project sequence and ItemList positions matched the requested order. The relationship disclosures and publication-policy link remained present, with no horizontal overflow or browser errors. Local evidence: `audit/work-redesign-2026-09-14/order-qa.json`.
