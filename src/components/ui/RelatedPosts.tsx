import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

interface RelatedPostsProps {
  currentPostId: string;
  category?: string;
  maxPosts?: number;
}

export default function RelatedPosts({
  currentPostId,
  category,
  maxPosts = 3
}: RelatedPostsProps) {
  // Filter out current post and optionally match category
  let relatedPosts = blogPosts.filter(post => post.id !== currentPostId);

  // Prioritize posts from same category
  if (category) {
    const sameCategoryPosts = relatedPosts.filter(post => post.category === category);
    const otherPosts = relatedPosts.filter(post => post.category !== category);
    relatedPosts = [...sameCategoryPosts, ...otherPosts];
  }

  // Limit to maxPosts
  relatedPosts = relatedPosts.slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10 md:mt-20 pt-8 md:pt-16 border-t border-stone-200">
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
