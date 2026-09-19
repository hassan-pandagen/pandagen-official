# French and German copy alignment audit — 15 September 2026

Read-only source audit of the current checkout. No application files changed. This is not a native-language proofreading certification or a deployment check. Line references reflect this capture and may move after edits.

## Conclusion

French and German remain substantially behind the broader English offer. This is a separate content implementation, not automatic translation of the English components. Updating the English homepage, contact page or default metadata does not update these localized bodies, headings or page metadata.

There are five French and five German page files: home, services, pricing, contact and about. The checkout has 137 `page.tsx` files: 127 unprefixed English source files and 10 localized files. One English source is the dynamic topic route, so these are source-file counts, not a count of rendered URLs or indexed pages. Work, case studies, individual service pages including AI SEO, blogs, founder profiles, AI information and policy pages have no translated equivalents in the route map.

Sources: `src/lib/i18n/config.ts:46`; the `routes` map immediately below it; `src/components/i18n/LocalePage.tsx:19`; `src/lib/i18n/dictionaries/types.ts:41`.

## Priority 1: retired evidence still published

Both `src/lib/i18n/dictionaries/fr.ts:364` and `de.ts:364` still report that MyCustomPatches hosting fell from $150/month to $0/month. This is displayed by the localized homepage proof record (`LocalePage.tsx:328`, `HomeProof`).

The current English case study explicitly says these costs are retired because no invoices were retained and the client does not recall the amount (`src/app/work/mycustompatches/page.tsx:48`, also `:524`). `src/data/company-facts.ts:213` withdraws the performance and hosting figures too.

Remove the retired hosting result from both translations. The documented delivery scope and duration can stay. Do not translate or reintroduce withdrawn figures as part of broadening the offer.

## Priority 1: entry offer, pricing and recurring work conflict

Both dictionaries share these line positions:

| Source | Current copy/meaning | Required correction |
|---|---|---|
| `:35–44` | Homepage title, metadata, pill and H1 sell leaving WordPress/Wix; the lead also says traffic is not lost | Broaden to new business websites, online stores and improvements to existing sites. Preserve qualified migration controls in their own section; remove the unconditional traffic-preservation phrasing. |
| `:47` | Homepage summary describes rebuilding slow platform sites, no monthly platform fees, and “aucun abonnement” / “kein Retainer” | State build ownership separately from optional monthly support and AI SEO. Platform/CMS/hosting costs depend on the agreed stack. |
| `:409–421` | Services metadata sells migration/engineering; visible H1 is “Capacités et architecture” / “Leistungen und Architektur” | Align the main service categories and buyer-facing introduction with the broader English services page. |
| `:485–497` | Pricing metadata, H1 and summary sell migration packages; summary again says no retainer | Describe website/store build starting points; distinguish one-off builds from optional ongoing services. |
| `:536` and `:621` | Scale applies to “une boutique” / “einen Shop” at $5,000 | Explicitly allow a small/simple store at Starter; reserve Scale for a large catalogue, subscriptions, custom commerce logic or additional complexity. Current canon: `company-facts.ts:98`. |
| `:589` vs `:344` | Pricing correctly says care clients may be hosted in the studio account; homepage says deployment is on the client account, never the studio account | Use the same conditional ownership/hosting explanation. |
| `:595` vs `:47`/`:497` | Lower pricing already describes optional monthly care, contradicting “no retainer” earlier | Keep the actual monthly-care scope and resolve the blanket statements above it. |

No distinct $500/month AI SEO offer is present in either dictionary and there is no localized AI SEO service route. General AI-search mentions do not replace that commercial offer. The current English commercial canon separates monthly AI SEO from monthly support (`company-facts.ts:104`). Do not imply that every website needs a subscription.

The Starter content-editor and training bullets **are already translated** (`fr.ts:509`, `de.ts:509`). Do not treat them as missing. The pricing currency note already explicitly says USD (`:500` in both files), which is appropriate while the business continues quoting in USD.

I found no literal blanket “2 to 4 weeks” equivalent in the two dictionaries. They still use “Des semaines, pas des mois” / “Wochen statt Monate” (`:50`), but the body underneath ties delivery to the accepted project schedule. Review the heading against actual offer scope; do not falsely report that the English services timeline defect was copied verbatim here.

## Priority 1: the enquiry journey still sells a migration plan

Both dictionaries at `:22–24` set the shared primary/compact CTA to “Demander votre plan de migration” / “Demander un plan” and “Migrationsplan anfordern” / “Plan anfordern”. `LocalePage.tsx` reuses these across header, homepage, pricing cards, inner-page heroes and close. These have not picked up the English founder CTA change.

The translated contact title, H1 and description still ask for a migration plan (`fr.ts` and `de.ts:648–660`). The summary says the site URL, platform, traffic, timeline and budget are needed even though the actual translated lead form requires only name and email. The checklist leads with an existing website and its migration constraints (`:661–668`). New-site buyers should not need to invent an existing site to understand how to enquire.

The translated form itself is functional source-wise and already has localized labels, loading/success messages and new-site/store placeholders (`:757–780`). It is rendered both on the localized homepage (`LocalePage.tsx:114`) and contact page (`:316`). This is **not** an English-only form.

**Language handoff regression:** `HeroLeadForm.tsx` accepts `locale` but currently uses it only in the analytics event (`:120`). The submitted fields include `submittedFrom` (`:107`) but no locale or service suffix. The API still derives reply language solely from a trailing `(FR)` or `(DE)` in `fields.service` (`src/app/api/submit-quote/route.ts:134–153`). Without that suffix, the mail defaults to “Reply language: English” and loses the `[FR]`/`[DE]` subject prefix. Pass and validate an explicit locale, or derive it from the submitted route through the known route map. The current source preserves the route, so the language is recoverable; the automatic inbox marker is wrong. This is a source trace, not an actual email test.

However, the contact page first renders a lengthy generic intro/summary/section/checklist sequence and an additional English-form link (`LocalePage.tsx:300–316`). It does not use the newly redesigned English contact layout. The optional English link is labeled, but should no longer be presented as necessary to complete the enquiry.

Suggested founder CTA wording, pending native editorial review: French “Parlez aux fondateurs”; German “Mit den Gründern sprechen”. The exact label should fit the action: these links open the contact page, not an instant call. Pair them with the clear form heading and message-submit label in that language.

## Priority 2: language service promises need one consistent answer

**Subsequent owner clarification:** founders speak English and Urdu and are willing to use AI translation. The inconsistent French/German call/support promises below should be replaced with English working-language expectations and translation-assisted written communication. This permits serving French/German customers without claiming native-language staffing. See the [updated recommendation and suggested disclosure](README.md#recommendation).

Both dictionaries `:673` say scoping can happen in French/German or English. Their FAQ at `:690` says scoping and support are in English, with written French/German possible. The form reassurance at `:780` promises a reply in the visitor's language, with contracts in English.

Define the actual capability: written communication, live calls, ongoing support and contract language. The site should not imply native German/French sales calls if the founders can only provide written translation-assisted communication. This audit does not establish what languages the founders speak.

Both dictionaries still begin with `// Draft translation, pending native review before external citation.` Native review is not evidenced by this source; this comment is a status marker, not an instruction requiring user permission.

Server errors are another small language gap. `HeroLeadForm.tsx:38–45` displays the API's English error text before its translated fallback. `/api/submit-quote/route.ts:65`, `:188`, `:216`, `:227` and `:234` return English errors. Use stable error codes with localized client messages; do not expose raw provider errors. No real form submissions were sent in this audit.

## Priority 2: secondary surfaces and proof presentation

- About metadata, H1 and body remain migration-first (`fr.ts` and `de.ts:701–710`). Broaden the company introduction and keep actual migration methodology lower down.
- Founder blocks retain migration-heavy responsibilities (`:295–316`). `LocalePage.tsx:572–604` renders names, roles, bios and tags without image elements. The English portrait fixes therefore do not add portraits to these localized homepages.
- The localized homepage places migration continuity before the build offer (`LocalePage.tsx:156–160`) and proof much later (`:327–328`). Its secondary hero CTA opens pricing, not the new work index (`:104–108`). It does not inherit the English homepage's project-first flow.
- Open Graph and Twitter textual metadata are translated, but both locale pages deliberately reuse the English image asset (`src/lib/i18n/metadata.ts:37`, `:43`). Separate translated image text is not generated.
- Blogs and policies link to English with language attributes. The original-English review excerpts are deliberately labeled and retained verbatim, which should stay; these are not translation defects.
- Services still calls standard Shopify themes slow and its custom storefront instant (`fr.ts:448`, `de.ts:448`). This overbroad performance copy deserves the same evidence review as English claims. Homepage caching comparisons (`:95`) also overgeneralize WordPress and server rendering. Do not copy these claims into new regional landing pages.

## Sensible implementation boundary

First align the ten existing localized pages, their shared CTA/form copy, commercial facts and evidence withdrawals. Keep one commercial canon with localized wording; prices, inclusion rules and retired proof should not be separately hand-maintained without parity checks.

For a selected new language market, complete a small buyer journey: homepage or market introduction, relevant service page, at least one relevant work example, pricing explanation, contact and practical language/support terms. Translating every English blog before these destinations would leave the commercial gap in place. The choice of market and keyword demand needs separate external research; this source audit does not establish either.
