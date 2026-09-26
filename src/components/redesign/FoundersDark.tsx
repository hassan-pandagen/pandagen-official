import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Founders, on dark. Redesign candidate, 24 Sep 2026. Copy and links unchanged
// from FounderSection.tsx. The names carry the scale; portraits stay at ~200px
// because /team/hassan.png is 300x300 and would soften on a 2x screen if set
// larger. Replace it with a larger original before making the photos bigger.
// ─────────────────────────────────────────────────────────────────────────────

const founders = [
  {
    first: "Hassan",
    last: "Jamal",
    title: "Co-founder & Lead Engineer",
    image: "/team/hassan.png",
    bio: "Builds the architectures. Writes the code. 900+ GitHub contributions this year across live client projects. Every commit is visible. US contracts and support. Senior engineering with direct founder access.",
    tags: ["WordPress Migrations", "E-Commerce Builds", "Speed Optimization", "Custom Platforms"],
    about: "/about/hassan",
    linkedin: "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
    github: "https://github.com/hassan-pandagen",
  },
  {
    first: "Imran Raza",
    last: "Ladhani",
    title: "Co-founder & Lead Architect",
    image: "/team/imran.png",
    bio: "Co-founded PandaCodeGen with Hassan and leads the architecture. He decides whether a migration is worth doing, designs how the pieces fit, and plans cutovers that do not take you offline. Hassan writes the code. Imran makes sure it scales.",
    tags: ["Next.js Architecture", "Platform Migrations", "System Design", "Headless Commerce"],
    about: "/about/imran",
    linkedin: "https://www.linkedin.com/in/imran-raza-ladhani/",
    github: null as string | null,
  },
];

export default function FoundersDark() {
  return (
    <section aria-labelledby="founders-title" className="px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.dark, color: T.onDark }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2
            id="founders-title"
            className="lg:col-span-6"
            style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            Founder-built, not farmed out.
          </h2>
          <p className="max-w-[34rem] self-end text-[17px] leading-[1.6] lg:col-span-5 lg:col-start-8" style={{ color: T.onDarkQuiet }}>
            When you book a call, Hassan answers. He writes every line of code. Imran leads the architecture. Contracts
            are US-based, with dedicated support: a founder replies, not a bot or an outsourced agent. No Manhattan
            office rent in your invoice, no account managers, no white-label outsourcing.
          </p>
        </div>

        <ul className="mt-16 border-t md:mt-24" style={{ borderColor: T.onDarkRule }}>
          {founders.map((f) => (
            <li key={f.last} className="founder grid gap-10 border-b py-12 md:py-16 lg:grid-cols-12" style={{ borderColor: T.onDarkRule }}>
              <div className="lg:col-span-6">
                <p className="text-[12px] uppercase tracking-[0.14em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
                  {f.title}
                </p>
                <h3
                  className="mt-4"
                  style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(3rem, 7vw, 6.6rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}
                >
                  {f.first}
                  <br />
                  {f.last}
                </h3>
              </div>

              <div className="grid gap-8 sm:grid-cols-[200px_1fr] lg:col-span-6">
                <div className="founder-photo relative h-[200px] w-[200px] overflow-hidden rounded-[4px]">
                  <Image src={f.image} alt={`${f.first} ${f.last}`} fill sizes="200px" className="object-cover" />
                </div>
                <div>
                  <p className="text-[17px] leading-[1.6]" style={{ color: T.onDark }}>
                    {f.bio}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
                    {f.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-medium">
                    <Link href={f.about} className="founder-link" style={{ color: T.onDark }}>
                      {f.first.split(" ")[0]}&rsquo;s Bio
                    </Link>
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="founder-link inline-flex items-center gap-1" style={{ color: T.onDark }}>
                      LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    {f.github && (
                      <a href={f.github} target="_blank" rel="noopener noreferrer" className="founder-link inline-flex items-center gap-1" style={{ color: T.onDark }}>
                        GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/hassan-pandagen"
          target="_blank"
          rel="noopener noreferrer"
          className="founder-link mt-10 inline-flex items-center gap-2 text-[15px]"
          style={{ color: T.onDarkQuiet }}
        >
          900+ GitHub contributions in the last year. All public. All verifiable.
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <style>{`
        .founder-photo img { filter: grayscale(1) contrast(1.05); transition: filter .6s ease, transform .8s cubic-bezier(.2,.7,.2,1); }
        .founder:hover .founder-photo img { filter: none; transform: scale(1.04); }
        .founder-link { text-decoration: none; border-bottom: 1px solid ${T.onDarkRule}; transition: color .25s ease, border-color .25s ease; }
        .founder-link:hover, .founder-link:focus-visible { color: ${T.onDarkAccent} !important; border-color: ${T.onDarkAccent}; }
        @media (prefers-reduced-motion: reduce) { .founder-photo img { transition: none; } }
      `}</style>
    </section>
  );
}
