import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Blocks, Database, Gauge, ShieldCheck } from "lucide-react";
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

const postId = "why-we-chose-nextjs-over-wordpress-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Why We Choose Next.js for Some WordPress Migrations in 2026";
const description =
    "Our requirements-led reason for choosing Next.js on selected WordPress migrations, including performance, editing, security, cost, ownership and SEO tradeoffs.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Next.js vs WordPress 2026",
        "why migrate WordPress to Next.js",
        "WordPress Next.js migration",
        "Next.js website agency",
        "SEO safe WordPress migration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-04",
        modifiedTime: "2026-08-08",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/why-we-chose-nextjs-over-wordpress-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Next.js rendering", url: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
    { name: "Next.js caching", url: "https://nextjs.org/docs/app/guides/caching" },
    { name: "WordPress hardening", url: "https://developer.wordpress.org/advanced-administration/security/hardening/" },
    { name: "WordPress plugins", url: "https://wordpress.org/documentation/article/manage-plugins/" },
    { name: "WordPress performance", url: "https://make.wordpress.org/performance/handbook/measuring-performance/" },
    { name: "Vercel terms", url: "https://vercel.com/legal/terms" },
    { name: "Sanity Visual Editing", url: "https://www.sanity.io/docs/visual-editing" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/why-we-chose-nextjs-over-wordpress-2026"),
            description,
            datePublished: "2026-03-04",
            dateModified: "2026-08-08",
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
            articleSection: "Platform strategy",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "WordPress", sameAs: ["https://en.wikipedia.org/wiki/WordPress"] },
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 1757,
            timeRequired: "PT9M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Why we choose Next.js", item: "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#webpage",
            url: "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/why-we-chose-nextjs-over-wordpress-2026#breadcrumb" },
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

export default function WhyWeChooseNextJsPage() {
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
                            { label: "Why we choose Next.js", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Platform strategy</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Why We Choose Next.js <span className="italic text-cognac">for Some WordPress Migrations</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            PandaCodeGen builds Next.js websites and migrates existing sites onto them. We choose
                            Next.js when a client needs a deliberately engineered presentation layer and can own its
                            operating model. We do not treat WordPress as automatically slow, insecure or wrong.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against current primary documentation on July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 4, 2026" readTime="9 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The honest reason</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            We moved for engineering control over how pages are rendered and delivered, not because
                            WordPress is bad at what it does. That distinction matters, because the second framing
                            would make this a recommendation and the first makes it a fit decision. Four things
                            followed from it, and each one cost us something in exchange.
                        </p>
                        <BlogList
                            items={[
                                "Next.js gives our engineering team explicit rendering, caching, component and integration choices.",
                                "WordPress gives a team a familiar editor and a broad managed ecosystem, which is a real advantage when nobody wants to learn a new publishing workflow.",
                                "Neither platform guarantees performance, security, SEO, low cost or ownership by itself.",
                                "We recommend migration only when measured requirements remain blocked after realistic WordPress repairs.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Gauge, title: "Delivery", body: "Rendering and caching chosen per route and data need." },
                            { icon: Database, title: "Editing", body: "A governed CMS selected for the content workflow." },
                            { icon: ShieldCheck, title: "Security", body: "A smaller intentional surface, still requiring updates." },
                            { icon: Blocks, title: "Ownership", body: "Repository, accounts, data and licenses defined in writing." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="what-changed">What changed our platform decision</BlogHeader>
                    <BlogText>
                        Our choice came from recurring requirements: tighter control over rendered output, reusable
                        design systems, route-specific data loading, integration work and a cleaner handoff for
                        revenue-generating sites. That is our delivery preference, not proof that every WordPress
                        property should migrate. We do not attribute any single client&apos;s ranking movement or
                        hosting bill to the platform on its own, because a rebuild usually changes content, structure
                        and hosting at the same time and no one of those can be isolated after the fact. The
                        feature-by-feature comparison behind that preference is in{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress compared with Next.js</Link>.
                    </BlogText>

                    <BlogHeader id="performance">Performance is implementation-specific</BlogHeader>
                    <BlogText>
                        Next.js supports server and client components plus multiple caching and revalidation patterns.
                        Those tools can help an experienced team send less work and control data freshness. They can
                        also be implemented poorly. WordPress speed comes down to the hosting, the caching, the theme, the plugins,
                        content, media, database work and third parties. Measure representative routes with field data
                        where available and repeated lab tests before naming the cause. Our method for the WordPress
                        side is in{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">diagnosing a slow WordPress site</Link>, and
                        the metrics themselves are explained in{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explained</Link>.
                    </BlogText>
                    <InsightBox variant="info" label="Why there are no platform score ranges here">
                        We do not publish a <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> score range for either platform. A score belongs to a specific
                        page, build, hosting setup and test condition rather than to the platform name, so a range
                        quoted without that context tells you nothing about what your own site would score. Test your
                        representative routes yourself and compare them against themselves over time. Our 90+ Lighthouse
                        handover target on mobile and desktop applies to the representative pages named in the written
                        scope, verified across three recorded runs.
                    </InsightBox>

                    <BlogHeader id="hosting">Hosting and lifecycle cost</BlogHeader>
                    <BlogText>
                        Build the comparison from current invoices and equivalent requirements. WordPress cost can
                        include hosting, backups, security, premium extensions, maintenance and support. A Next.js
                        system can include build, runtime, bandwidth, image processing, database, CMS, email, monitoring
                        and engineering. Vercel&apos;s Hobby plan is intended for personal, non-commercial use under its
                        current terms, so it is not a universal free-business-hosting promise. We set out a full
                        input-by-input model in{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline">the three-year platform cost comparison</Link>, and
                        our own tiers sit on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>.
                    </BlogText>

                    <BlogHeader id="security">Plugins, packages and security</BlogHeader>
                    <BlogText>
                        Moving off WordPress relocated our dependency risk rather than removing it. Our{" "}
                        <Link href="/blog/wordpress-ai-security-risk-2026" className="text-cognac hover:underline">review of WordPress AI plugin security</Link>{" "}
                        works through the runtime side of that, and it applies the same standard to the stack we run
                        now: a custom build still carries packages, a build pipeline and service providers, and
                        somebody still has to own patching.
                    </BlogText>
                    <BlogText>
                        WordPress advises keeping software current, limiting access, using trusted sources, backups and
                        defense in depth. Plugin risk depends on the installed software, versions, configuration and
                        maintenance. A Next.js application still uses framework and package dependencies, provider
                        services, secrets and custom code. Our goal is a smaller, intentional dependency and privilege
                        surface, not a vulnerability-free or maintenance-free system. The same inventory has a
                        performance dimension, which we cover in{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">how plugins affect front-end performance</Link>.
                    </BlogText>

                    <BlogText>
                        One argument gets made in our favour that we will not use, because on our own stack it is not
                        true. You will read that a Next.js site has <strong>no exposed database and no admin URL to
                        attack</strong> — no <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">/wp-admin</code>{" "}
                        to brute-force. The first half is fair: there is no PHP plugin runtime and no database sitting
                        behind the web tier where a plugin can reach it.
                    </BlogText>
                    <BlogText>
                        The second half is wrong for any site with a CMS, which is most of them. We run Sanity, so
                        there is an admin: it is Sanity Studio, reached with real credentials, and it holds the content
                        for the site. There are also API tokens, a Git repository, a deploy pipeline that can push code
                        to production, and a hosting account. <strong>The attack surface moved. It did not
                        disappear</strong>, and in some ways it got more interesting, because a leaked deploy token is
                        a worse afternoon than a leaked editor password. If someone selling you a rebuild tells you the
                        new site cannot be attacked, they are describing a diagram rather than a system, and the
                        honest question to ask them is where the admin went, not whether it exists.
                    </BlogText>

                    <BlogHeader id="editing">Will editors miss WordPress?</BlogHeader>
                    <BlogText>
                        Some will, especially when their workflow depends on WordPress themes, blocks and plugins.
                        Others prefer a structured CMS with constrained fields and preview. Sanity&apos;s current Visual
                        Editing documentation supports live preview and direct editing from the rendered page. The
                        correct choice depends on roles, approvals, localization, media, publishing volume, preview,
                        portability and training.
                    </BlogText>

                    <BlogHeader id="ownership">Ownership is a contract question</BlogHeader>
                    <BlogText>
                        A framework does not decide who owns deliverables. Our standard position is that client content
                        remains client property; custom deliverables transfer after full payment under the signed
                        agreement; PandaCodeGen retains reusable tools and pre-existing code; and third-party
                        components keep their original licenses. Client-controlled domains, repositories, hosting and
                        business accounts can be established when agreed. We walk through what to check in your own
                        arrangement in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>.
                    </BlogText>

                    <BlogHeader id="first-party-example">What we can say about MyCustomPatches</BlogHeader>
                    <BlogText>
                        MyCustomPatches is an independent client, not a PandaCodeGen property, and its figures are owner-confirmed and published with permission. The client's owner reports a delivery of about 22 days. We do not hold a dated record of that confirmation, so treat it as an owner statement rather than an audited figure. That is a first-party
                        timeline for one scope, not a market benchmark or promise. We do not attach performance, ranking,
                        conversion, hosting or revenue figures to it. Numbers like those mean something only with the
                        measurement period, method and comparable baseline stated beside them, and one site&apos;s
                        results would not predict yours in any case. The scope of that project is written up on the{" "}
                        <Link href="/work/mycustompatches" className="text-cognac hover:underline">MyCustomPatches project page</Link>.
                    </BlogText>

                    <BlogHeader id="when-wordpress-fits">When WordPress is still the right choice</BlogHeader>
                    <BlogText>
                        Five conditions, and any one of them is usually enough to stay. The strongest is the third: an organization with reliable WordPress operations and someone who owns updates already has the thing most migrations are really bought to fix. Adding engineering responsibility without enough business value in return is not an upgrade.
                    </BlogText>
                    <BlogList
                        items={[
                            "The team relies on mature WordPress editing, theme or extension workflows.",
                            "Once repaired, the site you have is fast enough, secure enough, and connects to what it needs to.",
                            "The organization has reliable WordPress operations and update ownership.",
                            "A custom application would add engineering responsibility without enough business value.",
                            "The budget or deadline supports a focused improvement but not a controlled migration.",
                        ]}
                    />

                    <BlogHeader id="when-nextjs-fits">When we consider Next.js</BlogHeader>
                    <BlogText>
                        Consider, not recommend. These five conditions describe requirements that survived realistic repair, not preferences about tooling. The last one is the gate that decides most engagements: the client has to be able to own the target providers, the maintenance, the security and the release process afterwards.
                    </BlogText>
                    <BlogList
                        items={[
                            "The design system and rendered output need deliberate engineering control.",
                            "Integrations or application behavior exceed the current theme and extension model.",
                            "A separate structured content workflow fits the editors and governance.",
                            "Measured performance or reliability constraints remain after realistic repairs.",
                            "The client can own the target providers, maintenance, security and release process.",
                        ]}
                    />
                    <BlogText>
                        Requirements in the second line usually become{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">custom engineering</Link>{" "}
                        rather than another extension. For the broader replacement question, see{" "}
                        <Link href="/blog/wordpress-killer" className="text-cognac hover:underline">what actually replaces WordPress</Link>.
                    </BlogText>

                    <BlogHeader id="seo">What happens to SEO during migration?</BlogHeader>
                    <BlogText>
                        A platform move can create search risk when URLs, rendered content, status codes, internal links,
                        canonicals, metadata or crawl controls change. Google recommends careful planning, relevant
                        redirects, updated links and canonicals, sitemaps and monitoring. Keep valuable URLs stable
                        where practical and preserve a rollback path. No agency controls crawling, indexing, rankings,
                        traffic or recovery timing. We answer the question people usually ask next in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">will migrating hurt my SEO</Link>.
                    </BlogText>

                    <BlogHeader id="process">Our migration process</BlogHeader>
                    <BlogText>
                        Six steps, and the first two happen before anyone writes code. Inventory everything the current site contains, then define the target architecture, the content workflow, the ownership and the acceptance evidence. Building while the current site stays live is what makes the rollback in step five real rather than theoretical.
                    </BlogText>
                    <BlogList
                        items={[
                            "List every URL, template, piece of content, data set, form, account and integration.",
                            "Define target architecture, content workflow, ownership and acceptance evidence.",
                            "Build and validate the replacement while the current site remains available.",
                            "Test redirects, rendered output, analytics, consent, accessibility, security and performance.",
                            "Launch with monitoring, rollback conditions and named owners.",
                            "Complete handoff and contract-defined launch defect support.",
                        ]}
                    />
                    <BlogText>
                        That sequence is what our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration service</Link>{" "}
                        is built around, and the step-by-step technical version is in{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">how to migrate WordPress to Next.js</Link>.
                    </BlogText>

                    <BlogHeader id="offer">PandaCodeGen offer and terms</BlogHeader>
                    <BlogText>
                        We start with a free fit audit and prepare an SEO-safe migration plan when migration is
                        justified. PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to
                        $10,000 Scale. A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund
                        is tied to failure to deliver the signed scope. Starter includes 15 business days of launch
                        defect support; Growth and Scale include 30. The inputs behind a migration figure are broken
                        down in{" "}
                        <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">WordPress migration cost</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
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
                        <h2 className="mb-3 font-serif text-3xl">Decide from your requirements, not platform slogans</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare WordPress repair and Next.js migration against the same routes, workflows,
                            costs, risks and acceptance evidence.
                        </p>
                        <QuoteModalButton cta="why_nextjs_wordpress_fit_audit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
