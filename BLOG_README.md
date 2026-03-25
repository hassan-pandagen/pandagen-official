# PandaCodeGen Blog — Content Guide

## Architecture Rules

- **NO `"use client"`** on blog `page.tsx` files — metadata export breaks in client components
- Every post is a **Server Component** only
- FAQs must be synced from `src/data/blog.ts` using: `blogPosts.find(p => p.id === "slug")?.faqs ?? []`
- Dynamic imports required for: `RelatedPosts` and animation components
- Gold standard reference: `src/app/blog/how-to-achieve-100-pagespeed/page.tsx` (97/100 score)

## JSX Order (follow exactly)

```
Header → Animation → Executive Summary (data-speakable) → Article → Mid CTA → Key Takeaways → Bottom CTA → FAQAccordion → RelatedPosts → Footer
```

## Schema @graph nodes required

- `Article` — must include: `wordCount`, `timeRequired` (ISO 8601 e.g. "PT8M"), `about[]`, `speakable`, 6 `citation[]`
- `BreadcrumbList`
- `WebPage`
- `Organization` — logo 655x113, foundingDate: "2026", alternateName: "Panda Gen", postalCode: "77489", email: "info@pandacodegen.com"
- `FAQPage`

**Removed:** HowTo schema (deprecated by Google Sept 2023, no longer generates rich results)

## Organization Schema (canonical values — use these everywhere)

```json
{
  "name": "PandaCodeGen",
  "alternateName": "Panda Gen",
  "logo": { "width": 655, "height": 113 },
  "email": "info@pandacodegen.com",
  "foundingDate": "2026",
  "areaServed": "Worldwide",
  "streetAddress": "701 Tillery St Ste 12",
  "addressLocality": "Austin",
  "addressRegion": "TX",
  "postalCode": "78702",
  "sameAs": [
    "https://twitter.com/pandacodegen",
    "https://www.linkedin.com/company/pandacodegen",
    "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
    "https://github.com/hassan-pandagen",
    "https://clutch.co/profile/panda-code-gen",
    "https://www.trustpilot.com/review/pandacodegen.com",
    "https://www.google.com/maps?cid=16271659886069582158"
  ]
}
```

---

## Existing Blog Posts (20 total)

| # | Slug | Title | Category | Status |
|---|------|-------|----------|--------|
| 01 | `wordpress-vs-nextjs` | WordPress vs Next.js: Which Is Actually Better for Your Business? | Comparison | Live ✅ |
| 02 | `how-website-speed-affects-seo` | How Website Speed Affects SEO Rankings in 2026 (With Real Data) | SEO | Live ✅ |
| 03 | `shopify-dawn-theme-slow` | Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix) | Shopify | Live ✅ |
| 04 | `wordpress-killer` | Why WordPress Is Dying (And What Smart Businesses Are Doing Instead) | WordPress | Live ✅ |
| 05 | `shopify-headless` | Why Shopify Headless Is the Future of E-Commerce (And How to Get There) | Shopify | Live ✅ |
| 06 | `wordpress-plugins-destroy-speed` | WordPress Plugins Are Destroying Your Site Speed (Here's the Proof) | WordPress | Live ✅ |
| 07 | `elementor-kills-seo` | Elementor Is Killing Your SEO Score — Here's the Data | WordPress | Live ✅ |
| 08 | `shopify-plus-still-slow` | Shopify Plus Is Still Slow. Here's Why $2,000/Month Doesn't Buy You Speed | Shopify | Live ✅ |
| 09 | `shopify-conversion-rate-speed-fix` | How Site Speed Fixes Shopify Conversion Rates (Real Data) | Shopify | Live ✅ |
| 10 | `wordpress-traffic-drop-speed` | Why Your WordPress Site Traffic Is Dropping (Speed Is Killing You) | WordPress | Live ✅ |
| 11 | `wordpress-ai-security-risk-2026` | WordPress AI Security Risk 2026: Why Plugin Vulnerabilities Are Getting Worse | Security | Live ✅ |
| 12 | `how-to-fix-slow-wordpress` | How to Fix a Slow WordPress Site (The Real Answer) | WordPress | Live ✅ |
| 13 | `how-to-achieve-100-pagespeed` | How to Achieve 100/100 PageSpeed Score: Complete Next.js Guide | Performance | Live ✅ |
| 14 | `shopify-slow-losing-sales` | Your Slow Shopify Store Is Losing You Sales Every Day | Shopify | Live ✅ |
| 15 | `why-competitor-outranks-you` | Why Your Competitor Outranks You (It's Not Their Content) | SEO | Live ✅ |
| 16 | `google-universal-commerce-protocol-what-it-means-for-your-store` | Google Universal Commerce Protocol: What It Means for Your Store | Ecommerce | Live ✅ |
| 17 | `for-agencies-offer-custom-web-development` | For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team | Agency | Live ✅ |
| 18 | `why-we-chose-nextjs-over-wordpress-2026` | Why We Chose Next.js Over WordPress for Every New Client in 2026 | Comparison | Live ✅ |
| 19 | `wordpress-vs-custom-code-real-cost-3-years` | WordPress vs Custom Code: The Real Cost Over 3 Years | Comparison | Live ✅ |
| 20 | `how-to-migrate-wordpress-to-nextjs` | How to Migrate WordPress to Next.js Without Losing SEO | Tutorial | Live ✅ |
| 21 | `nextjs-hosting-zero-cost` | How We Host Client Websites for Free ($0/Month) With Vercel | Performance | Live ✅ |
| 22 | `what-is-headless-commerce` | What Is Headless Commerce? A Plain-English Guide for Store Owners | E-Commerce | Live ✅ |

---

## Planned Blog Posts — Next 5 (Priority Order)

Posts to write next, ranked by ease of ranking + business value. New domain = target low-competition keywords first.

| Priority | Slug | Title | Primary Keyword | Est. Volume | Competition | Target Date |
|----------|------|-------|-----------------|-------------|-------------|-------------|
| ✅ 21 | `nextjs-hosting-zero-cost` | How We Host Client Websites for Free ($0/Month) With Vercel | `free nextjs hosting` | 400–1k/mo | Low–Med | ~~Mar 13–14~~ Done |
| ✅ 22 | `what-is-headless-commerce` | What Is Headless Commerce? A Plain-English Guide for Store Owners | `what is headless commerce` | 1.5k–4k/mo | Med | ~~Mar 15–16~~ Done Mar 14 |
| 🔴 23 | `shopify-vs-custom-website` | Shopify vs Custom Website: When You've Outgrown Shopify | `shopify vs custom website` | 800–2.5k/mo | Med | Mar 17–18 |
| 🔴 24 | `core-web-vitals-explained` | Core Web Vitals Explained for Business Owners (Not Developers) | `core web vitals explained` | 300–800/mo | Low–Med | Mar 19–20 |
| 🔴 25 | `woocommerce-too-slow` | WooCommerce Too Slow? Here's What's Actually Breaking Your Store | `woocommerce slow` | 500–1.5k/mo | Low–Med | Mar 21–22 |
| 🔴 26 | `custom-website-patch-company` | Does Your Patch Company Website Need a Custom Build? | `custom website for patch company` | 50–150/mo | **Very Low** | Mar 23–24 |

**Pace: 3 blogs/week** — new domain needs content velocity to build topical authority fast

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
- Use HTML `<table>` elements for comparison data (AI systems extract tables at higher rates)
- Include a "Key Takeaways" section before FAQ (3-5 numbered points, business-owner friendly)
- Use `data-speakable="true"` on Executive Summary for AI citation readiness

---

## Adding a New Blog Post — Checklist

1. Add entry to `src/data/blog.ts` with `id`, `title`, `excerpt`, `category`, `faqs[]`
2. Create `src/app/blog/[slug]/page.tsx` following gold standard structure
3. Use relative canonical paths (e.g. `/blog/slug`) — `metadataBase` resolves them
4. Organization schema must match canonical values above (no HowTo schema)
5. Add URL to `indexnow-ping.mjs` URL list
6. User runs `node indexnow-ping.mjs` ONCE after deployment (never run automatically)
7. Add to this README under "Existing Blog Posts" table

---

---

## Backlink Outreach Plan (Target: Mar 15-16)

### Vercel Showcase Submission
- **Angle:** Agency running 5+ production e-commerce sites on Vercel free tier, all scoring 95-100 PageSpeed
- **Sites to mention:** PandaCodeGen, PandaPatches, MyCustomPatches, PandaCodeLab, leather/jacket e-commerce (in pipeline)
- **Key stat:** $0/month hosting across all client sites with perfect scores
- **Action:** Find Vercel DevRel on Twitter/LinkedIn, pitch directly (not generic showcase form)
- **Message template:** "We've built 5+ production e-commerce sites on Vercel + Supabase. All score 95-100 PageSpeed. Happy to write a case study or do a joint blog post if you're interested."

### Supabase Community / Case Study
- **Angle:** Real e-commerce dashboards running on Supabase with actual transactions (PandaPatches, MyCustomPatches, leather store)
- **Action:** Reach out to Supabase DevRel, offer a "Built with Supabase" case study
- **Bonus:** Offer to write a guest post on their blog about building e-commerce backends with Supabase

### Other Opportunities
- GitHub: Contribute a small docs fix or template to Next.js or Supabase repos (gets profile + site link in their ecosystem)
- Write content that directly helps their ecosystem (the $0 hosting post already does this for Vercel)

---

*Last updated: March 14, 2026 — 21 live posts, 5 remaining planned (all 5 by Mar 24)*
