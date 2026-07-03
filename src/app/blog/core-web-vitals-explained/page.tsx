import { ArrowLeft, ArrowRight, Zap, Clock, LayoutGrid, MousePointerClick, TrendingDown, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "core-web-vitals-explained")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "What Are Core Web Vitals in 2026 and Why Do They Affect Your Revenue?",
    description: "Your agency said your Core Web Vitals are failing and you have no idea what that means. Here is what the 3 metrics cost your business in lost sales.",
    alternates: {
        canonical: "/blog/core-web-vitals-explained",
    },
    keywords: [
        "core web vitals explained",
        "core web vitals for business",
        "core web vitals meaning",
        "what are core web vitals",
        "core web vitals business impact",
        "lcp inp cls explained",
        "core web vitals 2026",
        "why my core web vitals failing",
        "core web vitals revenue impact",
        "fix core web vitals"
    ],
    openGraph: {
        title: "What Are Core Web Vitals in 2026 and Why Do They Affect Your Revenue?",
        description: "Your agency said your Core Web Vitals are failing and you have no idea what that means. Here is what the 3 metrics cost your business in lost sales.",
        type: "article",
        publishedTime: "2026-05-06",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/core-web-vitals-explained",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "What Are Core Web Vitals in 2026 and Why Do They Affect Your Revenue?",
        description: "Your agency said your Core Web Vitals are failing. Here is what the 3 metrics are, why Google ranks sites on them, and what each failing score costs your business.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/core-web-vitals-explained#article",
            "headline": "What Are Core Web Vitals in 2026 and Why Do They Affect Your Revenue?",
            "description": "Your agency said your Core Web Vitals are failing and you have no idea what that means. Here is what the 3 metrics cost your business in lost sales.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-05-06T00:00:00-05:00",
            "dateModified": "2026-05-06T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/core-web-vitals-explained" },
            "articleSection": "SEO",
            "wordCount": 3200,
            "timeRequired": "PT12M",
            "inLanguage": "en-US",
            "keywords": ["core web vitals", "core web vitals for business", "LCP INP CLS", "page speed ranking factor", "core web vitals revenue impact"],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "about": [
                { "@type": "Thing", "name": "Core Web Vitals", "description": "Google performance metrics including LCP, INP, and CLS used as search ranking signals and user experience benchmarks" },
                { "@type": "Thing", "name": "Largest Contentful Paint", "description": "Metric measuring loading performance, specifically the time until the largest visible content element finishes rendering" },
                { "@type": "Thing", "name": "Interaction to Next Paint", "description": "Metric measuring responsiveness, specifically the time between user interaction and visual feedback from the page" },
                { "@type": "Thing", "name": "Cumulative Layout Shift", "description": "Metric measuring visual stability, specifically how much page elements move during page load" }
            ],
            "citation": [
                { "@type": "WebPage", "name": "Google Search Central: Core Web Vitals Documentation", "url": "https://developers.google.com/search/docs/appearance/core-web-vitals" },
                { "@type": "WebPage", "name": "web.dev: Learn Core Web Vitals", "url": "https://web.dev/explore/learn-core-web-vitals" },
                { "@type": "WebPage", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "WebPage", "name": "web.dev: Business Impact of Core Web Vitals Case Studies", "url": "https://web.dev/case-studies/vitals-business-impact" },
                { "@type": "WebPage", "name": "Google Think With Google: Mobile Page Speed Industry Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "WebPage", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Core Web Vitals Explained for Business Owners", "item": "https://www.pandacodegen.com/blog/core-web-vitals-explained" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/core-web-vitals-explained",
            "url": "https://www.pandacodegen.com/blog/core-web-vitals-explained",
            "name": "Core Web Vitals in 2026: What It Means for Your Revenue",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-05-06",
            "dateModified": "2026-06-11T00:00:00-05:00"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "description": "PandaCodeGen builds custom Next.js websites that score 90+ on Google PageSpeed and pass all Core Web Vitals on every build.",
            "foundingDate": "2026",
            "areaServed": "Worldwide",
            "email": "info@pandacodegen.com",
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "701 Tillery St Ste 12",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78702",
                "addressCountry": "US"
            },
            "sameAs": [
                "https://x.com/PandaCodeGen",
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
                "https://clutch.co/profile/panda-code-gen",
                "https://www.trustpilot.com/review/pandacodegen.com",
                "https://www.google.com/maps?cid=16271659886069582158",
                "https://www.goodfirms.co/company/pandacodegen",
                "https://www.crunchbase.com/organization/pandacodegen",
                "https://www.designrush.com/agency/profile/pandacodegen",
                "https://www.sortlist.com/agency/pandacodegen",
                "https://www.f6s.com/pandacodegen",
                "https://www.sanity.io/exchange/community/pandacodegen",
                "https://www.behance.net/pandacodegen",
                "https://dev.to/pandacodegen",
                "https://www.reddit.com/user/PandaCodeGen/",
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/core-web-vitals-explained#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function CoreWebVitalsExplainedPage() {
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
                            { label: "Core Web Vitals Explained", href: "/blog/core-web-vitals-explained" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-stone-100 text-stone-600 rounded-full mb-4">SEO</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Core Web Vitals Explained for Business Owners 2026:{" "}
                            <span className="font-serif italic text-cognac">What It Means for Your Revenue</span>
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Your agency sent you a panicky email. Your Google Search Console lit up with warnings. Someone on LinkedIn told you your site is failing &ldquo;Core Web Vitals&rdquo; and it is tanking your SEO. You nodded politely. You have no idea what any of that means. Here is the plain English version, written for business owners, not developers.
                        </p>

                        <BlogAuthor
                            date="Apr 16, 2026"
                            readTime="12 min read"
                            bio="Hassan builds custom Next.js sites that pass all three Core Web Vitals on every build. He spent 6 years inside WordPress before founding PandaCodeGen in Feb 2026. Every page builder hits the same Core Web Vitals ceiling."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <PageSpeedAnimation />
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "Core Web Vitals are three scores Google uses to measure how your website feels to a real visitor. Google ranks sites partly based on these scores.",
                            "Only 47% of websites pass all three Core Web Vitals in 2026. The other 53% lose 8 to 35 percent of conversions, traffic, and revenue from this one problem.",
                            "Every 1-second delay in load time reduces conversions by 7%. For a $100K/month store, that is $7,000 per month in lost sales. $84,000 per year.",
                            "You can check your scores in 30 seconds at pagespeed.web.dev. Most business sites on Wix, Squarespace, WordPress, and Shopify fail because the platform itself adds JavaScript you cannot remove.",
                            "Real result: our client MyCustomPatches moved from WordPress to a custom Next.js build and their PageSpeed went from 42 to 97, with bounce rate dropping 34 percent. Verify it live at mycustompatches.net."
                        ]} />
                    </div>

                    {/* Real Buyer Voices — verified Reddit threads, Apr 2026 */}
                    <div className="my-8 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">What Business Owners Are Experiencing Right Now</p>
                        <div className="space-y-4">
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;Total impressions: 57,000. Total clicks: 1,270. Average CTR: 2.2%. Average position: 8.6. Clicks are stuck at ~40 per day despite high impressions. CTR dropped from ~14% (brand queries only) to ~1.2% as non-brand impressions grew.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/Big_University_6035</strong> · r/SEO · Apr 20, 2026 · 25 upvotes, 35 comments</span>
                                    <a href="https://www.reddit.com/r/SEO/comments/1sq96ph/started_a_project_site_on_march_8_50k_impressions/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;A 1-3% CTR at position 8-9 is expected, so the issue is not really CTR, it is that you are sitting at the bottom of page 1 where clicks are limited. Go after keywords where you are already ranking 5-12, improve titles to better match intent, and strengthen those pages with internal links.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/Exact-Delay2152</strong> · r/SEO · Apr 20, 2026 (community response)</span>
                                    <a href="https://www.reddit.com/r/SEO/comments/1sq96ph/started_a_project_site_on_march_8_50k_impressions/oh7h4es/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;The recent thread about subscriptions being insane really hit home for me. I started my store a few months ago and quickly fell into the trap of adding apps for every little feature. Now my monthly bill is way higher than I expected.&rdquo; — The same pattern applies to Core Web Vitals: every app that loads on the front end drags LCP and INP, directly lowering your position, directly reducing your clicks.</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/Jinnapat397</strong> · r/shopify · Apr 14, 2026 · apps adding to page weight affecting rankings</span>
                                    <a href="https://www.reddit.com/r/shopify/comments/1snbsz9/how_do_you_decide_which_paid_shopify_apps_are/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6">Core Web Vitals are three Google metrics that measure real-world user experience: LCP (how fast the main content loads), INP (how fast the page responds to clicks), and CLS (how much the layout shifts during load). Failing any one of them costs you ranking positions. Sites that pass all three get a ranking boost over identical pages that fail. For most WordPress and Wix sites, LCP and INP are the two failing scores.</p>

                    <div className="space-y-8">

                        {/* SECTION 1: What Are CWV */}
                        <BlogHeader>What Are Core Web Vitals in Plain English?</BlogHeader>

                        <BlogText>
                            Imagine you walk into a physical store. The door opens quickly. Shelves are stable. When you tap a price tag, the price shows immediately. That store feels good. You spend time there. You probably buy something.
                        </BlogText>

                        <BlogText>
                            Now imagine a store where the door takes 6 seconds to open. Items slide around on the shelves as you are reaching for them. When you tap a price tag, nothing happens for 2 seconds. That store feels broken. You leave.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>Core Web Vitals are the digital version of that feeling.</BlogHighlight> Google created three scores to measure exactly how a website feels to a real visitor. According to <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Google&apos;s official documentation</a>, these three scores are used as a ranking signal in search results. A site that passes all three ranks better than a site that fails them, all other things being equal.
                        </BlogText>

                        <BlogText>
                            The three scores each measure one aspect of your site&apos;s feel: how fast it loads, how quickly it responds to clicks, and how much things move around on the screen as it loads. Here is what each one means.
                        </BlogText>

                        {/* SECTION 2: Three Metrics */}
                        <BlogHeader>The Three Metrics Explained Like You Are Running a Business</BlogHeader>

                        <div className="grid gap-6 my-8">
                            {[
                                {
                                    icon: Clock,
                                    acronym: "LCP",
                                    name: "Largest Contentful Paint",
                                    plainEnglish: "How long it takes for the biggest thing on your page (usually the hero image or main headline) to finish loading.",
                                    goodScore: "Under 2.5 seconds",
                                    badScore: "Over 4 seconds",
                                    businessImpact: "If your LCP is over 4 seconds, 53 percent of mobile visitors have already left. You are paying for ads and SEO to drive traffic that leaves before they see your offer."
                                },
                                {
                                    icon: MousePointerClick,
                                    acronym: "INP",
                                    name: "Interaction to Next Paint",
                                    plainEnglish: "How quickly your page responds when a visitor clicks, taps, or types. A delay here feels like the page is frozen.",
                                    goodScore: "Under 200 milliseconds",
                                    badScore: "Over 500 milliseconds",
                                    businessImpact: "On e-commerce sites, a laggy INP on the Add to Cart button is the difference between completing a sale and losing it. Every click that feels slow trains visitors to doubt your site."
                                },
                                {
                                    icon: LayoutGrid,
                                    acronym: "CLS",
                                    name: "Cumulative Layout Shift",
                                    plainEnglish: "How much content jumps around on the screen as the page loads. This is the thing where you go to tap a button and it moves at the last second, and you accidentally tap an ad.",
                                    goodScore: "Under 0.1",
                                    badScore: "Over 0.25",
                                    businessImpact: "High CLS is the most frustrating CWV failure. Visitors get angry at your site before they even read your content. It causes accidental clicks on the wrong things, including the Back button."
                                }
                            ].map((m) => (
                                <div key={m.acronym} className="p-6 bg-stone-50 border border-stone-200 rounded-2xl">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-cognac/10 flex items-center justify-center shrink-0">
                                            <m.icon className="w-6 h-6 text-cognac" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-1">{m.acronym}</p>
                                            <h3 className="text-xl font-bold text-charcoal">{m.name}</h3>
                                        </div>
                                    </div>
                                    <p className="text-stone-700 text-base leading-relaxed mb-3"><strong>In plain English:</strong> {m.plainEnglish}</p>
                                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Good</p>
                                            <p className="text-sm text-charcoal font-medium">{m.goodScore}</p>
                                        </div>
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Bad</p>
                                            <p className="text-sm text-charcoal font-medium">{m.badScore}</p>
                                        </div>
                                    </div>
                                    <p className="text-stone-700 text-sm leading-relaxed"><strong>What this costs your business:</strong> {m.businessImpact}</p>
                                </div>
                            ))}
                        </div>

                        <BlogText>
                            According to <a href="https://web.dev/explore/learn-core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">web.dev&apos;s official learning resource</a>, at least <BlogHighlight>75 percent of your real visitors</BlogHighlight> must hit the &ldquo;good&rdquo; threshold for you to pass each metric. Not 50 percent. Not the average. 75 percent. This is a high bar and most platform-based websites cannot reach it without structural changes.
                        </BlogText>

                        <BlogText>
                            A quick note on related metrics that show up in PageSpeed reports but are not official Core Web Vitals: <strong>FCP</strong> (First Contentful Paint) measures when any content first appears, <strong>TBT</strong> (Total Blocking Time) is the lab-measured equivalent of INP and shows up in Lighthouse, and <strong>TTFB</strong> (Time to First Byte) measures how fast your server responds. INP replaced FID (First Input Delay) as the official Core Web Vital in March 2024. Your scores come from the <strong>CrUX</strong> (Chrome User Experience Report), which is real-world field data from actual Chrome visitors, not a one-time lab test.
                        </BlogText>

                        {/* SECTION 3: Why Google Uses CWV */}
                        <BlogHeader>Why Does Google Rank Sites on Core Web Vitals?</BlogHeader>

                        <BlogText>
                            Google&apos;s goal is to send searchers to the best result. If two sites have similar content, Google prefers the one that feels better to actual humans. Core Web Vitals are Google&apos;s way of measuring &ldquo;feel&rdquo; at scale, across millions of sites, using real visitor data from Chrome users.
                        </BlogText>

                        <BlogText>
                            This is not theoretical. Google publishes <a href="https://web.dev/case-studies/vitals-business-impact" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">official case studies</a> showing real businesses that saw ranking and revenue improvements specifically from Core Web Vitals work. <BlogHighlight>Vodafone improved their LCP by 31 percent and saw 8 percent more sales.</BlogHighlight> Cdiscount improved Core Web Vitals across product pages and saw a 5.2 percent revenue uplift directly attributed to speed. These are not small wins. On a $5M/year business, 8 percent more sales is $400,000 per year.
                        </BlogText>

                        <BlogText>
                            The scoring system is a ranking signal, not a content replacement. If your competitor has better content and passes CWV, they will still rank above you even if you have the fastest site in the world. But between two sites with equally good content, <BlogHighlight>the one passing Core Web Vitals wins.</BlogHighlight> And in competitive industries, that tiebreaker is the difference between page 1 and page 2 of Google.
                        </BlogText>

                        {/* SECTION 4: Revenue Cost */}
                        <BlogHeader>What Your Failing Scores Actually Cost in Revenue</BlogHeader>

                        <BlogText>
                            Here is the math nobody shows you. <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Google research</a> and <a href="https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Deloitte&apos;s Milliseconds Make Millions study</a> both confirm the same pattern: every second of delay costs you a percentage of your visitors and a percentage of your conversions. Here is what that looks like at different business sizes:
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1 swipe-hint">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Monthly Revenue</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Lost to 1-sec Delay (7%)</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Lost to 3-sec Delay (21%)</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Annual Impact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">$10,000/mo</td>
                                        <td data-label="Lost to 1-sec Delay" className="p-3 border border-stone-300">$700</td>
                                        <td data-label="Lost to 3-sec Delay" className="p-3 border border-stone-300 text-red-600">$2,100</td>
                                        <td data-label="Annual Impact" className="p-3 border border-stone-300 text-red-600 font-bold">$8,400 to $25,200</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">$50,000/mo</td>
                                        <td data-label="Lost to 1-sec Delay" className="p-3 border border-stone-300">$3,500</td>
                                        <td data-label="Lost to 3-sec Delay" className="p-3 border border-stone-300 text-red-600">$10,500</td>
                                        <td data-label="Annual Impact" className="p-3 border border-stone-300 text-red-600 font-bold">$42,000 to $126,000</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">$100,000/mo</td>
                                        <td data-label="Lost to 1-sec Delay" className="p-3 border border-stone-300">$7,000</td>
                                        <td data-label="Lost to 3-sec Delay" className="p-3 border border-stone-300 text-red-600">$21,000</td>
                                        <td data-label="Annual Impact" className="p-3 border border-stone-300 text-red-600 font-bold">$84,000 to $252,000</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">$500,000/mo</td>
                                        <td data-label="Lost to 1-sec Delay" className="p-3 border border-stone-300">$35,000</td>
                                        <td data-label="Lost to 3-sec Delay" className="p-3 border border-stone-300 text-red-600">$105,000</td>
                                        <td data-label="Annual Impact" className="p-3 border border-stone-300 text-red-600 font-bold">$420,000 to $1.26M</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            Find your monthly revenue in the left column. If your site currently loads in 4 seconds instead of under 1 second, you are losing roughly the 3-second column every month. This is before counting the SEO rankings you are losing because Google is pushing faster competitors above you.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>Only 47 percent of websites pass all three Core Web Vitals in 2026.</BlogHighlight> If your business is in the other 53 percent, you are paying this cost right now. Most business owners have no idea. That is why your agency sounds stressed.
                        </BlogText>

                        {/* MID CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Want to see your real Core Web Vitals scores?</p>
                            <p className="text-stone-600 mb-4 text-sm">Share your URL on a 20-min call. We run PageSpeed live, decode what each score means for your business, and show you what fixing it would look like. No pressure.</p>
                            <CalModalButton className="inline-flex items-center gap-2 bg-cognac hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                                Get Free Core Web Vitals Audit
                                <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        {/* SECTION 5: How to Check */}
                        <BlogHeader>How to Check Your Core Web Vitals in 30 Seconds</BlogHeader>

                        <BlogText>
                            You do not need a developer or an agency to check your scores. Here is the full process:
                        </BlogText>

                        <BlogList items={[
                            "Go to pagespeed.web.dev in your browser.",
                            "Paste your website URL into the box.",
                            "Click Analyze. Wait about 30 seconds.",
                            "Look at the Mobile tab first (not Desktop). Mobile is what Google scores you on.",
                            "Scroll down to 'Core Web Vitals Assessment.' You will see either 'Passed' (green checkmark) or 'Failed' (red X).",
                            "Below that, you will see your LCP, INP, and CLS scores individually with color-coded indicators (green/orange/red)."
                        ]} />

                        <BlogText>
                            Green means you pass that metric. Orange means you need improvement. Red means you are failing. If any metric is orange or red, Google classifies your entire site as failing the Core Web Vitals assessment, which means you lose the ranking boost.
                        </BlogText>

                        <BlogText>
                            You can also check the <a href="https://support.google.com/webmasters/answer/9205520" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Core Web Vitals report</a> inside Google Search Console. This shows you which specific URLs on your site are failing and why, across all your pages at once. That is more useful for larger sites where individual pages might have different problems.
                        </BlogText>

                        {/* SECTION 6: Why Platforms Fail */}
                        <BlogHeader>Why Most Business Websites Fail Core Web Vitals</BlogHeader>

                        <BlogText>
                            Here is the uncomfortable truth. If your site is built on Wix, Squarespace, WordPress, Shopify, GoHighLevel, or any drag-and-drop website builder, <BlogHighlight>there is a structural ceiling you cannot break through with optimization.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            Every platform loads a JavaScript bundle on every page. This JavaScript powers the editor, the platform features, the analytics, and the rendering engine. It is 200 to 400KB of code that downloads before your content even starts to render. You cannot remove it. It is part of the platform. Compressing your images does not fix it. Removing unused sections does not fix it. Upgrading your hosting plan does not fix it.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1 swipe-hint">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Platform</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Typical Mobile PageSpeed</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Can You Pass CWV?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Wix</td>
                                        <td data-label="Typical Mobile" className="p-3 border border-stone-300">35 to 55</td>
                                        <td data-label="Can You Pass CWV?" className="p-3 border border-stone-300 text-red-600 font-medium">Rarely</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Squarespace</td>
                                        <td data-label="Typical Mobile" className="p-3 border border-stone-300">30 to 55</td>
                                        <td data-label="Can You Pass CWV?" className="p-3 border border-stone-300 text-red-600 font-medium">Rarely</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">WordPress (with page builder)</td>
                                        <td data-label="Typical Mobile" className="p-3 border border-stone-300">35 to 65</td>
                                        <td data-label="Can You Pass CWV?" className="p-3 border border-stone-300 text-red-600 font-medium">Rarely</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Shopify (typical store)</td>
                                        <td data-label="Typical Mobile" className="p-3 border border-stone-300">40 to 65</td>
                                        <td data-label="Can You Pass CWV?" className="p-3 border border-stone-300 text-orange-600 font-medium">Sometimes</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">GoHighLevel</td>
                                        <td data-label="Typical Mobile" className="p-3 border border-stone-300">20 to 45</td>
                                        <td data-label="Can You Pass CWV?" className="p-3 border border-stone-300 text-red-600 font-medium">Almost never</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Webflow</td>
                                        <td data-label="Typical Mobile" className="p-3 border border-stone-300">55 to 75</td>
                                        <td data-label="Can You Pass CWV?" className="p-3 border border-stone-300 text-orange-600 font-medium">Sometimes</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Custom Next.js (what we build)</td>
                                        <td data-label="Typical Mobile" className="p-3 border border-stone-300 text-green-700">90+</td>
                                        <td data-label="Can You Pass CWV?" className="p-3 border border-stone-300 text-green-700 font-medium">Always</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            See the pattern. <BlogHighlight>No platform-based site consistently passes Core Web Vitals.</BlogHighlight> The sites that do pass are almost always custom coded, using modern frameworks like Next.js that pre-build every page at deploy time and ship minimal JavaScript. That is why our clients score 90+ every time, and why platform clients struggle to get above 60 no matter how much they optimize.
                        </BlogText>

                        {/* SECTION 7: What Fixes Work */}
                        <BlogHeader>What Actually Fixes Core Web Vitals (and What Does Not)</BlogHeader>

                        <BlogText>
                            Most &ldquo;speed optimization&rdquo; services focus on things that help a little but do not break through the platform ceiling. Here is what works and what does not:
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1 swipe-hint">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Fix</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Works?</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Typical Improvement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300">Compress images to WebP</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-green-700 font-medium">Yes</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">+5 to +15 points</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300">Lazy load below-fold images</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-green-700 font-medium">Yes</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">+3 to +8 points</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300">Remove unused third-party apps</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-green-700 font-medium">Yes</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">+5 to +20 points</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300">Minify CSS and JavaScript</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-green-700 font-medium">Yes</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">+2 to +5 points</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300">Install a caching plugin (WP Rocket, etc)</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-orange-600 font-medium">Marginal</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">+3 to +8 points</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300">Switch to a &ldquo;faster&rdquo; theme</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-red-600 font-medium">No</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">Platform JS stays the same</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300">Install a &ldquo;speed optimization&rdquo; app</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-red-600 font-medium">No</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">Adds another script to fix scripts</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300">Upgrade your hosting plan</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-red-600 font-medium">No</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300">Hosting is not the bottleneck</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-bold">Rebuild on custom Next.js</td>
                                        <td data-label="Works?" className="p-3 border border-stone-300 text-green-700 font-medium font-bold">Yes, definitively</td>
                                        <td data-label="Typical Improvement" className="p-3 border border-stone-300 font-bold">30 to 50 points, always passes CWV</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogQuote>
                            The platform ceiling is real. You can push a Wix or Squarespace site from 35 to 60 with aggressive optimization. You cannot push it to 95. The platform itself is the problem.
                        </BlogQuote>

                        {/* SECTION 8: Real Results */}
                        <BlogHeader>Real Businesses That Fixed Core Web Vitals</BlogHeader>

                        <BlogText>
                            This is not theory. Here are businesses that measured their Core Web Vitals, took action, and saw measurable revenue impact:
                        </BlogText>

                        <BlogList items={[
                            "Vodafone improved LCP by 31 percent on their main landing page and saw 8 percent more sales, according to Google's official case study.",
                            "Cdiscount improved Core Web Vitals across product pages and saw a 5.2 percent revenue uplift directly attributed to speed.",
                            "Our client MyCustomPatches migrated from WordPress to custom Next.js. Their PageSpeed score went from 42 to 97. Bounce rate dropped 34 percent. Conversions went up.",
                            "Google research shows bounce probability increases 32 percent when page load time goes from 1 to 3 seconds."
                        ]} />

                        <BlogText>
                            If you want to see what a 90+ score actually looks like in production, run <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.mycustompatches.net" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">PageSpeed Insights on mycustompatches.net</a>. That is one of our client sites. Feel the difference compared to your current platform.
                        </BlogText>

                        {/* SECTION 9: What to Do */}
                        <BlogHeader>What to Do If You Are Failing Core Web Vitals</BlogHeader>

                        <BlogText>
                            Here is an honest decision tree based on your current situation:
                        </BlogText>

                        <div className="space-y-4 my-8">
                            {[
                                {
                                    num: "1",
                                    title: "If you are on Wix, Squarespace, or Webflow and scoring below 55",
                                    action: "Do the basic optimizations (images, apps, third-party scripts) first. If you still score below 70, your platform is the ceiling. A migration to custom code is the only way past it. Budget: $1,500+ Starter, $3,500+ Growth for most business sites, $5,000 to $10,000+ Scale for larger e-commerce."
                                },
                                {
                                    num: "2",
                                    title: "If you are on WordPress with a page builder and scoring below 55",
                                    action: "Remove every plugin you do not absolutely need. Switch to a lightweight theme. Install caching. If you still score below 70, the page builder (Elementor, Divi, etc.) is the problem. Either rebuild the site in native WordPress with a fast theme, or migrate to custom Next.js."
                                },
                                {
                                    num: "3",
                                    title: "If you are on Shopify and scoring below 60",
                                    action: "Audit your apps. Each installed app adds 50 to 200ms of JavaScript. Remove apps you do not use. If you still score below 75 and your store is doing $100K+/month, headless Shopify with a custom Next.js frontend is the next step."
                                },
                                {
                                    num: "4",
                                    title: "If you are on GoHighLevel and scoring below 45",
                                    action: "GoHighLevel has the tightest platform ceiling of any major builder. Basic optimizations help marginally. For agencies running client sites on GHL that need to rank, a custom frontend with GHL backend integration is the fix."
                                },
                                {
                                    num: "5",
                                    title: "If you are already on custom code and scoring below 85",
                                    action: "Your developer did not optimize properly. Fix the specific issues PageSpeed Insights reports. Focus on LCP (usually the hero image), INP (usually heavy JavaScript), and CLS (usually images without dimensions). You do not need to rebuild. Just fix what is flagged."
                                }
                            ].map((step) => (
                                <div key={step.num} className="flex gap-4 p-4 border border-stone-300 rounded-xl hover:border-cognac/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-cognac/10 flex items-center justify-center shrink-0">
                                        <span className="text-cognac font-bold text-sm">{step.num}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-charcoal text-sm mb-1">{step.title}</p>
                                        <p className="text-stone-600 text-sm leading-relaxed">{step.action}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* SECTION 10: The Bottom Line */}
                        <BlogHeader>The Bottom Line on Core Web Vitals</BlogHeader>

                        <BlogText>
                            Core Web Vitals are not a developer problem. They are a business problem with a technical diagnosis. Every failing score is money walking out the door. Every passing score is a ranking advantage your competitors do not have.
                        </BlogText>

                        <BlogText>
                            The three metrics measure what visitors actually feel: how fast your site loads, how quickly it responds to clicks, and how stable it looks as it renders. Google uses them as a ranking signal because visitors abandon slow and janky sites. <BlogHighlight>If your competitors pass Core Web Vitals and you do not, Google quietly pushes you down the results every month.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            The good news: you can check your scores yourself in 30 seconds. The bad news: if you are on a platform-based website builder, the fix is not a plugin. It is the platform itself. The sooner you accept that, the sooner you can stop paying for optimization work that has a structural ceiling, and start building a site that actually passes.
                        </BlogText>

                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10 mt-6 md:mt-10 md:mt-16">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Core Web Vitals are three scores</strong> (LCP, INP, CLS) that measure loading speed, click responsiveness, and visual stability. Google uses them as a ranking signal.</li>
                            <li><strong>Only 47% of sites pass all three in 2026.</strong> The other 53% lose 8 to 35 percent of conversions, traffic, and revenue. This is a real business cost, not a theoretical one.</li>
                            <li><strong>Every 1-second delay = 7% fewer conversions.</strong> For a $100K/month business, that is $7,000 per month in lost sales. $84,000 per year.</li>
                            <li><strong>Platform-based sites have a structural ceiling.</strong> Wix, Squarespace, page-builder WordPress, and GoHighLevel cannot consistently pass Core Web Vitals because the platform itself loads too much mandatory JavaScript.</li>
                            <li><strong>Check your scores at pagespeed.web.dev in 30 seconds.</strong> Test mobile first. If you fail, the fix is either basic optimization (images, apps, caching) or a <Link href="/services/wordpress-migration" className="text-cognac hover:underline">platform migration</Link>. Fixed migration pricing is published on our <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>. Do not pay for anything else.</li>
                        </ol>
                    </section>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Want Someone to Explain Your Scores on a 20-Min Call?</h3>
                        <p className="text-stone-600 mb-6 max-w-xl mx-auto text-sm">
                            Share your URL on the call. We run PageSpeed live, walk you through what each score means for your business specifically, and give you an honest recommendation. No sales pitch. Just answers.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 bg-cognac hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                            Get Free Core Web Vitals Audit
                            <ArrowRight className="w-5 h-5" />
                        </CalModalButton>
                    </div>

                    {/* FAQ */}
                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    <section className="mb-10 mt-6 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading by Platform</h2>
                        <p className="text-stone-700 leading-relaxed">See Core Web Vitals in practice: <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline font-medium">Shopify Dawn theme LCP issues</Link>, <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline font-medium">Squarespace CWV ceiling</Link>, <Link href="/blog/wix-too-slow" className="text-cognac hover:underline font-medium">why Wix sites stay slow</Link>, and <Link href="/blog/gohighlevel-website-speed" className="text-cognac hover:underline font-medium">GoHighLevel site speed</Link>. For the full speed playbook: our <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline font-medium">100 PageSpeed guide</Link>, <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline font-medium">how website speed affects SEO</Link>, and <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline font-medium">why WordPress plugins destroy speed</Link>. For rebuild cost benchmarks, see the <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">2026 website rebuild pricing guide</Link>.</p>
                    </section>

                    {/* Related Posts */}
                    <RelatedPosts currentPostId="core-web-vitals-explained" />

                </article>
            </main>
            <Footer />
        </>
    );
}