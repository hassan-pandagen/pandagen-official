const proofPoints = [
  { value: "98+", label: "Avg PageSpeed Score" },
  { value: "<1s", label: "Avg Load Time" },
  { value: "$0", label: "Platform Fees" },
  { value: "100%", label: "Code Ownership" },
];

export default function TrustLogoBar() {
  return (
    <section
      className="border-y border-stone-200 bg-white"
      style={{ contain: "layout style" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 py-3 border-b border-stone-100 text-center">
          <span className="uppercase tracking-widest text-stone-500 font-semibold" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
            Featured in
          </span>
          <a
            href="https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif italic text-stone-600 hover:text-cognac transition-colors"
            style={{ fontSize: "clamp(0.95rem, 3vw, 1.1rem)" }}
          >
            Woman&rsquo;s World
          </a>
          <span className="text-stone-400 hidden sm:inline" style={{ fontSize: "11px" }}>
            &mdash; founder Hassan Jamal quoted as an AI expert
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {proofPoints.map((point, i) => (
            <div
              key={point.label}
              className={`flex flex-col items-center justify-center py-4 md:py-5 px-2 md:px-4 text-center ${
                i > 0 ? "md:border-l border-gray-200" : ""
              } ${i === 1 ? "border-l border-gray-200" : ""} ${
                i >= 2 ? "border-t md:border-t-0 border-gray-200" : ""
              }`}
              style={{ minHeight: "72px" }}
            >
              <div
                className="font-black text-charcoal tracking-tight leading-none mb-1"
                style={{ fontSize: "clamp(1.25rem, 5vw, 1.875rem)", lineHeight: 1, fontWeight: 900, letterSpacing: "-0.025em" }}
              >
                {point.value}
              </div>
              <div
                className="uppercase tracking-widest text-stone-500 font-semibold whitespace-nowrap"
                style={{ fontSize: "clamp(9px, 2.4vw, 10px)", lineHeight: 1.2, letterSpacing: "0.08em", fontWeight: 600 }}
              >
                {point.label}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-stone-100 py-3 text-center">
          <p className="text-xs md:text-sm text-stone-600">
            <span className="font-bold text-charcoal">Our guarantee:</span> 90+ Google PageSpeed or 100% refund. In writing.
          </p>
        </div>
      </div>
    </section>
  );
}
