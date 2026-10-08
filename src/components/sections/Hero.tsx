import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { HeroCTAs } from "./HeroClient";
import ProjectPlayer from "./ProjectPlayer";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f1efea] px-6 pb-16 pt-28 text-charcoal md:px-10 md:pb-24 md:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20 mix-blend-multiply" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-400 pt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-stone-600">
          <span>Independent web development studio</span>
          <span className="hidden items-center gap-2 sm:inline-flex">Made with the founders <ArrowDownRight aria-hidden="true" size={15} /></span>
        </div>

        <h1 className="mt-8 max-w-[15ch] text-[clamp(3.2rem,7.3vw,7.8rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] md:mt-10">
          Websites built for the way you do <span className="text-cognac">business.</span>
        </h1>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)] lg:items-start lg:gap-16">
          <div className="max-w-[34rem] lg:pt-10">
            <p className="text-xl font-medium leading-[1.45] text-stone-700 md:text-[1.45rem]">
              We design and build business websites and online stores around how your customers enquire and buy.
              Your team can edit the content, and you own the code.
            </p>
            <p className="mt-5 max-w-[30rem] text-sm leading-6 text-stone-600">
              Built so Google and AI assistants can read the pages properly. Scope and price agreed before work starts;
              websites and online stores from $1,500.
            </p>

            <div className="mt-8 min-h-[132px] sm:min-h-[60px]">
              <HeroCTAs />
            </div>
            <p className="mt-5 text-sm text-stone-600">
              Have an existing site? <Link href="/free-audit" className="font-bold text-cognac underline underline-offset-4">Run a free technical scan</Link> first.
            </p>
          </div>

          <ProjectPlayer />
        </div>
      </div>
    </section>
  );
}
