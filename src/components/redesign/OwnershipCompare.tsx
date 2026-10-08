import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import {
  ITEM_LABELS,
  OUR_BUILD,
  OUR_HANDOVER,
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

function joinNames(ids: PlatformId[]) {
  // Mid-sentence, "Self-hosted WordPress" reads better in lower case.
  const names = ids.map((id, index) => (index > 0 ? PLATFORMS[id].name.replace(/^Self-hosted/, "self-hosted") : PLATFORMS[id].name));
  if (names.length < 2) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} or ${names[names.length - 1]}`;
}

function SourceLink({ href, label, context }: { href: string; label: string; context: string }) {
  return <a className={o.source} href={href} target="_blank" rel="noopener noreferrer">{label}<span className="sr-only"> on {context} (opens in a new tab)</span> ↗</a>;
}

export default function OwnershipCompare({
  platforms,
  number,
  alt = true,
}: {
  /** Platforms to compare. Empty shows only what you keep from our build. */
  platforms: PlatformId[];
  /** Section number in the page's own sequence, e.g. "06". */
  number: string;
  alt?: boolean;
}) {
  const rows = comparisonRows(platforms);
  const compared = platforms.length > 0;
  const headingId = "what-you-keep-title";
  const title = compared
    ? `What you can take with you from ${joinNames(platforms)}, and from a PandaCodeGen build`
    : "What you keep from a PandaCodeGen build";

  return <section id="what-you-keep" className={`${s.section} ${alt ? s.sectionAlt : ""}`} aria-labelledby={headingId}><div className={s.wrap}>
    <FadeIn className={o.intro}>
      <div><p className={s.eyebrow}>{number} / What you keep</p><h2 id={headingId} className={o.title}>{title}</h2></div>
      <div>
        {compared
          ? <p>Leaving a platform is easier when you know what its export covers. The table sets out what {joinNames(platforms)}&apos;s own help pages say you can take, as we read them on {PORTABILITY_CHECKED_LABEL}, next to what you receive at the end of a build with us.</p>
          : <p>Whether the work ends in a new build or in changes to the site you already run, you keep what we make for you. This is what our published terms say you receive at handover.</p>}
        <p className={o.canon}>{OWNERSHIP_ON_HANDOVER}</p>
      </div>
    </FadeIn>

    {compared && <div className={o.tableWrap}>
      <table className={o.table} role="table" aria-labelledby={headingId}>
        <colgroup><col className={o.itemCol} />{platforms.map((id) => <col key={id} />)}<col /></colgroup>
        <thead role="rowgroup"><tr role="row">
          <th scope="col" role="columnheader">What you want to take</th>
          {platforms.map((id) => <th scope="col" role="columnheader" key={id}>{PLATFORMS[id].name}</th>)}
          <th scope="col" role="columnheader" className={o.oursHead}>A PandaCodeGen build</th>
        </tr></thead>
        <tbody role="rowgroup">{rows.map((row) => {
          const ours = OUR_BUILD[row.item];
          const itemLabel = ITEM_LABELS[row.item];
          return <tr role="row" key={row.item}>
            <th scope="row" role="rowheader">{itemLabel}</th>
            {row.cells.map((cell, index) => {
              const name = PLATFORMS[platforms[index]].name;
              return <td role="cell" key={platforms[index]}>
                <span className={o.mobileLabel} aria-hidden="true">{name}</span>
                {cell
                  ? <><span className={`${o.status} ${o[cell.status]}`}>{STATUS_LABELS[cell.status]}</span><p className={o.detail}>{cell.detail}</p>
                      <span className={o.sources}><SourceLink href={cell.sourceUrl} label={`${name} docs`} context={`${name}, ${itemLabel.toLowerCase()}`} />{cell.also && cell.also.sourceUrl !== cell.sourceUrl && <SourceLink href={cell.also.sourceUrl} label="Second source" context={`${name}, ${itemLabel.toLowerCase()}`} />}</span></>
                  : <p className={o.detail}>Not covered by the {name} pages we checked.</p>}
              </td>;
            })}
            <td role="cell" className={o.ours}>
              <span className={o.mobileLabel} aria-hidden="true">A PandaCodeGen build</span>
              <span className={`${o.status} ${o[ours.status]}`}>{OUR_STATUS_LABELS[ours.status]}</span><p className={o.detail}>{ours.detail}</p>
              {ours.sourceUrl && ours.sourceLabel && <span className={o.sources}><SourceLink href={ours.sourceUrl} label={ours.sourceLabel} context={itemLabel.toLowerCase()} /></span>}
            </td>
          </tr>;
        })}</tbody>
      </table>
    </div>}

    <div className={o.notes}>
      <ul className={o.keepList} aria-label="Also handed over">
        {OUR_HANDOVER.map((item) => <li key={item.label}><b>{item.label}</b><p>{item.detail}</p></li>)}
      </ul>
      <div className={o.aside}>
        {compared && <>
          <p>Licence notes, from the same check:</p>
          <ul className={o.licences}>{platforms.map((id) => <li key={id}><b>{PLATFORMS[id].name}.</b> {PLATFORMS[id].licence.detail} <SourceLink href={PLATFORMS[id].licence.sourceUrl} label="Source" context={`${PLATFORMS[id].name} licence terms`} /></li>)}</ul>
          <p>Vendor columns describe each platform&apos;s own documented tools, read on {PORTABILITY_CHECKED_LABEL}. Plans and export tools change, so check the linked page before you rely on a row. Our column comes from our published terms; your written proposal states the details for your project, including any third-party licences.</p>
        </>}
        {!compared && <p>Your written proposal states the details for your project, including any third-party licences.</p>}
        <div className={o.links}><Link href={PORTABILITY_GUIDE.href} className={s.textLink}>{PORTABILITY_GUIDE.label} ↗</Link><Link href="/pricing" className={s.textLink}>See what each tier includes ↗</Link></div>
      </div>
    </div>
  </div></section>;
}
