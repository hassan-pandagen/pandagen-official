import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "shopify-store-speed-optimization")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Shopify Store Speed Optimization: What Actually Works (2026)",
    description: "Your Shopify store scores 35 on PageSpeed and speed apps are making it worse. This guide covers what actually moves the needle: 7 high-impact fixes, Core Web Vitals targets, the Liquid theme ceiling, and when headless is the only answer.",
    alternates: { canonical: "/blog/shopify-store-speed-optimization" },
    keywords: [
        "shopify store speed optimization",
        "shopify speed score",
        "shopify page speed",
        "how to speed up shopify store",
        "shopify core web vitals",
        "shopify image optimization",
        "shopify app speed impact",
        "shopify theme speed optimization",
        "shopify lazy loading",
        "google pagespeed shopify",
        "shopify mobile speed",
        "shopify liquid optimization",
        "shopify headless speed",
        "best shopify speed apps"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Shopify Store Speed Optimization: What Actually Works (2026)",
        description: "7 high-impact Shopify speed fixes, Core Web Vitals targets, the Liquid theme ceiling, and when a headless rebuild is the only path to 90+ PageSpeed.",
        type: "article",
        publishedTime: "2026-05-12T00:00:00-05:00",
        modifiedTime: "2026-05-12T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/shopify-store-speed-optimization",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shopify Store Speed Optimization: What Actually Works (2026)",
        description: "7 high-impact fixes, Core Web Vitals targets, the Liquid theme ceiling, and when headless is the only path to 90+ PageSpeed.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/shopify-store-speed-optimization#article",
            "headline": "Shopify Store Speed Optimization: What Actually Works (2026)",
            "description": "Your Shopify store scores 35 on PageSpeed and speed apps are making it worse. 7 high-impact fixes, Core Web Vitals targets, the Liquid theme ceiling, and when headless is the only answer.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-05-12T00:00:00-05:00",
            "dateModified": "2026-05-12T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/shopify-store-speed-optimization" },
            "articleSection": "Shopify",
            "keywords": ["shopify speed optimization", "shopify pagespeed", "shopify core web vitals", "shopify headless", "liquid theme performance"],
            "timeRequired": "PT18M",
            "wordCount": 4200,
            "about": [
                { "@type": "Thing", "name": "Shopify Speed Optimization" },
                { "@type": "Thing", "name": "Core Web Vitals" },
                { "@type": "Thing", "name": "Headless Commerce" },
                { "@type": "Thing", "name": "Liquid Theme Performance" }
            ],
            "inLanguage": "en-US",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Think With Google: Mobile Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed and Conversion Research", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" },
                { "@type": "CreativeWork", "name": "Shopify Help: Improving Online Store Performance", "url": "https://help.shopify.com/en/manual/online-store/web-performance/improving-web-performance" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-store-speed-optimization#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Shopify Store Speed Optimization", "item": "https://www.pandacodegen.com/blog/shopify-store-speed-optimization" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-store-speed-optimization#webpage",
            "url": "https://www.pandacodegen.com/blog/shopify-store-speed-optimization",
            "name": "Shopify Store Speed Optimization: What Actually Works (2026)",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-05-12T00:00:00-05:00",
            "dateModified": "2026-05-12T00:00:00-05:00",
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
            "@id": "https://www.pandacodegen.com/blog/shopify-store-speed-optimization#faq",
            "mainEntity": postFAQs.map((faq: { question: string; answer: string }) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function ShopifySpeedOptimizationPage() {
    return (
        <main className="min-h-screen bg-paper text-charcoal overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
            <Header />

            <article className="pt-28 md:pt-32 pb-12 md:pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Shopify Store Speed Optimization" }]} />
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-charcoal hover:text-cognac transition mt-4 mb-8">
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>
                        <div className="mb-6">
                            <span className="inline-block bg-cognac/10 text-cognac text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Shopify</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-6">
                            Shopify Store Speed Optimization: <span className="font-serif italic text-cognac">What Actually Works</span>
                        </h1>
                        <BlogAuthor name="Hassan Jamal" role="Founder, PandaCodeGen" date="May 12, 2026" readTime="18 min read" />
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-8 md:mt-12">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-10">

                        <p className="text-stone-700 leading-relaxed mb-6 text-lg" data-speakable="true">Your Shopify store&apos;s speed score sits at 35, your ads are bleeding money, and every speed optimization app you have installed has somehow made things worse. The irony isn&apos;t lost on you. Most Shopify speed advice recycles the same generic tips without acknowledging the hard ceiling built into Liquid themes — or the fact that some fixes actively hurt performance. This guide covers <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">what actually moves the needle</Link>: the specific changes that improve PageSpeed scores, the common mistakes that backfire, and when optimization hits a wall that only a headless rebuild can break through.</p>

                        <div className="mb-12"><PageSpeedAnimation /></div>

                        <div className="space-y-8">

                            <BlogHeader>Why Shopify Speed Optimization Drives Revenue</BlogHeader>

                            <BlogText>
                                Speed affects revenue directly and on multiple channels simultaneously. On organic search, <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google&apos;s Core Web Vitals</a> are a direct ranking factor, so slow stores get buried below faster competitors ranking for the same keywords. On paid advertising, faster pages earn higher Quality Scores, which translates to lower cost-per-click on Meta and Google Ads.
                            </BlogText>

                            <ul className="space-y-3 my-4 text-stone-700 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cognac mt-2 flex-shrink-0"></span>
                                    <span><strong>Conversion impact:</strong> <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google&apos;s research</a> shows a 3-second load time loses more than half of mobile visitors before they see a single product. Every second above 1 second costs you customers at checkout.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cognac mt-2 flex-shrink-0"></span>
                                    <span><strong>SEO penalty:</strong> Google measures page speed through Core Web Vitals and uses it to rank your store against competitors with equivalent content. Slow stores consistently rank 3 to 8 positions lower than faster stores on the same keywords.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cognac mt-2 flex-shrink-0"></span>
                                    <span><strong>Ad efficiency:</strong> Landing page speed is one of three factors in Google&apos;s Quality Score. A slow page drops your score, raises your cost per click, and reduces ad placement. The same ad spend delivers fewer leads to a 45 PageSpeed store than to a 95 PageSpeed store.</span>
                                </li>
                            </ul>

                            <BlogText>
                                <a href="https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Deloitte&apos;s research</a> found a 0.1-second improvement in load time increases conversions by 8%. A store doing $50,000 per month with a 1 percent conversion lift from speed improvements gains $500 per month. The gap between a Shopify store loading at 4 seconds and one loading at under 1 second is not cosmetic — it is the difference between a business that compounds and one that plateaus. See the <Link href="/blog/shopify-slow-losing-sales" className="text-cognac hover:underline">full revenue math on slow Shopify stores</Link>.
                            </BlogText>

                            <BlogHeader>What Counts as a Good Shopify Speed Score</BlogHeader>

                            <BlogText>
                                Shopify&apos;s built-in speed score and Google PageSpeed Insights measure different things. Shopify compares your store to other Shopify stores with similar features on a relative scale. Google PageSpeed measures absolute performance against web standards. You can score 60 on Shopify&apos;s dashboard and still fail Google&apos;s Core Web Vitals because you are being benchmarked against other slow stores.
                            </BlogText>

                            <div className="overflow-x-auto my-6">
                                <div className="text-xs text-stone-500 mb-2 md:hidden">Scroll to see full table →</div>
                                <table className="min-w-[560px] w-full border-collapse border border-stone-300 text-sm">
                                    <thead>
                                        <tr className="bg-stone-100">
                                            <th className="p-3 text-left font-bold border border-stone-300">Metric</th>
                                            <th className="p-3 text-left font-bold border border-stone-300 text-red-700">Poor</th>
                                            <th className="p-3 text-left font-bold border border-stone-300 text-amber-700">Acceptable</th>
                                            <th className="p-3 text-left font-bold border border-stone-300 text-emerald-700">Good</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Shopify Speed Score</td><td className="p-3 border border-stone-300 text-red-600">Below 30</td><td className="p-3 border border-stone-300 text-amber-700">30 to 50</td><td className="p-3 border border-stone-300 text-emerald-700">50+</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Google PageSpeed (Mobile)</td><td className="p-3 border border-stone-300 text-red-600">Below 50</td><td className="p-3 border border-stone-300 text-amber-700">50 to 89</td><td className="p-3 border border-stone-300 text-emerald-700">90+</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Load Time</td><td className="p-3 border border-stone-300 text-red-600">4+ seconds</td><td className="p-3 border border-stone-300 text-amber-700">2 to 4 seconds</td><td className="p-3 border border-stone-300 text-emerald-700">Under 2 seconds</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <BlogText>
                                Mobile scores run 20 to 40 points lower than desktop on the same store because mobile devices have less processing power to run JavaScript. Since 60 to 70 percent of Shopify traffic comes from phones, mobile is the number that matters for your actual customers and for Google&apos;s rankings.
                            </BlogText>

                            <BlogHeader>How to Test Your Shopify Store Speed</BlogHeader>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Google PageSpeed Insights</h3>
                            <BlogText>
                                Enter your URL at <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">pagespeed.web.dev</a>. This is the industry standard and what Google actually uses for ranking signals. Test your homepage, a collection page, and a product page separately — they often score very differently because product pages carry more images and app-injected scripts.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Shopify Speed Score in the Admin</h3>
                            <BlogText>
                                Navigate to Online Store → Themes → Speed report. A score of 50 here means you are faster than half of comparable Shopify stores, not that you are actually fast in absolute terms. Use this as a relative benchmark, not a performance target.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">GTmetrix and WebPageTest</h3>
                            <BlogText>
                                GTmetrix shows waterfall charts that reveal exactly which scripts and images are slowing you down. WebPageTest lets you test from different geographic locations, which matters if you sell internationally and your CDN coverage varies by region.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Chrome DevTools and Real User Monitoring</h3>
                            <BlogText>
                                Lighthouse in Chrome DevTools runs the same tests as PageSpeed Insights on your local machine. Real user monitoring tracks what actual visitors experience, which often differs from lab tests by 1 to 2 seconds because lab tests use controlled conditions that do not reflect real device and network variability.
                            </BlogText>

                            <BlogHeader>What Actually Slows Down a Shopify Store</BlogHeader>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">App Bloat and Third-Party Scripts</h3>
                            <BlogText>
                                Every app you install injects JavaScript into your theme. Even after you uninstall an app, the code often stays behind in your theme files. Stores commonly have 15 to 30 apps installed when they only use 5 to 10. Each app adds HTTP requests and JavaScript execution time that compounds across the page load. See the <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline">full breakdown of what Shopify apps actually cost per month</Link> — both in fees and in performance.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Heavy Themes and Unused Liquid Code</h3>
                            <BlogText>
                                Liquid is Shopify&apos;s templating language. Premium themes often include features you never use — mega menus, product quick-views, animations — but the code still loads on every page. Older themes built before Online Store 2.0 lack modern performance optimizations entirely. The <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline">Dawn theme specifically scored 42 on mobile before optimization</Link> — we took it to 97.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Unoptimized Images and Video</h3>
                            <BlogText>
                                Images are typically the largest page weight on any Shopify store. Uploading full-resolution product photos straight from your camera without compression is the single most common performance mistake we see in audits. Autoplay videos on homepages and product pages are the second biggest offender — a single autoplay background video can add 3 to 8 seconds to mobile load time.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Render-Blocking JavaScript and CSS</h3>
                            <BlogText>
                                Render-blocking resources are scripts that the browser must load before it can display anything on screen. Your page might fully load in 2 seconds, but if the first paint takes 4 seconds because of blocking scripts, visitors see a blank white screen and leave before your content appears.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Tracking Pixels and Tag Managers</h3>
                            <BlogText>
                                Facebook Pixel, Google Analytics, Klaviyo, TikTok, Pinterest — each fires HTTP requests and runs JavaScript on every page load. A store with 8 tracking pixels can add 1 to 2 seconds of load time from tracking alone, before any product images or theme code has loaded.
                            </BlogText>

                            {/* Mid CTA */}
                            <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                                <p className="font-bold text-charcoal mb-2">Not sure what is slowing your store down?</p>
                                <p className="text-stone-600 mb-4 text-sm">Drop your store URL when you book. We run PageSpeed live on the call, identify the top 3 speed killers, and tell you exactly what is fixable within Shopify vs what requires a headless rebuild.</p>
                                <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">Get Free Shopify Speed Audit <ArrowRight className="w-4 h-4" /></CalModalButton>
                            </div>

                            <BlogHeader>High-Impact Shopify Speed Fixes That Actually Work</BlogHeader>

                            <div className="space-y-4 my-6">
                                {[
                                    { num: "1", title: "Audit and Remove Unused Apps", body: "Go to Settings → Apps and review everything installed. Uninstalling is not enough because leftover code often stays in your theme files. Check theme.liquid and other template files for orphaned scripts from apps you removed months ago. Every removed script reduces HTTP requests and JavaScript execution time." },
                                    { num: "2", title: "Compress and Serve Next-Gen Image Formats", body: "Shopify automatically serves WebP format, which is 25 to 35 percent smaller than JPEG. However, you still need to resize images before upload. Product images wider than 2,000px are wasting bandwidth. Use TinyPNG or Squoosh before uploading. Target: product images under 200KB, hero images under 300KB." },
                                    { num: "3", title: "Lazy Load Below-the-Fold Assets", body: "Lazy loading means images and videos only load when the user scrolls to them. Online Store 2.0 themes have this built in. Older themes require code changes to implement. This single change can improve initial page load by 0.5 to 1.5 seconds on image-heavy collection pages." },
                                    { num: "4", title: "Defer Non-Critical JavaScript", body: "The defer and async attributes tell browsers to load scripts without blocking page render. Analytics, chat widgets, and review apps are safe to defer. Checkout and cart functionality typically cannot be deferred without breaking the store. This reduces Total Blocking Time and improves INP scores." },
                                    { num: "5", title: "Preload Hero Images and Critical Fonts", body: "Preloading tells the browser to fetch assets early, before it would normally discover them. Focus on your above-the-fold hero image and primary brand font. System fonts like Arial and Helvetica are the fastest option since they already exist on the visitor's device and require zero HTTP requests." },
                                    { num: "6", title: "Switch to a Lightweight Performance Theme", body: "Dawn is Shopify's free reference theme and the Online Store 2.0 baseline for performance. Other fast options include Ride, Sense, and Craft. Online Store 2.0 architecture uses app blocks instead of injecting code directly into theme files, which makes future app removal cleaner." },
                                    { num: "7", title: "Consolidate Tracking Through Server-Side Tagging", body: "Server-side tagging moves pixel processing off the visitor's browser and onto a server you control. Google Tag Manager's server container handles this. Instead of 8 pixels each firing independently, you fire one request to your server which handles the rest. Typically reduces tracking overhead by 60 to 80 percent." }
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

                            <BlogHeader>Advanced Shopify Speed Optimization Tactics</BlogHeader>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Critical CSS and Above-the-Fold Rendering</h3>
                            <BlogText>
                                Critical CSS is the minimum styles needed to render visible content. Inlining critical CSS eliminates a render-blocking request and can shave 200 to 500ms off first paint. This is complex on Shopify themes and requires developer involvement, but it is one of the few advanced optimizations that reliably moves LCP scores past the 2.5-second threshold on Liquid themes.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Edge Caching and CDN Tuning</h3>
                            <BlogText>
                                Shopify already uses a CDN, but you can add Cloudflare as an additional layer for global stores. Proper cache headers ensure returning visitors load assets from cache rather than re-downloading everything. For stores with significant international traffic, the latency reduction from edge caching can be 100 to 400ms per page load.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Replacing Paid Apps With Native Code</h3>
                            <BlogText>
                                Custom code eliminates recurring app fees and improves speed simultaneously. A custom review display replaces Yotpo. Native upsells replace Rebuy. A custom subscription form replaces Recharge&apos;s widget. This requires a developer, but the ROI compounds monthly — both in eliminated app fees and in improved conversion rates from faster pages. See how <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline">Shopify app costs add up to $300 to $800 per month</Link>.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Going Headless With Next.js or Hydrogen</h3>
                            <BlogText>
                                Headless commerce means a custom frontend with Shopify as the backend for inventory, checkout, and orders. Hydrogen is Shopify&apos;s own framework. Next.js is the broader industry standard. Either removes Liquid theme limitations entirely and makes 90+ PageSpeed scores achievable without compromising functionality. <Link href="/blog/shopify-headless" className="text-cognac hover:underline">Headless Shopify on Next.js is how we cut load time from 4 seconds to 0.8 seconds</Link> for a store doing $1.2M per year.
                            </BlogText>

                            <BlogHeader>Optimizing Core Web Vitals for Shopify</BlogHeader>

                            <BlogText>
                                Core Web Vitals are <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google&apos;s specific performance metrics</a> that directly affect search rankings. All three must pass for full ranking benefit.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Largest Contentful Paint Under 2.5 Seconds</h3>
                            <BlogText>
                                LCP measures how long until the largest visible element loads — usually your hero image or main product photo. Target: under 2.5 seconds, ideally under 1.5 seconds. Preloading hero images and serving properly sized WebP files are the fastest fixes. On Shopify, the hero image is almost always the LCP element, which means image optimization has the highest direct impact on this metric.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Cumulative Layout Shift Below 0.1</h3>
                            <BlogText>
                                CLS measures visual stability — elements jumping around as the page loads. Common causes: images without explicit width and height attributes, late-loading fonts causing text to reflow, injected banners from apps, and ad units loading after page render. Target: below 0.1. Adding explicit width and height attributes to all images is the simplest fix and often moves CLS from failing to passing in one change.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Interaction to Next Paint Under 200 Milliseconds</h3>
                            <BlogText>
                                INP measures responsiveness to clicks and taps. INP replaced First Input Delay in 2024 as a Core Web Vital. Heavy JavaScript causes poor INP because the browser is too busy executing scripts to respond to user input. Target: under 200ms. Removing unused apps and deferring non-critical scripts are the highest-impact fixes. <Link href="/blog/shopify-plus-still-slow" className="text-cognac hover:underline">Even Shopify Plus stores consistently fail INP</Link> because the JavaScript overhead scales with plan tier, not the other way around.
                            </BlogText>

                            <BlogHeader>Optimizing Content Heavy Pages Including About Us Pages on Shopify</BlogHeader>

                            <BlogText>
                                About Us pages, lookbooks, and blog posts on Shopify frequently score 20 to 30 points lower than product pages on the same store. These pages often contain excessive lifestyle photography, embedded videos, and custom sections that were built for visual impact without any performance consideration.
                            </BlogText>

                            <BlogList items={[
                                "Limit image count: Use galleries instead of inline images scattered through text blocks. A gallery with 12 images loads faster than 12 individual image blocks.",
                                "Compress lifestyle photography: Lifestyle shots are often larger than product shots because they come from professional shoots and are uploaded at full resolution. A single lifestyle hero can be 8MB or more.",
                                "Avoid embedded video autoplay: Use click-to-play or thumbnail placeholders instead. A YouTube embed with autoplay loads the entire YouTube JavaScript library on your page.",
                                "Minimize custom sections: Each section adds Liquid rendering overhead. An About Us page with 15 custom sections is performing 15 Liquid template renders before serving the HTML."
                            ]} />

                            <BlogHeader>Shopify Speed Optimization Mistakes to Avoid</BlogHeader>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Installing a Speed Booster App</h3>
                            <BlogText>
                                The irony: an app to fix app bloat adds more code. Most speed apps use perception tricks like preloading on hover rather than actual optimization. Some inject more JavaScript than they save. If your store is slow because of too many apps, adding another app to fix the problem is the definition of counterproductive.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Compressing Images Without Resizing Them</h3>
                            <BlogText>
                                Compression alone is not enough if the source image is 5,000px wide. A compressed 5,000px image is still larger than a properly sized 2,000px image. The correct order is: resize to actual display dimensions first, then compress. Skipping the resize step is the most common image optimization mistake.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Ignoring Mobile Performance</h3>
                            <BlogText>
                                Mobile traffic is typically 60 to 70 percent of Shopify store visits. Desktop scores are meaningless if mobile fails. A 95 desktop score with a 45 mobile score means the majority of your visitors are experiencing your store at its worst. Test mobile first, always. Google indexes mobile first, always.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Switching Themes Without Auditing Apps</h3>
                            <BlogText>
                                A new theme will not fix app bloat. Apps modify your store at the platform level — their scripts re-inject into any new theme you install because they operate through Shopify&apos;s app block system. Audit and remove unused apps before migrating themes, or you will discover the same performance problems on your new theme within days.
                            </BlogText>

                            <BlogHeader>The Liquid Theme Ceiling and When to Go Headless</BlogHeader>

                            <BlogText>
                                Even a perfectly optimized Liquid theme has a performance ceiling. Shopify&apos;s server-side rendering constraints, mandatory platform scripts, and Liquid&apos;s templating overhead create a floor you cannot optimize below. Most Liquid themes cap around 65 to 80 on mobile PageSpeed regardless of optimization effort.
                            </BlogText>

                            <BlogQuote>
                                We have audited 40+ Shopify stores. The highest mobile PageSpeed score we have seen on a real, functioning Liquid theme with apps, tracking, and live products is 78. The median for stores doing over $500K per year is 42.
                            </BlogQuote>

                            <BlogText>
                                Headless makes sense when any of these apply:
                            </BlogText>

                            <BlogList items={[
                                "High traffic stores: Where milliseconds matter at scale. A 100ms improvement on 10,000 daily sessions has a different ROI than on 100 sessions.",
                                "Complex customization needs: That exceed what Liquid themes can support without adding more apps.",
                                "App dependency: Where you are paying $500+ per month in apps that could be replaced with custom code.",
                                "Brand differentiation: When you need a storefront that does not look or perform like standard Shopify."
                            ]} />

                            <BlogHeader>Shopify Speed Optimization Cost and ROI</BlogHeader>

                            <div className="overflow-x-auto my-6">
                                <div className="text-xs text-stone-500 mb-2 md:hidden">Scroll to see full table →</div>
                                <table className="min-w-[560px] w-full border-collapse border border-stone-300 text-sm">
                                    <thead>
                                        <tr className="bg-stone-100">
                                            <th className="p-3 text-left font-bold border border-stone-300">Approach</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Typical Cost</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Expected Outcome</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Ongoing Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="p-3 border border-stone-300 font-medium">DIY optimization</td><td className="p-3 border border-stone-300">$0</td><td className="p-3 border border-stone-300">10 to 20 point improvement</td><td className="p-3 border border-stone-300">$0</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Freelancer</td><td className="p-3 border border-stone-300">$100 to $500</td><td className="p-3 border border-stone-300">15 to 30 point improvement</td><td className="p-3 border border-stone-300">$0</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Shopify Expert agency</td><td className="p-3 border border-stone-300">$1,000 to $5,000</td><td className="p-3 border border-stone-300">20 to 40 point improvement</td><td className="p-3 border border-stone-300">Possible retainer</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Theme replacement</td><td className="p-3 border border-stone-300">$0 to $350</td><td className="p-3 border border-stone-300">20 to 50 point improvement</td><td className="p-3 border border-stone-300">$0</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Headless rebuild (Next.js)</td><td className="p-3 border border-stone-300">$5,000 to $10,000+</td><td className="p-3 border border-stone-300 text-emerald-700">90+ PageSpeed achievable</td><td className="p-3 border border-stone-300 text-emerald-700">$0 to $20/month hosting</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <BlogText>
                                ROI depends on traffic volume and current conversion rate. A store doing $50,000 per month with a 1 percent conversion lift from speed improvements gains $500 per month. A <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline">$5,000 to $10,000 headless rebuild</Link> pays for itself in 10 to 20 months at that scale, then continues generating returns indefinitely. For stores doing $200,000+ per month, the payback window compresses to 2 to 4 months.
                            </BlogText>

                            <BlogHeader>When to Hire a Shopify Speed Optimization Expert</BlogHeader>

                            <BlogList items={[
                                "Hire if: You have done DIY fixes and still score below 50, you have 20+ apps you cannot eliminate, your theme is heavily customized and switching would break functionality, or you need code-level changes beyond theme settings.",
                                "Do not hire if: You have not tried basic fixes yet, your only issue is unoptimized images, or you are on an outdated theme that should simply be replaced with Dawn.",
                                "Hire a specialist, not a generalist: A developer who 'does Shopify' is different from one who specializes in Shopify performance. Ask for before-and-after PageSpeed scores on their previous projects.",
                                "Get a written guarantee: Any agency serious about Shopify performance should be willing to guarantee a minimum PageSpeed score with a refund clause if they miss it."
                            ]} />

                            <BlogHeader>Your Shopify Speed Optimization Action Plan</BlogHeader>

                            <div className="space-y-4 my-6">
                                {[
                                    { num: "1", title: "Run a Baseline Speed Audit", body: "Test with Google PageSpeed Insights and Shopify's speed report. Document current scores before making any changes. Test your homepage, a collection page, and a product page separately." },
                                    { num: "2", title: "Remove App and Script Bloat", body: "Uninstall unused apps. Check theme.liquid for leftover scripts from apps you have already removed. Audit which apps are truly essential versus nice-to-have." },
                                    { num: "3", title: "Optimize Images and Fonts", body: "Resize and compress all product images to 2,000px maximum width. Replace GIFs with static images or video. Reduce font variants to 2 to 3 weights maximum." },
                                    { num: "4", title: "Fix Core Web Vitals", body: "Address LCP by preloading hero images. Fix CLS by adding explicit width and height attributes to all images. Improve INP by deferring non-critical JavaScript." },
                                    { num: "5", title: "Decide Between Theme Optimization and a Headless Rebuild", body: "If you score 70+ after steps 1 to 4, continue optimizing your current theme. If you are stuck below 60 with significant app dependencies, evaluate a headless architecture. PandaCodeGen offers a free call to scope headless migrations for stores that have hit the Liquid ceiling." }
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

                            {/* Bottom CTA */}
                            <div className="my-10 md:my-12 p-6 md:p-8 bg-charcoal text-white rounded-2xl text-center">
                                <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">Headless Shopify by PandaCodeGen</p>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">Hit the Liquid Ceiling? We Break Through It.</h3>
                                <p className="text-stone-300 mb-5 max-w-xl mx-auto">We build headless Shopify storefronts that score 90+ on PageSpeed with a written guarantee. Drop your store URL and we will benchmark your current scores, identify what is fixable in Liquid, and scope a headless build if that is what your store needs.</p>
                                <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-cognac hover:bg-cognac/90 text-white font-bold rounded-full transition-all">Book Free Migration Call <ArrowRight className="w-5 h-5" /></CalModalButton>
                            </div>

                            <BlogHeader>Frequently Asked Questions About Shopify Store Speed Optimization</BlogHeader>

                        </div>

                        <FAQAccordion faqs={postFAQs} />

                        <div className="mt-8 mb-4">
                            <h2 className="text-xl font-bold text-charcoal mb-4">Related Articles</h2>
                            <div className="grid gap-3">
                                {[
                                    { href: "/blog/shopify-headless", label: "Is Shopify Headless Worth It in 2026? Real Results From a $1.2M Store" },
                                    { href: "/blog/shopify-dawn-theme-slow", label: "Shopify Dawn Theme Slow? How We Fixed It From 42 to 97" },
                                    { href: "/blog/shopify-slow-losing-sales", label: "Slow Shopify Store? How Much Revenue You Are Losing (With Math)" },
                                    { href: "/blog/shopify-app-costs-real-monthly-bill", label: "How Much Do Shopify Apps Cost in 2026? $300 to $800/mo (Real Data)" },
                                    { href: "/blog/shopify-plus-still-slow", label: "Why Is Shopify Plus Still Slow in 2026?" },
                                    { href: "/services/ecommerce", label: "PandaCodeGen Headless Shopify Service — 90+ PageSpeed Guaranteed" }
                                ].map(link => (
                                    <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-cognac hover:underline">
                                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <RelatedPosts currentPostId="shopify-store-speed-optimization" />

                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
