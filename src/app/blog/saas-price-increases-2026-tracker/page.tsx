import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, BellRing, CalendarClock, CheckCircle2, ReceiptText } from "lucide-react";
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
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "saas-price-increases-2026-tracker";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "SaaS Price Changes in 2026: A Verified Watchlist";
const description =
    "A primary-source watchlist for Microsoft 365, Webflow and Klaviyo billing changes, with effective-date, renewal, unit and invoice checks for every SaaS contract.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "SaaS price increases 2026",
        "software price changes 2026",
        "Microsoft 365 price increase 2026",
        "Webflow pricing 2026",
        "Klaviyo active profiles billing",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-31",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/saas-price-increases-2026-tracker")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Microsoft 365 pricing and packaging updates",
        url: "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates",
    },
    {
        name: "Webflow May 2026 plan update",
        url: "https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026",
    },
    {
        name: "Klaviyo February 18 billing-change FAQ",
        url: "https://help.klaviyo.com/hc/en-us/articles/33136281415451",
    },
    { name: "Klaviyo current pricing", url: "https://www.klaviyo.com/pricing" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-05-31",
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
            articleSection: "Software procurement",
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

export default function SaasPriceIncreases2026TrackerPage() {
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
                            { label: "2026 SaaS price changes", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Software procurement</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            SaaS Price Changes in 2026 <span className="italic text-cognac">Verified Watchlist</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A pricing tracker is only useful when every row has a primary source, effective date,
                            renewal rule, region and billed unit. This watchlist carries three changes that meet that
                            standard, and says plainly what each one does and does not tell you about your own invoice.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Checked July 24, 2026. Vendor dashboards, contracts and invoices remain the source of truth
                            for a specific account.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 31, 2026" readTime="9 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The verified watchlist</h2>
                        <BlogList
                            items={[
                                "Microsoft published commercial Microsoft 365 changes effective July 1, 2026, with renewal and market caveats.",
                                "Webflow began a phased Site-plan restructure on May 13, 2026, with account-specific transition dates.",
                                "Klaviyo's active-profile compliance change began February 18, 2025 and can still affect 2026 billing.",
                                "None of these rows establishes the percentage change on your invoice without your SKU, region, term and usage.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: CalendarClock, title: "Effective date", body: "Announcement, new purchase, renewal and migration dates can differ." },
                            { icon: ReceiptText, title: "Billing unit", body: "Seat, profile, contact, bandwidth, request, message or other measured unit." },
                            { icon: BellRing, title: "Account notice", body: "Dashboard, invoice, message center, renewal quote and contract amendments." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>Microsoft 365: July 1, 2026 commercial changes</BlogHeader>
                    <BlogText>
                        Microsoft&apos;s licensing page lists U.S. commercial price changes effective July 1, 2026 for
                        selected Enterprise, Business, Frontline and standalone products. It lists Business Basic with
                        Teams moving from $6 to $7 and Business Standard with Teams from $12.50 to $14, while Business
                        Premium remains listed at $22. Existing customers remain on their current price until the
                        applicable renewal, and country, currency, channel and product configuration can change the
                        result.
                    </BlogText>
                    <BlogText>
                        Do not apply one percentage to every Microsoft invoice. Export assigned licenses, identify the
                        exact SKU and Teams configuration, remove or reassign unused seats through the supported admin
                        process, and compare the renewal quote with the official table and contract. The full method for
                        that reconciliation is in our{" "}
                        <Link href="/blog/saas-software-pricing-audit-2026" className="text-cognac hover:underline font-medium">software pricing audit walkthrough</Link>.
                    </BlogText>

                    <BlogHeader>Webflow: phased plan restructuring</BlogHeader>
                    <BlogText>
                        Webflow&apos;s current help article says new Site-plan purchases changed May 13, 2026. It
                        combined CMS and Business into Premium, listed Premium at $25 per month billed yearly or $39
                        monthly, and included 20,000 CMS items. Existing-site timing differs: June 29 for some accounts
                        and November 16 for Freelancer, Agency or legacy-pricing accounts, then at renewal or a billable
                        change.
                    </BlogText>
                    <BlogText>
                        The impact is not uniformly an increase. Webflow&apos;s own scenarios show cases where a Business
                        customer pays less, the same or more after bandwidth add-ons. Record the current plan, renewal,
                        bandwidth, workspace, add-ons and billable changes before modelling an alternative. We itemise
                        those lines in our{" "}
                        <Link href="/blog/webflow-true-cost" className="text-cognac hover:underline font-medium">Webflow cost breakdown</Link>. If the
                        review turns into a departure, our notes on{" "}
                        <Link href="/blog/leaving-webflow-2026" className="text-cognac hover:underline font-medium">leaving Webflow</Link>,{" "}
                        <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline font-medium">what a Webflow migration involves</Link>{" "}
                        and{" "}
                        <Link href="/blog/webflow-vs-custom-website" className="text-cognac hover:underline font-medium">Webflow compared with a custom build</Link>{" "}
                        cover the work that follows.
                    </BlogText>

                    <BlogHeader>Klaviyo: a 2025 billing-unit change still relevant in 2026</BlogHeader>
                    <BlogText>
                        Klaviyo&apos;s help center says that from February 18, 2025 credit-card customers had to use an
                        email plan that matched or exceeded active-profile count. It also introduced optional flexible
                        sending and auto-downgrade behavior. This is not a 2026 price increase, so it is labelled here
                        as an earlier billing-policy change that can affect a 2026 invoice.
                    </BlogText>
                    <BlogText>
                        We do not publish a typical percentage for what this change costs, because the effect on any
                        account depends on its own profile counts, plan and sending behaviour. Compare active profiles,
                        suppressions, sends, SMS, credits, selected preferences and the current invoice for the
                        specific account. Storefront owners tracking this alongside app subscriptions can use our
                        walkthrough of{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">how Shopify app charges land on a monthly bill</Link>.
                    </BlogText>

                    <InsightBox variant="info" label="Why this tracker has no headline percentage">
                        We do not publish an industry-wide software inflation rate, a per-employee software cost or a
                        blanket saving from replacing licensed software with a custom system. Each of those moves with
                        company size, region, contract term, usage and renewal timing, so a single figure quoted without
                        a stated sample and method is not something you can budget against. Licensed software and custom
                        systems both carry ongoing operating costs, so compare them on your own invoices and your own
                        running costs across a full renewal cycle.
                    </InsightBox>

                    <BlogHeader>How to maintain a defensible internal tracker</BlogHeader>
                    <BlogList
                        items={[
                            "Vendor, product, exact SKU, region, currency, billing channel and contract owner.",
                            "Current unit price, billed quantity, discounts, credits, taxes and total invoice.",
                            "Announcement, effective, renewal and notice dates with the primary-source URL.",
                            "Definition of the billed unit and any threshold, overage or auto-upgrade behavior.",
                            "Termination, downgrade, export, deletion and renewal-notice requirements.",
                            "Evidence captured from the dashboard, renewal quote and paid invoice.",
                        ]}
                    />
                    <BlogText>
                        Once the tracker holds those fields, it feeds directly into the review steps in our{" "}
                        <Link href="/blog/how-to-cut-saas-bill-2026" className="text-cognac hover:underline font-medium">guide to reducing a software bill</Link>.
                    </BlogText>

                    <BlogHeader>Match the response to the type of change</BlogHeader>
                    <BlogText>
                        Not every billing change calls for the same move. Four patterns come up often enough to decide
                        in advance how each one will be handled.
                    </BlogText>
                    <BlogList
                        items={[
                            "A published list-price rise: confirm assigned seats and actual use first, then remove or right-size before accepting the new rate at renewal.",
                            "A redefined billing unit: read the new definition against your own counts. A tier price can stay still while the invoice moves, so check what is being counted, not only what is being charged per unit.",
                            "A forced plan restructure or migration: treat it as a scheduled review point. Configuration work you were deferring is happening anyway, so this is the moment to compare staying, right-sizing and moving on the same set of numbers.",
                            "A single workflow carrying a large share of the bill: scope it properly through a build-versus-buy comparison rather than reacting to the renewal notice.",
                        ]}
                    />

                    <BlogHeader>Respond with usage evidence, not a migration reflex</BlogHeader>
                    <BlogList
                        items={[
                            "Remove duplicate, inactive or incorrectly assigned seats using the vendor's supported process.",
                            "Right-size the plan only after confirming the features, permissions and data needed.",
                            "Check negotiated discounts, committed usage, renewal notice and termination obligations.",
                            "Compare alternatives on migration, integration, security, support, training and exit costs.",
                            "Consider custom software only when requirements and total cost support it; custom code still needs hosting, maintenance and ownership.",
                        ]}
                    />
                    <BlogText>
                        Work the last point through properly rather than by instinct. Our{" "}
                        <Link href="/blog/build-vs-buy-software-2026-cost-comparison" className="text-cognac hover:underline font-medium">build versus buy comparison</Link>{" "}
                        sets out the inputs, our{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost assessment</Link>{" "}
                        covers what moving off a platform involves, and our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">delivered project write-ups</Link>{" "}
                        show what the finished work looks like. Where a replacement is worth scoping, our{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering service</Link>{" "}
                        and <Link href="/pricing" className="text-cognac hover:underline font-medium">engagement tiers</Link> describe how we work.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Bring the current invoices, renewal dates, usage exports and workflow requirements. We will
                            separate seats to remove, plans to right-size, tools to retain and workflows worth scoping
                            as a replacement.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-5 w-5" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
