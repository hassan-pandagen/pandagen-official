import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Real finished sites, shown early.
 *
 * The 8 Sep 2026 external audit put it plainly: the opening was claims plus a
 * form, and a sceptical buyer could not yet inspect a finished website. It was
 * right. Measured 9 Sep, the homepage rendered exactly one photograph, a
 * founder portrait, in the ninth of thirteen sections. Six real screenshots
 * were already in the repository and every one of them was reachable only by
 * navigating to a case study first.
 *
 * The audit's recommended sequence is buyer outcome and scope, then real
 * projects, then a review. This sits third, directly after the migration
 * standard and before the review block, which is that order.
 *
 * RULES FOR EDITING THIS FILE
 * - Relationship labels are canon and come from the work index. Do not promote
 *   a founder-affiliated project to "client" to make the row look stronger.
 * - Every figure here must already exist somewhere it was verified. Do not add
 *   a number to a card because the card looks thin without one. NorthDeck has
 *   no figures on purpose: none have been measured and published yet.
 * - Screenshots must contain no customer names, addresses or order values.
 */

type Preview = {
  name: string;
  relationship: string;
  what: string;
  image: string;
  alt: string;
  href: string;
  external?: boolean;
};

const featured: Preview = {
  name: "NorthDeck Group",
  relationship: "Client project",
  what: "Connected security systems and business services, built as a custom Next.js site. Live, and credited in its own footer.",
  image: "/work/northdeck-group.png",
  alt: "The NorthDeck Group homepage, a dark security systems site with a full-bleed camera photograph behind the headline",
  href: "https://northdeckgroup.com/",
  external: true,
};

const alongside: Preview[] = [
  {
    name: "MyCustomPatches",
    relationship: "Independent client",
    what: "WordPress to Next.js. Owner confirmed 22 days, more than 200 addresses across 13 templates, zero downtime and no rankings lost.",
    image: "/work/mycustompatches.png",
    alt: "The MyCustomPatches storefront after migration, showing the patch catalogue and quote entry point",
    href: "/work/mycustompatches",
  },
  {
    name: "Emblematic Studio",
    relationship: "Independent client",
    what: "A product catalogue and quote experience. Twenty product types generated from one typed registry, with a single runtime route on the whole site.",
    image: "/work/emblematic-studio.png",
    alt: "The Emblematic Studio product catalogue with its quote request flow",
    href: "/work/emblematic-studio",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-300 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-stone-600">
      {children}
    </span>
  );
}

export default function WorkPreviews() {
  return (
    <section aria-labelledby="work-previews-heading" className="bg-white px-6 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Sites we finished</p>
          <h2 id="work-previews-heading" className="mt-3 text-4xl font-bold tracking-tight text-charcoal md:text-6xl">
            Look at the work{" "}
            <span className="font-serif italic font-normal text-cognac">before you read about it.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Every screenshot below is a site that is live right now. Open any of them and check it
            yourself. Where a project has measured figures they are on its record, and where it does
            not, we say nothing about speed or traffic rather than estimate.
          </p>
        </div>

        <div className="mt-12 space-y-8 lg:space-y-10">
          {/* The newest build gets the space. It is the strongest thing to put in
              front of someone who has never seen our work. */}
          <Link
            href={featured.href}
            target={featured.external ? "_blank" : undefined}
            rel={featured.external ? "noopener noreferrer" : undefined}
            className="group block overflow-hidden rounded-3xl border border-stone-200 bg-paper transition-shadow duration-300 hover:shadow-2xl hover:shadow-stone-300/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cognac"
          >
            <Image
              src={featured.image}
              alt={featured.alt}
              width={1912}
              height={914}
              sizes="100vw"
              priority={false}
              className="max-h-[30rem] w-full border-b border-stone-200 object-cover object-top"
            />
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-charcoal">{featured.name}</h3>
                <Chip>{featured.relationship}</Chip>
              </div>
              <p className="mt-3 leading-relaxed text-stone-600">{featured.what}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-cognac">
                Open the live site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {alongside.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-paper transition-shadow duration-300 hover:shadow-xl hover:shadow-stone-300/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cognac"
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={1912}
                  height={914}
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="w-full border-b border-stone-200 object-cover"
                />
                <div className="flex grow flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-charcoal">{p.name}</h3>
                    <Chip>{p.relationship}</Chip>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.what}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cognac">
                    Read the record
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 text-base text-stone-600">
          Four more, including two labelled founder affiliated because a co-founder owns them, are on the{" "}
          <Link href="/work" className="font-semibold text-cognac underline underline-offset-4">
            work index
          </Link>
          , alongside the evidence standard each record has to meet before we publish it.
        </p>
      </div>
    </section>
  );
}
