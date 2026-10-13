import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";

export default function WorkIndex() {
  return (
    <section aria-labelledby="work-title" className="relative px-6 pb-6 pt-16 md:px-10 md:py-20" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2
            id="work-title"
            className="lg:col-span-7"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            <HeadingEmphasis text="Look at the work before you read about it." />
          </h2>
          <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5" style={{ color: T.body }}>
            Open any project below and check it yourself. Client projects, founder-affiliated work, previews and concepts are labelled.
            Where a project has measured figures they are on its record, and where it does not, we say nothing about
            speed or traffic rather than estimate.
          </p>
        </div>

        <RowList list={portfolioProjects} showRelationship className="mt-16 md:mt-24" />
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
        @media (max-width: 767px) {
          .work-row .work-thumb { width: 76px; opacity: 1; }
          .work-row:hover .work-thumb, .work-row:focus-visible .work-thumb, .work-row:active .work-thumb { width: 76px; }
          .work-row:hover, .work-row:focus-visible, .work-row:active { padding-left: 8px; padding-right: 8px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .work-row, .work-row * { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

function RowList({ list, showRelationship, className = "" }: { list: PortfolioProject[]; showRelationship: boolean; className?: string }) {
  return (
    <ul className={`work-index border-t ${className}`} style={{ borderColor: T.rule }}>
      {list.map((r) => (
        <li key={r.name} className="border-b" style={{ borderColor: T.rule }}>
          <Link
            href={r.href}
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

            <span className="col-span-1 flex min-w-0 items-center gap-5 md:col-span-7">
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
                className="work-name min-w-0 [overflow-wrap:anywhere] md:whitespace-nowrap"
                style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(1.9rem, 3.6vw, 3.4rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                {/* 12 Oct 2026, iPhone pass: long one-word names broke mid-word ("MYCUSTOMPATCH / ES").
                    A soft hyphen at each inner capital lets them break as "MYCUSTOM- / PATCHES". */}
                {r.name.replace(/\b[A-Za-z]{13,}\b/g, (word) => word.replace(/([a-z])([A-Z])/g, "$1\u00AD$2"))}
              </span>
            </span>

            <span className="work-arrow col-span-1 flex justify-end" style={{ color: T.ink }}>
              <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
