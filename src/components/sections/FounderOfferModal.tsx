"use client";

import { useEffect, useState, useRef } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

const STORAGE_KEY = "founder_modal_dismissed";
const TRIGGER_DELAY = 30000;

export default function FounderOfferModal() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Auto-trigger after delay (once per visitor)
    if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), TRIGGER_DELAY);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Manual trigger from "Apply for a Spot" button — always opens regardless of dismiss flag
    function handleOpen() {
      setSubmitted(false);
      setVisible(true);
    }
    window.addEventListener("openFounderModal", handleOpen);
    return () => window.removeEventListener("openFounderModal", handleOpen);
  }, []);

  function dismiss() {
    setVisible(false);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, "1");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/founder-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, website, _t: startTime.current }),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, "1");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={dismiss}
      />

      {/* Modal card */}
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">

        {/* Top accent strip */}
        <div className="h-1 w-full bg-gradient-to-r from-cognac via-amber-500 to-cognac" />

        {/* Card body */}
        <div className="bg-[#151210] border border-white/8 rounded-b-2xl">

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-stone-500 hover:text-stone-300 transition-colors z-10 bg-white/5 rounded-full p-1.5"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="px-7 pt-6 pb-5">

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-cognac/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-cognac" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Application received.</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We will review your site and get back to you within a few hours to let you know if it is a fit.
                </p>
              </div>
            ) : (
              <>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cognac/30 bg-cognac/10 text-xs font-bold uppercase tracking-widest text-cognac mb-5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cognac opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cognac" />
                  </span>
                  Limited. 2 Spots Left This Month
                </div>

                {/* Price */}
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-black text-white leading-none">$500</span>
                  <div className="pb-1">
                    <div className="text-white/40 line-through text-sm">$5,000+</div>
                    <div className="text-cognac text-xs font-semibold">Full migration</div>
                  </div>
                </div>

                {/* Copy */}
                <p className="text-white text-sm leading-relaxed mb-1">
                  We select 3 businesses each month for a discounted Next.js migration. 1 spot is already taken, 2 remaining.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-1">
                  This is not a discount for everyone. We review each site and only take projects that make a strong case study. Custom build, 95+ PageSpeed guaranteed, 1 week delivery. You own the code.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  The deal: you get the site, we document the results, you leave an honest review after launch.
                </p>

                {/* Includes */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    "Custom build, not a template",
                    "95+ PageSpeed guaranteed",
                    "Zero downtime launch",
                    "You own the code",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-white/4 rounded-lg px-3 py-2">
                      <CheckCircle2 className="w-3 h-3 text-cognac shrink-0" />
                      <span className="text-white text-xs">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-cognac/60 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-cognac/60 transition-colors"
                  />
                  <input
                    type="url"
                    placeholder="Your website URL"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                    className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-cognac/60 transition-colors"
                  />

                  {error && <p className="text-red-400 text-xs">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-cognac text-white font-bold rounded-xl text-sm hover:bg-amber-700 transition-all disabled:opacity-60 mt-1"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      "Apply for a Spot"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          <p className="text-center text-white/40 text-xs pb-4">
            We will review your site and reply within a few hours.
          </p>
        </div>
      </div>
    </div>
  );
}
