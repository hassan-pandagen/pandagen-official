import Link from "next/link";
import { editorialCoverage } from "@/data/editorial-coverage";

export function QuotedIn() {
  return (
    <aside aria-label="Editorial quotes" className="mx-auto max-w-[1520px] px-6 md:px-10">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 border-y border-black/15 py-4">
        <p className="text-xs font-bold uppercase tracking-widest">Quoted in</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
          {editorialCoverage.filter(item => item.id !== "womans-world").map(item => (
            <li key={item.id}>
              <a href={item.url} className="underline decoration-black/30 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4">{item.publication}</a>
            </li>
          ))}
        </ul>
        <Link href="/about/hassan#hassan-press" className="text-sm text-cognac underline underline-offset-4 md:ml-auto">Read the contributions</Link>
      </div>
    </aside>
  );
}

export function EditorialCoverageList() {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {editorialCoverage.map(item => (
        <li key={item.id} className="border border-black/15 p-5">
          <p className="text-sm font-semibold">{item.publication} <span aria-hidden="true">&middot;</span> <time dateTime={item.published}>{item.dateLabel}</time></p>
          <a href={item.url} className="mt-2 block font-serif text-xl text-cognac underline underline-offset-4">{item.title}</a>
          <p className="mt-3 text-sm leading-relaxed">{item.topic}</p>
          {item.guide && <Link href={item.guide} className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">Read Hassan&apos;s practical guide <span className="sr-only">for {item.publication}</span></Link>}
        </li>
      ))}
    </ul>
  );
}
