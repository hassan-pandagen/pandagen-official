"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";

function ReferrerBannerInner() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  if (!ref || !ref.startsWith("blog/")) return null;

  const slug = ref.replace("blog/", "");
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) return null;

  return (
    <div
      className="sticky top-0 z-40 bg-cognac text-white border-b border-cognac/40 shadow-sm"
      style={{ minHeight: "44px" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href={`/blog/${post.id}`}
          className="flex items-center gap-2 py-2.5 text-sm font-medium hover:underline decoration-white/60 underline-offset-4"
          style={{ minHeight: "44px" }}
        >
          <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="truncate">
            <span className="opacity-80">Continue reading:</span>{" "}
            <span className="font-semibold">{post.title}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function ReferrerBanner() {
  return (
    <Suspense fallback={null}>
      <ReferrerBannerInner />
    </Suspense>
  );
}
