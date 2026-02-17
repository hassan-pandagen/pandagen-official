"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function LatestBlog() {
  // Get the 3 most recent posts (already sorted by date in blog.ts, newest last)
  const latestPosts = [...blogPosts].reverse().slice(0, 3);

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-neon" />
              <span className="text-neon tracking-widest text-xs font-bold uppercase">
                From the Blog
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-neon font-bold text-sm hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-neon/30 transition-all"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <span className="px-2 py-1 bg-white/5 rounded text-gray-400">{post.category}</span>
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-neon text-sm font-medium">
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neon font-bold text-sm"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
