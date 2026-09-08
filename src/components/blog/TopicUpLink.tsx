import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hubForPost, hubPostIds, moneyHref } from "@/data/hubs";
import { clusters } from "@/data/topical-map";

// The UP-link every post owes its cluster: one link to the topic hub (or, for a
// service-owned cluster, to the service page that owns the intent) and one to
// the cluster's money page, both with descriptive anchor text.
//
// This exists as a component rather than as prose in 77 files for the reason
// everything structural on this site does: written by hand it would be right on
// the day it was written and wrong by the third taxonomy change. scripts/
// link_guard.py checks the rendered output, so if this stops rendering, the
// build fails rather than the links quietly disappearing.

const MONEY_ANCHOR: Record<string, string> = {
    "/services/wordpress-migration": "how we scope a WordPress migration",
    "/services/ecommerce": "how we scope a commerce build",
    "/services/webflow": "how we scope a Webflow migration",
    "/services/squarespace": "how we scope a Squarespace migration",
    "/services/custom-engineering": "how we scope a custom build",
    "/services/wix": "how we scope a Wix migration",
    "/services/woocommerce": "how we scope a WooCommerce migration",
    "/services/gohighlevel": "how we scope a GoHighLevel front-end",
    "/partners": "how agency partnerships work",
    "/pricing": "what each pricing tier includes",
    "/free-audit": "run a free technical audit of your own site",
    "/editorial-policy": "how we source and correct what we publish",
};

export default function TopicUpLink({ postId }: { postId: string }) {
    const hub = hubForPost(postId);

    // Service-owned clusters get no hub; their parent is the service page.
    const owned = hub ? null : clusters.find((c) => c.serviceOwned && c.postIds.includes(postId));
    const parentHref = hub ? `/blog/topic/${hub.slug}` : owned?.pillarHref;
    const parentLabel = hub ? hub.h1 : owned?.label;
    if (!parentHref || !parentLabel) return null;

    const money = hub ? moneyHref(hub) : owned!.pillarHref!;
    const moneyAnchor = MONEY_ANCHOR[money] ?? "what the service covers";

    // Sibling links are RelatedPosts' job, not this component's. Rendering two
    // here as well produced up to five structural sibling links per post, which
    // pushed past the 2-4 the link guard enforces -- and the fix is to have one
    // component own the sibling contract rather than to widen the range.
    const hubCount = hub ? hubPostIds(hub).length : (owned?.postIds.length ?? 0);

    return (
        <aside data-topic-uplink className="my-12 rounded-2xl border border-stone-200 bg-stone-50/60 p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-stone-500">
                Where this sits
            </p>
            <p className="leading-relaxed text-stone-700">
                This guide is one of {hubCount} in{" "}
                <Link
                    href={parentHref}
                    className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                >
                    {parentLabel}
                </Link>
                . That page collects the whole topic in one place, in reading order.
            </p>
            <p className="mt-3 leading-relaxed text-stone-700">
                If you have moved past the research stage, see{" "}
                <Link
                    href={money}
                    className="inline-flex items-center gap-1 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                >
                    {moneyAnchor}
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
                .
            </p>
        </aside>
    );
}
