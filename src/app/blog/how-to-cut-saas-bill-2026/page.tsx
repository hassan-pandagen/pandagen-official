import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, FileSpreadsheet, Scale, ShieldCheck } from "lucide-react";
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

const postId = "how-to-cut-saas-bill-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How to Cut a SaaS Bill in 2026: An Evidence-First Audit";
const description =
    "Inventory recurring software, verify usage and obligations, remove or consolidate safely, and compare replacement total cost without promising a universal savings percentage.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "how to cut SaaS bill",
        "SaaS spend audit",
        "software subscription audit",
        "reduce software costs",
        "build versus buy SaaS",
        "cancel unused software subscriptions",
        "Shopify app billing cancel",
        "software license audit checklist",
        "downgrade SaaS plan",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-31",
        modifiedTime: "2026-08-01",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-to-cut-saas-bill-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Shopify: uninstalling apps and billing effects", url: "https://help.shopify.com/en/manual/apps/uninstalling-apps" },
    { name: "Shopify: app charges on Shopify bills", url: "https://help.shopify.com/en/manual/your-account/manage-billing/your-invoice/apps" },
    { name: "Microsoft: buy or remove business licenses", url: "https://learn.microsoft.com/en-us/microsoft-365/commerce/licenses/buy-licenses" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/how-to-cut-saas-bill-2026"),
            description,
            datePublished: "2026-05-31",
            dateModified: "2026-08-01",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["SaaS cost management", "Software procurement", "Vendor contracts", "Subscription auditing"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Software cost",
            inLanguage: "en-US",
            wordCount: 1100,
            timeRequired: "PT5M",
            about: [
                { "@type": "Thing", name: "Software as a service", sameAs: ["https://en.wikipedia.org/wiki/Software_as_a_service"] },
                { "@type": "Thing", name: "Cost reduction", sameAs: ["https://en.wikipedia.org/wiki/Cost_reduction"] },
                { "@type": "Thing", name: "Shopify", sameAs: ["https://www.shopify.com/"] },
                { "@type": "Thing", name: "Software license audit" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "SaaS bill audit", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-31",
            dateModified: "2026-08-01",
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

export default function SaasBillAuditGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "SaaS bill audit", href: `/blog/${postId}` }]} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Software cost</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How to Cut a SaaS Bill in 2026 <span className="italic text-cognac">Without Inventing the Savings</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A SaaS audit usually finds real waste, but be skeptical of anyone promising a headline
                            percentage before they have seen your stack. What you can actually cut depends on your
                            contracts, renewal dates, seat counts and which tools hold data you cannot easily move.
                            Inventory the charges and obligations, verify actual use, model each decision, then measure
                            what the change really returned.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Billing guidance reviewed August 1, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 31, 2026" readTime="5 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The five-step audit</h2>
                        <BlogList
                            items={[
                                "List every charge, every contract, who owns it, who uses it, what it connects to, and when it renews.",
                                "Verify use and business value without treating login recency as the whole answer.",
                                "Only cancel, reassign or downgrade after you have checked the data, the workflow it breaks, legal, security, and how you would recover.",
                                "Compare consolidating against replacing, feature by feature, using quotes you have in hand today.",
                                "Measure realized savings after switching cost, internal time, new operations and residual vendor spend.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: FileSpreadsheet, title: "Ledger", body: "What it costs, who owns it, and when it renews." },
                            { icon: ShieldCheck, title: "Offboard", body: "How you get your data out, and what breaks when you do." },
                            { icon: Scale, title: "Decision", body: "Keep it, shrink it, replace it, or switch it off." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>Step 1: build the recurring-charge ledger</BlogHeader>
                    <BlogText>
                        You cannot cancel what you have not found. Five field groups make the ledger usable: who owns the account and the bill, the plan and its renewal and notice terms, every component of the charge, who and what depends on it, and the export and deletion obligations. Reconcile the result against bank and card statements, accounts payable, app stores and departmental purchases, because one vendor can appear under several merchant names.
                    </BlogText>
                    <BlogList
                        items={[
                            "The vendor, the product, who owns the account, who owns the bill, which card pays it, and where the invoices land.",
                            "Plan, billing term, renewal date, notice period, auto-renewal, minimum seats and commitment.",
                            "Base fee, seats, usage, add-ons, tax, currency, discounts and expected price changes.",
                            "Users, service accounts, API keys, integrations, data classes and operational owner.",
                            "Export, retention, deletion, legal hold, backup, support and exit requirements.",
                        ]}
                    />
                    <BlogText>
                        Reconcile the ledger to bank and card statements, accounts payable, app stores, cloud
                        marketplaces and departmental purchases. One vendor can appear under several merchant names,
                        accounts or currencies. Our{" "}
                        <Link href="/blog/saas-software-pricing-audit-2026" className="text-cognac hover:underline font-medium">software pricing audit walkthrough</Link>{" "}
                        sets out the same register in more detail, and our{" "}
                        <Link href="/blog/saas-price-increases-2026-tracker" className="text-cognac hover:underline font-medium">2026 vendor price-change tracker</Link>{" "}
                        lists the announcements worth checking a renewal date against.
                    </BlogText>

                    <BlogHeader>Step 2: verify use and value</BlogHeader>
                    <BlogText>
                        A dormant login can indicate waste, but some accounts exist for emergency access, approvals,
                        service operation, compliance or infrequent critical work. Define the measurement window for
                        each product. Combine admin usage, sign-in, API, workflow, data, support and owner interviews.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which business process depends on it and what is the failure impact?",
                            "Which features, integrations, data and permissions were used in the review window?",
                            "Could a lower tier or different seat type satisfy the same accepted requirement?",
                            "Is the charge contractually reducible now, at renewal or only after notice?",
                        ]}
                    />

                    <BlogText>
                        One pattern is worth looking for specifically, because it is close to universal and it is easy
                        to miss when you are only checking whether a tool is used. People buy the plan that matches
                        where they expect the business to be in a year. Then the year happens differently, the plan
                        never gets revisited, and the gap between what you provisioned and what you use quietly becomes
                        a permanent line on the invoice. The question is not only whether a tool is used. It is whether
                        it is being used at the size you are paying for.
                    </BlogText>
                    <BlogText>
                        The same applies to a tier bought for one specific feature. If that feature turned out not to
                        matter, the cost of dropping down is often reversible, but confirm it in your own contract before you downgrade rather than assuming you can move back up
                        if the need returns, and you keep the difference in the meantime. That reversibility is what
                        makes right-sizing a low-risk move rather than a decision worth deferring to the next renewal.
                    </BlogText>

                    <BlogHeader>Step 3: right-size without breaking access</BlogHeader>
                    <BlogText>
                        Remove unneeded users, seats and add-ons through the vendor&apos;s current billing process. For
                        example, Microsoft documents that reducing some business subscriptions can require unassigning
                        licenses before removing them from the subscription. The exact process depends on billing
                        account and contract.
                    </BlogText>
                    <BlogList
                        items={[
                            "Export or transfer owned data and workflows before disabling access.",
                            "Replace service-account credentials and integration owners.",
                            "Preserve audit, tax, support and legal records for the required period.",
                            "Revoke tokens, rotate secrets and remove SSO, SCIM, webhook and API dependencies safely.",
                            "Confirm the invoice and future committed quantity after the change.",
                        ]}
                    />

                    <BlogHeader>Step 4: compare consolidation or replacement</BlogHeader>
                    <BlogText>
                        Sort the ledger by job to be done before comparing anything. Overlapping tools usually arrive
                        because separate teams bought for the same category at different times, so the duplication only
                        becomes visible once the register is grouped by purpose rather than by vendor. Where two
                        products cover one accepted requirement, decide which one stays before you price a third.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Requirement</th><th className="p-4">Current</th><th className="p-4">Candidate</th><th className="p-4">Migration evidence</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4">Must-have workflows</td><td className="p-4">Verified use</td><td className="p-4">Supported and tested</td><td className="p-4">End-to-end acceptance</td></tr>
                                <tr><td className="p-4">Data and history</td><td className="p-4">Inventory and export</td><td className="p-4">Import and retention</td><td className="p-4">Counts and samples reconciled</td></tr>
                                <tr><td className="p-4">Security and access</td><td className="p-4">Current controls</td><td className="p-4">Required controls</td><td className="p-4">Review and recovery test</td></tr>
                                <tr><td className="p-4">Total cost</td><td className="p-4">Dated invoices</td><td className="p-4">Dated quote and usage</td><td className="p-4">Switch and operating cost</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        “Cheaper equivalent” is not a stable category. Plans, limits, regional availability, support,
                        data terms and prices change. Save the candidate quote and requirements matrix on the decision
                        date. Our{" "}
                        <Link href="/blog/build-vs-buy-software-2026-cost-comparison" className="text-cognac hover:underline font-medium">build versus buy comparison</Link>{" "}
                        works through the same matrix, and our{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost assessment</Link>{" "}
                        covers the switching work that a quote alone leaves out.
                    </BlogText>

                    <BlogHeader>Shopify app billing needs a two-path check</BlogHeader>
                    <BlogText>
                        Shopify&apos;s help page, checked August 1, 2026, says uninstalling a paid app stops future recurring charges
                        billed through Shopify, although a charge already generated for the current cycle may remain.
                        It separately warns that uninstalling does not cancel subscriptions charged externally by the
                        developer. Review the app&apos;s billing location, pending charges, data, theme changes and
                        workflows before uninstalling. Our walkthrough of{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">how Shopify app charges appear on a monthly bill</Link>{" "}
                        shows where to look for each path, and our{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">ecommerce engineering service</Link>{" "}
                        page describes the storefront work we take on when apps are replaced with owned code.
                    </BlogText>
                    <InsightBox variant="info" label="Do not apply one blanket uninstall rule">
                        Uninstalling does not end every charge at the same point. A Shopify-billed recurring charge, a
                        charge already generated for the current cycle and a subscription billed externally by the
                        developer each stop on different terms. Confirm where the app is billed before you uninstall it,
                        then keep the confirmation and the effective date. Where the subscription is billed by the
                        developer rather than through Shopify, cancel inside that app&apos;s own billing area first and
                        uninstall afterwards, so the cancellation is recorded while you still have access to it.
                    </InsightBox>

                    <BlogHeader>Step 5: calculate realized savings</BlogHeader>
                    <BlogText>
                        A cancellation is not a saving until the invoice changes. The formula subtracts replacement cost, migration and build, internal time, new maintenance, residual commitments and risk events from the avoided charge. Model base, high-usage and delayed cases rather than a single payback date, and replace the forecast with real invoices at 30, 90 and 365 days.
                    </BlogText>
                    <div className="my-8 rounded-2xl border border-stone-200 bg-stone-50 p-6 font-mono text-sm leading-7 text-charcoal">
                        Realized savings = avoided charges - replacement vendor cost - migration and build cost
                        - internal time - new maintenance and support - residual commitments - risk events
                    </div>
                    <BlogList
                        items={[
                            "Use base, high-usage and delay scenarios instead of one payback date.",
                            "Do not count a planned cancellation until the committed quantity and future invoice change.",
                            "Track lost capability, incidents and manual work after the decision.",
                            "Replace forecast values with invoices and measured time at 30, 90 and 365 days.",
                        ]}
                    />

                    <BlogHeader>When custom software belongs in the comparison</BlogHeader>
                    <BlogText>
                        Consider a custom build when a stable, differentiated workflow has clear requirements and a
                        vendor product imposes recurring cost or constraints that a maintained internal system can
                        reasonably replace. Include discovery, design, development, data migration, security,
                        infrastructure, monitoring, support, change work, qualified operators and exit.
                    </BlogText>
                    <BlogText>
                        PandaCodeGen&apos;s public $1,500, $3,500 and $5,000 to $10,000 website tiers are planning
                        anchors, not default pricing for replacing a CRM or business application. Custom software is
                        scoped separately. No savings percentage or payback period is promised.
                    </BlogText>
                    <BlogText>
                        If you want the inputs behind a scope rather than a headline number, start with our{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline font-medium">website cost guide</Link>{" "}
                        and our{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">rebuild cost assessment</Link>. A
                        custom system carries its own recurring lines, which we itemize in{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className="text-cognac hover:underline font-medium">what a Next.js hosting bill actually contains</Link>.
                        For choosing who does the work, read our notes on{" "}
                        <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline font-medium">what a low quoted rate leaves out</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-developer-agency" className="text-cognac hover:underline font-medium">how to assess a development agency</Link>.
                    </BlogText>
                    <BlogText>
                        Our{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering service</Link>{" "}
                        page sets out how we scope replacements, our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">engagement tiers</Link> show how
                        that is packaged, and our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">delivered project write-ups</Link>{" "}
                        show the results.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>{source.name}</a></li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Scope a build-versus-buy review</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will map the current workflow, required features, data, vendor terms, security, migration
                            and operating cost before recommending keep, consolidate or build.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
