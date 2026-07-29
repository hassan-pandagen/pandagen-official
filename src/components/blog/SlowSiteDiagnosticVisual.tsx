const stages = [
  {
    label: "Network",
    detail: "Latency, connection reuse, compression",
    tone: "bg-stone-100 text-stone-700",
  },
  {
    label: "Origin",
    detail: "TTFB, caching, database and server work",
    tone: "bg-stone-100 text-stone-700",
  },
  {
    label: "Browser",
    detail: "Images, fonts, CSS, JavaScript, third parties",
    tone: "bg-orange-50 text-cognac",
  },
  {
    label: "Experience",
    detail: "LCP, INP, CLS and business outcomes",
    tone: "bg-stone-900 text-white",
  },
];

const checks = [
  ["Field data", "What real visitors experienced"],
  ["Lab trace", "Why one controlled run was slow"],
  ["Template split", "Which page groups share the issue"],
  ["Change log", "What changed before the regression"],
];

export default function SlowSiteDiagnosticVisual() {
  return (
    <section
      aria-label="Slow website diagnostic flow from network and origin through browser work and real user experience"
      className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-100/60 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-stone-200/70 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Performance diagnosis</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-charcoal sm:text-3xl">
              Find the constrained layer before choosing the fix.
            </h2>
          </div>
          <span className="w-fit rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-500">
            Evidence before rebuild
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {stages.map((stage, index) => (
            <div key={stage.label} className="relative rounded-2xl border border-stone-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${stage.tone}`}>
                  {stage.label}
                </span>
                <span aria-hidden="true" className="font-serif text-2xl italic text-stone-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-stone-600">{stage.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 rounded-2xl bg-stone-950 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {checks.map(([label, detail]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs font-bold text-white">{label}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-stone-600">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
