import raw from './spec-facts.json';

/*
 * Notes on spec-facts.json, moved here from its "$comment" key on 30 Sep 2026.
 * The JSON is bundled into browser code wherever a client component
 * imports this module, so anything in the JSON, notes included, ships to
 * the browser. A comment here does not. Keep notes here, not in the JSON.
 *
 * THIRD-PARTY PLATFORM SPECS, each with the date it was last verified.
 *
 * WHY THIS FILE EXISTS. 49% of this site's search impressions are year-qualified
 * queries ('vercel free tier bandwidth 100gb 2025', '...limit 100gb 2026'). In the
 * Vercel cluster it is 69%. Half the demand is explicitly asking AS OF WHEN, and
 * the page answering it dated 17 of its 319 sentences. A spec sentence that does
 * not carry its own date cannot be lifted into an answer as a dateable fact.
 *
 * WHY IT IS DATA AND NOT PROSE. Writing 'as of August 2026' inline fifty times is
 * prose-carried fact-state: the same class that produced the PageSpeed drift and
 * the fabricated 95 on /services/ecommerce. Typed once, rendered everywhere, one
 * edit moves every date on the page.
 *
 * THESE ARE OTHER COMPANIES' NUMBERS. We do not control them and they change
 * without notice. Every value here must be read off the vendor's own published
 * page and carry the URL it came from. Never carry a value forward on memory.
 *
 * ENFORCEMENT. scripts/spec_freshness.py warns at 90 days and FAILS the build at
 * 180. A stale third-party price presented as current is the same defect class as
 * a withdrawn metric that keeps rendering. Since 4 Oct 2026 an entry can set
 * "reviewDays" to change its clock (warn at reviewDays, fail at twice that):
 * Vercel is on 30, Shopify and Webflow prices on 60. The reasons for each tier
 * are in the script's docstring.
 */

/**
 * Typed access to third-party platform specs.
 *
 * The data lives in spec-facts.json so the render path and
 * scripts/spec_freshness.py read the same bytes — the same reason
 * case-study-facts.json is a JSON file rather than a .ts module.
 *
 * USE THIS INSTEAD OF TYPING A VENDOR'S NUMBER INTO A SENTENCE. A spec typed
 * into prose has no verified-at date attached to it, so nobody can tell whether
 * it is current, and it silently becomes wrong the day the vendor changes it.
 */

export interface SpecFact {
    vendor: string;
    plan?: string;
    label: string;
    value: string;
    /** The caveat that makes the number honest. Rendered with it, never dropped. */
    qualifier?: string;
    /** ISO date this value was last read off the vendor's own page. */
    verifiedAt: string;
    /** Days before scripts/spec_freshness.py warns (it fails at twice this). Default 90. */
    reviewDays?: number;
    /** The vendor URL it was read from. */
    source: string;
}

const SPECS = raw.specs as unknown as Record<string, SpecFact>;

export function spec(id: string): SpecFact {
    const found = SPECS[id];
    if (!found) {
        throw new Error(
            `No spec fact "${id}" in spec-facts.json. Add it there with a value, a ` +
            `verifiedAt date and the vendor URL — do not type the number into the page.`
        );
    }
    return found;
}

export function allSpecIds(): string[] {
    return Object.keys(SPECS);
}

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * "August 2026" — month precision on purpose.
 *
 * A day-precise date on someone else's pricing implies we re-check daily. Month
 * precision is the honest resolution for a fact verified once and re-checked on
 * a cycle, and it matches how the year-qualified queries are actually phrased.
 */
export function asOf(id: string): string {
    const [y, m] = spec(id).verifiedAt.split('-');
    return `${MONTHS[Number(m) - 1]} ${y}`;
}

/**
 * A complete, self-contained, liftable sentence fragment:
 * "Vercel's Hobby plan includes up to 100 GB a month of Fast Data Transfer, as of August 2026"
 *
 * Built so that an answer engine quoting this one fragment carries the vendor,
 * the plan, the number AND the date — which is the whole point. A fragment that
 * loses its date on extraction is a fact nobody can check.
 */
export function datedFact(id: string): string {
    const s = spec(id);
    const subject = s.plan ? `${s.vendor}'s ${s.plan} plan` : s.vendor;
    return `${subject} ${s.label.toLowerCase()} is ${s.value}, as of ${asOf(id)}`;
}

/** Days since a spec was verified, for freshness reporting. */
export function ageInDays(id: string, today = new Date()): number {
    const then = new Date(spec(id).verifiedAt + 'T00:00:00Z');
    return Math.floor((today.getTime() - then.getTime()) / 86_400_000);
}
