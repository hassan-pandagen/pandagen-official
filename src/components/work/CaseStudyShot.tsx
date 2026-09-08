import Image from "next/image";

/**
 * The delivered site, shown on the case study itself.
 *
 * These screenshots existed in public/work/ since July but were wired only into
 * the generated OG card, so they appeared in a social preview and nowhere a
 * reader or Google Images could reach them. A case study for a studio selling
 * build quality that shows no build is a strange thing to publish.
 *
 * `alt` must describe what is IN the picture, not repeat the page title. That is
 * what makes it useful to a screen reader and to image search, and the two want
 * the same thing. Where an image has been redacted the alt has to say so, or the
 * description misrepresents what a sighted reader is actually being shown.
 *
 * Not priority-loaded: it sits below the intro, so it is not the LCP element and
 * eager-loading it would cost the thing these pages are meant to demonstrate.
 */
export default function CaseStudyShot({
    src,
    alt,
    caption,
    width = 1912,
    height = 914,
}: {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
}) {
    return (
        <figure className="my-10">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full rounded-xl border border-stone-300"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-stone-600">{caption}</figcaption>
        </figure>
    );
}
