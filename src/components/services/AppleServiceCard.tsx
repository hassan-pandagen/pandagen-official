"use client";

/**
 * Apple-designed service card with:
 * - Translucent glass material (depth hierarchy)
 * - Spring animations on hover (interruptible)
 * - Pointer-down feedback (instant response)
 * - Color-coded accent for visual distinctiveness
 * - Proper typography hierarchy
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppleSprings } from "@/components/ui/AppleMotion";

interface AppleServiceCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: "orange" | "blue" | "green" | "purple" | "pink" | "amber";
  featured?: boolean;
}

const accentColors = {
  orange: {
    bg: "from-orange-500/10 to-orange-500/0",
    border: "border-orange-200/50 hover:border-orange-300/80",
    icon: "bg-orange-100/60 text-orange-600",
    text: "text-orange-600",
    hover: "group-hover:bg-orange-50/40",
  },
  blue: {
    bg: "from-blue-500/10 to-blue-500/0",
    border: "border-blue-200/50 hover:border-blue-300/80",
    icon: "bg-blue-100/60 text-blue-600",
    text: "text-blue-600",
    hover: "group-hover:bg-blue-50/40",
  },
  green: {
    bg: "from-green-500/10 to-green-500/0",
    border: "border-green-200/50 hover:border-green-300/80",
    icon: "bg-green-100/60 text-green-600",
    text: "text-green-600",
    hover: "group-hover:bg-green-50/40",
  },
  purple: {
    bg: "from-purple-500/10 to-purple-500/0",
    border: "border-purple-200/50 hover:border-purple-300/80",
    icon: "bg-purple-100/60 text-purple-600",
    text: "text-purple-600",
    hover: "group-hover:bg-purple-50/40",
  },
  pink: {
    bg: "from-pink-500/10 to-pink-500/0",
    border: "border-pink-200/50 hover:border-pink-300/80",
    icon: "bg-pink-100/60 text-pink-600",
    text: "text-pink-600",
    hover: "group-hover:bg-pink-50/40",
  },
  amber: {
    bg: "from-amber-500/10 to-amber-500/0",
    border: "border-amber-200/50 hover:border-amber-300/80",
    icon: "bg-amber-100/60 text-amber-600",
    text: "text-amber-600",
    hover: "group-hover:bg-amber-50/40",
  },
};

export default function AppleServiceCard({
  href,
  icon: Icon,
  title,
  description,
  accentColor = "orange",
  featured = false,
}: AppleServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const colors = accentColors[accentColor];

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={prefersReducedMotion ? {} : { duration: 0.5, ease: "easeOut" }}
    >
      <Link href={href}>
        <motion.div
          whileHover={prefersReducedMotion ? {} : { y: -4 }}
          transition={AppleSprings.graceful}
          className={`
            group h-full
            relative overflow-hidden
            rounded-2xl
            p-6
            cursor-pointer

            /* Glass material background (translucent depth) */
            bg-gradient-to-br ${colors.bg} bg-white/80
            backdrop-blur-sm

            /* Border with accent color on hover */
            border transition-all
            ${colors.border}

            /* Depth shadows */
            shadow-sm hover:shadow-lg

            /* Smooth all transitions */
            transition-all duration-300
          `}
        >
          {/* Featured badge (for highlighted services) */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${colors.text} px-2 py-1 rounded-full bg-white/60 backdrop-blur`}>
                Popular
              </span>
            </div>
          )}

          {/* Decorative gradient accent (bottom right) */}
          <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`} />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon with colored background (scaled on hover) */}
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 6 }}
              transition={AppleSprings.default}
              className={`
                w-12 h-12
                rounded-xl
                ${colors.icon}
                flex items-center justify-center
                mb-4
                flex-shrink-0
                backdrop-blur-sm
                transition-all duration-300
              `}
            >
              <Icon className="w-6 h-6" />
            </motion.div>

            {/* Title (optical sizing for legibility) */}
            <h3 className="text-charcoal font-bold text-base mb-2 group-hover:text-charcoal transition-colors">
              {title}
            </h3>

            {/* Description (comfortable line-height, measured leading) */}
            <p className="text-stone-600 text-sm leading-relaxed flex-grow mb-3">
              {description}
            </p>

            {/* CTA with arrow (appears on hover, spring animation) */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -4 }}
              whileHover={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={AppleSprings.default}
              className={`flex items-center gap-2 ${colors.text} font-semibold text-sm`}
            >
              Learn more
              <motion.div
                whileHover={prefersReducedMotion ? {} : { x: 4 }}
                transition={AppleSprings.snappy}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Top border accent line (Apple's detail) */}
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </motion.div>
      </Link>
    </motion.div>
  );
}
