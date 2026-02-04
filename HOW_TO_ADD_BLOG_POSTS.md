# How to Add New Blog Posts

## Quick Guide

Your sitemap is now **100% automatic**. When you add a new blog post, it will automatically appear in the sitemap without any manual updates needed!

---

## Adding a New Blog Post (3 Easy Steps)

### Step 1: Add Blog Post Data

Open [src/data/blog.ts](src/data/blog.ts) and add a new entry to the `blogPosts` array:

```typescript
{
  id: "your-post-slug",           // URL: /blog/your-post-slug
  title: "Your Post Title",
  excerpt: "A short description of the post.",
  category: "Category Name",      // e.g., "Performance", "E-Commerce"
  readTime: "10 min",
  date: "Feb 1",                  // Display date
  author: "Hassan",               // or "Imran"
  role: "Lead Eng",               // or "Architect"
  featured: false,                // true = large card, false = grid card
  illustrationType: 'wordpress',  // 'wordpress', 'speed', 'code', or 'saas'
  lastModified: "2026-02-01",    // For sitemap (YYYY-MM-DD format)
},
```

### Step 2: Create Blog Post Page

Create a new file at `src/app/blog/[your-post-slug]/page.tsx`:

```typescript
import BlogArticle from "@/components/BlogStyles";

export default function YourPostPage() {
  return (
    <BlogArticle
      title="Your Post Title"
      date="Feb 1, 2026"
      author="Hassan"
      category="Performance"
    >
      {/* Your blog content goes here */}
      <p>Your blog post content...</p>
    </BlogArticle>
  );
}
```

### Step 3: Build and Deploy

That's it! The blog post will automatically:
- ✅ Appear on the blog page ([/blog](https://pandacodegen.com/blog))
- ✅ Be added to the sitemap ([/sitemap.xml](https://pandacodegen.com/sitemap.xml))
- ✅ Use the correct illustration based on `illustrationType`
- ✅ Show in featured section if `featured: true`

---

## Illustration Types

Choose one of these for your blog post:

| Type | Description | Used For |
|------|-------------|----------|
| `'wordpress'` | Red warning icon with dollar signs | WordPress critiques, cost analysis |
| `'speed'` | Green "0.1s" load time display | Performance, speed topics |
| `'code'` | Orange legacy code snippet | Technical debt, code quality |
| `'saas'` | Blue layered icon | SaaS products, architecture |

---

## Example: Adding a New Post

Let's say you want to add a post about "React Server Components Explained":

1. **Add to [src/data/blog.ts](src/data/blog.ts)**:
```typescript
{
  id: "react-server-components",
  title: "React Server Components Explained",
  excerpt: "How RSC revolutionizes data fetching and performance.",
  category: "Architecture",
  readTime: "15 min",
  date: "Feb 5",
  author: "Hassan",
  role: "Lead Eng",
  featured: true,
  illustrationType: 'code',
  lastModified: "2026-02-05",
},
```

2. **Create `src/app/blog/react-server-components/page.tsx`**:
```typescript
import BlogArticle from "@/components/BlogStyles";

export default function RSCPost() {
  return (
    <BlogArticle
      title="React Server Components Explained"
      date="Feb 5, 2026"
      author="Hassan"
      category="Architecture"
    >
      <h2>What Are Server Components?</h2>
      <p>React Server Components allow...</p>

      {/* Your full content */}
    </BlogArticle>
  );
}
```

3. **Done!** The post now appears everywhere automatically.

---

## Current Blog Posts

Your current blog posts (as of setup):
1. ✅ `wordpress-killer` - Why WordPress Is a Waste of Money (Featured)
2. ✅ `shopify-headless` - Shopify Plus + Next.js: The 0.1s Secret
3. ✅ `elementor-kills-seo` - Stop Using Page Builders

---

## Important Notes

- **Delete Static Sitemap**: You can now delete `public/sitemap.xml` if it exists - the dynamic sitemap at [src/app/sitemap.ts](src/app/sitemap.ts) handles everything automatically
- **No Manual Sitemap Updates**: Never edit the sitemap file manually - it pulls data from [src/data/blog.ts](src/data/blog.ts) automatically
- **Featured Posts**: Set `featured: true` for important posts - they appear as large hero cards
- **SEO-Friendly**: Each post automatically gets proper metadata for search engines
- **Date Format**: Use `lastModified` in YYYY-MM-DD format for accurate sitemap dates

---

## How It Works Behind the Scenes

1. You add a post to [src/data/blog.ts](src/data/blog.ts)
2. The [blog page](src/app/blog/page.tsx) imports and displays all posts from this data
3. The [sitemap](src/app/sitemap.ts) imports and generates URLs for all posts automatically
4. Search engines discover your new posts instantly via the updated sitemap

**Zero manual sitemap updates required!** 🎉
