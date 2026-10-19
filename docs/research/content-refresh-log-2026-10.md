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
