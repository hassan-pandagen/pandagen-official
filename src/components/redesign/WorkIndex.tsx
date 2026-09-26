import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Work, as an index of rows. Redesign pass, 26 Sep 2026 (second pass -- see
// the 24 Sep note in git history for the first).
// ─────────────────────────────────────────────────────────────────────────────
// Each row: a small mono label, the project name large, an arrow. On hover (or
// keyboard focus) the row turns dark and a screenshot slides in beside the
// name. Pure CSS: no animation library, nothing loaded on interaction, because
// the images are already in the page at thumbnail size.
//
// The label carries the relationship, because the site's evidence rules require
// it wherever a project is shown: "Client" only where company-facts.ts records
// a client, "Founder-affiliated" everywhere else. No launch years are shown:
// none are recorded, and this list does not invent them.
//
// The editor's hover clips (1280x720 MP4 loops, public/work/) will replace the
// screenshot in .work-thumb when they arrive; that needs a small client
// component to start and stop playback on hover. Not built yet.
//
// 26-27 Sep: two fixes from a design review, plus one revision.
// 1. The thumbnail was `hidden md:block` and hover-only, so touch devices
//    (any phone, any touch laptop) never showed a single project image in
//    this section. First fix (26 Sep): made the first row's thumbnail always
//    visible. Reverted the next day, owner's call: one row looking different
//    from the rest read as a bug ("why is this one stuck?"), not a
//    deliberate accessibility fix, and consistency won over it. Final fix
//    (27 Sep): removed `hidden md:block` from every row (the thumbnail now
//    exists in layout at every width, starting at width:0/opacity:0) and
//    added `:active` alongside `:hover`/`:focus-visible` in the reveal CSS
//    below. `:hover` alone doesn't reliably fire on tap, but `:active` does,
//    across browsers, with no JS -- so a press-and-hold now reveals the same
//    thumbnail on a touchscreen that a mouse hover does, uniformly on every
//    row, with nothing singled out.
// 2. "Concept builds" (Medical Template, Panda Publisher, Sleek Jackets) is
//    dropped from the homepage -- real client work only. Checked first: the
//    live /work page reads a different data source (case-study-facts.ts) and
//    does not carry these three today, so this is not "already covered
//    elsewhere" -- it's a real gap to fill when /work gets its own redesign
//    pass. The `rows` array below still defines them; only the render is
//    trimmed, so nothing here needs rebuilding when that pass happens.
// ─────────────────────────────────────────────────────────────────────────────

type Row = {
  name: string;
  label: string;
  relationship: "Client" | "Founder-affiliated" | "Demo";
  href: string;
  /** Omitted for work that is not live: no screenshot of a site we did not build. */
  image?: string;
  status?: "In progress" | "Preview";
  external?: boolean;
};

// Lineup chosen by the owner, 24 Sep 2026. Independent clients first, then
// founder-affiliated work. Relationships from PROJECTS in company-facts.ts.
//
// A Step Above Medical: "In progress" per migration-projects.ts (confirmed
// 18 Sep). Its domain still serves the client's OLD WordPress site, and that
// file says it "must not be presented as our delivered build", so the row has
// no screenshot and does not link to the domain. It links to the migration
// page, which describes the project with its status. This also keeps the
// section's sentence true: every screenshot here is a live site we built.
//
// Saforne: recorded as a client (CaseStudyGrid.tsx). On 24 Sep saforne.com did
// not respond and the build at dtc-brand-alpha.vercel.app reads "Design preview
// / not yet for sale", so it is labelled Preview and links to that build.
//
// Medical template: our own practice template. The site's title and banner say
// "Fictional portfolio demo ... not a medical provider", so it is labelled
// Demo, never Client. Screenshot taken 24 Sep: public/work/medical-template.png.
//
// Panda Publisher: a concept per the owner (24 Sep); its own page also says its
// cover gallery is "not client work". Sleek Jackets: undecided between our own
// brand and a client-run store (owner, 24 Sep), so it is a Demo until that is
// settled. Relabel it the day it is; do not guess ahead of it.
//
// Enterprise Ops and Panda CodeLab were left out of this list by the owner;
// both remain on /work with their founder-affiliated labels.
const rows: Row[] = [
  { name: "NorthDeck Group", label: "Security systems", relationship: "Client", href: "https://northdeckgroup.com/", image: "/work/northdeck-group.png", external: true },
  { name: "Emblematic Studio", label: "Product catalogue", relationship: "Client", href: "/work/emblematic-studio", image: "/work/emblematic-studio.png" },
  { name: "MyCustomPatches", label: "WordPress migration", relationship: "Client", href: "/work/mycustompatches", image: "/work/mycustompatches.png" },
  { name: "Ladies 4 Jesus", label: "Community & publishing", relationship: "Client", href: "/work/ladies-4-jesus", image: "/work/ladies-4-jesus.png" },
  { name: "Saforne", label: "Luxury leather DTC", relationship: "Client", status: "Preview", href: "https://dtc-brand-alpha.vercel.app/", image: "/work/saforne.png", external: true },
  { name: "A Step Above Medical", label: "WordPress rebuild", relationship: "Client", status: "In progress", href: "/services/wordpress-migration" },
  { name: "Panda Patches", label: "Custom commerce", relationship: "Founder-affiliated", href: "/work/panda-patches", image: "/work/panda-patches.png" },
  { name: "Medical Template", label: "Practice website", relationship: "Demo", href: "https://pandacodegen-medical-template.vercel.app/", image: "/work/medical-template.png", external: true },
  { name: "Panda Publisher", label: "Author services", relationship: "Demo", href: "https://pandapublisher-eight.vercel.app/", image: "/work/panda-publisher.png", external: true },
  { name: "Sleek Jackets", label: "Outerwear store", relationship: "Demo", href: "https://sleek-jackets.vercel.app/", image: "/work/sleek-jackets.png", external: true },
];

const clientWork = rows.filter((r) => r.relationship !== "Demo");

export default function WorkIndex() {
  return (
    <section aria-labelledby="work-title" className="relative px-6 py-24 md:px-10 md:py-32" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2
            id="work-title"
            className="lg:col-span-7"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            Look at the work before you read about it.
          </h2>
          <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5" style={{ color: T.body }}>
            Open any project below and check it yourself. Preview builds and in-progress work are labelled as such.
            Where a project has measured figures they are on its record, and where it does not, we say nothing about
            speed or traffic rather than estimate.
          </p>
        </div>

        <RowList list={clientWork} showRelationship className="mt-16 md:mt-24" />
      </div>

      {/* Hover, focus and active states live here so the rows stay server-
          rendered. The thumbnail animates width, which reflows only its own
          row. :active is included alongside :hover/:focus-visible so a
          press-and-hold on a touchscreen reveals the same thumbnail a mouse
          hover does -- :hover alone doesn't reliably fire on tap, but :active
          does, consistently, without any JS. */}
      <style>{`
        .work-row { transition: background-color .35s ease, padding .35s ease; }
        .work-row .work-label, .work-row .work-name, .work-row .work-arrow { transition: color .35s ease; }
        .work-row .work-thumb { width: 0; opacity: 0; transition: width .45s cubic-bezier(.2,.7,.2,1), opacity .3s ease; }
        .work-row:hover, .work-row:focus-visible, .work-row:active { background-color: ${T.dark}; padding-left: 20px; padding-right: 20px; }
        .work-row:hover .work-label, .work-row:focus-visible .work-label, .work-row:active .work-label { color: ${T.onDarkQuiet} !important; }
        .work-row:hover .work-name, .work-row:focus-visible .work-name, .work-row:active .work-name,
        .work-row:hover .work-arrow, .work-row:focus-visible .work-arrow, .work-row:active .work-arrow { color: ${T.onDark} !important; }
        .work-row:hover .work-thumb, .work-row:focus-visible .work-thumb, .work-row:active .work-thumb { width: 200px; opacity: 1; }
        .work-row:focus-visible { box-shadow: 0 0 0 3px ${T.accent}; }
        @media (prefers-reduced-motion: reduce) {
          .work-row, .work-row * { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

function RowList({ list, showRelationship, className = "" }: { list: Row[]; showRelationship: boolean; className?: string }) {
  return (
    <ul className={`work-index border-t ${className}`} style={{ borderColor: T.rule }}>
      {list.map((r) => (
        <li key={r.name} className="border-b" style={{ borderColor: T.rule }}>
          <Link
            href={r.href}
            {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="work-row group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 rounded-[6px] px-0 py-5 no-underline outline-none md:grid-cols-12 md:py-6"
            style={{ textDecoration: "none" }}
          >
            <span
              className="work-label col-span-2 text-[12px] uppercase tracking-[0.08em] md:col-span-4 md:text-[13px]"
              style={{ fontFamily: MONO, color: T.quiet }}
            >
              {r.label}
              {showRelationship ? ` · ${r.relationship}` : ""}
              {r.status ? ` · ${r.status}` : ""}
            </span>

            <span className="col-span-1 flex items-center gap-5 md:col-span-7">
              <span
                className="work-thumb relative block h-20 shrink-0 overflow-hidden rounded-[4px] md:h-[112px]"
                aria-hidden="true"
              >
                {r.image ? (
                  <Image src={r.image} alt="" fill sizes="240px" className="object-cover object-top" />
                ) : (
                  <span
                    className="flex h-full w-full items-center justify-center text-[12px] uppercase tracking-[0.12em]"
                    style={{ fontFamily: MONO, backgroundColor: "#2A2623", color: T.onDarkQuiet }}
                  >
                    {r.status ?? "Coming soon"}
                  </span>
                )}
              </span>
              <span
                className="work-name md:whitespace-nowrap"
                style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(1.9rem, 3.6vw, 3.4rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                {r.name}
              </span>
            </span>

            <span className="work-arrow col-span-1 flex justify-end" style={{ color: T.ink }}>
              <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
              {r.external && <span className="sr-only"> (opens in a new tab)</span>}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
