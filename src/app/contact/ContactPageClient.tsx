"use client";

import { ArrowDown, ArrowUpRight, CheckCircle2, ChevronDown, Mail, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useLeadFormFunnel } from "@/hooks/useLeadFormFunnel";
import { getAttribution } from "@/lib/analytics/trafficSource";

const platforms = [
  "WordPress",
  "Webflow",
  "GoHighLevel",
  "Wix",
  "Squarespace",
  "Shopify",
  "WooCommerce",
  "Custom / Other",
  "No current website",
];

const timelines = ["Within 30 days", "1–3 months", "3–6 months", "Researching"];
const budgets = ["Under $3,500", "$3,500–$7,500", "$7,500–$15,000", "$15,000+", "Not sure"];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.pandacodegen.com/contact#webpage",
      url: "https://www.pandacodegen.com/contact",
      name: "Talk to the founders | PandaCodeGen",
      description: "Ask the founders about a new website, online store, redesign, migration, custom software or AI SEO. A founder replies by email.",
      inLanguage: "en-US",
      mainEntity: { "@id": "https://www.pandacodegen.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.pandacodegen.com/#organization",
      name: "PandaCodeGen",
      url: "https://www.pandacodegen.com/",
      email: "info@pandacodegen.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12250 S Kirkwood Rd, Apt 1128",
        addressLocality: "Stafford",
        addressRegion: "TX",
        postalCode: "77477",
        addressCountry: "US",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.pandacodegen.com/contact" },
      ],
    },
  ],
};

async function responseMessage(response: Response): Promise<string> {
  try {
    const body = await response.json() as { error?: unknown };
    if (typeof body.error === "string" && body.error.trim()) return body.error;
  } catch {
    // A generic message is used for non-JSON proxy errors.
  }
  return "We could not send your request. Please email info@pandacodegen.com.";
}

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});
  const formFunnel = useLeadFormFunnel({ formId: "contact_page", active: !isSuccess });

  // Stamped on first interaction, not in an effect: the server render must not
  // depend on a clock. The API only needs a plausible fill duration, and a form
  // submitted faster than a human can read it is the cheapest bot signal there
  // is. HeroLeadForm and QuoteModal already sent this; this form did not, so the
  // check could never fire on the page that gets the most considered enquiries.
  const formLoadedAtRef = useRef(0);
  const stampFormLoad = () => {
    if (formLoadedAtRef.current === 0) formLoadedAtRef.current = Date.now();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formFunnel.markSubmitAttempt();
    setSubmitError(null);

    if (formData.get("website_url_confirm")) {
      formFunnel.markIgnored();
      setIsSuccess(true);
      return;
    }
    if (formLoadedAtRef.current > 0) formData.append("_t", String(formLoadedAtRef.current));

    setIsSubmitting(true);
    try {
      // This form sent no attribution at all until 28 Aug 2026, while the hero
      // form and the quote modal both did. Every enquiry from the contact page,
      // which is where the most considered ones arrive, was landing with no
      // source, no landing page and no first-visit time.
      const attribution = getAttribution();
      formData.append("trafficSource", attribution.source);
      formData.append("trafficMedium", attribution.medium);
      if (attribution.campaign && attribution.campaign !== "none") {
        formData.append("trafficCampaign", attribution.campaign);
      }
      if (attribution.landingPage) formData.append("landingPage", attribution.landingPage);
      formData.append("submittedFrom", window.location.pathname);
      if (attribution.firstVisit) formData.append("firstVisit", attribution.firstVisit);

      const response = await fetch("/api/submit-quote", { method: "POST", body: formData });
      if (!response.ok) throw new Error(await responseMessage(response));
      formFunnel.markSubmitted();
      form.reset();
      setFieldErrors({});
      setIsSuccess(true);
    } catch (error) {
      formFunnel.markSubmitError("network_or_server");
      setSubmitError(error instanceof Error ? error.message : "We could not send your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInvalidCapture = (event: React.FormEvent<HTMLFormElement>) => {
    formFunnel.onInvalidCapture(event);
    const control = event.target;
    if (!(control instanceof HTMLInputElement)) return;
    if (control.name === "name") {
      setFieldErrors((current) => ({ ...current, name: "Enter your name." }));
    }
    if (control.name === "email") {
      setFieldErrors((current) => ({
        ...current,
        email: control.validity.valueMissing ? "Enter your email address." : "Enter a valid email address.",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Header />
      <main>
      <section className="px-5 pb-16 pt-28 sm:px-8 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1.12fr] lg:gap-16">
          <div className="lg:pt-4">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-cognac">A conversation starts here</p>
            <h1 className="max-w-xl text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-[1.06] tracking-tight">
              Talk directly to <span className="font-serif font-normal italic text-cognac">the founders.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
              A new website, a better online store, or something that isn&apos;t working? Tell us what you have in mind. You&apos;ll hear from Hassan or Imran.
            </p>
            <a href="#contact-quote-form" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cognac underline underline-offset-4 lg:hidden">
              Write us a message <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="mt-8 grid grid-cols-2 gap-3 border-y border-stone-200 py-6 sm:gap-5 lg:mt-10">
              {[
                { name: "Hassan Jamal", photo: "/team/hassan.png", href: "/about/hassan" },
                { name: "Imran Raza Ladhani", photo: "/team/imran.png", href: "/about/imran" },
              ].map((founder) => (
                <Link key={founder.href} href={founder.href} className="group flex min-w-0 flex-col items-start gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac sm:flex-row lg:flex-col xl:flex-row">
                  <Image src={founder.photo} alt={founder.name} width={64} height={64} sizes="64px" className="h-16 w-16 shrink-0 rounded-2xl object-cover" loading="eager" />
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-5 group-hover:text-cognac">{founder.name}</span>
                    <span className="mt-1 block text-xs text-stone-500">Co-founder</span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-cognac">Meet {founder.name.split(" ")[0]} <ArrowUpRight className="h-3 w-3" aria-hidden="true" /></span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 text-sm">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
              <div>
                <p className="text-stone-500">Prefer email?</p>
                <a href="mailto:info@pandacodegen.com" className="mt-1 inline-block break-all font-semibold underline-offset-4 hover:underline">info@pandacodegen.com</a>
              </div>
            </div>
          </div>

          <div className="self-start rounded-3xl border border-stone-200 bg-white p-5 shadow-[0_12px_48px_-24px_rgba(28,25,23,0.18)] sm:p-8">
            {isSuccess ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
                <CheckCircle2 className="mb-5 h-12 w-12 text-cognac" aria-hidden="true" />
                <h2 className="text-3xl font-bold tracking-tight">Your message is with us.</h2>
                <p className="mt-4 max-w-sm leading-relaxed text-stone-600">Hassan or Imran will reply by email, usually within one business day.</p>
                <button type="button" onClick={() => {
                  formFunnel.reset();
                  formLoadedAtRef.current = 0;
                  setFieldErrors({});
                  setSubmitError(null);
                  setIsSuccess(false);
                }} className="mt-7 min-h-11 rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold hover:border-cognac hover:text-cognac">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 id="contact-quote-form" tabIndex={-1} className="scroll-mt-28 text-2xl font-bold leading-tight tracking-tight outline-none sm:text-3xl">What would you like help with?</h2>
                <p className="mt-3 text-sm leading-6 text-stone-500">A question is enough to start. Only your name and email are required.</p>
                <form name="contact_quote" aria-labelledby="contact-quote-form" aria-busy={isSubmitting} onSubmit={handleSubmit}
                  onFocusCapture={(event) => { stampFormLoad(); formFunnel.onFocusCapture(event); }}
                  onBlurCapture={formFunnel.onBlurCapture} onInvalidCapture={handleInvalidCapture} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <ContactField label="Your name" id="contact-name" required>
                      <input required id="contact-name" name="name" autoComplete="name" maxLength={100}
                        aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                        onInput={() => setFieldErrors((current) => ({ ...current, name: undefined }))} className={inputClass} />
                      {fieldErrors.name && <p id="contact-name-error" role="alert" className="mt-2 text-sm text-red-800">{fieldErrors.name}</p>}
                    </ContactField>
                    <ContactField label="Email address" id="contact-email" required>
                      <input required type="email" id="contact-email" name="email" autoComplete="email" maxLength={254}
                        aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                        onInput={() => setFieldErrors((current) => ({ ...current, email: undefined }))} className={inputClass} />
                      {fieldErrors.email && <p id="contact-email-error" role="alert" className="mt-2 text-sm text-red-800">{fieldErrors.email}</p>}
                    </ContactField>
                  </div>
                  <ContactField label="Your message" id="contact-details" hint="optional">
                    <textarea id="contact-details" name="details" rows={4} maxLength={5000} placeholder="What are you looking to build, change or figure out?" className={`${inputClass} resize-y`} />
                  </ContactField>
                  <ContactField label="Website" id="contact-url" hint="if you have one">
                    <input type="text" inputMode="url" id="contact-url" name="currentUrl" autoComplete="url" maxLength={2048} placeholder="example.com" className={inputClass} />
                  </ContactField>
                  <details className="group rounded-xl border border-stone-200">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cognac [&::-webkit-details-marker]:hidden">
                      <span>Add project details <span className="font-normal text-stone-500">(optional)</span></span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-stone-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="grid gap-4 border-t border-stone-200 px-4 py-5 sm:grid-cols-2">
                      <ContactField label="Phone" id="contact-phone" hint="optional"><input type="tel" id="contact-phone" name="phone" autoComplete="tel" maxLength={50} className={inputClass} /></ContactField>
                      <ContactSelect label="Current platform" id="contact-platform" name="currentPlatform" options={platforms} />
                      <ContactSelect label="Timeline" id="contact-timeline" name="timeline" options={timelines} />
                      <ContactSelect label="Budget" id="contact-budget" name="budget" options={budgets} />
                    </div>
                  </details>
                  <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="contact-website-confirm">Leave this field empty</label>
                    <input id="contact-website-confirm" name="website_url_confirm" tabIndex={-1} autoComplete="off" />
                  </div>
                  {submitError && <div role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">{submitError}</div>}
                  <div>
                    <button type="submit" disabled={isSubmitting} className="flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-4 text-base font-bold text-white transition-colors hover:bg-cognac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac disabled:cursor-not-allowed disabled:opacity-60">
                      {isSubmitting ? "Sending…" : "Send your message"} <Send className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <p className="mt-3 text-center text-xs leading-5 text-stone-500">A founder replies, usually within one business day. Every message gets an answer, whether or not it turns into a quote.</p>
                  </div>
                  <p className="text-center text-xs leading-5 text-stone-500">We use your details to reply to your message. <Link href="/privacy" className="underline underline-offset-4 hover:text-cognac">Privacy notice</Link></p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="next-steps-heading" className="border-t border-stone-200 px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 id="next-steps-heading" className="text-2xl font-bold tracking-tight">A simple next step.</h2>
          <ol className="mt-7 grid gap-7 md:grid-cols-3 md:gap-10">
            {[
              { title: "We read your message", text: "Hassan or Imran looks at what you need and replies by email. A full project brief isn't needed." },
              { title: "We work out what would help", text: "We ask any follow-up questions and, if useful, arrange a call. You can also keep the conversation on email." },
              { title: "You decide where it goes", text: "If there's a project to take forward, we agree the scope and price before work starts. Asking a question doesn't commit you to one." },
            ].map((step, index) => <li key={step.title} className="border-t border-stone-200 pt-5"><span className="text-xs font-bold tracking-widest text-cognac">0{index + 1}</span><h3 className="mt-3 text-base font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{step.text}</p></li>)}
          </ol>
          <div className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-6 text-sm leading-6 text-stone-500 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-md">We work remotely with businesses worldwide. Looking for a starting point? Explore our <Link href="/services" className="font-medium text-charcoal underline underline-offset-4">services</Link> and <Link href="/pricing" className="font-medium text-charcoal underline underline-offset-4">pricing and project terms</Link>.</p>
            <address className="not-italic sm:text-right"><span className="block font-medium text-charcoal">Mailing address</span>12250 S Kirkwood Rd, Apt 1128<br />Stafford, TX 77477, United States</address>
          </div>
        </div>
      </section>
      </main>
      <Footer showCta={false} />
    </div>
  );
}

const inputClass = "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal placeholder:text-stone-400 outline-none transition-colors focus:border-cognac focus:ring-2 focus:ring-cognac/15";

function ContactField({ label, id, hint, required = false, children }: {
  label: string; id: string; hint?: string; required?: boolean; children: React.ReactNode;
}) {
  return <div><label htmlFor={id} className="block text-sm font-semibold text-charcoal">{label}{required ? <span className="text-cognac"> *</span> : hint ? <span className="font-normal text-stone-500"> ({hint})</span> : null}</label><div className="mt-2">{children}</div></div>;
}

function ContactSelect({ label, id, name, options }: { label: string; id: string; name: string; options: string[] }) {
  return <ContactField label={label} id={id} hint="optional"><select id={id} name={name} defaultValue="" className={inputClass}><option value="">Not sure yet</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></ContactField>;
}
