import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, FileCode2, KeyRound, Server, UserRoundCog } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogText, ComparisonGrid } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "do-you-own-your-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/do-you-own-your-website";
const title = "Do You Own Your Website? A Contract and Control Checklist";
const description =
    "Website ownership is more than source code. Check copyright, licenses, domain, hosting, repository, business accounts, data, access, payment, and handover terms.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/do-you-own-your-website" },
    keywords: [
        "do I own my website",
        "who owns my website",
        "website source code ownership",
        "website copyright transfer",
        "domain and hosting ownership",
        "website handover checklist",
        "does my developer own my website",
        "developer holding website hostage",
        "what happens if my web developer disappears",
        "website source code transfer contract",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-06-03",
        modifiedTime: "2026-08-01",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/do-you-own-your-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/do-you-own-your-website"),
            datePublished: "2026-06-03",
            dateModified: "2026-08-01",
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
            articleSection: "Guide",
            inLanguage: "en-US",
            wordCount: 2495,
            timeRequired: "PT12M",
            about: [
                { "@type": "Thing", name: "Copyright", sameAs: ["https://en.wikipedia.org/wiki/Copyright"] },
                { "@type": "Thing", name: "Work for hire", sameAs: ["https://en.wikipedia.org/wiki/Work_for_hire"] },
                { "@type": "Thing", name: "Domain name", sameAs: ["https://en.wikipedia.org/wiki/Domain_name"] },
                { "@type": "Thing", name: "Website ownership" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: [
                {
                    "@type": "CreativeWork",
                    name: "U.S. Copyright Office: Copyright Basics, Circular 1",
                    url: "https://www.copyright.gov/circs/circ01.pdf",
                },
                {
                    "@type": "CreativeWork",
                    name: "U.S. Copyright Office: Works Made for Hire, Circular 30",
                    url: "https://www.copyright.gov/circs/circ30.pdf",
                },
                {
                    "@type": "CreativeWork",
                    name: "17 U.S.C. 101: Definitions, including work made for hire",
                    url: "https://www.law.cornell.edu/uscode/text/17/101",
                },
                {
                    "@type": "CreativeWork",
                    name: "17 U.S.C. 204: Execution of transfers of copyright ownership",
                    url: "https://www.law.cornell.edu/uscode/text/17/204",
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Do You Own Your Website?", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-06-03",
            dateModified: "2026-08-01",
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

const sourceLinkClass = "font-medium text-cognac underline underline-offset-4 hover:text-charcoal";

export default function DoYouOwnYourWebsitePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal md:pb-20 md:pt-32">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb items={postCrumbs(postId, "Do You Own Your Website?")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Ownership and handover</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Do You Own Your Website? <span className="italic text-cognac">Check the Contract and the Controls</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Paying for a website does not answer every ownership question. Copyright, licenses,
                            source access, domain registration, hosting, SaaS accounts, data, and credentials are
                            different rights and controls. Put each one in writing.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 1, 2026. General U.S.-first information, not legal advice. Ask qualified counsel to review your agreement and jurisdiction.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="June 3, 2026"
                        readTime="9 min read"
                        bio="Hassan leads PandaCodeGen's engineering handover, account-control, and migration planning work."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Do not assume payment alone transfers every copyright or grants every source-code right.",
                                "Work-made-for-hire treatment is fact-specific and narrower for commissioned contractor work than many website articles suggest.",
                                "A copyright transfer generally needs a signed writing in the United States.",
                                "You control the domain, the hosting, the code, the CMS, analytics, email, the store, the CRM and every other account named in the project.",
                                "Separate custom deliverables from agency pre-existing tools and third-party components that retain their own licenses.",
                                "Say when ownership transfers, normally on full payment, and what happens if you cancel: refunds, support, getting your data back, and help leaving.",
                            ]}
                        />
                    </section>

                    <BlogHeader>The legal default is more nuanced than “the developer owns it”</BlogHeader>
                    <BlogText>
                        The U.S. Copyright Office says copyright normally begins with the human author when an original
                        work is fixed. It also recognizes important exceptions and contractual changes. An employee&apos;s
                        work created within the scope of employment can be a work made for hire. Specially commissioned
                        contractor work qualifies as work made for hire only when statutory conditions are met,
                        including a signed agreement and one of the listed categories.
                    </BlogText>
                    <BlogText>
                        That means the popular sentence &quot;your developer owns your entire website by default&quot;
                        is too broad. A website combines many things: client content and trademarks, newly written code,
                        pre-existing code, open-source packages, stock media, fonts, platform services, data, and
                        configuration. Different rules and agreements can apply to each.
                    </BlogText>
                    <BlogText>
                        The U.S. Copyright Office also explains that a copyright transfer generally must be in writing
                        and signed by the owner of the rights conveyed. A good contract therefore does not rely on a
                        slogan. It identifies the deliverables, rights, licenses, exclusions, payment condition, and
                        transfer event. Counsel should adapt that language to the parties and governing law.
                    </BlogText>
                    <BlogText>
                        It is worth being clear about which way that nuance cuts, because the correction can be read as
                        reassurance and it is not one. The reason the popular sentence is too broad is that a website is
                        many works at once, not that a client is likely to own the code by default. On the code an
                        outside developer writes for you, the statutory route to work-made-for-hire treatment needs both
                        a signed agreement and one of the categories the statute lists, and commissioned website code
                        generally does not sit in those categories. That is precisely why the signed-writing requirement
                        matters so much in practice: where a contract says nothing, the safe assumption is that the
                        rights in that code did not move to you, whatever the invoice says.
                    </BlogText>
                    <BlogText>
                        The practical consequence is small and unglamorous. If your agreement is silent on ownership, you
                        do not have an argument to win later, you have a document to fix now, ideally before the next
                        payment. That is a conversation, not a dispute, and it is far easier while everyone is still
                        pleased with the work. This remains general information rather than advice on your situation.
                    </BlogText>

                    <BlogHeader id="work-for-hire">Does a &ldquo;work made for hire&rdquo; clause mean you own the website?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Usually not on its own, and this is the most repeated wrong answer on the topic. Under
                            17 U.S.C. &sect;101 a specially commissioned work only qualifies as a work made for hire
                            only if the parties expressly agree in a written instrument signed by both of them that it is a work made for hire, <em>and</em> it falls into one of nine listed categories.
                            Commissioned website code generally does not sit in those categories, so a contract that
                            simply calls the work &ldquo;work made for hire&rdquo; can fail to move anything. What
                            reliably transfers copyright is a written assignment signed by the author, which is what
                            17 U.S.C. &sect;204(a) requires. If ownership matters to you, look for the word
                            <em> assignment</em> in your agreement, not the phrase work made for hire.
                        </BlogText>
                    </div>
                    <BlogText>
                        This is general information about US copyright law rather than advice on your situation, and
                        governing law varies. But it is worth knowing before you accept a reassurance, because the two
                        phrases are treated as interchangeable almost everywhere and they are not. The practical move is
                        the same either way: read what your agreement actually says about the code, and fix it now if it
                        says nothing.
                    </BlogText>

                    <BlogHeader id="builders">Do website builders own your website?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            They own the platform, you own your content, and the thing in between, the site as it
                            exists, is usually not portable rather than not yours. On a hosted builder the layouts,
                            components and rendering belong to the platform, so what you can take with you is whatever
                            it lets you export. That is why the ownership question on a builder is answered by the
                            export documentation rather than by the contract: it does not matter who owns a template you
                            cannot remove from the platform.
                        </BlogText>
                    </div>
                    <BlogText>
                        Check the specific limits before you commit, because they differ sharply. Our breakdowns of{" "}
                        <Link href="/blog/webflow-true-cost" className={sourceLinkClass}>what Webflow does and does not export</Link>,{" "}
                        <Link href="/blog/is-squarespace-bad-for-seo" className={sourceLinkClass}>Squarespace&apos;s structural limits</Link>{" "}
                        and{" "}
                        <Link href="/blog/wix-migration-cost" className={sourceLinkClass}>what a Wix export actually contains</Link>{" "}
                        each set out the real boundary for that platform.
                    </BlogText>

                    <BlogHeader>Eight things to control or document</BlogHeader>
                    <BlogText>
                        Ownership is specific or it is nothing. Four categories have to be named rather than assumed: the custom deliverables themselves, the domain registration and its recovery path, the hosting and infrastructure accounts, and every business service the site depends on. The test is simple: can you sign in, can you pay the bill, and can you remove anyone including us?
                    </BlogText>
                    <div className="my-8 grid gap-4 sm:grid-cols-2">
                        {[
                            { icon: FileCode2, title: "Custom deliverables", body: "Name the source files, designs, documentation, content models, configuration, and other project-specific work covered by the transfer or license." },
                            { icon: KeyRound, title: "Domain registration", body: "Record the registrant, registrar account, billing contact, renewal method, recovery email, MFA, and authorized administrators." },
                            { icon: Server, title: "Hosting and infrastructure", body: "Identify the account owner, projects, databases, storage, DNS, environment variables, billing, logs, backups, and transfer or export process." },
                            { icon: UserRoundCog, title: "Business services", body: "Cover CMS, repository, analytics, consent, email, CRM, commerce, ads, calendars, search, support, and monitoring accounts." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-700">{body}</p>
                            </div>
                        ))}
                    </div>
                    <BlogList
                        items={[
                            "Client materials: content, data, brand assets, trademarks, photography, product records, and anything supplied by the client.",
                            "Agency background materials: reusable tools, templates, methods, libraries, know-how, and pre-existing code that are not sold as exclusive custom work.",
                            "Third-party materials: packages, fonts, images, themes, APIs, services, and other components whose original licenses and vendor terms continue to apply.",
                            "Operational knowledge: build instructions, deployment steps, diagrams, vendor list, account map, support contacts, recovery process, and known limitations.",
                        ]}
                    />
                    <BlogText>
                        Where the site sits on a hosted platform, the third-party column above is larger than it looks,
                        because the platform itself is one of the components. Our comparisons of{" "}
                        <Link href="/blog/wix-vs-custom-website" className="text-cognac hover:underline font-medium">Wix</Link>,{" "}
                        <Link href="/blog/squarespace-vs-custom-website" className="text-cognac hover:underline font-medium">Squarespace</Link>,{" "}
                        <Link href="/blog/webflow-vs-custom-website" className="text-cognac hover:underline font-medium">Webflow</Link>,{" "}
                        <Link href="/blog/shopify-vs-custom-website" className="text-cognac hover:underline font-medium">Shopify</Link>{" "}
                        and{" "}
                        <Link href="/blog/woocommerce-vs-custom-website" className="text-cognac hover:underline font-medium">WooCommerce</Link>{" "}
                        against a custom build each set out what stays with the platform in that arrangement.
                    </BlogText>

                    <ComparisonGrid
                        left={{
                            label: "Renting the arrangement",
                            items: [
                                "The domain sits in the developer's registrar account",
                                "The live environment is an account you cannot sign into",
                                "Content lives in a proprietary system you can export text from, but not the working site",
                                "No repository, build instructions or environment configuration, so leaving means rebuilding",
                            ],
                        }}
                        right={{
                            label: "Owning the arrangement",
                            items: [
                                "The domain is registered to your company, with your recovery email and MFA",
                                "Hosting and services sit in accounts you can sign into and pay for",
                                "You hold the administrator role and can remove anyone, including your agency",
                                "Repository, build steps and configuration delivered and tested by someone else",
                            ],
                        }}
                    />

                    <BlogHeader>Source code access is not the same as unlimited ownership</BlogHeader>
                    <BlogText>
                        Receiving a repository is useful, but it does not erase third-party licenses or automatically
                        transfer an agency&apos;s pre-existing framework. Conversely, a client can receive a broad,
                        practical right to use, modify, host, and change providers even when some reusable components
                        remain licensed rather than assigned.
                    </BlogText>
                    <BlogText>
                        Ask the agreement to answer: Which branch and history are delivered? Are build and deployment
                        instructions included? Are there private packages? What secrets are excluded from source
                        control? Can another developer operate the project? Which assets have use limits? What happens
                        to incomplete or unpaid work? These details matter more than a bare promise of &quot;full code.&quot;
                    </BlogText>

                    <BlogHeader>Account control needs an operating plan</BlogHeader>
                    <BlogText>
                        Client-controlled accounts are usually the cleanest exit path, but they still require role-based
                        access, MFA, billing ownership, recovery contacts, and offboarding. Giving everyone the owner
                        password is not control; it is a security problem.
                    </BlogText>
                    <BlogList
                        items={[
                            "Use company-controlled email addresses for account ownership and recovery where practical.",
                            "Give the agency the least privilege needed through individual roles, not a shared owner login.",
                            "Record who pays each vendor and who receives renewal, usage, security, and incident notices.",
                            "Store recovery codes and break-glass access in an approved password manager.",
                            "Define how access is removed, credentials rotate, logs are retained, and data is exported when the engagement ends.",
                            "Test that the client can deploy, restore, edit content, change DNS, and contact vendors before final handover.",
                        ]}
                    />
                    <BlogText>
                        Those tests are also what makes a future move possible. Our{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost assessment</Link>{" "}
                        covers the work involved in changing providers, and our article on{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline font-medium">what happens to search visibility during a migration</Link>{" "}
                        covers the part of the handover that has to be monitored afterwards.
                    </BlogText>

                    <BlogHeader>Five ways lock-in actually happens</BlogHeader>
                    <BlogText>
                        Each control above fails in a recognizable way. Naming the failure modes makes them easier to
                        write out of an agreement before work starts.
                    </BlogText>
                    <BlogList
                        items={[
                            "Domain: the registrar account is held in the developer's name, so transfer, DNS changes and renewal all depend on their cooperation.",
                            "Hosting: the live environment sits in an account the client cannot sign into, so the working site cannot be moved, restored or handed to anyone else.",
                            "Source: the client has a live site but no repository, build instructions or environment configuration, so changing provider means rebuilding rather than continuing.",
                            "Editing: content sits in a proprietary system, so text and images can be exported while the working site cannot.",
                            "Backup copies: where a provider retains a copy of delivered code, the terms should say whether it is held as recovery insurance for the client, for how long, and on what request process.",
                        ]}
                    />
                    <BlogText>
                        None of these requires bad intent at the start. They follow from an agreement that never
                        allocated the control, which is why the remedy is written terms and a tested handover rather
                        than a dispute afterwards.
                    </BlogText>

                    <BlogHeader>What PandaCodeGen intends to put in the project terms</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s public position is contract-first. The client keeps its content, data,
                        brand assets, and client-controlled accounts. Rights in paid custom deliverables and repository
                        transfer are defined in the accepted terms, normally after full payment. PandaCodeGen retains
                        reusable internal tools, templates, methods, and pre-existing code. Embedded third-party
                        components retain their original licenses.
                    </BlogText>
                    <BlogText>
                        When agreed, the client can control the domain, hosting, repository, and business accounts.
                        PandaCodeGen can also manage services for the client when that is the preferred operating model.
                        The SOW should name the account owner, billing owner, access roles, handover event, data export,
                        and exit process. <BlogHighlight>The phrase “no lock-in” is meaningful only when those controls
                        have been tested.</BlogHighlight> The test of a delivery arrangement is not whether you would
                        leave it. It is whether you could.
                    </BlogText>
                    <BlogText>
                        Our{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering service</Link>{" "}
                        page describes the delivery and handover process behind those terms, our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">engagement tiers</Link>{" "}
                        show where support and handover sit in a package, and our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">delivered project write-ups</Link>{" "}
                        show the arrangement in practice.
                    </BlogText>

                    <BlogHeader>Refunds and incomplete work need separate language</BlogHeader>
                    <BlogText>
                        The owner-approved refund intent permits repayment of the full amount when PandaCodeGen fails
                        to deliver the signed contractual scope under the agreement&apos;s acceptance and remedy process. It is not an
                        unconditional change-of-mind promise. The contract should state the refundable amount,
                        cancellation treatment, approval process, timing, and what happens to work in progress.
                    </BlogText>
                    <BlogText>
                        The client keeps its own content and materials. Unpaid or incomplete project code does not
                        automatically transfer merely because a refund occurs; the accepted terms must say what is
                        returned, deleted, retained, or licensed. An approved refund is subject to the public processing
                        window of up to 10 to 12 business days.
                    </BlogText>

                    <BlogHeader>One question to ask before you sign</BlogHeader>
                    <BlogText>
                        The full list below belongs in the statement of work. If only one question fits into an early
                        conversation, use this one and ask for the answer in writing:
                    </BlogText>
                    <BlogHighlight>
                        “Which source files, design assets, domains, hosting and business accounts will sit in our own
                        accounts or transfer to us, at what point, and will that be written into the agreement?”
                    </BlogHighlight>
                    <BlogText>
                        A provider that already works this way answers directly and puts it in the scope. Vagueness, or
                        a preference for holding the domain or hosting &quot;to keep things simple&quot;, is the point
                        to slow down and ask for specifics. Ownership terms are easiest to settle while both sides are
                        happy with the engagement.
                    </BlogText>

                    <BlogHeader>Questions to put in the SOW before onboarding</BlogHeader>
                    <BlogText>
                        Eight questions belong in the statement of work before any work starts, because after launch they become negotiations. What counts as a custom deliverable and when its rights transfer, what agency material is excluded and under what license, which third-party components carry their own terms, who controls each account, what is handed over, and what happens on nonpayment or termination.
                    </BlogText>
                    <BlogList
                        items={[
                            "What exactly is a custom deliverable, and when do its rights transfer?",
                            "What pre-existing agency materials remain excluded, and what license does the client receive to embedded items?",
                            "Which third-party components and services are used, under which licenses and current costs?",
                            "Who controls the domain, DNS, hosting, repository, CMS, data stores, email, analytics, commerce, CRM, and advertising accounts?",
                            "What credentials, documentation, exports, and training are delivered at handover?",
                            "What happens after nonpayment, termination, refund, or a material scope change?",
                            "What support period applies, when does it start, and what work is excluded?",
                            "What confidentiality, data-processing, backup, deletion, and security duties survive the engagement?",
                        ]}
                    />
                    <BlogText>
                        Our breakdown of{" "}
                        <Link href="/blog/custom-website-5000-whats-included" className="text-cognac hover:underline font-medium">what a Scale statement of work can include</Link>{" "}
                        shows how these answers appear in a written scope. When you are comparing providers on those
                        answers, our notes on{" "}
                        <Link href="/blog/cheap-web-developer" className="text-cognac hover:underline font-medium">what a low quoted rate leaves out</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-developer-agency" className="text-cognac hover:underline font-medium">how to assess a development agency</Link>{" "}
                        cover the same ground from the buying side.
                    </BlogText>

                    <BlogHeader>Primary legal references</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><a href="https://www.copyright.gov/circs/circ01.pdf" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>U.S. Copyright Office Circular 1: Copyright Basics</a></li>
                        <li><a href="https://www.copyright.gov/circs/circ30.pdf" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>U.S. Copyright Office Circular 30: Works Made for Hire</a></li>
                        <li><a href="https://www.law.cornell.edu/uscode/text/17/101" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>17 U.S.C. 101: definitions, including work made for hire</a></li>
                        <li><a href="https://www.law.cornell.edu/uscode/text/17/204" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>17 U.S.C. 204: execution of copyright transfers</a></li>
                    </ul>
                    <BlogText>
                        This guide is general information for a U.S.-first audience. Copyright, contract, employment,
                        consumer, data, domain, and conflict-of-law questions can change by jurisdiction and facts.
                        Use qualified legal counsel for the actual agreement.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will inventory the current domain, accounts, repository, platform, data, licenses,
                            vendors, search-sensitive URLs, and handover requirements, then put the technical scope in
                            writing for contract review.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
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
