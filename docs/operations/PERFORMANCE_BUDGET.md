# Performance budget

This budget is a release guardrail, not a public guarantee. Public performance
claims require dated production evidence, a named test profile, representative
templates, and documented exclusions.

## Field targets

Evaluate field data at the 75th percentile, split by mobile and desktop. A route
group passes only when all three Core Web Vitals are in the "good" range:

| Metric | Good target |
|---|---:|
| Largest Contentful Paint (LCP) | <= 2.5 seconds |
| Interaction to Next Paint (INP) | <= 200 milliseconds |
| Cumulative Layout Shift (CLS) | <= 0.10 |

Review homepage, service, pricing, work, blog-listing, representative blog-post,
and contact route groups separately. Do not use a site-wide average to conceal a
slow template.

The consented `WebVitalsReporter` sends real-user measurements to GA4 as the
`web_vital` event. Vercel Web Analytics remains a second consent-gated source.
Field reports require enough production traffic and should be cross-checked
against PageSpeed Insights/CrUX and Search Console.

## Lab regression budget

Until a measured production baseline is recorded, use these conservative CI or
preview targets for representative mobile runs:

| Measure | Initial budget |
|---|---:|
| Lighthouse performance score | >= 90 |
| Lighthouse accessibility score | >= 95 |
| LCP | <= 2.5 seconds |
| Total Blocking Time | <= 200 milliseconds |
| CLS | <= 0.10 |
| Total transferred JavaScript | no increase above the recorded baseline without review |
| Total page weight | no increase above the recorded baseline without review |

Lab results are diagnostic and must not be described as field Core Web Vitals.
INP requires real interaction data; TBT is only a lab proxy.

## Release process

1. Record a baseline for each representative route on the production-equivalent
   preview, including tool version, device/network profile, run count and date.
2. Run at least three lab samples and use the median for regression review.
3. Block regressions that exceed a threshold or materially increase bytes unless
   the reviewer documents the product tradeoff.
4. After release, review 28-day field data and the 75th percentile by route group.
5. Open an incident when a Core Web Vital moves into the poor range or a release
   causes a statistically credible degradation.

Official references:

- [Web Vitals and current metric lifecycle](https://web.dev/articles/vitals)
- [Field measurement best practices](https://web.dev/articles/vitals-field-measurement-best-practices)
- [Performance budgets](https://web.dev/articles/performance-budgets-101)
- [Next.js analytics and `useReportWebVitals`](https://nextjs.org/docs/app/guides/analytics)
