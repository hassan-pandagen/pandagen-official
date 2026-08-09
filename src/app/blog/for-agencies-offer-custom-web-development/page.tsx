import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "for-agencies-offer-custom-web-development";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development";
const title = "White-Label Web Development: A 2026 Partner Framework";
const description =
    "How agencies can scope, price, disclose, govern, and hand off custom web development through a delivery partner without inventing margin or capacity promises.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/for-agencies-offer-custom-web-development" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "white label web development",
        "web development partner for agencies",
        "outsourced custom website development",
        "agency web development partner",
        "white label Next.js development",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-06",
        modifiedTime: "2026-08-08",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/for-agencies-offer-custom-web-development")],
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
            image: ogImageUrlForPath("/blog/for-agencies-offer-custom-web-development"),
            description,
            datePublished: "2026-03-06",
            dateModified: "2026-08-08",
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
            articleSection: "Agency partnerships",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Outsourcing", sameAs: ["https://en.wikipedia.org/wiki/Outsourcing"] },
            ],
            wordCount: 2751,
            timeRequired: "PT14M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "White-label development", item: "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#webpage",
            url: "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/for-agencies-offer-custom-web-development#breadcrumb" },
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

export default function WhiteLabelDevelopmentGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "White-label development")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agency delivery</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            White-Label Web Development: <span className="italic text-cognac">Without Guesswork</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Bringing in an outside development partner can widen what your agency sells. None
                            of it is automatic though, not the margin, not the delivery time, not the
                            capacity, not who ends up owning the code, and not the result the client gets.
                            Write down how the commercial side and the delivery side will work before anyone
                            sells the project.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Offer and terms reviewed August 8, 2026.</p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="March 6, 2026"
                        readTime="5 min read"
                        bio="Hassan scopes search-sensitive migrations and partner delivery systems."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The workable model</h2>
                        <BlogList
                            items={[
                                "Choose referral, co-delivery, or white-label delivery and document what the client is told.",
                                "Before you quote, find out what they have, what it connects to, who writes the content, what could go wrong in the migration, how it gets signed off, and who supports it afterwards.",
                                "Use a partner quote as an input. Your retail price and margin remain your own commercial decision.",
                                "Agree who signs the contract, who holds the accounts, who approves changes, who owns the work, and who answers the phone after launch.",
                                "Confirm capacity and schedule for each project. A general partnership is not a reserved production slot.",
                            ]}
                        />
                    </section>

                    <BlogHeader>Four ways to answer a custom-build request</BlogHeader>
                    <BlogText>
                        A client asks for a custom site and the agency has no development team. There are four honest
                        answers, and each carries a different cost, risk and level of control.
                    </BlogText>
                    <BlogList
                        items={[
                            "Decline the work: no delivery risk, but the client goes looking for a full-service provider and may take the rest of the account with them.",
                            "Place it with an individual freelancer: usually the lowest cost, and the least structure. Availability, scope and accountability rest on one person, so ask how each is covered, and the agency still carries the client relationship.",
                            "Hire in-house: most control and the highest fixed cost, with recruitment time and the question of what the role does between projects.",
                            "Work with a delivery partner under written terms: the agency keeps the client relationship and sets its own price, while scope, capacity and accountability are documented rather than assumed.",
                        ]}
                    />
                    <BlogText>
                        The fourth option is the subject of this guide. It is not automatically the right one. It is the
                        one that needs the most paperwork to work properly.
                    </BlogText>

                    <BlogHeader id="what-you-can-sell">What you can actually offer once you have a delivery partner</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four things, and they behave differently in a quote, so it is worth knowing which one you are
                            being asked for before you price it. Each has a scope driver that moves it between tiers, and
                            none of them is priced by page count.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "WordPress or platform migrations. The scope driver is distinct template count and integration complexity, not URL count. A hundred pages on six templates is a smaller job than twelve bespoke layouts, and the redirect map is a line item rather than an assumption.",
                            "Custom ecommerce and headless commerce. The driver is whether there is a real backend behind the storefront: catalogue, variants, orders, tax, fulfilment and the reconciliation obligations that come with money moving. This is the one we see under-scoped most often.",
                            "CRM-connected builds, including GoHighLevel. The driver is a defined funnel and booking flow plus the integration contract behind it. The frontend is usually the smaller half; the field mapping, consent capture and failure handling are the work.",
                            "Internal tools and dashboards. The driver is data-model design, multi-user authentication and client-specific business logic, which is exactly why these cannot be fixed-tiered honestly. Price them after a discovery call, not from a rate card.",
                        ]}
                    />
                    <BlogText>
                        Two of those are the reason agencies bring in a partner at all: commerce and internal tools are where a request most commonly exceeds what a design-led team can deliver alone. The other two are
                        usually within reach if you have someone to hand the engineering to. Knowing which of the four
                        a client is describing is the difference between quoting confidently and quoting defensively.
                    </BlogText>

                    <BlogHeader>White-label, co-delivery, and referral are different</BlogHeader>
                    <BlogText>
                        The axis that separates the three is who signs the client contract. White-label keeps the client relationship with the agency, co-delivery makes both teams visible, and referral has the developer contracting directly. Do not promise a client will never know a partner exists; the appropriate disclosure depends on the accepted agreements, procurement requirements and the access the work needs.
                    </BlogText>
                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: ShieldCheck, title: "White-label", body: "The agency owns the client. Partner terms cover the rest." },
                            { icon: Handshake, title: "Co-delivery", body: "Both teams are visible, and the paperwork says who does what." },
                            { icon: ClipboardCheck, title: "Referral", body: "The developer contracts directly with the client. Referral fees, if any, require a separate written agreement." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>
                    <BlogText>
                        Do not promise that a client will never know a partner exists. The appropriate disclosure
                        depends on the accepted client and partner agreements, procurement requirements, access needed,
                        subcontracting terms, and applicable duties. The honest answer is the one written into the deal.
                    </BlogText>

                    <BlogHeader>Run a fit check before the agency quotes</BlogHeader>
                    <BlogText>
                        Six things have to be established before a number goes out, because a quote written without them is a guess with a decimal point. Who controls the platform, domain, hosting, code and vendor accounts; the full inventory; which URLs carry search value; the design and accessibility inputs; how performance will be measured; and who owns launch, support and change control.
                    </BlogText>
                    <BlogList
                        items={[
                            "Who currently controls the platform, domain, hosting, code, CMS, analytics, consent tool and vendor accounts.",
                            "A list of every page, template, language, piece of content, image, product, user role and integration.",
                            "URLs and search-sensitive assets that must remain stable or receive page-level redirects.",
                            "Design source, copy, accessibility level, browser and device coverage, and editor workflow.",
                            "Performance method, representative pages, mobile and desktop profiles, and acceptance remedy.",
                            "Launch, rollback, training, support, exclusions, dependencies, change control, and decision owners.",
                        ]}
                    />
                    <BlogText>
                        PandaCodeGen&apos;s <Link href="/pricing" className="text-cognac hover:underline">public starting tiers</Link>{" "}
                        are planning anchors: Starter at $1,500, Growth at $3,500, and Scale typically from $5,000 to
                        $10,000, with{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">larger custom engineering work</Link>{" "}
                        scoped separately.
                        Final price comes from the accepted scope. An agency can add project management, strategy,
                        creative, sales, risk, and support to its retail price, but PandaCodeGen does not publish a
                        guaranteed markup or margin.
                    </BlogText>

                    <InsightBox variant="warning" label="Illustrative arithmetic only">
                        If a partner quote were $5,000 and an agency chose a $7,000 client price, the gross spread would
                        be $2,000 before sales, account management, revisions, tax, payment fees, warranty work, and
                        overhead. That scenario is not a recommended rate or promised profit.
                    </InsightBox>

                    <BlogHeader>How a white-label engagement runs, step by step</BlogHeader>
                    <BlogText>
                        The sequence below is the process, not a promise about price, margin or dates. Those come from
                        the specific opportunity.
                    </BlogText>
                    <BlogList
                        items={[
                            "The agency brings the brief: client type, requirement, hard deadlines, existing assets and platform, and a budget range if one exists. A mutual NDA before project detail is shared is worth asking for.",
                            "The partner returns a scoped quote: what is included, what is explicitly excluded, assumptions, milestones, and what the agency must supply. Quote turnaround is agreed per opportunity rather than assumed.",
                            "The agency sets its own retail price and quotes the client. The client signs the agency's contract, so the agency stays the accountable party.",
                            "Build and review: the agency reviews each milestone before it reaches the client, the partner handles technical revisions, and client communication runs through whichever party the terms name.",
                            "Launch and handoff: documentation for whoever edits the site, the agreed support window, account and credential transfer, and a defined route for later change requests.",
                        ]}
                    />
                    <BlogText>
                        Whether the partner is disclosed, invisible or jointly named is a decision for the accepted
                        agreements, not a default of the model. Write it down at the first step rather than improvising
                        it when a client asks who built the site.
                    </BlogText>

                    <BlogHeader>Put this responsibility matrix in writing</BlogHeader>
                    <BlogText>
                        Six lanes need a named owner before the project starts: sales, discovery, delivery, communication, acceptance and aftercare. This belongs in one reusable document rather than a fresh email thread per project, because the lane nobody claimed is the one that fails at handover.
                    </BlogText>
                    <BlogList
                        items={[
                            "Sales: who makes claims, sends the proposal, signs the client, and collects payment.",
                            "Discovery: who verifies requirements and who can approve assumptions or exclusions.",
                            "Delivery: who designs, writes, develops, supplies content, configures vendors, and runs QA.",
                            "Communication: meeting cadence, escalation path, response expectations, and whether developers attend client calls.",
                            "Acceptance: who confirms test conditions, records defects, approves launch, and signs handoff.",
                            "Aftercare: which team receives incidents and which changes are support versus billable scope.",
                        ]}
                    />
                    <BlogText>
                        This split belongs in one reusable document rather than a fresh email thread per project. The{" "}
                        <Link href="/partners" className="text-cognac hover:underline">agency partner programme</Link>{" "}
                        covers the same ground from our side, and the{" "}
                        <Link href="/blog/website-developer-agency" className="text-cognac hover:underline">guide to choosing a development agency</Link>{" "}
                        sets out what a client-side buyer tends to ask for in the same paperwork.
                    </BlogText>

                    <BlogHeader>What to check in a delivery partner</BlogHeader>
                    <BlogText>
                        The outsourcing failures we have been called in to repair traced back to something that was never written down. These are
                        the items worth confirming before an agency puts its own name on the delivery.
                    </BlogText>
                    <BlogList
                        items={[
                            "A fixed-price quote written against a defined scope, with exclusions and assumptions named.",
                            "A written scope before work starts rather than an agreement to settle the detail later.",
                            "An agreed check-in cadence and milestone review, so project status is never a guess.",
                            "A signed NDA and a written rule on whether, when and how the partner may contact the client.",
                            "Named accountability: who performs the work, and who responds when something breaks after launch.",
                            "Evidence an agency can actually show a buyer: delivered work, method and acceptance records rather than screenshots alone.",
                            "Support, revision and change-control terms written into scope rather than offered as goodwill.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Signals worth slowing down for">
                        Uncapped hourly billing. Scope that stays vague after questions. Reluctance to put disclosure and
                        client-contact rules in writing. A price or a delivery date offered before anyone has seen the
                        current site, the inventory or the integrations. Any promise about rankings, traffic or revenue.
                        Revision limits set by count alone, with no reference to whether the work met the agreed scope.
                    </InsightBox>

                    <BlogHeader>Ownership and account control</BlogHeader>
                    <BlogText>
                        Client content, data, brand assets, and{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">client-controlled accounts</Link>{" "}
                        remain the client&apos;s.
                        Rights in paid custom deliverables transfer or are licensed only as the accepted terms state.
                        PandaCodeGen retains reusable internal tools, templates, know-how, and pre-existing code.
                        Third-party components keep their original licenses.
                    </BlogText>
                    <BlogText>
                        Domain, hosting, repository, CMS, analytics, payment, CRM, and email accounts should be created
                        under client-controlled identities when that is the agreed model. If the agency manages them,
                        document access, billing, security, transfer, suspension, and exit procedures. “No lock-in”
                        should mean a tested handoff, not a slogan.
                    </BlogText>

                    <BlogHeader>Commercial terms for a PandaCodeGen project</BlogHeader>
                    <BlogText>
                        These are the terms a partner agency is quoting on top of, reviewed July 24, 2026. Read them as
                        the starting position rather than the final one: every line below is subject to the signed
                        contract, and the full wording lives on our{" "}
                        <Link href="/terms" className="text-cognac hover:underline">terms page</Link>, which governs if
                        this page and that page ever disagree. What a partner pays is quoted per project and is not
                        assumed to equal our public retail tiers.
                    </BlogText>
                    <BlogList
                        items={[
                            "A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed, subject to the signed contract.",
                            "Where the accepted project terms include it, a refund covers fees paid under that scope if the promised deliverables are not delivered, not merely because preferences change after work starts.",
                            "Refund timing is governed by the agreement. PandaCodeGen normally initiates an approved refund in 2 to 3 business days; the receiving bank or payment provider controls settlement after that, which can take up to 10 to 12 business days.",
                            "Starter includes 15 business days of agreed support; Growth and Scale include 30 business days. Start date and coverage belong in the accepted terms.",
                            "Minor agreed tweaks may be handled in support. New features and out-of-scope work use written change control and an agreed fixed, hourly, or other billing model.",
                        ]}
                    />
                    <BlogText>
                        The agency&apos;s own retail number and dates sit on top of those terms. Two references help when
                        that number is set:{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">what shapes the cost of a custom website</Link>{" "}
                        and{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className="text-cognac hover:underline">how long a custom build takes</Link>.
                    </BlogText>

                    <BlogHeader id="after-launch">The part most partnerships get wrong: what happens after launch</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Build scope gets negotiated carefully and the month after launch usually gets a sentence.
                            That is the wrong way round, because the build ends and the relationship does not. A client
                            who emails at nine in the evening about a broken contact form is emailing{" "}
                            <strong>the agency</strong>, not the delivery partner they have never heard of.
                        </BlogText>
                        <BlogText>
                            Ongoing maintenance is also where a reseller relationship becomes worth having. A one-off
                            build is a one-off margin; a monthly retainer covering hosting oversight, dependency and
                            security updates, content changes and small improvements is recurring revenue the agency
                            owns. Agree three things in writing before launch, not after the first incident.
                        </BlogText>
                        <BlogList
                            items={[
                                "Who triages, and who fixes. These are different jobs. An agency can reasonably own first response — reproduce it, establish urgency, tell the client something true within an hour — while the partner owns the code fix. Agreeing that split is most of the value, because it decides what the agency has to be able to do itself.",
                                "What counts as a defect versus a change. A form that never worked is a defect. A form that now needs a new field is a change, and it is billable. Without that line written down, every request arrives as a warranty claim and the margin quietly disappears.",
                                "Response expectations, in hours, and who is on the hook outside working days. Publish something you can actually meet rather than something that sounds reassuring, because the first missed response is what a client remembers.",
                            ]}
                        />
                        <InsightBox variant="info">
                            The support included with a build is a defined window, not an open-ended arrangement, and it
                            is stated in the project terms rather than assumed. <strong>Decide before launch what happens
                            the day after it ends</strong> — whether the agency sells its own retainer and calls on the partner for
                            code work, whether ongoing work is quoted separately each time, or whether the client is
                            handed over entirely. All three are legitimate. Not choosing is the one that damages the
                            client relationship the agency spent the project protecting.
                        </InsightBox>
                    </div>

                    <BlogHeader>Quality acceptance without universal guarantees</BlogHeader>
                    <BlogText>
                        Where the signed scope includes PandaCodeGen&apos;s 90+ <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> target, name the representative
                        pages, mobile and desktop profiles, environment, exclusions, three-run method, acceptance
                        threshold, and remedy. A lab score is not a ranking, traffic, conversion, or revenue guarantee.
                    </BlogText>
                    <BlogList
                        items={[
                            "Crawl and compare the approved old and new URL inventories.",
                            "Test forms, CRM writes, calendars, payments, analytics, consent states, errors, and notifications.",
                            "Verify responsive behavior, keyboard paths, labels, focus, contrast, and content states.",
                            "Record releases, versions, environment, test evidence, known limitations, and rollback steps.",
                        ]}
                    />
                    <BlogText>
                        Two explainers are worth attaching when acceptance is drafted:{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explained</Link>{" "}
                        for how lab and field measurement differ, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">what happens to search visibility during a migration</Link>{" "}
                        for the URL-level checks that belong in the test plan.
                    </BlogText>

                    <BlogHeader>What the agency can say about the finished build</BlogHeader>
                    <BlogText>
                        An agency does not need to explain its supply chain to describe the product accurately. These
                        statements can be made without stepping outside what the scope actually commits to.
                    </BlogText>
                    <BlogList
                        items={[
                            "The site is built to the agreed scope rather than assembled from a theme or template.",
                            "Deliverables, licences and account control are as the accepted terms set out, in the accounts those terms name.",
                            "Where a CMS is in scope, the client can edit content without developer involvement, within the editor and roles that were built.",
                            "Where the signed scope includes the 90+ Lighthouse handover target, describe it as a target measured on the named representative pages across mobile and desktop, with three recorded runs before handover, and not as a promise about rankings, traffic or revenue.",
                            "Hosting, service and vendor costs are itemised in the scope. Ongoing cost is a line to quantify, not a benefit to imply is zero.",
                        ]}
                    />

                    <BlogHeader>How to start without overselling</BlogHeader>
                    <BlogText>
                        Bring one real opportunity to a{" "}
                        <Link href="/partners" className="text-cognac hover:underline">partner fit audit</Link>. PandaCodeGen can
                        return a{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">migration plan</Link>,
                        assumptions, exclusions, evidence needed, proposed acceptance method, and a project-specific
                        quote. The agency can then decide whether to refer, co-deliver, or propose a documented
                        white-label engagement.
                    </BlogText>
                    <BlogText>
                        Agencies weighing outsourcing options tend to read around first. Our{" "}
                        <Link href="/blog/top-custom-web-development-agencies-usa-2026" className="text-cognac hover:underline">shortlist of US custom development agencies</Link>{" "}
                        and the{" "}
                        <Link href="/blog/pagepro-alternatives" className="text-cognac hover:underline">comparison of Pagepro alternatives</Link>{" "}
                        show how scope and fit are described elsewhere. When a live opportunity is ready, the{" "}
                        <Link href="/contact" className="text-cognac hover:underline">contact form</Link> is the fastest route in.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Scope a real partner opportunity</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will review the current site, client requirements, migration risks, responsibility split,
                            acceptance method, and handoff before either party promises price or timing.
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
