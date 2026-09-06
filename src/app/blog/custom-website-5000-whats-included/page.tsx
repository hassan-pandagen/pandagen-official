import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Package } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogQuote, BlogText, StatCard } from "@/components/ui/BlogStyles";
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
        "what do you get for a custom website",
        "custom website what is included",
        "fixed price web development",
        "custom website vs agency quote",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        type: "article",
        publishedTime: "2026-06-14",
        modifiedTime: "2026-08-19",
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
            dateModified: "2026-08-19",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Next.js", "Website migration", "Web performance", "Technical SEO", "Content management systems"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Pricing",
            inLanguage: "en-US",
            wordCount: 2279,
            timeRequired: "PT11M",
            keywords: ["custom website cost", "website migration", "project scope", "Next.js development"],
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Next.js", sameAs: ["https://nextjs.org/", "https://en.wikipedia.org/wiki/Next.js"] },
                { "@type": "Thing", name: "Website Migration" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Custom Website Starting at $5,000", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: pageTitle,
            description: pageDescription,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-06-14",
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

                    <Breadcrumb items={postCrumbs(postId, "Custom Website Starting at $5,000")} />

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
                            An agency that bills by the hour can only sell you the hours a budget buys. PandaCodeGen
                            quotes the site: a 5 to 7 page custom Next.js site for a small business is $1,500, a 10 to
                            20 page site with a CMS and a full redirect map is $3,500, and the Scale tier this guide
                            covers is a $5,000 to $10,000 planning range for 30-plus pages or commerce. Every tier is
                            fixed for the written scope and you own the code at handover. Your signed statement of
                            work decides the pages, features, migration controls, tests, support, exclusions, and
                            remedy.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Offer terms reviewed July 31, 2026. A signed proposal or SOW controls if it differs from this guide.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="June 14, 2026"
                        readTime="9 min read"
                        bio="Hassan leads PandaCodeGen's engineering work on scoped, search-sensitive migrations and custom builds."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Starter begins at $1,500, Growth at $3,500, and Scale normally falls between $5,000 and $10,000.",
                                "The tier is a planning anchor. Discovery and the written scope decide the actual price and deliverables.",
                                "A common payment structure is 30% at onboarding and 70% at the delivery milestone defined in the accepted terms.",
                                "Speed, support, ownership, refunds and anything out of scope are all written into the agreement.",
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

                    <BlogHeader id="how-many-pages">How many pages does $5,000 get you?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Wrong unit, and the answer changes by a factor of ten depending on which unit you use.
                            Published answers to this question say ten to fifteen pages, which is only meaningful if
                            every page is different. <strong>What costs money is the number of distinct templates, not
                            the number of URLs.</strong> A hundred-page site running on six templates is a smaller build
                            than a twelve-page site where every page is bespoke, and the second one is the project that
                            blows a $5,000 budget while the first fits comfortably.
                        </BlogText>
                    </div>
                    <BlogText>
                        Before you compare any quote against this figure, count your templates rather than your pages:
                        home, a service layout, a listing, a detail page, an article, contact. Six templates and a
                        content model will carry almost any number of pages. If a vendor is quoting you by page count,
                        they are either pricing bespoke design for every page, which is expensive and usually
                        unnecessary, or they are about to build you six templates and charge by URL.
                    </BlogText>

                    <BlogQuote>
                        The Scale tier is a planning range, not a fixed package. The signed statement of work decides what you actually get.
                    </BlogQuote>

                    <BlogHeader>What a Scale build normally contains</BlogHeader>
                    <BlogText>
                        Taking the question at face value first, because it is a fair one to ask before reading a
                        contract. A Scale project normally means a custom Next.js front end, a content system your team
                        can actually edit without a developer, a full URL inventory with page-by-page redirect
                        decisions so existing search traffic survives the move, a staged launch rather than a flip of
                        the switch, and the repository handed over to you at the end. Where paid advertising is in
                        scope, it also means server-side conversion tracking rather than a browser tag alone. Hosting
                        for this kind of site typically sits on usage-based infrastructure rather than a fixed monthly
                        platform fee, so what you pay tracks what you use.
                    </BlogText>
                    <BlogText>
                        The reason the rest of this article is careful rather than a package list is that two projects
                        with the same headline scope routinely need different work, and a buyer who signs a list
                        instead of a scope finds that out late. So the detail below is what belongs in the written
                        scope, and none of it should be assumed until it is in there:
                    </BlogText>
                    <BlogList
                        items={[
                            "A Next.js frontend plus an agreed way to edit content, naming the content types, who can do what, how preview works and how things get published.",
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
                        page describes how that work is organized. Where the project starts on an existing platform, our{" "}
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
                        its own scope driver. A single purchase or inquiry event is a smaller build than a set covering
                        content views, cart, checkout start and pipeline stages, each one implemented, consent-aware
                        and verified. Decide how much of that funnel matters before the scope is written rather than
                        after launch. What the server-side work involves is set out in our guide to{" "}
                        <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline font-medium">Meta Conversions API setup</Link>.
                    </BlogText>

                    <BlogHeader>The part that is easy to miss when comparing quotes</BlogHeader>
                    <BlogText>
                        Most of what is above, another competent team can also deliver. The difference worth asking any
                        provider about is what happens after the tracking is switched on. Plenty of setups hand you a
                        dashboard and end the engagement there, and a dashboard nobody can interpret is just another
                        bill. Because we build the conversion tracking rather than reselling a tool, we can sit with
                        the data afterwards and say which campaigns are worth more budget, which are quietly spending
                        it, and where the measurement itself is unreliable enough that you should not act on it yet.
                    </BlogText>
                    <BlogText>
                        That is a service description rather than a promised outcome. Nobody can tell you in advance
                        what your ads will do. But when you compare two quotes, it is worth asking each provider who
                        reads the numbers with you once the build is finished, and what happens when the numbers
                        disagree with each other. The mechanics of that work are in our guide to{" "}
                        <Link href="/blog/fix-meta-ad-tracking-2026" className="text-cognac hover:underline font-medium">diagnosing a broken ad-tracking path</Link>.
                    </BlogText>

                    <BlogHeader>What the price does not automatically include</BlogHeader>
                    <BlogText>
                        At $5,000 the exclusions matter as much as the inclusions, and a clear quote lists both.
                        Without them, two people can sign the same price while
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
                        PandaCodeGen can include a 90 or higher <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> performance acceptance target for the
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
                    <BlogText>
                        These details make two offers comparable. Provider size, location, or a generic market average does not prove whether a quote is fair for your scope. Seven written details do the work: the exact inventory, the named deliverables and exclusions, the acceptance tests, the revision and change-order terms, the payment and ownership terms, the support definition, and the third-party costs sitting outside the fee.
                    </BlogText>
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
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
