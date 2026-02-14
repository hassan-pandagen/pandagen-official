"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, DollarSign, TrendingUp, Zap, Search, Users, Shield, Clock, Award } from "lucide-react";

interface ComparisonSlide {
  id: number;
  icon: any;
  title: string;
  category: string;
  wordpress: {
    value: string;
    label: string;
    negative: boolean;
  };
  nextjs: {
    value: string;
    label: string;
    positive: boolean;
  };
  impact: {
    stat: string;
    description: string;
  };
  source: string;
}

export default function ROIComparisonCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides: ComparisonSlide[] = [
    {
      id: 1,
      icon: DollarSign,
      title: "Annual Cost Savings",
      category: "TOTAL COST OF OWNERSHIP",
      wordpress: {
        value: "$3,600 - $9,600",
        label: "Hosting + Plugins + Maintenance + Security",
        negative: true,
      },
      nextjs: {
        value: "$0",
        label: "Zero recurring fees. One-time build only.",
        positive: true,
      },
      impact: {
        stat: "Save $12,600/year",
        description: "Average 3-year savings: $37,800 (Based on managed hosting $300/mo + premium plugins $200/mo + developer maintenance $300/mo)",
      },
      source: "WebFX WordPress Cost Study 2026",
    },
    {
      id: 2,
      icon: Search,
      title: "Google SEO Performance",
      category: "SEARCH ENGINE RANKINGS",
      wordpress: {
        value: "51% Mobile Score",
        label: "Average Lighthouse mobile performance",
        negative: true,
      },
      nextjs: {
        value: "100% Desktop, 86% Mobile",
        label: "Perfect optimization out-of-the-box",
        positive: true,
      },
      impact: {
        stat: "+50% Better Performance",
        description: "Next.js sites rank higher due to faster Core Web Vitals (FCP, LCP, CLS) - direct Google ranking factors",
      },
      source: "Digital Polygon Performance Study 2026",
    },
    {
      id: 3,
      icon: Zap,
      title: "Conversion Rate Impact",
      category: "REVENUE GENERATION",
      wordpress: {
        value: "29% Conversion",
        label: "At 3-second load time (industry average)",
        negative: true,
      },
      nextjs: {
        value: "40% Conversion",
        label: "At 1-second load time (PandaGen standard)",
        positive: true,
      },
      impact: {
        stat: "+38% More Sales",
        description: "1-second sites convert 5x better than 10-second sites. Every 100ms improvement = +1% revenue (Amazon data)",
      },
      source: "Cloudflare Conversion Rate Study 2026",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Revenue Per Visitor",
      category: "BOTTOM LINE IMPACT",
      wordpress: {
        value: "$2.90/visitor",
        label: "Slow load times reduce purchase intent",
        negative: true,
      },
      nextjs: {
        value: "$4.12/visitor",
        label: "Fast sites = higher cart values",
        positive: true,
      },
      impact: {
        stat: "+42% Revenue Increase",
        description: "Real case: Swappie improved Core Web Vitals by 23% and saw 42% mobile revenue increase",
      },
      source: "Queue-IT Ecommerce Speed Statistics 2026",
    },
    {
      id: 5,
      icon: Users,
      title: "User Retention",
      category: "BOUNCE RATE & ENGAGEMENT",
      wordpress: {
        value: "53% Bounce Rate",
        label: "Users leave if page loads >3 seconds",
        negative: true,
      },
      nextjs: {
        value: "23% Bounce Rate",
        label: "Fast loads keep users engaged",
        positive: true,
      },
      impact: {
        stat: "57% Lower Bounce Rate",
        description: "1-second load time reduction = 12% fewer bounces. 83% of users expect <3 second loads in 2026",
      },
      source: "SiteBuilder Report Speed Statistics 2026",
    },
    {
      id: 6,
      icon: Shield,
      title: "Security & Downtime",
      category: "RELIABILITY COSTS",
      wordpress: {
        value: "$1,500 - $5,000",
        label: "Annual security breaches & downtime costs",
        negative: true,
      },
      nextjs: {
        value: "$0",
        label: "Static generation = no attack surface",
        positive: true,
      },
      impact: {
        stat: "99.99% Uptime",
        description: "WordPress sites average 3-5 plugin conflicts/year causing downtime. Next.js on Vercel: zero vulnerability exploits",
      },
      source: "WP White Security Report 2026",
    },
    {
      id: 7,
      icon: Clock,
      title: "Time to Market",
      category: "DEVELOPMENT SPEED",
      wordpress: {
        value: "6-8 weeks",
        label: "Theme customization + plugin conflicts",
        negative: true,
      },
      nextjs: {
        value: "2-3 weeks",
        label: "Component-based architecture",
        positive: true,
      },
      impact: {
        stat: "60% Faster Launch",
        description: "Get to market faster, start generating revenue sooner. First-mover advantage in competitive niches",
      },
      source: "Merge Development Study 2026",
    },
    {
      id: 8,
      icon: Award,
      title: "Scalability Costs",
      category: "GROWTH CAPACITY",
      wordpress: {
        value: "$500+/mo",
        label: "Dedicated hosting for 100k+ visitors",
        negative: true,
      },
      nextjs: {
        value: "$20/mo",
        label: "Edge CDN handles millions efficiently",
        positive: true,
      },
      impact: {
        stat: "96% Cost Reduction",
        description: "Vercel's edge network scales automatically. No server upgrades, no performance degradation at high traffic",
      },
      source: "Cloudflare Performance Report 2026",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(timer);
  }, [autoPlay, totalSlides]);

  const nextSlide = useCallback(() => {
    setAutoPlay(false);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setAutoPlay(false);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const currentData = slides[currentSlide];
  const Icon = currentData.icon;

  return (
    <div className="relative max-w-6xl mx-auto">

      {/* Progress Indicators */}
      <div className="flex justify-center gap-1.5 md:gap-2 mb-4 md:mb-6" role="tablist" aria-label="Comparison slides">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setDirection(index > currentSlide ? 1 : -1);
              setAutoPlay(false);
            }}
            className="group relative"
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          >
            <div className={`h-1 w-6 md:w-12 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-neon" : "bg-white/20"
            }`}>
              {index === currentSlide && (
                <motion.div
                  className="h-full bg-neon rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Main Carousel */}
      <div
        className="relative bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.1)] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon/10 blur-[100px] rounded-full pointer-events-none" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 p-5 md:p-12"
          >

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-neon" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">
                  {currentData.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {currentData.title}
                </h3>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">

              {/* WordPress (Negative) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#1A0505] border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400 font-bold">
                      TRADITIONAL
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {currentData.wordpress.value}
                  </div>
                  <p className="text-sm text-gray-400">
                    {currentData.wordpress.label}
                  </p>
                </div>
              </motion.div>

              {/* PandaGen (Positive) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-neon/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#051015] border border-neon/20 rounded-2xl p-6 hover:border-neon/40 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-2 py-1 bg-neon/10 border border-neon/20 rounded text-xs text-neon font-bold">
                      PANDAGEN
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neon mb-2">
                    {currentData.nextjs.value}
                  </div>
                  <p className="text-sm text-gray-300">
                    {currentData.nextjs.label}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Impact Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 rounded-2xl p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent_70%)]" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs text-green-400 uppercase tracking-widest font-bold mb-2">
                    YOUR COMPETITIVE ADVANTAGE
                  </p>
                  <p className="text-2xl font-bold text-white mb-1">
                    {currentData.impact.stat}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {currentData.impact.description}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0"
                >
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Source */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-gray-400 mt-4 text-center"
            >
              Source: {currentData.source}
            </motion.p>

          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (hidden on mobile - use swipe) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 hover:border-neon/50 transition-all z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 hover:border-neon/50 transition-all z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

      </div>

      {/* Mobile swipe hint + Auto-play Toggle */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <span className="md:hidden text-xs text-gray-500">
          Swipe to explore
        </span>
        <span className="text-xs text-gray-600">{currentSlide + 1}/{totalSlides}</span>
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="hidden md:inline text-xs text-gray-500 hover:text-neon transition-colors"
        >
          {autoPlay ? "Pause" : "Play"} Auto-rotation
        </button>
      </div>

    </div>
  );
}
