import { ArrowLeft, Calendar, Clock, ArrowRight, TrendingDown, RefreshCw } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "wordpress-traffic-drop-speed")?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const SEORankingAnimation = dynamic(() => import("@/components/blog/SEORankingAnimation"));

export const metadata: Metadata = {
    title: "Why Is My WordPress Site Losing Traffic? The Speed Tax You're Paying | PandaCodeGen",
    description: "Slow WordPress sites lose Google rankings fast. Every 1-second delay costs 20% of organic traffic. Here's the simple math on why speed = traffic — and how to fix it.",
    alternates: { canonical: "/blog/wordpress-traffic-drop-speed" },
    keywords: ["wordpress losing traffic", "wordpress traffic drop", "wordpress speed seo", "core web vitals wordpress", "wordpress traffic decrease", "wordpress google ranking drop"],
    openGraph: {
        title: "Why Is My WordPress Site Losing Traffic? The Speed Tax You're Paying",
        description: "Slow WordPress sites lose Google rankings fast. Every 1-second delay costs 20% of organic traffic. Here's the simple math.",
        type: "article",
        publishedTime: "2026-02-07",
        authors: ["Hassan"],
        url: "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Why Is My WordPress Site Losing Traffic? The Speed Tax You're Paying",
        description: "Slow WordPress sites lose Google rankings fast. Every 1-second delay costs 20% of organic traffic.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#article",
            "headline": "Why Is My WordPress Site Losing Traffic? The Speed Tax You're Paying",
            "description": "Slow WordPress sites lose Google rankings fast. Every 1-second delay costs 20% of organic traffic. Here's the simple math on why speed = traffic.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-02-07T00:00:00-05:00",
            "dateModified": "2026-03-10T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed" },
            "articleSection": "Traffic Growth",
            "keywords": ["wordpress losing traffic", "wordpress traffic drop", "wordpress speed seo", "core web vitals wordpress", "wordpress google ranking drop"],
            "timeRequired": "PT9M",
            "wordCount": 2200,
            "about": [
                { "@type": "Thing", "name": "WordPress Traffic Loss" },
                { "@type": "Thing", "name": "Google Core Web Vitals SEO" },
                { "@type": "Thing", "name": "WordPress Speed" },
                { "@type": "Thing", "name": "Website Traffic Optimization" }
            ],
            "inLanguage": "en-US",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Google Search Console", "url": "https://search.google.com/search-console/about" },
                { "@type": "CreativeWork", "name": "Google Page Experience", "url": "https://developers.google.com/search/docs/appearance/page-experience" },
                { "@type": "CreativeWork", "name": "web.dev Performance", "url": "https://web.dev/performance/" },
                { "@type": "CreativeWork", "name": "PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Think With Google — Speed Impact", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" }
            ]
        },
        {
            "@type": "HowTo",
            "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#howto",
            "name": "How to Diagnose and Fix WordPress Speed-Related Traffic Loss",
            "description": "The 5-step process to diagnose whether slow speed is causing your WordPress traffic drop — and the path to recovery.",
            "totalTime": "PT30M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "step": [
                { "@type": "HowToStep", "position": 1, "name": "Test your Mobile PageSpeed score", "text": "Go to pagespeed.web.dev and test your homepage and top-traffic page on Mobile. Red (0–49): speed is actively destroying your rankings — urgent action required. Orange (50–89): you're losing some rankings, improvement will help. Green (90–100): speed is not your traffic problem, look at content gaps instead." },
                { "@type": "HowToStep", "position": 2, "name": "Check Core Web Vitals in Google Search Console", "text": "Open Google Search Console → Experience → Core Web Vitals. Look at the 'Poor URLs' count on Mobile. If you have more than a handful of Poor-rated URLs, Google is already applying a ranking penalty to those pages. Note which pages are in the 'Poor' category — those are your highest-priority fixes." },
                { "@type": "HowToStep", "position": 3, "name": "Correlate your traffic drop timeline", "text": "In Google Search Console, open Performance → Search Results and set the date range to 12 months. Look for when traffic started declining. Cross-reference with Google algorithm update dates (check Google Search Status Dashboard). If your decline started around a Core Web Vitals update, speed is confirmed as the cause." },
                { "@type": "HowToStep", "position": 4, "name": "Audit your plugin count and hosting", "text": "In WordPress admin, count your active plugins. Each plugin adds 2–15 HTTP requests per page. More than 20 active plugins virtually guarantees a Mobile score below 60. Identify your hosting tier — shared hosting ($3–15/month) is always a performance problem; managed hosting (WP Engine, Kinsta) improves but doesn't eliminate the problem." },
                { "@type": "HowToStep", "position": 5, "name": "Choose your recovery path", "text": "If you score 50–70 on Mobile: plugin reduction, image optimization, and a caching plugin can recover some rankings within 60–90 days. If you score below 50: these optimizations have a ceiling. Migrating to a custom Next.js site is the only reliable path to 95–100/100 Mobile scores, full Core Web Vitals recovery, and sustained traffic growth." }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "WordPress Traffic Drop", "item": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#webpage",
            "url": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed",
            "name": "Why Is My WordPress Site Losing Traffic? The Speed Tax You're Paying",
            "description": "Slow WordPress sites lose Google rankings fast. Every 1-second delay costs 20% of organic traffic.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-02-07T00:00:00-05:00",
            "dateModified": "2026-03-10T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#breadcrumb" },
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
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 95–100/100 Google PageSpeed on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function WordPressTrafficDropPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-32 pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-sm px-8 py-10 md:px-14">

                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "WordPress Traffic Drop", href: "/blog/wordpress-traffic-drop-speed" }
                    ]} />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Title & Meta */}
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-charcoal text-xs font-bold uppercase tracking-wider mb-6">
                            <TrendingDown className="w-3 h-3" />
                            Traffic Growth · SEO
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-charcoal">
                            Why Is My WordPress Site{" "}
                            <span className="font-serif italic text-stone-500">Losing Traffic?</span>{" "}
                            The Speed Tax You&apos;re Paying
                        </h1>
                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            If your WordPress traffic has been dropping, site speed might be the reason. Here&apos;s how to check and what you can do to turn it around.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-stone-400">
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Feb 7, 2026</div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" />7 min read</div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-400 mt-3"><RefreshCw className="w-3 h-3" />Updated: Mar 10, 2026</div>
                        <BlogAuthor
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Animation */}
                    <div className="mb-12"><SEORankingAnimation /></div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-12" data-speakable="true">
                        <h3 className="font-bold text-charcoal mb-4">Executive Summary</h3>
                        <BlogList items={[
                            "Google's Core Web Vitals update made site speed a direct ranking factor — slow sites get demoted.",
                            "WordPress sites averaging 4–6 seconds load time lose 20–30% of organic traffic to faster competitors.",
                            "A Mobile PageSpeed score below 50 is a traffic emergency: your rankings are actively deteriorating.",
                            "The fix isn't another plugin — it's replacing WordPress with a fast Next.js site that loads in under 1 second."
                        ]} />
                    </div>

                    <div className="space-y-8">
                        <BlogText>
                            You log into Google Search Console and the numbers are going in the wrong direction. Clicks down 18%. Impressions falling. Rankings that held for two years slowly sliding off page one.
                        </BlogText>
                        <BlogText>
                            You haven&apos;t changed your content. You haven&apos;t done anything wrong. But <BlogHighlight>your WordPress site is paying a speed tax — and Google is collecting it every single day.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What Is Google&apos;s Speed Tax?</BlogHeader>
                        <BlogText>
                            In 2021, Google added Core Web Vitals to its ranking algorithm. This means site speed is now a direct ranking signal — not just a user experience metric. The three signals that matter:
                        </BlogText>
                        <BlogList items={[
                            "LCP (Largest Contentful Paint): How fast the main content loads. Target: under 2.5 seconds.",
                            "FID / INP (Interaction to Next Paint): How fast the page responds to clicks. Target: under 200ms.",
                            "CLS (Cumulative Layout Shift): How much the page jumps around during load. Target: under 0.1."
                        ]} />
                        <BlogText>
                            The average WordPress site fails all three on mobile. And when you fail Core Web Vitals, Google quietly lowers your rankings — not with a penalty notice, just with slower organic decay.
                        </BlogText>

                        <BlogHeader>How Much Traffic Is a Slow WordPress Site Losing?</BlogHeader>
                        <BlogText>
                            The numbers from Google&apos;s own research are stark:
                        </BlogText>
                        <BlogList items={[
                            "53% of mobile visitors abandon pages that take longer than 3 seconds to load",
                            "Sites with Mobile PageSpeed below 50 lose 20–30% of organic traffic compared to fast competitors",
                            "A 1-second delay in page load time reduces conversions by 7%",
                            "Pages with poor Core Web Vitals rank 5–10 positions lower than identical pages with good scores"
                        ]} />
                        <BlogQuote>
                            If your WordPress site loads in 5 seconds on mobile and your competitor&apos;s custom Next.js site loads in 0.9 seconds, Google will rank them above you — regardless of how much better your content is. Speed is now a prerequisite for ranking, not a bonus.
                        </BlogQuote>

                        <BlogHeader>Why WordPress Sites Are Structurally Slow</BlogHeader>
                        <BlogText>
                            WordPress wasn&apos;t built for modern performance standards. Every page load involves:
                        </BlogText>
                        <BlogList items={[
                            "PHP server rendering: WordPress generates every page dynamically, adding 200–600ms before your browser gets anything",
                            "Plugin bloat: Each active plugin adds HTTP requests, CSS, and JavaScript — 20 plugins often means 2MB+ of page weight",
                            "Unoptimised images: WordPress stores originals and serves them without intelligent format conversion or lazy loading by default",
                            "Theme overhead: Premium themes like Divi or Avada load 400–800KB of CSS/JS that's never used on most pages",
                            "Database queries: Every page load runs dozens of MySQL queries, each adding milliseconds that compound on mobile networks"
                        ]} />
                        <BlogText>
                            Caching plugins (WP Rocket, W3 Total Cache) help — but they&apos;re patches on an architectural problem. You can get a WordPress site from 6 seconds down to 2.5 seconds with aggressive optimisation. But you cannot get it under 1 second without replacing it.
                        </BlogText>

                        {/* Mid-Article CTA */}
                        <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Is speed killing your WordPress rankings?</p>
                            <p className="text-stone-600 mb-4 text-sm">Free audit — we&apos;ll show you your PageSpeed score, Core Web Vitals, and exactly how much traffic you&apos;re losing.</p>
                            <a href="https://cal.com/pandagen/discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Get Free Traffic Audit <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <BlogHeader>How to Diagnose If Speed Is Your Traffic Problem</BlogHeader>
                        <BlogText>
                            Run this 5-minute diagnosis before assuming content is the issue:
                        </BlogText>
                        <BlogList items={[
                            "Go to pagespeed.web.dev — test your homepage and your top-traffic page on Mobile",
                            "If your Mobile score is 0–49 (red): speed is actively destroying your rankings. Urgent.",
                            "If your Mobile score is 50–89 (orange): you're losing some rankings. Improvement will help.",
                            "If your Mobile score is 90–100 (green): speed is not your traffic problem — look at content gaps.",
                            "Check Google Search Console → Core Web Vitals report for 'Poor' URL counts"
                        ]} />
                        <BlogText>
                            For most WordPress sites we audit, the Mobile score is between 22 and 48. That&apos;s not an exaggeration — it&apos;s the baseline reality of a plugin-heavy WordPress site on shared hosting.
                        </BlogText>

                        <BlogHeader>What Happens to Traffic After Fixing Speed?</BlogHeader>
                        <BlogText>
                            When we migrate clients from slow WordPress to fast Next.js sites, the traffic recovery follows a predictable pattern:
                        </BlogText>
                        <BlogList items={[
                            "Week 1–2: Google crawls the new fast site, PageSpeed scores jump to 95–100",
                            "Week 3–4: Core Web Vitals switch from 'Poor' to 'Good' in Search Console",
                            "Month 1–2: Rankings for competitive keywords begin recovering",
                            "Month 2–3: Organic traffic returns to previous peak levels",
                            "Month 3+: Traffic exceeds previous peak by 15–25% as improved rankings compound"
                        ]} />
                        <BlogText>
                            Real client example: A UK professional services firm lost 31% of organic traffic over 8 months as their WordPress site aged. After migrating to Next.js (<a href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">PageSpeed 27 → 98</a>), traffic recovered fully in 6 weeks and grew 22% above their previous peak within 90 days.
                        </BlogText>

                        <BlogHeader>The Real Fix: Replace WordPress, Don&apos;t Patch It</BlogHeader>
                        <BlogText>
                            If your Mobile PageSpeed is under 60, the honest answer is that <a href="/blog/wordpress-killer" className="text-cognac hover:underline">no amount of plugin configuration will recover your traffic</a>. The architectural ceiling of WordPress is around 2.5 seconds — and Google&apos;s preferred threshold is under 2 seconds.
                        </BlogText>
                        <BlogText>
                            <a href="/services/wordpress-migration" className="text-cognac hover:underline">A custom Next.js site</a> built with performance as the foundation delivers:
                        </BlogText>
                        <BlogList items={[
                            "Static generation: Pages pre-built at deploy time, served from CDN in milliseconds",
                            "Zero plugin overhead: Only the code that's actually needed for each page",
                            "Automatic image optimisation: WebP/AVIF conversion, lazy loading, responsive sizes built-in",
                            "React Server Components: HTML rendered on the server, JavaScript only where interactions need it",
                            "Vercel Edge Network: Your pages cached at 50+ edge locations globally"
                        ]} />
                        <BlogText>
                            <BlogHighlight>Result: PageSpeed 95–100 on mobile. LCP under 1.2 seconds. Traffic grows, not shrinks.</BlogHighlight>
                        </BlogText>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Stop Paying the WordPress Speed Tax</h3>
                        <p className="text-stone-600 mb-6">
                            Free audit — we&apos;ll analyse your PageSpeed scores, Core Web Vitals, and show you the exact traffic you&apos;ve lost to slow speed and how to get it back.
                        </p>
                        <a href="https://cal.com/pandagen/discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">
                            Book Free Traffic Audit <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Google&apos;s Core Web Vitals update made speed a direct ranking factor</strong> — slow WordPress sites are being quietly demoted, losing 20-30% of organic traffic to faster competitors.</li>
                            <li><strong>A Mobile PageSpeed score below 50 is a traffic emergency</strong> — most WordPress sites we audit score between 22 and 48, meaning their rankings are actively deteriorating every day.</li>
                            <li><strong>Plugins and themes create an architectural speed ceiling</strong> — caching can get WordPress from 6 seconds down to 2.5, but you cannot reach under 1 second without replacing the platform entirely.</li>
                            <li><strong>Traffic recovers within 60-90 days after migrating to Next.js</strong> — clients typically return to their previous peak and then exceed it by 15-25% within three months of launching a fast site.</li>
                        </ol>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId="wordpress-traffic-drop-speed" category="Traffic Growth" />

                </article>
            </main>
            <Footer />
        </>
    );
}
