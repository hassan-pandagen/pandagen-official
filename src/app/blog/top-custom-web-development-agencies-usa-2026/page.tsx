import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Building2, ClipboardCheck, Scale, Search } from "lucide-react";
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

const postId = "top-custom-web-development-agencies-usa-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Top Custom Web Development Agencies USA (2026): A Disclosed Shortlist";
const description =
    "A non-ranked 2026 shortlist of US web development partners and specialist alternatives, compared from current first-party service evidence with buyer verification questions.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "top custom web development agencies USA 2026",
        "custom web development company USA",
        "website redesign agency USA",
        "WordPress migration agency",
        "Shopify development agency",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-08",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/top-custom-web-development-agencies-usa-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "10up", url: "https://10up.com/" },
    { name: "Huemor", url: "https://huemor.rocks/" },
    { name: "Baunfire", url: "https://www.baunfire.com/" },
    { name: "Lounge Lizard", url: "https://www.loungelizard.com/" },
    { name: "Big Drop", url: "https://www.bigdropinc.com/" },
    { name: "Barrel in the Shopify Partner Directory", url: "https://www.shopify.com/partners/directory/partner/barrel" },
    { name: "Upstatement", url: "https://upstatement.com/" },
    { name: "Lemon.io", url: "https://lemon.io/" },
    { name: "Codeable", url: "https://www.codeable.io/" },
    { name: "PandaCodeGen services", url: "https://www.pandacodegen.com/services" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/top-custom-web-development-agencies-usa-2026"),
            description,
            datePublished: "2026-04-08",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Web development agencies", "Project scoping", "Vendor contracts", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Agency selection",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Outsourcing", sameAs: ["https://en.wikipedia.org/wiki/Outsourcing"] },
            ],
            wordCount: 900,
            timeRequired: "PT5M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/top-custom-web-development-agencies-usa-2026#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "US agency shortlist", item: "https://www.pandacodegen.com/blog/top-custom-web-development-agencies-usa-2026" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/top-custom-web-development-agencies-usa-2026#webpage",
            url: "https://www.pandacodegen.com/blog/top-custom-web-development-agencies-usa-2026",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/top-custom-web-development-agencies-usa-2026#breadcrumb" },
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

const companies = [
    {
        name: "10up",
        type: "Agency",
        publicFocus: "Enterprise WordPress, content platforms and digital tools",
        verify: "Relevant platform work, delivery team, accessibility and post-launch operation",
        url: "https://10up.com/",
    },
    {
        name: "Baunfire",
        type: "Agency",
        publicFocus: "Brand-led web design and development for technology companies",
        verify: "Comparable B2B work, content scope, development stack and ongoing support",
        url: "https://www.baunfire.com/",
    },
    {
        name: "Barrel",
        type: "Agency",
        publicFocus: "Shopify commerce for consumer brands",
        verify: "Shopify tier, theme or headless scope, integrations and optimization ownership",
        url: "https://www.shopify.com/partners/directory/partner/barrel",
    },
    {
        name: "Big Drop",
        type: "Agency",
        publicFocus: "Brand, web design, development and digital marketing",
        verify: "Named delivery roles, technology, measurement plan and change-order terms",
        url: "https://www.bigdropinc.com/",
    },
    {
        name: "Huemor",
        type: "Agency",
        publicFocus: "B2B website redesign, development, content and support",
        verify: "Fit for your sector, exact inclusions and current quote against its published scope",
        url: "https://huemor.rocks/",
    },
    {
        name: "Lounge Lizard",
        type: "Agency",
        publicFocus: "Full-service web, branding, SEO and digital marketing",
        verify: "Whether one integrated vendor or a specialist team best fits the requirement",
        url: "https://www.loungelizard.com/",
    },
    {
        name: "PandaCodeGen",
        type: "Publisher",
        publicFocus: "SEO-safe migrations and custom Next.js delivery",
        verify: "Signed scope, acceptance evidence, ownership terms and relevant first-party work",
        url: "https://www.pandacodegen.com/services",
    },
    {
        name: "Upstatement",
        type: "Studio",
        publicFocus: "Digital brands, large websites, products and editorial platforms",
        verify: "Brand and editorial fit, implementation team, CMS and long-term operating model",
        url: "https://upstatement.com/",
    },
    {
        name: "Codeable",
        type: "Marketplace",
        publicFocus: "Vetted WordPress specialists for scoped or ongoing work",
        verify: "Named expert, project governance, design and QA responsibility",
        url: "https://www.codeable.io/",
    },
    {
        name: "Lemon.io",
        type: "Talent network",
        publicFocus: "Vetted software developers for team extension",
        verify: "Who provides product, design, project management, QA and launch accountability",
        url: "https://lemon.io/",
    },
];

export default function TopCustomWebDevelopmentAgenciesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-5xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "US agency shortlist", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agency selection</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Custom Web Development Partners <span className="italic text-cognac">A Disclosed 2026 Shortlist</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            This is a shortlist to help you buy, not a league table. It keeps ten options worth
                            considering, marks agencies and talent marketplaces with a Model column because they are not
                            the same thing, and describes each company using only what that company currently says about
                            itself.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Researched July 24, 2026. Service pages change, so confirm scope and terms directly.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 8, 2026" readTime="5 min read" />

                    <InsightBox variant="warning" label="Commercial disclosure">
                        PandaCodeGen publishes this article, sells web-development services, and appears in the
                        shortlist. We do not rank ourselves first or claim independent superiority. Agencies are listed first in alphabetical order, then the two talent marketplaces, because they are different things to buy. Position within each group carries no ranking, and no placement was purchased.
                    </InsightBox>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Start with project type: migration, commerce, brand site, editorial platform or product.",
                                "Choose an agency for accountable end-to-end delivery; choose a marketplace for targeted capacity you can manage.",
                                "Compare the same signed scope, evidence and operating period, not a headline hourly rate.",
                                "Treat current official pages as a shortlist signal, then verify every proposal and reference.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Search, title: "Discover", body: "Find specialists with relevant public work." },
                            { icon: ClipboardCheck, title: "Verify", body: "Check scope, team, evidence and references." },
                            { icon: Scale, title: "Compare", body: "Normalize price, risk and ongoing operation." },
                            { icon: Building2, title: "Contract", body: "Put delivery and acceptance terms in writing." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>How this shortlist was built</BlogHeader>
                    <BlogText>
                        We retained the original ten names because they span distinct buying models. On July 24, 2026,
                        we checked each company&apos;s own site or an official platform directory for a current service
                        description. We removed stale review totals, third-party rate bands, unverified headquarters,
                        unsupported delivery criticisms, AI-recommendation experiments and universal performance
                        claims. Inclusion is not a quality endorsement.
                    </BlogText>

                    <BlogHeader>The ten options compared without a hidden ranking</BlogHeader>
                    <BlogText>
                        Read the fourth column first. Every entry in the third column is the provider's own public self-description, which tells you what they sell rather than how well they deliver it. The verification column is the part that does work for you, because it names what you would have to establish yourself before shortlisting any of them.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Provider</th>
                                    <th className="p-4">Model</th>
                                    <th className="p-4">Current public focus</th>
                                    <th className="p-4">What the buyer must verify</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                {companies.map((company) => (
                                    <tr key={company.name}>
                                        <td className="p-4 align-top font-bold text-charcoal">
                                            <a href={company.url} target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>
                                                {company.name}
                                            </a>
                                        </td>
                                        <td className="p-4 align-top">{company.type}</td>
                                        <td className="p-4 align-top">{company.publicFocus}</td>
                                        <td className="p-4 align-top">{company.verify}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>Enterprise and specialist agency fits</BlogHeader>
                    <BlogText>
                        <a href="https://10up.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>10up</a>
                        {" "}publicly emphasizes enterprise WordPress, content-management solutions and digital tools.
                        <a href="https://www.baunfire.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Baunfire</a>
                        {" "}describes a Silicon Valley web-focused design and development practice.
                        <a href="https://upstatement.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Upstatement</a>
                        {" "}lists brand systems, large-scale websites, digital products and editorial platforms.
                        These signals help establish potential fit, but the proposal must identify the team and
                        deliverables for your exact platform.
                    </BlogText>
                    <BlogText>
                        <a href="https://huemor.rocks/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Huemor</a>
                        {" "}currently focuses its homepage on B2B redesigns and publishes pricing information for
                        its own scope. That is first-party pricing, not a market benchmark or quote for your project.
                        <a href="https://www.loungelizard.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Lounge Lizard</a>
                        {" "}and <a href="https://www.bigdropinc.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Big Drop</a>
                        {" "}both describe broader combinations of brand, website and marketing services. Buyers should
                        decide whether that breadth is required or whether a narrower specialist is easier to govern.
                    </BlogText>
                    <BlogText>
                        Shopify&apos;s official partner directory describes
                        <a href="https://www.shopify.com/partners/directory/partner/barrel" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Barrel</a>
                        {" "}as a commerce partner for consumer brands, including redesign, optimization, custom
                        integrations and headless commerce. Confirm the proposed Shopify architecture, platform
                        dependencies and who owns ongoing optimization. If the split storefront model is on the table,
                        read{" "}
                        <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline">what headless commerce means</Link>{" "}
                        first, and see our{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline">storefront engineering scope</Link>{" "}
                        for the questions we ask before quoting one.
                    </BlogText>

                    <BlogHeader>Agency versus marketplace is a material difference</BlogHeader>
                    <BlogText>
                        <a href="https://www.codeable.io/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Codeable</a>
                        {" "}is a WordPress specialist marketplace.
                        <a href="https://lemon.io/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Lemon.io</a>
                        {" "}matches companies with software developers. Either can be a sensible choice when the buyer
                        already has people doing product direction, design, project management, security review, testing and release.
                        They should not be compared with a full-service agency as if accountability were identical. Our
                        guide to{" "}
                        <Link href="/blog/website-developer-agency" className="text-cognac hover:underline">what a website developer agency should own</Link>{" "}
                        lists the roles a marketplace leaves with you.
                    </BlogText>

                    <BlogHeader>Where PandaCodeGen may fit</BlogHeader>
                    <BlogText>
                        PandaCodeGen focuses on SEO-safe migrations for revenue-generating{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress</Link>,{" "}
                        <Link href="/services/webflow" className="text-cognac hover:underline">Webflow</Link> and{" "}
                        <Link href="/services/gohighlevel" className="text-cognac hover:underline">GoHighLevel</Link> sites, plus scoped{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">custom application work</Link>.{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">Public starting tiers</Link> are $1,500 Starter,
                        $3,500 Growth and $5,000 to $10,000 Scale, with larger work discussed separately. Standard
                        payment is 30 percent at onboarding and 70 percent on delivery, subject to the signed project
                        terms. The{" "}
                        <Link href="/work" className="text-cognac hover:underline">project pages</Link>{" "}
                        set out the scope behind each build we publish.
                    </BlogText>
                    <BlogList
                        items={[
                            "A refund is tied to failure to deliver the signed scope, not a change of preference after work begins.",
                            "Package discussions may start with 15 business days of launch defect support on Starter and 30 on Growth and Scale, and support applies only where the accepted project terms record it.",
                            "Custom deliverables transfer after full payment under the contract; client content remains the client's.",
                            "PandaCodeGen retains reusable tools and pre-existing code; third-party components keep their licenses.",
                            "A 90+ performance target requires agreed representative pages, mobile and desktop profiles, three consecutive tests and a written remedy.",
                        ]}
                    />
                    <InsightBox variant="info" label="No universal winner">
                        A published price is useful transparency, but it is not evidence that one provider is better.
                        Enterprise governance, specialist depth, capacity, domain experience or an existing stack can
                        justify a different choice.
                    </InsightBox>

                    <BlogHeader>What the quote does not cover</BlogHeader>
                    <BlogText>
                        The number on a proposal is the price of the agreed scope, and several real costs sit outside
                        it by design. None of these are evidence of bad faith. They become a problem only when nobody
                        raises them until after signature, so raise them during the shortlist stage.
                    </BlogText>
                    <BlogList
                        items={[
                            "Change orders. Anything discussed verbally but never written down, plus revisions beyond the agreed round count, is normally billed separately. Ask what triggers a change order, who approves one, how it is priced and how quickly you will be told before work proceeds.",
                            "Post-launch work. Many contracts end at launch. Establish what is covered afterwards, for how long, what counts as a defect versus a new request, and what the response commitment is.",
                            "Recurring vendor and license fees. Platform plans, premium extensions, form and email services and CMS subscriptions are usually the buyer's cost, not the builder's, and rarely appear on the quote. Ask for the itemized annual figure and which lines are optional.",
                            "Training and internal time. Somebody on your side has to learn the editing system, supply content and approve work. Ask whether training is included and how many hours of your team's time the plan assumes.",
                            "Switching cost later. If the build sits on bespoke or proprietary layers, a future team may need to redo work rather than continue it. Ask what a different qualified developer would need in order to take it over, and confirm the answer is compatible with the ownership terms you are signing.",
                        ]}
                    />

                    <BlogHeader>Red flags in a discovery call</BlogHeader>
                    <BlogText>
                        The discovery call is where most selling happens and where buyers are least equipped to push
                        back. These are the moments worth slowing down on.
                    </BlogText>
                    <BlogList
                        items={[
                            "No commitment you can reproduce. If a provider describes quality in adjectives but will not name a target, a page set and a measurement method that can be written into the contract, there is nothing to hold them to later.",
                            "Reference work they cannot let you check. Any provider confident in a claim can hand you live URLs. Measure them yourself before the call ends rather than accepting screenshots.",
                            "Hourly billing with no cap. Without a not-to-exceed figure or a fixed price, the commercial incentive runs against finishing. Ask for a cap in writing if the model stays hourly.",
                            "Change orders undefined in the contract. If the document does not say what one is or how it gets priced, every later request becomes an open negotiation at the worst possible moment.",
                            "Post-launch support left vague. A promise to look after you is not a term. Ask for the window, the coverage and the response expectation.",
                            "Hedging on source-code ownership. Ask plainly whether you receive the repository, whether you can host it anywhere and whether you can hand it to another developer without restriction. Hesitation here is the answer.",
                            "No stated minimum. If a provider's usual project size is well above your budget, both sides are better off knowing before discovery starts. Ask directly.",
                        ]}
                    />

                    <BlogHeader>Use one request for proposal across every provider</BlogHeader>
                    <BlogText>
                        The same document sent to every provider is what makes totals comparable. If the budget range is
                        still open, our{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">website cost guide</Link>{" "}
                        and, for a site that already exists,{" "}
                        <Link href="/blog/website-redesign-cost" className="text-cognac hover:underline">redesign cost drivers</Link>{" "}
                        give you a starting frame.
                    </BlogText>
                    <BlogList
                        items={[
                            "Business outcome, audiences and non-negotiable user journeys.",
                            "Current platform, integrations, content inventory, analytics and known constraints.",
                            "In-scope pages, templates, features, migration data and content responsibilities.",
                            "SEO inventory, redirect ownership, structured data and Search Console monitoring.",
                            "Accessibility standard, supported browsers and required devices.",
                            "Security, privacy, consent, data processing and incident responsibilities.",
                            "Performance pages, profiles, test count, evidence and remedy.",
                            "Acceptance process, change control, payment milestones, support and termination.",
                            "Repository, accounts, hosting, content, custom deliverables and third-party licenses.",
                        ]}
                    />

                    <BlogHeader>Questions that expose material proposal gaps</BlogHeader>
                    <BlogText>
                        A polished proposal hides gaps in staffing, assumptions and exclusions rather than in price. Seven questions surface them, and the first is the one most often left unanswered: who is actually assigned after the sale, and what comparable work has that team delivered. The last one matters at handover, when you find out whether another qualified team could operate the result.
                    </BlogText>
                    <BlogList
                        items={[
                            "Who is assigned after the sale, and what comparable work did that team deliver?",
                            "Which assumptions can change price or schedule?",
                            "What is explicitly excluded from migration, SEO, analytics, accessibility and QA?",
                            "How are performance and functional acceptance reproduced?",
                            "What triggers a change order and how is it approved?",
                            "What happens to the old site, content, accounts and data at cutover?",
                            "What can another qualified team operate after handoff?",
                        ]}
                    />

                    <BlogHeader>Sources and limitations</BlogHeader>
                    <BlogText>
                        Two entries are not United States providers. Codeable and Lemon.io are talent marketplaces
                        headquartered outside the US, included because American buyers routinely use them rather than
                        because they meet the geography in this article&apos;s title. The rest position themselves as US providers on their own sites; we did not independently verify any company&apos;s headquarters. Company descriptions were checked against the official pages linked in the
                        table on July 24, 2026. We did not independently verify unpublished staffing, pricing, availability, delivery quality. Ask each provider for a dated proposal and directly
                        contactable references for comparable work.
                    </BlogText>

                    <BlogHeader>Related reading</BlogHeader>
                    <BlogText>
                        For narrower shortlists, see our{" "}
                        <Link href="/blog/top-nextjs-agencies-2026" className="text-cognac hover:underline">Next.js agency shortlist</Link>{" "}
                        and our{" "}
                        <Link href="/blog/pagepro-alternatives" className="text-cognac hover:underline">review of Pagepro alternatives</Link>.
                        If the shortlist is being driven by budget, read{" "}
                        <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline">how to vet a low-cost developer</Link>.
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
                        <h2 className="mb-3 font-serif text-3xl">Get a migration plan before choosing a vendor</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory the current site, surface SEO and ownership risks, and turn the work into
                            a comparable scope. You can use that plan with PandaCodeGen or another qualified provider.
                        </p>
                        <QuoteModalButton
                            cta="top_custom_agencies_migration_plan"
                            className="inline-flex items-center gap-2 rounded-lg bg-cognac px-6 py-3 font-bold text-white hover:bg-cognac/90"
                        >
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
