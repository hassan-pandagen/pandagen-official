/**
 * Every client review published on the site, declared once.
 *
 * Reviews were previously written inline in SocialProof.tsx. They now appear in
 * more than one place (home page, case-study pages), and a quote that drifts
 * between two locations is a worse problem than a duplicated fact, because the
 * reviewer actually said one specific thing.
 *
 * RULES
 * 1. `quote` is verbatim from the review. Do not tidy grammar, do not shorten it
 *    here. If a shorter pull is needed, add it as `snippet` and keep both.
 * 2. `id` maps to the case study the reviewer's project belongs to, where one
 *    exists. It is used to avoid showing someone their own review twice on the
 *    same page.
 * 3. NO aggregate rating anywhere. Individual named reviews with a link to the
 *    source are checkable; a computed average is the claim class the July
 *    remediation removed. See src/app/ai-info for the standing rule.
 */

export interface ClientReview {
    /** Stable key, and the /work slug when the reviewer has a case study. */
    id: string;
    /** Verbatim from the source platform. Never tidied, never paraphrased. */
    quote: string;
    /** A shorter pull for compact strips. Must say the same thing as `quote`, never a paraphrase that changes it. */
    snippet: string;
    name: string;
    platform: string;
    date: string;
    href: string;
}

export const CLIENT_REVIEWS: readonly ClientReview[] = [
    {
        id: 'ladies-4-jesus',
        quote: 'I was hesitant to use them at first because the price seemed more than reasonable and I had never heard of them but I am so glad I chose to work with them.',
        snippet: 'I was hesitant at first because the price seemed more than reasonable and I had never heard of them. I am so glad I chose to work with them.',
        name: 'Etoy McDaniel',
        platform: 'Trustpilot',
        date: 'August 2026',
        href: 'https://www.trustpilot.com/review/pandacodegen.com',
    },
    {
        id: 'emblematic-studio',
        quote: "It looks premium, loads fast, and perfectly captures Emblematic Studio's brand.",
        snippet: "It looks premium, loads fast, and perfectly captures Emblematic Studio's brand.",
        name: 'Waqas Ahmed',
        platform: 'Trustpilot',
        date: 'August 2026',
        href: 'https://www.trustpilot.com/review/pandacodegen.com',
    },
    {
        id: 'marshall-james',
        quote: 'Hassan was super helpful and communicative throughout the process.',
        snippet: 'Hassan was super helpful and communicative throughout the process.',
        name: 'Marshall James',
        platform: 'Trustpilot',
        date: 'March 2026',
        href: 'https://www.trustpilot.com/review/pandacodegen.com',
    },
    {
        id: 'james-peace',
        quote: 'They worked with me to make a website that I could afford.',
        snippet: 'They worked with me to make a website that I could afford.',
        name: 'James Peace',
        platform: 'Trustpilot',
        date: 'March 2026',
        href: 'https://www.trustpilot.com/review/pandacodegen.com',
    },
    {
        // The MyCustomPatches review. Named with the reviewer's permission,
        // confirmed by the owner on 10 Aug 2026.
        //
        // NOTE FOR WHOEVER CHECKS THIS: Clutch currently publishes this reviewer
        // as "Anonymous", so the linked page shows a role and company rather than
        // a name. The name here is authorised directly by him, not read off
        // Clutch. If he updates his Clutch profile to show it, the two agree and
        // this note can go. If he ever withdraws it, the name comes off here
        // first -- consent is the reason it is published, not the link.
        id: 'mycustompatches',
        quote: 'Hassan was available to me at any time, and his response time was always less than an hour. And he suggested me to go route that will help me in business i.e. Seo, UI, UX etc',
        snippet: 'Hassan was available to me at any time, and his response time was always less than an hour.',
        name: 'Matt Conner, owner, MC Patches LLC',
        platform: 'Clutch',
        date: 'March 2026',
        href: 'https://clutch.co/profile/panda-code-gen#reviews',
    },
];

/** Everything except the review already featured in full on the current page. */
export function otherReviews(excludeId: string): readonly ClientReview[] {
    return CLIENT_REVIEWS.filter(r => r.id !== excludeId);
}
