"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Three real Sanity Studio screenshots, sticky on one side, an
// IntersectionObserver swapping the active one as its caption scrolls into
// view on the other. 27 Sep 2026.
//
// ProcessSplit.tsx's scroll device (animation-timeline: view()) is this
// codebase's usual pure-CSS pattern, but it drives opacity/scale on an
// element tied to ITS OWN scroll position -- it doesn't swap which image a
// separate, sticky element shows. Doing that in CSS alone needs
// timeline-scope to reference a named view-timeline from outside its own
// ancestor chain, support for which is newer and harder to verify than the
// animation-timeline: view() ProcessSplit already relies on. An
// IntersectionObserver is the standard, easily-tested tool for exactly this
// "which caption is in view decides what the pinned panel shows" pattern, so
// that's what this uses instead, with a static fallback (first image, no JS
// dependency for content) if it's ever unavailable.
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    key: "process",
    src: "/work/panda-patches-editor.png",
    alt: "Sanity Studio open on the homepage's process section: a heading, a sub-heading and three ordered steps (Sketch, Mockup, Patch).",
    label: "Homepage copy",
    body: "Rewrite the homepage's “how we make your patches” steps — heading, sub-heading, step order — directly in the editor. No deploy, no developer.",
  },
  {
    key: "blog",
    src: "/work/panda-patches-editor-blog.png",
    alt: "Sanity Studio open on a blog post: title, URL slug and a main image field for a custom hockey patches guide.",
    label: "Blog posts",
    body: "Publish a new guide with a title, a URL slug and a hero image — the same editor that runs the storefront's 63-post blog library.",
  },
  {
    key: "case-study",
    src: "/work/panda-patches-editor-case-study.png",
    alt: "Sanity Studio open on a bulk case study page: title, description and a patch photo field for a law enforcement client.",
    label: "Case studies",
    body: "Add a case study for a new industry — title, description and a photo — the same fields behind every sales page the storefront runs.",
  },
];

export default function EditorScrollDeck() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = refs.current.findIndex((el) => el === entry.target);
          if (idx !== -1) setActive(idx);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    for (const el of refs.current) if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-32">
          <div className="relative overflow-hidden border" style={{ aspectRatio: "1912 / 914", borderColor: T.onDarkRule, backgroundColor: "rgba(235,233,228,0.04)" }}>
            {STEPS.map((s, i) => (
              <Image
                key={s.key}
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="editor-deck-img object-cover object-top"
                style={{ opacity: active === i ? 1 : 0 }}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        {STEPS.map((s, i) => (
          <div
            key={s.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="flex min-h-[50vh] flex-col justify-center py-10 lg:min-h-[70vh]"
          >
            <span className="text-[12px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.onDarkAccent }}>
              {s.label}
            </span>
            <p className="mt-3 max-w-[30rem] text-[16px] leading-[1.7]" style={{ color: active === i ? T.onDark : T.onDarkQuiet }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .editor-deck-img { transition: opacity .35s ease; }
        @media (prefers-reduced-motion: reduce) { .editor-deck-img { transition: none; } }
      `}</style>
    </div>
  );
}
