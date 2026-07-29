import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Code2, FileArchive, LayoutTemplate, Users } from "lucide-react";
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

const postId = "webflow-vs-custom-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Webflow vs Custom Website in 2026: A Four-Factor Decision";
const description =
    "Choose between Webflow and a custom website using editing, requirements, ownership and lifecycle responsibility, with current export, pricing, SEO and performance limits.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Webflow vs custom website",
        "custom code vs Webflow",
        "Webflow alternative",
        "should I leave Webflow",
        "Webflow migration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-27",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/webflow-vs-custom-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Webflow pricing", url: "https://webflow.com/pricing" },
    { name: "Webflow site plans", url: "https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan" },
    { name: "Webflow content editor", url: "https://help.webflow.com/hc/en-us/articles/33961251014931-Edit-site-content-as-a-content-editor" },
    { name: "Webflow code export", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Webflow CMS", url: "https://help.webflow.com/hc/en-us/articles/33961307099027-Intro-to-the-Webflow-CMS" },
    { name: "Google site moves", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    { name: "Google Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-27",
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
            articleSection: "Website platforms",
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

export default function WebflowVsCustomWebsitePage() {
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
                            { label: "Webflow vs custom", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website platforms</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Webflow vs Custom Website <span className="italic text-cognac">A Four-Factor Decision</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Webflow combines visual design, CMS and managed hosting. Custom code gives an organization
                            more implementation control and more operating responsibility. Choose from the actual
                            editing, feature, ownership and lifecycle requirements, not a platform score.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Webflow and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 27, 2026" readTime="13 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Choose Webflow when visual production and a managed platform fit the required workflows.",
                                "Optimize Webflow when the platform fits but the implementation is slow or difficult.",
                                "Choose custom when required behavior, data, portability or release control justifies engineering ownership.",
                                "Price both options with the same scope and operating period.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Users, title: "People", body: "Who designs, edits, approves and operates the site?" },
                            { icon: LayoutTemplate, title: "Workflow", body: "How do pages, CMS and campaigns ship?" },
                            { icon: Code2, title: "Control", body: "Which experiences and integrations are required?" },
                            { icon: FileArchive, title: "Exit", body: "What data, code, accounts and licenses move?" },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>The four-factor decision framework</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Factor</th><th className="p-4">Webflow question</th><th className="p-4">Custom question</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Editing</td><td className="p-4">Do visual design and current editor roles fit the team?</td><td className="p-4">Which CMS and preview workflow will replace them?</td></tr>
                                <tr><td className="p-4 font-bold">Requirements</td><td className="p-4">Can native features, code components or supported apps deliver the need?</td><td className="p-4">Does the requirement justify custom product work?</td></tr>
                                <tr><td className="p-4 font-bold">Control</td><td className="p-4">Are platform access, export and provider boundaries acceptable?</td><td className="p-4">Who owns code, data, accounts, security and release?</td></tr>
                                <tr><td className="p-4 font-bold">Lifecycle</td><td className="p-4">Do current plans, add-ons and managed operation fit?</td><td className="p-4">Can the organization fund and maintain the providers and code?</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <InsightBox variant="info" label="How to read the four factors">
                        Take them one at a time and note which way each one points. When three or four point the same
                        way, that is the answer, and switching against it adds cost without solving anything. When they
                        split evenly, look at which factor is moving fastest: a team about to grow, a content operation
                        about to get busier or a set of requirements about to expand tells you where you will be in a
                        year, which is the horizon the decision actually has to survive.
                    </InsightBox>

                    <BlogHeader>1. Editing and design workflow</BlogHeader>
                    <BlogText>
                        Webflow&apos;s visual environment can let designers build without handing every layout change to
                        an engineer. Its current content-editor role can update copy, assets, CMS content and selected
                        page settings while protecting the site structure. A custom site can offer a structured CMS,
                        preview and reusable components, but layout changes may require development. Test the real
                        publishing workflow with the people who will use it.
                    </BlogText>

                    <BlogHeader>2. Features and integrations</BlogHeader>
                    <BlogText>
                        Inventory forms, search, localization, ecommerce, membership, personalization, analytics,
                        consent, CRM and custom applications. Webflow has native features, apps, custom code and React
                        code components, but support and plan requirements differ. Custom code can implement more
                        specific behavior, while transferring testing, security and maintenance responsibility. Where a
                        requirement turns into application work rather than a page, it belongs under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">custom engineering</Link>.
                    </BlogText>

                    <BlogHeader>3. Ownership, portability and exit</BlogHeader>
                    <BlogText>
                        Webflow can transfer sites between Workspaces and paid Workspaces can export HTML, CSS,
                        JavaScript and assets. The export is not a full portable application: current documentation
                        excludes working CMS, ecommerce, User Accounts, localized content beyond the primary locale,
                        forms, search, password protection and code components. A custom target should still define
                        repository, accounts, data export, pre-existing code and third-party licenses in writing. We
                        take the wider question apart in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>, and
                        one dependency worth checking early is covered in our guide to the{" "}
                        <Link href="/blog/webflow-user-accounts-sunset-date-2026" className="text-cognac hover:underline">Webflow User Accounts timeline</Link>.
                    </BlogText>
                    <InsightBox variant="warning" label="Ownership wording">
                        Client content remains the client&apos;s. Transfer of custom deliverables follows full payment
                        and the signed agreement. PandaCodeGen retains reusable tools and pre-existing code, and
                        third-party licenses remain in force.
                    </InsightBox>

                    <BlogHeader>4. Lifecycle cost and operating responsibility</BlogHeader>
                    <BlogText>
                        Reconcile the current Webflow Website and Workspace plans, add-ons, external tools, commerce
                        fees and internal time. Then calculate the custom alternative&apos;s design, migration, hosting,
                        CMS, forms, email, database, search, monitoring, security, support and engineering. Free
                        allowances are not a permanent commercial-cost promise. Our method for reconciling the platform
                        side is in{" "}
                        <Link href="/blog/webflow-true-cost" className="text-cognac hover:underline">building Webflow cost from the invoice</Link>, and
                        the transition side is in{" "}
                        <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline">what a Webflow migration involves</Link>.
                    </BlogText>
                    <BlogText>
                        Two lifecycle details are worth pricing explicitly. First, editor seats: count the people who
                        need to log in and check how each option bills them, because a platform that charges per seat
                        and a self-operated CMS that does not will diverge as the team grows. Second, plan ceilings:
                        managed plans commonly cap CMS items, form submissions and bandwidth, and a custom build does
                        not remove those limits so much as move them to the hosting and service contracts you choose.
                        Neither option is unlimited. Know which ceiling you are buying and what happens when you reach
                        it.
                    </BlogText>
                    <BlogText>
                        Budget shape matters as much as budget size. A managed platform trades a low entry cost for a
                        bill that never stops; a custom build trades a larger one-off cost for a smaller recurring one.
                        If cash flow is tight this quarter, preferring the smaller monthly commitment is a legitimate
                        business decision rather than a failure of nerve, and it is worth saying out loud in the
                        comparison instead of being argued away by a spreadsheet.
                    </BlogText>

                    <BlogHeader>What a custom website can give you</BlogHeader>
                    <BlogList
                        items={[
                            "Architecture designed around the accepted experience and data requirements.",
                            "Choice of CMS, deployment, providers and release process.",
                            "Repository and account control under the agreed operating model.",
                            "A documented path to replace individual vendors or another development team.",
                            "Custom integrations, workflows and measurement when the business case supports them.",
                        ]}
                    />
                    <BlogText>
                        Those are potential controls, not automatic outcomes. A custom site can still be slow,
                        inaccessible, insecure, expensive or difficult to edit. Acceptance and operation must be
                        designed and tested. For a sense of what we scope and hand over,{" "}
                        <Link href="/work" className="text-cognac hover:underline">browse our project work</Link>.
                    </BlogText>

                    <BlogHeader>Performance and SEO</BlogHeader>
                    <BlogText>
                        Webflow does not have a universal 55-to-75 PageSpeed ceiling, and custom code does not guarantee
                        90-plus. Measure representative routes with field{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals</Link>{" "}
                        where available and repeated
                        mobile and desktop lab tests. Google says Core Web Vitals support page experience, while
                        relevance and other signals still matter. A faster implementation does not guarantee rankings.
                    </BlogText>
                    <BlogText>
                        If the move changes URLs, follow Google&apos;s site-move guidance: inventory URLs, keep them
                        stable where practical, map relevant redirects, update internal links and canonicals, publish
                        sitemaps and monitor Search Console. Rankings, indexing and timing remain controlled by search
                        engines. We answer the underlying worry directly in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">will migrating hurt my SEO</Link>.
                    </BlogText>

                    <BlogHeader>Match the business profile to the model</BlogHeader>
                    <BlogList
                        items={[
                            "Webflow: visual marketing production is central and supported platform features cover the requirements.",
                            "Webflow optimization: the platform fits, while the current implementation has measured problems.",
                            "Hybrid: Webflow remains the marketing surface and custom systems handle bounded application workflows.",
                            "Custom migration: portability, data, experience, integration or release needs exceed accepted platform boundaries.",
                        ]}
                    />
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Business profile</th><th className="p-4">Technical capacity</th><th className="p-4">Content operation</th><th className="p-4">Usually points to</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Solo consultant, brochure site</td><td className="p-4">None in-house</td><td className="p-4">Occasional, self-edited</td><td className="p-4">Webflow</td></tr>
                                <tr><td className="p-4 font-bold">Small design-led agency</td><td className="p-4">Design-strong, code-light</td><td className="p-4">Frequent visual iteration</td><td className="p-4">Webflow</td></tr>
                                <tr><td className="p-4 font-bold">Service business running content SEO</td><td className="p-4">None in-house, has a development relationship</td><td className="p-4">Frequent and structured</td><td className="p-4">Custom</td></tr>
                                <tr><td className="p-4 font-bold">Product marketing site tied to an app</td><td className="p-4">In-house engineering</td><td className="p-4">Must read product or API data</td><td className="p-4">Custom</td></tr>
                                <tr><td className="p-4 font-bold">Commerce brand with a large catalogue</td><td className="p-4">Varies</td><td className="p-4">High-volume structured records</td><td className="p-4">Custom or hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Those are patterns, not rules. A solo consultant with a technical background and serious search
                        ambitions can reasonably choose custom, and an agency that values design velocity can reasonably
                        stay on Webflow past the row that describes it. Decide from the four factors, not from the label
                        on the business.
                    </BlogText>

                    <BlogHeader>When Webflow is still the right choice</BlogHeader>
                    <BlogText>
                        Webflow can be the better choice when designers need direct visual control, the CMS model fits,
                        the required features are supported, current cost is acceptable, and the organization prefers
                        managed hosting and platform operation. Choosing custom solely because it sounds more modern is
                        not a business case.
                    </BlogText>

                    <BlogHeader>If the evidence points toward custom, what happens next?</BlogHeader>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li>Inventory pages, CMS, forms, assets, scripts, integrations and owners.</li>
                        <li>Define target editing, account, data, architecture and operating requirements.</li>
                        <li>Preserve useful URLs and map every changed URL.</li>
                        <li>Build and migrate in parallel while the current site remains available.</li>
                        <li>Test content, function, accessibility, SEO, analytics, consent and performance.</li>
                        <li>Cut over with monitoring, rollback triggers, handoff and contract-defined support.</li>
                    </ol>
                    <BlogText>
                        That sequence is what our{" "}
                        <Link href="/services/webflow" className="text-cognac hover:underline">Webflow migration service</Link>{" "}
                        is built around, and the practical detail of the exit itself is covered in{" "}
                        <Link href="/blog/leaving-webflow-2026" className="text-cognac hover:underline">what leaving Webflow involves</Link>.
                    </BlogText>

                    <BlogHeader>PandaCodeGen commercial and acceptance terms</BlogHeader>
                    <BlogText>
                        Planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale. Standard
                        payment is 30 percent at onboarding and 70 percent on delivery. Starter includes 15 business
                        days of launch defect support; Growth and Scale include 30. A 90-plus performance target must
                        name representative pages, mobile and desktop profiles, three consecutive tests and a written
                        remedy in the accepted project terms. The tiers and what sits inside each one are set out on
                        our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>, and the wider
                        set of transition inputs is in{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">what drives migration cost</Link>.
                    </BlogText>

                    <BlogHeader>The decision that matters</BlogHeader>
                    <BlogText>
                        Choose the least complex operating model that meets the verified requirements. That may be
                        Webflow, an in-platform repair, a hybrid or a custom build. Revisit the decision when the
                        workflows, costs or constraints change.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader>Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get a Webflow fit and migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare staying, optimizing, using a hybrid and migrating against one requirement
                            set. Extra features and pages can be discussed after the inventory.
                        </p>
                        <QuoteModalButton cta="webflow_vs_custom_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
