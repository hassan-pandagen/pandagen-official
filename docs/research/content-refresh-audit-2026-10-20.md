# Content refresh audit pack, 19 to 20 October 2026

This file is for an outside reviewer. It lists every change made to four PandaCodeGen
blog articles during the October 2026 data refresh: what was checked, against which
source, what changed, what could not be verified, and the decisions still open.
Please check the claims against the sources and challenge anything that doesn't hold.

Site: https://www.pandacodegen.com (a small web development studio). None of these
changes are live yet. They are committed locally and haven't been pushed.

## What the refresh was for

The blog quotes third-party prices and limits from Shopify apps, Vercel, Webflow,
Microsoft and others. These go stale. The goal was to:

1. Re-read every changeable figure from the vendor's own page.
2. Move each one into a single registry file so it can be dated, reviewed and updated
   in one place.
3. Remove hand-typed "checked on <date>" stamps, which go stale silently.
4. Add one original, clearly labelled worked example per article, so each page has
   something a reader can't get from the vendor's own pricing page.

## How the system works

- **Registry:** `src/data/spec-facts.json`. Each fact has `value`, an optional
  `qualifier`, `verifiedAt`, `reviewDays` and `source` (the vendor URL). Articles render
  the value with `spec(id)` and the check month with `asOf(id)` (for example "October
  2026"). The fact table at the end of this file is generated from the registry.
- **Freshness check:** `scripts/spec_freshness.py` warns once a fact is older than its
  `reviewDays` and fails the build at twice that.
- **Stamp ratchet:** `scripts/stamp_freshness.py --ratchet` counts hand-typed date stamps
  ("checked/verified/reviewed/as of <date>") across the site against a baseline. A file
  that gains a stamp fails the check. The baseline went from 137 to 127 over this batch.
- **Date consistency:** `scripts/check_dates.py` requires the article's `lastModified`,
  the JSON-LD `dateModified` and the Open Graph `modifiedTime` to agree.

## Rules we followed (agreed 19 Oct 2026)

- A source re-check moves the fact's `verifiedAt`. The article's `lastModified` moves only
  when its content materially changes.
- If a source couldn't be read, the fact keeps its old date. No date was reset without a
  successful read.
- Only facts that can change (prices, fees, limits, plan features) go in the registry.
- Worked examples are labelled "Illustrative, not a real client/store", use invented
  inputs, and keep those inputs in code next to the article.
- Titles, meta descriptions and URLs stay unchanged until the 10 to 11 Nov 2026 review.

## How sources were read

Each page was fetched on the date shown. Pages that render prices with JavaScript were
read in a headless Chromium browser with a US English locale. Where that failed, the fact
is listed under "could not verify" with the reason.

---

## 1. /blog/shopify-app-costs-real-monthly-bill (19 Oct 2026)

Commit `c4bf4202`. Why first: two external sites link to it, and it targets
year-qualified price searches.

**Verified 19 Oct 2026 from each vendor's own pricing page. No price had changed since
4 Oct:** Klaviyo, Postscript, Attentive, Judge.me, Loox, Yotpo, Recharge (site and Shopify
App Store listing), Bold Subscriptions, Gorgias, Smile, PageFly, Shogun and Vitals. Tidio's
annual prices also checked out.

**Could not verify, so the earlier date stays:**

| Fact | Kept date | Reason |
|---|---|---|
| Okendo prices | 4 Oct 2026 | Pricing renders by script and didn't load |
| Tidio monthly prices ($29, $59) | 4 Oct 2026 | Render by script |
| Shopify third-party payment provider fee (2% Basic, 1% Grow, 0.6% Advanced, 0.2% Plus) | 2 Aug 2026 | shopify.com/pricing redirects our connection to the Pakistan page, which doesn't show these rates. Needs a check from a US connection. The freshness check already warns and will fail the build on 30 Nov 2026. |

**Changed:**

- The 15 app prices and the Shopify fee moved into the registry. Each table row shows its
  own check month.
- New section, "A worked example: one small store's monthly app bill".

**Worked example (illustrative):** an invented store with $12,000 a month in sales across
300 orders, 450 email subscribers, and $3,000 of those sales in subscription renewals across
90 orders. It uses Shopify Payments and stays inside each plan's allowance.

| App and plan | How it is worked out | Monthly |
|---|---|---|
| Klaviyo Email | Plan for 251 to 500 contacts | $20.00 |
| Judge.me Awesome | Flat | $15.00 |
| Smile Essential | Up to 500 monthly orders | $15.00 |
| Gorgias Starter | Flat, within ticket allowance | $10.00 |
| Vitals All-in-One | Flat, under the usage threshold | $29.99 |
| Recharge Starter | $99 + 1.49% of $3,000 ($44.70) + $0.19 x 90 ($17.10) | $160.80 |
| **Total** | | **$250.79** ($3,009.48 a year) |

**Please check:** that each app price matches its source today, that the Recharge formula
($99 + 1.49% + 19 cents per transaction) is what Recharge publishes for Starter, and that
the assumptions (Gorgias ticket allowance, Vitals usage threshold) are stated fairly.

---

## 2. /blog/how-much-does-a-website-cost (20 Oct 2026)

Commit `e5b371e8`.

**Verified 20 Oct 2026:**

- Webflow Starter limits from the pricing page, and the "50 lifetime form submissions"
  wording from Webflow's help centre.
- Vercel Pro: $20 platform fee, one deploying seat, $20 monthly usage credit, free viewer
  seats.
- Microsoft 365 US plans page (rendered): Business Basic $7.00 per user per month, paid
  yearly.

**Changed because the source changed:** the article said Business Standard was $14 and
Business Premium $22. Microsoft's US page now lists those plans only "with Copilot", at
$23.50 and $32.00 per user per month paid yearly ($20.30 and $28.80 without Teams). The
article now quotes the current page.

**Changed:**

- Webflow, Microsoft and Vercel figures moved into the registry. Four hand-typed stamps
  removed.
- New section, "A worked example: a small business site's first year".

**Worked example (illustrative):** an invented five-page site on our Starter tier, hosted
on Vercel Pro, with two staff on Microsoft 365 Business Basic. No apps, no store, usage
inside Vercel's credit. The domain is left out.

| Cost | How | Year one | Each year after |
|---|---|---|---|
| Build | Our published Starter price, one-time | $1,500 | $0 |
| Hosting | Vercel Pro $20 x 12 | $240 | $240 |
| Email | Business Basic $7 x 2 people x 12 | $168 | $168 |
| **Total** | Before domain, tax, change requests | **$1,908** | **$408** |

**Please check:** the Microsoft prices and the "with Copilot" naming against Microsoft's US
page, and whether leaving the domain out is stated clearly enough.

**Follow-up noted, not changed:** two other articles (`saas-price-increases-2026-tracker`,
`saas-software-pricing-audit-2026`) describe Microsoft's July 2026 increase (Standard $12.50
to $14). That's still true as history, but neither mentions the current "with Copilot"
pricing. They're queued for a later batch.

---

## 3. /blog/website-migration-cost-2026 (20 Oct 2026)

Commit `1a319de0`.

**Verified 20 Oct 2026:**

- Hostinger advertises free migration for an unlimited number of websites.
- Kinsta advertises free, unlimited WordPress migrations.
- Squarespace's export guide (rendered) describes a WordPress-format export that leaves out
  album, cover, index, portfolio and store pages, among others.
- Webflow's code export guide (rendered) describes a ZIP without CMS, User Accounts or
  Ecommerce content, with CSV export for those collections.

**Changed because no source supported it:** the line "A host-only move should cost you
between $0 and about $150" had no source. It now quotes Hostinger's and Kinsta's own pages
(both free). We didn't add a dollar range, which matches the article's stated policy of not
publishing cross-market ranges. We deliberately left out Hostinger's claim that other hosts
charge "$30 to $100 per site", for the same reason.

**Changed:**

- Four new registry entries (Hostinger, Kinsta, Squarespace export, Webflow export), and a
  sourced paragraph under the export table.
- A dated note under the intro had three hand-typed stamps, including "export links
  re-checked August 1" when the page no longer linked any export docs. It was replaced with
  a plain statement.
- New section, "A worked example: scoping a 12-page Squarespace site".

**Worked example (illustrative):** an invented 12-page Squarespace site with a blog of 40
posts, a portfolio page, a contact form and a store with eight products.

- Comes across in the export: blog posts and the basic text of standard pages.
- Has to be rebuilt: the portfolio page and the store (both on Squarespace's list of content
  that doesn't export), the eight products, the layouts and the form.
- Has to be planned: a redirect for every old URL, and titles and descriptions kept.
- Where it lands with us: our Growth tier, from $3,500, which covers 8 to 20 pages and a full
  migration with a redirect map.

**Please check:** that the Squarespace exclusions are quoted accurately, and that the
example only claims what the export guide supports.

**Open decision for the owner, not changed:** the article says, in bold, "If all you need is
a host change, do not pay migration prices for it, and do not hire us to do it." On 9 Oct
2026 the studio decided to offer WordPress host-to-host migration as a separately quoted
service. The two conflict. It's the owner's call whether to keep the line, soften it, or
point to that service.

---

## 4. /blog/nextjs-hosting-zero-cost (20 Oct 2026)

Commit `1721f4ee`. Title: "Is Vercel Free? 2026 Pricing & the 100GB Cap". This is the site's
highest-impression article.

**Verified 20 Oct 2026, all unchanged since the 4 Oct check:**

- Vercel Hobby plan docs (rendered): 100 GB Fast Data Transfer, 10 GB Fast Origin Transfer,
  1,000,000 CDN Requests, 4 CPU-hours Active CPU, 360 GB-hours Provisioned Memory, 1,000,000
  function invocations, 5,000 image transformations / 300,000 cache reads / 100,000 cache
  writes, 2 build vCPUs / 8 GB memory / 32 GB disk, 200 projects, 100 deployments a day.
- Vercel Pro plan docs: $20 platform fee, one deploying seat, $20 credit, additional seats
  $20 a month each, automatic notice at 75% of the credit, spend notifications on by default
  at $200 per billing cycle, Flat Rate CDN included tier of 1M requests and 1 TB.
- Flat Rate CDN docs: next tier $20 a month for 10M requests and 50 TB. GA changelog dated
  8 Sep 2026.
- Regional pricing: Fast Data Transfer $0.15 to $0.35 per GB, CDN Requests $2.00 to $3.20 per
  million, Fast Origin Transfer $0.06 to $0.43 per GB.
- Vercel Blob pricing: 10 GB Hobby Blob Data Transfer, 5 TB maximum file size, files above
  512 MB never cached.
- Fair Use Guidelines: Hobby is non-commercial personal use only.
- Terms of Service: last updated June 1, 2026. Hobby and trial Pro content may be used for
  model training with an opt-out; on paid Pro it's off by default.
- Netlify pricing: Pro $20 a month with unlimited members and 3,000 credits. Netlify's credit
  docs: extra credits at 1,500 for $10.

**Resolved from the earlier batch:** on 20 Oct the Vercel additional-seat price ($20 each)
wasn't legible in the Pro docs' server HTML, so it kept its 8 Oct date. The rendered page
shows it, so it's now dated 20 Oct.

**Changed:**

- 14 existing Vercel entries re-dated (values unchanged), and 12 new entries for the figures
  that were still typed into the article.
- Four hand-typed stamps replaced with `asOf()`. The terms sentence used to say it was read
  "on August 2, 2026"; it now says October 2026.
- New section, "A worked example: a three-person team's monthly Vercel bill".

**Worked example (illustrative):** an invented business site on Vercel Pro with three people
who deploy, 25,000 page views a month, pages of about 1.5 MB, and about 30 files fetched per
page view. The only server code is a contact form, assumed to stay inside the $20 credit.

| Line | How | Monthly |
|---|---|---|
| Platform fee | Includes the first seat and the credit | $20 |
| Two more deploying seats | $20 each | $40 |
| CDN | 25,000 x 1.5 MB = 37.5 GB; 25,000 x 30 = 750,000 requests; inside 1M / 1 TB | $0 |
| **Total** | Before tax, domain, anything outside Vercel | **$60** |

The text that follows the table says: at 30 files a page, the 1,000,000 included requests
cover about 33,333 page views, so requests run out long before the 1 TB of transfer. If
traffic doubled and stayed over the tier for a full cycle, Vercel would move the site to the
next tier ($20), making $80. On Netlify Pro the same three people pay one $20 fee, and the
question becomes how many of the 3,000 credits that traffic uses.

**Please check:**

- Whether "about 30 files per page view" is a fair assumption for a small business site, and
  whether every cached asset fetch counts as a CDN Request (our reading of Vercel's docs is
  yes).
- Whether the Flat Rate tier move is described accurately: Vercel says a one-day spike
  doesn't change the bill, and only a full billing cycle over capacity moves you up a tier,
  at the start of the next cycle.
- Whether the $20 next-tier price is added on top of the $20 Pro fee (our reading) or
  replaces the included tier.

**Left as written:** "a five-developer team pays $20 against $100" (1 included seat + 4 x
$20), the three-year row "From $720 base" ($20 x 36), and the 100 GB sizing paragraph
(100 GB / 2 MB is about 50,000 page views).

---

## Checks run after each article

`npm run check` passed, and so did the stamp ratchet, `check_dates.py` and
`spec_freshness.py` (one expected warning, the Shopify fee). The site built cleanly. Each
changed page was rendered and read back for missing values ("undefined", "NaN"), matching
JSON-LD dates, and no horizontal overflow at 390px.

## Round 2: fixes after the outside review (20 Oct 2026)

The reviewer's four findings were each checked against the code and the sources before
anything changed. All four held.

1. **Example totals used prices typed into the code.** Fixed. Registry entries can now carry
   `amounts`, the numbers a calculation needs (for example Recharge Starter: 99, 1.49, 0.19).
   The Shopify, website-budget and Vercel examples now calculate from those. Only the
   invented inputs (store sales, staff count, traffic) stay in the page code.
   `spec_freshness.py` now fails if an amount no longer appears in its entry's displayed
   value (it accepts $20, $7.00, 1.49%, 19¢, 1,000,000 and "1 million"), so the price and
   the total can't drift apart. Tested with a matching and two mismatched values.
2. **Squarespace example.** Fixed. Squarespace's product export guide (read 20 Oct 2026)
   covers physical and service products, up to 10,000, to a .csv file, without featured
   images, variant images, image alt text, customer reviews or additional product
   information. The example now says the product records can move separately, and only
   those parts and the store pages are rebuilt by hand. The scope line now says eight
   products don't settle the store's scope on their own: checkout, shipping, tax and
   connected services are scoped on the call. New registry entry
   `squarespace-product-csv-export`. The export matrix row now mentions the product .csv.
3. **Vercel wording.** Fixed. 30 requests a page is now called a round number for the
   example, not a measured average. The text says files already cached in a visitor's
   browser aren't requested again, while files served from Vercel's own cache still count.
   The $80 is now "from the start of the following cycle".
4. **Shopify wording.** Fixed. "Pays nothing extra to Shopify" is now "Shopify charges it no
   additional third-party transaction fee. Card processing fees still apply either way."
   (Shopify's US pricing FAQ says it "charges a small fee to allow you to accept major credit
   cards".) Gorgias Starter's 50 included tickets a month (read from its Shopify App Store
   listing on 20 Oct 2026) are now in the registry value and the example row. The "2% of
   $12,000" line now reads its rate from the registry.

**Owner decisions applied:**

- **Migration article:** the "do not hire us to do it" line and the opening claim that only
  one of the two jobs is worth paying an agency for are gone. The page now says to check
  what the new host includes first, and to use it if it covers the site. When it doesn't, or
  the site runs a store, business email or connected services, we quote a host move
  separately: backups, a compatibility check on the new host, DNS and email coordination,
  cutover checks and a rollback plan. This matches the studio's published host-migration
  service.
- **Microsoft:** both SaaS pricing articles keep the July 2026 change list and add a note
  that Microsoft's current US page lists Business Basic at $7.00 and sells Standard and
  Premium only "with Copilot" at $23.50 and $32.00 per user per month, paid yearly. The note
  says $14 to $23.50 isn't the same plan getting dearer, because the bundles include
  Copilot. The figures render from the registry.

**Not accepted without our own read:** the reviewer reported reading the Shopify fee rates on
20 Oct. From our connection, shopify.com/pricing now loads the US page, but the FAQ that
holds the rates never displays, and its template placeholders (`{{basicThirdParty}}`) were
never filled. Shopify's help centre returned 403. The fee keeps its 2 Aug 2026 date until the
owner confirms it with a screenshot.

**Dates:** the Shopify article and both SaaS articles moved to 2026-10-20 (all three date
fields each). `npm run check`, type check, stamp ratchet (127, unchanged), `check_dates.py`
and `spec_freshness.py` pass; the site built; every changed section was read back on the
built site, and none overflow at 390px.

## Round 3: fixes after the second review (20 Oct 2026)

1. **The amount check matched substrings.** The reviewer showed that a stored 20 passed
   against "$200" and against "$25 platform fee with $20 usage credit". Fixed by removing
   the matching altogether: a registry value now shows its numbers through placeholders,
   for example `Starter {starter:$}/mo plus {starterPercent:%} and {starterPerTransaction:¢}`,
   and `spec()` in `src/data/spec-facts.ts` fills them from `amounts`. The page text and the
   worked-example sums now read the same stored number. `spec_freshness.py` fails if a
   placeholder has no amount, uses an unknown format, if an amount is never shown, or if a
   stray brace is left. Both of the reviewer's cases now fail the check. The 12 converted
   values were each verified to render to exactly their previous text, and a scan of all
   162 built pages found no unfilled placeholder.
2. **Microsoft wording.** Both SaaS articles now say Microsoft's "US comparison page ...
   lists" the "with Copilot" plans, instead of "sells ... only".
3. **Vercel wording.** Now: "Files served entirely from the visitor's browser cache, without
   a network request, don't count. Files served from Vercel's own cache do, and so do the
   requests a browser makes to check whether a cached file is still current."
4. **Shopify fee.** The reviewer located the rates in the plan comparison table
   (Accepting payments, Third-party transaction fees), not the FAQ. From our connection the
   page now shows US dollar plan prices, but that table row still did not appear after
   opening the comparison sections. The fee stays dated 2 Aug 2026 until the owner sends a
   screenshot of that row.

## Round 4: Rank Math PRO incident added to /blog/wordpress-plugin-security-2026 (20 Oct 2026)

A new section, "What happened with Rank Math PRO in October 2026?", placed after the SSO
plugin's "What should you do" list and before "What to ask a provider". Title, description and
URL unchanged; dates moved to 2026-10-20.

**Sources, all read 20 Oct 2026:**

- Rank Math advisory: https://rankmath.com/kb/pro-3-0-123-security-incident/ (shows no
  publish date). Window 15 Oct 2026 20:02 UTC to 16 Oct 07:12 UTC; clean version 3.0.124;
  "a limited number of users"; free WordPress.org plugin not affected; the
  activated / installed-not-activated / downloaded-only split; recovery steps; indicators;
  "we will never send login or download links by email".
- CVE record: https://cveawg.mitre.org/api/cve/CVE-2026-111862 (published 19 Oct 2026,
  assigner Wordfence). "Supply-chain compromise", CVSS 3.1 9.8, affected 3.0.123 only, and
  "version 3.0.123 alone is not sufficient to establish compromise".
- Changelog: https://rankmath.com/changelog/ lists 3.0.123 (7 Oct) and 3.0.124 (16 Oct) with
  the same two fixes and no security note.

**What the section deliberately does not say:** how the files were replaced, how many sites
received them, or that the flaw was exploited in the wild. A secondary news site
(securityonline.info) says "actively exploited", but neither Rank Math nor the CVE record
does, and no attack numbers have been published. Wordfence's own advisory page and Patchstack
didn't load for us.

**Our inferences, stated as such on the page:** "the files appear to have been swapped after
release" (3.0.123 dated 7 Oct, bad copies served from 15 Oct); "eleven-hour window" (20:02 to
07:12 is 11 h 10 min); "the fix shipped within hours" (clean 3.0.124 on 16 Oct, the day the
window closed).

**Please check:** that every recovery step and indicator matches the advisory; that "this turns
the summer cases around" fairly contrasts it with the Super Forms and Elementor Pro section
earlier in the article; and that nothing implies a breach of Rank Math's customer data.

## Open items

1. **Shopify third-party payment fee: resolved 20 Oct 2026.** The owner screenshotted
   shopify.com/pricing (no country path, plan prices in USD: Basic $39 monthly / $29 yearly)
   from a remote machine. The plan comparison table, Accepting payments, Third-party
   transaction fees, reads 2% / 1% / 0.6% / 0.2%, matching the stored value and the
   reviewer's read. The same section listed MB WAY and Bizum rates, so that machine's region
   may not be the US; the qualifier says so. Screenshots:
   `docs/research/evidence/shopify-third-party-fee-2026-10-20.png` and
   `shopify-pricing-usd-2026-10-20.png`. `spec_freshness.py` now reports no warnings.
2. Okendo and Tidio monthly prices: retry with a browser that can render their pricing.
3. The Microsoft FAQ answer in `blog.ts` ("Is Microsoft 365 going up in price in 2026?")
   still gives only the July change list. It is accurate as history; not changed in round 2.

## Questions for the reviewer

1. Does any article still state a changeable figure that isn't tracked or dated?
2. Does any worked example claim more than its inputs support?
3. Is anything labelled "verified" that the listed source doesn't actually say?
4. Are the "could not verify" items handled correctly (old date kept, not hidden)?

## Every fact touched in this batch (generated from the registry)

Values are shown as a reader sees them (placeholders filled in).

| id | value | qualifier | amounts | verifiedAt | source |
|---|---|---|---|---|---|
| `vercel-hobby-price` | $0 | for eligible personal, non-commercial projects |  | 2026-10-20 | https://vercel.com/pricing |
| `vercel-hobby-fast-data-transfer` | the first 100 GB a month | listed under Hobby Included Usage; Hobby can't buy more, and going over a limit pauses that feature, in most cases for 30 days |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-hobby-fast-origin-transfer` | the first 10 GB a month | listed under Hobby Included Usage |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-hobby-cdn-requests` | the first 1,000,000 a month | listed under Hobby Included Usage; Vercel previously called these Edge Requests |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-hobby-deployments` | up to 100 a day |  |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-hobby-blob-included` | 1 GB of storage, 10,000 simple operations, 2,000 advanced operations and 10 GB of Blob Data Transfer a month | Hobby can't buy more; going over removes Blob access until 30 days have passed |  | 2026-10-20 | https://vercel.com/docs/vercel-blob/usage-and-pricing |
| `vercel-pro-price` | $20 a month | platform fee including one deploying seat and $20 a month of usage credit; added seats and usage beyond the credit are extra | monthly=20 | 2026-10-20 | https://vercel.com/docs/plans/pro-plan |
| `vercel-pro-cdn-capacity` | 1 million CDN requests and 1 TB of data transfer a month | the lowest Flat Rate CDN capacity tier, included with Pro at no extra cost | requests=1000000 | 2026-10-20 | https://vercel.com/docs/plans/pro-plan |
| `vercel-flat-rate-cdn-next-tier` | $20 a month for 10 million CDN requests and 50 TB of data transfer | a billing cycle over capacity moves the team up a tier at the start of the next cycle; a one-day spike doesn't | monthly=20 | 2026-10-20 | https://vercel.com/docs/pricing/flat-rate-cdn |
| `vercel-flat-rate-cdn-ga-date` | 8 September 2026 | the changelog entry says new Pro teams have Flat Rate CDN on by default and existing teams can switch over in Billing settings |  | 2026-10-20 | https://vercel.com/changelog/flat-rate-cdn-is-now-ga-for-pro-teams |
| `vercel-pro-spend-notification-default` | $200 per billing cycle | Vercel enables spend management notifications at this amount by default for new customers |  | 2026-10-20 | https://vercel.com/docs/plans/pro-plan |
| `vercel-fast-data-transfer-on-demand` | $0.15 to $0.35 per GB by region | applies to Pro CDN usage billed on demand, not to usage covered by a Flat Rate CDN tier |  | 2026-10-20 | https://vercel.com/docs/pricing/regional-pricing |
| `vercel-cdn-requests-on-demand` | $2.00 to $3.20 per million by region | applies to Pro CDN usage billed on demand, not to usage covered by a Flat Rate CDN tier |  | 2026-10-20 | https://vercel.com/docs/pricing/regional-pricing |
| `vercel-fast-origin-transfer-on-demand` | $0.06 to $0.43 per GB by region | usage-based on Pro; Flat Rate CDN doesn't cover it |  | 2026-10-20 | https://vercel.com/docs/pricing/regional-pricing |
| `shopify-app-price-klaviyo` | Free to 250 email contacts and 150 SMS/MMS credits; Email from $20/mo at 251 to 500 contacts; SMS from $15/mo for 1,250 credits, carrier fees included | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated | emailFrom=20 | 2026-10-19 | https://apps.shopify.com/klaviyo-email-marketing |
| `shopify-app-price-postscript` | Starter free to install with a $49/mo minimum spend, then $0.009/SMS; Growth $100/mo; Professional $500/mo, plus carrier fees | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-19 | https://apps.shopify.com/postscript-sms-marketing |
| `shopify-app-price-attentive` | Free to install, no published price. The listing states charges may be billed by Attentive separately from your Shopify invoice | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-19 | https://apps.shopify.com/attentive |
| `shopify-app-price-judgeme` | Forever Free $0, including Google rich snippets and Shop app sync; Awesome $15/mo | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated | awesome=15 | 2026-10-19 | https://apps.shopify.com/judgeme |
| `shopify-app-price-loox` | Beginner free; Convert $49.99/mo including 300 orders, then $50 per additional 300; Unlimited $299.99/mo | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-19 | https://apps.shopify.com/loox |
| `shopify-app-price-yotpo` | Free to 50 monthly orders; Starter $15/mo; Pro $119/mo, varying with order volume. The listing notes charges may be billed separately from your Shopify invoice | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-19 | https://apps.shopify.com/yotpo-social-reviews |
| `shopify-app-price-okendo` | Reviews, by monthly orders: free to 50 on the App Store listing; $19/mo to 200; $119/mo to 1,500; $299/mo to 3,500; $499/mo to 10,000; custom above that. Loyalty, quizzes, referrals and surveys are priced separately | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-04 | https://www.okendo.io/pricing/ |
| `shopify-app-price-recharge` | Starter $99/mo plus 1.49% and 19¢ per transaction; Plus $499/mo plus 1.34% and 19¢; Custom volume-based. The App Store listing also shows a $25/mo plan with no transaction fees for the first 50 subscribers | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated | starter=99, starterPercent=1.49, starterPerTransaction=0.19 | 2026-10-19 | https://getrecharge.com/pricing/ |
| `shopify-app-price-bold-subscriptions` | Launch $24.99/mo plus 2%; Grow $49.99/mo plus 1%; Scale $74.99/mo plus 0.9% | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-19 | https://apps.shopify.com/bold-subscriptions |
| `shopify-app-price-gorgias` | Starter $10/mo with 50 tickets a month included, then $0.40 per additional ticket; Basic $60/mo; Pro $360/mo; Advanced $900/mo | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated | starter=10, starterTickets=50 | 2026-10-20 | https://apps.shopify.com/helpdesk |
| `shopify-app-price-tidio` | Free $0; Starter $24.17/mo and Growth from $49.17/mo when billed annually ($29 and from $59 billed monthly); Plus from $300/mo plus usage | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-04 | https://www.tidio.com/pricing/ |
| `shopify-app-price-smile` | Free to 200 monthly orders; Essential $15/mo to 500; Standard $79/mo to 1,000; Growth $199/mo including 2,500, then $20 per additional 100 | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated | essential=15 | 2026-10-19 | https://smile.io/pricing |
| `shopify-app-price-pagefly` | Free $0; Builder from $24/mo; Optimize from $39/mo; Accelerate $99/mo; Power $199/mo. Builder and Optimize rise with the slots and credits you choose | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-19 | https://pagefly.io/pages/pricing |
| `shopify-app-price-shogun` | Draft Mode $0; Build $39/mo; Grow $199/mo; Advanced $499/mo | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated |  | 2026-10-19 | https://getshogun.com/pricing |
| `shopify-app-price-vitals` | All-in-One $29.99/mo. The listing states usage fees start after roughly $1,000/mo in Vitals-attributed sales, from $10/mo, and for Visitor Recordings volume | Monthly list price as published by the vendor; usage, volume and carrier charges apply where stated | allInOne=29.99 | 2026-10-19 | https://apps.shopify.com/vitals |
| `shopify-third-party-payment-fee` | 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus | US pricing page. shopify.com/pricing redirects by country, and a 19 Oct 2026 check from Pakistan showed local pricing without these rates, so this value still dates from 2 Aug 2026 | basicPercent=2 | 2026-08-02 | https://www.shopify.com/pricing |
| `webflow-starter-limits` | a webflow.io subdomain, two static pages, 1 GB bandwidth and 50 form submissions | Free Site plan; no custom domain |  | 2026-10-20 | https://webflow.com/pricing |
| `webflow-starter-form-cap` | 50 lifetime form submissions | A total for the life of the site, not a monthly allowance; other Site plans are unlimited |  | 2026-10-20 | https://help.webflow.com/hc/en-us/articles/33961344521235-Form-submissions |
| `microsoft-365-business-basic-price` | $7.00 per user per month | Paid yearly; a version without Teams is listed at $5.40 | monthly=7 | 2026-10-20 | https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing |
| `microsoft-365-business-standard-copilot-price` | $23.50 per user per month | Paid yearly; usage-based billing for some AI features; without Teams $20.30 |  | 2026-10-20 | https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing |
| `microsoft-365-business-premium-copilot-price` | $32.00 per user per month | Paid yearly; usage-based billing for some AI features; without Teams $28.80 |  | 2026-10-20 | https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing |
| `vercel-pro-included` | one deploying seat and $20 in monthly usage credit, with unlimited free read-only viewer seats |  |  | 2026-10-20 | https://vercel.com/docs/plans/pro-plan |
| `vercel-pro-additional-seat` | $20 a month each |  | monthly=20 | 2026-10-20 | https://vercel.com/docs/plans/pro-plan |
| `hostinger-website-migration` | free, for an unlimited number of websites |  |  | 2026-10-20 | https://www.hostinger.com/website-migration |
| `kinsta-wordpress-migration` | free and unlimited |  |  | 2026-10-20 | https://kinsta.com/wordpress-hosting/migration/ |
| `squarespace-export-scope` | a WordPress-format export that leaves out some content, including album, cover, index, portfolio and store pages | Squarespace states that many features rely on its own JavaScript and CSS, so some content doesn't export |  | 2026-10-20 | https://support.squarespace.com/hc/en-us/articles/206566687-Export-your-site-content |
| `webflow-code-export-scope` | a ZIP of pages, styles, scripts and images, without CMS, User Accounts or Ecommerce content and functionality | CMS Collections, Ecommerce Collections and User Accounts can be exported separately as CSV |  | 2026-10-20 | https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code |
| `vercel-hobby-compute` | 4 CPU-hours of Active CPU, 360 GB-hours of Provisioned Memory and 1,000,000 function invocations a month |  |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-hobby-image-optimization` | 5,000 transformations, 300,000 cache reads and 100,000 cache writes a month |  |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-hobby-build-resources` | 2 build vCPUs, 8 GB of build memory and a 32 GB build disk |  |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-hobby-projects` | 200 |  |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-pro-deployments` | 6,000 |  |  | 2026-10-20 | https://vercel.com/docs/plans/hobby |
| `vercel-blob-file-size` | up to 5 TB, but files above 512 MB are never cached |  |  | 2026-10-20 | https://vercel.com/docs/vercel-blob/usage-and-pricing |
| `vercel-pro-credit-notification` | 75% of the monthly credit |  |  | 2026-10-20 | https://vercel.com/docs/plans/pro-plan |
| `vercel-hobby-commercial-use` | Personal, non-commercial use only | All commercial use requires Pro or Enterprise |  | 2026-10-20 | https://vercel.com/docs/limits/fair-use-guidelines |
| `vercel-terms-model-training` | content on Hobby or a trial Pro plan may be used for model training, with an opt-out in team settings; on paid Pro it is off by default | Terms last updated June 1, 2026 |  | 2026-10-20 | https://vercel.com/legal/terms |
| `netlify-pro-price` | $20 a month with unlimited members | Starts at 3,000 credits a month |  | 2026-10-20 | https://www.netlify.com/pricing/ |
| `netlify-pro-credits` | 3,000 credits a month |  |  | 2026-10-20 | https://www.netlify.com/pricing/ |
| `netlify-credit-pack` | 1,500 credits for $10 | Bought as packs or by auto recharge |  | 2026-10-20 | https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/ |
| `squarespace-product-csv-export` | physical and service products, up to 10,000, to a .csv file, without featured images, variant images, image alt text, customer reviews or additional product information |  |  | 2026-10-20 | https://support.squarespace.com/hc/en-us/articles/360000694948-Export-products-to-a-csv |
