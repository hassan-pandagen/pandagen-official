"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "@/components/ui/motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { setQuotePrefill } from "@/lib/quotePrefill";

const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

type Tier = "Starter" | "Growth" | "Scale";

type Answer = "starter" | "growth" | "scale";

type Option = { label: string; value: Answer };

type Step = {
  q: string;
  // Kept short because this text is repeated back to the visitor in the enquiry
  // form, where a full question would bury their own answer.
  shortQ: string;
  options: Option[];
};

// 15 Sep 2026: this section used to end by naming a tier and a price --
// "Scale / From $5,000" -- after three questions. Three questions cannot price
// a project. Page count, whether there is a shop, and whether there are
// integrations do not settle the scope, the content, the data to move or the
// deadline, so every number it produced was a guess presented to the visitor as
// an answer, and the highest-answer-wins rule meant one honest click on
// "several integrations" quoted a small business $5,000.
//
// The three-band price grid added on 13 Sep went with it. That change came from
// a real finding -- three of six competitor homepages put a starting price in a
// section heading -- and the finding still holds, so the floor stays in the
// heading and the published packages keep their own page.
//
// The quiz now does what it can actually do: collect three answers, hand them
// to the enquiry form, and let a person quote from them.
const steps: Step[] = [
  {
    q: "How many pages does your site have today?",
    shortQ: "Pages today",
    options: [
      { label: "7 pages or fewer", value: "starter" },
      { label: "8 to 20 pages", value: "growth" },
      { label: "More than 20 pages", value: "scale" },
      { label: "No site yet", value: "starter" },
    ],
  },
  {
    q: "Do you sell products online?",
    shortQ: "Selling online",
    options: [
      { label: "No, brochure or service site", value: "starter" },
      { label: "A handful of products, or a blog", value: "starter" },
      { label: "A catalogue I add to regularly", value: "growth" },
      { label: "A large catalogue, subscriptions or custom checkout logic", value: "scale" },
    ],
  },
  {
    q: "Do you need third-party integrations? (HubSpot, Salesforce, Stripe, etc.)",
    shortQ: "Integrations",
    options: [
      { label: "No, just a contact form", value: "starter" },
      { label: "Maybe one or two", value: "growth" },
      { label: "Yes, several integrations, or more than one language", value: "scale" },
    ],
  },
];

// Not shown to the visitor. It is a triage dimension on the GA completion event,
// so we can see which shape of project the quiz actually attracts.
function pickTier(answers: Answer[]): Tier {
  const rank: Record<Answer, number> = { starter: 0, growth: 1, scale: 2 };
  const reverse: Tier[] = ["Starter", "Growth", "Scale"];
  const max = answers.reduce((acc, a) => Math.max(acc, rank[a]), 0);
  return reverse[max];
}

function summarise(chosen: Option[]): string {
  const lines = chosen.map((opt, index) => "- " + steps[index].shortQ + ": " + opt.label);
  return "From the questions on your homepage:\n" + lines.join("\n") + "\n\n";
}

export default function TierQuiz() {
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState<Option[]>([]);

  const isDone = step >= steps.length;

  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  // Clicking an option unmounts the focused button, dropping focus to <body>.
  // Move it to the new question so keyboard and screen-reader users keep their
  // place. Gated on interaction so the quiz never steals focus on page load.
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (hasInteracted.current) stepHeadingRef.current?.focus();
  }, [step]);

  function choose(option: Option) {
    hasInteracted.current = true;
    // Fire quiz_start on the very first answer (engagement signal).
    if (step === 0) {
      trackGAEvent("quiz_start", { quiz: "tier_finder" });
    }
    const next = [...chosen, option];
    setChosen(next);
    setStep(step + 1);
    // When this answer completes the quiz, fire quiz_complete with our read.
    if (next.length >= steps.length) {
      trackGAEvent("quiz_complete", {
        quiz: "tier_finder",
        recommended_tier: pickTier(next.map((o) => o.value)),
      });
    }
  }

  function back() {
    if (step === 0) return;
    hasInteracted.current = true;
    setChosen(chosen.slice(0, -1));
    setStep(step - 1);
  }

  function reset() {
    hasInteracted.current = true;
    setStep(0);
    setChosen([]);
  }

  function sendToForm() {
    if (typeof window === "undefined") return;
    // This lands in the form's own details field, so the visitor can read and
    // edit everything that travels with their enquiry.
    setQuotePrefill(summarise(chosen));
    trackGAEvent("cta_click", { cta: "ask_about_project", location: "tier_quiz" });
    window.dispatchEvent(new Event("open-quote-modal"));
  }

  return (
    <section className="py-12 md:py-20 bg-paper">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-3">
            Websites and online stores,{" "}
            <span className="font-serif italic text-cognac">from $1,500.</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Answer three questions so we know what we are looking at, and a founder
            comes back with a price. The published packages are on the{" "}
            <Link href="/pricing" className="text-cognac underline underline-offset-2 hover:text-charcoal transition-colors">
              pricing page
            </Link>
            .
          </p>
        </div>

        {!isDone && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex flex-1 gap-1.5" aria-hidden="true">
                {steps.map((s, i) => (
                  <span
                    key={s.q}
                    className={`h-1 flex-1 rounded-full ${i <= step ? "bg-cognac" : "bg-stone-200"}`}
                  />
                ))}
              </div>
              <p className="shrink-0 text-sm text-stone-500">
                Question {step + 1} of {steps.length}
              </p>
            </div>
            <h3
              ref={stepHeadingRef}
              tabIndex={-1}
              className="text-xl md:text-2xl font-bold text-charcoal mb-6 outline-none"
            >
              {steps[step].q}
            </h3>
            <div className="grid gap-3">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => choose(opt)}
                  className="text-left p-4 rounded-xl border border-stone-200 hover:border-cognac hover:bg-stone-50 active:bg-stone-100 active:scale-[0.99] transition-[border-color,background-color,scale] duration-150 flex items-center justify-between group"
                >
                  <span className="font-medium text-charcoal">{opt.label}</span>
                  <ArrowRight className="w-5 h-5 text-stone-600 group-hover:text-cognac transition-colors" />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                onClick={back}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-charcoal transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </motion.div>
        )}

        {isDone && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">What you told us</p>
            <ul className="space-y-2 mb-6">
              {chosen.map((opt, index) => (
                <li key={steps[index].shortQ} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                  <span>
                    <span className="text-stone-500">{steps[index].shortQ}:</span>{" "}
                    <span className="font-medium text-charcoal">{opt.label}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-stone-600 mb-8">
              That is enough for us to start on. Send it with your name and email and
              we will reply with a price and what it covers, usually within one
              business day. Three questions are not enough for us to quote you from
              here, so a person reads them.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={sendToForm}
                className="flex-1 bg-cognac hover:bg-cognac/90 text-white px-6 py-3 rounded-xl font-bold text-center transition"
              >
                Send this and get a price
              </button>
              <CalModalButton className="px-6 py-3 rounded-xl font-medium text-stone-700 border border-stone-200 hover:bg-stone-50 transition text-center">
                Or book a 15-min call
              </CalModalButton>
            </div>
            <button
              onClick={reset}
              className="mt-4 text-sm font-medium text-stone-600 underline underline-offset-2 hover:text-charcoal transition-colors"
            >
              Start over
            </button>
            <p className="mt-6 text-sm font-semibold text-charcoal leading-relaxed">
              Prefer to talk first? Call{" "}
              <a href="tel:+13027738982" className="text-cognac underline underline-offset-2 hover:text-charcoal transition-colors">+1 (302) 773-8982</a>{" "}
              or email{" "}
              <a href="mailto:info@pandacodegen.com" className="text-cognac underline underline-offset-2 hover:text-charcoal transition-colors">info@pandacodegen.com</a>.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
