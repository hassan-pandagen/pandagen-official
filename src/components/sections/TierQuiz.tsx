"use client";

import { useState, useMemo } from "react";
import { motion } from "@/components/ui/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import { trackGAEvent } from "@/components/GoogleAnalytics";

const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

type Tier = "Starter" | "Growth" | "Scale";

type Answer = "starter" | "growth" | "scale";

const tierMap: Record<Tier, { name: string; price: string; tagline: string; fits: string[] }> = {
  Starter: {
    name: "Starter",
    price: "$1,500",
    tagline: "A small business site, up to 7 pages, live quickly.",
    fits: [
      "Up to 7 pages",
      "A brochure or service site. Nothing to buy.",
      "Edit your own words, images and business details.",
      "Custom Next.js, with a 90+ Lighthouse target at handover",
      "1 to 2 weeks delivery",
    ],
  },
  Growth: {
    name: "Growth (Most Popular)",
    price: "$3,500",
    tagline: "A full move, blog and all, without losing your search traffic.",
    fits: [
      "8 to 20 pages",
      "Sanity CMS (you edit content yourself, no developer needed)",
      "Your blog moves with 301 redirects, so Google keeps finding it",
      "2 to 4 weeks delivery",
    ],
  },
  Scale: {
    name: "Scale",
    price: "From $5,000",
    tagline: "A headless store, custom integrations, more than 20 pages.",
    fits: [
      "More than 20 pages, a shop, or more than one language",
      "Shopify or WooCommerce headless rebuild",
      "Custom integrations (HubSpot, Salesforce, Stripe, etc.)",
      "3 to 6 weeks delivery",
    ],
  },
};

type Step = {
  q: string;
  options: { label: string; value: Answer }[];
};

// Page-count boundaries here must touch the pricing page exactly: Starter up to 7,
// Growth 8 to 20, Scale more than 20. No gap and no overlap between the options.
const steps: Step[] = [
  {
    q: "How many pages does your site have today?",
    options: [
      { label: "7 pages or fewer", value: "starter" },
      { label: "8 to 20 pages", value: "growth" },
      { label: "More than 20 pages", value: "scale" },
    ],
  },
  {
    q: "Do you sell products online?",
    options: [
      { label: "No, brochure or service site", value: "starter" },
      { label: "No, but I publish a blog or resources", value: "growth" },
      { label: "Yes, I sell products online", value: "scale" },
    ],
  },
  {
    q: "Do you need third-party integrations? (HubSpot, Salesforce, Stripe, etc.)",
    options: [
      { label: "No, just a contact form", value: "starter" },
      { label: "Maybe one or two", value: "growth" },
      { label: "Yes, several integrations, or more than one language", value: "scale" },
    ],
  },
];

function pickTier(answers: Answer[]): Tier {
  // Take the highest tier across all answers (any "scale" wins, then "growth", then "starter")
  const rank: Record<Answer, number> = { starter: 0, growth: 1, scale: 2 };
  const reverse: Tier[] = ["Starter", "Growth", "Scale"];
  const max = answers.reduce((acc, a) => Math.max(acc, rank[a]), 0);
  return reverse[max];
}

export default function TierQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const isDone = step >= steps.length;
  const result = useMemo(() => (isDone ? pickTier(answers) : null), [isDone, answers]);

  function choose(value: Answer) {
    // Fire quiz_start on the very first answer (engagement signal).
    if (step === 0) {
      trackGAEvent("quiz_start", { quiz: "tier_finder" });
    }
    const nextAnswers = [...answers, value];
    setAnswers(nextAnswers);
    setStep(step + 1);
    // When this answer completes the quiz, fire quiz_complete with the resulting tier.
    if (nextAnswers.length >= steps.length) {
      trackGAEvent("quiz_complete", {
        quiz: "tier_finder",
        recommended_tier: pickTier(nextAnswers),
      });
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  return (
    <section className="py-12 md:py-20 bg-paper">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">Tier Finder</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-3">
            Which tier is{" "}
            <span className="font-serif italic text-cognac">right for me?</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Three questions and we will tell you which tier fits. No email needed.
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
            <p className="text-sm text-stone-500 mb-2">Question {step + 1} of {steps.length}</p>
            <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-6">{steps[step].q}</h3>
            <div className="grid gap-3">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => choose(opt.value)}
                  className="text-left p-4 rounded-xl border border-stone-200 hover:border-cognac hover:bg-stone-50 transition flex items-center justify-between group"
                >
                  <span className="font-medium text-charcoal">{opt.label}</span>
                  <ArrowRight className="w-5 h-5 text-stone-600 group-hover:text-cognac transition" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {isDone && result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">Your fit</p>
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{tierMap[result].name}</h3>
              <p className="text-2xl md:text-3xl font-bold text-cognac">{tierMap[result].price}</p>
            </div>
            <p className="text-lg text-stone-600 mb-6">{tierMap[result].tagline}</p>
            <ul className="space-y-2 mb-8">
              {tierMap[result].fits.map((fit) => (
                <li key={fit} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-cognac flex-shrink-0 mt-0.5" />
                  <span>{fit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <CalModalButton className="flex-1 bg-cognac hover:bg-cognac/90 text-white px-6 py-3 rounded-xl font-bold text-center transition">
                Book a free 15-min call
              </CalModalButton>
              <button
                onClick={reset}
                className="px-6 py-3 rounded-xl font-medium text-stone-700 border border-stone-200 hover:bg-stone-50 transition"
              >
                Start over
              </button>
            </div>
            <p className="mt-6 text-sm font-semibold text-charcoal leading-relaxed">
              If none of these match what you have, call{" "}
              <a href="tel:+13027738982" className="text-cognac underline underline-offset-2 hover:text-charcoal transition-colors">+1 (302) 773-8982</a>{" "}
              or email{" "}
              <a href="mailto:info@pandacodegen.com" className="text-cognac underline underline-offset-2 hover:text-charcoal transition-colors">info@pandacodegen.com</a>{" "}
              and we will quote it.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
