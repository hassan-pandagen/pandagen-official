# FRIC Multilingual and i18n Technical Evidence Pack

**Product reviewed:** PandaCodeGen production website and its current repository  
**Verification date:** 31 July 2026  
**Standard applied:** only repository-backed behavior that was also independently testable on the live website is described as implemented. Next.js capabilities that are merely possible are not counted.

## Executive verdict

PandaCodeGen currently has **three live languages: English, French and German**. Five page families are available in all three languages: home, services, pricing, contact and about. English remains unprefixed; French uses `/fr`; German uses `/de`. All 15 variants returned HTTP 200 and passed a live check for the correct initial `<html lang>`, self-referencing canonical and reciprocal `en`, `fr`, `de`, `x-default` alternates.

The implementation is genuine, statically rendered and search-readable without client JavaScript. However, it is **not yet a five-language system**, is **not backed by an independently publishable multilingual CMS**, and does **not completely prevent mixed-language output**. French and German are explicitly marked in source as draft translations pending native review. Localized pages retain English-only legal links and a few English strings; server form errors can leak English; localized social metadata currently reuses the English homepage image and English image alt; sitemap URLs exist but sitemap-level hreflang does not.

## Validation table

| Validation Area | File Path | What It Proves | Redacted Evidence | Live Verification URL | Safe to Share? | Remaining Gap |
|---|---|---|---|---|---|---|
| 1. Live languages and locale routes | `src/lib/i18n/config.ts`; `src/app/fr/**/page.tsx`; `src/app/de/**/page.tsx` | `en`, `fr`, `de` are registered. Ten prefixed locale pages are explicit App Router files and declare `force-static`; the five English counterparts remain unprefixed. | `locales = ["en", "fr", "de"]`; `home: { en: "/", fr: "/fr", de: "/de" }`; `dynamic = "force-static"` | [/](https://www.pandacodegen.com/), [/fr](https://www.pandacodegen.com/fr), [/de](https://www.pandacodegen.com/de), plus the route matrix below | **Email-safe.** Hide no value in this excerpt. Screenshot: three browser tabs at the home URLs. Caption: “English, French and German PandaCodeGen pages independently available in production.” | Only five page families are translated. There is no `/en` route. French and German source files say “Draft translation, pending native review.” |
| 2. i18n routing architecture | `src/lib/i18n/config.ts`; `src/proxy.ts` | Locale recognition is a typed path lookup. English is the default for unprefixed URLs. Unsupported paths are handled by normal App Router 404 behavior. Proxy contains security headers, not locale routing. There is deliberately no IP or `Accept-Language` redirect. | `pageFromPathname()` searches only registered route values; otherwise returns `null`. | [/fr/not-a-page](https://www.pandacodegen.com/fr/not-a-page) returns 404; `/es` and `/en` also returned 404 during verification | **Config excerpt email-safe; full proxy live-call-only.** Hide CSP vendor inventory and unrelated proxy logic. Screenshot: source tree plus one 404. Caption: “Locale routes are explicit and unsupported locale paths do not resolve.” | No middleware locale negotiation or redirect. `localeFromPathname()` alone treats an unknown prefix as English, so route validity depends on the filesystem router rather than that function. |
| 3. Translation dictionaries and sources | `src/lib/i18n/dictionaries/index.ts`; `types.ts`; `fr.ts`; `de.ts` | French and German copy is file-based TypeScript and loaded through a typed `Record<TranslatedLocale, Dictionary>`. Navigation, CTAs, page sections, FAQs, metadata and form copy are represented by the dictionary contract. `npm run typecheck` passed on 31 July 2026. | `const dictionaries: Record<TranslatedLocale, Dictionary> = { fr, de };` | [/fr/services](https://www.pandacodegen.com/fr/services), [/de/services](https://www.pandacodegen.com/de/services) | **Index/type excerpts email-safe; complete dictionaries live-call-only.** Hide full proprietary copy. Screenshot: collapsed `dictionaries` folder and small typed index. Caption: “Typed, separate French and German content sources used by production pages.” | Missing keys fail TypeScript only when typechecking/building. There is no runtime fallback or missing-key logger. Types cannot detect an English sentence stored in a valid string. English uses separate components rather than an English dictionary. Both translations await native review. |
| 4. Language switcher | `src/components/i18n/LocaleSwitcher.tsx`; `src/lib/i18n/config.ts` | Detects the current mapped page, links to the equivalent page in each locale, uses native links, `hrefLang`, `lang`, `aria-current` and a labelled `<nav>`. It renders nothing where no equivalent translated route exists. Flex wrapping supports narrow layouts. | `href={routes[page][locale]}` and `aria-current={isActive ? "true" : undefined}` | [/fr/pricing](https://www.pandacodegen.com/fr/pricing) | **Email-safe.** Screenshot: switcher on French pricing at desktop and mobile width. Caption: “Accessible language switcher preserves the equivalent page across English, French and German.” | Default fallback label `Language` is English, though localized pages pass a translated label. No automated keyboard test was found; accessibility is based on native link semantics. It is hidden rather than offering fallback on untranslated pages. |
| 5. Localized navigation and interface | `src/components/i18n/LocalePage.tsx`; `src/components/forms/HeroLeadForm.tsx`; dictionary files | Header navigation, mobile navigation, mapped footer navigation, CTAs, page content, FAQs and most form UI are dictionary-driven. English-only destinations are explicitly marked with `lang="en"`. | `{dict.nav[item]}`, `{dict.common.ctaPrimary}`, `<HeroLeadForm copy={dict.leadForm} locale={locale} />` | [/fr/contact](https://www.pandacodegen.com/fr/contact), [/de/contact](https://www.pandacodegen.com/de/contact) | **Small binding snippet email-safe; full component live-call-only.** Screenshot: French and German header, form and footer. Caption: “Localized navigation, CTA and lead-form content rendered from locale-specific dictionaries.” | Footer copyright and `Privacy`, `Terms`, `Cookies`, `Security` remain English. Blog/legal pages and search are English-only. The form has English screen-reader text “opens in a new tab”; English API error text can override the translated fallback; browser-native validation follows browser locale. No localized visible breadcrumbs or localized search interface exists. |
| 6. Localized metadata | `src/lib/i18n/metadata.ts`; `src/components/layout/HtmlShell.tsx`; `src/components/i18n/LocalePage.tsx`; `src/app/layout.tsx` | French/German title, description, OG title/description/locale, Twitter title/description, canonical and alternates are generated from dictionaries. Raw HTML has the correct `html lang`. JSON-LD WebPage and FAQ objects carry locale-specific `inLanguage`. Root robots policy is index/follow and inherited. | `title: { absolute: meta.title }`; `locale: localeTags[locale]`; `<html lang={locale}>`; `inLanguage: localeTags[locale]` | View source: [/fr](https://www.pandacodegen.com/fr), [/de](https://www.pandacodegen.com/de) | **Email-safe.** Screenshot: DevTools Elements/Network response showing localized title, description, OG locale and `html lang`. Caption: “Locale-specific metadata and language signals are present in the server response.” | Localized pages use `ogImageForPath(routes[page].en)`. Live FR/DE output therefore reuses the English homepage OG image and English alt “SEO-Safe Website Migrations…”. No locale-specific robots override exists. |
| 7. hreflang | `src/lib/i18n/config.ts`; `src/lib/i18n/metadata.ts`; the five English page files | Each translated page emits a reciprocal set for `en`, `fr`, `de`, plus `x-default` to English. The five English pages call the same alternate generator. A 15-page live matrix reported zero canonical/lang/hreflang issues. | `for (const locale of locales) languages[locale] = urlFor(page, locale); languages["x-default"] = urlFor(page, defaultLocale);` | Page source: [/fr/services](https://www.pandacodegen.com/fr/services) | **Email-safe.** Screenshot: page source search for `hreflang`. Caption: “Reciprocal en/fr/de and x-default alternates in initial HTML.” | Present at page level only. The XML sitemap has no `xhtml:link` alternate relationships. Pages without a translated equivalent intentionally receive no locale alternate set. |
| 8. Locale-specific canonical URLs | `src/lib/i18n/config.ts`; `src/lib/i18n/metadata.ts` | `alternatesFor(page, locale)` creates a self-referencing canonical using the production `www` host; root is normalized without a trailing slash and mapped inner pages have no trailing slash. | `canonical: urlFor(page, locale)` | [English services](https://www.pandacodegen.com/services), [French services](https://www.pandacodegen.com/fr/services), [German services](https://www.pandacodegen.com/de/services) | **Email-safe.** Screenshot: the canonical in source for those three tabs. Caption: “Each locale canonicals to itself rather than to English.” | The guarantee applies to the five translated page families reviewed, not the entire English-only site. Host/trailing-slash behavior also depends on deployment redirects outside this module. |
| 9. Locale-aware sitemap | `src/app/sitemap.ts`; `src/lib/i18n/config.ts` | The public sitemap includes all ten FR/DE URLs for the five translated page families; 117 URLs and ten prefixed locale URLs were counted live. URLs are allowlisted/generated, so arbitrary and 404 routes are omitted. | `localizedPages.flatMap(page => (["fr", "de"] as const).map(locale => ({ url: ... })))` | [sitemap.xml](https://www.pandacodegen.com/sitemap.xml) | **Email-safe.** Screenshot: XML search for `/fr/` and `/de/`. Caption: “French and German production URLs included in PandaCodeGen’s generated sitemap.” | The locale array is hardcoded again in this file. No sitemap-level alternate relationships are emitted. Exclusion is by allowlist/omission, not a centralized indexability filter, so “every non-indexable URL is automatically excluded” is unproven. |
| 10. Initial HTML and AI readability | Static route files; `LocalePage.tsx`; `metadata.ts`; `HtmlShell.tsx` | Raw HTTP responses for English, French and German contained translated H1/body headings, metadata, localized internal links, canonical, hreflang and JSON-LD before client JavaScript. All localized routes are forced static. | Verification commands are provided below. | [/](https://www.pandacodegen.com/), [/fr](https://www.pandacodegen.com/fr), [/de](https://www.pandacodegen.com/de) | **HTTP evidence email-safe; full response live-call-only.** Screenshot: terminal output from the verification script. Caption: “Translated content and SEO signals visible in raw HTML without executing JavaScript.” | This proves server/static HTML availability, not how any specific AI system will rank, cite or interpret it. |
| 11. Mixed-language and leakage prevention | Dictionary types/index; `LocalePage.tsx`; `HeroLeadForm.tsx`; server form handler | Typed dictionaries block omitted required keys at build time; mapped navigation prevents cross-locale route mismatch; English-only links are sometimes explicitly annotated. A source audit also found the leakage listed here. | `Record<TranslatedLocale, Dictionary>`; server-facing error content should be shown only as `{ error: "[English message]" }` externally. | [/fr/contact](https://www.pandacodegen.com/fr/contact) | **Typed mechanism email-safe; detailed server handler should not be shared externally.** Hide endpoint name, vendor details, addresses and operational controls. Screenshot: live call showing localized UI, then discuss exceptions verbally. Caption: “Build-time dictionary coverage with documented English-only exceptions.” | Complete leakage prevention is not achieved: English footer/legal labels, screen-reader text, original-language reviews, English-only blog links and potentially English server errors remain. Dictionaries are draft and have no automated wrong-language detector. |
| 12. Independent publishing and governance | `src/lib/i18n/dictionaries/fr.ts`; `de.ts`; `index.ts`; `package.json` | Locale files can be edited independently in source. No production multilingual CMS SDK/configuration was found. Publishing is repository/build/deploy based. | `import fr from "./fr"; import de from "./de";` | Live pages prove deployment, not independent workflow | **Architecture summary email-safe; repo workflow live-call-only.** Screenshot: two separate dictionary files. Caption: “Separate locale sources, currently released through the application deployment pipeline.” | No per-locale draft/publish state, reviewer/publisher roles, independent dates, CMS preview or independent release. FRIC needs these configured; do not claim they already exist. |
| 13. Scale from three to five languages | `config.ts`; dictionary index/types; explicit `src/app/fr` and `src/app/de` trees; `sitemap.ts`; `LocaleSwitcher.tsx` | Core route types, alternates, switcher and metadata iterate a central locale list and are partly generalized. The actual page tree, dictionary imports and sitemap are still explicit/hardcoded. | `locales.map(...)` is generalized; `{ fr, de }`, explicit route records/files and `["fr", "de"]` are not. | Current three-language URLs only | **Email-safe architectural assessment.** Screenshot: central registry beside explicit locale folders. Caption: “Reusable locale registry with identified integration points for additional languages.” | Adding two languages requires registration/tags/names, paths for five page families, two complete typed dictionaries, ten page entry files or a `[locale]` refactor, sitemap update, metadata/hreflang tests, switcher QA and native review. Estimated engineering integration: **2–4 working days excluding translation creation/approval**, plus content and linguistic QA. This is an estimate, not proof of current capability. |
| 14. FRIC-specific implementation plan | Reusable concepts in `src/lib/i18n/*`; **new FRIC CMS/workflow implementation required** | PandaCodeGen proves independent locale URLs, server-rendered translated HTML, dictionary-driven UI, localized metadata, self-canonical and reciprocal page-level hreflang for three languages. These patterns can inform FRIC. | Reuse the central locale registry/route matrix/alternate generator concept; do not copy private business components. | FRIC test URL: **not yet available** | **Plan summary email-safe; detailed model/permissions live-call-only.** Hide FRIC credentials, preview tokens, internal document IDs and environments. Screenshot after delivery: five locale tabs plus CMS approval states. Caption: “FRIC test environment validating five independently governed locale variants.” | FRIC still needs a CMS content model, at least five locale registrations, locale-specific draft/review/publish/preview, no-silent-fallback rules, localized internal links, sitemap alternate relationships, automated leakage/SEO tests and native approval. |

## Complete live route matrix

All ten localized URLs returned `200 text/html` on 31 July 2026.

| Page | English | French | German |
|---|---|---|---|
| Home | <https://www.pandacodegen.com/> | <https://www.pandacodegen.com/fr> | <https://www.pandacodegen.com/de> |
| Services | <https://www.pandacodegen.com/services> | <https://www.pandacodegen.com/fr/services> | <https://www.pandacodegen.com/de/services> |
| Pricing | <https://www.pandacodegen.com/pricing> | <https://www.pandacodegen.com/fr/pricing> | <https://www.pandacodegen.com/de/pricing> |
| Contact | <https://www.pandacodegen.com/contact> | <https://www.pandacodegen.com/fr/contact> | <https://www.pandacodegen.com/de/contact> |
| About | <https://www.pandacodegen.com/about> | <https://www.pandacodegen.com/fr/about> | <https://www.pandacodegen.com/de/about> |

The routing pattern is **unprefixed English + prefixed French/German through explicit App Router page files**. It is not `app/[lang]`, middleware routing or automatic locale negotiation.

## A. Confirmed live evidence

- English, French and German are independently openable in production across the five page families above.
- All ten French/German pages returned HTTP 200.
- All 15 variants returned the expected initial `<html lang>`.
- All 15 variants returned a self-referencing canonical.
- All 15 variants returned reciprocal `en`, `fr`, `de` and `x-default` alternate links in initial HTML.
- French and German initial HTML contains localized H1/body headings, page title, meta description, OG/Twitter text, locale-specific internal links and JSON-LD `inLanguage`.
- Locale routes are explicitly forced static.
- The accessible switcher maps the same page between languages and disappears where no equivalent route exists.
- The live sitemap contains every implemented French/German URL.
- Unsupported `/es`, `/en`, `/fr/not-a-page` and `/de/not-a-page` requests returned 404 when tested.
- The typed dictionary structure passes the current TypeScript check.

Representative live metadata observed:

| Signal | English home | French home | German home |
|---|---|---|---|
| `html lang` | `en` | `fr` | `de` |
| Title | `Outgrown WordPress or Wix? Migrate to Custom Next.js \| PandaCodeGen` | `Migration de site web sans perte de référencement \| PandaCodeGen` | `Website-Migration ohne SEO-Verluste planen \| PandaCodeGen` |
| JSON-LD `inLanguage` | `en-US` | `fr-FR` | `de-DE` |
| Canonical | `https://www.pandacodegen.com` | `https://www.pandacodegen.com/fr` | `https://www.pandacodegen.com/de` |

## B. Screenshot list

1. **English home:** full viewport with English H1 and switcher. Caption: “Production English page, served at the unprefixed canonical URL.”
2. **French home:** same viewport width with French H1. Caption: “Production French page with translated content and `/fr` locale URL.”
3. **German home:** same viewport width with German H1. Caption: “Production German page with translated content and `/de` locale URL.”
4. **Language switcher:** French pricing page, with French marked current; repeat at 390 px mobile width. Caption: “Language switcher preserves the pricing-page context across all live locales.”
5. **Page-source hreflang:** view source of `/fr/services`, search `hreflang`. Caption: “Reciprocal English, French, German and x-default alternates emitted in initial HTML.”
6. **Localized metadata:** DevTools or raw source for `/fr` and `/de`, showing title, description, OG locale and canonical. Caption: “Localized metadata and self-canonical signals in production HTML.”
7. **Sitemap:** public XML with one `/fr/` and one `/de/` match visible. Caption: “Generated sitemap includes all implemented locale URLs.”
8. **Code structure:** IDE tree limited to `src/lib/i18n` and the `src/app/fr`, `src/app/de` route folders. Caption: “Typed locale configuration, separate translation sources and explicit static locale routes.”
9. **Raw-HTML verification:** terminal showing status, `lang`, H1, canonical and four alternates for the three home URLs. Caption: “Server response contains translated content and SEO signals without client-side execution.”

Do not include credentials, `.env` files, terminal environment output, Git remote details, private repository URL, server handler contents or unrelated client files in a screenshot.

## C. Email-safe snippets

These are the smallest useful excerpts. File paths may be included; line numbers should be refreshed immediately before sending if the repository changes.

**Locale registry and routes — `src/lib/i18n/config.ts`:**

```ts
export const locales = ["en", "fr", "de"] as const;
export const routes = {
  home: { en: "/", fr: "/fr", de: "/de" },
  services: { en: "/services", fr: "/fr/services", de: "/de/services" },
  // pricing, contact and about follow the same map
};
```

**Reciprocal alternates — `src/lib/i18n/config.ts`:**

```ts
for (const locale of locales) languages[locale] = urlFor(page, locale);
languages["x-default"] = urlFor(page, defaultLocale);
```

**Typed dictionaries — `src/lib/i18n/dictionaries/index.ts`:**

```ts
export type TranslatedLocale = Exclude<Locale, "en">;
export const dictionaries: Record<TranslatedLocale, Dictionary> = { fr, de };
```

**Equivalent-page switching — `src/components/i18n/LocaleSwitcher.tsx`:**

```tsx
<Link href={routes[page][locale]} hrefLang={locale} lang={locale}
  aria-current={isActive ? "true" : undefined}>
  {localeNames[locale]}
</Link>
```

**Localized metadata — `src/lib/i18n/metadata.ts`:**

```ts
return {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: alternatesFor(page, locale),
};
```

**Static locale route — representative locale page:**

```tsx
export const dynamic = "force-static";
export const metadata = localeMetadata("fr", "home");
```

### Safe independent verification commands

```bash
curl -s https://www.pandacodegen.com/    | grep -E '<html|<title|<h1|canonical|hreflang|inLanguage'
curl -s https://www.pandacodegen.com/fr  | grep -E '<html|<title|<h1|canonical|hreflang|inLanguage'
curl -s https://www.pandacodegen.com/de  | grep -E '<html|<title|<h1|canonical|hreflang|inLanguage'
curl -s https://www.pandacodegen.com/sitemap.xml | grep -E '/fr|/de'
```

On Windows PowerShell, use `curl.exe`; PowerShell's `curl` alias may behave differently.

## D. Live-call-only evidence

- Full dictionary schemas or complete 747-line French/German dictionary files.
- Full `LocalePage.tsx` implementation and complete private repository tree.
- Build/typecheck logs beyond the short pass result.
- Detailed form-error path and server-side handler behavior.
- Full proxy/CSP configuration and vendor inventory.
- Proposed FRIC CMS schemas, roles, workflow and preview architecture.
- Any repository history, deployment configuration, internal analytics logic or proprietary components.

The live call should screen-share only the relevant folders, with environment files, Git remotes, terminals containing secrets and unrelated workspaces closed.

## E. Claims we must not make

- “Five languages are already live.” Only English, French and German are live.
- “The entire PandaCodeGen website is multilingual.” Only home, services, pricing, contact and about are translated.
- “Translations are final/native-approved.” Both locale files explicitly say native review is pending.
- “Each language can be published independently in a CMS.” No multilingual CMS publishing workflow exists today.
- “Mixed-language strings are fully prevented.” Documented English-only UI and error paths remain.
- “Every validation message is localized.” Server and browser-native messages can differ from the site locale.
- “Every social image is localized.” FR/DE currently use the English homepage OG image and English image alt.
- “hreflang is present in both HTML and sitemap.” It is present in initial HTML, not in the XML sitemap.
- “The sitemap automatically enforces indexability.” It is an explicit allowlist/generator, not a shared robots-indexability filter.
- “Every structured-data field is translated.” `inLanguage` and localized page/FAQ content are present, but organization/address/brand facts remain shared and some original-language reviews remain English by design.
- “There is automatic locale detection or browser-language redirect.” There is deliberately none.
- “No JavaScript is used.” The pages are statically/server rendered, but interactive components still hydrate on the client.
- “This guarantees AI citation, search rankings or conversion results.” The evidence proves crawlable, locale-signalled HTML only.

## F. Recommended FRIC wording

> PandaCodeGen currently operates production English, French and German versions across five core page families, using explicit locale URLs, statically rendered translated HTML, typed locale content, accessible equivalent-page switching, locale-specific metadata and self-referencing canonical URLs with reciprocal `en`, `fr`, `de` and `x-default` hreflang in the initial response. This live implementation proves the routing, rendering and technical SEO patterns at three-language scale; it does not claim that five languages or independent CMS publishing are already deployed. For FRIC, we will extend the reusable locale-registry and metadata concepts into a minimum five-locale implementation with separate CMS-managed locale documents, per-language draft/review/publish and preview, explicit no-silent-fallback rules, localized internal linking, reciprocal hreflang, locale-aware sitemaps and automated raw-HTML, leakage and SEO validation in FRIC’s test environment before approval.

## FRIC implementation plan

1. Define FRIC's locale registry, default locale, URL policy and page-equivalence matrix for at least five languages.
2. Use separate CMS documents per locale where independent dates, permissions and releases are required; connect translations through a stable translation-group identifier.
3. Add per-locale draft, review, approved and published states, with reviewer/publisher roles and token-protected previews.
4. Render only approved localized content at its locale URL. Do not silently substitute body copy from another language. If a locale is unavailable, hide that switcher option or show an explicit, approved unavailable-state page.
5. Generate locale-specific title, description, OG/Twitter assets and alt, canonical, `html lang` and structured-data `inLanguage` from the approved locale document.
6. Generate reciprocal hreflang only among published equivalents, with an agreed `x-default`, in both initial HTML and the locale-aware sitemap.
7. Resolve every internal navigation, CTA and breadcrumb against the equivalent locale route; mark intentional original-language/legal destinations explicitly.
8. Add automated tests for route status, raw translated H1/body, metadata, self-canonical, reciprocal hreflang, sitemap membership, missing keys, unexpected-language strings and untranslated UI.
9. Complete native-language content review and accessibility/keyboard/mobile QA for every locale before production release.

## Honest scaling estimate

For the current five-page PandaCodeGen pattern, integrating two additional approved translations into the existing file-based architecture is approximately **2–4 engineering working days**, excluding translation production and native review. The work includes registry/routes, two typed dictionaries, ten explicit route files or a small dynamic-locale refactor, metadata/hreflang/sitemap expansion and automated/browser QA. A FRIC-grade independently governed CMS workflow is a separate implementation whose effort depends on content types, roles, approval rules, migration volume and preview requirements; it should be estimated after those requirements are fixed.

