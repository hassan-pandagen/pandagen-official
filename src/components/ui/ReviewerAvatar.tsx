import Image from "next/image";

/**
 * A reviewer's face, or their initials when there is no photo.
 *
 * WHY THE FALLBACK EXISTS RATHER THAN JUST HIDING THE AVATAR
 * Photos arrive one at a time, as each reviewer is asked and agrees. A strip
 * where two cards have faces and two have nothing looks broken, and the two
 * without read as less real than they did before any photo was added. A monogram
 * is honest, consistent, and makes no claim about who the person is.
 *
 * WHAT MUST NOT HAPPEN HERE
 * Never source a photo from someone's social profile. A Trustpilot or Clutch
 * review grants no rights to a person's image, and a picture lifted from a
 * personal account onto a commercial page is a privacy problem however warm the
 * relationship is. Every photo in public/reviews/ must have been given by the
 * person in it, for this purpose.
 *
 * And never use a stock photo. Readers are well tuned to fake testimonial
 * faces, and the suspicion lands on the review rather than on the picture.
 */

function initials(name: string): string {
    // "Matt Conner, owner, MC Patches LLC" -> "MC". Strips the role and company
    // that some entries carry so the monogram stays two letters.
    const person = name.split(",")[0].trim();
    const parts = person.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ReviewerAvatar({
    name,
    photo,
    size = 40,
}: {
    name: string;
    photo?: string;
    size?: number;
}) {
    if (photo) {
        return (
            <Image
                src={photo}
                alt={name.split(",")[0]}
                width={size}
                height={size}
                className="shrink-0 rounded-full border border-stone-300 object-cover"
                style={{ width: size, height: size }}
            />
        );
    }

    return (
        <span
            aria-hidden="true"
            style={{ width: size, height: size }}
            className="flex shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white text-xs font-bold tracking-wide text-stone-500"
        >
            {initials(name)}
        </span>
    );
}
