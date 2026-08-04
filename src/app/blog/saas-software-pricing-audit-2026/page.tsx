import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, FileSearch, Gauge, ShieldCheck } from "lucide-react";
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

const postId = "saas-software-pricing-audit-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "2026 SaaS Pricing Audit: An Evidence-First Method";
const description =
    "Audit software cost with invoices, contracts, usage, billing units, renewal dates, security, integrations and exit requirements before deciding what to retain, right-size or replace.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "SaaS pricing audit 2026",
        "software cost audit",
        "SaaS stack cost",
        "reduce software subscriptions",
        "build vs buy software",
        "why is my software bill going up",
        "software subscription audit checklist",
        "SaaS renewal review",
        "software spend register",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-31",
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/saas-software-pricing-audit-2026")],
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
        name: "Klaviyo billing-change FAQ",
        url: "https://help.klaviyo.com/hc/en-us/articles/33136281415451",
    },
    {
        name: "Shopify: uninstalling apps and app charges",
        url: "https://help.shopify.com/en/manual/apps/uninstalling-apps",
    },
    { name: "Vercel pricing", url: "https://vercel.com/pricing" },
    { name: "Sanity pricing", url: "https://www.sanity.io/pricing" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/saas-software-pricing-audit-2026"),
            description,
            datePublished: "2026-05-31",
            dateModified: "2026-08-03",
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
            articleSection: "Software procurement",
            inLanguage: "en-US",
            wordCount: 1550,
            timeRequired: "PT7M",
            about: [
                { "@type": "Thing", name: "Software as a service", sameAs: ["https://en.wikipedia.org/wiki/Software_as_a_service"] },
                { "@type": "Thing", name: "Total cost of ownership", sameAs: ["https://en.wikipedia.org/wiki/Total_cost_of_ownership"] },
                { "@type": "Thing", name: "Microsoft 365", sameAs: ["https://www.microsoft.com/microsoft-365"] },
                { "@type": "Thing", name: "Software audit" },
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
                { "@type": "ListItem", position: 3, name: "SaaS pricing audit", item: canonicalUrl },
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
            dateModified: "2026-08-03",
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function SaasSoftwarePricingAudit2026Page() {
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
                            { label: "SaaS pricing audit", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Software procurement</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            2026 SaaS Pricing Audit <span className="italic text-cognac">Evidence Before Savings</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A real software audit starts with paid invoices, accepted contracts and observed usage.
                            Public prices are context, not your total. The output should show what to retain, right-size,
                            consolidate, replace or investigate without promising a universal savings rate.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 2, 2026 against current primary vendor sources.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 31, 2026" readTime="7 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The audit deliverables</h2>
                        <BlogList
                            items={[
                                "One list that reconciles: every vendor, what you buy, who owns it internally, the invoices, the terms, your actual usage, and what data sits there.",
                                "A decision for every line: retain, right-size, consolidate, replace or investigate.",
                                "A map of what depends on what, and where the risk is: security, privacy, integrations, staying running, and getting out.",
                                "Conservative, base and adverse cost scenarios for any material change.",
                                "A dated pack of evidence, so finance, operations and engineering are all looking at the same facts.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: FileSearch, title: "Commercial", body: "What you signed, what you pay, and when you can leave." },
                            { icon: Gauge, title: "Usage", body: "What you actually use, including at peak." },
                            { icon: ShieldCheck, title: "Risk", body: "What data sits there, who can reach it, and how you get it back." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="the-pattern">The pattern this audit exists to catch</BlogHeader>
                    <BlogText>
                        The shape of the problem is familiar enough to describe without a statistic. You sign up at a
                        modest monthly price. You do not add users, you do not change how you work, and the product does
                        not noticeably improve. Two years later the same line item is several times larger. Nothing
                        dramatic happened. A tier boundary moved, a definition of the billed unit changed, an
                        introductory discount lapsed, a plan was restructured and you were migrated onto the nearest
                        equivalent, and each of those arrived on a different date in a different email.
                    </BlogText>
                    <BlogText>
                        That is why an audit built on remembered prices does not work. Nobody remembers four small
                        changes across two years, and the vendor is under no obligation to summarize them for you. The
                        invoice does. Everything below starts there.
                    </BlogText>

                    <BlogHeader id="what-changed">What actually changed in 2026</BlogHeader>
                    <BlogText>
                        The audit below is worth running in 2026 specifically because several widely-used vendors moved
                        price or packaging inside the same twelve months. Each item is linked to the vendor&apos;s own
                        announcement. Verify against the live page before you budget from it, because vendors revise these
                        notices and regional pricing differs. We follow the same vendor announcements in our{" "}
                        <Link href="/blog/saas-price-increases-2026-tracker" className="text-cognac hover:underline font-medium">2026 vendor price-change tracker</Link>, and the
                        practical response once a change is confirmed on your own invoice is set out in our{" "}
                        <Link href="/blog/how-to-cut-saas-bill-2026" className="text-cognac hover:underline font-medium">guide to reducing a software bill</Link>.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Vendor</th><th className="p-4">Change</th><th className="p-4">Effective</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-bold">Microsoft 365</td>
                                    <td className="p-4">Per user/month: Business Basic $6 to $7; Business Standard $12.50 to $14; E3 $36 to $39; E5 $57 to $60; F1 $2.25 to $3; F3 $8 to $10. Business Premium is unchanged at $22, so check your own SKU before assuming a rise. Microsoft states existing customers remain on current pricing until renewal, and that tenants get at least 30 days notice in Message Center before packaging changes become available. Figures from Microsoft&apos;s licensing news page, checked August 2, 2026.</td>
                                    <td className="p-4">July 1, 2026</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Webflow</td>
                                    <td className="p-4">Plans restructured and simplified. Because plan boundaries moved rather than a single price, check which new plan your current site maps to rather than comparing the headline number.</td>
                                    <td className="p-4">May 2026</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Klaviyo</td>
                                    <td className="p-4">Billing model change affecting how contacts and sends are counted. This is an earlier policy change rather than a 2026 price rise, and it can still be the reason a 2026 invoice looks different. The practical effect varies by list size and sending pattern, so read your own invoice rather than a published percentage.</td>
                                    <td className="p-4">February 18, 2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="Why no percentages for Webflow and Klaviyo">
                        We publish the Microsoft figures because Microsoft publishes them per plan. For the other two, the
                        change is structural rather than a flat uplift, so any single percentage would be wrong for most
                        readers. The primary sources are linked at the end of this article; your invoice is the only
                        authority on what you specifically now pay.
                    </InsightBox>

                    <BlogHeader>1. Reconcile finance, identity and vendor records</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The register everything else runs on, and it comes from three places rather than one. Twelve months of card, bank and AP charges tell you what you paid. The contracts tell you renewal dates and notice periods. The identity provider tells you what staff actually log into. Anything in that third list missing from the first is either free, personally expensed, or on a card nobody reconciles.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Export at least twelve months of card, bank, accounts-payable and app-marketplace charges.",
                            "Match each charge to a vendor account, product, workspace, business owner and technical owner.",
                            "Record contract dates, renewal, notice period, auto-renewal, minimum commitment and termination path. Set the reminder off the notice period the contract itself states, not a generic lead time, and add enough working days to get an approval through before the window shuts.",
                            "Identify externally billed subscriptions that will not appear in a platform's native billing page.",
                            "Export the application list from your identity provider, such as Okta or Microsoft Entra ID, formerly Azure AD. Anything employees sign into but finance never paid for is either free, expensed personally, or billed to a card you have not reconciled yet.",
                            "Flag unknown, duplicate, former-employee and test accounts for investigation before cancellation.",
                        ]}
                    />
                    <BlogText>
                        Keep that register in a form you can reuse. The same records of spend, owners and renewal dates
                        are what a{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">website rebuild cost assessment</Link>{" "}
                        or a{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost assessment</Link>{" "}
                        depends on later.
                    </BlogText>

                    <BlogHeader>2. Normalize the commercial model</BlogHeader>
                    <BlogText>
                        Record currency, tax, billing interval, discount, committed quantity, overage and credit
                        separately. A monthly equivalent can aid comparison but must not erase annual commitments or
                        termination terms. Public list prices can differ from a reseller, enterprise agreement, legacy
                        entitlement or negotiated renewal.
                    </BlogText>
                    <BlogText>
                        Microsoft&apos;s July 2026 changes illustrate why SKU and renewal matter. Webflow&apos;s 2026
                        transition illustrates why account type and billable changes matter. Klaviyo&apos;s active-profile
                        policy illustrates why the definition of a billed unit matters. Use the vendor announcement and
                        the account invoice together. Our{" "}
                        <Link href="/blog/webflow-true-cost" className="text-cognac hover:underline font-medium">breakdown of Webflow plan and add-on lines</Link>{" "}
                        works through the same reading exercise on one vendor.
                    </BlogText>

                    <BlogHeader>3. Measure use without inventing a dormant-user benchmark</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Define what meaningful use means for each product before measuring anything, because a login does not prove value and silence does not prove idleness. State the observation window explicitly as well: a single quarter misses everything that only runs at month-end, quarter-end or year-end. Every change that follows this needs a rollback plan.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Define meaningful use for the product: login alone may not establish value, and absence of login may not mean unused automation.",
                            "Review assigned seats, permission level, last activity, feature use, API calls and owned workflows over a window you state explicitly. A quarter misses anything that only runs at month-end, quarter-end or year-end, so record the window alongside the finding and let the next person re-run it.",
                            "Check seasonal and campaign peaks before downgrading a usage-based plan.",
                            "Ask the business owner what fails if the tool is removed and how that dependency was tested.",
                            "Retain a change and rollback plan for any seat, tier or integration adjustment.",
                        ]}
                    />
                    <InsightBox variant="info" label="Why there is no benchmark figure here">
                        We do not publish a single figure for unused seats, dormant users or expected savings. Any such
                        number depends on which organizations were sampled, how each of them defined an active user and
                        over what period the activity was counted. A benchmark stated without that sample and definition
                        is not something you can budget against. Calculate the result from your own seat inventory,
                        activity records and invoices.
                    </InsightBox>

                    <InsightBox variant="warning" label="Two things an average month will not show you">
                        First, anything metered by ticket, contact, conversation, message or send does not have a
                        stable monthly cost. A promotion, a seasonal peak or a paid campaign multiplies the units while
                        the plan stays exactly the same, so an annual budget built from a quiet month will be wrong in
                        the months that matter most. Pull twelve months rather than three, and look at the peaks
                        specifically before you right-size anything usage-based.
                    </InsightBox>
                    <InsightBox variant="info" label="Check that the cheaper plan is available to you">
                        Vendors frequently introduce lower entry pricing to attract new customers while existing
                        accounts stay on the plan they signed. So a cheaper tier appearing on the pricing page is not
                        yet a saving. Before you build it into a forecast, confirm in writing that your account can
                        actually move onto it, because the answer is sometimes no and it is rarely stated on the page.
                    </InsightBox>

                    <BlogHeader>4. Map capability and data dependencies</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            This is the section that separates unused from quietly load-bearing. Five surfaces need inventorying before a subscription can safely be touched: what it does, what regulated data it holds, what it is wired into, what you could get out of it, and who knows how to run it. A tool nobody logs into can still be carrying a scheduled job the business depends on.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Authentication, roles, workflows, forms, approvals, notifications and scheduled jobs.",
                            "Customer, employee, payment, health or other regulated data and applicable processing terms.",
                            "CRM, commerce, finance, support, analytics, advertising and warehouse integrations.",
                            "Exports, backups, retention, deletion, audit history and legal holds.",
                            "Support contacts, incident history, recovery objectives and internal operating knowledge.",
                        ]}
                    />

                    <BlogHeader>5. Avoid cancellation mistakes</BlogHeader>
                    <BlogText>
                        Confirm the current vendor procedure before changing access. Shopify currently says uninstalling
                        an app cancels future Shopify-billed recurring charges, while pending charges from the current
                        cycle can still appear and externally billed subscriptions must be canceled with the provider.
                        Other products use different timing. Capture confirmation, exports and effective dates. App
                        charges are easy to overlook at this step, so read our walkthrough of{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">where Shopify app charges appear on a monthly bill</Link>{" "}
                        before you touch a storefront. If commerce is the workload under review, our{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">ecommerce engineering service</Link>{" "}
                        page describes what we take on.
                    </BlogText>

                    <BlogHeader>6. Decide line by line</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Five verdicts are available for any subscription, and each has to be earned with different evidence. Retain needs demonstrated use. Right-size needs proof a lower tier covers your peaks rather than your average. Consolidate needs one product genuinely covering the workflows. Replace needs the target to clear requirements at acceptable risk. Investigate is the honest verdict while an owner, a contract or a data location is still unknown.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Decision</th><th className="p-4">Evidence required</th><th className="p-4">Common risk</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Retain</td><td className="p-4">Used capability and acceptable total cost</td><td className="p-4">Ignoring renewal or vendor concentration</td></tr>
                                <tr><td className="p-4 font-bold">Right-size</td><td className="p-4">Lower tier meets measured needs and peaks</td><td className="p-4">Losing a required feature or entitlement</td></tr>
                                <tr><td className="p-4 font-bold">Consolidate</td><td className="p-4">One product covers accepted workflows</td><td className="p-4">Migration, retraining and integration gaps</td></tr>
                                <tr><td className="p-4 font-bold">Replace</td><td className="p-4">Target meets requirements at acceptable risk and cost</td><td className="p-4">Underestimating operation and exit work</td></tr>
                                <tr><td className="p-4 font-bold">Investigate</td><td className="p-4">Owner, use, contract or data remains unresolved</td><td className="p-4">Deleting first and discovering dependency later</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>7. Compare buy, switch and build on total cost</BlogHeader>
                    <BlogText>
                        Compare buy, switch and build on one list of inputs: license or build cost, migration effort, the internal hours each option consumes, what it costs to run for three years, and what it costs to leave. An option often looks cheaper only because something was left off that list. Put every option on the same inputs before you compare them. Our{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline font-medium">website cost guide</Link>{" "}
                        sets out how we break a scope into those inputs.
                    </BlogText>
                    <BlogList
                        items={[
                            "Current and projected vendor fees under normal, peak and adverse usage.",
                            "Implementation, data migration, integrations, testing, training and transition.",
                            "Hosting, databases, email, monitoring, security, backups and incident response.",
                            "Internal administration, support, maintenance, vendor change and engineering availability.",
                            "Downtime, data loss, adoption, compliance and exit risk.",
                            "Residual value, ownership and licensing under the actual agreement.",
                        ]}
                    />
                    <BlogText>
                        Custom software is not a zero-recurring-cost category. Vercel, Sanity, databases, email,
                        observability and other dependencies have current plans and terms. A custom system also needs
                        security updates, maintenance, monitoring and support. Build when the requirements and
                        scenarios justify control, not because a monthly threshold guarantees payback. Our note on{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className="text-cognac hover:underline font-medium">what a Next.js hosting bill actually contains</Link>{" "}
                        lists those lines, and the wider decision is worked through in our{" "}
                        <Link href="/blog/build-vs-buy-software-2026-cost-comparison" className="text-cognac hover:underline font-medium">build versus buy comparison</Link>.
                        Our <Link href="/pricing" className="text-cognac hover:underline font-medium">engagement tiers</Link> show how we scope{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering</Link> work.
                    </BlogText>

                    <BlogHeader>8. Set change and acceptance controls</BlogHeader>
                    <BlogText>
                        A decision to cancel is not the same as a saving that sticks. Six controls make it stick: a named owner and rollback trigger per change, exit evidence including deletion, acceptance testing where a replacement is involved, post-change monitoring against a dated baseline, contract-specific remedy for anything custom, and a procurement gate for the next purchase. Without that last one, the spend reappears on someone's expense claim within a quarter.
                    </BlogText>
                    <BlogList
                        items={[
                            "Named owner, approval, change window, test script, rollback trigger and communication path.",
                            "Data export, reconciliation, access removal and deletion evidence.",
                            "Functional, security, accessibility, performance and integration acceptance where relevant.",
                            "Post-change monitoring and a dated comparison with the baseline.",
                            "Contract-specific support, cure and remedy for any custom replacement.",
                            "An agreed route for buying the next tool: who approves it, which card it goes on, and who adds it to the register. Without that, the spend you just removed reappears on someone's expense claim within a quarter and the audit has to start again.",
                        ]}
                    />
                    <BlogText>
                        Where the replacement is a website, storefront or internal tool rather than a single
                        subscription, our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">project write-ups</Link>{" "}
                        show how scope, acceptance and handover were recorded, including the{" "}
                        <Link href="/work/panda-patches" className="text-cognac hover:underline font-medium">Panda Patches build</Link>.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Seven pages, all vendor-owned rather than third-party summaries, checked on the dates given above. Vendors revise these without notice, so treat the list as where to verify rather than as a substitute for verifying. Where a figure here disagrees with your own invoice, your invoice is the authority.
                        </BlogText>
                    </div>
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
                            Share invoices, contracts, usage exports and workflow owners. We will build a decision
                            register and scope only the replacements whose requirements and total-cost model support
                            the change.
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
