import { ArrowLeft, Calendar, Clock, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote , BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const pagespeedFAQs = blogPosts.find(p => p.id === 'how-to-achieve-100-pagespeed')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "How to Hit a 90+ PageSpeed Score (8-Step Process)",
    description: "Most sites score 35 to 55 on PageSpeed. We hit 90+ every build. The exact 8-step process, with real before/after data.",
    alternates: {
        canonical: '/blog/how-to-achieve-100-pagespeed',
    },
    keywords: ["90+ PageSpeed score", "Core Web Vitals optimization", "Next.js PageSpeed score", "website speed optimization 2026", "how to improve PageSpeed score", "Google PageSpeed Insights guide", "fix slow website"],
    openGraph: {
        title: "How to Hit a 90+ PageSpeed Score (Our Exact 8-Step Process)",
        description: "Most sites score 35 to 55 on PageSpeed. We hit 90+ every build. The exact 8-step process, with real before/after data.",
        type: "article",
        publishedTime: "2026-02-17T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Hit a 90+ PageSpeed Score (Our Exact 8-Step Process)",
        description: "Most sites score 35 to 55 on PageSpeed. We hit 90+ every build. The exact 8-step process, with real before/after data.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed#article",
            "headline": "How to Hit a 90+ PageSpeed Score (Our Exact 8-Step Process)",
            "description": "Most sites score 35 to 55 on PageSpeed. We hit 90+ every build. The exact 8-step process, with real before/after data.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-02-17T00:00:00-05:00",
            "dateModified": "2026-02-17T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed" },
            "articleSection": "Performance",
            "keywords": ["PageSpeed score", "Core Web Vitals", "Next.js performance", "website speed optimization", "90+ PageSpeed", "LCP optimization"],
            "timeRequired": "PT12M",
            "wordCount": 3000,
            "about": [
                {"@type": "Thing", "name": "Google PageSpeed Score"},
                {"@type": "Thing", "name": "Core Web Vitals"},
                {"@type": "Thing", "name": "Next.js"},
                {"@type": "Thing", "name": "Website Performance Optimisation"}
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Core Web Vitals. Google Web Dev", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Next.js Image Optimization", "url": "https://nextjs.org/docs/app/api-reference/components/image" },
                { "@type": "CreativeWork", "name": "Next.js Font Optimization", "url": "https://nextjs.org/docs/app/building-your-application/optimizing/fonts" },
                { "@type": "CreativeWork", "name": "Chrome Lighthouse Overview", "url": "https://developer.chrome.com/docs/lighthouse/overview/" },
                { "@type": "CreativeWork", "name": "Largest Contentful Paint (LCP) Optimization", "url": "https://web.dev/lcp/" },
                { "@type": "CreativeWork", "name": "Google Think: Mobile Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed and Revenue Research", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "How to Achieve a 90+ PageSpeed Score", "item": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed#webpage",
            "url": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed",
            "name": "How to Hit a 90+ PageSpeed Score (Our Exact 8-Step Process)",
            "description": "Most sites score 35 to 55 on PageSpeed. We hit 90+ every build. The exact 8-step process, with real before/after data.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-02-17T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://x.com/PandaCodeGen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158", "https://www.goodfirms.co/company/pandacodegen", "https://www.crunchbase.com/organization/pandacodegen", "https://www.designrush.com/agency/profile/pandacodegen", "https://www.sortlist.com/agency/pandacodegen", "https://www.f6s.com/pandacodegen", "https://www.sanity.io/exchange/community/pandacodegen", "https://www.behance.net/pandacodegen", "https://dev.to/pandacodegen", "https://www.reddit.com/user/PandaCodeGen/"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 90+ Google PageSpeed in writing or a full refund on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/how-to-achieve-100-pagespeed#faq",
            "mainEntity": pagespeedFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
        }
    ]
};

export default function AchievePageSpeedPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-32 pb-10 md:pb-20">
                {/* Global Noise Texture */}
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                {/* Ambient Glows */}

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Article Schema */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    {/* Breadcrumb Navigation */}
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "How to Achieve a 90+ PageSpeed Score", href: "/blog/how-to-achieve-100-pagespeed" }
                        ]}
                    />

                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Title & Meta */}
                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            How to Achieve a <span className="font-serif italic text-cognac">90+ PageSpeed Score</span>
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Eight engineering steps. Every client build clears 90+ on Mobile. No plugins, no guesswork, no templates.
                        </p>

                        <BlogAuthor
                            date="Feb 17, 2026"
                            readTime="12 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Feature Visual */}
                    <div className="mb-12">
                        <PageSpeedAnimation />
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "Google PageSpeed score directly affects your rankings. Sites below 70 lose 20-30% of organic traffic.",
                            "WordPress can reach 60-75 max. To reliably hit 90+, you need modern architecture (Next.js, React).",
                            "We use 8 specific optimizations to land a 90+ score on every client site.",
                            "Result: Higher rankings, lower bounce rate, 8% more conversions per 0.1s speed improvement."
                        ]} />
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <BlogText>
                            A client came to us with a PageSpeed Mobile score of 38/100. "We've tried everything," they said. "Image compression, caching plugins, CDN, better hosting. Nothing works."
                        </BlogText>

                        <BlogText>
                            Six weeks later, their new site: <BlogHighlight>97 Mobile. 99 Desktop.</BlogHighlight> Solidly in Google&apos;s green zone.
                        </BlogText>

                        <BlogText>
                            Within 90 days, their Google rankings jumped 15-20 positions. Organic traffic tripled. Bounce rate dropped from 54% to 22%.
                        </BlogText>

                        <BlogText>
                            How? We didn't optimize their WordPress site. We replaced it.
                        </BlogText>

                        <BlogText>
                            This guide shows you the exact 8-step process we use to reliably land a 90+ PageSpeed score on every client site. No magic. Just engineering.
                        </BlogText>

                        <BlogText>
                            One honest note up front: a flat 100 is situational. It depends on your images, third-party scripts, and ad pixels, and chasing the last few points is rarely the goal. The target that actually moves rankings and revenue is the green zone (90+), and that&apos;s what this process delivers every time.
                        </BlogText>

                        <BlogHeader>Why Does Your PageSpeed Score Directly Determine Your Google Rankings?</BlogHeader>

                        <BlogText>
                            Google PageSpeed score isn't just a vanity metric. It's a proxy for four Core Web Vitals that Google uses as direct ranking factors:
                        </BlogText>

                        <BlogList items={[
                            "LCP (Largest Contentful Paint) - How fast the main content loads",
                            "INP (Interaction to Next Paint) - How fast your site responds to clicks",
                            "CLS (Cumulative Layout Shift) - Whether elements jump around while loading",
                            "FCP (First Contentful Paint) - How fast users see something on screen"
                        ]} />

                        <BlogQuote>
                            In 2021, Google made Core Web Vitals a direct ranking factor. Fast sites moved up 20-30 positions. Slow sites dropped. PageSpeed score is how Google measures this.
                        </BlogQuote>

                        <BlogText>
                            Here's what happens at different PageSpeed score levels:
                        </BlogText>

                        <BlogList items={[
                            "0-49 (Red): You're losing 20-30% of organic traffic to faster competitors",
                            "50-89 (Orange): You're losing 10-15% of organic traffic. Mobile users bounce fast.",
                            "90-100 (Green): You rank higher, users stay longer, conversions increase 8% per 0.1s improvement"
                        ]} />

                        <BlogText>
                            Translation: <BlogHighlight>If your competitor scores 95 on Mobile and you score 48, the search gap compounds. Google rewards the faster site with higher positions, more clicks, and lower bounce.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>The Hard Truth: WordPress Can't Get You Into the 90+ Green Zone</BlogHeader>

                        <BlogText>
                            Before we show you how to hit 90+, you need to understand why WordPress optimization has a ceiling.
                        </BlogText>

                        <BlogText>
                            <strong>WordPress (even fully optimized):</strong>
                        </BlogText>

                        <BlogList items={[
                            "Best case: 60-75/100 Mobile score",
                            "Requires: Image compression, caching, CDN, premium hosting, zero plugins",
                            "Still slow because: Theme bloat, render-blocking CSS, old architecture",
                            "Load time: 2.0-2.5 seconds (optimized), 3.5-4.5 seconds (typical)"
                        ]} />

                        <BlogText>
                            <strong>Next.js (our standard):</strong>
                        </BlogText>

                        <BlogList items={[
                            "Standard result: 90-99/100 Mobile score",
                            "Built-in: Image optimization, code splitting, static generation",
                            "Fast because: Modern architecture, minimal JavaScript, instant loading",
                            "Load time: 0.8-1.2 seconds (standard), 0.5-0.8 seconds (optimized)"
                        ]} />

                        <BlogQuote>
                            You can't optimize old technology to beat new technology. The best-optimized 2006 Honda Civic will never be faster than a base 2024 Tesla. Same with WordPress vs Next.js.
                        </BlogQuote>

                        <BlogText>
                            That's why every client site we build starts with Next.js. The optimizations below only work with modern architecture.
                        </BlogText>

                        <BlogText>
                            Still on the fence about WordPress? Our post on{" "}
                            <Link href="/blog/wordpress-killer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                the true cost of WordPress in 2026
                            </Link>{" "}
                            breaks down exactly why most businesses are paying 3 to 5× more than they realise. In hosting, plugins, security, and lost revenue from slow speed.
                        </BlogText>

                        <BlogHeader>What Results Do Real Clients Get After Migrating to Next.js?</BlogHeader>

                        <BlogText>
                            Before we get into the technical steps, here's what actually happens when we apply all 8 optimizations for our clients:
                        </BlogText>

                        <BlogText>
                            <strong>MyCustomPatches (WooCommerce to Next.js headless, rebuilt for Matt Conner):</strong>
                        </BlogText>

                        <BlogList items={[
                            "Before: 42/100 Mobile, 3.8s load time, 54% bounce rate",
                            "After: 97/100 Mobile, 0.9s load time, 24% bounce rate",
                            "Result: Measurable conversion lift and sub-one-second first paint on mobile"
                        ]} />
                        <BlogText>
                            Matt Conner, the owner of MyCustomPatches, described the end result as a speedy, bug-free website built with the latest technology. Response time during the rebuild was always under an hour.
                        </BlogText>

                        <BlogText>
                            <strong>SaaS Client (WordPress → Next.js):</strong>
                        </BlogText>

                        <BlogList items={[
                            "Before: 38/100 Mobile, 4.2s load time, Page 2 Google rankings",
                            "After: 98/100 Mobile, 1.1s load time, Page 1 Google rankings",
                            "Result: 3× organic traffic within 90 days, 120% more signups"
                        ]} />

                        <BlogText>
                            <strong>Service Business (WordPress to Next.js):</strong>
                        </BlogText>

                        <BlogList items={[
                            "Before: 51/100 Mobile, 3.5s load time",
                            "After: 99/100 Mobile, 0.8s load time",
                            "Result: More than doubled qualified leads per month within 90 days"
                        ]} />

                        <BlogQuote>
                            The pattern is consistent: Move from WordPress/Shopify to Next.js with these 8 optimizations → 90+ PageSpeed score → 2-4× more traffic within 90 days.
                        </BlogQuote>

                        {/* Mid-Article CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Want to see what a 90+ score actually looks like for your site?</p>
                            <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. We run your PageSpeed live on the call, show you your exact gaps, and quote what it takes to get you into the green zone (90+).</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                    Schedule Free Audit <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                        </div>

                        <BlogHeader>What Are the 8 Specific Optimizations That Get Any Site to 90+ PageSpeed?</BlogHeader>

                        <BlogText>
                            Here's our exact checklist. We use this on every client project. Miss one, and you'll plateau at 85-90.
                        </BlogText>

                        <BlogHeader>
                            Optimization #1: Image Optimization (Saves 1-2 seconds)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Problem:</strong> Most sites load full-resolution 4K images on mobile. A 2.5MB PNG that displays at 300px wide.
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Use next/image component (built into Next.js)",
                            "Automatically serves WebP/AVIF (modern formats 50% smaller)",
                            "Responsive images: Different sizes for mobile vs desktop",
                            "Lazy loading: Images below the fold don't load until scrolled",
                            "Result: Images load 3-5× faster"
                        ]} />

                        <BlogText>
                            <strong>WordPress equivalent:</strong> Requires 3 plugins (Imagify, WP Rocket, lazy load plugin) that conflict and slow you down.
                        </BlogText>

                        <BlogHeader>
                            Optimization #2: Font Optimization (Saves 0.3-0.8 seconds)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Problem:</strong> Google Fonts load from an external server. 200-400ms delay while fonts download. Text is invisible during loading (FOIT - Flash of Invisible Text).
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Use next/font to self-host Google Fonts",
                            "Fonts preloaded during build, served instantly",
                            "No external requests, no FOIT",
                            "Result: Text appears 400ms faster"
                        ]} />

                        <BlogText>
                            <strong>WordPress equivalent:</strong> Manually download fonts, edit theme files, configure preload headers. Most developers skip this.
                        </BlogText>

                        <BlogHeader>
                            Optimization #3: JavaScript Optimization (Saves 0.5-1.5 seconds)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Problem:</strong> JavaScript files block page rendering. Browser can't show content until JavaScript finishes loading and executing.
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Code splitting: Only load JavaScript needed for current page",
                            "Tree shaking: Remove unused code from libraries",
                            "Dynamic imports: Load heavy features only when user needs them",
                            "Server components: Move logic to server, send zero JavaScript to browser",
                            "Result: 70-80% less JavaScript"
                        ]} />

                        <BlogText>
                            Example: WordPress contact form plugin = 120KB JavaScript. Our Next.js form = 8KB. That's 15× smaller.
                        </BlogText>

                        <BlogHeader>
                            Optimization #4: CSS Optimization (Saves 0.2-0.6 seconds)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Problem:</strong> CSS blocks page rendering. WordPress themes load 200KB+ CSS for every page, even if 90% is unused.
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Tailwind CSS with tree-shaking: Only CSS you use gets shipped",
                            "Critical CSS inlined: Above-the-fold CSS loads instantly",
                            "No render-blocking CSS: Styles load progressively",
                            "Result: 80-90% smaller CSS files"
                        ]} />

                        <BlogText>
                            Typical WordPress theme: 180KB CSS. Our Next.js sites: 12-18KB CSS.
                        </BlogText>

                        <BlogHeader>
                            Optimization #5: Lazy Loading Everything (Saves 0.5-1 second)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Problem:</strong> Pages load everything on page load, even content users never see.
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Lazy load below-the-fold components (footer, modals, etc)",
                            "Defer third-party scripts (chat widgets, analytics, etc)",
                            "Only load what's visible on screen",
                            "Result: Initial page load 50-60% faster"
                        ]} />

                        <BlogText>
                            Example: Chat widget, newsletter popup, related posts - all lazy loaded. Users see content instantly, extras load in background.
                        </BlogText>

                        <BlogHeader>
                            Optimization #6: Edge Caching & CDN (Saves 0.3-0.8 seconds)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Problem:</strong> Every page request hits your server. If server is slow or far away, page is slow.
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Deploy to Vercel Edge Network (300+ locations worldwide)",
                            "Pages pre-built and cached at edge locations",
                            "Zero server computation on page load",
                            "Users get instant response from nearest location",
                            "Result: 50-300ms response time globally"
                        ]} />

                        <BlogText>
                            <strong>WordPress equivalent:</strong> $400/month Cloudflare Enterprise + complex configuration. We get it free with Vercel.
                        </BlogText>

                        <BlogHeader>
                            Optimization #7: Remove Third-Party Scripts (Saves 0.5-2 seconds)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Problem:</strong> Every third-party script adds 100-500ms. Facebook Pixel, Google Analytics, chat widgets, ad scripts.
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Defer all third-party scripts until after page load",
                            "Load on user interaction (scroll, click) instead of page load",
                            "Use lightweight alternatives (Plausible vs Google Analytics)",
                            "Server-side tracking where possible",
                            "Result: Zero third-party blocking on initial load"
                        ]} />

                        <BlogText>
                            Example: Facebook Pixel = 280ms blocking. Our implementation: Deferred until user scrolls = 0ms blocking.
                        </BlogText>

                        <BlogHeader>
                            Optimization #8: Server Components (Our Next.js 16 Standard)
                        </BlogHeader>

                        <BlogText>
                            <strong>The Game Changer:</strong> Server Components let you move heavy logic to the server. Browser receives pre-rendered HTML with zero JavaScript.
                        </BlogText>

                        <BlogText>
                            <strong>Our Solution:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Data fetching on server: Database queries, API calls",
                            "Render components on server: Complex UI logic runs server-side",
                            "Send HTML to browser: Users see content instantly",
                            "Zero client JavaScript for static content",
                            "Result: 60-80% less JavaScript shipped to browser"
                        ]} />

                        <BlogText>
                            This is the biggest breakthrough in web performance since 2020. <BlogHighlight>It's why Next.js sites land in the high 90s while WordPress sites plateau at 70.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>Why Can&apos;t Most Business Owners DIY a 90+ PageSpeed Score?</BlogHeader>

                        <BlogText>
                            If you're technical and have experience with React/Next.js, you can implement these optimizations yourself.
                        </BlogText>

                        <BlogText>
                            But here's the reality:
                        </BlogText>

                        <BlogList items={[
                            "Optimization #1-7 require Next.js knowledge. If you're on WordPress, you can't use them.",
                            "Optimization #8 (Server Components) runs best on Next.js 14 or 16. Most agencies still ship client-heavy builds that waste the architecture.",
                            "Holding a steady 90+ requires finding and fixing tiny issues. One unused CSS file can drop you to 88.",
                            "Testing and debugging takes 40-60 hours if you're learning as you go."
                        ]} />

                        <BlogText>
                            <BlogHighlight>The bigger issue: You need to rebuild your entire site on Next.js first.</BlogHighlight> Optimization comes after migration. If you're on WordPress, you can't apply these techniques.
                        </BlogText>

                        <BlogHeader>What Is the Professional Path to a Guaranteed 90+ PageSpeed Score?</BlogHeader>

                        <BlogText>
                            We've built 6+ Next.js sites. Every single one clears 90+ on PageSpeed Mobile.
                        </BlogText>

                        <BlogText>
                            <strong>What we do:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Migrate your WordPress/Shopify site to Next.js 16",
                            "Implement all 8 optimizations (built into our standard process)",
                            "Test on real devices to ensure a 90+ score",
                            "Launch with zero downtime, zero SEO loss",
                            "Guarantee: 90+ PageSpeed score or we fix it for free"
                        ]} />

                        <BlogText>
                            <strong>Timeline:</strong> 4-6 weeks from kickoff to launch
                        </BlogText>

                        <BlogText>
                            <strong>Investment:</strong> $1,500 Starter migration, $3,500+ Growth, $5,000 to $10,000+ Scale. Full tier breakdown on the <a href="/pricing" className="text-cognac hover:underline">pricing page</a>.
                        </BlogText>

                        <BlogText>
                            <strong>ROI:</strong> Typical clients see 2-3× traffic increase within 90 days. If you're doing $500K/year, that's $1M-$1.5M projected after optimization.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>Result: You get a site that loads in under 1 second, ranks higher on Google, and converts 30-50% better.</BlogHighlight> We handle all technical work. You focus on your business.
                        </BlogText>

                        <BlogHeader>How Do You Check Your Current PageSpeed Score in Under 60 Seconds?</BlogHeader>

                        <BlogText>
                            Before deciding whether you need optimization, test your current score:
                        </BlogText>

                        <BlogList items={[
                            "Go to pagespeed.web.dev",
                            "Enter your URL",
                            "Click \"Analyze\"",
                            "Check your Mobile score (this is what matters for SEO)"
                        ]} />

                        <BlogText>
                            <strong>If your Mobile score is:</strong>
                        </BlogText>

                        <BlogList items={[
                            "0-49 (Red): You're losing 20-30% of traffic. Fix this immediately.",
                            "50-89 (Orange): You're losing 10-15% of traffic. Competitors are beating you.",
                            "90-100 (Green): You're good. Focus on content and backlinks."
                        ]} />

                        <BlogText>
                            If you're below 70, <BlogHighlight>optimization should be your #1 priority.</BlogHighlight> Rankings and conversions are directly tied to speed.
                        </BlogText>

                        <BlogHeader>Which Path Gets You to 90+ Faster: DIY or Professional Migration?</BlogHeader>

                        <BlogText>
                            You have two options:
                        </BlogText>

                        <BlogText>
                            <strong>Option 1: DIY Migration to Next.js</strong>
                        </BlogText>

                        <BlogList items={[
                            "Learn Next.js 16 (40-80 hours)",
                            "Rebuild your site from scratch (80-200 hours)",
                            "Implement all 8 optimizations (20-40 hours)",
                            "Test, debug, launch (40-60 hours)",
                            "Total: 180-380 hours (4-9 months part-time)"
                        ]} />

                        <BlogText>
                            <strong>Option 2: Let Us Build It</strong>
                        </BlogText>

                        <BlogList items={[
                            "We migrate your site to Next.js 16 (4-6 weeks)",
                            "All 8 optimizations included in standard build",
                            "Guaranteed 90+ PageSpeed score",
                            "Zero downtime, zero SEO loss",
                            "You focus on business while we handle technical work"
                        ]} />

                        <BlogText>
                            Most business owners choose Option 2. Why? <BlogHighlight>Because 4 to 9 months of learning and building costs you more in lost revenue from slow speed than the actual build. Our Scale tier runs $5,000 to $10,000+. Growth starts at $3,500. Starter is $1,500.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            If your site does $500K/year and you're losing 20% of traffic to slow speed, that's $100K lost annually. Fix it once, gain $100K+ every year after.
                        </BlogText>

                        <BlogText>
                            Every build we do follows the same performance first process, whether it's a{" "}
                            <Link href="/blog/how-to-fix-slow-wordpress" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                slow WordPress site that needs migrating
                            </Link>{" "}
                            or a Shopify store going headless. See exactly what&apos;s included in our{" "}
                            <Link href="/services/wordpress-migration?ref=blog/how-to-achieve-100-pagespeed" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                WordPress to Next.js migration service
                            </Link>.
                        </BlogText>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready for a 90+ PageSpeed Score?</h3>
                        <p className="text-stone-600 mb-6">
                            Get a free speed audit. We'll analyze your site and show you exactly how much traffic you're losing.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">
                                Schedule Free Audit <ArrowRight className="w-5 h-5" />
                            </CalModalButton>
                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>PageSpeed score directly determines Google rankings</strong>: Sites below 70 lose 20-30% of organic traffic to faster competitors with identical content.</li>
                            <li><strong>WordPress maxes out at 60-75/100 even fully optimised</strong>: The architecture prevents reaching the 90+ green zone that Google rewards with ranking boosts.</li>
                            <li><strong>8 specific optimisations get any site to a reliable 90+</strong>: Image, font, JavaScript, CSS, lazy loading, edge caching, third-party script deferral, and server components.</li>
                            <li><strong>Real clients see 2-4x traffic within 90 days</strong>: The pattern is consistent: migrate to Next.js, apply all 8 optimisations, and organic traffic multiplies as Google rewards faster Core Web Vitals.</li>
                            <li><strong>Every 0.1 second of improvement increases conversions by 8%</strong>: Speed is not an IT concern, it is a revenue line item that compounds month over month.</li>
                        </ol>
                    </section>

                    <div className="my-8">
                        <BlogText>
                            Related performance reads: <Link href="/blog/core-web-vitals-explained" className="text-charcoal underline underline-offset-2 hover:text-stone-600">Core Web Vitals explained</Link>, <Link href="/blog/wordpress-plugins-destroy-speed" className="text-charcoal underline underline-offset-2 hover:text-stone-600">how WordPress plugins destroy speed</Link>, <Link href="/blog/shopify-dawn-theme-slow" className="text-charcoal underline underline-offset-2 hover:text-stone-600">why Shopify Dawn theme runs slow</Link>, and <Link href="/blog/webflow-true-cost" className="text-charcoal underline underline-offset-2 hover:text-stone-600">the true cost of Webflow</Link>.
                        </BlogText>
                    </div>

                    {/* FAQ Section */}
                    {pagespeedFAQs.length > 0 && <FAQAccordion faqs={pagespeedFAQs} />}

                    {/* Related Posts */}
                    <RelatedPosts currentPostId="how-to-achieve-100-pagespeed" category="Performance" />

                </article>
            </main>
            <Footer />
        </>
    );
}