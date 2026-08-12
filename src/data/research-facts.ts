import raw from './research-facts.json';

/**
 * Typed access to third-party research findings we cite.
 *
 * WHY THIS IS NOT spec-facts.ts
 * That module holds vendor pricing and limits on a 90/180-day staleness clock,
 * because a vendor can change a price this afternoon. A published study does not
 * decay on a clock; it is superseded when the next edition appears. Same
 * discipline, different lifecycle.
 *
 * USE cite() FOR ANYTHING THAT GOES ON A PAGE. It returns the statement with the
 * publisher and year attached, so a figure cannot be rendered stripped of its
 * source. An unattributed statistic is the exact thing the July remediation
 * removed from this site.
 */

export interface ResearchFinding {
    study: string;
    publisher: string;
    /** The headline number, for a stat tile. */
    value: string;
    /** The full claim, as the source supports it. Never shortened on a page. */
    statement: string;
    /** Editorial guidance: what this does and does not license us to say. */
    note?: string;
    method: string;
    /** What the finding cannot show. Renders with it wherever there is room. */
    limitation: string;
    publishedYear: string;
    verifiedAt: string;
    source: string;
}

const FINDINGS = raw.findings as unknown as Record<string, ResearchFinding>;

export function finding(id: string): ResearchFinding {
    const found = FINDINGS[id];
    if (!found) {
        throw new Error(
            `No research finding "${id}" in research-facts.json. Add it there with a ` +
            `method, a limitation and the source URL — do not type the figure into a page.`
        );
    }
    return found;
}

export function allFindingIds(): string[] {
    return Object.keys(FINDINGS);
}

/**
 * The statement with its attribution, ready to render.
 *
 * "95.9% of the top one million home pages had detected WCAG 2 failures, up from
 *  94.8% in 2025 (The WebAIM Million 2026, WebAIM)"
 */
export function cite(id: string): string {
    const f = finding(id);
    return `${f.statement} (${f.study}, ${f.publisher.split(',')[0]})`;
}

/** Age in days, so a yearly study can be re-checked when its next edition is due. */
export function findingAgeInDays(id: string, today = new Date()): number {
    const then = new Date(finding(id).verifiedAt + 'T00:00:00Z');
    return Math.floor((today.getTime() - then.getTime()) / 86_400_000);
}
