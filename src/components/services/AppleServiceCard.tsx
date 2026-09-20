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
  // PandaCodeGen brand colors — cognac (primary), charcoal, stone
  orange: {
    bg: "bg-white",
    border: "border-stone-200/60 hover:border-cognac/40",
    icon: "bg-stone-100 text-cognac",
    text: "text-charcoal",
    hover: "group-hover:shadow-md",
  },
  blue: {
    bg: "bg-white",
    border: "border-stone-200/60 hover:border-cognac/40",
    icon: "bg-stone-100 text-cognac",
    text: "text-charcoal",
    hover: "group-hover:shadow-md",
  },
  green: {
    bg: "bg-white",
    border: "border-stone-200/60 hover:border-cognac/40",
    icon: "bg-stone-100 text-cognac",
    text: "text-charcoal",
    hover: "group-hover:shadow-md",
  },
  purple: {
    bg: "bg-white",
    border: "border-stone-200/60 hover:border-cognac/40",
    icon: "bg-stone-100 text-cognac",
    text: "text-charcoal",
    hover: "group-hover:shadow-md",
  },
  pink: {
    bg: "bg-white",
    border: "border-stone-200/60 hover:border-cognac/40",
    icon: "bg-stone-100 text-cognac",
    text: "text-charcoal",
    hover: "group-hover:shadow-md",
  },
  amber: {
    bg: "bg-white",
    border: "border-stone-200/60 hover:border-cognac/40",
    icon: "bg-stone-100 text-cognac",
    text: "text-charcoal",
    hover: "group-hover:shadow-md",
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

        </motion.div>
      </Link>
    </motion.div>
  );
}
