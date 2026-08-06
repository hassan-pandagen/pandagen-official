import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Eye, Layers3, Scale, Split } from "lucide-react";
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

const postId = "website-redesign-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Website Redesign Cost in 2026: Scope, Tiers and Buyer Guide";
const description =
    "Price a same-platform website redesign by UX, templates, design system, content, implementation, testing and rollout, without relying on unsupported market averages.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "website redesign cost 2026",
        "website redesign pricing",
        "redesign vs rebuild",
        "same platform website redesign",
        "website redesign scope",
        "how much does a website redesign cost",
        "website redesign hidden costs",
        "design system cost",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-30",
        modifiedTime: "2026-08-07",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/website-redesign-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" },
    { name: "Nielsen Norman Group: A/B testing", url: "https://www.nngroup.com/articles/ab-testing/" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-04-30",
            dateModified: "2026-08-07",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Software cost analysis", "Website project scoping", "Vendor contracts", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Website pricing",
            inLanguage: "en-US",
            wordCount: 2952,
            timeRequired: "PT15M",
            about: [
                { "@type": "Thing", name: "Web design", sameAs: ["https://en.wikipedia.org/wiki/Web_design"] },
                { "@type": "Thing", name: "Design system", sameAs: ["https://en.wikipedia.org/wiki/Design_system"] },
                { "@type": "Thing", name: "A/B testing", sameAs: ["https://en.wikipedia.org/wiki/A/B_testing"] },
                { "@type": "Thing", name: "Website redesign pricing" },
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
                { "@type": "ListItem", position: 3, name: "Website redesign cost", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-04-30",
            dateModified: "2026-08-07",
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

export default function WebsiteRedesignCostPage() {
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
                            { label: "Website redesign cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website pricing</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Website Redesign Cost: <span className="italic text-cognac">Scope Before Price</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A redesign changes the experience on the current platform. Price the actual templates,
                            design system, content work, implementation, validation and rollout rather than a broad
                            market average.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed August 1, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 30, 2026" readTime="10 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.",
                                "Those are our own starting points, not a claim about the whole redesign market.",
                                "A same-platform redesign should not be compared with a platform migration or full rebuild.",
                                "Final price, review rounds, acceptance, schedule and change handling belong in the signed scope.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Eye, title: "Experience", body: "Journeys, hierarchy, accessibility and responsive behavior." },
                            { icon: Layers3, title: "System", body: "Templates, components, states and content rules." },
                            { icon: Split, title: "Rollout", body: "Direct launch, staged release or valid experiment." },
                            { icon: Scale, title: "Evidence", body: "Acceptance criteria, baselines and comparable quotes." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="cost">How much does a website redesign cost?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            We quote redesigns from $1,500 for a bounded template set, $3,500 once a reusable design system is part of the work, and $5,000 to $10,000 where content volume, integrations or a staged rollout are involved. Those are PandaCodeGen&apos;s own planning tiers rather than a market survey, and what moves a project between them is scope rather than page count.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">PandaCodeGen tier</th><th className="p-4">Starting point</th><th className="p-4">Potential fit</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Starter</td><td className="p-4">$1,500</td><td className="p-4">Small, bounded redesign with a limited template set</td></tr>
                                <tr><td className="p-4 font-bold">Growth</td><td className="p-4">$3,500</td><td className="p-4">More templates, deeper UX and a reusable design system</td></tr>
                                <tr><td className="p-4 font-bold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">Larger content, integrations, governance or staged rollout</td></tr>
                                <tr><td className="p-4 font-bold">Custom</td><td className="p-4">Scoped separately</td><td className="p-4">Applications, commerce, regulated journeys or multi-market systems</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="Why there are no market-wide bands here">
                        The table above shows PandaCodeGen&apos;s own planning tiers. We do not publish market-wide price
                        bands, hourly rate ranges or expected uplift percentages, because those figures average together
                        projects with different scopes, teams and starting points, and a number built that way is not
                        one you can plan a budget around. The rest of this page gives you a method for comparing the
                        real proposals in front of you, which is the only comparison that reflects your project.
                    </InsightBox>
                    <BlogText>
                        The same tiers are listed on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>, and the inputs that move a
                        quote between them are broken down in our{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">website cost guide</Link>.
                    </BlogText>
                    <BlogText>
                        Before comparing any two redesign quotes, check they are quoting the same project. A proposal
                        labeled redesign that also moves you to a different CMS, a different host or a different
                        framework is a rebuild, and it should be compared against rebuild proposals rather than
                        redesign ones. The reverse happens too: a quote that leaves out the design system, the content
                        work or the rollout is cheaper because it is smaller, not because it is better value.
                    </BlogText>

                    <BlogHeader id="update-vs-redesign">What does it cost to update an existing website instead?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Far less, and most people who ask for a redesign want an update. An update changes content,
                            images, a section, a color, a page or two, inside the templates you already have. It is
                            hours or days, it often sits inside a support retainer, and it needs no discovery, no design
                            round and no approval cycle. A redesign changes the templates themselves, which is why it
                            costs what it costs. <strong>Before you buy the larger thing, write down the specific
                            changes you want.</strong> If that list is items on existing pages rather than new page
                            types, you are describing an update and you should not be paying redesign prices for it.
                        </BlogText>
                    </div>
                    <BlogText>
                        There is a genuine middle case too. Restyling a design system you already own, meaning typography,
                        spacing, color and component states, refreshes every page at once without rebuilding any of them,
                        and it is a fraction of a redesign. That option only exists if the current site was built on a
                        consistent system in the first place, which is exactly what the design-system section below is
                        about, and it is the strongest argument for building one even when it costs more upfront.
                    </BlogText>

                    <BlogHeader id="how-often">How often should a website be redesigned?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            On no schedule at all. The two-to-three year rule that circulates is a sales cycle, not a
                            finding, and redesigning a site that is working is the most expensive way to change nothing.
                            Redesign when something specific is broken and you can name it: the site cannot do a thing
                            the business now needs, editors cannot ship without a developer, the brand has genuinely
                            moved, or the underlying build is unmaintainable. If none of those is true, spend the budget
                            on content and let the site keep earning.
                        </BlogText>
                    </div>
                    <BlogText>
                        The honest version of the age argument is narrower than it sounds. Sites do decay, but usually in
                        specific places rather than all over: a stack nobody patches, an accessibility standard that has
                        moved on, a checkout that no longer matches how people pay. Those are repairs with names and
                        prices. &ldquo;It looks dated&rdquo; is a real problem too, and it is a reason for a restyle
                        before it is a reason for a rebuild.
                    </BlogText>

                    <BlogHeader id="variables">The four variables to price first</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four variables set the price of a redesign, and page count is not one of them: how deep the experience work goes, how much design system you are buying, how much content has to be written or restructured, and how much delivery work sits behind the finished templates. Settle those four before anyone counts pages.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "How deep the experience work goes: researching journeys, restructuring the site, accessibility, and testing with real people.",
                            "Design-system depth: visual direction, components, states, responsive rules and documentation.",
                            "How much content work: listing what exists, rewriting it, the media, structuring it, translation, and getting it approved.",
                            "How much delivery work: the templates, integrations, analytics, testing, any experiments, the rollout, and training your team.",
                        ]}
                    />
                    <BlogText>
                        Those four variables are what carry a redesign from $1,500 to $10,000 across our own tiers, and
                        raw page count is the weakest predictor of where it lands. Ten pages using ten templates can be
                        more work than one hundred pages generated from a stable content model. Ask each provider to expose the
                        templates, components, content responsibilities and review process behind the price.
                    </BlogText>
                    <BlogText>
                        Two more inputs move the number and are easy to leave off a brief. The first is how many people
                        have to approve the design direction: one owner deciding in a single session is a different
                        project from a marketing team, a founder and an external stakeholder each needing sign-off,
                        because every additional approver adds review cycles and the chance of a late reversal. The
                        second is urgency. A compressed deadline forces parallel work streams and shortened review
                        windows, both of which cost more than the same work run at a normal pace. Be honest about the
                        real date something has to be live, which is often later than the date first quoted to us.
                    </BlogText>

                    <BlogHeader id="small-vs-midmarket">Small-business and mid-market scope</BlogHeader>
                    <BlogText>
                        A focused owner-led site may need a light journey review, a small component set and direct
                        approval. A mid-market site may add research, stakeholder workshops, more templates, a formal
                        design system, accessibility evidence, analytics continuity and a staged release. These are
                        scope differences, not automatic labels based on employee count or page count.
                    </BlogText>

                    <BlogHeader id="testing">A/B testing and staged rollout</BlogHeader>
                    <BlogText>
                        The reason to test at all is that a redesign is not automatically an improvement. A new layout
                        can bury an action that used to be obvious, and a navigation that looks cleaner can make the
                        pages people actually came for harder to reach. Nielsen Norman Group reports that{" "}
                        <a href="https://www.nngroup.com/articles/ab-testing/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">
                            only one in every seven A/B tests is a winning test
                        </a>. That figure covers design changes in general rather than redesigns specifically, but it is
                        the right expectation to carry into the project: plan to find out whether the new version is
                        better, instead of treating the question as settled because it looks better.
                    </BlogText>
                    <BlogText>
                        A valid experiment needs enough eligible traffic, a defined primary outcome, guardrails,
                        assignment logic, instrumentation and a pre-agreed decision rule. Low-traffic sites may learn
                        more from moderated tasks, prototype tests or a staged page release. Do not promise a fixed
                        uplift or treat bounce rate alone as proof that the new design is better.
                    </BlogText>

                    <BlogHeader id="project-type">Redesign vs rebuild vs migration</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            These are three different projects with three different prices, so the first job is naming which one you are actually buying. A redesign changes the experience on the platform you already have. A migration changes the platform and keeps the approved structure. A rebuild changes both, which is why it is the most expensive of the three.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Project</th><th className="p-4">Main change</th><th className="p-4">Use it when</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Redesign</td><td className="p-4">Experience and visual system</td><td className="p-4">The existing platform still satisfies the requirements</td></tr>
                                <tr><td className="p-4 font-bold">Migration</td><td className="p-4">Platform or infrastructure</td><td className="p-4">The approved structure and design can mostly remain</td></tr>
                                <tr><td className="p-4 font-bold">Rebuild</td><td className="p-4">Platform plus material site rework</td><td className="p-4">Both the foundation and experience need to change</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        Each of those paths is costed differently, so price the one you actually need. We cover{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className="text-cognac hover:underline">rebuild cost drivers</Link> and{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">migration cost drivers</Link>{" "}
                        separately, and the scope of a platform move sits on the{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress</Link>,{" "}
                        <Link href="/services/webflow" className="text-cognac hover:underline">Webflow</Link>,{" "}
                        <Link href="/services/squarespace" className="text-cognac hover:underline">Squarespace</Link> and{" "}
                        <Link href="/services/wix" className="text-cognac hover:underline">Wix</Link> migration pages.
                    </BlogText>

                    <BlogHeader id="hidden-costs">Hidden costs to put in the proposal</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            What overruns a redesign budget is rarely design. It is the redirect map nobody scoped, the content nobody had written, the extra template that appeared in the second round, and review cycles that ran longer than the schedule assumed. Six items belong in the proposal in writing, so they arrive as scope rather than as a variation later.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "The URL map and 301 redirects. If any address changes, every old URL needs a destination, and this is the line most often left out of a redesign quote entirely. It is scoped by URL count rather than page count, so a 40-page site with a decade of blog archive and campaign URLs can carry thousands of them.",
                            "Content cleanup, missing assets, copy approval and localization.",
                            "Additional template, component, state and breakpoint work.",
                            "Accessibility review, analytics changes and regression testing.",
                            "Vendor licenses, third-party implementation and platform constraints.",
                            "Extra review rounds, delayed feedback, rework after approval and rush requests.",
                            "Training, launch monitoring, support and future maintenance.",
                        ]}
                    />

                    <BlogHeader id="design-system">What should the design system include?</BlogHeader>
                    <BlogText>
                        Name foundations such as color, typography, spacing and layout; reusable components and their
                        states; responsive behavior; accessibility requirements; content rules; and the source of
                        truth handed to the client. A component screenshot without behavior and state coverage is not
                        a complete implementation specification.
                    </BlogText>
                    <BlogText>
                        There is a real decision underneath this, and it is not a technical one. The cheapest possible
                        redesign restyles an existing theme or page-builder preset: new palette, new type, new
                        photography, same underlying components. It is quick, and it is also why so many sites in the
                        same sector resemble each other. A system designed for the business costs more upfront because
                        someone has to make deliberate decisions about type, spacing, color roles and component
                        states instead of accepting defaults. The return arrives later, when a new page type in month
                        eight is an application of the existing system rather than a fresh round of design. Neither
                        route touches your platform. The question is how distinct and how durable the result needs to
                        be.
                    </BlogText>
                    <BlogText>
                        Ask for the list of every distinct page template the system has to cover before you sign. A
                        system scoped against a homepage and two interior pages will need extending the first time a
                        pricing page, a resource hub or a location page needs its own layout decisions.
                    </BlogText>

                    <BlogHeader id="billing">Fixed price vs hourly work</BlogHeader>
                    <BlogText>
                        We quote redesigns fixed, at $1,500, $3,500 or $5,000 to $10,000 depending on scope, and price
                        anything outside that scope through an approved change request. Fixed price works when
                        deliverables, assumptions and review boundaries are defined. Hourly or weekly work fits
                        discovery, uncertain legacy systems or client-directed changes. Neither model guarantees
                        quality on its own, so the question is which one matches how well-defined your project actually
                        is.
                    </BlogText>

                    <BlogHeader id="provider">Agency, freelancer or in-house team?</BlogHeader>
                    <BlogText>
                        Compare the people assigned, senior involvement, availability, research depth, design and
                        engineering responsibilities, QA evidence, change handling and handoff. Provider type alone
                        does not establish cost, quality or accountability. Our guide to{" "}
                        <Link href="/blog/website-developer-agency" className="text-cognac hover:underline">what an agency should own</Link>{" "}
                        lists the roles to check, and{" "}
                        <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline">how to vet a low-cost developer</Link>{" "}
                        covers the evidence to request when the quote is the deciding factor.
                    </BlogText>

                    <BlogHeader id="cost-of-delay">How to evaluate the cost of no redesign</BlogHeader>
                    <BlogText>
                        The cost of leaving it alone is whatever the current site makes harder, measured on your own
                        numbers rather than an industry average: support contacts, task failure, accessibility defects,
                        the time it takes your team to publish, abandoned form steps and measured funnel loss. Quantify
                        those. Separate observed facts
                        from assumptions, calculate a range, and compare it with the least expensive intervention that
                        could address the problem. Where the complaint is speed rather than design, the{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline">route-level speed diagnostics</Link>{" "}
                        will tell you whether a redesign is even the right fix.
                    </BlogText>
                    <BlogText>
                        The problems a redesign is the right answer to tend to look like these:
                    </BlogText>
                    <BlogList
                        items={[
                            "Visitors cannot find the page that answers their question, or the action they came to take is buried below content they did not ask for.",
                            "The structure and copy describe an older version of the business: a retired product line, a superseded pricing model or positioning the company has moved past.",
                            "The design was adapted to phones rather than designed for them, and the majority of visits arrive that way.",
                            "The site reads as untended, which for a considered purchase becomes a question about the business rather than about the website.",
                        ]}
                    />
                    <BlogText>
                        Frame the case on those grounds rather than on speed. A same-platform redesign changes what
                        visitors see and how they move through it. It does not change what the platform underneath
                        costs, how fast it serves, or how it is maintained, so if those are the actual complaints,
                        price a migration or a rebuild instead and read the guides linked above.
                    </BlogText>

                    <BlogHeader id="stakeholders">How to justify the budget internally</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            An internal case is won on evidence about your own site, not on a benchmark drawn from someone else&apos;s. Seven items make the argument reviewable by people who will never open an analytics report, and the last one carries more weight than it looks: naming what the redesign will not fix is what makes the rest of it credible.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "State the current problem and attach the evidence. Use findings from your own audit and analytics rather than a generic benchmark that may not describe your traffic.",
                            "Define the affected users, journeys and business process.",
                            "Compare repair, redesign, migration and rebuild options.",
                            "Show one-time and ongoing cost, internal effort and risk.",
                            "Put your current site beside the sites your buyers also consider. A side-by-side is usually the fastest way to make the positioning gap legible to people who do not read analytics.",
                            "Name acceptance criteria and the measurement plan. Agree which numbers you will read, and set the before and after windows in advance so the comparison is not chosen after the fact.",
                            "Record what will not be solved by the redesign.",
                        ]}
                    />

                    <BlogHeader id="reduce-cost">How to reduce redesign cost safely</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Cost comes out of a redesign by removing decisions and duplication, not by removing quality. Nine moves do that safely, and the two with the largest effect are settling who approves the work and merging thin pages before design starts, rather than paying to redesign pages you were going to consolidate anyway.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Assign one accountable approver and schedule feedback windows.",
                            "Approve the route, template and content inventory before design.",
                            "Resolve brand and copy decisions before implementation.",
                            "Reuse valid components and content rather than rebuilding by habit.",
                            "Consolidate thin or duplicate pages before design starts. Fewer, stronger pages cost less to redesign and less to maintain afterwards.",
                            "Spend the design budget on the handful of pages that carry the work, and let the rest run on shared templates.",
                            "Phase lower-priority templates without creating duplicate systems.",
                            "Defer extras such as additional languages, bespoke animation or custom dashboards until there is demand that justifies them, and scope them as a later phase rather than cutting them mid-project.",
                            "Freeze the launch scope and use written change requests.",
                        ]}
                    />

                    <BlogHeader id="contract">Questions to ask before signing</BlogHeader>
                    <BlogText>
                        The ownership question is the one buyers most often leave until the end. Settle it first using{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which routes, templates, components, breakpoints and states are included?",
                            "Who writes, migrates, approves and enters the content?",
                            "How many review rounds and decision-makers does the schedule assume?",
                            "What accessibility, browser, analytics, SEO and performance evidence is required?",
                            "What counts as acceptance, a defect and an out-of-scope change?",
                            "Who owns source files, code, accounts and third-party licenses?",
                            "What launch, rollback, support and termination terms apply?",
                            "Is this a single relaunch or a staged release, and what do visitors see during the interim?",
                            "Do the URLs stay as they are? Where pages are merged or renamed, who writes and tests the redirects?",
                        ]}
                    />
                    <InsightBox variant="info" label="Read the total, not the headline">
                        The cheapest-looking redesign quote is often the one that scoped the fewest review rounds and
                        the narrowest design system. A slightly higher quote that names every template and states how
                        many rounds are included is usually the smaller number by the end of the project. Compare on
                        what is written into the scope, not on the figure at the bottom of the first page.
                    </InsightBox>

                    <BlogHeader id="pandacodegen">PandaCodeGen offer and terms</BlogHeader>
                    <BlogText>
                        We start with a <Link href="/contact" className="text-cognac hover:underline">free fit audit</Link> and use it to
                        prepare a migration or redesign plan. Recent{" "}
                        <Link href="/work" className="text-cognac hover:underline">project pages</Link> show the scope behind each build. A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund is tied to failure to
                        deliver the signed scope, not a preference change after work starts. Starter includes 15
                        business days of launch defect support and Growth and Scale carry 30, where the accepted terms include it. Minor tweaks may be
                        included when agreed, while larger changes require an approved scope change.
                    </BlogText>
                    <InsightBox variant="info" label="Performance acceptance">
                        A 90+ <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> target applies only when the signed terms name representative pages, mobile
                        and desktop profiles, the environment, three passing runs per page and profile, exclusions and
                        remedy. It is not a platform-wide, ranking or revenue guarantee.
                    </InsightBox>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get the right project type and scope</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will separate repair, redesign, migration and rebuild work, then map the chosen option
                            to named deliverables and acceptance evidence.
                        </p>
                        <QuoteModalButton cta="website_redesign_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your redesign plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
