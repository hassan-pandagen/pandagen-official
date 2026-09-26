import { businessFeatureCopy, businessFeatures } from "@/data/business-features";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Built-in features. Redesign pass, 26 Sep 2026 (second pass -- see the 24 Sep
// note in git history for the first). Copy is the shared business-features.ts
// data (four named jobs, not three vague descriptions); this file only changes
// presentation.
// ─────────────────────────────────────────────────────────────────────────────
// What changed from the first pass: it was flagged as the flattest section on
// the page -- a static grid next to sections that all have a device (Work's
// hover row, the Services stack, Process's scroll-fill, How-we-work's dim/
// undim). This gives each card a hover state (warm fill, card lifts, number
// inverts from cognac to ink) so it behaves like the rest of the page instead
// of sitting still. Four cards now (was three), laid out 4-across at lg so the
// numbers read as one row, like the Services sub-list.
// ─────────────────────────────────────────────────────────────────────────────

export default function FeaturesTrio() {
  return (
    <section aria-labelledby="features-title" className="px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2
            id="features-title"
            className="lg:col-span-7"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            {businessFeatureCopy.heading}
          </h2>
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
              <span className="feature-num" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.accent, fontSize: "2.8rem", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
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

        <div className="mt-16 grid gap-8 border-t pt-10 md:grid-cols-12" style={{ borderColor: T.rule }}>
          <p className="max-w-[46rem] text-[16px] leading-[1.7] md:col-span-8" style={{ color: T.body }}>
            {businessFeatureCopy.costs}
          </p>
          <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium"
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
        .feature-col { transition: background-color .3s ease, box-shadow .3s ease; }
        .feature-col:hover, .feature-col:focus-within {
          background-color: ${T.paper};
          box-shadow: inset 0 -3px 0 ${T.accent};
        }
        .feature-num { transition: color .3s ease; }
        .feature-col:hover .feature-num, .feature-col:focus-within .feature-num { color: ${T.ink}; }
        @media (prefers-reduced-motion: reduce) { .feature-col, .feature-num { transition: none; } }
      `}</style>
    </section>
  );
}
