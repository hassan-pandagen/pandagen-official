# Alignment status after the metadata corrections

Subsequent source check, 15 September 2026. This records the current local files after changes made since the original audit. It is not a fresh production-deployment check or a full audit of every article. No application files were changed during this status review.

## Now aligned in the checked source

- Root default title and description now cover custom websites, stores and software.
- The root, homepage and previously identified duplicate Organization nodes use shared `ORGANIZATION_DESCRIPTION` and `FOUNDING_DATE` facts.
- `/services` has broader metadata, CollectionPage data, H1 and introductory copy. Its unqualified 2–4-week meta-description claim is gone.
- Homepage metadata and its named social-image content now describe new websites and stores.
- `/about` and founder-profile metadata have broadened; their visible opening copy has not fully followed.
- `/ai-info` metadata and part of its FAQ have broadened. Its visible introduction and some FAQ clauses still lag.
- `llms.txt` primary-offer and small-store pricing text have been updated.
- The SEO/AEO hub now points to `/services/ai-seo` and separates the publication-policy link correctly. The earlier destination problem should not be reported as unresolved.

## Remaining targeted work

| Surface | Current source finding | Appropriate action |
| --- | --- | --- |
| `/about` | `AboutPageClient.tsx:158` still opens with “Reduce migration risk…”; line 161 introduces the whole company through migrations. | Broaden the H1 and introductory company description. Keep specific migration controls in their appropriate section. |
| `/ai-info` | `page.tsx:186` still introduces moves of existing WordPress/Webflow/GoHighLevel sites. The company FAQ at line 69 starts broadly but ends by limiting application/integration work to migration requirements. The price FAQ at line 77 still says Starter is built and updated by the agency. | Reconcile the complete introduction and FAQ answers with standalone new builds/software and the included client content editor. These are factual scope corrections, not extra keywords. |
| Founder profiles | Hassan's introduction at `about/hassan/page.tsx:120` and H2 at line 138 remain migration-led. Imran's introduction at `about/imran/page.tsx:114` also frames his role through migration. | Explain their responsibilities across the actual offer. Keep their names as H1s and retain genuine migration experience. |
| Social-image copy | `src/lib/seo/og.ts:26` says “Engineers Behind the Migration” for About; line 76 says “Migration Scope and Pricing” for Pricing. The root fallback `src/app/opengraph-image.tsx` still advertises a documented migration plan. | Update the applicable image text and alt text. Changing normal metadata does not edit these generated images. Determine actual usage before claiming every page currently displays the fallback image. |
| AEO playbook | `blog/aeo-playbook-built-into-every-website/page.tsx:329` and line 635 have narrow company blurbs. Its commercial section still sells build tiers and a 2–5-week build requirement rather than routing to the monthly AI SEO service. | Update the company facts and relevant service invitation; preserve the informational topic and URL. Shared navigation can already expose AI SEO, so this is a problem in the bespoke sales section. |
| AI visibility guide | `blog/ai-search-visibility-tracking/page.tsx:529` onwards routes its service discussion toward WordPress migration; line 570 asks for a migration plan. | Link the relevant AI SEO offer. Its explicitly labelled calendar read-through can stay a calendar action. |
| Blog CTAs | Divi and GoHighLevel use migration-plan wording on calendar buttons; WooCommerce uses it on an enquiry modal. | Match each label to its actual interaction and the reader's question. Do not apply one replacement to all CTA types. |
| AEO hub closing label | `blog/topic/[topic]/page.tsx` lacks an AI SEO entry in `MONEY_LABEL`; its generic fallback combines with the button prefix as “See the our services”. | Add a suitable label and verify the complete rendered sentence. The hub's informational H1 can stay. |

The blog-index title and H1 still describe migration, SEO and performance guides. This is not automatically a false company claim: it describes a collection of articles. Broader editorial framing is an optional navigation decision, not a required consequence of the homepage positioning change.

Similarly, the 2–4-week statement currently inspected on the Pricing page belongs to its **Growth card**. That qualified use matches company facts and should not be removed as though it were the previous service-directory-wide promise. Other service-page duration and ongoing-cost assertions need their own scope check rather than a global text replacement.

## What should remain specific

A WordPress migration service page should continue naming WordPress migration. A WooCommerce troubleshooting guide should answer its diagnostic question. Policy pages should describe their policies. Case studies should preserve the actual delivered work, relationships, dates and evidence limitations. None needs the homepage slogan inserted into its title or H1 merely to achieve consistency.

The remaining pass should align company facts, reusable commercial copy, selected company-page headings and social previews. It should not rename every page or claim that every article has now been fully reviewed.
