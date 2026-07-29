import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Accessibility, Code2, Search, ShieldCheck } from "lucide-react";
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
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-12",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/website-developer-agency")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" },
    { name: "OWASP ASVS", url: "https://owasp.org/www-project-application-security-verification-standard/" },
    { name: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { name: "Google Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
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
            description,
            datePublished: "2026-05-12",
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
            articleSection: "Agency selection",
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

export default function WebsiteDeveloperAgencyPage() {
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
                            { label: "Website developer agency", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Agency selection</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Website Developer Agency <span className="italic text-cognac">What to Buy and Verify</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            An agency's job is to turn what your business needs into a website you can actually run,
                            with someone clearly on the hook for the design, the code, the content, the testing, the
                            launch and the support afterwards. Judge them on who they are putting on your project and
                            what they will put in writing, not on the word &ldquo;agency&rdquo;.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current W3C, OWASP, Google and U.S. Copyright Office guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 12, 2026" readTime="14 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Hire an agency when several disciplines and one accountable delivery owner are required.",
                                "Define outcomes, scope, acceptance, ownership and support before comparing price.",
                                "Require manual and automated evidence for accessibility, security, function, SEO and performance.",
                                "Choose a freelancer or internal team when you already own the missing coordination and quality roles.",
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
                    <BlogList
                        items={[
                            "Discovery: goals, audiences, journeys, constraints, data and current evidence.",
                            "Strategy: information architecture, measurement, content and technical decisions.",
                            "Design: research, flows, wireframes, responsive UI and design system.",
                            "Engineering: frontend, backend, CMS, integrations, data and infrastructure.",
                            "Quality: content, function, accessibility, security, SEO, analytics and performance.",
                            "Release: migration, rollback, monitoring, Search Console and account handoff.",
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
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
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
                        Webflow, headless CMS, Next.js or other application stacks. The right choice follows the
                        editing workflow, requirements, data, team capability, security, performance, portability and
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
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li><strong>Define:</strong> inventory, requirements, risks, measures, scope, assumptions and acceptance. The deliverable is written, and it includes what the current site actually does today, measured rather than described.</li>
                        <li><strong>Design:</strong> information architecture, content, flows, UI, prototypes and technical decisions. Architecture is the planning that happens before code: URL structure, content model, integrations, environments. Deciding it upfront costs hours. Discovering it halfway through the build costs weeks.</li>
                        <li><strong>Build and verify:</strong> implementation, migration, integrations, review and recorded quality evidence. Ask for working progress at a regular interval rather than a single reveal at the end, so a wrong direction surfaces in the second week instead of the third month.</li>
                        <li><strong>Launch and operate:</strong> cutover, rollback, monitoring, handoff, support and maintenance. A low-risk cutover keeps the current site serving until the replacement has been tested on a staging URL, exports every indexed URL and maps it to its new path before anything moves, validates the map, then makes the switch at DNS with the TTL lowered in advance so propagation is quick and reversible.</li>
                    </ol>

                    <BlogHeader>Performance terms to put in writing</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s 90-plus target is conditional on agreed representative pages, mobile and
                        desktop profiles, recorded environment and three consecutive tests per page and profile. It is
                        not a promise that every URL, device or future deployment permanently scores 90. The contract
                        should state the target, test, evidence, exclusions, cure and remedy. For what the underlying
                        page metrics actually measure, see{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explained</Link>.
                    </BlogText>

                    <BlogHeader>In-house developer vs agency vs freelancer</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
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

                    <BlogHeader>Seven questions before signing</BlogHeader>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li>Who exactly will deliver the work, and what relevant project did they complete?</li>
                        <li>Which requirements, pages, data and integrations are excluded?</li>
                        <li>How will each acceptance target be reproduced?</li>
                        <li>What triggers a change order, and who approves it?</li>
                        <li>Who controls the domain, repository, hosting, CMS, analytics and business accounts?</li>
                        <li>What will this cost to run every month once it is live, itemised by provider?</li>
                        <li>What happens after launch, at termination and when another team takes over?</li>
                    </ol>
                    <BlogText>
                        The answers matter more than the questions. What separates a usable answer from an evasive one
                        is whether it names something specific enough to be written into the scope and checked later.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[840px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">You asked</th><th className="p-4">A usable answer</th><th className="p-4">An answer to press on</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Who writes the code?</td><td className="p-4">Named people, with work you can look at</td><td className="p-4">&quot;Our team handles that&quot;</td></tr>
                                <tr><td className="p-4 font-bold">What performance do you commit to?</td><td className="p-4">A stated target on named pages, a stated measurement method, and a stated remedy</td><td className="p-4">&quot;We prioritise performance&quot; or an unconditional promise with no method attached</td></tr>
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

                    <BlogHeader>Ownership and licensing</BlogHeader>
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
                        document: our performance commitment is a 90+ Lighthouse handover target on mobile and
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

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
