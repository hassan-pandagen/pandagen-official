import { CLIENT_REVIEWS } from './reviews';

/** Source citations, not self-serving Review/AggregateRating markup. */
export function reviewCitation(id: string) {
  const review = CLIENT_REVIEWS.find(entry => entry.id === id);
  if (!review) throw new Error(`Missing review evidence: ${id}`);
  return {
    '@type': 'CreativeWork',
    name: `${review.name}: client review on ${review.platform}`,
    url: review.href,
    author: { '@type': 'Person', name: review.name.split(',')[0] },
    publisher: { '@type': 'Organization', name: review.platform },
    ...(review.publishedOn ? { datePublished: review.publishedOn } : {}),
    text: review.quote,
  };
}

export const projectReviewCitations = CLIENT_REVIEWS
  .filter(review => review.caseStudy)
  .map(review => reviewCitation(review.id));
