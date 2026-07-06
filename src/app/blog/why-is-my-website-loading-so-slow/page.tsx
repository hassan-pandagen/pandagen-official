import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "why-is-my-website-loading-so-slow")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Why Is My Website Loading So Slow? 12 Fixes",
    description: "Your site is slow because images, scripts, hosting, or the platform itself is making visitors wait. 12 root causes, free tools, and fixes that work.",
    alternates: { canonical: "/blog/why-is-my-website-loading-so-slow" },
    keywords: [
        "why is my website loading so slow",
        "website loading slow",
        "how to fix slow website",
        "website speed fix",
        "slow website causes",
        "website performance optimization",
        "core web vitals fix",
        "website speed test",
        "how to speed up website",
        "slow website revenue impact",
        "website loading too slow",
        "fix slow loading website"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Why Is My Website Loading So Slow? 12 Causes and Fast Fixes",
        description: "12 root causes of slow websites, free diagnostic tools, 8 step-by-step fixes, and when a rebuild makes more financial sense than optimization.",
        type: "article",
        publishedTime: "2026-05-13T00:00:00-05:00",
        modifiedTime: "2026-05-13T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Why Is My Website Loading So Slow? 12 Causes and Fast Fixes",
        description: "12 root causes, free diagnostic tools, 8 fixes, and when to rebuild instead of optimize.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#article",
            "headline": "Why Is My Website Loading So Slow? 12 Causes and Fast Fixes",
            "description": "Your site is slow because images, scripts, hosting, or the platform itself is making visitors wait. 12 root causes, diagnostic tools, step-by-step fixes, and when a rebuild beats optimization.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-05-13T00:00:00-05:00",
            "dateModified": "2026-05-13T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow" },
            "articleSection": "Performance",
            "keywords": ["slow website fix", "website loading slow", "core web vitals", "website speed optimization", "how to fix slow website"],
            "timeRequired": "PT14M",
            "wordCount": 3600,
            "about": [
                { "@type": "Thing", "name": "Website Speed Optimization" },
                { "@type": "Thing", "name": "Core Web Vitals" },
                { "@type": "Thing", "name": "Website Performance" },
                { "@type": "Thing", "name": "Page Load Time" }
            ],
            "inLanguage": "en-US",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Think With Google: Mobile Page Speed", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed and Revenue Research", "url": "https://portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "GTmetrix Speed Testing Tool", "url": "https://gtmetrix.com/" },
                { "@type": "CreativeWork", "name": "WebPageTest Performance Tool", "url": "https://webpagetest.org/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Why Is My Website Loading So Slow", "item": "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#webpage",
            "url": "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow",
            "name": "Why Is My Website Loading So Slow? 12 Causes and Fast Fixes",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-05-13T00:00:00-05:00",
            "dateModified": "2026-05-13T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "email": "info@pandacodegen.com",
            "foundingDate": "2026",
            "areaServed": "Worldwide"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/why-is-my-website-loading-so-slow#faq",
            "mainEntity": postFAQs.map((faq: { question: string; answer: string }) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function WhyWebsiteSlowPage() {
    return (
        <main className="min-h-screen bg-paper text-charcoal overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
            <Header />

            <article className="pt-28 md:pt-32 pb-12 md:pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Why Is My Website Loading So Slow" }]} />
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-charcoal hover:text-cognac transition mt-4 mb-8">
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>
                        <div className="mb-6">
                            <span className="inline-block bg-cognac/10 text-cognac text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Performance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-6">
                            Why Is My Website Loading So Slow? <span className="font-serif italic text-cognac">12 Causes and Fast Fixes</span>
                        </h1>
                        <BlogAuthor name="Hassan Jamal" role="Founder, PandaCodeGen" date="May 13, 2026" readTime="14 min read" />
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-8 md:mt-12">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-10">

                        <p className="text-stone-700 leading-relaxed mb-6 text-lg" data-speakable="true">Your site is slow because something on it — images, scripts, hosting, or the platform itself — is making visitors wait. Every second of that wait costs you conversions, rankings, and ad efficiency. This guide covers how to <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline">diagnose the problem</Link>, the 12 most common causes, and the fixes that actually work, including when optimization hits a ceiling and a rebuild makes more financial sense.</p>

                        <div className="mb-12"><PageSpeedAnimation /></div>

                        <div className="space-y-8">

                            <BlogHeader>How to Tell if Your Website Is Actually Slow</BlogHeader>

                            <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl" data-speakable="true">
                                <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                                <p className="text-sm text-stone-700 leading-relaxed">A slow website is usually caused by unoptimized large media files, lack of caching, slow web hosting, or too many plugins and external scripts. If your site takes more than 3 seconds to load, visitors are leaving before they see your content. The modern standard is under 1 second. Sites above 3 seconds see bounce rates climb, ad costs rise, and Google start favoring faster competitors.</p>
                            </div>

                            <BlogText>
                                Google measures speed through <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals</Link>, three metrics that determine whether your site passes or fails in search rankings:
                            </BlogText>

                            <ul className="space-y-3 my-4 text-stone-700 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cognac mt-2 flex-shrink-0"></span>
                                    <span><strong>Largest Contentful Paint (LCP):</strong> how long until the main content appears. Target: under 2.5 seconds.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cognac mt-2 flex-shrink-0"></span>
                                    <span><strong>Interaction to Next Paint (INP):</strong> how quickly the site responds when someone clicks or taps. Target: under 200 milliseconds.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cognac mt-2 flex-shrink-0"></span>
                                    <span><strong>Cumulative Layout Shift (CLS):</strong> how much the page jumps around while loading. Target: under 0.1.</span>
                                </li>
                            </ul>

                            <BlogText>
                                If your LCP is above 4 seconds, your INP is above 200ms, or your CLS is above 0.25, Google considers your site to have poor user experience. That directly affects rankings and <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">confirmed ranking factor</Link> status means your competitors with faster sites outrank you even with equivalent content.
                            </BlogText>

                            <BlogHeader>How to Test Your Website Speed</BlogHeader>

                            <BlogText>
                                Before diagnosing anything, you want a baseline. Free tools give you actionable diagnostics in under 60 seconds.
                            </BlogText>

                            <div className="overflow-x-auto my-6">
                                <div className="text-xs text-stone-500 mb-2 md:hidden">Scroll to see full table</div>
                                <table className="min-w-[560px] w-full border-collapse border border-stone-300 text-sm">
                                    <thead>
                                        <tr className="bg-stone-100">
                                            <th className="p-3 text-left font-bold border border-stone-300">Tool</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Best For</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="p-3 border border-stone-300 font-medium"><a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google PageSpeed Insights</a></td><td className="p-3 border border-stone-300">Mobile vs desktop scores, Core Web Vitals</td><td className="p-3 border border-stone-300 text-emerald-700">Free</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium"><a href="https://gtmetrix.com/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">GTmetrix</a></td><td className="p-3 border border-stone-300">Waterfall chart showing which files load slowest</td><td className="p-3 border border-stone-300 text-emerald-700">Free</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Pingdom Tools</td><td className="p-3 border border-stone-300">Testing from multiple global locations</td><td className="p-3 border border-stone-300 text-emerald-700">Free</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium"><a href="https://webpagetest.org/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">WebPageTest</a></td><td className="p-3 border border-stone-300">Filmstrip view of exactly when content appears</td><td className="p-3 border border-stone-300 text-emerald-700">Free</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Chrome DevTools Lighthouse</td><td className="p-3 border border-stone-300">Running audits locally without signup</td><td className="p-3 border border-stone-300 text-emerald-700">Free</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <BlogText>
                                Run PageSpeed Insights on your homepage, your most important service page, and a blog post. They often score differently. A score below 50 is poor. A <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">score of 90+</Link> is where you want to be. The mobile score is the one that affects your Google rankings.
                            </BlogText>

                            <BlogHeader>12 Common Reasons Your Website Loads So Slow</BlogHeader>

                            <BlogText>
                                The causes fall into four categories: media issues, server issues, code bloat, and third-party scripts. Most slow sites have problems in at least two of these categories simultaneously.
                            </BlogText>

                            <div className="overflow-x-auto my-6">
                                <div className="text-xs text-stone-500 mb-2 md:hidden">Scroll to see full table</div>
                                <table className="min-w-[560px] w-full border-collapse border border-stone-300 text-sm">
                                    <thead>
                                        <tr className="bg-stone-100">
                                            <th className="p-3 text-left font-bold border border-stone-300">Category</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Common Culprits</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Impact Level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Media</td><td className="p-3 border border-stone-300">Unoptimized images, autoplay video</td><td className="p-3 border border-stone-300 text-red-600">High</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Server</td><td className="p-3 border border-stone-300">Cheap hosting, no CDN, no caching</td><td className="p-3 border border-stone-300 text-red-600">High</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Code</td><td className="p-3 border border-stone-300">Page builders, unminified JS/CSS</td><td className="p-3 border border-stone-300 text-amber-700">Medium-High</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Third Party</td><td className="p-3 border border-stone-300">Plugins, ads, chat widgets</td><td className="p-3 border border-stone-300 text-amber-700">Medium</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">1. Cheap or Overloaded Hosting</h3>
                            <BlogText>
                                Shared hosting means your site competes for CPU and RAM with hundreds of other sites on the same server. When traffic spikes, your site gets queued behind others. A site that loads fine at 2am can crawl at noon. The difference between a $5/month shared plan and a $25/month managed plan can be 200 to 500 milliseconds of server response time on every request.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">2. Server Located Far From Your Visitors</h3>
                            <BlogText>
                                Physical distance creates latency. If your server is in Texas and your visitors are in London, every request has to travel thousands of miles. That round trip adds 100 to 300 milliseconds per request, and a typical page makes 50 to 100 requests. CDNs exist to solve this problem by storing copies of your site on servers worldwide.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">3. Heavy Unoptimized Images and Videos</h3>
                            <BlogText>
                                Images often account for over half of a page's total size. An unoptimized image is one that has not been compressed, is in the wrong format (PNG instead of WebP), or is larger than the dimensions it displays at. A 4000x3000 pixel image displayed at 400x300 pixels still downloads at full size unless you resize it. Autoplay videos on homepages are the second biggest offender.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">4. No Caching or Misconfigured Caching</h3>
                            <BlogText>
                                Without caching, the server has to rebuild the page from scratch on every visit. Browser caching stores assets locally so returning visitors load instantly. Server-side caching stores pre-built pages so the server does not have to regenerate them. If neither is configured, every visitor triggers a full page build.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">5. Missing CDN</h3>
                            <BlogText>
                                A CDN (Content Delivery Network) stores copies of your site on servers worldwide so visitors load from the nearest location. Without a CDN, a visitor in Sydney loads from your server in Virginia. The difference can be 500+ milliseconds per request. On a page with 80 requests, that adds up to several seconds of additional load time.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">6. Too Many HTTP Requests</h3>
                            <BlogText>
                                Every image, script, font, and stylesheet is a separate request. Each request has overhead regardless of file size. A typical WordPress site with a page builder can make 150+ requests. A well-optimized custom site makes 20 to 40. Even a 1KB file takes time to request, wait for, and receive.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">7. Render-Blocking JavaScript and CSS</h3>
                            <BlogText>
                                Render-blocking means files the browser has to download and process before showing any content. This creates the blank white screen effect while visitors wait. If your CSS and JavaScript files are not deferred or loaded asynchronously, the browser stops rendering until they finish downloading. On a slow connection, that can be 3 to 5 seconds of nothing.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">8. Too Many Plugins or Third-Party Apps</h3>
                            <BlogText>
                                Each plugin adds code, database queries, and often external requests. A <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">WordPress site with 30 plugins</Link> is running 30 separate pieces of software on every page load. Tools designed for ease of use often sacrifice speed. Drag-and-drop convenience comes at a performance cost.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">9. Bloated Code From Drag-and-Drop Page Builders</h3>
                            <BlogText>
                                <Link href="/blog/elementor-kills-seo" className="text-cognac hover:underline">Elementor</Link>, <Link href="/blog/divi-theme-slow" className="text-cognac hover:underline">Divi</Link>, Wix Editor, and Squarespace generate excessive nested HTML and CSS. What takes 10 lines of clean code can become 200+ lines in a page builder. This is structural. You cannot fully fix it with plugins or optimization tools. The bloat is baked into how the page was built.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">10. Third-Party Scripts, Ads, and Trackers</h3>
                            <BlogText>
                                Chat widgets, analytics, ad networks, and social embeds all load external JavaScript. Each script is outside your control and can block rendering. A single chat widget can add 500KB of JavaScript. A Facebook pixel, Google Analytics, and a live chat tool together can add 1 to 2 seconds of load time on their own.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">11. Traffic Spikes Your Stack Cannot Handle</h3>
                            <BlogText>
                                A viral post or sale event can overwhelm server capacity. If the architecture is not built for scale, response times collapse under load. Static sites on CDNs handle traffic spikes without slowdown because pages are pre-built and served from cache, not generated on demand.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">12. Outdated CMS or Platform Architecture</h3>
                            <BlogText>
                                Legacy WordPress themes, old PHP versions, and outdated Shopify Liquid themes carry technical debt. Platform architecture has a ceiling that plugins cannot overcome. This is the most overlooked cause of persistent slowness after all other optimizations have been applied.
                            </BlogText>

                            <BlogHeader>How a Slow Website Costs You Revenue and Rankings</BlogHeader>

                            <BlogText>
                                Speed ties directly to money. Here is where the damage shows up:
                            </BlogText>

                            <ul className="space-y-3 my-4 text-stone-700 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-cognac mt-1 flex-shrink-0" />
                                    <span><strong>Visitor abandonment:</strong> <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">53% of mobile visitors leave</a> before the page loads if it takes more than 3 seconds. Most of them never come back.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-cognac mt-1 flex-shrink-0" />
                                    <span><strong>Lower conversion rates:</strong> <a href="https://portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Portent&apos;s research</a> shows conversion rates drop 4.42% per second of additional load time. <a href="https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Deloitte</a> found a 0.1-second improvement alone lifts conversions by 8 percent.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-cognac mt-1 flex-shrink-0" />
                                    <span><strong>Google ranking penalties:</strong> <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">Core Web Vitals are a confirmed ranking factor</Link>. Sites with poor scores rank lower than faster sites with equivalent content.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-cognac mt-1 flex-shrink-0" />
                                    <span><strong>Higher ad costs:</strong> slow landing pages hurt Quality Score in Google Ads, which increases your cost per click. You pay more for the same traffic to a site that converts less.</span>
                                </li>
                            </ul>

                            {/* Mid CTA */}
                            <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                                <p className="font-bold text-charcoal mb-2">Not sure what is slowing your site down?</p>
                                <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. We run PageSpeed live on the call, identify the top 3 speed killers, and tell you whether fixes or a rebuild makes more financial sense.</p>
                                <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">Get Free Speed Audit <ArrowRight className="w-4 h-4" /></CalModalButton>
                            </div>

                            <BlogHeader>How to Fix a Slow Website Fast</BlogHeader>

                            <BlogText>
                                Start with the highest-impact changes and work down. Do step 1 first to get a baseline, then measure after each subsequent step.
                            </BlogText>

                            <div className="space-y-4 my-6">
                                {[
                                    { num: "1", title: "Run a Baseline Speed Audit", body: "Use PageSpeed Insights and GTmetrix to document your current score and load time. Write down your mobile PageSpeed score, your LCP, and your total page weight. You want a before number to measure improvement after each fix." },
                                    { num: "2", title: "Compress and Convert Images to WebP", body: "Use TinyPNG, Squoosh, or ShortPixel to compress images. Convert JPEGs and PNGs to WebP, a modern format 25 to 35 percent smaller than JPEG. Resize images to actual display dimensions before uploading. Enable lazy loading so images load as the user scrolls instead of all at once. This alone can cut initial page weight by 50 percent or more." },
                                    { num: "3", title: "Enable Browser and Server Caching", body: "For WordPress, WP Rocket and W3 Total Cache handle caching — see the full guide to fixing slow WordPress for additional methods. For other platforms, cache settings are usually available in the hosting panel. Set cache expiration so returning visitors load the site instantly from their browser cache." },
                                    { num: "4", title: "Install a Global CDN", body: "Cloudflare's free tier is sufficient for most sites and takes minutes to set up. It distributes your content globally so visitors load from a nearby server. Most sites see 100 to 400 millisecond improvement on international traffic after adding a CDN." },
                                    { num: "5", title: "Remove Unused Plugins and Third-Party Scripts", body: "Audit every plugin and delete anything not actively used. Check for scripts that load site-wide even though they are only used on specific pages. A chat widget that loads on every page but is only used on the contact page is wasting resources on every other page." },
                                    { num: "6", title: "Minify and Defer JavaScript and CSS", body: "Minifying removes whitespace and comments from code files. Deferring loads scripts after the page renders instead of blocking it. Most caching plugins include both options. For manual setups, Autoptimize handles both for WordPress." },
                                    { num: "7", title: "Upgrade Hosting or Move to Edge Rendering", body: "If your site is on shared hosting, managed WordPress hosting or static hosting like Vercel or Netlify may be better options. Edge rendering generates pages at servers closest to each visitor. This often requires architectural changes, not just switching hosts." },
                                    { num: "8", title: "Monitor Core Web Vitals Continuously", body: "Set up Google Search Console to track Core Web Vitals over time. Speed often degrades as more content and features are added. A plugin update or new tracking script can undo weeks of optimization work. Monthly monitoring catches regressions early." }
                                ].map((step) => (
                                    <div key={step.num} className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                                        <span className="flex-shrink-0 w-8 h-8 bg-cognac text-white font-bold rounded-full flex items-center justify-center text-sm">{step.num}</span>
                                        <div>
                                            <p className="font-bold text-charcoal mb-1">{step.title}</p>
                                            <p className="text-sm text-stone-700 leading-relaxed">{step.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <BlogHeader>When Optimization Stops Working and You Need a Rebuild</BlogHeader>

                            <BlogText>
                                There is a point where plugins and tweaks hit a ceiling. If the platform architecture is the problem, you cannot plugin your way out of it.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Your PageSpeed Score Stays Below 50 After Cleanup</h3>
                            <BlogText>
                                If you have done all the steps above and still score poorly, the platform itself is likely the bottleneck. WordPress with <Link href="/blog/elementor-kills-seo" className="text-cognac hover:underline">Elementor</Link>, <Link href="/blog/wix-too-slow" className="text-cognac hover:underline">Wix</Link>, and <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline">Squarespace</Link> have architectural speed ceilings that no amount of optimization can overcome. See our <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">guide to hitting 90+ PageSpeed</Link> to understand what architecture actually achieves it.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Your Plugin Stack Costs More Than a Custom Rebuild</h3>
                            <BlogText>
                                Tally your monthly plugin or app fees. When those fees exceed the <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline">cost of a custom build</Link>, you are effectively paying for slowness indefinitely. A $200/month plugin stack over 3 years costs $7,200. A $3,500 custom build costs $3,500 once with $0/month in platform fees.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Your Platform Caps Your Core Web Vitals</h3>
                            <BlogText>
                                Some platforms — Wix, Squarespace, GoDaddy builders — have hard limits on what scores are achievable due to underlying code. No setting change, plugin, or optimization can break through the architecture ceiling. The only path past it is migrating to a faster stack.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">You Are Losing Rankings to Faster Competitors</h3>
                            <BlogText>
                                If competitors load in under 1 second while your site loads in 3+ seconds, Google is more likely to <Link href="/blog/google-march-2026-update" className="text-cognac hover:underline">favor the faster sites</Link>. Speed acts as a tiebreaker when content and backlinks are equal. In competitive niches, that tiebreaker determines whether you are on page 1 or page 2.
                            </BlogText>

                            <BlogQuote>
                                If the platform is the bottleneck, the fix is not another plugin. It is a rebuild on architecture designed for speed from the start.
                            </BlogQuote>

                            {/* Bottom CTA */}
                            <div className="my-10 md:my-12 p-6 md:p-8 bg-charcoal text-white rounded-2xl text-center">
                                <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">PandaCodeGen</p>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">Get a Sub-Second Website</h3>
                                <p className="text-stone-300 mb-5 max-w-xl mx-auto">PandaCodeGen replaces slow WordPress, Shopify, Wix, Squarespace, and drag-and-drop sites with custom Next.js websites that load under 1 second. <Link href="/pricing" className="text-cognac hover:underline">Fixed pricing from $1,500</Link>, no monthly platform fees, no vendor lock-in.</p>
                                <ul className="space-y-2 mb-6 text-sm text-stone-300 text-left max-w-xs mx-auto">
                                    {["Sub-1-second load times", "90+ PageSpeed guaranteed or full refund", "$0 monthly platform fees", "100% code ownership"].map(item => (
                                        <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cognac flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                                <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-cognac hover:bg-cognac/90 text-white font-bold rounded-full transition-all">Book Free Migration Call <ArrowRight className="w-5 h-5" /></CalModalButton>
                            </div>

                            <BlogHeader>Frequently Asked Questions About Slow Websites</BlogHeader>

                        </div>

                        <FAQAccordion faqs={postFAQs} />

                        <div className="mt-8 mb-4">
                            <h2 className="text-xl font-bold text-charcoal mb-4">Related Articles</h2>
                            <div className="grid gap-3">
                                {[
                                    { href: "/blog/how-to-speed-up-your-website", label: "How to Speed Up Your Website in 2026 (12 Tactics)" },
                                    { href: "/blog/core-web-vitals-explained", label: "What Are Core Web Vitals and Why Do They Affect Revenue?" },
                                    { href: "/blog/how-website-speed-affects-seo", label: "How Website Speed Affects SEO Rankings" },
                                    { href: "/blog/wordpress-plugins-destroy-speed", label: "Are WordPress Plugins Slowing Down Your Site?" },
                                    { href: "/blog/how-to-achieve-100-pagespeed", label: "How to Hit 100/100 PageSpeed Score (Our Exact 8-Step Process)" },
                                    { href: "/blog/website-rebuild-cost-2026", label: "How Much Does a Website Rebuild Cost in 2026?" }
                                ].map(link => (
                                    <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-cognac hover:underline">
                                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <RelatedPosts currentPostId="why-is-my-website-loading-so-slow" />

                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
