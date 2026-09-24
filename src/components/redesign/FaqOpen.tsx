import { homeFaqs } from "@/data/home-faqs";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// Homepage FAQ, redesign candidate, 24 Sep 2026. ANSWERS ALWAYS VISIBLE: the
// live homepage emits FAQPage JSON-LD for these exact answers, and structured
// data must describe text a visitor can see (see HomeFaqSection.tsx). So this is
// an open two-column list, never an accordion. Same data file as the live page.

export default function FaqOpen() {
  return (
    <section aria-labelledby="faq-title" className="px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="faq-title"
          className="max-w-[16ch]"
          style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
        >
          Common questions about working with us
        </h2>

        <dl className="mt-16 border-t md:mt-24" style={{ borderColor: T.rule }}>
          {homeFaqs.map((f, i) => (
            <div key={f.q} className="grid gap-4 border-b py-10 md:grid-cols-12 md:gap-8 md:py-12" style={{ borderColor: T.rule }}>
              <dt className="md:col-span-5">
                <span className="block text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", lineHeight: 1.15 }}>
                  {f.q}
                </span>
              </dt>
              <dd className="max-w-[44rem] text-[17px] leading-[1.7] md:col-span-6 md:col-start-7" style={{ color: T.body }}>
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
