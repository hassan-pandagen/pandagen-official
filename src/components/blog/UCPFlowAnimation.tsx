"use client";

import { useEffect, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";

type Step = "searching" | "processing" | "complete" | "idle";

const SEQUENCE: Step[] = ["searching", "processing", "complete", "idle"];
const DELAYS: Record<Step, number> = {
  searching: 2000,
  processing: 2000,
  complete: 2000,
  idle: 800,
};

export default function UCPFlowAnimation() {
  const [step, setStep] = useState<Step>("idle");

  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const advance = () => {
      index = (index + 1) % SEQUENCE.length;
      const next = SEQUENCE[index];
      setStep(next);
      timer = setTimeout(advance, DELAYS[next]);
    };

    timer = setTimeout(advance, 600);
    return () => clearTimeout(timer);
  }, []);

  const isSearching = step === "searching";
  const isProcessing = step === "processing";
  const isComplete = step === "complete";

  return (
    <>
      <style>{`
        @keyframes ucpDot1 {
          0%   { transform: translateX(-8px); opacity: 0; }
          6%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(500px); opacity: 0; }
        }
        @keyframes ucpDot2 {
          0%   { transform: translateX(-8px); opacity: 0; }
          6%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(500px); opacity: 0; }
        }
        @keyframes ucpPulseRing {
          0%   { transform: scale(1); opacity: 0.6; }
          50%  { transform: scale(1.12); opacity: 0; }
          100% { transform: scale(1.12); opacity: 0; }
        }
        @keyframes ucpBadgePop {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          60%  { transform: scale(1.2) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes ucpLineGrow {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes ucpSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div role="img" aria-label="Interactive animation showing Google Universal Commerce Protocol: an AI assistant searching and purchasing products on behalf of a customer" className="relative w-full aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden select-none">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(234,88,12,0.04),transparent_70%)]" />

        {/* Top label */}
        <div className="absolute top-4 left-0 right-0 text-center">
          <span className="text-[9px] md:text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
            How Google UCP Works: Live Animation
          </span>
        </div>

        {/* Main flow row */}
        <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex items-center">

          {/* ── Node 1: Customer ── */}
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="relative">
              {isSearching && (
                <div
                  className="absolute inset-0 rounded-2xl bg-cognac"
                  style={{ animation: "ucpPulseRing 1s ease-out infinite" }}
                />
              )}
              <div className={`w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white border-2 flex items-center justify-center transition-all duration-500 ${
                isSearching
                  ? "border-cognac shadow-[0_0_0_3px_rgba(234,88,12,0.12)]"
                  : "border-stone-200"
              }`}>
                <Search className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-500 ${isSearching ? "text-cognac" : "text-stone-400"}`} />
              </div>
            </div>
            <span className="text-[8px] md:text-[9px] font-bold text-stone-500 uppercase tracking-widest">Customer</span>
          </div>

          {/* ── Line 1: Customer → Google ── */}
          <div className="relative flex-1 mx-2 md:mx-3 overflow-hidden">
            {/* Track */}
            <div className="h-px bg-stone-200" />
            {/* Fill overlay */}
            {isSearching && (
              <div
                className="absolute top-0 left-0 h-px bg-cognac"
                style={{ animation: "ucpLineGrow 2s linear forwards" }}
              />
            )}
            {/* Arrowhead */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-[7px] border-l-stone-300" />
            {/* Flowing dots */}
            {isSearching && [0, 350, 700].map((delay, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cognac"
                style={{ animation: `ucpDot1 1.4s ease-in-out ${delay}ms infinite` }}
              />
            ))}
            {/* Label */}
            <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
              isSearching ? "text-cognac" : "text-stone-300"
            }`}>
              AI Search
            </div>
          </div>

          {/* ── Node 2: Google AI ── */}
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="relative">
              {isProcessing && (
                <div
                  className="absolute inset-0 rounded-2xl bg-cognac"
                  style={{ animation: "ucpPulseRing 1s ease-out infinite" }}
                />
              )}
              <div className={`w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white border-2 flex items-center justify-center transition-all duration-500 ${
                isProcessing
                  ? "border-cognac shadow-[0_0_0_3px_rgba(234,88,12,0.12)]"
                  : isSearching
                  ? "border-stone-300"
                  : "border-stone-200"
              }`}>
                <span className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-500 ${
                  isProcessing ? "text-cognac" : isSearching ? "text-stone-500" : "text-stone-300"
                }`}>G</span>
              </div>
              {/* Spinning "processing" ring */}
              {isProcessing && (
                <div
                  className="absolute -inset-1 rounded-[18px] border-2 border-stone-200 border-t-cognac"
                  style={{ animation: "ucpSpin 0.8s linear infinite" }}
                />
              )}
            </div>
            <span className="text-[8px] md:text-[9px] font-bold text-stone-500 uppercase tracking-widest">Google AI</span>
          </div>

          {/* ── Line 2: Google → Store ── */}
          <div className="relative flex-1 mx-2 md:mx-3 overflow-hidden">
            <div className="h-px bg-stone-200" />
            {isProcessing && (
              <div
                className="absolute top-0 left-0 h-px bg-stone-600"
                style={{ animation: "ucpLineGrow 2s linear forwards" }}
              />
            )}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-[7px] border-l-stone-300" />
            {isProcessing && [0, 350, 700].map((delay, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-stone-600"
                style={{ animation: `ucpDot2 1.4s ease-in-out ${delay}ms infinite` }}
              />
            ))}
            <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
              isProcessing ? "text-stone-500" : "text-stone-300"
            }`}>
              UCP · Checkout
            </div>
          </div>

          {/* ── Node 3: Your Store ── */}
          <div className="flex flex-col items-center gap-1.5 shrink-0 relative">
            <div className="relative">
              {isComplete && (
                <div
                  className="absolute inset-0 rounded-2xl bg-cognac"
                  style={{ animation: "ucpPulseRing 1s ease-out infinite" }}
                />
              )}
              <div className={`w-11 h-11 md:w-14 md:h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${
                isComplete
                  ? "bg-stone-900 border-cognac shadow-[0_0_0_3px_rgba(234,88,12,0.15)]"
                  : "bg-stone-900 border-stone-700"
              }`}>
                <ShoppingCart className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-500 ${isComplete ? "text-cognac" : "text-stone-400"}`} />
              </div>
              {/* Badge */}
              {isComplete && (
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-cognac rounded-full flex items-center justify-center text-white text-[9px] md:text-[10px] font-bold shadow-md"
                  style={{ animation: "ucpBadgePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}
                >
                  ✓
                </div>
              )}
            </div>
            <span className="text-[8px] md:text-[9px] font-bold text-stone-500 uppercase tracking-widest">Your Store</span>
          </div>
        </div>

        {/* ── Status bar ── */}
        <div className="absolute bottom-4 left-0 right-0 px-6 text-center h-4">
          <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-all duration-500 ${
            isComplete   ? "text-cognac"   :
            isProcessing ? "text-stone-500" :
            isSearching  ? "text-cognac"    :
                           "text-stone-400"
          }`}>
            {isSearching  && "Customer asks Google AI for a product..."}
            {isProcessing && "Google AI queries your store via UCP protocol..."}
            {isComplete   && "✓ Purchase complete, no website visit needed"}
            {step === "idle" && "Zero-Click Commerce · Loops every 7 seconds"}
          </p>
        </div>
      </div>
    </>
  );
}
