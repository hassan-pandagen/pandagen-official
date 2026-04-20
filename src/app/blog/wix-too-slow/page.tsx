import { ArrowLeft, ArrowRight, AlertTriangle, TrendingDown, Zap, XCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "wix-too-slow")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Wix Too Slow? 48% Fail Core Web Vitals (2026 Data)",
    description: "Wix sites average 6.8-second LCP on mobile from 200-400KB of unkillable platform JavaScript. Real 2026 data and the only fix that works.",
    alternates: {
        canonical: "/blog/wix-too-slow",
    },
    keywords: [
        "wix too slow",
        "wix website slow",
        "wix slow loading",
        "wix pagespeed score",
        "wix core web vitals",
        "wix speed optimization",
        "wix mobile speed",
        "wix lcp score",
        "fix wix slow website",
        "wix alternative faster",
        "wix migration nextjs",
        "why is my wix site slow"
    ],
    openGraph: {
        title: "Wix Too Slow? 48% Fail Core Web Vitals (2026 Data)",
        description: "Wix sites average 6.8-second LCP on mobile. The cause is 200-400KB of platform JavaScript that cannot be removed. No app fixes this. Real 2026 data inside.",
        type: "article",
        publishedTime: "2026-04-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/wix-too-slow",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wix Too Slow? 48% Fail Core Web Vitals (2026 Data)",
        description: "Wix sites average 6.8-second LCP on mobile. The cause is 200-400KB of platform JavaScript that cannot be removed. Real 2026 data and the only real fix.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wix-too-slow#article",
            "headline": "Wix Too Slow? 48% Fail Core Web Vitals (2026 Data)",
            "description": "Wix sites average 6.8-second LCP on mobile from 200-400KB of unkillable platform JavaScript. Real 2026 data and the only fix that works.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-04-06T00:00:00-05:00",
            "dateModified": "2026-04-20T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wix-too-slow" },
            "articleSection": "Performance",
            "wordCount": 3000,
            "timeRequired": "PT12M",
            "inLanguage": "en-US",
            "keywords": ["wix too slow", "wix website performance", "wix core web vitals", "wix pagespeed score", "wix speed optimization", "wix mobile speed 2026"],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "about": [
                { "@type": "Thing", "name": "Wix", "description": "Cloud-based website builder platform used by over 230 million registered users worldwide" },
                { "@type": "Thing", "name": "Core Web Vitals", "description": "Google's set of performance metrics including LCP, FID, and CLS used as search ranking signals" },
                { "@type": "Thing", "name": "PageSpeed Performance", "description": "Google's PageSpeed Insights scoring system measuring mobile and desktop page load performance on a 0-100 scale" },
                { "@type": "Thing", "name": "Website Migration", "description": "The process of moving a website from one platform to another while preserving SEO rankings and content" }
            ],
            "citation": [
                { "@type": "WebPage", "name": "Wix Help: Site Performance Understanding PageSpeed Insights", "url": "https://support.wix.com/en/article/site-performance-understanding-pagespeed-insights" },
                { "@type": "WebPage", "name": "Search Engine Journal: INP 9 Content Management Systems Ranked", "url": "https://www.searchenginejournal.com/interaction-to-next-paint-9-content-management-systems-ranked/555090/" },
                { "@type": "WebPage", "name": "Wix Engineering: 40% Faster Interaction — Solving React Hydration", "url": "https://www.wix.engineering/post/40-faster-interaction-how-wix-solved-react-s-hydration-problem-with-selective-hydration-and-suspen" },
                { "@type": "WebPage", "name": "We Are Tenet: Website Speed and Page Load Time Statistics 2026", "url": "https://www.wearetenet.com/blog/website-speed-page-load-time-statistics" },
                { "@type": "WebPage", "name": "Wix Performance Guide: A Detailed Guide to Core Web Vitals", "url": "https://www.wix.com/performance/guide-cwv" },
                { "@type": "WebPage", "name": "Elite Strategies: The State of Wix in 2025 for SEOs", "url": "https://elite-strategies.com/state-of-wix-seo/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Wix Website Too Slow?", "item": "https://www.pandacodegen.com/blog/wix-too-slow" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wix-too-slow",
            "url": "https://www.pandacodegen.com/blog/wix-too-slow",
            "name": "Wix Too Slow? 48% Fail Core Web Vitals (2026 Data)",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-04-06T00:00:00-05:00",
            "dateModified": "2026-04-20T00:00:00-05:00"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "description": "PandaCodeGen builds custom Next.js websites for businesses migrating from Wix, WordPress, Webflow, Squarespace, and Shopify. All sites score 95 to 100 on Google PageSpeed or you do not pay.",
            "foundingDate": "2026",
            "areaServed": "Worldwide",
            "email": "info@pandacodegen.com",
            "streetAddress": "701 Tillery St Ste 12",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "postalCode": "78702",
            "sameAs": [
                "https://twitter.com/pandacodegen",
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
                "https://clutch.co/profile/panda-code-gen",
                "https://www.trustpilot.com/review/pandacodegen.com",
                "https://www.google.com/maps?cid=16271659886069582158"
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function WixTooSlowPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-24 pb-10 md:pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Wix Too Slow" }
                    ]} />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        Wix Website <span className="font-serif italic text-cognac">Too Slow?</span> 48% of Wix Sites Fail Core Web Vitals in 2026
                    </h1>

                    <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                        48% of Wix sites fail Core Web Vitals. The average mobile load time is 6.8 seconds. No optimization fixes it because the root cause is platform JavaScript you cannot remove. Here is what it is costing your business and what to do about it.
                    </p>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Lead Full-Stack Engineer"
                        date="April 6, 2026"
                        readTime="12 min read"
                        bio="Hassan migrates businesses off Wix, WordPress, and Webflow onto custom Next.js sites that score 95 to 100 on Google PageSpeed. Recent rebuild: Obare Magazine off Wix onto Next.js and Sanity. Six years of WordPress experience before launching PandaCodeGen."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                    />
                    </div>

                    <PageSpeedAnimation />

                    {/* Executive Summary */}
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-10" data-speakable="true">
                        <h2 className="text-lg font-bold text-amber-400 mb-3">Key Numbers</h2>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /><span>Wix average LCP: 6.8 seconds. Google requirement: under 2.5 seconds.</span></li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /><span>48% of Wix sites fail Core Web Vitals assessment entirely.</span></li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /><span>Wix loads 200 to 400KB of JavaScript before your content. You cannot remove it.</span></li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /><span>Best-case Wix mobile score: 83/100. Custom Next.js baseline: 95 to 100.</span></li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /><span>Every 2-second mobile delay: 87% cart abandonment rate.</span></li>
                        </ul>
                    </div>

                    {/* Intro */}
                    <BlogText>
                        You built it carefully. The design looks professional. You have spent hours compressing images, removing apps you did not want to remove, cutting animations, and reading every Wix speed guide you could find. Your Google score (PageSpeed) is still somewhere in the 40s or 50s on mobile and you cannot figure out why.
                    </BlogText>
                    <BlogText>
                        This is not a you problem. Your site looks good because you did the design work right. Your score is still low because the problem is not in your design. It is in the platform itself. There is a hard ceiling on Wix performance that no amount of optimization gets you past. This post explains exactly what that ceiling is, what it is costing your business right now, and what your options are.
                    </BlogText>

                    {/* H2 1 — Business cost FIRST */}
                    <BlogHeader>What a Slow Wix Site Is Costing Your Business Right Now</BlogHeader>
                    <BlogText>
                        Before the technical explanation, here is the business reality. Slow websites have direct, measurable effects on revenue. These are the numbers that apply to your Wix site today.
                    </BlogText>

                    <BlogList items={[
                        "53% of mobile visitors leave a site that takes longer than 3 seconds to load. The average Wix site takes 6.8 seconds. You are losing more than half your mobile visitors before they see your offer.",
                        "A 2-second delay on mobile increases cart abandonment to 87%. If you run any kind of store or booking system on Wix, this is the most expensive number on this page.",
                        "Sites loading in 1 second convert at 39%. Sites at 3 seconds convert at 29%. Sites at 6 seconds convert at 18%. Wix's average LCP of 6.8 seconds puts you at the bottom of that range.",
                        "A 0.1-second improvement in load time increases retail conversions by 8.4%. Every day your competitor runs on a faster platform, they are collecting those conversions instead of you.",
                        "47% of slow sites saw ranking drops after Google's March 2026 core update, which elevated page speed as a primary ranking signal. If your organic traffic has declined recently, Wix's performance floor may be a direct cause.",
                        "The average small business loses $20,172 per year from a slow website. That number compounds: lower rankings mean fewer visitors, fewer visitors mean fewer sales, and the gap widens every month."
                    ]} />

                    <BlogText>
                        Most business owners do not connect the slowness of their website builder to the flatness of their sales graph. The connection is direct and it compounds over time. Every month at a lower conversion rate, every week of lower Google rankings, every abandoned cart is a measurable cost.
                    </BlogText>

                    {/* H2 2 */}
                    <BlogHeader>What Google Score (PageSpeed) Does a Wix Site Actually Get in 2026?</BlogHeader>
                    <BlogText>
                        Let us start with the real numbers, not Wix's marketing numbers.
                    </BlogText>
                    <BlogText>
                        The platform average for Wix sites on Google PageSpeed Insights (mobile) is 83 out of 100 in 2025, according to Wix's own published performance data. That 83 figure represents heavily optimized Wix sites. Most Wix websites, without significant optimization effort, score between 50 and 65 on mobile. Unoptimized sites with video backgrounds, multiple third-party app embeds, and large image galleries regularly score 40 to 50.
                    </BlogText>
                    <BlogText>
                        For comparison: the gold standard for web performance is 90 and above. Custom Next.js sites built with static generation consistently score 95 to 100. Not because of clever tricks. Because the underlying architecture generates minimal JavaScript and serves pre-rendered HTML.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 my-4">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="border-b border-[var(--border)]">
                                    <th className="text-left py-3 px-4 font-semibold text-[var(--foreground)]">Platform</th>
                                    <th className="text-left py-3 px-4 font-semibold text-[var(--foreground)]">Google Score (Mobile)</th>
                                    <th className="text-left py-3 px-4 font-semibold text-[var(--foreground)]">LCP Average</th>
                                    <th className="text-left py-3 px-4 font-semibold text-[var(--foreground)]">CWV Pass Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[var(--border)] bg-emerald-500/5">
                                    <td className="py-3 px-4 font-medium text-emerald-600">Custom Next.js</td>
                                    <td data-label="Google Score (Mobile)" className="py-3 px-4 text-[var(--muted)]">95 to 100</td>
                                    <td data-label="LCP Average" className="py-3 px-4 text-[var(--muted)]">0.6 to 1.1s</td>
                                    <td data-label="CWV Pass Rate" className="py-3 px-4 text-emerald-600">99%+</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">Duda</td>
                                    <td data-label="Google Score (Mobile)" className="py-3 px-4 text-[var(--muted)]">75 to 85</td>
                                    <td data-label="LCP Average" className="py-3 px-4 text-[var(--muted)]">2.1s</td>
                                    <td data-label="CWV Pass Rate" className="py-3 px-4 text-emerald-600">71%</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">Squarespace</td>
                                    <td data-label="Google Score (Mobile)" className="py-3 px-4 text-[var(--muted)]">65 to 78</td>
                                    <td data-label="LCP Average" className="py-3 px-4 text-[var(--muted)]">2.8s</td>
                                    <td data-label="CWV Pass Rate" className="py-3 px-4 text-amber-400">58%</td>
                                </tr>
                                <tr className="border-b border-[var(--border)] bg-red-500/5">
                                    <td className="py-3 px-4 font-medium text-red-600">Wix (optimized)</td>
                                    <td data-label="Google Score (Mobile)" className="py-3 px-4 text-[var(--muted)]">50 to 83</td>
                                    <td data-label="LCP Average" className="py-3 px-4 text-[var(--muted)]">3.2 to 6.8s</td>
                                    <td data-label="CWV Pass Rate" className="py-3 px-4 text-red-600">52%</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">WordPress</td>
                                    <td data-label="Google Score (Mobile)" className="py-3 px-4 text-[var(--muted)]">30 to 65</td>
                                    <td data-label="LCP Average" className="py-3 px-4 text-[var(--muted)]">3.5s</td>
                                    <td data-label="CWV Pass Rate" className="py-3 px-4 text-red-600">38%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        LCP, Largest Contentful Paint, measures how long it takes for the main visible content to appear on screen. Google's threshold for a passing score is 2.5 seconds. The average Wix site takes 6.8 seconds. That is nearly three times the threshold. Your visitors are staring at a white or partially-loaded page for nearly 7 seconds on mobile before the main content appears.
                    </BlogText>

                    {/* H2 2 */}
                    <BlogHeader>Why Your Wix Site Is Slow No Matter What You Try</BlogHeader>
                    <BlogText>
                        Every Wix page loads a mandatory set of platform scripts from static.parastorage.com before any of your content can render. These scripts handle the Wix editor layer, platform integrations, the site's layout engine, and other backend functionality. They are not optional. They run whether you have a simple one-page site or a complex e-commerce store with 200 products.
                    </BlogText>
                    <BlogText>
                        The size of this baseline JavaScript payload is 200 to 400KB, depending on the Wix plan and features in use. For context, Google recommends keeping JavaScript payloads under 300KB for the entire page. Wix's platform scripts alone use up most or all of that budget before a single line of your own content loads.
                    </BlogText>
                    <BlogHighlight>
                        This is not a bug Wix is fixing. It is the architecture. Wix is a visual drag-and-drop editor that runs in the browser. The JavaScript that makes the editor work is the same JavaScript that slows down your live site. There is no version of Wix without it.
                    </BlogHighlight>
                    <BlogText>
                        Wix's own documentation flags this JavaScript as "unused JavaScript" in PageSpeed audits but notes it cannot be fully removed because it serves essential platform functions. Users who have contacted Wix support about this issue report being told to optimize images and reduce apps. Neither of those actions addresses the root cause.
                    </BlogText>
                    <BlogText>
                        Additionally, pages with many sections create oversized DOM trees. Best practice for web performance is to keep DOM node counts under 1,500. Wix pages with 30 or more sections regularly exceed this limit, slowing rendering and increasing time to interactive.
                    </BlogText>

                    {/* H2 3 */}
                    <BlogHeader>Wix Studio Is 5x to 10x Slower Than the Standard Editor</BlogHeader>
                    <BlogText>
                        If you upgraded to Wix Studio expecting better performance, the data points in the opposite direction. Across Wix community forums and Reddit discussions from 2025 and 2026, Studio users consistently report load times that are significantly worse than the standard Wix editor.
                    </BlogText>
                    <BlogText>
                        Users on high-end hardware, including machines with Intel i9 processors, 64GB of RAM, and dedicated graphics cards, report the editor crashing and lagging during routine edits. Browser memory leaks force restarts every 30 to 45 minutes. Switching between pages creates freezing that standard Wix never exhibited.
                    </BlogText>
                    <BlogText>
                        Blog pages in Wix Studio are among the most reported problem areas. Users report First Contentful Paint times of 3 or more seconds and full page loads exceeding 15 seconds on 4G mobile connections for simple blog posts with minimal content. One community thread from late 2025 describes a blank white screen that persists for several seconds on every blog page load after an August 2024 platform update, with no resolution as of early 2026.
                    </BlogText>
                    <BlogQuote>
                        "I have done everything right and my Wix site loading time is still terrible. Images optimized, apps removed, animations limited. Still 5 seconds on mobile. Support keeps telling me to optimize images." (Wix Community Forum, 2026)
                    </BlogQuote>
                    <BlogText>
                        Lazy loading, a standard technique that defers off-screen images from loading until the user scrolls to them, is broken in Wix Studio. Instead of loading only what is visible, all page resources load simultaneously on initial page load. This makes the browser do three to four times more work than necessary on every page visit, dramatically increasing load time and LCP scores.
                    </BlogText>

                    {/* H2 4 */}
                    <BlogHeader>What You Can and Cannot Fix on Wix: The Speed Ceiling</BlogHeader>
                    <BlogText>
                        There are real optimizations available on Wix. They are worth doing. But they have a hard ceiling. Here is an honest breakdown.
                    </BlogText>

                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                <h3 className="font-semibold text-emerald-600">What You Can Optimize</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-[var(--muted)]">
                                <li>Compress images before uploading (WebP format preferred)</li>
                                <li>Remove unused third-party apps entirely</li>
                                <li>Limit animations to 3 to 5 per page maximum</li>
                                <li>Keep sections under 20 per page</li>
                                <li>Avoid video backgrounds above the fold</li>
                                <li>Limit YouTube embeds to one per page</li>
                                <li>Keep DOM node count under 1,500</li>
                            </ul>
                        </div>
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <XCircle className="w-5 h-5 text-red-600" />
                                <h3 className="font-semibold text-red-600">What You Cannot Change</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-[var(--muted)]">
                                <li>Wix's own platform code (200 to 400KB, loads on every page, always)</li>
                                <li>How fast Wix's servers respond to your visitors</li>
                                <li>How the page is cached and delivered globally</li>
                                <li>The order scripts load in (the slow ones load first)</li>
                                <li>How long it takes the page to become clickable after it loads</li>
                                <li>The underlying HTML and code structure Wix generates</li>
                            </ul>
                        </div>
                    </div>

                    <BlogText>
                        After doing everything in the left column perfectly, the best-case Google score (PageSpeed) for a Wix website on mobile is approximately 83. That is the published platform average with full optimization. Getting there requires significant effort and design compromises. Removing animations and limiting content to stay under the DOM limit often means a less visually compelling site.
                    </BlogText>
                    <BlogText>
                        The items in the right column are the actual drivers of slow load time. None of them are accessible to Wix users. Wix is a closed platform. You rent the storefront but you do not control the building.
                    </BlogText>

                    {/* Detailed optimization breakdown */}
                    <BlogHeader>What Each Optimization Actually Does for Your Business</BlogHeader>
                    <BlogText>
                        Most guides say "compress images and remove apps" without telling you what changes for your customers or your sales. Here is what each fix does in plain terms.
                    </BlogText>

                    <div className="space-y-6 my-8">
                        <div className="border border-stone-200 rounded-xl p-6">
                            <h3 className="font-bold text-charcoal mb-2">Compress images before uploading (WebP format)</h3>
                            <p className="text-stone-700 text-sm leading-relaxed mb-2">
                                An uncompressed PNG or JPEG on Wix can be 2 to 4MB. Wix does not resize or convert it automatically. Your customer on mobile waits 3 to 5 seconds staring at a blank space before the image appears. That blank space is the number one reason first-time visitors leave without buying.
                            </p>
                            <p className="text-stone-700 text-sm leading-relaxed">
                                <BlogHighlight>Converting to WebP before uploading cuts image size by 25 to 80% with no visible quality loss.</BlogHighlight> A product photo that was 2.1MB becomes 380KB. Your customer sees it in under half a second instead of 4 seconds. Studies show that pages where images load within 1 second have up to 2x higher conversion rates than pages where images take 3 seconds or more.
                            </p>
                        </div>

                        <div className="border border-stone-200 rounded-xl p-6">
                            <h3 className="font-bold text-charcoal mb-2">Remove unused third-party apps (the ones quietly slowing you down)</h3>
                            <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                Every app you install on Wix loads its JavaScript on every page of your site, even pages where the app does nothing. The more apps, the slower every single page. Here are the most common culprits:
                            </p>
                            <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                                <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                                <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                                    <thead>
                                        <tr className="border-b-2 border-stone-300">
                                            <th className="text-left py-2 pr-4 font-semibold text-charcoal">App</th>
                                            <th className="text-left py-2 pr-4 font-semibold text-charcoal">Monthly Cost</th>
                                            <th className="text-left py-2 font-semibold text-charcoal">What it adds to every page</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-700">
                                        <tr className="border-b border-stone-100">
                                            <td className="py-2 pr-4">Tidio Live Chat</td>
                                            <td data-label="Monthly Cost" className="py-2 pr-4">$19 to $49/mo</td>
                                            <td data-label="What it adds to every page" className="py-2">120 to 150KB of JavaScript, even when chat is closed</td>
                                        </tr>
                                        <tr className="border-b border-stone-100">
                                            <td className="py-2 pr-4">Privy (pop-ups, email capture)</td>
                                            <td data-label="Monthly Cost" className="py-2 pr-4">$30/mo+</td>
                                            <td data-label="What it adds to every page" className="py-2">80 to 100KB, delays page interactivity by 0.5 to 1 second</td>
                                        </tr>
                                        <tr className="border-b border-stone-100">
                                            <td className="py-2 pr-4">Wix Chat (free)</td>
                                            <td data-label="Monthly Cost" className="py-2 pr-4">Free</td>
                                            <td data-label="What it adds to every page" className="py-2">~80KB on every page, even product pages with no chat widget visible</td>
                                        </tr>
                                        <tr className="border-b border-stone-100">
                                            <td className="py-2 pr-4">Social media feed widgets</td>
                                            <td data-label="Monthly Cost" className="py-2 pr-4">$10 to $20/mo</td>
                                            <td data-label="What it adds to every page" className="py-2">Loads Instagram/Facebook API on every page whether the feed is visible or not</td>
                                        </tr>
                                        <tr className="border-b border-stone-100">
                                            <td className="py-2 pr-4">Elfsight widgets (reviews, counters)</td>
                                            <td data-label="Monthly Cost" className="py-2 pr-4">$5 to $25/mo per widget</td>
                                            <td data-label="What it adds to every page" className="py-2">Each widget adds a separate external script request</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4">Wix Bookings / Wix Events</td>
                                            <td data-label="Monthly Cost" className="py-2 pr-4">Included in plan</td>
                                            <td data-label="What it adds to every page" className="py-2">Loads scheduling code on all pages, not just the booking page</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-stone-600 text-sm mt-3">
                                If you have 5 of these installed, you are paying $100 to $150/month and adding 500KB+ of extra JavaScript on top of Wix's own platform code. Removing apps you do not actively use is the fastest single improvement available to you on Wix.
                            </p>
                        </div>

                        <div className="border border-stone-200 rounded-xl p-6">
                            <h3 className="font-bold text-charcoal mb-2">Limit animations and keep sections under 20</h3>
                            <p className="text-stone-700 text-sm leading-relaxed">
                                Each Wix animation runs a separate JavaScript execution when the page loads. Three animations on a page are manageable. Fifteen animations and a mid-range Android phone stalls for 2 to 3 seconds before anything becomes clickable. On mobile, 87% of visitors who wait more than 2 seconds to click something leave. Beyond animations, each page section adds DOM nodes. More than 20 sections and Google's PageSpeed tool flags your page, which drops your score by 5 to 15 points and reduces how often you appear in search results.
                            </p>
                        </div>
                    </div>

                    {/* Mid CTA */}
                    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 my-8 md:my-12 text-center">
                        <Zap className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-3">Your Wix Site Can Score 95+ on Google (PageSpeed)</h2>
                        <p className="text-[var(--muted)] mb-6 max-w-lg mx-auto">
                            We migrate Wix sites to custom Next.js. The result: 95 to 100 on Google&apos;s speed test (PageSpeed). Under 1-second load time. Vercel hosting that starts free and only scales to $20/month when your business grows. Founder engagements start at $500. Most 10 to 30 page migrations land in our $3,500 Growth tier. If the new site does not score 95 or higher, you do not pay the balance.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-colors">
                            Get Your Free Speed Audit
                            <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {/* H2 6 */}
                    <BlogHeader>Wix vs Custom Next.js: Real Performance Comparison</BlogHeader>
                    <BlogText>
                        Here is what the performance difference looks like in practice. This comparison is based on recent Wix to Next.js migrations, including Obare Magazine, a publication we rebuilt off Wix into a Next.js frontend with Sanity as the editor CMS in a 7-day turnaround. The before numbers are from Google PageSpeed Insights on the live Wix site before migration. The after numbers are from the same tool after the new site went live on Vercel.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 my-4">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="border-b border-[var(--border)]">
                                    <th className="text-left py-3 px-4 font-semibold">Metric</th>
                                    <th className="text-center py-3 px-4 font-semibold text-red-600">Wix (Before)</th>
                                    <th className="text-center py-3 px-4 font-semibold text-emerald-600">Next.js (After)</th>
                                    <th className="text-center py-3 px-4 font-semibold">Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">Google Score (Mobile)</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">54 to 67</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">95 to 100</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">+40 pts avg</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">LCP (mobile)</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">4.8 to 7.2s</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">0.6 to 1.0s</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">6x faster</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">FCP (mobile)</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">2.9 to 4.1s</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">0.4 to 0.7s</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">5x faster</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">JavaScript Payload</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">400 to 700KB</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">40 to 80KB</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">90% less</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">Core Web Vitals</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">FAIL</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">PASS</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">All 3 pass</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">Monthly Hosting Cost</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">$17 to $49/mo</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">$0/mo, $20 when you scale</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">60-100% savings</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">Platform Lock-in</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">Complete</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">None</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">Full ownership</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="py-3 px-4 font-medium">Can You Export the Site?</td>
                                    <td data-label="Wix (Before)" className="py-3 px-4 text-center text-red-600">No</td>
                                    <td data-label="Next.js (After)" className="py-3 px-4 text-center text-emerald-600">Yes (you own it)</td>
                                    <td data-label="Change" className="py-3 px-4 text-center text-emerald-600">Full portability</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        The JavaScript payload difference is the core of the speed story. Custom Next.js sites with static generation output 40 to 80KB of JavaScript per page. Wix sites carry 400 to 700KB. That is a 90% reduction. The browser has less to download, less to parse, and less to execute before the page becomes interactive.
                    </BlogText>
                    <BlogText>
                        The hosting cost difference is also worth noting. Wix&apos;s Business and eCommerce plans run $17 to $49 per month. A custom site on Vercel starts free and only scales to $20 per month when your business grows. Over three years, that is still hundreds to over a thousand dollars in platform fees saved, not counting the revenue lost from slower conversion rates during that period.
                    </BlogText>

                    {/* H2 7 — High buyer intent */}
                    <BlogHeader>Should You Stay on Wix or Move On?</BlogHeader>
                    <BlogText>
                        If you have read this far, you are probably weighing this decision right now. Here is a straight answer based on what we see from businesses who contact us after hitting the Wix ceiling.
                    </BlogText>

                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                        <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
                            <h3 className="font-bold text-charcoal mb-4">Stay on Wix if:</h3>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span>Your site is purely informational with no product sales, bookings, or form conversions</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span>You are scoring 75 or above on Google&apos;s speed test (PageSpeed) already (you are in the optimized minority)</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span>You get the majority of your business through direct referrals, not Google search or paid ads</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span>You built it recently and are not yet hitting any of the problems described above</span></li>
                            </ul>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                            <h3 className="font-bold text-charcoal mb-4">Move on from Wix if:</h3>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /><span>Your Google score (PageSpeed) is under 70 on mobile and you have already tried the optimizations in this post</span></li>
                                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /><span>You sell products or services online and your cart abandonment or booking drop-off feels high</span></li>
                                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /><span>You rely on Google for traffic and your rankings have been flat or declining despite publishing regularly</span></li>
                                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /><span>You are spending $30 to $150/month on Wix apps and still not getting the features or speed you need</span></li>
                                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /><span>You have outgrown the design constraints and need custom functionality Wix cannot provide</span></li>
                            </ul>
                        </div>
                    </div>

                    <BlogText>
                        The honest answer for most businesses reading this post: if speed and Google rankings matter to your revenue, Wix has a structural ceiling that no optimization gets around. The question is not whether to move, but when. The longer you stay, the more revenue the speed gap costs, and the more your competitors on faster platforms pull ahead.
                    </BlogText>

                    {/* H2 8 */}
                    <BlogHeader>How We Migrate Wix Sites to Next.js (Starting at $500)</BlogHeader>
                    <BlogText>
                        The main thing that stops business owners from leaving Wix is the migration process. Wix does not have an export button. There is no plugin that moves your design to another platform. Every page needs to be rebuilt. Engagements start at $500 for a Founder scope. Most 10 to 30 page Wix migrations land in our $3,500 Growth tier.
                    </BlogText>
                    <BlogText>
                        Here is exactly what that includes.
                    </BlogText>

                    <BlogList items={[
                        "Design transfer: We build your new site to match the look and feel of your existing Wix site. You keep your brand identity, your color scheme, your layout. The code underneath changes; the appearance does not.",
                        "Content migration: All of your text content, images, and media transfer to the new site. If you have a blog, all posts move over. If you have a product catalog, all products move over.",
                        "301 redirects: Every URL on your Wix site gets a permanent redirect to its equivalent on the new site. This preserves your Google rankings, backlinks, and any existing SEO value you have built.",
                        "DNS cutover: We handle the domain transfer from pointing to Wix to pointing to the new Vercel deployment. Zero downtime. You stay on Wix until the new site is fully tested and ready.",
                        "Post-launch monitoring: We watch the new site for one week after launch. Any issues that come up get fixed immediately.",
                        "Google score guarantee: If the new site does not score 95 or higher on Google PageSpeed Insights, you do not pay the balance. 30% upfront, the rest when you are satisfied with the results."
                    ]} />

                    <BlogText>
                        We have completed this process on Wix sites, WordPress sites, Squarespace sites, and Webflow sites. The result is always the same: a score between 95 and 100, a load time under 1 second, and $0 per month in ongoing platform fees. If you are also evaluating a{" "}
                        <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline">Webflow migration</Link>, the cost breakdown and process are similar.
                    </BlogText>
                    <BlogText>
                        The migration takes 3 to 4 weeks for a typical 10 to 30 page Wix site. Larger sites with more pages and complex layouts take 4 to 6 weeks. You get a staging preview before anything goes live.
                    </BlogText>

                    {/* Key Takeaways */}
                    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 my-6 md:my-10" data-speakable="true">
                        <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                            <TrendingDown className="w-5 h-5 text-amber-400" />
                            Key Takeaways
                        </h2>
                        <ol className="space-y-3 text-[var(--muted)] text-sm">
                            <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">1.</span><span>Wix loads 200 to 400KB of mandatory platform JavaScript on every page. This code cannot be removed and is the primary cause of slow load times on Wix websites.</span></li>
                            <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">2.</span><span>48% of Wix sites fail Core Web Vitals. The best-case Google score (PageSpeed) on mobile with full optimization is around 83. Custom Next.js sites consistently reach 95 to 100.</span></li>
                            <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">3.</span><span>Wix Studio is measurably slower than the standard editor. Blog pages regularly load in 15+ seconds on mobile. Lazy loading is broken in Studio as of early 2026.</span></li>
                            <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">4.</span><span>A 2-second mobile delay causes 87% cart abandonment. If you are running an e-commerce store on Wix, this is directly reducing your revenue every day the site stays slow.</span></li>
                            <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">5.</span><span>Leaving Wix requires a complete rebuild because Wix does not export design or layout files. We do the full rebuild for $500 with a 95+ Google score guarantee or you do not pay.</span></li>
                        </ol>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 my-6 md:my-10 text-center">
                        <h2 className="text-2xl font-bold mb-3">Stop Optimizing. Start Migrating.</h2>
                        <p className="text-[var(--muted)] mb-6 max-w-xl mx-auto text-sm">
                            You have hit the Wix ceiling. No more optimization is going to get you to 95. The only path to a fast Wix site is a site that is not on Wix. We migrate you for $500, guarantee a 95+ Google score (PageSpeed), and host it on Vercel starting free (you only scale to $20/month when your business grows). Book a free 20-minute call to see exactly what the migration would involve for your site.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <CalModalButton className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-colors">
                                Book Free 20-Minute Call
                                <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                            <Link href="/blog/squarespace-too-slow" className="inline-flex items-center gap-2 border border-[var(--border)] hover:border-amber-500/50 px-6 py-3 rounded-xl transition-colors text-sm">
                                Compare: Squarespace Speed Issues
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Internal links */}
                    <div className="border-t border-[var(--border)] pt-8 mt-8 mb-6">
                        <p className="text-sm text-[var(--muted)] mb-4">Related reading:</p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/blog/wix-vs-custom-website" className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4">Wix vs custom website</Link>
                            <Link href="/blog/squarespace-too-slow" className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4">Squarespace speed problems</Link>
                            <Link href="/blog/core-web-vitals-explained" className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4">Core Web Vitals explained</Link>
                            <Link href="/blog/wordpress-vs-nextjs" className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4">WordPress vs Next.js comparison</Link>
                            <Link href="/blog/how-to-achieve-100-pagespeed" className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4">How to achieve 100/100 PageSpeed</Link>
                            <Link href="/blog/why-competitor-outranks-you" className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4">Why your competitor outranks you</Link>
                        </div>
                    </div>

                    <FAQAccordion faqs={postFAQs} />

                    <RelatedPosts currentPostId="wix-too-slow" category="Wix" />

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Lead Full-Stack Engineer"
                        date="April 6, 2026"
                        readTime="12 min read"
                    />

                </article>
            </main>
            <Footer />
        </>
    );
}