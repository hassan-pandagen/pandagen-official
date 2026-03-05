"use client";

import { useEffect, useState } from "react";
import { Shield, ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";

type Phase = "scanning" | "finding" | "breached" | "contrast";
const PHASES: Phase[] = ["scanning", "finding", "breached", "contrast"];
const DELAYS: Record<Phase, number> = { scanning: 2000, finding: 2000, breached: 2000, contrast: 2500 };

const THREATS = [
  { id: "CVE-2024-4898", type: "Plugin RCE" },
  { id: "CVE-2025-0117", type: "SQL Injection" },
  { id: "CVE-2025-1204", type: "Auth Bypass" },
];

export default function SecurityShieldAnimation() {
  const [phase, setPhase] = useState<Phase>("scanning");
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const advance = () => {
      i = (i + 1) % PHASES.length;
      const next = PHASES[i];
      setPhase(next);
      if (next === "finding") {
        setRevealed(0);
        let t = 0;
        const iv = setInterval(() => { t++; setRevealed(t); if (t >= THREATS.length) clearInterval(iv); }, 500);
      }
      if (next === "scanning") setRevealed(0);
      timer = setTimeout(advance, DELAYS[next]);
    };

    timer = setTimeout(advance, DELAYS["scanning"]);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div role="img" aria-label="Interactive animation showing WordPress AI security vulnerabilities being detected, contrasted with a secure custom Next.js site" className="relative w-full aspect-[2/1] bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`
        @keyframes secShake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-3px)} 75%{transform:translateX(3px)} }
        @keyframes secReveal { from{opacity:0;transform:translateX(-6px)} to{opacity:1;transform:translateX(0)} }
        @keyframes secPing { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.5);opacity:0} }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      {/* Top label */}
      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">
          {phase === "contrast" ? "WordPress vs Custom Code: Security" : "WordPress Security Scan"}
        </span>
      </div>

      {/* Single shield phases */}
      {phase !== "contrast" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
          {/* Shield */}
          <div className="relative">
            {phase === "finding" && (
              <div className="absolute inset-0 rounded-2xl border-2 border-cognac/40"
                style={{ animation: "secPing 1.2s ease-out infinite" }} />
            )}
            <div className={`w-14 h-14 md:w-18 md:h-18 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${
              phase === "breached"
                ? "bg-stone-900 border-cognac shadow-[0_0_16px_rgba(234,88,12,0.2)]"
                : phase === "finding"
                ? "bg-stone-100 border-cognac/60"
                : "bg-stone-100 border-stone-300"
            }`} style={{ animation: phase === "breached" ? "secShake 0.4s ease-in-out infinite" : undefined }}>
              {phase === "breached"
                ? <ShieldAlert className="w-7 h-7 text-cognac" />
                : <Shield className={`w-7 h-7 transition-colors duration-500 ${phase === "finding" ? "text-cognac" : "text-stone-400"}`} />
              }
            </div>
            {(phase === "finding" || phase === "breached") && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-cognac rounded-full flex items-center justify-center text-white text-[8px] font-bold">!</div>
            )}
          </div>

          {/* Threat pills */}
          <div className="flex flex-col gap-1.5">
            {THREATS.slice(0, revealed).map((t, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-200 border-l-4 border-l-cognac rounded-lg shadow-sm"
                style={{ animation: "secReveal 0.3s ease-out forwards" }}>
                <AlertTriangle className="w-3 h-3 text-cognac shrink-0" />
                <span className="text-[9px] font-mono font-bold text-charcoal">{t.id}</span>
                <span className="text-[8px] text-stone-500 font-bold uppercase tracking-wider">{t.type}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contrast phase — side by side */}
      {phase === "contrast" && (
        <div className="absolute inset-x-5 md:inset-x-10 top-10 bottom-10 flex items-center justify-center gap-4 md:gap-8">

          {/* WordPress */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-stone-100 border-2 border-cognac flex items-center justify-center shadow-sm">
              <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-cognac" />
            </div>
            <span className="text-[8px] font-bold text-stone-500 uppercase tracking-widest">WordPress</span>
            <div className="flex flex-col gap-0.5 items-center">
              {["100K+ Plugins", "PHP Execution", "SQL Database", "Weekly CVEs"].map(l => (
                <div key={l} className="text-[7px] md:text-[8px] text-cognac font-bold flex items-center gap-1">
                  <span>✗</span> {l}
                </div>
              ))}
            </div>
          </div>

          {/* VS */}
          <div className="text-stone-300 font-bold text-xs shrink-0">VS</div>

          {/* PandaCodeGen */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-stone-900 border-2 border-stone-700 flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-stone-300" />
            </div>
            <span className="text-[8px] font-bold text-stone-500 uppercase tracking-widest">PandaCodeGen</span>
            <div className="flex flex-col gap-0.5 items-center">
              {["Static HTML", "No PHP/DB", "Zero Plugins", "No Attack Surface"].map(l => (
                <div key={l} className="text-[7px] md:text-[8px] text-charcoal font-bold flex items-center gap-1">
                  <span>✓</span> {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${
          phase === "breached" || phase === "finding" ? "text-cognac" : "text-stone-400"
        }`}>
          {phase === "scanning"  && "Scanning WordPress install, checking 50+ active plugins..."}
          {phase === "finding"   && "Vulnerabilities detected in 3 installed plugins"}
          {phase === "breached"  && "100K+ WordPress sites exposed through plugin CVEs in 2025"}
          {phase === "contrast"  && "Custom static code: zero attack surface · Nothing to exploit"}
        </p>
      </div>
    </div>
  );
}
