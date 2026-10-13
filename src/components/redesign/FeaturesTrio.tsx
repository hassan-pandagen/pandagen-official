import { businessFeatureCopy, businessFeatures } from "@/data/business-features";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// Homepage automation examples: customer questions with concrete trigger/result
// pairs. The service FAQ shares the same copy for fuller scoping answers.

export default function FeaturesTrio() {
  return (
    <section aria-labelledby="features-title" className="px-6 pb-6 pt-10 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.accentText }}>
              Custom tools &amp; workflow automation
            </p>
            <h2
              id="features-title"
              className="max-w-[36ch]"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.3rem, 4.6vw, 4.4rem)", lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}
            >
              <span className="block">{businessFeatureCopy.heading.split(". ")[0]}. </span>
              <span className="block">{businessFeatureCopy.heading.split(". ").slice(1).join(". ")}</span>
            </h2>
          </div>
          <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5" style={{ color: T.body }}>
            {businessFeatureCopy.intro}
          </p>
        </div>

        <ol className="feature-grid mt-6 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-0 md:border-t lg:grid-cols-4" style={{ borderColor: T.rule }}>
          {businessFeatures.map((f, i) => (
            <li
              key={f.title}
              className="feature-col relative flex min-w-0 flex-col border-b px-5 py-6 md:border-l md:px-7 md:pb-10 md:pt-8 md:first:border-l-0 lg:pb-12 lg:pt-10"
              style={{ borderColor: T.rule }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="feature-num" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.accent, fontSize: "2.8rem", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3, textWrap: "pretty" }}>
                {f.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.6]" style={{ color: T.body }}>
                {f.body}
              </p>
              <p className="mt-5 text-[14px] leading-[1.6]" style={{ color: T.body }}>
                <strong className="mb-1 block" style={{ fontFamily: MONO, color: T.ink }}>Example flow</strong> {f.example}
              </p>
              <p className="mt-auto pt-4 text-[14px] leading-[1.6] md:pt-6" style={{ color: T.body }}>
                <strong className="mb-1 block" style={{ fontFamily: MONO, color: T.ink }}>
                  You control
                </strong>{" "}
                {f.edits}
              </p>
            </li>
          ))}
        </ol>

        <div data-feature-costs className="mt-6 grid gap-6 md:mt-12 md:grid-cols-12 md:gap-8 md:pt-8">
          <p className="max-w-[46rem] text-[16px] leading-[1.7] md:col-span-8" style={{ color: T.body }}>
            {businessFeatureCopy.costs}
          </p>
          <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
            <Link
              href="/contact"
              className="cta-solid inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              {businessFeatureCopy.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/services/custom-engineering" className="text-[15px] font-medium" style={{ color: T.ink }}>
              Explore custom workflow automation
            </Link>
          </div>
        </div>
      </div>

      <style>{`
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
        @media (max-width: 767px) {
          .feature-col { background-color: #fff; border-top: 3px solid ${T.accent}; }
          .feature-num { font-size: 2rem !important; }
        }
        @media (hover: none), (pointer: coarse) {
          .feature-col:hover { transform: none; box-shadow: none; }
        }
        @media (prefers-reduced-motion: reduce) { .feature-col, .feature-num, .cta-solid { transition: none; } .feature-col:hover, .feature-col:focus-within { transform: none; } }
      `}</style>
    </section>
  );
}
