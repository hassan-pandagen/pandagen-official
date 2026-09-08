import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Accessibility, Code2, Search, ShieldCheck } from "lucide-react";
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

const postId = "website-developer-agency";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Website Developer Agency: Services, Costs and Selection in 2026";
const description =
    "What a website development agency should deliver, how to compare agency, freelancer and internal models, and which scope, evidence, security, accessibility and ownership terms to verify.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "website developer agency",
        "web development agency services",
        "hire website development agency",
        "website agency cost",
        "custom web development company",
        "what does a web development agency do",
        "agency vs freelancer website",
        "questions to ask a web agency",
        "website agency red flags",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-12",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/website-developer-agency")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" },
    { name: "OWASP ASVS", url: "https://owasp.org/www-project-application-security-verification-standard/" },
    { name: "U.S. Copyright Office work made for hire", url: "https://www.copyright.gov/circs/circ30.pdf" },
    { name: "U.S. Copyright Office transfers", url: "https://www.copyright.gov/circs/circ01.pdf" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/website-developer-agency"),
            description,
            datePublished: "2026-05-12",
            dateModified: "2026-08-19",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Web development agencies", "Project scoping", "Vendor contracts", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Agency selection",
            inLanguage: "en-US",
            wordCount: 2939,
            timeRequired: "PT13M",
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Web design", sameAs: ["https://en.wikipedia.org/wiki/Web_design"] },
                { "@type": "Thing", name: "Outsourcing", sameAs: ["https://en.wikipedia.org/wiki/Outsourcing"] },
                { "@type": "Thing", name: "Vendor selection" },
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
                { "@type": "ListItem", position: 3, name: "Website developer agency", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-12",
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

export default function WebsiteDeveloperAgencyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Website developer agency")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agency selection</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Website Developer Agency: <span className="italic text-cognac">What to Buy and Verify</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            An agency's job is to turn what your business needs into a website you can actually run,
                            with someone clearly on the hook for the design, the code, the content, the testing, the
                            launch and the support afterwards. Judge them on who they are putting on your project and
                            what they will put in writing, not on the word &ldquo;agency&rdquo;.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 3, 2026 against current W3C, OWASP and U.S. Copyright Office guidance, all linked at the foot of this page.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 12, 2026" readTime="9 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Hire an agency when the job needs several different skills and one person answerable for delivering it.",
                                "Define outcomes, scope, acceptance, ownership and support before comparing price.",
                                "Ask for evidence, both tested by hand and by tool, that it is accessible, secure, working, still ranking and fast.",
                                "Use a freelancer or your own team when you already have someone doing the coordinating and the quality checking.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Code2, title: "Build", body: "Architecture, frontend, backend, CMS and integrations." },
                            { icon: Accessibility, title: "Access", body: "WCAG target, keyboard, semantics and human testing." },
                            { icon: ShieldCheck, title: "Protect", body: "Threats, data, credentials, dependencies and incidents." },
                            { icon: Search, title: "Discover", body: "Crawlability, content, metadata, schema and measurement." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What a full-service website developer agency does</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Seven phases, and what you buy from an agency rather than a contractor is one party answerable across all of them. Any of the seven can be bought separately, and often is. The reason to buy them together is that the seams between them are where projects fail, and a single accountable party owns those seams.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Discovery: goals, audiences, journeys, constraints, data and current evidence.",
                            "Strategy: information architecture, measurement, content and technical decisions.",
                            "Design: research, flows, wireframes, responsive UI and design system.",
                            "Engineering: frontend, backend, CMS, integrations, data and infrastructure.",
                            "Quality: content, function, accessibility, security, SEO, analytics and performance.",
                            <>{"Release: migration, rollback, monitoring, "}Search Console{" and account handoff."}</>,
                            "Operation: defect support, maintenance, incidents, upgrades and change requests.",
                        ]}
                    />

                    <BlogHeader>The engagements you are actually buying</BlogHeader>
                    <BlogText>
                        Those phases get packaged into a handful of distinct engagements. Naming which one you need
                        before you brief anybody removes most of the ambiguity from the quotes that come back.
                    </BlogText>
                    <BlogList
                        items={[
                            "New build. A site designed and developed for this business rather than adapted from a template, including the content model and the editing workflow the team will use afterwards.",
                            "Platform migration. Moving an existing site to a different stack while keeping its content, its URLs and its search visibility intact. The technical core is a mapped redirect for every indexed URL, tested before cutover rather than after.",
                            "Commerce and headless storefronts. A custom storefront in front of an existing commerce backend, so checkout, inventory and orders stay where they are while the customer-facing layer is rebuilt.",
                            "Custom application engineering. Work no platform covers: calculators, portals, dashboards, internal tools and integrations between systems that do not speak to each other.",
                            "Operation. Hosting, monitoring, security updates, content changes and incident response after launch. Decide whether you are buying this before you sign, not after the support window lapses.",
                        ]}
                    />

                    <BlogHeader>Core services and their acceptance evidence</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Every service in this table has an artefact that proves it was delivered, and the second column is the one to read. A service with no named acceptance evidence is a line on an invoice rather than a deliverable. Ask for that column to appear in your own proposal, because it is what turns sign-off into a check rather than an opinion.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[930px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Service</th><th className="p-4">Deliverable</th><th className="p-4">Evidence</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">UX and design</td><td className="p-4">Accepted flows, components and responsive states</td><td className="p-4">Prototype review and agreed device coverage</td></tr>
                                <tr><td className="p-4 font-bold">Content and CMS</td><td className="p-4">Content model, migration and editor workflow</td><td className="p-4">Counts, exceptions, preview and publishing tests</td></tr>
                                <tr><td className="p-4 font-bold">Accessibility</td><td className="p-4">Agreed WCAG 2.2 conformance target</td><td className="p-4">Automated checks plus keyboard and human evaluation</td></tr>
                                <tr><td className="p-4 font-bold">Security</td><td className="p-4">Controls appropriate to the data and threat model</td><td className="p-4">ASVS-informed tests, dependency review and runbooks</td></tr>
                                <tr><td className="p-4 font-bold">SEO</td><td className="p-4">Rendered signals, URL plan and monitoring</td><td className="p-4">Crawl, index, metadata, schema and redirect tests</td></tr>
                                <tr><td className="p-4 font-bold">Performance</td><td className="p-4">Accepted pages, profiles and targets</td><td className="p-4">Recorded runs plus field monitoring where available</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogQuote>
                        An agency&apos;s job is to turn what your business needs into a website you can actually run, with someone clearly accountable for it.
                    </BlogQuote>

                    <BlogHeader>How much does a website developer agency cost in 2026?</BlogHeader>
                    <BlogText>
                        Nobody can publish an honest agency rate table without a dated sample where every quote covers
                        the same scope. What you pay depends on how much thinking the project needs, how many templates
                        sit behind the pages, who writes the content, how much data has to move, what it connects to,
                        whether it has to meet accessibility or compliance rules, how much testing there is, and what
                        support you get afterwards. The only fair comparison is several proposals answering one brief.
                        Our{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">website cost guide</Link>{" "}
                        works through the same inputs, and{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className="text-cognac hover:underline">custom build timelines</Link>{" "}
                        covers the schedule side of the same scope.
                    </BlogText>
                    <BlogText>
                        PandaCodeGen&apos;s <Link href="/pricing" className="text-cognac hover:underline">public planning tiers</Link> start at $1,500 Starter, $3,500 Growth and $5,000 to
                        $10,000 Scale, with larger work scoped separately. Standard payment is 30 percent at onboarding
                        and 70 percent on delivery under the signed agreement. These are PandaCodeGen terms, not a
                        market average.
                    </BlogText>

                    <BlogHeader>Platforms a modern agency may support</BlogHeader>
                    <BlogText>
                        A platform is not automatically modern or legacy. An agency may deliver WordPress, Shopify,
                        Webflow, headless CMS, Next.js or other application stacks. What decides it is how your team wants to edit, what the site
                        has to do, what data is involved, what your people can actually run, security, speed, whether
                        you can take it elsewhere, and
                        operating model. Ask why the proposed platform fits and what would disqualify it.
                    </BlogText>
                    <BlogText>
                        Our platform pages set out what a move to or from each stack involves:{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration</Link>,{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline">Shopify and WooCommerce storefront engineering</Link>,{" "}
                        <Link href="/services/webflow" className="text-cognac hover:underline">Webflow migration</Link>, and{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">custom application engineering</Link>{" "}
                        for work that no platform covers. If the proposal separates the storefront from the backend,
                        read{" "}
                        <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline">what headless commerce means</Link>{" "}
                        before you accept the architecture.
                    </BlogText>

                    <BlogHeader>A four-stage delivery process</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four stages, each producing something you can inspect before the next begins. Define ends with an agreed scope. Design ends with approved templates. Build and verify ends with test evidence. Launch and operate ends with a handover you hold. A proposal that cannot say what each gate produces has not been planned to that level yet.
                        </BlogText>
                    </div>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li><strong>Define.</strong> What you have, what you need, what could go wrong, how you will measure it, what is in scope, what you are assuming, and how you sign it off. The deliverable is written, and it includes what the current site actually does today, measured rather than described.</li>
                        <li><strong>Design.</strong> How the site is organized, what the content is, how people move through it, what it looks like, prototypes, and the technical calls. Architecture is the planning that happens before code: URL structure, content model, integrations, environments. Deciding it upfront costs hours. Discovering it halfway through the build costs weeks.</li>
                        <li><strong>Build and verify.</strong> Writing it, moving the data, wiring up the integrations, reviewing the work, and recording evidence that it is right. Ask for working progress at a regular interval rather than a single reveal at the end, so a wrong direction surfaces in the second week instead of the third month.</li>
                        <li><strong>Launch and operate.</strong> The switchover, the ability to undo it, monitoring, handing it over, support and maintenance. A low-risk cutover keeps the current site serving until the replacement has been tested on a staging URL, exports every indexed URL and maps it to its new path before anything moves, validates the map, then makes the switch at DNS with the TTL lowered in advance so propagation is quick and reversible.</li>
                    </ol>

                    <BlogHeader id="contract-gaps">Four contract lines the standard checklist always misses</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Search for what belongs in an agency contract and you get the same list everywhere: scope,
                            deliverables, revision rounds, payment milestones, late fees, intellectual property. That
                            list is correct and it is written for agency work in general, not for a website. Four things
                            specific to websites are missing from it, and each one is expensive to discover after
                            signing rather than before.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Account ownership, named individually. Domain registrar, DNS, hosting, repository, CMS, analytics, tag manager, payment gateway. Intellectual property clauses cover code and rarely mention accounts, and accounts are where lock-in actually happens. Ask whose email address each one is registered under, today.",
                            "The redirect map, if any URL changes. This is the single most commonly assumed line in a rebuild. It is real work, it protects existing search traffic, and if it is not itemized then nobody has priced it and nobody has been made responsible for it.",
                            "Acceptance criteria with test conditions attached. Not \u201ca fast site\u201d but which pages, which device profiles, how many passing runs, measured how, and what happens if it fails. A performance number with no conditions is not a term, it is a slogan.",
                            "What you receive if the project stops mid-way. Most contracts describe completion and cancellation and skip the state in between, which is the one you are most likely to be in if something goes wrong. Agree now whether partial work, designs and access transfer at that point.",
                        ]}
                    />
                    <BlogText>
                        None of these is adversarial and a competent vendor will have answers ready. The reason to raise
                        them before signing rather than after is simply that all four are cheap to write down now and
                        expensive to negotiate once the relationship is under strain. Our{" "}
                        <Link href="/blog/do-you-own-your-website" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">guide to what you actually own</Link>{" "}
                        works through the ownership side in detail, including why a &ldquo;work made for hire&rdquo;
                        clause often does not do what people assume.
                    </BlogText>

                    <BlogHeader>Performance terms to put in writing</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s 90-plus target is conditional on agreed representative pages, mobile and
                        desktop profiles, recorded environment and three recorded runs per page and profile. It is not a promise that every URL, on every device,
                        forever, scores 90. The contract
                        should state the target, test, evidence, exclusions, cure and remedy. For what the underlying
                        page metrics actually measure, see{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explained</Link>.
                    </BlogText>

                    <BlogText>
                        If you are reading this from the other side of the table &mdash; an agency deciding whether to
                        offer custom development rather than a business buying it &mdash;{" "}
                        <Link href="/blog/for-agencies-offer-custom-web-development" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">the partner-side version of this guide</Link>{" "}
                        covers the same ground from the delivery end.
                    </BlogText>
                    <BlogHeader>In-house developer vs agency vs freelancer</BlogHeader>
                    <BlogText>
                        The reason coordination is worth paying for is that website problems rarely sit in one
                        discipline. A page that loads slowly is often a hosting decision, a code decision and a content
                        decision at the same time, and the search consequences belong to none of those three people
                        individually. Someone who only writes frontend code will correctly report that the frontend is
                        fine. They will be right, and the page will still be slow.
                    </BlogText>
                    <BlogText>
                        So the question is not really agency versus freelancer. It is who is going to notice when a
                        problem crosses a boundary, and who is answerable when it does. If you already have someone
                        doing that job, a specialist is often the better and cheaper hire. If you do not, you are
                        buying that role whether it appears on the invoice or not, and it is worth knowing which
                        person it is.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[840px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Model</th><th className="p-4">Strength</th><th className="p-4">Buyer must cover</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Internal team</td><td className="p-4">Context, continuity and direct control</td><td className="p-4">Capacity, specialist gaps and opportunity cost</td></tr>
                                <tr><td className="p-4 font-bold">Freelancer</td><td className="p-4">Focused skill and flexible engagement</td><td className="p-4">Direction, design, QA, continuity and release ownership</td></tr>
                                <tr><td className="p-4 font-bold">Agency</td><td className="p-4">Coordinated disciplines and delivery accountability</td><td className="p-4">Vendor governance, assigned-team verification and handoff</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>How to choose the right agency</BlogHeader>
                    <BlogText>
                        Comparable work and a written scope tell you more than positioning does. Our{" "}
                        <Link href="/work" className="text-cognac hover:underline">project case studies</Link>{" "}
                        show the scope behind each build, and our{" "}
                        <Link href="/blog/top-custom-web-development-agencies-usa-2026" className="text-cognac hover:underline">review of US custom development agencies</Link>{" "}
                        sets out the criteria we use to compare shops.
                    </BlogText>
                    <BlogList
                        items={[
                            "Ask for current, comparable work and directly contactable references.",
                            "Take the live URLs from their portfolio and measure them yourself. A claim about performance that you can check in a browser is worth more than one you cannot.",
                            "Meet the delivery lead and senior technical owner, not only sales.",
                            "Review the actual statement of work, assumptions and exclusions.",
                            "Require accessibility, security, SEO, functional and performance acceptance.",
                            "Define change control, payment, refund, support, termination and dispute process.",
                            "Define content, custom deliverables, reusable tools, third-party licenses, repository and accounts.",
                            "Confirm ongoing maintenance, incident responsibility and exit.",
                        ]}
                    />

                    <BlogHeader id="verify">How to verify what an agency tells you</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Shortlisting three to five agencies and checking reviews is the standard advice and it is
                            fine as far as it goes. The part usually left out is what to actually check, because most
                            of what an agency publishes about itself cannot be falsified by reading it more carefully.
                        </BlogText>

                        <BlogText>
                            <strong>Portfolios show sites at launch, not today.</strong> Open every portfolio link and
                            check three things: that it still resolves rather than 404s, that it still looks like the
                            case study, and that the agency&apos;s own footer credit or the underlying stack is still
                            there. A portfolio piece that has since been rebuilt by somebody else is not evidence of a
                            lasting result, and it is a fair question to ask about. Run the live URLs through{" "}
                            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">PageSpeed Insights</a>{" "}
                            yourself rather than accepting a screenshot of a score, which is a lab result from an
                            unknown date and device.
                        </BlogText>

                        <BlogText>
                            <strong>Third-party reviews are worth checking and worth reading properly.</strong>{" "}
                            Clutch, Trustpilot and the relevant subreddits are where feedback sits that the agency does
                            not control. Read the three-star reviews before the five-star ones, because they are where
                            scope disputes, delays and communication problems actually get described. Check whether the
                            reviews mention the people you have been meeting: a strong record earned by a team that has
                            since left tells you about the past, not about your project. Treat review volume in this
                            industry with some perspective too, since most small studios have very few reviews and an
                            absence of them is weak evidence either way.
                        </BlogText>

                        <BlogText>
                            <strong>Ask what happens after launch, in writing.</strong> Who holds the domain, the
                            repository, the hosting account and the analytics property. Whether you receive
                            documentation and a walkthrough for your own team, or whether every future change routes
                            back through the agency. Whether the stack is portable or the site only runs on their
                            proprietary hosting. Those answers decide what your options look like in year two, and they
                            are cheap to get before signing and expensive to discover afterwards. What that looks like
                            in a contract is set out under{" "}
                            <a href="#ownership" className="text-cognac hover:underline">ownership and licensing</a> below.
                        </BlogText>
                    </div>

                    <BlogHeader>Seven questions before signing</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Seven questions, and the answers matter more than the asking. A usable answer names something specific enough to write into the scope and check later; a vague one tells you the work has not been thought through yet. Ask all seven of every finalist, including us, and compare the answers side by side.
                        </BlogText>
                    </div>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li>Who exactly will deliver the work, and what relevant project did they complete?</li>
                        <li>Which requirements, pages, data and integrations are excluded?</li>
                        <li>How will each acceptance target be reproduced?</li>
                        <li>What triggers a change order, and who approves it?</li>
                        <li>Who controls the domain, repository, hosting, CMS, analytics and business accounts?</li>
                        <li>What will this cost to run every month once it is live, itemized by provider?</li>
                        <li>What happens after launch, at termination and when another team takes over?</li>
                    </ol>
                    <BlogText>
                        A usable answer names something specific enough to write into the scope and check later. An
                        evasive one does not.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[840px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">You asked</th><th className="p-4">A usable answer</th><th className="p-4">An answer to press on</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Who writes the code?</td><td className="p-4">Named people, with work you can look at</td><td className="p-4">&quot;Our team handles that&quot;</td></tr>
                                <tr><td className="p-4 font-bold">What performance do you commit to?</td><td className="p-4">A stated target on named pages, a stated measurement method, and a stated remedy</td><td className="p-4">&quot;We prioritize performance&quot; or an unconditional promise with no method attached</td></tr>
                                <tr><td className="p-4 font-bold">Do I receive the source code?</td><td className="p-4">The repository transfers to an account you control, and you can deploy it elsewhere</td><td className="p-4">Access to a copy they host, contingent on staying a customer</td></tr>
                                <tr><td className="p-4 font-bold">What will it cost monthly?</td><td className="p-4">A line per provider, with which ones are optional</td><td className="p-4">&quot;We can work that out after launch&quot;</td></tr>
                                <tr><td className="p-4 font-bold">How do you protect search visibility?</td><td className="p-4">Every indexed URL exported and mapped before cutover, with the map validated first</td><td className="p-4">SEO quoted as a separate service to be bought later</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>Founder-led, senior-led and outsourced teams</BlogHeader>
                    <BlogText>
                        Team structure alone does not prove quality, so do not treat founder-built as a shortcut for
                        good or outsourced as a shortcut for bad. A founder-led boutique can offer direct
                        accountability but limited
                        capacity. A larger or distributed team can offer specialist depth but more handoffs. Require
                        disclosure of assigned roles, subcontractors, locations, access, confidentiality, review and
                        accountability. Ours are named on the{" "}
                        <Link href="/about" className="text-cognac hover:underline">PandaCodeGen team page</Link>.
                    </BlogText>

                    <BlogHeader id="ownership">Ownership and licensing</BlogHeader>
                    <BlogText>
                        U.S. copyright ownership does not automatically follow payment in every contractor
                        relationship. Put transfer or licensing in a signed writing and separate custom deliverables
                        from client content, pre-existing materials and third-party components. PandaCodeGen&apos;s
                        current policy is custom-deliverable transfer after full payment under the contract, retention
                        of reusable tools and pre-existing code, and continuation of third-party licenses. The
                        practical checks are set out in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>.
                    </BlogText>

                    <InsightBox variant="info" label="What we will and will not put in writing">
                        This page gives you questions to ask rather than headline numbers, because hosting bills,
                        traffic capacity, store revenue and security outcomes all depend on the specific build,
                        stack and operating conditions behind them. Where we do commit, we commit in the scope
                        document: our performance commitment is a 90+ <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> handover target on mobile and
                        desktop for the representative pages named in that scope, verified across three recorded runs.
                        Ask any agency to write its equivalent commitment the same way, with the pages, the devices
                        and the verification method stated.
                    </InsightBox>

                    <BlogHeader>Related reading</BlogHeader>
                    <BlogText>
                        If budget is the constraint, read{" "}
                        <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline">what a low-cost developer leaves you to cover</Link>.
                        If the site already exists, our{" "}
                        <Link href="/blog/website-redesign-cost" className="text-cognac hover:underline">redesign cost breakdown</Link>{" "}
                        explains which parts of a rebuild carry the scope.
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
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get a migration plan and comparable scope</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will turn the current site, risks and required outcomes into a written scope you can use
                            to evaluate PandaCodeGen or another qualified agency.
                        </p>
                        <QuoteModalButton cta="website_developer_agency_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
