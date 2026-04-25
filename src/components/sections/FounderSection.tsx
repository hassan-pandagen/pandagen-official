"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ArrowUpRight, Linkedin } from "lucide-react";

const founders = [
  {
    name: "Hassan Jamal",
    title: "Co-founder & Lead Engineer",
    bio: "Builds the architectures. Writes the code. 267 GitHub contributions this year across live client projects. Every commit is visible. Austin LLC, engineering from Karachi.",
    image: "/team/hassan.png",
    github: "https://github.com/hassan-pandagen",
    linkedin: "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
    about: "/about/hassan",
    tags: ["WordPress Migrations", "E-Commerce Builds", "Speed Optimization", "Custom Platforms"],
  },
  {
    name: "Imran Raza Ladhani",
    title: "Co-founder & Lead Architect",
    bio: "Co-founded PandaCodeGen with Hassan and leads architecture: migration feasibility, system design, and zero-downtime cutovers. Hassan writes the code. Imran makes sure it scales.",
    image: "/team/imran.png",
    github: null,
    linkedin: "https://www.linkedin.com/in/imran-raza-ladhani/",
    about: "/about/imran",
    tags: ["Next.js Architecture", "Platform Migrations", "System Design", "Headless Commerce"],
  },
];

export default function FounderSection() {
  return (
    <section className="py-12 md:py-20 bg-[#0d1117]">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">The Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Founder-built,{" "}
            <span className="font-serif italic text-cognac">not farmed out.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            When you book a call, Hassan answers. He writes every line of code.
            Imran leads the architecture. Austin LLC, engineering from Karachi. No account managers, no white-label outsourcing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#161b27] rounded-2xl border border-white/10 p-8 hover:border-cognac/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300"
            >
              {/* Photo + Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-md shrink-0">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">{founder.name}</div>
                  <div className="text-sm text-cognac font-semibold">{founder.title}</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-base text-gray-400 leading-relaxed mb-6">
                {founder.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {founder.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <Link
                  href={founder.about}
                  className="text-sm font-bold text-white hover:text-cognac transition-colors flex items-center gap-1.5"
                >
                  {founder.name.split(" ")[0]}&apos;s Bio <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#0077B5] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                {founder.github && (
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub activity trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-4xl"
        >
          <a
            href="https://github.com/hassan-pandagen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors group/gh"
          >
            <Github className="w-4 h-4" />
            <span>267 GitHub contributions in the last year. All public. All verifiable.</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
