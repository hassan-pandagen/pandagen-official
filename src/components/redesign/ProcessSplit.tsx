import { DISPLAY, MONO, T } from "@/components/redesign/tokens";
import QuoteModalButton from "@/components/ui/QuoteModalButton";

// ─────────────────────────────────────────────────────────────────────────────
// Process: heading pinned on the left, four steps scrolling on the right.
// Redesign candidate, 24 Sep 2026. Copy unchanged from HowItWorksSimple.tsx.
// ─────────────────────────────────────────────────────────────────────────────
// What changed besides layout: the old section drew mock dashboards, including
// a QA progress bar fixed at "65%". That is decoration pretending to be data.
// The real content inside those diagrams (what is inventoried, decided,
// checkpointed and tested) is kept here as plain checklists; the fake progress
// is gone.
//
// Motion is CSS scroll-driven animation inside @supports, so browsers without
// it (Firefox, older Safari) show the finished state and lose nothing. The CTA
// fires the same analytics event as before: cta_click, start_discovery, process.
// ─────────────────────────────────────────────────────────────────────────────

const steps = [
  {
    title: "Discovery",
    description:
      "We inventory the current URLs, content, forms, analytics, integrations, and measurable baselines before recommending a migration scope.",
    list: [
      ["URLs", "Mapped"],
      ["Content", "Inventoried"],
      ["Analytics", "Baselined"],
      ["Integrations", "Reviewed"],
    ],
  },
  {
    title: "Architecture",
    description:
      "We document what should stay, move, integrate, or be replaced, along with dependencies, risks, acceptance criteria, and operating costs.",
    list: [
      ["CMS", "Keep or migrate"],
      ["Forms", "Rebuild or connect"],
      ["Analytics", "Preserve"],
      ["Integrations", "Test"],
    ],
  },
  {
    title: "Build",
    description:
      "The new implementation is delivered in reviewable checkpoints so content, behavior, integrations, and edge cases can be validated before cutover.",
    list: [
      ["Foundation", "Environment + structure"],
      ["Migration", "Content + features"],
      ["QA", "Review + fixes"],
    ],
  },
  {
    title: "Launch",
    description:
      "Before cutover, we test redirects, forms, analytics, accessibility, metadata, monitoring, and the rollback path against the approved launch checklist.",
    list: [
      ["Redirects", "Old URL → target"],
      ["Lead forms", "Validation → delivery"],
      ["Analytics", "Rollback plan"],
    ],
  },
];

export default function ProcessSplit() {
  return (
    <section aria-labelledby="process-title" className="relative px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Pinned column (sticky from lg; overflow-x: clip on html/body allows it). */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2
              id="process-title"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
            >
              From First Call to Launch.
            </h2>
            <p className="mt-6 max-w-[26rem] text-[18px] leading-[1.6]" style={{ color: T.body }}>
              Four reviewable stages, with the important decisions recorded before launch.
            </p>
            <QuoteModalButton
              cta="start_discovery"
              location="process"
              className="mt-10 inline-flex items-center bg-[#1C1917] px-7 py-4 text-[17px] font-medium text-[#EBE9E4] transition-opacity hover:opacity-90"
            >
              Start with Discovery
            </QuoteModalButton>
            <p className="mt-3 text-[14px]" style={{ color: T.quiet }}>
              Tell us your current platform, primary risk, and target timeline.
            </p>
          </div>
        </div>

        {/* Steps, with a rule that fills as you scroll through them. */}
        <ol className="process-steps relative lg:col-span-6 lg:col-start-7">
          <span aria-hidden="true" className="process-track absolute bottom-0 left-0 top-0 w-px" style={{ backgroundColor: T.rule }} />
          <span aria-hidden="true" className="process-fill absolute left-0 top-0 w-px" style={{ backgroundColor: T.ink }} />
          {steps.map((s, i) => (
            <li key={s.title} className="process-step relative pb-20 pl-8 last:pb-0 md:pl-12">
              <p className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className="mt-3"
                style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3.2rem)", lineHeight: 1, letterSpacing: "-0.01em" }}
              >
                {s.title}
              </h3>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.6]" style={{ color: T.body }}>
                {s.description}
              </p>
              <dl className="mt-7 max-w-[34rem] border-t" style={{ borderColor: T.rule }}>
                {s.list.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 border-b py-2.5 text-[13px]" style={{ borderColor: T.rule, fontFamily: MONO }}>
                    <dt style={{ color: T.ink }}>{k}</dt>
                    <dd style={{ color: T.quiet }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .process-steps { view-timeline-name: --steps; }
            .process-fill { height: 100%; transform-origin: top; animation: process-fill linear both; animation-timeline: --steps; animation-range: entry 30% exit 60%; }
            @keyframes process-fill { from { transform: scaleY(0); } to { transform: scaleY(1); } }
            .process-step { animation: process-in linear both; animation-timeline: view(); animation-range: entry 0% entry 45%; }
            @keyframes process-in { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
          }
        }
        @supports not (animation-timeline: view()) {
          .process-fill { display: none; }
        }
      `}</style>
    </section>
  );
}
