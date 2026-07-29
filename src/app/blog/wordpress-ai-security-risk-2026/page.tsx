import { ogImageForPath } from "@/lib/seo/og";
import { AlertTriangle, ArrowLeft, ArrowRight, Bot, KeyRound, ListChecks, ShieldCheck } from "lucide-react";
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

const postId = "wordpress-ai-security-risk-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress AI Plugin Security in 2026: AI Engine Advisory Guide";
const description =
    "A dated, evidence-led guide to AI Engine and WordPress MCP security advisories, affected configurations, patching, token rotation, permissions and incident response.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WordPress AI security",
        "AI Engine vulnerability",
        "WordPress MCP security",
        "CVE-2026-8719",
        "CVE-2025-11749",
        "WordPress AI plugin security",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-06-23",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-ai-security-risk-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "AI Engine plugin listing and changelog",
        url: "https://wordpress.org/plugins/ai-engine/",
    },
    {
        name: "Wordfence AI Engine vulnerability records",
        url: "https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/ai-engine?sort=desc&sortby=cvss_score",
    },
    {
        name: "CVE-2026-8719 advisory",
        url: "https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/ai-engine/ai-engine-349-authenticated-subscriber-privilege-escalation-via-missing-authorization-in-mcp-oauth-bearer-token",
    },
    {
        name: "CVE-2025-11749 technical analysis",
        url: "https://www.wordfence.com/blog/2025/11/100000-wordpress-sites-affected-by-privilege-escalation-vulnerability-in-ai-engine-wordpress-plugin/",
    },
    {
        name: "WordPress MCP Adapter guide",
        url: "https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/",
    },
    {
        name: "WordPress hardening guide",
        url: "https://developer.wordpress.org/advanced-administration/security/hardening/",
    },
    {
        name: "OWASP API Security Top 10",
        url: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-06-23",
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
            articleSection: "WordPress security",
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

export default function WordPressAiSecurityRiskPage() {
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
                            { label: "WordPress AI security", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WordPress security</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress AI Plugin Security <span className="italic text-cognac">Read the Advisory Precisely</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            AI and MCP features can hand out powerful control over your site. How much risk you are
                            carrying depends on which version you have installed, which of those features you actually
                            turned on, who can log in and what they are allowed to do, and whether anyone has been
                            caught using the hole.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Advisory and plugin-directory snapshot checked July 24, 2026. Security records can change after publication.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Jun 23, 2026" readTime="17 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">What site owners should do now</h2>
                        <BlogList
                            items={[
                                "Write down what you actually have: which version of AI Engine, which version of WordPress, which AI features are switched on, which MCP endpoints are reachable, who has an account, and which credentials are sitting somewhere they should not be.",
                                "Update AI Engine to a supported patched version, and test it somewhere that looks like production before you touch the live site.",
                                "Switch off the AI, MCP, remote URL, upload and REST capabilities your business does not use.",
                                "Rotate your tokens and read the logs if the advisory says a secret could have leaked.",
                                "Call it an incident if you find administrators you do not recognise, files that changed on their own, or actions nobody can account for.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="warning" label="This is not a compromise count">
                        The WordPress.org directory showed AI Engine version 3.6.2, last updated July 16, 2026, and
                        100,000-plus active installations when checked. That installation figure is not the number of
                        vulnerable, exposed or compromised sites.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Bot, title: "Ability", body: "What an AI client or plugin tool is allowed to do." },
                            { icon: KeyRound, title: "Identity", body: "How the caller authenticates and which role it receives." },
                            { icon: ListChecks, title: "Boundary", body: "Endpoint, configuration and version conditions in the advisory." },
                            { icon: ShieldCheck, title: "Response", body: "Patch, rotate, investigate and reduce unnecessary access." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="what-changed">What AI and MCP change in WordPress</BlogHeader>
                    <BlogText>
                        An AI chatbot that only returns generated text has a different risk profile from an agent that
                        can edit posts, manage media, inspect orders or administer users. WordPress&apos;s official MCP
                        Adapter documentation describes exposing registered abilities as MCP tools and supports local
                        and remote connections. The guide also calls out authentication and security considerations.
                        Each exposed ability should have explicit authorization, input validation, logging and a
                        business need.
                    </BlogText>

                    <BlogHeader id="advisories">What the dated AI Engine advisories actually say</BlogHeader>
                    <BlogText>
                        The following entries are a July 24, 2026 snapshot of public Wordfence records. They are examples,
                        not a complete replacement for a current vulnerability scan. Read the authoritative record
                        before acting because affected versions, conditions and remediation can differ.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Advisory</th><th className="p-4">Affected version</th><th className="p-4">Prerequisite in the record</th><th className="p-4">Published remediation</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-bold">CVE-2025-11749</td>
                                    <td className="p-4">3.1.3 and earlier</td>
                                    <td className="p-4">No-Auth URL enabled, which Wordfence reported was disabled by default</td>
                                    <td className="p-4">Update to 3.1.4 or later and rotate an exposed bearer token</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">CVE-2026-8719</td>
                                    <td className="p-4">3.4.9</td>
                                    <td className="p-4">Authenticated Subscriber or higher with a valid OAuth token</td>
                                    <td className="p-4">Update to 3.5.0 or a newer patched version</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">CVE-2026-27407</td>
                                    <td className="p-4">3.4.9 and earlier</td>
                                    <td className="p-4">Authenticated Editor or higher according to the database entry</td>
                                    <td className="p-4">Use the current patched release named by the live advisory</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">CVE-2026-23802</td>
                                    <td className="p-4">3.3.2 and earlier</td>
                                    <td className="p-4">Authenticated Editor or higher according to the database entry</td>
                                    <td className="p-4">Use the current patched release named by the live advisory</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">CVE-2026-0746</td>
                                    <td className="p-4">3.3.2 and earlier</td>
                                    <td className="p-4">Authenticated Subscriber or higher according to the database entry</td>
                                    <td className="p-4">Use the current patched release named by the live advisory</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="headline">Why the old 100,000-sites headline was misleading</BlogHeader>
                    <BlogText>
                        A vulnerability article may use the plugin&apos;s active-installation count to describe potential
                        reach. For CVE-2025-11749, Wordfence said the critical path depended on the No-Auth URL setting
                        being enabled and that the setting was disabled by default. Therefore, the directory count
                        cannot be reported as the number exposed or hacked. Confirm version, configuration, reachability
                        and evidence for each site.
                    </BlogText>

                    <BlogHeader id="cve-2025-11749">CVE-2025-11749 response</BlogHeader>
                    <BlogText>
                        Wordfence reported that affected versions could expose a bearer token in the REST API index when
                        No-Auth URL was enabled. It reported version 3.1.4 as patched and said the patch prevented further
                        exposure. If a token may already have been listed, updating alone does not make the old secret
                        unknown. Rotate it, invalidate related sessions where supported and review access and change
                        history for the exposure period.
                    </BlogText>

                    <BlogHeader id="cve-2026-8719">CVE-2026-8719 response</BlogHeader>
                    <BlogText>
                        The Wordfence record describes missing capability enforcement in AI Engine 3.4.9&apos;s MCP OAuth
                        bearer-token authorization path. It says an authenticated Subscriber or higher with a valid
                        OAuth token could invoke administrator-level MCP tools, and names 3.5.0 as the patched version.
                        Sites on the affected release should move to a newer supported patched release and review OAuth
                        clients, tokens, roles and privileged actions.
                    </BlogText>

                    <BlogHeader id="version">How to check version and configuration</BlogHeader>
                    <BlogList
                        items={[
                            "Record the plugin version from the WordPress plugin screen and deployment inventory.",
                            "Compare it with the live vendor changelog and at least one maintained vulnerability database.",
                            "Inventory AI Engine modules, MCP servers, REST routes, remote URL features and upload capabilities.",
                            "List WordPress users, application passwords, OAuth clients, bearer tokens and API keys with their owners.",
                            "Confirm whether the endpoint is public, authenticated, network-restricted or disabled.",
                            "Capture evidence before changing a suspected compromised system, following the incident plan.",
                        ]}
                    />
                    <BlogText>
                        The same inventory is useful outside security work. Our notes on{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">how plugins affect front-end performance</Link>{" "}
                        and on{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">diagnosing a slow WordPress site</Link>{" "}
                        use the same starting list of installed software, versions and owners.
                    </BlogText>

                    <BlogHeader id="permissions">Treat agent permissions as privileged access</BlogHeader>
                    <BlogText>
                        Map each tool to the minimum WordPress capability and business task. Separate read from write,
                        content management from user administration and development from production. Avoid shared
                        administrator identities. Use short-lived or revocable credentials where the integration
                        supports them, require human approval for high-impact actions and log the caller, tool,
                        parameters, result and time without logging secrets.
                    </BlogText>

                    <BlogHeader id="secrets">Protect tokens and provider keys</BlogHeader>
                    <BlogList
                        items={[
                            "Do not place secrets in public URLs, source control, analytics, chat transcripts or support screenshots.",
                            "Store secrets in an appropriate server-side secret mechanism and limit who can read them.",
                            "Use separate credentials for development, staging and production.",
                            "Set provider budgets and usage alerts where available.",
                            "Rotate a credential after confirmed or plausible exposure, staff departure or environment transfer.",
                            "Document revocation so the team can act without waiting for the original implementer.",
                        ]}
                    />

                    <BlogHeader id="inputs">AI does not remove ordinary API security work</BlogHeader>
                    <BlogText>
                        Validate URLs, files, content types, sizes and destinations. Protect outbound fetches against
                        server-side request forgery. Enforce authorization at the server for every action. Rate-limit
                        expensive or abuse-prone operations, constrain file handling, encode output for its context and
                        design safe failure behavior. Model instructions are not an authorization boundary.
                    </BlogText>

                    <BlogHeader id="privacy">Content, privacy and model providers</BlogHeader>
                    <BlogText>
                        Document which prompts, documents, user messages, customer records and metadata leave the site,
                        which provider receives them and how long each party retains them. Do not send regulated,
                        confidential or personal data merely because a plugin makes the connection easy. Apply consent,
                        minimization, access, deletion and vendor-review requirements appropriate to the business and
                        jurisdictions.
                    </BlogText>

                    <BlogHeader id="monitor">Logging and detection</BlogHeader>
                    <BlogList
                        items={[
                            "New or changed administrator accounts, roles and application passwords",
                            "Plugin, theme, file and configuration changes",
                            "MCP, REST, OAuth and AI-tool authentication and authorization events",
                            "Unexpected outbound requests, file uploads, scheduled tasks and database changes",
                            "Model-provider usage, cost, rate spikes and unfamiliar API clients",
                            "Disabled logging, security tooling or backup jobs",
                        ]}
                    />
                    <BlogText>
                        Logging cannot prove safety by itself. Protect logs from tampering, synchronize time, define
                        retention and test that alerts reach a person who can respond.
                    </BlogText>

                    <BlogHeader id="incident">If you suspect exploitation</BlogHeader>
                    <BlogList
                        items={[
                            "Follow the organization&apos;s incident plan and involve a qualified responder for material risk.",
                            "Preserve relevant evidence before cleanup where legal and operational requirements permit.",
                            "Contain exposed endpoints and credentials without destroying the information needed to investigate.",
                            "Review users, sessions, tokens, files, plugins, themes, database changes and outbound activity.",
                            "Restore only from a known-good source and close the initial access path before returning to service.",
                            "Assess notification, contractual, insurer and regulatory duties with appropriate advisers.",
                        ]}
                    />
                    <InsightBox variant="danger" label="Do not treat an update as a forensic conclusion">
                        Updating closes a known software issue. It does not prove that an earlier vulnerable site was or
                        was not exploited, and it may not revoke a credential that was already disclosed.
                    </InsightBox>

                    <BlogHeader id="architecture">Does this mean WordPress is unsafe?</BlogHeader>
                    <BlogText>
                        No single advisory proves that every WordPress site is unsafe or that custom software is
                        automatically secure. Risk follows capabilities, exposure, maintenance, access control and
                        operations. A custom application still uses frameworks, packages and service providers. Compare
                        concrete requirements and the team&apos;s ability to maintain each option. We set the two
                        architectures side by side in{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress compared with Next.js</Link>{" "}
                        and examine the wider replacement question in{" "}
                        <Link href="/blog/wordpress-killer" className="text-cognac hover:underline">what actually replaces WordPress</Link>. Where
                        repair is the better answer, our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress work</Link>{" "}
                        covers that path.
                    </BlogText>

                    <BlogHeader id="migrate">When migration belongs in the discussion</BlogHeader>
                    <BlogText>
                        Consider repair first when the required features fit WordPress and the team can patch, restrict
                        and monitor them. Consider a migration when the plugin and operational model repeatedly conflicts
                        with required security boundaries, data handling, performance or ownership. Migration introduces
                        its own data, SEO, access and cutover risks, so it needs a signed scope and acceptance plan. It is
                        not an automatic response to one patched CVE. If the conversation gets that far, our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration service</Link>{" "}
                        describes the scope, the inputs behind a figure are in{" "}
                        <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">WordPress migration cost</Link>, the
                        technical sequence is in{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">how to migrate WordPress to Next.js</Link>, and
                        the search risk is addressed in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">will migrating hurt my SEO</Link>.
                    </BlogText>

                    <BlogHeader id="checklist">WordPress AI security review checklist</BlogHeader>
                    <BlogList
                        items={[
                            "Current asset, version, feature and endpoint inventory",
                            "Live advisory review with applicability documented",
                            "Least-privilege users, agents, abilities and provider credentials",
                            "Secret storage, rotation and revocation procedures",
                            "Input, URL, upload, output, rate and cost controls",
                            "Data-flow, consent, retention and provider review",
                            "Protected logs, alerts, backups and tested recovery",
                            "Staging update process and production change approval",
                            "Incident ownership and external notification contacts",
                        ]}
                    />
                    <BlogText>
                        Access and control belong in the same review, which we cover in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>. If
                        the checklist points toward engineering work, our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>{" "}
                        sets out the tiers and you can{" "}
                        <Link href="/contact" className="text-cognac hover:underline">talk to us about a review</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <AlertTriangle className="mb-4 h-7 w-7 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Need the architecture reviewed before a migration?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We can inventory the current WordPress features, integrations and ownership boundaries, then
                            scope repair or migration without claiming that a framework eliminates security risk.
                        </p>
                        <QuoteModalButton cta="wordpress_ai_security_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <BlogText>
                        For how we weigh security reporting of this kind before acting on it, see{" "}
                        <Link href="/blog/wordpress-april-2026-evidence" className="text-cognac hover:underline font-medium">what the April 2026 WordPress record actually supports</Link>,
                        which separates vendor advisories from research and from public discussion.
                    </BlogText>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
