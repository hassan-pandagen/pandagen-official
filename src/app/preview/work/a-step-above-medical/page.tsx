import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// A Step Above Medical, status page, 28 Sep 2026. Not a case study -- this
// project isn't finished, and company-facts.ts already carries the rule this
// page has to follow: "the public domain still runs the client's previous
// WordPress site and must not be presented as our delivered build until
// launch." So no "Visit the live site" link (that domain is still the OLD
// site), no "what's built" claims beyond what MIGRATION_PROJECT_DETAILS
// already confirms, and no screenshots yet -- those come once the owner
// shares them, same as the other client pages.
//
// Deliberately does NOT use RelationshipDisclosure / case-study-facts.json.
// link_guard.py requires every case-study-facts.json entry to have a live,
// built page at /work/{slug}.html (the "case-study-not-built" check) -- and
// this project explicitly isn't allowed to be presented as delivered yet.
// Adding an entry now would either fail that guard or force building a live
// page prematurely. The disclosure sentence below is hardcoded instead,
// copied verbatim from the already-approved PROJECTS entry in
// company-facts.ts, so it says exactly what's already been vetted -- once
// this project actually launches, give it a real case-study-facts.json
// entry and a live /work page, and this file can go through the normal
// RelationshipDisclosure path like every other project.
// ─────────────────────────────────────────────────────────────────────────────

const details = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;

export default function AStepAboveMedicalStatusPreview() {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/preview/work" style={{ color: T.quiet }}>Work</Link> / A Step Above Medical / In progress
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            A Step Above Medical.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A WordPress rebuild, in progress.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            {details.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t pt-6" style={{ borderColor: T.rule }}>
            <div className="max-w-[20rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>Status</p>
              <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: T.body }}>{details.status}</p>
            </div>
            <div className="max-w-[20rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: T.quiet }}>Testing begins</p>
              <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: T.body }}>{details.testingStarts}</p>
            </div>
          </div>

          <aside data-relationship-disclosure className="my-8 border-t border-stone-400/30 pt-5">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-stone-600">Relationship disclosure</p>
            <p className="max-w-[65rem] text-sm leading-relaxed text-stone-700">
              Client project, in progress. The current public domain still serves the client&apos;s previous
              WordPress site; this is not yet our delivered build, and nothing on this page should be read as a
              finished case study.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Considering a WordPress rebuild of your own?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            This project will get its own full case study once it launches. In the meantime, here&apos;s how we
            approach a migration.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/services/wordpress-migration"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Explore WordPress migration services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
