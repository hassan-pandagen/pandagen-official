"use client";

import { useState, useMemo } from "react";
import { motion } from "@/components/ui/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import { trackGAEvent } from "@/components/GoogleAnalytics";

const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

type Tier = "Starter" | "Growth" | "Scale" | "ScalePlus";

const tierMap: Record<Tier, { name: string; price: string; tagline: string; fits: string[] }> = {
  Starter: {
    name: "Starter",
    price: "$1,500",
    tagline: "A small business site, 5 to 7 pages, live quickly.",
    fits: [
      "Under 10 pages",
      "A brochure or service site. Nothing to buy.",
      "Custom Next.js, with a 90+ Lighthouse target at handover",
      "1 to 2 weeks delivery",
    ],
  },
  Growth: {
    name: "Growth (Most Popular)",
    price: "$3,500",
    tagline: "A full move, blog and all, without losing your search traffic.",
    fits: [
      "10 to 20 pages",
      "Sanity CMS (you edit content yourself, no developer needed)",
      "Your blog moves with 301 redirects, so Google keeps finding it",
      "2 to 4 weeks delivery",
    ],
  },
  Scale: {
    name: "Scale",
    price: "$5,000 to $10,000",
    tagline: "A headless store, custom integrations, more than 30 pages.",
    fits: [
      "30 or more pages, or 50 to 100 page sites",
      "Shopify or WooCommerce headless rebuild",
      "Custom integrations (HubSpot, Salesforce, Stripe, etc.)",
      "4 to 8 weeks delivery",
    ],
  },
  ScalePlus: {
    name: "Scale+",
    price: "$10,000+",
    tagline: "Enterprise scope, custom quote.",
    fits: [
      "100+ pages or enterprise replatform",
      "Several regions, several languages, or rules you have to meet",
      "Custom engineering: SaaS dashboards, internal tools, AI integrations",
      "We work out the timeline in discovery",
    ],
  },
};

type Step = {
  q: string;
  options: { label: string; value: "starter" | "growth" | "scale" | "scaleplus" }[];
};

const steps: Step[] = [
  {
    q: "How many pages does your site have today?",
    options: [
      { label: "Under 10 pages", value: "starter" },
      { label: "10 to 30 pages", value: "growth" },
      { label: "30 to 100 pages", value: "scale" },
      { label: "More than 100 pages", value: "scaleplus" },
    ],
  },
  {
    q: "Do you sell products online?",
    options: [
      { label: "No, brochure or service site", value: "starter" },
      { label: "Yes, a few products", value: "growth" },
      { label: "Yes, full e-commerce store", value: "scale" },
      { label: "Yes, multi-region store or B2B portal", value: "scaleplus" },
    ],
  },
  {
    q: "Do you need third-party integrations? (HubSpot, Salesforce, Stripe, etc.)",
    options: [
      { label: "No, just a contact form", value: "starter" },
      { label: "Maybe one or two", value: "growth" },
      { label: "Yes, several integrations", value: "scale" },
      { label: "Yes, complex enterprise systems", value: "scaleplus" },
    ],
  },
];

function pickTier(answers: ("starter" | "growth" | "scale" | "scaleplus")[]): Tier {
  // Take the highest tier across all answers (any "scaleplus" wins, then "scale", then "growth", then "starter")
  const rank: Record<string, number> = { starter: 0, growth: 1, scale: 2, scaleplus: 3 };
  const reverse: Tier[] = ["Starter", "Growth", "Scale", "ScalePlus"];
  const max = answers.reduce((acc, a) => Math.max(acc, rank[a]), 0);
  return reverse[max];
}

export default function TierQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<("starter" | "growth" | "scale" | "scaleplus")[]>([]);

  const isDone = step >= steps.length;
  const result = useMemo(() => (isDone ? pickTier(answers) : null), [isDone, answers]);

  function choose(value: "starter" | "growth" | "scale" | "scaleplus") {
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
          </motion.div>
        )}
      </div>
    </section>
  );
}
