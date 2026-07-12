"use client";

import { useEffect, useState } from "react";

// Visual-semantics: topic-matched hero for the AI-built-sites-are-invisible post.
// Acts out the post's core fact: the same page looks perfect to a human browser
// (JavaScript builds it) but arrives as an empty shell to AI crawlers, which
// never execute JavaScript, so AI answers recommend the competitor instead.
// Structurally distinct from every other blog animation (browser-vs-bot split
// view + a wandering, confused crawler + AI answer card).

type Phase = "human" | "crawler" | "answer" | "fix";
const PHASES: Phase[] = ["human", "crawler", "answer", "fix"];
const DELAYS: Record<Phase, number> = { human: 2600, crawler: 3400, answer: 3000, fix: 3000 };

export default function CrawlerBlindAnimation() {
  const [phase, setPhase] = useState<Phase>("human");

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const advance = () => {
      i = (i + 1) % PHASES.length;
      setPhase(PHASES[i]);
      timer = setTimeout(advance, DELAYS[PHASES[i]]);
    };
    timer = setTimeout(advance, DELAYS["human"]);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div role="img" aria-label="Interactive animation showing that an AI-built site looks perfect to human visitors because JavaScript builds the page in the browser, but AI crawlers like GPTBot and ClaudeBot receive only an empty HTML shell because they never execute JavaScript, so ChatGPT recommends a competitor, while a server-rendered Next.js site sends full readable HTML to every crawler" className="relative w-full aspect-[4/3] sm:aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`
        @keyframes dropIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wander { 0% { transform: translateX(-30px); } 25% { transform: translateX(18px); } 50% { transform: translateX(-12px); } 75% { transform: translateX(28px); } 100% { transform: translateX(-30px); } }
        @keyframes floatUp { 0% { opacity: 0; transform: translateY(4px); } 30% { opacity: 1; } 100% { opacity: 0; transform: translateY(-14px); } }
        .drop-in { animation: dropIn 0.35s ease-out forwards; }
        .wander { animation: wander 3.2s ease-in-out infinite; }
        .float-up { animation: floatUp 1.6s ease-out infinite; }
      `}</style>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[11px] font-bold text-stone-600 uppercase tracking-[0.2em]">The Same Page, Two Very Different Visitors</span>
      </div>

      {/* Phase 1: what a human sees — JS built a beautiful page */}
      {phase === "human" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-3 px-6">
          <div className="drop-in w-56 md:w-64 bg-white border border-stone-300 rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center gap-1 px-2 py-1.5 bg-stone-100 border-b border-stone-200">
              <span className="w-2 h-2 rounded-full bg-red-300" /><span className="w-2 h-2 rounded-full bg-amber-300" /><span className="w-2 h-2 rounded-full bg-emerald-300" />
            </div>
            <div className="p-3 space-y-2">
              <div className="drop-in h-3 w-3/4 bg-charcoal/80 rounded" style={{ animationDelay: "150ms" }} />
              <div className="drop-in h-2 w-full bg-stone-200 rounded" style={{ animationDelay: "300ms" }} />
              <div className="drop-in h-2 w-5/6 bg-stone-200 rounded" style={{ animationDelay: "400ms" }} />
              <div className="flex gap-2 pt-1">
                <div className="drop-in h-10 w-1/2 bg-stone-100 border border-stone-200 rounded" style={{ animationDelay: "500ms" }} />
                <div className="drop-in flex-1 flex flex-col gap-1.5" style={{ animationDelay: "600ms" }}>
                  <div className="h-2 w-full bg-stone-200 rounded" />
                  <div className="h-5 w-16 bg-cognac rounded text-white text-[9px] font-bold flex items-center justify-center">Buy $49</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm md:text-base font-bold text-charcoal">What your visitors see</div>
          <div className="text-[11px] md:text-xs text-stone-600">Looks perfect. JavaScript built all of it, in their browser.</div>
        </div>
      )}

      {/* Phase 2: the confused crawler wandering an empty page */}
      {phase === "crawler" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-3 px-6">
          <div className="relative w-56 md:w-64 bg-white border-2 border-dashed border-stone-300 rounded-lg p-3">
            <div className="text-center font-mono text-[10px] md:text-xs text-stone-400 py-4">
              &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
            </div>
            <div className="relative h-8">
              <div className="wander absolute left-1/2 -ml-4 text-2xl md:text-3xl">🤖</div>
              <span className="float-up absolute left-1/4 top-0 text-sm font-bold text-stone-400">?</span>
              <span className="float-up absolute left-2/3 top-0 text-sm font-bold text-stone-400" style={{ animationDelay: "0.8s" }}>?</span>
            </div>
          </div>
          <div className="text-sm md:text-base font-bold text-charcoal">What GPTBot and ClaudeBot get</div>
          <div className="text-[11px] md:text-xs text-stone-600">Raw HTML only. They never run JavaScript. There is nothing here to read.</div>
        </div>
      )}

      {/* Phase 3: the consequence — the AI answer names the competitor */}
      {phase === "answer" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-3 px-6">
          <div className="drop-in w-64 md:w-72 bg-white border border-stone-300 rounded-xl shadow-sm p-3 space-y-2">
            <div className="text-[10px] md:text-[11px] text-stone-500 font-medium">&ldquo;Who should I buy this from?&rdquo;</div>
            <div className="border-t border-stone-100 pt-2 space-y-1.5">
              <div className="drop-in flex items-center gap-2" style={{ animationDelay: "300ms" }}>
                <span className="text-[10px]">✦</span>
                <span className="text-[11px] md:text-xs text-charcoal">Based on what I can read, I&apos;d recommend</span>
              </div>
              <div className="drop-in px-2.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-md text-[11px] md:text-xs font-bold text-emerald-800" style={{ animationDelay: "600ms" }}>
                Your Competitor ✓ (their site arrived readable)
              </div>
              <div className="drop-in px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-md text-[11px] md:text-xs text-stone-400 line-through" style={{ animationDelay: "900ms" }}>
                Your site (blank page, cannot cite)
              </div>
            </div>
          </div>
          <div className="text-sm md:text-base font-bold text-charcoal">AI answers are built from what crawlers could read</div>
        </div>
      )}

      {/* Phase 4: the fix — SSR sends the finished page to everyone */}
      {phase === "fix" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-2.5 px-6">
          <div className="text-[11px] font-bold text-charcoal uppercase tracking-widest">Server-rendered Next.js</div>
          <div className="drop-in flex items-end gap-1">
            <span className="text-4xl md:text-5xl font-bold text-cognac leading-none">747 KB</span>
          </div>
          <div className="text-[11px] md:text-xs text-stone-600">of readable HTML on our own homepage, before any JavaScript runs</div>
          <div className="flex flex-wrap justify-center gap-1.5 pt-1">
            {["GPTBot ✓", "ClaudeBot ✓", "PerplexityBot ✓", "Googlebot ✓"].map((b, i) => (
              <span key={b} className="drop-in px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] md:text-xs font-bold text-emerald-800" style={{ animationDelay: `${i * 150}ms` }}>{b}</span>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className={`text-[11px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${phase === "fix" ? "text-cognac" : "text-stone-600"}`}>
          {phase === "human" && "Your browser runs JavaScript, so the site looks fine to you"}
          {phase === "crawler" && "AI crawlers never run JavaScript, they read what the server sends"}
          {phase === "answer" && "Invisible pages cannot be cited, so the answer is someone else"}
          {phase === "fix" && "✓ Finished HTML for every visitor, human or bot"}
        </p>
      </div>
    </div>
  );
}
