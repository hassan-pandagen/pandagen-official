"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { CLIENT_REVIEWS, type ClientReview } from "@/data/reviews";

/**
 * Rotating review stack.
 *
 * WHY IT USES `snippet` AND NOT `quote`
 * The cards are a fixed square, so the text has to fit a known box. reviews.ts
 * exists for exactly this: `quote` is verbatim and must never be shortened,
 * `snippet` is the shorter pull kept alongside it. Anything that needs the full
 * wording links out to the review itself, which every card does.
 *
 * NO PHOTOGRAPHS, DELIBERATELY
 * The component this is modelled on is avatar-led. `photo` is set on 0 of 5
 * reviews because a review grants no rights to someone's image, and stock or
 * generated faces beside a real name is the one thing this site must never do.
 * Removing the image is not a downgrade here; it is the only honest version.
 *
 * ACCESSIBILITY, WHICH IS THE USUAL COST OF A CAROUSEL
 * The site reports zero detected violations on 136 pages and a carousel is the
 * most reliable way to lose that. So:
 *   - Only the centre card is exposed. The fanned cards behind it are
 *     `aria-hidden` and carry no focusable content, because a screen reader
 *     reading five overlapping quotes in DOM order is worse than reading one.
 *   - The centre card sits in a polite live region, so moving the stack
 *     announces the new review instead of changing silently.
 *   - Previous and next are real buttons with labels, and left/right arrow keys
 *     work when focus is inside the region.
 *   - Clicking a background card is a mouse affordance only. The buttons and the
 *     arrow keys give keyboard users the same capability, which is what makes
 *     the click handler acceptable on a non-focusable element.
 *   - Transitions are disabled under prefers-reduced-motion. A stack of cards
 *     sliding across the viewport is exactly the motion that setting exists for.
 */

const CARD_DESKTOP = 340;
const CARD_MOBILE = 268;

interface CardProps {
    review: ClientReview;
    position: number;
    cardSize: number;
    reduceMotion: boolean;
    onSelect: (steps: number) => void;
}

function ReviewCard({ review, position, cardSize, reduceMotion, onSelect }: CardProps) {
    const isCentre = position === 0;
    return (
        <div
            aria-hidden={!isCentre}
            onClick={() => !isCentre && onSelect(position)}
            className={cn(
                "absolute left-1/2 top-1/2 flex flex-col rounded-[1.75rem] border p-6 md:p-7",
                reduceMotion ? "" : "transition-all duration-500 ease-in-out",
                isCentre
                    ? "z-10 border-charcoal bg-charcoal text-white shadow-2xl shadow-charcoal/20"
                    : "z-0 cursor-pointer border-stone-300 bg-white text-charcoal hover:border-cognac/40"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                transform: `translate(-50%, -50%) translateX(${(cardSize / 1.55) * position}px) translateY(${
                    isCentre ? -12 : position % 2 ? 14 : -14
                }px) rotate(${isCentre ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
                opacity: Math.abs(position) > 2 ? 0 : 1,
            }}
        >
            <Quote
                className={cn("h-5 w-5 shrink-0", isCentre ? "text-cognac-light" : "text-cognac")}
                aria-hidden="true"
            />
            {/* Centred in the free space rather than pinned to the top. The cards
                are a fixed square and the snippets are not the same length, so a
                short one left an obvious hole above the caption. */}
            <blockquote
                className={cn(
                    "flex flex-1 items-center font-serif italic leading-snug",
                    cardSize > 300 ? "text-lg" : "text-base",
                    isCentre ? "text-white" : "text-charcoal"
                )}
            >
                <span>{review.snippet}</span>
            </blockquote>
            <figcaption
                className={cn(
                    "mt-4 border-t pt-3 text-sm",
                    isCentre ? "border-white/20" : "border-stone-200"
                )}
            >
                {isCentre ? (
                    <a
                        href={review.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-[#ffc2a6] hover:text-white"
                    >
                        {review.name} on {review.platform}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                ) : (
                    <span className="font-bold text-cognac">
                        {review.name} on {review.platform}
                    </span>
                )}
                <span className={cn("mt-0.5 flex flex-wrap items-center gap-2 text-xs", isCentre ? "text-stone-300" : "text-stone-600")}>
                    {review.date}
                    {(review.unprompted || review.verified) && (
                        <span
                            className={cn(
                                "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]",
                                isCentre
                                    ? "border-[#ffc2a6]/40 text-[#ffc2a6]"
                                    : "border-cognac/30 text-cognac"
                            )}
                        >
                            {review.unprompted ? "Unprompted" : "Verified"}
                            <span className="sr-only">
                                {review.unprompted
                                    ? ` review, as labelled by ${review.platform}`
                                    : ` review, identity checked by ${review.platform}`}
                            </span>
                        </span>
                    )}
                </span>
                {review.caseStudy && isCentre && (
                    <Link
                        href={review.caseStudy}
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#ffc2a6]"
                    >
                        See the project
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only"> for {review.name}</span>
                    </Link>
                )}
            </figcaption>
        </div>
    );
}

export default function StaggerTestimonials() {
    const [order, setOrder] = useState<ClientReview[]>([...CLIENT_REVIEWS]);
    const [cardSize, setCardSize] = useState(CARD_DESKTOP);
    const [reduceMotion, setReduceMotion] = useState(false);
    const regionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wide = window.matchMedia("(min-width: 640px)");
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = () => {
            setCardSize(wide.matches ? CARD_DESKTOP : CARD_MOBILE);
            setReduceMotion(motion.matches);
        };
        sync();
        wide.addEventListener("change", sync);
        motion.addEventListener("change", sync);
        return () => {
            wide.removeEventListener("change", sync);
            motion.removeEventListener("change", sync);
        };
    }, []);

    const move = useCallback((steps: number) => {
        setOrder((current) => {
            const next = [...current];
            for (let i = 0; i < Math.abs(steps); i++) {
                if (steps > 0) next.push(next.shift()!);
                else next.unshift(next.pop()!);
            }
            return next;
        });
    }, []);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
        if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
    };

    const centreIndex = Math.floor(order.length / 2);
    const centre = order[centreIndex];

    return (
        <div
            ref={regionRef}
            role="group"
            aria-roledescription="carousel"
            aria-label="Client reviews"
            onKeyDown={onKeyDown}
            className="relative w-full overflow-hidden"
            style={{ height: cardSize + 190 }}
        >
            {order.map((review, index) => (
                <ReviewCard
                    key={review.id}
                    review={review}
                    position={index - centreIndex}
                    cardSize={cardSize}
                    reduceMotion={reduceMotion}
                    onSelect={move}
                />
            ))}

            {/* The centre card is aria-hidden=false, but its text still changes
                silently for a screen reader. This announces the change. */}
            <p aria-live="polite" className="sr-only">
                {centre ? `${centre.snippet} Reviewed by ${centre.name} on ${centre.platform}, ${centre.date}.` : ""}
            </p>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-3">
                <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous review"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white text-charcoal transition-colors hover:border-cognac hover:text-cognac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cognac"
                >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next review"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white text-charcoal transition-colors hover:border-cognac hover:text-cognac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cognac"
                >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}
