# A Step Above Medical — pre-rebuild baseline, 16 August 2026

## Status, updated 17 August 2026

| blocker | state |
| --- | --- |
| Client agrees to be named | **CLEARED.** Owner has given permission. Get it in writing with a date before publishing, so `approvedBy` and `approvedDate` in `case-study-facts.json` are backed by something. |
| Rebuild stack confirmed | **CLEARED.** Next.js and Sanity, which means this project also becomes first-hand evidence for `nextjs-sanity-stack`, currently the only Sanity post with just two builds behind it. |
| Rebuild is live | **NOT CLEARED.** Checked 17 Aug: astepabovemed.com still serves WordPress 7.0.4 with Divi (`et_pb` x2,530) and Elementor. Zero `_next`, zero `sanity`. |

**There is no pending slot.** `case-study-facts.json` feeds `CaseStudyGrid`, three service pages,
`RelationshipDisclosure` and `llms.txt`, so an entry added early publishes everywhere at once.
The case study is created the day the rebuild serves, not before.

**What to do the moment it goes live**, in this order:
1. Re-run all four captures (see the commands at the end of this file). Do performance three
   times and take a median; the correction log explains why one run is not enough.
2. Add the entry to `case-study-facts.json` with `status: "verified"`, a `method` block naming
   this file and both capture dates, and the written permission recorded.
3. Put the numbers in `divi-theme-slow` and `woocommerce-too-slow` FIRST. Those earn 22 and 18
   clicks; the `/work` page earns almost none. The case study is the proof, not the magnet.
4. Add the Sanity build to `nextjs-sanity-stack` as a third project, and the first one that is
   both independent and measured before and after.

---

**Nothing in this file is publishable yet.** It is a "before" measurement taken while the
old site is still up, because once it is replaced the before is gone forever. The
MyCustomPatches load time, mobile PageSpeed and hosting cost are all `status: withdrawn`
in `case-study-facts.json` for exactly this reason: nobody captured a baseline and the
client had no invoices.

Publish only when the rebuild is live AND the same measurements have been re-run with the
same tools, and only with the client's written agreement to be named.

---

## CORRECTION LOG

**16 Aug, first pass measured a 404 as the "contact page".** The intent-page finder took
`/contact/`, which returns a WordPress 404 titled "404 Not Found | A Step Above Medical"
with an h1 of "No Results Found". The TTFB argument built on it was therefore built on an
error page. Re-measured against the real pages below.

**There is no contact page on this site at all.** Seven pages total. For a training
business that sells courses, having no contact page is itself a finding, and it belongs in
the rebuild scope rather than in a performance table.

**Home-page figures vary between runs on an unthrottled connection.** Two runs an hour
apart gave 6.78 MB / 172 ms TTFB / 13,009 ms load, then 6.20 MB / 97 ms / 5,403 ms. Do not
publish a single-run figure as a point value. Re-run at least three times and publish a
median, or publish a range and say how many runs it came from.

---

## What the live site is

`https://astepabovemed.com` — "A Step Above Medical | Phlebotomy & IV Training Courses"

| | |
| --- | --- |
| Platform | WordPress 7.0.4 |
| Page builder | Divi (`et_pb` appears 2,530 times in the home page HTML) |
| Second page builder | Elementor (126 occurrences) |
| Commerce | WooCommerce |
| Pages | 7 |

**Two page builders on the same site.** That is the most quotable structural fact here,
and it is worth re-confirming before publishing because a reader will check it.

This is the client's existing site. **PandaCodeGen did not build it.** Do not list A Step
Above Medical as a client on any directory or case-study page until our rebuild is the
thing serving at this domain.

---

## Performance, 16 August 2026

Raw: `astepabovemed-2026-08-16.json`. Driver: `scripts/scan/baseline.mjs`.

| page | transferred | requests | TTFB | first paint | load event | axe nodes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 6.20 MB | 59 | 97 ms | 544 ms | 5,403 ms | 2 |
| `/our-courses/` | **9.95 MB** | 46 | **1,425 ms** | 2,416 ms | **8,576 ms** | 2 |
| `/private-group-training/` | 1.05 MB | 50 | 1,241 ms | 2,100 ms | 3,312 ms | 2 |

### What these say

**The page where people choose what to buy is the heaviest page on the site.**
`/our-courses/` is 9.95 MB against 6.20 MB for the home page, and takes 8.6 seconds to
reach the load event.

**First byte is 97 ms on the home page and 1,425 ms on `/our-courses/`, about fifteen
times slower.** That is what page caching looks like: the home page is served from cache,
inner pages are rendered per request. The commercial pages carry the slow first byte.

---

## AEO and SEO surface, 16 August 2026

Raw: `astepabovemed-2026-08-16-seo.json`. Driver: `scripts/scan/seo-baseline.mjs`.

### Site level

| | |
| --- | --- |
| `robots.txt` | 200, 1 Disallow line, **does not name any AI crawler** |
| `sitemap.xml` | 200, **7 URLs** |
| `sitemap_index.xml` | 404 |
| `llms.txt` | 404 |

### Page level, both pages measured

| | `/` | `/our-courses/` era page |
| --- | --- | --- |
| Title | 55 chars, present | present |
| **Meta description** | **absent** | **absent** |
| Canonical | present | absent on the 404 |
| `og:title` / `og:image` / `twitter:card` | **all absent** | all absent |
| **JSON-LD blocks** | **0** | **0** |
| **Schema types** | **none** | none |
| Headings | h1 1, h2 3, h3 3 | h1 1 |
| Images | 13, **all 13 with `alt=""`** | 2, both `alt=""` |
| Image formats | **12 PNG, 1 JPG**, no WebP or AVIF | PNG |
| Lazy loaded | 4 of 13 | 1 of 2 |
| Inline `<style>` blocks | **10** | 11 |
| Words | 403 | 74 |

### What these say

**Zero structured data anywhere on the site.** No Organization, no LocalBusiness, no
Course, no FAQPage. For a business selling scheduled training courses in named locations,
`Course` and `LocalBusiness` are the obvious absent types.

**No meta description on any page measured**, so Google writes its own snippet.

**No Open Graph or Twitter tags**, so every share renders as a bare link.

**All 13 images carry `alt=""`.** That marks every image on the page as decorative. On a
site whose subject is hands-on medical training, at least some of those images carry
meaning, so this is very likely wrong rather than a deliberate choice. Worth confirming
before writing it up, because "empty alt" and "missing alt" are different defects and only
one of them is an accessibility failure.

**No modern image formats.** 12 PNG and 1 JPG on the home page is most of the 6.2 MB.

**No `llms.txt`, and `robots.txt` names no AI crawler.** Neither is a ranking factor for
Google, and both are part of the AEO surface this site sells.

---

## PageSpeed Insights, 16 August 2026, 22:53

Google's own tool, so these are the more citable numbers. Mobile form factor.

| category | mobile | desktop |
| --- | ---: | ---: |
| Performance | **60** | **59** |
| Accessibility | 82 | 87 |
| Best Practices | 81 | 81 |
| SEO | **92** | **92** |
| Agentic Browsing | 1 of 2 | **0 of 2** |

**Desktop 59 against mobile 60 is the diagnostic here.** Desktop normally scores far higher,
because it has more CPU and a faster network profile. When the two are level, the constraint
is not the device. It is payload and server response, which matches 6.2 MB and a 1,425 ms
first byte on `/our-courses/`. A lighter theme would not fix this; the bytes and the
uncached inner pages would follow it across.

**Agentic Browsing drops from 1 of 2 on mobile to 0 of 2 on desktop.** Capture which check
differs before cutover, because the ratio alone does not say.

**Field data: "No Data".** CrUX has no record for this origin, which means it does not get
enough traffic for Google to report real-user metrics. Two consequences. The after-capture
will also be lab-only unless traffic grows, so the comparison has to be stated as a lab
comparison. And nobody can contradict our lab numbers with field numbers, which cuts both
ways and should be said out loud rather than relied on.

Desktop scores not yet captured. Take them before cutover; mobile and desktop are different
measurements and the after-capture must compare like with like.

### Three things worth reading carefully

**SEO 92 with zero structured data on the page.** Lighthouse's SEO category checks title,
meta description, crawlable links, viewport, and a handful of similar basics. It does not
look at schema, Open Graph, entity coverage or anything an answer engine uses. A site can
score in the nineties for SEO and be entirely invisible to the machine-readable layer, and
this one does. That is a genuinely useful illustration for our own writing, and it is a
first-hand one.

**Accessibility 82 against 2 detected axe nodes.** These agree. Our scan found exactly two
defects, `link-name` and `meta-viewport`, and Lighthouse weights `meta-viewport` heavily
because it governs whether a reader can zoom. Same two problems, expressed as a count in one
tool and a weighted score in the other. This is the "keep the tool constant" rule in
miniature: do not put 82 and 2 in the same sentence as though one contradicts the other.

**Agentic Browsing 1 of 2.** A real reading of the experimental Chrome category that
`agentic-browsing-pagespeed-score` currently describes without a single measured example.
Capture the individual check results before cutover, not just the ratio, since the ratio
alone is not reproducible.

## Local Lighthouse, and why its performance score is NOT usable here

Raw: `astepabovemed-2026-08-16-lighthouse.json`. Driver:
`scripts/scan/lighthouse-baseline.mjs`, Lighthouse 13.4.1.

| page | form | perf | a11y | best practices | seo | LCP | TBT | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | mobile | 25 | 82 | 58 | 92 | 14,655 ms | 1,060 ms | 0.657 |
| `/our-courses/` | mobile | 20 | 82 | 77 | 92 | 12,189 ms | 1,007 ms | 0.600 |
| `/` | desktop | **13** | 87 | 58 | 92 | 18,050 ms | 2,834 ms | 0.471 |
| `/our-courses/` | desktop | 31 | 87 | 77 | 92 | 17,516 ms | 1,720 ms | 0.003 |

**Accessibility and SEO agree with PageSpeed Insights exactly, on BOTH form factors:**
82/87 accessibility and 92/92 SEO. Those two categories are stable on this machine and safe
to use for a before/after delta.

**Best Practices does not agree.** Local says 58 where PSI says 81, on both form factors.
Add it to the list of scores that must come from PSI rather than from here.

**The performance score is not.** Local Lighthouse says 25 where PSI says 60, and desktop
scores 13 against mobile 25, which cannot happen on a real machine. Desktop has more CPU and
a larger viewport; scoring lower means the runs were contending for the processor.
`environment.benchmarkIndex` is **1514**, which is a slow host, and Lighthouse calibrates
its simulated throttling against exactly that number.

### The rule this sets for the after-capture

| what to compare | measure it with | why |
| --- | --- | --- |
| Performance score | **PageSpeed Insights only** | Google's hardware, consistent between runs, and it is the number a client recognises |
| Accessibility, SEO | local Lighthouse | reproducible, and it matches PSI on both form factors |
| Best Practices score | **PageSpeed Insights only** | local says 58, PSI says 81 |
| Bytes, requests, TTFB | `baseline.mjs` | barely sensitive to local CPU |
| Schema, meta, alt, formats | `seo-baseline.mjs` | not timing-dependent at all |

**Never put a local Lighthouse performance score and a PSI score in the same comparison.**
That is the same measurement error as comparing an axe count with a WAVE count, and the
25-against-60 gap here shows how large it can get.

One real finding survives the noise: **`/our-courses/` ships 1.91 MB to mobile and 9.27 MB
to desktop.** That is responsive images working in the wrong direction for the page where
people choose what to buy, and it is not a scoring artefact.

## The honest read

**The story is weight, first byte, and an empty machine-readable surface. It is not
accessibility.** Two axe violation nodes per page, and every image already has an alt
attribute present. This client does not have an accessibility problem, and the case study
must not imply one. Our own home page measured 15 contrast failures on 13 August, worse
than theirs.

---

## Method

Same tooling must be used post-launch or the comparison is a measurement error rather than
a result. This is the rule the accessibility glossary states in print.

- Playwright, Chromium 151.0.7922.34, headless, viewport 1366x900
- Navigation waited for `load`, then network idle, then 1.5 s settle
- axe-core 4.13.0, tags `wcag2a wcag2aa wcag21a wcag21aa wcag22aa`, iframes excluded
- Transferred bytes summed from `content-length` response headers
- Drivers: `scripts/scan/baseline.mjs`, `scripts/scan/seo-baseline.mjs`

### Limitations, state these with any figure

- **Single run per page, one location, no network throttling.** See the correction log:
  the home page moved 6.78 MB to 6.20 MB and 13,009 ms to 5,403 ms between two runs an
  hour apart. Take a median of at least three runs before publishing a point value.
- **LCP did not register.** The driver reads the performance buffer after load instead of
  registering a `PerformanceObserver` first. Fix that before the after-capture, and re-take
  the before while the old site is still up if LCP is wanted in the comparison.
- **`content-length` undercounts** chunked or header-less compressed responses, so the
  transferred figures are a floor.
- **No field data exists.** PageSpeed Insights reports "No Data" for this origin, so CrUX
  has no real-user record of it. Every figure in this file is lab. Say so with any
  comparison, because a lab improvement is not a claim about what visitors experienced.

---

## Re-run after launch

```bash
cd scripts/scan
node baseline.mjs     "https://astepabovemed.com/" "https://astepabovemed.com/our-courses/" "https://astepabovemed.com/private-group-training/"
node seo-baseline.mjs "https://astepabovemed.com/" "https://astepabovemed.com/our-courses/"
```

Then add to `case-study-facts.json` with `status: "verified"`, a `method` block naming this
file and both capture dates, and the client's approval recorded. Until the client has
approved being named, the case study does not exist.

## Where the numbers go

The case study is the proof, not the magnet. `/work` pages earn almost nothing in search;
`divi-theme-slow` earns 22 clicks and `woocommerce-too-slow` earns 18. So the measured
before-and-after belongs in those two posts first, and on the case-study page second.

Both of those posts currently argue without a single first-hand measurement, which is why
`woocommerce-low-conversion-rate` scored a weak item 12 on the 32-grade. This client is one
of the two ways to close that. The other is a platform scan.
