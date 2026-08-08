import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { AlertTriangle, ArrowLeft, ArrowRight, CalendarDays, MessageSquareText, ShieldAlert } from "lucide-react";
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

const postId = "wordpress-april-2026-evidence";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress in April 2026: Three Security and Product Records";
const description =
    "A source-led review of the April 2026 Smart Slider Pro and EssentialPlugin supply-chain incidents plus a WooCommerce core team lead's public feedback thread.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WordPress April 2026",
        "Smart Slider 3 Pro compromise",
        "EssentialPlugin compromise",
        "WooCommerce plugin fatigue",
        "WordPress supply chain security",
        "Smart Slider 3 Pro 3.5.1.35",
        "WordPress plugin backdoor 2026",
        "should I migrate off WordPress 2026",
        "WordPress plugin update risk",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-23",
        modifiedTime: "2026-08-08",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-april-2026-evidence")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Patchstack Smart Slider 3 Pro analysis",
        url: "https://patchstack.com/articles/critical-supply-chain-compromise-in-smart-slider-3-pro-full-malware-analysis/",
    },
    {
        name: "Nextend Smart Slider 3 Pro advisory",
        url: "https://smartslider.helpscoutdocs.com/article/2144-wordpress-security-advisory-smart-slider-3-pro-3-5-1-35-compromise",
    },
    {
        name: "Patchstack EssentialPlugin analysis",
        url: "https://patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/",
    },
    {
        name: "WooCommerce core team lead feedback thread",
        url: "https://www.reddit.com/r/woocommerce/comments/1sqom3t/i_am_a_woocommerce_core_team_lead_advocating_for/",
    },
    {
        name: "WordPress 7.0 release record",
        url: "https://wordpress.org/news/2026/05/armstrong/",
    },
    {
        name: "WordPress hardening guide",
        url: "https://developer.wordpress.org/advanced-administration/security/hardening/",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/wordpress-april-2026-evidence"),
            description,
            datePublished: "2026-04-23",
            dateModified: "2026-08-08",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["WordPress", "Website migration", "Technical SEO", "Web performance", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "WordPress evidence",
            inLanguage: "en-US",
            wordCount: 2590,
            timeRequired: "PT13M",
            about: [
                { "@type": "Thing", name: "WordPress", sameAs: ["https://wordpress.org/", "https://en.wikipedia.org/wiki/WordPress"] },
                { "@type": "Thing", name: "WooCommerce", sameAs: ["https://woocommerce.com/", "https://en.wikipedia.org/wiki/WooCommerce"] },
                { "@type": "Thing", name: "Supply chain attack", sameAs: ["https://en.wikipedia.org/wiki/Supply_chain_attack"] },
                { "@type": "Thing", name: "Computer security", sameAs: ["https://en.wikipedia.org/wiki/Computer_security"] },
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
                { "@type": "ListItem", position: 3, name: "WordPress April 2026", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-04-23",
            dateModified: "2026-08-08",
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

export default function WordPressAprilEvidencePage() {
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
                            { label: "WordPress April 2026", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Dated evidence review</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress in April 2026: <span className="italic text-cognac">Three Records, Carefully Read</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Two supply-chain incidents and one WooCommerce feedback thread are useful operating evidence.
                            They do not prove that every WordPress site is compromised or should migrate.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Patchstack&apos;s Smart Slider analysis reverified August 1, 2026. Remaining sources and
                            post-publication context last checked July 24, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 23, 2026" readTime="7 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">What the record shows</h2>
                        <BlogList
                            items={[
                                "April 7: Smart Slider 3 Pro version 3.5.1.35 was distributed from compromised update infrastructure for an approximately six-hour window, according to Patchstack's analysis.",
                                "April 5 to 7: malicious code in plugins from EssentialPlugin was activated, and the WordPress Plugin Review team responded, according to Patchstack's vendor-wide analysis.",
                                "April 20: a person identifying themselves as a WooCommerce core team lead asked for actionable public feedback and summarized recurring themes they had observed.",
                                "WordPress 7.0 subsequently shipped on May 20, 2026, so the April snapshot should not be presented as the current release state.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="info" label="Every claim here opens its own record">
                        This page reports on named companies, so each statement about one links to the specific record
                        it comes from, at the point it is made. Nothing here is our finding. Where we say Patchstack
                        reported something, the link goes to that analysis; where a vendor has published its own
                        advisory, the vendor&apos;s wording governs. If a link and this page ever disagree, the source is
                        right and we want to know about it.
                    </InsightBox>

                    <InsightBox variant="info" label="How to weigh these three sources">
                        These records do not carry equal weight, so read each one for what it can actually support.
                        Patchstack is security research. A vendor advisory is a first-party statement about that
                        vendor&apos;s own product. A Reddit post is a public statement and a discussion, not an official
                        WooCommerce roadmap and not a representative merchant study. Where a date, a version or a scope
                        matters to your decision, take it from the source itself rather than from a summary.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: ShieldAlert, title: "Smart Slider", body: "A compromised commercial update channel and a specific affected version." },
                            { icon: AlertTriangle, title: "EssentialPlugin", body: "A vendor acquisition followed by malicious code across multiple plugins." },
                            { icon: MessageSquareText, title: "Woo feedback", body: "Observed themes and an invitation to make public feedback actionable." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="event-one">Record one: Smart Slider 3 Pro</BlogHeader>
                    <BlogText>
                        <a href="https://patchstack.com/articles/critical-supply-chain-compromise-in-smart-slider-3-pro-full-malware-analysis/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Patchstack&apos;s published analysis</a> reports that an unauthorized party
                        accessed Nextend&apos;s update infrastructure and
                        distributed Smart Slider 3 Pro version 3.5.1.35 on April 7, 2026. That analysis describes a
                        fully attacker-authored remote-access toolkit in that release and says the affected build was
                        available for approximately six hours. It identifies 3.5.1.36 as the clean release.
                    </BlogText>
                    <BlogText>
                        The scope matters. Patchstack says the commercial Pro release was affected and the free
                        WordPress.org edition was not. It also says installing the malicious build, even briefly,
                        requires compromise response rather than treating an ordinary update as sufficient cleanup.
                        Site owners should follow{" "}
                        <a href="https://smartslider.helpscoutdocs.com/article/2144-wordpress-security-advisory-smart-slider-3-pro-3-5-1-35-compromise" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Nextend&apos;s own security advisory</a>{" "}
                        , because the vendor is the authority on what it shipped and what cleanup it requires, and
                        use qualified incident response for material systems.
                    </BlogText>

                    <BlogHeader id="smart-slider-response">What a Smart Slider owner should verify</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Check whether 3.5.1.35 was ever installed, and check that first. The compromised build was available for roughly six hours, so most sites never received it, and the question is a version-history question rather than a judgement about the plugin. Five checks follow, and Nextend&apos;s own advisory is the authority on what cleanup its release requires.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Whether version 3.5.1.35 was ever installed, not merely which version is active today",
                            "The vendor's latest cleanup and indicators-of-compromise guidance",
                            "Administrator users, files, scheduled tasks, database changes and outbound activity",
                            "Backup provenance and whether restoration would reintroduce the affected build",
                            "Notification, insurer, contractual and regulatory duties appropriate to the incident",
                        ]}
                    />

                    <BlogHeader id="event-two">Record two: EssentialPlugin</BlogHeader>
                    <BlogText>
                        <a href="https://patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Patchstack&apos;s analysis of the EssentialPlugin portfolio</a> reports that the
                        vendor changed hands in 2025 and that the new owner introduced
                        malicious code across more than 20 plugins. That analysis says the backdoor was activated on
                        April 5, 2026. On April 7, the WordPress Plugin Review team confirmed the attack, closed the
                        affected directory listings and pushed a forced security update intended to remove the backdoor
                        and warn administrators.
                    </BlogText>
                    <BlogText>
                        This record highlights ownership and distribution risk in a particular vendor portfolio. It
                        does not prove that acquisition makes every plugin malicious or that all WordPress update
                        channels lack review. A useful control is to monitor ownership and maintainer changes, reduce
                        unused dependencies, verify release provenance and keep an incident plan for trusted updates
                        that later prove hostile.
                    </BlogText>

                    <BlogHeader id="supply-chain">What the two incidents establish</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Both incidents arrived through an update channel rather than through anything a site owner did wrong, which is the part worth generalising. A maintained plugin on a current version was the attack path in each case. What that supports, and what it does not, are set out below and immediately afterwards.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "A trusted software update can be an initial-access path.",
                            "Current version alone may not show whether a malicious release was installed earlier.",
                            "A web application firewall is defense in depth, not proof that installed malware is absent.",
                            "Dependency inventory, update records, protected backups and response ownership are operational requirements.",
                            "Risk must be evaluated by affected product, version, distribution path and site evidence.",
                        ]}
                    />
                    <InsightBox variant="info" label="What they do not establish">
                        These incidents do not establish a platform-wide compromise rate, a universal plugin count,
                        a custom-software security guarantee or a requirement to migrate. Next.js and other custom stacks
                        also depend on packages, build systems, hosting and service providers.
                    </InsightBox>
                    <BlogText>
                        It is worth being precise about what does differ, because &ldquo;custom is more secure&rdquo; is
                        the wrong summary and the real distinction is more useful. Both incidents above share a shape: a
                        third party controlled an update channel that could place code on a live site without anyone at
                        that business choosing to accept it. On a stack where dependencies are pinned in a lockfile, new
                        code arrives only when someone runs a deploy, which means there is a moment where a human could
                        look. That is a different distribution of control, not an absence of risk.
                    </BlogText>
                    <BlogText>
                        The risk does not go to zero, and pretending otherwise would be the same mistake in the opposite
                        direction. Package registries have had their own compromises, a build pipeline is itself a
                        dependency, and a pinned version nobody ever reviews is just an old vulnerability with better
                        paperwork. The honest version is that one model puts the update decision with the vendor by
                        default and the other puts it with you, and whichever you are on, the controls that matter are
                        the same: know what you depend on, know who maintains it, and be able to tell what changed.
                    </BlogText>
                    <BlogText>
                        A separate 2026 advisory covering an AI plugin is written up in{" "}
                        <Link href="/blog/wordpress-ai-security-risk-2026" className="text-cognac hover:underline">our review of WordPress AI plugin security</Link>,
                        and the dependency-count question is examined with measurements in{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">the plugin audit guide</Link>.
                    </BlogText>

                    <BlogHeader id="already-updated">&ldquo;I already updated the plugin&rdquo; is not the same as &ldquo;I am clean&rdquo;</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            This is the part that gets missed, and it follows directly from the shape above. When a
                            malicious release is discovered, the fix that arrives is a corrected version of the
                            plugin. <strong>That repairs the code. It does not undo what the code did while it was
                            running.</strong> If a site received a compromised release and it executed, anything it
                            established — an added administrator, a file dropped outside the plugin directory, a
                            scheduled task, a modified core file — survives the update, because none of it lives in
                            the plugin that just got replaced.
                        </BlogText>
                        <BlogText>
                            So the update is necessary and it is not evidence. The question a site owner actually
                            needs answered is whether a malicious version ever ran on their install, and that is
                            answered from the site, not from the version number now showing in the dashboard.
                        </BlogText>
                        <BlogList
                            items={[
                                "Compare the update history against the dates in the disclosure. If the site pulled that plugin during the affected window, treat it as exposed until checked rather than patched.",
                                "List every administrator account and when it was created. An account you cannot attribute to a person is the single clearest indicator, and it is the first thing these attacks add.",
                                "Look for files with recent modification times outside the plugin's own directory, particularly in uploads, and for core files whose checksums no longer match the release.",
                                "Check scheduled tasks and any code that re-adds users or re-writes files, since persistence is usually what makes a cleanup fail the second time.",
                                "Review logs for the window rather than for today. The interesting activity is around the compromise, not around the moment you started looking.",
                            ]}
                        />
                        <InsightBox variant="warning">
                            If any of those turn up something, the honest advice is that <strong>this stops being a
                            plugin problem and becomes an incident.</strong> Confirmed persistence is not reliably
                            fixed by deleting what you found, because you are working from the indicators you happened
                            to notice. Restoring from a backup taken before the affected window, or bringing in someone
                            who does remediation for a living, is the appropriate response. We do not offer incident
                            response, and a rebuild is not a substitute for it — <strong>migrating a compromised site
                            can carry the compromise across.</strong>
                        </InsightBox>
                    </div>

                    <BlogHeader id="event-three">Record three: WooCommerce public feedback</BlogHeader>
                    <BlogText>
                        On April 20, {" "}
                        <a href="https://www.reddit.com/r/woocommerce/comments/1sqom3t/i_am_a_woocommerce_core_team_lead_advocating_for/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">a Reddit poster identifying themselves as a WooCommerce core team lead</a>{" "}
                        said they were seeking clearer public feedback and were not writing in an official capacity. The post
                        summarized themes the author had observed: plugin fatigue, fear that updates may break a store
                        and performance complaints. It then asked users to turn those broad themes into specific,
                        actionable examples.
                    </BlogText>
                    <BlogText>
                        Read that as a request for detail, not as an admission. The author
                        did not state that all stores use a certain number of plugins, that WooCommerce cannot perform
                        or that migration is the official recommendation. The discussion contains individual opinions
                        and experiences. Those comments can generate questions, but they are not a representative
                        performance or conversion study.
                    </BlogText>

                    <BlogHeader id="questions">Questions the WooCommerce thread suggests</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            A single public post is a prompt for questions, not evidence about your store. These are the questions worth putting to your own installation before treating one person&apos;s account of a platform as a finding about it.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Which required capabilities are absent from core and which extensions provide them?",
                            "Which update caused a regression, under which configuration, and how was it reproduced?",
                            "Is the slow journey storefront, cart, checkout, account, admin or scheduled processing?",
                            "Which extension, query, remote request or resource limit contributes measured time?",
                            "Would a supported configuration, better extension or in-platform repair solve the issue?",
                            "What additional operating cost and system boundaries would headless or migration add?",
                        ]}
                    />
                    <BlogText>
                        Each of those questions has a longer answer elsewhere on this site:{" "}
                        <Link href="/blog/woocommerce-too-slow" className="text-cognac hover:underline">how to diagnose a slow WooCommerce store</Link>,{" "}
                        <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline">what headless commerce actually involves</Link>, and our{" "}
                        <Link href="/services/woocommerce" className="text-cognac hover:underline">WooCommerce storefront service</Link>{" "}
                        page for how repair and replatforming are scoped side by side.
                    </BlogText>

                    <BlogHeader id="release-context">Post-April release context</BlogHeader>
                    <BlogText>
                        WordPress 7.0 shipped on <a href="https://wordpress.org/news/2026/05/armstrong/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">May 20, 2026</a>. That matters because an article about April product
                        concerns should not imply that the platform stopped shipping. Current platform decisions should
                        use the live WordPress release record, current plugin advisories and the actual site inventory,
                        not a frozen crisis narrative.
                    </BlogText>

                    <BlogHeader id="decision">How to use this evidence in a platform decision</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Three records do not decide a platform. What they can do is tell you which questions to price, and the table below pairs each with the decision it should actually inform. Read the right-hand column first: it is where a record stops being news and becomes a budget line.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[960px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Question</th><th className="p-4">Evidence to collect</th><th className="p-4">Possible response</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Was this site affected?</td><td className="p-4">Version and update history, configuration, logs and indicators</td><td className="p-4">Patch, investigate, contain and recover</td></tr>
                                <tr><td className="p-4 font-bold">Is dependency risk controlled?</td><td className="p-4">Inventory, owners, provenance, privileges and update process</td><td className="p-4">Remove, replace, restrict or monitor</td></tr>
                                <tr><td className="p-4 font-bold">Does WooCommerce fit?</td><td className="p-4">Capability matrix, performance traces and operating team</td><td className="p-4">Optimize, use supported extensions, go headless or replace</td></tr>
                                <tr><td className="p-4 font-bold">Would migration reduce risk?</td><td className="p-4">Target dependencies, data, access, lifecycle and incident model</td><td className="p-4">Compare both architectures under the same controls</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="stay">When staying on WordPress is reasonable</BlogHeader>
                    <BlogText>
                        Stay and improve the current platform when its editorial and commerce capabilities fit, critical
                        extensions are actively maintained, measured performance is repairable and the organization can
                        own updates, access, monitoring and recovery. A niche extension may deliver mature capability
                        that would be expensive and risky to reproduce. Price that replacement from an actual
                        capability inventory rather than using an invented universal rebuild range.
                    </BlogText>
                    <BlogText>
                        The question is not whether WordPress has problems. It is when the risk of staying exceeds the
                        cost and disruption of moving, for one specific site. Three situations regularly answer that
                        question in favor of staying.
                    </BlogText>
                    <BlogList
                        items={[
                            "Learning platforms built on a mature LMS extension, where drip content, grading, certificates and standards support represent years of accumulated feature depth.",
                            "Membership and subscription systems with tiered access, renewals and campaign logic already wired into an established extension.",
                            "Vertical integrations where the WordPress extension is the only supported connector to a required external system, such as an industry listing feed or an association directory.",
                        ]}
                    />
                    <BlogText>
                        In those cases the stronger 2026 move is usually to harden the existing install rather than
                        rebuild it: subscribe to vulnerability monitoring covering the extensions actually installed,
                        run an actively maintained firewall, stage and test updates on a fixed schedule instead of
                        applying them blind, restrict who can install a new extension and require a review before they
                        do, and confirm that backups restore cleanly. Those controls address the two April incidents
                        directly. Anyone giving honest advice should be willing to say when hardening is the right
                        answer and migration is not.
                    </BlogText>
                    <BlogText>
                        If the repairable problem is speed, work through{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">the evidence-led methods for fixing a slow WordPress site</Link>{" "}
                        before pricing anything larger.
                    </BlogText>

                    <BlogHeader id="migrate">When migration deserves discovery</BlogHeader>
                    <BlogText>
                        Consider migration when unmaintained or overlapping dependencies repeatedly block required
                        security, performance, data or operating controls, and a target architecture can meet the
                        capability matrix with acceptable lifecycle ownership. Include URL, content, data, integration,
                        accessibility, analytics, security, cutover and support acceptance. Migration does not guarantee
                        rankings, revenue or elimination of supply-chain risk.
                    </BlogText>
                    <BlogText>
                        Our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration service</Link>{" "}
                        page describes how that discovery is run, the{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">WordPress to Next.js walkthrough</Link>{" "}
                        covers the technical sequence, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">what a migration does to search visibility</Link>{" "}
                        sets out the URL and redirect controls that belong in acceptance.
                    </BlogText>

                    <BlogHeader id="review">A quarterly evidence review</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Security evidence goes stale in a way cost evidence does not, so this belongs on a calendar rather than in a memory. Re-run these checks each quarter and record the date you ran them, because the value of the record is the date attached to it.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Record WordPress, WooCommerce, theme, plugin and runtime versions.",
                            "Review current vendor and vulnerability advisories for applicability.",
                            "Inspect maintainer or ownership changes and remove unused components.",
                            "Reproduce slow or broken journeys with evidence rather than plugin-count assumptions.",
                            "Test backups and incident responsibilities.",
                            "Revisit repair, headless and migration options only when material requirements change.",
                        ]}
                    />
                    <BlogText>
                        For the money side of the same review, our{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline">three-year comparison of WordPress and custom code</Link>{" "}
                        and the{" "}
                        <Link href="/blog/wordpress-killer" className="text-cognac hover:underline">invoice-led total cost guide</Link>{" "}
                        show how to build the numbers from real bills. To apply any of this to one specific site, use the{" "}
                        <Link href="/contact" className="text-cognac hover:underline">contact form</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <BlogHeader id="sources">Primary sources</BlogHeader>
                    <BlogText>
                        Every claim on this page about a named plugin, vendor or incident comes from one of these
                        records. Open them rather than taking this page&apos;s word for any of it, and note that the
                        vendors&apos; own advisories are the authority on what they shipped and when.
                    </BlogText>
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
                        <CalendarDays className="mb-4 h-7 w-7 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Turn the incident headlines into a site-specific plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We can inventory dependencies and requirements, then compare repair and migration without
                            treating three April records as a universal verdict.
                        </p>
                        <QuoteModalButton cta="wordpress_april_evidence_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
