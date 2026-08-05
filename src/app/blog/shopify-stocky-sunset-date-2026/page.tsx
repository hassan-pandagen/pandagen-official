import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Archive, CalendarClock, ClipboardCheck, Workflow } from "lucide-react";
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

const postId = "shopify-stocky-sunset-date-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Shopify Stocky Sunset: August 31, 2026 Migration Guide";
const description =
    "Stocky stops managing inventory after August 31, 2026. Export required history, map Stocky workflows, test Shopify inventory or alternatives, update integrations and train the team.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Shopify Stocky sunset 2026",
        "Stocky discontinued",
        "Stocky migration",
        "Shopify inventory management",
        "Stocky export",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-25",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-stocky-sunset-date-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Shopify: migrating from Stocky",
        url: "https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky",
    },
    {
        name: "Shopify: Stocky overview",
        url: "https://help.shopify.com/en/manual/sell-in-person/shopify-pos/inventory-management/stocky",
    },
    {
        name: "Shopify: Stocky stocktakes and CSV exports",
        url: "https://help.shopify.com/en/manual/sell-in-person/shopify-pos/inventory-management/stocky/inventory-management/stocktakes",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/shopify-stocky-sunset-date-2026"),
            description,
            datePublished: "2026-04-25",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Shopify", "Shopify themes", "Ecommerce performance", "Core Web Vitals", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Shopify operations",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify"] },
                { "@type": "Thing", name: "Ecommerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
            ],
            wordCount: 1350,
            timeRequired: "PT4M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-stocky-sunset-date-2026#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Stocky sunset", item: "https://www.pandacodegen.com/blog/shopify-stocky-sunset-date-2026" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-stocky-sunset-date-2026#webpage",
            url: "https://www.pandacodegen.com/blog/shopify-stocky-sunset-date-2026",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/shopify-stocky-sunset-date-2026#breadcrumb" },
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

export default function ShopifyStockySunsetPage() {
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
                            { label: "Stocky sunset", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify operations</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Shopify Stocky Sunset: <span className="italic text-cognac">August 31, 2026</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Shopify says Stocky stops working for inventory management after August 31, 2026. That is read from its <a href="https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky" target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">transition documentation</a>, checked July 24, 2026. Work backwards from that date rather than from when you happen to read this, and confirm the current position on that page before you plan against it. Before then:
                            export the history you are required to keep, write down what each of your workflows actually
                            does, test whatever you are moving to, fix anything that talked to Stocky, and show your team
                            how the new thing works.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Status verified July 24, 2026 against Shopify&apos;s current migration guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 25, 2026" readTime="4 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-red-200 bg-red-50 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Confirmed timeline and impact</h2>
                        <BlogList
                            items={[
                                "Stocky is no longer listed in the Shopify App Store. Check Shopify's own transition documentation for the current status rather than relying on a date reported second-hand.",
                                "Stocky inventory management stops after August 31, 2026.",
                                "Shopify says read-only access remains for at least 90 days after the date, for exporting your data on the current migration page.",
                                "Historical purchase orders and stocktakes do not move into Shopify automatically.",
                                "Stocky APIs stop working on August 31, 2026, so connected tools must be updated.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Archive, title: "Preserve", body: "Exports, source definitions, dates and retention." },
                            { icon: Workflow, title: "Map", body: "Every Stocky task, role, input and output." },
                            { icon: ClipboardCheck, title: "Test", body: "Native, vendor or custom workflow acceptance." },
                            { icon: CalendarClock, title: "Cut over", body: "Training, freeze, launch, support and rollback." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="sequence">What to do first, and what can wait</BlogHeader>
                    <BlogText>
                        The seven steps below are ordered deliberately, and <strong>three of them stop being possible
                        after August 31, 2026</strong>. If you are reading this with weeks rather than months left, the
                        order matters more than the completeness: do the irreversible things now, compress the
                        reversible ones, and accept that some of the later steps will run after the deadline rather
                        than before it. Nothing below asks you to have chosen a replacement first. If the sunset
                        has also opened a wider platform question, that is covered separately in{" "}
                        <Link href="/blog/shopify-vs-custom-website" className="text-cognac hover:underline font-medium">Shopify compared with a custom storefront</Link>{" "}
                        and{" "}
                        <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline font-medium">what headless commerce means</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Irreversible, do now: export everything (step 2). Purchase order history, supplier records, landed cost inputs and stocktakes do not migrate to Shopify automatically, and the APIs stop on the sunset date. Treat anything you have not exported as work you will have to do inside a closing window.",
                            "Irreversible, do now: do not uninstall Stocky first (step 1). Uninstalling before exporting removes the access you need to preserve the data, and Shopify says Stocky cannot be reinstalled.",
                            "Irreversible, do now: settle what you keep from read-only access (step 7). Shopify says you keep read-only access to export your data for at least 90 days after that date, so treat anything you have not exported as unavailable rather than delayed.",
                            "Time-boxed, do before the date: map the workflows (step 3) while Stocky is still running, so you are comparing against observed behavior rather than memory. This one becomes guesswork the moment the app stops.",
                            "Reversible, and safe to do after the deadline: choosing the replacement (step 4). The right answer depends on the workflow map, so a short runway is a reason to compress this decision rather than to bring it forward.",
                            "Can run after the date: acceptance testing, cutover rehearsal and rollback (steps 5 and 6). If the runway is short, these happen on the replacement rather than in parallel with Stocky, which is slower but not blocked.",
                        ]}
                    />
                    <InsightBox variant="warning" label="The ordering mistake that costs the most">
                        The common failure is selecting a replacement app in week one, migrating into it, and only then
                        discovering which Stocky workflows it cannot reproduce. By then the export window has
                        narrowed and the original system may already be uninstalled. Export first, map second, choose
                        third.
                    </InsightBox>

                    <BlogHeader>1. Do not uninstall Stocky as a cleanup step</BlogHeader>
                    <BlogText>
                        Shopify advises merchants to avoid uninstalling Stocky unless Shopify Support explicitly directs
                        it or the app is no longer required. Stocky cannot be reinstalled from the App Store, and data
                        might not be recoverable after uninstalling. Preserve the existing environment while you export
                        and validate the replacement. Keeping your own copy of operational data is the same ownership
                        question set out in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline font-medium">who owns your website and its data</Link>.
                    </BlogText>

                    <BlogHeader>2. Export the history you need</BlogHeader>
                    <BlogText>
                        Shopify says historical purchase orders and stocktakes will not automatically move to Shopify.
                        Export them through Stocky&apos;s built-in reports before the deadline. Suppliers cannot be
                        exported from Stocky, so build and validate a separate supplier register from the records
                        available to your business. Where a business wants its own view of that data afterwards, the{" "}
                        <Link href="/work/enterprise-ops" className="text-cognac hover:underline font-medium">operations dashboards we build</Link>{" "}
                        show one approach.
                    </BlogText>
                    <BlogList
                        items={[
                            "Purchase orders and their status, line items, dates and costs.",
                            "Any stocktake or stock-adjustment record you need for running the shop, for finance, for tax, or for an audit.",
                            "Supplier names and contacts, the terms you agreed, lead times, currencies, and which products came from whom.",
                            "Inventory, SKU, barcode, location and cost references needed to reconcile the transition.",
                            "User, permission and process documentation for current Stocky work.",
                            "Copies of integration configuration, scheduled exports and downstream mappings.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Validate the archive">
                        An export is not complete merely because a file downloaded. Record the report name, filters,
                        timezone, currency, row count, date, owner and checksum where appropriate. Open the file, sample
                        records against Stocky and test that authorized users can retrieve it from the approved archive.
                    </InsightBox>

                    <BlogHeader id="what-stops">What actually stops working</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            This is the audit to run first, because it decides how much of the rest applies to you.
                            Stocky carried a set of operations that Shopify&apos;s native inventory tools do not
                            reproduce one for one, and the gap is where your replacement budget goes. Check each of
                            these against how your team actually orders stock, rather than against the feature list.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Demand forecasting and suggested reorder quantities driven by sales velocity.",
                            "Purchase order creation, approval and receiving against those forecasts.",
                            "Supplier records: contacts, terms, lead times and per-supplier cost history.",
                            "Landed-cost calculation, which is what makes SKU-level margin real rather than estimated.",
                            "Minimum and maximum reorder thresholds and the alerts built on them.",
                            "Stocktakes, transfers and the barcode workflows used inside them.",
                            "Multi-location coordination where stock moves between warehouses or stores.",
                        ]}
                    />
                    <BlogText>
                        Two consequences are worth naming because they surface later rather than on the day. Once
                        landed-cost calculation stops, per-SKU margin becomes an estimate, which changes pricing and
                        cash-flow forecasting rather than just reporting. And <strong>the supplier export is the line
                        that scales with your business</strong>: twenty suppliers is an afternoon, two hundred is work
                        that has to be scheduled, and it cannot be done after the date. Count yours before you plan the
                        week. Confirm each item against{" "}
                        <a href="https://help.shopify.com/en/manual/products/inventory/transitioning-from-stocky" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Shopify&apos;s own transition documentation</a>{" "}
                        rather than this list, because Shopify is the authority on what it is replacing.
                    </BlogText>

                    <BlogHeader>3. Map the workflow differences</BlogHeader>
                    <BlogText>
                        Do this while Stocky is still running, because it becomes guesswork the moment the app stops. The middle column is Shopify's own guidance for each workflow, not our assessment of it. The right-hand column is what you have to prove works for your operation before accepting the replacement.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[800px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Workflow</th><th className="p-4">Current Shopify guidance</th><th className="p-4">Acceptance question</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Purchase orders</td><td className="p-4">Shopify admin can create and manage them, with documented feature differences</td><td className="p-4">Do approvals, receiving and supplier communication still work?</td></tr>
                                <tr><td className="p-4 font-bold">Transfers</td><td className="p-4">Inbound and outbound transfers move to Shopify workflows</td><td className="p-4">Can each location initiate, receive and reconcile correctly?</td></tr>
                                <tr><td className="p-4 font-bold">Counts</td><td className="p-4">Shopify describes inventory adjustments and POS Quick count options</td><td className="p-4">Are barcode, partial count and audit requirements met?</td></tr>
                                <tr><td className="p-4 font-bold">Forecasting</td><td className="p-4">Shopify documents inventory insights and Sidekick-assisted planning</td><td className="p-4">Are the method, access and review controls acceptable?</td></tr>
                                <tr><td className="p-4 font-bold">Reporting</td><td className="p-4">Some Stocky reports differ or have no direct native equivalent</td><td className="p-4">Which decision or compliance output must be recreated?</td></tr>
                                <tr><td className="p-4 font-bold">Integrations</td><td className="p-4">Stocky APIs cease on August 31, 2026</td><td className="p-4">What supported interface replaces every read and write?</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>4. Choose the replacement by requirements</BlogHeader>
                    <BlogText>
                        There is no universal replacement price or best option. Obtain current vendor terms and a comparable scope, then include configuration, migration, integration, training, support, security, maintenance and exit in the decision. The four routes below are gated on requirements you have tested, not on which product looks closest.
                    </BlogText>
                    <BlogList
                        items={[
                            "Use Shopify's native inventory tools when tested workflows meet the operational and reporting requirements.",
                            "Evaluate a third-party inventory product when it meets defined gaps at acceptable total cost, security and exit risk.",
                            "Build a scoped custom extension when the requirement is differentiated, stable and supportable.",
                            "Use a hybrid only when ownership and system-of-record boundaries are explicit.",
                        ]}
                    />
                    <BlogText>
                        There is no universal replacement price or best option. Obtain current vendor terms and a
                        comparable scope. Include configuration, migration, integration, training, support, security,
                        maintenance and exit in the decision. The build-or-buy comparison itself is set out in our{" "}
                        <Link href="/blog/build-vs-buy-software-2026-cost-comparison" className="text-cognac hover:underline font-medium">build versus buy worksheet</Link>,{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">a review of recurring Shopify app charges</Link>{" "}
                        covers the subscription side, and the project side is collected in our{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost breakdown</Link>.
                    </BlogText>

                    <BlogHeader>5. Run workflow acceptance</BlogHeader>
                    <BlogText>
                        This is where a mapped workflow becomes evidence. Seven tests, and the ones people skip are the awkward ones: a partial receipt, a count run on the actual devices and roles used in stores, and every integration that previously called a Stocky API. This step can still run after the sunset date, slower but not blocked.
                    </BlogText>
                    <BlogList
                        items={[
                            "Create, approve, receive, partially receive and close a test purchase order.",
                            "Transfer inventory between representative locations and reconcile quantities.",
                            "Run a count or adjustment with the devices and roles used in stores.",
                            "Test low-stock, replenishment, forecasting and exception handling.",
                            "Reproduce required supplier, finance and operational reports.",
                            "Verify permissions, audit history, exports, backups and recovery.",
                            "Exercise every integration that previously called a Stocky API.",
                        ]}
                    />

                    <BlogHeader>6. Rehearse cutover and rollback</BlogHeader>
                    <BlogText>
                        Inventory truth is the thing you are protecting, so name the system of record and the freeze window for each field before anything moves. Six steps cover it. Note the timing constraint in the fifth: keeping current Stocky access until sign-off only works before the sunset date, after which Shopify's current transition page describes read-only export access for at least 90 days.
                    </BlogText>
                    <BlogList
                        items={[
                            "Name the system of record and freeze window for each inventory field.",
                            "Reconcile quantities, open purchase orders, transfers and locations at the agreed cutoff.",
                            "Publish role-based instructions and train every affected team.",
                            "Set go or no-go criteria, escalation contacts and a support window.",
                            "Keep the validated archive and current Stocky access intact until the owner signs off.",
                            "Monitor discrepancies and integrations daily through the stabilization period.",
                        ]}
                    />

                    <BlogHeader>7. Treat read-only access as temporary</BlogHeader>
                    <BlogText>
                        Shopify states you keep read-only access to export your data for at least 90 days after that date, as specified on its current transition page. That window is finite, so do not use it as your retention plan. and validate your
                        exports before August 31, 2026.
                    </BlogText>
                    <BlogText>
                        We scope transitions of this kind as part of{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">e-commerce development</Link>{" "}
                        and{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering</Link>, with
                        project tiers on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link> and build examples in our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">client work</Link>. If storefront performance is on
                        the same roadmap, our{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className="text-cognac hover:underline font-medium">Shopify store speed checklist</Link>{" "}
                        and{" "}
                        <Link href="/blog/shopify-headless" className="text-cognac hover:underline font-medium">headless Shopify guide</Link>{" "}
                        cover that track.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Workflow className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your Stocky migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory Stocky data, workflows and integrations, define acceptance tests and scope
                            the least disruptive native, vendor or custom transition.
                        </p>
                        <QuoteModalButton cta="stocky_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

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
