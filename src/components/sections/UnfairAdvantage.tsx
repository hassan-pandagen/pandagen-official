const controls = [
  {
    label: "01",
    title: "Look at your site before choosing anything",
    body: "We go through your pages, your content, your forms, whatever your site connects to, and your analytics. Then we recommend a build. Not the other way round.",
  },
  {
    label: "02",
    title: "Add up what you pay now",
    body: "Every plan, app, plugin and hosting bill you are paying today, next to what the new site costs to run. Real prices from real invoices, so you can see whether moving is worth it.",
  },
  {
    label: "03",
    title: "Everything in writing before you pay",
    body: "Your quote says what you get, what you do not, who owns the code, what happens if something breaks, and what support you have after launch. In writing, before you pay.",
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
