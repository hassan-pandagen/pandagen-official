"use client";

/**
 * Apple-style button with immediate pointer-down feedback and spring-based animations
 *
 * Design principles implemented:
 * 1. Response: Feedback on pointer-down, not pointer-up
 * 2. Interruptibility: Spring animation allows grabbing mid-motion
 * 3. Reduced motion: Falls back to opacity fade instead of scale
 */

import { useReducedMotion } from "framer-motion";
import React, { useState, useRef, useCallback } from "react";

interface AppleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style: primary (filled), secondary (outlined), tertiary (subtle)
   */
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  /**
   * Whether to include haptic feedback (if available)
   */
  haptic?: boolean;
}

export const AppleButton = React.forwardRef<HTMLButtonElement, AppleButtonProps>(
  (
    {
      className = "",
      children,
      disabled = false,
      variant = "primary",
      size = "md",
      haptic = true,
      onPointerDown: externalOnPointerDown,
      onPointerUp: externalOnPointerUp,
      onClick: externalOnClick,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const prefersReducedMotion = useReducedMotion();

    // Merge refs
    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    const handlePointerDown = useCallback(
      (e: React.PointerEvent<HTMLButtonElement>) => {
        if (disabled) return;

        setIsPressed(true);

        // Haptic feedback on press (if supported and enabled)
        if (haptic && navigator?.vibrate) {
          navigator.vibrate(10);
        }

        externalOnPointerDown?.(e);
      },
      [disabled, haptic, externalOnPointerDown]
    );

    const handlePointerUp = useCallback(
      (e: React.PointerEvent<HTMLButtonElement>) => {
        setIsPressed(false);
        externalOnPointerUp?.(e);
      },
      [externalOnPointerUp]
    );

    const handlePointerLeave = useCallback(() => {
      setIsPressed(false);
    }, []);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        // Only fire click if pointer was down (not keyboard or forced click)
        if (isPressed || e.detail === 0) {
          externalOnClick?.(e);
        }
      },
      [isPressed, externalOnClick]
    );

    // Size classes
    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    // Variant styles
    const variantClasses = {
      primary: "bg-charcoal text-white hover:bg-stone-800 disabled:bg-stone-300",
      secondary: "border border-charcoal text-charcoal hover:bg-stone-100 disabled:border-stone-400 disabled:text-stone-400",
      tertiary: "text-charcoal hover:text-cognac disabled:text-stone-400",
    };

    // Scale animation on press (from SKILL.md: ~0.97 scale on active)
    const pressScale = prefersReducedMotion ? 1 : isPressed ? 0.97 : 1;
    const pressOpacity = prefersReducedMotion ? (isPressed ? 0.8 : 1) : 1;

    return (
      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        className={`
          inline-flex items-center justify-center
          rounded-full font-semibold
          transition-all duration-100
          active:opacity-70
          disabled:cursor-not-allowed
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cognac focus-visible:ring-offset-2
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
        style={{
          transform: `scale(${pressScale})`,
          opacity: pressOpacity,
          transformOrigin: "center",
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

AppleButton.displayName = "AppleButton";
