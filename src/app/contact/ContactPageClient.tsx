"use client";

import { CheckCircle2, Globe, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useLeadFormFunnel } from "@/hooks/useLeadFormFunnel";

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

const goals = [
  "SEO-safe migration",
  "Performance / Core Web Vitals",
  "Reduce platform costs",
  "Rebuild or redesign",
  "Headless ecommerce",
  "Custom app or integration",
  "Other",
];

const trafficBands = ["Under 1,000", "1,000–10,000", "10,000–50,000", "50,000+", "Unknown"];
const timelines = ["Within 30 days", "1–3 months", "3–6 months", "Researching"];
const budgets = ["Under $3,500", "$3,500–$7,500", "$7,500–$15,000", "$15,000+", "Not sure"];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.pandacodegen.com/contact#webpage",
      url: "https://www.pandacodegen.com/contact",
      name: "Request a Website Migration Plan",
      description: "Share a website, platform, goal, traffic band, timeline, and budget so PandaCodeGen can assess fit and migration risks.",
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

    setIsSubmitting(true);
    try {
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
    <main className="min-h-screen overflow-x-hidden bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Header />

      <section className="relative px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute right-1/4 top-20 h-96 w-96 rounded-full bg-stone-200/50 blur-[110px]" />
        <div className="container relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cognac">Migration fit request</p>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Plan the move <span className="font-serif italic text-cognac">before you build.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-700">
              Tell us what runs today, what must be preserved, and what is driving the change. We will use the information to assess fit and propose a sensible next step.
            </p>

            <a
              href="#contact-quote-form"
              className="mt-7 inline-flex min-h-11 items-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-bold transition-colors hover:border-cognac hover:text-cognac lg:hidden"
            >
              Go to the request form
            </a>

            <div className="mt-10 rounded-2xl border border-stone-300 bg-white p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-600">Prefer email?</p>
                  <a href="mailto:info@pandacodegen.com" className="mt-1 inline-block break-all font-semibold hover:text-cognac">
                    info@pandacodegen.com
                  </a>
                </div>
              </div>
              <div className="mt-6 flex gap-4 border-t border-stone-200 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-600">Mailing address</p>
                  <address className="mt-1 not-italic leading-relaxed text-stone-700">
                    12250 S Kirkwood Rd, Apt 1128<br />
                    Stafford, TX 77477, United States
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-50 p-6">
              <h2 className="text-xl font-bold">What happens next</h2>
              <ol className="mt-5 space-y-4 text-sm leading-relaxed text-stone-700">
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" /> We review the current platform, goals, and constraints.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" /> We clarify missing scope or evidence before recommending a build.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" /> Any price, schedule, acceptance test, ownership, support, or remedy is documented in the accepted written project terms.</li>
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-300 bg-white p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Working with us from anywhere</h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">
                    We are a remote-first studio and welcome enquiries worldwide. Most of our work to date has been with
                    clients in the United States, and we currently have live conversations in the United Kingdom and Asia.
                    Projects run over email, shared documents and scheduled calls, so your time zone is a scheduling
                    question rather than a barrier. Contracts and invoicing are handled in US dollars unless we agree
                    otherwise in writing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cognac/30 bg-cognac/5 p-6">
              <h2 className="text-xl font-bold">What you get, and where it is written down</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                  <span><strong>Full ownership on handover.</strong> Source code, design files, CMS models, documentation and production accounts are transferred to, or created under, your control.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                  <span><strong>Fixed price for the agreed scope.</strong> No hourly billing. Separately priced additions are listed explicitly before implementation.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                  <span><strong>A 90+ Lighthouse handover target</strong> on mobile and desktop for the representative pages named in your scope, verified across three recorded runs. It is a lab acceptance target, not a ranking or revenue promise.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                  <span><strong>Included support after launch</strong>, with the start point, coverage and duration stated in the accepted terms.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                  <span><strong>Regulated data handled properly.</strong> Where a project involves protected health information, we will execute a Business Associate Agreement. Tell us early if HIPAA, GDPR or a sector-specific regime applies, so it shapes the architecture rather than being retrofitted.</span>
                </li>
              </ul>
              <p className="mt-5 text-xs leading-5 text-stone-600">
                These are the terms we normally work to. The accepted written project terms are what actually bind either
                side, and they take precedence over anything on this page. See{" "}
                <Link href="/pricing" className="font-semibold text-cognac hover:underline">pricing</Link> for current
                tiers and the full acceptance and refund conditions.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-300 bg-white p-5 shadow-card md:p-9">
            {isSuccess ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cognac/10 text-cognac">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold">Request received</h2>
                <p className="mt-3 max-w-md text-stone-700">We will review the information and reply by email.</p>
                <button
                  type="button"
                  onClick={() => {
                    formFunnel.reset();
                    setFieldErrors({});
                    setSubmitError(null);
                    setIsSuccess(false);
                  }}
                  className="mt-7 min-h-11 rounded-xl border border-stone-300 px-5 py-3 font-semibold hover:border-cognac hover:text-cognac"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <h2 id="contact-quote-form" tabIndex={-1} className="scroll-mt-32 text-3xl font-bold outline-none">
                  Get your migration plan
                </h2>
                <p className="mt-2 text-sm text-stone-700">Required fields are marked with an asterisk.</p>

                <form
                  name="contact_quote"
                  aria-labelledby="contact-quote-form"
                  aria-busy={isSubmitting}
                  onSubmit={handleSubmit}
                  onFocusCapture={formFunnel.onFocusCapture}
                  onBlurCapture={formFunnel.onBlurCapture}
                  onInvalidCapture={handleInvalidCapture}
                  className="mt-7 space-y-5"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <ContactField label="Name" id="contact-name" required>
                      <input
                        required
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                        onInput={() => setFieldErrors((current) => ({ ...current, name: undefined }))}
                        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                      />
                      {fieldErrors.name && <p id="contact-name-error" role="alert" className="mt-2 text-sm text-red-800">{fieldErrors.name}</p>}
                    </ContactField>
                    <ContactField label="Email" id="contact-email" required>
                      <input
                        required
                        type="email"
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                        onInput={() => setFieldErrors((current) => ({ ...current, email: undefined }))}
                        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                      />
                      {fieldErrors.email && <p id="contact-email-error" role="alert" className="mt-2 text-sm text-red-800">{fieldErrors.email}</p>}
                    </ContactField>
                    <ContactField label="Phone" id="contact-phone" hint="optional">
                      <input type="tel" id="contact-phone" name="phone" autoComplete="tel" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac" />
                    </ContactField>
                    <ContactField label="Current website" id="contact-url" hint="optional">
                      <input type="url" id="contact-url" name="currentUrl" autoComplete="url" placeholder="https://example.com" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac" />
                    </ContactField>
                    <ContactSelect label="Current platform" id="contact-platform" name="currentPlatform" options={platforms} />
                    <ContactSelect label="Primary goal" id="contact-goal" name="primaryGoal" options={goals} />
                    <ContactSelect label="Monthly traffic" id="contact-traffic" name="trafficBand" options={trafficBands} />
                    <ContactSelect label="Timeline" id="contact-timeline" name="timeline" options={timelines} />
                    <ContactSelect label="Indicative budget" id="contact-budget" name="budget" options={budgets} />
                  </div>

                  <ContactField label="What have you already tried?" id="contact-tried" hint="optional">
                    <textarea
                      id="contact-tried"
                      name="alreadyTried"
                      rows={3}
                      autoComplete="off"
                      placeholder="Caching plugins, a speed agency, a redesign, switching hosts. What happened?"
                      className="w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                    />
                  </ContactField>

                  <ContactField label="Project details" id="contact-details" hint="optional">
                    <textarea
                      id="contact-details"
                      name="details"
                      rows={4}
                      autoComplete="off"
                      placeholder="Important URLs, integrations, constraints, or questions"
                      className="w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                    />
                  </ContactField>

                  <p className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
                    For security, files cannot be uploaded here. We can arrange a safe transfer method after replying.
                  </p>

                  <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="contact-website-confirm">Leave this field empty</label>
                    <input id="contact-website-confirm" name="website_url_confirm" tabIndex={-1} autoComplete="off" />
                  </div>

                  {submitError && (
                    <div role="alert" aria-live="assertive" className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-5 py-4 text-lg font-bold text-white transition-colors hover:bg-cognac disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" /> {isSubmitting ? "Sending…" : "Send request"}
                  </button>
                  <p className="text-center text-xs leading-relaxed text-stone-600">
                    No obligation. Your submission is used to respond to this request as described in our <a href="/privacy" className="font-medium text-cognac underline underline-offset-2 hover:text-orange-800">privacy notice</a>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactField({
  label,
  id,
  hint,
  required = false,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-stone-800">
        {label} {required ? <span className="text-cognac">*</span> : hint ? <span className="font-normal text-stone-600">({hint})</span> : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function ContactSelect({ label, id, name, options }: { label: string; id: string; name: string; options: string[] }) {
  return (
    <label htmlFor={id} className="block text-sm font-bold text-stone-800">
      {label} <span className="font-normal text-stone-600">(optional)</span>
      <select id={id} name={name} defaultValue="" className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac">
        <option value="">Select an option</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
