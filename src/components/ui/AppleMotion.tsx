"use client";

/**
 * Apple Design Motion: Spring-based, interruptible animations following
 * Apple's WWDC Designing Fluid Interfaces principles.
 *
 * Core principles:
 * - Respond on pointer-down (not click)
 * - Use springs for interruptibility and momentum
 * - Carry velocity from gestures to animations
 * - Support reduced-motion with graceful fallbacks
 */

import { useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

/**
 * Spring presets matching Apple's shipped values
 * From SKILL.md and Apple WWDC talks
 */
export const AppleSprings = {
  // Default UI: smooth, no overshoot
  default: {
    type: "spring" as const,
    damping: 1.0,
    stiffness: 100,
    mass: 1,
  },

  // Momentum interaction: slight bounce from flick/drag
  momentum: {
    type: "spring" as const,
    damping: 0.8,
    stiffness: 100,
    mass: 1,
  },

  // Fast response (0.3s settle time)
  snappy: {
    type: "spring" as const,
    damping: 1.0,
    stiffness: 130,
    mass: 1,
  },

  // Slower, more graceful response (0.4s settle time)
  graceful: {
    type: "spring" as const,
    damping: 1.0,
    stiffness: 80,
    mass: 1,
  },

  // For drawer/sheet animations
  sheet: {
    type: "spring" as const,
    damping: 0.8,
    stiffness: 120,
    mass: 1,
  },
} as const;

/**
 * Reduced motion fallback: cross-fade instead of slide/scale
 */
export const ReducedMotionTransition = {
  type: "tween" as const,
  duration: 0.2,
  ease: "easeInOut" as const,
};

/**
 * Pointer-down feedback: scale slightly on press
 * Apple design principle: "Respond on pointer-down, not on release"
 */
export function getPointerDownStyle(): CSSProperties {
  return {
    transition: "transform 100ms ease-out",
  };
}

/**
 * Get appropriate transition based on user's reduced-motion preference
 */
export function getTransition(spring: typeof AppleSprings.default) {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? ReducedMotionTransition : spring;
}

/**
 * Calculate projection for momentum (Apple's flick calculation)
 * From: Designing Fluid Interfaces sample code
 *
 * Takes a release velocity and projects where the element will settle
 */
export function projectMomentum(
  initialVelocity: number,
  decelerationRate: number = 0.998
): number {
  return (initialVelocity / 1000) * (decelerationRate / (1 - decelerationRate));
}

/**
 * Calculate velocity for spring handoff
 * Normalizes absolute px/s velocity to relative velocity based on remaining distance
 */
export function calculateSpringVelocity(
  gestureVelocity: number,
  currentValue: number,
  targetValue: number
): number {
  const distance = targetValue - currentValue;
  if (Math.abs(distance) < 1) return 0; // Avoid division by zero
  return gestureVelocity / distance;
}

/**
 * Rubber-banding: soft boundary resistance
 * From Apple's UIScrollView behavior
 */
export function rubberBand(
  overshoot: number,
  dimension: number,
  constant: number = 0.55
): number {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}
