/**
 * The two assessment descriptions shared between platform migration pages.
 *
 * These sentences were typed identically into /services/wix and
 * /services/squarespace. They are not platform-specific: auditing rendering and
 * indexability, or reviewing crawlability and entity clarity, is the same work
 * whichever builder the site is leaving. So they live in one place, and a
 * correction to either reaches both pages.
 *
 * Only the genuinely shared ones are here. Everything platform-specific — plan
 * costs, workflow fit, export limits — stays on its own page, because a service
 * page whose every line is shared is the near-duplicate problem this is meant to
 * reduce rather than create.
 *
 * BOTH STRINGS ARE VERBATIM FROM THE PAGES. I first wrote them from memory of a
 * truncated audit report and got both tails wrong: "ranking, and rich results"
 * for what is actually "and rankings", and "controlled by those systems" for
 * "controlled by third parties". The replacement silently matched nothing, which
 * is the only reason it was caught. Copy these from source, never retype them.
 *
 * Each carries its own limit clause, and that wording must survive any edit:
 * neither promises an outcome a search engine or an AI system controls.
 */

export const SEARCH_IMPLEMENTATION_AUDIT =
    'Audit rendering, indexability, canonicals, metadata, content, internal links, redirects, and structured data. Search engines control crawling, indexing, and rankings.';

export const AI_DISCOVERABILITY_AUDIT =
    'Review crawlability, entity clarity, structured data, content quality, and source credibility. Inclusion and citation by AI systems remain controlled by third parties.';
