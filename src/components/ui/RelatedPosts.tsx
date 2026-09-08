import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { getRelatedPostIds } from "@/data/topical-map";
import { hubForPost, hubPostIds } from "@/data/hubs";

interface RelatedPostsProps {
  currentPostId: string;
  maxPosts?: number;
}

export default function RelatedPosts({
  currentPostId,
  maxPosts = 3
}: RelatedPostsProps) {
  // Relationship-ranked: score candidates by how many topical clusters they
  // share with the current post (true topical proximity), recency as tiebreak.
  // Falls back to recency for posts not yet placed in the topical map.
  //
  // Then re-sorted so members of THIS post's canonical hub come first. Shared-
  // cluster count alone is not enough for the seven posts that sit in two
  // clusters: a post whose primary hub is "website-speed" was being given
  // related posts drawn from its secondary "seo-and-ai-search" cluster, which
  // left the hub it actually links up to with one sibling on the page. The
  // canonical hub is the one named in the breadcrumb, so it should be the one
  // the related list reinforces.
  const orderedIds = blogPosts.map(p => p.id);
  const byId = new Map(blogPosts.map(p => [p.id, p]));
  const hub = hubForPost(currentPostId);
  const hubMates = new Set(hub ? hubPostIds(hub) : []);

  const relatedPosts = getRelatedPostIds(currentPostId, orderedIds, Math.max(maxPosts * 3, 9))
    .sort((a, b) => Number(hubMates.has(b)) - Number(hubMates.has(a)))
    .slice(0, maxPosts)
    .map(id => byId.get(id))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));

  if (relatedPosts.length === 0) return null;

  return (
    // data-related-posts marks this block for scripts/link_guard.py, which counts
    // structural sibling links here and deliberately ignores contextual links in
    // the article body. A post with twelve well-anchored inline links to its own
    // cluster is doing internal linking well, not badly, and a guard that failed
    // it would be failing correct work.
    <div data-related-posts className="max-w-6xl mx-auto px-6 mt-10 md:mt-20 pt-8 md:pt-16 border-t border-stone-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-charcoal">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-cognac/40 hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center gap-2 text-xs text-stone-600 mb-3">
              <span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded-sm text-cognac font-bold uppercase">{post.category}</span>
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-lg font-bold mb-2 text-charcoal group-hover:text-cognac transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-stone-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 text-cognac text-sm font-medium">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
