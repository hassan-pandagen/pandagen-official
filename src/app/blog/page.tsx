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
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 font-mono">0.8-1.2s</div>
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
  <div className="w-full h-full bg-orange-950/20 relative overflow-hidden p-6 font-mono text-[10px] leading-relaxed text-orange-300/40 flex flex-col justify-center gap-0.5">
     <div className="text-gray-500">{"<!-- 15,000 lines of spaghetti -->"}</div>
     <div className="text-orange-400/60">{"<div class=\"wrapper\">"}</div>
     <div className="pl-3 text-orange-400/50">{"<div class=\"container\">"}</div>
     <div className="pl-6 text-orange-400/40">{"<div class=\"row\">"}</div>
     <div className="pl-9 text-orange-400/30">{"<div class=\"col\">"}</div>
     <div className="pl-12 text-red-400/60">{"<LegacyPlugin />"}</div>
     <div className="pl-12 text-red-400/60">{"<Bloat />"}</div>
     <div className="pl-12 text-red-400/60">{"<TechDebt />"}</div>
     <div className="pl-9 text-orange-400/30">{"</div>"}</div>
     <div className="pl-6 text-orange-400/40">{"</div>"}</div>
     <div className="pl-3 text-orange-400/50">{"</div>"}</div>
     <div className="text-orange-400/60">{"</div>"}</div>
     <div className="text-gray-500 mt-2">{"// 300+ dependencies 💀"}</div>
  </div>
);

const PluginsIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-red-950/30 to-orange-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_60%)]" />

    {/* Floating Plugin Icons (Puzzle Pieces) */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3
        }}
        className="absolute text-2xl"
        style={{
          left: `${15 + (i % 4) * 20}%`,
          top: `${20 + Math.floor(i / 4) * 40}%`
        }}
      >
        <div className="bg-gray-800/50 border border-orange-500/40 rounded-lg p-2 backdrop-blur-sm">
          <div className="w-6 h-6 bg-orange-500/30 rounded" />
        </div>
      </motion.div>
    ))}

    {/* Floating Money Symbols */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`money-${i}`}
        animate={{ y: [-30, 180] }}
        transition={{
          duration: 2.5 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "linear"
        }}
        className="absolute text-2xl font-bold text-red-400/50"
        style={{ left: `${20 + i * 12}%`, top: '-30px' }}
      >
        $
      </motion.div>
    ))}

    {/* Center Bill/Invoice */}
    <div className="z-10 relative">
      <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-6 backdrop-blur-md shadow-2xl transform rotate-3">
        <div className="space-y-2 font-mono text-xs">
          <div className="flex justify-between text-red-300 border-b border-red-500/30 pb-2">
            <span>30+ Plugins</span>
            <span className="font-bold">INVOICE</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Speed Loss</span>
            <span className="text-red-400">-3.5s</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>HTTP Requests</span>
            <span className="text-red-400">200+</span>
          </div>
          <div className="flex justify-between text-gray-400 border-t border-red-500/30 pt-2">
            <span>Lost Revenue</span>
            <span className="text-red-500 font-bold text-sm">$75K/yr</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Map illustration types to components
const getIllustration = (type: IllustrationType) => {
  const illustrations = {
    wordpress: <WPIllustration />,
    speed: <SpeedIllustration />,
    saas: <SaaSIllustration />,
    code: <CodeIllustration />,
    plugins: <PluginsIllustration />,
  };
  return illustrations[type];
};

// Combine blog data with illustrations and sort by newest first
const articles = blogPosts
  .map(post => ({
    ...post,
    illustration: getIllustration(post.illustrationType),
  }))
  .sort((a, b) => {
    const dateA = new Date(a.lastModified || a.date);
    const dateB = new Date(b.lastModified || b.date);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
      <div className="relative z-10">
        <Header />
      <section className="pt-40 pb-16 px-6 text-center"><h1 className="text-5xl md:text-7xl font-bold text-white">Insights from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">Engine Room.</span></h1></section>
      
      <section className="container mx-auto px-6 py-12">
         {articles.filter(a => a.featured).map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group block relative">
               <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/20 bg-[#0A0A0A] grid md:grid-cols-2 hover:border-neon/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
                  <div className="h-64 md:h-auto border-r-2 border-white/20">{article.illustration}</div>
                  <div className="p-12 flex flex-col justify-center">
                     <div className="flex items-center gap-4 mb-4">
                        <span className="text-red-400 text-xs font-bold uppercase">{article.category}</span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                     </div>
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
               <Link key={article.id} href={`/blog/${article.id}`} className="group bg-[#0A0A0A] border-2 border-white/20 rounded-3xl overflow-hidden hover:border-neon/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] hover:scale-[1.02]">
                  <div className="h-56 w-full border-b-2 border-white/20">{article.illustration}</div>
                  <div className="p-8">
                     <div className="flex items-center gap-3 mb-3">
                        <span className="text-neon text-xs font-bold uppercase">{article.category}</span>
                        <span className="text-gray-600 text-xs">•</span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                     </div>
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
