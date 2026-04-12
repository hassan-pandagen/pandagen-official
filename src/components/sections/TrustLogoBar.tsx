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
      style={{ minHeight: "72px", contain: "layout style" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-stretch divide-x divide-gray-200">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="flex-1 flex flex-col items-center justify-center py-5 px-4 text-center"
              style={{ minHeight: "72px" }}
            >
              <div
                className="text-2xl md:text-3xl font-black text-charcoal tracking-tight leading-none mb-1"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", lineHeight: 1, fontWeight: 900, letterSpacing: "-0.025em" }}
              >
                {point.value}
              </div>
              <div
                className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold"
                style={{ fontSize: "10px", lineHeight: 1.2, letterSpacing: "0.1em", fontWeight: 600 }}
              >
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
