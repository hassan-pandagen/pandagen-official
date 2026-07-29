import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, FileSpreadsheet, ReceiptText, Scale } from "lucide-react";
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

const postId = "wordpress-killer";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress 3-Year Cost in 2026: An Invoice-Led TCO Guide";
const description =
    "Calculate three-year WordPress cost from invoices, internal work, incidents and planned changes, then compare repair and migration using the same scope and assumptions.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WordPress cost",
        "WordPress total cost of ownership",
        "WordPress maintenance cost",
        "WordPress three year cost",
        "WordPress migration ROI",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-08",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-killer")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress maintenance documentation", url: "https://wordpress.org/documentation/article/wordpress-site-maintenance/" },
    { name: "WordPress hardening guide", url: "https://developer.wordpress.org/advanced-administration/security/hardening/" },
    { name: "WordPress update documentation", url: "https://wordpress.org/documentation/article/updating-wordpress/" },
    { name: "WordPress export documentation", url: "https://wordpress.org/documentation/article/tools-export-screen/" },
    { name: "Vercel current pricing", url: "https://vercel.com/pricing" },
    { name: "Vercel current fair-use and plan terms", url: "https://vercel.com/docs/limits/fair-use-guidelines" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-02-08",
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
            articleSection: "Website total cost",
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

const inlineLinkClass = "font-medium text-cognac hover:underline";

export default function WordPressCostPage() {
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
                            { label: "WordPress three-year cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Total cost of ownership</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress 3-Year Cost <span className="italic text-cognac">Use Your Invoices</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            WordPress can be cheap or expensive, and the invoice does not tell you which. Add up what
                            you really spend: hosting, plugins and licences, whoever you pay for support, the hours your
                            own team loses to it, the times it broke, and the changes you have planned. Then price the
                            alternatives against that same list.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Commercial and platform references checked July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 8, 2026" readTime="15 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "There is no defensible average three-year cost for every WordPress business site.",
                                "Use paid invoices, contracts, time records, incidents and approved roadmap work as the base case.",
                                "Compare maintain, optimize and migrate using the same features, traffic, service level and time period.",
                                "Do not count hypothetical traffic or revenue as savings unless first-party evidence and an attribution method support it.",
                                "A custom site still has hosting, dependencies, providers, maintenance and support responsibility.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="info" label="Why there is no average WordPress cost here">
                        This guide gives no single three-year total, no multiplier for hidden cost and no standard
                        payback period. What a site costs depends on its hosting plan, software subscriptions,
                        integrations, traffic, service level and how much internal time goes into editing, updates,
                        support and recovery, so a figure drawn from someone else&apos;s sample tells you nothing about
                        your own bill. Build the number from your paid invoices, contracts and time records, and price
                        custom operation as a real cost line rather than as zero.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: ReceiptText, title: "Invoices", body: "Hosting, licenses, services, support and incidents." },
                            { icon: FileSpreadsheet, title: "Labor", body: "Internal editing, updates, QA, recovery and coordination." },
                            { icon: Calculator, title: "Forecast", body: "Renewals, growth, roadmap, contingency and exit." },
                            { icon: Scale, title: "Compare", body: "Same capability, service level and evidence rules." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="formula">The three-year TCO formula</BlogHeader>
                    <div className="my-6 rounded-xl border border-stone-200 bg-stone-50 p-6 font-mono text-sm leading-7 text-stone-700">
                        Three-year TCO = current annual recurring cost x 3
                        <br />+ planned renewals and usage growth
                        <br />+ internal operating labor
                        <br />+ contracted maintenance and support
                        <br />+ expected roadmap work
                        <br />+ incident and contingency allowance
                        <br />+ migration or exit work inside the period
                    </div>
                    <BlogText>
                        Keep the base case to committed or directly observed cost. Put uncertain items in low, expected
                        and high scenarios with named inputs. Do not combine a worst-case WordPress scenario with a
                        best-case custom scenario. For how the same inputs are gathered when the comparison is a move
                        off the platform, see the{" "}
                        <Link href="/blog/wordpress-migration-cost" className={inlineLinkClass}>WordPress migration cost breakdown</Link>.
                    </BlogText>

                    <BlogHeader id="invoices">Collect the recurring invoices</BlogHeader>
                    <BlogList
                        items={[
                            "Hosting, CDN, storage, backups, staging and domain services",
                            "Themes, page builders, forms, SEO, security, cache and media tools",
                            "Commerce, subscriptions, bookings, memberships and payment-related extensions",
                            "Search, email, analytics, consent, chat, monitoring and integration services",
                            "Agency, freelancer, care-plan and emergency-support retainers",
                            "Taxes, currency, overages, seats and annual renewal changes",
                        ]}
                    />
                    <BlogText>
                        Use current invoices and renewal notices. Public list prices may differ from a contracted,
                        grandfathered, promotional or usage-based amount. Record billing owner, renewal date, usage,
                        dependency and cancellation effect for every line. An extension-heavy stack can also carry an
                        operating cost that never appears on a licence line, which is what{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className={inlineLinkClass}>our guide to WordPress plugins and site speed</Link> works through.
                    </BlogText>

                    <BlogHeader id="labor">Count internal operating work</BlogHeader>
                    <BlogList
                        items={[
                            "Core, theme and extension update review, staging and release",
                            "Content, product, merchandising and campaign changes",
                            "Performance, accessibility, analytics and search checks",
                            "User access, vendor reviews, security monitoring and backup tests",
                            "Plugin conflicts, failed jobs, integration changes and support coordination",
                            "Procurement, finance and management time tied to the website",
                        ]}
                    />
                    <BlogText>
                        Multiply recorded hours by an agreed fully loaded internal rate. If time is not tracked, sample a
                        representative operating period and label the estimate. Do not invent an industry maintenance
                        retainer and apply it to a team that handles the work differently. If much of that time goes
                        into chasing performance problems, work through the{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className={inlineLinkClass}>evidence-led method for fixing a slow WordPress site</Link>{" "}
                        before you price anything else.
                    </BlogText>

                    <BlogHeader id="incidents">Handle incidents without a fake average</BlogHeader>
                    <BlogText>
                        For prior incidents, record response labor, external invoices, downtime, failed transactions,
                        data recovery, customer support, legal review and notification work. For future scenarios, use a
                        separately labelled contingency or risk-adjusted model approved by the business. One public
                        breach-cost statistic does not predict this site&apos;s loss. For the exposure that sits behind
                        that contingency line, read our review of{" "}
                        <Link href="/blog/wordpress-ai-security-risk-2026" className={inlineLinkClass}>WordPress security risk in 2026</Link>.
                    </BlogText>

                    <BlogHeader id="change">Include roadmap and technical debt</BlogHeader>
                    <BlogText>
                        List changes the business expects within three years: new markets, products, subscriptions,
                        design, content models, CRM, search, payments, reporting or compliance. Estimate each option
                        against the same capability matrix. A platform that is inexpensive today may require costly
                        work for a future requirement, while a migration may replace mature features unnecessarily. If
                        the roadmap includes a store, scope the commerce path on its own terms against our{" "}
                        <Link href="/services/woocommerce" className={inlineLinkClass}>WooCommerce migration service</Link>.
                    </BlogText>

                    <BlogHeader id="maintain">Scenario A: maintain WordPress</BlogHeader>
                    <BlogList
                        items={[
                            "Keep the current architecture and required capabilities.",
                            "Update supported software and retire unused or overlapping components.",
                            "Fund routine QA, security, backups, performance and incident readiness.",
                            "Replace fragile integrations only where evidence justifies the work.",
                            "Forecast current invoice renewals and capacity from actual contracts.",
                        ]}
                    />

                    <BlogHeader id="optimize">Scenario B: optimize or rebuild within WordPress</BlogHeader>
                    <BlogText>
                        Separate content and feature value from implementation debt. A new theme, template system,
                        hosting configuration, database repair or extension consolidation may solve measured problems
                        without changing the content and commerce platform. Include migration within WordPress, staging,
                        QA, launch and retraining in the comparison. Page-builder debt is a common part of that
                        implementation cost, so test it directly against{" "}
                        <Link href="/blog/elementor-kills-seo" className={inlineLinkClass}>how Elementor affects SEO</Link> and{" "}
                        <Link href="/blog/divi-theme-slow" className={inlineLinkClass}>how the Divi theme affects page speed</Link>.
                    </BlogText>

                    <BlogHeader id="migrate">Scenario C: migrate to a custom stack</BlogHeader>
                    <BlogText>
                        Price the whole job, not just the build. That means working out what you need, designing it,
                        building it, moving the content and data across, replacing whatever your plugins were doing,
                        making it accessible, protecting your search traffic, getting analytics right, securing it,
                        testing that money actually changes hands, the switchover itself, and support afterwards. Then
                        add what it costs to run: hosting, the CMS, a database, email, search, monitoring, backups,
                        whatever you use of each vendor, and the engineering time to keep it patched. A Vercel plan or
                        other free allowance is not a permanent universal
                        commercial-cost promise. Our{" "}
                        <Link href="/services/wordpress-migration" className={inlineLinkClass}>WordPress migration service</Link>{" "}
                        sets out how that scope is run, and the{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className={inlineLinkClass}>step-by-step WordPress to Next.js migration guide</Link>{" "}
                        covers the sequence in detail.
                    </BlogText>

                    <BlogHeader id="comparison">Normalize the comparison</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[920px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Control</th><th className="p-4">Use the same assumption for every option</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Capabilities</td><td className="p-4">Pages, editing, commerce, accounts, integrations and reports</td></tr>
                                <tr><td className="p-4 font-bold">Demand</td><td className="p-4">Traffic, data, transactions, regions and growth scenario</td></tr>
                                <tr><td className="p-4 font-bold">Quality</td><td className="p-4">Performance, accessibility, privacy, security and reliability acceptance</td></tr>
                                <tr><td className="p-4 font-bold">Service</td><td className="p-4">Monitoring, response, backups, recovery, updates and support hours</td></tr>
                                <tr><td className="p-4 font-bold">Period</td><td className="p-4">Same start date, three-year window, currency and tax treatment</td></tr>
                                <tr><td className="p-4 font-bold">Uncertainty</td><td className="p-4">Same low, expected and high scenario rules</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="benefits">How to handle performance and revenue benefits</BlogHeader>
                    <BlogText>
                        Measure field performance and business events on the current site. If work is released, compare
                        affected cohorts while controlling for campaign, price, stock, content, device, geography and
                        seasonality where possible. Report observed association and experiment design honestly.
                        Performance improvements do not automatically create a ranking, conversion or revenue result.{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        sets out which of those measurements are field data and which are lab diagnostics before you
                        attach any of them to a business case.
                    </BlogText>

                    <BlogHeader id="payback">Calculate payback only after the inputs are approved</BlogHeader>
                    <div className="my-6 rounded-xl border border-stone-200 bg-stone-50 p-6 font-mono text-sm leading-7 text-stone-700">
                        Net migration investment = migration cost - avoided near-term WordPress work
                        <br />Annual verified savings = removed direct cost - new direct cost
                        <br />Simple payback years = net migration investment / annual verified savings
                    </div>
                    <BlogText>
                        Keep uncertain business benefits separate from verified direct savings. If annual verified
                        savings are zero or negative, a cost-only payback does not exist. The migration may still be
                        justified by capability, risk or strategy, but label that rationale directly.
                    </BlogText>

                    <BlogHeader id="worth-it">When WordPress may still be worth it</BlogHeader>
                    <BlogList
                        items={[
                            "The content and editing workflow fits the team.",
                            "Maintained extensions deliver required capability economically.",
                            "Measured performance and reliability meet requirements or are repairable.",
                            "The organization can own updates, security, monitoring and recovery.",
                            "A migration would recreate mature features without a material business benefit.",
                        ]}
                    />

                    <BlogHeader id="migration-fit">When migration may be worth pricing</BlogHeader>
                    <BlogList
                        items={[
                            "Core workflows or data models repeatedly conflict with the current stack.",
                            "Required controls cannot be reached through a reasonable repair plan.",
                            "Direct recurring and operating costs are verified and materially reducible.",
                            "The target capability and lifecycle model is fully scoped.",
                            "Data, SEO, ownership, acceptance, cutover and support risk are funded.",
                        ]}
                    />

                    <BlogHeader id="offer">PandaCodeGen planning terms</BlogHeader>
                    <BlogText>
                        PandaCodeGen tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale, with
                        custom work scoped separately. Standard payment is 30 percent at onboarding and 70 percent on
                        delivery. Refund, deliverables, acceptance and remedy follow the signed scope. Starter includes
                        15 business days of launch defect support; Growth and Scale include 30. These terms are inputs
                        to a comparison, not proof that migration is the lower-cost choice. What sits inside each tier
                        is listed on the <Link href="/pricing" className={inlineLinkClass}>pricing page</Link>, and{" "}
                        <Link href="/services/custom-engineering" className={inlineLinkClass}>custom engineering</Link>{" "}
                        covers work scoped outside them.
                    </BlogText>

                    <section className="my-10">
                        <h2 className="mb-3 text-xl font-bold text-charcoal">Related reading</h2>
                        <p className="leading-relaxed text-stone-700">
                            To carry this comparison further, read the{" "}
                            <Link href="/blog/wordpress-vs-nextjs" className={inlineLinkClass}>WordPress and Next.js platform comparison</Link>, the{" "}
                            <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className={inlineLinkClass}>three-year cost comparison of WordPress and custom code</Link>, or{" "}
                            <Link href="/blog/cloudflare-emdash-wordpress-replacement" className={inlineLinkClass}>how Cloudflare built its own WordPress replacement</Link>.
                        </p>
                    </section>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Bring invoices, not assumptions</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare maintain, optimize and migrate using your actual costs, capabilities and
                            operating requirements.
                        </p>
                        <QuoteModalButton cta="wordpress_tco_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
