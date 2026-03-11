"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import type { IllustrationType } from "@/data/blog";

// Thin accent color per category — no heavy gradients
const accentColor = (type: IllustrationType): string => {
  switch (type) {
    case "aicommerce":
    case "saas":
      return "#10b981";
    case "speed":
    case "performance":
      return "#2563eb";
    case "wordpress":
    case "plugins":
      return "#8b5cf6";
    case "traffic":
    case "ranking":
      return "#ea580c";
    case "security":
      return "#f43f5e";
    default:
      return "#2563eb";
  }
};

export default function LatestBlog() {
  const latestPosts = [...blogPosts].reverse().slice(0, 3);

  return (
    <section className="py-20 px-6 bg-paper relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-charcoal" />
              <span className="text-stone-600 tracking-widest text-xs font-bold uppercase">
                From the Blog
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => {
            const color = accentColor(post.illustrationType);
            return (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-stone-300 transition-all duration-300 flex flex-col"
              >
                {/* Thin accent bar — all the color this card needs */}
                <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: color }} />

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-stone-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-stone-100">
                    <span className="text-xs text-stone-500">{post.date}</span>
                    <div className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color }}>
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile "View All" link */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-charcoal font-bold text-sm"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
