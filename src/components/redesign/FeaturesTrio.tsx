import Image from "next/image";
import Link from "next/link";
import WrittenCheckButton from "@/components/ui/WrittenCheckButton";
import { ArrowRight } from "lucide-react";
import WebsiteChecklist from "./WebsiteChecklist";
import actions from "./SalesActions.module.css";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

export default function FeaturesTrio() {
  return (
    <section aria-labelledby="features-title" className="px-6 pb-6 pt-10 md:px-10 md:py-20" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1440px]">
        <WebsiteChecklist>
          <div className="lg:col-span-7">
            <p className="mb-5 text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.accentText }}>
              A quick check
            </p>
            <h2
              id="features-title"
              className="max-w-[36ch]"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.3rem, 4.6vw, 4.4rem)", lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}
            >
              Is your website costing you customers?
            </h2>
          </div>
        </WebsiteChecklist>

        <div className="mt-6 grid gap-4 sm:mt-8 xl:grid-cols-[1.12fr_1fr]">
          <div
            data-feature-costs
            className="flex flex-col justify-center border-t-4 px-6 py-8 sm:px-10 sm:py-10 lg:px-12"
            style={{ backgroundColor: T.dark, borderColor: T.onDarkAccent, color: T.onDark }}
          >
            <h3 className="text-[clamp(2rem,4vw,3.75rem)] font-bold leading-[1.08] [text-wrap:balance]" style={{ fontFamily: DISPLAY }}>
              See what your website could automate.
            </h3>
            <p className="mt-4 max-w-[36rem] text-[17px] leading-relaxed sm:text-[19px]" style={{ color: T.onDarkQuiet }}>
              Get a free written check that shows which tasks could run on their own and what it would cost to set them up. No commitment.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 sm:mt-8" style={{ fontFamily: MONO }}>
              <WrittenCheckButton
                location="home_checklist"
                className={`${actions.button} ${actions.light} inline-flex min-h-12 items-center gap-3 px-5 py-3 text-left text-[15px] font-semibold`}
              >
                Get your free written check <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
              </WrittenCheckButton>
              <Link
                href="/services/custom-engineering"
                className={`${actions.link} ${actions.darkLink} inline-flex min-h-11 items-center text-[14px] font-medium underline underline-offset-4`}
              >
                Explore workflow automation
              </Link>
            </div>
          </div>

          <article className="grid min-w-0 gap-4 border p-5 sm:grid-cols-2 sm:items-center sm:p-6 xl:grid-cols-[1.12fr_1fr]" style={{ backgroundColor: T.paper, borderColor: T.rule }}>
            <Image
              src="/work/enterprise-ops.png"
              alt="Panda Patches dashboard showing orders and the production queue, with private details blurred"
              width={1711}
              height={919}
              sizes="(min-width: 1280px) 340px, (min-width: 640px) 45vw, 100vw"
              className="h-auto w-full border"
              style={{ borderColor: T.rule }}
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase" style={{ fontFamily: MONO, color: T.accentText }}>Founder-affiliated</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight" style={{ color: T.ink }}>Panda Patches CRM</h3>
              <p className="mt-2 text-[16px] leading-relaxed" style={{ color: T.body }}>
                Wholesale orders become invoices and payment links. The CRM tracks production, payments and delivery follow-up.
              </p>
              <Link
                href="/work/enterprise-ops"
                className={`${actions.link} mt-2 inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold underline underline-offset-4`}
                style={{ fontFamily: MONO }}
              >
                See how Panda Patches works <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
