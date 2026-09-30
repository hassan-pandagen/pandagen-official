import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// A Step Above Medical, status page, 28 Sep 2026, updated same day with the
// first real screenshots (2 from the Sanity Studio, 1 from the new site
// itself, all owner-supplied). Still not a case study -- this project isn't
// finished, and company-facts.ts already carries the rule this page has to
// follow: "the public domain still runs the client's previous WordPress site
// and must not be presented as our delivered build until launch." So still
// no "Visit the live site" link and no claim that the screenshot below is
// what's publicly live today -- it's captioned as a build-in-progress
// preview, not a finished product, same distinction the disclosure draws.
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

const shots = [
  {
    key: "locations",
    src: "/work/a-step-above-medical-editor-locations.png",
    alt: "Sanity Studio open on the Locations content type, showing the Chicago, IL entry with its web address field, an active toggle and a city photograph.",
    label: "Locations",
    body: "One entry per city the training runs in -- close to 20 are listed as Active. Each carries its own URL, a toggle to pull a city from the list without deleting its page, and an optional city photo.",
  },
  {
    key: "courses",
    src: "/work/a-step-above-medical-editor-courses.png",
    alt: "Sanity Studio open on the Courses content type, showing the IV Therapy Training Course entry with its duration field and course photograph.",
    label: "Courses",
    body: "Each course -- IV Therapy, Phlebotomy -- has its own duration, description and photo, editable the same way as a location.",
  },
];

const previewShot = {
  src: "/work/a-step-above-medical-preview-homepage.png",
  alt: "A build-in-progress preview of the new A Step Above Medical homepage, showing the hero copy, certification checklist and an upcoming IV Therapy Training Course card.",
};

const portalShots = [
  {
    key: "classes",
    src: "/work/a-step-above-medical-portal-classes.png",
    alt: "The A Step Above Medical operations portal's Classes view: upcoming classes, students enrolled, outstanding balances and certificates awaiting sign-off, above a class schedule table with a readiness status per class and a needs-attention panel.",
    label: "Classes",
    body: "Every class, its enrollment and its readiness status in one table — venue, instructor assignment and sign-offs all tracked per class, not per spreadsheet.",
  },
  {
    key: "exports",
    src: "/work/a-step-above-medical-portal-exports.png",
    alt: "The A Step Above Medical operations portal's Exports view, listing CSV downloads for Students, Classes, Registrations, Attendance and completion, Payments, Certificates, Terms acceptances and Terms versions.",
    label: "Exports",
    body: "Every record type — students, classes, registrations, attendance, payments, certificates, terms acceptances — downloadable as a CSV, with the export itself logged.",
  },
];

export function AStepAboveMedicalStatusPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / A Step Above Medical / In progress
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
              <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: T.body }}>
                {new Date(`${details.testingStarts}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
              </p>
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

      {/* ── What's taking shape. Explicitly a preview, not a delivered
          build -- see the file-level note on why no "visit the live site"
          link exists here. ── */}
      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>02</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            What&apos;s taking shape.
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
            Content lives in Sanity, organized by location and by course, so the team can open a new city or update
            a course without a developer once this launches.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {shots.map((s) => (
              <div key={s.key}>
                <div className="relative overflow-hidden border" style={{ aspectRatio: "1912 / 914", borderColor: T.rule }}>
                  <Image src={s.src} alt={s.alt} fill sizes="(min-width: 640px) 520px, 100vw" className="object-cover object-top" />
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.08em]" style={{ fontFamily: MONO, color: T.accent }}>{s.label}</p>
                <p className="mt-1 text-[13px] leading-[1.5]" style={{ color: T.quiet }}>{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            A build-in-progress preview
          </p>
          <div className="relative mt-4 w-full border" style={{ height: "min(60vh, 600px)", borderColor: T.rule }}>
            <Image src={previewShot.src} alt={previewShot.alt} fill sizes="(min-width: 1100px) 1050px, 100vw" className="object-cover object-top" />
          </div>
          <p className="mt-3 max-w-[42rem] text-[13px] leading-[1.5]" style={{ color: T.quiet }}>
            The new homepage, mid-build -- location- and course-driven, with an upcoming-class card pulling directly
            from the data shown above. This is a preview of work in progress, not the site that&apos;s publicly live
            today.
          </p>
        </div>
      </section>

      {/* ── The operations portal. A separate deliverable from the public
          site -- scoped and sold on its own, and substantially built
          already, unlike the still-in-progress public site above. These
          screenshots (29 Sep 2026, replacing an earlier, visibly-labelled
          "Design preview / Sample data" mockup) carry no such banner and
          show the real navigation -- Classes, Capacity, Students, Merge
          profiles, Substitute attendee, Needs attention, Certificates,
          Reports, Exports, Emails, Activity log, Accounts. The near-zero
          enrollment figures visible in the Classes view are consistent
          with the public site not having launched yet (nothing to
          register for), not with the screen being a mockup -- so this
          caption doesn't wave those numbers away the way the old one did,
          but it also doesn't make anything of them; they're an artifact of
          timing, not a result worth stating. ── */}
      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>03</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            A separate operations portal, mostly built.
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
            Alongside the public site, a registration and operations portal replaces what the team used to track by
            hand: class rosters, instructor assignments, certificates and payments. It runs on the client&apos;s own
            Supabase account.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {portalShots.map((s) => (
              <div key={s.key}>
                <div className="relative overflow-hidden border" style={{ aspectRatio: "1912 / 914", borderColor: T.rule }}>
                  <Image src={s.src} alt={s.alt} fill sizes="(min-width: 640px) 520px, 100vw" className="object-cover object-top" />
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.08em]" style={{ fontFamily: MONO, color: T.accent }}>{s.label}</p>
                <p className="mt-1 text-[13px] leading-[1.5]" style={{ color: T.quiet }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyFaqs faqs={faqs} />

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
