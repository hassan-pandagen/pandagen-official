import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Package } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogText, StatCard } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "custom-website-5000-whats-included";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/custom-website-5000-whats-included";
const pageTitle = "Custom Website Starting at $5,000: Scope Guide (2026)";
const pageDescription =
    "See how PandaCodeGen scopes its $5,000 to $10,000 Scale tier, including migration, performance, support, payment, ownership, and change-control terms.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: "/blog/custom-website-5000-whats-included" },
    keywords: [
        "custom website cost",
        "custom website 5000",
        "what does a custom website include",
        "website migration scope",
        "custom website price 2026",
        "Next.js website cost",
    ],
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        type: "article",
        publishedTime: "2026-06-14",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/custom-website-5000-whats-included")],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: pageTitle,
            description: pageDescription,
            image: ogImageUrlForPath("/blog/custom-website-5000-whats-included"),
            datePublished: "2026-06-14",
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
            articleSection: "Pricing",
            inLanguage: "en-US",
            keywords: ["custom website cost", "website migration", "project scope", "Next.js development"],
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Custom Website Starting at $5,000", item: canonicalUrl },
            ],
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

export default function CustomWebsite5000Page() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal md:pb-20 md:pt-32">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Custom Website Starting at $5,000", href: "/blog/custom-website-5000-whats-included" },
                        ]}
                    />

                    <Link
                        href="/blog"
                        className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cognac/20 bg-cognac/5 px-3 py-1 text-xs font-semibold text-cognac">
                            <Package className="h-3.5 w-3.5" /> Pricing and scope
                        </div>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            What a Custom Website <span className="italic text-cognac">Starting at $5,000</span> Includes
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            PandaCodeGen&apos;s Scale tier is a $5,000 to $10,000 planning range, not a universal
                            package. Your signed statement of work decides the pages, features, migration controls,
                            tests, support, ownership, exclusions, and remedy.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Offer terms reviewed July 24, 2026. A signed proposal or SOW controls if it differs from this guide.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="June 14, 2026"
                        readTime="11 min read"
                        bio="Hassan leads PandaCodeGen's engineering work on scoped, search-sensitive migrations and custom builds."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Starter begins at $1,500, Growth at $3,500, and Scale normally falls between $5,000 and $10,000.",
                                "The tier is a planning anchor. Discovery and the written scope decide the actual price and deliverables.",
                                "A common payment structure is 30% at onboarding and 70% at the delivery milestone defined in the accepted terms.",
                                "Performance, support, ownership, refunds, vendor costs, and out-of-scope work are written into the project agreement.",
                                "The recommended first step is a migration plan, not selecting a package from page count alone.",
                            ]}
                        />
                    </section>

                    <BlogHeader>Why $5,000 is a range entry, not a promise</BlogHeader>
                    <BlogText>
                        Two websites with thirty URLs can be completely different projects. One may contain static
                        marketing pages and a simple form. The other may include products, customer accounts, checkout,
                        a CRM, consented analytics, localization, search, and years of redirect history. Page count is
                        useful, but templates, integrations, data, risk, and acceptance work usually matter more.
                    </BlogText>
                    <BlogText>
                        PandaCodeGen uses the Scale range for larger migrations, commerce frontends, custom lead
                        journeys, and integration-heavy builds. A project can move below or above a planning tier after
                        discovery. We document the reason before onboarding so a buyer can compare the actual work,
                        not just the headline. The tiers themselves sit on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>, and our{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline font-medium">website cost guide</Link>{" "}
                        explains which scope inputs move a project between them.
                    </BlogText>

                    <div className="my-10 grid gap-4 sm:grid-cols-3">
                        <StatCard stat="$1,500" label="Starter" context="Small, controlled migration scope" />
                        <StatCard stat="$3,500" label="Growth" context="Broader content and CMS scope" />
                        <StatCard stat="$5K-$10K" label="Scale" context="Larger or integration-heavy scope" />
                    </div>

                    <BlogHeader>What can be included in a Scale SOW</BlogHeader>
                    <BlogText>
                        The following work belongs in a Scale conversation, but none of it should be assumed until it
                        appears in the accepted SOW. The project may include all, some, or a different combination:
                    </BlogText>
                    <BlogList
                        items={[
                            "A Next.js frontend and an agreed content editing system, with content types, roles, preview, and publishing workflow named.",
                            "A dated inventory of URLs, templates, metadata, canonicals, structured data, media, internal links, and important search queries.",
                            "A page-level keep, replace, redirect, or retire decision for existing URLs, plus rendered-output and redirect-chain checks.",
                            "Forms, email, CRM, calendar, commerce, search, analytics, consent, and advertising integrations listed individually.",
                            "Server-side conversion tracking where paid advertising is in scope, with the specific events, the consent handling, and the verification method named rather than assumed.",
                            "Responsive implementation for the agreed mobile and desktop layouts and current browser support matrix.",
                            "Accessibility checks against the standard and conformance target named in the SOW, with exclusions and remediation defined.",
                            "Security controls appropriate to the data and workflows, including validation, authorization, secrets, abuse controls, logging, and dependency review.",
                            "A staged launch plan with DNS, cache, data freeze, monitoring, rollback, and responsibility assignments.",
                            "Documentation, training, credentials, account handover, and a repository transition where agreed.",
                        ]}
                    />
                    <BlogText>
                        Our{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering service</Link>{" "}
                        page describes how that work is organised. Where the project starts on an existing platform, our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">WordPress migration service</Link>{" "}
                        and our{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost assessment</Link>{" "}
                        cover the URL and redirect work in the list above. Commerce scope is described on our{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">ecommerce engineering</Link> page.
                    </BlogText>
                    <BlogText>
                        Conversion tracking is worth naming separately because it is one of the items buyers most often
                        assume is included. Browser-side tags and server-side event forwarding are different pieces of
                        work with different failure modes, and how much of the customer journey you want measured is
                        its own scope driver. A single purchase or enquiry event is a smaller build than a set covering
                        content views, cart, checkout start and pipeline stages, each one implemented, consent-aware
                        and verified. Decide how much of that funnel matters before the scope is written rather than
                        after launch. What the server-side side of it involves is set out in our guide to{" "}
                        <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline font-medium">Meta Conversions API setup</Link>.
                    </BlogText>

                    <BlogHeader>What the price does not automatically include</BlogHeader>
                    <BlogText>
                        A clear quote also lists exclusions. Without them, two people can sign the same price while
                        imagining different projects. Typical items that need an explicit decision include original
                        copywriting, brand identity, product photography, large data cleanup, paid third-party tools,
                        multilingual content, legal review, complex customer accounts, custom ERP work, ongoing SEO,
                        campaign management, and content entry beyond the agreed inventory.
                    </BlogText>
                    <BlogText>
                        Extra pages and small feature changes are not a problem when discussed. Minor agreed tweaks may
                        fit inside the project or included support. Material additions receive a written estimate and
                        require approval. The parties can agree fixed-price, hourly, weekly, or another structure for
                        that added work. If the brief is a rebuild of an existing site rather than a new one, our{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline font-medium">rebuild cost assessment</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-redesign-cost" className="text-cognac hover:underline font-medium">redesign cost breakdown</Link>{" "}
                        list the items that most often turn up as exclusions.
                    </BlogText>

                    <BlogHeader>How the 90+ performance target works</BlogHeader>
                    <BlogText>
                        PandaCodeGen can include a 90 or higher Lighthouse performance acceptance target for the
                        representative pages and environments named in the accepted terms. The test should specify
                        mobile and desktop profiles, tool and browser version, consent state, authentication state,
                        geography or runner, and any third-party conditions.
                    </BlogText>
                    <BlogText>
                        Our normal acceptance method uses <BlogHighlight>three passing runs for every agreed page and
                        profile</BlogHighlight>. Testing only the homepage is not enough when another template carries
                        the business risk. A site may use lazy loading, but that does not make its other routes
                        irrelevant. Product, article, landing, checkout, or application templates should be represented
                        when they are in scope.
                    </BlogText>
                    <BlogText>
                        Lighthouse is a controlled delivery measurement. It does not guarantee field Core Web Vitals,
                        rankings, traffic, conversions, or revenue. The SOW states the remedy if an agreed acceptance
                        test is not met. Our explainer on{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline font-medium">Core Web Vitals</Link>{" "}
                        covers the field measurement that sits alongside it, and our guide to{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline font-medium">speeding up a website</Link>{" "}
                        describes the engineering behind the score.
                    </BlogText>

                    <BlogHeader>Payment, refund, and change control</BlogHeader>
                    <BlogText>
                        A common PandaCodeGen payment option is 30% at onboarding and 70% at the delivery milestone
                        defined in the accepted terms. A project can use another written schedule when both parties
                        agree. Currency, taxes, invoice dates, approvals, pause rights, cancellation, and delivery
                        conditions should be stated before work begins.
                    </BlogText>
                    <BlogText>
                        Where the accepted terms include scope protection, a client can be refunded the fees paid under
                        that scope when PandaCodeGen fails to deliver what was signed, following the agreement&apos;s
                        acceptance and remedy process. Because payment is normally 30% at onboarding and 70% at the
                        delivery milestone, the practical effect is that your exposure is capped at the deposit and you
                        do not pay the balance for work you have not accepted. It is not an unconditional
                        change-of-mind promise. Cancellation after substantial or near-complete work, exceptional
                        personal circumstances, and any partial refund are handled under the signed contract and the
                        parties&apos; written decision.
                    </BlogText>
                    <BlogText>
                        An approved refund is normally sent by PandaCodeGen within two or three business days, while the
                        public policy allows up to 10 to 12 business days for processing and banking delays. The signed
                        terms must say which clock controls, what happens to work in progress, and which amounts are
                        refundable.
                    </BlogText>

                    <BlogHeader>Support after launch</BlogHeader>
                    <BlogText>
                        Package discussions start with 15 business days of included support for Starter and 30
                        business days for Growth and Scale. The accepted terms define the start event, usually the
                        production launch or another named handoff event, and the exact coverage.
                    </BlogText>
                    <BlogText>
                        Included support should cover defects in signed deliverables and the minor agreed adjustments
                        described in the SOW. New features, extra pages, new integrations, client changes, and
                        third-party platform changes are separately scoped unless the agreement says otherwise. Custom
                        engagements can use a longer support or maintenance arrangement.
                    </BlogText>

                    <BlogHeader>Who owns the finished work</BlogHeader>
                    <BlogText>
                        The client keeps its content, data, brand assets, and client-controlled business accounts.
                        Rights in custom deliverables transfer according to the accepted terms, normally after full
                        payment. PandaCodeGen retains its reusable internal tools, templates, methods, and pre-existing
                        code. Third-party components keep their original licenses. Our article on{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline font-medium">what website ownership actually covers</Link>{" "}
                        sets out the questions to ask any provider about this.
                    </BlogText>
                    <BlogText>
                        The domain, hosting, repository, analytics, email, commerce, CRM, and other business accounts
                        can be created under client-controlled credentials when agreed. PandaCodeGen can manage them
                        when requested, but the arrangement, access, billing owner, exit process, and handover must be
                        documented. <BlogHighlight>No vendor or agency lock-in should be assumed merely from the word
                        &quot;custom.&quot;</BlogHighlight>
                    </BlogText>

                    <BlogHeader>How to compare this quote with another provider</BlogHeader>
                    <div className="my-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
                        <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-charcoal">
                            <ClipboardCheck className="h-5 w-5 text-cognac" /> Compare these written details
                        </h3>
                        <BlogList
                            items={[
                                "Exact page, template, content, integration, and migration inventory.",
                                "Named deliverables, exclusions, client dependencies, and approval owners.",
                                "Acceptance tests, environments, evidence, defect remedy, and launch responsibilities.",
                                "Revision limits and the process for pricing added work.",
                                "Payment milestones, cancellation, refunds, ownership, licenses, and account control.",
                                "Support duration, start date, coverage, response expectations, and ongoing maintenance.",
                                "Third-party subscription, usage, hosting, tax, and transaction costs.",
                            ]}
                        />
                    </div>
                    <BlogText>
                        These details make two offers comparable. Provider size, location, or a generic market average
                        does not prove whether a quote is fair for your scope. Our notes on{" "}
                        <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline font-medium">what a low quoted rate leaves out</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-developer-agency" className="text-cognac hover:underline font-medium">how to assess a development agency</Link>{" "}
                        expand on the same checklist.
                    </BlogText>

                    <BlogHeader>Which tier should you start with?</BlogHeader>
                    <BlogText>
                        Start with the smallest tier that can honestly contain the required outcome and risk controls.
                        A focused brochure migration may fit Starter. A content-led business with a CMS and more
                        templates may fit Growth. Scale is the better planning anchor when commerce, a larger inventory,
                        custom workflows, or deeper integrations are central.
                    </BlogText>
                    <BlogText>
                        If one or two pages or features sit outside the initial package, we can add and discuss them in
                        the written scope. The first call is for fit and inventory, not pressure to buy the largest tier.
                        Our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">delivered project write-ups</Link>{" "}
                        show what each kind of scope looked like in practice, and our guide to{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className="text-cognac hover:underline font-medium">how long a custom website takes</Link>{" "}
                        covers the schedule side of the same decision.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will inventory the important pages, integrations, search signals, data, performance
                            profiles, ownership needs, and launch risks. Then we will recommend the closest tier and
                            document additions before onboarding.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white transition-colors hover:bg-cognac/90">
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
