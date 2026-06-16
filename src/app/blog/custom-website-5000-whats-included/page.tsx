import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Package, Compass } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postFAQs = blogPosts.find(p => p.id === "custom-website-5000-whats-included")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "What You Get for a Custom Website Starting at $5,000 (2026)",
    description: "Most agencies quote $15,000 to $30,000 for a custom website or hide the price. Here is the honest version: what a custom build includes starting at $5,000, why it is a scoped starting point not a flat fee, and the things we include that buyers do not know to ask for.",
    alternates: { canonical: "/blog/custom-website-5000-whats-included" },
    keywords: [
        "custom website cost",
        "what does a custom website include",
        "custom website price 2026",
        "custom website vs agency cost",
        "how much custom website",
        "custom ecommerce website cost",
        "next.js website cost",
        "affordable custom website agency",
        "custom website what's included",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "What You Get for a Custom Website Starting at $5,000 (2026)",
        description: "The honest version of custom website pricing: what is actually included starting at $5,000, why it is a scoped starting point, and the extras buyers never think to ask for.",
        type: "article",
        publishedTime: "2026-06-14T00:00:00-05:00",
        modifiedTime: "2026-06-14T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/custom-website-5000-whats-included",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "What You Get for a Custom Website Starting at $5,000 (2026)",
        description: "What a custom build includes starting at $5,000, why it is a scoped starting point not a flat fee, and the extras most agencies leave out.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/custom-website-5000-whats-included#article",
            "headline": "What You Get for a Custom Website Starting at $5,000 (2026)",
            "description": "What a custom website build actually includes starting at $5,000, why it is a scoped starting point and not a flat fee, and the things buyers do not know to ask for.",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/custom-website-5000-whats-included" },
            "articleSection": "Pricing",
            "keywords": ["custom website cost", "what does a custom website include", "custom website price 2026", "next.js website cost"],
            "wordCount": 2400,
            "timeRequired": "PT11M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Custom Website Cost" },
                { "@type": "Thing", "name": "Web Development Pricing" },
                { "@type": "Thing", "name": "Next.js Development" },
                { "@type": "Thing", "name": "Server-Side Ad Tracking" }
            ],
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "BleylDev: WordPress vs Custom Website 2026", "url": "https://bleyl.dev/blog/custom-website-vs-wordpress" },
                { "@type": "CreativeWork", "name": "Cometly: Conversion API Setup Cost 2026", "url": "https://www.cometly.com/post/conversion-api-setup-cost" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/custom-website-5000-whats-included#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/custom-website-5000-whats-included#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Custom Website Starting at $5,000", "item": "https://www.pandacodegen.com/blog/custom-website-5000-whats-included" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/custom-website-5000-whats-included#webpage",
            "url": "https://www.pandacodegen.com/blog/custom-website-5000-whats-included",
            "name": "What You Get for a Custom Website Starting at $5,000 (2026)",
            "description": "What a custom website build includes starting at $5,000, why it is a scoped starting point, and the extras most agencies leave out.",
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
            "description": "PandaCodeGen builds custom Next.js websites with published, fixed pricing. Sites load under 1 second, score 90+ on Google PageSpeed, include server-side ad tracking, and come with full code ownership and no monthly platform fees.",
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

export default function CustomWebsite5000Page() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Custom Website Starting at $5,000" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-4">
                            <Package className="w-3 h-3" /> Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            What You Get for a Custom Website{" "}
                            <span className="font-serif italic text-cognac">Starting at $5,000</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            Most agencies quote $15,000 to $30,000 for a custom website, and a lot of them will not even show you the number until you sit through a sales call. Here is the honest version. A custom build at PandaCodeGen starts at $5,000, and that is a starting point scoped to your project, not a flat fee. This post lays out exactly what is included at that price, what moves it up, and the things we include that most buyers never think to ask for, like server-side ad tracking and ongoing advice on which ads are actually working. You own the code, there are no monthly platform fees, and you get a fixed quote before any work begins.
                        </p>
                        <BlogAuthor
                            date="Jun 14, 2026"
                            readTime="11 min read"
                            bio="Hassan builds custom Next.js sites on published, fixed pricing, no sales-call mystery number. You talk to the engineer writing your code, not an account manager."
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
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Most agencies quote $15,000 to $30,000 for a custom website, or hide the price behind a contact form. We publish ours.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> A custom build (e-commerce or a custom lead-gen platform, 30+ pages) starts at $5,000. It is a scoped starting point, not a flat fee, you get a fixed quote before work begins.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Included: Next.js build, Sanity CMS, <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline">server-side Meta ad tracking</Link>, 90+ PageSpeed guarantee or full refund, full code ownership, 301 redirects, zero-downtime launch, a free month of tweaks, and hosting that starts free.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> The part nobody else includes: we tell you which of your ads are working, which to cut, and when to run them, because we built the tracking and can actually read it.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> It scales up with two things: more pages, and how much of your customer journey you want tracked. At $10,000 we add a monitoring dashboard and an optional retainer.</li>
                        </ul>
                    </div>

                    <BlogText>
                        Custom website pricing is deliberately murky. Search it and you will find ranges from $5,000 to $75,000 with almost no explanation of what separates them. The agencies quoting $15,000 to $30,000 are not always overcharging, sometimes that is real senior engineering time, but a chunk of it is overhead you end up funding: account managers, sales teams, office space. We are a small, founder-led team, so the price reflects the build, not the bureaucracy. Here is exactly what you get.
                    </BlogText>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen builds custom Next.js websites on published, fixed pricing. No mystery number, no monthly platform fee, and you own the code. You talk directly to the engineer building your site, and on builds that run ads we include server-side tracking and tell you what is actually working.
                        </p>
                    </div>

                    <BlogHeader id="whats-included">What Is Included Starting at $5,000</BlogHeader>
                    <BlogText>
                        This is the Scale tier. Everything here is in the base, before any scope-up.
                    </BlogText>
                    <BlogList items={[
                        "A fully custom Next.js build: e-commerce (Shopify or WooCommerce on the back end, custom front end) or a custom lead-generation platform, 30+ pages.",
                        "Sanity CMS, so your team edits content, images, and copy without touching code or needing a developer.",
                        "Server-side Meta Conversions API tracking, so your ad data is clean and Meta can actually see who buys. Most agencies hand you a browser pixel that misses up to half your conversions.",
                        "A written 90+ Google PageSpeed guarantee, or you get a full refund. In writing, not a promise.",
                        "A fixed price agreed before work starts. No hourly billing, no surprise invoices.",
                        "Full ownership of the code. The repository is transferred to you. No lock-in, no proprietary builder, no monthly platform fee.",
                        "Complete 301 redirect mapping and a zero-downtime launch, so you keep your Google rankings and never go dark.",
                        "A free month of tweaks after launch, so the small things that surface in real use get fixed at no extra cost.",
                        "Vercel hosting that starts free and scales to about $20 a month when you grow, instead of $50 to $300 a month elsewhere.",
                    ]} />

                    <BlogHeader id="the-advisory">The Part Nobody Else Includes</BlogHeader>
                    <BlogText>
                        Here is what actually separates this from a $20,000 quote, and it is not a feature on a checklist. It is that we do not build your tracking and disappear.
                    </BlogText>
                    <BlogText>
                        Because we build the ad tracking ourselves rather than reselling a tool we do not understand, we can sit with you and read it. We will tell you which of your ads are quietly wasting budget, which ones to scale, and when you have fed the data enough to turn on new campaigns. We ran this exact setup on our own store first, you can see the numbers in <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline">how server-side tracking lifted our own reported conversions</Link>.
                    </BlogText>
                    <BlogQuote>
                        A dashboard you cannot interpret is just another bill. The value is not the data. It is someone telling you what the data means and what to do about it.
                    </BlogQuote>
                    <BlogText>
                        And you do not have to be a client to get that read. If you already run Meta ads on your own setup, you can book a free call and we will tell you what is working and what is leaking. No pitch, no charge. That is how we would rather earn the build.
                    </BlogText>

                    <BlogHeader id="why-starting-at">Why It Is &quot;Starting At&quot; and Not a Flat Fee</BlogHeader>
                    <BlogText>
                        We do not pretend every project is the same size, so we do not pretend it is the same price. The $5,000 starting point covers a custom build with the core server-side tracking you can watch working in Meta. Two things scope it up from there, honestly:
                    </BlogText>
                    <BlogList items={[
                        "More pages. A 30-page site and a 90-page site are not the same build. Page count is the most straightforward driver.",
                        "More of your customer journey tracked. Meta supports far more than a single Purchase event, things like Add to Cart, Initiate Checkout, View Content, Contact, and custom pipeline stages. Each event set up properly, server-side, is real work, and the more of the funnel you want measured cleanly, the more setup it takes.",
                    ]} />
                    <BlogText>
                        At <BlogHighlight>$10,000</BlogHighlight> we add a monitoring dashboard so you can see event quality and attribution at a glance, and we can fold ongoing tracking, SEO, and AEO (getting your site cited by AI search) into a retainer. Whatever the scope, you get a single fixed quote before any work starts. The number does not move once we agree on it.
                    </BlogText>

                    <BlogHeader id="tiers">How $5,000 Compares to the Lower Tiers</BlogHeader>
                    <BlogText>
                        Not every business needs the Scale tier. Here is the honest line between them so you do not overpay for scope you will not use.
                    </BlogText>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                    <div className="my-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                        <table className="w-full text-sm border-collapse min-w-[560px] responsive-stack-table">
                            <thead>
                                <tr className="bg-stone-50 border border-stone-300">
                                    <th className="text-left p-3 font-semibold text-stone-700">Tier</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Best for</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Server-side ad tracking</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Starter, $1,500", "5 to 7 page business site", "No"],
                                    ["Growth, $3,500", "10 to 20 page content site, CMS, blog migration", "No"],
                                    ["Scale, from $5,000", "E-commerce or custom platform, 30+ pages, runs ads", "Yes"],
                                ].map(([tier, best, capi]) => (
                                    <tr key={tier} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-stone-700 font-medium">{tier}</td>
                                        <td data-label="Best for" className="p-3 text-stone-600">{best}</td>
                                        <td data-label="Server-side ad tracking" className={`p-3 font-semibold ${capi === "Yes" ? "text-emerald-700" : "text-stone-500"}`}>{capi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        The simple rule: if you run paid ads and take payments or leads online, you want Scale, because the server-side tracking pays for itself in cleaner ad spend. If you mainly need a fast, well-structured content site, <Link href="/pricing" className="text-cognac hover:underline">Growth at $3,500</Link> is the fit. The full tier breakdown and the written guarantees are on our <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>.
                    </BlogText>

                    <div className="my-8 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Get a Fixed Quote <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-400 mt-3">We scope your project and give you one fixed number before any work starts.</p>
                    </div>

                    <BlogHeader id="own-it">You Own It, and You Can Leave</BlogHeader>
                    <BlogText>
                        This is the difference between buying a custom site and renting a platform. On Webflow, Wix, or a Shopify theme, you pay every month and you cannot take the build with you. With a custom build, the repository is transferred to you. There is no proprietary builder holding your site hostage and no monthly platform fee. If you ever want to move to another developer, you can, it is your code on your hosting account.
                    </BlogText>
                    <BlogText>
                        That ownership is why a custom build that costs more upfront usually costs less over three years. You stop paying rent on your own website.
                    </BlogText>

                    <BlogHeader id="who-its-for">Who the $5,000 Tier Is For</BlogHeader>
                    <BlogText>
                        <strong>It fits if:</strong> you run an online store or a lead-driven business, you spend real money on ads, and you are tired of either a slow platform site or a $20,000 agency quote with a mystery scope. You want clean ad data, a fast site, and someone who will actually tell you what is working.
                    </BlogText>
                    <BlogText>
                        <strong>You can start smaller if:</strong> you are pre-revenue, not running ads yet, or you need a simple content site. Start at <Link href="/pricing" className="text-cognac hover:underline">Growth or Starter</Link> and move up when the ad spend justifies the tracking.
                    </BlogText>

                    <BlogHeader id="bottom-line">The Bottom Line</BlogHeader>
                    <BlogText>
                        A custom website does not have to be a $20,000 black box. Starting at $5,000 you get a fast, owned, custom build with clean server-side ad tracking and a real person reading the data with you, on a fixed quote you agree to before work begins. The price scales honestly with scope, more pages and more of your funnel tracked, and it never moves once we shake on it.
                    </BlogText>
                    <BlogText>
                        If you want to know what your specific project would cost, the quote is free and so is the conversation about what is currently leaking in your ads.
                    </BlogText>

                    <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <Compass className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Get a Fixed Quote, Not a Mystery Number</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">We scope your project and give you one fixed price before any work starts. Already running ads? We will also tell you what is working and what is leaking, free.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Get a Fixed Quote <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-400 mt-4">Published pricing from $1,500. 90+ PageSpeed guarantee. You own the code.</p>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <section className="mb-10 mt-8 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed mb-3">
                            For the server-side ad tracking that comes with this tier (and the numbers it produced on our own store), read <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline font-medium">what Meta Conversions API setup costs and why a pixel is not enough</Link>. For how a custom build cuts the monthly software bill over time, see the <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">real Shopify app cost breakdown</Link>. And if you are moving an existing site, see what a <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">website migration costs by platform</Link>.
                        </p>
                    </section>

                    <RelatedPosts currentPostId="custom-website-5000-whats-included" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
