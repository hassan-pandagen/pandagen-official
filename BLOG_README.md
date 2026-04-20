# PandaCodeGen Blog — Single Source of Truth

> This is the only blog reference document. PRE_PUBLISH_CHECKLIST.md has been deleted. All rules live here.
> Last updated: April 13, 2026 — 40 live posts

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

### STEP 7.5 — Post-Draft Audit Layer (Added Apr 19, 2026, Expanded Apr 19)

**The 8-role audit system was validated on the top 11 GSC posts on Apr 19, 2026. Across all 11 posts, the framework identified the same universal patterns: buried leads, generic SEO voice, missing inbound links, schema mismatches, and meta truncation. Apply it at the level the post deserves.**

**Two frameworks. Eight roles total. Run both for hub posts. Voice-only for cluster posts. SEO-only for retroactive ranking work.**

---

#### Framework 1: VOICE AUDIT (4 roles)

**Lens:** Does this post sound like PandaCodeGen? Does it hook readers once they arrive?
**Best for:** Posts that already get impressions but aren't converting the clicks.
**Output:** Content rewrites, H2 swaps, pullquotes, named client receipts.

```
ROLE 1 — Senior Brand Strategist
  Flags:
    - Generic SEO voice creeping in
    - Missing receipts (specific client numbers, real project scope)
    - Manifesto tone absent (the "we build X not Y" edge)
    - Hassan not present in first person ("I", "we", "last month I")
    - Third-person bio contradicting founder-direct voice
  Delivers:
    - ONE brand move that makes the post unmistakably PandaCodeGen
    - Specific receipt rewrites (anonymous "a client" → "MC Patches ($150 → $0 hosting)")

ROLE 2 — Conversion Copywriter
  Flags:
    - Weak H2s with exact rewrites proposed
    - Buried leads (the best sentence 3 paragraphs deep)
    - Generic openers ("Your site is slow" vs "Last week a client walked in with...")
    - CTAs that feel inserted rather than earned
    - Flat sentences in the first 400 words
    - Duplicate copy blocks (e.g., identical Founder's Offer boxes in mid and bottom CTAs)
  Delivers:
    - Top 5 H2 rewrites with exact new copy
    - Buried lead promoted to BlogQuote or data-speakable block

ROLE 3 — UX Researcher / Content Designer
  Flags:
    - Info order matches SEO logic instead of buyer's mental order (definitions before prices)
    - 60-second mobile scan fails (reader can't extract answer on mobile)
    - Speakable div too long for Google's 20-30 second spec
    - Tables missing min-w-[560px] or swipe-hint for mobile
    - Cognitive overload (4+ dense blocks back-to-back)
    - Duplicate violet/color boxes creating false hierarchy
  Delivers:
    - Info hierarchy reorder plan
    - Specific table/CTA de-dupe instructions

ROLE 4 — Data Storyteller (Animalz / Eddie Shleyner style)
  Flags:
    - Reference-doc energy, no narrative spine
    - Opening scene abandoned (teaser never resolved)
    - No "we spent $X and learned Y" moment
    - No screenshot-worthy stat or quote (North Star)
    - Hook doesn't carry through the post
  Delivers:
    - North Star quote candidate (often already in body, just needs promotion)
    - Narrative spine: receipt → pain → fix → payoff
```

---

#### Framework 2: SEO AUDIT (4 roles)

**Lens:** Why isn't this post ranking, and what technical/strategic changes would make Google surface it?
**Best for:** Posts Google isn't showing yet — the visibility/authority layer.
**Output:** Schema fixes, title/meta rewrites for SERP match, keyword retargeting, internal link injections, cannibalization resolutions.

```
ROLE 5 — Technical SEO Specialist
  Checks:
    - Schema 5-node @graph complete (Article, FAQPage, BreadcrumbList, WebPage, Organization)
    - speakable selector coverage + data-speakable="true" tagged correctly
    - Canonical correctness (relative path, matches folder)
    - Image alt audit (all images have descriptive alt)
    - meta robots present: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
    - Title/headline schema mismatches (metadata.title vs Article.headline vs WebPage.name)
    - dateModified consistency across OG modifiedTime + Article + WebPage
    - Core Web Vitals flags (inline JSON schema size, render-blocking resources)
    - Broken imports, unused components, stale dynamic() calls
  Do NOT flag: `import dynamic from "next/dynamic"` — that's project convention for blog posts. Only src/app/page.tsx uses lazyLoad.

ROLE 6 — SEO Content Strategist
  Checks:
    - Primary keyword intent match (does title match "how much does X cost" SERP intent?)
    - LSI entities missing — list 6-10 semantic entities that should appear but don't
      (e.g., Kinsta, WP Engine, Flywheel, SiteGround, Elementor, Divi, ACF, Yoast, RankMath for WordPress posts)
      (e.g., Starter/Basic/CMS/Business/Enterprise plan names, Optimize, Logic, Memberstack for Webflow)
      (e.g., Fluid Engine, Squarespace 7.1, Commerce plan for Squarespace)
      (e.g., SaaS mode, Snapshots, sub-accounts, white-label, Locations for GHL)
    - Thin content flags (sections under 100 words that should be deeper)
    - Topical authority gaps
    - Keyword cannibalization with sibling posts — how does this differentiate?
    - FAQ match to actual People Also Ask (PAA) queries from Google
  Delivers:
    - Specific LSI insertion points with paragraph rewrites
    - Cannibalization resolution (which post owns which intent)

ROLE 7 — Conversion Copywriter + SERP Specialist
  Checks:
    - Title tag char count (under 60 for SERP truncation)
    - Title matches winning SERP patterns for target query (screenshot top 3 competitors)
    - Meta description under 160 chars + CTR-focused
    - Featured snippet formatting (40-55 word direct-answer paragraph right after H1 or under a question H2)
    - H2s mapped to PAA queries (literal question format beats clever H2s for snippet capture)
    - Click-through wording (specific numbers beat vague promises)
  Delivers:
    - Title rewrite with exact char count
    - Meta desc rewrite under 160
    - Direct-answer block copy for featured snippet capture

ROLE 8 — SEO Consultant + Link Auditor
  Checks:
    - Internal links IN: list 6+ sibling posts that SHOULD link to this page with exact anchor text suggestions
    - Internal links OUT: are existing outlinks optimal? Any natural fits missing?
    - Anchor text variety (mix descriptive anchors, not just platform names)
    - Broken link check
    - External citation quality (Google, Deloitte, Vercel docs > random blogs)
    - Link equity distribution (is the post getting enough juice from high-authority siblings?)
  Delivers:
    - Cross-link injection map: source post → anchor text → target line
    - Outbound link additions with natural insertion points
```

---

#### Three Tiers. Match The Audit To The Post.

```
TIER A — FULL 8-ROLE AUDIT (Hub posts + retroactive ranking work on top performers)
  When:
    - NEW hub posts that every other post links into
    - EXISTING top-10 GSC-impression posts that need ranking lift
    - Any post competing for a 1,000+ impression keyword

  Run both Framework 1 (Voice) + Framework 2 (SEO) in one pass per post.
  Output: top 8 prioritized fixes combining voice + ranking levers.

TIER B — VOICE-ONLY OR SEO-ONLY (Cluster posts, targeted work)
  When you already ran voice audit but need ranking work:
    - Run only SEO 4 roles (ROLE 5-8)
  When you need voice lift but the post already ranks well:
    - Run only Voice 4 roles (ROLE 1-4)

  Examples: cluster sibling posts that already follow the first post's voice.

TIER C — SELF-REVIEW CHECKLIST (Quick-hit posts under 2,500 words)
  Self-check before publish:
    Voice:
    [ ] Opener hooks with a specific receipt, not a flat intro
    [ ] The 2 strongest H2s come in the first half
    [ ] One screenshot-worthy sentence (the North Star)
    [ ] Bottom CTA matches the reader's exact next step
    [ ] No flat sentences within the first 400 words
    SEO:
    [ ] Title under 60 chars, matches SERP winner pattern
    [ ] Meta desc under 160 chars
    [ ] robots metadata set
    [ ] Schema title + headline + WebPage.name all match
    [ ] At least 2 PAA question H2s in the post
    [ ] Direct-answer paragraph with data-speakable="true"
    [ ] 3+ internal outbound links to siblings
    [ ] At least 1 external authority citation in body
```

---

#### Rules

**Rule 1: Run audits in parallel agent calls, NOT sequential chat.** Each audit is one agent call bundling all 4-8 roles. Don't run 8 separate agents per post.

**Rule 2: Apply the PRIORITIZED TOP 5-8 fixes, skip the rest.** The audit always proposes more than is worth doing. Cherry-pick.

**Rule 3: For retroactive audits, prioritize by GSC impression volume.** Top 10 posts by impression drive 80% of traffic. Fix them first.

**Rule 4: Cross-link injection is THE highest-ROI SEO lever for a young domain.** Every SEO audit on Apr 19 flagged this. Build a link map before touching anything else.

**Rule 5: One audit per day maximum in active writing weeks.** Running 4+ audits in one session burns focus and context budget.

---

#### False Positives To Ignore

```
- "import dynamic from 'next/dynamic' violates project standard"
  Reality: Only src/app/page.tsx uses lazyLoad because it has `export const dynamic`.
  Blog posts can and should use `dynamic`.

- "October 2024 client receipt" suggestions from the Brand Strategist
  Reality: PandaCodeGen founded Feb 2026. Pre-agency WordPress experience is fine to cite
  ("I built in WordPress for six years before launching PandaCodeGen"), but agency history
  receipts must be post-Feb 2026.

- Generic advice like "add more first-person voice" without specific line refs
  Reality: Demand the agent propose EXACT rewrites with line numbers.
```

---

#### The Apr 19 Validation Run

8-role audit applied to 11 top-impression posts in one session. Universal findings across all 11:

1. **Missing inbound internal links** (flagged by 11/11 audits) — THE biggest ranking lever
2. **Meta descriptions over 160 chars** (8/11)
3. **Schema title/headline mismatches** (5/11)
4. **Missing PAA-matching H2s** (9/11)
5. **Direct-answer featured snippet paragraphs absent** (9/11)
6. **Title truncation at 60+ chars** (6/11)

Applied fixes resulted in:
- 22 new inbound internal links distributed across the top 11 targets
- Titles shortened on 5 posts
- Direct-answer blocks added to 5 posts
- 3 new PAA H2 sections (150-word answers)
- LSI entity expansion on 4 posts (Kinsta, WP Engine, Fluid Engine, Webflow plan tiers, INP, CLS, TTFB, SaaS mode)
- Robots metadata added to all 11

**Publishing loop:**
```
Draft → Tier A/B/C audit → Apply top 5-8 fixes → Final Pre-Publish QA → Ship → Monitor GSC for 2 weeks → Iterate
```

---

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

## Part 10 — Existing Blog Posts (42 total as of Apr 16, 2026)

| # | Slug | Title | Category | Status |
|---|------|-------|----------|--------|
| 01 | `wordpress-vs-nextjs` | WordPress vs Next.js in 2026: Which Is Actually Better for Business? | Comparison | Live |
| 02 | `how-website-speed-affects-seo` | How Website Speed Affects SEO Rankings in 2026 (With Real Data) | SEO | Live |
| 03 | `shopify-dawn-theme-slow` | Shopify Dawn Theme Slow? How We Fixed It From 55 to 100 (2026) | Shopify | Live |
| 04 | `wordpress-killer` | Why WordPress Is Dying (And What Smart Businesses Are Doing Instead) | WordPress | Live |
| 05 | `shopify-headless` | Shopify Headless: We Cut Load Time From 4s to 0.8s | Shopify | Live |
| 06 | `wordpress-plugins-destroy-speed` | WordPress Plugins Are Destroying Your Speed: 61% Slower per 10 Plugins (2026) | WordPress | Live |
| 07 | `elementor-kills-seo` | Elementor Kills Your SEO: We Audited 500 Sites (Average Score: 38/100) | WordPress | Live |
| 08 | `shopify-plus-still-slow` | Shopify Plus Still Slow in 2026? Why $2,300/Month Does Not Fix Speed | Shopify | Live |
| 09 | `shopify-conversion-rate-speed-fix` | Low Shopify Conversion Rate? How Speed Kills Your Sales (Fix Guide, 2026) | Shopify | Live |
| 10 | `wordpress-traffic-drop-speed` | WordPress Traffic Dropping? Speed Is Killing Your Rankings | WordPress | Live |
| 11 | `wordpress-ai-security-risk-2026` | WordPress AI Security Risk 2026: 100K+ Sites Exposed Through Plugins | Security | Live |
| 12 | `how-to-fix-slow-wordpress` | How to Fix a Slow WordPress Site (8 Methods Ranked by Impact) | WordPress | Live |
| 13 | `how-to-achieve-100-pagespeed` | How to Hit 100/100 PageSpeed Score (Our Exact 8-Step Process) | Performance | Live |
| 14 | `shopify-slow-losing-sales` | Slow Shopify Store? How Much Revenue You Are Losing in 2026 (With Math) | Shopify | Live |
| 15 | `why-competitor-outranks-you` | Why Your Competitor Outranks You (It Is Not Their Content) | SEO | Live |
| 16 | `google-universal-commerce-protocol-what-it-means-for-your-store` | Google UCP: Customers Can Now Buy Without Visiting Your Site | E-Commerce | Live |
| 17 | `for-agencies-offer-custom-web-development` | White Label Web Development: Custom Builds Without a Dev Team | Agency | Live |
| 18 | `why-we-chose-nextjs-over-wordpress-2026` | Why We Chose Next.js Over WordPress in 2026 (With Client Results) | Comparison | Live |
| 19 | `wordpress-vs-custom-code-real-cost-3-years` | WordPress vs Custom Code: 3-Year Cost Comparison With Real Numbers (2026) | Comparison | Live |
| 20 | `how-to-migrate-wordpress-to-nextjs` | WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026) | Tutorial | Live |
| 21 | `nextjs-hosting-zero-cost` | Start Free, Scale to $20/mo: How We Host Client Sites on Vercel | Performance | Live |
| 22 | `what-is-headless-commerce` | What Is Headless Commerce? Plain-English Guide for Store Owners | E-Commerce | Live |
| 23 | `shopify-vs-custom-website` | Shopify vs Custom Website 2026: 5 Signs You Have Outgrown It | Comparison | Live |
| 24 | `webflow-vs-custom-website` | Webflow vs Custom Website 2026: Real Cost, Speed, and SEO Comparison | Webflow | Live |
| 25 | `webflow-migration-cost` | Webflow Migration Cost 2026: Agencies Charge $30K. We Charge $500. | Webflow | Live |
| 26 | `webflow-true-cost` | Webflow Pricing 2026: Every Hidden Fee Explained ($29 Is Just the Start) | Webflow | Live |
| 27 | `woocommerce-too-slow` | WooCommerce Too Slow? How to Speed It Up in 2026 (and When to Migrate) | Performance | Live |
| 28 | `squarespace-too-slow` | Squarespace Too Slow in 2026? Why Businesses Are Migrating Away | Performance | Live |
| 29 | `google-march-2026-update` | Google's March 2026 Update Rewards Fast Sites: What It Means for Your Business | SEO | Live |
| 30 | `gohighlevel-migration` | GoHighLevel Website Migration: How to Get a Fast Site Without Leaving GHL (2026) | Performance | Live |
| 31 | `cloudflare-emdash-wordpress-replacement` | Cloudflare Built a WordPress Replacement (2026) | Security | Live |
| 32 | `leaving-webflow-2026` | Leaving Webflow in 2026: What Actually Happened After We Migrated | Webflow | Live |
| 33 | `wix-too-slow` | Wix Website Too Slow? 48% of Wix Sites Fail Core Web Vitals in 2026 | Performance | Live |
| 34 | `gohighlevel-website-speed` | GoHighLevel Sites Score 20 to 45 on PageSpeed: How to Fix It (2026) | Performance | Live |
| 35 | `shopify-app-costs-real-monthly-bill` | Shopify App Costs 2026: Your Real Monthly Bill Is Higher Than You Think | Shopify | Live |
| 36 | `wordpress-migration-cost` | WordPress Migration Cost 2026: Full Pricing by Site Size and Type | WordPress | Live |
| 37 | `top-custom-web-development-agencies-usa-2026` | Top 10 Custom Web Development Agencies in the USA: 2026 Honest Review | Agency | Live |
| 38 | `divi-theme-slow` | Divi Theme Slow in 2026? Real Scores, Real Costs, and the Only Fix That Works | WordPress | Live |
| 39 | `squarespace-migration-cost` | Squarespace Migration Cost in 2026: What You Will Actually Pay | Squarespace | Live |
| 40 | `wix-vs-custom-website` | Wix vs Custom Website 2026: Which Is Better for Your Business? | Comparison | Live |
| 41 | `squarespace-vs-custom-website` | Squarespace vs Custom Website 2026: Which Is Right for Your Business? | Comparison | Live |
| 42 | `core-web-vitals-explained` | Core Web Vitals Explained for Business Owners 2026: What It Means for Your Revenue | SEO | Live |

---

## Part 11 — Blog Plan: Week of Apr 21-27, 2026

### This Week's Schedule (GSC data-driven, Apr 20)

**Strategic context:** 28-day GSC pull on Apr 20 shows the unexpected hero cluster is **Webflow migration pricing**. `webflow-migration-cost` alone has **3,147 impressions at position 6.3** with 0% CTR. Combined with `webflow-true-cost` (991 imp), `leaving-webflow-2026` (531 imp), and 12 striking-distance queries at positions 5-11, the Webflow pricing cluster is the dominant traffic asset. This week's 4 posts are all Webflow-focused, internal-linked to the hub pages, targeting striking-distance queries that already have impressions but no page specifically built for them.

| Day | Slug | Title | Targets (GSC) |
|-----|------|-------|---------------|
| Tue Apr 22 | `webflow-migration-50-to-100-pages` | Webflow Migration for 50 to 100 Page Sites: Scope, Timeline, and 2026 Pricing | "webflow migration cost for 50-100 page website" (136 imp, pos 7.4), "webflow migration cost for 50-100 page website 2025 2026" (45 imp, pos 5.7), "webflow agency pricing for site migration 50-100 pages" (13 imp, pos 2.8), "how much should we budget for a webflow migration for a 50-100 page site?" (27 imp, pos 2.2). Combined ~234 imp strike zone. |
| Thu Apr 24 | `webflow-enterprise-migration-cost` | Webflow Enterprise Migration: Real Costs, Hidden Fees, and When Custom Wins (2026) | "webflow enterprise migration cost" (42 imp, pos 6.4), "cost of migrating enterprise website to webflow" (41 imp, pos 10.2), "what's the cost of migrating to webflow for an enterprise site?" (18 imp, pos 8.3). Combined ~145 imp. |
| Sat Apr 26 | `webflow-user-accounts-sunset-2026` | Webflow Is Killing User Accounts in 2026: Migration Paths for Membership Sites | "webflow user accounts sunset date 2026" (31 imp, pos 6.3). News-reactive, HARO/Qwoted pitch-worthy for backlinks. |
| Mon Apr 28 | `iron-horse-studio-vs-pandacodegen-webflow` | Iron Horse Studio vs PandaCodeGen: Honest Webflow Migration Comparison (2026) | "iron horse studio webflow migration cost" (206 imp, pos 11.2), "how much does a webflow migration with iron horse studio cost?" (27 imp, pos 5.1). Defamation safety: factual-only comparison, public pricing cited. |

### Content freeze context

All 43 existing posts are under **CTR FREEZE from Apr 20 to May 20** (see [CTR_FREEZE_APR_20.md](CTR_FREEZE_APR_20.md)). Do NOT edit existing post titles, meta descriptions, H1s, or pricing canon during this window. New posts are allowed. Let Google recrawl and measure CTR on the Apr 20 changes before any further edits.

### Gold Standard Updates (Apr 20, 2026)

The following lessons from the Apr 19-20 sitewide audit are now canon. Apply to every new blog post.

**1. Neil Patel Test for every H1 / title**
Every title must pass 3 criteria before publishing:
- Would someone click this as a Google ad?
- Is it specific (numbers, timelines, named proof)?
- Is it about what we DO for the buyer (not a category description)?

Failing examples: "What Is Headless Commerce? Plain-English Guide for Store Owners" (category dictionary). "Headless Shopify Development. From $500. 3 weeks. 95+ PageSpeed." (commodity listing, no pain).
Passing examples: "Your Shopify store loads in 4 seconds. Ours load in 0.8." (specific pain + proof). "Trapped on Wix? We got Obare Magazine out in 7 days." (pain + receipt).

**2. Pricing Canon (STRICT — never deviate)**
- Starter: $1,500+ — 5-7 page site
- Growth: $3,500+ — 10-20 pages, CMS, blog migration [MOST POPULAR anchor]
- Scale: $5,000 to $10,000+ — headless e-commerce, 30+ pages
- Scale+: custom quote — enterprise scope
- Founder's Offer: $500 — qualification-gated (WordPress/Webflow/Wix/Squarespace/GHL, under 15 pages, no e-commerce, verified review after launch, fast feedback during build). 3 spots/month. NOT the migration headline. Framed as "if out of budget" alternative.

**3. "Foot-in-the-Door" naming is BANNED**
The phrase "Foot-in-the-Door" is the literal name of a 1966 psychology compliance manipulation tactic (Freedman & Fraser). Never use it as a customer-facing tier name. Internal pricing notes fine. Customer-facing: "Founder's Offer" or "Starter" only.

**4. Never lead a service page H1 or service cluster blog with "From $500"**
$500 is the qualification-gated Founder Offer, not the migration entry price. Leading with "From $500" triggers bait-and-switch perception when readers discover Starter is actually $1,500+. Lead with pain or outcome.

**5. Founder Offer CTAs use "budget alternative" framing**
Standard block body: "If our Starter ($1,500+) or Growth ($3,500+) tiers are out of budget, apply for our Founder Migration. We pick 3 businesses per month for a $500 full migration (normally $5,000+) in exchange for a verified Google or Clutch review after launch. Requirements: your site is on WordPress, Webflow, Wix, Squarespace, or GoHighLevel, under 15 pages, no e-commerce. April 2026: 1 filled, 2 remaining."

Lead with Growth/Starter first. Founder Offer is the fallback, not the hook.

**6. Fabrication check before every publish**
- No "dozens of clients" claims (PandaCodeGen founded Feb 2026, solo founder; "dozens" is not credible)
- No unsourced stats ("61% slower per 10 plugins", "47% of ranking loss") — if you can't link a source, drop the stat
- No unnamed case studies with specific dollar figures ("A client went from $420K to $890K") — use MyCustomPatches (Matt Conner) or Obare Magazine with real receipts, or label as modeled projection
- No first-person claims about platforms we don't run (we never ran Webflow — don't say "our Webflow store was down")

**7. Single source of truth for FAQs**
FAQPage `mainEntity` in schema must `.map()` over the same `blogPosts.find(p => p.id === "slug")?.faqs` that feeds the rendered FAQAccordion. Never hardcode FAQs in schema — drift between UI and structured data triggers Google warnings.

**8. Mobile standards (tables + spacing + stat strips)**
- Table cell borders: `border-stone-300` (not `stone-200`) per Blog Table Mobile Standard
- Static desktop spacing (`mt-10`, `my-12`, `mt-16`) must be responsive: `mt-6 md:mt-10`, `my-8 md:my-12`, `mt-10 md:mt-16`
- Stat strips / any 4-cell row: use `grid grid-cols-2 md:grid-cols-4`, not horizontal flex (4 cells on 375px screens clip "Code Ownership"-length labels)

**9. Modal/popup standards**
- Floating close button fixed to viewport (not the card) — always accessible even when modal scrolls
- Container `overflow-y-auto` + `overscroll-contain` + `WebkitOverflowScrolling: touch` — Safari mobile compatibility
- Copy: one clear value prop sentence, not 3+ paragraphs. Founder Offer modal went from ~120 words → 35 words after clutter review.

**10. Meta description max 160 chars**
Hard limit. SERP truncates at 155-160 depending on device. 15 of 43 blogs audited on Apr 20 had overflowing descriptions (one was 220). All trimmed. Every new post: confirm length before publishing.

**11. About/Manifesto H1 rule: specific > abstract**
Killed "We don't build websites. We build assets/receipts." — fortune-cookie language. Replaced with:
- About: "I rebuild slow platform sites. 95+ PageSpeed. Always."
- Manifesto: "Speed is a contract. Not a marketing claim."
Same rule applies if ever rewriting hub pages: state what you do concretely, make a guarantee, avoid metaphor without proof.

---

## Part 11 Archive — Week of Apr 13-20, 2026

### Previous Schedule (GSC data-driven, Apr 13)

| Day | Slug | Title | Reasoning |
|-----|------|-------|-----------|
| ~~Sun Apr 13~~ | ~~`wix-vs-custom-website`~~ | ~~Wix vs Custom Website 2026: When Wix Stops Working for Growing Businesses~~ | DONE (post #40). Business journey style. Completes Wix cluster. |
| ~~Mon Apr 14~~ | ~~`squarespace-vs-custom-website`~~ | ~~Squarespace vs Custom Website 2026: When Your Premium Site Is Costing You Clients~~ | DONE (post #41). Business journey style. Squarespace cluster COMPLETE (3/3). |
| ~~Wed Apr 16~~ | ~~`core-web-vitals-explained`~~ | ~~Core Web Vitals Explained for Business Owners 2026: What It Means for Your Revenue~~ | DONE (post #42). Hub explainer page. Links from every other blog post. |
| **Fri Apr 18** | `website-rebuild-cost-2026` | How Much Does a Website Rebuild Cost in 2026? (Honest Pricing) | GSC: "website migration cost" at 36 impressions, position 69. Top-of-funnel post for buyers who haven't picked a platform yet. Links to every platform-specific cost post. |

### What We're NOT Writing This Week (and Why)

| Post | Reason to skip |
|------|----------------|
| `ecommerce-platform-speed-comparison-2026` | Needs real PageSpeed screenshots of 10+ stores to be credible. Save for a dedicated session. |
| `gohighlevel-vs-custom` | GHL audience is small (agency owners). GHL post already best performer. Don't split its traffic yet. |
| `woocommerce-vs-custom` | WooCommerce queries at position 34 (page 4). Existing post needs content depth first, not a companion. |
| New Shopify post | 6 Shopify posts already. Cluster is saturated. New posts would cannibalize existing. |

### Cluster Completion Status (after this week)

| Platform | Too Slow | vs Custom | Migration Cost | Status |
|----------|----------|-----------|----------------|--------|
| Wix | `wix-too-slow` ✅ | `wix-vs-custom-website` ✅ | not yet | 2/3 done |
| Squarespace | `squarespace-too-slow` ✅ | `squarespace-vs-custom` (Mon) | `squarespace-migration-cost` ✅ | **COMPLETE after Mon** |
| Webflow | n/a | `webflow-vs-custom-website` ✅ | `webflow-migration-cost` ✅ | COMPLETE |
| Shopify | ✅ (x2) | `shopify-vs-custom-website` ✅ | n/a | COMPLETE (6 posts) |
| WordPress | ✅ | `wordpress-vs-custom-code` ✅ | `wordpress-migration-cost` ✅ | COMPLETE (8 posts) |
| GHL | `gohighlevel-website-speed` ✅ | not yet | `gohighlevel-migration` ✅ | 2/3 done |
| General | n/a | n/a | `website-rebuild-cost` (Fri) | Hub post |
| CWV | n/a | n/a | `core-web-vitals-explained` (Wed) | Explainer hub |

### Blog Writing Rules (updated Apr 13, 2026)

**New standard: Business Journey Style**
All new "vs custom" posts must follow the business owner journey, not comparison tables:
1. "It works great until..." (honeymoon phase)
2. "The app/plugin trap" (every feature slows you down)
3. "Why your SEO hit a ceiling" (platform limitations)
4. "What leaving actually costs" (address the fear)
5. "When to stay" (honest, builds trust)
6. "When to leave" (5 signals)
7. "3-year cost comparison" (the math)
8. "What migration involves" (remove the unknown)

**CTR IS THE #1 PRIORITY. Every title and description must be researched against live SERP before publishing.**

### CTR Research Process (mandatory before every new post)

1. Search the primary keyword on Google
2. Screenshot the top 3 titles and descriptions
3. Identify the pattern (question? guide? comparison? numbers?)
4. Write our title to match the winning pattern, not our sales angle
5. Write our description to match the search intent, not our pitch
6. The content inside can be opinionated. The title/description must match what the searcher expects.

### Title Formula by Search Intent (updated Apr 14, 2026)

| Search intent | What they typed | Winning title pattern | Example |
|---|---|---|---|
| **Evaluation** | "[platform] vs custom website" | "Which Is Better/Right for Your Business?" | "Wix vs Custom Website 2026: Which Is Better for Your Business?" |
| **Problem-solving** | "[platform] slow" or "fix [problem]" | "How We Fixed It / How to Fix It (Year)" | "Shopify Dawn Theme Slow? How We Fixed It From 55 to 100 (2026)" |
| **Price research** | "[platform] cost" or "how much" | "Full Pricing by [breakdown type]" or "Every Fee Explained" | "Webflow Pricing 2026: Every Hidden Fee Explained ($29 Is Just the Start)" |
| **Migration research** | "how to migrate" or "migration guide" | "Step-by-Step Without Losing [fear]" | "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)" |
| **Validation** | "should I leave [platform]" or "leaving [platform]" | "Why Businesses Are [action]" | "Squarespace Too Slow in 2026? Why Businesses Are Migrating Away" |

### Description Formula by Search Intent (updated Apr 14, 2026)

**For evaluation queries ("vs custom"):** Neutral, data-first, acknowledge both sides
- Pattern: "[Platform] scores X. Custom scores Y. But [platform advantage]. Here is the real comparison with honest advice on when to stay and when to switch."
- Example: "Wix scores 35 to 55. Custom scores 95 to 100. But Wix is free to start. Here is the real comparison with honest advice on when to stay and when to switch."

**For problem-solving queries ("slow", "fix"):** Loop psychology, validate their effort
- Pattern: "You [tried fix]. Then [tried another]. [Still broken]. Here is [what actually works]."
- Example: "You optimize Dawn to 75. Then you add one app and it drops to 50 again. Here is why that loop never ends and the one approach that stays at 95+."

**For price queries ("cost", "pricing"):** Promise completeness, name the hidden costs
- Pattern: "[Platform] real cost is $X to $Y once you add [hidden items]. Full breakdown of every fee plus [unique angle]."
- Example: "Webflow's real cost is $125 to $400/month once you add hosting tiers, forms, localization, and third party tools."

### Why This Matters (CTR Research, Apr 13-14, 2026)

Before title research: 4,611 impressions, 19 clicks, 0.41% CTR over 3 months.
Problem identified: titles were diagnosis-focused ("Here Is Why", "The Real Price") while SERP winners used solution/comparison framing.
18 titles rewritten to match winning SERP patterns. 2 new posts written with researched titles from day one.
Expected outcome: 3-5% CTR = 45-75 clicks/month (7-12x current performance).

### Why NOT to Write a Mega Comparison Post (decided Apr 14, 2026)

A "Wix vs WordPress vs Squarespace vs Custom" mega-post would cannibalize our 5 existing platform-specific comparison posts. Google prefers depth over breadth. Each dedicated 3,000-word post outranks a 1,000-word section inside a mega-post for platform-specific queries. JigsawKraft does it because they have ONE post. We have 5 deep ones. Our hub-and-spoke model (website-rebuild-cost as hub, platform posts as spokes) is the better architecture.

### SERP Title Audit: Our Titles vs Position 1-3 Winners (Apr 14, 2026)

**This audit must be repeated for every new post BEFORE writing.** Search the primary keyword, screenshot top 3, then write the title.

#### Proven SERP Winners by Query Category

**"[platform] pricing / true cost / hidden fees"**
| Pos | Winner | Pattern |
|---|---|---|
| 1 | "Webflow Pricing 2026: Plans, Costs & Hidden Fees" (CheckThat.ai) | [Platform] Pricing [Year]: Plans, Costs & Hidden Fees |
| 2 | "Webflow Pricing 2026: Ultimate Guide to Plans and more" (Liquiflow) | Ultimate Guide |
| 3 | "Webflow Pricing Explained for 2026: Plans & Costs" (iCoderz) | Explained |
| **Rule** | Use "[Platform] Pricing [Year]: Every [Hidden Fee/Cost] Explained" | Completeness wins |

**"[platform] slow / speed / fix"**
| Pos | Winner | Pattern |
|---|---|---|
| 1 | "Shopify Dawn Theme Speed: Fix Performance From 55 to 92+ (2026)" (Thunder) | Fix + before/after numbers |
| 2 | "How to Speed up a Slow WooCommerce Site (2026 Ultimate Guide)" (WP Rocket) | How to + Ultimate Guide |
| 3 | "Dawn Theme Slow on Big Stores? Causes & Fixes Explained" (WebTrack) | Causes & Fixes |
| **Rule** | Use "How We Fixed It From [X] to [Y] (Year)" or "How to Fix It (Year)" | Solution + proof wins |

**"[platform] vs custom website"**
| Pos | Winner | Pattern |
|---|---|---|
| 1 | "Wix vs WordPress vs Custom: Which Is Best for Your Business?" (JigsawKraft) | Which Is Best |
| 2 | "Wix vs Custom Website: What's Better for a Small Business?" (GetFoundGuy) | What's Better |
| 3 | "WordPress vs Next.js: Which Is Better for Your Website?" (AEHWeb) | Which Is Better |
| **Rule** | Use "[Platform] vs Custom Website [Year]: Which Is [Better/Right] for Your Business?" | Question format wins |

**"how to migrate [platform] to [platform]"**
| Pos | Winner | Pattern |
|---|---|---|
| 1 | "How to Migrate from WordPress to Next.js: A Complete Guide" (Index.dev) | Complete Guide |
| 2 | "WordPress to Next.js Migration Guide: Step-by-Step (2026)" (ZTABS) | Step-by-Step + year |
| 3 | "Complete Guide for a Successful Transition" (Programmiert) | Complete Guide + outcome |
| **Rule** | Use "[Platform] to [Platform] Migration: Step-by-Step Without Losing [fear] (Year)" | Step-by-step + fear wins |

**"[platform] migration cost"**
| Pos | Winner | Pattern |
|---|---|---|
| 1 | "How Much Does It Cost to Migrate a WordPress Site in 2026?" (Duplicator) | Question + year |
| 2 | "Website Migration Cost: How Much Does It Cost in 2026?" (CMSMinds) | Question + year |
| 3 | "How Much Does It Cost to Migrate a Website in 2026 (Guide)" (Cloudways) | Question + Guide |
| **Rule** | Use "[Platform] Migration Cost [Year]: Full Pricing by [breakdown]" or question format | Specificity or question format wins |

**"[platform] vs [platform]" comparison**
| Pos | Winner | Pattern |
|---|---|---|
| 1 | "WordPress vs Next.js: Which Is Better for Your Website? (2026)" (AEHWeb) | Which Is Better + year |
| 2 | "Next.js vs WordPress: Which Should You Choose in 2026?" (Heylo) | Which Should You Choose |
| 3 | "Next.js vs WordPress 2026: Honest Comparison" (Steven Studio) | Honest Comparison |
| **Rule** | Use "[A] vs [B] in [Year]: Which Is Actually Better for [audience]?" | "Which Is Better" question format wins |

#### Description Patterns That Win Clicks (from SERP research Apr 14, 2026)

**For pricing/cost posts:** Lead with the real number range, name the hidden costs, promise completeness.
- Winner pattern: "[Platform]'s real cost is $X to $Y once you add [hidden items]. Full breakdown of every fee."
- Our version: "Webflow's real cost is $125 to $400/month once you add hosting tiers, forms, localization, and third party tools. Full breakdown of every fee plus the PageSpeed ceiling nobody talks about."

**For speed/fix posts:** Name the score, promise the fix, add proof.
- Winner pattern: "[Platform] scores X on mobile. Here is how to fix it from X to Y."
- Our version: "Dawn scores 55 to 65 on mobile PageSpeed even with zero apps. Here are the partial fixes that get you to 75, why that ceiling exists, and the one approach that breaks past 95."

**For comparison posts:** Data first, acknowledge both sides, promise honest advice.
- Winner pattern: "[Platform A] scores X. [Platform B] scores Y. But [A advantage]. Here is the honest comparison."
- Our version: "Wix scores 35 to 55. Custom scores 95 to 100. But Wix is free to start. Here is the real comparison with honest advice on when to stay and when to switch."

**For migration guide posts:** Promise step-by-step, address the #1 fear, add value hook.
- Winner pattern: "Step-by-step guide covering [key steps]. What agencies charge $Xk for."
- Our version: "Step-by-step migration guide: content export, redirect mapping, SEO preservation, and zero downtime launch. What agencies charge $15K for, explained in plain English."

**For "should I leave" posts:** Social proof + both paths.
- Winner pattern: "Why [businesses/companies] are [leaving/migrating away] in [year]."
- Our version: "Squarespace sites average 30 to 55 on Google PageSpeed Mobile. No plugin or setting fixes it. Here is why the platform itself is the bottleneck and what growing businesses are doing instead."

#### The Golden Rule (never break this)

**Search the keyword FIRST. Read positions 1-3. Match their pattern. THEN write your title.**

If our title doesn't match the winning pattern for that query type, it will not get clicks regardless of how good the content is. The content converts. The title gets the click. Without the click, the content is invisible.

### What to Measure Next Sunday (Apr 20)

Pull GSC CSV again and compare:
1. **CTR change** on the 18 title-rewritten posts (the main experiment)
2. **Impressions** on wix-vs-custom-website (new post, should show by day 5-7)
3. **Indexing status** on 6 service pages we requested indexing for
4. **Position changes** on webflow-true-cost and shopify-dawn-theme-slow (highest impression)
5. **New queries** appearing for squarespace-vs-custom and core-web-vitals posts

If CTR jumps on 3-4 posts, the title formula is validated. Apply to all future posts from day one.

### Backlog (After This Week)

| Priority | Slug | Title | Notes |
|----------|------|-------|-------|
| High | `ecommerce-platform-speed-comparison-2026` | Ecommerce Platform Speed Comparison 2026 | Needs PageSpeed screenshots. Schedule a dedicated session. |
| Med | `website-rebuild-vs-redesign` | Website Rebuild vs Redesign: How to Know Which One You Need | Decision-stage. Feeds into migration service pages. |
| Med | `custom-website-vs-template-cost` | Custom Website vs Template: The Real Cost Over 3 Years | Broader 3-year cost angle. |
| Med | `gohighlevel-vs-custom` | GHL vs Custom Website: When Your Agency Sites Need Real Speed | GHL post is top performer. Write when GHL cluster needs completing. |
| Low | `woocommerce-vs-custom` | WooCommerce vs Custom: When Plugins Can't Fix Your Store Speed | Wait until woocommerce-too-slow climbs from position 34. |
| Low | `nextjs-ecommerce-2026` | Next.js for Ecommerce: Why Brands Are Switching in 2026 | Mid-funnel. Low priority until Shopify cluster needs refreshing. |
| Low | `wix-migration-cost` | Wix Migration Cost 2026: What You Will Actually Pay | Completes Wix cluster 3/3. Write after wix-vs-custom gets traction. |

### Competitor Intelligence (Apr 9, 2026)

Top agencies analyzed: WebFX ($260M/yr), Coalition Technologies ($5.4M/yr), Single Grain ($4-14M/yr), Lounge Lizard ($5.8-10M/yr), Pagepro, FocusReactive.

**Our advantages over all of them:**
- 5-node @graph schema (none of them do this)
- speakable + citations in Article schema (none)
- Real before/after PageSpeed scores with proof (none)
- Platform-specific pain-point targeting (none)
- "Starts free, scales to $20/mo when you grow" hosting angle (unique to us)
- Business-owner language, not developer jargon (Pagepro/FocusReactive write for devs)
- Loop psychology in meta descriptions (validated Apr 13, 2026)
- Business journey blog format instead of comparison tables (validated Apr 13, 2026)

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

## Part 13 — Google Indexing Tracker (as of Apr 13, 2026)

**Stats:** 55 indexed / 66 known pages (83%). Excellent for a 2-month-old domain.

### Indexed (55 pages)
All core pages, all service pages (except 5), all blog posts (except 3), all work pages, all legal pages.

### Crawled, Not Indexed (3 pages) — Wait 2-3 weeks
| URL | Crawled | Action |
|-----|---------|--------|
| `/blog/wix-too-slow` | Apr 11 | Wait. 5 days old. Normal. |
| `/ai-info` | Apr 11 | Wait. AI reference page, low search demand. Not a priority for Google. |
| `/blog/google-universal-commerce-protocol...` | Apr 9 | Wait. Niche topic. Request indexing if not indexed by May 1. |

### Discovered, Not Crawled (7 pages) — Google knows they exist but hasn't visited yet
| URL | Priority | Action |
|-----|----------|--------|
| `/services/wordpress-migration` | **HIGH** | Request indexing NOW. #1 money page. |
| `/services/custom-engineering` | **HIGH** | Request indexing. Money page. |
| `/services/webflow` | **MED** | Request indexing. Active Webflow cluster generating impressions. |
| `/services/woocommerce` | **MED** | Request indexing. WooCommerce queries showing in GSC. |
| `/services/squarespace` | **MED** | Request indexing. Squarespace cluster growing. |
| `/services/gohighlevel` | **MED** | Request indexing. GHL post is top performer (4 clicks). |
| `/blog/leaving-webflow-2026` | LOW | Wait. Blog post, will get crawled via internal links. |

### Not Found 404 (1 page) — Ignore
| URL | Cause | Action |
|-----|-------|--------|
| `/$` | Bot/crawler appended `$` to homepage URL. Not our fault. | Ignore. Will disappear on its own. |

### Needs Reindexing (title/description changed Apr 13, 2026)
Submit via GSC URL Inspection. GSC allows ~10/day, spread across 2 days.

**Day 1 (highest impression pages first):**
1. `/blog/webflow-true-cost` (670 impressions, title rewritten)
2. `/blog/shopify-dawn-theme-slow` (269 impressions, title rewritten)
3. `/blog/gohighlevel-website-speed` (223 impressions, title rewritten)
4. `/blog/wordpress-migration-cost` (160 impressions, title rewritten)
5. `/blog/squarespace-too-slow` (100 impressions, title rewritten)
6. `/blog/why-we-chose-nextjs-over-wordpress-2026` (98 impressions, title rewritten)
7. `/blog/how-to-migrate-wordpress-to-nextjs` (75 impressions, title rewritten)
8. `/blog/wordpress-vs-nextjs` (75 impressions, title rewritten)
9. `/blog/woocommerce-too-slow` (74 impressions, title rewritten)
10. `/blog/wordpress-vs-custom-code-real-cost-3-years` (62 impressions, title rewritten)

**Day 2:**
11. `/blog/shopify-plus-still-slow` (47 impressions, title rewritten)
12. `/blog/webflow-vs-custom-website` (41 impressions, title rewritten)
13. `/blog/wordpress-ai-security-risk-2026` (36 impressions, title rewritten)
14. `/blog/wordpress-plugins-destroy-speed` (32 impressions, title rewritten)
15. `/blog/shopify-conversion-rate-speed-fix` (25 impressions, title rewritten)
16. `/blog/shopify-app-costs-real-monthly-bill` (20 impressions, title rewritten)
17. `/blog/shopify-slow-losing-sales` (12 impressions, title rewritten)
18. `/blog/elementor-kills-seo` (7 impressions, title rewritten)
19. `/blog/wix-vs-custom-website` (NEW post, request indexing)
20. `/blog/webflow-migration-cost` (H2 changes from yesterday, if not submitted yet)

### What accelerates indexing
1. Title/description rewrites (done today) → more clicks → Google crawls more aggressively
2. Internal links from indexed pages → Google follows links from pages it already trusts
3. Domain age → 2 months old, Google is cautious. By month 4-5, indexing speeds up significantly
4. IndexNow (Bing) → fast Bing indexing, but does not affect Google
5. Do NOT spam "Request Indexing" on all pages. Use it only for money pages (service pages, high-value blogs)

---

## Part 14 — Confirmed Press and Backlinks

| Date | Publication | DA | Type | Status | URL |
|------|------------|-----|------|--------|-----|
| Apr 13, 2026 | Vercel Community | 90+ | Showcase post (dofollow) | **LIVE** | community.vercel.com/t/panda-patches.../38222 |
| May 30, 2026 | Woman's World | 70+ | Editorial quote + link | CONFIRMED | Publishes May 30 |
| Apr 3, 2026 | DesignRush | 65+ | Agency profile | LIVE | |
| Mar 27, 2026 | G2 (Vercel review) | 90+ | Product review | Submitted, in moderation | |
| Apr 2026 | Sanity Exchange | 60+ | Community profile (dofollow) | LIVE | sanity.io/exchange/community/pandacodegen |
| Apr 2026 | Behance | 90+ | Portfolio profile (ugc, not dofollow) | LIVE | behance.net/pandacodegen |
| Apr 2026 | Dev.to | 70+ | Developer profile | LIVE | dev.to/pandacodegen |
| Apr 2026 | Yelp | 90+ | Business profile (nofollow) | LIVE | |
| Apr 15, 2026 | Agency Spotter | 60+ | Agency directory profile | LIVE | agencyspotter.com/pandacodegen |

---

## Part 14 — Backlink Outreach Plan

### High Priority (Not Yet Done)
- ~~**Vercel Showcase**~~ — DONE Apr 13. Live at community.vercel.com/t/38222. DA 90+ dofollow.
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
