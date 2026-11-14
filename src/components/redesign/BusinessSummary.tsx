import styles from "./SalesActions.module.css";
import Link from "next/link";
import { ArrowRight, MousePointer2, Workflow, KeyRound } from "lucide-react";
import { BODY, DISPLAY, UI, T } from "@/components/redesign/tokens";

const BENEFITS = [
  { icon: MousePointer2, title: "Make the next step easy.", text: "Give customers a clear route to enquire, book or buy, on their phone or at their desk." },
  { icon: Workflow, title: "Keep the work moving.", text: "Connect bookings, payments, customer records and staff tasks around the way your team works." },
  { icon: KeyRound, title: "Keep control of your site.", text: "Get an editor your team can use, practical training, and your code and accounts in your name." },
];

export default function BusinessSummary() {
  return (
    <section data-home-summary aria-labelledby="business-summary-title" className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.dark, color: T.onDark }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.16em]" style={{ fontFamily: UI, color: T.onDarkAccent }}>Your next stage starts here</p>
            <h2 id="business-summary-title" style={{ fontFamily: DISPLAY, fontSize: "clamp(2.7rem, 5vw, 5.2rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", textWrap: "balance" }}>
              Turn your website into<br /><span style={{ color: T.onDarkAccent }}>a working part of your business.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="max-w-[32rem] text-xl leading-[1.65] md:text-[22px]" style={{ fontFamily: BODY }}>PandaCodeGen builds websites, online stores and business systems that connect your customers to the people and processes behind your business.</p>
            <p className="mt-5 max-w-[32rem] text-base leading-relaxed" style={{ color: T.onDarkQuiet }}>Starting fresh or replacing a site you&rsquo;ve outgrown? Work directly with Hassan and Imran to agree what you need, what it costs and how we&rsquo;ll deliver it.</p>
            <Link href="/contact" className={`${styles.button} ${styles.light} mt-7 inline-flex min-h-12 items-center justify-between gap-8 px-6 py-3 text-sm font-semibold`} style={{ fontFamily: UI }}>Plan it with the founders<ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="mt-12 grid gap-8 border-t pt-8 md:mt-16 md:grid-cols-3 md:gap-10" style={{ borderColor: T.onDarkRule }}>
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon size={25} className="mb-5" style={{ color: T.onDarkAccent }} aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold" style={{ fontFamily: UI }}>{title}</h3>
              <p className="max-w-[25rem] text-base leading-relaxed" style={{ color: T.onDarkQuiet }}>{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t pt-6 text-sm leading-relaxed" style={{ borderColor: T.onDarkRule, color: T.onDarkQuiet }}>
          Planning a move? Our <Link href="/services/wordpress-migration" className={`${styles.link} ${styles.darkLink} underline underline-offset-4`}>website migration service</Link> covers your content, links and integrations. Explore our <Link href="/services/ecommerce" className={`${styles.link} ${styles.darkLink} underline underline-offset-4`}>online store builds</Link> too.
        </p>
      </div>
    </section>
  );
}
