import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Search, Video, Users, Code2 } from "lucide-react";
import Header from "@/components/layout/Header";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import OtherReviews from "@/components/work/OtherReviews";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

const canonicalUrl = "https://www.pandacodegen.com/work/ladies-4-jesus";
const title = "Ladies 4 Jesus Case Study: A Moderated Community an Owner Runs Alone";
const description =
    "A faith community site migrated to Next.js 16 and Sanity, where every visitor submission is moderated before it appears publicly and a non-technical owner runs all content without a developer. Build record: no before-and-after is claimed, because no baseline was captured.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    openGraph: {
        title: "Ladies 4 Jesus: A Moderated Community an Owner Runs Alone",
        description:
            "Nine content types, five moderated submission paths, video upload with automatic cleanup, and a CMS the owner runs without a developer. Build record.",
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/ladies-4-jesus")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ladies 4 Jesus: A Moderated Community an Owner Runs Alone",
        description: "Nine content types, five moderated submission paths, and a CMS the owner runs without a developer.",
    },
    alternates: { canonical: "/work/ladies-4-jesus" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "Why does this case study have no before-and-after performance numbers?",
        answer: "This was a migration, but nobody recorded the previous platform's load times or hosting costs before it was replaced, so there is no baseline to compare a launch reading against. Our MyCustomPatches record captured a before-and-after because those readings were taken on the old site while it was still running, though the performance figures from that project are themselves withdrawn pending reconciliation, which makes the same point twice over. Here they were not, and inventing a plausible 'before' after the fact is exactly the kind of number this firm spent a month removing from its own writing. The lesson generalises: capture load time, PageSpeed and the actual monthly bill before you migrate, because the day the old site is switched off is the day that evidence stops existing.",
    },
    {
        question: "How does the moderation workflow actually work?",
        answer: "Five of the nine content types are visitor-submitted: testimonies, questions, comments, contact messages, and content reports. Each carries a moderation status and is written to the CMS in a pending state by a server-side route, never directly from the browser. Nothing a visitor submits is rendered publicly until the owner sets it to approved in the Studio. The public queries filter on that status, so an unapproved item cannot appear even by accident.",
    },
    {
        question: "What happens to a video when a testimony is rejected or deleted?",
        answer: "It is removed from storage rather than left to accumulate. Video testimonies upload directly to Vercel Blob, and a Sanity webhook fires on rejection or deletion to delete the associated blob. A separate scheduled job sweeps up abandoned uploads, which are the files a visitor uploads before abandoning the form and which no webhook would ever fire for. Most builds implement the upload and skip both cleanup paths, and the storage bill is where that decision eventually shows up.",
    },
    {
        question: "Can the owner change content without a developer?",
        answer: "Yes, and that was the point of the architecture. The Sanity Studio is embedded in the application at /studio, and content edits reach the live site in about sixty seconds through incremental regeneration, with no deploy and no developer involved. Schema changes still ship with a normal git push, because those change the shape of the data rather than its contents.",
    },
    {
        question: "Why is the Studio route exempt from the Content-Security-Policy?",
        answer: "Because the Studio is an authenticated admin application that loads its own assets and opens its own connections, and a strict policy written for the public site blocks it. The exemption is scoped to that one route deliberately rather than loosened site-wide. The public site keeps a strict policy with image, media and frame sources limited to the CMS CDN, the blob store, and the two video hosts the site actually embeds.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/work/ladies-4-jesus"),
            datePublished: "2026-08-07T00:00:00-05:00",
            dateModified: "2026-08-10T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Next.js", "Sanity", "Content moderation", "Web application security", "Technical SEO"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Case study",
            inLanguage: "en-US",
            wordCount: 1450,
            timeRequired: "PT7M",
            about: [
                { "@type": "Thing", name: "Content moderation" },
                { "@type": "SoftwareApplication", name: "Sanity", sameAs: ["https://www.sanity.io"] },
                { "@type": "Thing", name: "Next.js", sameAs: ["https://nextjs.org"] },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", position: 3, name: "Ladies 4 Jesus", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
            datePublished: "2026-08-07T00:00:00-05:00",
            dateModified: "2026-08-10T00:00:00-05:00",
            inLanguage: "en-US",
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: pageFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

const architecture = [
    {
        icon: ShieldCheck,
        title: "Moderation before publication, enforced in the query",
        body: "Five of the nine content types are visitor-submitted. Each is written server-side in a pending state and filtered out of every public query until the owner approves it. Approval is a data change, not a deploy.",
    },
    {
        icon: Video,
        title: "Video with a cleanup path, not just an upload path",
        body: "Testimonies accept a direct video upload or a YouTube/Vimeo link. A webhook deletes the stored file when a testimony is rejected or removed, and a scheduled job sweeps abandoned uploads that no webhook would ever fire for.",
    },
    {
        icon: Users,
        title: "An owner who is not a developer",
        body: "Copy, imagery, gallery, devotionals, Q&A and site settings are all editable in an embedded Studio. Content reaches the live site in about a minute through incremental regeneration, with no code deploy in the loop.",
    },
    {
        icon: Search,
        title: "Search that reads the body, not just the title",
        body: "Stories, devotionals and Q&A share one search component that matches against title and body text, reports a result count, and scrolls to results on submit. Title-prefix search would have missed the phrase most visitors actually remember.",
    },
];

export default function Ladies4JesusCaseStudy() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Work", href: "/work" },
                            { label: "Ladies 4 Jesus", href: "/work/ladies-4-jesus" },
                        ]}
                    />

                    <RelationshipDisclosure slug="ladies-4-jesus" />

                    <header className="mb-10 mt-6 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">
                            Independent client · Build record
                        </p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Ladies 4 Jesus: <span className="italic text-cognac">a moderated community the owner runs alone</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A faith community site where women submit testimonies, questions and comments, and where
                            nothing a visitor writes appears in public until the owner has read and approved it. The
                            interesting engineering here is not speed. It is that a non-technical owner runs the entire
                            site — content, moderation, gallery and settings — without a developer in the loop.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Published August 7, 2026. Live at{" "}
                            <a
                                href="https://www.ladies4jesus.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                            >
                                www.ladies4jesus.com
                            </a>
                            .
                        </p>
                    </header>

                    <section className="mb-14">
                        <div className="rounded-3xl border border-cognac/30 bg-gradient-to-br from-cognac/5 to-transparent p-8 md:p-10">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="text-lg tracking-widest text-cognac" aria-hidden="true">★★★★★</span>
                                <span className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">
                                    Verified client review
                                </span>
                            </div>
                            <blockquote className="font-serif text-2xl leading-relaxed text-charcoal md:text-3xl">
                                &ldquo;I was hesitant to use them at first because the price seemed more than
                                reasonable and I had never heard of them but I am so glad I chose to work with
                                them.&rdquo;
                            </blockquote>
                            <p className="mt-5 leading-relaxed text-stone-700">
                                &ldquo;Hassan and his team were wonderful to work with. They created a phenomenal
                                website for me. I couldn&apos;t be happier. I highly recommend.&rdquo;
                            </p>
                            <p className="mt-6 text-sm text-stone-600">
                                — Etoy McDaniel.{" "}
                                <a
                                    href="https://www.trustpilot.com/review/pandacodegen.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                                >
                                    Unprompted review on Trustpilot
                                </a>
                                , August 2026.
                            </p>
                            <p className="mt-5 border-t border-stone-300 pt-5 text-sm leading-relaxed text-stone-600">
                                <strong>That is one client&apos;s experience and it is worth reading for the
                                hesitation rather than the praise.</strong> A price below what someone expects, from a
                                company they have not heard of, is a reasonable thing to be cautious about. It is a
                                fair reaction to a real signal, and the only useful answer to it is finished work
                                somebody can go and look at.
                            </p>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-4 text-3xl font-bold text-charcoal">What this record does and does not prove</h2>
                        <div className="rounded-2xl border border-stone-300 bg-stone-50 p-6" data-speakable="true">
                            <p className="leading-relaxed text-stone-700">
                                <strong>This is a build record, not a performance comparison.</strong> The project was a
                                migration, but the previous platform&apos;s load times and monthly costs were never
                                recorded before it was replaced — so there is no baseline, and no honest before-and-after
                                to publish. We are not quoting a launch score either, because a number with nothing to
                                compare it against is decoration rather than evidence.
                            </p>
                            <p className="mt-4 leading-relaxed text-stone-700">
                                <strong>That is worth saying out loud, because it is a mistake anyone can avoid.</strong>{" "}
                                Measure load time, PageSpeed and the actual monthly bill <em>before</em> you migrate. The
                                day the old site is switched off is the day that evidence stops existing, and no amount of
                                later work recovers it.
                            </p>
                            <p className="mt-4 leading-relaxed text-stone-700">
                                What is verifiable is the architecture, and you can check the search-facing parts of it
                                yourself on the live site: the pages are indexable, each carries a canonical URL and an
                                Open Graph image, and the root layout emits an <code className="rounded bg-white px-1.5 py-0.5 text-sm">Organization</code>{" "}
                                and <code className="rounded bg-white px-1.5 py-0.5 text-sm">WebSite</code> JSON-LD graph.
                                No traffic, ranking or revenue outcome is claimed on this page.
                            </p>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">The brief was &quot;I need to run this myself&quot;</h2>
                        <div data-speakable="true">
                            <p className="mb-4 text-lg leading-8 text-stone-700">
                                The deciding requirement was not design and it was not speed.{" "}
                                <strong>The owner needed to run the entire site without calling anyone.</strong> Approve a
                                testimony at nine in the evening. Swap the gallery photos after a Paint &amp; Praise
                                session. Fix a typo in the About story. Answer a question that came in overnight. None of
                                those can involve a developer, because a community site where publishing requires a
                                support ticket is a community site that goes quiet.
                            </p>
                            <p className="text-lg leading-8 text-stone-700">
                                That turned the admin experience into the actual deliverable, and it is why the CMS choice
                                mattered more than the framework choice. Sanity was picked because its editing interface
                                is genuinely usable by a non-technical person and because the Studio embeds directly in
                                the application — so there is one login, one place to go, and no second system to learn.
                            </p>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">What she can change without us</h2>
                        <p className="mb-6 text-lg leading-8 text-stone-700">
                            Effectively all of it. Nine content types are editable in the Studio, and edits reach the live
                            site in about a minute through incremental regeneration — no deploy, no developer, no waiting
                            on anyone&apos;s availability:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left text-sm">
                                <thead>
                                    <tr className="border-b border-stone-300">
                                        <th className="py-3 pr-4 font-bold text-charcoal">She controls</th>
                                        <th className="py-3 font-bold text-charcoal">Without touching code</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-700">
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Site identity</td><td className="py-3">Logo, hero, founder section, section imagery, social profiles</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Devotionals</td><td className="py-3">Title, body, scripture reference, category — published on her schedule</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Testimonies</td><td className="py-3">Read, approve, reject. Nothing appears publicly until she says so</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Q&amp;A</td><td className="py-3">Answer submitted questions and categorise them</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Comments &amp; reports</td><td className="py-3">Moderate replies and act on flagged content</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Paint &amp; Praise</td><td className="py-3">Page copy, feature cards and the photo gallery, swappable after every session</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Standing pages</td><td className="py-3">About, Contact and the salvation page, body copy and galleries</td></tr>
                                    <tr><td className="py-3 pr-4 font-semibold">Messages</td><td className="py-3">Contact submissions arrive in the same place as everything else</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-stone-700">
                            The reasoning behind the pairing, and what it costs, is set out in{" "}
                            <Link href="/blog/nextjs-sanity-stack" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">our guide to Next.js with Sanity</Link>.
                            The same stack under commerce load, with the founder-affiliation disclosed, is{" "}
                            <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Panda Patches</Link>.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-stone-700">
                            The only thing that still needs a developer is a <em>schema</em> change — adding a new kind of
                            content rather than new content. That boundary is deliberate and worth stating to any owner
                            evaluating a CMS: <strong>changing what the data says should never need an engineer; changing
                            what shape the data has, should.</strong>
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">Why moderation had to be structural</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            A community site that invites strangers to publish personal stories has a problem most
                            marketing sites never face: <strong>everything a visitor writes is a publication decision</strong>.
                            Testimonies, questions, comments, contact messages and reports all arrive from the public, and
                            all of them carry the owner&apos;s name once they are visible.
                        </p>
                        <p className="text-lg leading-8 text-stone-700">
                            So approval is enforced in the data layer rather than in the interface. Submissions are written
                            server-side in a pending state, and the public queries filter on that status — which means an
                            unapproved testimony cannot reach a visitor even through a bug in the page code. Moderation
                            you can accidentally bypass is not moderation.
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-8 text-3xl font-bold text-charcoal">Four decisions that carry the site</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {architecture.map(({ icon: Icon, title: t, body }) => (
                                <div key={t} className="rounded-2xl border border-stone-300 bg-white p-6">
                                    <Icon className="mb-4 h-6 w-6 text-cognac" aria-hidden="true" />
                                    <h3 className="mb-3 text-xl font-bold text-charcoal">{t}</h3>
                                    <p className="leading-7 text-stone-700">{body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">The cleanup nobody builds</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            Video testimonies are the part of this build worth copying. Accepting an upload is
                            straightforward. What most implementations skip is what happens to the file afterwards, and
                            there are two distinct leaks:
                        </p>
                        <ul className="mb-6 space-y-3">
                            {[
                                "A testimony is rejected or deleted, and its video stays in storage forever. Handled by a webhook that fires on that change and deletes the blob.",
                                "A visitor uploads a video and then abandons the form. No document is ever created, so no webhook can fire. Handled by a scheduled job that sweeps orphaned uploads.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 leading-7 text-stone-700">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg leading-8 text-stone-700">
                            The second one is the one that gets missed, because it never produces a visible bug. It
                            produces a storage bill that grows quietly and an owner who cannot explain it.
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">What was built</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="border-b border-stone-300">
                                        <th className="py-3 pr-4 font-bold text-charcoal">Layer</th>
                                        <th className="py-3 font-bold text-charcoal">Implementation</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-700">
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Framework</td><td className="py-3">Next.js 16 App Router with React Server Components, TypeScript</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">CMS</td><td className="py-3">Sanity, Studio embedded in the app at <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">/studio</code>, nine content types</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Submissions</td><td className="py-3">Five moderated paths, written server-side, filtered from public queries until approved</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Video</td><td className="py-3">Direct upload to blob storage or an embedded link, with webhook and scheduled cleanup</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Search</td><td className="py-3">Shared component matching title and body across three sections, with result count</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Security</td><td className="py-3">Strict CSP and security headers on the public site; the authenticated Studio route scoped out deliberately</td></tr>
                                    <tr className="border-b border-stone-200"><td className="py-3 pr-4 font-semibold">Search visibility</td><td className="py-3">Per-page metadata and canonicals, generated sitemap and robots, Organization and WebSite JSON-LD</td></tr>
                                    <tr><td className="py-3 pr-4 font-semibold">Tests</td><td className="py-3">Unit tests and end-to-end browser tests, both runnable in CI</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="mb-6 text-3xl font-bold text-charcoal">Frequently asked questions</h2>
                        <FAQAccordion faqs={pageFaqs} />
                    </section>

                    <section className="rounded-3xl bg-charcoal p-8 md:p-12">
                        <h2 className="mb-4 text-3xl font-bold text-white">Building something people submit to?</h2>
                        <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-300">
                            Moderation, storage lifecycle and admin usability are the three things that decide whether a
                            community site is still running in a year. We scope them before the design, not after launch.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-3 font-semibold text-white transition-colors hover:bg-cognac/90"
                            >
                                <Code2 className="h-5 w-5" aria-hidden="true" /> Start a conversation
                            </Link>
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 rounded-full border border-stone-500 px-7 py-3 font-semibold text-white transition-colors hover:border-white"
                            >
                                See the other records
                            </Link>
                        </div>
                    </section>
                
                    <OtherReviews excludeId="ladies-4-jesus" />

                    </article>
            </main>
            <Footer />
        </>
    );
}
