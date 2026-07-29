import { FileCheck2, ListChecks, Receipt } from "lucide-react";

const controls = [
  {
    icon: ListChecks,
    label: "01",
    title: "Inventory before architecture",
    body: "Review URLs, content, CMS models, forms, integrations, analytics, accessibility needs, stakeholders, and cutover constraints before selecting a stack.",
  },
  {
    icon: Receipt,
    label: "02",
    title: "Compare total cost",
    body: "Document current and proposed platform, app, hosting, database, email, observability, payment, support, and migration costs using dated provider prices and usage assumptions.",
  },
  {
    icon: FileCheck2,
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
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Make the commercial assumptions visible.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            A custom build is not automatically cheaper, faster, or more appropriate than a managed platform. The useful comparison is the documented scope, operating model, risk, and measurement method for this site.
          </p>
        </div>
        <div className="mt-12 grid border-t border-stone-300 md:grid-cols-3">
          {controls.map(({ icon: Icon, label, title, body }, index) => (
            <article key={title} className={`border-b border-stone-300 p-7 md:p-9 ${index < 2 ? "md:border-r" : ""}`}>
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-cognac" aria-hidden="true" />
                <span className="font-mono text-sm text-stone-600">{label}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
