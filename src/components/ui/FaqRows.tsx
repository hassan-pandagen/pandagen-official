export type FaqRow = { question: string; answer: string };

/** Visible question and answer rows used across the site. */
export default function FaqRows({ faqs, className = "" }: { faqs: FaqRow[]; className?: string }) {
  return (
    <dl className={`border-t border-stone-300 ${className}`}>
      {faqs.map((faq, index) => (
        <div key={faq.question} className="grid gap-3 border-b border-stone-300 py-6 md:grid-cols-12 md:gap-8 md:py-8">
          <dt className="md:col-span-5">
            <span className="block font-mono text-xs tracking-[0.12em] text-cognac">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 block text-xl font-bold leading-tight text-charcoal md:text-2xl">
              {faq.question}
            </span>
          </dt>
          <dd className="max-w-2xl text-base leading-7 text-stone-700 md:col-span-6 md:col-start-7 md:text-[17px]">
            {faq.answer}
          </dd>
        </div>
      ))}
    </dl>
  );
}
