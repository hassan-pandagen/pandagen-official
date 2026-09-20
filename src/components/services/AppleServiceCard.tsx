"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppleSprings } from "@/components/ui/AppleMotion";

interface AppleServiceCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export default function AppleServiceCard({
  href,
  icon: Icon,
  title,
  description,
  featured = false,
}: AppleServiceCardProps) {
  const reduced = useReducedMotion();

  // Hover states are driven by variant labels on the card so they propagate to
  // every child at once. A child's own whileHover would only fire while the
  // pointer is literally over that child, which makes it flicker on and off as
  // the cursor crosses it.
  const cardVariants: Variants = {
    rest: { y: 0, scale: 1 },
    hover: { y: reduced ? 0 : -4, scale: 1 },
    press: { y: 0, scale: reduced ? 1 : 0.99 },
  };
  const iconVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: reduced ? 1 : 1.06 },
  };
  const arrowVariants: Variants = {
    rest: { x: 0 },
    hover: { x: reduced ? 0 : 4 },
  };

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 8 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <motion.div
          variants={cardVariants}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap="press"
          transition={AppleSprings.default}
          className="group relative flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-stone-300 hover:shadow-md"
        >
          {featured && (
            <span className="absolute right-4 top-4 rounded-full bg-cognac/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cognac">
              Popular
            </span>
          )}

          <motion.div
            variants={iconVariants}
            transition={AppleSprings.snappy}
            className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-cognac transition-colors duration-200 group-hover:bg-cognac/10"
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </motion.div>

          <h3 className="mb-2 text-base font-semibold leading-snug tracking-[-0.01em] text-charcoal">
            {title}
          </h3>

          <p className="mb-4 grow text-sm leading-relaxed text-stone-600">{description}</p>

          <span className="flex items-center gap-1.5 text-sm font-semibold text-charcoal transition-colors duration-200 group-hover:text-cognac">
            Learn more
            <motion.span variants={arrowVariants} transition={AppleSprings.snappy} className="inline-flex">
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </motion.span>
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
