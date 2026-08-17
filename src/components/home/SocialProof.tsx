import Link from "next/link";
import { CLIENT_REVIEWS } from "@/data/reviews";
import StaggerTestimonials from "@/components/ui/StaggerTestimonials";
import { ArrowRight, ArrowUpRight, Building2, Clock, Quote } from "lucide-react";

// Reviews live in src/data/reviews.ts so the home page and the case-study
// strips cannot drift apart on what someone actually said.
const reviews = CLIENT_REVIEWS.map(r => ({
  quote: r.quote,
  source: `${r.name} on ${r.platform}`,
  detail: r.date,
  href: r.href,
  caseStudy: r.caseStudy,
  name: r.name,
}));

export default function SocialProof() {
  return (
    <section
      aria-labelledby="client-proof-heading"
      className="border-y border-stone-300 bg-paper px-6 py-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cognac">
            Evidence, not theater
          </p>
          <h2
            id="client-proof-heading"
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
          >
            Client words with a source{" "}
            <span className="font-serif font-normal italic text-cognac">you can open.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            No stock portraits, rotating star theatre, or anonymous outcome claims. These are short excerpts from public review pages, linked so you can read the full context yourself. Four of them carry Trustpilot&rsquo;s own &ldquo;unprompted&rdquo; label, meaning we never asked for them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://clutch.co/profile/panda-code-gen#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-bold text-charcoal transition-colors hover:border-cognac hover:text-cognac"
            >
              Clutch review <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://www.trustpilot.com/review/pandacodegen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-bold text-charcoal transition-colors hover:border-cognac hover:text-cognac"
            >
              Trustpilot reviews <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          {/* Independent press citation. The link is the evidence: the article names
              Hassan and links back here, so a reader can check it in one click. No
              readership or reach figure is stated, because we cannot source one. */}
          <div className="mt-8 border-t border-stone-300 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-600">Featured in</p>
            <p className="mt-2 text-base leading-7 text-stone-700">
              <a
                href="https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg italic text-cognac underline decoration-cognac/40 underline-offset-4 transition-colors hover:decoration-cognac"
              >
                Woman&rsquo;s World
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              {/* States what happened, not the label the magazine used. This read
                  "as an AI expert" until 11 Aug 2026 — on the homepage, which is
                  the single strongest signal on the site about what this company
                  is. PandaCodeGen sells website migration and custom engineering;
                  an AI-expertise claim here blurs the entity these pages exist to
                  make precise, and it is not something we could evidence. */}
              quoted co-founder Hassan Jamal on how remote AI-training work operates.
            </p>
          </div>
          </div>


        <div className="mt-10">
          <StaggerTestimonials />
        </div>

        <div className="mt-12 flex flex-col gap-5 border-y border-cognac/30 py-6 md:flex-row md:items-center md:justify-between">
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <div className="row-span-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cognac/10 text-cognac">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">Founder-affiliated, clearly labelled</p>
            <p className="text-xl font-bold text-charcoal">Panda Patches is owned by a PandaCodeGen co-founder.</p>
            <p className="text-sm text-stone-600">We built its platform but hold no ownership stake. It is presented as operating experience, not as an independent client endorsement.</p>
          </div>
          <Link href="/work" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-charcoal hover:text-cognac">
            See the project records <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
