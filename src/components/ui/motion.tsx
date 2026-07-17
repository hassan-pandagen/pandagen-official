"use client";

// Drop-in replacement for the subset of framer-motion used in this codebase.
// Maps `motion.X` mount/scroll fade animations to CSS keyframes + IntersectionObserver.
// Bundle: ~1KB vs framer-motion's ~37KB gzipped. Animations stay equivalent for the
// patterns we actually use: initial/animate fade-up, whileInView fade-up, transition.delay.
//
// Files that genuinely need AnimatePresence (exit animations, modal mount/unmount)
// keep importing from framer-motion directly:
//   - src/components/audit/AuditWidget.tsx
//   - src/components/audit/AuditEmailGate.tsx
//   - src/components/audit/AuditLoadingState.tsx
//   - src/components/ui/QuoteModal.tsx
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyProps = Record<string, any>;

const MOTION_ONLY_KEYS = new Set([
  "initial", "animate", "whileInView", "whileHover", "whileTap", "exit",
  "viewport", "transition", "layoutId", "layout", "variants", "custom",
  "onAnimationStart", "onAnimationComplete", "drag", "dragConstraints",
  "dragElastic", "dragMomentum", "onDragStart", "onDragEnd", "onDrag",
]);

function stripMotionProps(props: AnyProps): AnyProps {
  const out: AnyProps = {};
  for (const key in props) {
    if (!MOTION_ONLY_KEYS.has(key)) out[key] = props[key];
  }
  return out;
}

function createComponent(tag: string) {
  const Component = forwardRef<HTMLElement, AnyProps>(function MotionComponent(props, ref) {
    const { whileInView, animate, transition, className = "", style, children } = props;

    const innerRef = useRef<HTMLElement | null>(null);
    const hasReveal = !!whileInView;
    const hasMount = !hasReveal && !!animate;
    const [visible, setVisible] = useState<boolean>(!hasReveal);

    useEffect(() => {
      if (!hasReveal || !innerRef.current) return;
      if (typeof IntersectionObserver === "undefined") {
        setVisible(true);
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
      );
      observer.observe(innerRef.current);
      return () => observer.disconnect();
    }, [hasReveal]);

    const setRef = (el: HTMLElement | null) => {
      innerRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref && "current" in ref) (ref as { current: HTMLElement | null }).current = el;
    };

    const delayMs = typeof transition?.delay === "number" ? transition.delay * 1000 : 0;
    const cleanProps = stripMotionProps(props);
    delete cleanProps.className;
    delete cleanProps.style;
    delete cleanProps.children;
    const Tag = tag as any;
    const baseStyle: CSSProperties = (style as CSSProperties) ?? {};

    if (hasReveal) {
      return (
        <Tag
          {...cleanProps}
          ref={setRef}
          className={className}
          data-reveal={visible ? "visible" : "hidden"}
          style={{
            ...baseStyle,
            transitionDelay: delayMs ? `${delayMs}ms` : baseStyle.transitionDelay,
          }}
        >
          {children}
        </Tag>
      );
    }

    if (hasMount) {
      return (
        <Tag
          {...cleanProps}
          ref={setRef}
          className={`${className} animate-fade-in-up`.trim()}
          style={{
            ...baseStyle,
            animationDelay: delayMs ? `${delayMs}ms` : baseStyle.animationDelay,
          }}
        >
          {children}
        </Tag>
      );
    }

    return (
      <Tag {...cleanProps} ref={setRef} className={className} style={baseStyle}>
        {children}
      </Tag>
    );
  });
  Component.displayName = `motion.${tag}`;
  return Component;
}

const cache: Record<string, ReturnType<typeof createComponent>> = {};

export const motion = new Proxy({} as Record<string, ReturnType<typeof createComponent>>, {
  get(_target, key: string) {
    if (typeof key !== "string") return undefined;
    if (!cache[key]) cache[key] = createComponent(key);
    return cache[key];
  },
});

export function AnimatePresence({ children }: { children: ReactNode; mode?: string; initial?: boolean; onExitComplete?: () => void }) {
  return <>{children}</>;
}
