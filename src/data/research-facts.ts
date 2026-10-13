import raw from './research-facts.json';

/*
 * Notes on research-facts.json, moved here from its "$comment" key on 30 Sep 2026.
 * The JSON is bundled into browser code wherever a client component
 * imports this module, so anything in the JSON, notes included, ships to
 * the browser. A comment here does not. Keep notes here, not in the JSON.
 *
 * THIRD-PARTY RESEARCH FINDINGS we cite, each with its source and method.
 *
 * SEPARATE FROM spec-facts.json ON PURPOSE. That file holds vendor pricing and
 * limits, which change without notice and carry a 90/180-day staleness clock.
 * These are published studies. A study does not go stale in 90 days; it is
 * superseded when the next edition appears. Different lifecycle, different file.
 * Since 4 Oct 2026 scripts/spec_freshness.py watches this file too, with a
 * longer default (warn at 180 days, fail at 360) so a new edition gets noticed.
 *
 * THE RULE. Every figure here was read off the source page and verified, not
 * taken from a research summary. Two figures in the dossier these came from
 * were nearly rejected as fabricated during verification, and both turned out
 * correct: one number coincidentally matched an unrelated row, and one differed
 * only by a thousands separator. Check against the source itself, and check
 * carefully, because a wrong rejection is as bad as a wrong acceptance.
 *
 * CORRELATION IS NOT OUR RESULT. The framework and CMS breakdowns describe
 * sites built on those technologies across a million-page sample. They are not
 * statements about work we did, and must never be written as though they were.
 * Nothing here may be phrased as evidence that our builds are more accessible.
 *
 * WHAT IS DELIBERATELY ABSENT. Anything the source did not state a method for.
 * Roughly a third of the research dossier these came from was flagged
 * UNVERIFIED METHOD by its own author; none of that is here.
 */

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
    /** Days before scripts/spec_freshness.py warns (it fails at twice this). Default 180. */
    reviewDays?: number;
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
