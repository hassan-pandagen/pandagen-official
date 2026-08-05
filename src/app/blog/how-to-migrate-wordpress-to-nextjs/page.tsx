import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
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
const FeatureVisual = lazyLoad(() => import("@/components/blog/MigrationControlAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: { absolute: "WordPress to Next.js Migration Without Losing SEO (2026)" },
    description: "Step-by-step WordPress to Next.js migration: content export, 301 redirect mapping, SEO preservation, staged QA, controlled cutover, rollback, and monitoring.",
    alternates: {
        canonical: '/blog/how-to-migrate-wordpress-to-nextjs',
    },
    keywords: ["how to migrate wordpress to next.js", "wordpress to nextjs migration", "migrate wordpress nextjs seo", "wordpress nextjs migration guide", "wordpress to nextjs without losing seo", "wordpress migration checklist"],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)",
        description: "Step-by-step WordPress to Next.js migration: content export, 301 redirect mapping, SEO preservation, staged QA, controlled cutover, rollback, and monitoring.",
        type: "article",
        publishedTime: "2026-03-11",
        modifiedTime: "2026-08-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs",
        images: [ogImageForPath("/blog/how-to-migrate-wordpress-to-nextjs")],
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)",
        description: "Step-by-step WordPress to Next.js migration: content export, 301 redirect mapping, SEO preservation, staged QA, controlled cutover, rollback, and monitoring.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs#article",
            "headline": "WordPress to Next.js Migration: Step-by-Step Without Losing SEO (2026)",
            "description": "Step-by-step WordPress to Next.js migration: content export, 301 redirect mapping, SEO preservation, staged QA, controlled cutover, rollback, and monitoring.",
            "image": ogImageUrlForPath("/blog/how-to-migrate-wordpress-to-nextjs"),
            "datePublished": "2026-03-11T00:00:00-05:00",
            "dateModified": "2026-08-06T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "knowsAbout": ["WordPress", "Website migration", "Technical SEO", "Web performance", "Next.js"],
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/how-to-migrate-wordpress-to-nextjs#webpage" },
            "articleSection": "WordPress",
            "keywords": ["WordPress migration", "Next.js migration", "WordPress to Next.js", "SEO migration", "301 redirects", "headless CMS migration"],
            "about": [
                { "@type": "Thing", "name": "WordPress" },
                { "@type": "Thing", "name": "Next.js" },
                { "@type": "Thing", "name": "Website Migration" },
                { "@type": "Thing", "name": "Search Engine Optimization" }
            ],
            "inLanguage": "en-US",
            "wordCount": 3499,
            "timeRequired": "PT17M",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Next.js Official Documentation", "url": "https://nextjs.org/docs" },
                { "@type": "CreativeWork", "name": "Google Search Central. Site Move Guide", "url": "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
                { "@type": "CreativeWork", "name": "Vercel Deployment Documentation", "url": "https://vercel.com/docs/deployments/overview" },
                { "@type": "CreativeWork", "name": "WordPress Export Tool Documentation", "url": "https://wordpress.org/documentation/article/tools-export-screen/" }
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
            "description": "Complete WordPress to Next.js migration guide: content export, 301 redirects, SEO preservation, controlled cutover, rollback planning, and monitoring.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": ogImageUrlForPath("/blog/how-to-migrate-wordpress-to-nextjs") },
            "datePublished": "2026-03-11T00:00:00-05:00",
            "dateModified": "2026-08-06T00:00:00-05:00",
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
            "sameAs": ["https://x.com/PandaCodeGen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.goodfirms.co/company/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.crunchbase.com/organization/pandacodegen", "https://www.designrush.com/agency/profile/pandacodegen", "https://www.sortlist.com/agency/pandacodegen", "https://www.f6s.com/pandacodegen", "https://www.sanity.io/exchange/community/pandacodegen", "https://www.behance.net/pandacodegen", "https://dev.to/pandacodegen", "https://www.reddit.com/user/PandaCodeGen/"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen plans and builds SEO-safe WordPress to Next.js migrations, with URL inventory, redirect validation, staged QA, performance targets, cutover, and handover defined in the signed scope.",
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
                            MyCustomPatches is an independent client, and its owner reports that the migration was
                            completed in about 22 days. The performance numbers we previously published for it have
                            been withdrawn until their dated URLs, profiles, run count, cache and consent state are
                            reconciled. Here is the SEO migration checklist behind the work.
                        </p>
                        <BlogAuthor
                            date="Mar 11, 2026"
                            readTime="11 min read"
                            bio="Hassan plans WordPress to Next.js migrations around four things: performance you can measure, URLs that keep working, crawling the staged site before anyone sees it, and a handover that does not surprise you."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Animation */}
                    <div className="mb-10">
                        <FeatureVisual />
                    </div>

                    {/* Executive Summary */}
                    <div data-speakable="true" className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-3">How To Migrate WordPress To Next.js In 8 Steps</p>
                        <p className="text-stone-700 leading-relaxed">
                            A WordPress to Next.js migration without losing SEO starts with evidence, not a ranking promise. Build a complete URL inventory, keep valuable URLs stable, record a disposition for every old URL, create and validate 301 redirects when a changed URL has a relevant successor, preserve metadata and canonical tags, submit the new sitemap, run a staged crawl, and monitor Google Search Console after launch. Some ranking volatility can occur while search engines recrawl and reprocess the site. No agency can guarantee rankings, but a documented process reduces avoidable technical risk. If you are still weighing the risk, our guide to <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline font-medium">whether migrating hurts your SEO</Link> explains what separates a controlled migration from a costly one.
                        </p>
                    </div>

                    {/* Why migrate */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">Three Reasons People Leave WordPress. Only One Is About Speed.</h2>
                        <BlogText>
                            Before getting into the how, it is worth being clear on why. Businesses migrate WordPress to Next.js for one of three reasons. Understanding which one applies to you affects how you approach the migration.
                        </BlogText>
                        <BlogList items={[
                            "Performance constraints: some WordPress sites remain slow after sensible optimization because the theme, plugin stack, database work, hosting, or third-party scripts limit further gains. Measure representative pages before deciding that a rebuild is necessary.",
                            "Search and page-experience risk: poor Core Web Vitals can weaken the user experience and contribute to search-performance problems, but they are only part of Google's broader ranking systems. Base the decision on lab tests, field data, crawl health, content quality, and conversion evidence rather than a blanket WordPress failure statistic.",
                            "Cost and maintenance burden: compare the current spend on hosting, premium plugins, security, updates, and developer support with the proposed WordPress migration cost. Commercial Next.js hosting on Vercel Pro starts at $20 per month plus usage. Vercel Hobby is for personal, non-commercial use, so it is not a valid business-hosting cost assumption."
                        ]} />
                        <BlogText>
                            If any of these sound familiar, a migration may be worth scoping. If your WordPress site is reliable, traffic is growing, conversions are healthy, and maintenance is manageable, there may be no urgent reason to rebuild it. A fit audit should compare repair, optimization, and migration before recommending a platform change.
                        </BlogText>
                        <div className="my-6 p-5 bg-cognac/5 border border-cognac/20 rounded-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">Owner-confirmed project: MyCustomPatches</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-2">
                                MyCustomPatches is an independent client, not a PandaCodeGen property, and its figures are owner-confirmed and published with permission. The client&apos;s owner reports a delivery of about 22 days. We do not hold a dated record of that confirmation, so treat it as an owner statement rather than an audited figure. This article does not treat that number as a
                                market average or as proof of the project&apos;s exact migration inventory. We publish performance
                                figures only with the test profile, date and conditions attached, so none are quoted
                                here. Commercial hosting is budgeted under the destination provider&apos;s
                                business plan rather than presented as free.
                            </p>
                            <p className="text-xs text-stone-500">Site live at <a href="https://www.mycustompatches.net" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">mycustompatches.net</a>. See the <Link href="/work" className="text-cognac hover:underline font-medium">project evidence standard</Link>.</p>
                        </div>
                    </section>

                    {/* Architecture fork */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">First Decide Whether WordPress Stays: Headless or Full Migration</h2>
                        <BlogText>
                            Every other decision on this page depends on this one, and it is the step most guides skip.
                            There are two destinations, not one. <strong>Headless</strong> keeps WordPress running as the
                            content backend and replaces only the front end with Next.js, so editors keep working in
                            wp-admin exactly as they do today. <strong>Full migration</strong> takes the content out of
                            WordPress altogether, into Markdown/MDX files in the repository or into a separate headless
                            CMS, and WordPress is switched off at the end.
                        </BlogText>
                        <BlogText>
                            Choose by who edits the site and how often, not by which stack sounds more modern:
                        </BlogText>
                        <BlogList
                            items={[
                                "Choose HEADLESS when non-technical people publish regularly, when editorial workflow, roles, scheduling or preview matter, or when existing plugins own real functionality you are not ready to rebuild. Next.js reads the content over the WordPress REST API at /wp-json/wp/v2/, or over GraphQL if you install the WPGraphQL plugin.",
                                "Choose FULL MIGRATION when the site is a marketing or documentation site that changes rarely, when developers are the people who edit it, or when you want the WordPress hosting, updates and plugin-security surface gone permanently. Content lands as MDX in the repo, or in a CMS such as Sanity or Payload.",
                                "Count the ongoing bill before choosing. Headless keeps you paying for WordPress hosting and maintenance on top of the new front end, so it is two systems to run, not one. Full migration removes that line but moves editing further from non-technical staff.",
                                "Decide this before the URL audit below, because it changes what you have to export and what you can leave in place.",
                            ]}
                        />
                        <BlogText>
                            Neither is the advanced option. A five-person marketing team publishing twice a week is
                            usually worse off on MDX, and a documentation site with two developer maintainers is usually
                            worse off paying to keep WordPress alive behind it. The one combination that reliably
                            disappoints is choosing headless to avoid a content migration and then discovering the
                            plugins you kept WordPress for are the same plugins slowing the site down.
                        </BlogText>
                    </section>

                    {/* Pre-migration checklist */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">The Pre-Migration Audit That Protects High-Value URLs</h2>
                        <BlogText>
                            Do not start building until you have worked through this checklist. If you skip the baseline, the list of URLs, or the map of what connects to what, you are far more likely to break something at launch and lose search traffic you did not need to lose.
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
                            A small business site might take half a day to inventory. A large publisher or shop takes much longer. What you end up with should be one file, kept under version control, that says: here are the URLs, here is the content, here is what connects to what, here are the numbers we started from, here is who owns each part, and here is how we will sign it off.
                        </BlogText>
                    </section>

                    <div className="my-8 p-6 bg-cognac/5 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-charcoal font-serif italic text-lg leading-relaxed mb-2">&ldquo;A missing or incorrect 301 redirect on a URL with traffic or backlinks is a preventable migration risk. Build the URL inventory first, then document every route and validate redirects for changed URLs with relevant successors before launch.&rdquo;</p>
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
                                    Crawl every URL using Screaming Frog or Sitebulb. Export the URL, title tag, meta description, H1, canonical URL, indexability, and HTTP status. This becomes the SEO migration source of truth. Each indexable WordPress URL should remain at the same path, receive a validated 301 redirect to a relevant replacement, or be intentionally retired with the decision documented.
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
                                    Before importing images into Next.js, convert them to WebP format and compress them to under 150KB where possible. Tools like Squoosh or ImageOptim work well for batch conversion. Next.js's <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">next/image</code> component will handle responsive sizing automatically, but starting with well-optimized source images gives you the best PageSpeed baseline.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-1">Step 3</p>
                                <h3 className="text-lg font-bold mb-3">Set Up Your Next.js Project</h3>
                                <BlogText>
                                    Scaffold your project with <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">npx create-next-app@latest --typescript</code>. Install Tailwind CSS for styling. Deploy an empty shell to Vercel immediately. This sets up your CI/CD pipeline so every commit deploys automatically. You will use preview URLs for QA throughout the build.
                                </BlogText>
                                <BlogText>
                                    If your team needs to edit blog posts or pages themselves, work out what they actually need before you pick a CMS: which fields, how content pieces relate to each other, who is allowed to do what, whether they can preview before publishing, whether you need other languages, and who signs a post off. Sanity and Contentful are both established choices. Check the plan you would be on, what usage is included, what editor seats cost, and what you would pay to run it.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-1">Step 4</p>
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
                                    "Analytics and advertising tags → consent-gated loading through the site's approved consent flow, with regional behavior and event delivery verified before launch",
                                    "WooCommerce → Shopify headless or custom Stripe integration",
                                    "Social sharing buttons → lightweight custom component (no plugin needed)"
                                ]} />
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-1">Step 5. Critical</p>
                                <h3 className="text-lg font-bold mb-3">Set Up 301 Redirects</h3>
                                <BlogText>
                                    Redirect decisions are a critical part of SEO preservation. Each changed URL with a relevant successor should normally receive a server-side permanent redirect. An intentionally removed URL with no useful replacement can return 404 or 410 instead of sending users to an unrelated page. Record that decision for every URL in the inventory. In <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">next.config.js</code>, add a redirects array:
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
                                    Common URL changes that may need redirects include WordPress <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">/category/</code> archives, date-based post URLs (<code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">/2024/03/post-name</code>), and tag pages. Map useful old URLs to the closest relevant equivalent, avoid redirecting many unrelated pages to the homepage, and keep the migration redirects in place for at least one year under Google&apos;s current site-move guidance.
                                </BlogText>
                                <BlogHighlight>
                                    Missing or misdirecting a URL with backlinks, organic traffic, or conversions can waste search equity and create a poor landing experience. Validate the complete URL inventory against the staged Next.js crawl, including redirect destination, status code, chains, loops, canonicals, and final indexability.
                                </BlogHighlight>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-1">Step 6</p>
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
                                    Recreate only the JSON-LD structured data that accurately describes the page and was previously generated by WordPress or its SEO plugin. Common types include Organization, WebSite, BreadcrumbList, WebPage, and Article where eligible. Keeping schema in the codebase makes it version-controlled and testable, but it does not guarantee a rich result.
                                </BlogText>
                                <BlogText>
                                    Generate a new <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">sitemap.xml</code> with Next.js metadata routes or <code className="bg-stone-100 px-1 py-0.5 rounded-sm text-sm">next-sitemap</code>. Include the canonical, indexable URLs you want search engines to discover, exclude application and API routes, and compare the output with the approved URL inventory.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-1">Step 7</p>
                                <h3 className="text-lg font-bold mb-3">QA and Pre-Launch Testing</h3>
                                <BlogText>
                                    Do not go live until all of these pass:
                                </BlogText>
                                <BlogList items={[
                                    "If the signed scope includes a 90+ mobile PageSpeed acceptance target, run three tests on each agreed representative page and record the URL, device profile, date, and environment",
                                    "Every URL assigned a redirect tested for the expected permanent status, relevant destination, and final 200 response without a chain; every intentional retirement tested for its documented 404 or 410 response",
                                    "All forms submitting correctly with confirmation emails firing",
                                    "All images loading with correct alt text and dimensions",
                                    "Google's Rich Results Test passing on key schema pages",
                                    "sitemap.xml rendering all expected URLs at /sitemap.xml",
                                    "robots.txt and your page-level robots tags match what you agreed to index. Anything sensitive sits behind a login and a permission check, because robots.txt asks crawlers politely and stops nobody",
                                    "No console errors in Chrome DevTools on any page",
                                    "Mobile layout tested on actual devices (not just browser devtools)"
                                ]} />
                                <BlogText>
                                    QA duration follows the number of templates, URLs, forms, integrations, devices, redirect exceptions, and acceptance rounds in scope. Do not compress it into a universal one- or two-day promise. A broken form or missing redirect discovered after launch costs more time to fix than finding it in staging.
                                </BlogText>
                            </div>

                            <div className="border border-stone-200 rounded-xl p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-600 mb-1">Step 8</p>
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
                                    "Use Search Console's URL Inspection and Page indexing reports to check how Google sees the production URLs",
                                    "Monitor Search Console daily for crawl errors in the first 2 weeks"
                                ]} />
                                <BlogText>
                                    Ranking volatility can occur while Google recrawls URLs, follows redirects, and reprocesses canonical signals. There is no fixed recovery window and no agency can guarantee that rankings will rise. Compare clicks, impressions, average position, indexed URLs, crawl errors, and conversions with the pre-launch baseline. <Link href="/blog/core-web-vitals-explained" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Core Web Vitals</Link> field data can update only after enough eligible Chrome user data is collected, so use lab tests for immediate debugging and Search Console for longer-term monitoring.
                                </BlogText>
                            </div>
                        </div>
                    </section>

                    {/* Mid CTA */}
                    <div className="bg-stone-900 text-white rounded-2xl p-8 mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Scope, Test, Cut Over</p>
                        <h3 className="text-2xl font-bold mb-3">Want Us to Handle the Migration?</h3>
                        <p className="text-stone-300 mb-6 leading-relaxed">
                            We handle the URL inventory, build, staged crawl QA, 301 redirect mapping and validation, DNS cutover, rollback plan, and post-launch Google Search Console monitoring. Support days, representative test pages, measurement conditions, and any 90+ PageSpeed acceptance target are written into the signed scope. A performance target is not a ranking guarantee.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors">
                                Book Free Migration Assessment <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                    </div>

                    {/* What to expect */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold mb-4">What to Expect After the Migration: The Real Timeline</h2>
                        <BlogText>
                            A WordPress to Next.js migration is not an instant ranking boost. This sequence describes what the team should verify after cutover; it is an operating plan, not a promise about when Google will recrawl the site or how rankings will move.
                        </BlogText>

                        <div className="space-y-4 my-6">
                            {[
                                { period: "Launch to Day 7", title: "Technical Verification", desc: "Run the staged checklist again in production. Verify redirects, canonical tags, robots directives, sitemap coverage, analytics, forms, and the agreed PageSpeed test set. Log any ranking volatility without treating daily movement as a verdict." },
                                { period: "First Weeks", title: "Crawl and Index Monitoring", desc: "Use Google Search Console's Page indexing and URL Inspection reports to check whether Google sees the intended status, canonical, and rendered page. Crawl timing varies by site, so investigate errors rather than promising a recovery date." },
                                { period: "After Field Data", title: "Core Web Vitals Review", desc: "Compare lab measurements with the Core Web Vitals field report when enough real-user data becomes available. CrUX uses a rolling collection window and may not report every URL. Better field performance supports page experience, but it does not guarantee higher rankings." },
                                { period: "Ongoing", title: "Search Baseline Review", desc: "Compare your clicks, impressions, searches, landing pages, indexed URLs and conversions against the baseline you recorded before the move. Then separate what the migration broke from what changed anyway: the time of year, content you edited, a competitor improving, or Google changing its ranking." },
                                { period: "After Stability", title: "Content and Conversion Iteration", desc: "Once crawl and measurement signals are stable, prioritize content gaps, internal links, snippets, and conversion friction. Traffic growth should be reported from the site's own Search Console and analytics data, not from a universal percentage claim." },
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
                                    "Timeline: depends on how well you know Next.js, how many hours a week you actually have, how many pages there are, what has to be reconnected, how much content moves, and how much you test",
                                    "Learning curve: React, Next.js, Tailwind, headless CMS",
                                    "Risk control: You own the URL inventory, redirect QA, launch checklist, and rollback plan",
                                    "WordPress migration cost: your engineering time, commercial hosting you have to pay for, a CMS, monitoring, and any specialist tools you end up buying",
                                    "PageSpeed result: Variable, depends on implementation and optimization knowledge",
                                    "Redirect mapping: Inventory-led mapping and validation for every changed or retired URL"
                                ]} />
                            </div>
                            <div className="border-2 border-charcoal rounded-xl p-5">
                                <p className="font-bold text-charcoal mb-3">Professional Migration</p>
                                <BlogList items={[
                                    "Timeline: Quoted after the page, content, integration, and approval dependencies are inventoried",
                                    "Client input: Required for content decisions, access, acceptance, and launch approval",
                                    "Risk control: Documented crawl QA, redirect validation, rollback planning, and post-launch monitoring; rankings cannot be guaranteed",
                                    "WordPress migration cost: Fixed or phased in the signed proposal after discovery",
                                    "PageSpeed result: A 90+ mobile target can be an acceptance criterion on agreed representative pages when written into scope",
                                    "Redirect mapping: Automated crawl plus manual review of high-value and exception URLs"
                                ]} />
                            </div>
                        </div>

                        <BlogText>
                            The decision comes down to technical capacity, migration risk, and what the website supports. For a revenue-generating site, compare the quoted migration cost with maintenance spend, conversion friction, downtime exposure, and the internal time required for DIY delivery. A professional migration can reduce execution risk, but it cannot promise payback or rankings. If you are a developer who wants to learn Next.js through a real project, DIY is a legitimate path. Just budget time for crawl QA, accessibility, analytics, consent, security, and rollback testing as well as the build. For the measurement process, read our guide to <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">a 90+ PageSpeed score</Link>.
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
                            if you want to understand exactly where the WordPress speed ceiling is before deciding whether a migration is necessary. This is also the exact move we made for our own site, and we documented{" "}
                            <Link href="/blog/why-we-chose-nextjs-over-wordpress-2026" className="text-stone-700 underline underline-offset-2 hover:text-black">
                                why we moved off WordPress ourselves
                            </Link>{" "}
                            with the before and after numbers.
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
                            The assessment puts fixing and speeding up your WordPress site side by side with rebuilding it in Next.js. Then it writes down every URL, what the migration would cost, where your PageSpeed scores start, how we would sign off the SEO side, who does what at cutover, and how we would reverse it. If the evidence does not justify moving, improving what you have is the better recommendation.
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
                            <li><strong>Every old URL needs a deliberate disposition</strong>: Keep stable URLs unchanged where possible, map changed URLs to relevant successors with permanent redirects, and document intentional 404 or 410 retirements. Validate each decision before launch.</li>
                            <li><strong>Timeline follows the work, not a template</strong>: how many pages there are, how much content needs tidying, what has to be reconnected, how long approvals take, how many URLs are awkward exceptions, and how much testing you do.</li>
                            <li><strong>No agency can guarantee rankings</strong>: Expect possible ranking volatility, preserve technical signals carefully, and use Google Search Console monitoring against a dated baseline. Better Core Web Vitals support page experience, but do not cause a guaranteed position gain.</li>
                            <li><strong>The audit before you start is what makes testing possible</strong>: every URL listed, the landing pages that matter most identified, canonical tags recorded, the sitemap captured, integrations mapped, analytics noted, and agreement on what counts as done.</li>
                            <li><strong>Plan a controlled cutover and rollback</strong>: Keep WordPress available until the Next.js release is accepted, lower DNS TTL when appropriate, verify production immediately, and define how to reverse the cutover if a critical check fails.</li>
                        </ol>
                    </section>

                    {/* FAQ */}
                    <FAQAccordion faqs={migrateFAQs} />

                    {/* Related Posts */}
                    <RelatedPosts
                        currentPostId="how-to-migrate-wordpress-to-nextjs"
                    />

                </article>
            </main>
            <Footer />
        </>
    );
}
