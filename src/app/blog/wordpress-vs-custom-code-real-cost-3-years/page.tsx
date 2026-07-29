import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Braces, Calculator, FileSpreadsheet, Scale, Workflow } from "lucide-react";
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

const postId = "wordpress-vs-custom-code-real-cost-3-years";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress vs Custom Code: A 3-Year Cost Model for 2026";
const description =
    "Compare WordPress and custom code over three years with editable inputs for build, migration, providers, software, labor, maintenance, incidents, roadmap and exit.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WordPress vs custom code cost",
        "WordPress three year cost",
        "custom website total cost",
        "WordPress vs custom website",
        "website TCO model",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-20",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-vs-custom-code-real-cost-3-years")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress maintenance documentation", url: "https://wordpress.org/documentation/article/wordpress-site-maintenance/" },
    { name: "WordPress hardening guide", url: "https://developer.wordpress.org/advanced-administration/security/hardening/" },
    { name: "WordPress export documentation", url: "https://wordpress.org/documentation/article/tools-export-screen/" },
    { name: "Next.js deployment documentation", url: "https://nextjs.org/docs/app/getting-started/deploying" },
    { name: "Vercel current pricing", url: "https://vercel.com/pricing" },
    { name: "Google site moves", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-02-20",
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
            articleSection: "Website economics",
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

export default function WordPressVsCustomCostPage() {
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
                            { label: "WordPress vs custom cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Three-year economics</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress vs Custom Code <span className="italic text-cognac">Model Both Honestly</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A fair three-year comparison uses the same capabilities, demand, service level and internal
                            labor. It exposes inputs instead of presenting a stacked scenario as a market fact.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Platform and commercial references checked July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 20, 2026" readTime="17 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "WordPress can cost less, more or about the same as custom code depending on the requirements and operating model.",
                                "Custom code does not mean zero hosting, software, dependency, maintenance, security or support cost.",
                                "WordPress plugin and maintenance cost must come from the site's current invoices and work records.",
                                "Payback and lost-revenue claims require approved inputs and first-party evidence.",
                                "Choose architecture after capability and risk fit, not from a universal three-year winner.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="info" label="Why there are no headline totals or payback period">
                        This comparison names no three-year total for WordPress, no matching total for custom code and
                        no period over which one repays the other. Those numbers only mean something once both options
                        are specified against the same capabilities, demand, service level and internal labor, and a
                        scenario that prices one side generously while treating the other as free is an argument rather
                        than a forecast. Put your own quotes, invoices and time records into both columns, show the
                        formula, and let anyone reading the model challenge an input.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: FileSpreadsheet, title: "Inputs", body: "Invoices, quotes, labor, demand and roadmap." },
                            { icon: Workflow, title: "Capability", body: "Same journeys, data and operational outcomes." },
                            { icon: Braces, title: "Lifecycle", body: "Dependencies, providers, releases and ownership." },
                            { icon: Calculator, title: "Scenarios", body: "Low, expected and high with visible formulas." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="define">Define both options</BlogHeader>
                    <BlogText>
                        WordPress may mean shared or managed hosting, a custom theme or builder, a set of plugins and
                        internal or retained support. Custom code may mean Next.js or another framework with a CMS,
                        database, search, email, analytics and hosting providers. Name the actual components, accounts,
                        licenses and owners. Otherwise the comparison hides cost inside vague labels. For the
                        architectural version of this comparison, see{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress compared with Next.js</Link>{" "}
                        and{" "}
                        <Link href="/blog/wordpress-killer" className="text-cognac hover:underline">what actually replaces WordPress</Link>.
                    </BlogText>

                    <BlogHeader id="requirements">Freeze a shared capability baseline</BlogHeader>
                    <BlogList
                        items={[
                            "Page templates, content types, preview, approval and localization",
                            "Forms, search, accounts, commerce, payments and subscriptions",
                            "CRM, email, analytics, consent and operational integrations",
                            "SEO, accessibility, privacy, security and performance acceptance",
                            "Environments, monitoring, backups, recovery and response time",
                            "Repository, data, domain, provider and documentation handoff",
                        ]}
                    />
                    <BlogText>
                        If custom scope omits a capability currently supplied by a WordPress plugin, the lower price is
                        not a like-for-like result. If WordPress includes features the business no longer needs, remove
                        them from both scenarios.
                    </BlogText>

                    <BlogHeader id="model">The three-year model</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[1080px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Input</th><th className="p-4">WordPress source</th><th className="p-4">Custom source</th><th className="p-4">Model rule</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Initial work</td><td className="p-4">Repair or rebuild quote</td><td className="p-4">Discovery, build and migration quote</td><td className="p-4">Same capabilities and acceptance</td></tr>
                                <tr><td className="p-4 font-bold">Providers</td><td className="p-4">Hosting, CDN, backup and services invoices</td><td className="p-4">Hosting, CMS, database, search and services quotes</td><td className="p-4">Current plan and expected usage</td></tr>
                                <tr><td className="p-4 font-bold">Software</td><td className="p-4">Theme and plugin renewals</td><td className="p-4">Paid packages and provider licenses</td><td className="p-4">Contracted renewal, tax and currency</td></tr>
                                <tr><td className="p-4 font-bold">Labor</td><td className="p-4">Updates, QA, content and support hours</td><td className="p-4">Releases, dependency work, content and support hours</td><td className="p-4">Same fully loaded rate</td></tr>
                                <tr><td className="p-4 font-bold">Roadmap</td><td className="p-4">Configure, extend or replace</td><td className="p-4">Build or integrate</td><td className="p-4">Same approved future features</td></tr>
                                <tr><td className="p-4 font-bold">Risk</td><td className="p-4">Evidence-led contingency</td><td className="p-4">Evidence-led contingency</td><td className="p-4">Same method, separate risk profile</td></tr>
                                <tr><td className="p-4 font-bold">Exit</td><td className="p-4">Export and handoff</td><td className="p-4">Data, code, accounts and documentation</td><td className="p-4">Include work expected within period</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="formula">Use visible formulas</BlogHeader>
                    <div className="my-6 rounded-xl border border-stone-200 bg-stone-50 p-6 font-mono text-sm leading-7 text-stone-700">
                        Three-year cost = initial work
                        <br />+ recurring providers and software
                        <br />+ internal and external operating labor
                        <br />+ planned roadmap changes
                        <br />+ evidence-led contingency
                        <br />+ exit work inside the period
                    </div>
                    <BlogText>
                        Store quantity, unit cost, frequency, start date, inflation or renewal rule, source, confidence
                        and owner for each input. A total without these fields is not an auditable model.
                    </BlogText>

                    <BlogHeader id="wordpress-inputs">WordPress inputs</BlogHeader>
                    <BlogList
                        items={[
                            "Hosting, CDN, backups, staging, domains and email",
                            "Theme, builder, plugin and extension renewals",
                            "Update review, staging, regression testing and releases",
                            "Content, product, user and integration operations",
                            "Performance, accessibility, security and recovery work",
                            "Expected theme, runtime, plugin or workflow replacement",
                        ]}
                    />
                    <BlogText>
                        Two of those lines are easy to underestimate. Our notes on{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">how plugins affect front-end performance</Link>{" "}
                        and on{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">diagnosing a slow WordPress site</Link>{" "}
                        show where the hours usually go.
                    </BlogText>

                    <BlogHeader id="custom-inputs">Custom-code inputs</BlogHeader>
                    <BlogList
                        items={[
                            "Discovery, design, build, content and data migration",
                            "Hosting, bandwidth, builds, CMS, database and storage",
                            "Search, email, analytics, monitoring, backup and security services",
                            "Framework and package updates, QA and deployment",
                            "Custom integration maintenance and provider API changes",
                            "Documentation, repository, account and future-developer handoff",
                        ]}
                    />
                    <BlogText>
                        Anything on that list that goes past a marketing site sits under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">custom engineering</Link>, and
                        the build variables behind the first line are unpacked in{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">what a website costs</Link>.
                    </BlogText>
                    <InsightBox variant="info" label="Free allowances are not a zero-cost model">
                        A current provider may offer an allowance, but eligibility, commercial-use terms, limits and
                        pricing can change. Use the plan that matches the business, expected usage and current terms,
                        with a sensitivity for overage or plan movement.
                    </InsightBox>

                    <BlogHeader id="labor">Internal labor belongs in both columns</BlogHeader>
                    <BlogText>
                        WordPress can require update and compatibility work. Custom code can require dependency,
                        deployment and integration work. Both need content operations, access, vendor management,
                        monitoring and recovery. Measure or sample the work using the same fully loaded labor rate.
                    </BlogText>

                    <BlogHeader id="incidents">Security and incident scenarios</BlogHeader>
                    <BlogText>
                        Do not claim custom code has no database, plugins or attack surface. Compare actual components,
                        privileges, patch ownership, secret management, logging, backups and response. Base incident
                        costs on the organization&apos;s history or an approved risk method, not a generic hack-cost
                        average.
                    </BlogText>

                    <BlogHeader id="performance">Performance and business effect</BlogHeader>
                    <BlogText>
                        Measure representative routes under comparable conditions and use field{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals</Link>{" "}
                        where available. If performance work is released, join the affected cohorts with business events and
                        control for other changes where possible. Do not count a public conversion statistic as the
                        site&apos;s lost revenue or assume a framework creates the gain.
                    </BlogText>

                    <BlogHeader id="payback">Payback and break-even</BlogHeader>
                    <div className="my-6 rounded-xl border border-stone-200 bg-stone-50 p-6 font-mono text-sm leading-7 text-stone-700">
                        Incremental investment = custom three-year initial and transition cost
                        <br />- WordPress work avoided during transition
                        <br />
                        <br />Annual verified savings = removed direct and labor cost
                        <br />- new direct and labor cost
                        <br />
                        <br />Simple payback = incremental investment / annual verified savings
                    </div>
                    <BlogText>
                        If annual verified savings are not positive, a savings-based payback does not exist. Capability,
                        risk or strategic reasons may still justify the work. Keep those reasons separate from the
                        financial output.
                    </BlogText>

                    <BlogHeader id="scenarios">Run low, expected and high scenarios</BlogHeader>
                    <BlogList
                        items={[
                            "Low: contracted costs, stable usage and only committed roadmap work",
                            "Expected: approved growth, likely renewals and historically observed operating work",
                            "High: documented capacity, replacement and contingency assumptions",
                            "Stress: loss of a critical vendor, integration or maintainer when relevant",
                        ]}
                    />
                    <BlogText>
                        Do not use a pessimistic WordPress column and optimistic custom column. Apply the same confidence
                        and evidence rules, then show which inputs change the decision.
                    </BlogText>

                    <BlogHeader id="sensitivity">Find the decision-sensitive inputs</BlogHeader>
                    <BlogText>
                        Change one input at a time: traffic, content volume, internal labor rate, provider usage,
                        maintenance hours, roadmap scope or migration price. If a small change reverses the answer, the
                        business case is fragile and should not be marketed as a certain saving.
                    </BlogText>

                    <BlogHeader id="nonfinancial">Non-financial decision criteria</BlogHeader>
                    <BlogList
                        items={[
                            "Editorial usability and time to publish",
                            "Feature fit and differentiated workflows",
                            "Data control, privacy and regulatory requirements",
                            "Security, availability and recovery objectives",
                            "Hiring, vendor and internal operating capability",
                            "Portability, documentation and exit risk",
                        ]}
                    />
                    <BlogText>
                        The last of those deserves its own answer before the model is signed off, which we give in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>.
                    </BlogText>

                    <BlogHeader id="choose-wordpress">When WordPress may win</BlogHeader>
                    <BlogText>
                        WordPress may be the lower-risk and lower-cost choice when the current workflows fit, maintained
                        extensions cover required capability, the team is effective with the editor and measured
                        problems can be repaired. Mature niche features may be expensive to reproduce responsibly.
                    </BlogText>

                    <BlogHeader id="choose-custom">When custom may win</BlogHeader>
                    <BlogText>
                        Custom may fit when differentiated workflows or integration control matter, repeated platform
                        constraints create verified operating cost, and the organization can own a software product
                        lifecycle. Include migration, documentation, providers and long-term engineering rather than
                        comparing only the launch build. The transition line item is broken down in{" "}
                        <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">WordPress migration cost</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">what drives migration cost</Link>, and
                        the scope itself is described under our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration service</Link>.
                    </BlogText>

                    <BlogHeader id="terms">PandaCodeGen as one quote input</BlogHeader>
                    <BlogText>
                        PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale,
                        with custom work scoped separately. Standard payment is 30 percent at onboarding and 70 percent
                        on delivery. Use the accepted statement of work as the quote input and compare it with a
                        like-for-like WordPress option. These starting tiers do not prove three-year savings. The tier
                        detail sits on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>, and{" "}
                        <Link href="/work" className="text-cognac hover:underline">our project work</Link>{" "}
                        shows the kind of scope those tiers describe.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Scale className="mb-4 h-7 w-7 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Compare both options from the same brief</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will scope the custom option against your actual WordPress capability, invoices and
                            operating model, with no automatic payback claim.
                        </p>
                        <QuoteModalButton cta="wordpress_custom_tco_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
