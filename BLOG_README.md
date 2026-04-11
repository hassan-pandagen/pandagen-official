# PandaCodeGen Blog — Single Source of Truth

> This is the only blog reference document. PRE_PUBLISH_CHECKLIST.md has been deleted. All rules live here.
> Last updated: April 6, 2026 — 33 live posts

---

## Part 1 — Critical Rules (Read First, Break Nothing)

```
NEVER add "use client" to blog page.tsx files
  Reason: metadata export breaks in client components. Build fails.
  Fix: Blog pages are Server Components. Use dynamic() for client components.

NEVER use <BlogFeatureVisual /> without a category prop
  Reason: requires { category: string } — use specific animation components directly.

NEVER ping IndexNow with the full URL list repeatedly
  Reason: Bing blacklists domains that ping same URLs daily.
  Rule: Add only NEW/CHANGED URLs to indexnow-ping.mjs, ping ONCE after deploy.

NEVER hardcode FAQs in schema
  Reason: two sources of truth = maintenance hell.
  Rule: blogPosts.find(p => p.id === "slug")?.faqs ?? []

NEVER use import dynamic from "next/dynamic"
  Reason: conflicts with export const dynamic = "force-static" on blog pages.
  Rule: import lazyLoad from "next/dynamic" and use lazyLoad(...)

NEVER use HowTo schema
  Reason: Google deprecated HowTo rich results September 2023. No longer generates rich results.
  Rule: @graph nodes are: Article + BreadcrumbList + WebPage + Organization + FAQPage (5 nodes only)

NEVER use "Panda Gen" as PandaCodeGen alternateName
  Reason: Panda Gen is a different brand.
  Rule: alternateName is "Panda Code Gen"
```

---

## Part 2 — Organization Schema (Canonical Values — Never Change)

Use these exact values in every blog post. Do not deviate.

```json
{
  "@type": "Organization",
  "@id": "https://www.pandacodegen.com/#organization",
  "name": "PandaCodeGen",
  "alternateName": "Panda Code Gen",
  "url": "https://www.pandacodegen.com",
  "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
  "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow, expensive platforms. We guarantee 95 to 100/100 Google PageSpeed on every build.",
  "areaServed": "Worldwide",
  "foundingDate": "2026",
  "streetAddress": "701 Tillery St Ste 12",
  "addressLocality": "Austin",
  "addressRegion": "TX",
  "postalCode": "78702",
  "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
  "sameAs": [
    "https://twitter.com/pandacodegen",
    "https://www.linkedin.com/company/pandacodegen",
    "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
    "https://github.com/hassan-pandagen",
    "https://clutch.co/profile/panda-code-gen",
    "https://www.trustpilot.com/review/pandacodegen.com",
    "https://www.google.com/maps?cid=16271659886069582158",
    "https://www.goodfirms.co/company/pandacodegen",
    "https://www.crunchbase.com/organization/pandacodegen",
    "https://www.sanity.io/exchange/community/pandacodegen",
    "https://www.behance.net/pandacodegen",
    "https://dev.to/pandacodegen"
  ]
}
```

---

## Part 3 — @graph Schema Nodes (Every Post)

```
Article node — required fields:
  "@type": "Article"
  "headline" — exact H1 title text
  "description" — matches meta description
  "image" — "https://www.pandacodegen.com/og-image.jpg"
  "datePublished" — ISO: "YYYY-MM-DDT00:00:00-05:00"
  "dateModified" — same as published on first publish, update on edits
  "author" — Person node with @id, name, jobTitle, url, image, sameAs
  "publisher" — Organization node (abbreviated — @id reference only)
  "mainEntityOfPage" — { "@type": "WebPage", "@id": full URL }
  "articleSection" — category name
  "wordCount" — actual count
  "timeRequired" — "PT{X}M" where X = wordCount / 250
  "about[]" — 4 entities (mix of Thing and SoftwareApplication)
  "inLanguage": "en-US"
  "speakable" — { "@type": "SpeakableSpecification", "cssSelector": ["h1","h2","[data-speakable='true']"] }
  "keywords" — array of 5+ keyword strings
  "citation[]" — minimum 6 authoritative external sources

BreadcrumbList node:
  Position 1: Home
  Position 2: Blog
  Position 3: This Post (full slug URL)

WebPage node:
  "url", "name", "description"
  "isPartOf": { "@id": "https://www.pandacodegen.com/#website" }
  "datePublished" + "dateModified"
  "breadcrumb" — @id reference to BreadcrumbList

Organization node (use canonical values from Part 2)

FAQPage node:
  Minimum 4 Question/Answer pairs (5 preferred)
  Always pulled dynamically: blogPosts.find(p => p.id === "slug")?.faqs ?? []
```

### about[] Entity Types

| Topic | @type |
|-------|-------|
| Software (WordPress, Shopify, Next.js) | `"SoftwareApplication"` |
| Concept (SEO, Security, Core Web Vitals) | `"Thing"` |
| Process (Migration, Optimisation, Speed) | `"Thing"` |

Rule: 4 entities minimum — 2 specific + 2 broad.

### Word Count to timeRequired

| Word Count | timeRequired | Status |
|-----------|-------------|--------|
| Under 2,200 | — | Do not publish |
| 2,500 | PT10M | Acceptable |
| 2,800 | PT11M | Good |
| 3,000 | PT12M | Gold standard |
| 3,500+ | PT14M | Competitive keywords only |

Formula: `wordCount / 250 = minutes`

---

## Part 4 — JSX Structure (Follow Exactly)

### Import pattern

```tsx
import lazyLoad from "next/dynamic";  // NOT "dynamic" — conflicts with export const dynamic

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));
export const dynamic = "force-static";
```

### Page order (exact)

```
Header
Article wrapper: max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14
  script[type="application/ld+json"]
  Breadcrumb (3 items: Home > Blog > Post)
  Link href="/blog" — Back to Blog
  Title block:
    Category badge chip
    h1 (text-5xl md:text-6xl font-bold, key word in <span className="font-serif italic text-cognac">)
    Subtitle p (text-xl text-stone-600)
    BlogAuthor (date + readTime + bio)
  Animation div (mb-12)
  Executive Summary div (bg-stone-50, data-speakable="true") — skip only for story-hook posts
  Article body (space-y-8)
  Mid CTA (my-10 p-6 bg-stone-50 border rounded-2xl text-center) — after pain section
  Bottom CTA (bg-stone-50 border rounded-lg p-8 mt-16 text-center)
  FAQAccordion
  RelatedPosts
Footer
```

### Animation assignment

| Post topic | Animation |
|-----------|-----------|
| Speed, Performance, WordPress | `PageSpeedAnimation` |
| Revenue, Conversion, Shopify | `SalesImpactAnimation` |
| SEO, Rankings, Traffic | `SEORankingAnimation` |
| Security | `SecurityShieldAnimation` |
| AI, Protocol, Commerce | `UCPFlowAnimation` |

Do NOT use `<BlogFeatureVisual />` without a `category` prop.

### BlogStyles components

```tsx
<BlogHeader>H2 heading (Playfair Display serif)</BlogHeader>
<BlogText>Body paragraph — text-stone-700, 1.7 line-height</BlogText>
<BlogList items={["Item...", "Item..."]} />
<BlogHighlight>key phrase</BlogHighlight>
<BlogQuote>Pull quote</BlogQuote>
<BlogAuthor date="Apr 6, 2026" readTime="12 min read" bio="Hassan builds..." linkedIn="..." />
```

BlogAuthor rules:
- Always pass date, readTime, bio, linkedIn props
- Never use separate Calendar/Clock icon divs — removed from all posts Mar 2026

### CTA rules

- All blog CTAs use `CalModalButton` (inline modal, not `target="_blank"`)
- 3 intentional exceptions — do not change these:
  - `for-agencies-offer-custom-web-development`: CTA goes to `/partners`
  - `how-website-speed-affects-seo`: CTA goes to `/contact`
  - `google-universal-commerce-protocol-what-it-means-for-your-store`: CTA goes to `/services/ecommerce`

---

## Part 5 — Pre-Publish Checklist (Work Top to Bottom)

### STEP 0 — Strategic Fit (Before Writing a Word)

```
[ ] Primary keyword has clear commercial or problem-solving intent
    Good: "why shopify is slow", "wordpress cost 2026", "how to fix core web vitals"
    Bad:  "what is a website", "web development tips"

[ ] Keyword is specific enough to rank in 3-6 months
    Good: "shopify plus still slow despite paying $2,300/mo"
    Bad:  "shopify" or "speed"

[ ] Post targets exactly ONE ICP:
    - Business owner frustrated with slow/expensive WordPress
    - Shopify merchant losing sales to load time
    - E-commerce brand considering headless migration
    - Agency looking for white-label dev partner
    - Developer evaluating Next.js vs WordPress

[ ] CTA matches the reader's specific pain point
    "Fix My WordPress Speed" post: CTA = "Get Free WordPress Speed Audit"
    Never use: "Contact Us" or "Learn More"

[ ] You have searched for 50+ buyer-intent pain points (current year) before writing
    See Part 7 for the pain point research process
```

### STEP 1 — Content Structure

```
[ ] H1 format: [Keyword]: [Emotional/Specific Hook]
    Good: "Shopify Plus Still Slow? Why $2,300/mo Doesn't Fix Core Web Vitals"
    Bad:  "Shopify Speed Tips"

[ ] Subtitle (p under H1): one sentence — "what will I get from this post?"

[ ] Word count: 2,800+ minimum. Gold standard: 3,000+. Do not publish under 2,200.

[ ] Executive Summary — 4 bullet points as reader takeaways
    - data-speakable="true" on the div
    - Written as: what the reader will know/save/fix after reading
    - Story-hook posts can skip (see UCP post)

[ ] At least 6 H2 subheadings, each containing a keyword variation

[ ] At least 2 data points or statistics per major section

[ ] At least 1 real client example (can be anonymised)

[ ] Mid-article CTA after the pain section (specific wording per post, not copy-pasted)

[ ] Bottom CTA after article content, before FAQ

[ ] FAQ — minimum 4 questions (5 preferred)
    - Stored in blog.ts faqs[] (not hardcoded in JSX)
    - Questions = what people literally type into Google or ChatGPT
    - Answers: 2-4 sentences, plain English, no dev jargon
```

### Buyer-Intent H2 Order (Platform-Complaint Posts)

This applies to all posts where the reader is frustrated with a platform (Wix, WordPress, Shopify, Squarespace, Webflow). This is the order that converts best because it mirrors how the buyer thinks.

```
PART 1 — Business Cost First (H2 1)
  Lead with what it is costing them in revenue, not the technical cause.
  Good H2: "What a Slow Wix Site Is Costing Your Business Right Now"
  Good H2: "How Much Revenue Is a Slow Shopify Store Costing You Each Year?"
  Bad H2:  "Understanding Wix Performance Issues"

PART 2 — What the Numbers Actually Are (H2 2)
  Real data, benchmarks, comparisons. No marketing numbers.
  Good H2: "What Google Score Does a Wix Site Actually Get in 2026?"
  Good H2: "Shopify Plus Real-World Speed Data"

PART 3 — Root Cause (H2 3-4)
  Explain WHY the platform is slow — what they cannot change.
  This is where technical content belongs. After business cost, not before.

PART 4 — What You Can Try (H2 5)
  Honest "you can do X but it only helps Y%" section.
  Never oversell what optimizations can achieve on a capped platform.

PART 5 — Decision Framework (H2 6) — "Should You Stay or Move On?"
  This section is the gap no competitor fills. Most blogs end at "it's hard."
  This one gives them a decision grid: stay if X, move if Y.
  Include specific criteria, not vague advice.

PART 6 — How We Solve It (H2 7-8)
  Migration process, proof, pricing, guarantee. Only after the reader
  has decided the problem is real and worth solving.
```

Note: wix-too-slow, shopify-slow-losing-sales, shopify-plus-still-slow, and webflow-migration-cost follow this pattern. Apply to all new platform-complaint posts.
```

### STEP 2 — E-E-A-T Signals

```
[ ] BlogAuthor component present with bio prop

[ ] 6 citations minimum to authoritative external sources
    Best: Google, Vercel, Next.js docs, Shopify Developers, web.dev, Cloudflare, Think With Google
    Never: random blogs, Wikipedia, competitor agencies, Medium

[ ] All citations in Article schema citation[] array

[ ] First-person voice: "we built", "our clients", "we have seen"

[ ] datePublished and dateModified set correctly

[ ] A statistic appears in the first 150 words
```

### STEP 3 — Schema @graph Checklist

```
[ ] Article node — all fields from Part 3
    [ ] wordCount (count manually)
    [ ] timeRequired (wordCount / 250 = PT{X}M)
    [ ] about[] — 4 entities
    [ ] speakable
    [ ] citation[] — 6 sources minimum

[ ] BreadcrumbList node — 3 positions

[ ] WebPage node — url, name, description, isPartOf, dates, breadcrumb ref

[ ] Organization node — exact canonical values from Part 2

[ ] FAQPage node — pulled from blog.ts, min 4 Q/A pairs
```

### STEP 4 — JSX / Component Checklist

```
[ ] NO "use client" at top of file

[ ] lazyLoad imports for animation + RelatedPosts + CalModalButton

[ ] Breadcrumb component — 3 items

[ ] Category badge chip present

[ ] H1 has serif italic accent on emotional/key word

[ ] BlogAuthor with date, readTime, bio, linkedIn

[ ] Animation in mb-12 div

[ ] Executive Summary with data-speakable="true" (unless story-hook post)

[ ] Article body in space-y-8 div

[ ] Mid CTA uses CalModalButton (not href to cal.com)

[ ] Bottom CTA uses CalModalButton

[ ] {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

[ ] <RelatedPosts currentSlug="slug" /> at bottom
```

### STEP 5 — Metadata

```
[ ] title — max 60 chars. No pipe needed if absolute: true.

[ ] description — 140-160 chars with: primary keyword + pain + hint at solution

[ ] alternates.canonical — exact relative path: "/blog/slug" (no trailing slash)

[ ] keywords[] — 6-10 keywords, primary keyword first

[ ] openGraph: title, description, type: "article", publishedTime, authors: ["Hassan"],
    url (full), images: [{ url: ".../og-image.jpg", width: 1200, height: 630 }]

[ ] twitter: card: "summary_large_image", title, description
```

### STEP 6 — Internal Linking (Weakest Area Across All Posts)

```
[ ] Minimum 2 in-body anchor links to other blog posts
    Format: <Link href="/blog/related-slug">keyword-rich anchor text</Link>
    Never: "click here", "read more"

[ ] Minimum 1 in-body link to a relevant service page
    Speed posts: /services/wordpress-migration or /services/custom-engineering
    Shopify posts: /services/ecommerce
    Agency posts: /partners

[ ] RelatedPosts component at bottom
```

### STEP 7 — GEO / AEO / AI Search Readiness

```
GEO = Generative Engine Optimization (ChatGPT, Perplexity, Gemini citations)
AEO = Answer Engine Optimization (Google AI Overviews, voice, featured snippets)

[ ] about[] has 4 entities (AI engines use this to determine authority topic)

[ ] Executive Summary answers the primary question directly in first 3 sentences

[ ] data-speakable="true" on Executive Summary div

[ ] FAQ answers in natural spoken language — not "the primary optimization technique involves..."

[ ] A statistic in the first 150 words

[ ] Post title phrased to match an AI chat query
    "Why is my WordPress site losing traffic?" — title contains that phrasing

[ ] Topic is something someone would ask an AI assistant in 2026
```

### STEP 8 — Final Pre-Publish QA

```
[ ] npx next build — zero TypeScript errors, zero compile warnings

[ ] Read first 3 paragraphs out loud — would a busy business owner keep reading?

[ ] First sentence contains "you" or "your"

[ ] No paragraph longer than 4 lines (mobile check)

[ ] Canonical URL matches the actual folder name exactly

[ ] Date in JSX matches datePublished in schema exactly

[ ] postFAQs variable pulls from correct slug ID

[ ] No em dashes (—) or en dashes (–) anywhere in content
    Reason: Breaks AI citation readiness. Use periods, commas, colons instead.
    External source citation names are the only exception (their titles, not your copy).

[ ] After deploy: add ONLY the new URL to indexnow-ping.mjs, user runs once

[ ] After deploy: Google Search Console > URL Inspection > Request Indexing manually
```

---

## Part 6 — The Ranking Formula

```
1. KEYWORD INTENT
   Use "how to", "why is", "vs", or "cost of" framing.
   These 4 patterns carry the highest commercial intent in B2B search.

2. SCHEMA STACK
   Article + FAQPage in the same @graph = eligible for:
   - FAQ rich result (expandable answers under your listing)
   - AI Overview citation (Google picks structured data)
   Note: HowTo schema deprecated Sept 2023 — do not use.

3. CONTENT STRUCTURE
   Answer > Proof > Steps > FAQ > CTA
   Not: intro > context > body > conclusion (academic style = slow ranking)

4. CITATIONS STRATEGY
   Cite Google's own documentation wherever possible.
   "According to Google's Core Web Vitals documentation..." = authority signal.

5. WORD COUNT
   Under 2,500 = cannot compete for most keywords.
   3,000 words with real data outranks 2,000 words with fluff every time.

6. FRESHNESS
   Include "2026" in the title and in the first 100 words.
   Update dateModified when adding new sections.

7. CONVERSION
   Every post must have a CTA that is the exact next step for that specific reader.
   Speed post: "Get Free Speed Audit"
   Cost post: "Get Free WordPress Cost Breakdown"
   Never: "Contact Us", "Book a Call", "Learn More"
```

---

## Part 7 — Pain Point Research (Mandatory Before Every Post)

**Search for 50+ buyer-intent pain points before writing a single word.**

Steps:
1. Search "[platform] problems 2026"
2. Search "[platform] complaints reddit 2026"
3. Search "[platform] hidden costs 2026"
4. Search "[platform] limitations 2026"
5. Search "leaving [platform] 2026"
6. Search "[platform] vs custom website 2026"
7. Check People Also Ask for the target keyword
8. Compile 50+ pain points with buyer intent
9. Check which are already covered in existing blogs
10. Add missing pain points to the new post. Update existing blogs if relevant.

Why: A blog covering 50 pain points ranks for 50 queries. A blog covering 10 ranks for 10.

---

## Part 8 — 2026 SEO Benchmarks (Source: CorrelationSEO April 2026)

Audit every post with `node seo-audit.mjs` before publishing.

| Factor | Page 1 Avg | Our target |
|--------|-----------|-----------|
| Load time | 1,586ms | Auto-pass (Next.js SSG delivers under 500ms) |
| LSI words in title | 7 | 7+ semantically distinct non-stop-words |
| Entities in title | 3 | Brand + year + number/price/percentage |
| H2 count | 6 | 6+ H2 sections with varied keyword phrases |
| LSI words in body | 953 | 3,000 words with varied keyword forms |
| Domain .com | required | pandacodegen.com — confirmed |

### Title formula

`[Primary keyword phrase] + [Number/Score/Year] + [Brand if relevant] + [Cost/Outcome]`

Examples:
- "Wix Website Too Slow? **48%** of Wix Sites Fail Core Web Vitals in **2026**"
- "Webflow Migration Cost **2026**: Agencies Charge **$30K**. We Charge **$500**."

---

## Part 9 — Adding a New Blog Post

1. Add entry to `src/data/blog.ts` with `id`, `title`, `excerpt`, `category`, `faqs[]`
2. Create `src/app/blog/[slug]/page.tsx` — copy a recent post as template
3. Use relative canonical: `/blog/slug` (metadataBase resolves it)
4. Organization schema must match canonical values in Part 2 exactly
5. Add URL to `indexnow-ping.mjs`
6. User runs `node indexnow-ping.mjs` ONCE after deployment only
7. Add to Existing Blog Posts table below

---

## Part 10 — Existing Blog Posts (39 total as of Apr 9, 2026)

| # | Slug | Title | Category | Status |
|---|------|-------|----------|--------|
| 01 | `wordpress-vs-nextjs` | WordPress vs Next.js: Which Is Actually Better for Your Business? | Comparison | Live |
| 02 | `how-website-speed-affects-seo` | How Website Speed Affects SEO Rankings in 2026 (With Real Data) | SEO | Live |
| 03 | `shopify-dawn-theme-slow` | Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix) | Shopify | Live |
| 04 | `wordpress-killer` | Why WordPress Is Dying (And What Smart Businesses Are Doing Instead) | WordPress | Live |
| 05 | `shopify-headless` | Why Shopify Headless Is the Future of E-Commerce (And How to Get There) | Shopify | Live |
| 06 | `wordpress-plugins-destroy-speed` | WordPress Plugins Are Destroying Your Site Speed (Here's the Proof) | WordPress | Live |
| 07 | `elementor-kills-seo` | Elementor Is Killing Your SEO Score. Here's the Data | WordPress | Live |
| 08 | `shopify-plus-still-slow` | Shopify Plus Is Still Slow. Here's Why $2,000/Month Doesn't Buy You Speed | Shopify | Live |
| 09 | `shopify-conversion-rate-speed-fix` | How Site Speed Fixes Shopify Conversion Rates (Real Data) | Shopify | Live |
| 10 | `wordpress-traffic-drop-speed` | Why Your WordPress Site Traffic Is Dropping (Speed Is Killing You) | WordPress | Live |
| 11 | `wordpress-ai-security-risk-2026` | WordPress AI Security Risk 2026: Why Plugin Vulnerabilities Are Getting Worse | Security | Live |
| 12 | `how-to-fix-slow-wordpress` | How to Fix a Slow WordPress Site (The Real Answer) | WordPress | Live |
| 13 | `how-to-achieve-100-pagespeed` | How to Achieve 100/100 PageSpeed Score: Complete Next.js Guide | Performance | Live |
| 14 | `shopify-slow-losing-sales` | Your Slow Shopify Store Is Losing You Sales Every Day | Shopify | Live |
| 15 | `why-competitor-outranks-you` | Why Your Competitor Outranks You (It's Not Their Content) | SEO | Live |
| 16 | `google-universal-commerce-protocol-what-it-means-for-your-store` | Google Universal Commerce Protocol: What It Means for Your Store | E-Commerce | Live |
| 17 | `for-agencies-offer-custom-web-development` | For Agencies: How to Offer Custom Web Development Without Hiring a Dev Team | Agency | Live |
| 18 | `why-we-chose-nextjs-over-wordpress-2026` | Why We Chose Next.js Over WordPress for Every New Client in 2026 | Comparison | Live |
| 19 | `wordpress-vs-custom-code-real-cost-3-years` | WordPress vs Custom Code: The Real Cost Over 3 Years | Comparison | Live |
| 20 | `how-to-migrate-wordpress-to-nextjs` | How to Migrate WordPress to Next.js Without Losing SEO | Tutorial | Live |
| 21 | `nextjs-hosting-zero-cost` | How We Host Client Websites for Free ($0/Month) With Vercel | Performance | Live |
| 22 | `what-is-headless-commerce` | What Is Headless Commerce? A Plain-English Guide for Store Owners | E-Commerce | Live |
| 23 | `shopify-vs-custom-website` | Shopify vs Custom Website: 5 Signs You Have Outgrown Shopify (2026) | Comparison | Live |
| 24 | `webflow-vs-custom-website` | Webflow vs Custom Website: Real Numbers Behind the Comparison 2026 | Webflow | Live |
| 25 | `webflow-migration-cost` | Webflow Migration Cost 2026: Agencies Charge $30K. We Charge $500. | Webflow | Live |
| 26 | `webflow-true-cost` | Webflow Costs More Than $29/Month: The Real Price in 2026 | Webflow | Live |
| 27 | `woocommerce-too-slow` | WooCommerce Too Slow in 2026? Stores Score 30 to 55 on Mobile PageSpeed | Performance | Live |
| 28 | `squarespace-too-slow` | Squarespace Too Slow? Sites Score 30/100 on Mobile PageSpeed in 2026 | Performance | Live |
| 29 | `google-march-2026-update` | Google's March 2026 Update Rewards Fast Sites: What It Means for Your Business | SEO | Live |
| 30 | `gohighlevel-migration` | GoHighLevel Website Migration: How to Get a Fast Site Without Leaving GHL | Performance | Live |
| 31 | `cloudflare-emdash-wordpress-replacement` | Cloudflare Built a WordPress Replacement (2026) | Security | Live |
| 32 | `leaving-webflow-2026` | Leaving Webflow in 2026: Real Costs, Cart Failures, and What We Migrated To | Webflow | Live |
| 33 | `wix-too-slow` | Wix Website Too Slow? 48% of Wix Sites Fail Core Web Vitals in 2026 | Performance | Live |
| 34 | `gohighlevel-website-speed` | GoHighLevel Sites Score 20 to 45 on PageSpeed (Here Is Why) | Performance | Live |
| 35 | `shopify-app-costs-real-monthly-bill` | Shopify App Costs: The Real Monthly Bill | Shopify | Live |
| 36 | `wordpress-migration-cost` | WordPress Migration Cost 2026 | WordPress | Live |
| 37 | `top-custom-web-development-agencies-usa-2026` | Top Custom Web Development Agencies USA 2026 | Agency | Live |
| 38 | `divi-theme-slow` | Divi Theme Slow in 2026? Real Scores, Real Costs, and the Only Fix That Works | WordPress | Live |
| 39 | `squarespace-migration-cost` | Squarespace Migration Cost 2026 | Squarespace | Live |

---

## Part 11 — Blog Queue: April 2026

### Cluster Completion (High Priority)

| Priority | Slug | Title | Notes |
|----------|------|-------|-------|
| ~~High~~ | ~~`shopify-app-costs-real-monthly-bill`~~ | ~~Shopify App Costs: The Real Monthly Bill~~ | DONE (post #35) |
| High | `wix-vs-custom-website` | Wix vs Custom Website: When Wix Stops Working for You | 52 pain points researched. Completes Wix cluster. Sunday Apr 13. |
| High | `core-web-vitals-explained` | Core Web Vitals Explained for Business Owners (Not Developers) | No overlap with Google March 2026 post (confirmed). Business-owner angle nobody else does. |
| High | `squarespace-vs-custom-website` | Squarespace vs Custom Website 2026 | Focus on features/flexibility/scalability (speed+cost covered in other 2 posts). Completes Squarespace cluster. |

### New Topics (From Competitor Gap Analysis Apr 9, 2026)

| Priority | Slug | Title | Notes |
|----------|------|-------|-------|
| High | `ecommerce-platform-speed-comparison-2026` | Ecommerce Platform Speed Comparison 2026: Shopify vs WooCommerce vs BigCommerce vs Custom | Nobody owns this. Head-to-head PageSpeed benchmarks with screenshots. Highly shareable. |
| High | `website-rebuild-cost-2026` | How Much Does a Website Rebuild Cost in 2026? (Honest Pricing Guide) | Transactional keyword. Catches people who haven't decided what platform to leave yet. General version of platform-specific cost posts. |
| Med | `website-rebuild-vs-redesign` | Website Rebuild vs Redesign: How to Know Which One You Need in 2026 | Decision-stage. "Should I patch or start fresh?" Naturally leads to migration service. |
| Med | `custom-website-vs-template-cost` | Custom Website vs Template: The Real Cost Over 3 Years | Broader version of wordpress-vs-custom-code. Covers all platforms. 3-year cost angle proven. |
| Low | `nextjs-ecommerce-2026` | Next.js for Ecommerce: Why Fast-Growing Brands Are Switching in 2026 | Mid-funnel. Different from headless-commerce (definitional) and shopify-headless (Shopify-specific). |

### Competitor Intelligence (Apr 9, 2026)

Top agencies analyzed: WebFX ($260M/yr), Coalition Technologies ($5.4M/yr), Single Grain ($4-14M/yr), Lounge Lizard ($5.8-10M/yr), Pagepro, FocusReactive.

**Our advantages over all of them:**
- 5-node @graph schema (none of them do this)
- speakable + citations in Article schema (none)
- Real before/after PageSpeed scores with proof (none)
- Platform-specific pain-point targeting (none)
- $0/month hosting angle (unique to us)
- Business-owner language, not developer jargon (Pagepro/FocusReactive write for devs)

---

## Part 12 — SEO Strategy Notes

### Keywords to own (realistic for current domain age)
- All "[platform] too slow" variants (Wix, Squarespace, WooCommerce, GHL, Shopify)
- All "WordPress vs [Next.js / custom / headless]" comparisons
- All "[platform] migration cost" posts
- All "$0 hosting / free Next.js hosting" angles

### Keywords to avoid until domain ages
- "hire Next.js developer" — Upwork, Clutch dominate
- "custom website development" — too broad
- "WordPress migration service" — agencies with 10+ years DR dominate

### Internal linking strategy
Every new post must link to:
1. At least 1 existing blog post (topical cluster)
2. Most relevant service page
3. `/work/mycustompatches` when citing real speed improvement data

### Content rules
- Use real client data: MyCustomPatches 3.2s to 0.7s, 45 to 100 PageSpeed, $150 to $0/month
- Every post needs a before/after frame
- CalModalButton for all booking CTAs — never `<a href="cal.com" target="_blank">`
- No em dashes (—) or en dashes (–) in any copy
- No dev jargon in customer-facing copy: "server-side rendering" becomes "loads instantly"

---

## Part 13 — Confirmed Press and Backlinks

| Date | Publication | DA | Type | Status |
|------|------------|-----|------|--------|
| May 30, 2026 | Woman's World | 70+ | Editorial quote + link | CONFIRMED |
| Apr 3, 2026 | DesignRush | 65+ | Agency profile | LIVE |
| Mar 27, 2026 | G2 (Vercel review) | 90+ | Product review | Submitted, in moderation |

---

## Part 14 — Backlink Outreach Plan

### High Priority (Not Yet Done)
- **Vercel Showcase** — pitch DevRel directly on Twitter/LinkedIn. Angle: 5+ production e-commerce sites, all 95-100 PageSpeed, $0/month
- **Next.js Showcase** — nextjs.org/showcase submission
- **Supabase Case Study** — Panda Patches runs on Supabase, offer a "Built with Supabase" post

### Journalist Platforms
- **Featured.com** — 3 free answers/month. Use for CIO.com, Forbes, Inc pitches only.
- **SourceBottle** — profile live Mar 27. Email alerts active.
- **Twitter/X** — search #journorequest, #PRrequest daily. Reply fast.
- **Quora** — 2-3 answers/week on Shopify speed, WordPress vs custom, migration costs.

### Banned / Shut Down
- Qwoted — account banned
- Connectively/HARO — shut down Dec 9, 2024
