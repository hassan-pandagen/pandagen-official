import { ArrowLeft, Calendar, Clock, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const dawnFAQs = blogPosts.find(p => p.id === 'shopify-dawn-theme-slow')?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = dynamic(() => import("@/components/blog/PageSpeedAnimation"));

export const metadata: Metadata = {
    title: "Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix) | PandaCodeGen",
    description: "Dawn is Shopify's fastest theme — so why is your store still loading in 3+ seconds? Here's what's actually killing your speed and why theme-level fixes won't save you.",
    alternates: {
        canonical: "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow",
    },
    keywords: ["shopify dawn theme slow", "shopify dawn theme speed", "shopify 2.0 performance", "why is shopify slow", "shopify pagespeed score", "shopify speed optimization", "shopify dawn pagespeed"],
    openGraph: {
        title: "Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix)",
        description: "Dawn is Shopify's fastest theme — so why is your store still loading in 3+ seconds? The real culprit isn't the theme.",
        type: "article",
        publishedTime: "2026-03-07",
        authors: ["Hassan"],
        url: "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix)",
        description: "Dawn is Shopify's fastest theme — so why is your store still loading in 3+ seconds?",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#article",
            "headline": "Shopify Dawn Theme Slow? Here's Exactly Why (and the Real Fix)",
            "description": "Dawn is Shopify's fastest theme but most stores using it still load in 3+ seconds. Here's why — and what actually fixes it.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-07",
            "dateModified": "2026-03-10",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Lead Full-Stack Engineer",
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
                { "@type": "CreativeWork", "name": "Shopify Dawn Theme — GitHub", "url": "https://github.com/Shopify/dawn" },
                { "@type": "CreativeWork", "name": "Core Web Vitals — Google Web Dev", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Shopify Performance — Shopify Docs", "url": "https://shopify.dev/docs/storefronts/themes/best-practices/performance" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf" },
                { "@type": "CreativeWork", "name": "Next.js Commerce — Vercel", "url": "https://vercel.com/templates/next.js/nextjs-commerce" }
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
            "datePublished": "2026-03-07",
            "dateModified": "2026-03-10",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress and Shopify sites. We guarantee 95–100/100 Google PageSpeed on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "HowTo",
            "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#howto",
            "name": "How to Speed Up a Slow Shopify Dawn Theme",
            "description": "Practical steps to improve your Shopify Dawn theme PageSpeed score. These optimizations can gain 10–20 points, though the ceiling on standard Shopify is 70–75/100.",
            "totalTime": "PT2H",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Audit and remove unused apps",
                    "text": "Open your Shopify admin and review every installed app. Each app injects 80–200KB of JavaScript on every page load. Remove any app you haven't used in 30 days. Each removal saves 80–200ms of blocking time."
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Compress and resize hero images before uploading",
                    "text": "Export your hero and banner images at the actual display dimensions, then compress them to under 150KB using Squoosh or TinyPNG. Do not upload high-resolution originals and rely on Shopify's resize — it still serves oversized files to mobile."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Enable native lazy loading for below-fold images",
                    "text": "In Dawn's theme settings, verify that lazy loading is enabled for collection and product images. This defers images that aren't visible on initial load, improving LCP and reducing initial page weight."
                },
                {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Defer non-critical app scripts using Shopify's Script Tag API",
                    "text": "For apps that support it, switch their script load strategy from synchronous to deferred or async via the Shopify Script Tag API or the app's own settings panel. Not all apps support this — contact app support if you don't see the option."
                },
                {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Remove unused theme sections from all page templates",
                    "text": "In the Dawn theme editor, open each page template and delete any sections that are hidden or empty. Even invisible sections can register in Shopify's rendering pipeline and add load overhead."
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-dawn-theme-slow#faq",
            "mainEntity": [
                { "@type": "Question", "name": "Why is my Shopify Dawn theme slow?", "acceptedAnswer": { "@type": "Answer", "text": "Dawn is Shopify's fastest default theme, but it still loads in 2.5–4 seconds on most stores because of third-party apps injecting scripts, Liquid template rendering on every request, large unoptimized hero images, and Shopify's own checkout scripts. The theme isn't the bottleneck — Shopify's architecture is." } },
                { "@type": "Question", "name": "What PageSpeed score does Shopify Dawn get?", "acceptedAnswer": { "@type": "Answer", "text": "A basic Dawn store with no apps typically scores 65–80/100 on mobile. Add 3–5 apps and that drops to 35–55/100. No amount of theme optimization fixes app script bloat — those scripts load regardless of which theme you use." } },
                { "@type": "Question", "name": "How can I speed up my Shopify Dawn theme?", "acceptedAnswer": { "@type": "Answer", "text": "You can compress images, remove unused apps, disable non-critical scripts, and use a Shopify speed optimization app. This typically improves your score by 10–20 points but you'll hit a ceiling at 70–75/100 because Shopify's Liquid rendering and checkout scripts can't be removed." } },
                { "@type": "Question", "name": "Is Shopify Dawn better than other Shopify themes for speed?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Dawn is the fastest Shopify theme by default. But even Dawn scores 25–40 points lower than a custom Next.js storefront. If you need 90–100/100 PageSpeed, you need to move beyond Shopify's theme system entirely." } },
                { "@type": "Question", "name": "Should I switch from Shopify Dawn to a custom headless build?", "acceptedAnswer": { "@type": "Answer", "text": "If your store does $30K+/month and your PageSpeed mobile score is below 60, the ROI on going headless is significant. A 1-second improvement increases conversions 7–12%. For a $30K/month store, that's $2,100–$3,600/month recovered. Most headless builds pay for themselves in 6–9 months." } }
            ]
        }
    ]
};

export default function ShopifyDawnThemeSlowPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-32 pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-sm px-8 py-10 md:px-14">

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
                            <span className="font-serif italic text-stone-500">Here&apos;s Exactly Why.</span>
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Dawn is Shopify&apos;s fastest theme, and it&apos;s a great starting point. But if your store is still loading in 3+ seconds, this guide explains what&apos;s behind it and how to get faster.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-stone-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Mar 7, 2026
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                9 min read
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-400 mt-3"><RefreshCw className="w-3 h-3" />Updated: Mar 10, 2026</div>
                        <BlogAuthor
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom-coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <PageSpeedAnimation />
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-12" data-speakable="true">
                        <h3 className="font-bold text-charcoal mb-4">Executive Summary</h3>
                        <BlogList items={[
                            "Dawn is Shopify's fastest theme — but 'fastest Shopify theme' and 'fast website' are not the same thing.",
                            "A clean Dawn store scores 65–80/100 on mobile. Add 5 apps and you're at 35–55/100.",
                            "The speed killers are apps, Liquid rendering, Shopify's checkout scripts — none of which the theme controls.",
                            "Theme-level fixes improve your score by 10–20 points. To hit 90–100/100, you need to leave Shopify's theme system.",
                        ]} />
                    </div>

                    <div className="space-y-8">

                        <BlogText>
                            A Shopify store owner messaged us last month. &ldquo;We switched to Dawn three months ago. Our developer said it was the fastest theme available. Our mobile PageSpeed is 41/100. What are we doing wrong?&rdquo;
                        </BlogText>

                        <BlogText>
                            Nothing. That&apos;s what made it so frustrating. They had done everything right — newest theme, no bloated plugins, compressed images. And they were still losing customers to a 3.8-second load time.
                        </BlogText>

                        <BlogText>
                            The issue wasn&apos;t their setup. It was the platform itself.
                        </BlogText>

                        <BlogText>
                            If you&apos;ve already paid a developer to &ldquo;fix&rdquo; your speed, switched themes, installed a speed optimization app, or upgraded to Shopify Plus hoping it would solve this — and you&apos;re still sitting at 40–55/100 — you&apos;re not alone. That money wasn&apos;t wasted on bad work. It was spent solving the wrong problem.
                        </BlogText>

                        <BlogHeader>What Is Shopify Dawn and Why Should It Be Fast?</BlogHeader>

                        <BlogText>
                            Shopify released Dawn in 2021 as part of Online Store 2.0. It replaced Debut as the default theme and was built from scratch to fix the performance problems that plagued older Shopify themes.
                        </BlogText>

                        <BlogText>
                            Compared to older themes, Dawn genuinely is faster:
                        </BlogText>

                        <BlogList items={[
                            "No jQuery dependency (older themes added 30KB of unnecessary JavaScript)",
                            "Modular section architecture (only loads what each page needs)",
                            "Improved image lazy loading built in",
                            "Smaller default CSS footprint",
                            "Better Lighthouse scores out of the box"
                        ]} />

                        <BlogText>
                            A clean Dawn install with no apps and optimized images will score <BlogHighlight>65–80/100 on mobile PageSpeed.</BlogHighlight> That&apos;s genuinely good — for a Shopify theme.
                        </BlogText>

                        <BlogText>
                            But &ldquo;good for a Shopify theme&rdquo; and &ldquo;fast enough to stop losing customers&rdquo; aren&apos;t the same thing.
                        </BlogText>

                        <BlogHeader>Why Is Your Dawn Store Still Loading in 3+ Seconds?</BlogHeader>

                        <BlogText>
                            Here are the four actual culprits. The theme is not one of them.
                        </BlogText>

                        <BlogHeader>Reason 1: Third-Party Apps Are Injecting Scripts You Can&apos;t Control</BlogHeader>

                        <BlogText>
                            This is the #1 speed killer on 90% of Shopify stores. Every app you install adds JavaScript to every page load — whether you want it there or not.
                        </BlogText>

                        <BlogText>
                            Here&apos;s what a typical &ldquo;standard&rdquo; Shopify store looks like:
                        </BlogText>

                        <BlogList items={[
                            "Reviews app (Okendo, Judge.me, Yotpo) — 80–150KB JS",
                            "Upsell/cross-sell app — 60–120KB JS",
                            "Live chat (Gorgias, Tidio) — 100–200KB JS",
                            "Email pop-up (Klaviyo, Privy) — 80–140KB JS",
                            "Loyalty/rewards (Smile.io) — 60–100KB JS",
                        ]} />

                        <BlogText>
                            That&apos;s 380–710KB of third-party JavaScript loading on every single page — before your theme loads a single line. Each script adds 100–300ms of blocking time.
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
                            This is called server-side rendering — and it adds 200–600ms to every page load before anything even reaches the visitor&apos;s browser. On a busy store or during a traffic spike, this gets worse.
                        </BlogText>

                        <BlogText>
                            Compare this to a custom Next.js storefront where pages are pre-built at deploy time and served instantly from edge locations. <BlogHighlight>Zero server computation. Zero wait.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>Reason 3: Hero Images and Section Images Default to Oversized</BlogHeader>

                        <BlogText>
                            Dawn includes image optimization — but it&apos;s only effective if you upload correctly sized images. Most store owners upload the high-resolution image from their photographer or product shoot and let Shopify handle the rest.
                        </BlogText>

                        <BlogText>
                            Shopify does resize images, but the responsive sizing logic in Dawn still serves larger files than necessary to mobile visitors. A hero image that should be 120KB on mobile often loads at 380–600KB.
                        </BlogText>

                        <BlogText>
                            This directly tanks your LCP (Largest Contentful Paint) — the Core Web Vital that most strongly correlates with Google rankings.
                        </BlogText>

                        <BlogHeader>Reason 4: Shopify&apos;s Own Scripts Load Whether You Want Them or Not</BlogHeader>

                        <BlogText>
                            Every Shopify store loads a set of platform scripts automatically — cart functionality, checkout, payment processing. These are not optional. You can&apos;t remove them, defer them, or replace them.
                        </BlogText>

                        <BlogList items={[
                            "Shopify Analytics script — loads on every page",
                            "Cart drawer JavaScript — loads even on pages with no cart",
                            "Payment method detection — loads checkout scripts on product pages",
                            "Shopify Web Performance — monitoring scripts loaded automatically",
                        ]} />

                        <BlogText>
                            These are baked into the platform. No theme — not even a custom one — can eliminate them while staying on Shopify&apos;s standard storefront.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">What&apos;s your store&apos;s real speed score?</p>
                            <p className="text-stone-600 mb-4 text-sm">30 minutes, live screen-share. We run your store through PageSpeed, identify every bottleneck, and give you a written report — free, no obligation.</p>
                            <a
                                href="https://cal.com/pandagen/discovery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all"
                            >
                                Get Free Store Audit <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <BlogHeader>What Does a Typical Dawn Store Actually Score on PageSpeed?</BlogHeader>

                        <BlogText>
                            Here&apos;s the honest breakdown based on what we see auditing Shopify stores:
                        </BlogText>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Store Configuration</th>
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Mobile PageSpeed Score</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Clean Dawn, no apps, optimized images</td>
                                        <td className="px-4 py-3 text-green-700 font-medium">65–80/100</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Dawn with 3–5 typical apps (reviews, chat, upsell)</td>
                                        <td className="px-4 py-3 text-orange-600 font-medium">40–60/100</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Dawn with 6+ apps + Klaviyo + Gorgias + loyalty program</td>
                                        <td className="px-4 py-3 text-red-600 font-medium">25–45/100</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Dawn on Shopify Plus with heavy customization</td>
                                        <td className="px-4 py-3 text-red-600 font-medium">30–55/100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            The Deloitte &ldquo;Milliseconds Make Millions&rdquo; study found that a 0.1-second improvement in mobile load time increases conversions by 8%. A typical Shopify store scoring 45/100 is leaving 20–30% of conversions on the table compared to a 95/100 storefront.
                        </BlogText>

                        <BlogText>
                            On a store doing $50K/month, that&apos;s <BlogHighlight>$10,000–$15,000 in recoverable revenue every month.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>Can You Fix a Slow Dawn Theme? The Partial Wins</BlogHeader>

                        <BlogText>
                            Yes — with real limits. Here&apos;s what actually works and what the ceiling looks like:
                        </BlogText>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Optimization</th>
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Works?</th>
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Impact</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Audit and remove unused apps</td>
                                        <td className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td className="px-4 py-3 text-stone-600">Each app removed saves 80–200ms</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Compress and resize hero images before uploading</td>
                                        <td className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td className="px-4 py-3 text-stone-600">Target under 150KB per image</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Enable native lazy loading for below-fold images</td>
                                        <td className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td className="px-4 py-3 text-stone-600">Reduces initial page weight and improves LCP</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Defer non-critical scripts via Script Tag API</td>
                                        <td className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td className="px-4 py-3 text-stone-600">Reduces blocking time where supported</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Remove redundant theme sections</td>
                                        <td className="px-4 py-3 text-green-700 font-medium">Yes</td>
                                        <td className="px-4 py-3 text-stone-600">Even hidden sections add rendering overhead</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Switching to a &ldquo;faster&rdquo; paid theme</td>
                                        <td className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td className="px-4 py-3 text-stone-600">App bloat follows you to any theme</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Installing a speed optimization app</td>
                                        <td className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td className="px-4 py-3 text-stone-600">Adds another script to fix your scripts</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-stone-600">Using a CDN</td>
                                        <td className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td className="px-4 py-3 text-stone-600">Shopify already uses a CDN — not the bottleneck</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-stone-600">Upgrading to Shopify Plus</td>
                                        <td className="px-4 py-3 text-red-600 font-medium">No</td>
                                        <td className="px-4 py-3 text-stone-600">Plus is faster at checkout, not storefront rendering</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogQuote>
                            We&apos;ve audited 30+ Shopify stores. The ceiling with theme-level optimization is 70–75/100 mobile. To get above that, you need to move outside Shopify&apos;s rendering layer.
                        </BlogQuote>

                        <BlogHeader>Why 75/100 Still Isn&apos;t Good Enough</BlogHeader>

                        <BlogText>
                            Google classifies 75/100 as &ldquo;Needs Improvement&rdquo; — the orange zone. Your competitors running custom storefronts are at 90–100/100.
                        </BlogText>

                        <BlogText>
                            In Google&apos;s ranking algorithm, Core Web Vitals (what PageSpeed measures) are a direct ranking factor. A site at 95/100 outranks a site at 65/100 with identical content. Not by one or two positions — by a full page in competitive categories.
                        </BlogText>

                        <BlogText>
                            And that&apos;s before accounting for the direct conversion impact. If two stores sell the same product at the same price, the one that loads in 0.8 seconds will outsell the one that loads in 3.5 seconds — every time.
                        </BlogText>

                        <BlogHeader>What Does the Real Fix Look Like?</BlogHeader>

                        <BlogText>
                            The fix that actually gets you to 90–100/100 is headless Shopify — keeping your Shopify backend (products, orders, inventory, payments) and replacing the Shopify storefront with a custom Next.js frontend.
                        </BlogText>

                        <BlogText>
                            Here&apos;s what changes:
                        </BlogText>

                        <BlogList items={[
                            "Pages pre-built at deploy time — no server rendering on each visit",
                            "Served from Vercel&apos;s edge network (300+ locations) — instant global delivery",
                            "Full control over every script — nothing loads unless you explicitly add it",
                            "Custom image pipeline — serves WebP/AVIF at exact display dimensions",
                            "App functionality rebuilt natively — no third-party scripts for reviews, cart, upsell",
                        ]} />

                        <BlogText>
                            The result is a storefront that loads in under 1 second with a 90–100/100 PageSpeed score — while your Shopify backend handles all the e-commerce operations you already rely on.
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
                            <strong>Good candidate for headless:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Doing $20K+/month in revenue (ROI justifies the investment)",
                            "Mobile PageSpeed below 60/100 (significant conversion loss)",
                            "High-traffic store where every 0.1s matters at scale",
                            "Complex product configuration that Shopify&apos;s theme system can&apos;t handle cleanly",
                            "Brand that needs precise design control — no theme limitations",
                        ]} />

                        <BlogText>
                            <strong>Stay on Shopify standard for now:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Under $10K/month — the investment doesn&apos;t pay back fast enough yet",
                            "Simple product catalog with minimal app requirements",
                            "Speed isn&apos;t your primary conversion bottleneck",
                        ]} />

                        <BlogText>
                            If you&apos;re in the middle — $10K–$20K/month with a PageSpeed score below 60 — the calculation is close. Run the numbers: multiply your monthly revenue by 10% (a conservative conversion improvement estimate). If that number is bigger than the build cost divided by 12, it pays for itself in the first year.
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
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Find out what your store is actually losing</h3>
                        <p className="text-stone-600 mb-4">
                            Every week your store runs at 45/100 PageSpeed is another week faster competitors are taking conversions that should be yours.
                        </p>
                        <p className="text-stone-600 mb-6">
                            Book a free 30-minute audit. We screen-share, run your store live through PageSpeed and Core Web Vitals, identify every bottleneck, and tell you exactly what&apos;s recoverable — and what it&apos;s costing you. You leave with a written report. No pitch, no obligation.
                        </p>
                        <a
                            href="https://cal.com/pandagen/discovery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
                        >
                            Book Free Store Audit <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Dawn is not the problem</strong> — third-party apps, Liquid rendering, and Shopify's own platform scripts are what make your store slow, not the theme.</li>
                            <li><strong>Every app you install adds 80-200KB of JavaScript</strong> — five typical apps can add 1-2 seconds to every page load, dropping your score from 75 to 40.</li>
                            <li><strong>Theme-level fixes only gain 10-20 points</strong> — removing unused apps, compressing images, and deferring scripts help, but the ceiling on standard Shopify is 70-75/100.</li>
                            <li><strong>A store at 45/100 is leaving $10K-$15K/month on the table</strong> — every 0.1-second improvement increases conversions by 8%, and the gap between 45 and 95 is enormous.</li>
                            <li><strong>Headless Shopify is the only path to 90-100/100</strong> — keeping your Shopify backend while replacing the storefront with Next.js eliminates every speed bottleneck the platform imposes.</li>
                        </ol>
                    </section>

                    {dawnFAQs.length > 0 && <FAQAccordion faqs={dawnFAQs} />}

                    <RelatedPosts currentPostId="shopify-dawn-theme-slow" category="Shopify" />

                </article>
            </main>
            <Footer />
        </>
    );
}
