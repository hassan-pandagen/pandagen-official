import Link from 'next/link';
import { CLIENT_REVIEWS } from '@/data/reviews';

export default function ClientReviewEvidence() {
  return (
    <section id="client-reviews" aria-labelledby="client-reviews-title" className="my-10">
      <h2 id="client-reviews-title" className="mb-3 text-2xl font-bold text-charcoal">Named client reviews</h2>
      <p className="mb-5 leading-relaxed text-stone-700">Individual client accounts of our work, with the corresponding project and source. Delivery details below are attributed to the reviewer.</p>
      <div className="space-y-4">
        {CLIENT_REVIEWS.filter(review => review.caseStudy).map(review => (
          <figure key={review.id} className="rounded-xl border border-stone-200 p-5">
            <blockquote className="text-lg leading-relaxed text-charcoal">&ldquo;{review.quote}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm leading-relaxed text-stone-700">
              <span className="font-semibold">{review.name}</span>{' · '}
              <a href={review.href} className="text-cognac underline underline-offset-4">{review.platform}, {review.date}</a>{' · '}
              <Link href={review.caseStudy!} className="text-cognac underline underline-offset-4">View the project</Link>
              {review.websiteUrl && <>{' · '}<a href={review.websiteUrl} className="text-cognac underline underline-offset-4">Client website</a></>}
            </figcaption>
            {review.outcomes && <p className="mt-3 text-sm leading-relaxed text-stone-700">{review.outcomes}</p>}
          </figure>
        ))}
      </div>
    </section>
  );
}
