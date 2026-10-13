import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// Latest guides, redesign candidate, 24 Sep 2026. Same selection as
// LatestBlog.tsx (the last three entries in blog.ts), shown as rows in the same
// language as the Work index.

export default function GuidesList() {
  const latest = [...blogPosts].reverse().slice(0, 3);
  return (
    <section aria-labelledby="guides-title" className="px-6 pb-10 md:px-10 md:pb-20" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-6 pt-6 md:pt-12">
          <h2
            id="guides-title"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.2rem, 4vw, 3.6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            <HeadingEmphasis text="Latest Insights" />
          </h2>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[15px] font-medium" style={{ color: T.ink }}>
            View All Articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 border-t" style={{ borderColor: T.rule }}>
          {latest.map((p) => (
            <li key={p.id} className="border-b" style={{ borderColor: T.rule }}>
              <Link href={`/blog/${p.id}`} className="guide-row grid items-baseline gap-3 rounded-[4px] py-7 md:grid-cols-12 md:gap-8" style={{ textDecoration: "none" }}>
                <span className="guide-meta text-[12px] uppercase tracking-[0.12em] md:col-span-3" style={{ fontFamily: MONO, color: T.quiet }}>
                  {p.category} · {p.readTime}
                </span>
                <span className="md:col-span-8">
                  <span className="guide-title block" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)", lineHeight: 1.12 }}>
                    {p.title}
                  </span>
                  <span className="guide-ex mt-2 block max-w-[46rem] text-[16px] leading-[1.6]" style={{ color: T.body }}>
                    {p.excerpt}
                  </span>
                </span>
                <ArrowUpRight className="guide-arrow hidden h-6 w-6 justify-self-end md:col-span-1 md:block" style={{ color: T.ink }} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .guide-row { transition: background-color .35s ease, padding .35s ease; }
        .guide-row:hover, .guide-row:focus-visible { background-color: ${T.dark}; padding-left: 20px; padding-right: 20px; }
        .guide-row:hover .guide-title, .guide-row:focus-visible .guide-title, .guide-row:hover .guide-arrow, .guide-row:focus-visible .guide-arrow { color: ${T.onDarkAccent} !important; }
        .guide-row:hover .guide-ex, .guide-row:focus-visible .guide-ex, .guide-row:hover .guide-meta { color: ${T.onDarkQuiet} !important; }
        @media (prefers-reduced-motion: reduce) { .guide-row { transition: none; } }
      `}</style>
    </section>
  );
}
