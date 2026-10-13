import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import { POST_LAUNCH_SUPPORT_SUMMARY } from "@/data/company-facts";
import { FileCheck2, Gauge, KeyRound, LifeBuoy, PencilLine, UserRound } from "lucide-react";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Client commitments, as a list of short terms. Redesign candidate, 24 Sep 2026,
// modelled on grigoletti.ch: rows dimmed until you point at one.
// ─────────────────────────────────────────────────────────────────────────────
// Every line is a claim the site already makes, shortened where marked:
//   Founder-built       FounderSection.tsx, verbatim
//   Fixed scope         hero price line, verbatim + company-facts (written terms)
//   Code you own        company-facts "Ownership on handover", shortened
//   Content editor      home FAQ, verbatim first sentence
//   Measured at handover company-facts performance target, shortened; keeps
//                       "the pages named in your scope" and "before handover",
//                       which are the conditions that make it true
//   Support after launch: owner-confirmed policy in company-facts.ts.
// Do not add a row without a source. Dimmed text is #8C877F on charcoal
// (4.9:1), so the resting state still passes AA; on touch screens nothing dims.
// ─────────────────────────────────────────────────────────────────────────────

const rows = [
  { label: "Founder-built.", Icon: UserRound, text: "Hassan leads development. Imran leads marketing and the customer journey. You work directly with the founders." },
  { label: "Fixed scope.", Icon: FileCheck2, text: "Scope and price agreed before work starts. The written terms control the final price." },
  { label: "Code you own.", Icon: KeyRound, text: "Source code, design files, CMS models and production accounts end up under your control." },
  { label: "Content editor.", Icon: PencilLine, text: "Every package includes an editor built into your own site." },
  { label: "Measured at handover.", Icon: Gauge, text: "A 90+ Lighthouse target on mobile and desktop for the pages named in your scope, checked before handover." },
  { label: "Support after launch.", Icon: LifeBuoy, text: POST_LAUNCH_SUPPORT_SUMMARY },
];

export default function HowWeWork() {
  return (
    <section aria-labelledby="how-title" className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.dark, color: T.onDark }}>
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
          What you get
        </p>
        <h2 id="how-title" className="mt-5 max-w-[18ch]" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
          Know what is included <HeadingEmphasis text="before we build." onDark />
        </h2>
        <ul className="how-list mt-8 border-t md:mt-10" style={{ borderColor: T.onDarkRule }}>
          {rows.map(({ label, Icon, text }) => (
            <li key={label} className="how-row grid items-start gap-3 border-b py-6 last:border-b-0 last:pb-0 md:grid-cols-12 md:gap-8 md:py-10 md:last:pb-10" style={{ borderColor: T.onDarkRule }}>
              <span className="md:col-span-4 md:text-right" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)", lineHeight: 1.1 }}>
                {label}
              </span>
              <Icon className="hidden h-7 w-7 justify-self-center md:col-span-1 md:mt-1.5 md:block" aria-hidden="true" strokeWidth={1.5} />
              <span className="max-w-[40rem] text-[20px] leading-[1.45] md:col-span-7 md:text-[26px]">{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @media (hover: hover) {
          .how-row { color: #8C877F; transition: color .35s ease; }
          .how-list:not(:hover) .how-row:first-child, .how-row:hover { color: ${T.onDark}; }
        }
        @media (prefers-reduced-motion: reduce) { .how-row { transition: none; } }
      `}</style>
    </section>
  );
}
