import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CircleDollarSign, FileSearch, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "shopify-app-costs-real-monthly-bill";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Shopify App Costs in 2026: Audit the Real Bill";
const description =
    "Reconcile Shopify app invoices, usage charges, external subscriptions, dependencies and performance before you keep, replace or remove an app.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Shopify app costs 2026",
        "Shopify app bill audit",
        "Shopify app subscriptions",
        "reduce Shopify app costs",
        "Shopify app performance",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-19",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-app-costs-real-monthly-bill")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Shopify: uninstalling apps",
        url: "https://help.shopify.com/en/manual/apps/uninstalling-apps",
    },
    {
        name: "Shopify: app charges on bills",
        url: "https://help.shopify.com/en/manual/your-account/manage-billing/your-invoice/apps",
    },
    {
        name: "Shopify: overview of web performance",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/overview",
    },
    {
        name: "Shopify: web performance reports",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-19",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about",
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": canonicalUrl },
            articleSection: "Shopify operations",
            inLanguage: "en-US",
            citation: sources.map((source) => ({ "@type": "WebPage", ...source })),
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function ShopifyAppCostsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Shopify app costs", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify operations</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Shopify App Costs in 2026 <span className="italic text-cognac">Audit the Real Bill</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            There is no defensible universal monthly app bill. Your real cost is the sum of Shopify-billed
                            subscriptions, usage charges, externally billed services, internal administration and the
                            operational dependencies each app creates.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Shopify documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 19, 2026" readTime="11 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The reliable answer</h2>
                        <BlogList
                            items={[
                                "Export actual Shopify bills and vendor invoices before comparing public list prices.",
                                "Normalize recurring, usage, transaction, one-time, tax and foreign-exchange charges separately.",
                                "Map the workflows, data and theme code attached to each app before uninstalling it.",
                                "Measure app value and performance impact by route, device and reporting period.",
                                "Replace or rebuild only when the accepted requirements and total cost support the decision.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: CircleDollarSign, title: "Money", body: "Paid amount, billing unit, usage, tax, renewal and external charges." },
                            { icon: Gauge, title: "Experience", body: "Field Core Web Vitals, script work, route coverage and feature use." },
                            { icon: ShieldCheck, title: "Dependency", body: "Data, workflows, permissions, exports, recovery and ownership." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Build the invoice register</BlogHeader>
                    <BlogText>
                        Start with twelve months of Shopify bills, card statements and vendor invoices. Record the app,
                        account owner, billing channel, currency, tax, interval, base fee, metered unit, overage and
                        renewal date. A public App Store price is not evidence of what your store paid. The same register
                        method works across the rest of the stack, and{" "}
                        <Link href="/blog/saas-software-pricing-audit-2026" className={sourceLinkClass}>our software pricing audit walkthrough</Link>{" "}
                        sets out the columns in more detail.
                    </BlogText>
                    <BlogList
                        items={[
                            "Separate subscription, usage, transaction and one-time charges.",
                            "Match each charge to the installed app, sales channel or external vendor account.",
                            "Record promotional, legacy, annual and negotiated terms without converting them into a false list-price comparison.",
                            "Reconcile refunds, credits and pending charges to the period in which they apply.",
                            "Assign a business owner and a technical owner to every active service.",
                        ]}
                    />

                    <BlogHeader>2. Find charges outside Shopify</BlogHeader>
                    <BlogText>
                        Shopify states that some third-party apps bill outside Shopify and those charges do not appear on
                        the Shopify bill. Check card and bank records, team email, password management and procurement
                        systems. Confirm the exact workspace and subscription before anyone cancels it. Once you have the
                        full list,{" "}
                        <Link href="/blog/how-to-cut-saas-bill-2026" className={sourceLinkClass}>our method for cutting a software bill</Link>{" "}
                        covers what to do with it.
                    </BlogText>
                    <InsightBox variant="info" label="What uninstalling does and does not cancel">
                        Uninstalling a Shopify-billed paid app cancels future recurring charges, although a current-cycle
                        charge can still appear on your next bill. Uninstalling does not cancel an externally billed
                        subscription. Cancel those in the vendor&apos;s own account, then confirm the cancellation in
                        writing before you stop watching the card statement.
                    </InsightBox>

                    <BlogHeader>Where the money usually sits</BlogHeader>
                    <BlogText>
                        Most stores do not have one expensive app. They have a stack that grew one decision at a time, and
                        the categories below are where the recurring spend concentrates. We are naming the common apps
                        rather than their prices on purpose: app vendors change pricing, tiers and usage bands frequently,
                        so any figure published here would be stale before you read it. Check the current price on each
                        vendor&apos;s own pricing page, then put that number in your register. We track how often those
                        vendor prices move in our{" "}
                        <Link href="/blog/saas-price-increases-2026-tracker" className={sourceLinkClass}>running log of software price changes</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Email, SMS and marketing automation: Klaviyo, Postscript, Attentive. Usually priced by contact or message volume, so the bill grows with your list rather than staying flat.",
                            "Reviews and user-generated content: Judge.me, Okendo, Loox, Yotpo. Often cheap at entry tier and materially more expensive once you want moderation, syndication or rich snippets.",
                            "Subscriptions and recurring orders: Recharge, Bold. Frequently priced as a platform fee plus a percentage of subscription revenue, which is the line merchants most often forget to model.",
                            "Support and helpdesk: Gorgias, Tidio. Usually per seat or per ticket volume.",
                            "Loyalty and referrals: Smile.io, Yotpo. Tiered by order volume or active members.",
                            "Page building and theme extensions: Shogun, PageFly, Vitals. These are the ones most likely to also carry a performance cost, because they inject script and markup into the storefront.",
                        ]}
                    />
                    <InsightBox variant="info" label="Two costs, not one">
                        Every app in that last category has a monthly price and a page-weight price. The invoice is easy to
                        find; the second cost only shows up when you measure the storefront before and after. Section 4
                        covers how to test that properly rather than guessing, and{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className={sourceLinkClass}>our Shopify store speed guide</Link>{" "}
                        works through the fixes once you know which app is responsible.
                    </InsightBox>

                    <BlogHeader>3. Measure value before comparing prices</BlogHeader>
                    <BlogText>
                        A lower-priced product is not automatically equivalent. Document the requirement each app
                        satisfies, the people and routes that use it, the data it owns, its integrations and the failure
                        mode if it disappears. Then compare candidates against the same acceptance criteria.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Area</th><th className="p-4">Evidence</th><th className="p-4">Decision question</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Commercial</td><td className="p-4">Invoice, contract and measured usage</td><td className="p-4">Is the tier correctly sized?</td></tr>
                                <tr><td className="p-4 font-bold">Functional</td><td className="p-4">Requirements and workflow tests</td><td className="p-4">Can another tool meet the same accepted scope?</td></tr>
                                <tr><td className="p-4 font-bold">Technical</td><td className="p-4">Scripts, APIs, theme changes and incidents</td><td className="p-4">What must be migrated or removed?</td></tr>
                                <tr><td className="p-4 font-bold">Data</td><td className="p-4">Fields, exports, retention and permissions</td><td className="p-4">Can the store leave without losing required records?</td></tr>
                                <tr><td className="p-4 font-bold">Outcome</td><td className="p-4">First-party funnel and operating data</td><td className="p-4">Does observed value justify total cost?</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>4. Test performance as a change, not a slogan</BlogHeader>
                    <BlogText>
                        Shopify identifies apps, third-party libraries, analytics, theme code and media as factors that
                        can affect web performance. Use Shopify&apos;s Web Performance reports for real-user LCP, INP and
                        CLS by time, URL and page type. Pair that field view with repeatable lab tests and a script
                        inventory. If those metric names are unfamiliar,{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>{" "}
                        covers what each one measures, and{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className={sourceLinkClass}>our analysis of a slow Dawn theme</Link>{" "}
                        shows how theme code and apps compound.
                    </BlogText>
                    <BlogList
                        items={[
                            "Record the affected route, device mix, consent state, geography and test date.",
                            "Compare a controlled preview or release window rather than unrelated before-and-after screenshots.",
                            "Check whether the app loads globally when the feature appears on only a few routes.",
                            "Verify that deferred loading preserves accessibility, analytics and purchase behavior.",
                            "Do not convert a speed association into a guaranteed revenue or conversion claim.",
                        ]}
                    />

                    <BlogHeader>5. Remove an app safely</BlogHeader>
                    <BlogList
                        items={[
                            "Read the current app listing and vendor instructions for extra uninstall steps.",
                            "Export required data and document recovery or retention limitations.",
                            "Identify theme code, app embeds, pixels, webhooks, flows and inventory locations.",
                            "Cancel external billing directly with the vendor where applicable.",
                            "Uninstall in Shopify, retain confirmation and monitor the next billing cycle.",
                            "Regression-test storefront, checkout, email, analytics, fulfillment and support workflows.",
                        ]}
                    />

                    <BlogHeader>6. Decide whether custom code belongs in the comparison</BlogHeader>
                    <BlogText>
                        Custom code can remove a vendor dependency when the requirement is stable and the business is
                        prepared to own it. It does not make the function free. Include design, engineering, migration,
                        hosting, monitoring, security, maintenance, provider changes, support and recovery in the total.
                        Our{" "}
                        <Link href="/services/ecommerce" className={sourceLinkClass}>ecommerce development service</Link>{" "}
                        sets out how we scope that work,{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={sourceLinkClass}>Shopify versus a custom build</Link>{" "}
                        compares the two operating models, and{" "}
                        <Link href="/blog/what-is-headless-commerce" className={sourceLinkClass}>what headless commerce actually means</Link>{" "}
                        covers the middle option of keeping Shopify as a backend.
                    </BlogText>
                    <InsightBox variant="info" label="First-party context">
                        Panda Patches is owned by a PandaCodeGen co-founder and informs our operational experience. We are not
                        publishing unreconciled revenue, app-cost or performance figures as proof that another merchant
                        will achieve the same result. A client comparison must use that client&apos;s invoices and data.
                        The store itself is written up in our{" "}
                        <Link href="/work/panda-patches" className={sourceLinkClass}>Panda Patches case study</Link>, and a
                        client store on a similar stack is covered in{" "}
                        <Link href="/work/mycustompatches" className={sourceLinkClass}>the MyCustomPatches build</Link>.
                    </InsightBox>

                    <BlogHeader>7. Produce an auditable decision</BlogHeader>
                    <BlogList
                        items={[
                            "Retain when the capability is used, required and acceptably priced.",
                            "Right-size when measured use fits a lower tier without unacceptable peak or entitlement risk.",
                            "Consolidate when one tested product covers the accepted workflows and migration cost is justified.",
                            "Replace when a tested alternative offers better total value, not merely a lower sticker price.",
                            "Rebuild when ownership and flexibility justify the full lifecycle cost.",
                            "Investigate when the owner, contract, usage, data or dependency is unresolved.",
                        ]}
                    />
                    <BlogText>
                        If the decision lands on rebuild, our{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link> sets out the planning tiers,
                        and{" "}
                        <Link href="/blog/shopify-headless" className={sourceLinkClass}>going headless on Shopify</Link>{" "}
                        covers the architecture most stores land on when they keep checkout where it is.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <FileSearch className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map the current stack, required workflows, migration risks and test conditions before
                            recommending theme optimization, app consolidation or a headless build.
                        </p>
                        <QuoteModalButton cta="shopify_app_costs_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <BlogText>
                        One related case worth checking while you audit: if your operation depends on Stocky for
                        inventory, that app is being retired, and the{" "}
                        <Link href="/blog/shopify-stocky-sunset-date-2026" className="text-cognac hover:underline font-medium">Stocky sunset guide</Link>{" "}
                        covers what to export before access ends.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
