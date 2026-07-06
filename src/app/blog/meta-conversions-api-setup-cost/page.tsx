import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Server, TrendingUp } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor, StatCard, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postFAQs = blogPosts.find(p => p.id === "meta-conversions-api-setup-cost")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: { absolute: "Meta Conversions API Setup Cost: Why a Pixel Isn't Enough" },
    description: "Meta Conversions API setup costs $4,000 to $16,000. Our own store added about 10% more reported leads at 9.0 EMQ. What a custom server-side build costs.",
    alternates: { canonical: "/blog/meta-conversions-api-setup-cost" },
    keywords: [
        "meta conversions api setup",
        "facebook conversions api cost",
        "conversions api setup cost",
        "server side tracking cost",
        "capi setup",
        "facebook pixel vs conversions api",
        "server side conversion tracking agency",
        "meta capi custom setup",
        "stape alternative",
        "event match quality",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Meta Conversions API Setup Cost: Why a Pixel Isn't Enough (2026)",
        description: "A client-side pixel misses up to half your conversions. Here is what proper server-side Conversions API setup costs, what it delivered on our own store, and how a custom integration is built with no middleware.",
        type: "article",
        publishedTime: "2026-06-14T00:00:00-05:00",
        modifiedTime: "2026-06-14T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Meta Conversions API Setup Cost: Why a Pixel Isn't Enough (2026)",
        description: "What server-side Conversions API setup actually costs, what it delivered on our own store (~10% more leads reported, 9.0 EMQ), and how it is built with no middleware.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost#article",
            "headline": "Meta Conversions API Setup: What It Costs and Why a Pixel Isn't Enough (2026)",
            "description": "Meta Conversions API setup costs $4,000 to $16,000 standalone or arrives as monthly middleware. What it costs, what it delivered on our own store, and how a custom server-side integration is built with no third party in the data path.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-06-14T00:00:00-05:00",
            "dateModified": "2026-06-14T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost" },
            "articleSection": "Marketing",
            "keywords": ["meta conversions api setup", "facebook conversions api cost", "server side tracking", "event match quality", "capi custom setup"],
            "wordCount": 2600,
            "timeRequired": "PT12M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Meta Conversions API" },
                { "@type": "Thing", "name": "Server-Side Conversion Tracking" },
                { "@type": "Thing", "name": "Event Match Quality" },
                { "@type": "Thing", "name": "Facebook Pixel" },
                { "@type": "Thing", "name": "Ad Attribution" }
            ],
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Meta Conversions API Documentation", "url": "https://developers.facebook.com/docs/marketing-api/conversions-api" },
                { "@type": "CreativeWork", "name": "Meta: Deduplicate Pixel and Server Events", "url": "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events" },
                { "@type": "CreativeWork", "name": "Cometly: Conversion API Setup Cost 2026", "url": "https://www.cometly.com/post/conversion-api-setup-cost" },
                { "@type": "CreativeWork", "name": "Cometly: Server Side Tracking Cost 2026", "url": "https://www.cometly.com/post/server-side-tracking-cost" },
                { "@type": "CreativeWork", "name": "Stape: Conversions API Explained", "url": "https://stape.io/blog/conversions-api-explained" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Meta Conversions API Setup Cost", "item": "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/meta-conversions-api-setup-cost",
            "name": "Meta Conversions API Setup: What It Costs and Why a Pixel Isn't Enough (2026)",
            "description": "What server-side Conversions API setup costs, what it delivered on our own store, and how a custom integration is built with no middleware.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-14T00:00:00-05:00",
            "dateModified": "2026-06-14T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites with server-side conversion tracking built in. Sites load under 1 second, score 90+ on Google PageSpeed, and send clean ad signal directly to Meta with no middleware.",
            "areaServed": "Worldwide",
            "email": "info@pandacodegen.com",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen"
            ]
        }
    ]
};

export default function MetaCAPISetupCostPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Meta Conversions API Setup Cost" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-4">
                            <Server className="w-3 h-3" /> Ad Tracking
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Meta Conversions API Setup:{" "}
                            <span className="font-serif italic text-cognac">What It Costs and Why a Pixel Isn&apos;t Enough</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            A client-side Meta pixel misses up to half your conversions in 2026 because of iOS limits, ad blockers, and cookie loss. The fix is the Conversions API, the server-side half that sends conversions straight from your server, where no browser can drop them. As a standalone project that runs $4,000 to $16,000 in developer time, or it arrives as monthly middleware (Stape, a Gateway box) with a third party sitting in your customer data. We build it custom and direct instead, with no middleware in the path. On our own store after we set it up, Meta started reporting roughly 10% more lead conversions and Event Match Quality on lead events hit 9.0 out of 10. This post covers what proper setup costs, what it actually delivered, and how it is built.
                        </p>
                        <BlogAuthor
                            date="Jun 14, 2026"
                            readTime="12 min read"
                            bio="Hassan builds custom Next.js sites with server-side conversion tracking wired in, sending clean ad signal directly to Meta from the order database, no middleware, no monthly tracking fee."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Short Answer box */}
                    <div className="mb-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The Short Answer</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> A client-side pixel alone misses up to half your conversions. Meta can only optimize against what it can see, so a blurry signal quietly raises your cost per order even when your ads have not changed.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Standalone Conversions API setup costs $500 to $7,000 as an agency setup fee, or $4,000 to $16,000 in custom developer time. Middleware (Stape, Conversios, Meta&apos;s Gateway) is cheaper monthly but rents you a third-party data processor forever.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Real result on our own store (pandapatches.com): after building custom server-side tracking, Meta reported roughly 10% more lead conversions and Event Match Quality on lead events reached 9.0 out of 10.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> The cleaner data let us spot 3 underperforming ads Meta had been wasting budget on, cut them, and reallocate to the winners. Around a 10% efficiency gain early on, and like all ad data it moves day to day.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> We build it custom and direct (server to Meta&apos;s API, driven by the order database, no middleware), included in a Scale-tier build from $5,000. No monthly tracking fee after launch.</li>
                        </ul>
                    </div>

                    <BlogText>
                        Most websites we audit are running a Meta pixel and nothing else, and the business owner assumes their tracking is handled. It is not. The pixel is the browser half of the system, and the browser is exactly where conversions get lost in 2026. If you want the full picture of why platform stores leak conversion signal in the first place, we wrote that up separately in <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className="text-cognac hover:underline">why your ad costs climb while orders stay flat</Link>. This post is about the fix: what the Conversions API actually costs, what it delivers, and how it is built properly.
                    </BlogText>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen builds custom Next.js sites with server-side conversion tracking wired into the build. Events fire directly from your order database to Meta&apos;s API, with no middleware platform and no monthly tracking fee. We ran the exact setup described here on our own store first. Fixed pricing, Conversions API included from the Scale tier ($5,000).
                        </p>
                    </div>

                    <BlogHeader id="the-receipt">What It Did On Our Own Store</BlogHeader>
                    <BlogText>
                        We do not run a client&apos;s account as the example here. We run it on our own store, <a href="https://pandapatches.com" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">pandapatches.com</a>, where we spend our own money on Meta ads. That is the honest version of a case study: our budget, our risk, our numbers.
                    </BlogText>
                    <BlogText>
                        After we built the server-side Conversions API integration, here is what changed in Meta Events Manager (the default view there is a rolling 7-day window, so the exact figure moves day to day):
                    </BlogText>
                    <BlogList items={[
                        "Meta's own dashboard reported about 10.4% more Lead conversions from using the Conversions API alongside the pixel (see the screenshot below). Those conversions were always happening. Meta just could not see them until the server started sending them.",
                        "Event Match Quality on Lead events reached 9.0 out of 10. Meta rates this Great (8 and above). Most stores sit at 4 to 6.",
                        "The buyer-intent events are all in the Great range too: Initiate Checkout 8.8, Contact 8.6. Purchase (6.7) and PageView (6.2) sit lower, and that is fine. We are not running purchase-objective ads yet, we are just feeding Purchase data to Meta so the signal is clean and high quality the day we switch them on (it settles around 50 matched events, and we are close). PageView is anonymous traffic with no customer details to match, so its score naturally caps low and does not matter.",
                        "The bigger win was downstream: because Meta could finally see which specific ads produced paying customers, we identified 3 underperforming ads it had quietly been spending on, cut them, and moved that budget to the winners. Early on that ran around a 10% efficiency gain, though like all ad data the exact figure moves day to day.",
                    ]} />

                    <figure className="my-8">
                        <img
                            src="/blog-images/capi-conversions-lift-10pct.jpeg"
                            alt="Meta Events Manager for pandapatches.com showing about 10.4% more Lead conversions reported via the Conversions API, with Lead event match quality at 9.0 out of 10"
                            width={1213}
                            height={709}
                            loading="lazy"
                            className="w-full h-auto rounded-xl border border-stone-200"
                        />
                        <figcaption className="text-xs text-stone-500 mt-2 text-center">
                            Meta Events Manager, pandapatches.com (our own store): Meta reports about 10.4% more Lead conversions from the Conversions API, with Lead events at 9.0/10 Event Match Quality. The 7-day figure moves day to day.
                        </figcaption>
                    </figure>

                    <BlogQuote>
                        Better tracking did not change a single ad. It changed how accurately Meta spent our money. You cannot optimize toward buyers the algorithm cannot see.
                    </BlogQuote>
                    <BlogText>
                        One honest note on Event Match Quality, because it is the number that actually drives this. EMQ is Meta&apos;s 0-to-10 score for how well the customer data you send matches a real Meta user. It climbs when you send more matched identifiers per event, not just an email. We cover the full mechanics in the <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className="text-cognac hover:underline">tracking guide</Link>; the short version is that a 9.0 is what lets Meta attribute, build audiences, and optimize against real buyers instead of guesses.
                    </BlogText>

                    <BlogHeader id="what-it-costs">What Conversions API Setup Actually Costs</BlogHeader>
                    <BlogText>
                        There are three ways to get server-side tracking, and they cost very differently. Here is the honest market, with the standalone prices, so you can see where a bundled build fits.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                    <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-stone-50 border border-stone-300">
                                    <th className="text-left p-3 font-semibold text-stone-700">Approach</th>
                                    <th className="text-right p-3 font-semibold text-stone-700">Typical Cost</th>
                                    <th className="text-right p-3 font-semibold text-stone-700">Ongoing Fee</th>
                                    <th className="text-right p-3 font-semibold text-stone-700">3rd Party in Your Data</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Client-side pixel only", "Free (and incomplete)", "None", "No, but misses ~half"],
                                    ["Middleware (Stape, Conversios, Gateway)", "$20 to $200+/mo + setup", "Forever", "Yes"],
                                    ["Custom standalone build", "$4,000 to $16,000", "None", "No"],
                                    ["Custom, bundled in a PandaCodeGen build", "From $5,000 (Scale, build included)", "None", "No"],
                                ].map(([approach, cost, fee, third]) => (
                                    <tr key={approach} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-stone-700 font-medium">{approach}</td>
                                        <td data-label="Typical Cost" className="p-3 text-right text-stone-600">{cost}</td>
                                        <td data-label="Ongoing Fee" className="p-3 text-right text-stone-600">{fee}</td>
                                        <td data-label="3rd Party in Your Data" className="p-3 text-right text-stone-600">{third}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-stone-400 mt-2 mb-8">Standalone cost ranges per published 2026 implementation guides. A mid-size store typically needs 40 to 80 hours of developer time for a custom build at $100 to $200/hour.</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                        <StatCard stat="$500-$7K" label="Agency setup fee" context="Standalone Conversions API setup" />
                        <StatCard stat="$4K-$16K" label="Custom developer time" context="Standalone build, no middleware" />
                        <StatCard stat="From $5K" label="Bundled in a build" context="Scale tier, integration included, no monthly fee" />
                    </div>

                    <BlogText>
                        The cheapest-looking option, middleware, is the one most agencies quietly resell because it takes a few clicks. The catch is the recurring fee and the fact that your customer data flows through a third-party company before it reaches Meta. The custom direct build costs more upfront because it is real engineering, but it has no monthly fee, no extra data processor, and it does not break when a tool changes its pricing or its terms.
                    </BlogText>

                    <InsightBox variant="info">
                        Middleware looks cheaper month to month, but it rents you a third-party data processor forever. A custom direct build costs more upfront and then nothing, with no monthly fee and no other company sitting in your customer data.
                    </InsightBox>

                    <BlogHeader id="how-its-built">How a Proper Setup Works (In Plain English)</BlogHeader>
                    <BlogText>
                        You do not need to know the engineering. You need to know it is direct, you own it, and it cannot miss a sale. Here is what that means.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>It remembers where a customer came from.</BlogHighlight> The moment someone lands on your site, we quietly note which ad sent them and tie that to their order. So even if they leave and come back to buy three days later, the sale still gets credited to the ad that earned it, instead of vanishing.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>The sale is reported from your records, not the browser.</BlogHighlight> When an order is paid, your store itself tells Meta, the moment it happens. It does not wait for a browser tab to load a tracking script. That is the difference between catching every sale and catching the ones that happen to slip through.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>It never double-counts.</BlogHighlight> When both the browser and your store report the same sale, Meta is given a matching reference number for it and counts it once. Your numbers stay clean and trustworthy.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>It cannot lose a checkout.</BlogHighlight> Most stores take payment on a separate page (Stripe, Square, a booking tool), and that handoff is exactly where the browser pixel goes blind and loses the sale. Because your store reports the payment directly, a slow redirect or a closed tab cannot make a sale disappear. We even rescue phone and manual orders by matching them back to the customer&apos;s earlier visit, so those count too.
                    </BlogText>
                    <BlogText>
                        And it all runs with no middleman software, no monthly platform, and no other company holding your customer data. It is simply your store talking to Meta directly.
                    </BlogText>

                    <BlogHeader id="who-needs-this">Who Actually Needs This</BlogHeader>
                    <BlogText>
                        Not every site needs server-side tracking. Here is the honest line.
                    </BlogText>
                    <BlogText>
                        <strong>You need it if:</strong> you spend real money on Meta ads, you take leads or payments online, and especially if your checkout or booking completes on a hosted page (Stripe, Square, Calendly, a CRM form). That hosted-page handoff is exactly where the browser pixel goes blind, so server-side is the only way Meta sees the conversion cleanly.
                    </BlogText>
                    <BlogText>
                        <strong>You can wait if:</strong> you are not running paid ads yet, or your ad spend is small enough that a blurry signal is not costing you much. The math turns in favor of proper tracking once your monthly ad budget is large enough that a 10 to 20 percent efficiency swing is real money.
                    </BlogText>

                    <BlogHeader id="pricing">What It Costs With Us</BlogHeader>
                    <BlogText>
                        We build the custom server-side integration into the site, so you are not paying for it as a separate project or renting it monthly forever.
                    </BlogText>
                    <BlogList items={[
                        "Growth ($3,500): does not include Conversions API setup. This tier is the content site and migration tier.",
                        "Scale ($5,000 and up): includes a working custom server-side Conversions API integration you can watch firing in Meta Events Manager. Direct to Meta, no middleware, no monthly tracking fee.",
                        "Scale at $10,000: adds a monitoring dashboard so you can see event quality and attribution at a glance, and we can fold ongoing tracking, SEO, and AEO into a retainer.",
                    ]} />
                    <BlogText>
                        For the full tier breakdown and the written guarantees that come with every build, see our <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>.
                    </BlogText>

                    <div className="my-8 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Book a Free Tracking Audit <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-400 mt-3">We will check what your pixel is actually missing and what server-side would recover.</p>
                    </div>

                    <BlogHeader id="bottom-line">The Bottom Line</BlogHeader>
                    <BlogText>
                        A pixel tells Meta about the conversions the browser happens to catch. The Conversions API tells Meta about the conversions that actually happened. The gap between those two is the budget you are wasting on a signal the algorithm cannot fully see. On our own store, closing that gap meant Meta reported about 10% more leads, match quality hit 9.0, and we could finally cut the ads that were not working and put that budget where it actually converted.
                    </BlogText>
                    <BlogText>
                        You can rent that capability through middleware and pay forever, or build it custom and own it. We build it custom, into the site, so the signal is clean from launch day.
                    </BlogText>
                    <BlogText>
                        And setting it up is only half the job. The other half is reading what it tells you. Because we build the tracking ourselves, we can sit with you and say which ads to cut, which to scale, and when you have fed Meta enough Purchase data to turn those ads on. A dashboard you cannot interpret is just another bill. You do not even have to be a client for that conversation: if you already run ads on your own setup, book a free call and we will look at what Meta is actually seeing and tell you what is working and what is leaking. No pitch, no charge.
                    </BlogText>

                    <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <TrendingUp className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Stop Paying for Conversions Meta Cannot See</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">Already running ads on your own setup? Book a free call and we will tell you what Meta can and cannot see, no pitch. Building new? We wire custom server-side tracking into the site, direct to Meta, no middleware, no monthly fee.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Book a Free Tracking Audit <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-400 mt-4">Custom server-to-server integration. Included from the Scale tier. No recurring tracking fee.</p>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <section className="mb-10 mt-8 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed mb-3">
                            For why platform stores leak conversion signal in the first place (and what Event Match Quality means in plain English), read <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className="text-cognac hover:underline font-medium">why your ad costs climb while orders stay flat</Link>. For how custom builds cut the monthly software bill that funds all of this, see the <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">real Shopify app cost breakdown</Link>. And for how the same clean foundation makes your site readable by AI agents, see <Link href="/blog/agentic-browsing-pagespeed-score" className="text-cognac hover:underline font-medium">is your website ready for AI agents</Link>.
                        </p>
                    </section>

                    <RelatedPosts currentPostId="meta-conversions-api-setup-cost" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
