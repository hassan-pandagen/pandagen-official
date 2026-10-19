# Content refresh log, October to November 2026

Every substantive change to an existing article between the 13 Oct 2026 relaunch and the
10 to 11 Nov 2026 review, so the review can compare refreshed pages with untouched ones.
Titles, URLs and page structure stay unchanged during this window unless noted.

Rules for entries (agreed 19 Oct 2026):

- A source re-check moves the fact's `verifiedAt` in `spec-facts.json`. It moves the
  article's `lastModified` only when the article's content materially changes.
- If a source cannot be read, the fact keeps its old date. Never reset a date that was
  not verified.
- Only facts that can change (prices, fees, limits, feature availability) go in the
  registry. Worked examples are labelled as illustrative and keep their inputs in code.

## 19 Oct 2026: /blog/shopify-app-costs-real-monthly-bill

**Why this page first:** two sites cite it (farabiulder.com, followed link;
storefleet.io.vn, nofollow), and it targets year-qualified price searches.

**Verified 19 Oct 2026 from each vendor's own page (no price had changed since 4 Oct):**
Klaviyo, Postscript, Attentive, Judge.me, Loox, Yotpo, Recharge (site and App Store),
Bold Subscriptions, Gorgias, Smile, PageFly, Shogun, Vitals. Tidio's annual prices.

**Could not verify, kept their earlier dates:**

- Okendo (pricing renders by script): stays 4 Oct 2026.
- Tidio monthly prices ($29, $59; render by script): stays 4 Oct 2026.
- Shopify third-party payment provider fee: shopify.com/pricing redirected to the Pakistan
  page, which shows local pricing without these rates. Stays 2 Aug 2026. `spec_freshness`
  now warns on it (60-day review) and will fail the build at 120 days (30 Nov 2026).
  Needs a check from a US connection.

**Changed:**

- The 15 app prices and the Shopify fee moved into `spec-facts.json`
  (`shopify-app-price-*`, `shopify-third-party-payment-fee`). The table renders them with
  `spec()` and shows each row's check month with `asOf()`.
- New section "A worked example: one small store's monthly app bill": an invented store
  ($12,000 a month, 300 orders, 450 subscribers, $3,000 in renewals across 90 orders) with
  Klaviyo Email, Judge.me Awesome, Smile Essential, Gorgias Starter, Vitals and Recharge
  Starter. Total $250.79 a month ($3,009.48 a year), labelled "Illustrative, not a real
  store".
- `lastModified`, JSON-LD `dateModified` and Open Graph `modifiedTime` set to 2026-10-19.

**Unchanged:** title, meta description, URL, headings other than the price-table heading
(now "checked October 2026" from the registry).

## 20 Oct 2026: /blog/how-much-does-a-website-cost

**Verified 20 Oct 2026:**

- Webflow Starter limits (pricing page, rendered) and the "50 lifetime form submissions"
  wording (Webflow help centre, Form submissions article).
- Vercel Pro: $20 platform fee, one deploying seat, $20 monthly usage credit, free viewer
  seats (Pro plan docs).
- Microsoft 365 US plans page (rendered): Business Basic $7.00 per user per month, paid
  yearly.

**Changed because the source changed:** the article said Business Standard was $14 and
Business Premium $22. Microsoft's US page now shows those plans only "with Copilot", at
$23.50 and $32.00 per user per month paid yearly ($20.30 and $28.80 without Teams). The
line now quotes the current page.

**Could not verify, kept the earlier date:** Vercel's additional deploying seat ($20 each)
was not legible in the page's server HTML; `vercel-pro-additional-seat` keeps 8 Oct 2026.

**Changed:**

- Webflow, Microsoft and Vercel figures moved into `spec-facts.json`
  (`webflow-starter-*`, `microsoft-365-business-*`, `vercel-pro-included`,
  `vercel-pro-additional-seat`; `vercel-pro-price` re-dated). The article's four
  hand-typed stamps are gone, and the ratchet baseline dropped from 137 to 133.
- New section "A worked example: a small business site's first year": invented five-page
  Starter site, Vercel Pro, two Microsoft 365 Business Basic users. $1,908 in year one,
  $408 a year after, before the domain. Labelled "Illustrative, not a real client".
- `lastModified`, `dateModified` and `modifiedTime` set to 2026-10-20. Title, description
  and URL unchanged.

**Follow-up noted, not changed:** `saas-price-increases-2026-tracker` and
`saas-software-pricing-audit-2026` describe Microsoft's July 2026 increase (Standard
$12.50 to $14). Still true as history, but neither mentions the current "with Copilot"
pricing. Review in a later batch.

## 20 Oct 2026: /blog/website-migration-cost-2026

**Verified 20 Oct 2026:** Hostinger advertises free migration for an unlimited number of
websites; Kinsta advertises free, unlimited WordPress migrations. Squarespace's export guide
(rendered) describes a WordPress-format export that leaves out album, cover, index,
portfolio and store pages, among others. Webflow's code export guide (rendered) describes a
ZIP without CMS, User Accounts or Ecommerce content, with CSV export for those collections.

**Changed because no source supported it:** "A host-only move should cost you between $0
and about $150" had no source on the page. It now quotes Hostinger's and Kinsta's own pages
(both free). No dollar range was added, which also matches the article's own note that it
does not publish cross-market ranges. Hostinger's claim that other hosts charge "$30 to
$100 per site" was deliberately left out for the same reason.

**Changed:**

- New `spec-facts.json` entries: `hostinger-website-migration`, `kinsta-wordpress-migration`,
  `squarespace-export-scope`, `webflow-code-export-scope`. The export table now has a
  sourced paragraph under it.
- The dated note under the intro (three hand-typed stamps, including "export links
  re-checked August 1" when the page no longer linked any export docs) replaced with a
  plain statement. Ratchet baseline 133 to 131.
- New section "A worked example: scoping a 12-page Squarespace site": what comes across,
  what is rebuilt, what is planned, and which published tier it lands in (Growth, from
  $3,500). Labelled "Illustrative, not a real client".
- Dates moved to 2026-10-20. Title, description and URL unchanged.

**Open question for the owner, not changed:** the bold line "do not hire us to do it" (for
a host-only move) conflicts with the 9 Oct 2026 decision that PandaCodeGen offers WordPress
host-to-host migration as a separately quoted service (`WORDPRESS_HOST_MIGRATION` in
company-facts.ts).

## 20 Oct 2026: /blog/nextjs-hosting-zero-cost

**Verified 20 Oct 2026, all unchanged since the 4 Oct check:** Vercel Hobby included usage
(Hobby plan docs, rendered: 100 GB Fast Data Transfer, 10 GB Fast Origin Transfer, 1,000,000
CDN Requests, 4 CPU-hrs Active CPU, 360 GB-hrs Provisioned Memory, 1,000,000 function
invocations, image allowances, 2 build vCPUs / 8 GB / 32 GB, 200 projects, 100 deployments a
day); Pro docs ($20 platform fee, one seat, $20 credit, $20 per additional seat, 75% credit
notification, $200 default spend notification, 1M requests / 1 TB Flat Rate tier); Flat Rate
CDN tiers (next tier $20 for 10M requests and 50 TB); the 8 Sep 2026 GA changelog; regional
on-demand ranges; Blob pricing (10 GB Hobby transfer, 5 TB file limit, 512 MB cache limit);
Fair Use Guidelines; Terms (last updated June 1, 2026, model-training clause); Netlify Pro
($20 a month, unlimited members, 3,000 credits) and Netlify's credit docs (1,500 credits for
$10).

**Resolved from the earlier batch:** Vercel's additional deploying seat ($20 a month each) is
legible in the rendered Pro docs, so `vercel-pro-additional-seat` moved from 8 Oct to 20 Oct
and its "not legible" note was removed.

**Changed:**

- 14 existing `vercel-*` entries re-dated to 2026-10-20 (values unchanged).
- New entries: `vercel-hobby-compute`, `vercel-hobby-image-optimization`,
  `vercel-hobby-build-resources`, `vercel-hobby-projects`, `vercel-pro-deployments`,
  `vercel-blob-file-size`, `vercel-pro-credit-notification`, `vercel-hobby-commercial-use`,
  `vercel-terms-model-training`, `netlify-pro-price`, `netlify-pro-credits`,
  `netlify-credit-pack`. The Hobby list, the Hobby vs Pro table, the Blob paragraph, the
  notification line, the terms paragraph and the Netlify paragraph now render from them.
- Four hand-typed stamps ("checked October 4, 2026" three times, "checked August 2, 2026"
  once) replaced with `asOf()`; the terms sentence now says it was read in October 2026
  instead of August. Ratchet baseline 131 to 127.
- New section "A worked example: a three-person team's monthly Vercel bill": invented site,
  three deployers, 25,000 page views at about 1.5 MB and about 30 files each (37.5 GB,
  750,000 requests, inside the included tier). $20 + $40 seats = $60 a month. At about 30
  files a page the 1,000,000 included requests cover about 33,333 page views; doubled traffic
  held for a full cycle moves the site to the $20 next tier, so $80. Assumes function usage
  stays inside the $20 credit. Labelled "Illustrative, not a real client".
- Dates moved to 2026-10-20. Title ("Is Vercel Free? 2026 Pricing & the 100GB Cap"),
  description and URL unchanged.

**Left as written:** "a five-developer team pays $20 against $100" (arithmetic from the
verified prices), the "From $720 base" three-year row ($20 x 36), and the 100 GB sizing
paragraph (arithmetic from the verified allowance).

## 20 Oct 2026: fixes after the outside review

Full detail in `content-refresh-audit-2026-10-20.md`, "Round 2". In short:

- Worked-example totals now calculate from registry `amounts`; `spec_freshness.py` fails if
  an amount stops appearing in its value.
- Squarespace example: product records can move by .csv (new
  `squarespace-product-csv-export`); store scope depends on checkout, shipping and tax.
- Vercel example: 30 requests a page labelled as an assumption; browser-cache note; $80
  from the following cycle.
- Shopify example: "no additional third-party transaction fee", card fees still apply;
  Gorgias's 50 included tickets added (re-dated 20 Oct).
- Migration article: "do not hire us" replaced, per the owner, with "check the host's
  included move first", then our separately quoted host-move service.
- Microsoft "with Copilot" note added to `saas-price-increases-2026-tracker` and
  `saas-software-pricing-audit-2026`, per the owner. Both re-dated to 2026-10-20, as is the
  Shopify article.
- Shopify third-party fee: still 2 Aug 2026; awaiting the owner's screenshot.
