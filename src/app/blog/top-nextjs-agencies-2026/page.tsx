import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Braces, ClipboardCheck, Gauge, Search } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "top-nextjs-agencies-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Next.js Development Agencies in 2026: A Disclosed Shortlist";
const description =
    "Compare eight Next.js and software-engineering partners from current first-party evidence, with transparent inclusion rules and questions for validating scope, team and acceptance.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Next.js development agencies 2026",
        "Next.js agency",
        "Next.js migration company",
        "Next.js development partner",
        "headless CMS agency",
        "best Next.js agency 2026",
        "Next.js agency comparison",
        "how to choose a Next.js agency",
        "fixed price Next.js agency",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-25",
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/top-nextjs-agencies-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Pagepro", url: "https://pagepro.co/" },
    { name: "FocusReactive", url: "https://focusreactive.com/" },
    { name: "Naturaily", url: "https://naturaily.com/" },
    { name: "Blazity", url: "https://www.blazity.com/services/next-js-platform-development" },
    { name: "Bejamas", url: "https://bejamas.com/" },
    { name: "Netguru", url: "https://www.netguru.com/" },
    { name: "Brainhub", url: "https://brainhub.eu/" },
    { name: "PandaCodeGen", url: "https://www.pandacodegen.com/services" },
    { name: "Vercel solution partners directory", url: "https://vercel.com/partners/solution-partners" },
    { name: "Next.js deployment documentation", url: "https://nextjs.org/docs/app/getting-started/deploying" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/top-nextjs-agencies-2026"),
            description,
            datePublished: "2026-05-25",
            dateModified: "2026-08-03",
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
            wordCount: 2585,
            timeRequired: "PT13M",
            about: [
                { "@type": "Thing", name: "Next.js", sameAs: ["https://nextjs.org/", "https://en.wikipedia.org/wiki/Next.js"] },
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Headless CMS", sameAs: ["https://en.wikipedia.org/wiki/Headless_content_management_system"] },
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
                { "@type": "ListItem", position: 3, name: "Next.js agency shortlist", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-25",
            dateModified: "2026-08-03",
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

const agencies = [
    {
        name: "Bejamas",
        publicEvidence: "Audits, design, migration and ongoing operation for modern content platforms",
        likelyFit: "Legacy CMS and multi-site migration with an ongoing web-team model",
        verify: "Named Next.js team, target CMS, migration inventory and operating scope",
        url: "https://bejamas.com/",
    },
    {
        name: "Blazity",
        publicEvidence: "Next.js platform development, performance engineering and modernization",
        likelyFit: "Revenue-critical platforms and complex engineering-led migrations",
        verify: "Architecture ownership, knowledge transfer, staffing and acceptance evidence",
        url: "https://www.blazity.com/services/next-js-platform-development",
    },
    {
        name: "Brainhub",
        publicEvidence: "Software delivery, web development, modernization and team augmentation",
        likelyFit: "Broader product engineering where Next.js is one part of the requirement",
        verify: "Current Next.js delivery examples and the assigned framework-specific team",
        url: "https://brainhub.eu/",
    },
    {
        name: "FocusReactive",
        publicEvidence: "Next.js, composable CMS, ecommerce and migration",
        likelyFit: "Content-heavy, multi-market and headless CMS websites",
        verify: "CMS fit, editorial workflow, localization and performance methodology",
        url: "https://focusreactive.com/",
    },
    {
        name: "Naturaily",
        publicEvidence: "Next.js, Vercel, headless CMS and commerce services",
        likelyFit: "Composable content or commerce with deployment and support needs",
        verify: "Proposed vendors, integration ownership, support and total operating cost",
        url: "https://naturaily.com/",
    },
    {
        name: "Netguru",
        publicEvidence: "Broad product, commerce and software engineering with Next.js listed",
        likelyFit: "Larger cross-functional product or commerce programs",
        verify: "Dedicated team, Next.js share of scope, governance and handoff model",
        url: "https://www.netguru.com/",
    },
    {
        name: "Pagepro",
        publicEvidence: "Next.js, React, headless CMS and migration services",
        likelyFit: "Frontend-led and content-platform work",
        verify: "Starter or reusable components, customization boundary and account control",
        url: "https://pagepro.co/",
    },
    {
        name: "PandaCodeGen",
        publicEvidence: "SEO-safe platform migrations and custom Next.js delivery",
        likelyFit: "Scoped migrations and builds using published starting tiers",
        verify: "Signed scope, first-party references, acceptance terms and support",
        url: "https://www.pandacodegen.com/services",
    },
];

export default function TopNextjsAgenciesPage() {
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
                            { label: "Next.js agency shortlist", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agency selection</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Next.js Development Agencies: <span className="italic text-cognac">A Disclosed 2026 Shortlist</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Eight firms worth looking at, described from what each one currently says on its own service
                            pages. This is not an independent ranking. We are not treating anyone&apos;s Clutch score,
                            minimum project size or hourly rate as a fixed fact, and we are not claiming any of them is
                            better than the others.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Researched July 24, 2026. Confirm services, availability and commercial terms directly.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 25, 2026" readTime="8 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <InsightBox variant="warning" label="Commercial disclosure">
                        PandaCodeGen publishes this comparison, provides Next.js services, and is one of the eight
                        options. The table is alphabetical and non-ranked. No company paid for inclusion.
                    </InsightBox>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Choose for the migration, product and operating problem, not for the framework label alone.",
                                "Demand current evidence from the team that will actually deliver the work.",
                                "Normalize every proposal to one scope, acceptance method and ownership model.",
                                "Treat first-party service claims as shortlist evidence, not independent proof of quality.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Search, title: "Evidence", body: "Current services and comparable delivery." },
                            { icon: Braces, title: "Architecture", body: "Rendering, data, CMS, hosting and integrations." },
                            { icon: Gauge, title: "Acceptance", body: "Reproducible UX, function, SEO and performance tests." },
                            { icon: ClipboardCheck, title: "Handoff", body: "Accounts, code, licenses, runbooks and support." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>Method and limits</BlogHeader>
                    <BlogText>
                        The eight names were preserved from the original article. On July 24, 2026, we checked each
                        provider&apos;s official site for current service evidence and classified the likely buying
                        fit. We removed the unsupported claim that these companies were the agencies most cited by AI
                        engines. We also removed third-party review totals, fixed minimums, rate bands, company-size
                        claims and unverified client outcomes.
                    </BlogText>
                    <InsightBox variant="info" label="A shortlist, not a quality score">
                        An official service page can show that a provider markets a capability. It cannot establish the
                        quality or availability of the assigned team. Validate that through a proposal, technical
                        conversation, references and contractual evidence.
                    </InsightBox>

                    <BlogText>
                        One signal you can check yourself, without asking anyone: Vercel runs a partner program and
                        publishes a{" "}
                        <a href="https://vercel.com/partners/solution-partners" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>public Solution Partner directory</a>.
                        Vercel defines Solution Partners as agencies, consultancies and system integrators, sorts them
                        into Platinum, Gold and Silver tiers, and lets you filter by expertise, framework, budget, tier,
                        certification and region. It listed 114 partners when we checked it on August 2, 2026. Read it
                        for what it is: a record of a commercial relationship with one hosting vendor. A listing is not
                        a quality verdict and an absence is not a defect, because plenty of capable Next.js teams deploy
                        to AWS, Cloudflare or a client&apos;s own infrastructure and never join. PandaCodeGen is not
                        listed in it. It is still a dated, first-party register you can open in one click, which is more
                        than any roundup on this topic gives you.
                    </BlogText>

                    <BlogHeader>The eight providers compared</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Eight providers, listed alphabetically and not ranked, each described only from what its own site publishes as of the check date below. The middle column is deliberately thin: it records what a firm demonstrates about itself, not what a directory says about it. Everything in the right-hand column is what you still have to establish by asking.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[1040px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Provider</th>
                                    <th className="p-4">Current first-party evidence</th>
                                    <th className="p-4">Potential fit</th>
                                    <th className="p-4">Verify before selection</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                {agencies.map((agency) => (
                                    <tr key={agency.name}>
                                        <td className="p-4 align-top font-bold text-charcoal">
                                            <a href={agency.url} target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>
                                                {agency.name}
                                            </a>
                                        </td>
                                        <td className="p-4 align-top">{agency.publicEvidence}</td>
                                        <td className="p-4 align-top">{agency.likelyFit}</td>
                                        <td className="p-4 align-top">{agency.verify}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>Content and CMS migration specialists</BlogHeader>
                    <BlogText>
                        <a href="https://bejamas.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Bejamas</a>
                        {" "}currently positions around auditing, migrating and operating modern content platforms,
                        with public Next.js work.
                        <a href="https://focusreactive.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> FocusReactive</a>
                        {" "}describes Next.js, composable CMS, ecommerce, localization and migration services.
                        <a href="https://pagepro.co/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Pagepro</a>
                        {" "}publishes Next.js, React and headless CMS services and material about its reusable delivery
                        foundation. For any of these, verify content modeling, editor workflow, URL handling and how
                        much of the implementation is custom to the project, and get the CMS named before you compare
                        quotes. Sanity, Storyblok, Contentful, Payload, DatoCMS, Directus, Hygraph and WordPress in
                        headless mode all sit behind the phrase &ldquo;headless CMS&rdquo;, and they price, model
                        content and handle localization differently.
                    </BlogText>

                    <BlogHeader>Platform, performance and product engineering</BlogHeader>
                    <BlogText>
                        <a href="https://www.blazity.com/services/next-js-platform-development" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Blazity</a>
                        {" "}publicly focuses on Next.js platforms, performance and modernization.
                        <a href="https://naturaily.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Naturaily</a>
                        {" "}publishes Next.js, Vercel, CMS and commerce services.
                        <a href="https://www.netguru.com/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}> Netguru</a>
                        {" "}lists Next.js within a much broader product and commerce engineering practice. The choice
                        depends on whether the project needs a focused website team or a wider cross-functional program.
                    </BlogText>
                    <BlogText>
                        <a href="https://brainhub.eu/" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Brainhub</a>
                        {" "}currently presents broader software delivery, web development, modernization and team
                        augmentation, with React, Node.js and TypeScript among its public technologies. Its current
                        homepage does not establish a dedicated Next.js practice by itself, so ask for current
                        framework-specific work and the assigned team before treating it as a direct Next.js
                        specialist.
                    </BlogText>

                    <BlogHeader>Where PandaCodeGen may fit</BlogHeader>
                    <BlogText>
                        PandaCodeGen focuses on SEO-safe migrations for revenue-generating{" "}
                        <Link href="/services/wordpress-migration" className={sourceLinkClass}>WordPress</Link>,{" "}
                        <Link href="/services/webflow" className={sourceLinkClass}>Webflow</Link> and{" "}
                        <Link href="/services/gohighlevel" className={sourceLinkClass}>GoHighLevel</Link> sites, plus{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>scoped custom Next.js work</Link>.{" "}
                        <Link href="/pricing" className={sourceLinkClass}>Public starting tiers</Link> are $1,500 Starter,
                        $3,500 Growth and $5,000 to $10,000 Scale. Larger or unusually complex scope is discussed
                        separately. A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed under the
                        signed agreement.
                    </BlogText>
                    <BlogList
                        items={[
                            "15 business days of launch defect support on Starter; 30 business days on Growth and Scale.",
                            "Client content remains the client's, while custom-deliverable transfer follows full payment and the contract.",
                            "PandaCodeGen retains reusable tools and pre-existing code; third-party licenses continue to apply.",
                            "The client can control domain, repository, hosting and business accounts when that operating model is agreed.",
                            "A 90+ target requires representative pages, mobile and desktop profiles, three consecutive tests and a written remedy.",
                        ]}
                    />
                    <BlogText>
                        The people who would do the work are named on the{" "}
                        <Link href="/about" className={sourceLinkClass}>PandaCodeGen team page</Link>, and delivered
                        projects are written up in the{" "}
                        <Link href="/work" className={sourceLinkClass}>case study section</Link>. Apply the same
                        evidence test to every provider on this page.
                    </BlogText>

                    <BlogHeader>Do not hire a framework label</BlogHeader>
                    <BlogText>
                        Next.js can be deployed as a Node.js server, Docker container, static export or through adapters,
                        with support varying by deployment model. The difference is not cosmetic. The Next.js
                        documentation states that Incremental Static Regeneration is supported on a Node.js server and
                        in Docker, is not supported with a static export, and is platform-specific through adapters, so
                        the hosting decision constrains how content gets updated. A provider who proposes one without
                        the other has not finished the design. That flexibility does not decide the correct CMS,
                        caching, data ownership, security or operating model. Require an architecture decision record
                        that connects each material choice to the signed requirements.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which pages are static, dynamic, cached or personalized, and why?",
                            "Who owns the CMS, repository, deployment, secrets and business accounts?",
                            "How are preview, publishing, rollback, monitoring and incident response handled?",
                            "What data crosses third parties, and how does consent affect tags and measurement?",
                            "Which integrations are custom, vendor-managed or portable?",
                        ]}
                    />

                    <BlogHeader>Migration and SEO acceptance</BlogHeader>
                    <BlogText>
                        A framework change does not guarantee ranking retention. Google recommends careful site-move
                        planning, URL mapping, relevant redirects, sitemap updates and monitoring. Require a dated URL
                        inventory, rendered-output checks, canonical and index-directive validation, redirect tests,
                        structured-data checks and Search Console monitoring. Search engines still control crawling,
                        indexing and rankings.
                    </BlogText>
                    <BlogText>
                        Two longer references cover that ground:{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what a migration does to search visibility</Link>{" "}
                        and the step-by-step{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className={sourceLinkClass}>WordPress to Next.js migration walkthrough</Link>.
                    </BlogText>

                    <BlogHeader>Performance acceptance</BlogHeader>
                    <BlogText>
                        A Next.js site has no automatic <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> score. Code, images, fonts, data, cache behavior,
                        consent state and third-party scripts all affect results. For PandaCodeGen&apos;s 90+ target,
                        record representative pages, mobile and desktop profiles, the test environment and three
                        consecutive results per page and profile. Other providers should define their own test and
                        remedy just as clearly. If the difference between lab and field measurement is new to the team,{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>{" "}
                        sets out both.
                    </BlogText>

                    <BlogHeader>How the shortlist was assembled</BlogHeader>
                    <BlogText>
                        The eight names were drawn from providers that appear repeatedly across publicly available 2026
                        Next.js agency roundups, including those published by DesignRush, Clutch, GitNation, Design
                        Revision, and by two of the agencies themselves. Appearing on several such lists indicates
                        visibility, not verified quality. Several of those roundups are published by agencies that
                        include themselves, exactly as this one does. Treat frequency of appearance as a reason to look,
                        not as evidence of outcome.
                    </BlogText>
                    <BlogText>
                        Providers were excluded where their public positioning suggested a different category rather than
                        a different quality level: enterprise staff augmentation, general software consultancies where
                        Next.js is one stack among many, and design-led studios that deliver frontend work in several
                        frameworks. Those firms may well be the better answer for the right project. They are simply not
                        comparable on a like-for-like basis with a scoped Next.js build, which is what this page is for.
                    </BlogText>
                    <BlogText>
                        Related shortlists cover adjacent categories: our{" "}
                        <Link href="/blog/top-custom-web-development-agencies-usa-2026" className={sourceLinkClass}>disclosed shortlist of US custom development agencies</Link>,{" "}
                        a closer look at{" "}
                        <Link href="/blog/pagepro-alternatives" className={sourceLinkClass}>Pagepro alternatives by scope and fit</Link>, and the{" "}
                        <Link href="/blog/website-developer-agency" className={sourceLinkClass}>buyer guide to selecting a development agency</Link>.
                    </BlogText>

                    <BlogHeader>The difference that actually shows up in procurement</BlogHeader>
                    <BlogText>
                        Most of these providers are competent, and competence is not what separates them at the shortlist
                        stage. The structural difference you will feel first is <strong>how each one gets you to a
                        number</strong>. Some publish fixed starting tiers on their site; most quote per enquiry after a
                        discovery call.
                    </BlogText>
                    <BlogList
                        items={[
                            "Published fixed tiers give you a budget figure before you speak to anyone, at the cost of scope being defined tightly per tier. Work that does not fit the tier becomes a separately priced addition.",
                            "Inquiry-based quoting lets the provider tune scope to your budget and constraints, but you cannot compare on price until you have invested time in calls with each of them.",
                            "Neither model is better. They fail differently: published tiers can under-scope an unusual project, and bespoke quoting can produce numbers you cannot compare because each provider scoped something different.",
                        ]}
                    />
                    <BlogText>
                        For the inputs behind either model, see{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className={sourceLinkClass}>what shapes the cost of a custom website</Link>{" "}
                        and{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={sourceLinkClass}>how long a custom build takes</Link>.
                    </BlogText>
                    <InsightBox variant="info" label="Whichever model you are quoted under">
                        Normalize every proposal to the same scope before comparing, using the sheet below. Two quotes
                        that differ by a factor of three usually describe two different projects rather than two different
                        prices, and the cheaper one is often the one that has not yet found the work.
                    </InsightBox>

                    <BlogHeader>If the quotes are coming back too big for the project</BlogHeader>
                    <BlogText>
                        A pattern worth recognizing rather than taking personally: a team sized for enterprise work will
                        price a small site at its minimum engagement rather than at the project&apos;s real scope. That
                        is not overcharging. It is what happens when a five-page brief meets a delivery model built for
                        multi-month programs. If the numbers coming back look unrelated to the size of what you asked
                        for, you are probably talking to the wrong shape of provider rather than being quoted unfairly.
                    </BlogText>
                    <BlogText>
                        The other trap sits at the opposite end. A low hourly rate tells you almost nothing on its own,
                        because the rate is not the price. A generalist at a modest rate who needs twenty hours for a
                        feature costs more than a senior who needs six, and you will not find that out until the
                        invoice. <BlogHighlight>The number worth comparing is cost per finished feature, not cost per
                        hour.</BlogHighlight> Ask what a specific piece of your scope will cost in total, and compare
                        those totals.
                    </BlogText>

                    <BlogHeader>Three questions that separate a Next.js build from a Next.js label</BlogHeader>
                    <BlogText>
                        You do not need to be technical to ask these, and the quality of the answer tells you more than
                        any portfolio page. Ask them of every provider on your shortlist, including us.
                    </BlogText>
                    <BlogList
                        items={[
                            "Show me a live site you built on the App Router using Server Components. Not a description, a URL. The framework has had two very different routing models and the older one is still widely shipped.",
                            "How do you decide what renders on the server versus in the browser? A real answer talks about where the data comes from and what it costs to send JavaScript to the visitor. A shrug, or \u201cwhatever the project needs\u201d, is the answer you are testing for.",
                            "What happens to content that changes after launch? The mechanism has a name: Incremental Static Regeneration. The Next.js documentation describes ISR as a way to update static content without rebuilding the entire site, serve prerendered pages for most requests, and handle large numbers of content pages without long build times. You are listening for whether they can say which routes revalidate on a timer, which revalidate on demand, and what triggers it.",
                        ]}
                    />
                    <BlogText>
                        None of those questions require you to evaluate the answer technically. They require the
                        provider to have one. A team that answers all three clearly is worth more than a cheaper team
                        that cannot, and that holds whichever name on this page you end up choosing.
                    </BlogText>

                    <BlogHeader>One comparison sheet for every proposal</BlogHeader>
                    <BlogText>
                        Force every proposal onto the same eleven line items and the quotes become comparable. Scope inventory and the named CMS, migration and acceptance evidence, performance stated as pages and profiles and run count rather than as a score, commercial terms, and handover. Ask the regulated-data question early rather than late, because the answer can eliminate a provider before you have spent time on them.
                    </BlogText>
                    <BlogList
                        items={[
                            "Business outcomes and required journeys.",
                            "Pages, components, content, data and integrations in scope.",
                            "CMS and editor workflow.",
                            "SEO and migration evidence.",
                            "Accessibility, browser, device and functional acceptance.",
                            "Performance pages, profiles, run count and remedy.",
                            "Security, privacy, consent and incident responsibility.",
                            "Regulated-data handling, if it applies. Ask directly whether the provider will execute a Business Associate Agreement for protected health information, a Data Processing Agreement under GDPR, or any equivalent your sector requires. Ask before shortlisting, not after selection, because the answer can remove a provider entirely. PandaCodeGen will execute a BAA where a project involves PHI.",
                            "Team, schedule, dependencies and change control.",
                            "Price, payment, support and ongoing operating cost.",
                            "Accounts, repository, content, custom deliverables and third-party licenses.",
                        ]}
                    />

                    <BlogHeader>Sources and update policy</BlogHeader>
                    <BlogText>
                        Provider descriptions were checked against the official pages linked above on July 24, 2026,
                        and every provider link on this page was reconfirmed as reachable on August 2, 2026. Those are
                        two different checks and it is worth keeping them apart: a working link is not evidence that
                        the description beneath it is still current. The descriptions are not independently audited.
                        Reconfirm the evidence during procurement, because team, services, pricing and availability can
                        all change without the URL changing. The framework and migration guidance links to
                        current Next.js documentation, cited in this page&apos;s structured data.
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
                        <h2 className="mb-3 font-serif text-3xl">Get a migration plan you can compare</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory the current site, identify SEO and integration risks, and turn the work
                            into a written scope. Use it to evaluate PandaCodeGen or another qualified Next.js partner.
                        </p>
                        <QuoteModalButton cta="top_nextjs_agencies_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
