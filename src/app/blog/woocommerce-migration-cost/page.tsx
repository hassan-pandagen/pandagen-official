import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogAuthor, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "woocommerce-migration-cost")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/CostStackAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: { absolute: "WooCommerce Migration Cost in 2026: $1,500 to $10K+ (Real Pricing)" },
    description: "What it really costs to migrate off WooCommerce to custom Next.js. Fixed-price tiers from $1,500, what drives the number up, and the red flags in a $25K agency quote.",
    alternates: {
        canonical: "/blog/woocommerce-migration-cost",
    },
    keywords: [
        "WooCommerce migration cost",
        "cost to migrate off WooCommerce",
        "WooCommerce to custom website cost",
        "WooCommerce to Next.js migration cost",
        "headless WooCommerce migration cost",
        "WooCommerce replatforming cost",
        "is it worth migrating away from WooCommerce",
        "WooCommerce migration without losing SEO",
        "how long does a WooCommerce migration take"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "WooCommerce Migration Cost in 2026: $1,500 to $10K+ (Real Pricing)",
        description: "What it really costs to migrate off WooCommerce to custom Next.js. Fixed-price tiers from $1,500, what drives the number up, and the red flags in a $25K agency quote.",
        type: "article",
        publishedTime: "2026-06-30",
        modifiedTime: "2026-06-30",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/woocommerce-migration-cost",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "WooCommerce Migration Cost in 2026: $1,500 to $10K+ (Real Pricing)",
        description: "What it really costs to migrate off WooCommerce to custom Next.js. Fixed-price tiers from $1,500, what drives the number up, and the red flags in a $25K agency quote.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/woocommerce-migration-cost#article",
            "headline": "WooCommerce Migration Cost in 2026: $1,500 to $10K+ (Real Pricing)",
            "description": "What it really costs to migrate off WooCommerce to custom Next.js. Fixed-price tiers from $1,500, what drives the number up, and the red flags in a $25K agency quote.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-06-30T00:00:00-05:00",
            "dateModified": "2026-06-30T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/woocommerce-migration-cost" },
            "articleSection": "WooCommerce",
            "keywords": ["WooCommerce migration cost", "cost to migrate off WooCommerce", "WooCommerce to Next.js migration cost", "headless WooCommerce migration cost", "WooCommerce migration without losing SEO"],
            "wordCount": 1750,
            "timeRequired": "PT8M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "WooCommerce" },
                { "@type": "Thing", "name": "Website Migration" },
                { "@type": "Thing", "name": "E-Commerce" },
                { "@type": "Thing", "name": "Next.js" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/woocommerce-migration-cost#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/woocommerce-migration-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "WooCommerce Migration Cost", "item": "https://www.pandacodegen.com/blog/woocommerce-migration-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/woocommerce-migration-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/woocommerce-migration-cost",
            "name": "WooCommerce Migration Cost in 2026: What You'll Actually Pay",
            "description": "What it really costs to migrate off WooCommerce to custom Next.js. Fixed-price tiers from $1,500, what drives the number up, and the red flags in a $25K agency quote.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-30T00:00:00-05:00",
            "dateModified": "2026-06-30T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites that replace slow WordPress and WooCommerce stores. Sites load under 1 second and cost about $0 a month to host.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function WooCommerceMigrationCostPage() {
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
                        { label: "WooCommerce Migration Cost" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold mb-4">
                            <ShoppingCart className="w-3 h-3" /> WooCommerce · Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            WooCommerce Migration Cost in 2026:{" "}
                            <span className="font-serif italic text-cognac">What You&apos;ll Actually Pay</span>
                        </h1>
                        <p className="text-lg text-stone-500 leading-relaxed mb-6">
                            Migrating off WooCommerce runs $1,500 for a small store, $3,500 for a mid-size store with a CMS and content pages, and $5,000 to $10,000 for full headless e-commerce. Agencies quote $15,000 to $25,000+ for the same work. Here is what each price actually buys.
                        </p>
                        <BlogAuthor
                            date="Jun 30, 2026"
                            readTime="8 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <FeatureVisual />
                    </div>

                    {/* Executive Summary */}
                    <div
                        className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12"
                        data-speakable="true"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Key Facts</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Migrating off WooCommerce to custom Next.js runs $1,500 (small store), $3,500 (CMS + content), and $5,000 to $10,000 (full headless e-commerce); enterprise scope goes past $10,000
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Traditional agencies quote $15,000 to $25,000+ for the exact same Scale-tier scope, usually with no performance number in writing
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                A complete 301 redirect map is what protects your SEO. Skip it and stores can lose 40%+ of traffic; map it properly and any dip usually recovers in 1 to 4 weeks
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                If speed is your only problem and your catalog is small, better hosting can be the cheaper fix. A rebuild wins once you are also carrying plugin conflicts and monthly subscriptions
                            </li>
                        </ul>
                    </div>

                    {/* Article body */}
                    <div className="space-y-8">

                        <BlogText>
                            Migrating off WooCommerce to a custom Next.js build runs <BlogHighlight>$1,500 for a small brochure store, $3,500 for a mid-size store with a CMS and content pages, and $5,000 to $10,000 for full headless e-commerce</BlogHighlight> with 30+ pages and integrations. Enterprise scope can go past $10,000. The same projects get quoted at $15,000 to $25,000+ by traditional agencies. That spread is the whole reason this post exists: the number you have been quoted may have very little to do with the work involved.
                        </BlogText>

                        <BlogText>
                            I will show you what each price actually buys, what pushes the number up, and how to read a quote so you do not pay agency margins for freelancer-grade work.
                        </BlogText>

                        <BlogHeader>How much does it cost to migrate off WooCommerce?</BlogHeader>

                        <BlogText>
                            Between $1,500 and $10,000+, and where you land depends almost entirely on product count, integrations, and whether you need a real checkout. Here is the receipt that started this for us.
                        </BlogText>

                        <BlogText>
                            Matt Conner ran <BlogHighlight>MyCustomPatches</BlogHighlight> on WordPress and WooCommerce. The store worked, but it was slow: a PageSpeed score of 45 and a 3.2-second load. We rebuilt it on custom Next.js. PageSpeed went from <BlogHighlight>45 to 90+</BlogHighlight>, load dropped to <BlogHighlight>0.7 seconds</BlogHighlight>, and hosting went from <BlogHighlight>$150/month to $0/month</BlogHighlight>. That last line matters more than people expect, because it repeats every single month after the migration is done. And MyCustomPatches did not need a custom checkout or full headless commerce, just a clean, fast storefront rebuild, so it sat well below the headless-store tier.
                        </BlogText>

                        <BlogText>
                            Panda Patches, a store we build and run on the same stack, has scaled from <BlogHighlight>$38,000 to about $50,000 a month on about $55 a month in tooling</BlogHighlight> (a Supabase backend, Vercel, and the FAL AI patch generator). No plugin stack, no hosting tax, no &quot;performance add-on&quot; subscription. Name a WooCommerce store doing $50K/month on under $100 in tooling. That is the cost structure you are buying when you leave WooCommerce, and it is a big part of why the math works even when the upfront number is not tiny.
                        </BlogText>

                        <BlogText>
                            Here is the full pricing table.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                            <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full border-collapse text-sm min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Tier</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">What&apos;s included</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Starter</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">5-7 pages, custom design, contact forms, fast static build. Good for a small catalog or a storefront that sells through links/DMs.</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$1,500</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Growth</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">10-20 pages, CMS so you can edit content yourself, content migration with full 301 redirect mapping. The common &quot;I have a content-heavy WooCommerce site&quot; tier.</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$3,500</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Scale</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">Headless e-commerce, 30+ pages, custom checkout, product/order/customer data migration, third-party integrations. The real WooCommerce store rebuild.</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$5,000-$10,000</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Scale+</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">Enterprise scope: large catalogs, multiple integrations, complex business logic, ongoing engineering.</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$10,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            Every build ships with a written <BlogHighlight>90+ PageSpeed guarantee, or your money back</BlogHighlight>. If we cannot hit it, you do not pay. Traditional agencies quote $15,000-$25,000+ for the exact scope in the Scale row, and most will not put a performance number in writing at all.
                        </BlogText>

                        <BlogHeader>Is it worth leaving WooCommerce, or should I just fix my hosting?</BlogHeader>

                        <InsightBox variant="info" label="Quick Answer">
                            If your only problem is speed and you have a small catalog, better hosting can buy you real gains for far less money. If you are fighting plugin conflicts, paying a stack of monthly subscriptions, and watching your store crawl under traffic, a rebuild usually wins, and you feel it the first month, when the hosting and plugin bills disappear and the faster store starts converting better.
                        </InsightBox>

                        <BlogText>
                            I will be straight about this, because plenty of people online are not: you do not need to leave WooCommerce just to get a fast page. Good hosting fixes a lot. If that is genuinely your whole issue, fix the hosting and keep your money.
                        </BlogText>

                        <BlogText>
                            But that is rarely the whole issue. The pattern we see is a store carrying 25-40 plugins, each with its own renewal fee, each a candidate to break on the next update. The &quot;fast&quot; version of that site still depends on caching layers papering over a heavy stack. Speed is the symptom people notice first; the deeper cost is the maintenance tax and the fragility. When a single plugin update can take checkout down, you are not running a store, you are babysitting one.
                        </BlogText>

                        <BlogText>
                            If you want the full speed argument before deciding, we wrote it up in <Link href="/blog/woocommerce-too-slow" className="text-cognac underline underline-offset-2 hover:text-amber-700">WooCommerce too slow</Link>. And if you are weighing the platforms head to head rather than just the cost, <Link href="/blog/woocommerce-vs-custom-website" className="text-cognac underline underline-offset-2 hover:text-amber-700">WooCommerce vs custom website</Link> lays out the trade-offs.
                        </BlogText>

                        <BlogText>
                            Why speed is worth paying for: on a storefront, speed is not a vanity score, it is checkout friction. MyCustomPatches went from 3.2s to 0.7s on the same catalog and the same traffic, and a store that loads in well under a second stops giving shoppers a reason to bounce before the page paints. When you are already doing real revenue, the seconds you cut turn into orders you were quietly losing.
                        </BlogText>

                        <BlogHeader>Will I lose my SEO rankings when I migrate?</BlogHeader>

                        <InsightBox variant="info" label="Quick Answer">
                            Not if the migration includes a complete 301 redirect map. Skip the redirects and you can lose 40%+ of traffic within weeks. Map them properly and a temporary dip usually recovers in 1-4 weeks.
                        </InsightBox>

                        <BlogText>
                            This is the single biggest risk in any migration, and it is also the most preventable. Every URL that changes needs a 301 redirect pointing the old address to the new one, so the SEO equity you have built transfers instead of evaporating. Proper URL mapping done before launch is what separates a clean migration from a traffic crater.
                        </BlogText>

                        <BlogText>
                            This is also why a real quote and a cheap one diverge. A $200 &quot;migration plugin&quot; copies your products into a new database. It does not preserve your URL structure, your redirects, your metadata, or your schema. When the rankings drop, you pay a second time for someone to clean it up. Our Growth tier includes content migration with full 301 mapping for exactly this reason, it is not an upsell, it is the part that keeps your traffic alive.
                        </BlogText>

                        <BlogText>
                            For the broader playbook on doing this without a traffic hit, <Link href="/blog/website-migration-cost-2026" className="text-cognac underline underline-offset-2 hover:text-amber-700">website migration cost</Link> covers the SEO-preservation steps in more detail.
                        </BlogText>

                        <BlogHeader>How long does a WooCommerce migration take?</BlogHeader>

                        <InsightBox variant="info" label="Quick Answer">
                            A small brochure migration takes days to a couple of weeks. A full headless store with data migration and integrations runs 4-8 weeks. Larger catalogs take longer. Either way, your current store stays live and selling the entire time. We build and test the new site on a separate staging setup and only switch over once it is 100% ready, so you never close, never go dark, and never lose a day of revenue.
                        </InsightBox>

                        <BlogText>
                            Timeline tracks the tier:
                        </BlogText>

                        <BlogList items={[
                            "Starter (5-7 pages): days to ~2 weeks.",
                            "Growth (CMS + content + redirects): 2-4 weeks, most of it in content mapping and redirect QA.",
                            "Scale (headless e-commerce + integrations): 4-8 weeks. The work is in checkout, data migration, and testing every integration.",
                            "Scale+ (enterprise catalog): longer, depending on catalog size, including planning and SEO validation.",
                        ]} />

                        <BlogText>
                            We do not pad timelines to justify a retainer. The slow part of any honest migration is data and QA, not billing.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-lg">
                            <p className="text-sm font-bold text-charcoal mb-2">Want a real number for your store, not a range?</p>
                            <p className="text-sm text-stone-500 mb-4">
                                Drop your store URL when you book. We run your speed live on the call, scope your catalog and integrations, and give you a fixed price with a written 90+ PageSpeed guarantee, no open-ended hourly billing.
                            </p>
                            <CalModalButton className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white font-semibold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Get Free WooCommerce Audit <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        <BlogHeader>What drives WooCommerce migration cost up?</BlogHeader>

                        <BlogText>
                            The base number moves on five things. Knowing them lets you predict your own quote before anyone sends one.
                        </BlogText>

                        <BlogList items={[
                            "Page and product count. A 6-page storefront and a 2,000-SKU catalog are different projects. More products means more data to migrate, more templates, and more QA.",
                            "Integrations. Payment gateways, shipping calculators, ERP/inventory systems, email and CRM tools. Each integration is real engineering and the biggest single driver between the Growth and Scale tiers.",
                            "Server-side tracking. If you run ads, you likely need server-side conversion tracking (Meta CAPI, GA4) so your data survives ad blockers and iOS privacy changes. It is worth it, and it is billable work.",
                            "Custom checkout. A standard cart is straightforward. Subscriptions, multi-currency, B2B pricing tiers, or a bespoke checkout flow add scope.",
                            "Data migration depth. Products alone is one thing. Products plus historical orders, customer accounts, reviews, and saved addresses is another. The more history you keep, the more careful the migration.",
                        ]} />

                        <BlogText>
                            If you want the parallel breakdown for content sites specifically, <Link href="/blog/wordpress-migration-cost" className="text-cognac underline underline-offset-2 hover:text-amber-700">WordPress migration cost</Link> covers the non-commerce side of the same decision.
                        </BlogText>

                        <BlogHeader>What a fair quote includes (and the red flags to watch)</BlogHeader>

                        <BlogText>
                            A quote you can trust covers the whole job, not just the fun parts. Here is what should be in it.
                        </BlogText>

                        <BlogText>
                            A fair migration quote includes:
                        </BlogText>

                        <BlogList items={[
                            "Custom design and build, not a theme reskin",
                            "Full product/content migration with a documented 301 redirect map",
                            "Preserved metadata, schema, and URL structure where possible",
                            "QA across devices, browsers, and every integration",
                            "Launch support and a rollback plan",
                            "A written performance target you can hold them to",
                        ]} />

                        <BlogText>
                            Red flags to watch:
                        </BlogText>

                        <BlogList items={[
                            "No performance number in writing. If they will not commit to a PageSpeed score, they do not know if they can hit one. We guarantee 90+ or full refund.",
                            "Redirects listed as \"optional\" or extra. Redirects are not optional. Treating them as an upsell tells you they cut corners on SEO.",
                            "A vague hourly estimate with no cap. Open-ended hourly billing is how a \"$6,000\" project becomes $18,000.",
                            "A mandatory monthly retainer to even start. Some agencies bury a $25K+ annual minimum in the contract. You are a store owner, not a recurring-revenue line item.",
                            "A $200 plugin sold as a migration. That is a data copy, not a migration, and you will pay twice.",
                        ]} />

                        <BlogText>
                            The honest version of this work is fixed-price, scoped up front, and tied to a result you can measure. If a quote does not read that way, the price is not your real problem, the structure is.
                        </BlogText>

                        <BlogText>
                            When you are ready to scope your own number, our <Link href="/services/woocommerce" className="text-cognac underline underline-offset-2 hover:text-amber-700">WooCommerce migration service</Link> lays out exactly what is included at each tier.
                        </BlogText>

                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-xl font-bold text-charcoal mb-2">Get a Fixed Price to Migrate Off WooCommerce</h3>
                        <p className="text-stone-500 text-sm mb-6">
                            Free WooCommerce audit. We will run your PageSpeed score, scope your catalog and integrations, and give you a fixed-price quote with a written 90+ PageSpeed guarantee, no hourly surprises.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                            Get My Free Store Audit <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    <RelatedPosts currentPostId="woocommerce-migration-cost" category="WooCommerce" />

                </div>
            </section>

            <Footer />
        </main>
    );
}
