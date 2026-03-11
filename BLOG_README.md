# PandaCodeGen Blog — Content Guide

## Architecture Rules

- **NO `"use client"`** on blog `page.tsx` files — metadata export breaks in client components
- Every post is a **Server Component** only
- FAQs must be synced from `src/data/blog.ts` using: `blogPosts.find(p => p.id === "slug")?.faqs ?? []`
- Dynamic imports required for: `RelatedPosts` and animation components
- Gold standard reference: `src/app/blog/how-to-achieve-100-pagespeed/page.tsx` (97/100 score)

## JSX Order (follow exactly)

```
Header → Animation → Executive Summary (data-speakable) → Article → Mid CTA → Bottom CTA → FAQAccordion → RelatedPosts → Footer
```

## Schema @graph nodes required

- `Article` — must include: `wordCount`, `timeRequired`, `about[]`, `speakable`, 6 `citation[]`
- `BreadcrumbList`
- `WebPage`
- `Organization` — logo 655×113, foundingDate: "2023"
- `FAQPage`
- `HowTo` — for tutorial/process posts only

---

## Existing Blog Posts (20 total)

| # | Slug | Title | Category | Status |
|---|------|-------|----------|--------|
| 01 | `wordpress-vs-nextjs` | WordPress vs Next.js: Which Is Actually Better for Your Business? | Comparison | Live ✅ |
| 02 | `how-website-speed-affects-seo` | How Website Speed Affects SEO Rankings in 2026 (With Real Data) | SEO | Live ✅ |
| 03 | `shopify-dawn-theme-slow` | Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix) | Shopify | Live ✅ |
| 04 | `wordpress-killer` | Why WordPress Is Dying (And What Smart Businesses Are Doing Instead) | WordPress | Live ✅ |
| 02 | `shopify-headless` | Why Shopify Headless Is the Future of E-Commerce (And How to Get There) | Shopify | Live ✅ |
| 03 | `wordpress-plugins-destroy-speed` | WordPress Plugins Are Destroying Your Site Speed (Here's the Proof) | WordPress | Live ✅ |
| 04 | `elementor-kills-seo` | Elementor Is Killing Your SEO Score — Here's the Data | WordPress | Live ✅ |
| 05 | `shopify-plus-still-slow` | Shopify Plus Is Still Slow. Here's Why $2,000/Month Doesn't Buy You Speed | Shopify | Live ✅ |
| 06 | `shopify-conversion-rate-speed-fix` | How Site Speed Fixes Shopify Conversion Rates (Real Data) | Shopify | Live ✅ |
| 07 | `wordpress-traffic-drop-speed` | Why Your WordPress Site Traffic Is Dropping (Speed Is Killing You) | WordPress | Live ✅ |
| 08 | `wordpress-ai-security-risk-2026` | WordPress AI Security Risk 2026: Why Plugin Vulnerabilities Are Getting Worse | Security | Live ✅ |
| 09 | `how-to-fix-slow-wordpress` | How to Fix a Slow WordPress Site (The Real Answer) | WordPress | Live ✅ |
| 10 | `how-to-achieve-100-pagespeed` | How to Achieve 100/100 PageSpeed Score: Complete Next.js Guide | Performance | Live ✅ |
| 11 | `shopify-slow-losing-sales` | Your Slow Shopify Store Is Losing You Sales Every Day | Shopify | Live ✅ |
| 12 | `why-competitor-outranks-you` | Why Your Competitor Outranks You (It's Not Their Content) | SEO | Live ✅ |
| 13 | `google-universal-commerce-protocol-what-it-means-for-your-store` | Google Universal Commerce Protocol: What It Means for Your Store | Ecommerce | Live ✅ |
| 14 | `for-agencies-offer-custom-web-development` | For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team | Agency | Live ✅ |
| 15 | `why-we-chose-nextjs-over-wordpress-2026` | Why We Chose Next.js Over WordPress for Every New Client in 2026 | Comparison | Live ✅ |
| 16 | `wordpress-vs-custom-code-real-cost-3-years` | WordPress vs Custom Code: The Real Cost Over 3 Years | Comparison | Live ✅ |

---

## Planned Blog Posts — Next 10 (Priority Order)

Posts to write next, ranked by ease of ranking + business value. New domain = target low-competition keywords first.

| Priority | Slug | Title | Primary Keyword | Est. Volume | Competition | Target Date |
|----------|------|-------|-----------------|-------------|-------------|-------------|
| ✅ done | `shopify-dawn-theme-slow` | Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix) | `shopify dawn theme slow` | 300–700/mo | **Low** | Mar 2026 |
| ✅ done | `how-website-speed-affects-seo` | How Website Speed Affects SEO Rankings in 2026 | `how does website speed affect seo` | 1k–3k/mo | Low–Med | Mar 2026 |
| ✅ done | `wordpress-vs-nextjs` | WordPress vs Next.js: Which Is Actually Better for Your Business? | `wordpress vs next.js` | 1.5k–4k/mo | Med | Mar 2026 |
| ✅ done | `how-to-migrate-wordpress-to-nextjs` | How to Migrate WordPress to Next.js Without Losing SEO | `how to migrate wordpress to next.js` | 300–800/mo | Low–Med | Mar 2026 |
| 🟡 5 | `nextjs-hosting-zero-cost` | How We Host Next.js Sites for $0 a Month (Vercel Free Tier Explained) | `free nextjs hosting` | 400–1k/mo | Low–Med | Apr 2026 |
| 🟡 6 | `what-is-headless-commerce` | What Is Headless Commerce? A Plain-English Guide for Store Owners | `what is headless commerce` | 1.5k–4k/mo | Med | May 2026 |
| 🟡 7 | `shopify-vs-custom-website` | Shopify vs Custom Website: When You've Outgrown Shopify | `shopify vs custom website` | 800–2.5k/mo | Med | May 2026 |
| 🟢 8 | `core-web-vitals-explained` | Core Web Vitals Explained for Business Owners (Not Developers) | `core web vitals explained` | 300–800/mo | Low–Med | May 2026 |
| 🟢 9 | `woocommerce-too-slow` | WooCommerce Too Slow? Here's What's Actually Breaking Your Store | `woocommerce slow` | 500–1.5k/mo | Low–Med | Jun 2026 |
| 🟢 10 | `custom-website-patch-company` | Does Your Patch Company Website Need a Custom Build? | `custom website for patch company` | 50–150/mo | **Very Low** | Jun 2026 |

**Priority key:** 🔴 Write now (quickest ranking wins) · 🟡 Write next (med-term) · 🟢 Write when capacity allows

---

## Posts to Update (Existing — Quick Wins)

| Post | Update Needed | Keyword to Add |
|------|---------------|----------------|
| `shopify-plus-still-slow` | Add "Is Shopify Plus worth it?" section | `shopify plus worth it 2026` |
| `wordpress-killer` | Add 2026 date framing throughout | `is wordpress worth using 2026` |
| `shopify-slow-losing-sales` | Add PAA answer block for "why is my Shopify store so slow?" | `why is my shopify store slow` |
| `elementor-kills-seo` | Add comparison table vs custom code | `elementor vs custom code performance` |
| `shopify-conversion-rate-speed-fix` | Update with 2026 CRO benchmarks | `shopify conversion rate optimization 2026` |

---

## Blog SEO Strategy Notes

### Keywords to Own (Realistic for New Domain)
- All "Shopify [specific product] slow" variants (Dawn, Plus, 2.0, app bloat)
- All "WordPress vs [Next.js / custom / headless]" comparison posts
- All "$0 hosting / free Next.js hosting" angle posts
- Local: "Missouri City web developer", "Houston Next.js developer"

### Keywords to Avoid Until Domain Ages
- "hire Next.js developer" — dominated by Upwork, Clutch, Arc.dev
- "custom website development" — too broad, huge competition
- "WordPress migration service" — dominated by agencies with 10+ years of DR

### Internal Linking Strategy
Every new post should link to:
1. At least 1 existing blog post (topical cluster building)
2. The most relevant service page (`/services/wordpress-migration`, `/services/ecommerce`)
3. `/work/mycustompatches` when citing real speed improvement data

### Content Rules
- Always use real client data (MyCustomPatches: 3.2s → 0.7s, 45 → 100 PageSpeed, $150 → $0)
- Every post needs a "before/after" frame — readers need contrast to understand the value
- End every post with a booking CTA: `https://cal.com/pandagen/discovery`
- Read time target: 8–12 minutes (1,800–2,800 words)

---

## Adding a New Blog Post — Checklist

1. Add entry to `src/data/blog.ts` with `id`, `title`, `excerpt`, `category`, `faqs[]`
2. Create `src/app/blog/[slug]/page.tsx` following gold standard structure
3. Add URL to `indexnow-ping.mjs` URL list
4. Run `node indexnow-ping.mjs` ONCE after deployment (never repeat)
5. Add to this README under "Existing Blog Posts" table

---

*Last updated: March 2026 — 16 live posts, 10 planned*
