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

---

# Second pass: the alignment-status table

Applied 15 September 2026 against [alignment-status.md](alignment-status.md). Still
committed and not deployed.

## A real rendering bug, not a positioning choice

`blog/topic/[topic]/page.tsx` built its closing button as `See the {label}` with a bare
`"our services"` fallback. Any hub whose target was missing from `MONEY_LABEL` rendered
**"See the our services"** — and `seo-and-ai-search` had been in exactly that state since
its `ctaHref` moved to `/services/ai-seo` earlier the same day. That was my own
regression: I changed the destination and left the label map.

Fixed both the instance and the class. `/services/ai-seo` has an entry, and the button
now builds the whole phrase, so the next unmapped route degrades to "See our services"
rather than a broken sentence. Verified by reading the rendered text of all eleven hub
pages: no fallback left, and `seo-and-ai-search` now reads "See the AI SEO service".

A dead `moneyLabel` variable was removed in the same edit.

## Company pages

| Surface | Was | Now |
| --- | --- | --- |
| `/about` H1 | "Reduce migration risk" | "Decide what to build" |
| `/about` intro | "helps businesses plan and implement website migrations" | Three routes in — from nothing, a replacement, or a move |
| Hassan intro + H2 | "SEO-safe website migrations…", "Engineering follows the written migration plan." | Builds from scratch first, migrations where there is a site to move |
| Imran intro | "decides whether a migration is actually justified" | Decides what a project is built from; migration judgement kept |
| `/ai-info` intro | "moves revenue-generating WordPress, Webflow and GoHighLevel sites" | Builds websites, stores and software; moving an existing site is one route |
| `/ai-info` company FAQ | application work available "when the migration requires it" | Available on its own terms |
| `/ai-info` price FAQ | Starter is "up to 7 pages **that we build and update for you**" | "with a content editor for your words, images and business details" |

That last one was a direct contradiction of the hero pill shipped hours earlier, which
now reads "Content editor · Training · Code you own".

## Social images

`og.ts` "Engineers Behind the Migration" → "The Engineers Behind the Build"; "Migration
Scope and Pricing" → "Project Scope and Pricing". These are used: the dynamic `/og?path=`
image is on 145 of 146 pages.

The root fallback `opengraph-image.tsx` ("Move Platforms With a Documented Migration
Plan") was corrected too, but the audit's caution was warranted and is now measured:
**exactly one generated page uses it** — `/services/wordpress`, the same 308 redirect
artifact that is the only consumer of the root meta description. It is corrected for
accuracy and future routes, not because it is displayed.

## Blog commercial sections

- **AEO playbook** — two narrow company blurbs broadened; "a larger migration" scope
  reworded; the "2 to 5 week build timeline" requirement replaced with the published
  per-tier ranges, which are 1–2, 2–4 and 3–6; the fit list now admits first-time
  builders. A paragraph was added routing readers to `/services/ai-seo` at $500/month,
  because the work the article describes is continuous and the three prices above it are
  build prices. The article's subject, title and URL are unchanged.
- **AI visibility guide** — its service link pointed at `/services/wordpress-migration`
  from an AI-visibility article; now `/services/ai-seo`. The bottom "Request a migration
  plan" link to `/contact` now reads "Talk to the founders". Its labelled calendar
  read-through was left alone, as the status note said it should be.

## CTA labels matched to their actual interaction

Not one replacement across all types — the two kinds were separated first.

- Four **calendar** buttons said "Get Your Migration Plan" while opening a booking
  widget: `divi-theme-slow`, `gohighlevel-keep-crm-replace-website`,
  `gohighlevel-website-speed`, `best-website-builder-for-gohighlevel-agencies`. Now
  "Book a 15-min call".
- Three **enquiry modal** buttons said the same thing while opening a form:
  `woocommerce-migration-cost`, `woocommerce-too-slow`, `woocommerce-vs-custom-website`.
  Now "Ask us about your store".
- Headings above them keep migration wording where the article is about leaving that
  platform. A heading is not a button label.

## Not done, on the status document's own reasoning

- The blog index title and H1 still describe migration, SEO and performance guides. That
  describes a collection of articles and is not a false company claim.
- The Pricing page's 2–4 weeks stays. It belongs to the Growth card, where it is correct.
- No specialist page renamed, no article title or URL changed.
