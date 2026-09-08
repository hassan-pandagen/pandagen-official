import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, HelpCircle, Route, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type FAQ = { question: string; answer: string };

type MigrationLandingProps = {
  eyebrow: string;
  title: string;
  summary: string;
  platform: string;
  diagnosticItems: string[];
  migrationItems: string[];
  faq: FAQ[];
};

const phases = [
  {
    title: "Inventory",
    body: "Map every URL, template, piece of content, data set, form, integration, analytics tag, consent rule, user role, server and account, and say who owns each.",
  },
  {
    title: "Baseline and scope",
    body: "Record how it behaves today, then agree what you get, what you do not, what it depends on, how you sign it off, what it costs, when it happens, and who does what.",
  },
  {
    title: "Build and verify",
    body: "Build it away from your live site, then test real journeys, the redirects, the metadata, accessibility, speed, security and how data is handled.",
  },
  {
    title: "Cut over and observe",
    body: "Launch from a written plan that says how to reverse it, check production properly, watch for failures and search signals, then hand it over.",
  },
];

function withoutEmDashes(value: string) {
  return value.replace(/\s*\u2014\s*/g, ", ");
}

function splitTitleForAccent(value: string) {
  const title = withoutEmDashes(value);
  const marker = " without ";
  const markerIndex = title.toLowerCase().indexOf(marker);

  if (markerIndex === -1) {
    return { lead: title, accent: "" };
  }

  return {
    lead: title.slice(0, markerIndex),
    accent: title.slice(markerIndex + 1),
  };
}

export default function MigrationLanding({
  eyebrow,
  title,
  summary,
  platform,
  diagnosticItems,
  migrationItems,
  faq,
}: MigrationLandingProps) {
  const safeEyebrow = withoutEmDashes(eyebrow);
  const safeSummary = withoutEmDashes(summary);
  const safePlatform = withoutEmDashes(platform);
  const titleParts = splitTitleForAccent(title);

  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <Header />
      <section className="relative overflow-hidden border-b border-cognac/30 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="absolute inset-x-0 top-0 h-1 bg-cognac" aria-hidden="true" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-cognac/5 blur-3xl md:h-96 md:w-96" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <div className="border-l-2 border-cognac pl-5 md:pl-8">
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-cognac">
              <span className="h-2 w-2 rotate-45 bg-cognac" aria-hidden="true" />
              {safeEyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              {titleParts.lead}
              {titleParts.accent ? (
                <>
                  {" "}
                  <span className="font-serif font-normal italic text-cognac">{titleParts.accent}</span>
                </>
              ) : null}
            </h1>
          </div>
          <p data-speakable="true" className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 md:ml-8 md:text-xl">{safeSummary}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cognac px-6 font-bold text-white transition-colors hover:bg-charcoal md:ml-8">
              Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-full border border-cognac/50 bg-white px-6 font-bold text-charcoal transition-colors hover:border-cognac hover:text-cognac">
              Review example scopes
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="diagnostic-heading">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cognac text-white shadow-lg shadow-cognac/15">
              <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 id="diagnostic-heading" className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              First determine <span className="font-serif font-normal italic text-cognac">whether migration is justified.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              A slow or difficult {safePlatform} site does not automatically require a rebuild. The diagnostic should compare repair, partial replacement, and migration against the same business requirements.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-cognac/30 bg-white shadow-xl shadow-stone-300/20">
            <div className="border-b border-cognac/20 bg-cognac/[0.06] px-6 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">Decision inputs</p>
            </div>
            <ul className="grid sm:grid-cols-2">
              {diagnosticItems.map((item, index) => (
                <li
                  key={item}
                  className={`flex gap-3 p-5 leading-7 text-stone-700 md:p-6 ${
                    index < diagnosticItems.length - 1 ? "border-b border-stone-200" : ""
                  } ${index % 2 === 0 ? "sm:border-r sm:border-r-cognac/15" : ""} ${
                    index >= diagnosticItems.length - 2 ? "sm:border-b-0" : ""
                  }`}
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                  <span>{withoutEmDashes(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-cognac/25 bg-white px-6 py-16 md:py-24" aria-labelledby="migration-heading">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cognac/30 bg-cognac/[0.08] text-cognac">
                <Route className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 id="migration-heading" className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                If migration wins, preserve the system, <span className="font-serif font-normal italic text-cognac">not just the screenshots.</span>
              </h2>
            </div>
            <ul className="grid border-y border-cognac/35 md:grid-cols-2">
              {migrationItems.map((item, index) => (
                <li
                  key={item}
                  className={`flex min-h-24 gap-4 px-1 py-5 font-medium leading-7 text-charcoal md:px-6 ${
                    index < migrationItems.length - 1 ? "border-b border-stone-200" : ""
                  } ${index % 2 === 0 ? "md:border-r md:border-r-cognac/20" : ""} ${
                    index >= migrationItems.length - 2 ? "md:border-b-0" : ""
                  }`}
                >
                  <span className="mt-3 h-2 w-2 shrink-0 rotate-45 bg-cognac" aria-hidden="true" />
                  <span>{withoutEmDashes(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-cognac/25 bg-cognac/[0.055] px-6 py-16 md:py-24" aria-labelledby="process-heading">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">Delivery sequence</p>
            <h2 id="process-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              A <span className="font-serif font-normal italic text-cognac">controlled</span> migration sequence
            </h2>
          </div>
          <ol className="overflow-hidden rounded-[2rem] border border-cognac/30 bg-white shadow-xl shadow-cognac/10">
            {phases.map(({ title: phaseTitle, body }, index) => (
              <li
                key={phaseTitle}
                className={`grid gap-3 p-6 md:grid-cols-[minmax(11rem,0.7fr)_minmax(0,1.3fr)] md:gap-8 md:p-8 ${
                  index < phases.length - 1 ? "border-b border-cognac/20" : ""
                }`}
              >
                <div className="flex items-center gap-4 self-start">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-cognac ring-4 ring-cognac/10" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-semibold italic text-charcoal">{phaseTitle}</h3>
                </div>
                <p className="leading-7 text-stone-700">{withoutEmDashes(body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden border-y-4 border-cognac bg-midnight px-6 py-16 text-white md:py-24" aria-labelledby="terms-heading">
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cognac/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cognac text-white">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 id="terms-heading" className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Make the <span className="font-serif font-normal italic text-orange-300">acceptance conditions</span> explicit.
            </h2>
          </div>
          <p className="border-l border-cognac/70 pl-6 text-lg leading-8 text-stone-300 md:pl-8 lg:self-center">
            Your written quote should say the price, when you pay, which browsers are supported, how speed is tested, which links get forwarded, who launches it, what support you get, who owns the code and the accounts, and what happens if something is wrong. For most projects that is a short document. Nobody controls Google, so rankings, traffic and sales are never guaranteed.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-7 w-7 text-cognac" aria-hidden="true" />
            <h2 id="faq-heading" className="text-3xl font-bold md:text-5xl">Migration questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faq.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl border border-stone-300 bg-white">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold marker:content-none">
                  {question}<span aria-hidden="true" className="text-xl group-open:rotate-45">+</span>
                </summary>
                <p className="border-t border-stone-200 px-5 py-5 leading-7 text-stone-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-300 bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Start with your current site and the decision you need to make.</h2>
          <p className="mt-5 max-w-3xl leading-7 text-stone-700">We will tell you the next thing to check. A firm price only comes after we understand the scope and what it depends on.</p>
          <Link href="/contact#contact-quote-form" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac">
            Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
