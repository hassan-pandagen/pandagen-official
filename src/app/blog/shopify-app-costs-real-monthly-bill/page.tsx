import { ArrowLeft, Calendar, Clock, ArrowRight, DollarSign, AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const shopifyAppFAQs = blogPosts.find(p => p.id === "shopify-app-costs-real-monthly-bill")?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const SalesImpactAnimation = dynamic(() => import("@/components/blog/SalesImpactAnimation"));
const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Shopify App Costs 2026: Your Real Monthly Bill Is Higher Than You Think",
    description: "You cut 3 apps to save money. Then Black Friday hits and you need email, reviews, and upsells back. Bill is $1,000 again. Here is the full app cost breakdown and the only way to actually stop paying.",
    alternates: {
        canonical: "/blog/shopify-app-costs-real-monthly-bill",
    },
    keywords: [
        "shopify app costs",
        "shopify monthly bill",
        "shopify hidden fees",
        "shopify app creep",
        "reduce shopify costs",
        "shopify app alternatives",
        "klaviyo too expensive",
        "shopify review app cost",
        "cancel shopify apps",
        "seal subscriptions vs recharge",
        "judge me vs okendo",
        "shopify flow free apps",
        "shopify apps expensive",
        "how much do shopify apps cost"
    ],
    openGraph: {
        title: "Shopify App Costs 2026: Your Real Monthly Bill Is Higher Than You Think",
        description: "You cut 3 apps to save money. Then Black Friday hits and you need email, reviews, and upsells back. Bill is $1,000 again. Here is the full app cost breakdown and the only way to actually stop paying.",
        type: "article",
        publishedTime: "2026-03-19",
        modifiedTime: "2026-03-19",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shopify App Costs 2026: Your Real Monthly Bill Is Higher Than You Think",
        description: "You cut 3 apps to save money. Then Black Friday hits and you need email, reviews, and upsells back. Bill is $1,000 again. Here is the full app cost breakdown and the only way to actually stop paying.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill#article",
            "headline": "Shopify App Costs 2026: Your Real Monthly Bill Is Higher Than You Think",
            "description": "You cut 3 apps to save money. Then Black Friday hits and you need email, reviews, and upsells back. Bill is $1,000 again. Here is the full app cost breakdown and the only way to actually stop paying.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-19T00:00:00-05:00",
            "dateModified": "2026-03-19T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill" },
            "articleSection": "Shopify",
            "keywords": ["shopify app costs", "shopify monthly bill", "shopify hidden fees", "shopify app creep", "reduce shopify costs", "shopify app alternatives", "klaviyo too expensive shopify", "shopify review app cost", "cancel shopify apps", "shopify apps expensive"],
            "wordCount": 2900,
            "timeRequired": "PT10M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Shopify App Costs" },
                { "@type": "Thing", "name": "E-Commerce Cost Optimization" },
                { "@type": "Thing", "name": "Shopify App Alternatives" },
                { "@type": "Thing", "name": "Shopify Hidden Fees" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Shopify App Store Statistics 2026", "url": "https://shopthemedetector.com/blog/shopify-app-store-statistics/" },
                { "@type": "CreativeWork", "name": "Klaviyo Pricing 2026: Find the Best Plan", "url": "https://www.emailtooltester.com/en/reviews/klaviyo/pricing/" },
                { "@type": "CreativeWork", "name": "Shopify Flow Automation Updates 2025", "url": "https://www.shopify.com/blog/flow-automation-updates-2025" },
                { "@type": "CreativeWork", "name": "Shopify Pricing 2026: My Honest Breakdown", "url": "https://bootstrappingecommerce.com/shopify-pricing/" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Google Think: Mobile Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed Impact on Revenue", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" },
                { "@type": "CreativeWork", "name": "HTTP Archive Web Almanac 2024", "url": "https://almanac.httparchive.org/en/2024/" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill#faq",
            "mainEntity": shopifyAppFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Shopify App Costs: The Real Monthly Bill", "item": "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill#webpage",
            "url": "https://www.pandacodegen.com/blog/shopify-app-costs-real-monthly-bill",
            "name": "Your Shopify Bill Is $1,000/Month and You Don't Know It",
            "description": "The full Shopify app cost breakdown. Default stack costs $1,000/month. Optimized stack costs $136/month. Here is every swap, named and priced.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-03-19T00:00:00-05:00",
            "dateModified": "2026-03-19T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites that replace slow WordPress and Shopify stores. Sites load under 1 second, score 100/100 on Google PageSpeed, and cost $20/month to run.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function ShopifyAppCostsPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Shopify App Costs" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-4">
                            <DollarSign className="w-3 h-3" /> Shopify
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Shopify App Costs 2026:{" "}
                            <span className="font-serif italic text-cognac">Your Real Monthly Bill</span>{" "}
                            Is Higher Than You Think
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            You signed up for $39/month. Then Klaviyo charged $150. Loop Returns charged $155. Okendo charged $119. Smile.io charged $199. ReCharge charged $99 plus 1.25% of subscription revenue. Here is exactly where your money is going and how to cut $715/month from the bill with verified, accurate pricing.
                        </p>
                        <BlogAuthor
                            date="Mar 19, 2026"
                            readTime="10 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-6">
                <div className="max-w-3xl mx-auto">
                    <SalesImpactAnimation />
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Executive Summary */}
                    <div className="mb-10 p-6 bg-amber-50 border border-amber-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">Key Findings</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> 87% of Shopify merchants use at least one paid app. The average serious store runs 8 to 15 apps.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> The default app stack for a $20K to $100K/month store costs approximately $1,000/month on top of plan fees.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Swapping to cheaper alternatives doing the same job cuts the bill to $146/month. Saving: $715/month, $8,580/year for a $20K to $50K/month store.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Uninstalling a Shopify app does not cancel the subscription. You must cancel inside the app dashboard.</li>
                        </ul>
                    </div>

                    <BlogText>
                        You got the invoice. $39/month plan. That is what you signed up for.
                    </BlogText>
                    <BlogText>
                        Then the other charges hit. Klaviyo for email marketing. Okendo for reviews. Loop Returns for returns. ReCharge for subscriptions. Smile.io for loyalty. Boost Commerce for search. ReConvert for upsells. A handful of smaller tools for automation, badges, and stock alerts.
                    </BlogText>
                    <BlogText>
                        You added it up. Your Shopify bill is over $1,000 this month. Nobody warned you about this when you signed up.
                    </BlogText>

                    <BlogHeader id="what-is-app-creep">What Is Shopify App Creep and Why Does It Cost So Much?</BlogHeader>
                    <BlogText>
                        App creep is the slow accumulation of $10 to $30/month tools, each justified individually, that add up to hundreds per month without a single moment of conscious decision.
                    </BlogText>
                    <BlogText>
                        You needed email marketing. Klaviyo was $20/month at signup. Fine. You grew your list. It became $150/month. You needed product reviews after Shopify discontinued their free review app in 2024. $15/month. Fine. You needed returns management. $55/month. Fine. Subscriptions. $99/month plus a percentage cut. Fine.
                    </BlogText>
                    <BlogText>
                        Each decision made sense in isolation. Together they are $1,000/month. According to data from the{" "}
                        <a href="https://shopthemedetector.com/blog/shopify-app-store-statistics/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Shopify App Store statistics</a>,
                        87% of merchants use at least one paid app, and the average app spend for a growing store sits between $120 and $300/month. Serious stores doing $20K to $100K/month routinely spend $500 to $1,000/month.
                    </BlogText>
                    <BlogText>
                        The worst part is that many of these apps use usage-based pricing that spikes without warning. Support apps like Gorgias can jump from $300/month to $1,200/month during Black Friday because they charge per ticket or per conversation. Currency conversion fees on international orders are another hidden cost that scales quietly with global sales and never appears on your Shopify invoice.
                    </BlogText>

                    <BlogHeader id="default-vs-optimized">The Default Stack vs. The Optimized Stack</BlogHeader>
                    <BlogText>
                        Here is what a store doing $20K to $50K/month typically runs, compared to what it could run doing the exact same job for a fraction of the cost.
                    </BlogText>

                    {/* Default Stack Table */}
                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">Default Stack (what most stores are running)</p>
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-red-50 border border-red-200">
                                    <th className="text-left p-3 font-semibold text-stone-700">App</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Category</th>
                                    <th className="text-right p-3 font-semibold text-red-700">Cost/Month</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Klaviyo (10K contacts)", "Email marketing", "$150"],
                                    ["Okendo Growth (1,500 orders)", "Reviews", "$119"],
                                    ["Loop Returns Essential", "Returns", "$155"],
                                    ["ReCharge Starter", "Subscriptions", "$99 + 1.25%"],
                                    ["Smile.io Growth", "Loyalty", "$199"],
                                    ["Boost Commerce", "Search", "$29+"],
                                    ["ReConvert / Upsell.com", "Upsells", "$15-$50+"],
                                    ["Automation + badge apps", "Small tools", "$80"],
                                ].map(([app, cat, cost]) => (
                                    <tr key={app} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-stone-700 font-medium">{app}</td>
                                        <td data-label="Category" className="p-3 text-stone-500">{cat}</td>
                                        <td data-label="Cost/Month" className="p-3 text-right text-red-700 font-bold">{cost}</td>
                                    </tr>
                                ))}
                                <tr className="bg-red-50 border border-red-200">
                                    <td className="p-3 font-bold text-stone-800" colSpan={2}>Total</td>
                                    <td data-label="Category" className="p-3 text-right font-bold text-red-700 text-base">~$861/month</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Optimized Stack Table */}
                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">Optimized Stack for a $20K to $50K/month store</p>
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-green-50 border border-green-200">
                                    <th className="text-left p-3 font-semibold text-stone-700">Swap To</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Category</th>
                                    <th className="text-right p-3 font-semibold text-green-700">Cost/Month</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Omnisend (up to 5K contacts)", "Marketing email", "$65"],
                                    ["Resend", "Transactional email", "Free"],
                                    ["Judge.me Awesome", "Product reviews", "$15"],
                                    ["AfterShip Returns Essentials", "Returns", "$23"],
                                    ["Seal Subscriptions", "Subscriptions", "$10"],
                                    ["BON Loyalty", "Loyalty", "$25"],
                                    ["Shopify Search and Discovery", "Search", "Free"],
                                    ["AfterSell", "Upsells", "$7.99"],
                                    ["Shopify Flow", "Automation", "Free"],
                                ].map(([app, cat, cost]) => (
                                    <tr key={app} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-stone-700 font-medium">{app}</td>
                                        <td data-label="Category" className="p-3 text-stone-500">{cat}</td>
                                        <td data-label="Cost/Month" className="p-3 text-right text-green-700 font-bold">{cost}</td>
                                    </tr>
                                ))}
                                <tr className="bg-green-50 border border-green-200">
                                    <td className="p-3 font-bold text-stone-800" colSpan={2}>Total</td>
                                    <td data-label="Category" className="p-3 text-right font-bold text-green-700 text-base">~$146/month</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogQuote>
                        $715/month saved. $8,580/year. Same store. Same revenue. Same features. Different apps.
                    </BlogQuote>

                    <BlogHeader id="email-marketing">Email Marketing: The Klaviyo Bill That Keeps Growing</BlogHeader>
                    <BlogText>
                        Klaviyo is the default email marketing choice for Shopify stores and for good reason. It is powerful, well-integrated, and has strong automation. The problem is the pricing model.
                    </BlogText>
                    <BlogText>
                        In 2025, Klaviyo switched from billing on emails sent to billing on active profiles stored. Merchants with large inactive lists saw immediate price jumps. A store with 10,000 engaged contacts but 40,000 total contacts was pushed to the 50K tier overnight, jumping from $150/month to $720/month without sending a single extra email. According to{" "}
                        <a href="https://www.emailtooltester.com/en/reviews/klaviyo/pricing/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">EmailToolTester&apos;s 2026 Klaviyo pricing analysis</a>,
                        this change triggered widespread merchant backlash and a wave of platform migrations.
                    </BlogText>
                    <BlogText>
                        First, split email into two separate jobs. Most merchants use Klaviyo for both and pay a premium for it.
                    </BlogText>
                    <BlogList items={[
                        "Marketing email (campaigns, abandoned cart, win-back flows): Klaviyo $150/month vs Omnisend $35/month for 5K contacts. Same core automation, 77% cheaper.",
                        "Transactional email (order confirmations, shipping updates, password resets): Resend sends 3,000/month free, then $20/month for 50,000. Zoho ZeptoMail handles 10,000 transactional sends for under $3. You do not need Klaviyo for these.",
                        "Shopify Email: 10,000 sends/month free on all paid plans. Covers basic promotional emails for stores with under 2,000 active customers. Above that, Omnisend is the right tool.",
                    ]} />
                    <BlogText>
                        The practical swap for a $20K to $50K/month store: Omnisend at $65/month for marketing emails plus{" "}
                        <a href="https://resend.com/pricing" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Resend</a>{" "}
                        free for transactional emails. Total: $65/month. Versus Klaviyo handling both at $150/month. Annual saving: $1,020.
                    </BlogText>

                    <BlogHeader id="reviews">Reviews: Shopify Killed Their Free App and Nobody Told You</BlogHeader>
                    <BlogText>
                        In 2024, Shopify deprecated and shut down their native Product Reviews app. Every store that previously collected reviews for free was forced onto a paid third-party solution. This is a significant, under-reported cost increase that happened without fanfare.
                    </BlogText>
                    <BlogText>
                        The market leader merchants default to is Okendo. It is good software. But the pricing cliff is steep.
                    </BlogText>
                    <BlogList items={[
                        "Okendo Essential: $19/month for up to 200 orders/month",
                        "Okendo Growth: $119/month for up to 1,500 orders/month",
                        "Judge.me Awesome: $15/month flat. No order caps. No volume pricing. Same core features.",
                    ]} />
                    <BlogText>
                        The jump from Okendo Essential to Growth hits stores at roughly $50K to $100K/month in revenue. Judge.me Awesome at $15/month flat handles photo and video reviews, Q&A, Google Shopping integration, and review carousels. The annual saving for a store on Okendo Growth: $1,248/year for the exact same review functionality.
                    </BlogText>

                    <BlogHeader id="returns">Returns: Loop Returns Charges Like an Enterprise Tool for a Mid-Sized Problem</BlogHeader>
                    <BlogText>
                        Loop Returns is the dominant returns management platform. Merchants repeatedly describe it as exorbitant at small and mid-market scale.
                    </BlogText>
                    <BlogList items={[
                        "Loop Returns Starter: $59/month for up to 1,000 returns/year",
                        "Loop Returns Essential: $155/month",
                        "AfterShip Returns Essentials: $23/month for 60 returns",
                        "EcoReturns: $19/month for 60 returns",
                        "ForthRoute: Free basic returns portal",
                    ]} />
                    <BlogText>
                        For a store processing under 100 returns/month, a $23/month solution handles the same customer-facing experience as a $155/month one. The annual saving: $1,584/year.
                    </BlogText>

                    <BlogHeader id="subscriptions">Subscriptions: ReCharge Is Charging You a Percentage on Top of a Monthly Fee</BlogHeader>
                    <BlogText>
                        ReCharge has a pricing structure that compounds quietly. The Starter plan is $99/month plus a 1.25% transaction fee plus $0.19 per transaction. On a store doing $10,000/month in subscription revenue, that is $99 + $125 + transaction fees = over $224/month just in platform overhead.
                    </BlogText>
                    <BlogText>
                        The alternative most merchants do not know about: Seal Subscriptions.
                    </BlogText>
                    <BlogList items={[
                        "ReCharge Starter: $99/month + 1.25% transaction fee + $0.19/transaction",
                        "Seal Subscriptions: $5.95/month for 100 active subscribers. 0% transaction fees on all tiers.",
                        "Appstle Subscriptions: $10/month starting. Strong reviews for ease of use.",
                    ]} />
                    <BlogText>
                        For a store just launching subscriptions or doing under $20K/month in subscription revenue, Seal Subscriptions at $5.95/month versus ReCharge at $99/month plus fees saves over $1,100/year. There is no meaningful feature gap at that revenue level.
                    </BlogText>

                    {/* Mid-Article CTA */}
                    <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <p className="font-bold text-charcoal mb-2">How much are your Shopify apps actually costing you every month?</p>
                        <p className="text-stone-600 mb-4 text-sm">Drop your store URL when you book. We audit your app stack live on the call, add up your exact monthly bleed, and show you what a custom build eliminates permanently.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                            Book a Free Cost Audit <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <div className="mt-4 p-4 bg-cognac/10 border border-cognac/20 rounded-xl">
                          <p className="text-sm font-bold text-charcoal">FOUNDER&apos;S OFFER: $500 Migration</p>
                          <p className="text-sm text-stone-700 mt-1">$500 for a complete Shopify migration. Add up your monthly Shopify bill right now: platform fee, every app, every transaction fee. That number is probably $200 to $1,000/month. Pay us $500 once and all of those monthly charges go away.</p>
                        </div>
                    </div>

                    <BlogHeader id="loyalty-search">Loyalty and Search: Two Categories Where Free Wins</BlogHeader>
                    <BlogText>
                        Loyalty programs have a wide price range with a steep jump at mid-market scale. Smile.io charges $199/month for their Growth plan, which hits stores at roughly $25K to $50K/month in revenue. BON Loyalty covers basic points and referral programs from $25/month with a free tier for smaller stores. The annual difference between Smile.io Growth and BON Loyalty: $2,088/year.
                    </BlogText>
                    <BlogText>
                        For site search, Shopify released their own free Search and Discovery app that handles filtering by product attributes, synonyms, and custom product recommendations. For stores with under 500 products, this replaces paid search apps charging $19 to $59/month entirely. Above 500 products, the merchandising gap becomes real. Below that threshold, free covers it.
                    </BlogText>

                    <BlogHeader id="what-shopify-includes-free">What Shopify Already Includes That You Are Paying Apps For</BlogHeader>
                    <BlogText>
                        Several features merchants pay for via apps are now native to Shopify at no extra cost. Most merchants do not know these exist.
                    </BlogText>
                    <BlogList items={[
                        "Shopify Flow: Free automation for order tagging, low stock alerts, customer segmentation, fraud review flags, and discount logic. The 2025 update added AI workflow creation. Describe what you want in plain English and Flow builds it. Replaces $50 to $100/month in automation apps.",
                        "Shopify Email: 10,000 sends/month free on all paid plans. Handles promotional emails, abandoned cart recovery, win-back flows, and order confirmations. Sufficient for stores with under 2,000 active customers.",
                        "Shopify Search and Discovery: Free app replacing paid search tools for catalogs under 500 products.",
                        "Shopify Bundles: Free native bundling replacing paid bundle apps.",
                        "Shopify Subscriptions: Shopify launched a native subscriptions product in 2024. Free on all plans with 0% transaction fees. Limited compared to ReCharge but covers basic recurring billing without the $99/month overhead.",
                    ]} />

                    <BlogHeader id="custom-code-replacements">What Can Be Custom-Coded Instead of Paying Monthly</BlogHeader>
                    <BlogText>
                        Some Shopify app functionality can be replaced with a one-time build instead of a recurring subscription. The math on when this makes sense:
                    </BlogText>
                    <BlogList items={[
                        "Related products and upsell widgets: Shopify's native product recommendations API is built into every theme. A developer can style and configure it in 1 to 3 hours. Replaces $8 to $30/month upsell apps at zero ongoing cost.",
                        "Announcement bars, countdown timers, sticky add-to-cart: Pure theme CSS and JavaScript edits. Zero developer cost with AI assistance. Replaces $5 to $15/month each.",
                        "Basic returns portal: A form that takes an order number and returns reason, then emails instructions. One-time build cost $500 to $1,500. Replaces $155/month Loop Returns. Payback under 10 months.",
                        "Custom loyalty system via Shopify Flow and metafields: Replaces $199/month Smile.io Growth. Build cost $2,000 to $4,000. Payback 10 to 20 months.",
                    ]} />

                    <BlogHeader id="warning-uninstall">The Warning Nobody Publishes: Uninstalling Does Not Cancel</BlogHeader>
                    <BlogText>
                        This is the most practically useful thing in this post. When you uninstall a Shopify app, the subscription does not cancel automatically. The app continues billing through Shopify Billing or their own payment processor until you explicitly cancel inside the app&apos;s own dashboard.
                    </BlogText>
                    <BlogText>
                        Merchants routinely discover they have been charged for 3 to 6 months after uninstalling an app they forgot about. Before doing anything else, open your Shopify admin, go to Settings, then Billing, then find the Apps and Subscriptions section. You will likely find charges for apps you no longer have installed.
                    </BlogText>
                    <BlogText>
                        Cancel the subscription inside the app dashboard first. Then uninstall. In that order.
                    </BlogText>

                    <BlogHeader id="when-to-leave-shopify">When the App Bill Means It Is Time to Leave Shopify Entirely</BlogHeader>
                    <BlogText>
                        App costs are a symptom of the underlying problem with Shopify&apos;s architecture. The platform was designed to be extended by third-party apps. Every feature gap gets filled by a paid app. Every app adds JavaScript to your pages. Every script slows your store down.
                    </BlogText>
                    <BlogText>
                        Research from{" "}
                        <a href="https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Deloitte</a>{" "}
                        shows a 0.1 second improvement in load time increases conversion rates by 8%. For a store doing $50K/month, that is $4,000/month in additional revenue from speed alone. The apps slowing your store down are costing you more than their subscription fees. We calculated the full annual revenue loss in our post on <Link href="/blog/shopify-slow-losing-sales" className="text-cognac hover:underline">how slow Shopify costs stores $75K per year</Link>.
                    </BlogText>
                    <BlogText>
                        If your combined Shopify costs (plan + transaction fees + apps) exceed $500 to $800/month, a custom Next.js build typically pays for itself within 6 to 12 months from savings alone. You own the code outright. No monthly platform fees. No app subscriptions for features that should have been built in. No percentage cuts on your revenue.
                    </BlogText>
                    <BlogText>
                        If you are ready to move off Shopify entirely, our{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">Shopify to custom Next.js migration service</Link>{" "}
                        covers the full process: what stays, what gets rebuilt, how long it takes, and what the ROI looks like at your revenue level.
                    </BlogText>
                    <BlogText>
                        We cover the speed side of this problem in detail in our post on{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline font-medium">why the Shopify Dawn theme is slow</Link>{" "}
                        and what actually fixes it. The short answer: the theme is not the problem. The app layer is.
                    </BlogText>
                    <BlogText>
                        If you are on Shopify Plus specifically paying $2,300/month and still experiencing performance issues, read our breakdown of{" "}
                        <Link href="/blog/shopify-plus-still-slow" className="text-cognac hover:underline font-medium">why Shopify Plus is still slow</Link>.
                        The platform ceiling does not move regardless of your plan tier.
                    </BlogText>
                    <BlogText>
                        For stores where the conversion rate has been the primary concern, our post on{" "}
                        <Link href="/blog/shopify-conversion-rate-speed-fix" className="text-cognac hover:underline font-medium">fixing Shopify&apos;s conversion rate through speed</Link>{" "}
                        covers the technical side. And if you are at the point of considering headless commerce,{" "}
                        <Link href="/blog/shopify-headless" className="text-cognac hover:underline font-medium">our headless Shopify guide</Link>{" "}
                        explains what the migration actually looks like and when the ROI makes sense.
                    </BlogText>

                    {/* Bottom CTA */}
                    <div className="my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <TrendingDown className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Calculate Your Real Shopify Cost</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">We audit your current platform costs, app stack, and performance metrics, then show you the exact ROI of switching to a custom build. Most stores recoup the migration cost within 6 months.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-amber-400 text-charcoal font-bold rounded-full text-sm hover:bg-amber-300 transition-all">
                            Book Free Cost Audit Call <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <div className="mt-4 p-4 bg-white/10 border border-white/20 rounded-xl">
                          <p className="text-sm font-bold text-white">FOUNDER&apos;S OFFER: $500 Migration</p>
                          <p className="text-sm text-stone-300 mt-1">$500 for a complete Shopify migration. Add up your monthly Shopify bill right now: platform fee, every app, every transaction fee. That number is probably $200 to $1,000/month. Pay us $500 once and all of those monthly charges go away.</p>
                        </div>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={shopifyAppFAQs} />

                    <RelatedPosts currentPostId="shopify-app-costs-real-monthly-bill" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
