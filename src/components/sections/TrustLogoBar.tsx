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
      style={{ contain: "layout", containIntrinsicSize: "0 96px" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-stretch divide-x divide-gray-200">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="flex-1 flex flex-col items-center justify-center py-5 px-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-charcoal tracking-tight leading-none mb-1">
                {point.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
