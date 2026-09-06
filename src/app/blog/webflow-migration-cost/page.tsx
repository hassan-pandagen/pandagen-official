import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, Database, FileCode2, ListChecks } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "webflow-migration-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Webflow Migration Cost 2026: What Leaving Webflow Costs";
const description =
    "What it costs to move OFF Webflow, not onto it. Price the migration from the actual pages, CMS, exports, forms, localization, integrations, SEO, acceptance and operating scope, including 50 to 100 page sites.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Webflow migration cost",
        "migrate Webflow to Next.js",
        "Webflow to custom website cost",
        "Webflow migration agency",
        "50 page Webflow migration",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-25",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/webflow-migration-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Webflow pricing", url: "https://webflow.com/pricing" },
    { name: "Webflow site plans", url: "https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan" },
    { name: "Webflow code export", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Webflow CMS import and export", url: "https://help.webflow.com/hc/en-us/articles/33961290794771-How-do-I-import-content-into-the-Webflow-CMS" },
    { name: "Webflow exported forms", url: "https://help.webflow.com/hc/en-us/articles/33961341546899-Collect-form-submissions-on-exported-sites" },
    { name: "Webflow User Accounts sunset", url: "https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset" },
    { name: "Webflow feature sunsets and deprecations", url: "https://help.webflow.com/hc/en-us/articles/36046081578515-Feature-sunsets-deprecations" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-25",
            dateModified: "2026-08-19",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Webflow", "Webflow code export", "Website migration", "Content management systems", "URL redirection", "Technical SEO", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            image: ogImageUrlForPath(`/blog/${postId}`),
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Webflow",
            keywords: ["Webflow migration cost", "Webflow code export limits", "Webflow migration cost 50 to 100 pages", "factors that increase Webflow migration cost"],
            wordCount: 3831,
            timeRequired: "PT19M",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Webflow", sameAs: ["https://en.wikipedia.org/wiki/Webflow"] },
                { "@type": "Thing", name: "Data migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "Webflow migration cost" },
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
                { "@type": "ListItem", position: 3, name: "Webflow migration cost", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrlForPath(`/blog/${postId}`) },
            datePublished: "2026-03-25",
            dateModified: "2026-08-19",
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
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

export default function WebflowMigrationCostPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-5xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Webflow migration cost")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Webflow migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Webflow Migration Cost: <span className="italic text-cognac">Scope, Tiers and Evidence</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Moving a site off Webflow onto a custom build starts at $1,500 with PandaCodeGen, $3,500 for a larger
                            marketing site, and $5,000 to $10,000 where templates, CMS or integrations multiply. Those
                            are our prices, not a market average. What decides which one you land in is rarely page
                            count. It is how many distinct templates hide behind those pages, how your CMS collections
                            reference each other, which features Webflow will not export at all, which systems have to
                            keep talking to each other afterwards, how the URLs get mapped so the search traffic
                            survives, and what you have to see before you sign it off.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Every Webflow figure on this page was re-checked against Webflow&apos;s own pricing page and help centre on August 2, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 25, 2026" readTime="12 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "PandaCodeGen's public planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.",
                                "For a 50 to 100 page site we quote after sorting out how many templates you really have and tidying the content, not by multiplying one page price by 100.",
                                "Webflow's code export gives you the front end, not the whole application. Your CMS, store, forms, search, other languages and anything behind a login all need separate work.",
                                "The signed scope is where the final price, the schedule, who owns what, how you sign it off, support and refund terms all live.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: FileCode2, title: "Pages", body: "How many templates you really have, not how many pages." },
                            { icon: Database, title: "Systems", body: "Your CMS, forms, search, store, logins and anything they connect to." },
                            { icon: ListChecks, title: "Acceptance", body: "How you sign it off: content is right, it works, it ranks, people can use it, it is fast." },
                            { icon: Calculator, title: "Operation", body: "What you pay providers, plus support and your own team's time." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="which-direction">Which move are you actually making?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            This page prices moving off Webflow onto a custom build. Two different jobs get called a
                            &ldquo;Webflow migration&rdquo; and they do not cost the same. Rebuilding an existing site
                            into Webflow is a build on a new platform. Moving off Webflow onto code you own is the one
                            with real engineering in it, because the CMS, forms, search, localization and anything
                            gated do not transfer, they get reproduced, and the URLs have to be mapped so the search
                            traffic survives.
                        </BlogText>
                    </div>
                    <BlogText>
                        This is also why published Webflow migration ranges look so inconsistent. A range that mixes a
                        rebuild into Webflow with a replatform off Webflow is describing two jobs with one number. For
                        the same distinction across every platform we work with, see our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={sourceLinkClass}>website migration cost guide</Link>.
                    </BlogText>

                    <BlogHeader>The four planning tiers for a Webflow migration</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four tiers, and the column that decides which one you land in is the last one: what can move it. A Webflow migration climbs a tier when the CMS reference graph gets complicated, when something has to be rebuilt because Webflow will not export it, or when more systems have to keep talking to each other after launch. It rarely climbs because there are more pages.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[920px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Tier</th><th className="p-4">Starting point</th><th className="p-4">Potential fit</th><th className="p-4">What can move it</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Starter</td><td className="p-4">$1,500</td><td className="p-4">Small, well-defined migration with limited templates and integrations</td><td className="p-4">CMS, content cleanup, forms, redirects and custom behavior</td></tr>
                                <tr><td className="p-4 font-bold">Growth</td><td className="p-4">$3,500</td><td className="p-4">Larger marketing site or migration with structured content</td><td className="p-4">Design change, complex CMS, analytics, localization and integrations</td></tr>
                                <tr><td className="p-4 font-bold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">Multi-template, integration-heavy or higher-risk migration</td><td className="p-4">Commerce, user systems, custom applications, data and governance</td></tr>
                                <tr><td className="p-4 font-bold">Custom</td><td className="p-4">Scoped separately</td><td className="p-4">Requirements outside the standard tiers</td><td className="p-4">Program size, compliance, multiple markets, complex data or ongoing team</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="warning" label="These are PandaCodeGen planning tiers">
                        They are not market medians, paid-project receipts, competitor quotes or a promise that every
                        site fits a tier. A proposal is valid only for its written scope and date.
                    </InsightBox>
                    <BlogText>
                        The same tiers are set out with their inclusions on the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>, and the delivery process
                        behind them is described on our{" "}
                        <Link href="/services/webflow" className={sourceLinkClass}>Webflow migration service page</Link>.
                        If this article and the pricing page ever disagree, the pricing page is correct.
                    </BlogText>

                    <BlogHeader id="why-ranges-vary">Why published Webflow migration ranges span more than 10x</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Search this and you will be told a Webflow migration costs somewhere between a few
                            thousand dollars and the high five figures. That range is real, and it is useless,
                            because it averages four different jobs into one number. A code export dropped onto new
                            hosting, rebuilding the same thing, rebuilding with a new content structure, and moving platform
                            that also changes what the site does are not variations in size. They are different
                            projects, and only the last two are affected much by page count at all.
                        </BlogText>
                    </div>
                    <BlogText>
                        Three things collapse the range to something you can plan against, and none of them is
                        the number of URLs. How many genuinely distinct templates and states exist, as opposed to
                        how many pages use them. How much of the content moves by export and how much has to be
                        rebuilt by hand, which is decided by what Webflow will and will not hand you. And how many
                        connected systems have to keep working on the other side. Price those three and the quote
                        stops being a range.
                    </BlogText>
                    <BlogText>
                        One line worth adding to the recurring column while you are here: Webflow bills Workspace
                        seats separately from Site plans, so the cost of the people who edit the site is not
                        included in the hosting figure most comparisons quote. Read the current seat pricing from
                        Webflow&apos;s own pricing page for your own team size rather than from a summary, including
                        this one.
                    </BlogText>

                    <BlogHeader id="fifty-to-hundred">Webflow migration cost for a 50 to 100 page website</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Most sites this size land in our Growth or Scale tier, so $3,500 to $10,000, and which end
                            depends on template count rather than URL count. Fifty URLs can be five templates repeated
                            with different content, or fifty unique layouts with their own interactions, and those are
                            not the same job. Count templates before you budget.
                        </BlogText>
                    </div>
                    <BlogText>
                        In Webflow&apos;s own vocabulary the unit that costs money is the Collection, not the Collection
                        item. A Collection needs its fields defined, its Collection page template built, its Collection
                        lists placed and its reference fields wired to whatever else points at it. That work happens
                        once. The three hundred posts inside it are data and travel with the import. It is why a blog, a
                        case-study library and a team directory can cost more between them than four hundred pages
                        sitting inside any one of them, and why pricing per page measures the wrong thing in both
                        directions.
                    </BlogText>
                    <BlogText>
                        Build a route inventory that assigns every URL to a template, content
                        source, language, canonical, redirect disposition and acceptance test. Normalize repeated
                        patterns before estimating.
                    </BlogText>
                    <BlogList
                        items={[
                            "Static pages grouped by shared layout and component coverage.",
                            "Your CMS collections, the fields in each, how they reference one another, the slugs, and how many items there are.",
                            "Assets, alt text, video, downloads and image transformations.",
                            "Forms, notifications, spam controls, file uploads and historical submissions.",
                            "Search, gated content, ecommerce, localization and custom scripts.",
                            "Metadata, canonicals, structured data, internal links and redirects.",
                            "Review rounds, content owners, approvals and launch dependencies.",
                        ]}
                    />
                    <BlogText>
                        A 50 to 100 page site can fit a standard tier when it collapses into a small set of clean
                        templates. It can also exceed Scale when pages are unique, content is inconsistent or multiple
                        business systems must be replaced. The inventory, not the URL count alone, decides.
                    </BlogText>

                    <BlogHeader id="enterprise">Enterprise Webflow migration pricing</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Enterprise Webflow work carries two price tags and they are set in different places. Webflow
                            publishes the platform side: Team is $2,500/mo on an annual contract, and Enterprise is
                            quoted on request with no figure published anywhere on webflow.com, read August 2, 2026. The
                            migration side is not published by anyone, ours included, because at this size the cost is
                            governance rather than pages. Our Scale tier starts at $5,000 to $10,000 and enterprise
                            programs are scoped separately against the workstreams below.
                        </BlogText>
                    </div>
                    <BlogText>
                        Enterprise work adds governance, not just pages: who someone is, what they are allowed to do, other languages,
                        security review, legal approval, design-system ownership, multiple repositories or sites,
                        deployment environments, release management, observability, incident response and procurement.
                        These requirements should be priced as explicit workstreams with named acceptance evidence.
                        Where the target site is closer to an application than a brochure, that work sits under{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom engineering</Link>{" "}
                        rather than a standard migration tier.
                    </BlogText>

                    <BlogHeader id="cost-factors">What factors increase the cost of a Webflow migration project?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Six things move a Webflow migration up a tier: the number of genuinely distinct templates,
                            the shape of the CMS reference graph, anything Webflow will not export (ecommerce,
                            localization, search, gated content), the integrations that have to keep working on launch
                            day, the state of the content itself, and the number of people who have to approve it. Page
                            count is the weakest predictor on that list.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "More unique templates, components and responsive states.",
                            "CMS reference graphs, rich text embeds, localized fields and inconsistent content.",
                            "Ecommerce catalog, checkout, orders, subscriptions, tax, fraud and customer accounts.",
                            "Forms, search, membership, personalization, experimentation and custom code.",
                            "CRM, marketing automation, analytics, consent and advertising integrations.",
                            "New information architecture, visual redesign, copywriting or asset production.",
                            "Accessibility remediation and regulated privacy or security requirements.",
                            "Compressed schedules, delayed content, additional reviewers or unclear decision rights.",
                        ]}
                    />

                    <BlogText>
                        One of those deserves pulling out, because it is the most common reason two quotes for the
                        &ldquo;same&rdquo; site differ by more than double: whether you are reproducing the current
                        design or changing it. A visual replica is an engineering job with a fixed reference to test
                        against, so every page has a right answer both sides can see. A redesign delivered inside the
                        same project adds discovery, design rounds, copy decisions and approvals, and it removes the
                        reference that made acceptance objective. Both are legitimate work. Buying them as one line
                        without saying which you mean is what produces the argument at sign-off, so decide before you
                        brief rather than during review.
                    </BlogText>

                    <BlogHeader>What Webflow actually exports</BlogHeader>
                    <BlogText>
                        Webflow&apos;s current
                        {" "}<a href="https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>code-export documentation</a>
                        {" "}says paid Workspace plans can export HTML, CSS, JavaScript and assets, and states directly
                        that Site plans do not include the ability to export your site&apos;s code. That catches people
                        out: paying Webflow monthly for hosting does not, on its own, entitle you to the code. It also
                        says the exported code excludes CMS databases and functionality, User Accounts, ecommerce
                        databases and functionality, localized content beyond the primary locale, code components,
                        password protection, form processing, existing form submissions, reCAPTCHA elements inside
                        forms and site search. Collection lists render their empty state and Collection pages show
                        nothing bound to a Collection field. User Accounts is a
                        particular trap here because the product itself was withdrawn; we walk through the consequences in{" "}
                        <Link href="/blog/webflow-user-accounts-sunset-date-2026" className={sourceLinkClass}>our guide to the Webflow User Accounts sunset</Link>.
                    </BlogText>
                    <BlogText>
                        CMS collections, ecommerce collections and User Accounts can each be exported separately as
                        CSV, localized Collection content included. That is data, not a working target application. The migration still needs schemas, relationships, media, transformations,
                        validation, preview and publishing behavior.
                    </BlogText>

                    <BlogHeader id="content-migration">What does it actually cost to move the content?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Usually far less than a per-page rate implies, and you can prove it on your own content in
                            about twenty minutes. Published estimates for a Webflow migration often price content at $15
                            to $50 per page, which assumes somebody retypes it. Webflow&apos;s own CMS import
                            documentation says the opposite is normal: CSVs exported from other content management
                            systems &ldquo;like WordPress are already structured in a way that&apos;s compatible with
                            Webflow&rdquo;, hundreds or thousands of items import in one pass, and CSV values map to
                            reference fields during that import. Content that imports cleanly should not be billed by
                            the page.
                        </BlogText>
                    </div>
                    <BlogText>
                        A per-page rate becomes honest only where the import genuinely breaks, and Webflow names those
                        cases itself. Open your own export and check these six columns before you accept any content
                        line in a quote. Read on August 2, 2026 against{" "}
                        <a href="https://help.webflow.com/hc/en-us/articles/33961290794771-How-do-I-import-content-into-the-Webflow-CMS" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Webflow&apos;s CMS import article</a>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Rich text has to arrive as HTML. A body column exported as plain text, or as another editor's markup, is rework on every single row.",
                            "Image fields need a direct URL ending in an image extension, and Webflow tells you to run that column through a bulk URL checker first, because a broken link cannot be mapped at all.",
                            "Video fields accept YouTube and Vimeo URLs only. Self-hosted video does not map, so those pages get rebuilt by hand.",
                            "Number fields reject $100, 100 USD and 10,000. Currency symbols, unit labels and thousands separators have to be stripped before the column will map.",
                            "File fields take no imported data whatsoever. Every PDF, spec sheet and download is manual work, whatever the page count says.",
                            "Option fields cap at 100 distinct values, so a sprawling free-text category column has to be normalized before it can become a field.",
                        ]}
                    />
                    <BlogText>
                        The same article carries the trap that catches multilingual sites: an exported CSV contains only
                        the items from the locale you are currently viewing. A site in four languages is four exports and
                        four import passes, which is a scope question rather than a page-count question. If every column
                        above passes, ask for content to be priced as one scripted pass instead of per page. If several
                        fail, you now know which ones, and that conversation is about specifics rather than a haggle.
                    </BlogText>

                    <BlogHeader>What a professional migration should include</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Nine workstreams, and the test of a quote is whether it names them rather than whether it is expensive. Three get assumed most often: the functional states nobody demos, the accessibility checks, and the rollback plan. A quote listing deliverables but no acceptance evidence has priced the building and not the proving.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Discovery, inventory, dependency map and accepted target architecture.",
                            "Page, component, CMS, content, asset and integration migration.",
                            "Functional states including errors, validation, empty states and permissions.",
                            "Works properly on the phones, tablets and browsers you agreed.",
                            "Accessibility checks against the agreed standard.",
                            "Analytics, consent, tag and conversion-event validation.",
                            "SEO inventory, rendered-output checks, URL mapping, redirects and sitemap.",
                            "Security configuration, credential handling and account ownership.",
                            "Proof it was tested, a way to undo it, the launch itself, monitoring afterwards, handover and support.",
                        ]}
                    />

                    <BlogQuote>
                        An exclusion is not a problem when it is visible before you sign. It is a problem when you find it in an invoice.
                    </BlogQuote>

                    <BlogHeader>What may not be included in a standard quote</BlogHeader>
                    <BlogText>
                        Ask what is not included, in writing. Things usually priced separately include new brand work,
                        photography, video, net-new copy, data cleansing, custom product development, complex
                        integrations, translations, legal or compliance advice, paid vendor plans, email and DNS
                        coordination, and ongoing growth work. An exclusion is not a problem when it is visible before signing. The URL mapping and
                        redirect workstream is the one most often assumed rather than quoted, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what a migration does to your search rankings</Link>{" "}
                        explains why it deserves its own line.
                    </BlogText>

                    <BlogHeader>How to compare migration quotes without calling one padded</BlogHeader>
                    <BlogText>
                        A higher quote may include more work or a different risk allocation. Normalize each proposal
                        line by line before comparing price. Do not infer padding, overcharging or equivalent scope
                        without the underlying statements of work.
                    </BlogText>
                    <BlogList
                        items={[
                            "Same route and template inventory.",
                            "Same design and content responsibilities.",
                            "Same CMS, data, form, search and integration requirements.",
                            "Same SEO, accessibility, security and performance acceptance.",
                            "Same provider fees, support period, warranty and maintenance.",
                            "Same ownership, licensing, account and handoff terms.",
                        ]}
                    />

                    <BlogHeader>Who should you hire?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four delivery models, and the column worth reading is the third: what stays your problem in each case. An independent specialist leaves you owning project management and continuity. A studio or an agency absorbs that and charges you for it. An internal team owns all of it, including the cost of whatever they stop doing while the migration runs.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Model</th><th className="p-4">Useful when</th><th className="p-4">Buyer must own or verify</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Independent specialist</td><td className="p-4">Scope is narrow and internal direction is strong</td><td className="p-4">Design, project management, QA, continuity and release</td></tr>
                                <tr><td className="p-4 font-bold">Migration studio</td><td className="p-4">A defined site needs accountable end-to-end delivery</td><td className="p-4">Relevant evidence, capacity, terms and handoff</td></tr>
                                <tr><td className="p-4 font-bold">Full-service agency</td><td className="p-4">Brand, content, marketing and engineering must move together</td><td className="p-4">Named team, workstream coordination and comparable scope</td></tr>
                                <tr><td className="p-4 font-bold">Internal team</td><td className="p-4">The organization has product, design and engineering capacity</td><td className="p-4">Opportunity cost, migration expertise and launch ownership</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Whichever model you pick, ask to see finished builds rather than a capability list. Ours are
                        documented in our{" "}
                        <Link href="/work" className={sourceLinkClass}>project case studies</Link>, and the people who do
                        the work are named on our{" "}
                        <Link href="/about" className={sourceLinkClass}>about page</Link>.
                    </BlogText>

                    <BlogHeader id="webflow-hosting-cost">How much does it cost to host a Webflow site?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Read on Webflow&apos;s own pricing page on August 2, 2026: Site plans are Starter at $0,
                            Basic at $15/mo billed yearly and Premium at $25/mo billed yearly, all quoted per site in
                            USD before tax. Basic is described as being for &ldquo;simple sites that don&apos;t need a
                            CMS&rdquo; and carries 300 static pages and 10 GB of bandwidth, so a single Collection puts
                            you on Premium. Platform plans start at Team, $2,500/mo on an annual contract, with
                            Enterprise quoted on request. Selling adds a separate Ecommerce plan: Standard $29/mo with a
                            2% transaction fee, Plus $74/mo and Advanced $212/mo at 0%. Add-ons sit on top and are
                            priced by usage: Optimize from $299/mo, Analyze from $9/mo, Localize from $9/mo.
                        </BlogText>
                    </div>
                    <BlogText>
                        That is the platform line, and it is the smaller half of the comparison. Leaving Webflow does not
                        mean zero recurring cost either. Build the target budget from hosting,
                        bandwidth, builds, CMS, database, forms, email, search, analytics, monitoring, backups,
                        security, domains, support and internal time. Use current provider terms and a realistic usage
                        scenario. Free allowances can change and may not fit commercial operation. Our breakdown of{" "}
                        <Link href="/blog/webflow-true-cost" className={sourceLinkClass}>what Webflow costs once every line is counted</Link>{" "}
                        sets out the categories to carry across, and{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className={sourceLinkClass}>what Next.js hosting actually costs to run</Link>{" "}
                        does the same for the target side.
                    </BlogText>

                    <BlogText>
                        The two models do not carry the same cost lines at all, which is why holding one monthly number
                        against another tells you very little. Build both columns from your own current invoices.
                        Webflow reorganizes this lineup more often than most vendors, so re-read every figure above on
                        the day you budget, with the monthly and yearly toggle set the way you actually intend to pay.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Cost line</th>
                                    <th className="p-4">On Webflow</th>
                                    <th className="p-4">On a custom Next.js build</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Platform / hosting</td><td className="p-4">Site plan, plus a workspace seat cost if more than one person edits</td><td className="p-4">Host plan; can start on a free allowance but commercial use usually needs a paid tier</td></tr>
                                <tr><td className="p-4 font-bold">CMS</td><td className="p-4">Premium is the cheapest plan carrying the full CMS on a custom domain; Basic is described as being for simple sites that do not need a CMS, and the free Starter plan&apos;s limited CMS sits on a webflow.io subdomain</td><td className="p-4">Separate service or self-hosted; priced by documents, seats or usage</td></tr>
                                <tr><td className="p-4 font-bold">Ecommerce</td><td className="p-4">Plan upgrade where applicable</td><td className="p-4">Commerce backend or payment provider fees, billed separately</td></tr>
                                <tr><td className="p-4 font-bold">Forms and email</td><td className="p-4">Included from the paid Site plans up; the free plan is capped at 50 submissions</td><td className="p-4">Form handling and transactional email provider</td></tr>
                                <tr><td className="p-4 font-bold">Bandwidth / builds</td><td className="p-4">Included within plan allowances</td><td className="p-4">Metered above the plan allowance; depends on traffic and build frequency</td></tr>
                                <tr><td className="p-4 font-bold">Search, analytics, monitoring</td><td className="p-4">Native or third-party add-ons</td><td className="p-4">Chosen per tool; several have usable free tiers</td></tr>
                                <tr><td className="p-4 font-bold">Maintenance</td><td className="p-4">Platform handles updates and security</td><td className="p-4">Yours or your vendor&apos;s: dependency updates, patching, monitoring</td></tr>
                                <tr><td className="p-4 font-bold">Exit cost</td><td className="p-4">Export is partial; some features do not come with you</td><td className="p-4">You hold the source, so moving host is a redeploy</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="The line people forget">
                        Maintenance. On Webflow it is bundled into the plan price and effectively invisible. On a custom
                        build it is real work that either you do, or you pay someone to do, or nobody does. A comparison
                        that ignores it will always make custom look cheaper than it is.
                    </InsightBox>
                    <BlogText>
                        If you are still deciding whether to move at all rather than how much it costs,{" "}
                        <Link href="/blog/webflow-vs-custom-website" className={sourceLinkClass}>Webflow versus a custom website</Link>{" "}
                        compares the two operating models directly, and{" "}
                        <Link href="/blog/leaving-webflow-2026" className={sourceLinkClass}>why teams are leaving Webflow in 2026</Link>{" "}
                        covers the triggers that usually start the conversation.
                    </BlogText>

                    <BlogHeader>Measure performance separately from rankings</BlogHeader>
                    <BlogText>
                        Webflow has no universal PageSpeed ceiling, and <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">custom code</Link> has no automatic 90-plus result.
                        Test representative routes under recorded mobile and desktop conditions and inspect field Core
                        Web Vitals where available. Google says good Core Web Vitals support page experience, while
                        relevance and many other signals still affect search. Do not convert a lab-score change into a
                        promised ranking or revenue result. For what the individual metrics mean and how to read them,
                        see{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>{" "}
                        and{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={sourceLinkClass}>how site speed relates to search performance</Link>.
                    </BlogText>

                    <BlogHeader>Treat availability as a requirement, not an outage anecdote</BlogHeader>
                    <BlogText>
                        An incident count taken over a fixed window is volatile evidence and cannot settle a migration
                        decision on its own. If availability matters, define the required service level, dependencies,
                        monitoring, backup, recovery objective, incident response and remedy for both current and
                        target systems.
                    </BlogText>

                    <BlogHeader>When does a Webflow migration pay for itself?</BlogHeader>
                    <BlogText>
                        There is no universal payback period. Compare the migration and ongoing cost with current
                        invoices, support, internal work and measurable business constraints. Model low, central and
                        high scenarios. After release, compare actual costs and outcomes without attributing every
                        change to the migration. For the cross-platform view of how these budgets are built, see our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={sourceLinkClass}>website migration cost guide</Link>.
                    </BlogText>

                    <BlogHeader>How to get an accurate quote</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Spend twenty minutes counting before you brief anybody and the quotes come back
                            comparable instead of as a range. Everything below is already inside your own Webflow
                            account. A provider holding these seven things can price the work; one without them is
                            estimating, and the estimate is what turns into a variation later.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Open the Pages panel and count the pages, then count them again by layout. The second number is the one that prices the job.",
                            "List every CMS Collection, the fields in each and the reference fields between them. The Collection is the cost unit, not the items inside it.",
                            "Note every third-party integration the site talks to, and mark which have to work on launch day rather than the week after.",
                            "Say whether anything is gated, localized, searchable or sold, because those are the four things Webflow will not export.",
                            "Name the content owners, the approvers and how many review rounds the schedule assumes.",
                            "State who should own the repository, hosting, CMS and domain at the end, and give read-only access or exports so nobody estimates blind.",
                            "Ask for assumptions, exclusions, milestones, acceptance evidence, change control and support in the proposal itself, with vendor fees and third-party licenses separated from the agency price.",
                        ]}
                    />

                    <BlogHeader>PandaCodeGen commercial terms</BlogHeader>
                    <BlogText>
                        A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. A refund is tied to
                        failure to deliver the signed scope, not a change of preference after work begins. Starter
                        includes 15 business days of launch defect support; Growth and Scale include 30 business days.
                        Custom deliverables transfer after full payment under the contract. PandaCodeGen retains
                        reusable tools and pre-existing code, and third-party components keep their licenses.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader>Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

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

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get your Webflow migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory templates, CMS, exports, integrations and SEO risk before proposing a
                            tier. Extra pages or features can be discussed against the same written scope.
                        </p>
                        <QuoteModalButton cta="webflow_migration_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
