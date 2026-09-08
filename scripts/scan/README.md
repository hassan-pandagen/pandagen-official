# Accessibility scanner

Two tools, deliberately separate.

- **`selfscan.mjs`** measures **our own** pages, by path, from the sitemap. Output is an internal backlog.
- **`scan.mjs`** measures **other people's** sites for the sector study. Output is a distribution, never a named site.

Neither is a dependency of the website. `scripts/scan/` has its own `package.json` so `npm ci` at the root and the Vercel build are untouched, and `scripts/scan/node_modules/` is gitignored.

## Setup

```bash
cd scripts/scan
npm install
npx playwright install chromium chromium-headless-shell   # only if not already present
```

## Self-scan

```bash
# from the repo root, in one terminal
npm run build && npx next start -p 3111

# in another
cd scripts/scan
node selfscan.mjs --base http://localhost:3111 --out ../../selfscan.json
node selfscan.mjs --base https://www.pandacodegen.com --skip-i18n
```

Scan a local build **before** pushing. Production only confirms what already shipped.

## Sector scan

```bash
node scan.mjs --sample sample-pilot.json --limit 10     # validate the harness
node scan.mjs --sample sample.json --out ../../src/data/scan/2026-08-14.json
```

Every site is measured twice: its home page, and the highest transactional-intent page linked from it (booking, then quote, then demo, then contact, in that order, recorded per result as `matchedBy`).

**That pairing is the whole point.** The WebAIM Million tests one million home pages, and our own pillar post says in print that this is its most important limitation: the pages where a failure actually costs somebody something are checkouts, booking forms and account settings, and none of them are in that data. The home page here is not the finding. The delta is the finding, and the home page is measured so a reader can check our baseline against a published one.

## Rules that are not negotiable

1. **Never publish a named third-party site's failures.** Raw output keeps hostnames so a run is auditable and re-runnable. The report publishes distributions. A league table of named businesses is a different product with different ethics.
2. **axe-core detects a subset of WCAG failures.** A page with zero detected violations is not conformant. This limitation ships with every figure, exactly as it does for the WebAIM data in `research-facts.json`.
3. **Never compare our counts to WebAIM's.** They use WAVE, we use axe-core. Different rulesets produce different counts, and our own glossary says that if you compare error counts you keep the tool constant. Comparing across tools and reporting the difference as a finding would be a measurement error.
4. **Sites that failed to load stay in the denominator.** Dropping them biases the sample toward sites that are well-run in every other respect too. `denominator` in the output records attempted, measured, failed and no-intent-page-found.
5. **Record the method with the result.** Every run stores the axe version, browser version, WCAG tag set, viewport, settle time, timeout, retry count and sample frame.

## Pilot, 14 Aug 2026

12 vendor sites, `sample-pilot.json`. 12 measured, 0 failed to load, intent page found on 9.

It validated the harness and **falsified the starting hypothesis**. Intent pages were not worse: the paired median went from 1 detected node on the home page to 0 on the intent page, and the intent page was worse on only 1 of 9. The sample explains it. Website builders and developer-platform companies employ the most sophisticated web teams there are, and 8 of 12 home pages had 0 or 1 detected violations. That is nothing like a representative site.

**The sampling frame is therefore the entire study.** A frame of vendor marketing sites measures how good the best-resourced teams are. Pick the frame before running anything at scale, and write down why.

## What the first self-scan found, 14 Aug 2026

134 pages scanned from the sitemap, 0 errors. **64 clean, 70 failing, 740 detected violation nodes.**

| rule | nodes | pages |
| --- | ---: | ---: |
| `color-contrast` | 388 | 37 |
| `link-in-text-block` | 329 | 34 |
| `scrollable-region-focusable` | 23 | 21 |

Three rules, and roughly six root causes behind almost all of it:

| cause | instances | fix |
| --- | ---: | --- |
| `#78716c` (stone-500) on `#f5f5f4` paper = 4.39 | 57 | stone-600 |
| `#b8410c` (cognac) on dark surfaces = 2.78 to 3.16 | ~45 | `text-cognac-light` |
| `#57534e` (stone-600) on dark surfaces = 1.97 to 2.58 | ~49 | stone-400 |
| `#fb2c36` (red-500) on white = 3.8 | 41 | darker red |
| `#009966` (emerald-600) on white = 3.65 | 13 | darker emerald |
| inline links coloured but not underlined until hover | 329 | persistent underline on body links |

### Result, 15 Aug 2026: 740 to 0

| pass | nodes | what changed |
| --- | ---: | --- |
| baseline | 740 | |
| prose link underline + focusable code block | 404 | two changes, 336 nodes |
| `stone-500` / `red-500` / `emerald-600` token overrides | 285 | three values in `@theme` |
| tech-card opacity, locale pages, targeted dark panels | 225 | per-component |
| surface-aware accent and neutral tokens | 168 | one CSS block |
| `--color-cognac-light` defined, `--color-cognac` darkened | 99 | see below |
| decorative numerals, remaining fills, red/green/orange | 66 | per-component |
| 105 scrollable containers made focusable | 26 | one codemod |
| stragglers | **0** | |

**134 of 134 pages report zero detected violations**, on three consecutive runs.

### Four things this cost, worth not repeating

**A find-and-replace cannot fix a surface-dependent colour.** No single cognac clears 4.5:1 on both: clearing it against white caps relative luminance at 0.183, clearing it against `#1c1917` needs at least 0.233. Swapping `text-cognac` for `text-cognac-light` by class string added 51 new failures, 33 because the same string sits on paper in `/work` and on charcoal in `/services`. The fix is the surface-aware block in `globals.css`, which keys off background classes and resets inside light cards nested in dark sections.

**A token defined only as an `@utility` is invisible to `var()`.** `var(--color-cognac-light)` was undefined, so it fell back to `inherit` and cognac text on dark rendered at 1.01:1 against the charcoal behind it. Define the custom property in `@theme`, then have the utility read it.

**In Tailwind v4 the `@theme` token beats a same-named `@utility`.** Darkening only `@utility text-cognac` changed nothing on the page. The value has to move to `--color-cognac`.

**`aria-hidden` does not suppress axe's contrast rule.** Decorative numerals still failed, and they failed the relaxed 3:1 large-text threshold too. They needed real contrast.

### Two scanner bugs that produced wrong numbers

**A stale server.** `pkill -f "next start"` did not match the process, so a rebuild kept being measured against the previous build. Two class strings were reported as failing after they had already been fixed in source. Kill by PID on the port, and verify a known change is live before trusting a run.

**Sampling mid-animation.** Reveal transitions were caught in flight: one run reported `#e1e1e0` on `#dddddc` at 1.03:1, two greys that only coexist during a fade. Three runs of the home page gave 0, 3, 0. The scanner now emulates `reducedMotion: 'reduce'`, waits for `load` then network idle, then settles 2.5s. Third-party iframes are excluded, because their documents are not ours to fix and they were reporting `html-has-lang` against pages whose own `lang` is correct.

**This has to be finished before the sector scan publishes anything.** The pillar post argues that low contrast is a hex value and the most widespread failure on the web. Publishing that while shipping 388 instances of it is the cheapest possible way to lose the authority the research was written to build.
