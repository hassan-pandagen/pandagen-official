import { AlertCircle, BadgeCheck, Info } from "lucide-react";
import { disclosure, isDemo, isFounderAffiliated } from "@/data/case-study-facts";

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
 *
 * 27 Sep 2026: added a third, neutral treatment for our own concept/demo
 * builds (isDemo) -- no client or founder-owned business behind them, so the
 * emerald "verified client" styling would overstate the relationship.
 */
export default function RelationshipDisclosure({ slug }: { slug: string }) {
    const text = disclosure(slug);
    const demo = isDemo(slug);
    const affiliated = !demo && isFounderAffiliated(slug);
    const Icon = demo ? Info : affiliated ? AlertCircle : BadgeCheck;

    return (
        <aside
            data-relationship-disclosure
            className={`my-8 flex gap-3 rounded-2xl border p-5 ${
                demo
                    ? "border-stone-300 bg-stone-50"
                    : affiliated
                        ? "border-amber-300/70 bg-amber-50/60"
                        : "border-emerald-300/60 bg-emerald-50/50"
            }`}
        >
            <Icon
                aria-hidden="true"
                className={`mt-0.5 h-5 w-5 shrink-0 ${demo ? "text-stone-500" : affiliated ? "text-amber-700" : "text-emerald-700"}`}
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
