import { businessFeatureCopy, businessFeatures } from "@/data/business-features";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Built-in features. Redesign pass, 26 Sep 2026 (third pass -- see 24/26 Sep
// notes in git history for the first two). Copy is the shared
// business-features.ts data; this file only changes presentation.
// ─────────────────────────────────────────────────────────────────────────────
// Owner reference, 26 Sep: reactbits.dev/micro/folder-float -- a stack that
// fans out floating sticky notes on hover. That component's premise (a folder
// collecting design feedback) doesn't fit this section's content, so this
// borrows the physicality (small rotated notes, spring stagger) rather than
// the object: each card's own "Good for" segments (already real copy, split
// on commas/and) pop out as floating chips on hover/focus. Decorative only --
// aria-hidden, since the same words are already in the visible paragraph
// below, so nothing depends on hover to be readable or crawlable.
// ─────────────────────────────────────────────────────────────────────────────

const CHIP_ROTATE = [-7, 4, -3];

function fitTags(fit: string): string[] {
  return fit
    .replace(/ and /gi, ", ")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function FeaturesTrio() {
  return (
    <section aria-labelledby="features-title" className="px-6 py-16 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.accentText }}>
              Examples of what we can build
            </p>
            <h2
              id="features-title"
              className="max-w-[36ch]"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 4.6vw, 4.4rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
            >
              {businessFeatureCopy.heading}
            </h2>
          </div>
          <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5" style={{ color: T.body }}>
            {businessFeatureCopy.intro}
          </p>
        </div>

        <ol className="feature-grid mt-16 grid border-t md:mt-24 md:grid-cols-2 lg:grid-cols-4" style={{ borderColor: T.rule }}>
          {businessFeatures.map((f, i) => (
            <li
              key={f.title}
              className="feature-col relative flex flex-col border-b border-l pb-10 pt-8 md:px-7 md:first:border-l-0 lg:pb-12 lg:pt-10"
              style={{ borderColor: T.rule }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="feature-num" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.accent, fontSize: "2.8rem", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap justify-end gap-1.5 pt-1" aria-hidden="true">
                  {fitTags(f.fit).map((tag, ti) => (
                    <span
                      key={tag}
                      style={{
                        "--chip-rotation": `${CHIP_ROTATE[ti % CHIP_ROTATE.length]}deg`,
                        "--chip-delay": `${ti * 0.07}s`,
                        fontFamily: MONO,
                        fontSize: "10.5px",
                        color: T.ink,
                        backgroundColor: T.paper,
                        border: `1px solid ${T.rule}`,
                        boxShadow: "0 4px 10px -4px rgba(28,25,23,0.25)",
                      } as CSSProperties}
                      className="feature-tag rounded-full px-2.5 py-1 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-7" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.2 }}>
                {f.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6]" style={{ color: T.body }}>
                {f.body}
              </p>
              <p className="mt-4 text-[13px]" style={{ color: T.body }}>
                <strong style={{ color: T.ink }}>Good for:</strong> {f.fit}
              </p>
              <p className="mt-auto pt-8 text-[12px] leading-[1.5]" style={{ fontFamily: MONO, color: T.quiet }}>
                <span className="uppercase tracking-[0.1em]" style={{ color: T.ink }}>
                  You edit:
                </span>{" "}
                {f.edits}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-8 border-t pt-8 md:grid-cols-12" style={{ borderColor: T.rule }}>
          <p className="max-w-[46rem] text-[16px] leading-[1.7] md:col-span-8" style={{ color: T.body }}>
            {businessFeatureCopy.costs}
          </p>
          <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
            <Link
              href="/contact"
              className="cta-solid inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Discuss a feature for your website <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/services/custom-engineering" className="text-[15px] font-medium" style={{ color: T.ink }}>
              See what we can build
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        /* Decorative chips use CSS so the page needs no animation runtime. */
        .feature-tag { opacity: 0; transform: translateY(10px) scale(.85) rotate(var(--chip-rotation)); transition: opacity .25s ease var(--chip-delay), transform .4s cubic-bezier(.34,1.56,.64,1) var(--chip-delay); }
        .feature-col:hover .feature-tag, .feature-col:focus-within .feature-tag { opacity: 1; transform: translateY(0) scale(1) rotate(var(--chip-rotation)); }
        .feature-col { transition: background-color .3s ease, box-shadow .3s ease, transform .3s ease; }
        .feature-col:hover, .feature-col:focus-within {
          background-color: #fff;
          box-shadow: inset 0 4px 0 ${T.accent}, 0 18px 25px rgba(28,25,23,.1);
          transform: translateY(-4px);
        }
        .feature-num { transition: color .3s ease; }
        .feature-col:hover .feature-num, .feature-col:focus-within .feature-num { color: ${T.ink}; }
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (prefers-reduced-motion: reduce) { .feature-tag, .feature-col, .feature-num, .cta-solid { transition: none; } .feature-col:hover, .feature-col:focus-within { transform: none; } }
      `}</style>
    </section>
  );
}
