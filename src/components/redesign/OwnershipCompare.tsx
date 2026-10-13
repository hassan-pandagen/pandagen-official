import HeadingEmphasis from "./HeadingEmphasis";
import Link from "next/link";
import { SERVICE_OWNERSHIP } from "@/data/service-ownership-answers";
import { Check, Minus, LockKeyhole, KeyRound } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import {
  ITEM_LABELS,
  OUR_BUILD,
  serviceOutputs,
  OUR_STATUS_LABELS,
  OWNERSHIP_ON_HANDOVER,
  PLATFORMS,
  PORTABILITY_CHECKED_LABEL,
  PORTABILITY_GUIDE,
  STATUS_LABELS,
  comparisonRows,
  type PlatformId,
} from "@/data/platform-portability";
import s from "@/components/redesign/CommercialPreview.module.css";
import o from "./OwnershipCompare.module.css";

// 4 Oct 2026: the owner's main selling point is that a build with us carries no
// platform lock-in. This section states it the checkable way: each platform's
// export limits from its own documentation, with the source and the date we
// read it, next to what our published terms say you receive at handover. Every
// vendor cell links to the page it came from. Our column comes from
// company-facts.ts through src/data/platform-portability.ts, never from here.
// Real <table> markup; below 760px the CSS stacks it, and the explicit ARIA
// roles keep it announced as a table when display changes.

function SourceLink({ href, label, context }: { href: string; label: string; context: string }) {
  return href.startsWith("/")
    ? <Link className={o.source} href={href}>{label}<span className="sr-only"> on {context}</span> ↗</Link>
    : <a className={o.source} href={href} target="_blank" rel="noopener noreferrer">{label}<span className="sr-only"> on {context} (opens in a new tab)</span> ↗</a>;
}

function StatusIcon({ status }: { status: "exports" | "partial" | "stays" | "account" }) {
  const Icon = status === "exports" ? Check : status === "partial" ? Minus : status === "account" ? KeyRound : LockKeyhole;
  return <Icon size={14} aria-hidden="true" />;
}

export default function OwnershipCompare({
  platforms,
  serviceSlug,
  number,
  alt = true,
}: {
  /** Platforms to compare. Empty shows only what you keep from our build. */
  platforms: PlatformId[];
  serviceSlug: string;
  /** Section number in the page's own sequence, e.g. "06". */
  number: string;
  alt?: boolean;
}) {
  const monthly = serviceSlug === "ai-seo";
  const outputs = serviceOutputs(serviceSlug);
  const rows = comparisonRows(platforms);
  const compared = platforms.length > 0;
  const headingId = "what-you-keep-title";
  const content = SERVICE_OWNERSHIP[serviceSlug];
  const title = content?.heading ?? "What do you keep after the project?";

  return <section id="what-you-keep" className={`${s.section} ${o.section} ${alt ? s.sectionAlt : ""}`} aria-labelledby={headingId}><div className={s.wrap}>
    <FadeIn className={o.intro}>
      <div><p className={s.eyebrow}>{number} / Ownership & exports</p><h2 id={headingId} className={o.title}><HeadingEmphasis text={title} /></h2></div>
      <div>
        <p>{content?.intro ?? "You receive the files we create for your project, written instructions and control of the production accounts. Your proposal sets out the delivery and any third-party terms."}</p>
        <div className={o.summary}><p className={o.summaryLabel}><KeyRound size={16} aria-hidden="true" /> {monthly ? "The work you keep" : "Your project handover"}</p><p className={o.canon}>{OWNERSHIP_ON_HANDOVER}</p></div>
      </div>
    </FadeIn>


    {content && <div className={o.answers} aria-label="Questions about ownership and moving your website">
      {content.answers.map(({ q, a, sources }, index) => <article key={q} id={`ownership-${serviceSlug}-${index + 1}`} className={o.answer}>
        <h3>{q}</h3><p>{a}</p>
        <div className={o.sources}>{sources.map(source => <SourceLink key={source.href} href={source.href} label={source.label} context={q} />)}</div>
      </article>)}
    </div>}

    {compared && <h3 className={o.assetsTitle}>Website assets</h3>}

    {compared && <div className={o.legend} role="group" aria-label="Comparison key"><span className={`${o.status} ${o.exports}`}><StatusIcon status="exports" />Exports</span><span className={`${o.status} ${o.partial}`}><StatusIcon status="partial" />Partly</span><span className={`${o.status} ${o.stays}`}><StatusIcon status="stays" />Stays on the platform</span><p>Read each row for the scope and source.</p></div>}

    {compared && <div className={o.tableWrap}>
      <table className={o.table} role="table" aria-labelledby={headingId}>
        <caption className="sr-only">Website assets, platform export options and PandaCodeGen handover terms</caption>
        <colgroup><col className={o.itemCol} />{platforms.map((id) => <col key={id} />)}<col /></colgroup>
        <thead role="rowgroup"><tr role="row">
          <th scope="col" role="columnheader">Website assets</th>
          {platforms.map((id) => <th scope="col" role="columnheader" key={id}>{PLATFORMS[id].name}</th>)}
          <th scope="col" role="columnheader" className={o.oursHead}>Your PandaCodeGen build</th>
        </tr></thead>
        <tbody role="rowgroup">{rows.map((row) => {
          const ours = OUR_BUILD[row.item];
          const itemLabel = ITEM_LABELS[row.item];
          return <tr role="row" key={row.item}>
            <th scope="row" role="rowheader"><span className={o.rowLabel}>{itemLabel}</span></th>
            {row.cells.map((cell, index) => {
              const name = PLATFORMS[platforms[index]].name;
              return <td role="cell" key={platforms[index]}>
                <span className={o.mobileLabel} aria-hidden="true">{name}</span>
                {cell
                  ? <><span className={`${o.status} ${o[cell.status]}`}><StatusIcon status={cell.status} />{STATUS_LABELS[cell.status]}</span><p className={o.detail}>{cell.detail}</p>
                      <span className={o.sources}><SourceLink href={cell.sourceUrl} label={`${name} docs`} context={`${name}, ${itemLabel.toLowerCase()}`} />{cell.also && cell.also.sourceUrl !== cell.sourceUrl && <SourceLink href={cell.also.sourceUrl} label="Second source" context={`${name}, ${itemLabel.toLowerCase()}`} />}</span></>
                  : <p className={o.detail}>Not covered by the {name} pages we checked.</p>}
              </td>;
            })}
            <td role="cell" className={o.ours}>
              <span className={o.mobileLabel} aria-hidden="true">A PandaCodeGen build</span>
              <span className={`${o.status} ${o[ours.status]}`}><StatusIcon status={ours.status} />{OUR_STATUS_LABELS[ours.status]}</span><p className={o.detail}>{ours.detail}</p>
              {ours.sourceUrl && ours.sourceLabel && <span className={o.sources}><SourceLink href={ours.sourceUrl} label={ours.sourceLabel} context={itemLabel.toLowerCase()} /></span>}
            </td>
          </tr>;
        })}</tbody>
      </table>
    </div>}

    <div className={`${o.notes} ${!compared ? o.projectNotes : ""}`}>
      <div><h3 className={compared ? o.handoverTitle : o.assetsTitle}>{compared ? "Also included at handover" : (monthly ? "Your monthly deliverables" : "Your project assets")}</h3><ul className={o.keepList} aria-label={monthly ? "Monthly deliverables" : "Also handed over"}>
        {outputs.map((item) => <li key={item.label}><b>{item.label}</b><p>{item.detail}</p></li>)}
      </ul></div>
      <div className={o.aside}>
        {compared && <>
          <p>Licence notes, from the same check:</p>
          <ul className={o.licences}>{platforms.map((id) => <li key={id}><b>{PLATFORMS[id].name}.</b> {PLATFORMS[id].licence.detail} <SourceLink href={PLATFORMS[id].licence.sourceUrl} label="Source" context={`${PLATFORMS[id].name} licence terms`} /></li>)}</ul>
          <p>Vendor columns describe each platform&apos;s own documented tools, read on {PORTABILITY_CHECKED_LABEL}. Plans and export tools change, so check the linked page before you rely on a row. Our column comes from our published terms; your written proposal states the details for your project, including any third-party licences.</p>
        </>}
        {!compared && <p>Your written proposal states the details for your project, including any third-party licences.</p>}
        <div className={o.links}><Link href={PORTABILITY_GUIDE.href} className={s.textLink}>{PORTABILITY_GUIDE.label} ↗</Link><Link href="/pricing" className={s.textLink}>{monthly ? "See pricing and scope ↗" : "See what each tier includes ↗"}</Link></div>
      </div>
    </div>
  </div></section>;
}
