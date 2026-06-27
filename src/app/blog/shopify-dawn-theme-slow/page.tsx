import { ArrowLeft, Calendar, Clock, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const dawnFAQs = blogPosts.find(p => p.id === 'shopify-dawn-theme-slow')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));
const QuoteModalButton = lazyLoad(() => import("@/components/ui/QuoteModalButton"));

export const metadata: Metadata = {
    title: "Shopify Dawn Theme Slow? How We Fixed It From 55 to 95 (2026)",
    description: "You optimize Dawn to 75. Add one app and it drops to 50. Why the loop never ends and the one approach that stays at 95+.",
    alternates: {
        canonical: "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow",
    },
    keywords: ["shopify dawn theme slow", "shopify dawn theme speed", "shopify 2.0 performance", "why is shopify slow", "shopify pagespeed score", "shopify speed optimization", "shopify dawn pagespeed"],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Shopify Dawn Theme Slow? How We Fixed It From 55 to 95 (2026)",
        description: "You optimize Dawn to 75. Add one app and it drops to 50. Why the loop never ends and the one approach that stays at 95+.",
        type: "article",
        publishedTime: "2026-03-07",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shopify Dawn Theme Slow? How We Fixed It From 55 to 95 (2026)",
        description: "You optimize Dawn to 75. Add one app and it drops to 50. Why the loop never ends and the one approach that stays at 95+.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#article",
            "headline": "Shopify Dawn Theme Slow? How We Fixed It From 55 to 95 (2026)",
            "description": "You optimize Dawn to 75. Add one app and it drops to 50. Why the loop never ends and the one approach that stays at 95+.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-07T00:00:00-05:00",
            "dateModified": "2026-03-07T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow" },
            "articleSection": "Shopify",
            "keywords": ["Shopify Dawn theme slow", "Shopify speed optimization", "Shopify PageSpeed score", "Shopify 2.0 performance", "headless Shopify"],
            "timeRequired": "PT9M",
            "wordCount": 2200,
            "about": [
                { "@type": "Thing", "name": "Shopify Dawn Theme" },
                { "@type": "Thing", "name": "Shopify PageSpeed Score" },
                { "@type": "Thing", "name": "E-Commerce Performance" },
                { "@type": "Thing", "name": "Shopify" }
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Shopify Dawn Theme. GitHub", "url": "https://github.com/Shopify/dawn" },
                { "@type": "CreativeWork", "name": "Core Web Vitals. Google Web Dev", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Shopify Performance. Shopify Docs", "url": "https://shopify.dev/docs/storefronts/themes/best-practices/performance" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf" },
                { "@type": "CreativeWork", "name": "Next.js Commerce. Vercel", "url": "https://vercel.com/templates/next.js/nextjs-commerce" },
                { "@type": "CreativeWork", "name": "Google Think: 53% of mobile users abandon sites taking over 3 seconds", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Portent Research: Site speed impact on conversion rates", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" },
                { "@type": "CreativeWork", "name": "HTTP Archive Web Almanac: Ecommerce performance report", "url": "https://almanac.httparchive.org/en/2024/ecommerce" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Shopify Dawn Theme Slow", "item": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#webpage",
            "url": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow",
            "name": "Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix)",
            "description": "Dawn is Shopify's fastest theme but most stores still load in 3+ seconds. Here's why and what actually fixes it.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-03-07T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#breadcrumb" },
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
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress and Shopify sites. We guarantee 90+ Google PageSpeed in writing or a full refund on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#faq",
            "mainEntity": dawnFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
        }
    ]
};

export default function ShopifyDawnThemeSlowPage() {
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
                            { label: "Shopify Dawn Theme Slow", href: "/blog/shopify-dawn-theme-slow" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Shopify Dawn Theme Slow?{" "}
                            <span className="font-serif italic text-cognac">How We Fixed It From 55 to 95.</span>
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Dawn is Shopify&apos;s fastest theme, and it&apos;s a great starting point. But if your store is still loading in 3+ seconds, this guide explains what&apos;s behind it and how to get faster.
                        </p>

                        <BlogAuthor
                            date="Mar 7, 2026"
                            readTime="9 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <PageSpeedAnimation />
                    </div>

                    <div className="bg-cognac/5 border-l-4 border-cognac p-5 mb-6 rounded-r-lg" data-speakable="true">
                        <p className="text-sm text-charcoal leading-relaxed"><strong>Short answer:</strong> Shopify Dawn is slow because third-party app scripts, Liquid server-side rendering, and Shopify&apos;s built-in checkout and analytics scripts load on every page. A clean Dawn store scores 65 to 80 on mobile PageSpeed. Add five apps and it drops to 35 to 55. Theme-level optimization caps around 75. Hitting 90+ requires moving to a headless Next.js storefront.</p>
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "Dawn is Shopify's fastest theme, but 'fastest Shopify theme' and 'fast website' are not the same thing.",
                            "A clean Dawn store scores 65 to 80/100 on mobile. Add 5 apps and you're at 35 to 55/100.",
                            "The speed killers are apps, Liquid rendering, Shopify's checkout scripts. None of which the theme controls.",
                            "Theme-level fixes improve your score by 10 to 20 points. To hit 90+, you need to leave Shopify's theme system.",
                        ]} />
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6">Shopify Dawn theme is slow because it loads all theme CSS and JavaScript on every page, even sections not used on that page. Dawn scores 42 to 65 on mobile PageSpeed by default. You can optimize it to around 75 with image compression and script deferral, but you cannot break the 80 barrier without replacing Liquid entirely with a headless Next.js frontend.</p>

                    <div className="space-y-8">

                        <BlogText>
                            We took a Shopify Dawn store from 42 to 97 on mobile PageSpeed. Load time dropped from 3.8 seconds to 0.7 seconds via <Link href="/blog/shopify-headless" className="text-cognac hover:underline">headless Shopify on Next.js</Link>. The store is <a href="https://www.mycustompatches.net" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">mycustompatches.net</a>. You can click it right now and run PageSpeed yourself. Here is what actually moved the needle.
                        </BlogText>

                        <BlogText>
                            Because it was not the theme. They were already on Dawn, with compressed images, no bloated plugins, and a developer who had &ldquo;optimized&rdquo; everything. They were still at 42. Because the issue was not their setup. It was the platform itself.
                        </BlogText>

                        <BlogText>
                            If you have already paid a developer to &ldquo;fix&rdquo; your speed, switched themes, installed a speed optimization app, or upgraded to Shopify Plus hoping it would solve this, and you are still sitting at 40 to 55 on mobile, you are not alone. That money was not wasted on bad work. It was spent solving the wrong problem.
                        </BlogText>

                        <BlogHeader>Dawn Was Built to Fix Shopify&apos;s Speed Problem. It Didn&apos;t.</BlogHeader>

                        <BlogText>
                            Dawn is Shopify&apos;s fastest default theme, released in 2021 to replace Debut. A clean Dawn install with no apps and optimized images scores <BlogHighlight>65 to 80/100 on mobile PageSpeed.</BlogHighlight> That is the ceiling, and most stores never get there because real stores have apps.
                        </BlogText>

                        <BlogHeader>The Four Things Actually Slowing Your Store (None Is the Theme)</BlogHeader>

                        <BlogText>
                            Here are the four actual culprits. The theme is not one of them.
                        </BlogText>

                        <BlogHeader>Reason 1: Third-Party Apps Are Injecting Scripts You Can&apos;t Control</BlogHeader>

                        <BlogText>
                            This is the #1 speed killer on 90% of Shopify stores. Every app you install adds JavaScript to every page load, whether you want it there or not.
                        </BlogText>

                        <BlogText>
                            Here&apos;s what a typical &ldquo;standard&rdquo; Shopify store looks like:
                        </BlogText>

                        <BlogList items={[
                            "Reviews app (Okendo, Judge.me, Yotpo). 80 to 150KB JS",
                            "Upsell/cross-sell app. 60 to 120KB JS",
                            "Live chat (Gorgias, Tidio). 100 to 200KB JS",
                            "Email pop-up (Klaviyo, Privy). 80 to 140KB JS",
                            "Loyalty/rewards (Smile.io). 60 to 100KB JS",
                        ]} />

                        <BlogText>
                            That&apos;s 380 to 710KB of third-party JavaScript loading on every single page. Before your theme loads a single line. Each script adds 100 to 300ms of blocking time.
                        </BlogText>

                        <BlogQuote>
                            Your Dawn theme isn&apos;t slow. Your app stack is. And Shopify gives you no way to defer or control when those scripts load.
                        </BlogQuote>

                        <BlogText>
                            The theme has nothing to do with it. You could switch to any other Shopify theme and get the exact same result.
                        </BlogText>

                        <BlogHeader>Reason 2: Liquid Rendering Hits Your Server on Every Request</BlogHeader>

                        <BlogText>
                            Shopify&apos;s templating language is called Liquid. Every time a visitor loads a page, Shopify&apos;s servers run Liquid to generate the HTML and send it back.
                        </BlogText>

                        <BlogText>
                            This is called server-side rendering, and it adds 200 to 600ms to every page load before anything even reaches the visitor&apos;s browser. On a busy store or during a traffic spike, this gets worse.
                        </BlogText>

                        <BlogText>
                            Compare this to a custom Next.js storefront where pages are pre-built at deploy time and served instantly from edge locations. <BlogHighlight>Zero server computation. Zero wait.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>Reason 3: Hero Images and Section Images Default to Oversized</BlogHeader>

                        <BlogText>
                            Dawn includes image optimization, but it&apos;s only effective if you upload correctly sized images. Most store owners upload the high-resolution image from their photographer or product shoot and let Shopify handle the rest.
                        </BlogText>

                        <BlogText>
                            Shopify does resize images, but the responsive sizing logic in Dawn still serves larger files than necessary to mobile visitors. A hero image that should be 120KB on mobile often loads at 380 to 600KB.
                        </BlogText>

                        <BlogText>
                            This directly tanks your LCP (Largest Contentful Paint): the Core Web Vital that most strongly correlates with Google rankings.
                        </BlogText>

                        <BlogHeader>Reason 4: Shopify&apos;s Own Scripts Load Whether You Want Them or Not</BlogHeader>

                        <BlogText>
                            Every Shopify store loads a set of platform scripts automatically. Cart functionality, checkout, payment processing. These are not optional. You can&apos;t remove them, defer them, or replace them.
                        </BlogText>

                        <BlogList items={[
                            "Shopify Analytics script, loads on every page",
                            "Cart drawer JavaScript, loads even on pages with no cart",
                            "Payment method detection, loads checkout scripts on product pages",
                            "Shopify Web Performance. Monitoring scripts loaded automatically",
                        ]} />

                        <BlogText>
                            These are baked into the platform. No theme, not even a custom one. Can eliminate them while staying on Shopify&apos;s standard storefront.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Is Dawn the fastest your store will ever get?</p>
                            <p className="text-stone-600 mb-4 text-sm">Drop your store URL when you book. We run your real PageSpeed ceiling live on the call and quote a custom storefront that actually clears 90+. Takes 30 minutes.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/#audit-widget" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">Run Your Free Audit <ArrowRight className="w-4 h-4" /></Link>
                                <QuoteModalButton cta="shopify_dawn_mid_quote" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stone-300 text-charcoal font-bold rounded-full text-sm hover:border-charcoal transition-all">Get a Free Quote</QuoteModalButton>
                                <CalModalButton className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stone-300 text-charcoal font-bold rounded-full text-sm hover:border-charcoal transition-all">Or Book a Call</CalModalButton>
                            </div>
                        </div>

                        <div className="my-8 p-6 bg-cognac/5 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-charcoal font-serif italic text-lg leading-relaxed mb-2">&ldquo;We have audited 30+ Shopify stores. The ceiling with theme-level optimization is 70 to 75 on mobile. To get past that, you have to leave Shopify&apos;s rendering layer. There is no plugin fix.&rdquo;</p>
                            <p className="text-sm text-stone-600 font-semibold">Hassan Jamal, PandaCodeGen</p>
                        </div>

                        <BlogHeader>Real Dawn Scores From 30 Store Audits</BlogHeader>

                        <BlogText>
                            Here&apos;s the honest breakdown based on what we see auditing Shopify stores:
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 my-4">
                            <table className="w-full text-sm border border-stone-300 rounded-xl overflow-hidden min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-300">Store Configuration</th>
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-300">Mobile PageSpeed Score</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Clean Dawn, no apps, optimized images</td>
                                        <td data-label="Mobile PageSpeed Score" className="px-4 py-3 text-green-700 font-medium">65 to 80/100</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Dawn with 3 to 5 typical apps (reviews, chat, upsell)</td>
                                        <td data-label="Mobile PageSpeed Score" className="px-4 py-3 text-orange-600 font-medium">40 to 60/100</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Dawn with 6+ apps + Klaviyo + Gorgias + loyalty program</td>
                                        <td data-label="Mobile PageSpeed Score" className="px-4 py-3 text-red-600 font-medium">25 to 45/100</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Dawn on Shopify Plus with heavy customization</td>
                                        <td data-label="Mobile PageSpeed Score" className="px-4 py-3 text-red-600 font-medium">30 to 55/100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            A 2026 benchmark study of 1,000 Shopify stores found that only 48% pass all three Core Web Vitals on mobile. The median Shopify store LCP is 2.26 seconds, sitting right at the edge of Google&apos;s &ldquo;good&rdquo; threshold. One additional app install or an unoptimized hero image pushes that number into the failing range. Shopify&apos;s admin dashboard speed score makes this worse by creating a false sense of security. That number comes from a simplified Lighthouse test, not real Core Web Vitals field data from actual visitors browsing your store.
                        </BlogText>

                        <BlogText>
                            The Deloitte &ldquo;Milliseconds Make Millions&rdquo; study found that a 0.1-second improvement in mobile load time increases conversions by 8%. A typical Shopify store scoring 45/100 is leaving 20 to 30% of conversions on the table compared to a 95/100 storefront.
                        </BlogText>

                        <BlogText>
                            On a store doing $50K/month, that&apos;s <BlogHighlight>$10,000 to $15,000 in recoverable revenue every month.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What Actually Moves the Score (and the Ceiling You Will Hit)</BlogHeader>

                        <BlogText>
                            Yes, with real limits. Here&apos;s what actually works and what the ceiling looks like:
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 my-4">
                            <table className="w-full text-sm border border-stone-300 rounded-xl overflow-hidden min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-300">Optimization</th>
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-300">Works?</th>
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-300">Impact</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Audit and remove unused apps</td>
                                        <td data-label="Works?" className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Each app removed saves 80 to 200ms</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Compress and resize hero images before uploading</td>
                                        <td data-label="Works?" className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Target under 150KB per image</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Enable native lazy loading for below-fold images</td>
                                        <td data-label="Works?" className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Reduces initial page weight and improves LCP</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Defer non-critical scripts via Script Tag API</td>
                                        <td data-label="Works?" className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Reduces blocking time where supported</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Remove redundant theme sections</td>
                                        <td data-label="Works?" className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Even hidden sections add rendering overhead</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Switching to a &ldquo;faster&rdquo; paid theme</td>
                                        <td data-label="Works?" className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">App bloat follows you to any theme</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Installing a speed optimization app</td>
                                        <td data-label="Works?" className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Adds another script to fix your scripts</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Using a CDN</td>
                                        <td data-label="Works?" className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Shopify already uses a CDN, not the bottleneck</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Upgrading to Shopify Plus</td>
                                        <td data-label="Works?" className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td data-label="Impact" className="px-4 py-3 text-stone-600">Plus is faster at checkout, not storefront rendering</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogQuote>
                            We&apos;ve audited 30+ Shopify stores. The ceiling with theme-level optimization is 70 to 75/100 mobile. To get above that, you need to move outside Shopify&apos;s rendering layer.
                        </BlogQuote>

                        <BlogHeader>75/100 Is the Orange Zone. Your Competitors Are in the Green.</BlogHeader>

                        <BlogText>
                            Google classifies 75/100 as &ldquo;Needs Improvement&rdquo;. The orange zone. Your competitors running custom storefronts are at 90+, comfortably in the green.
                        </BlogText>

                        <BlogText>
                            In Google&apos;s ranking algorithm, Core Web Vitals (what PageSpeed measures) are a direct ranking factor. A site at 95/100 outranks a site at 65/100 with identical content. Not by one or two positions. By a full page in competitive categories.
                        </BlogText>

                        <BlogText>
                            And that is before accounting for the direct conversion impact. <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Google research</a> found that 53% of mobile shoppers abandon a store that takes more than 3 seconds to load. If your Dawn store loads in 3.5 seconds, you are losing more than half your mobile traffic before they see a single product. <a href="https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Portent research</a> found that a site loading in 1 second converts 3 times better than a site loading in 5 seconds. That gap is exactly the difference between Dawn and a custom headless build.
                        </BlogText>

                        <BlogHeader>How We Got MyCustomPatches From 42 to 97</BlogHeader>

                        <BlogText>
                            The fix that actually gets you into the 90+ green zone is headless Shopify. Keeping your Shopify backend (products, orders, inventory, payments) and replacing the Shopify storefront with a custom Next.js frontend. Our <Link href="/services/ecommerce?ref=blog/shopify-dawn-theme-slow" className="text-cognac hover:underline font-medium">headless Shopify development service</Link> covers the full transition.
                        </BlogText>

                        <BlogText>
                            Here&apos;s what changes:
                        </BlogText>

                        <BlogList items={[
                            "Pages pre-built at deploy time, no server rendering on each visit",
                            "Served from Vercel&apos;s edge network (300+ locations). Instant global delivery",
                            "Full control over every script, nothing loads unless you explicitly add it",
                            "Custom image pipeline. Serves WebP/AVIF at exact display dimensions",
                            "App functionality rebuilt natively, no third-party scripts for reviews, cart, upsell",
                        ]} />

                        <BlogText>
                            The result is a storefront that loads in under 1 second with a 90+ PageSpeed score, while your Shopify backend handles all the e-commerce operations you already rely on.
                        </BlogText>

                        <BlogText>
                            We built exactly this for{" "}
                            <Link href="/work/mycustompatches" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                MyCustomPatches
                            </Link>
                            . Their store went from 42/100 mobile to 97/100. Load time dropped from 3.8 seconds to 0.7 seconds. The site is live and verifiable at{" "}
                            <a href="https://www.mycustompatches.net" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                mycustompatches.net
                            </a>.
                        </BlogText>

                        <BlogHeader>Is a Headless Build Right for Your Store?</BlogHeader>

                        <BlogText>
                            Headless isn&apos;t for every store. Here&apos;s a simple filter:
                        </BlogText>

                        <BlogText>
                            <strong>Strong fit for headless:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Mobile PageSpeed below 60/100 and you can see it in your bounce rate or analytics",
                            "High-traffic store where every 0.1s matters at scale",
                            "Complex product configuration that Shopify&apos;s theme system can&apos;t handle cleanly",
                            "Brand that needs precise design control with no theme limitations",
                            "Speed is costing you conversions and you want it fixed permanently, not patched",
                        ]} />

                        <BlogText>
                            <strong>Probably not the right time:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Store is brand new with minimal traffic and no conversion data yet",
                            "Simple product catalog with minimal app requirements",
                            "Not sure? Book a free call and we will tell you honestly whether it makes sense for your store",
                        ]} />

                        <BlogText>
                            If you&apos;re in the middle. $10K to $20K/month with a PageSpeed score below 60: the calculation is close. Run the numbers: multiply your monthly revenue by 10% (a conservative conversion improvement estimate). If that number is bigger than the build cost divided by 12, it pays for itself in the first year.
                        </BlogText>

                        <BlogText>
                            Want to understand what this looks like for your specific store? Read our breakdown of{" "}
                            <Link href="/blog/shopify-slow-losing-sales" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                how Shopify speed directly impacts sales
                            </Link>
                            {" "}or{" "}
                            <Link href="/blog/shopify-headless" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                what headless Shopify actually involves
                            </Link>.
                        </BlogText>

                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Find out what your store is actually losing</h3>
                        <p className="text-stone-600 mb-4">
                            Every week your store runs at 45/100 PageSpeed is another week faster competitors are taking conversions that should be yours.
                        </p>
                        <p className="text-stone-600 mb-6">
                            Book a free 30-minute audit. We screen-share, run your store live through PageSpeed and Core Web Vitals, identify every bottleneck, and tell you exactly what&apos;s recoverable, and what it&apos;s costing you. You leave with a written report. No pitch, no obligation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/#audit-widget" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">Run Your Free Audit <ArrowRight className="w-5 h-5" /></Link>
                            <QuoteModalButton cta="shopify_dawn_bottom_quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-300 text-charcoal font-bold rounded-full hover:border-charcoal transition-all">Get a Free Quote</QuoteModalButton>
                            <CalModalButton className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-300 text-charcoal font-bold rounded-full hover:border-charcoal transition-all">Or Book a Call</CalModalButton>
                        </div>
                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Dawn is not the problem</strong>: Third-party apps, Liquid rendering, and Shopify's own platform scripts are what make your store slow, not the theme.</li>
                            <li><strong>Every app you install adds 80-200KB of JavaScript</strong>: Five typical apps can add 1-2 seconds to every page load, dropping your score from 75 to 40.</li>
                            <li><strong>Theme-level fixes only gain 10-20 points</strong>: Removing unused apps, compressing images, and deferring scripts help, but the ceiling on standard Shopify is 70-75/100.</li>
                            <li><strong>A store at 45/100 is leaving $10K-$15K/month on the table</strong>: Every 0.1-second improvement increases conversions by 8%, and the gap between 45 and 95 is enormous.</li>
                            <li><strong>Headless Shopify is the only path to a 90+ score</strong>: Keeping your Shopify backend while replacing the storefront with Next.js eliminates every speed bottleneck the platform imposes.</li>
                        </ol>
                    </section>

                    {dawnFAQs.length > 0 && <FAQAccordion faqs={dawnFAQs} />}

                    <section className="mb-4 mt-6">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed">For the complete Shopify speed playbook (Dawn is no longer the default theme in 2026, Horizon is), see our <Link href="/blog/shopify-store-speed-optimization" className="text-cognac hover:underline font-medium">Shopify speed optimization guide</Link>. For the full conversion rate impact of slow Shopify, see <Link href="/blog/shopify-conversion-rate-speed-fix" className="text-cognac hover:underline font-medium">Shopify conversion rate and speed fix</Link>. For why Shopify Plus still has the same speed ceiling, see <Link href="/blog/shopify-plus-still-slow" className="text-cognac hover:underline font-medium">why Shopify Plus is still slow in 2026</Link>.</p>
                    </section>

                    <RelatedPosts currentPostId="shopify-dawn-theme-slow" category="Shopify" />

                </article>
            </main>
            <Footer />
        </>
    );
}