import { ArrowLeft, ArrowRight, Zap, DollarSign, Lock, TrendingDown, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "wix-vs-custom-website")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Wix vs Custom Website 2026: When Wix Stops Working for Growing Businesses",
    description: "You added a booking app. Then an SEO plugin. Then a form tool. Your Wix site still scores 35 on mobile and you cannot export your content. Here is when custom code makes sense and when Wix is still fine.",
    alternates: {
        canonical: "/blog/wix-vs-custom-website",
    },
    keywords: [
        "wix vs custom website",
        "wix vs custom code",
        "wix alternative 2026",
        "should I leave wix",
        "wix too slow for business",
        "wix limitations business",
        "wix to nextjs migration",
        "wix vs custom website cost",
        "wix export content",
        "wix pagespeed score"
    ],
    openGraph: {
        title: "Wix vs Custom Website 2026: When Wix Stops Working for Growing Businesses",
        description: "You added a booking app. Then an SEO plugin. Then a form tool. Your Wix site still scores 35 on mobile and you cannot export your content. Here is when custom code makes sense.",
        type: "article",
        publishedTime: "2026-04-13",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/wix-vs-custom-website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wix vs Custom Website 2026: When Wix Stops Working for Growing Businesses",
        description: "You added a booking app. Then an SEO plugin. Then a form tool. Your Wix site still scores 35 on mobile and you cannot export your content. Here is when custom code makes sense.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wix-vs-custom-website#article",
            "headline": "Wix vs Custom Website 2026: When Wix Stops Working for Growing Businesses",
            "description": "You added a booking app. Then an SEO plugin. Then a form tool. Your Wix site still scores 35 on mobile and you cannot export your content. Here is when custom code makes sense and when Wix is still fine.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-04-13T00:00:00-05:00",
            "dateModified": "2026-04-13T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wix-vs-custom-website" },
            "articleSection": "Comparison",
            "wordCount": 3100,
            "timeRequired": "PT12M",
            "inLanguage": "en-US",
            "keywords": ["wix vs custom website", "wix alternative", "wix limitations", "wix migration cost", "custom website cost 2026", "wix pagespeed"],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "about": [
                { "@type": "Thing", "name": "Wix", "description": "Cloud-based website builder platform used by over 230 million registered users worldwide" },
                { "@type": "Thing", "name": "Custom Web Development", "description": "Building websites with code frameworks like Next.js instead of drag-and-drop website builders" },
                { "@type": "Thing", "name": "Core Web Vitals", "description": "Google performance metrics including LCP, INP, and CLS used as search ranking signals" },
                { "@type": "Thing", "name": "Website Migration", "description": "The process of moving a website from one platform to another while preserving SEO rankings and content" }
            ],
            "citation": [
                { "@type": "WebPage", "name": "Wix Help: Site Performance Best Practices", "url": "https://support.wix.com/en/article/site-performance-best-practices" },
                { "@type": "WebPage", "name": "Capterra: Wix Reviews 2026", "url": "https://www.capterra.com/p/169007/Wix/reviews/" },
                { "@type": "WebPage", "name": "OneSMARTSheep: 17 Reasons Not to Use Wix for Business", "url": "https://onesmartsheep.com/post/10-huge-reasons-not-to-use-wix-for-business-websites" },
                { "@type": "WebPage", "name": "Ahrefs: Is Wix Good for SEO?", "url": "https://ahrefs.com/blog/wix-seo/" },
                { "@type": "WebPage", "name": "Wix Engineering: 40% Faster Interaction via Selective Hydration", "url": "https://www.wix.engineering/post/40-faster-interaction-how-wix-solved-react-s-hydration-problem-with-selective-hydration-and-suspen" },
                { "@type": "WebPage", "name": "Google: Web Vitals", "url": "https://web.dev/articles/vitals" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Wix vs Custom Website", "item": "https://www.pandacodegen.com/blog/wix-vs-custom-website" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wix-vs-custom-website",
            "url": "https://www.pandacodegen.com/blog/wix-vs-custom-website",
            "name": "Wix vs Custom Website 2026: When Wix Stops Working for Growing Businesses",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-04-13",
            "dateModified": "2026-04-13"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow, expensive platforms. We guarantee 95 to 100/100 Google PageSpeed on every build.",
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
                "https://twitter.com/pandacodegen",
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
                "https://clutch.co/profile/panda-code-gen",
                "https://www.trustpilot.com/review/pandacodegen.com",
                "https://www.google.com/maps?cid=16271659886069582158",
                "https://www.goodfirms.co/company/pandacodegen",
                "https://www.crunchbase.com/organization/pandacodegen",
                "https://www.sanity.io/exchange/community/pandacodegen",
                "https://www.behance.net/pandacodegen",
                "https://dev.to/pandacodegen"
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/wix-vs-custom-website#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function WixVsCustomWebsitePage() {
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
                            { label: "Wix vs Custom Website", href: "/blog/wix-vs-custom-website" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-stone-100 text-stone-600 rounded-full mb-4">Comparison</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Wix vs Custom Website 2026:{" "}
                            <span className="font-serif italic text-cognac">When Wix Stops Working</span> for Growing Businesses
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            48% of Wix sites fail Core Web Vitals on mobile in 2026. If your Wix site is slower than your competitors, costing more than you expected, and impossible to leave, this guide explains exactly why, and what to do about it.
                        </p>

                        <BlogAuthor
                            date="Apr 13, 2026"
                            readTime="12 min read"
                            bio="Hassan has migrated businesses from Wix, WordPress, Squarespace, and Webflow to custom Next.js sites. Every build scores 95 to 100 on Google PageSpeed. No templates. No page builders. No recurring platform fees."
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
                            "Wix works for personal sites and small portfolios. The problems start when your business depends on Google rankings, booking systems, or e-commerce that actually converts.",
                            "Every third-party app you add from the Wix App Market injects JavaScript that slows your site. You cannot remove the platform JavaScript. The speed ceiling is 35 to 55 on mobile PageSpeed.",
                            "Wix has no content export feature. If you decide to leave, your pages, images, and blog posts must be manually extracted. Your design cannot be taken with you at all.",
                            "A custom Next.js website scores 95 to 100 on PageSpeed, costs $0 to $20/month to host on Vercel, and you own every line of code. The upfront cost is higher, but the 3-year total cost is lower for any business spending $100+/month on Wix and apps."
                        ]} />
                    </div>

                    <div className="space-y-8">

                        {/* === SECTION 1: The Honeymoon === */}
                        <BlogHeader>Wix Works Great Until You Need It to Do More</BlogHeader>

                        <BlogText>
                            A business owner messaged us last month. &ldquo;I built my Wix site in a weekend two years ago. It looked great. Clients complimented it. I thought I was done.&rdquo;
                        </BlogText>

                        <BlogText>
                            She was not done. Over the next 18 months she added Wix Bookings for appointment scheduling. Then a third-party form app because Wix&apos;s free plan only allows 4 form submissions per month. Then an SEO app because Wix generates cryptic image filenames like <code className="bg-stone-100 px-1.5 py-0.5 rounded text-sm">09a0ab7~mv2.jpg</code> that hurt Google Image rankings. Then a chat widget. Then a review display app.
                        </BlogText>

                        <BlogText>
                            Each app felt like a small addition. But each one injected JavaScript into every page load. Her site went from loading in 2.5 seconds to 6.8 seconds. Her <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Google PageSpeed score</a> dropped from 60 to 31. Her Google rankings started slipping. Competitors with faster sites moved above her.
                        </BlogText>

                        <BlogText>
                            She did everything right. She just outgrew the platform. And that is the story we hear every week.
                        </BlogText>

                        <BlogQuote>
                            Wix is a great starter home. The problem is when your business grows and you realize you cannot renovate, you cannot add a second floor, and you cannot move the furniture to a new house.
                        </BlogQuote>

                        {/* === SECTION 2: The App Trap === */}
                        <BlogHeader>The App Trap: Every Feature You Add Makes Your Site Slower</BlogHeader>

                        <BlogText>
                            Wix&apos;s App Market has 500+ apps. On the surface, this looks like a strength. Need bookings? Add an app. Need email marketing? Add an app. Need live chat? Add an app. But <BlogHighlight>every third-party app loads inside an iframe with its own JavaScript bundle.</BlogHighlight> Each one adds 50 to 200 milliseconds of load time.
                        </BlogText>

                        <BlogText>
                            According to <a href="https://support.wix.com/en/article/site-performance-best-practices" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Wix&apos;s own support documentation</a>, third-party apps &ldquo;can impact site performance and loading speed&rdquo; and they recommend &ldquo;replacing all third-party apps with Wix apps&rdquo; where possible. But Wix&apos;s native apps do not cover every business need. You need forms beyond the free limit. You need review widgets. You need chat. You need SEO tools.
                        </BlogText>

                        <BlogText>
                            Here is what a typical business Wix site looks like after 12 months:
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1 swipe-hint">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">What You Added</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Why You Needed It</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Speed Impact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-medium">Wix Bookings</td>
                                        <td data-label="Why You Needed It" className="p-3 border border-stone-200">Clients need to schedule appointments</td>
                                        <td data-label="Speed Impact" className="p-3 border border-stone-200 text-red-600">+150ms, fixed session durations only</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-medium">Third-party form app</td>
                                        <td data-label="Why You Needed It" className="p-3 border border-stone-200">Wix free plan limits to 4 forms/month</td>
                                        <td data-label="Speed Impact" className="p-3 border border-stone-200 text-red-600">+200ms iframe load</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-medium">SEO app</td>
                                        <td data-label="Why You Needed It" className="p-3 border border-stone-200">Wix auto-generates cryptic image filenames</td>
                                        <td data-label="Speed Impact" className="p-3 border border-stone-200 text-red-600">+120ms JavaScript</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-medium">Chat widget</td>
                                        <td data-label="Why You Needed It" className="p-3 border border-stone-200">Clients expect instant communication</td>
                                        <td data-label="Speed Impact" className="p-3 border border-stone-200 text-red-600">+180ms external script</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-medium">Review display</td>
                                        <td data-label="Why You Needed It" className="p-3 border border-stone-200">Social proof increases conversions</td>
                                        <td data-label="Speed Impact" className="p-3 border border-stone-200 text-red-600">+150ms API call + render</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-bold">Total added load time</td>
                                        <td data-label="Why You Needed It" className="p-3 border border-stone-200"></td>
                                        <td data-label="Speed Impact" className="p-3 border border-stone-200 text-red-600 font-bold">+800ms on top of Wix baseline</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            That is 800 milliseconds of load time from apps you genuinely need to run your business. And this is on top of the 200 to 400KB of JavaScript that Wix loads on every page regardless. The result: a site that started at 2.5 seconds now loads in 5 to 7 seconds. Google&apos;s threshold for a &ldquo;good&rdquo; Largest Contentful Paint is <BlogHighlight>2.5 seconds. Your Wix site is 2 to 3 times over the line.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            Wix&apos;s official advice? Remove the apps. But you cannot remove the apps without removing the features your business depends on. That is the trap.
                        </BlogText>

                        {/* === SECTION 3: SEO Ceiling === */}
                        <BlogHeader>Why Your Wix SEO Hit a Ceiling (and Apps Cannot Fix It)</BlogHeader>

                        <BlogText>
                            Wix has improved its SEO tools significantly since 2020. You can set title tags, meta descriptions, and alt text. <a href="https://ahrefs.com/blog/wix-seo/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Ahrefs confirms that Wix can rank on Google</a>, and many Wix sites do. But there are structural limitations that no SEO app can solve:
                        </BlogText>

                        <BlogList items={[
                            "Image filenames are auto-generated hashes (09a0ab7~mv2.jpg) instead of descriptive names. This hurts Google Image rankings and makes your images invisible in image search results.",
                            "The sitemap is auto-generated and difficult to customize. You cannot prioritize pages or exclude thin content without workarounds.",
                            "Rich snippets (FAQ dropdowns, review stars, how-to cards in Google results) are not natively supported. You need code injections or third-party apps, which add more JavaScript.",
                            "International SEO is limited. Wix adds generic language codes to URLs and offers minimal control over translated content, making multi-language sites difficult to optimize.",
                            "Core Web Vitals scores are structurally capped at 35 to 55 on mobile because of the mandatory platform JavaScript. Google uses Core Web Vitals as a ranking factor. A competitor with a 95/100 site has a permanent structural advantage."
                        ]} />

                        <BlogText>
                            You can do keyword research, write great content, build backlinks, and follow every SEO best practice. But if your competitor&apos;s site loads in 1 second and yours loads in 5 seconds, <BlogHighlight>Google will rank them higher for the same keywords.</BlogHighlight> That is not an opinion. It is how <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Core Web Vitals work as a ranking signal</a>.
                        </BlogText>

                        <BlogText>
                            For a deeper look at the speed data, see our full breakdown: <Link href="/blog/wix-too-slow" className="text-cognac hover:underline font-medium">Wix Website Too Slow? 48% of Wix Sites Fail Core Web Vitals in 2026</Link>.
                        </BlogText>

                        {/* === SECTION 4: The PageSpeed Wall === */}
                        <BlogHeader>The PageSpeed Wall: 35 to 55 on Mobile No Matter What You Do</BlogHeader>

                        <BlogText>
                            This is the part that frustrates business owners the most. You have done everything Wix recommends. Compressed images. Removed unused sections. Limited animations. Reduced your page count. Your PageSpeed score is still 35 to 55.
                        </BlogText>

                        <BlogText>
                            The reason is architectural. Wix loads its own JavaScript framework on every page. This JavaScript powers the drag-and-drop editor, the analytics, the platform features, and the rendering engine. <BlogHighlight>You cannot remove this JavaScript. It is not an app. It is the platform itself.</BlogHighlight> According to <a href="https://www.wix.engineering/post/40-faster-interaction-how-wix-solved-react-s-hydration-problem-with-selective-hydration-and-suspen" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Wix Engineering</a>, they have optimized their hydration process by 40%, but the baseline JavaScript bundle is still 200 to 400KB before your content loads.
                        </BlogText>

                        <BlogText>
                            A custom Next.js site ships 40 to 80KB of JavaScript per page. That is 80 to 90% less. The browser has less to download, less to parse, and less to execute. That is why custom sites score 95 to 100 on the same test where Wix scores 35 to 55.
                        </BlogText>

                        <BlogText>
                            To put this in business terms: <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Google research</a> shows that 53% of mobile visitors leave a site that takes longer than 3 seconds to load. If your Wix site loads in 5 to 7 seconds, you are losing more than half your mobile visitors before they see your first word of content.
                        </BlogText>

                        {/* === MID CTA === */}
                        <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Want to see your real Wix speed score?</p>
                            <p className="text-stone-600 mb-4 text-sm">Share your URL on the call. We run PageSpeed live, show you the bottleneck, and give you an honest recommendation. No obligation.</p>
                            <CalModalButton className="inline-flex items-center gap-2 bg-cognac hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                                Get Free Wix Speed Audit
                                <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        {/* === SECTION 5: The Lock-In === */}
                        <BlogHeader>What Leaving Wix Actually Costs (Money, Time, and Rankings)</BlogHeader>

                        <BlogText>
                            This is where most business owners get stuck. You know Wix is holding you back. But leaving feels expensive and risky. Let us break down what it actually involves.
                        </BlogText>

                        <BlogText>
                            <strong>The content problem:</strong> Wix has <BlogHighlight>no content export feature.</BlogHighlight> You cannot download your pages, blog posts, or images in a usable format. If you want to leave, every piece of content must be manually extracted or programmatically scraped. Your design cannot be taken with you at all because it is built with Wix&apos;s proprietary rendering engine, not standard HTML and CSS.
                        </BlogText>

                        <BlogText>
                            <strong>The domain problem:</strong> If you purchased your domain through Wix, they lock your nameservers. Transferring your domain to another registrar means your DNS goes dark during the transfer period unless you plan the cutover carefully. This is a solvable problem, but it requires coordination.
                        </BlogText>

                        <BlogText>
                            <strong>The SEO risk:</strong> This is the fear that stops most migrations. &ldquo;Will I lose my Google rankings?&rdquo; The answer: not if you map every URL with 301 redirects, preserve all metadata, and submit a new sitemap to Google Search Console on launch day. We have migrated businesses from Wix, WordPress, Squarespace, and Webflow. When done correctly, rankings hold within 30 days and <BlogHighlight>typically improve within 60 to 90 days</BlogHighlight> because the new site loads 3 to 5 times faster.
                        </BlogText>

                        <BlogText>
                            <strong>The real cost:</strong> A Wix to custom Next.js migration costs $3,500 to $8,000 for most business sites (5 to 30 pages). That sounds expensive until you compare it to what you are already paying. If your Wix bill (plan + apps + add-ons) is $100/month, that is $1,200/year or $3,600 over 3 years. A custom site hosted on Vercel starts free and only scales to $20/month when your business grows. The migration pays for itself in hosting savings alone within 18 to 24 months. Add the revenue gained from better PageSpeed scores and higher Google rankings, and payback is often under 12 months.
                        </BlogText>

                        {/* === SECTION 6: What Custom Gives You === */}
                        <BlogHeader>What a Custom Website Actually Gives You</BlogHeader>

                        <BlogText>
                            Not a pitch. A list of what changes when you go from Wix to custom code, and why each one matters to your business:
                        </BlogText>

                        <div className="grid gap-4 my-8">
                            {[
                                { icon: Zap, title: "95 to 100/100 PageSpeed on mobile", desc: "Pages pre-built at deploy time. No server rendering on each visit. No platform JavaScript. Your site loads in under 1 second on any device, anywhere in the world." },
                                { icon: DollarSign, title: "Hosting starts free on Vercel", desc: "Vercel's free tier handles most business sites. You only scale to $20/month when your business grows past free tier limits. Compare that to Wix's $17 to $49/month platform fee plus app costs." },
                                { icon: Lock, title: "You own the code", desc: "The source code lives in your GitHub repository. Fire us and hire any developer in the world. Move to any hosting provider. No lock-in. No export limitations. The code is yours from day one." },
                                { icon: CheckCircle2, title: "No app fees", desc: "Every feature Wix charges an app for (booking, forms, reviews, chat, SEO) gets built into the code once. No monthly subscriptions. No iframe overhead. No third-party JavaScript slowing your site." },
                                { icon: TrendingDown, title: "No SEO ceiling", desc: "Full control over image filenames, sitemap structure, rich snippets, structured data, and server-side rendering. Nothing between your content and Google's crawler." },
                                { icon: AlertTriangle, title: "No content lock-in", desc: "Your content lives in a headless CMS like Sanity or in your codebase directly. Export it anytime. Move it anywhere. Your content is a portable asset, not a hostage." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 p-4 bg-stone-50 border border-stone-200 rounded-xl">
                                    <item.icon className="w-5 h-5 text-cognac mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-bold text-charcoal text-sm mb-1">{item.title}</p>
                                        <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <BlogText>
                            For a real example of what this looks like in production, see how we rebuilt a 3-year-old WordPress e-commerce site into a complete headless platform: <Link href="/work/panda-patches" className="text-cognac hover:underline font-medium">Panda Patches case study</Link>. The site now generates $38,000/month in revenue on roughly $25/month in total tooling costs.
                        </BlogText>

                        {/* === SECTION 7: When to STAY === */}
                        <BlogHeader>When You Should Stay on Wix (Honest Answer)</BlogHeader>

                        <BlogText>
                            We are not going to tell you everyone should leave Wix. That would be dishonest. Wix is the right choice for specific situations:
                        </BlogText>

                        <BlogList items={[
                            "Personal portfolios and hobby sites where Google rankings do not matter to your income.",
                            "Very small businesses with under 1,000 monthly visitors and no competitor outranking you on speed.",
                            "Businesses where the website is a digital business card, not a revenue driver. If nobody finds you through Google search and all your clients come from referrals, Wix is fine.",
                            "Businesses with no budget for a custom build and no monthly app spend over $50/month. At this level, the cost math does not justify migration yet.",
                            "Businesses where the owner wants to edit the site themselves without any developer involvement. Wix's drag-and-drop editor is genuinely easy. A headless CMS requires a brief learning curve."
                        ]} />

                        <BlogText>
                            If three or more of these describe your situation, stay on Wix. Optimize your images, minimize apps, and focus on content. Wix will serve you well enough.
                        </BlogText>

                        {/* === SECTION 8: When to Leave === */}
                        <BlogHeader>When It Is Time to Leave Wix: The 5 Signals</BlogHeader>

                        <BlogText>
                            If any of these sound familiar, you have outgrown Wix:
                        </BlogText>

                        <div className="space-y-4 my-8">
                            {[
                                { num: "1", title: "Your PageSpeed mobile score is below 50", desc: "And you have already optimized images and removed unnecessary apps. The remaining score is the platform ceiling. No further optimization will fix it." },
                                { num: "2", title: "Your Wix bill exceeds $100/month when you add plan plus apps", desc: "At this spend level, a custom site pays for itself in hosting savings within 18 to 24 months. You are renting features you could own." },
                                { num: "3", title: "A competitor with a faster site is outranking you", desc: "If you are losing position on keywords you should own, check their PageSpeed score. If they are at 90+ and you are at 40, speed is the gap." },
                                { num: "4", title: "You need booking, e-commerce, or forms that actually work", desc: "Wix Bookings cannot handle 45-minute sessions (only fixed durations). Forms are capped at 4/month on the free plan. E-commerce transaction fees add 2% on top of Stripe fees. These limitations cost you money every day." },
                                { num: "5", title: "You have tried to leave and discovered there is no export", desc: "If you have already looked into migrating and hit the 'no export' wall, you already know the problem. Every month you wait, you add more content that will need to be manually extracted later." },
                            ].map((signal) => (
                                <div key={signal.num} className="flex gap-4 p-4 border border-stone-200 rounded-xl hover:border-cognac/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-cognac/10 flex items-center justify-center shrink-0">
                                        <span className="text-cognac font-bold text-sm">{signal.num}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-charcoal text-sm mb-1">{signal.title}</p>
                                        <p className="text-stone-600 text-sm leading-relaxed">{signal.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <BlogText>
                            If two or more of these apply, migration will pay for itself. If all five apply, every month you stay on Wix is costing you money in lost rankings, lost conversions, and rising platform fees.
                        </BlogText>

                        {/* === SECTION 9: 3-Year Cost Comparison === */}
                        <BlogHeader>3-Year Total Cost: Wix vs Custom Website</BlogHeader>

                        <BlogText>
                            Here is the real math. Not the monthly price tag. The total cost of running each option for 3 years including everything:
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 flex items-center gap-1 swipe-hint">&larr; Swipe to see more &rarr;</p>
                        <div className="my-4 overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-sm border-collapse border border-stone-300 min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Cost Item</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Wix (3 years)</th>
                                        <th className="text-left p-3 font-bold text-charcoal border border-stone-200">Custom Next.js (3 years)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-medium">Platform/Hosting</td>
                                        <td data-label="Wix (3 years)" className="p-3 border border-stone-200">$612 to $1,764 ($17 to $49/mo)</td>
                                        <td data-label="Custom Next.js (3 years)" className="p-3 border border-stone-200 text-green-700">$0 to $720 (free, $20/mo when you scale)</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-medium">Apps and add-ons</td>
                                        <td data-label="Wix (3 years)" className="p-3 border border-stone-200">$1,080 to $3,600 ($30 to $100/mo avg)</td>
                                        <td data-label="Custom Next.js (3 years)" className="p-3 border border-stone-200 text-green-700">$0 (built into code)</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-medium">Domain</td>
                                        <td data-label="Wix (3 years)" className="p-3 border border-stone-200">$42 to $150</td>
                                        <td data-label="Custom Next.js (3 years)" className="p-3 border border-stone-200">$36 to $60 (Cloudflare Registrar)</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-medium">Build cost</td>
                                        <td data-label="Wix (3 years)" className="p-3 border border-stone-200">$0 (DIY) or $500 to $2,000 (designer)</td>
                                        <td data-label="Custom Next.js (3 years)" className="p-3 border border-stone-200">$3,500 to $8,000 (one-time)</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-bold">3-Year Total</td>
                                        <td data-label="Wix (3 years)" className="p-3 border border-stone-200 font-bold text-red-600">$1,734 to $7,514</td>
                                        <td data-label="Custom Next.js (3 years)" className="p-3 border border-stone-200 font-bold text-green-700">$3,536 to $8,780</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50 bg-stone-50/50">
                                        <td className="p-3 border border-stone-200 font-bold">PageSpeed Score</td>
                                        <td data-label="Wix (3 years)" className="p-3 border border-stone-200 font-bold text-red-600">35 to 55 (mobile)</td>
                                        <td data-label="Custom Next.js (3 years)" className="p-3 border border-stone-200 font-bold text-green-700">95 to 100 (mobile)</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="p-3 border border-stone-200 font-bold">Code Ownership</td>
                                        <td data-label="Wix (3 years)" className="p-3 border border-stone-200 font-bold text-red-600">No (no export)</td>
                                        <td data-label="Custom Next.js (3 years)" className="p-3 border border-stone-200 font-bold text-green-700">Yes (GitHub, yours forever)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            The upfront cost of custom is higher. But <BlogHighlight>the moment your Wix spend exceeds $100/month (plan + apps), custom code becomes cheaper by year 2.</BlogHighlight> And you get a site that is 3 to 5 times faster, ranks higher on Google, and belongs to you permanently.
                        </BlogText>

                        <BlogText>
                            For businesses where organic search drives revenue (service businesses, local businesses, e-commerce), the PageSpeed improvement alone can generate enough additional traffic and conversions to pay back the migration cost within 6 to 12 months. We detail the full ROI calculation in our <Link href="/blog/wix-too-slow" className="text-cognac hover:underline font-medium">Wix speed analysis</Link> and <Link href="/services/wix" className="text-cognac hover:underline font-medium">Wix migration service page</Link>.
                        </BlogText>

                        {/* === SECTION 10: What Migration Involves === */}
                        <BlogHeader>What a Wix to Custom Code Migration Actually Involves</BlogHeader>

                        <BlogText>
                            If you decide to migrate, here is what the process looks like from your side:
                        </BlogText>

                        <BlogList items={[
                            "Week 1: Discovery call. We audit your Wix site, run PageSpeed, inventory every page and blog post, map all URLs for 301 redirects, and identify which features (booking, forms, e-commerce) need to be rebuilt.",
                            "Week 2 to 3: Build. We rebuild your site in Next.js with the same content, improved design, and all features built natively (no apps, no iframes, no third-party scripts). You review progress on a staging URL.",
                            "Week 4: QA and launch. We test every page, verify all redirects, confirm PageSpeed scores are 95+, and execute a zero-downtime DNS cutover. Your old Wix site stays live until the new one is fully verified.",
                            "Day 1 to 30 post-launch: We monitor Google Search Console for any ranking fluctuations, fix any crawl issues, and confirm all rankings have held or improved. 30 days of post-launch support is included on every project."
                        ]} />

                        <BlogText>
                            The entire process takes 2 to 4 weeks for most business sites. You do not need to do anything technical. We handle the content extraction, the DNS transfer, the redirect mapping, and the Search Console setup.
                        </BlogText>

                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10 mt-16">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Wix works for starter sites.</strong> If your business is small, search rankings do not matter to your revenue, and your monthly spend is under $50, Wix is fine. Stay.</li>
                            <li><strong>Every app you add makes your site slower.</strong> Third-party Wix apps inject JavaScript that adds 50 to 200ms per app. 5 apps = 800ms+ of added load time on top of the platform baseline.</li>
                            <li><strong>The PageSpeed ceiling is 35 to 55 on mobile.</strong> This is architectural, not fixable with optimization. Wix loads 200 to 400KB of platform JavaScript that you cannot remove.</li>
                            <li><strong>Wix has no content export.</strong> Your pages, blog posts, and images are locked inside the platform. Leaving requires manual extraction or professional migration.</li>
                            <li><strong>Custom code costs more upfront but less over 3 years.</strong> A $3,500 to $8,000 custom build with hosting that starts free is cheaper than 3 years of Wix at $100+/month. And the site is 3x faster.</li>
                        </ol>
                    </section>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to See What a Faster Site Would Do for Your Business?</h3>
                        <p className="text-stone-600 mb-6 max-w-xl mx-auto text-sm">
                            Share your Wix URL on the call. We run PageSpeed live, show you exactly where the bottleneck is, and give you an honest recommendation: fix it, stay on Wix, or migrate. No pressure. 20 minutes.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 bg-cognac hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                            Get Free Wix Speed Audit
                            <ArrowRight className="w-5 h-5" />
                        </CalModalButton>
                    </div>

                    {/* FAQ */}
                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    {/* Related Posts */}
                    <RelatedPosts currentPostId="wix-vs-custom-website" />

                </article>
            </main>
            <Footer />
        </>
    );
}
