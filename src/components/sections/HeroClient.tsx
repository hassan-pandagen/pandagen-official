"use client";

import dynamic from "next/dynamic";

const HeroStatusPill = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroStatusPill),
  { ssr: false, loading: () => (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-stone-500 mb-8 shadow-xs">
      <span className="relative flex h-2 w-2">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
      </span>
      Accepting Q2 Clients
    </div>
  )}
);

const HeroCTAs = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroCTAs),
  { ssr: false, loading: () => (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <button className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-xl">
        Get a Free Quote
      </button>
      <a href="/work" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-charcoal text-charcoal font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-card">
        View Case Studies
      </a>
    </div>
  )}
);

const HeroTrustSignals = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroTrustSignals),
  { ssr: false }
);

export { HeroStatusPill, HeroCTAs, HeroTrustSignals };
