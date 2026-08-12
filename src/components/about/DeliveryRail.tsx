"use client";

/**
 * The four-stage governance sequence, as an editorial rail.
 *
 * Replaces an ordered list of four sentences, each prefixed by a small orange
 * circle with a digit in it. That pattern reads as a generic feature list, and
 * it made the most structural thing on the page — the fact that the work runs to
 * a documented sequence — look like filler.
 *
 * Deliberately built from type and rules rather than iconography. There is not a
 * single icon in here: the stage numeral IS the visual. Icons on a page about
 * process governance decorate a claim instead of carrying it, and the site has
 * enough of them already.
 *
 * The rail is horizontal on desktop and vertical on mobile, drawn with borders
 * rather than SVG so it reflows with the text at any width and needs no
 * viewBox maintenance.
 */

export interface DeliveryStage {
    /** Short label for the stage. Two words maximum, or the rail crowds. */
    title: string;
    /** The verbatim commitment. Not shortened for layout — the detail is the point. */
    body: string;
}

export default function DeliveryRail({ stages }: { stages: DeliveryStage[] }) {
    return (
        <ol className="relative grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14 xl:grid-cols-4 xl:gap-x-8">
            {stages.map((stage, i) => (
                <li key={stage.title} className="relative">
                    {/* The rail. Horizontal from each numeral on wide screens,
                        suppressed on the last item so the line does not run off. */}
                    <div aria-hidden="true" className="mb-6 flex items-center gap-4">
                        <span className="font-serif text-5xl leading-none text-cognac/35 tabular-nums md:text-6xl">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-white/15" />
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cognac/70" />
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-white md:text-xl">
                        {stage.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-300">{stage.body}</p>
                </li>
            ))}
        </ol>
    );
}
