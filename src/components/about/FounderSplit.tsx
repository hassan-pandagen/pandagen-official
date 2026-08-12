"use client";

import Link from "next/link";

/**
 * The two founders, as the page's strongest claim rather than a pair of cards.
 *
 * "Two co-founders scope your project and two co-founders build it. There is no
 * account manager relaying messages" is the most differentiating sentence on this
 * site — it is the thing an agency with a sales layer cannot say. It was rendered
 * as two small bordered boxes containing a role, a name and a link.
 *
 * This gives it the space it earns: the discipline set large in serif, the person
 * underneath, and one line naming what they are actually accountable for. A
 * hairline separates the two on desktop, which is the whole "split" — no avatars
 * in circles, no icons, no badges.
 *
 * The claim in the middle is not decoration either. It is the same commitment
 * that appears in the accepted project terms, which is why it can be stated
 * flatly here without hedging.
 */

export interface Founder {
    /** The discipline, set large. One word — "Engineering", "Architecture". */
    discipline: string;
    name: string;
    role: string;
    /** What this person is actually accountable for. One sentence, concrete. */
    accountableFor: string;
    href: string;
}

export default function FounderSplit({ founders }: { founders: Founder[] }) {
    return (
        <div className="grid gap-px overflow-hidden rounded-3xl border border-stone-300 bg-stone-300 md:grid-cols-2">
            {founders.map((f) => (
                <div key={f.name} className="group bg-paper p-8 transition-colors hover:bg-white md:p-12">
                    <p className="font-serif text-4xl italic leading-none text-cognac md:text-5xl">
                        {f.discipline}
                    </p>

                    <div className="mt-8 h-px w-16 bg-stone-300 transition-all duration-500 group-hover:w-28 group-hover:bg-cognac/50" />

                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
                        {f.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                        {f.role}
                    </p>

                    <p className="mt-6 leading-7 text-stone-700">{f.accountableFor}</p>

                    <Link
                        href={f.href}
                        className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-charcoal underline decoration-stone-300 underline-offset-8 transition-colors hover:text-cognac hover:decoration-cognac"
                    >
                        {f.name.split(" ")[0]}&rsquo;s profile
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}
