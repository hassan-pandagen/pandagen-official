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
