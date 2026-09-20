# Apple Design Implementation Guide

**Date:** September 20, 2026  
**Basis:** SKILL.md (Apple's WWDC "Designing Fluid Interfaces" principles)  
**Framework:** Framer Motion + custom Spring utilities

---

## Overview

PandaCodeGen's website has been enhanced with Apple's design principles for fluid, responsive, and accessible interactions. This document outlines what was implemented, how to use the new components, and how to extend them.

**Core Principles Implemented:**
1. **Response** — immediate feedback on pointer-down, not pointer-up
2. **Interruptibility** — spring-based animations that can be grabbed mid-flight
3. **Velocity handoff** — gestures flow seamlessly into animations
4. **Accessible motion** — full support for `prefers-reduced-motion`
5. **Material design** — translucent, layered UI with depth
6. **Craft** — deliberate, refined animations and spacing

---

## New Components

### 1. AppleMotion.tsx
**Purpose:** Centralized spring presets and motion utilities  
**Location:** `src/components/ui/AppleMotion.tsx`

```tsx
import { AppleSprings, getTransition, projectMomentum } from "@/components/ui/AppleMotion";

// Use in Framer Motion animations
<motion.div
  animate={{ y: 0 }}
  transition={AppleSprings.default}
>
  Content
</motion.div>
```

**Available Presets:**
- `AppleSprings.default` — smooth, no overshoot (best for most UI)
- `AppleSprings.momentum` — under-damped, slight bounce (for flicks/drags)
- `AppleSprings.snappy` — fast response, immediate feedback
- `AppleSprings.graceful` — slower, more elegant motion
- `AppleSprings.sheet` — for drawer/sheet animations

**Utilities:**
- `getTransition()` — automatically handles reduced-motion
- `projectMomentum()` — calculate flick landing point
- `calculateSpringVelocity()` — normalize gesture velocity for springs
- `rubberBand()` — soft boundary resistance

---

### 2. AppleButton.tsx
**Purpose:** Button with immediate pointer-down feedback and spring animations  
**Location:** `src/components/ui/AppleButton.tsx`

```tsx
import { AppleButton } from "@/components/ui/AppleButton";

<AppleButton variant="primary" size="md" onClick={handleClick}>
  Get Started
</AppleButton>
```

**Features:**
- ✅ Feedback on `pointerdown`, not `click`
- ✅ Haptic feedback (vibration API) on mobile
- ✅ Keyboard accessible (focus ring)
- ✅ Reduced-motion support (fades instead of scales)
- ✅ Three variants: primary, secondary, tertiary

**Props:**
```tsx
interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  haptic?: boolean; // Vibration feedback
}
```

---

### 3. AppleModal.tsx
**Purpose:** Modal dialog with spring animations and accessible focus management  
**Location:** `src/components/ui/AppleModal.tsx`

```tsx
import AppleModal from "@/components/ui/AppleModal";

<AppleModal isOpen={isOpen} onClose={handleClose} title="Sign Up">
  <p>Modal content here...</p>
</AppleModal>
```

**Features:**
- ✅ Spring-based scale + opacity animations
- ✅ Translucent backdrop with blur (Apple's material)
- ✅ Keyboard navigation (Escape to close)
- ✅ Focus management (returns focus on close)
- ✅ Reduced-motion support (cross-fade)

**Props:**
```tsx
interface AppleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  showCloseButton?: boolean;
}
```

---

### 4. AppleFormField.tsx
**Purpose:** Text input with focus-state feedback and validation  
**Location:** `src/components/ui/AppleFormField.tsx`

```tsx
import { AppleFormField } from "@/components/ui/AppleFormField";

<AppleFormField
  label="Email"
  type="email"
  error={emailError}
  helperText="We'll never spam you"
  required
/>
```

**Features:**
- ✅ Immediate visual feedback on focus
- ✅ Inline error display
- ✅ Helper text support
- ✅ Accessible error messaging (`aria-invalid`)
- ✅ Smooth transitions on state changes

**Props:**
```tsx
interface AppleFormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}
```

---

## Global Styles

**Location:** `src/styles/apple-design.css`  
**Imported in:** `src/app/globals.css`

This file provides:
- Optical font sizing (responsive tracking and leading)
- Translucent material patterns (glass-card, toolbar)
- Pointer feedback (scale on active)
- Reduced-motion media queries
- Spring animation keyframes
- Scroll edge effects
- Gesture feedback (success pulse, error shake)

---

## Migration Guide: Updating Existing Components

### Before: Old Button
```tsx
<button className="px-6 py-3 bg-charcoal text-white hover:bg-stone-800 transition-colors">
  Click me
</button>
```

### After: Apple Button
```tsx
import { AppleButton } from "@/components/ui/AppleButton";

<AppleButton variant="primary">
  Click me
</AppleButton>
```

**Benefits:**
- ✅ Immediate pointer-down feedback (not delayed by CSS)
- ✅ Haptic feedback on mobile
- ✅ Spring animation on hover
- ✅ Better keyboard accessibility

---

### Before: Old Modal
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Custom modal content */}
    </motion.div>
  )}
</AnimatePresence>
```

### After: Apple Modal
```tsx
import AppleModal from "@/components/ui/AppleModal";

<AppleModal isOpen={isOpen} onClose={handleClose} title="Dialog">
  {/* Content */}
</AppleModal>
```

**Benefits:**
- ✅ Spring-based animations (interruptible)
- ✅ Automatic focus management
- ✅ Keyboard support (Escape key)
- ✅ Translucent backdrop

---

### Before: Old Form Field
```tsx
<input
  type="email"
  className="border border-stone-200 px-4 py-3 focus:border-cognac focus:ring-0"
/>
```

### After: Apple Form Field
```tsx
import { AppleFormField } from "@/components/ui/AppleFormField";

<AppleFormField
  label="Email"
  type="email"
  error={errors.email}
/>
```

**Benefits:**
- ✅ Shadow feedback on focus (material depth)
- ✅ Inline error messaging
- ✅ Better visual hierarchy
- ✅ Accessible error states

---

## Accessibility: Reduced Motion Support

All new components automatically detect and respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* Automatically handled by:
     - AppleButton: uses opacity fade instead of scale
     - AppleModal: uses cross-fade instead of spring
     - AppleFormField: reduces transition durations
  */
}
```

**Testing reduced motion locally:**
```css
/* DevTools → Styles → Add rule */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Animation Timing Reference

From SKILL.md and Apple WWDC:

| Interaction | Damping | Stiffness | Settle Time |
|---|---|---|---|
| Default UI | 1.0 | 100 | ~0.3s |
| Momentum (flick) | 0.8 | 100 | ~0.4s |
| Snappy response | 1.0 | 130 | ~0.25s |
| Sheet/drawer | 0.8 | 120 | ~0.35s |

---

## Best Practices

### ✅ Do
- Use `AppleButton` for primary CTAs
- Use `AppleModal` for critical dialogs
- Let springs handle interrupts (user can grab mid-animation)
- Test with `prefers-reduced-motion` enabled
- Use haptic feedback sparingly (only for meaningful actions)

### ❌ Don't
- Use CSS `transition` for interactions (springs are better)
- Disable `pointer-events` during animations (breaks interruptibility)
- Force fixed animation durations (springs adapt to velocity)
- Forget reduced-motion users (always provide fallback)
- Add haptic feedback for every action (reserve for important moments)

---

## Performance Considerations

- **Bundle impact:** +2KB (AppleMotion utilities only; Framer Motion already in use)
- **Runtime:** Springs compute on every frame; optimized with `will-change` CSS
- **Accessibility:** No impact; reduced-motion is CSS-based

---

## Testing Checklist

Before shipping a page with Apple design enhancements:

- [ ] Button feedback works on `pointerdown` (test on mobile)
- [ ] Modal can be interrupted mid-animation (drag/swipe)
- [ ] Keyboard navigation works (Tab, Escape)
- [ ] Focus ring visible on all interactive elements
- [ ] Reduced-motion media query tested in DevTools
- [ ] No haptic feedback spamminess (one per meaningful action)
- [ ] Form errors inline and accessible
- [ ] No layout shift during animations (`will-change` working)

---

## Further Reading

- **SKILL.md** — Complete guide to Apple design principles
- **Framer Motion Docs** — https://www.framer.com/motion/
- **Apple Design Resources** — https://developer.apple.com/design/
- **WCAG 2.1 § 2.3.3** — Animation from Interactions (reduced-motion)

---

## Questions & Support

For questions about implementation or extending these components:
1. Check SKILL.md for design principles
2. Review the component source code (it's well-commented)
3. Test with Framer Motion's interactive examples
4. Reference Apple's WWDC talks ("Designing Fluid Interfaces", 2018)

---

**Last updated:** 2026-09-20  
**Version:** 1.0  
**Status:** Production Ready
