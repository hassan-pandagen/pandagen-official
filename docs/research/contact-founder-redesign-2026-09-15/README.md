# Contact, editorial policy and founder redesign

Implemented locally on 15 September 2026. This is a completed UI change, not a design proposal. No production deployment or live email delivery test was performed.

## Review the pages

- [Contact page](http://localhost:3000/contact): a direct founder introduction, Hassan and Imran's portraits, and a short enquiry form. Only name and email are required. Website and message are optional; phone, platform, timeline and budget sit inside an optional disclosure. A simple three-step explanation replaces the long opening qualification and commercial checklist. Mailing details and a link to pricing/project terms remain available.
- [Editorial policy](http://localhost:3000/editorial-policy): a restrained introduction, contents navigation, readable numbered standards and a dedicated corrections panel. The six publication controls, substantive policy text, correction email, existing dates and publication-controls anchor are preserved.
- [Hassan](http://localhost:3000/about/hassan) and [Imran](http://localhost:3000/about/imran): real portraits replace initial-letter placeholders. Those placeholders, rather than missing image files, caused the absent photos. Profile schema now identifies the same images. Biographies and evidence disclosures remain intact.

## Contact wording and shared forms

The main header, homepage hero, footer and founder-profile actions now say **Talk to the founders**. The compact mobile-header label is **Talk to us**. The contact page and English shared forms say **What would you like help with?** and **Send your message**, with the founder reply and no-obligation reassurance beside submission. Calendar actions remain labelled as calls.

Contact metadata, social-preview copy and ContactPage schema now describe the general enquiry route. The footer's closing message includes new websites, stores and workflows. The contact and policy pages omit the redundant footer sales panel.

The enquiry modal uses a smaller, quieter card, readable labels and optional phone disclosure. The homepage form follows the same English contact wording, and its email-labelled link now opens email. Existing translated form copy remains supplied by its locale dictionaries.

Existing attribution, form analytics, anti-spam timing, honeypot, request field names and server validation remain in use. Client input lengths now agree with the API. The modal success screen stays open until dismissed; closing invalidates the request session so a late response cannot close or overwrite a newly opened form. This cancels the client wait, not an email already accepted by the server.

This change covers shared CTAs and the named pages. It is not a blanket rewrite of bespoke article or service-page calls to action.

## Verification

- Final isolated Next.js production build passed, including TypeScript and generation of 156 static pages. It used `PANDACODEGEN_AUDIT_BUILD=1` and the existing `.next-audit` output option to avoid replacing the developer's build. The initial sandboxed build could not fetch Google Fonts; the network-enabled build passed. Search-index generation was not part of this isolated Next build.
- Targeted ESLint and diff whitespace checks passed for changed application files.
- All 21 existing form/request tests passed, including URL handling, timing, multipart parsing and rejected inputs. The public-claims gate passed.
- Browser checks cover 320, 390, 768, 1024, 1279 and 1440px. Contact and both founder pages render without horizontal overflow or runtime errors; founder images were checked for successful loading. Editorial navigation and its correction anchor were checked.
- Contact and modal validation, mocked error/retry/success paths and optional disclosures were exercised. All enquiry requests in browser tests were intercepted; no real test emails were sent. See [browser results](browser-qa.json) and the [QA script](browser-qa.cjs) for the recorded runs and final modal regression checks.
- The new hero CTA still fits the existing reserved row heights: 132px stacked, 60px wide and 84px at 1024–1279px. The fallback now includes matching labels and arrows. These are local layout measurements, not a production field-CLS result.

## Screenshots

- [Contact, desktop](contact-1440-top.png)
- [Contact, mobile](contact-390-full.png)
- [Enquiry modal](modal-1440-initial.png)
- [Editorial policy](editorial-policy-1440-top.png)
- [Hassan profile](about-hassan-1440-top.png)
- [Imran profile](about-imran-1440-top.png)

The screenshots show the local development server. Cookie consent was dismissed in the review browser; the site's consent behaviour was not changed.
