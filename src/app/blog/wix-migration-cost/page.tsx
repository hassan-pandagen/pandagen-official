import { ArrowLeft, ArrowRight, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogAuthor, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "wix-migration-cost")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/ExportLockAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: { absolute: "Wix Migration Cost in 2026: Real Price by Site Size" },
    description: "Migrating off Wix runs $1,500 to $10,000+ depending on page count and e-commerce. Real pricing, why Wix has no clean export, and how to keep your SEO.",
    alternates: {
        canonical: "/blog/wix-migration-cost",
    },
    keywords: [
        "wix migration cost",
        "how much does it cost to migrate off Wix",
        "Wix to custom website cost",
        "migrate off Wix without losing SEO",
        "can you export your Wix website",
        "Wix to Next.js migration",
        "cost to leave Wix",
        "Wix to WordPress migration cost",
        "does migrating off Wix hurt rankings"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Wix Migration Cost in 2026: Real Price by Site Size",
        description: "Migrating off Wix runs $1,500 to $10,000+ depending on page count and e-commerce. Real pricing, why Wix has no clean export, and how to keep your SEO.",
        type: "article",
        publishedTime: "2026-07-03",
        modifiedTime: "2026-07-03",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/wix-migration-cost",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wix Migration Cost in 2026: Real Price by Site Size",
        description: "Migrating off Wix runs $1,500 to $10,000+ depending on page count and e-commerce. Real pricing, why Wix has no clean export, and how to keep your SEO.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wix-migration-cost#article",
            "headline": "Wix Migration Cost in 2026: Real Price by Site Size",
            "description": "Migrating off Wix runs $1,500 to $10,000+ depending on page count and e-commerce. Real pricing, why Wix has no clean export, and how to keep your SEO.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-07-03T00:00:00-05:00",
            "dateModified": "2026-07-03T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wix-migration-cost" },
            "articleSection": "Wix",
            "keywords": ["wix migration cost", "how much does it cost to migrate off Wix", "Wix to custom website cost", "migrate off Wix without losing SEO", "can you export your Wix website"],
            "wordCount": 1650,
            "timeRequired": "PT7M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Wix" },
                { "@type": "Thing", "name": "Website Migration" },
                { "@type": "Thing", "name": "Next.js" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/wix-migration-cost#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wix-migration-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Wix Migration Cost", "item": "https://www.pandacodegen.com/blog/wix-migration-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wix-migration-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/wix-migration-cost",
            "name": "Wix Migration Cost in 2026: What It Really Costs to Leave Wix",
            "description": "Migrating off Wix runs $1,500 to $10,000+ depending on page count and e-commerce. Real pricing, why Wix has no clean export, and how to keep your SEO.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-07-03T00:00:00-05:00",
            "dateModified": "2026-07-03T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites that replace slow Wix, WordPress, and WooCommerce sites. Sites load under 1 second and cost about $0 a month to host.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function WixMigrationCostPage() {
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
                        { label: "Wix Migration Cost" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold mb-4">
                            <LayoutTemplate className="w-3 h-3" /> Wix · Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Wix Migration Cost in 2026:{" "}
                            <span className="font-serif italic text-cognac">What It Really Costs to Leave Wix</span>
                        </h1>
                        <p className="text-lg text-stone-500 leading-relaxed mb-6">
                            Migrating off Wix to a custom-built site costs $1,500 to $10,000+, set mostly by page count and whether you sell online. The surprise is not the price. It is why the price exists: Wix has no clean export, so a migration is really a careful rebuild.
                        </p>
                        <BlogAuthor
                            date="Jul 3, 2026"
                            readTime="7 min read"
                            bio="Hassan migrates businesses off Wix, WordPress, and Webflow onto custom Next.js sites with a written 90+ PageSpeed guarantee. Recent rebuild: Obare Magazine off Wix onto Next.js and Sanity in 7 days."
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
                                Migrating off Wix runs $1,500 (5-7 page site), $3,500 (10-20 pages with a blog), and $5,000 to $10,000+ (30+ pages or e-commerce)
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Wix has no full site export. Products, contacts, orders, and blog posts come out as CSV/XML; design, layout, and page SEO must be rebuilt by hand
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Your Google rankings survive when every old URL gets a page-by-page 301 redirect to its new home. That map is the most important deliverable in the project
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                A typical Wix migration takes 2 to 6 weeks. We shipped the Obare Magazine rebuild in 7 days on a focused scope
                            </li>
                        </ul>
                    </div>

                    {/* Article body */}
                    <div className="space-y-8">

                        <BlogText>
                            Migrating off Wix to a custom-built site costs <BlogHighlight>$1,500 to $10,000+</BlogHighlight>, depending mostly on how many pages you have and whether you sell online. A 5-7 page brochure site sits at the low end. A 30-page store with payments and integrations sits at the high end. The number that surprises people is not the price. It is <em>why</em> the price exists: Wix gives you no clean way to export your site, so a &quot;migration&quot; is really a careful rebuild, with your old URLs mapped to new ones so you do not lose the Google rankings you already have.
                        </BlogText>

                        <BlogText>
                            I will break down the real cost by site size, explain the export problem honestly, and show you what we have actually delivered. No estimates dressed up as facts.
                        </BlogText>

                        <BlogText>
                            A quick receipt before the pricing. We rebuilt <BlogHighlight>Obare Magazine</BlogHighlight>, a culture publication with 225,000 Instagram followers, off Wix into a custom Next.js and Sanity build, delivered in <BlogHighlight>7 days for $1,350</BlogHighlight>. And on WordPress, the same story: rebuilding MyCustomPatches (our client Matt Conner&apos;s WooCommerce store) took PageSpeed from <BlogHighlight>45 to 90+</BlogHighlight>, page load from 3.2 seconds to 0.7, and monthly hosting from $150 to $0. Different platforms, same pattern: a hand-built site is faster and cheaper to run than a builder.
                        </BlogText>

                        <BlogHeader>How much does it cost to migrate off Wix?</BlogHeader>

                        <BlogText>
                            Between <BlogHighlight>$1,500 and $10,000+</BlogHighlight>, set almost entirely by page count and whether you have a store. Here is the full pricing, tier by tier.
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                            <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full border-collapse text-sm min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Tier</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Best for</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">What&apos;s included</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Starter</td>
                                        <td data-label="Best for" className="border border-stone-300 px-4 py-3 text-stone-700">5-7 page brochure site</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">Full rebuild, mobile-first, contact forms, basic on-page SEO</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$1,500</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Growth</td>
                                        <td data-label="Best for" className="border border-stone-300 px-4 py-3 text-stone-700">10-20 pages, blog</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">CMS so you can edit yourself, blog migration, page-by-page 301 redirect map</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$3,500</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Scale</td>
                                        <td data-label="Best for" className="border border-stone-300 px-4 py-3 text-stone-700">30+ pages, e-commerce</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">Product catalog, checkout, integrations, full content recreation</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$5,000-$10,000</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Scale+</td>
                                        <td data-label="Best for" className="border border-stone-300 px-4 py-3 text-stone-700">Large or complex builds</td>
                                        <td data-label="What's included" className="border border-stone-300 px-4 py-3 text-stone-700">Custom features, multiple integrations, ongoing scope</td>
                                        <td data-label="Price" className="border border-stone-300 px-4 py-3 text-stone-700 font-semibold">$10,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            Every build ships with a written <BlogHighlight>90+ PageSpeed guarantee, or your money back</BlogHighlight>. For comparison, enterprise agencies quote $15,000 and up for the exact same scope, same page count, same features, because their overhead is baked into your invoice.
                        </BlogText>

                        <InsightBox variant="info" label="Quick Answer">
                            Most Wix owners moving a normal business site land in the Starter ($1,500) to Growth ($3,500) range. You only reach $5,000+ when you have a real store or 30+ pages.
                        </InsightBox>

                        <BlogText>
                            The freelancer market muddies this. You will see Fiverr gigs at $30 and &quot;migration services&quot; around $200-$600. Those move text and images into a template, they do not rebuild your site to load fast, and most skip the URL mapping that protects your SEO. Cheap migrations that drop your rankings cost far more than they save.
                        </BlogText>

                        <BlogHeader>Can you export your website from Wix?</BlogHeader>

                        <BlogText>
                            No, not in any way that lets you import it elsewhere. This is the single most important thing to understand before you budget for a migration.
                        </BlogText>

                        <BlogText>
                            Wix is a closed, SaaS platform. Your pages, layout, design, and page-level SEO settings live on Wix&apos;s servers in Wix&apos;s proprietary format, and there is no &quot;export everything&quot; button like WordPress or Shopify offer. What you <em>can</em> pull out is limited:
                        </BlogText>

                        <BlogList items={[
                            "Store products as a CSV from the Wix Stores dashboard",
                            "Contacts and customer lists as a CSV",
                            "Orders and bookings as CSV exports",
                            "Blog posts as XML, if your Blog Manager has the export option",
                        ]} />

                        <BlogText>
                            What you <BlogHighlight>cannot</BlogHighlight> export: your site&apos;s design, page layouts, themes, and your carefully set page SEO. That all has to be recreated by hand on the new site.
                        </BlogText>

                        <BlogText>
                            This is why a Wix migration is not a &quot;transfer.&quot; It is a rebuild. And the rebuild is also the opportunity, instead of copying Wix&apos;s bloat, the new site is built clean from the start. See <Link href="/blog/wix-vs-custom-website" className="text-cognac underline underline-offset-2 hover:text-amber-700">Wix vs custom website</Link> for the side-by-side.
                        </BlogText>

                        <BlogHeader>Will I lose my Google rankings if I move off Wix?</BlogHeader>

                        <BlogText>
                            Not if the migration is done right. Done wrong, you can lose months of traffic. The deciding factor is one document: the redirect map.
                        </BlogText>

                        <BlogText>
                            Every old Wix URL that has organic traffic, backlinks, or a ranking position needs a <BlogHighlight>301 redirect</BlogHighlight> pointing to its matching page on the new site. Not a single bulk redirect from the homepage, a page-by-page map that tells Google exactly where each piece of content moved. When that map is complete, your SEO equity carries over. When redirects are missing or wrong, links break, equity leaks, and recovery takes months.
                        </BlogText>

                        <InsightBox variant="info" label="Quick Answer">
                            A correctly executed migration usually means a small dip (a 10-20% traffic wobble for 2-4 weeks) while Google reprocesses the site, then recovery, and often improvement, because the new site is faster.
                        </InsightBox>

                        <BlogText>
                            There is a Wix-specific wrinkle worth knowing. Wix does not support standard server-side 301 redirects on the <em>old</em> site, so once you have left, you control redirects from your new platform and your DNS instead. On a custom build that is straightforward, real 301s are native. The redirect map is the most important deliverable in any migration, which is why our <BlogHighlight>Growth tier and up includes it by default</BlogHighlight>. For the full mechanics, read <Link href="/blog/website-migration-cost-2026" className="text-cognac underline underline-offset-2 hover:text-amber-700">website migration cost</Link>.
                        </BlogText>

                        <BlogHeader>How long does a Wix migration take?</BlogHeader>

                        <BlogText>
                            A typical Wix migration takes <BlogHighlight>2 to 6 weeks</BlogHighlight>, driven by the same things that drive the price: page count, e-commerce, and how much content has to be recreated by hand.
                        </BlogText>

                        <BlogList items={[
                            "Small brochure site (5-15 pages): ~2-3 weeks",
                            "Content or blog-heavy site: ~3-4 weeks",
                            "E-commerce or membership site: ~4-6 weeks",
                        ]} />

                        <BlogText>
                            We delivered the Obare Magazine rebuild in <BlogHighlight>7 days</BlogHighlight>, so faster is possible on a focused scope. The long pole is almost always the manual rebuild, because there is no importer, every page is built fresh, then SEO settings and redirects are mapped on top. DIY attempts routinely run 2-3x longer than planned for exactly this reason. And your current site stays live and selling the entire time, we build on a separate staging setup and only switch over once the new site is 100% ready.
                        </BlogText>

                        {/* Mid CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-lg">
                            <p className="text-sm font-bold text-charcoal mb-2">Want a real number for your site, not a range?</p>
                            <p className="text-sm text-stone-500 mb-4">
                                Drop your Wix URL when you book. We run your speed live on the call, scope your pages and integrations, and give you a fixed price with a written 90+ PageSpeed guarantee, no open-ended hourly billing.
                            </p>
                            <CalModalButton className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white font-semibold rounded-full text-sm hover:bg-stone-800 transition-all">
                                Get Free Wix Site Audit <ArrowRight className="w-4 h-4" />
                            </CalModalButton>
                        </div>

                        <BlogHeader>What actually drives the cost up?</BlogHeader>

                        <BlogText>
                            Four things, in roughly this order of impact:
                        </BlogText>

                        <BlogList items={[
                            "Page count. More pages means more rebuild hours. This is the biggest lever, which is why pricing tiers track page ranges.",
                            "Content recreation. Because Wix won't export design and layout, text and structure get rebuilt by hand. A site with 80 blog posts costs more than a 6-page site for this reason alone.",
                            "E-commerce. A product catalog, checkout, payments, tax, and shipping logic add real scope. This is the jump from Growth to Scale.",
                            "Integrations. CRMs, booking tools, email platforms, analytics, custom forms, each connection is work. A few simple ones are minor; a deeply wired stack adds up.",
                        ]} />

                        <BlogText>
                            Things that do <em>not</em> meaningfully drive cost: a small number of contact forms, basic on-page SEO (that is standard), and your domain, which transfers separately and cheaply.
                        </BlogText>

                        <BlogHeader>Why are people leaving Wix in the first place?</BlogHeader>

                        <BlogText>
                            Three reasons keep showing up across r/wix, r/smallbusiness, and review sites: speed, lock-in, and growth ceilings.
                        </BlogText>

                        <BlogList items={[
                            "Speed. Wix loads 200-400KB of JavaScript before your content shows, and you can't remove it. Roughly half of Wix sites fail Google's Core Web Vitals assessment, and speed is a ranking factor. We watched this on our own Wix rebuild: Obare Magazine's pages loaded in 3 to 5 seconds on Wix, and after the Next.js rebuild, mobile PageSpeed jumped into the 90s.",
                            "Lock-in. No content export, template-locked design, and you don't truly own the build. The day you outgrow Wix, you discover you can't take it with you.",
                            "Growth ceilings. Limited SEO controls, a thin app marketplace versus competitors, and infrastructure you can't tune. Fine on day one; a wall when you scale.",
                        ]} />

                        <BlogText>
                            A custom build removes all three: you own the code, the site is fast by construction, and there is no ceiling. We cover the technical detail in <Link href="/blog/wix-too-slow" className="text-cognac underline underline-offset-2 hover:text-amber-700">Wix too slow</Link>.
                        </BlogText>

                        <BlogHeader>What about my domain and email?</BlogHeader>

                        <BlogText>
                            Both come with you. Your domain can be transferred away from Wix to any registrar, the transfer itself usually takes up to 7 days, and you remove the registrar lock and use an EPP authorization code to move it. Email keeps working as long as you re-add your MX records after the move; if you are on Wix-managed Gmail, you will switch that billing over to Google directly. None of this is expensive, and it is standard work we handle as part of a migration.
                        </BlogText>

                        <BlogHeader>How we price it (and the guarantee)</BlogHeader>

                        <BlogText>
                            PandaCodeGen prices Wix migrations as a flat project fee by tier, not an hourly meter. The new site is custom Next.js, fast by default, yours to own, and cheap to host (our WooCommerce client MyCustomPatches went from $150/mo hosting to $0 after the same kind of rebuild). Every project carries a written <BlogHighlight>90+ PageSpeed guarantee or a full refund</BlogHighlight>, which is not something a Wix site can offer, because on Wix you cannot control the infrastructure that determines speed.
                        </BlogText>

                        <BlogText>
                            If you want this handled end to end, rebuild, redirect map, domain, the works, that is our <Link href="/services/wix" className="text-cognac underline underline-offset-2 hover:text-amber-700">Wix migration service</Link>.
                        </BlogText>

                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-xl font-bold text-charcoal mb-2">Get a Fixed Price to Leave Wix</h3>
                        <p className="text-stone-500 text-sm mb-6">
                            Free Wix site audit. We will run your PageSpeed score, scope your pages and store, and give you a fixed-price quote with a written 90+ PageSpeed guarantee, no hourly surprises.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                            Get My Free Site Audit <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    <RelatedPosts currentPostId="wix-migration-cost" category="Wix" />

                </div>
            </section>

            <Footer />
        </main>
    );
}
