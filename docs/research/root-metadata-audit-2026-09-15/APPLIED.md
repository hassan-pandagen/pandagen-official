# What was applied from this audit

Applied 15 September 2026, in the order the [implementation report](implementation-scope.md)
recommended. **Committed and not deployed.** The public site still served the older
migration-led homepage metadata at the time of the audit's capture, and still does;
nothing in this record has been seen by a crawler.

## The correction this audit forced

The prior session claimed `layout.tsx:54` was "the single highest-leverage string",
"the sentence Google and every assistant sees as the default description of the whole
business". That was wrong about the mechanism. The root `metadata.description` is a
fallback; a child `description` replaces it, and every page here sets one. The audit
measured zero of 145 indexable candidates using it, and this build reproduces that:
one file uses it, `/services/wordpress`, which is a 308 redirect artifact.

The field actually repeated site-wide was the Organization JSON-LD description a
hundred lines lower in the same file. Right file, wrong line, and a mechanism that is
not how Next.js resolves metadata. No ranking claim is made for any edit below.
Google does not use meta descriptions in ranking; they affect snippet selection.

## 1. `/services` — the promise a buyer encounters

The visible page and its metadata disagreed with the catalogue. Changed together:

| Surface | Was | Now |
| --- | --- | --- |
| H1, `PageContent.tsx` | "Website redesign and migration services." | "Website design, redesign and development." |
| Intro | "We rebuild business websites that already earn their keep" | New builds first; migration is one of three ways to improve an existing site |
| `metadata.description` | "…Fixed prices from $1,500, **2 to 4 weeks**…" | No universal timeline. Delivery ranges stay beside their tiers |
| OG + Twitter title/description | Migration-led | Website, store and software scope |
| `CollectionPage` name + description | "Website Migration and Custom Web Engineering" | New builds, redesigns, migrations, commerce, engineering |
| OG image copy, `src/lib/seo/og.ts` | "Website Migration Services" | "Website, Store and Software Development" |

**Deviation from the recommended copy, deliberate.** The audit proposed the title
"Website & Software Development Services". That drops "redesign", which is the only
high-volume commercial term this site targets: `website redesign services` at 6,600/mo,
KD 10 in the 14 September DataForSEO capture. The audit states it made no keyword
capture for this task, so it was not pricing that loss. The applied title keeps the
term and still fixes the narrowness: **"Website Design, Redesign and Development
Services"**. The recommended description and opening were used close to verbatim.

The homepage OG image copy was migration-led too ("SEO-Safe Website Migrations") and
was brought in line with the homepage title.

## 2. The Organization entity — the field that really is on every page

Six different company descriptions shared one `@id`. The homepage's copy still asserted
two claims retired from the visible homepage on 15 September: that we "rebuild slow
WordPress, Shopify, Webflow and Squarespace sites", and that we produce answers "AI
assistants can quote". Three case studies described the **project** in the field
describing the **company**.

All six now import one string, `ORGANIZATION_DESCRIPTION` in
[company-facts.ts](../../../src/data/company-facts.ts). Project and disclosure facts
were not deleted: the Panda Patches ownership disclosure is stated visibly on that page
twice (lines 313 and 643) and stays there, where it describes the project rather than
the company.

`foundingDate` had four values on one entity. The audit found two conflicting on the
homepage; counting dates rather than descriptions found **four more nodes** it had not
listed, because those carry a date and no description: `AboutPageClient.tsx`,
`/ai-info`, the AEO playbook article and `/work/mycustompatches`. All now import
`FOUNDING_DATE`. The February 2026 trading date is not lost — it is a brand event, it
stays in prose in `company-facts.ts` where it can say which event it describes, and
`foundingDate` carries the LLC formation date a KYC reviewer matches.

Verified by parsing every JSON-LD block in the build, not by grepping for a sentence:

| | Before | After |
| --- | --- | --- |
| Distinct Organization descriptions | 6 | **1** (151 nodes across 146 pages) |
| Distinct `foundingDate` values | 4 (`2026-08-12`, `2026-02`, `2026`) | **1** (`2026-08-12`, 155 nodes) |
| Pages using the root fallback description | 0 of 145 | 1, the `/services/wordpress` redirect artifact |

## 3. Company and reference descriptions

`/about` ("Website Migration Delivery Standards"), both founder bios, `/ai-info` and the
About `WebPage` node all described migration as the whole offer. Each now names the
actual offer with migration inside it. OG and Twitter strings were changed alongside the
meta description in every case, since they are separate properties.

## 4. Root fallback

Title default and description updated as maintenance, with a comment recording that it
is a fallback and not a site-wide switch, so the next person does not repeat the
mistake at the top of this file.

## What was deliberately not done

- No blog descriptions were rewritten. The inheritance audit does not justify it.
- Specialist migration pages keep their migration titles, descriptions and URLs. They
  accurately describe their own subject.
- `MyCustomPatches`, `/work` case studies and diagnostic articles keep their own
  project descriptions on their own entities.

## Still open

Public verification. Everything here is local. After the release, re-capture the public
homepage and `/services` HTML before treating any of it as exposure, and record the
deployment date against the affected routes. Google's recrawl guidance is days to weeks
and a request does not accelerate it.
