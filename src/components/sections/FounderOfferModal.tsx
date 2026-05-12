"use client";

import { useEffect, useState, useRef } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

const STORAGE_KEY = "founder_modal_dismissed";
const TRIGGER_DELAY = 30000;

export default function FounderOfferModal() {
  return null;
}

function FounderOfferModalDisabled() {
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
    <div className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
      {/* Blurred backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Scroll container - ensures modal is always reachable even on short viewports */}
      <div className="relative min-h-full flex items-start md:items-center justify-center p-4 pt-8 pb-16 md:py-8">

        {/* Floating close button - always visible, always tappable */}
        <button
          onClick={dismiss}
          className="fixed top-4 right-4 z-[10000] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal card */}
        <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">

          {/* Top accent strip */}
          <div className="h-1 w-full bg-gradient-to-r from-cognac via-amber-500 to-cognac" />

          {/* Card body */}
          <div className="bg-[#151210] border border-white/10 rounded-b-2xl px-6 py-6">

            {submitted ? (
              <div className="py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-cognac/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-cognac" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Application received.</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We will review your site and reply within a few hours.
                </p>
              </div>
            ) : (
              <>
                {/* Scarcity badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cognac/30 bg-cognac/10 text-[11px] font-bold uppercase tracking-widest text-cognac mb-4">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cognac opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cognac" />
                  </span>
                  2 Spots Left · April
                </div>

                {/* Price */}
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-black text-white leading-none">$500</span>
                  <div className="pb-1">
                    <div className="text-white/40 line-through text-sm">$5,000+</div>
                    <div className="text-cognac text-xs font-semibold">Full Next.js migration</div>
                  </div>
                </div>

                {/* Single clear value prop */}
                <p className="text-white text-sm leading-relaxed mb-5">
                  3 businesses a month get their site rebuilt for <span className="font-bold">$500 in exchange for an honest review</span>. Custom Next.js, 95+ PageSpeed, 1-week delivery. You own the code.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-500 focus:outline-none focus:border-cognac/60 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-500 focus:outline-none focus:border-cognac/60 transition-colors"
                  />
                  <input
                    type="url"
                    placeholder="Your website URL"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-500 focus:outline-none focus:border-cognac/60 transition-colors"
                  />

                  {error && <p className="text-red-400 text-xs">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-cognac text-white font-bold rounded-xl text-sm hover:bg-amber-700 transition-all disabled:opacity-60 mt-1 active:scale-[0.99]"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      "Apply for a Spot"
                    )}
                  </button>
                </form>

                <p className="text-center text-white/40 text-[11px] mt-3">
                  Reply within a few hours. Not a fit? We will tell you straight.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
