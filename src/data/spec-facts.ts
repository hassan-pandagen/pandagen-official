import raw from './spec-facts.json';

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
