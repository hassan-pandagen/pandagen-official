import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ogImageForPath } from "@/lib/seo/og";
import { blogPosts } from "@/data/blog";
import { hubs, hubBySlug, hubCrumbs, hubPostIds, moneyHref, type Hub } from "@/data/hubs";
import { OFFER_LINE } from "@/data/company-facts";
import { clusters } from "@/data/topical-map";

// Generated from src/data/hubs.ts. There is no hand-authored hub page: adding a
// cluster to the taxonomy adds a route here, and removing one removes it. The
// only per-hub writing lives in the data file.

export const dynamic = "force-static";

export function generateStaticParams() {
    return hubs.map((hub) => ({ topic: hub.slug }));
}

const BASE = "https://www.pandacodegen.com";

type Params = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { topic } = await params;
    const hub = hubBySlug(topic);
    if (!hub) return {};

    const url = `${BASE}/blog/topic/${hub.slug}`;
    return {
        title: { absolute: `${hub.title} | PandaCodeGen` },
        description: hub.description,
        alternates: { canonical: `/blog/topic/${hub.slug}` },
        robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        openGraph: {
            title: hub.title,
            description: hub.description,
            url,
            type: "website",
            images: [ogImageForPath(`/blog/topic/${hub.slug}`)],
        },
        twitter: { card: "summary_large_image", title: hub.title, description: hub.description },
    };
}

/** Money-page label for prose and links, resolved from the site's own routes. */
const MONEY_LABEL: Record<string, string> = {
    "/services/wordpress-migration": "WordPress migration service",
    "/services/ecommerce": "commerce engineering service",
    "/services/webflow": "Webflow migration service",
    "/services/squarespace": "Squarespace migration service",
    "/services/custom-engineering": "custom engineering service",
    "/partners": "agency partnership terms",
    "/pricing": "pricing",
    "/free-audit": "free site audit",
    "/editorial-policy": "editorial policy",
};

/**
 * Renders one authored paragraph, replacing the [[money]] marker with a link to
 * the cluster's money page. Split on the marker rather than dangerouslySetInnerHTML
 * so the prose stays plain text in the data file and cannot carry markup.
 */
function IntroParagraph({ text, href, anchor }: { text: string; href: string; anchor: string }) {
    if (!text.includes("[[money]]")) {
        return <p className="mb-5 leading-relaxed text-stone-700">{text}</p>;
    }
    const [before, after] = text.split("[[money]]");
    return (
        <p className="mb-5 leading-relaxed text-stone-700">
            {before}
            <Link href={href} className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                {anchor}
            </Link>
            {after}
        </p>
    );
}

function siblingHubs(current: Hub): Hub[] {
    const related = clusters.find((c) => c.id === current.clusterId)?.relatedClusterIds ?? [];
    const adjacent = related
        .map((id) => hubs.find((h) => h.clusterId === id))
        .filter((h): h is Hub => !!h && h.slug !== current.slug);
    const rest = hubs.filter((h) => h.slug !== current.slug && !adjacent.includes(h));
    return [...adjacent, ...rest];
}

export default async function TopicHubPage({ params }: Params) {
    const { topic } = await params;
    const hub = hubBySlug(topic);
    if (!hub) notFound();

    const money = moneyHref(hub);
    const moneyLabel = MONEY_LABEL[money] ?? "our services";

    // Resolve post ids to posts, newest first. An id in the taxonomy with no
    // matching post is dropped here and caught by the build check in hubs.ts.
    const posts = hubPostIds(hub)
        .map((id) => blogPosts.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => !!p)
        .sort((a, b) => new Date(b.lastModified || b.date).getTime() - new Date(a.lastModified || a.date).getTime());

    const url = `${BASE}/blog/topic/${hub.slug}`;
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${url}#webpage`,
                url,
                name: hub.title,
                description: hub.description,
                isPartOf: { "@id": `${BASE}/#website` },
                breadcrumb: { "@id": `${url}#breadcrumb` },
                significantLink: `${BASE}${money}`,
                inLanguage: "en-US",
                author: {
                    "@type": "Person",
                    name: "Hassan Jamal",
                    url: `${BASE}/about/hassan`,
                },
                publisher: { "@id": `${BASE}/#organization` },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
                    { "@type": "ListItem", position: 3, name: hub.shortLabel, item: url },
                ],
            },
            {
                "@type": "ItemList",
                "@id": `${url}#itemlist`,
                name: hub.h1,
                numberOfItems: posts.length,
                itemListElement: posts.map((post, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    url: `${BASE}/blog/${post.id}`,
                    name: post.title,
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Header />
            <main className="min-h-screen bg-paper">
                <div className="container mx-auto max-w-4xl px-6 pt-28 pb-16 md:pt-36">
                    <Breadcrumb items={hubCrumbs(hub)} />

                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cognac">
                        {posts.length} guide{posts.length === 1 ? "" : "s"}
                    </p>
                    <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl">
                        {hub.h1}
                    </h1>

                    <div className="mb-6 text-lg">
                        {hub.intro.map((para, i) => (
                            <IntroParagraph key={i} text={para} href={money} anchor={hub.moneyAnchor} />
                        ))}
                    </div>

                    {/* The owned commercial facts, one sentence from company-facts, so
                        every hub states them inside its first 500 words. Added 6 Sep 2026. */}
                    <p className="mb-6 rounded-xl border border-stone-200 bg-white px-5 py-4 leading-relaxed text-charcoal" data-speakable="true">
                        {OFFER_LINE}
                    </p>

                    {/*
                      Attribution for the introduction above.

                      Added 28 Aug 2026 after an external review pointed out that these
                      pages carry several hundred words of authored editorial and named
                      nobody. That part was correct. A hub is not an article and should
                      not pretend to be one, so this is a source line rather than a
                      full byline block: who wrote the framing, and where the rules
                      that govern it are published.
                    */}
                    <p className="mb-12 border-l-2 border-stone-300 pl-4 text-sm leading-relaxed text-stone-600">
                        Topic introduction written by{" "}
                        <Link href="/about/hassan" className="font-semibold text-cognac hover:underline">
                            Hassan Jamal
                        </Link>
                        , Lead Engineer, from the scoping and handover work behind these guides. How claims here are
                        sourced, dated and corrected is set out in our{" "}
                        <Link href="/editorial-policy" className="text-cognac hover:underline">
                            editorial policy
                        </Link>
                        .
                    </p>

                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-charcoal">
                        Every guide in this topic
                    </h2>
                    <ul className="mb-16 space-y-4">
                        {posts.map((post) => (
                            <li key={post.id}>
                                <article className="rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:border-stone-300 hover:shadow-lg">
                                    <Link href={`/blog/${post.id}`} className="group block">
                                        <h3 className="text-xl font-bold leading-snug text-charcoal group-hover:text-cognac">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-600">
                                        <span>Published {post.date}</span>
                                        {post.lastModified ? (
                                            <>
                                                <span aria-hidden="true">·</span>
                                                <span>Updated {post.lastModified}</span>
                                            </>
                                        ) : null}
                                        <span aria-hidden="true">·</span>
                                        <span>{post.readTime} read</span>
                                    </p>
                                    <p className="mt-3 leading-relaxed text-stone-700">{post.excerpt}</p>
                                </article>
                            </li>
                        ))}
                    </ul>

                    <section className="mb-16 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Past the reading stage?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            These guides describe the decision. If you have made it and want the work scoped
                            against your own site, the commercial terms, acceptance criteria, and exclusions
                            are on one page.
                        </p>
                        <Link
                            href={money}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100"
                        >
                            See the {moneyLabel} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                    </section>

                    <nav aria-label="Other topics">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight text-charcoal">Related topics</h2>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {siblingHubs(hub).map((sibling) => (
                                <li key={sibling.slug}>
                                    <Link
                                        href={`/blog/topic/${sibling.slug}`}
                                        className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-charcoal hover:border-cognac/40 hover:text-cognac"
                                    >
                                        {sibling.h1}
                                        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-stone-400" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </main>
            <Footer />
        </>
    );
}
