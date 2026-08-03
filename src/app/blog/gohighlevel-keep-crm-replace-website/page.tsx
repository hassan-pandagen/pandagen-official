import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
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
        "GoHighLevel headless website",
        "replace GoHighLevel website builder",
        "GoHighLevel custom frontend",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-04",
        modifiedTime: "2026-08-03",
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
            dateModified: "2026-08-03",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["GoHighLevel", "HighLevel API", "CRM integration", "Landing page performance", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "GoHighLevel",
            inLanguage: "en-US",
            wordCount: 2350,
            timeRequired: "PT9M",
            about: [
                { "@type": "Thing", name: "GoHighLevel" },
                { "@type": "Thing", name: "Customer relationship management", sameAs: ["https://en.wikipedia.org/wiki/Customer_relationship_management"] },
                { "@type": "Thing", name: "Next.js", sameAs: ["https://nextjs.org"] },
                { "@type": "Thing", name: "Webhook", sameAs: ["https://en.wikipedia.org/wiki/Webhook"] },
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
                { "@type": "ListItem", position: 3, name: "Keep HighLevel, replace website", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-04",
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
                            Yes, you can keep GoHighLevel as your CRM and replace only the website it builds.
                            Keep HighLevel doing the thing it is genuinely good at, and put a faster public
                            website in front of it. The contacts, workflows, calendars and pipeline stay exactly
                            where they are. Only the pages your customers and search engines actually see move.
                            Whether that trade is worth making comes down to what you have measured on the
                            current site, and to who will own the integration once it exists, because that part
                            does not end at launch.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 3, 2026 against current HighLevel developer and support documentation.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="May 4, 2026"
                        readTime="9 min read"
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        bio="Hassan designs CRM-connected websites and search-sensitive migrations."
                    />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The architecture in one minute</h2>
                        <BlogList
                            items={[
                                "The public site: the pages, navigation, content, metadata, forms and how consent works.",
                                "Integration layer: server endpoints that validate input, apply abuse controls and call HighLevel under scoped credentials.",
                                "HighLevel keeps your contacts, calendars, workflows, pipeline and conversations, plus whatever else you agreed it handles.",
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
                        on. Anything the public sees and search engines read moves to the frontend, whether that frontend is Next.js, WordPress or Webflow. The integration questions below are the same in all three; only the build effort differs. Anything that runs
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
                                <li>White-label and rebilling arrangements where used. Check the billing unit before you model this: several HighLevel add-ons are priced per sub-account rather than per agency, so the line grows with the number of clients you onboard</li>
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
                    <BlogText>
                        A hybrid is worth considering once you have fixed what you realistically can inside HighLevel and real pages still miss what you agreed, while your team still runs on HighLevel for contacts, workflows and calendars. Stay native when the current website meets the business requirements, or when budget, traffic, content maturity, capacity and integration risk do not justify a separate frontend. Framework preference alone is not a migration case.
                    </BlogText>
                    <BlogList
                        items={[
                            "You fixed what you realistically could inside HighLevel, and real example pages still miss what you agreed on speed, accessibility, content, design or search.",
                            "Your team still runs on HighLevel for contacts, workflows, calendars, pipelines, conversations or sub-accounts.",
                            "The organization accepts the added integration ownership, monitoring, vendor-change work, and incident surface.",
                            "A documented total-cost and risk comparison supports replacement instead of another native-site optimization pass.",
                        ]}
                    />
                    <BlogText>
                        A hybrid is worth considering once you have fixed what you realistically can inside HighLevel
                        and real pages still miss what you agreed on speed, search or design, and your team still
                        runs on HighLevel for contacts, workflows and calendars. Our hybrid builds start at $1,500.
                        Stay native when the current website meets business requirements, or when budget, traffic,
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
                                <tr><td className="p-4 font-bold">No capacity to own an integration, monitoring and vendor changes</td><td className="p-4">Stay native. A hybrid adds responsibility the organization has to carry every month, not just at launch.</td></tr>
                                <tr><td className="p-4 font-bold">Organic search or AI answer surfaces are a main acquisition route</td><td className="p-4">Investigate a hybrid, and confirm it by crawling the rendered output of the current pages rather than assuming.</td></tr>
                                <tr><td className="p-4 font-bold">Paid traffic lands on pages you need full control over</td><td className="p-4">Investigate a hybrid using your own account data on landing-page behavior, not a general claim about the platform. Google lists landing page experience as one of three Quality Score components, so the evidence you need is your own Quality Score diagnostics, not a platform reputation.</td></tr>
                                <tr><td className="p-4 font-bold">Many location or service pages need distinct URLs, metadata and schema</td><td className="p-4">Investigate a hybrid, and price the content model and editorial workflow, not just the templates.</td></tr>
                                <tr><td className="p-4 font-bold">An agency wants control of its own marketing site</td><td className="p-4">Consider a hybrid for the agency site while keeping sub-account builds native, where standardization is worth more than control.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>What HighLevel officially supports</BlogHeader>
                    <BlogText>
                        HighLevel&apos;s current developer portal documents programmatic access to resources including
                        contacts, conversations, calendars, appointments, payments, and webhooks. It documents OAuth
                        2.0 with scoped access for marketplace applications and also describes Private Integration
                        Tokens, sent as a bearer token alongside a Version header such as 2021-07-28, with scopes
                        chosen at creation. HighLevel&apos;s support documentation states that legacy API keys run on
                        API v1.0, which has reached end-of-life, that new v1 key creation is no longer supported, and
                        that keys unused for 90 days are deleted automatically. If a tutorial tells you to paste an
                        API key into your website, that instruction is out of date. HighLevel&apos;s OAuth FAQ
                        currently publishes marketplace-app limits of 100 requests per 10 seconds and 200,000
                        requests per day, per app per resource, and returns X-RateLimit-Max, X-RateLimit-Remaining,
                        X-RateLimit-Limit-Daily and X-RateLimit-Daily-Remaining headers so you can see where you
                        stand. Available resources, versions, scopes and limits must still be checked for the target
                        account when the project is scoped, because these numbers are the vendor&apos;s to change.
                    </BlogText>
                    <BlogText>
                        HighLevel&apos;s support documentation also shows its website builder includes SEO metadata,
                        mobile editing, tracking code, custom CSS, and external JavaScript behavior. This is an
                        architecture choice, not proof that every native HighLevel site is broken.
                    </BlogText>

                    <BlogHeader>Forms and contact creation</BlogHeader>
                    <BlogText>
                        A custom form has to create the contact as reliably as the native one did, which means the work is mostly server-side rather than in the markup. Collect only approved fields with accurate consent, validate and normalize on the server, use the current approved endpoint and duplicate policy, and record a correlation ID so support can trace a submission that went missing.
                    </BlogText>
                    <BlogList
                        items={[
                            "Collect only approved fields and show accurate notice and consent behavior before submission.",
                            "Validate and normalize data on the server. Rate-limit, apply bot controls, and reject unexpected fields.",
                            "Use the current approved HighLevel endpoint, integration type, scope, and duplicate-contact policy.",
                            "Return a safe visitor state while recording a correlation ID for support and reconciliation.",
                            "Test that a contact is created with the right source, tags and custom fields, that duplicates are handled, that the workflow fires, and that errors, retries and notifications all behave.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Do not promise that every workflow remains untouched">
                        A workflow continues only if its real trigger and required fields still occur. Inventory each
                        dependency and run accepted end-to-end tests. A contact write, a form submission, an appointment,
                        and a tag change are not interchangeable events.
                    </InsightBox>

                    <BlogHeader id="lead-path">What actually happens when someone fills in the form</BlogHeader>
                    <BlogText>
                        This is worth walking through end to end, because it is the part operators are nervous about and it
                        is simpler than it sounds. A visitor lands on the new site and completes the contact form. The
                        form is yours, so it looks how you want and is not a slow embedded widget. When they submit, a
                        spam check runs invisibly, your server validates what was sent, and the lead is written into
                        HighLevel under scoped credentials.
                    </BlogText>
                    <BlogText>
                        HighLevel then does what it always did. The workflow you already built fires, the same message
                        goes out, the same pipeline stage gets set, and the lead appears in the same place your team
                        already looks. Nobody has to be retrained and no automation is rebuilt. That is the whole point
                        of the arrangement: the front door changes and the building behind it does not.
                    </BlogText>
                    <BlogText>
                        The honest caveat is the one in the box above. This holds only for the events you actually
                        mapped and tested. A workflow triggered by something the new form no longer produces will stop
                        firing silently, and nobody notices until a month of leads has gone cold.
                    </BlogText>

                    <BlogHeader>Calendar choices</BlogHeader>
                    <BlogText>
                        An approved HighLevel embed can be the smallest integration, but measure its responsive,
                        accessibility, consent, styling, performance, and failure behavior. A{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom booking interface</Link>{" "}
                        can use supported calendar and appointment APIs where the account and scopes permit it, but it
                        adds availability, time-zone, conflict, cancellation, rescheduling, retry, and accessibility
                        responsibilities.
                    </BlogText>
                    <BlogText>
                        Treat the embed as the default and make the custom interface earn its place. The embed is a
                        paste-in that HighLevel keeps working. The custom build buys you design control and a faster
                        booking interaction, and in exchange you inherit every edge case the embed was quietly handling
                        for free. That is a reasonable trade for a brand where booking is the experience, and a poor one
                        almost everywhere else.
                    </BlogText>

                    <BlogHeader>Webhooks need authentication and recovery</BlogHeader>
                    <BlogText>
                        HighLevel&apos;s current webhook guide says to verify authenticity. It identifies{" "}
                        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">X-GHL-Signature</code>{" "}
                        with Ed25519 as the current header, to be used whenever it is present. The legacy
                        RSA-SHA256 header{" "}
                        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">X-WH-Signature</code>{" "}
                        is documented as deprecated on September 1, 2026, after which webhooks are signed with
                        the Ed25519 header only. That date is fixed,
                        so this is a live deadline rather than a future one. If you have inherited a HighLevel
                        integration, search the codebase for that legacy string now: anything still verifying
                        against it alone will start rejecting or, worse, silently accepting unverified webhooks
                        once the switch happens. Recheck the guide before release, because vendor dates move.
                    </BlogText>
                    <BlogList
                        items={[
                            "Verify the signature against the unmodified request body before processing.",
                            "HighLevel's webhook guide says to return 200 OK immediately and process asynchronously, so acknowledge first and move slow work to a durable queue.",
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
                        Google can render JavaScript; it is inaccurate to say that crawlers never execute it. Answer
                        engines are a separate question from Google, and the honest position is narrower than the one
                        usually sold: Vercel&apos;s crawler analysis, published in December 2024, found that GPTBot and
                        Claude&apos;s crawler request JavaScript files but do not execute them. That is a dated
                        observation about specific bots rather than a permanent rule, and it is worth re-checking
                        rather than repeating. The relevant question either way is what each route returns, renders,
                        links, and exposes under actual status, robots, canonical, content, and script conditions. A hybrid frontend can make those outputs more
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
                        PandaCodeGen accepts a 90+ <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> target only when the signed terms name representative
                        pages, mobile and desktop profiles, the exact environment, three passing runs per page and
                        profile, exclusions, and remedy. It is not a ranking, traffic, conversion, or revenue guarantee.
                    </BlogText>

                    <BlogHeader>Cutover and handoff checklist</BlogHeader>
                    <BlogText>
                        The account-transfer step is the one teams tend to leave vague, and it is the one that matters six months later. Five items: freeze the inventory and record DNS, certificates, redirects and rollback owners; test contacts, workflows, calendars and consent with disposable records; verify the failure behavior as well as the happy path; transfer the repository, deployment and business accounts under the accepted terms; then monitor before closing.
                    </BlogText>
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
