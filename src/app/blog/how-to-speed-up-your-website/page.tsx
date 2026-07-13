import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const speedFAQs = blogPosts.find(p => p.id === 'how-to-speed-up-your-website')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "How to Speed Up Your Website in 2026",
    description: "12 proven tactics to speed up your website, the platform ceilings that block real progress, and when patching stops being worth a rebuild.",
    alternates: {
        canonical: '/blog/how-to-speed-up-your-website',
    },
    keywords: [
        "speed up website",
        "how to speed up your website",
        "website speed optimization",
        "improve page load time",
        "core web vitals",
        "pagespeed insights",
        "optimize images for web",
        "minify CSS and JavaScript",
        "render-blocking JavaScript",
        "browser caching",
        "content delivery network",
        "website speed test",
        "mobile site speed",
        "speed up wordpress",
        "speed up shopify",
    ],
    openGraph: {
        title: "How to Speed Up Your Website in 2026",
        description: "12 proven tactics to speed up your website, the platform ceilings that block real progress, and when patching stops being worth a rebuild.",
        type: "article",
        publishedTime: "2026-04-30T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/how-to-speed-up-your-website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Speed Up Your Website in 2026",
        description: "12 proven tactics to speed up your website, the platform ceilings that block real progress, and when patching stops being worth a rebuild.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website#article",
            "headline": "How to Speed Up Your Website in 2026",
            "description": "12 proven tactics to speed up your website, the platform ceilings that block real progress, and when patching stops being worth a rebuild.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-04-30T00:00:00-05:00",
            "dateModified": "2026-04-30T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website" },
            "articleSection": "Performance",
            "keywords": ["speed up website", "website speed optimization", "core web vitals", "pagespeed insights", "render-blocking JavaScript", "mobile site speed"],
            "timeRequired": "PT13M",
            "wordCount": 3200,
            "about": [
                { "@type": "Thing", "name": "Website Speed Optimization" },
                { "@type": "Thing", "name": "Core Web Vitals" },
                { "@type": "Thing", "name": "Page Load Time" },
                { "@type": "SoftwareApplication", "name": "Google PageSpeed Insights", "applicationCategory": "DeveloperApplication", "operatingSystem": "Web", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } }
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights Tool Documentation", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Core Web Vitals. Google Web Dev", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Largest Contentful Paint (LCP) Optimization", "url": "https://web.dev/lcp/" },
                { "@type": "CreativeWork", "name": "Google Think: Mobile Page Speed Industry Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed and Revenue Research", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Cloudflare: How to Improve Website Performance", "url": "https://www.cloudflare.com/learning/performance/improve-website-performance/" },
                { "@type": "CreativeWork", "name": "Chrome Lighthouse Overview", "url": "https://developer.chrome.com/docs/lighthouse/overview/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "How to Speed Up Your Website in 2026", "item": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website#webpage",
            "url": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website",
            "name": "How to Speed Up Your Website in 2026",
            "description": "12 proven tactics to speed up your website, the platform ceilings that block real progress, and when patching stops being worth a rebuild.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-04-30T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://x.com/PandaCodeGen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.goodfirms.co/company/pandacodegen", "https://www.crunchbase.com/organization/pandacodegen", "https://www.designrush.com/agency/profile/pandacodegen", "https://www.sortlist.com/agency/pandacodegen", "https://www.f6s.com/pandacodegen", "https://www.sanity.io/exchange/community/pandacodegen", "https://www.behance.net/pandacodegen", "https://dev.to/pandacodegen", "https://www.reddit.com/user/PandaCodeGen/"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 90+ Google PageSpeed in writing or a full refund on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/how-to-speed-up-your-website#faq",
            "mainEntity": speedFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
        }
    ]
};

export default function HowToSpeedUpYourWebsitePage() {
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
                            { label: "How to Speed Up Your Website", href: "/blog/how-to-speed-up-your-website" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-stone-100 text-stone-600 rounded-full mb-4">Performance</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            How to <span className="font-serif italic text-cognac">Speed Up Your Website</span> in 2026
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Twelve tactics that actually move the needle, the platform ceilings that block real progress, and the moment when patching stops being worth a rebuild.
                        </p>

                        <BlogAuthor
                            date="Apr 30, 2026"
                            readTime="13 min read"
                            bio="Hassan rebuilds slow WordPress, Shopify, Wix, and Webflow sites as custom Next.js builds that load under 1 second. Every build hits 90+ on Google PageSpeed or the project is fully refunded."
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
                            "Mobile users abandon a page after 3 seconds. Every additional second cuts conversions by 7 to 20 percent depending on the industry.",
                            "WordPress, Shopify, Wix, and Squarespace sites hit a structural speed ceiling around 50 to 75 PageSpeed on mobile. Optimization plateaus there.",
                            "12 tactics in this guide cover image compression, CDN, caching, render-blocking JavaScript, hosting, and the architecture choices that break the ceiling.",
                            "If your site sits below 70 PageSpeed despite optimization, a rebuild on Next.js consistently delivers 90+ with sub-1-second load times.",
                            "PandaCodeGen rebuilds start at $1,500 with a 90+ PageSpeed score guaranteed or 100 percent refund. Timeline 3 to 5 weeks for most business sites."
                        ]} />
                    </div>

                    <div className="space-y-8">

                        <BlogHeader>Why Website Speed Matters for SEO, Conversions, and Revenue</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Website speed directly affects Google rankings, ad Quality Score, bounce rate, and conversion rate. Sites loading under 1 second convert 2 to 3 times better than sites loading in 3.5 seconds. Google uses Core Web Vitals as a confirmed ranking factor since 2021.</p>
                        </div>

                        <BlogText>
                            A slow website is not just a technical problem. It is a revenue problem. <BlogHighlight>Google research shows that mobile users abandon a page that takes longer than 3 seconds to load.</BlogHighlight> Portent&apos;s analysis of 27,000+ landing pages found conversion rate dropping from 3.05 percent at a 1-second load time down to roughly 1.12 percent at 3 seconds, with the sharpest drop-off happening in the first 5 seconds of load.
                        </BlogText>

                        <BlogText>
                            Speed also drives ad efficiency. Google Ads uses Quality Score to set cost per click, and Quality Score is partly determined by landing page experience. A slower landing page pushes your Quality Score down, which raises the CPC you pay for the same auction position. The slow site pays more for every click and converts a smaller share of that traffic.
                        </BlogText>

                        <BlogText>
                            Organic traffic feels the same pressure. Google made Core Web Vitals an official ranking signal in 2021, and on our own client work, sites migrated off a sub-70 PageSpeed platform onto Next.js have recovered rankings within 30 to 90 days without any new content or link building, purely from the speed gain. Speed is no longer a tiebreaker. It is one of the ranking signals Google measures directly from real user data.
                        </BlogText>

                        <BlogHeader>How Fast Your Website Should Load</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">A fast website loads in under 1 second on mobile and scores 90 or higher on Google PageSpeed. Core Web Vitals targets: LCP under 2.5 seconds, INP under 200 milliseconds, CLS under 0.1. The PandaCodeGen target on every build is sub-1-second load time and 90+ PageSpeed guaranteed.</p>
                        </div>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Metric</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">What It Measures</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Target Threshold</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Largest Contentful Paint</td>
                                        <td data-label="What It Measures" className="p-3 border border-stone-300">Loading speed of main content</td>
                                        <td data-label="Target Threshold" className="p-3 border border-stone-300 font-bold text-cognac">Under 2.5 seconds</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Interaction to Next Paint</td>
                                        <td data-label="What It Measures" className="p-3 border border-stone-300">Responsiveness to user input</td>
                                        <td data-label="Target Threshold" className="p-3 border border-stone-300 font-bold text-cognac">Under 200 milliseconds</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Cumulative Layout Shift</td>
                                        <td data-label="What It Measures" className="p-3 border border-stone-300">Visual stability during load</td>
                                        <td data-label="Target Threshold" className="p-3 border border-stone-300 font-bold text-cognac">Under 0.1</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">PageSpeed Score</td>
                                        <td data-label="What It Measures" className="p-3 border border-stone-300">Overall performance grade</td>
                                        <td data-label="Target Threshold" className="p-3 border border-stone-300 font-bold text-cognac">90+ out of 100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            On real client work, PandaCodeGen targets sub-1-second LCP on mobile. The MyCustomPatches WordPress migration moved the site from 3.2 seconds to 0.7 seconds. The Panda Patches headless rebuild moved a 5.8 second LCP down to 0.8 seconds. Both projects passed all three Core Web Vitals on launch day.
                        </BlogText>

                        <BlogHeader>How to Test Your Website Speed</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Use Google PageSpeed Insights at pagespeed.web.dev for the official score, GTmetrix for waterfall diagnosis, and Chrome DevTools Lighthouse for local audits during development. Test on mobile, not desktop, because Google indexes mobile-first.</p>
                        </div>

                        <BlogText>
                            Measurement comes before optimization. Running tests on the wrong device or with the wrong tool is how teams waste two weeks fixing a problem that did not exist.
                        </BlogText>

                        <BlogText>
                            <strong>PageSpeed Insights.</strong> Google&apos;s free tool at <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">pagespeed.web.dev</a> gives a mobile and desktop score, flags specific issues, and ties directly to Core Web Vitals. This is the score Google uses for ranking. It is also the score PandaCodeGen guarantees against on every build.
                        </BlogText>

                        <BlogText>
                            <strong>GTmetrix.</strong> The waterfall view at <a href="https://gtmetrix.com/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">gtmetrix.com</a> shows exactly which file loads when. Use it to diagnose slow third-party scripts, oversized images, and render-blocking resources. The free tier tests from one location at a time. The paid tier tests from multiple regions.
                        </BlogText>

                        <BlogText>
                            <strong>WebPageTest.</strong> Advanced testing at <a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">webpagetest.org</a> from multiple global locations with simulated connection speeds. Use it for understanding real-world performance across geographies, especially for sites with international customers.
                        </BlogText>

                        <BlogText>
                            <strong>Chrome DevTools Lighthouse.</strong> Built into the Chrome browser. Run audits locally during development. The Performance tab shows real-time loading behavior. The Network tab shows file sizes and request waterfalls. This is what every engineer should run before pushing changes to production.
                        </BlogText>

                        <BlogText>
                            <strong>Core Web Vitals in Search Console.</strong> The free Google Search Console at <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">search.google.com/search-console</a> shows site-wide Core Web Vitals trends over time. Check the Core Web Vitals report monthly. Google flags pages that fail thresholds. Pages flagged here are pages losing rankings.
                        </BlogText>

                        <BlogHeader>Why Your Website Is Slow</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">The six biggest causes of slow websites: bloated themes and page builders, plugin or app overload, unoptimized images, render-blocking JavaScript and CSS, cheap or misconfigured hosting, and excessive third-party scripts. Identifying which apply to your site comes before fixing them.</p>
                        </div>

                        <BlogText>
                            <strong>Bloated themes and page builders.</strong> Page builders like Elementor, Divi, and Oxygen add massive JavaScript and CSS overhead even on simple pages. Elementor and Divi sites typically score 45 to 65 on mobile PageSpeed because the visual editing layer ships hundreds of kilobytes of unused code on every request. Visual editing comes at a real performance cost.
                        </BlogText>

                        <BlogText>
                            <strong>Plugin and app overload.</strong> Each WordPress plugin or Shopify app adds HTTP requests, database queries, and code that runs on every page load. The average WordPress site has 20 to 30 plugins. Each one adds 50 to 500 milliseconds of load time. Removing unused plugins and replacing the rest with native code is the single biggest win available on most platforms.
                        </BlogText>

                        <BlogText>
                            <strong>Unoptimized images and video.</strong> Often the largest single cause. PNG and JPEG files are typically 3 to 10 times larger than WebP equivalents at the same visual quality. Self-hosted video is heavier than YouTube or Vimeo embeds and rarely worth the storage cost. A 4 megabyte hero image alone can drop mobile PageSpeed by 20 points.
                        </BlogText>

                        <BlogText>
                            <strong>Render-blocking JavaScript and CSS.</strong> Resources that must fully download before the browser can display anything. This causes the blank-screen delay users hate. Every render-blocking script in the head of the document delays first paint by the time it takes to fetch and parse that script.
                        </BlogText>

                        <BlogText>
                            <strong>Cheap or misconfigured hosting.</strong> Shared hosting means competing for server resources with hundreds of other sites. Time to First Byte (TTFB) is the baseline speed your server can deliver, and if TTFB is slow, nothing on the front end can recover it. Sites on $5 a month shared hosting routinely show 800 to 2000 millisecond TTFB. Sub-1-second LCP is impossible from there.
                        </BlogText>

                        <BlogText>
                            <strong>Excessive third-party scripts.</strong> Analytics, chat widgets, ad pixels, A/B testing tools, and font services each add external HTTP requests outside your control. These often load synchronously and block rendering. Auditing and trimming third-party scripts is the fastest way to recover 10 to 20 PageSpeed points without touching the platform.
                        </BlogText>

                        <BlogHeader>How to Speed Up Your Website (12 Tactics)</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">The 12 highest-impact tactics in order: optimize images, serve from a CDN, enable browser caching, minify CSS and JavaScript, remove render-blocking JavaScript, reduce HTTP requests, lazy load offscreen media, limit external scripts, eliminate redirect chains, move to static or edge rendering, upgrade to performance hosting, and audit unused plugins.</p>
                        </div>

                        <BlogText>
                            <strong>1. Optimize and compress images.</strong> Convert images to WebP or AVIF format. Use Squoosh, ShortPixel, or ImageOptim for compression at 80 to 85 percent quality (lossy compression at this level is visually identical to the original). Serve responsive image sizes with srcset so mobile devices do not download a 2000-pixel image to display on a 400-pixel screen. WebP delivers files 25 to 35 percent smaller than JPEG at equivalent quality. This is the highest-impact single change on most sites. On the MyCustomPatches rebuild, converting uncompressed product photography to next/image-served WebP was the single biggest contributor to moving LCP from 3.2 seconds down toward the 0.7-second final result.
                        </BlogText>

                        <BlogText>
                            <strong>2. Serve assets from a CDN.</strong> A Content Delivery Network uses globally distributed servers to serve cached files from the location closest to each user. Cloudflare offers a generous free tier. Bunny.net and Fastly are the next step up. The CDN cuts the network round-trip time, which matters most for users far from your origin server.
                        </BlogText>

                        <BlogText>
                            <strong>3. Enable browser caching.</strong> Cache-Control headers tell browsers to store files locally so repeat visitors load the page faster. Set a 1-year cache TTL on static assets (CSS, JavaScript, images, fonts) and a shorter TTL on HTML. Browser caching is client-side. Server caching (Redis, Varnish) is a separate layer that also helps, especially on database-driven platforms.
                        </BlogText>

                        <BlogText>
                            <strong>4. Minify CSS and JavaScript.</strong> Minification removes whitespace, comments, and unnecessary characters from code files. Tools like Terser for JavaScript and cssnano for CSS reduce file sizes by 10 to 30 percent. Most modern build pipelines (Next.js, Vite, Webpack) minify automatically in production. Verify your build output is actually minified.
                        </BlogText>

                        <BlogText>
                            <strong>5. Remove render-blocking JavaScript.</strong> Add defer or async attributes to script tags so JavaScript loads after the HTML renders. Use defer when execution order matters (most cases). Use async when scripts are independent (analytics, ad tags). Move non-critical scripts to the end of the body or load them after first user interaction.
                        </BlogText>

                        <BlogText>
                            <strong>6. Reduce HTTP requests.</strong> Each file the browser requests adds latency. Combine CSS files, inline critical CSS, reduce external font weights to the 2 or 3 you actually use, and remove unused icon libraries. Fewer requests means a faster first paint. HTTP/2 and HTTP/3 reduce this penalty but do not eliminate it.
                        </BlogText>

                        <BlogText>
                            <strong>7. Lazy load offscreen media.</strong> Add <code className="text-xs bg-stone-100 px-1 py-0.5 rounded-sm">loading=&quot;lazy&quot;</code> to images and iframes below the fold. The browser only fetches them when the user scrolls near them. This reduces initial page weight by 50 to 80 percent on long pages with many images. Critical above-the-fold images should keep loading=&quot;eager&quot; or no attribute, which loads them immediately.
                        </BlogText>

                        <BlogText>
                            <strong>8. Limit external scripts and trackers.</strong> Audit every third-party script. Remove unused analytics. Consolidate tracking pixels. Load chat widgets on user interaction (click) rather than on page load. Embed videos from YouTube or Vimeo instead of self-hosting. Each external script saved is 20 to 200 milliseconds recovered.
                        </BlogText>

                        <BlogText>
                            <strong>9. Eliminate redirect chains.</strong> Each 301 or 302 redirect adds a full round-trip to the server. Audit for redirect chains where A redirects to B redirects to C, and point links directly to the final destination. Browser cache headers do not help with redirects. Every redirect is a fresh round-trip.
                        </BlogText>

                        <BlogText>
                            <strong>10. Move to static or edge rendering.</strong> Static Site Generation (SSG) and edge rendering pre-build pages and serve them instantly from a CDN. No server round-trip, no database query, no PHP execution. Next.js, Astro, and Hugo all support SSG. Vercel and Cloudflare Pages serve from the edge by default. This is the architectural change that breaks past the platform speed ceiling. It is also the tactic that did the most work on the Panda Patches rebuild: moving off WordPress and WooCommerce server rendering onto static and edge-rendered Next.js pages took LCP from 5.8 seconds to 0.8 seconds.
                        </BlogText>

                        <BlogText>
                            <strong>11. Upgrade to performance hosting.</strong> Move from shared hosting to managed WordPress (Kinsta, WP Engine), VPS (DigitalOcean, Hetzner), or edge platforms (Vercel, Netlify, Cloudflare Pages). Hosting determines the speed floor. Optimizations cannot overcome a slow server. On the Panda Patches migration, moving off paid WordPress hosting and plugin subscriptions onto Vercel eliminated roughly $200 a month in recurring fees outright.
                        </BlogText>

                        <BlogText>
                            <strong>12. Audit and cut unused plugins.</strong> WordPress sites average 20 to 30 active plugins. Most can be replaced with native code or removed entirely. Each plugin adds database queries and potential conflicts. Remove plugins, do not just deactivate them. Deactivated plugins still sit in the database and can introduce security vulnerabilities. Be extra careful with the new AI plugins, which we flagged in our breakdown of the <Link href="/blog/wordpress-ai-security-risk-2026" className="text-cognac hover:underline">WordPress AI plugin security risk</Link>.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="text-lg font-bold text-charcoal mb-2">Tried every tactic and still stuck under 70 PageSpeed?</p>
                            <p className="text-stone-600 text-sm mb-6">Book a free 15-minute speed audit. We open Lighthouse on your live site, identify what is hitting the platform ceiling, and tell you whether optimization or a rebuild makes more financial sense for your specific case. No obligation, no sales pitch.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Book Free Speed Audit <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        <BlogHeader>How to Speed Up a Website on Mobile</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Mobile speed needs different optimization than desktop because of smaller screens, slower networks, and different rendering behavior. Google indexes mobile-first since 2021, so mobile speed determines rankings. Test on real devices over 4G, not just desktop emulation.</p>
                        </div>

                        <BlogText>
                            <strong>Compress and resize for smaller screens.</strong> Serve appropriately sized images for mobile viewports using srcset and sizes attributes. A 2000-pixel hero image on a 400-pixel mobile screen wastes 75 percent of the bandwidth. Next.js Image and the native <code className="text-xs bg-stone-100 px-1 py-0.5 rounded-sm">picture</code> element handle this automatically when configured properly.
                        </BlogText>

                        <BlogText>
                            <strong>Prioritize above-the-fold content.</strong> Inline critical CSS for content visible without scrolling, then defer everything else. Above the fold means what users see before scrolling. The browser can render this content while the rest of the page loads in the background.
                        </BlogText>

                        <BlogText>
                            <strong>Cut mobile-specific render blockers.</strong> Mobile browsers handle JavaScript execution differently from desktop. A script that takes 100 milliseconds on desktop can take 800 milliseconds on a mid-range Android phone. Audit your JavaScript with Chrome DevTools throttled to slow 3G to find the real mobile execution cost.
                        </BlogText>

                        <BlogText>
                            <strong>Test on real devices and throttled networks.</strong> Desktop dev tools are not enough. Test on actual phones over cellular networks. Chrome DevTools can simulate slow 3G, but real cellular connections introduce packet loss and latency variance that emulators do not match.
                        </BlogText>

                        <BlogHeader>Platform Speed Ceilings on WordPress, Shopify, Wix, and Squarespace</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Every major platform has a structural speed ceiling: WordPress and WooCommerce cap at 60 to 75 PageSpeed, Shopify at 50 to 70, Wix at 40 to 65, Squarespace at 50 to 70, and Webflow at 70 to 85. Optimization plateaus at the ceiling. Custom Next.js consistently scores 90+.</p>
                        </div>

                        <BlogText>
                            This is the section most speed guides skip. Optimization can only go so far when the platform itself creates a ceiling. Before spending two weeks tuning a site, know what the realistic ceiling is.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Platform</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Common Speed Ceiling</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-300">Primary Bottleneck</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">WordPress / WooCommerce</td>
                                        <td data-label="Common Speed Ceiling" className="p-3 border border-stone-300 text-amber-700 font-medium">60 to 75</td>
                                        <td data-label="Primary Bottleneck" className="p-3 border border-stone-300">Plugin bloat, PHP rendering, database queries</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Shopify</td>
                                        <td data-label="Common Speed Ceiling" className="p-3 border border-stone-300 text-amber-700 font-medium">50 to 70</td>
                                        <td data-label="Primary Bottleneck" className="p-3 border border-stone-300">Liquid templating, app overhead, checkout constraints</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Wix</td>
                                        <td data-label="Common Speed Ceiling" className="p-3 border border-stone-300 text-red-600 font-medium">40 to 65</td>
                                        <td data-label="Primary Bottleneck" className="p-3 border border-stone-300">Closed infrastructure, heavy framework, no code access</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-300 font-medium">Squarespace</td>
                                        <td data-label="Common Speed Ceiling" className="p-3 border border-stone-300 text-amber-700 font-medium">50 to 70</td>
                                        <td data-label="Primary Bottleneck" className="p-3 border border-stone-300">Template engine, limited optimization controls</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-300 font-medium">Webflow</td>
                                        <td data-label="Common Speed Ceiling" className="p-3 border border-stone-300 text-amber-700 font-medium">70 to 85</td>
                                        <td data-label="Primary Bottleneck" className="p-3 border border-stone-300">CMS limits, hosting restrictions, export constraints</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50 font-bold">
                                        <td className="p-3 border border-stone-300 text-charcoal">Custom Next.js</td>
                                        <td data-label="Common Speed Ceiling" className="p-3 border border-stone-300 text-green-700">90+</td>
                                        <td data-label="Primary Bottleneck" className="p-3 border border-stone-300">None at architectural level</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            <strong>WordPress and WooCommerce bloat.</strong> Every plugin adds database queries and potential conflicts. WooCommerce specifically requires PHP execution for cart and checkout, so it cannot be fully static. Managed WordPress hosting (Kinsta, WP Engine) helps but does not eliminate the architecture problem. Most WordPress business sites cap at 65 to 75 mobile PageSpeed even on premium hosting. <Link href="/services/wordpress-migration" className="text-cognac hover:underline">See our WordPress migration service</Link> or read the <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">detailed WordPress fixes guide</Link>. For WooCommerce stores specifically, the path is <Link href="/services/woocommerce" className="text-cognac hover:underline">our WooCommerce headless migration service</Link>.
                        </BlogText>

                        <BlogText>
                            <strong>Shopify Liquid and app stack drag.</strong> Shopify Liquid renders server-side on every request. Apps inject scripts the merchant cannot fully control, and even fast Shopify themes rarely break a 70 PageSpeed score on mobile. The fix is headless: Shopify backend for products and checkout, custom Next.js storefront for the public-facing site. <Link href="/blog/shopify-headless" className="text-cognac hover:underline">Headless Shopify case study.</Link>
                        </BlogText>

                        <BlogText>
                            <strong>Wix and Squarespace template limits.</strong> Closed systems where you cannot access the underlying code, implement advanced optimizations, or change hosting. You are renting infrastructure optimized for ease of editing, not speed. The structural ceiling is real and no on-platform tweak breaks it. <Link href="/blog/wix-too-slow" className="text-cognac hover:underline">Wix speed limits</Link> and <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline">Squarespace speed limits.</Link>
                        </BlogText>

                        <BlogText>
                            <strong>Webflow CMS and hosting caps.</strong> Webflow performs better than most page builders but still has ceilings: 10,000 CMS item limits, no server-side logic, export constraints, and shared infrastructure that creates outages. Webflow had 14 incidents in 90 days as of April 2026. See <Link href="/services/webflow" className="text-cognac hover:underline">our Webflow migration service</Link> for the rebuild path or read the <Link href="/blog/leaving-webflow-2026" className="text-cognac hover:underline">full Webflow analysis</Link>.
                        </BlogText>

                        <BlogText>
                            <strong>GoHighLevel speed problems.</strong> GoHighLevel websites typically score 20 to 45 on mobile PageSpeed because of GHL&apos;s runtime rendering model. The fix without losing your CRM is a custom Next.js frontend that keeps your GHL pipelines and automation intact. See <Link href="/services/gohighlevel" className="text-cognac hover:underline">our GoHighLevel website migration service</Link> for the keep-CRM-replace-website pattern, or read <Link href="/blog/gohighlevel-website-speed" className="text-cognac hover:underline">why GoHighLevel sites are slow</Link>.
                        </BlogText>

                        <BlogQuote>
                            We have spent two weeks optimizing a Wix site to 65 PageSpeed and the same two weeks rebuilding a Wix site as Next.js to score 90+. Same client effort. Permanent result vs temporary patch.
                        </BlogQuote>

                        <BlogHeader>When to Rebuild Your Website Instead of Optimizing</BlogHeader>

                        <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                            <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                            <p className="text-sm text-stone-700 leading-relaxed">Rebuild instead of optimize when your site is stuck below 70 PageSpeed despite full optimization, when removing plugins or apps would break core functionality, when monthly platform fees exceed $200 to $500, or when SEO and conversion problems trace directly to speed issues. Below those thresholds, optimization is fine. Above them, optimization has diminishing returns.</p>
                        </div>

                        <BlogText>
                            Optimization has limits. If your site is built on a fundamentally slow architecture, the math eventually flips and a rebuild is cheaper than another round of patches.
                        </BlogText>

                        <BlogText>
                            Five signs it is time to rebuild rather than optimize:
                        </BlogText>

                        <BlogList items={[
                            "Stuck below 70 PageSpeed on mobile after implementing every standard optimization in this guide.",
                            "Plugin or app dependency where removing them would break revenue-critical functionality (checkout, lead capture, subscriptions).",
                            "Monthly platform fees exceeding $200 to $500 across hosting, plugins, apps, and integrations combined.",
                            "SEO rankings or conversion rates dropping in a way that traces directly to speed (failing Core Web Vitals, high bounce rate, abandoned carts).",
                            "Need for custom functionality (real-time pricing, custom calculators, headless commerce) that the platform does not support natively."
                        ]} />

                        <BlogText>
                            For a real example: Panda Patches ran on WordPress with WooCommerce for three years, optimized to 64 mobile PageSpeed. Two more weeks of optimization could have lifted that score to 70 at most. The rebuild to a Next.js + Sanity + Supabase + Square stack moved the site to 90+ PageSpeed, dropped LCP from 5.8 seconds to 0.8 seconds, and eliminated $200 a month in plugin and hosting fees. The migration paid for itself in 3 months. <Link href="/work/panda-patches" className="text-cognac hover:underline">Full case study here.</Link>
                        </BlogText>

                        <BlogText>
                            For sites where optimization is still worth it (above 70 PageSpeed, low platform fees, no architectural limits), the 12 tactics in this guide are enough. For sites hitting the ceiling, no amount of plugin tuning recovers what an architectural rebuild does in 3 to 5 weeks.
                        </BlogText>

                        <BlogHeader>Build a Sub-Second Website With PandaCodeGen</BlogHeader>

                        <BlogText>
                            PandaCodeGen replaces slow WordPress, Shopify, Wix, Squarespace, Webflow, and GoHighLevel sites with custom Next.js builds that load in under 1 second. Every project ships with a 90+ PageSpeed score guaranteed or 100 percent refund. Fixed pricing. No hourly billing. No monthly platform fees. Full source code ownership on launch day.
                        </BlogText>

                        <BlogList items={[
                            "90+ PageSpeed Mobile guaranteed or full refund",
                            "Sub-1-second load times via static and edge rendering on Vercel",
                            "Fixed pricing: Starter $1,500, Growth $3,500, Scale $5,000 to $10,000",
                            "Zero monthly platform fees: you own the code and the hosting",
                            "Timeline: 1 to 2 weeks for Starter, 3 to 5 weeks for Growth, 4 to 6 weeks for Scale",
                            "Post-launch monitoring and optimization included: 15 days on Starter, 1 month (30 days) on Growth and above"
                        ]} />

                        {/* Bottom CTA */}
                        <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                            <p className="text-xl font-bold mb-2">We rebuild slow websites as fast custom Next.js sites.</p>
                            <p className="text-stone-400 text-sm mb-6">Fixed price. 90+ PageSpeed guaranteed or 100 percent refund. Free site audit on the call. Drop your URL and we will tell you whether optimization or rebuild makes more financial sense for your case.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <CalModalButton className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
                                    Book Free Speed Audit <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full text-sm hover:border-white/40 transition-all"
                                >
                                    View Pricing <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <BlogHeader>Frequently Asked Questions About Website Speed</BlogHeader>
                    </div>

                    <FAQAccordion faqs={speedFAQs} />

                    <section className="mb-10 mt-6 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed mb-3">For the exact 8-step process behind every PandaCodeGen build, read <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline font-medium">How to Hit a 90+ PageSpeed Score</Link>. For the SEO impact specifically, see <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline font-medium">How Website Speed Affects SEO</Link>. For platform-specific speed deep dives, see <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline font-medium">how to fix slow WordPress</Link>, <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline font-medium">Shopify Dawn theme speed</Link>, or <Link href="/blog/divi-theme-slow" className="text-cognac hover:underline font-medium">Divi theme speed limits</Link>.</p>
                        <p className="text-stone-700 leading-relaxed">Ready to rebuild instead of optimize? See <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">WordPress migration service</Link>, <Link href="/services/webflow" className="text-cognac hover:underline font-medium">Webflow migration service</Link>, <Link href="/services/woocommerce" className="text-cognac hover:underline font-medium">WooCommerce migration service</Link>, or <Link href="/services/gohighlevel" className="text-cognac hover:underline font-medium">GoHighLevel migration service</Link>.</p>
                    </section>

                    <div className="mt-6 md:mt-10 md:mt-16 pt-8 border-t border-stone-100">
                        <RelatedPosts currentPostId="how-to-speed-up-your-website" category="Performance" />
                    </div>

                </article>
            </main>
            <Footer />
        </>
    );
}
