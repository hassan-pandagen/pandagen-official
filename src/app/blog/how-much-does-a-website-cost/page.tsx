import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleDollarSign, FileCheck2, ReceiptText } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));
const CostStackVisual = dynamicImport(() => import("@/components/blog/CostStackAnimation"));

const postId = "how-much-does-a-website-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How Much Does a Website Cost in 2026? A Scope-First Guide";
const description =
    "Calculate website cost from a comparable scope, current vendor quotes, delivery, operations and exit, with PandaCodeGen's published starting tiers and payment terms.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "how much does a website cost",
        "website cost 2026",
        "website pricing",
        "custom website cost",
        "small business website cost",
        "ecommerce website cost",
        "website migration cost",
        "what is included in a website quote",
        "website cost breakdown",
        "website cost per month",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-12",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-much-does-a-website-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const vendorSources = [
    { name: "Wix pricing", url: "https://www.wix.com/plans" },
    { name: "Squarespace pricing", url: "https://www.squarespace.com/pricing" },
    { name: "Webflow pricing", url: "https://webflow.com/pricing" },
    { name: "Shopify pricing", url: "https://www.shopify.com/pricing" },
    { name: "Vercel pricing", url: "https://vercel.com/pricing" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath(`/blog/${postId}`),
            datePublished: "2026-05-12",
            dateModified: "2026-08-19",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Software cost analysis", "Website project scoping", "Vendor contracts", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Pricing",
            inLanguage: "en-US",
            wordCount: 3443,
            timeRequired: "PT17M",
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Total cost of ownership", sameAs: ["https://en.wikipedia.org/wiki/Total_cost_of_ownership"] },
                { "@type": "Thing", name: "Pricing", sameAs: ["https://en.wikipedia.org/wiki/Pricing"] },
                { "@type": "Thing", name: "Website development pricing" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: vendorSources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Website cost", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-12",
            dateModified: "2026-08-19",
            inLanguage: "en-US",
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: postFAQs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

const sourceLinkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WebsiteCostGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Website cost")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website pricing</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How Much Does a Website Cost in 2026? <span className="italic text-cognac">Price the Scope, Not the Label</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Our own work starts at $1,500 for a small, clearly bounded site and usually lands between
                            $5,000 and $10,000 once a store or real integrations are involved. Those are our published
                            numbers, not the market&apos;s. Nobody has the market&apos;s number, because a one-page
                            campaign, a 30-route migration, a store and an application with logins are four different
                            products that happen to share a word.
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-stone-600">
                            What you can price is a scope, and then check whether the quote beside it covers the same
                            work. That is the difference between two numbers you can compare and two numbers you cannot.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            PandaCodeGen offer and vendor links reviewed August 1, 2026. Vendor prices can change.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="May 12, 2026"
                        readTime="11 min read"
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        bio="Hassan scopes the migrations and integrations, and writes acceptance terms you can actually measure."
                    />

                    <div className="my-10">
                        <CostStackVisual />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">PandaCodeGen&apos;s published starting points</h2>
                        <BlogList
                            items={[
                                "Starter begins at $1,500 for a focused, clearly bounded scope.",
                                "Growth begins at $3,500 for a broader migration, CMS or content-continuity scope.",
                                "Scale normally falls between $5,000 and $10,000 for larger or integration-heavy work.",
                                "Scale+ and unusual applications are quoted after discovery.",
                                "Extra pages and features are discussed and written into the scope before implementation.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: FileCheck2, title: "Build", body: "Everything up to launch, including moving the content across." },
                            { icon: ReceiptText, title: "Operate", body: "What you pay monthly, plus your own team's hours." },
                            { icon: CircleDollarSign, title: "Change or exit", body: "Later changes, price rises, and what it costs to leave." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>Current PandaCodeGen pricing and payment split</BlogHeader>
                    <BlogText>
                        These are planning anchors, not a promise that any page count, feature set or integration fits a tier. Every tier splits 30 percent at onboarding and 70 percent at delivery. The accepted proposal and statement of work control the final price, the deliverables, the exclusions, the schedule, the acceptance criteria and the remedy.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4 font-bold">Planning tier</th>
                                    <th className="p-4 font-bold">Starting price</th>
                                    <th className="p-4 font-bold">30% onboarding</th>
                                    <th className="p-4 font-bold">70% delivery</th>
                                    <th className="p-4 font-bold">Support discussion</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-semibold">Starter</td><td className="p-4">$1,500</td><td className="p-4">$450</td><td className="p-4">$1,050</td><td className="p-4">15 business days</td></tr>
                                <tr><td className="p-4 font-semibold">Growth</td><td className="p-4">$3,500</td><td className="p-4">$1,050</td><td className="p-4">$2,450</td><td className="p-4">30 business days</td></tr>
                                <tr><td className="p-4 font-semibold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">$1,500 to $3,000</td><td className="p-4">$3,500 to $7,000</td><td className="p-4">30 business days</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        These are planning anchors, not a promise that any page count, feature set or integration fits a
                        tier. The accepted proposal and statement of work control final price, deliverables,
                        dependencies, exclusions, schedule, acceptance, ownership, support and remedy. The tiers are
                        also published on the <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>, and
                        the commercial conditions behind them are set out in the{" "}
                        <Link href="/terms" className={sourceLinkClass}>terms</Link>.
                    </BlogText>

                    <BlogHeader id="is-1500-good">Is $1,500 a good price for a website?</BlogHeader>
                    <div data-speakable="true">
                    <BlogText>
                        It is a fair price for a small site with a settled scope, and a warning sign for anything larger.
                        At that number the work has to be genuinely bounded: a handful of templates, content you supply,
                        no migration of an existing set of URLs, and no integrations beyond a form and analytics. Priced
                        honestly, that is a real project, and it is what our Starter tier is for.
                    </BlogText>
                    </div>
                    <BlogText>
                        The same number becomes a warning when the brief has grown and the price has not. If a quote
                        still reads $1,500 once the conversation includes a store, logins, a CRM connection, or moving
                        200 existing pages without losing their addresses, something has to give, and it is usually the
                        part you cannot see from the outside: testing, redirect mapping, accessibility, or handing over
                        the accounts at the end. Ask which of those sits inside the number. Anyone who has priced the
                        work properly can answer that in a sentence.
                    </BlogText>

                    <BlogHeader id="free-website">Can you run a website for free?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Yes, and the free tiers are real rather than trials, but they are bounded in ways that
                            decide whether free is viable for you. Webflow&apos;s Starter plan, read from its pricing
                            page on August 5, 2026, costs nothing and gives you a <BlogHighlight>webflow.io
                            subdomain, two static pages, 1 GB of bandwidth and 50 form submissions</BlogHighlight>.
                            That is a genuine free website. It is also not a business website, because the limit that
                            bites first is not bandwidth: it is that you cannot put your own domain on it.
                        </BlogText>
                    </div>
                    <BlogText>
                        The reliable pattern is that the free tier stays free and everything you need in order to run a
                        real company on it is what you pay for. Check these four before assuming a free tier fits:
                    </BlogText>
                    <BlogList
                        items={[
                            "Custom domain: usually the first paid upgrade. A free plan almost always means a vendor subdomain, which is why free tiers suit prototypes and portfolios rather than a business people search for by name.",
                            "Page and content limits: two static pages on Webflow Starter is the shape of the constraint. Count your actual pages before you plan around a free tier.",
                            "Commercial-use terms: some free tiers permit personal projects only. Read the terms rather than assuming, because this is the limit that gets discovered late.",
                            "What happens at the ceiling: find out whether you are throttled, billed automatically, or taken offline. The answer differs by vendor and it belongs in the decision, not in the incident.",
                        ]}
                    />
                    <BlogText>
                        Developer hosting is the case where free genuinely scales further, and we priced it in detail
                        in{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className={sourceLinkClass}>what Vercel actually costs on the free tier</Link>.
                        The honest summary for this page: free hosting removes one line from the budget. It does not
                        remove design, content, migration, integrations or the person maintaining it, which is where
                        the money in every quote below actually goes.
                    </BlogText>

                    <BlogQuote>
                        Our own numbers are not the market average. They are what we charge, and we say so.
                    </BlogQuote>

                    <BlogHeader>What belongs in a comparable website quote</BlogHeader>
                    <BlogText>
                        Two quotes are only comparable once both contain the same seven groups of line items. Discovery, content and migration, integrations, quality scope, search continuity, launch and handover, and the change-control terms. A page count is not a scope: ten repeated location pages and ten unique application screens are different amounts of work.
                    </BlogText>
                    <BlogList
                        items={[
                            "Discovery, listing what you have, how it is organized, how it works for people, how it looks, and how it behaves on every screen.",
                            "The writing, the images, moving it all across, the content types, the import, translation, and how your team publishes.",
                            "Forms, CRM, calendars, search, authentication, commerce, payments and external APIs.",
                            "Accessibility scope, security controls, browser and device coverage, and performance method.",
                            "URL preservation, redirects, metadata, canonicals, structured data, analytics and consent.",
                            "QA, cutover, rollback, monitoring, training, documentation, repository and account handoff.",
                            "Revision rounds, change control, support period, response expectations and exclusions.",
                        ]}
                    />
                    <InsightBox variant="warning" label="A page count is not a full scope">
                        Ten repeated location pages and ten unique application screens have different design,
                        development, data, security and test work. Count templates, states, roles, integrations and
                        migration obligations before comparing prices.
                    </InsightBox>

                    <BlogHeader id="cost-drivers">What moves the price up or down</BlogHeader>
                    <BlogText>
                        Two quotes for the same page count can land a long way apart because the work behind each page
                        is different. Across our own tiers those levers span $1,500 to $10,000 for the same nominal
                        page count: a bounded site with supplied content sits at the bottom, and templates, states,
                        integrations, migration and compliance scope are what carry a project to the top. These are the
                        levers that actually move a number. They move the schedule as well,
                        so it is worth reading this next to{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={sourceLinkClass}>how long a custom website takes to build</Link>.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4 font-bold">Cost driver</th>
                                    <th className="p-4 font-bold">Pushes the price up</th>
                                    <th className="p-4 font-bold">Pulls the price down</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-semibold">Templates and states</td>
                                    <td className="p-4">Many unique templates plus empty, error, loading and role-specific states</td>
                                    <td className="p-4">Repeated content flowing through one reviewed template</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Design origin</td>
                                    <td className="p-4">Original art direction, custom illustration, motion work and a new design system</td>
                                    <td className="p-4">Applying an existing brand system or an agreed component library</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Functionality</td>
                                    <td className="p-4">Booking, accounts, authentication, payments, search, quoting and multi-step flows</td>
                                    <td className="p-4">Published content with a contact form and analytics</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Content and migration</td>
                                    <td className="p-4">Large URL inventories, inconsistent legacy content, redirect mapping and CMS modeling</td>
                                    <td className="p-4">A small, clean content set you are willing to rewrite</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Integrations</td>
                                    <td className="p-4">CRM, ERP, calendars, payment, tax, shipping and external APIs, each needing failure handling and tests</td>
                                    <td className="p-4">No third-party systems in the first release</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Content readiness</td>
                                    <td className="p-4">Copy, photography, video and translation produced by the vendor</td>
                                    <td className="p-4">Final copy and assets supplied before build starts</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Compliance scope</td>
                                    <td className="p-4">A named accessibility standard, security review, data-residency or regulated-industry obligations</td>
                                    <td className="p-4">A stated baseline with no formal audit obligation</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Change control</td>
                                    <td className="p-4">Open-ended revisions and undefined acceptance</td>
                                    <td className="p-4">Defined revision rounds, written acceptance criteria and a change-order process</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Schedule</td>
                                    <td className="p-4">Compressed dates that need parallel staffing or out-of-hours work</td>
                                    <td className="p-4">A date that matches normal delivery capacity</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="cheap-quote">What a cheap quote usually leaves out</BlogHeader>
                    <BlogText>
                        A low number is often a narrow number. The work below still has to happen, so if it is not in the
                        quote it arrives later as a change order, an internal task, or a job you pay a second vendor to
                        finish. Read a lean quote for what is missing, not only for what is listed.
                    </BlogText>
                    <BlogList
                        items={[
                            "Content: most quotes assume you supply final copy, images and video. If you cannot, writing, photography, video and translation become separate line items.",
                            "Migration: URL mapping, redirects, metadata, canonicals, structured data and CMS imports are frequently priced after the build is agreed.",
                            "Integrations: a form is cheap. Connecting it to a CRM with validation, error handling, retries, notifications and reporting is not.",
                            "Accessibility and coverage: a named standard and a browser and device matrix are scope. Looking correct on the developer's laptop is not.",
                            "QA and cutover: staging, cross-device testing, launch rehearsal, rollback plan and post-launch monitoring.",
                            "Training and documentation: someone on your side has to publish and edit without calling the developer.",
                            "Support: what counts as a defect, the response expectation, the covered period, and what falls outside it.",
                            "Ownership and handover: repository, domain, hosting, CMS and analytics accounts, and what happens to each if you leave.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Ask for the exclusions, not just the inclusions">
                        A quote that lists only what is included tells you half of the story. Ask for the written
                        exclusions list and the change-order process before you sign. When both are missing, the gap gets
                        filled after signature at a price you never negotiated. The same pattern is what makes a{" "}
                        <Link href="/blog/cheap-web-developer" className={sourceLinkClass}>cheap web developer</Link>{" "}
                        expensive.
                    </InsightBox>

                    <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center">
                        <p className="mb-2 font-bold text-charcoal">Want the number for your actual scope?</p>
                        <p className="mx-auto mb-5 max-w-xl text-sm leading-relaxed text-stone-600">
                            Bring your current site URL and page list. We inventory templates, content, integrations,
                            vendor costs and cutover work on the call, then come back with a written scope and a price
                            you can compare against any other quote.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-stone-800">
                            Book a scoping call <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </div>

                    <BlogHeader>Recurring cost is more than hosting</BlogHeader>
                    <div data-speakable="true">
                    <BlogText>
                        People ask what a website costs to build and then get caught by what it costs to keep. The
                        monthly figure is rarely one line. It is hosting or the platform plan, plus every seat, app and
                        service attached to it, plus the hours someone on your side spends publishing and maintaining.
                        Panda Patches, the founder-affiliated store disclosed further down this page, runs at roughly $55 a month in tooling, and
                        that is a deliberately lean setup with no app subscriptions sitting behind it. Build the list
                        before you assume a number.
                    </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Domain and DNS. Two registrars charge different prices for the same domain because the markup is the registrar's, not the registry's. Cloudflare Registrar states it adds no markup and passes through only the registry and ICANN fee. Compare renewal prices rather than promotional first-year ones, which is where the surprise usually lives.",
                            "TLS certificate, normally included free by modern hosts through Let's Encrypt.",
                            "Business email, charged per person. Microsoft's published US list prices took effect on July 1, 2026 at $7 per user per month for Business Basic, $14 for Business Standard and $22 for Business Premium, with existing customers held at their current price until renewal. Checked August 1, 2026.",
                            "Website or commerce plan, hosting, compute, bandwidth, storage, image processing and build usage.",
                            "CMS seats, records, API usage, preview, localization and asset storage.",
                            "Apps, plugins, extensions, licenses, tax, shipping and messaging usage.",
                            "Payment processing, which is two fees rather than one. The processor takes its cut, and some platforms add a further fee on top when you do not use their own payment product. Check for both before deciding a platform is the cheaper option.",
                            "Analytics, consent management, monitoring, backups, security, incident response and support.",
                            "Internal publishing, campaign, training, vendor management and compliance time.",
                        ]}
                    />
                    <BlogText>
                        Save a dated vendor quote for the country, billing term, seats and expected usage. As one current
                        example, Vercel&apos;s public pricing page on August 1, 2026 describes Hobby as free for personal
                        projects and lists Pro at $20 per user per month, with $20 of included usage and pay-as-you-go
                        charges above that. Read the words &ldquo;per user&rdquo; closely, because that is where most
                        hosting estimates go wrong. Three people who need access is $60 a month before the site has
                        served a single page. None of which makes commercial hosting universally free, or caps a
                        production site at $20. We have written separately on{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className={sourceLinkClass}>what Next.js hosting actually costs</Link>{" "}
                        and on how{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className={sourceLinkClass}>store app subscriptions stack up on a monthly bill</Link>.
                    </BlogText>

                    <BlogHeader>DIY, managed platform and custom code</BlogHeader>
                    <BlogText>
                        A managed builder can reduce initial implementation and infrastructure work. It may be the best
                        choice when its editor, templates, commerce, integrations, limits and exit path fit. Custom code
                        can increase control and reduce some vendor constraints, but it still has infrastructure,
                        software, maintenance, security and qualified-operator costs. Neither category is automatically
                        cheaper, faster, safer or better for search. If you are weighing one specific platform, we have
                        longer breakdowns of{" "}
                        <Link href="/blog/webflow-true-cost" className={sourceLinkClass}>Webflow</Link>,{" "}
                        <Link href="/blog/squarespace-vs-custom-website" className={sourceLinkClass}>Squarespace</Link>{" "}
                        and{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className={sourceLinkClass}>WordPress against custom code over three years</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Open the vendor's official pricing page on the quote date and select the actual country and billing term.",
                            "Add required seats, usage, apps, payment fees, tax, email, analytics and operational services.",
                            "Record limits, renewal pricing, cancellation, export, account control and migration effort.",
                            "Compare against a custom quote with the same features, content, QA, support and operating period.",
                        ]}
                    />

                    <BlogHeader id="who-builds-it">Who builds it changes the price, and the bill afterwards</BlogHeader>
                    <BlogText>
                        The same scope costs different amounts depending on who does the work, and the gap is not only in
                        the invoice. Driving a builder yourself moves the cost into your own hours, which is real money
                        when those hours had another use. One person is usually the cheapest quote and carries the most
                        continuity risk: if something breaks eight months later and they are unavailable, whoever picks
                        it up has to work out how the site was built before they can safely change anything, and you pay
                        for that reading time. A team costs more at the start and holds that knowledge in more than one
                        head.
                    </BlogText>
                    <BlogText>
                        Our published tiers, $1,500 to $10,000, assume a team doing the work and carrying it afterwards.
                        A single freelancer may well quote less, and the difference is not padding on our
                        side or a bargain on theirs. It is the continuity described above, priced or unpriced. None of
                        that makes a freelancer the wrong choice, and plenty of them are excellent. It means the
                        question worth asking any vendor is what happens to the site if they stop answering, and then
                        pricing the answer instead of assuming it. We have covered the vetting side in{" "}
                        <Link href="/blog/cheap-web-developer" className={sourceLinkClass}>how to hire a cheap web developer without getting burned</Link>{" "}
                        and the individual-versus-team trade in{" "}
                        <Link href="/blog/website-developer-agency" className={sourceLinkClass}>what a web development agency actually does</Link>.
                    </BlogText>

                    <BlogHeader>Panda Patches: a first-party cost example</BlogHeader>
                    <BlogText>
                        Panda Patches is owned by Imran, PandaCodeGen&apos;s co-founder. PandaCodeGen built and
                        maintains the platform and holds no stake in the business, and the owner has approved these cost
                        figures for publication. The owner reports that the former WordPress and WooCommerce stack ran
                        at approximately $200 per month, and that the replacement Next.js, Sanity, Supabase and Square
                        tooling runs at approximately $55 per month for the referenced operating period.
                    </BlogText>
                    <BlogText>
                        Read that as one store&apos;s tooling bill rather than a benchmark. It covers the tooling and
                        nothing else, so labor, payment processing, tax and the migration itself all sit outside the
                        figure, and a store with a different feature set will land somewhere else entirely. Price your
                        own decision against dated invoices for a comparable scope. The build is written up in full in
                        the{" "}
                        <Link href="/work/panda-patches" className={sourceLinkClass}>Panda Patches case study</Link>.
                    </BlogText>

                    <BlogHeader>How to calculate three-year total cost</BlogHeader>
                    <BlogText>
                        Three-year total cost is the build plus everything that follows it: migration, vendor services,
                        maintenance and support, your own team's time, the changes you will want, a risk allowance, and
                        what it costs to leave. Use the same horizon and the same scope for every option you compare:
                    </BlogText>
                    <div className="my-8 rounded-2xl border border-stone-200 bg-stone-50 p-6 font-mono text-sm leading-7 text-charcoal">
                        Total cost = discovery and build + migration + vendor services + maintenance and support
                        + internal time + expected change work + risk allowance + exit or replacement cost
                    </div>
                    <BlogList
                        items={[
                            "Use dated quotes and expected usage ranges instead of a best-case free tier.",
                            "Separate required spend from optional marketing and feature spend.",
                            "Create base, high-usage and change scenarios rather than one false-precision total.",
                            "Do not subtract speculative ranking, conversion or revenue gains as guaranteed savings.",
                            "After launch, replace assumptions with invoices and measured operating data.",
                        ]}
                    />

                    <BlogText>
                        If your project is a replacement rather than a first build, the same arithmetic is worked through
                        in more detail in our guides to{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className={sourceLinkClass}>rebuild cost</Link>,{" "}
                        <Link href="/blog/website-redesign-cost" className={sourceLinkClass}>redesign cost</Link> and{" "}
                        <Link href="/blog/website-migration-cost-2026" className={sourceLinkClass}>migration cost</Link>.
                    </BlogText>

                    <BlogHeader id="spend-less">How to spend less without shrinking the outcome</BlogHeader>
                    <BlogText>
                        The cheapest lever is the first one: write the requirement list before you ask for prices, and send the identical document to every vendor. Quotes become comparable and the padding for unknowns disappears. After that, cut features rather than craft, know whether you bought hourly or fixed scope, reduce what you rent, and settle ownership in writing before onboarding.
                    </BlogText>
                    <div className="my-8 space-y-4">
                        {[
                            {
                                num: "1",
                                title: "Write the requirement list before you ask for prices",
                                body: "Pages, templates, features, integrations, who owns the content, and the date that matters. Send the same document to every vendor. Quotes only become comparable when the input is identical, and a defined brief removes most of the padding a vendor adds for unknowns.",
                            },
                            {
                                num: "2",
                                title: "Cut features, not craft",
                                body: "A smaller first release built properly beats a larger one built badly. Decide what has to exist on launch day and put the rest in a written phase two. Deferred scope is cheaper than scope you pay for twice because it shipped half-finished.",
                            },
                            {
                                num: "3",
                                title: "Know which billing model you are buying",
                                body: "Hourly billing puts schedule risk on you. Fixed scope puts it on the vendor and makes the exclusions list the document that matters. Neither is dishonest, but you should know which one you signed and what triggers a change order.",
                            },
                            {
                                num: "4",
                                title: "Reduce what you rent",
                                body: "Every plugin, app, seat and add-on is a recurring bill, an update obligation and a dependency that can break. Ask what can be built into the site instead of subscribed to, then compare both options over the same three-year horizon rather than at month one.",
                            },
                            {
                                num: "5",
                                title: "Settle ownership in writing before onboarding",
                                body: "Ask what transfers to you on final payment, what stays the vendor's reusable tooling, which third-party licenses apply, and how the repository, domain, hosting, CMS and analytics accounts are handed over. Sorting this before work starts costs nothing. Sorting it during a dispute is expensive.",
                            },
                        ].map((step) => (
                            <div key={step.num} className="flex gap-4 rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cognac text-sm font-bold text-white">
                                    {step.num}
                                </span>
                                <div>
                                    <p className="mb-1 font-bold text-charcoal">{step.title}</p>
                                    <p className="text-sm leading-relaxed text-stone-700">{step.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>Refund, ownership and performance terms affect value</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s 100 percent contracted-scope protection applies when the accepted project
                        terms include it, and it covers a failure to deliver the promised deliverables under that scope.
                        It is not a change-of-mind refund. Approved refunds are normally initiated in 2 to 3 business
                        days; settlement after that is controlled by the receiving bank or payment provider and can take
                        up to 10 to 12 business days.
                    </BlogText>
                    <BlogText>
                        Client content, data and brand assets remain the client&apos;s. Rights in fully paid custom
                        deliverables, reusable PandaCodeGen tools or pre-existing code, and third-party components follow
                        the accepted terms and original licenses. Domain, hosting, repository and business accounts can
                        be client-controlled when agreed.
                    </BlogText>
                    <BlogText>
                        A 90+ Lighthouse handover target applies only when the accepted terms identify representative
                        pages, mobile and desktop profiles, the exact environment, three recorded passing runs per page
                        and profile, exclusions and remedy. It is a lab acceptance condition, not a ranking, traffic,
                        conversion, citation or revenue promise. The method behind it is described in{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className={sourceLinkClass}>how we hit high PageSpeed scores</Link>.
                    </BlogText>

                    <BlogHeader>Current vendor pricing sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {vendorSources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>{source.name}</a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get a price for your actual scope</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            New build or replacement, the process is the same. We inventory the pages, content,
                            integrations, vendor costs, acceptance, cutover and handoff, then come back with a written
                            scope and a number you can hold any other quote against.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Get Your Written Scope and Price <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
