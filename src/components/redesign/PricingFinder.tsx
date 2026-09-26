"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { setQuotePrefill } from "@/lib/quotePrefill";
import { pickTier, steps, summarise, type Option } from "@/lib/tier-quiz";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

// ─────────────────────────────────────────────────────────────────────────────
// Pricing with the three-question tier finder. Redesign pass, 26 Sep 2026
// (second pass -- first pass noted 24 Sep 2026 in git history).
// ─────────────────────────────────────────────────────────────────────────────
// Same questions, scoring, analytics events and hand-off as TierQuiz.tsx (both
// read src/lib/tier-quiz.ts). The answers go to the enquiry form, never to a
// price on screen: three questions are not enough to quote, which the copy
// says, so a person reads them.
// What changed from the first pass: it was flagged as needing a fresher look.
// The step progress is now a mono index (01/02/03) instead of plain dashes,
// matching the numbering used in Work/Services/Faq. The final CTA carries
// the founder avatar pair used in the hero and footer ("Talk to the
// founders") -- the promise this section makes is literally "a founder
// replies with a price," so the same two faces belong on the button that
// sends it.
// 26 Sep: each option row briefly carried its own mono index too, alongside
// the step progress above -- two numbering systems for two different things
// (which question vs. which answer) read as redundant. Dropped the
// per-option index; the step progress is the one that actually orients you.
// ─────────────────────────────────────────────────────────────────────────────

export default function PricingFinder() {
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState<Option[]>([]);
  const isDone = step >= steps.length;
  const headingRef = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);

  useEffect(() => {
    if (interacted.current) headingRef.current?.focus();
  }, [step]);

  function choose(option: Option) {
    interacted.current = true;
    if (step === 0) trackGAEvent("quiz_start", { quiz: "tier_finder" });
    const next = [...chosen, option];
    setChosen(next);
    setStep(step + 1);
    if (next.length >= steps.length) {
      trackGAEvent("quiz_complete", { quiz: "tier_finder", recommended_tier: pickTier(next.map((o) => o.value)) });
    }
  }

  function back() {
    if (step === 0) return;
    interacted.current = true;
    setChosen(chosen.slice(0, -1));
    setStep(step - 1);
  }

  function reset() {
    interacted.current = true;
    setStep(0);
    setChosen([]);
  }

  function sendToForm() {
    setQuotePrefill(summarise(chosen));
    trackGAEvent("cta_click", { cta: "ask_about_project", location: "tier_quiz" });
    window.dispatchEvent(new Event("open-quote-modal"));
  }

  return (
    <section aria-labelledby="pricing-title" className="px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2
            id="pricing-title"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            Websites and online stores, from $1,500.
          </h2>
          <p className="mt-6 max-w-[28rem] text-[18px] leading-[1.6]" style={{ color: T.body }}>
            Answer three questions so we know what we are looking at, and a founder comes back with a price. The
            published packages are on the{" "}
            <Link href="/pricing" style={{ color: T.accentText }}>
              pricing page
            </Link>
            .
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7" aria-live="polite">
          {!isDone ? (
            <div key={step} className="finder-step">
              <div className="flex items-center gap-4" style={{ fontFamily: MONO }}>
                {steps.map((s, i) => (
                  <span key={s.q} className="flex items-center gap-2 text-[12px] uppercase tracking-[0.12em]" style={{ color: i <= step ? T.ink : T.quiet }}>
                    {String(i + 1).padStart(2, "0")}
                    {i < steps.length - 1 && (
                      <span aria-hidden="true" className="h-px w-6" style={{ backgroundColor: i < step ? T.ink : T.rule }} />
                    )}
                  </span>
                ))}
              </div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="mt-6 outline-none"
                style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.2vw, 2.8rem)", lineHeight: 1.08 }}
              >
                {steps[step].q}
              </h3>
              <ul className="mt-8 border-t" style={{ borderColor: T.rule }}>
                {steps[step].options.map((opt) => (
                  <li key={opt.label} className="border-b" style={{ borderColor: T.rule }}>
                    <button
                      type="button"
                      onClick={() => choose(opt)}
                      className="finder-opt flex w-full items-center justify-between gap-6 rounded-[4px] py-5 text-left text-[18px]"
                      style={{ color: T.ink }}
                    >
                      {opt.label}
                      <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
              {step > 0 && (
                <button type="button" onClick={back} className="mt-6 inline-flex items-center gap-2 text-[15px]" style={{ color: T.body }}>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
                </button>
              )}
            </div>
          ) : (
            <div className="finder-step">
              <p className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
                What you told us
              </p>
              <dl className="mt-6 border-t" style={{ borderColor: T.rule }}>
                {chosen.map((opt, i) => (
                  <div key={steps[i].shortQ} className="flex items-baseline justify-between gap-6 border-b py-4" style={{ borderColor: T.rule }}>
                    <dt className="text-[13px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.quiet }}>
                      {steps[i].shortQ}
                    </dt>
                    <dd className="text-right text-[17px]" style={{ color: T.ink }}>
                      {opt.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <h3 ref={headingRef} tabIndex={-1} className="sr-only">
                Your answers
              </h3>
              <p className="mt-8 text-[17px] leading-[1.6]" style={{ color: T.body }}>
                That is enough for us to start on. Send it with your name and email and we will reply with a price and
                what it covers, usually within one business day. Three questions are not enough for us to quote you from
                here, so a person reads them.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={sendToForm}
                  className="cta-solid inline-flex items-center justify-center gap-3 px-6 py-4 text-[16px] font-medium"
                  style={{ backgroundColor: T.ink, color: T.paper }}
                >
                  <span className="flex -space-x-2" aria-hidden="true">
                    <Image src="/team/hassan.png" alt="" width={26} height={26} className="rounded-full ring-2 ring-[#EBE9E4]" />
                    <Image src="/team/imran.png" alt="" width={26} height={26} className="rounded-full ring-2 ring-[#EBE9E4]" />
                  </span>
                  Send this and get a price <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <CalModalButton className="finder-cal inline-flex items-center justify-center border px-6 py-4 text-[16px] font-medium">
                  Or book a 15-min call
                </CalModalButton>
              </div>
              <button type="button" onClick={reset} className="mt-6 text-[15px] underline underline-offset-4" style={{ color: T.body }}>
                Start over
              </button>
              <p className="mt-6 text-[15px]" style={{ color: T.body }}>
                Prefer to talk first? Call{" "}
                <a href="tel:+13027738982" style={{ color: T.accentText }}>
                  +1 (302) 773-8982
                </a>{" "}
                or email{" "}
                <a href="mailto:info@pandacodegen.com" style={{ color: T.accentText }}>
                  info@pandacodegen.com
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .finder-opt { transition: background-color .3s ease, color .3s ease, padding .3s ease; }
        .finder-opt:hover, .finder-opt:focus-visible { background-color: ${T.dark}; color: ${T.onDark} !important; padding-left: 18px; padding-right: 18px; }
        .finder-cal { border-color: ${T.ink}; color: ${T.ink}; }
        .finder-step { animation: finder-in .45s cubic-bezier(.2,.7,.2,1) both; }
        @keyframes finder-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (prefers-reduced-motion: reduce) { .finder-step { animation: none; } .finder-opt, .cta-solid { transition: none; } }
      `}</style>
    </section>
  );
}
