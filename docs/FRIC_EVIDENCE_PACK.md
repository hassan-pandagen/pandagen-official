# FRIC Evaluation — Verified Evidence Pack

**Measured:** 29 July 2026. All pandacodegen.com figures are from the production build
(`npm run build`) and live HTTP responses, not estimates.

> Everything in Part 1 is measured and defensible. Everything in Part 2 is an open question
> that needs an answer from a person before it goes in the form.

---

## PART 1 — VERIFIED (safe to state)

### §1 Information Architecture

| Item | Result | Source |
|---|---|---|
| Breadcrumb coverage | **124 valid, 0 invalid**, no issues in 90 days | Google Search Console, pandapatches.com, 28 Jul 2026 |
| Orphan pages | **0** | Full internal-link audit, pandacodegen.com |
| Broken internal links | **0 of 1,133 checked** | Same audit |
| Total internal links | **901** | Same audit |

### §2 User Experience — Search

| Item | Result |
|---|---|
| Reference | `https://www.pandacodegen.com/blog` |
| Engine | Pagefind static index, client-side WASM |
| Coverage | **77 published articles** |
| Index size | 1.7 MB |
| `/_pagefind/pagefind.js` | HTTP **200**, fetched in **0.65 s** |
| Debounce | 150 ms, then local query (single-digit ms) |
| Loading | Lazy — only on focus, zero cost until used |

Comfortably inside the ≤1 second requirement, independently testable, no bot mitigation in front of it.

### §6 SEO Architecture — full-site, not sampled

Audited **117 indexable pages** in the production build. Excluded, correctly: `/services/wordpress`
(301 `permanentRedirect`, renders nothing), `/demo/featured-products` (`robots: index:false`), and
`/_global-error` (framework internal).

| Requirement | Result |
|---|---|
| Unique titles 100% | **117/117 present, 117 unique, 0 duplicates** |
| Unique meta descriptions 100% | **117/117 present, 117 unique, 0 duplicates** |
| Canonical 100% | **117/117** |
| Structured data 100% | **117/117** |
| Internal links ≥5/page | **117/117** — median **36**, max 105 |
| Exactly one H1 | **117/117** |
| Broken links 0 | **0 of 1,133** |

### §7 GEO / AI Search

| Item | Result |
|---|---|
| One primary entity per page | **117/117 have exactly one `<h1>`** |
| Related content ≥3 links/page | **117/117** (median 36 internal links) |
| AI-readable HTML | Static export — every page is complete HTML on disk before any JS runs. Verifiable via `view-source:` or `curl` |

### §9 Security — pandacodegen.com

TLS: **TLSv1.3**, `TLS_AES_128_GCM_SHA256`.

Live now (pre-push):

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options:           SAMEORIGIN
X-Content-Type-Options:    nosniff
Referrer-Policy:           strict-origin-when-cross-origin
Permissions-Policy:        camera=(), microphone=(), geolocation=()
X-XSS-Protection:          1; mode=block
```

After the pending deploy: `X-Frame-Options` becomes `DENY`, `X-XSS-Protection` becomes `0`
(the modern correct value — `1; mode=block` is deprecated and can introduce vulnerabilities),
plus **Content-Security-Policy** and **Cross-Origin-Opener-Policy** are added. That is **8 headers**.

CSP shipping on pandacodegen:

```
base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
```

Deliberately scoped: no `script-src`, because one would silently break the consent-gated vendors
(GTM, Clarity, cal.com, Meta Pixel) on lead-generating pages. State this plainly rather than implying
a stricter policy than is deployed.

### §10 Operations

| Item | Result |
|---|---|
| Public repositories | **15**, TypeScript-dominant |
| Repos backing the cited references | `MNPS`, `Custom-Patches`, `obare-magazine`, `panda-patches-ecommerce`, `Panda-Patches-CRM-DASHBOARD` |
| READMEs | Present on all five. Sizes: 24.1 KB, 19.0 KB, 8.9 KB, 1.5 KB, 0.9 KB |

### §11 Enterprise Capability — languages

Do **not** claim ≥5. Verifiable today on pandacodegen.com:

- **3 locales live**: `en`, `fr`, `de` at `/`, `/fr`, `/de`
- Reciprocal `hreflang` + `x-default` on every localized page
- `<html lang>` correct per locale
- Per-locale entries in `sitemap.xml`
- Localized enquiry forms — a French visitor completes the form in French

State: three languages live with verifiable hreflang, architecture scales to more, FRIC's five delivered as required.

### Build facts

126 routes generated · 77 blog pages indexed · TypeScript clean · ESLint clean.

---

## PART 2 — OPEN QUESTIONS

### For the Panda Patches developer

1. **Exact live values of all six headers** on `https://www.pandapatches.com`, plus a screenshot of the
   200 browser response. We need the values, not confirmation that they are configured.
2. **The full production CSP string.** Which directives, and exactly where `'unsafe-inline'` /
   `'unsafe-eval'` appear.
3. **Attack Challenge Mode** — can a temporary IP-scoped bypass be created for FRIC's evaluation
   window? Automated scanners (securityheaders.com, Mozilla Observatory) cannot execute the JS
   challenge and will score 0 without reading any explanatory note.
4. **XSS protection — name the mechanism.** Input validation library, output escaping, rich-text and
   upload sanitisation, whether React's default escaping is being relied on.
5. **CSRF protection — name the mechanism.** SameSite cookies, CSRF token, Origin/Referer check,
   stateless API, or framework server-action protection. "Protected forms" is not an answer.
6. **Backups.** Separately: Sanity export schedule, CRM database backup schedule, retention period,
   and whether a restore has ever been tested. Git commits and Vercel deploys are not data backups.
7. **Sanity:** screenshot of Studio left-nav showing ≥10 document types; screenshot of document
   version history; and confirmation of whether a **review/approval** workflow is actually configured
   or whether it is draft/publish only.
8. **Case studies:** exact count of live individual case-study URLs at `/case-studies`, and confirmation
   they are genuine case studies rather than product or portfolio tiles.
9. **Crawl export** (Screaming Frog or similar) for pandapatches showing broken links, orphan pages,
   duplicate titles/descriptions, and canonical status.
10. **Form required-field count** on the homepage quote form — exact number visible before the user can
    proceed.

### For the owner

11. **MNPS consent** — did Minnesota Plastic Surgery agree to their source being public on GitHub? An
    enterprise evaluator may ask whether their code would be public too. Recommend adding a line stating
    client repositories are private by default and published only with written client consent.
12. **PSI / Core Web Vitals** — quota exhausted on 29 Jul. Re-run for each reference and record desktop
    PSI, mobile PSI, LCP, CLS, INP, the exact URL and the test date. Do not let one homepage result
    stand for every template.

### Still to test

13. **Horizontal overflow at 360 / 390 / 414 / 430 px** across all routes
    (`document.documentElement.scrollWidth > clientWidth`).
14. **Touch targets ≥44×44 px** — computed dimensions for nav, primary CTA and form controls.
15. **Error handling** — screenshots of required-field error, invalid-email error, submission failure,
    and success state.
16. **Font inventory** — exact families loaded per reference, to support "max 2 font families".

---

## Claims to soften regardless

- **"100% reusable components"** — unprovable without a full component audit. Use: *core page patterns
  and interface modules are implemented as reusable components.*
- **"HTML5 100%"** — needs W3C validator output per template, or reword to *HTML5 implementation*.
- **"Semantic HTML 100%"** — needs a landmark and heading-outline check per template.
- **§5 Content Types ≥10** — the current evidence names seven. Name ten or drop the number.
