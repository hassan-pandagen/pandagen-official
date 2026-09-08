"use client";

/**
 * The three partnership models, with their actual commercial terms.
 *
 * WHY THIS EXISTS RATHER THAN REUSING PricingTiers
 * /partners was passing PricingTiers three fully differentiated models — 15%
 * commission, 35% margin, a 50/50 split, each with its own fit and inclusions —
 * and PricingTiers discarded all of it. It was deliberately gutted on 4 Aug 2026
 * during the claim remediation and now renders a shared generic list plus one
 * hardcoded sentence for every tier. That was the right call for what it was
 * fixing, and it is still the right call for the service pages that use it.
 *
 * The side effect on /partners was severe: an agency owner comparing three ways
 * to work with us saw three identical cards. The page could not do its only job.
 *
 * WHAT IS SAFE TO PUBLISH HERE, AND WHY
 * A commission rate is an OFFER, not an outcome. It is the same class of fact as
 * the "Starter from $1,500" already published on /pricing and in llms.txt: a
 * number we control and honour, not a result we predict. That is categorically
 * different from the two things PricingTiers was stripped of —
 *   - competitor hourly rates, which are unverifiable claims about third parties
 *   - promotional headings ("All transparent. All published.")
 * Neither is reintroduced here, and neither should be.
 *
 * The accepted written terms still control everything, which the footnote says
 * plainly rather than in small print.
 *
 * No icons. The rate is the visual.
 */

export interface PartnerModel {
    name: string;
    /** The commercial term. Set large — it is what the reader came for. */
    rate: string;
    /** What we ask for in return. "zero commitment", "1 project minimum". */
    commitment: string;
    /** Who this is actually for. Concrete, so the wrong reader self-selects out. */
    fit: string;
    includes: string[];
}

export default function PartnerModels({
    models,
    footnote,
}: {
    models: PartnerModel[];
    footnote: string;
}) {
    return (
        <div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-stone-300 bg-stone-300 lg:grid-cols-3">
                {models.map((m) => (
                    <div key={m.name} className="flex flex-col bg-white p-8 md:p-9">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-500">
                            {m.name}
                        </p>

                        <p className="mt-5 font-serif text-4xl italic leading-none text-cognac md:text-[2.75rem]">
                            {m.rate}
                        </p>
                        <p className="mt-3 text-sm font-semibold text-stone-600">{m.commitment}</p>

                        <div aria-hidden="true" className="my-7 h-px w-full bg-stone-200" />

                        <p className="leading-7 text-stone-700">{m.fit}</p>

                        <ul className="mt-6 space-y-3">
                            {m.includes.map((item) => (
                                <li
                                    key={item}
                                    className="border-l-2 border-cognac/25 pl-4 text-sm leading-6 text-stone-700"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-stone-600">{footnote}</p>
        </div>
    );
}
