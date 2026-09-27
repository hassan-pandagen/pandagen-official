import Image from "next/image";
import { MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Three real Sanity Studio screenshots, dealt onto the dark section like a
// hand of photos as the reader scrolls -- each one settling flat from a
// slight tilt, landing offset enough to still show the edges of the ones
// before it. Rebuild, 27 Sep 2026: the first version (IntersectionObserver
// crossfading one image in place) read flat and lifeless. A reference GSAP
// "pinned card, rotates in from a tilt" effect came up as the fix, but it's
// a full new runtime dependency (gsap + @gsap/react, unused anywhere else in
// this codebase) for one section, built around full-viewport marketing-deck
// takeovers and a palette this brand doesn't use. What's actually worth
// keeping from it is the motion, not the component: cards settling into a
// stack as you scroll. That's exactly what ProcessSplit.tsx's pure-CSS
// animation-timeline: view() technique already does elsewhere on this page,
// so it's reused here instead -- no dependency, no client component, same
// verified @supports/reduced-motion fallback story as the rest of the site.
//
// Mechanics: each card sits inside its own scroll "run" (a tall, ordinary
// block). view-timeline-name on that run names a timeline scoped to it and
// its descendants; the sticky card inside references that name directly.
// Reusing the same custom-ident across every run is safe -- named timelines
// resolve like custom properties, nearest-ancestor first, so each card only
// ever sees its own run's timeline, never a sibling's. Later cards sit later
// in the DOM, so once sticky they paint over earlier ones wherever their
// (deliberately offset) rest positions overlap -- no z-index needed.
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    key: "process",
    src: "/work/panda-patches-editor.png",
    alt: "Sanity Studio open on the homepage's process section: a heading, a sub-heading and three ordered steps (Sketch, Mockup, Patch).",
    label: "Homepage copy",
    body: "Rewrite the homepage's “how we make your patches” steps — heading, sub-heading, step order — directly in the editor. No deploy, no developer.",
    start: "rotate(-9deg) translate(-10px, 70px) scale(0.95)",
    rest: "rotate(-3deg) translate(0px, 0px) scale(1)",
  },
  {
    key: "blog",
    src: "/work/panda-patches-editor-blog.png",
    alt: "Sanity Studio open on a blog post: title, URL slug and a main image field for a custom hockey patches guide.",
    label: "Blog posts",
    body: "Publish a new guide with a title, a URL slug and a hero image — the same editor that runs the storefront's 63-post blog library.",
    start: "rotate(7deg) translate(30px, 80px) scale(0.95)",
    rest: "rotate(2.5deg) translate(26px, 20px) scale(1)",
  },
  {
    key: "case-study",
    src: "/work/panda-patches-editor-case-study.png",
    alt: "Sanity Studio open on a bulk case study page: title, description and a patch photo field for a law enforcement client.",
    label: "Case studies",
    body: "Add a case study for a new industry — title, description and a photo — the same fields behind every sales page the storefront runs.",
    start: "rotate(-6deg) translate(-24px, 80px) scale(0.95)",
    rest: "rotate(-2deg) translate(-20px, 40px) scale(1)",
  },
];

export default function EditorScrollDeck() {
  return (
    <div className="deck-stack relative mx-auto" style={{ maxWidth: "560px" }}>
      {STEPS.map((s, i) => (
        <div
          key={s.key}
          className={i < STEPS.length - 1 ? "deck-run min-h-[68vh]" : "deck-run pb-16"}
        >
          <div
            className="deck-card sticky border"
            style={
              {
                top: "128px",
                backgroundColor: T.paper,
                borderColor: T.rule,
                boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
                "--deck-start": s.start,
                "--deck-rest": s.rest,
              } as React.CSSProperties
            }
          >
            <div className="p-3">
              <div className="relative overflow-hidden" style={{ aspectRatio: "1912 / 914" }}>
                <Image src={s.src} alt={s.alt} fill sizes="560px" className="object-cover object-top" priority={i === 0} />
              </div>
            </div>
            <div className="px-4 pb-4 pt-1">
              <p style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: T.accent }}>
                {s.label}
              </p>
              <p className="mt-1.5 text-[14px] leading-[1.55]" style={{ color: T.ink }}>
                {s.body}
              </p>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        .deck-card { transform: var(--deck-rest); opacity: 1; }
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .deck-run { view-timeline-name: --deck-reveal; view-timeline-axis: block; }
            .deck-card {
              animation: deck-settle linear both;
              animation-timeline: --deck-reveal;
              animation-range: entry 0% entry 65%;
            }
            @keyframes deck-settle {
              from { transform: var(--deck-start); opacity: 0; }
              to { transform: var(--deck-rest); opacity: 1; }
            }
          }
        }
      `}</style>
    </div>
  );
}
