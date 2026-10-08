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
    rowClassName = "",
}: {
    models: PartnerModel[];
    footnote: string;
    rowClassName?: string;
}) {
    return (
        <div>
            <div className="border-t border-stone-400">
                {models.map((m, index) => (
                    <div key={m.name} className={`grid gap-5 border-b border-stone-400 py-9 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-12 md:py-12 ${rowClassName}`}>
                      <div>
                        <span className="font-mono text-xs text-cognac">0{index + 1}</span>
                        <p className="mt-4 uppercase leading-none text-charcoal" style={{ fontFamily: "var(--display), Impact, sans-serif", fontSize: "clamp(1.65rem, 2.3vw, 2.25rem)" }}>
                            {m.name}
                        </p>

                        <p className="mt-4 uppercase leading-none" style={{ fontFamily: "var(--display), Impact, sans-serif", fontSize: "clamp(2.75rem, 4vw, 4rem)", color: "#7A2E0E" }}>
                            {m.rate}
                        </p>
                        <p className="mt-4 text-base font-semibold text-charcoal">{m.commitment}</p>
                      </div>

                      <div>
                        <p className="text-lg font-medium leading-7 text-charcoal">{m.fit}</p>

                        <ul className="mt-6 divide-y divide-stone-300 border-t border-stone-300">
                            {m.includes.map((item) => (
                                <li key={item} className="py-3 text-base leading-7 text-stone-700">
                                    {item}
                                </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-stone-600">{footnote}</p>
        </div>
    );
}
