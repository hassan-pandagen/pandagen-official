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

const shopifyVsCustomFAQs = blogPosts.find(p => p.id === 'shopify-vs-custom-website')?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/CostStackAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Shopify vs Custom Website 2026: When to Switch?",
    description: "Shopify works until app fees hit $1,000/month and your store loads in 4+ seconds. 5 signs you have outgrown Shopify and what to do next.",
    alternates: {
        canonical: '/blog/shopify-vs-custom-website',
    },
    keywords: ["shopify vs custom website", "outgrown shopify", "shopify alternative", "shopify too expensive", "shopify slow", "custom ecommerce website", "shopify hidden costs", "shopify to custom migration", "headless shopify", "shopify app costs", "shopify plus price increase 2026", "shopify core web vitals failing", "shopify checkout restrictions", "leaving shopify", "shopify transaction fees", "shopify duplicate content seo", "shopify frozen funds"],
    openGraph: {
        title: "Shopify vs Custom Website in 2026: When Should You Switch?",
        description: "Shopify works until app fees hit $1,000/month and your store loads in 4+ seconds. Here are the 5 signs and what to do next.",
        type: "article",
        publishedTime: "2026-03-30",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/shopify-vs-custom-website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shopify vs Custom Website in 2026: When Should You Switch?",
        description: "Shopify works until app fees hit $1,000/month and your store loads in 4+ seconds. Here are the 5 signs.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/shopify-vs-custom-website#article",
            "headline": "Shopify vs Custom Website in 2026: When Should You Switch?",
            "description": "Shopify works for small stores. But when app fees exceed $500/month, your store loads in 4+ seconds, and conversion stalls below 2%, custom code becomes the better investment.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-30T00:00:00-05:00",
            "dateModified": "2026-03-30T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/shopify-vs-custom-website" },
            "articleSection": "Shopify",
            "keywords": ["Shopify vs custom website", "outgrown Shopify", "Shopify alternative", "Shopify hidden costs", "custom ecommerce", "headless Shopify"],
            "timeRequired": "PT11M",
            "wordCount": 2700,
            "about": [
                { "@type": "Thing", "name": "Shopify" },
                { "@type": "Thing", "name": "Custom E-Commerce Development" },
                { "@type": "Thing", "name": "Website Performance" },
                { "@type": "Thing", "name": "E-Commerce Conversion Rate" }
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Google Think: Mobile Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Shopify Pricing Plans", "url": "https://www.shopify.com/pricing" },
                { "@type": "CreativeWork", "name": "Core Web Vitals. Google Web Dev", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Portent: Site Speed and Revenue Research", "url": "https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-vs-custom-website#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Shopify vs Custom Website", "item": "https://www.pandacodegen.com/blog/shopify-vs-custom-website" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-vs-custom-website#webpage",
            "url": "https://www.pandacodegen.com/blog/shopify-vs-custom-website",
            "name": "Shopify vs Custom Website: When You Have Outgrown Shopify",
            "description": "A decision framework for Shopify store owners wondering whether custom code is worth the investment.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-03-30T00:00:00-05:00",
            "dateModified": "2026-03-30T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/shopify-vs-custom-website#breadcrumb" },
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
            "@id": "https://www.pandacodegen.com/blog/shopify-vs-custom-website#faq",
            "mainEntity": shopifyVsCustomFAQs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
        }
    ]
};

export default function ShopifyVsCustomWebsitePage() {
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
                            { label: "Shopify vs Custom Website", href: "/blog/shopify-vs-custom-website" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-stone-100 text-stone-600 rounded-full mb-4">Shopify</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Shopify vs Custom Website: <span className="font-serif italic text-cognac">When You Have Outgrown</span> Shopify
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            Shopify works until it does not. Your app bill hit $1,000/month. Your store loads in 4 seconds. Conversion is stuck at 1.4%. Here are the 5 signs you have outgrown Shopify and what a custom site actually costs.
                        </p>

                        <BlogAuthor
                            date="Mar 30, 2026"
                            readTime="11 min read"
                            bio="Hassan rebuilt MyCustomPatches for Matt Conner from a slow WooCommerce store (45 PageSpeed) to a custom Next.js build scoring 90+. He now builds custom Shopify replacements for DTC brands. Every build scores 90+ on Google PageSpeed."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <FeatureVisual />
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "Shopify works for stores under $500/month in total platform costs. Beyond that, the math favors custom code.",
                            "The average Shopify store with 20+ apps loads in 4.2 seconds on mobile. Custom Next.js stores load in under 1 second. Google ranks the faster store higher.",
                            "Shopify's real cost is $800 to $2,300/month when you add apps, transaction fees, and premium themes. Custom sites cost $0 to $20/month to host after the initial build.",
                            "A custom headless e-commerce site costs $3,000 Growth to $12,000 Scale to build and pays for itself within 12 to 18 months through eliminated fees and better conversion rates.",
                            "Headless Shopify is the middle ground: keep Shopify's admin, replace the slow frontend with custom code."
                        ]} />
                    </div>

                    {/* Real Buyer Voices — verified Reddit threads, Apr-May 2026 */}
                    <div className="my-8 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">What Shopify Store Owners Are Saying Right Now</p>
                        <div className="space-y-4">
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;There is $4,200 sitting in that account. That is literally my inventory money for next month. I am also starting to look at moving off Shopify entirely because I cannot run a business where the platform can just decide to hold my money whenever they want.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/hipap</strong> · r/shopify · Apr 9, 2026 · 27 upvotes, 62 comments</span>
                                    <a href="https://www.reddit.com/r/shopify/comments/1skg672/shopify_payments_froze_4200_and_support_wont_tell/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;I have been using Shopify for 7 years now and it has truly gotten worse and worse with each year. The customer service has fallen off dramatically, the platform has almost weekly outages, and I am constantly finding issues that they cannot fix.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/Carey251</strong> · r/shopify · May 4, 2026 · 8 upvotes</span>
                                    <a href="https://www.reddit.com/r/shopify/comments/1t028ic/why_are_devs_on_a_tear_making_shopify_admin_less/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                            <div className="bg-white border border-stone-100 rounded-xl p-4">
                                <p className="text-sm text-stone-700 italic leading-relaxed mb-2">&ldquo;Feels like they are optimizing for new user simplicity at the expense of power users. Every update adds guardrails and abstraction, but kills speed for people who actually live in the admin all day. Death by a thousand clicks is real.&rdquo;</p>
                                <div className="flex items-center justify-between text-xs text-stone-400">
                                    <span><strong className="text-stone-600">u/HusainKaizar</strong> · r/shopify · May 4, 2026 · 17 upvotes</span>
                                    <a href="https://www.reddit.com/r/shopify/comments/1t028ic/why_are_devs_on_a_tear_making_shopify_admin_less/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-stone-700 leading-relaxed mb-6">You should switch from Shopify to a custom website when your mobile load time exceeds 3 seconds, your app bill tops $500 per month, or your conversion rate is stuck below 2%. Custom headless builds on Next.js deliver sub-1-second load times, eliminate app fees, and typically 2x to 3x conversion rates from the same traffic at $5,000 to $10,000 one-time cost.</p>

                    <div className="space-y-8">
                        <BlogText>
                            A pattern we see repeatedly: a store doing $1M to $3M per year, app bill pushing past $1,000 per month, mobile load at 4+ seconds, conversion pinned near 1.4% for six months despite trying every CRO app on the market. The fix is <Link href="/blog/shopify-headless" className="text-cognac hover:underline">headless Shopify on Next.js</Link>.
                        </BlogText>

                        <BlogText>
                            We ran their store through Google PageSpeed Insights. <BlogHighlight>Mobile score: 34/100. Desktop: 61/100.</BlogHighlight> Their competitor, a brand with half the product catalog, scored 96/100 on a custom coded store. Same target keywords. Same ad spend. The competitor was converting at 3.8%.
                        </BlogText>

                        <BlogText>
                            The difference was not marketing. It was not product. It was the platform. One store loaded in 4.3 seconds. The other loaded in 0.9 seconds. <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Google research</a> shows 53% of mobile visitors leave a site that takes over 3 seconds to load. That store was losing more than half its mobile traffic before the page even rendered.
                        </BlogText>

                        <BlogText>
                            This article is not an argument against Shopify. Shopify is a good platform for the right stage of business. This is a decision framework. By the end, you will know whether Shopify is still working for you or whether custom code is the better investment.
                        </BlogText>

                        <BlogHeader>5 Signs You Have Outgrown Shopify</BlogHeader>

                        <BlogText>
                            <strong>Sign 1: Your real monthly Shopify bill exceeds $500.</strong>
                        </BlogText>

                        <BlogText>
                            You signed up for $39/month. Then you added Klaviyo ($45/month), Loop Returns ($59/month), Okendo for reviews ($39/month), ReCharge for subscriptions ($99/month), a page builder ($29/month), and 15 other apps. Add Shopify Plus if you are on it ($2,300/month). Add the 0.5 to 2% transaction fee if you use a non-Shopify payment gateway.
                        </BlogText>

                        <BlogText>
                            The average serious Shopify store spends <BlogHighlight>$800 to $1,500/month</BlogHighlight> on platform fees and apps combined. Over 3 years, that is $28,800 to $54,000. A custom site costs $0 to $20/month to host after the build. We broke down the full app cost math in our{" "}
                            <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline">
                                guide to your real Shopify monthly bill
                            </Link>.
                        </BlogText>

                        <BlogText>
                            <strong>Sign 2: Your store loads in 4+ seconds on mobile.</strong>
                        </BlogText>

                        <BlogText>
                            Go to <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">pagespeed.web.dev</a> and test your store on mobile. If you score below 50, your store is actively losing you customers. The average app-heavy Shopify store scores 25 to 45 on mobile because each app injects its own JavaScript, CSS, and tracking code onto every page.
                        </BlogText>

                        <BlogText>
                            <a href="https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Deloitte research</a> found that every 0.1 second improvement in load time increases retail conversion by 8.4%. For a store doing $100,000/month, going from 4 seconds to 1 second could mean $25,000 to $40,000 in additional annual revenue. We explained exactly how Shopify&apos;s Liquid templates cause this problem in our{" "}
                            <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline">
                                deep dive on why the Dawn theme is still slow
                            </Link>.
                        </BlogText>

                        <BlogText>
                            <strong>Sign 3: Your conversion rate is stuck below 2%.</strong>
                        </BlogText>

                        <BlogText>
                            The average Shopify store converts at 1.4%. Stores loading in under 2 seconds convert at 3 to 5%. If your traffic is good but conversion is flat, the problem is almost certainly speed. Every app you add makes it worse. You cannot optimize your way out of Shopify&apos;s architecture. We covered the conversion and speed relationship in our{" "}
                            <Link href="/blog/shopify-conversion-rate-speed-fix" className="text-cognac hover:underline">
                                guide to fixing Shopify conversion rates through speed
                            </Link>.
                        </BlogText>

                        <BlogText>
                            <strong>Sign 4: You need checkout customization that Shopify restricts.</strong>
                        </BlogText>

                        <BlogText>
                            Shopify controls the checkout. On non-Plus plans, you cannot change the checkout layout, add custom fields, or modify the payment flow. Even on Shopify Plus ($2,300/month), customization is limited to the Checkout Extensibility API. If you need custom B2B pricing, multi-currency logic, subscription bundling at checkout, or complex discount rules, Shopify blocks you. Cart abandonment across e-commerce is already 70%, and a slow, inflexible checkout pushes that number even higher.
                        </BlogText>

                        <BlogText>
                            Shopify also forces /products/ and /collections/ URL prefixes on every store, and you cannot change them. Products listed in multiple collections create duplicate content URLs by default, diluting your link equity across Google. The variant limit increased to 2,048 in 2026, but you are still limited to 3 options per product, which blocks stores selling configurable or made-to-order items.
                        </BlogText>

                        <BlogText>
                            With custom code, the checkout is yours. Build any flow you want. No restrictions. No permission needed.
                        </BlogText>

                        <BlogText>
                            <strong>Sign 5: You are paying transaction fees on top of payment processing.</strong>
                        </BlogText>

                        <BlogText>
                            If you use any payment gateway other than Shopify Payments, Shopify charges an additional 0.5% to 2% per transaction. On $1M in annual revenue, that is $5,000 to $20,000/year in fees that go to Shopify, not your payment processor. A custom site uses Stripe or any processor directly with zero platform transaction fees.
                        </BlogText>

                        {/* Diagnostic CTA */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                            <p className="font-bold text-stone-900 mb-3 text-lg">Quick self-assessment.</p>
                            <div className="space-y-2 mb-4">
                                <p className="text-stone-700 text-sm"><strong>0 signs:</strong> Stay on Shopify. It is still the right tool.</p>
                                <p className="text-stone-700 text-sm"><strong>1 to 2 signs:</strong> Start planning. Custom code will save you money within 18 months.</p>
                                <p className="text-stone-700 text-sm"><strong>3+ signs:</strong> You are actively losing money every month you stay. Migrate now.</p>
                            </div>
                        </div>

                        <BlogHeader>The 2026 Numbers That Changed the Math</BlogHeader>

                        <BlogText>
                            Several things shifted in 2026 that make the Shopify vs custom decision different than it was even a year ago:
                        </BlogText>

                        <BlogList items={[
                            "Shopify Plus increased pricing 25% to $2,300/month (3-year lock-in) or $2,500/month (1-year). Transaction fees also went up from 0.15% to 0.2%.",
                            "A 2026 benchmark study of 1,000 Shopify stores found only 48% pass all three Core Web Vitals on mobile. The median LCP is 2.26 seconds, pushing against Google's 2.5-second Good threshold. One slow image flips the store into Needs Improvement.",
                            "Each new Shopify app adds 50KB to 150KB of JavaScript to every page load. A store at the LCP threshold can fail Core Web Vitals from a single app install.",
                            "79% of Shopify traffic comes from mobile devices in 2026, but most Shopify themes fail mobile Core Web Vitals. Mobile is where the speed penalty hits hardest.",
                            "Shopify's admin dashboard speed score is misleading. It uses a simplified Lighthouse test, not real Core Web Vitals field data from actual visitors. Your real-world performance is almost always worse than what the admin shows.",
                            "Shopify's BBB rating is F with 1,661 complaints. Trustpilot score is 1.5 out of 5 from 4,300+ reviews. Most complaints are about frozen funds, support delays, and surprise fees.",
                            "Shopify now holds 20% of your funds for up to 120 days if your chargeback rate approaches 1%. Visa dropped its threshold to 1.5% in March 2026.",
                            "Shopify's AI-first support shift means merchants report waiting 3 to 6 weeks for payout hold resolutions. Chat advisors give generic responses.",
                            "Shopify forces /collections/ and /products/ URL prefixes. Products in multiple collections create duplicate content by default, diluting SEO."
                        ]} />

                        <BlogText>
                            These are not edge cases. They are the standard experience for growing Shopify stores in 2026. The platform works well for small stores that stay small. The problems compound as you scale.
                        </BlogText>

                        <BlogHeader>The Real Cost: Shopify vs Custom Over 3 Years</BlogHeader>

                        <BlogText>
                            Most people compare the monthly price and stop there. The real comparison is the 3-year total cost of ownership.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 my-4">
                            <table className="w-full border-collapse text-sm min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="border border-stone-300 px-4 py-3 text-left font-bold">Cost Category</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-bold">Shopify (3 Years)</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-bold">Custom Next.js (3 Years)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3">Build cost</td>
                                        <td data-label="Shopify (3 Years)" className="border border-stone-300 px-4 py-3">$0 (DIY) to $5,000 (agency theme)</td>
                                        <td data-label="Custom Next.js (3 Years)" className="border border-stone-300 px-4 py-3">$3,000 Growth to $12,000 Scale</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3">Platform fees</td>
                                        <td data-label="Shopify (3 Years)" className="border border-stone-300 px-4 py-3">$1,404 to $82,800</td>
                                        <td data-label="Custom Next.js (3 Years)" className="border border-stone-300 px-4 py-3">$0 to $720</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3">App subscriptions</td>
                                        <td data-label="Shopify (3 Years)" className="border border-stone-300 px-4 py-3">$18,000 to $54,000</td>
                                        <td data-label="Custom Next.js (3 Years)" className="border border-stone-300 px-4 py-3">$0 (built into code)</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3">Transaction fees (non-Shopify Payments)</td>
                                        <td data-label="Shopify (3 Years)" className="border border-stone-300 px-4 py-3">$5,000 to $60,000</td>
                                        <td data-label="Custom Next.js (3 Years)" className="border border-stone-300 px-4 py-3">$0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3">Google PageSpeed Mobile</td>
                                        <td data-label="Shopify (3 Years)" className="border border-stone-300 px-4 py-3">25 to 50</td>
                                        <td data-label="Custom Next.js (3 Years)" className="border border-stone-300 px-4 py-3">90+</td>
                                    </tr>
                                    <tr className="bg-stone-100 font-bold">
                                        <td className="border border-stone-300 px-4 py-3">3-Year Total</td>
                                        <td data-label="Shopify (3 Years)" className="border border-stone-300 px-4 py-3">$24,404 to $201,800</td>
                                        <td data-label="Custom Next.js (3 Years)" className="border border-stone-300 px-4 py-3">$8,000 to $25,720</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            The numbers shift based on your revenue, plan tier, and number of apps. But the direction is always the same: custom code has a higher upfront cost and a dramatically lower total cost once you account for platform fees, app subscriptions, and transaction fees.
                        </BlogText>

                        <BlogQuote>
                            A Shopify store doing $1M/year on the Basic plan with 20 apps and a non-Shopify payment gateway spends roughly $30,000 to $50,000 over 3 years in fees alone. A custom Scale-tier build ($5,000 to $10,000+) on Vercel (starts free, scales to $20/mo only when your business grows) is cheaper by year 2.
                        </BlogQuote>

                        {/* Mid-Article CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Want the numbers for your specific store?</p>
                            <p className="text-stone-600 mb-4 text-sm">Share your Shopify URL when you book. We run PageSpeed live, calculate your real 3-year Shopify cost, and show you the custom alternative. No pressure.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                    Schedule Free Store Audit <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                        </div>

                        <BlogHeader>What a Custom E-Commerce Site Actually Gives You</BlogHeader>

                        <BlogText>
                            <strong>Speed that converts.</strong> Custom Next.js stores load in under 1 second on mobile. Every page is pre-built at deploy time. No server-side rendering on each request. No Liquid template compilation. No app JavaScript bloat. The result is PageSpeed scores of 90+ and conversion rates 2 to 3x higher than Shopify stores with the same products and traffic.
                        </BlogText>

                        <BlogText>
                            <strong>Hosting that starts free and only scales when you grow.</strong> We host every client store on Vercel starting at $0/month. You only scale to Vercel Pro at $20/month when your business grows past free tier limits. Even at the top, that is 85 to 95 percent cheaper than Shopify platform fees. We explained exactly how in our{" "}
                            <Link href="/blog/nextjs-hosting-zero-cost" className="text-cognac hover:underline">
                                guide to start-free, scale-smart Vercel hosting
                            </Link>.
                        </BlogText>

                        <BlogText>
                            <strong>Zero app fees.</strong> Every feature that costs you a monthly subscription on Shopify gets built into the code once. Email flows, reviews, subscriptions, upsells, analytics. Built once, no recurring cost. AI-assisted development has made this faster and cheaper than ever. What used to take 3 months of custom development now takes 4 to 8 weeks.
                        </BlogText>

                        <BlogText>
                            <strong>No checkout restrictions.</strong> Custom B2B pricing, multi-step checkouts, subscription bundling, address validation, fraud detection. If you can describe it, it can be built. No Shopify Plus required. No Checkout Extensibility API limitations.
                        </BlogText>

                        <BlogText>
                            <strong>You own the code.</strong> If you decide to change agencies, switch hosting, or bring development in-house, you take everything with you. No vendor lock-in. No export restrictions. No rebuilding from scratch. See what a full custom e-commerce build includes on our{" "}
                            <Link href="/services/ecommerce?ref=blog/shopify-vs-custom-website" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                e-commerce service page
                            </Link>.
                        </BlogText>

                        <BlogHeader>The Middle Ground: Headless Shopify</BlogHeader>

                        <BlogText>
                            Not ready to leave Shopify entirely? Headless Shopify is the middle option. You keep Shopify as your backend for product management, inventory, and order processing. We replace the slow Liquid frontend with a custom Next.js storefront that loads in under 1 second.
                        </BlogText>

                        <BlogList items={[
                            "Your team keeps using the Shopify admin they already know",
                            "All product data, order history, and customer records stay in Shopify",
                            "The customer-facing store loads 3 to 4x faster",
                            "PageSpeed scores jump from 30 to 50 range to 90+",
                            "You eliminate most app subscriptions because the custom frontend handles those features natively",
                            "No migration risk to product data or order history"
                        ]} />

                        <BlogText>
                            We covered the full headless Shopify approach in our{" "}
                            <Link href="/blog/shopify-headless" className="text-cognac hover:underline">
                                guide to headless Shopify
                            </Link>. Build cost is $3,500+ Growth for smaller catalogs and $5,000 to $10,000+ Scale for full headless rebuilds. For the revenue-loss math, see <Link href="/blog/shopify-slow-losing-sales" className="text-cognac hover:underline">how much slow Shopify costs per year</Link>.
                        </BlogText>

                        <BlogText>
                            Comparing other platforms too? See <Link href="/blog/wix-vs-custom-website" className="text-cognac hover:underline">Wix vs Custom</Link>, <Link href="/blog/webflow-vs-custom-website" className="text-cognac hover:underline">Webflow vs Custom</Link>, and <Link href="/blog/squarespace-vs-custom-website" className="text-cognac hover:underline">Squarespace vs Custom</Link>.
                        </BlogText>

                        <BlogHeader>When Shopify Is Still the Right Choice</BlogHeader>

                        <BlogText>
                            Custom code is not always the answer. Shopify is the better choice when:
                        </BlogText>

                        <BlogList items={[
                            "You are testing a new product and need a store live in days, not weeks",
                            "Your total Shopify spend is under $200/month including apps",
                            "You do not depend on organic search traffic (paid ads drive most sales)",
                            "Your store has fewer than 5 apps installed",
                            "You do not need custom checkout logic",
                            "Your PageSpeed mobile score is above 60"
                        ]} />

                        <BlogText>
                            If all of those apply, stay on Shopify. It is fast to set up, the app ecosystem solves most problems, and the monthly cost is manageable at that scale. Do not over-engineer a solution for a problem you do not have.
                        </BlogText>

                        <BlogHeader>The Hidden Cost Most Store Owners Miss</BlogHeader>

                        <BlogText>
                            There is one cost that never shows up on your Shopify invoice: <BlogHighlight>the customers who found your competitor first because their site loaded faster.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            Google ranks faster sites higher. If your Shopify store scores 34/100 and your competitor&apos;s custom store scores 96/100, they rank above you for every shared keyword. Every month on a slow Shopify store is another month of traffic going to a faster competitor. <a href="https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Portent research</a> found sites loading in 1 second convert at 3x the rate of sites loading in 5 seconds.
                        </BlogText>

                        <BlogText>
                            For a store doing $500,000/year, the difference between a 1.4% conversion rate and a 3.5% conversion rate is roughly $10,500 in additional monthly revenue, or about $126,000 per year, at the same traffic volume. That is not a hypothetical number. That is what speed does for e-commerce.
                        </BlogText>

                        <BlogText>
                            We covered exactly how this ranking gap works in our{" "}
                            <Link href="/blog/why-competitor-outranks-you" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">
                                guide to why your competitor outranks you
                            </Link>.
                        </BlogText>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Find Out if Custom Code Is Right for Your Store</h3>
                        <p className="text-stone-600 mb-6">
                            Share your Shopify URL. We run PageSpeed live, calculate your real 3-year cost comparison, and tell you honestly whether migration makes financial sense. No pressure. No sales pitch. Just numbers.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">
                                Schedule Free Store Audit <ArrowRight className="w-5 h-5" />
                            </CalModalButton>
                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10 mt-6 md:mt-10 md:mt-16">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Shopify works for small stores</strong>: Under $200/month total spend, fewer than 5 apps, no checkout customization needed. Stay on Shopify.</li>
                            <li><strong>App bloat is the real killer</strong>: The average serious Shopify store spends $800 to $1,500/month on fees and apps. Over 3 years, that is $28,800 to $54,000 before you add transaction fees.</li>
                            <li><strong>Speed drives conversion</strong>: Shopify stores with 20+ apps load in 4+ seconds. Custom stores load in under 1 second. The conversion rate gap is 1.4% vs 3 to 5%.</li>
                            <li><strong>Custom code costs more upfront but less over time</strong>: An $3,000 Growth to $12,000 Scale build on Vercel (starts free, scales to $20/mo only when your business grows) is cheaper than Shopify by year 2 for most serious stores.</li>
                            <li><strong>Headless Shopify is the middle ground</strong>: Keep Shopify admin, replace the slow frontend. Get custom performance without migrating product data.</li>
                        </ol>
                    </section>

                    {/* FAQ Section */}
                    {shopifyVsCustomFAQs.length > 0 && <FAQAccordion faqs={shopifyVsCustomFAQs} />}

                    {/* Related Posts */}
                    <RelatedPosts currentPostId="shopify-vs-custom-website" />

                </article>
            </main>
            <Footer />
        </>
    );
}