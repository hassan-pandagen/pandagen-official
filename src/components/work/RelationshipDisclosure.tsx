import { AlertCircle, BadgeCheck } from "lucide-react";
import { disclosure, isFounderAffiliated } from "@/data/case-study-facts";

/**
 * The relationship disclosure every case study owes the reader.
 *
 * Rendered from case-study-facts.json, never typed into a page. Three of six
 * /work pages carried no disclosure at all before this existed — including the
 * independent-client case study that never said so on its own page, and an
 * "enterprise operations platform" that is our own internal CRM.
 *
 * Founder-affiliated work gets the warmer amber treatment rather than a red
 * alert on purpose: the disclosure is a fact about the relationship, not a
 * warning about the work. Styling it as a defect would be its own distortion.
 */
export default function RelationshipDisclosure({ slug }: { slug: string }) {
    const text = disclosure(slug);
    const affiliated = isFounderAffiliated(slug);
    const Icon = affiliated ? AlertCircle : BadgeCheck;

    return (
        <aside
            data-relationship-disclosure
            className={`my-8 flex gap-3 rounded-2xl border p-5 ${
                affiliated
                    ? "border-amber-300/70 bg-amber-50/60"
                    : "border-emerald-300/60 bg-emerald-50/50"
            }`}
        >
            <Icon
                aria-hidden="true"
                className={`mt-0.5 h-5 w-5 shrink-0 ${affiliated ? "text-amber-700" : "text-emerald-700"}`}
            />
            <div>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-stone-500">
                    Relationship disclosure
                </p>
                <p className="text-sm leading-relaxed text-stone-700">{text}</p>
            </div>
        </aside>
    );
}
