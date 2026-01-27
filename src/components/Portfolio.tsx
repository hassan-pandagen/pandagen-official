"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Code, Zap, Search, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "PandaPatches Ecommerce",
    category: "Ecommerce Migration",
    image: "/projects/pandapatches.jpg",
    description: "WordPress to Next.js migration of a custom patch e-commerce store. Achieved 10x faster load times and 40% increase in conversions.",
    challenge: "Slow loading times, security issues, and limited customization on WordPress.",
    solution: "Migrated to Next.js with headless CMS, implemented Stripe payments, and optimized Core Web Vitals.",
    results: ["10x Faster Loading", "40% More Conversions", "Zero Security Issues", "100 Score PageSpeed"],
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "https://pandapatches.com",
    featured: true,
    stats: {
      speed: "+1000%",
      conversions: "+40%",
      seo: "+200%",
    },
  },
  {
    id: 2,
    title: "MyCustomPatches Portfolio",
    category: "Portfolio Website",
    image: "/projects/mycustompatches.jpg",
    description: "A stunning portfolio website showcasing custom embroidery and patch work with advanced 3D product previews.",
    challenge: "Need to showcase products with high-quality visuals while maintaining fast load times.",
    solution: "Built with Next.js and React Three Fiber for interactive 3D product views.",
    results: ["Interactive 3D Previews", "98% Customer Satisfaction", "2x Engagement Rate"],
    tech: ["Next.js", "Three.js", "Framer Motion", "GSAP"],
    link: "https://mycustompatches.net",
    featured: true,
    stats: {
      engagement: "+200%",
      speed: "+500%",
      seo: "+150%",
    },
  },
  {
    id: 3,
    title: "PandaCodeLab",
    category: "SaaS Platform",
    image: "/projects/pandacodelab.jpg",
    description: "Coding education platform with interactive lessons, progress tracking, and gamified learning experience.",
    challenge: "Build a scalable platform with real-time progress tracking and interactive code execution.",
    solution: "Next.js with serverless backend, WebSocket integration, and Monaco editor for code execution.",
    results: ["10,000+ Active Users", "95% Completion Rate", "Real-time Sync"],
    tech: ["Next.js", "Node.js", "MongoDB", "WebSocket"],
    featured: true,
    stats: {
      users: "10K+",
      completion: "95%",
      uptime: "99.9%",
    },
  },
  {
    id: 4,
    title: "Novatech Corporate",
    category: "Enterprise Website",
    image: "/projects/novatech.jpg",
    description: "Modern corporate website for a Fortune 500 company with advanced animations and brand integration.",
    challenge: "Large scale website with strict brand guidelines and performance requirements.",
    solution: "Custom design system with Next.js, implementing lazy loading and edge caching.",
    results: ["Zero Downtime Launch", "100/100 Lighthouse", "Global CDN"],
    tech: ["Next.js", "TypeScript", "Vercel", "Cloudflare"],
    featured: false,
  },
  {
    id: 5,
    title: "Fixteria Ecommerce",
    category: "Ecommerce",
    image: "/projects/fixteria.jpg",
    description: "Fashion e-commerce store with AI-powered recommendations and virtual try-on features.",
    challenge: "Integrate AI features while maintaining fast performance.",
    solution: "Hybrid approach with Next.js for static pages and Node.js for AI processing.",
    results: ["30% Increase in Sales", "50% Less Returns", "4.9★ Rating"],
    tech: ["Next.js", "TensorFlow.js", "Stripe", "PostgreSQL"],
    featured: false,
  },
  {
    id: 6,
    title: "TruVision Healthcare",
    category: "Healthcare App",
    image: "/projects/truvision.jpg",
    description: "HIPAA-compliant healthcare portal with telemedicine features and secure messaging.",
    challenge: "Strict security requirements while providing seamless user experience.",
    solution: "End-to-end encrypted platform with compliance-first architecture.",
    results: ["HIPAA Compliant", "99.9% Uptime", "Zero Data Breaches"],
    tech: ["Next.js", "AWS", "Encryption", "WebRTC"],
    featured: false,
  },
];

const categories = ["All", "Ecommerce", "Portfolio", "SaaS", "Enterprise", "Healthcare"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-2 font-bold mb-4">
            Our <span className="text-neon">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from real projects. See how we've helped businesses scale with Next.js.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all",
                activeCategory === category
                  ? "bg-neon text-background"
                  : "bg-surface border border-border text-gray-400 hover:border-neon"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-neon/50",
                project.featured && "md:col-span-2"
              )}
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-surface to-background flex items-center justify-center relative overflow-hidden">
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-20",
                  project.featured ? "from-neon/20 to-orange/20" : "from-neon/10 to-purple/10"
                )} />
                <div className="text-center">
                  <Code className="w-16 h-16 text-neon/50 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">Project Preview</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neon/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-background font-bold flex items-center gap-2">
                    View Case Study <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-neon text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>

                {/* Stats */}
                {project.stats && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-border">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-neon font-bold">{value}</p>
                        <p className="text-xs text-gray-500 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-8 border-b border-border">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-background border border-border rounded-full hover:border-neon transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-neon text-sm font-medium">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Stats */}
                {selectedProject.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="bg-background/50 rounded-xl p-4 text-center">
                        <p className="text-3xl font-bold text-neon">{value}</p>
                        <p className="text-sm text-gray-400 capitalize">{key} Increase</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-bold mb-3">The Challenge</h4>
                    <p className="text-gray-400">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3">Our Solution</h4>
                    <p className="text-gray-400">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mt-8">
                  <h4 className="text-white font-bold mb-4">Key Results</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.results.map((result) => (
                      <span
                        key={result}
                        className="px-4 py-2 bg-neon/10 border border-neon/30 rounded-full text-neon text-sm"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h4 className="text-white font-bold mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-background border border-border rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {selectedProject.link && (
                  <div className="mt-8 pt-8 border-t border-border">
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-neon text-background font-bold rounded-none hover:bg-neon/90 transition-colors"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
