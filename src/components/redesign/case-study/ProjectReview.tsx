import { CLIENT_REVIEWS } from '@/data/reviews';
import { BODY, DISPLAY, T } from '@/components/redesign/tokens';
import WorkCaseLabel from './WorkCaseLabel';

export default function ProjectReview({ project }: { project: string }) {
  const review = CLIENT_REVIEWS.find(entry => entry.id === project);
  if (!review?.caseStudy) return null;
  return (
    <section id="client-review" aria-labelledby="client-review-heading" className="px-6 py-10 md:px-10 md:py-16" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1100px]">
        <WorkCaseLabel className="mb-3">Client feedback</WorkCaseLabel>
        <h2 id="client-review-heading" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)' }}>In the client&apos;s words</h2>
        <figure className="mt-6 border-l-4 pl-5 md:pl-8" style={{ borderColor: T.accentText }}>
          <blockquote className="max-w-[44rem] text-[23px] leading-relaxed md:text-[28px]" style={{ fontFamily: BODY, color: T.ink }}>&ldquo;{review.quote}&rdquo;</blockquote>
          <figcaption className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px]" style={{ color: T.body }}>
            <span className="font-semibold">{review.name}</span>
            <a href={review.href} className="underline underline-offset-4" style={{ color: T.accentText }}>{review.platform}, {review.date}</a>
            {review.websiteUrl && <a href={review.websiteUrl} className="underline underline-offset-4" style={{ color: T.accentText }}>Visit {review.websiteName}</a>}
          </figcaption>
        </figure>
        {review.outcomes && <p className="mt-6 max-w-[52rem] text-[16px] leading-relaxed" style={{ color: T.body }}>{review.outcomes}</p>}
      </div>
    </section>
  );
}
