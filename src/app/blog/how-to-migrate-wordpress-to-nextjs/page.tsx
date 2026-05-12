import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const migrateFAQs = blogPosts.find(p => p.id === 'how-to-migrate-wordpress-to-nextjs')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)",
    description: "Step-by-step WordPress to Next.js migration: content export, 301 redirects, SEO preservation, zero downtime launch. 6 migrations, zero ranking drops.",
    alternates: {
        canonical: '/blog/how-to-migrate-wordpress-to-nextjs',
    },
    keywords: ["how to migrate wordpress to next.js", "wordpress to nextjs migration", "migrate wordpress nextjs seo", "wordpress nextjs migration guide", "wordpress to nextjs without losing seo", "wordpress migration checklist"],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)",
        description: "Step-by-step WordPress to Next.js migration: content export, 301 redirects, SEO preservation, zero downtime launch. 6 migrations, zero ranking drops.",
        type: "article",
        publishedTime: "2026-03-11",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)",
        description: "Step-by-step WordPress to Next.js migration: content export, 301 redirects, SEO preservation, zero downtime launch. 6 migrations, zero ranking drops.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs#article",
            "headline": "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)",
            "description": "Step-by-step WordPress to Next.js migration: content export, 301 redirects, SEO preservation, zero downtime launch. 6 migrations, zero ranking drops.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-11T00:00:00-05:00",
            "dateModified": "2026-04-13T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs" },
            "articleSection": "WordPress",
            "keywords": ["WordPress migration", "Next.js migration", "WordPress to Next.js", "SEO migration", "301 redirects", "headless CMS migration"],
            "timeRequired": "PT10M",
            "wordCount": 3000,
            "about": [
                { "@type": "Thing", "name": "WordPress" },
                { "@type": "Thing", "name": "Next.js" },
                { "@type": "Thing", "name": "Website Migration" },
                { "@type": "Thing", "name": "Search Engine Optimization" }
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Next.js Official Documentation", "url": "https://nextjs.org/docs" },
                { "@type": "CreativeWork", "name": "Google Search Central. Site Move Guide", "url": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
                { "@type": "CreativeWork", "name": "Google Search Console Help", "url": "https://support.google.com/webmasters/answer/9012289" },
                { "@type": "CreativeWork", "name": "Vercel Deployment Documentation", "url": "https://vercel.com/docs/deployments/overview" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://developers.google.com/search/docs/appearance/core-web-vitals" },
                { "@type": "CreativeWork", "name": "WordPress Export Tool Documentation", "url": "https://wordpress.org/documentation/article/tools-export-screen/" },
                { "@type": "CreativeWork", "name": "Google Think: Mobile Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "HTTP Archive Web Almanac 2024", "url": "https://almanac.httparchive.org/en/2024/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "How to Migrate WordPress to Next.js", "item": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs#webpage",
            "url": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs",
            "name": "WordPress to Next.js Migration: Step-by-Step Without Losing SEO",
            "description": "Complete WordPress to Next.js migration guide: content export, 301 redirects, SEO preservation, and zero-downtime launch. The full process in plain English.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-03-11T00:00:00-05:00",
            "dateModified": "2026-04-13T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 95 to 100/100 Google PageSpeed on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs#faq",
            "mainEntity": migrateFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function MigrateWordPressToNextJSPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-32 pb-10 md:pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "How to Migrate WordPress to Next.js", href: "/blog/how-to-migrate-wordpress-to-nextjs" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Title & Meta */}
                    <div className="mb-10">
                        <span className="inline-block bg-stone-100 text-stone-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">WordPress</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            How to Migrate WordPress to <span className="font-serif italic text-cognac">Next.js</span> Without Losing SEO
                        </h1>
                        <p className="text-xl text-stone-600 mb-6 leading-relaxed" data-speakable="true">
                            Last one we ran: MyCustomPatches went from 3.2s load and 45 PageSpeed on WordPress to 0.7s and 97 PageSpeed on Next.js. Organic traffic up 45 percent in 90 days. Six migrations, zero ranking disasters. Here is the exact process.
                        </p>
                        <BlogAuthor
                            date="Mar 11, 2026"
                            readTime="10 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Animation */}
                    <div className="mb-10">
                        <PageSpeedAnimation />
                    </div>

                    {/* Executive Summary */}
                    <div data-speakable="true" className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">How To Migrate WordPress To Next.js In 8 Steps</p>
                        <p className="text-stone-700 leading-relaxed">
                            We have migrated WordPress to Next.js six times without losing a single ranking. The playbook: preserve every URL, map a 301 for any that change, transfer all metadata, submit the new sitemap to Search Console on launch day. Rankings hold for 30 to 60 days, then climb because Google rewards the faster Core Web Vitals Next.js delivers natively. Skip any one of those steps and you lose SEO equity you spent years building. Here is the exact process.
                        </p>
                    </div>

                    {/* Why migrate */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">Three Reasons People Leave WordPress. Only One Is About Speed.</h2>
                        <BlogText>
                            Before getting into the how, it is worth being clear on why. Businesses migrate WordPress to Next.js for one of three reasons. Understanding which one applies to you affects how you approach the migration.
                        </BlogText>
                        <BlogList items={[
                            "Speed ceiling: WordPress mobile PageSpeed scores plateau at 65 to 75/100 regardless of optimisation. Next.js sites score 95 to 100/100 natively. If you have spent money on speed optimisation and are still stuck, the platform is the problem.",
                            "SEO stagnation: 56% of WordPress sites fail Google's Core Web Vitals on mobile. Failing Core Web Vitals means a persistent structural ranking disadvantage that no amount of content or backlinks fully overcomes.",
                            "Cost and maintenance burden: WordPress hosting, plugin licences, and maintenance typically cost $10,000 to $20,000 over 3 years. Next.js hosting on Vercel is free. The total cost of ownership drops significantly after the initial migration investment."
                        ]} />
                        <BlogText>
                            If any of these sound familiar, the migration will pay back. If you are on WordPress and everything is working fine, traffic growing, conversions healthy, no major speed or security issues, there is no urgent reason to migrate. But most business owners reading this guide are dealing with at least one of these three problems.
                        </BlogText>
                        <div className="my-6 p-5 bg-cognac/5 border border-cognac/20 rounded-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">Client Receipt: MC Patches LLC (Matt Conner)</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-2">
                                WordPress to Next.js migration. Before: 3.2s load, 45 PageSpeed, $150/mo hosting. After: 0.7s load, 97 PageSpeed, $0/mo hosting. Organic traffic up 45 percent in 90 days. Full design assistance and unlimited revisions included. Rated 5 stars on <a href="https://clutch.co/profile/panda-code-gen" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Clutch</a> and <a href="https://www.goodfirms.co/company/pandacodegen" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">GoodFirms</a>.
                            </p>
                            <p className="text-xs text-stone-500">Site live at <a href="https://www.mycustompatches.net" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">mycustompatches.net</a>. Full case study: <Link href="/work/mycustompatches" className="text-cognac hover:underline font-medium">pandacodegen.com/work/mycustompatches</Link></p>
                        </div>
                    </section>

                    {/* Pre-migration checklist */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">The Half-Day That Saves Your Rankings</h2>
                        <BlogText>
                            Do not start building until you have completed this checklist. Skipping these steps is why migrations fail or lose rankings.
                        </BlogText>
                        <BlogList items={[
                            "Crawl your full site with Screaming Frog (free up to 500 URLs) and export every URL, title tag, meta description, H1, and status code",
                            "Export your Google Search Console data: top 50 pages by clicks, top 50 by impressions. These are the pages you cannot afford to break",
                            "Screenshot your current PageSpeed score on mobile for every key page. This is your baseline to beat",
                            "Document every third-party integration: forms, chat, analytics, pixels, booking tools. Each one needs a Next.js equivalent",
                            "List every plugin and its function. Each will need a native replacement in Next.js",
                            "Set up Google Search Console for your domain if not already done. You will need it immediately after launch"
                        ]} />
                        <BlogText>
                            This audit typically takes half a day. It is the most important half day of the entire migration.
                        </BlogText>
                    </section>

                    <div className="my-8 p-6 bg-cognac/5 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-charcoal font-serif italic text-lg leading-relaxed mb-2">&ldquo;Missing a 301 redirect on a page with backlinks is the number one cause of ranking drops during WordPress migrations. Every other step is there to prevent it.&rdquo;</p>
                        <p className="text-sm text-stone-600 font-semibold">Hassan Jamal, PandaCodeGen</p>
                    </div>

                    {/* Step by step */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">The 8 Steps We Run Every Time</h2>

                        <div className="space-y-6 mt-6">
                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 1</p>
                                <h3 className="text-lg font-bold mb-3">Audit Your WordPress Site</h3>
                                <BlogText>
                                    Crawl every URL using Screaming Frog or Sitebulb. Export a complete spreadsheet of all URLs with their title tags, meta descriptions, H1s, canonical URLs, and HTTP status codes. This document becomes your SEO bible for the migration. Every page that returns a 200 status on WordPress must either return a 200 at the same URL in Next.js or receive a 301 redirect to the correct new URL.
                                </BlogText>
                                <BlogText>
                                    Also pull your top pages from Google Search Console sorted by clicks. These get the most scrutiny during QA. A broken redirect on your top landing page can cost you significant traffic.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 2</p>
                                <h3 className="text-lg font-bold mb-3">Export Your WordPress Content</h3>
                                <BlogText>
                                    Go to <strong>WordPress Admin → Tools → Export → All Content</strong>. Download the XML file: it contains every post, page, category, tag, and custom field. For images, download your full <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">wp-content/uploads</code> folder via FTP or your host's file manager.
                                </BlogText>
                                <BlogText>
                                    Before importing images into Next.js, convert them to WebP format and compress them to under 150KB where possible. Tools like Squoosh or ImageOptim work well for batch conversion. Next.js's <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">next/image</code> component will handle responsive sizing automatically, but starting with well-optimised source images gives you the best PageSpeed baseline.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 3</p>
                                <h3 className="text-lg font-bold mb-3">Set Up Your Next.js Project</h3>
                                <BlogText>
                                    Scaffold your project with <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">npx create-next-app@latest --typescript</code>. Install Tailwind CSS for styling. Deploy an empty shell to Vercel immediately. This sets up your CI/CD pipeline so every commit deploys automatically. You will use preview URLs for QA throughout the build.
                                </BlogText>
                                <BlogText>
                                    If you need a content management interface for blog posts or frequently updated pages, set up a headless CMS at this stage. Sanity is our recommendation. It has a clean editing UI similar to WordPress's Gutenberg editor, and the free tier supports most business sites. Contentful is a solid alternative for larger content libraries.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 4</p>
                                <h3 className="text-lg font-bold mb-3">Build Your Pages and Migrate Content</h3>
                                <BlogText>
                                    Build each page as a React Server Component in Next.js. Replicate your navigation structure, internal linking, and page hierarchy exactly. Import your WordPress XML content into your CMS or convert blog posts to MDX files. Use <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">next/image</code> for every image: this automatically serves WebP, handles lazy loading, and generates responsive sizes.
                                </BlogText>
                                <BlogText>
                                    For each WordPress plugin, implement the equivalent native solution:
                                </BlogText>
                                <BlogList items={[
                                    "Contact Form 7 / Gravity Forms → API route + Resend or Nodemailer",
                                    "Yoast SEO → Next.js metadata API + JSON-LD schema in each page",
                                    "Google Analytics → next/script with lazyOnload strategy",
                                    "WooCommerce → Shopify headless or custom Stripe integration",
                                    "Social sharing buttons → lightweight custom component (no plugin needed)"
                                ]} />
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 5. Critical</p>
                                <h3 className="text-lg font-bold mb-3">Set Up 301 Redirects</h3>
                                <BlogText>
                                    This step is non-negotiable for SEO preservation. Every URL that changes between your WordPress site and your Next.js site needs a 301 redirect. In <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">next.config.js</code>, add a redirects array:
                                </BlogText>
                                <div className="bg-stone-900 text-stone-100 rounded-lg p-4 my-4 text-sm font-mono overflow-x-auto">
                                    <pre>{`async redirects() {
  return [
    {
      source: '/old-wordpress-slug',
      destination: '/new-nextjs-path',
      permanent: true, // 301
    },
  ]
}`}</pre>
                                </div>
                                <BlogText>
                                    Common URL changes that need redirects: WordPress often adds <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">/category/</code> prefixes to blog archives, date-based post URLs (<code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">/2024/03/post-name</code>), and tag pages. If you are simplifying your URL structure in Next.js, every old URL needs a redirect to its new equivalent.
                                </BlogText>
                                <BlogHighlight>
                                    Missing a 301 redirect on a page with backlinks is the #1 cause of ranking drops during WordPress migrations. Check every URL in your Screaming Frog export against your Next.js routes before going live.
                                </BlogHighlight>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 6</p>
                                <h3 className="text-lg font-bold mb-3">Migrate All SEO Metadata</h3>
                                <BlogText>
                                    Transfer every title tag, meta description, Open Graph tag, and canonical URL from WordPress (via Yoast or RankMath) to Next.js. In Next.js 14+, use the metadata API in each <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">page.tsx</code>:
                                </BlogText>
                                <div className="bg-stone-900 text-stone-100 rounded-lg p-4 my-4 text-sm font-mono overflow-x-auto">
                                    <pre>{`export const metadata = {
  title: "Your Page Title",
  description: "Your meta description",
  alternates: { canonical: "https://yoursite.com/page" },
  openGraph: { title, description, type: "website" },
}`}</pre>
                                </div>
                                <BlogText>
                                    Add JSON-LD schema markup that Yoast was previously generating. At minimum: Organization, WebSite, BreadcrumbList, and WebPage on every page. Article schema on every blog post. This schema is now inline in your page rather than generated by a plugin: it is more reliable and Google processes it faster.
                                </BlogText>
                                <BlogText>
                                    Generate a new <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">sitemap.xml</code> using the <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">next-sitemap</code> package. Configure it to include all your pages and exclude any admin or API routes.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 7</p>
                                <h3 className="text-lg font-bold mb-3">QA and Pre-Launch Testing</h3>
                                <BlogText>
                                    Do not go live until all of these pass:
                                </BlogText>
                                <BlogList items={[
                                    "PageSpeed Mobile score above 90 on your top 5 pages. Run on the Vercel preview URL",
                                    "Every 301 redirect tested and returning correct destination URLs",
                                    "All forms submitting correctly with confirmation emails firing",
                                    "All images loading with correct alt text and dimensions",
                                    "Google's Rich Results Test passing on key schema pages",
                                    "sitemap.xml rendering all expected URLs at /sitemap.xml",
                                    "robots.txt configured correctly (disallow /api/ paths, allow everything else)",
                                    "No console errors in Chrome DevTools on any page",
                                    "Mobile layout tested on actual devices (not just browser devtools)"
                                ]} />
                                <BlogText>
                                    This QA phase typically takes 1 to 2 days for a standard business site. Do not rush it. A broken form or missing redirect discovered after launch costs more time and SEO equity to fix than finding it in QA.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Step 8</p>
                                <h3 className="text-lg font-bold mb-3">DNS Cutover and Post-Launch Monitoring</h3>
                                <BlogText>
                                    When QA is complete and everything passes, update your domain DNS to point to Vercel. In your domain registrar, update the A record to Vercel's IP or add a CNAME pointing to your Vercel project URL. Vercel provisions an SSL certificate automatically within minutes.
                                </BlogText>
                                <BlogText>
                                    Immediately after DNS propagates and your new site is live:
                                </BlogText>
                                <BlogList items={[
                                    "Submit your new sitemap.xml in Google Search Console → Sitemaps",
                                    "Use Google Search Console's URL Inspection tool to request indexing on your top 10 pages",
                                    "Verify your old WordPress site is fully offline or returning 301s (not serving duplicate content)",
                                    "Check that Googlebot can access your new site via Search Console's Coverage report",
                                    "Monitor Search Console daily for crawl errors in the first 2 weeks"
                                ]} />
                                <BlogText>
                                    Rankings may fluctuate in the first 2 to 4 weeks as Google re-crawls and re-evaluates your pages. This is normal. By weeks 4 to 8, your Core Web Vitals field data begins updating in Search Console with real user data from the faster Next.js site. That is when ranking improvements typically start appearing.
                                </BlogText>
                            </div>
                        </div>
                    </section>

                    {/* Mid CTA */}
                    <div className="bg-stone-900 text-white rounded-2xl p-8 mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Done It 6+ Times</p>
                        <h3 className="text-2xl font-bold mb-3">Want Us to Handle the Migration?</h3>
                        <p className="text-stone-300 mb-6 leading-relaxed">
                            We handle the entire process: audit, build, QA, redirect mapping, DNS cutover, and 30-day post-launch monitoring. Guaranteed 95+ PageSpeed score or we fix it for free.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors">
                                Book Free Migration Assessment <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                    </div>

                    {/* What to expect */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">What to Expect After the Migration: The Real Timeline</h2>
                        <BlogText>
                            Managing expectations is important. A WordPress to Next.js migration is not an instant ranking boost. Here is the realistic timeline based on our client migrations:
                        </BlogText>

                        <div className="space-y-4 my-6">
                            {[
                                { period: "Day 1 to 7", title: "Technical Verification", desc: "PageSpeed scores improve immediately and visibly. Verify all redirects, metadata, and sitemap in Search Console. Some minor ranking fluctuations are normal as Google re-evaluates changed or redirected pages." },
                                { period: "Week 2 to 4", title: "Googlebot Re-Crawl", desc: "Google crawls your new faster site more frequently because of improved TTFB. The Coverage report in Search Console shows pages being re-indexed. Internal linking improvements from cleaner Next.js code get picked up." },
                                { period: "Week 4 to 8", title: "Core Web Vitals Update", desc: "Real Chrome user data (CrUX) begins reflecting your new faster load times in Search Console's Core Web Vitals report. This is the data Google actually uses for rankings: your pages start moving from Needs Improvement to Good." },
                                { period: "Month 2 to 3", title: "Ranking Recovery and Growth", desc: "Rankings stabilise at their new baseline, typically equal to or better than pre-migration. Pages that were borderline on Core Web Vitals see the biggest position improvements. Organic traffic increases as better rankings compound." },
                                { period: "Month 3 to 6", title: "Compounding Advantage", desc: "The full impact becomes visible. Clients typically see 20 to 40% organic traffic increases from the combined effect of better Core Web Vitals, lower bounce rates, and the authority signals that come from faster, more engaging pages." },
                            ].map(({ period, title, desc }) => (
                                <div key={period} className="flex gap-4 border border-stone-300 rounded-xl p-5">
                                    <div className="shrink-0 w-24 text-xs font-semibold text-cognac uppercase tracking-wider pt-0.5">{period}</div>
                                    <div>
                                        <p className="font-bold text-charcoal mb-1">{title}</p>
                                        <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DIY vs Pro */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">DIY Migration vs Professional Migration: The Honest Comparison</h2>
                        <BlogText>
                            This guide gives you the full process. But it is worth being direct about what DIY migration actually involves if you are not an experienced Next.js developer.
                        </BlogText>

                        <div className="grid md:grid-cols-2 gap-4 my-6">
                            <div className="border border-stone-200 rounded-xl p-5">
                                <p className="font-bold text-charcoal mb-3">DIY Migration</p>
                                <BlogList items={[
                                    "Timeline: 3 to 6 months part-time",
                                    "Learning curve: React, Next.js, Tailwind, headless CMS",
                                    "Risk: High. Easy to break SEO during DNS cutover if you miss redirects",
                                    "Cost: $0 to $2,000 in tools and hosting",
                                    "PageSpeed result: Variable, depends on your optimisation knowledge",
                                    "Redirect mapping: Manual, must be 100% complete or rankings drop"
                                ]} />
                            </div>
                            <div className="border-2 border-charcoal rounded-xl p-5">
                                <p className="font-bold text-charcoal mb-3">Professional Migration</p>
                                <BlogList items={[
                                    "Timeline: 2 to 6 weeks",
                                    "Learning curve: None, handled end to end by us",
                                    "Risk: Low. We have done this 6+ times with zero ranking disasters",
                                    "Cost: $8,000 to $35,000 depending on complexity",
                                    "PageSpeed result: Guaranteed 95 to 100/100 mobile",
                                    "Redirect mapping: Automated crawl + manual verification"
                                ]} />
                            </div>
                        </div>

                        <BlogText>
                            The decision comes down to your technical background and the revenue your site generates. If your site generates $20,000+/month and you're losing rankings to slow Core Web Vitals, a professional migration pays back within months. If you are a developer who wants to learn Next.js by doing a real project, DIY is a legitimate path. Just budget time for the learning curve. To see exactly what 95+ PageSpeed looks like in practice, read our post on <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">achieving 100/100 PageSpeed scores</Link>.
                        </BlogText>
                        <BlogText>
                            Either way, read our post on{" "}
                            <Link href="/blog/wordpress-vs-nextjs" className="text-stone-700 underline underline-offset-2 hover:text-black">
                                WordPress vs Next.js
                            </Link>{" "}
                            before committing: it covers the full comparison of what you gain and what you trade off. And see our{" "}
                            <Link href="/blog/how-to-fix-slow-wordpress" className="text-stone-700 underline underline-offset-2 hover:text-black">
                                guide to fixing a slow WordPress site
                            </Link>{" "}
                            if you want to understand exactly where the WordPress speed ceiling is before deciding whether a migration is necessary.
                        </BlogText>

                        <div className="flex items-center gap-2 text-xs text-stone-400 mt-8"><RefreshCw className="w-3 h-3" />Published: Mar 11, 2026</div>
                    </section>

                    {/* Bottom CTA */}
                    <div className="border-2 border-stone-900 rounded-2xl p-8 mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Ready to Migrate?</p>
                        <h3 className="text-2xl font-bold mb-3">Get a Free WordPress Migration Assessment</h3>
                        <p className="text-stone-600 mb-3 leading-relaxed">
                            We will audit your WordPress site, scope the migration, map every redirect, and give you a fixed-price quote before you commit to anything.
                        </p>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            Every month on a slow WordPress platform is a month your competitors with faster Next.js sites are compounding their ranking advantage. The businesses that migrate in 2026 will dominate organic search for the next 3 to 5 years.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <CalModalButton className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors">
                                    Book Free Migration Assessment <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                            <Link
                                href="/services/wordpress-migration?ref=blog/how-to-migrate-wordpress-to-nextjs"
                                className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 font-semibold px-6 py-3 rounded-lg hover:bg-stone-50 transition-colors"
                            >
                                View WordPress Migration Service
                            </Link>
                        </div>
                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>301 redirects are non-negotiable</strong>: Every URL that changes during migration needs a permanent redirect or you will lose the SEO equity you spent years building.</li>
                            <li><strong>A proper migration takes 2-6 weeks, not months</strong>: The 8-step process (audit, export, setup, build, redirects, metadata, QA, launch) is well-defined and repeatable.</li>
                            <li><strong>Rankings recover in 30-60 days and then improve</strong>: Temporary fluctuations are normal, but faster Core Web Vitals cause Google to reward your pages with better positions by month 2-3.</li>
                            <li><strong>The pre-migration audit is the most important step</strong>: Crawling every URL, documenting top pages, and mapping integrations prevents the mistakes that cause ranking drops.</li>
                            <li><strong>Your WordPress site stays live until the new one is verified</strong>: Zero-downtime DNS cutover means visitors never see a maintenance page during the transition.</li>
                        </ol>
                    </section>

                    {/* FAQ */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <FAQAccordion faqs={migrateFAQs} />
                    </section>

                    {/* Related Posts */}
                    <RelatedPosts
                        currentPostId="how-to-migrate-wordpress-to-nextjs"
                        category="WordPress"
                    />

                </article>
            </main>
            <Footer />
        </>
    );
}