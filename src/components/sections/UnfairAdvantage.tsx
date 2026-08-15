const controls = [
  {
    label: "01",
    title: "Inventory before architecture",
    body: "Review URLs, content, CMS models, forms, integrations, analytics, accessibility needs, stakeholders, and cutover constraints before selecting a stack.",
  },
  {
    label: "02",
    title: "Compare total cost",
    body: "Document current and proposed platform, app, hosting, database, email, observability, payment, support, and migration costs using dated provider prices and usage assumptions.",
  },
  {
    label: "03",
    title: "Accept against written evidence",
    body: "Put deliverables, exclusions, test conditions, ownership, licensing, change control, warranty, support, remedies, and handover into the proposal.",
  },
];

export default function UnfairAdvantage() {
  return (
    <section className="bg-white py-12 text-charcoal md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Decision controls</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Make the commercial assumptions{" "}
            <span className="font-serif font-normal italic text-cognac">visible.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            A custom build is not automatically cheaper, faster, or more appropriate than a managed platform. The useful comparison is the documented scope, operating model, risk, and measurement method for this site.
          </p>
        </div>
        <div className="mt-12 grid border-t border-stone-300 md:grid-cols-3">
          {controls.map(({ label, title, body }, index) => (
            <article key={title} className={`border-b border-stone-300 p-7 md:p-9 ${index < 2 ? "md:border-r" : ""}`}>
              <span
                aria-hidden="true"
                className="block font-serif text-5xl italic leading-none text-cognac tabular-nums"
              >
                {label}
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
