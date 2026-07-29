import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, Globe2, Workflow } from "lucide-react";
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

const postId = "gohighlevel-keep-crm-replace-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/gohighlevel-keep-crm-replace-website";
const title = "Keep GoHighLevel CRM, Replace the Website: 2026 Architecture";
const description =
    "A practical hybrid architecture for keeping HighLevel contacts, workflows and calendars while replacing the public website, with migration, privacy and acceptance controls.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/gohighlevel-keep-crm-replace-website" },
    keywords: [
        "keep GoHighLevel CRM replace website",
        "GoHighLevel Next.js integration",
        "HighLevel API website",
        "GoHighLevel hybrid website",
        "GoHighLevel webhook integration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-04",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/gohighlevel-keep-crm-replace-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "HighLevel API introduction", url: "https://marketplace.gohighlevel.com/docs/intro/index.html" },
    { name: "HighLevel authentication", url: "https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0/" },
    { name: "HighLevel webhook integration guide", url: "https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide/" },
    { name: "HighLevel website builder overview", url: "https://help.gohighlevel.com/support/solutions/articles/155000001633" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-05-04",
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
            articleSection: "GoHighLevel",
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

const sourceLinkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function KeepHighLevelReplaceWebsiteGuide() {
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
                            { label: "Keep HighLevel, replace website", href: "/blog/gohighlevel-keep-crm-replace-website" },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">GoHighLevel migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Keep Your GoHighLevel CRM. <span className="italic text-cognac">Replace Just the Website.</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            You can keep HighLevel running your operations and put a separate frontend in
                            front of the public site. Whether that is the right fix depends on what you have
                            measured, whether the integrations actually cover what you need, who is
                            responsible for which data, what your editors need to be able to do, and whether
                            you have tested the switchover.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current HighLevel developer and support documentation.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="May 4, 2026"
                        readTime="12 min read"
                        bio="Hassan designs CRM-connected websites and search-sensitive migrations."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The architecture in one minute</h2>
                        <BlogList
                            items={[
                                "Public frontend: pages, navigation, content, metadata, forms and consent behavior.",
                                "Integration layer: server endpoints that validate input, apply abuse controls and call HighLevel under scoped credentials.",
                                "HighLevel: contacts, calendars, workflows, opportunities, conversations and other accepted CRM functions.",
                                "Webhooks: signed event notifications for the approved synchronization paths.",
                                "Observability: request IDs, safe logs, alerts, reconciliation and a failure-recovery procedure.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: Globe2, title: "Public site", body: "Owns the visitor experience and only the data collection approved for that journey." },
                            { icon: Workflow, title: "Integration", body: "Authenticates, validates, retries and maps approved events between systems." },
                            { icon: Database, title: "HighLevel", body: "Remains the CRM for the resources and workflows actually covered by the scope." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What stays, what moves, what crosses between them</BlogHeader>
                    <BlogText>
                        The split is the first thing to agree, because it decides how much integration you are taking
                        on. Anything the public sees and search engines read moves to the frontend. Anything that runs
                        the business stays in HighLevel. Anything that crosses between the two is an integration
                        somebody has to own after launch.
                    </BlogText>
                    <div className="my-8 grid gap-5 md:grid-cols-2">
                        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Stays in HighLevel</p>
                            <ul className="space-y-2.5 text-sm leading-relaxed text-stone-700">
                                <li>Contacts, custom fields and custom objects</li>
                                <li>Pipelines, opportunities and deal stages</li>
                                <li>Workflows, triggers and conditional logic</li>
                                <li>Email and SMS sending, plus two-way conversations</li>
                                <li>Calendars, reminders and no-show handling</li>
                                <li>Reputation and review request flows</li>
                                <li>Sub-accounts, snapshots and agency reporting</li>
                                <li>White-label and rebilling arrangements where used</li>
                                <li>Membership areas that remain hosted in HighLevel</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-cognac/20 bg-cognac/5 p-6">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-cognac">Moves to the new frontend</p>
                            <ul className="space-y-2.5 text-sm leading-relaxed text-stone-700">
                                <li>Homepage, service pages and location pages</li>
                                <li>Blog and long-form content</li>
                                <li>Case studies, testimonials and team pages</li>
                                <li>The booking page a visitor sees, which still writes into HighLevel</li>
                                <li>The forms visitors complete, with server-side validation and abuse controls</li>
                                <li>Any route whose rendered HTML, metadata or structured data has to be controlled directly</li>
                            </ul>
                        </div>
                    </div>
                    <InsightBox variant="warning" label="The split is a commitment, not a diagram">
                        Every line that crosses the boundary becomes something to monitor, re-test after vendor changes
                        and repair during an outage. Count those crossings before agreeing the architecture, because
                        they are the real cost of the hybrid, not the frontend build.
                    </InsightBox>

                    <BlogHeader>When a hybrid build is worth considering</BlogHeader>
                    <BlogList
                        items={[
                            "Representative public pages fail agreed performance, accessibility, content, design, or search-output requirements after realistic in-platform fixes.",
                            "The team still depends on HighLevel contacts, workflows, calendars, pipelines, conversations, or sub-account operations.",
                            "The organization accepts the added integration ownership, monitoring, vendor-change work, and incident surface.",
                            "A documented total-cost and risk comparison supports replacement instead of another native-site optimization pass.",
                        ]}
                    />
                    <BlogText>
                        Stay native when the current website meets business requirements or when budget, traffic,
                        content maturity, operational capacity, and integration risk do not justify a separate frontend.
                        Framework preference alone is not a migration case.
                    </BlogText>
                    <BlogText>
                        Work through the measured version of that decision before committing. Our guide to{" "}
                        <Link href="/blog/gohighlevel-website-speed" className={sourceLinkClass}>diagnosing a slow HighLevel site</Link>{" "}
                        covers the in-platform fixes worth trying first, and the{" "}
                        <Link href="/blog/best-website-builder-for-gohighlevel-agencies" className={sourceLinkClass}>builder comparison for HighLevel agencies</Link>{" "}
                        sets out what each option asks of the team. Our{" "}
                        <Link href="/services/gohighlevel" className={sourceLinkClass}>HighLevel engineering service</Link>{" "}
                        page describes how we scope the hybrid version.
                    </BlogText>

                    <BlogHeader>Match the decision to your situation</BlogHeader>
                    <BlogText>
                        The architecture is overhead, and overhead only pays when it removes a constraint the business
                        can actually feel. These are the situations we see most often and the direction each one points
                        in before any measurement is taken.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Situation</th><th className="p-4">Where the evidence usually points</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Work arrives through referral and repeat business</td><td className="p-4">Stay native. The constraint you would be paying to remove is not the one limiting the business.</td></tr>
                                <tr><td className="p-4 font-bold">The account is new, with no traffic or content yet</td><td className="p-4">Stay native and publish. There is nothing to preserve or measure yet, so a frontend rebuild is premature.</td></tr>
                                <tr><td className="p-4 font-bold">No capacity to own an integration, monitoring and vendor changes</td><td className="p-4">Stay native. A hybrid adds responsibility the organisation has to carry every month, not just at launch.</td></tr>
                                <tr><td className="p-4 font-bold">Organic search or AI answer surfaces are a main acquisition route</td><td className="p-4">Investigate a hybrid, and confirm it by crawling the rendered output of the current pages rather than assuming.</td></tr>
                                <tr><td className="p-4 font-bold">Paid traffic lands on pages you need full control over</td><td className="p-4">Investigate a hybrid using your own account data on landing-page behaviour, not a general claim about the platform.</td></tr>
                                <tr><td className="p-4 font-bold">Many location or service pages need distinct URLs, metadata and schema</td><td className="p-4">Investigate a hybrid, and price the content model and editorial workflow, not just the templates.</td></tr>
                                <tr><td className="p-4 font-bold">An agency wants control of its own marketing site</td><td className="p-4">Consider a hybrid for the agency site while keeping sub-account builds native, where standardisation is worth more than control.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>What HighLevel officially supports</BlogHeader>
                    <BlogText>
                        HighLevel&apos;s current developer portal documents programmatic access to resources including
                        contacts, conversations, calendars, appointments, payments, and webhooks. It documents OAuth
                        2.0 with scoped access for marketplace applications and also describes private integration
                        credentials. Available resources, versions, scopes, and limits must be checked for the target
                        account when the project is scoped.
                    </BlogText>
                    <BlogText>
                        HighLevel&apos;s support documentation also shows its website builder includes SEO metadata,
                        mobile editing, tracking code, custom CSS, and external JavaScript behavior. This is an
                        architecture choice, not proof that every native HighLevel site is broken.
                    </BlogText>

                    <BlogHeader>Forms and contact creation</BlogHeader>
                    <BlogList
                        items={[
                            "Collect only approved fields and show accurate notice and consent behavior before submission.",
                            "Validate and normalize data on the server. Rate-limit, apply bot controls, and reject unexpected fields.",
                            "Use the current approved HighLevel endpoint, integration type, scope, and duplicate-contact policy.",
                            "Return a safe visitor state while recording a correlation ID for support and reconciliation.",
                            "Test contact creation, source, tags, custom fields, duplicate rules, workflow enrollment, errors, retries, and notifications.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Do not promise that every workflow remains untouched">
                        A workflow continues only if its real trigger and required fields still occur. Inventory each
                        dependency and run accepted end-to-end tests. A contact write, a form submission, an appointment,
                        and a tag change are not interchangeable events.
                    </InsightBox>

                    <BlogHeader>Calendar choices</BlogHeader>
                    <BlogText>
                        An approved HighLevel embed can be the smallest integration, but measure its responsive,
                        accessibility, consent, styling, performance, and failure behavior. A{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom booking interface</Link>{" "}
                        can use supported calendar and appointment APIs where the account and scopes permit it, but it
                        adds availability, time-zone, conflict, cancellation, rescheduling, retry, and accessibility
                        responsibilities.
                    </BlogText>

                    <BlogHeader>Webhooks need authentication and recovery</BlogHeader>
                    <BlogText>
                        HighLevel&apos;s current webhook guide says to verify authenticity. It identifies{" "}
                        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">X-GHL-Signature</code>{" "}
                        with Ed25519 as the current header and says the legacy RSA header is scheduled for deprecation
                        on September 1, 2026. Recheck the guide before release because vendor dates can change.
                    </BlogText>
                    <BlogList
                        items={[
                            "Verify the signature against the unmodified request body before processing.",
                            "Acknowledge according to the current vendor contract and move slow work to a durable queue.",
                            "Make handlers idempotent so retries do not duplicate actions.",
                            "Record a safe event identifier, type, result and retry state without leaking secrets or unnecessary personal data.",
                            "Alert on failures and reconcile missed events; do not treat a 2xx response as business completion.",
                        ]}
                    />

                    <BlogHeader>Privacy and security responsibilities</BlogHeader>
                    <BlogText>
                        A separate frontend does not decide who is controller, processor, business, service provider, or
                        subprocessor. Map the actual parties, fields, purposes, regions, vendors, retention, access, and
                        deletion path. Align consent behavior, privacy notices, HighLevel settings, messaging rules, and
                        accepted agreements. Obtain qualified advice for applicable law.
                    </BlogText>
                    <BlogList
                        items={[
                            "Keep credentials server-side, scoped, rotated, inventoried, and separated by environment.",
                            "Do not expose private integration tokens in browser code or static configuration.",
                            "Validate redirect URIs and OAuth state where OAuth is used.",
                            "Protect public endpoints from enumeration, replay, injection, oversized payloads, and abuse.",
                            "Document vendor outages, token expiry, API changes, manual fallback, and data-correction procedures.",
                        ]}
                    />

                    <BlogHeader>SEO migration controls</BlogHeader>
                    <BlogText>
                        Google can render JavaScript; it is inaccurate to say that crawlers never execute it. The
                        relevant question is what each route returns, renders, links, and exposes under actual status,
                        robots, canonical, content, and script conditions. A hybrid frontend can make those outputs more
                        controllable, but it does not guarantee indexing, rankings, AI citations, traffic, or leads.
                    </BlogText>
                    <BlogList
                        items={[
                            "Inventory URLs, statuses, canonicals, metadata, headings, content, internal links, media and structured data.",
                            "Keep valuable URLs stable where practical and test page-level redirects for every approved change.",
                            "Crawl staging and production, compare rendered outputs, submit sitemaps and preserve a rollback path.",
                            "Annotate launch and monitor Search Console by page, query, country, device and search type.",
                        ]}
                    />
                    <BlogText>
                        The same controls apply to any platform change, so the longer write-up on{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what a migration does to search visibility</Link>{" "}
                        is worth reading alongside this list. If a team is still choosing who does the work, the{" "}
                        <Link href="/blog/website-developer-agency" className={sourceLinkClass}>guide to selecting a development agency</Link>{" "}
                        covers what to ask for in writing.
                    </BlogText>

                    <BlogHeader>Performance acceptance</BlogHeader>
                    <BlogText>
                        HighLevel and Next.js do not have one universal score. Test representative real pages under a
                        recorded device, network, location, consent state, content state, cache state, and tool version.
                        Use{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>field Core Web Vitals</Link>{" "}
                        where eligible data exists and repeat lab tests for diagnosis.
                    </BlogText>
                    <BlogText>
                        PandaCodeGen accepts a 90+ Lighthouse target only when the signed terms name representative
                        pages, mobile and desktop profiles, the exact environment, three passing runs per page and
                        profile, exclusions, and remedy. It is not a ranking, traffic, conversion, or revenue guarantee.
                    </BlogText>

                    <BlogHeader>Cutover and handoff checklist</BlogHeader>
                    <BlogList
                        items={[
                            "Freeze the approved inventory and record DNS, certificates, redirects, vendors and rollback owners.",
                            "Run contact, workflow, calendar, notification, analytics and consent tests with disposable records.",
                            "Verify errors, retries, rate limits, webhook signatures, token refresh and vendor-outage behavior.",
                            "Transfer the agreed repository, deployment, documentation and business accounts under the accepted terms.",
                            "Monitor public routes and business events after cutover, then close only after reconciliation and acceptance.",
                        ]}
                    />
                    <BlogText>
                        The account-transfer step is the one teams tend to leave vague.{" "}
                        <Link href="/blog/do-you-own-your-website" className={sourceLinkClass}>Our checklist on website and account ownership</Link>{" "}
                        lists what should be in a client-controlled name before sign-off. For budget planning, the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>published planning tiers</Link> and the{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className={sourceLinkClass}>breakdown of what shapes a custom website cost</Link>{" "}
                        give a starting range, and a{" "}
                        <Link href="/contact" className={sourceLinkClass}>scoping conversation</Link> turns it into a number for the actual account.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>{source.name}</a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your HighLevel migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will inventory the public routes, CRM dependencies, data flow, test conditions, risks,
                            cutover and support before recommending native optimization or a hybrid frontend.
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
