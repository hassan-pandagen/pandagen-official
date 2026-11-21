import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import { POST_LAUNCH_SUPPORT_SUMMARY } from "@/data/company-facts";
import { Clock, FileCheck2, KeyRound, LifeBuoy, Route, ShieldCheck, UserRound, Users, Wallet } from "lucide-react";
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
//   Tested journeys     company-facts HOW_WE_WORK "Testing before launch",
//                       owner-approved 2 Nov 2026; "where they apply" keeps it true
//                       for sites without bookings or payments
// Do not add a row without a source. Dimmed text is #8C877F on charcoal
// (4.9:1), so the resting state still passes AA; on touch screens nothing dims.
// ─────────────────────────────────────────────────────────────────────────────

// 21 Nov 2026, Imran's decisions (founder brief, "Imran's decisions"): this section
// becomes the terms block. New rows and their sources:
//   Your hours          Imran: US Eastern hours and a same-day named lead hold for every client
//   Pay in stages       Hassan and Imran: system builds 30 / 40 / 30, the last 30% after the live test
//   Refund              company-facts "Refunds" (failure to deliver the signed scope).
//                       Check the wording against the contract before this is pushed.
//   You can remove us   Hassan: accounts opened in the client's name. Confirm every client's
//                       hosting and database are in their own name before this is pushed.
//   References          Imran: Etoy, Jaime and Emblematic Studio agreed to take calls
//   How it runs         Imran: keep a short version of the process steps here
// "Founder-built" absorbs the founders section's promise; the content-editor and
// Lighthouse rows stay on /pricing and the service pages.
const rows = [
  { label: "Founder-built.", Icon: UserRound, text: "Hassan leads development. Imran leads marketing and the customer journey. You work directly with the founders." },
  { label: "Your hours.", Icon: Clock, text: "We work US Eastern business hours, and your named lead answers your messages the same day." },
  { label: "Fixed price.", Icon: FileCheck2, text: "Scope and price agreed in writing before work starts. Changes are agreed in writing first, with the price and date effect stated." },
  { label: "Pay in stages.", Icon: Wallet, text: "Business systems are paid 30 / 40 / 30: 30% to start, 40% when you can review the working system, and the last 30% after your booking system passes a live test and the site launches." },
  { label: "Refund.", Icon: ShieldCheck, text: "100% back if we don't deliver what's in your signed scope. We don't launch until it's tested and working." },
  { label: "You own it.", Icon: KeyRound, text: "Your hosting, database and content editor are opened in your name, with you as the owner. You can remove us; we can't remove you." },
  { label: "Talk to our clients.", Icon: Users, text: "Three past clients will take your call before you sign." },
  { label: "How it runs.", Icon: Route, text: "A free written check of how you work today, a written scope and price, the build, a live test of every booking and payment journey, then launch." },
  { label: "Support after launch.", Icon: LifeBuoy, text: POST_LAUNCH_SUPPORT_SUMMARY },
];

export default function HowWeWork() {
  return (
    <section aria-labelledby="how-title" className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.dark, color: T.onDark }}>
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
          How we work with you
        </p>
        <h2 id="how-title" className="mt-5 max-w-[18ch]" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
          The terms, <HeadingEmphasis text="before we build." onDark />
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
