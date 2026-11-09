import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Blocks, Braces, FileText, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { finding } from "@/data/research-facts";
import ArticleContents from "@/components/blog/ArticleContents";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "wordpress-vs-nextjs";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress vs Next.js in 2026: Requirements, Cost and Migration";
const description =
    "WordPress or Next.js? Compared on architecture, editing, speed, SEO, security, integrations, total cost, ownership and migration risk.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "WordPress vs Next.js",
        "Next.js vs WordPress",
        "WordPress to Next.js",
        "Next.js CMS",
        "WordPress migration",
        "WordPress vs custom website",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-15",
        modifiedTime: "2026-11-09",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-vs-nextjs")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress features", url: "https://wordpress.org/about/features/" },
    { name: "WordPress REST API", url: "https://developer.wordpress.org/rest-api/" },
    { name: "WordPress export documentation", url: "https://wordpress.org/documentation/article/tools-export-screen/" },
    { name: "WordPress hardening guide", url: "https://developer.wordpress.org/advanced-administration/security/hardening/" },
    { name: "Next.js server and client components", url: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
    { name: "Next.js caching guide", url: "https://nextjs.org/docs/app/getting-started/caching" },
    { name: "Next.js production checklist", url: "https://nextjs.org/docs/app/guides/production-checklist" },
    { name: "Next.js data security guide", url: "https://nextjs.org/docs/app/guides/data-security" },
    { name: "W3Techs: WordPress usage statistics", url: "https://w3techs.com/technologies/details/cm-wordpress" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/wordpress-vs-nextjs"),
            description,
            datePublished: "2026-03-15",
            dateModified: "2026-11-09",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["WordPress", "Website migration", "Technical SEO", "Web performance", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Platform comparison",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "WordPress", sameAs: ["https://en.wikipedia.org/wiki/WordPress"] },
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 3524,
            timeRequired: "PT17M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "WebPage",
            name: title,
            "@id": "https://www.pandacodegen.com/blog/wordpress-vs-nextjs#webpage",
            url: "https://www.pandacodegen.com/blog/wordpress-vs-nextjs",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/wordpress-vs-nextjs#breadcrumb" },
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

export default function WordPressVsNextJsPage() {
    return (
        <>
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb schemaId={"https://www.pandacodegen.com/blog/wordpress-vs-nextjs#breadcrumb"} items={postCrumbs(postId, "WordPress vs Next.js")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Platform comparison</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress vs Next.js: <span className="italic text-cognac">Choose the Operating Model</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Choose WordPress when its publishing workflow fits and your team can operate the stack;
                            choose Next.js when application-level rendering, data or interface control justifies
                            assembling and maintaining a custom one. The decision is about operating capability, not
                            about which platform is better. WordPress is an integrated publishing platform. Next.js is
                            an application framework that must be paired with content, hosting and services, so compare
                            finished builds rather than the two names.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed against current WordPress, Next.js and Google documentation on November 9, 2026.
                        </p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="wordpress-vs-nextjs" />
                      </div>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" postId="wordpress-vs-nextjs" published="2026-03-15" readTime="17 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            Keep WordPress when publishing is the main job and the current site can be repaired.
                            Choose Next.js when the customer experience or business integrations justify a custom
                            application, with a CMS and ongoing engineering included. PandaCodeGen builds Next.js sites
                            and sells WordPress migration services, so we have a commercial interest in this comparison.
                        </p>
                        <BlogList
                            items={[
                                "Choose WordPress when its publishing workflow and maintained ecosystem fit and the team can operate the stack.",
                                "Choose Next.js when application-level rendering, data, integration or interface control justifies assembling and maintaining a custom stack.",
                                "Neither platform has a universal PageSpeed score, SEO outcome, security level, hosting cost or payback period.",
                                "A WordPress to Next.js migration should be driven by measurable constraints and a complete replacement plan.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="info" label="What we have actually delivered">
                        We moved <Link href="/work/ladies-4-jesus" className="text-cognac hover:underline">Ladies 4 Jesus from WordPress to Next.js and Sanity</Link>,
                        with publishing and submission moderation for its owner. For <Link href="/work/a-step-above-medical" className="text-cognac hover:underline">A Step Above Medical</Link>,
                        we replaced a Divi WordPress site and built a staff portal for classes, students, payments and
                        certificates. These examples show the workflows we can deliver; they do not establish savings
                        or performance improvements for another site.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-5">
                        {[
                            { icon: FileText, title: "WordPress", body: "Integrated content, themes, users and plugins." },
                            { icon: Braces, title: "Next.js", body: "Application framework with chosen services." },
                            { icon: Blocks, title: "Features", body: "Core, extensions, packages and custom work." },
                            { icon: Gauge, title: "Quality", body: "Measured implementation, not platform label." },
                            { icon: ShieldCheck, title: "Ownership", body: "Lifecycle, access, data and handoff." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>
                    <BlogText>
                        There is a third option: keep WordPress as the CMS and use Next.js for the public site. WordPress's <a href="https://developer.wordpress.org/rest-api/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">REST API</a> lets a separate application consume its content. That can preserve the editor staff know, but previews, forms and plugin-generated output need explicit integration. The <a href="#headless" className="text-cognac hover:underline">headless section below</a> explains when that extra work earns its place.
                    </BlogText>

                    <ArticleContents />
                    <BlogHeader id="different">They are different product categories</BlogHeader>
                    <BlogText>
                        WordPress includes a content database, administration interface, themes, users, media and an
                        extension system. Next.js provides routing, rendering and application capabilities, but the team
                        chooses the CMS, database, identity, forms, search, email, analytics, hosting and operational
                        tooling. A useful comparison names the complete Next.js stack and the complete WordPress stack.
                    </BlogText>

                    <BlogHeader id="is-wordpress-outdated">Is WordPress outdated in 2026?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                        No. WordPress supports block-based publishing, custom development and a REST API for separate applications. An old theme or an overloaded installation is a reason to review that implementation. It is not evidence that every WordPress site needs replacing. Start with the editing tasks and customer journeys that need to change.
                    </BlogText>
                    </div>


                    <BlogQuote>
                        Choose WordPress when the publishing workflow fits your team. Choose Next.js when the interface or the data needs more control than a theme gives you.
                    </BlogQuote>

                    <BlogHeader id="why-people-leave">Why do people move away from WordPress?</BlogHeader>
                    <BlogText>
                        Four situations are worth investigating before commissioning a migration. Each is a diagnostic prompt, not a plugin-count or traffic threshold:
                    </BlogText>
                    <BlogList
                        items={[
                            "Critical workflows depend on overlapping or unmaintained plugins. Map their responsibilities and recurring repair work before deciding whether to simplify or replace them.",
                            "The editor no longer matches the work. Test whether structured templates or a simpler WordPress configuration solve it before changing CMS.",
                            "Uncached or personalized routes miss the performance target. WordPress can serve cached pages, and Next.js can also perform request-time work. Profile the slow routes and their queries before choosing a rendering strategy.",
                            "The organization needs clearer release and security controls. Compare documented access, dependency updates, testing and recovery on both proposed stacks.",
                        ]}
                    />
                    <BlogText>
                        If one of these describes your site, compare a scoped repair with a scoped replacement. Our recommendation is to <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">diagnose and price the WordPress repair first</Link>. A rebuild earns its place when it solves a remaining requirement, not simply because the current installation is frustrating.
                    </BlogText>

                    <BlogHeader id="architecture">Architecture comparison</BlogHeader>
                    <BlogText>
                        The six rows below all resolve to one thing: where the responsibility sits. WordPress ships content, rendering, features, updates, deploys and exit as one product; Next.js requires you to choose and assemble each of them. That is not better or worse, it is a different amount of ownership. The row most comparisons skip is the last one, because exit is where the difference actually costs money.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[1060px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Area</th><th className="p-4">WordPress</th><th className="p-4">Next.js implementation</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Content</td><td className="p-4">Built-in admin, database, media and revisions</td><td className="p-4">Chosen CMS or data source and preview integration</td></tr>
                                <tr><td className="p-4 font-bold">Rendering</td><td className="p-4">Theme and plugin implementation, with cache options</td><td className="p-4">Server, static and client patterns selected by route</td></tr>
                                <tr><td className="p-4 font-bold">Features</td><td className="p-4">Core, maintained extensions and custom PHP or JavaScript</td><td className="p-4">Packages, APIs, providers and custom TypeScript or JavaScript</td></tr>
                                <tr><td className="p-4 font-bold">Updates</td><td className="p-4">Core, runtime, theme and plugins</td><td className="p-4">Framework, packages, providers and application</td></tr>
                                <tr><td className="p-4 font-bold">Deployments</td><td className="p-4">Host and update workflow</td><td className="p-4">Build, deployment, cache invalidation and rollback workflow</td></tr>
                                <tr><td className="p-4 font-bold">Exit</td><td className="p-4">Content export plus theme and plugin-specific data</td><td className="p-4">Code, CMS data, providers, documentation and account handoff</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="editing">Editing and content operations</BlogHeader>
                    <BlogText>
                        WordPress offers an integrated editing experience and a mature ecosystem. A Next.js site can
                        give non-developers a strong workflow when paired with a suitable CMS, but preview, visual
                        editing, roles, scheduling, localization and media need deliberate integration. Test real
                        editorial tasks before choosing.
                    </BlogText>
                    <BlogList
                        items={[
                            "Create and edit each content type",
                            "Preview draft content in the correct route and state",
                            "Review, approve, schedule and roll back changes",
                            "Reuse structured sections without breaking layout",
                            "Manage localization, media and accessibility fields",
                            "Understand what still requires a developer",
                        ]}
                    />

                    <BlogHeader id="performance">Performance comparison</BlogHeader>
                    <BlogText>
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">A well-implemented WordPress site can be fast</Link>, and a poorly implemented Next.js site can be
                        slow. WordPress speed comes down to the theme, the plugins, the hosting, the database, caching, your media and third
                        parties. Next.js performance depends on rendering choices, data fetching, caching, JavaScript,
                        media, providers and third parties. Compare representative routes with the same content and
                        features.
                    </BlogText>
                    <InsightBox variant="info" label="Field and lab answer different questions">
                        Use available Chrome UX Report data for <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">real-user Core Web Vitals</Link> and controlled Lighthouse or
                        DevTools runs for diagnosis. Record which page, which device, what connection, which region, what you consented to, and whether you were signed in. A
                        score of 90 is a <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> band, not a Google ranking threshold.
                    </InsightBox>

                    <BlogHeader id="rendering">What Next.js rendering control can offer</BlogHeader>
                    <BlogText>
                        Next.js documents Server and Client Components plus caching and revalidation patterns. A team
                        can choose which code and data are needed for a route and where work runs. That control can be
                        valuable, but incorrect boundaries can expose data, create stale content, ship unnecessary
                        JavaScript or make invalidation difficult. Framework capability is not proof of a correct
                        implementation.
                    </BlogText>

                    <BlogHeader id="wordpress-performance">What WordPress optimization can offer</BlogHeader>
                    <BlogText>
                        WordPress can use page, object, browser and CDN caching, optimized themes and media, maintained
                        plugins and appropriate hosting. Profile server, database, frontend and background work before
                        assuming PHP or a database is the limiting factor. Dynamic, authenticated and commerce journeys
                        need their own tests.
                    </BlogText>

                    {/* Third-party measurement, added 13 Aug 2026. Both figures render from
                        research-facts.json with their method and limitation attached, because a
                        platform-vs-platform error average is the kind of number that gets stripped
                        of its caveats the moment someone quotes it. */}
                    <BlogHeader id="accessibility">Accessibility comparison</BlogHeader>
                    <BlogText>
                        {finding("cms-errors-2026").statement}. On the same sample,{" "}
                        {finding("framework-errors-2026").statement.replace("By JavaScript framework, ", "")}.
                        Both figures come from {finding("cms-errors-2026").study},{" "}
                        {finding("cms-errors-2026").publisher.split(",")[0]}.
                    </BlogText>
                    <BlogText>
                        Two things that comparison does not establish. It is an association rather than a
                        cause: platform choice travels with site age, budget and the skill of whoever built
                        it, and none of those were controlled for. And it describes sites neither of us
                        built, so it is context for a platform decision, not evidence about any particular
                        agency&apos;s work, including ours.
                    </BlogText>
                    <BlogText>
                        The result that cuts against the usual pitch is worth stating plainly: Squarespace
                        averaged 33.0 detected errors and Wix 33.3, both well below WordPress. The study does not establish why those averages differ or whether any individual site is accessible. {finding("cms-errors-2026").limitation}
                    </BlogText>
                    <BlogText>
                        Hosted platforms also differ in the controls available to authors. <Link href="/blog/is-squarespace-bad-for-seo" className="text-cognac hover:underline">Our Squarespace SEO review</Link> separates settings you can fix from platform limitations that might justify a move.
                    </BlogText>
                    <BlogText>
                        Method, so the numbers can be checked rather than taken:{" "}
                        {finding("cms-errors-2026").method} Full report:{" "}
                        <a
                            href={finding("cms-errors-2026").source}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                        >
                            The WebAIM Million 2026
                        </a>.
                    </BlogText>

                    <BlogHeader id="seo">SEO comparison</BlogHeader>
                    <BlogText>
                        Either platform can deliver crawlable rendered content, titles, descriptions, canonicals,
                        internal links, structured data and sitemaps. WordPress often provides these through core,
                        themes and plugins. Next.js provides application primitives and metadata support, while the
                        implementation owns the output. Google does not rank a page simply because it uses either
                        platform. Our guide to{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">how website speed affects SEO</Link>{" "}
                        sets out where page experience fits alongside the rest of search.
                    </BlogText>

                    <BlogHeader id="security">Security comparison</BlogHeader>
                    <BlogText>
                        WordPress risk includes core, runtime, themes, plugins, hosting and privileged administration.
                        Next.js risk includes framework and package dependencies, application code, build systems,
                        hosting, CMS and other providers. Compare least privilege, update ownership, secret management,
                        input validation, logs, backups, recovery and incident response. Static output can reduce some
                        runtime exposure but does not create a zero-attack-surface site.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Attack surface</th>
                                    <th className="p-4">WordPress</th>
                                    <th className="p-4">Next.js</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Third-party code on the server</td><td className="p-4">Plugins and themes execute PHP with database access</td><td className="p-4">Framework and third-party packages can execute during installation, builds, server requests and in browser bundles</td></tr>
                                <tr><td className="p-4 font-bold">Public admin endpoint</td><td className="p-4">A login route is reachable by default unless you move or restrict it</td><td className="p-4">No built-in content administration; application and CMS authentication depend on the chosen services and deployment</td></tr>
                                <tr><td className="p-4 font-bold">Writable directories</td><td className="p-4">Uploads and cache paths are writable at runtime</td><td className="p-4">Static artifacts can be read-only; runtime writes and upload permissions depend on hosting and storage design</td></tr>
                                <tr><td className="p-4 font-bold">Dependency risk</td><td className="p-4">Core, theme and every plugin, each on its own release schedule</td><td className="p-4">Framework and the full transitive npm tree, pinned by lockfile</td></tr>
                                <tr><td className="p-4 font-bold">Supply chain</td><td className="p-4">Compromised releases can reach sites through updates; staging and release controls can limit exposure</td><td className="p-4">Malicious dependencies can steal build credentials or ship into server and browser code</td></tr>
                                <tr><td className="p-4 font-bold">Secrets</td><td className="p-4">Server configuration, database credentials and integration tokens</td><td className="p-4">Host environment variables and provider tokens</td></tr>
                                <tr><td className="p-4 font-bold">Blast radius of one bad update</td><td className="p-4">Can affect the live site immediately</td><td className="p-4">A build-breaking change fails to deploy; a change that builds cleanly still ships</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="warning" label="What the comparison supports">
                        A controlled deployment can keep an unreviewed dependency update away from production.
                        A successful build does not detect every malicious change, and Next.js dependencies can
                        execute at runtime too. WordPress can also use staged updates and restricted deployment
                        permissions. The advantage comes from the architecture and release process you actually
                        operate, with someone responsible for patches, monitoring and recovery.
                    </InsightBox>
                    <BlogHeader id="plugin-buyouts">Can buying a plugin put existing websites at risk?</BlogHeader>
                    <BlogText>
                        Yes, when the buyer gains control of its releases. In its April 2026{' '}
                        <a href="https://www.patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">EssentialPlugin investigation</a>,
                        Patchstack documented an acquisition followed by backdoored updates and later remote
                        activation. An already-installed plugin can therefore become a delivery route for malware.
                        Buying a plugin license alone does not grant permission to publish updates to everyone
                        else; control of the publisher or release credentials is the critical distinction.
                    </BlogText>
                    <BlogText>
                        npm also has documented malicious-package campaigns. GitHub&apos;s{' '}
                        <a href="https://github.blog/security/supply-chain-security/strengthening-supply-chain-security-preparing-for-the-next-malware-campaign/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Shai-Hulud analysis</a>{' '}
                        describes credential theft through package installation. A compromised developer machine
                        or build runner can expose credentials before anything is deployed. These incident reports
                        do not provide comparable rates per website or installation, so they cannot establish that
                        npm attacks are rarer or less exploitable than WordPress attacks.
                    </BlogText>
                    <BlogHeader id="security-recovery">How does fixing a security issue compare?</BlogHeader>
                    <BlogText>
                        Separate a vulnerable version from a confirmed compromise. Our practical comparison below
                        assumes that the team can access the application, hosting and relevant logs. The repair scope
                        depends on what executed and what it could access, not just the framework name.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Security repair comparison">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100"><tr><th className="p-4">Situation</th><th className="p-4">WordPress</th><th className="p-4">Next.js and npm</th></tr></thead>
                            <tbody className="divide-y divide-stone-200">
                                <tr><td className="p-4">Vulnerable version, no compromise established</td><td className="p-4">Identify the affected core, theme or plugin edition and version. Apply the trusted fix, test key flows and update every affected installation.</td><td className="p-4">Identify direct and transitive affected packages. Update the dependency and lockfile, test, rebuild and redeploy every affected environment.</td></tr>
                                <tr><td className="p-4">Malware or unauthorized access found</td><td className="p-4">Contain access and preserve evidence. Check files, database content, privileged users, scheduled tasks and persistent backdoors; restore or rebuild from a known-clean state and rotate exposed credentials.</td><td className="p-4">Contain affected machines and runners and preserve evidence. Revoke exposed tokens, investigate repositories and provider accounts, rebuild in a clean environment from trusted dependencies and redeploy.</td></tr>
                                <tr><td className="p-4">After recovery</td><td className="p-4">Verify the original entry point is closed, check for remaining persistence and monitor for reinfection or spam.</td><td className="p-4">Verify the entry point is closed, inspect affected services and artifacts, and monitor for credential reuse or reinfection.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Patching closes a known vulnerability; it does not remove every backdoor or undo stolen data.
                        Rolling back a deployment cannot revoke a leaked token. Neither platform has a universal
                        repair time or cost. For a smaller public website, fewer privileged integrations and static
                        delivery where suitable can reduce exposure, while authenticated features and APIs still
                        need their own security work.
                    </BlogText>

                    <BlogHeader id="features">Plugin ecosystem versus assembled services</BlogHeader>
                    <BlogText>
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">WordPress extensions</Link> can deliver deep functionality quickly, especially for niche publishing,
                        membership, learning or commerce use cases. A Next.js team may integrate specialist services or
                        build custom behavior. Inventory features, data, edge cases, vendor support, portability and
                        long-term ownership. Replacing a plugin is not automatically simpler or cheaper.
                    </BlogText>

                    <BlogHeader id="cost">Three-year cost comparison</BlogHeader>
                    <BlogText>
                        Neither platform has a three-year cost until you fill in seven lines from your own invoices and from quotes covering the same work. A generous free tier today is not a price you are owed in year three, a WordPress maintenance retainer is not universal, and a custom build still needs somebody to maintain it. Fill the seven rows below with your own figures before you believe any saving or payback period, including ours.
                    </BlogText>
                    <BlogList
                        items={[
                            "Initial repair, rebuild or migration",
                            "Hosting, CDN, storage, bandwidth and builds",
                            "CMS, database, search, email, analytics and monitoring",
                            "Theme, plugin, package and provider lifecycle",
                            "Internal editing, releases, QA and vendor management",
                            "Security, backup, recovery and support",
                            "Roadmap changes and eventual exit",
                        ]}
                    />
                    <BlogText>
                        For a worked example and the line items to collect, use our{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline">three-year cost model for WordPress and custom code</Link>{" "}
                        and the{" "}
                        <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">scope and tiers behind a migration quote</Link>.
                    </BlogText>

                    <BlogHeader id="ownership">Ownership and portability</BlogHeader>
                    <BlogText>
                        Open-source software does not by itself answer who controls the domain, hosting, repository,
                        content, data, accounts or custom deliverables. Review contracts and provider terms. WordPress
                        has a documented content export, but themes and plugins may store data separately. A Next.js
                        handoff should include code, data paths, environment configuration, provider accounts,
                        documentation and licenses. Our{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">contract and control checklist for website ownership</Link>{" "}
                        lists the assets to confirm before signing.
                    </BlogText>

                    <BlogHeader id="team">Team and operating capability</BlogHeader>
                    <BlogText>
                        WordPress can suit teams that value integrated publishing and can manage hosting and extension
                        updates. Next.js can suit teams or partners able to own application releases, packages, providers
                        and observability. The technically possible option is not necessarily the operationally suitable
                        one.
                    </BlogText>

                    <BlogHeader id="choose-wordpress">Choose WordPress when</BlogHeader>
                    <BlogText>
                        Stay on WordPress when its editor and content model fit the team, maintained plugins cover the capability economically, and a named person owns updates, security, backup and support. The condition people skip is the third one: a stack nobody owns degrades regardless of which platform it runs on.
                    </BlogText>
                    <BlogList
                        items={[
                            "Its editor and content model fit the team.",
                            "Maintained plugins provide required capability economically.",
                            "The site you have can do the job once it has actually been repaired.",
                            "The organization has a clear update, security, backup and support owner.",
                            "A custom migration would recreate mature functionality without material benefit.",
                        ]}
                    />

                    <BlogHeader id="choose-next">Choose Next.js when</BlogHeader>
                    <BlogText>
                        Move to Next.js only when application-level control is genuinely required, the target CMS and editorial workflow have been selected and tested, and the team can own the build, deploy, dependency and provider lifecycle. All five conditions below are usually true together, and the migration and operating scope has to be funded, not assumed.
                    </BlogText>
                    <BlogList
                        items={[
                            "The required experience, rendering or data integration needs application-level control.",
                            "The target CMS and editorial workflow are explicitly selected and tested.",
                            "The team can own build, deployment, dependency and provider lifecycle.",
                            "Measured WordPress constraints cannot be reasonably solved in place.",
                            "The migration capability, data, SEO, acceptance and operating scope is funded.",
                        ]}
                    />

                    <BlogHeader id="headless">Consider headless WordPress when</BlogHeader>
                    <BlogText>
                        Headless WordPress retains WordPress for content while Next.js delivers the frontend. It may fit
                        when editors value WordPress and the frontend needs separate delivery. It also adds APIs,
                        previews, cache invalidation, two deployments and distributed debugging. Prototype the hardest
                        content, preview, search and revalidation paths before committing.
                    </BlogText>

                    <BlogHeader id="migration">WordPress to Next.js migration controls</BlogHeader>
                    <BlogText>
                        Seven steps, in this order, turn a migration into something managed rather than a gamble: list and sort every web address, write down what the site actually contains, choose the new CMS and workflow, keep valuable URLs stable and map the rest, validate the rendered output, test the journeys, then cut over with monitoring and a rollback path. They reduce avoidable technical risk. They do not guarantee ranking continuity, because processing depends on the site and on search systems.
                    </BlogText>
                    <BlogList
                        items={[
                            "Crawl and classify every current URL.",
                            "Inventory templates, content types, plugins, data and integrations.",
                            "Define the target CMS and staff workflows.",
                            "Keep valuable URLs stable where practical and map relevant redirects.",
                            "Validate rendered metadata, content, links, schema and sitemaps.",
                            "Test accessibility, performance, forms, analytics and business journeys.",
                            "Plan cutover, final data delta, monitoring and rollback.",
                        ]}
                    />
                    <BlogText>
                        The{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">step-by-step WordPress to Next.js migration guide</Link>{" "}
                        works through each control in order, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">what a migration does to existing search performance</Link>{" "}
                        covers the risk side of the same decision.
                    </BlogText>

                    <BlogHeader id="case">What the MyCustomPatches migration shows</BlogHeader>
                    <BlogText>
                        <Link href="/work/mycustompatches" className="text-cognac hover:underline">MyCustomPatches</Link> is an independent client, not a PandaCodeGen property, and its figures are
                        owner-confirmed and published with permission. The owner reports a delivery of about 22 days.
                        Our central project record lists client-owner approval on July 21, 2026. Treat it as an owner statement for one
                        accepted scope rather than an audited figure. We attach no speed or conversion figures to it,
                        because one site&apos;s numbers depend on its own hosting, content, traffic and tracking setup,
                        and they would not predict what your migration produces. Judge the example on what it is: one
                        defined scope, delivered. The same scope structure is described on our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration service page</Link>.
                    </BlogText>

                    <BlogHeader id="offer">PandaCodeGen terms</BlogHeader>
                    <BlogText>
                        <Link href="/pricing" className="text-cognac hover:underline">Planning tiers</Link> start at $1,500 Starter, $3,500 Growth and $5,000 Scale, with custom
                        scope where needed. A common payment option is 30 percent at onboarding and 70 percent on delivery, and another written schedule may be agreed.
                        Package discussions may start with 15 calendar days of launch defect support on Starter and 30 on Growth and Scale; support applies only where the accepted project terms record it. A
                        90-plus Lighthouse target applies only under the representative pages, profiles, environment,
                        repeated runs, exclusions and remedy named in the signed scope.
                    </BlogText>

                    <BlogHeader id="related">Related reading</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><Link href="/blog/divi-theme-slow" className="text-cognac hover:underline">Diagnosing a slow Divi build before deciding to move</Link></li>
                        <li><Link href="/blog/elementor-kills-seo" className="text-cognac hover:underline">Testing Elementor pages for search and speed problems</Link></li>
                        <li><Link href="/blog/wordpress-traffic-drop-speed" className="text-cognac hover:underline">Working out what caused a WordPress traffic drop</Link></li>
                    </ul>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} showHeading={false} />
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
                        <h2 className="mb-3 font-serif text-3xl">Compare a complete WordPress and Next.js stack</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map requirements, evidence and lifecycle ownership before recommending repair,
                            headless WordPress or migration.
                        </p>
                        <QuoteModalButton cta="wordpress_nextjs_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Ask us about your site <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
        </>
    );
}
