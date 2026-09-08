"use client";

import Link from "next/link";

/**
 * Why this company exists.
 *
 * /about was entirely commitments, standards and governance — a terms sheet with
 * no reason for existing. Every fact on it was true and none of it answered the
 * only question an about page is asked.
 *
 * Everything here is owner-supplied, 12 Aug 2026. Nothing is inferred, and the
 * ZeptoMail and Klaviyo comparison is stated as an illustration of how we choose
 * tools rather than as a benchmark: no pricing figures are quoted, because
 * third-party prices change and would need the spec-freshness treatment. The
 * point survives without them.
 *
 * No em dashes. Standing preference.
 */

export default function OriginStory() {
    return (
        <section className="border-y border-stone-300 bg-white px-6 py-16 md:py-24" aria-labelledby="origin">
            <div className="mx-auto max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Why we exist</p>
                <h2 id="origin" className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                    We built this for our own business{" "}
                    <span className="font-serif font-normal italic text-cognac">before we sold it to anyone.</span>
                </h2>

                <div className="mt-10 space-y-6 text-lg leading-8 text-stone-700">
                    <p>
                        In November we met up after a long time. Imran was running{" "}
                        <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            Panda Patches
                        </Link>{" "}
                        on Google Sheets. Orders, production, the team, all of it held together by
                        spreadsheets and habit. Hassan suggested building a proper CRM and moving the
                        storefront onto Next.js so the team could actually work instead of maintaining
                        the tooling.
                    </p>
                    <p>
                        It worked. And having done it for ourselves, the gap was obvious: plenty of
                        businesses are carrying the same technical debt, paying for it monthly, and
                        being told it is normal. PandaCodeGen started in February 2026 to do that same
                        work for other owners.
                    </p>

                    <h3 className="pt-4 text-2xl font-bold tracking-tight text-charcoal">
                        Why we do not take referral commissions
                    </h3>
                    <p>
                        Most agencies recommend the tools that pay them. It is the same arrangement as a
                        doctor prescribing the drug whose maker sends him a cheque, and it is why so much
                        advice points at the same expensive stack regardless of the business receiving it.
                    </p>
                    <p>
                        A live example. Most small businesses sending transactional email are pushed
                        toward the large marketing platforms, billed monthly, priced for companies far
                        larger than them. For a lot of those businesses a service like ZeptoMail covers
                        the same job for a fraction of it. We will tell you that, because we take nothing
                        from either vendor. Check the current pricing yourself before you buy anything,
                        including anything we suggest.
                    </p>
                    <p>
                        Not every business is Nike. Most owners want the thing to work and the bill to
                        stay small, and that is a legitimate goal rather than a lack of ambition.
                    </p>

                    <h3 className="pt-4 text-2xl font-bold tracking-tight text-charcoal">
                        Why we hand everything over
                    </h3>
                    <p>
                        Site builders look cheap until you try to leave one. The lock-in is not in the
                        monthly price, it is in what you cannot take with you: the content model, the
                        integrations, the URLs, the years of work that only exist inside their system.
                        By the time you want out, moving feels impossible, which is exactly the position
                        the pricing was designed to create.
                    </p>
                    <p>
                        So the source code, design files, content models, documentation and production
                        accounts are yours on handover, the price is fixed before work starts, and there
                        is no monthly licence to keep your own site running. Those are terms in the
                        written agreement rather than promises on a page, because we have watched what
                        happens to people who only had the promise.
                    </p>
                </div>
            </div>
        </section>
    );
}
