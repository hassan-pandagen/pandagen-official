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

const nextjsFAQs = blogPosts.find(p => p.id === 'why-we-chose-nextjs-over-wordpress-2026')?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = dynamic(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Why We Stopped Building WordPress Sites in 2026",
    description: "In 2023 we still built WordPress. By mid-2024 we stopped completely. Here are the 7 reasons, the client stories, and the data that made the switch permanent.",
    alternates: {
        canonical: '/blog/why-we-chose-nextjs-over-wordpress-2026',
    },
    openGraph: {
        title: "Why We Stopped Building WordPress Sites in 2026",
        description: "In 2023 we still built WordPress. By mid-2024 we stopped completely. Here are the 7 reasons, the client stories, and the data that made the switch permanent.",
        type: "article",
        publishedTime: "2026-03-04",
        authors: ["Hassan"],
        url: "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Why We Stopped Building WordPress Sites in 2026",
        description: "In 2023 we still built WordPress. By mid-2024 we stopped completely. Here are the 7 reasons, the client stories, and the data that made the switch permanent.",
    },
    keywords: ["nextjs vs wordpress 2026", "why nextjs over wordpress", "wordpress alternative nextjs", "switch from wordpress to nextjs", "nextjs benefits over wordpress"],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#article",
            "headline": "Why We Stopped Building WordPress Sites in 2026",
            "description": "In 2023 we still built WordPress. By mid-2024 we stopped completely. Here are the 7 reasons, the client stories, and the data that made the switch permanent.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-04T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026" },
            "articleSection": "Comparison",
            "keywords": ["nextjs vs wordpress 2026", "why nextjs over wordpress", "wordpress alternative nextjs", "switch from wordpress to nextjs", "nextjs benefits over wordpress"],
            "timeRequired": "PT11M",
            "wordCount": 2500,
            "about": [
                {"@type": "Thing", "name": "Next.js"},
                {"@type": "Thing", "name": "WordPress"},
                {"@type": "Thing", "name": "Website Performance Optimisation"},
                {"@type": "Thing", "name": "WordPress to Next.js Migration"}
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Next.js Documentation", "url": "https://nextjs.org/docs" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals Ranking Signal", "url": "https://developers.google.com/search/docs/appearance/core-web-vitals" },
                { "@type": "CreativeWork", "name": "Vercel Pricing", "url": "https://vercel.com/pricing" },
                { "@type": "CreativeWork", "name": "WordPress Security Report 2024. Sucuri", "url": "https://sucuri.net/reports/website-hacked-report/" },
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Sanity CMS Documentation", "url": "https://www.sanity.io/docs" },
                { "@type": "CreativeWork", "name": "Google Think: Mobile Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed and Revenue Research", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Why We Chose Next.js Over WordPress in 2026", "item": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#webpage",
            "url": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026",
            "name": "Why We Chose Next.js Over WordPress for Every New Client in 2026",
            "description": "In 2023 we still built in WordPress. By mid-2024 we stopped completely.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-03-04T00:00:00-05:00",
            "dateModified": "2026-03-10T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 95 to 100/100 Google PageSpeed on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#faq",
            "mainEntity": nextjsFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function WhyNextjsOverWordPressPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-20 md:pt-32 pb-20">
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
                            { label: "Why We Chose Next.js Over WordPress in 2026", href: "/blog/why-we-chose-nextjs-over-wordpress-2026" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Why We Chose <span className="font-serif italic text-cognac">Next.js Over WordPress</span> for Every New Client in 2026
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            In 2023 we still built in WordPress. By mid-2024 we stopped completely. Here&apos;s the data, the client stories, and the 7 reasons we made the switch permanent.
                        </p>

                        <BlogAuthor
                            date="Mar 4, 2026"
                            readTime="11 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <PageSpeedAnimation />
                    </div>

                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-12" data-speakable="true">
                        <h3 className="font-bold text-charcoal mb-4">Executive Summary</h3>
                        <BlogList items={[
                            "In 2023, we built client sites in WordPress. By late 2024, every new project was Next.js. This is why.",
                            "The breaking point: A client showed us data proving their WordPress site (3.2s load) was outranked on every keyword by competitors loading in under 1 second.",
                            "We now guarantee 95 to 100/100 PageSpeed, $0/month hosting, and zero plugin vulnerabilities on every build.",
                            "When is WordPress still OK? Hobby blogs, small personal sites, and situations where the client will self-manage without developer help."
                        ]} />
                    </div>

                    <div className="space-y-8">

                        <BlogText>
                            We need to say something upfront: we spent years building in WordPress. Some of those sites are still running today.
                        </BlogText>

                        <BlogText>
                            We&apos;re not here to trash WordPress. It built an industry. It gave millions of people a website when they couldn&apos;t afford custom development. That&apos;s real value.
                        </BlogText>

                        <BlogText>
                            But for business clients in 2026: businesses that depend on their website for leads, sales, and Google traffic. <BlogHighlight>we can no longer in good conscience recommend WordPress.</BlogHighlight> Here&apos;s exactly why.
                        </BlogText>

                        <BlogHeader>What Finally Changed Our Mind (The Client Who Showed Us the Data)</BlogHeader>

                        <BlogText>
                            In mid-2024, we had a client: an e-commerce store on WordPress/WooCommerce, come to us frustrated. Their competitor, who had launched 18 months earlier, was outranking them on almost every keyword.
                        </BlogText>

                        <BlogText>
                            We ran a technical audit. The findings were uncomfortable:
                        </BlogText>

                        <BlogList items={[
                            "Our client's site: 3.2 second load time, 42/100 PageSpeed Mobile",
                            "Their competitor's site: 0.9 second load time, 97/100 PageSpeed Mobile",
                            "Google ranking difference: 15 to 22 positions on every core keyword",
                            "Traffic difference: Competitor was getting 6× more organic traffic",
                            "The competitor's tech stack: Next.js + Vercel"
                        ]} />

                        <BlogText>
                            We had built a WordPress site that was perfectly set up. Good plugins. Clean theme. Decent hosting (Kinsta). And it was still being outranked by a Next.js site running for free on Vercel.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>That&apos;s when we knew WordPress wasn&apos;t a cost-saving tool anymore. It was a competitive disadvantage.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>Reason 1: The Speed Difference Is Not Marginal. It&apos;s Structural</BlogHeader>

                        <BlogText>
                            This is the core issue. WordPress and Next.js don&apos;t have a performance gap. They have a performance canyon.
                        </BlogText>

                        <div className="my-10 border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
                            <div className="grid grid-cols-3 bg-stone-50 px-5 py-3 border-b border-stone-200 text-xs font-black text-stone-400 uppercase tracking-widest">
                                <div>Metric</div>
                                <div className="text-center text-red-400">WordPress</div>
                                <div className="text-center text-charcoal">Next.js</div>
                            </div>
                            {[
                                { metric: "Average Load Time", wp: "3.8s", nxt: "0.9s" },
                                { metric: "Mobile PageSpeed", wp: "35 to 65/100", nxt: "95 to 100/100" },
                                { metric: "Time to Interactive", wp: "5.2s", nxt: "1.1s" },
                                { metric: "Monthly Hosting Cost", wp: "$150 to $400", nxt: "$0 to $20" },
                                { metric: "Plugin Vulnerabilities", wp: "20 to 30+ surfaces", nxt: "Zero" },
                                { metric: "Maintenance Required", wp: "4 to 8 hrs/month", nxt: "Near zero" },
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 px-5 py-3 border-b border-stone-100 last:border-0 text-sm hover:bg-stone-50/50 transition-colors">
                                    <div className="text-charcoal font-medium">{row.metric}</div>
                                    <div className="text-center text-stone-400">{row.wp}</div>
                                    <div className="text-center font-bold text-charcoal">{row.nxt}</div>
                                </div>
                            ))}
                        </div>

                        <BlogText>
                            Why is it structural? WordPress generates pages server-side on every request. Each page load triggers PHP execution, a database query, and 20-30 plugin operations before a single byte reaches the visitor.
                        </BlogText>

                        <BlogText>
                            Next.js pre-builds pages at deploy time and serves cached HTML from a global edge network. The server does zero work on each page load. That&apos;s not optimization. That&apos;s a fundamentally different architecture.
                        </BlogText>

                        <BlogQuote>
                            You can&apos;t caching-plugin your way to 0.9 second load times on WordPress. The architecture doesn&apos;t allow it.
                        </BlogQuote>

                        <BlogHeader>Reason 2: Hosting Cost Goes from $150/Month to $0</BlogHeader>

                        <BlogText>
                            When we tell clients their new site will host for free, they don&apos;t believe us at first.
                        </BlogText>

                        <BlogText>
                            Vercel&apos;s free tier handles most business websites with no problem. Pages load from 300+ global edge locations. Zero server maintenance. Auto-scaling. 99.99% uptime.
                        </BlogText>

                        <BlogText>
                            Compared to:
                        </BlogText>

                        <BlogList items={[
                            "WP Engine: $30 to $400/month depending on traffic",
                            "Kinsta: $35 to $300/month for comparable performance",
                            "Cloudways: $14 to $80/month (plus server management overhead)",
                            "SiteGround: $20 to $100/month (and still slow under load)"
                        ]} />

                        <BlogText>
                            The savings over 3 years: <BlogHighlight>$1,800 to $14,400 in hosting costs alone.</BlogHighlight> On top of the build investment, which pays for itself faster every month Vercel is free.
                        </BlogText>

                        <BlogHeader>Reason 3: Zero Security Vulnerabilities (No Plugins = No Attack Surface)</BlogHeader>

                        <BlogText>
                            43% of all website hacks in 2024 targeted WordPress. Not because WordPress itself is insecure, but because of how WordPress is used.
                        </BlogText>

                        <BlogText>
                            The average WordPress site runs 20-30 plugins. Every plugin is third-party code maintained by a different developer. Each one is a potential security vulnerability. Each one can be outdated, abandoned, or exploited through a zero-day vulnerability.
                        </BlogText>

                        <BlogList items={[
                            "The contact form plugin gets abandoned. Security patch never comes.",
                            "The SEO plugin releases an update. Conflicts with your security plugin. Site goes down.",
                            "A plugin with 2M installations gets a critical CVE. You have 48 hours to patch before mass exploitation.",
                            "You go on vacation. An update runs automatically. Something breaks. Nobody notices for 3 days."
                        ]} />

                        <BlogText>
                            Custom Next.js sites have <BlogHighlight>zero plugins</BlogHighlight>. We build every feature from scratch using stable npm packages. No attack surface. No plugin conflicts. No emergency patches.
                        </BlogText>

                        <BlogHeader>Reason 4: 100/100 PageSpeed Is Achievable and Repeatable</BlogHeader>

                        <BlogText>
                            We guarantee 95-100/100 PageSpeed Mobile on every client site. Not because we&apos;re magicians. Because Next.js makes it structurally achievable. You can see exactly what goes into each build on our <Link href="/services/custom-engineering" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">custom engineering service page</Link>.
                        </BlogText>

                        <BlogText>
                            <strong>What we get on every build:</strong>
                        </BlogText>

                        <BlogList items={[
                            "Images are automatically compressed and sized for each device, no manual optimisation needed",
                            "Fonts load instantly with no blank text or flicker while the page renders",
                            "Each page only loads the code it actually needs, nothing extra to slow things down",
                            "Heavy processing happens on our servers before the page ever reaches your visitor",
                            "Your pages are stored at 300+ locations worldwide, visitors load from the nearest one",
                            "Your site only ships the design code it uses: zero bloat, zero wasted load time"
                        ]} />

                        <BlogText>
                            WordPress best case: 65-75/100. And that requires removing most plugins, using a minimal theme, and spending significant developer time on optimization. Even then, it tops out at 70-75.
                        </BlogText>

                        <BlogText>
                            Our recent clients: MyCustomPatches. <a href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">100/100</a>. Our own agency site (this one). 100/100. Every project. Consistent.
                        </BlogText>

                        <BlogHeader>Reason 5: The Content Editor Is Better Than WordPress Admin</BlogHeader>

                        <BlogText>
                            &quot;But my team knows WordPress. What do they use to edit the site?&quot;
                        </BlogText>

                        <BlogText>
                            We connect Next.js to a headless CMS (usually Sanity). Here&apos;s what clients actually say after the switch:
                        </BlogText>

                        <BlogList items={[
                            "\"This is way simpler than WordPress.\" (Most common response)",
                            "\"Where are all the settings I never used?\" (They&apos;re gone, intentionally)",
                            "\"I can actually see what I&apos;m editing.\" (Visual editing with live preview)",
                            "\"I don&apos;t have to update plugins anymore?\" (Correct)"
                        ]} />

                        <BlogText>
                            Sanity gives you a clean, focused content dashboard. Edit text, images, blog posts, and pages. No theme settings. No plugin configurations. No Gutenberg block library to navigate. Just your content.
                        </BlogText>

                        <BlogText>
                            And since it&apos;s separate from the site code, a content editor can never accidentally break the site by clicking the wrong setting.
                        </BlogText>

                        {/* Mid-Article CTA */}
                        <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Still on WordPress?</p>
                            <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. We test your speed live on the call and show you the exact performance gap between your WordPress site and a custom Next.js build. Takes 30 minutes.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                    Get Free WordPress Audit <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                        </div>

                        <BlogHeader>Reason 6: You Own the Code Completely</BlogHeader>

                        <BlogText>
                            With WordPress, you own a configuration of someone else&apos;s software. The theme is built by a third party. The plugins are built by third parties. Your website&apos;s functionality depends on other people&apos;s code staying maintained.
                        </BlogText>

                        <BlogText>
                            What happens when a critical plugin gets acquired and the new owner raises the price 5×? What happens when your theme&apos;s developer abandons it? What happens when WordPress changes a core API and suddenly half your plugins break?
                        </BlogText>

                        <BlogText>
                            With a custom coded site:
                        </BlogText>

                        <BlogList items={[
                            "Every line of code is yours",
                            "No subscriptions that can be cancelled or price-hiked",
                            "No third-party abandonment risk",
                            "Any developer can pick it up and work on it (clean, standard Next.js)",
                            "You&apos;re not locked into our agency forever: the code is portable"
                        ]} />

                        <BlogText>
                            <BlogHighlight>You own an asset, not a license.</BlogHighlight> That distinction matters when you&apos;re selling your business or onboarding a new developer.
                        </BlogText>

                        <BlogHeader>Reason 7: It Scales Without Extra Cost</BlogHeader>

                        <BlogText>
                            WordPress hosting costs increase with traffic. Go viral on a Tuesday morning and your shared/VPS hosting buckles. You upgrade. Costs more. Then traffic normalizes and you&apos;re overpaying.
                        </BlogText>

                        <BlogText>
                            Vercel&apos;s edge network serves 100 visitors or 10 million visitors for essentially the same cost. Pages are pre-built. Servers don&apos;t spin up per request. There&apos;s no infrastructure to scale manually.
                        </BlogText>

                        <BlogText>
                            For e-commerce clients running campaigns, this is a non-trivial advantage. Your Shopify sale gets featured on a big newsletter. Traffic spikes 50×. The WordPress/WooCommerce site crashes. The Next.js custom store doesn&apos;t notice. For a side-by-side look at how these platforms compare on every axis, see our full <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress vs Next.js breakdown</Link>.
                        </BlogText>

                        <BlogHeader>When Is WordPress Still the Right Choice?</BlogHeader>

                        <BlogText>
                            We&apos;re going to be honest here. WordPress is still the right choice in some situations.
                        </BlogText>

                        <BlogList items={[
                            "You want to self-manage the site without any developer involvement, ever",
                            "You run a personal blog or community site where speed isn&apos;t a revenue factor",
                            "Your budget is under $5,000 total and you need something functional now",
                            "You have an existing large WordPress site with thousands of pages and migration ROI doesn&apos;t pencil out yet"
                        ]} />

                        <BlogText>
                            For everything else: businesses where the website drives leads, sales, bookings, or brand credibility. <BlogHighlight>the economics of Next.js are better in every dimension that affects your business outcomes.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What Happens to Your SEO When You Migrate?</BlogHeader>

                        <BlogText>
                            This is the concern we hear most: &quot;We&apos;ve spent years building our WordPress SEO. Won&apos;t switching destroy our rankings?&quot;
                        </BlogText>

                        <BlogText>
                            When done correctly: no. Here&apos;s the exact process we use to protect your rankings:
                        </BlogText>

                        <BlogList items={[
                            "Audit every URL on your WordPress site before migration begins",
                            "Build the new site with identical URL structure (zero URL changes where possible)",
                            "Map every changed URL to a 301 permanent redirect",
                            "Migrate all meta titles, descriptions, canonical tags, and schema markup",
                            "Run parallel: Keep WordPress live until new site passes all SEO checks",
                            "Post-launch: 30-day monitoring of Google Search Console for crawl issues"
                        ]} />

                        <BlogText>
                            Most clients see their Google rankings recover within 30 to 60 days. Within 90 days, rankings improve because Google now sees <a href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">a faster site</a>, and faster sites rank higher than slower ones with identical content.
                        </BlogText>

                        <BlogText>
                            See exactly how this worked for MyCustomPatches: a 200-page WordPress site with 10 years of content migrated with zero ranking drops. In our{" "}
                            <Link href="/work/mycustompatches" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">
                                MyCustomPatches case study
                            </Link>.
                        </BlogText>

                        <BlogHeader>What Does the Migration Process Look Like?</BlogHeader>

                        <BlogText>
                            We follow the same 6-week process for every WordPress migration:
                        </BlogText>

                        <BlogList items={[
                            "Week 1: Full WordPress audit: every URL, page, image, plugin, and SEO tag catalogued",
                            "Weeks 2 to 4: Build the new Next.js site. Same content, same structure, zero WordPress",
                            "Week 5: Content migration, URL mapping, redirect configuration, PageSpeed testing",
                            "Week 6: Zero-downtime launch. DNS cutover while old WordPress site stays live in parallel",
                            "30 days post-launch: Google Search Console monitoring, crawl error fixes, ranking tracking"
                        ]} />

                        <BlogText>
                            Throughout the process, your WordPress site stays fully live. Your visitors never see a maintenance page. When we flip the DNS, the new site is ready and tested. The transition takes minutes, not hours.
                        </BlogText>

                        <BlogText>
                            Ready to see what your site looks like on Next.js? We offer a free WordPress audit where we analyse your current setup, show you what a migration would involve, and give you the honest 3-year cost comparison. See our{" "}
                            <Link href="/services/wordpress-migration" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">
                                WordPress Migration service
                            </Link>{" "}
                            page for more detail.
                        </BlogText>
                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>The speed gap is structural, not fixable with plugins</strong>. WordPress loads in 3.8 seconds on average while Next.js loads in 0.9 seconds because they use fundamentally different architectures.</li>
                            <li><strong>Hosting drops from $150-$400/month to $0</strong>. Vercel's free tier handles most business sites because pre-built static pages require no server computation per visit.</li>
                            <li><strong>Zero plugins means zero security vulnerabilities</strong>. 43% of all website hacks target WordPress through its plugin ecosystem, an attack surface that does not exist in custom Next.js builds.</li>
                            <li><strong>You own the code, not a licence</strong>: Unlike WordPress where your site depends on third-party themes and plugins, a custom coded site is a portable asset any developer can maintain.</li>
                            <li><strong>WordPress is still right for hobby blogs and small personal sites</strong>, if speed, SEO, and revenue are not priorities, WordPress's convenience still makes sense.</li>
                        </ol>
                    </section>

                    {/* FAQ Section */}
                    {nextjsFAQs.length > 0 && <FAQAccordion faqs={nextjsFAQs} />}

                    {/* CTA Section */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Make the Switch to Next.js?</h3>
                        <p className="text-stone-600 mb-6">
                            Free audit. We&apos;ll show you what your site looks like on Next.js, what the migration would cost, and what rankings and revenue to expect within 90 days.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">
                                Schedule Free WordPress Audit <ArrowRight className="w-5 h-5" />
                            </CalModalButton>
                    </div>

                    {/* Related Posts */}
                    <RelatedPosts currentPostId="why-we-chose-nextjs-over-wordpress-2026" category="Comparison" />

                </article>
            </main>
            <Footer />
        </>
    );
}
