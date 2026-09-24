"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { setQuotePrefill } from "@/lib/quotePrefill";
import { pickTier, steps, summarise, type Option } from "@/lib/tier-quiz";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

// ─────────────────────────────────────────────────────────────────────────────
// Pricing with the three-question tier finder. Redesign candidate, 24 Sep 2026.
// ─────────────────────────────────────────────────────────────────────────────
// Same questions, scoring, analytics events and hand-off as TierQuiz.tsx (both
// read src/lib/tier-quiz.ts). The answers go to the enquiry form, never to a
// price on screen: three questions are not enough to quote, which the copy
// says, so a person reads them.
// Options are styled like the Work rows: a full-width line that turns dark.
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
              <div className="flex items-center justify-between">
                <p className="text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
                  Question {step + 1} of {steps.length}
                </p>
                <div className="flex gap-1.5" aria-hidden="true">
                  {steps.map((s, i) => (
                    <span key={s.q} className="h-[3px] w-10" style={{ backgroundColor: i <= step ? T.ink : T.rule }} />
                  ))}
                </div>
              </div>
              <h3
                ref={headingRef}
                tabIndex={-1}
                className="mt-6 outline-none"
                style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.08 }}
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-medium"
                  style={{ backgroundColor: T.ink, color: T.paper }}
                >
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
        @media (prefers-reduced-motion: reduce) { .finder-step { animation: none; } .finder-opt { transition: none; } }
      `}</style>
    </section>
  );
}
