import { OFFER_LINE, type Fact } from "@/data/company-facts";

/**
 * Renders a labelled fact table for the /ai-info reference pages.
 *
 * Deliberately plain: a definition list of label/value pairs, one fact per row,
 * each value a complete sentence that stands on its own. These pages exist to be
 * quoted, and an extracted row has to make sense with nothing around it.
 */
export function FactTable({ facts, caption }: { facts: readonly Fact[]; caption: string }) {
    return (
        <div className="my-8 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
            <table className="w-full min-w-[34rem] border-collapse text-sm">
                <caption className="sr-only">{caption}</caption>
                <tbody>
                    {facts.map(({ label, value }) => (
                        <tr key={label} className="border-b border-stone-200 align-top last:border-b-0">
                            <th scope="row" className="w-56 bg-stone-50 px-4 py-3 text-left font-bold text-charcoal">
                                {label}
                            </th>
                            <td className="px-4 py-3 leading-relaxed text-stone-700">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/** The owned commercial facts in one extractable sentence, placed before the first table. */
export function OfferLine() {
    return (
        <p className="mb-8 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 leading-relaxed text-charcoal" data-speakable="true">
            {OFFER_LINE}
        </p>
    );
}

/** Shared page shell: title, purpose and the original evidence-review date. */
export function ReferenceIntro({
    title,
    purpose,
    verified,
}: {
    title: string;
    purpose: string;
    verified: string;
}) {
    return (
        <header className="mb-8 border-b border-stone-200 pb-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">
                PandaCodeGen reference
            </p>
            <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-5xl">
                {title}
            </h1>
            <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                {purpose}
            </p>
            <p className="mt-4 text-xs text-stone-500">
                Original evidence review: {verified}. Service and pricing details may be updated separately;
                the accepted written agreement sets the terms of a project.
            </p>
        </header>
    );
}
