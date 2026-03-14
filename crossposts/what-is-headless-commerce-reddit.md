# Reddit Post (r/shopify or r/ecommerce)

**Title:** We moved a client from standard Shopify to headless (Next.js + Storefront API). Load time went from 3.8s to 0.9s. Here's what we learned.

**Body:**

We've been building headless storefronts for e-commerce clients and the performance difference is hard to ignore.

Before (standard Shopify theme):
- Mobile load time: 3.8 seconds
- PageSpeed score: 42/100
- Bounce rate: 54%

After (Next.js + Shopify Storefront API):
- Mobile load time: 0.9 seconds
- PageSpeed score: 97/100
- Bounce rate: 24%

The conversion rate went from 1.8% to 2.9%. For this particular store, that translated to roughly $67K/month in additional revenue.

The biggest misconception we hear: "I'll lose all my products and orders." You don't. Headless only replaces the storefront. Your Shopify admin, products, customers, payment setup all stay exactly where they are. The new frontend just connects through the Storefront API.

That said, headless is NOT for every store. If you're happy with your current rankings, not looking to grow further, and your store converts well on mobile, there's no reason to invest in a custom build. And if the only thing holding you back is thinking you'll need a developer for every small change, that's not how modern headless works. You get a visual CMS dashboard just like WordPress or Shopify.

We wrote up a full breakdown here if anyone wants the details: https://www.pandacodegen.com/blog/what-is-headless-commerce

Happy to answer questions about the process, cost, or whether it makes sense for your store.

---

# Reddit Post (r/nextjs or r/webdev)

**Title:** Built a headless Shopify storefront with Next.js 15. PageSpeed went from 42 to 97. Here's the architecture.

**Body:**

Stack: Next.js 15 App Router + Shopify Storefront API + Vercel

Key decisions that moved the needle:
- Server Components for all product/collection pages (zero client JS for browsing)
- Streaming with Suspense for cart and checkout (no full-page loading states)
- ISR for product pages (revalidates every 60s so inventory stays accurate)
- No third-party Shopify apps. Everything built natively (reviews, wishlist, recently viewed)

Results:
- LCP: 0.9s (was 3.8s on Liquid theme)
- PageSpeed mobile: 97/100
- JS bundle: ~45KB first load (Shopify themes ship 400KB+)

The client keeps using their Shopify admin for everything. Products, orders, discounts, all the same. Only the customer-facing frontend changed.

Wrote a non-technical explainer for store owners considering headless: https://www.pandacodegen.com/blog/what-is-headless-commerce

The technical deep-dive on how we hit 100 PageSpeed on every build: https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed
