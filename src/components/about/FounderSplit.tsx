"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * The two founders, as the page's strongest claim rather than a pair of cards.
 *
 * "Two co-founders scope your project and two co-founders build it. There is no
 * account manager relaying messages" is the most differentiating sentence on this
 * site — it is the thing an agency with a sales layer cannot say.
 *
 * WHY THE CREDENTIALS ARE INLINE RATHER THAN BEHIND THE LINK
 * The first version showed a discipline, a name, a role and a "view profile"
 * link. Everything that made either founder credible — 77 published guides, a
 * public GitHub, a national press placement, the disclosed ownership of Panda
 * Patches — sat one click away on pages that receive almost no traffic. That is
 * friction in front of exactly the evidence a buyer is looking for on an about
 * page. The proof now renders here; the link is for people who want more, not
 * for people who want any.
 *
 * Every credential is checkable and carries its own link. "Experienced team" is
 * the kind of line this component exists to avoid.
 */

export interface FounderCredential {
    /** The fact. Concrete and countable where possible. */
    label: string;
    /** Where it can be checked. Internal or external. */
    href?: string;
    /** Set for links that leave the site. */
    external?: boolean;
}

export interface Founder {
    /** The discipline, set large. One word — "Engineering", "Architecture". */
    discipline: string;
    name: string;
    role: string;
    photo: string;
    /** What this person is actually accountable for. One sentence, concrete. */
    accountableFor: string;
    credentials: FounderCredential[];
    href: string;
}

function Credential({ c }: { c: FounderCredential }) {
    const body = <span className="leading-6">{c.label}</span>;

    if (!c.href) {
        return <li className="border-l-2 border-stone-200 pl-4 text-sm text-stone-600">{body}</li>;
    }

    const className =
        "block border-l-2 border-cognac/30 pl-4 text-sm text-stone-700 transition-colors hover:border-cognac hover:text-cognac";

    return (
        <li>
            {c.external ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {body}
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
            ) : (
                <Link href={c.href} className={className}>
                    {body}
                </Link>
            )}
        </li>
    );
}

export default function FounderSplit({ founders }: { founders: Founder[] }) {
    return (
        <div className="grid gap-px overflow-hidden rounded-3xl border border-stone-300 bg-stone-300 md:grid-cols-2">
            {founders.map((f) => (
                <div key={f.name} className="group bg-paper p-8 transition-colors hover:bg-white md:p-12">
                    <div className="flex items-start justify-between gap-6">
                        <p className="font-serif text-4xl italic leading-none text-cognac md:text-5xl">
                            {f.discipline}
                        </p>
                        <Image
                            src={f.photo}
                            alt={f.name}
                            width={72}
                            height={72}
                            className="h-16 w-16 shrink-0 rounded-full border border-stone-300 object-cover md:h-[72px] md:w-[72px]"
                        />
                    </div>

                    <div className="mt-8 h-px w-16 bg-stone-300 transition-all duration-500 group-hover:w-28 group-hover:bg-cognac/50" />

                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
                        {f.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                        {f.role}
                    </p>

                    <p className="mt-6 leading-7 text-stone-700">{f.accountableFor}</p>

                    <ul className="mt-7 space-y-3">
                        {f.credentials.map((c) => (
                            <Credential key={c.label} c={c} />
                        ))}
                    </ul>

                    <Link
                        href={f.href}
                        className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-charcoal underline decoration-stone-300 underline-offset-8 transition-colors hover:text-cognac hover:decoration-cognac"
                    >
                        Full profile
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}
