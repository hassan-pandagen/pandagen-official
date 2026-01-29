"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Search, User, ShieldAlert, Layers, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { blogPosts, type IllustrationType } from "@/data/blog";

// --- ANIMATIONS (Must be present!) ---
const WPIllustration = () => (
  <div className="w-full h-full bg-red-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.2),transparent_70%)]" />
    {[...Array(5)].map((_, i) => (
      <motion.div key={i} animate={{ y: [-20, 150] }} transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5, ease: "linear" }} className="absolute text-red-500/40 font-mono text-lg font-bold" style={{ left: `${20 + i * 15}%`, top: '-20%' }}>$$$</motion.div>
    ))}
    <div className="z-10 bg-red-900/20 border border-red-500/50 p-4 rounded-xl backdrop-blur-md relative">
        <ShieldAlert className="w-12 h-12 text-red-500" />
    </div>
  </div>
);

const SpeedIllustration = () => (
  <div className="w-full h-full bg-green-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.2),transparent_70%)]" />
    <div className="z-10 text-center">
        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 font-mono">0.1s</div>
        <div className="text-xs text-green-400 uppercase tracking-widest mt-2">Load Time</div>
    </div>
  </div>
);

const SaaSIllustration = () => (
  <div className="w-full h-full bg-blue-950/20 relative overflow-hidden flex items-center justify-center">
     <Layers className="w-16 h-16 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
  </div>
);

const CodeIllustration = () => (
  <div className="w-full h-full bg-orange-950/20 relative overflow-hidden p-8 font-mono text-xs text-orange-300/50 flex flex-col justify-center">
     <div>{"<LegacyCode>"}</div><div className="pl-4 text-red-400/60">{"<Bloat />"}</div><div>{"</LegacyCode>"}</div>
  </div>
);

// Map illustration types to components
const getIllustration = (type: IllustrationType) => {
  const illustrations = {
    wordpress: <WPIllustration />,
    speed: <SpeedIllustration />,
    saas: <SaaSIllustration />,
    code: <CodeIllustration />,
  };
  return illustrations[type];
};

// Combine blog data with illustrations
const articles = blogPosts.map(post => ({
  ...post,
  illustration: getIllustration(post.illustrationType),
}));

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Header />
      <section className="pt-40 pb-16 px-6 text-center"><h1 className="text-5xl md:text-7xl font-bold text-white">Insights from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">Code Lab.</span></h1></section>
      
      <section className="container mx-auto px-6 py-12">
         {articles.filter(a => a.featured).map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group block relative">
               <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0A0A0A] grid md:grid-cols-2">
                  <div className="h-64 md:h-auto border-r border-white/10">{article.illustration}</div>
                  <div className="p-12 flex flex-col justify-center">
                     <span className="text-red-400 text-xs font-bold uppercase mb-4">{article.category}</span>
                     <h2 className="text-4xl font-bold text-white mb-6">{article.title}</h2>
                     <p className="text-gray-400 mb-8">{article.excerpt}</p>
                     <div className="flex items-center gap-2 text-white font-bold">Read Analysis <ArrowRight className="w-4 h-4 text-red-400" /></div>
                  </div>
               </div>
            </Link>
         ))}
      </section>

      <section className="container mx-auto px-6 pb-32">
         <div className="grid md:grid-cols-3 gap-8">
            {articles.filter(a => !a.featured).map((article) => (
               <Link key={article.id} href={`/blog/${article.id}`} className="group bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
                  <div className="h-56 w-full border-b border-white/5">{article.illustration}</div>
                  <div className="p-8">
                     <span className="text-neon text-xs font-bold uppercase">{article.category}</span>
                     <h3 className="text-xl font-bold text-white my-4">{article.title}</h3>
                     <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5 text-xs text-gray-500">
                        <span>By {article.author}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>

      {/* THE GUARANTEE CTA (Consistent) */}
      <section className="container mx-auto px-6 pb-32">
         <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-green-500/5 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" /> Valid on all projects
               </div>
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  We don't get paid <br/> unless you win.
               </h2>
               <button 
                 data-cal-namespace="discovery"
                 data-cal-link="pandagen/discovery"
                 data-cal-config='{"layout":"month_view"}'
                 className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
               >
                 Claim Your Guarantee
               </button>
            </div>
         </div>
      </section>

      <Footer />
      </div>
      </main>
      );
      }
