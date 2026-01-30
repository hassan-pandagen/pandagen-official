"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Shield, Smartphone, Palette, LineChart, Search } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Prisma", "GraphQL", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["AWS", "Vercel", "Docker", "CI/CD", "Edge Functions", "Redis"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["OWASP", "JWT Auth", "Rate Limiting", "Input Sanitization", "HTTPS", "CORS"],
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "PWA", "Responsive Design", "App Store", "Push Notifications"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX", "Motion Design", "Design Systems", "Typography", "Color Theory"],
    color: "from-pink-500 to-rose-500",
  },
];

const certifications = [
  { name: "Next.js Certified", issuer: "Vercel" },
  { name: "AWS Solutions Architect", issuer: "Amazon" },
  { name: "Meta React Developer", issuer: "Meta" },
  { name: "Google UX Professional", issuer: "Google" },
];

export default function SkillsShowcase() {
  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-2 font-bold mb-4">
            Our <span className="text-neon">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies that WordPress simply can't match.
            Enterprise-grade tools for enterprise-grade results.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-neon/50 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-background/50 border border-border rounded-full text-gray-300 hover:border-neon hover:text-neon transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-surface border border-border rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Industry Certifications</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-6 py-3 bg-background/50 border border-border rounded-xl"
              >
                <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                <div>
                  <p className="font-semibold text-white text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-400">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "15+", label: "Tech Stack Items" },
            { value: "5+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
