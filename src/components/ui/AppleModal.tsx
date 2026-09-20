"use client";

/**
 * Apple-style modal with spring-based animations
 *
 * Design principles:
 * 1. Material: Translucent backdrop with blur
 * 2. Animation: Spring-based scale + opacity for interruptibility
 * 3. Accessibility: Reduced motion support + keyboard navigation
 */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { AppleSprings, ReducedMotionTransition } from "./AppleMotion";

interface AppleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  showCloseButton?: boolean;
}

export default function AppleModal({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}: AppleModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Store element that had focus before modal opened
      returnFocusRef.current = document.activeElement as HTMLElement;

      // Focus close button for keyboard navigation
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    }

    if (!isOpen && returnFocusRef.current?.isConnected) {
      // Return focus when modal closes
      requestAnimationFrame(() => {
        returnFocusRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const backdropTransition = prefersReducedMotion
    ? ReducedMotionTransition
    : { duration: 0.2 };

  const modalTransition = prefersReducedMotion
    ? ReducedMotionTransition
    : AppleSprings.default;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop with blur (Apple's translucent material) */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={backdropTransition}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal container */}
          <div className="pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              key="modal"
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 16 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 16 }
              }
              transition={modalTransition}
              className="pointer-events-auto relative w-full max-w-md rounded-2xl bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? "modal-title" : undefined}
            >
              {/* Header with close button */}
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
                  {title && (
                    <h2 id="modal-title" className="text-lg font-semibold text-charcoal">
                      {title}
                    </h2>
                  )}
                  {showCloseButton && (
                    <button
                      ref={closeButtonRef}
                      onClick={onClose}
                      className="ml-auto inline-flex items-center justify-center rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cognac"
                      aria-label="Close modal"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="px-6 py-4">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
