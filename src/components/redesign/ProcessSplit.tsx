import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
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

// Plain business steps for new builds, connected systems and migrations.
const steps = [
  {
    title: "Understand your business",
    description: "We walk through what your customers and staff need to do, review your current site and tools, and agree what a successful project looks like.",
    list: [
      ["Your goals", "Agreed together"],
      ["Current tools", "Reviewed"],
      ["Content to keep", "Listed"],
    ],
  },
  {
    title: "Agree the plan",
    description: "You review the proposed layouts, what your team will be able to edit, and how the website connects to your other tools. We agree the scope, price and running costs before building.",
    list: [
      ["Page layouts", "For your approval"],
      ["Features and connections", "Written into the scope"],
      ["Build and running costs", "Explained upfront"],
    ],
  },
  {
    title: "Build and try it",
    description: "See the work on a private preview as it takes shape. Your team tries the agreed tasks, such as editing a page, making a booking or processing an order, and we make the agreed fixes before launch.",
    list: [
      ["Private preview", "Review the progress"],
      ["Customer and staff tasks", "Tested together"],
      ["Feedback", "Reviewed and addressed"],
    ],
  },
  {
    title: "Launch with confidence",
    description: "We check the agreed pages, forms, payments and tracking, plus old links when you are moving sites. You get editor training and written instructions, and we agree the launch and recovery plan with you.",
    list: [
      ["Launch checks", "Completed before go-live"],
      ["Your team", "Trained to make updates"],
      ["Code and accounts", "Under your control"],
    ],
  },
];

export default function ProcessSplit() {
  return (
    <section aria-labelledby="process-title" className="relative px-6 py-16 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Pinned column (sticky from lg; overflow-x: clip on html/body allows it). */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2
              id="process-title"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
            >
              <HeadingEmphasis text="From First Call to Launch." />
            </h2>
            <p className="mt-6 max-w-[26rem] text-[18px] leading-[1.6]" style={{ color: T.body }}>
              You know what happens next, what you need to review and what you will receive at each stage.
            </p>
            <QuoteModalButton
              cta="start_discovery"
              location="process"
              className="cta-solid mt-10 inline-flex items-center bg-[#1C1917] px-7 py-4 text-[17px] font-medium text-[#EBE9E4]"
            >
              Talk through your project
            </QuoteModalButton>
            <p className="mt-3 text-[14px]" style={{ color: T.quiet }}>
              Tell us what you want to improve and when you would like it ready.
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
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (prefers-reduced-motion: reduce) { .cta-solid { transition: none; } }
      `}</style>
    </section>
  );
}
