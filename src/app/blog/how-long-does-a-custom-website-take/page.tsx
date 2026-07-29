import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, GitPullRequest, Rocket } from "lucide-react";
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
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "how-long-does-a-custom-website-take";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How Long Does a Custom Website Take? A 2026 Schedule Guide";
const description =
    "Build a defensible website schedule from inventory, content, design, integrations, review, QA and cutover instead of relying on an unsupported universal timeline.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "how long does a custom website take",
        "website build timeline",
        "website development schedule",
        "website migration timeline",
        "how fast can a website be built",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-06-03",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-long-does-a-custom-website-take")],
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
            datePublished: "2026-06-03",
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
            articleSection: "Project planning",
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

export default function WebsiteTimelineGuide() {
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
                            { label: "Website timeline", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Project planning</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How Long Does a Custom Website Take? <span className="italic text-cognac">Build the Schedule From Scope</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A content-ready brochure, an SEO-sensitive migration, a commerce rebuild and a custom
                            application do not share one honest duration. The reliable answer is a dependency-based
                            schedule attached to the signed scope.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Schedule and offer reviewed July 24, 2026.</p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="June 3, 2026"
                        readTime="9 min read"
                        bio="Hassan scopes migrations, integrations and release acceptance."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The useful short answer</h2>
                        <BlogList
                            items={[
                                "A small, content-ready site can be planned in focused weeks, not automatically in a fixed number of days.",
                                "A migration adds inventory, redirect, output-parity, analytics, cutover and monitoring work.",
                                "Commerce and custom applications add data, payment, role, integration, security and operational states.",
                                "The contract should state dependencies, review windows, change control, acceptance and what moves the date.",
                                "PandaCodeGen confirms the actual schedule only after the fit audit and accepted scope.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: ClipboardList, title: "Define", body: "Inventory, requirements, owners, evidence, deliverables and exclusions." },
                            { icon: GitPullRequest, title: "Build and review", body: "Design, content, implementation, integrations and controlled approvals." },
                            { icon: Rocket, title: "Prove and release", body: "QA, acceptance, migration, cutover, monitoring, handoff and rollback." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>The schedule formula</BlogHeader>
                    <BlogText>
                        Calendar duration is not developer hours divided by eight. It includes active work, dependency
                        lead time, review and approval windows, vendor response, rework, release constraints and agreed
                        contingency. Some work can overlap; dependencies on the critical path cannot.
                    </BlogText>
                    <BlogList
                        items={[
                            "Active work: discovery, design, content, development, migration, integration, QA and documentation.",
                            "Dependencies: credentials, accounts, source exports, copy, media, legal review, vendor access and stakeholder decisions.",
                            "Review: named approver, response window, consolidated feedback and permitted revision rounds.",
                            "Release: freeze, backups, DNS, redirects, production credentials, smoke tests, rollback and monitoring.",
                            "Change: how a new feature, page, integration or approval round changes price and schedule.",
                        ]}
                    />

                    <BlogHeader>Typical timelines by project size</BlogHeader>
                    <BlogText>
                        These are the ranges we plan around, not commitments. The dates that bind either side are the ones
                        written into the accepted project terms after scoping, because the drivers in the right-hand column
                        vary enormously between projects. The same tier names appear on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>, with the
                        deliverable side described in{" "}
                        <Link href="/blog/custom-website-5000-whats-included" className="text-cognac hover:underline font-medium">what a Scale statement of work can include</Link>{" "}
                        and the cost inputs in our{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline font-medium">website cost guide</Link>.
                        Commerce scope is set out on our{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">ecommerce engineering</Link> page.
                    </BlogText>
                    <div className="my-6 overflow-x-auto">
                        <table className="w-full min-w-[560px] border-collapse text-sm">
                            <thead>
                                <tr className="bg-stone-100 text-left">
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">Project</th>
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">Typical planning range</th>
                                    <th className="border border-stone-300 px-4 py-3 font-bold text-charcoal">What drives it</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Starter, 5 to 7 pages</td>
                                    <td className="border border-stone-300 px-4 py-3">1 to 2 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Design back and forth</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Growth, 10 to 20 pages</td>
                                    <td className="border border-stone-300 px-4 py-3">2 to 4 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Content readiness</td>
                                </tr>
                                <tr>
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Scale, 30 plus / e-commerce</td>
                                    <td className="border border-stone-300 px-4 py-3">4 to 8 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Catalog, integrations, content</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="border border-stone-300 px-4 py-3 font-medium">Complex migration</td>
                                    <td className="border border-stone-300 px-4 py-3">up to 6 weeks</td>
                                    <td className="border border-stone-300 px-4 py-3">Content volume, redirects</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>Scope signals that change the clock</BlogHeader>
                    <BlogList
                        items={[
                            "Unique templates and states, not only raw page count.",
                            "Content creation, migration, cleanup, localization, permissions and subject-matter review.",
                            "CMS models, preview, workflow, roles, import and editor training.",
                            "Forms, CRM, calendars, search, maps, authentication, payments, tax, shipping and external APIs.",
                            "Accessibility target, browser and device matrix, security review and performance acceptance.",
                            "URL changes, redirect mapping, structured data, analytics continuity and search monitoring.",
                            "Legacy data quality, undocumented behavior, rate limits and vendor approval or certification.",
                        ]}
                    />
                    <BlogText>
                        The redirect and search-continuity items in that list are the ones most often left out of a
                        first estimate. Our{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">migration cost assessment</Link>{" "}
                        breaks that work down, our article on{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline font-medium">what happens to search visibility during a migration</Link>{" "}
                        covers the monitoring it needs, and our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">WordPress migration service</Link>{" "}
                        page describes how we run it.
                    </BlogText>

                    <BlogHeader>A phase-based estimate is safer than one headline number</BlogHeader>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4 font-bold">Phase</th>
                                    <th className="p-4 font-bold">Exit evidence</th>
                                    <th className="p-4 font-bold">Common dependency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-semibold">Discovery</td><td className="p-4">Approved inventory, risks, requirements and acceptance method</td><td className="p-4">Access and decision owners</td></tr>
                                <tr><td className="p-4 font-semibold">Content and design</td><td className="p-4">Approved components, routes, states and content</td><td className="p-4">Copy, assets and consolidated review</td></tr>
                                <tr><td className="p-4 font-semibold">Implementation</td><td className="p-4">Testable release matching the accepted scope</td><td className="p-4">Credentials, vendors and data</td></tr>
                                <tr><td className="p-4 font-semibold">QA and acceptance</td><td className="p-4">Recorded functional, responsive, accessibility, security and performance results</td><td className="p-4">Stable scope and test environment</td></tr>
                                <tr><td className="p-4 font-semibold">Cutover and handoff</td><td className="p-4">Production checks, monitoring, documentation and transfer</td><td className="p-4">Launch authority and rollback owners</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>What the MyCustomPatches 22-day example proves</BlogHeader>
                    <BlogText>
                        The owner has approved publication of a 22-day delivery time for MyCustomPatches. It is a
                        first-party PandaCodeGen project example, not a market average or a promise for the next site.
                        Without a public scope baseline, phase dates, paused-time policy and acceptance record, it
                        should not be used to infer that every project of a similar-looking size takes 22 days. The
                        scope behind it is written up on our{" "}
                        <Link href="/work/mycustompatches" className="text-cognac hover:underline font-medium">MyCustomPatches project page</Link>, and the
                        rest of our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">delivered projects</Link>{" "}
                        show how differently the same phase list plays out.
                    </BlogText>
                    <InsightBox variant="info" label="How to make an example comparable">
                        Compare inventory, unique templates, content readiness, integrations, data migration, review
                        rounds, acceptance, calendar versus business days, pauses and launch definition. A number
                        without those fields is a story, not an estimate.
                    </InsightBox>

                    <BlogHeader>Client delays are not the only source of delay</BlogHeader>
                    <BlogText>
                        Content and approvals can be critical dependencies, but it is unfair and inaccurate to say most
                        waiting is always the client&apos;s fault. An agency can delay discovery, design, implementation,
                        QA, communication or rework. A vendor can delay access or approval. The schedule should expose
                        every dependency and owner instead of assigning blame in advance.
                    </BlogText>

                    <BlogHeader>What “content ready” means</BlogHeader>
                    <BlogList
                        items={[
                            "Approved page inventory, navigation and target audience.",
                            "Final or clearly staged copy with a named subject-matter approver.",
                            "Licensed images, video, logos, icons, testimonials and attribution.",
                            "Product, service, team, location, policy and contact data in an agreed format.",
                            "SEO decisions for titles, descriptions, headings, URLs, redirects and structured data.",
                            "A plan for missing content, including whether placeholders can reach production.",
                        ]}
                    />

                    <BlogHeader>Can a site launch in one week?</BlogHeader>
                    <BlogText>
                        A narrowly scoped site can sometimes move that quickly when content, design direction, access,
                        decisions and acceptance are ready, but PandaCodeGen does not publish a universal seven-day
                        promise. A rush plan must identify what is included, what is deferred, the review cadence,
                        quality gates and whether the compressed schedule changes price or risk.
                    </BlogText>

                    <BlogHeader>Quality gates that should not be removed to save time</BlogHeader>
                    <BlogList
                        items={[
                            "Functional and failure-state tests for forms, integrations, calendars, payments and notifications.",
                            "Responsive, keyboard, focus, label, contrast and content-state checks.",
                            "Security controls, dependency review, secret handling, abuse controls and production configuration.",
                            "SEO output, URL, redirect, sitemap, canonical, robots and structured-data checks.",
                            "Representative mobile and desktop performance tests under the accepted method.",
                            "Backups, cutover, rollback, monitoring, documentation and account handoff.",
                        ]}
                    />
                    <BlogText>
                        The performance gate is the one buyers most often assume is free. Our guide to{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className="text-cognac hover:underline font-medium">speeding up a website</Link>{" "}
                        and our explainer on{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline font-medium">Core Web Vitals</Link>{" "}
                        describe the work that sits behind it.
                    </BlogText>

                    <BlogHeader>What PandaCodeGen puts into the schedule</BlogHeader>
                    <BlogText>
                        The signed scope should state the project start condition, milestones, deliverables,
                        dependencies, business-day definition, review windows, change control, acceptance, launch,
                        support start, pause conditions and remedies. The normal payment split is 30 percent at
                        onboarding and 70 percent on delivery, subject to the accepted contract.
                    </BlogText>
                    <BlogText>
                        Starter support is 15 business days and Growth or Scale support is 30 business days under the
                        agreed coverage and start date. Support does not silently add new features or third-party
                        changes to the original schedule. Our{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering service</Link>{" "}
                        page describes the delivery process those clauses sit on, and our article on{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline font-medium">what website ownership actually covers</Link>{" "}
                        explains what the handoff at the end should transfer.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your migration schedule</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will inventory the work, dependencies, approvals, test plan, cutover and handoff, then
                            attach a real schedule to a project-specific scope.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
