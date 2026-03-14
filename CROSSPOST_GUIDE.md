# Cross-Posting & Backlink Guide

Every blog post should be cross-posted within 24 hours of publishing. Always set the canonical URL back to pandacodegen.com.

---

## Cross-Post Checklist (Per Blog Post)

- [ ] Dev.to article published (canonical set)
- [ ] Hashnode article published (canonical set)
- [ ] LinkedIn article/post published
- [ ] Reddit thread (if relevant subreddit exists)
- [ ] Twitter/X thread summarizing key points

---

## Platform Details

### 1. Dev.to
- **URL:** dev.to/dashboard/new
- **Canonical field:** Front matter `canonical_url: https://www.pandacodegen.com/blog/[slug]`
- **Tags:** Up to 4 tags (e.g., nextjs, webdev, ecommerce, performance)
- **Format:** Markdown. Remove JSX components, keep headings/lists/tables.
- **Profile link:** Add "Originally published at [PandaCodeGen](https://www.pandacodegen.com/blog/[slug])" at the bottom.

### 2. Hashnode
- **URL:** hashnode.com/draft
- **Canonical field:** Settings > "Are you republishing?" > paste original URL
- **Tags:** Up to 5 tags
- **Format:** Markdown.
- **Tip:** Connect your own domain blog if possible for extra SEO juice.

### 3. LinkedIn
- **Format:** Short post (not article) with 3-5 key takeaways + link to full blog
- **Why:** Business owners (your target audience) are on LinkedIn, not Dev.to
- **Template:**
  ```
  [Hook question or stat]

  We just published a guide on [topic].

  Key takeaways:
  1. [Point 1]
  2. [Point 2]
  3. [Point 3]

  Full guide: [link]

  #webdevelopment #nextjs #ecommerce
  ```

### 4. Reddit
- **Subreddits:** r/nextjs, r/webdev, r/ecommerce, r/shopify, r/wordpress (pick 1-2 relevant ones)
- **Rule:** Never post just a link. Write a genuine comment/question and link as a resource.
- **Example:** "We migrated a client from Shopify to headless and their load time dropped from 3.8s to 0.9s. Wrote up what we learned: [link]"

### 5. Twitter/X
- **Format:** Thread with 5-7 tweets summarizing the blog
- **Last tweet:** "Full breakdown with data and comparisons: [link]"
- **Tag relevant accounts:** @veraborning @vercel @nextjs @suaborning

---

## Backlink Opportunities (One-Time Setup)

### Vercel
- **Showcase:** No public form. Reach out via Twitter DM to @vercel or email partnerships@vercel.com with: "We build client sites on Next.js + Vercel. Our sites score 98-100 PageSpeed. Would love to be featured in your showcase." Include pandacodegen.com and 2-3 client site URLs.
- **Community:** Post in Vercel's GitHub Discussions (github.com/vercel/next.js/discussions) sharing performance tips. Link to your blog posts as references.
- **Vercel Blog:** Pitch a guest post: "How a Small Agency Hits 100 PageSpeed on Every Client Build Using Next.js + Vercel"

### Supabase
- **Made with Supabase:** supabase.com/customers > scroll to bottom > "Built with Supabase" submission
- **Discord:** Share in #showcase channel
- **Blog:** Pitch a case study if you built something meaningful with Supabase

### Other Free Backlinks
| Source | How | DR |
|--------|-----|-----|
| GitHub | Open-source a Next.js performance starter. Link to pandacodegen.com in README | 96 |
| Product Hunt | Launch the audit tool as a free product | 91 |
| Clutch | Already have profile (verified) | 87 |
| Trustpilot | Already have profile (verified) | 93 |
| Cal.com | Submit as customer showcase | 75 |
| IndieHackers | Post agency journey, link in profile | 72 |
| Hacker News | Submit technical blog posts (Show HN) | 91 |
| BetaList | List the audit tool | 65 |
| AlternativeTo | List as alternative to GTmetrix/PageSpeed | 78 |

---

## Markdown Template for Cross-Posts

Use this template when converting a blog post for Dev.to/Hashnode:

```markdown
---
title: "[Blog Title]"
published: true
description: "[1-2 sentence description]"
tags: [tag1, tag2, tag3, tag4]
canonical_url: https://www.pandacodegen.com/blog/[slug]
cover_image: https://www.pandacodegen.com/og-image.jpg
---

[Convert the blog JSX to plain markdown here]

---

*Originally published at [PandaCodeGen](https://www.pandacodegen.com/blog/[slug])*
```

---

## Schedule

| Day | Action |
|-----|--------|
| Day 0 | Publish blog on pandacodegen.com |
| Day 0 | Cross-post to Dev.to + Hashnode (with canonical) |
| Day 1 | LinkedIn post with key takeaways |
| Day 1 | Twitter thread |
| Day 2 | Reddit post (if relevant subreddit) |

*Last updated: March 14, 2026*
