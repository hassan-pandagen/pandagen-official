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
/**
 * Framer Motion's `bounce` + `duration` spring API maps to Apple's
 * damping-ratio + response. Do not switch these to `damping`/`stiffness`:
 * Framer's `damping` is a raw coefficient, not a ratio, so Apple's
 * "damping 1.0" translates to a coefficient of 2*sqrt(stiffness*mass) —
 * passing 1.0 directly gives a ratio of 0.05 and oscillates for seconds.
 */
export const AppleSprings = {
  // Default UI: critically damped, no overshoot
  default: {
    type: "spring" as const,
    bounce: 0,
    duration: 0.4,
  },

  // Momentum interaction: slight bounce, only after a flick/drag
  momentum: {
    type: "spring" as const,
    bounce: 0.2,
    duration: 0.4,
  },

  // Fast response
  snappy: {
    type: "spring" as const,
    bounce: 0,
    duration: 0.3,
  },

  // Slower, more graceful response
  graceful: {
    type: "spring" as const,
    bounce: 0,
    duration: 0.5,
  },

  // Drawer/sheet: momentum-driven, so a little bounce is correct
  sheet: {
    type: "spring" as const,
    bounce: 0.2,
    duration: 0.3,
  },
} as const;

export type AppleSpring = (typeof AppleSprings)[keyof typeof AppleSprings];

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
export function useAppleTransition(spring: AppleSpring) {
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
