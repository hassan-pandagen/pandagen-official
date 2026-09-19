import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudy } from "@/data/case-study-facts";
import { MIGRATION_PROJECT_DETAILS, PAYMENT_INTEGRATION_SCOPE } from "@/data/migration-projects";

const panda = caseStudy("panda-patches");
const operations = caseStudy("enterprise-ops");
const ladies = caseStudy("ladies-4-jesus");
const { pandaPatches, ladies4Jesus, aStepAboveMedical } = MIGRATION_PROJECT_DETAILS;

export default function WordPressMigrationWork() {
  return (
    <section id="our-work" aria-labelledby="migration-work-heading" className="border-y border-stone-200 bg-white px-6 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cognac">WordPress migration work</p>
          <h2 id="migration-work-heading" className="mb-4 text-3xl font-bold leading-tight tracking-tight text-charcoal md:text-4xl">
            Online stores and communities, rebuilt around the people who run them.
          </h2>
          <p className="text-lg leading-relaxed text-stone-600">Explore the live projects below and a migration currently in progress.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="overflow-hidden rounded-2xl border border-stone-200 bg-paper">
            <div className="relative aspect-video overflow-hidden border-b border-stone-200">
              <Image src="/work/panda-patches.png" alt="Panda Patches storefront, with custom patch products and ordering options." fill sizes="(min-width: 1024px) 620px, (min-width: 768px) 90vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="p-6 md:p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cognac">{pandaPatches.status} · {panda.relationship}</p>
              <h3 className="mb-3 text-2xl font-bold text-charcoal">Panda Patches: our own business, rebuilt</h3>
              <p className="leading-relaxed text-stone-700">{pandaPatches.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{pandaPatches.paymentHistory}</p>
              <p className="mt-5 border-t border-stone-200 pt-4 text-sm leading-relaxed text-stone-600">{panda.disclosure}</p>
              <div className="mt-5 flex flex-col items-start gap-3">
                <Link href={panda.href} className="inline-flex items-center gap-2 font-bold text-cognac underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac">
                  See the Panda Patches migration <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link href={operations.href} className="text-sm font-semibold text-stone-600 underline underline-offset-4 hover:text-cognac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac">
                  Explore the connected operations system
                </Link>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-stone-200 bg-paper">
            <div className="relative aspect-video overflow-hidden border-b border-stone-200">
              <Image src="/work/ladies-4-jesus.png" alt="Ladies 4 Jesus community website with stories and a Share Your Story button." fill sizes="(min-width: 1024px) 520px, (min-width: 768px) 90vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="p-6 md:p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-cognac">{ladies4Jesus.status} · {ladies.relationship}</p>
              <h3 className="mb-3 text-2xl font-bold text-charcoal">Ladies 4 Jesus: a community the owner can manage</h3>
              <p className="leading-relaxed text-stone-700">{ladies4Jesus.summary}</p>
              <p className="mt-5 border-t border-stone-200 pt-4 text-sm leading-relaxed text-stone-600">{ladies.disclosure}</p>
              <Link href={ladies.href} className="mt-5 inline-flex items-center gap-2 font-bold text-cognac underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac">
                See the community migration <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>

        <article className="mt-6 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 md:flex md:items-start md:gap-10 md:p-8">
          <div className="mb-3 shrink-0 md:mb-0 md:w-60">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cognac">{aStepAboveMedical.status}</p>
            <h3 className="text-xl font-bold text-charcoal">{aStepAboveMedical.name}</h3>
          </div>
          <div>
            <p className="leading-relaxed text-stone-700">{aStepAboveMedical.summary}</p>
            <p className="mt-3 text-sm text-stone-600">Project status as of <time dateTime={aStepAboveMedical.confirmedOn}>18 September 2026</time>.</p>
          </div>
        </article>

        <div className="mt-8 border-t border-stone-200 pt-6 md:grid md:grid-cols-[1fr_2fr] md:gap-8">
          <h3 className="mb-3 text-xl font-bold text-charcoal">Payments that fit your business</h3>
          <p className="leading-relaxed text-stone-600">{PAYMENT_INTEGRATION_SCOPE}</p>
        </div>
        <Link href="/editorial-policy" className="mt-6 inline-block text-sm font-semibold text-stone-600 underline underline-offset-4 hover:text-cognac">How we publish results</Link>
      </div>
    </section>
  );
}
