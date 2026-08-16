# A Step Above Medical — pre-rebuild baseline, 16 August 2026

**Nothing in this file is publishable yet.** It is a "before" measurement taken while the
old site is still up, because once it is replaced the before is gone forever. The
MyCustomPatches hosting and performance figures had to be withdrawn across eight surfaces
for exactly this reason: nobody captured the baseline, and the client had no invoices.

Publish only when the rebuild is live AND the same measurements have been re-run with the
same tool, and only with the client's agreement to be named.

---

## What the live site is

`https://astepabovemed.com` — "A Step Above Medical | Phlebotomy & IV Training Courses"

| | |
| --- | --- |
| Platform | WordPress 7.0.4 |
| Page builder | Divi (`et_pb` appears 2,530 times in the home page HTML) |
| Second page builder | Elementor (126 occurrences) |
| Commerce | WooCommerce |

**Two page builders are loaded on the same site.** That is the single most quotable
structural fact here, and it is the thing to verify again before publishing, because it is
the kind of detail a reader will check.

This is the client's existing site. **PandaCodeGen did not build it.** Do not list A Step
Above Medical as a client on any directory, profile or case-study page until our rebuild
is the thing serving at this domain.

---

## Measured, 16 August 2026

Raw output: `astepabovemed-2026-08-16.json`. Screenshots: `-home.png`, `-contact.png`.

### Home page

| metric | value |
| --- | ---: |
| Transferred | **6.78 MB** |
| Requests | 59 |
| Time to first byte | 172 ms |
| First contentful paint | 1,408 ms |
| Load event | **13,009 ms** |
| Wall clock to network idle | **43.1 s** |
| DOM nodes | 394 |
| Scripts | 13 external + 15 inline |
| Stylesheets | 9 |
| Images | 13 |
| axe violation nodes | 2 |

### Contact page

| metric | value |
| --- | ---: |
| Transferred | 0.99 MB |
| Requests | 45 |
| Time to first byte | **1,501 ms** |
| First contentful paint | 2,400 ms |
| Load event | 4,110 ms |
| Scripts | 14 external + 15 inline |
| Stylesheets | 10 |
| axe violation nodes | 2 |

---

## What the numbers actually say

**The story is weight and time, not accessibility.** Write it that way.

1. **6.78 MB on the home page**, and a load event at **13 seconds**. That is the headline.
2. **TTFB is 172 ms on the home page and 1,501 ms on the contact page**, roughly nine times
   slower. That pattern is what page caching looks like: the home page is served from
   cache, inner pages are rendered per request. The contact page is where enquiries come
   from, so the slowest first byte on the site sits on the page that earns the money.
3. **Two page builders and ten stylesheets on a contact page** is the plugin-and-builder
   accumulation the `divi-theme-slow` post argues about, on a real site, with numbers.

**The inconvenient finding, which ships with the rest: accessibility is fine.** Two axe
violation nodes on each page (`link-name`, `meta-viewport`), and every image already has an
alt attribute. This site does not have an accessibility problem. If the case study implies
one, it is wrong. Our own home page measured 15 contrast failures on 13 August, worse than
this client's site, and that is on the record too.

---

## Method, so the after can be compared to the before

Same tooling must be used post-launch, or the comparison is a measurement error rather than
a result. This is the rule the accessibility glossary states in print.

- Playwright, Chromium 151.0.7922.34, headless, viewport 1366x900
- Navigation waited for `load`, then network idle, then a 1.5 s settle
- axe-core 4.13.0, tags `wcag2a wcag2aa wcag21a wcag21aa wcag22aa`, iframes excluded
- Transferred bytes summed from `content-length` response headers
- Capture script: `scripts/scan/` dependencies, driver in the session scratchpad

### Limitations, state these with any figure

- **Single run, single location, no network throttling.** These are unthrottled numbers
  from one machine on one connection. They are not lab-controlled and not field data.
- **LCP did not register.** The measurement reads the buffer after load rather than
  registering a `PerformanceObserver` beforehand, so LCP is absent for both pages. Fix that
  in the after-capture and, if LCP is wanted for the comparison, re-take the before while
  the old site is still up.
- **`content-length` undercounts** where responses are chunked or compressed without the
  header, so 6.78 MB is a floor rather than an exact transfer size.
- Wall-clock-to-network-idle (43.1 s) includes third-party beacons that keep the connection
  open. It is a useful smell, not a user-facing load time. **Do not publish it as "the site
  takes 43 seconds to load."** The load event at 13 s is the defensible number.

---

## Re-run after launch

```bash
# same driver, same flags, both pages
node baseline.mjs "https://astepabovemed.com/" "https://astepabovemed.com/contact/"
```

Then add to `src/data/case-study-facts.json` with `status: "verified"`, a `method` block
naming this file and the capture date, and client approval recorded. Until the client has
approved being named, the case study does not exist.

## Why this client matters more than the average one

`divi-theme-slow` earns 22 clicks from 3,248 impressions, one of the best click-through
rates on the site, and it argues its case without a single first-party measurement. A real
Divi-to-Next.js rebuild with numbers on both ends is the evidence that page has never had.
