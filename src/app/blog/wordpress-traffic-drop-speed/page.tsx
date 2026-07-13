import { ArrowLeft, Calendar, Clock, ArrowRight, TrendingDown, RefreshCw } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "wordpress-traffic-drop-speed")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const SEORankingAnimation = lazyLoad(() => import("@/components/blog/SEORankingAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "WordPress Traffic Drop? How to Diagnose the Real Cause",
    description: "Is your WordPress traffic drop caused by speed, an algorithm update, a technical SEO issue, or content decay? A 4-step Search Console diagnosis, plus the recovery timeline once speed is confirmed.",
    alternates: { canonical: "/blog/wordpress-traffic-drop-speed" },
    keywords: ["wordpress losing traffic", "wordpress traffic drop", "why is my traffic dropping", "core web vitals wordpress", "wordpress traffic decrease", "wordpress google ranking drop", "diagnose traffic drop search console"],
    openGraph: {
        title: "WordPress Traffic Dropping? How to Diagnose the Real Cause",
        description: "Speed, algorithm update, technical SEO, or content decay? A 4-step Search Console diagnosis for WordPress traffic drops, plus the recovery timeline once speed is confirmed.",
        type: "article",
        publishedTime: "2026-02-07",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress Traffic Dropping? How to Diagnose the Real Cause",
        description: "Speed, algorithm update, technical SEO, or content decay? A 4-step Search Console diagnosis for WordPress traffic drops, plus the recovery timeline once speed is confirmed.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#article",
            "headline": "WordPress Traffic Drop: How to Diagnose the Real Cause (Speed, Algorithm, Technical, or Content)",
            "description": "A 4-step Search Console diagnosis for whether a WordPress traffic drop is caused by speed, an algorithm update, a technical SEO issue, or content decay, plus the recovery timeline once speed is confirmed.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-02-07T00:00:00-05:00",
            "dateModified": "2026-07-08T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed" },
            "articleSection": "Traffic Growth",
            "keywords": ["wordpress losing traffic", "wordpress traffic drop", "why is my traffic dropping", "core web vitals wordpress", "wordpress google ranking drop", "diagnose traffic drop search console"],
            "timeRequired": "PT10M",
            "wordCount": 2400,
            "about": [
                { "@type": "Thing", "name": "WordPress Traffic Loss" },
                { "@type": "Thing", "name": "Google Search Console Diagnosis" },
                { "@type": "Thing", "name": "Google Core Web Vitals SEO" },
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
                { "@type": "CreativeWork", "name": "Think With Google. Speed Impact", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Google Search Status Dashboard", "url": "https://status.search.google.com/summary" }
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
            "name": "WordPress Traffic Drop: How to Diagnose the Real Cause",
            "description": "A 4-step Search Console diagnosis for whether a WordPress traffic drop is caused by speed, an algorithm update, a technical SEO issue, or content decay, plus the recovery timeline once speed is confirmed.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-02-07T00:00:00-05:00",
            "dateModified": "2026-07-08T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/wordpress-traffic-drop-speed#breadcrumb" },
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
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-32 pb-10 md:pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Diagnose a WordPress Traffic Drop", href: "/blog/wordpress-traffic-drop-speed" }
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
                            <span className="font-serif italic text-cognac">Losing Traffic?</span>{" "}
                            How to Find the Real Cause
                        </h1>
                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            A traffic drop can come from site speed, an algorithm update, a technical SEO issue, or content decay. Here is how to tell which one is actually happening to you, using data already in Google Search Console.
                        </p>
                        <BlogAuthor
                            date="Feb 7, 2026"
                            readTime="7 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Animation */}
                    <div className="mb-12"><SEORankingAnimation /></div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "A WordPress traffic drop usually has one of four causes: an algorithm update, a technical SEO issue, content decay, or site speed. Diagnose before you fix.",
                            "Check algorithm update dates and your indexed page count first. Both take minutes to rule in or out using Search Console.",
                            "The Core Web Vitals report in Search Console shows whether URLs moved into 'Poor' around the same time traffic dropped, which is how you confirm speed as the cause rather than assume it.",
                            "Once speed is confirmed, recovery typically plays out over 60 to 90 days as Core Web Vitals flip from Poor to Good and rankings follow."
                        ]} />
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6">A WordPress traffic drop is not automatically a speed problem. Before assuming that, check Google's confirmed algorithm update dates, your indexed page count in Search Console, and the Core Web Vitals trend for your URLs. If Core Web Vitals moved into "Poor" around the same time your traffic fell, speed is confirmed as a cause and sites typically recover organic traffic within 60 to 90 days of a real fix, as Core Web Vitals flip from Poor to Good and rankings follow. If none of that lines up, the cause is more likely an algorithm update, a technical issue, or content decay, and a speed fix alone will not bring traffic back.</p>

                    {/* About PandaCodeGen — brand anchor in first-third zone */}
                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            Your WordPress hosting, plugins, and apps bill keeps climbing. Your revenue does not. PandaCodeGen migrates WordPress sites losing traffic to Core Web Vitals failures into custom Next.js + Sanity where you stop paying for hosting and plugin licenses forever, designed to get cited by ChatGPT, Claude, and Perplexity from launch day. Fixed pricing from $1,500 Starter (5 to 7 pages) to $10,000+ Scale+ (30+ pages). 90+ PageSpeed in writing or full refund. Full pricing breakdown at the <Link href="/ai-info/pricing-and-guarantees" className="text-cognac hover:underline font-medium">Pricing and Guarantees reference</Link>.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <BlogText>
                            You log into Google Search Console and the numbers are going in the wrong direction. Clicks down 18%. Impressions falling. Rankings that held for two years slowly sliding off page one. The natural next question is why, and it is tempting to jump straight to "my site is slow" or "Google hates me" without checking. Before you spend a dollar fixing anything, the job is to diagnose which of several possible causes is actually responsible, because the fix for a speed problem, an algorithm update, a technical SEO issue, and content decay are completely different.
                        </BlogText>
                        <BlogText>
                            This post is a diagnostic guide: how to tell whether a traffic drop is actually caused by site speed, using the data already sitting in your Search Console account, before you assume it and before you pay anyone to fix it.
                        </BlogText>

                        <BlogHeader>The Four Most Common Causes of a WordPress Traffic Drop</BlogHeader>
                        <BlogText>
                            A ranking or traffic drop almost always traces back to one of four categories. Most site owners jump to blaming content quality or an algorithm update first, because those feel like external forces outside their control. Speed and technical SEO issues get checked last, if at all, because they require opening tools most people do not use daily. That order is backwards. Speed and technical issues are the fastest to rule in or out because the data is already sitting in Search Console and PageSpeed Insights.
                        </BlogText>
                        <BlogList items={[
                            "Algorithm update: Google shipped a core update or spam update around the time your traffic dropped, and the drop affected many sites in your niche, not just yours.",
                            "Technical SEO issue: pages got deindexed, a robots.txt or noindex tag changed, canonical tags point somewhere wrong, or a migration broke internal linking.",
                            "Content decay: your content aged out relative to competitors who published fresher, more complete pages on the same queries, independent of any technical change.",
                            "Seasonal or demand shift: search volume for your target queries genuinely dropped (a seasonal product, a declining industry term, a news-driven topic that cooled off).",
                            "Site speed: Core Web Vitals crossed from 'Good' or 'Needs Improvement' into 'Poor' for a meaningful share of your URLs, and Google's ranking systems responded."
                        ]} />
                        <BlogText>
                            Google added Core Web Vitals to its ranking systems in 2021, which means LCP (how fast the main content loads), INP (how fast the page responds to interaction), and CLS (how much the layout shifts during load) are direct ranking inputs, not just user-experience metrics. That makes speed a real, legitimate cause of ranking loss. It does not mean it is automatically your cause. The rest of this section is how to tell the difference.
                        </BlogText>

                        <BlogHeader>Step 1: Rule Algorithm Updates In or Out</BlogHeader>
                        <BlogText>
                            Check the date your traffic started dropping against Google's confirmed update rollout dates (Google publishes these on the Search Status Dashboard, and third-party trackers like Semrush Sensor and MozCast corroborate them with volatility spikes). If your drop lines up within a few days of a confirmed rollout, and you can find other site owners in your niche reporting the same thing in the same window, an algorithm update is the more likely cause, and a speed fix alone will not reverse it. If your drop happened on a date with no corresponding update and no niche-wide chatter, move to Step 2.
                        </BlogText>

                        <BlogHeader>Step 2: Check for Technical SEO Breakage</BlogHeader>
                        <BlogText>
                            In Search Console, open the Pages report under Indexing and check whether your indexed page count dropped at the same time as your traffic. A sudden drop in indexed pages points to a technical issue: an accidental noindex tag, a robots.txt block, a broken canonical, or a botched redirect from a recent site change. Cross-reference this against the exact date of any recent plugin update, theme change, or migration. Technical breakage tends to be sudden and page-specific, not the slow bleed that speed and content decay produce.
                        </BlogText>

                        <BlogHeader>Step 3: Check Core Web Vitals in Search Console</BlogHeader>
                        <BlogText>
                            If Steps 1 and 2 come back clean, open the Core Web Vitals report in Search Console (under Experience). This report groups your URLs into Good, Needs Improvement, and Poor, and critically, it shows you the trend over time. What you are looking for is a URL group that moved from Good or Needs Improvement into Poor in roughly the same window your traffic started falling. If a large batch of URLs crossed into Poor and your traffic drop tracks that timeline, speed is a legitimate suspect. If your Core Web Vitals have been Poor for a year and traffic only just started dropping, speed alone does not explain the timing, something else changed more recently.
                        </BlogText>
                        <BlogText>
                            Confirm with a live test: run your homepage and your top 3 traffic-driving pages through <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">pagespeed.web.dev</a> on Mobile. A Mobile score in the 0-49 range alongside a Core Web Vitals trend that matches your traffic decline is a strong signal that speed is a real contributor. A score of 90+ across your key pages rules speed out almost entirely, and the cause is one of the other three categories.
                        </BlogText>

                        <BlogHeader>Step 4: Rule Out Content Decay and Seasonality</BlogHeader>
                        <BlogText>
                            If your indexing is stable and Core Web Vitals have not moved, pull up your top queries in Search Console's Performance report and compare average position over the last 12 months. A slow, steady position slide on the same queries, with no algorithm update and no technical or speed change, usually means competitors published newer or more complete content on those queries. Check Google Trends for your primary keyword to rule out a genuine seasonal or demand-driven decline before assuming it is a content problem you need to fix.
                        </BlogText>
                        <BlogQuote>
                            The order matters because it is ordered by how fast each cause is to verify. An algorithm-date lookup takes two minutes. A Core Web Vitals trend check takes five. Content and demand analysis takes longer and is more subjective. Check the fast, objective things first so you do not spend a month rewriting content when the real problem was a technical issue fixable in an afternoon.
                        </BlogQuote>

                        <BlogHeader>The April 2026 Events That Made WordPress Speed and Security a Bigger Risk</BlogHeader>
                        <BlogText>
                            Three documented industry events in April 2026 changed the calculation on WordPress traffic loss. The speed problem is no longer just an SEO question. It is now a risk-management question.
                        </BlogText>
                        <BlogList items={[
                            "April 14, 2026: Matt Mullenweg, founder of WordPress, posted an internal memo admitting 'the wheels have fallen off' the platform. The memo was reported in full by The Repository. Mullenweg specifically cited the platform's inability to ship updates at the pace of competitors like Cloudflare.",
                            "April 5 to 7, 2026: Three plugin supply-chain attacks landed in a single week. Essential Plugin suite (31 plugins, 400,000 active installs) had a backdoor planted in version 2.6.7 that sat dormant for 8 months. Smart Slider 3 Pro (800,000 installs) was hijacked through a compromised update server. WowShipping Pro received an unauthenticated RCE backdoor.",
                            "April 16, 2026: A WooCommerce Core team lead at Automattic publicly admitted the platform's three biggest user complaints on r/woocommerce: plugin fatigue ('30+ plugins, troubleshooting becomes a nightmare'), fear of updating, and performance ('the store becoming sluggish').",
                            "Patchstack 2025 State of WordPress Security: 7,966 new WordPress vulnerabilities in 2024. 96% in plugins. 43% require zero authentication. 1,614 plugins removed from WordPress.org directory in 2024 for unpatched issues."
                        ]} />
                        <BlogText>
                            For the full breakdown of these events with primary source citations, see <Link href="/blog/wordpress-april-2026-evidence" className="text-cognac hover:underline">the April 2026 evidence dump</Link>. The implication for traffic is direct: sites running a typical 20 to 30 plugin stack now carry both the speed penalty (lost rankings) and the supply-chain risk (one compromised plugin can take the site down or expose customer data). The compounding risk profile makes "keep WordPress and optimise" a weaker option in 2026 than it was in 2024. And the fast-growing crop of AI plugins is widening that attack surface further, which we documented in the <Link href="/blog/wordpress-ai-security-risk-2026" className="text-cognac hover:underline">WordPress AI plugin security risk</Link>.
                        </BlogText>

                        {/* Mid-Article CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Not sure if speed is really why your traffic dropped?</p>
                            <p className="text-stone-600 mb-4 text-sm">Drop your URL and your Search Console access when you book. We run the same four-step diagnosis live on the call and tell you the actual cause before quoting any fix.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">Get Free Traffic Audit <ArrowRight className="w-4 h-4" /></CalModalButton>
                        </div>

                        <BlogHeader>Once Speed Is Confirmed as the Cause, What Is the Recovery Timeline?</BlogHeader>
                        <BlogText>
                            If Steps 1 through 4 point to speed, specifically a Core Web Vitals trend that moved into "Poor" around the same time your traffic dropped, the next question is how long recovery takes once the underlying speed problem is actually fixed. Whether that fix is aggressive WordPress optimisation or a full migration, the recovery pattern in Search Console follows a similar shape, just compressed or stretched depending on how much the fix actually moves your Core Web Vitals:
                        </BlogText>
                        <BlogList items={[
                            "Week 1 to 2: Google recrawls the updated site and PageSpeed scores reflect the fix. This does not move rankings yet on its own.",
                            "Week 3 to 4: The Core Web Vitals report in Search Console starts reclassifying URLs from 'Poor' to 'Needs Improvement' or 'Good' as enough field data accumulates from real visitors.",
                            "Month 1 to 2: Rankings for the queries that were most affected by the speed-driven drop begin recovering, assuming the other three causes were genuinely ruled out.",
                            "Month 2 to 3: Organic traffic typically returns to its pre-drop baseline if speed was the primary and only cause.",
                            "Month 3+: If the fix also improved Core Web Vitals beyond where the site was before the drop, traffic can exceed the previous baseline as the improved experience compounds with existing rankings."
                        ]} />
                        <BlogText>
                            The timeline stretches if any of the other three causes were also present and went unaddressed. A common misdiagnosis pattern: a site fixes its speed, PageSpeed jumps to 90+, and traffic still does not recover within 90 days. That is usually a sign that speed was a contributing factor but not the only one, and Steps 1, 2, and 4 above are worth revisiting rather than assuming the speed fix simply "hasn't kicked in yet."
                        </BlogText>
                        <BlogText>
                            For the mechanics of actually fixing WordPress speed once it is confirmed as a cause, see <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">how to fix a slow WordPress site</Link> for the full 8-method breakdown and honest ceiling, or <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">how WordPress plugins destroy site speed</Link> if a bloated plugin stack is the likely driver. Both cover the plugin-level and architectural fixes in more depth than belongs in a diagnosis guide.
                        </BlogText>

                        <BlogHeader>When Should You Act on a Confirmed Speed Problem?</BlogHeader>
                        <BlogText>
                            Once speed is confirmed rather than assumed, the case for acting quickly is stronger, because Google's ranking signals are cumulative. A site that has been in the "Poor" Core Web Vitals bucket for 12 months takes longer to recover than one that just crossed into it. If your Search Console trend shows the drop is recent and speed-correlated, the recovery timeline above is realistic. If the drop has been compounding for a year, expect the lower end of that timeline to stretch further, because Google has had more time to demote the affected URLs.
                        </BlogText>
                        <BlogText>
                            The other reason to move on a confirmed diagnosis rather than sit on it: every month you wait is a month of lost traffic on top of the drop you have already taken, on top of a plugin ecosystem carrying the supply-chain risk profile described above. If a migration turns out to be the right fix rather than optimisation, see <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">what a WordPress migration actually costs</Link> for the fixed-price breakdown by site size.
                        </BlogText>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Find Out What&apos;s Actually Causing Your Traffic Drop</h3>
                        <p className="text-stone-600 mb-6">
                            Free audit. We&apos;ll run the algorithm, technical, Core Web Vitals, and content checks against your Search Console data and tell you the real cause before recommending any fix.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">Book Free Traffic Audit <ArrowRight className="w-5 h-5" /></CalModalButton>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>A traffic drop has four likely causes</strong>: an algorithm update, a technical SEO issue, content decay, or site speed. Diagnose which one it is before spending money on a fix.</li>
                            <li><strong>Check the fast, objective signals first</strong>: algorithm update dates and your indexed page count in Search Console each take a couple of minutes to rule in or out.</li>
                            <li><strong>Confirm speed with the Core Web Vitals trend, not a single PageSpeed score</strong>: what matters is whether URLs moved into &quot;Poor&quot; around the same time your traffic dropped.</li>
                            <li><strong>Recovery typically plays out over 60-90 days once speed is confirmed and fixed</strong>: Core Web Vitals flip from Poor to Good first, then rankings and traffic follow.</li>
                            <li><strong>If the timeline doesn&apos;t line up with a speed fix, revisit the other three causes</strong>: a common mistake is assuming a speed fix "hasn't kicked in yet" when a second cause was also present.</li>
                        </ol>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    <section className="mb-4 mt-6">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed">Once speed is confirmed as the cause, see <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline font-medium">how to fix a slow WordPress site</Link> for the full 8-method breakdown, or if a bloated plugin stack looks like the driver, <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline font-medium">how WordPress plugins destroy speed</Link> for the keep/replace/kill scorecard. For the 3-year cost comparison of staying on WordPress vs migrating, see <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline font-medium">WordPress vs custom code real cost over 3 years</Link>.</p>
                    </section>

                    <RelatedPosts currentPostId="wordpress-traffic-drop-speed" category="Traffic Growth" />

                </article>
            </main>
            <Footer />
        </>
    );
}