import { otherReviews } from "@/data/reviews";
import ReviewerAvatar from "@/components/ui/ReviewerAvatar";

/**
 * Compact review strip for a case-study page.
 *
 * Shows the other clients' reviews as short snippets, skipping whichever review
 * is already featured in full further up the same page. Every card links to the
 * source so a reader can check it, which is the only reason a testimonial on a
 * company's own site is worth anything.
 *
 * Deliberately NOT marked up as Review schema. Google does not support
 * self-serving review rich results (a business marking up reviews of itself),
 * so it would earn nothing, and an aggregate rating is the claim class this site
 * removed in July.
 */
export default function OtherReviews({ excludeId }: { excludeId: string }) {
    const reviews = otherReviews(excludeId);
    if (reviews.length === 0) return null;

    return (
        <section className="mb-14" aria-labelledby="other-reviews-heading">
            <h2 id="other-reviews-heading" className="mb-4 text-2xl font-bold text-charcoal">
                What other clients said
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-stone-600">
                Different projects, different people. Each one links to the review on Trustpilot so you can
                read it in full rather than take the excerpt on trust.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
                {reviews.map(({ id, snippet, name, platform, date, href, photo }) => (
                    <figure key={id} className="flex flex-col rounded-xl border border-stone-200 bg-stone-50 p-5">
                        <div className="mb-3 flex items-center gap-3">
                            <ReviewerAvatar name={name} photo={photo} size={40} />
                            <span className="text-sm tracking-widest text-cognac" aria-hidden="true">★★★★★</span>
                        </div>
                        <blockquote className="grow text-sm leading-relaxed text-stone-700">
                            &ldquo;{snippet}&rdquo;
                        </blockquote>
                        <figcaption className="mt-4 text-xs text-stone-500">
                            {name},{" "}
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                            >
                                {platform}
                            </a>
                            , {date}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
