import raw from './first-party-measurements.json';

/**
 * Typed access to measurements we took ourselves.
 *
 * WHY THIS IS NEITHER spec-facts.ts NOR research-facts.ts
 * spec-facts holds other companies' prices on a 90/180-day staleness clock.
 * research-facts holds published studies, superseded by their next edition.
 * A measurement we took on a stated date is true of that date permanently, and
 * becomes misleading the moment it is rendered as current. Three lifecycles,
 * three files.
 *
 * USE measure() FOR ANYTHING THAT GOES ON A PAGE. It returns the statement with
 * the window and, where the subject is founder-affiliated, the affiliation
 * attached. A first-party figure rendered without its date and its affiliation
 * is marketing wearing a number, and the July audit named that as this site's
 * first entity liability.
 */

export interface FirstPartyMeasurement {
    /** Headline figure, for a stat tile. Never rendered alone. */
    headline: string;
    /** The full claim, exactly as the measurement supports it. */
    statement: string;
    detail?: Record<string, unknown>;
    /** What took the measurement. Named on the page, always. */
    instrument: string;
    /** The dates measured. Not "recently". */
    window: string;
    /** How subjects were chosen, where that could bias the result. */
    sampling?: string;
    /** Editorial guidance: what this does and does not license us to say. */
    note?: string;
    /** What it cannot show. Renders with it wherever there is room. */
    limitation: string;
    /** True when we own or the founders own the subject. */
    affiliated: boolean;
    affiliationNote?: string;
    verifiedAt: string;
    source: string;
}

const MEASUREMENTS = raw.measurements as unknown as Record<string, FirstPartyMeasurement>;

export function measure(id: string): FirstPartyMeasurement {
    const found = MEASUREMENTS[id];
    if (!found) {
        throw new Error(
            `No measurement "${id}" in first-party-measurements.json. Add it there ` +
            `with an instrument, a window and a limitation — do not type the figure ` +
            `into a page.`
        );
    }
    return found;
}

export function allMeasurementIds(): string[] {
    return Object.keys(MEASUREMENTS);
}

/**
 * The statement with its window, and its affiliation when there is one.
 *
 * "AI assistants produced $11,186.59 across 36 orders in August 2026 ...
 *  (measured 1 to 31 August 2026, founder-owned store)"
 */
export function state(id: string): string {
    const m = measure(id);
    const affiliation = m.affiliated ? ', founder-owned' : '';
    return `${m.statement} (measured ${m.window}${affiliation})`;
}

/**
 * Age in days. Unlike a vendor spec these do not expire, but a measurement
 * presented as the current state of the world does. Use this to decide whether a
 * page needs a fresh run before it is republished.
 */
export function measurementAgeInDays(id: string, today = new Date()): number {
    const then = new Date(measure(id).verifiedAt + 'T00:00:00Z');
    return Math.floor((today.getTime() - then.getTime()) / 86_400_000);
}
