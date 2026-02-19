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
    <div className="max-w-6xl mx-auto px-6 mt-20 pt-16 border-t border-white/10">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-neon/50 transition-all"
          >
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <span className="px-2 py-1 bg-white/5 rounded">{post.category}</span>
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-neon transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 text-neon text-sm font-medium">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
