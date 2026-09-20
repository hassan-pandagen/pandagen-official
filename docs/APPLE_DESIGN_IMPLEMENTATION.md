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

There is no separate Apple stylesheet. An earlier version of this guide
described `src/styles/apple-design.css`; it was deleted on 2026-09-20 because
it was appended to `globals.css` unlayered, which made it beat every Tailwind
utility and override the site's own (better-tuned) typography, focus rings,
scroll offset and `[data-reveal]` reveal system. See the commit for the full
list of what it was clobbering.

Global styling lives in `src/app/globals.css` only. Two rules for editing it:

1. **Anything that should be overridable by a Tailwind class goes in a
   `@layer`.** Unlayered CSS wins against every `@layer`, so an unlayered rule
   silently kills utilities on the same element.
2. **Never re-declare something the file already defines later in the
   cascade.** Check before adding — `fadeInUp`, `[data-reveal]`,
   `:focus-visible` and the scroll offsets all already exist.

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

**Use `bounce` + `duration`, never `damping` + `stiffness`.** Framer's
`damping` is a raw coefficient, not a damping ratio: critical damping is
`2*sqrt(stiffness*mass)`, so writing Apple's "damping 1.0" literally at
stiffness 100 gives a ratio of **0.05** and oscillates for seconds. Framer's
`{bounce, duration}` API maps 1:1 onto Apple's damping-ratio + response, so
the values from SKILL.md §4 transfer directly.

| Preset | `bounce` | `duration` | Apple equivalent | Use for |
|---|---|---|---|---|
| `default` | 0 | 0.4s | damping 1.0, response 0.4 | most UI |
| `momentum` | 0.2 | 0.4s | damping 0.8, response 0.4 | after a flick/drag |
| `snappy` | 0 | 0.3s | damping 1.0, response 0.3 | small, immediate feedback |
| `graceful` | 0 | 0.5s | damping 1.0, response 0.5 | large or slow moves |
| `sheet` | 0.2 | 0.3s | damping 0.8, response 0.3 | drawers and sheets |

Bounce above 0 only when a gesture carried momentum into the animation.

---

## Best Practices

### ✅ Do
- Use `AppleButton` for primary CTAs
- Use `AppleModal` for critical dialogs
- Let springs handle interrupts (user can grab mid-animation)
- Test with `prefers-reduced-motion` enabled
- Use haptic feedback sparingly (only for meaningful actions)

### ❌ Don't
- **Put `whileHover` on a child and expect it to react to the parent's hover.**
  It fires only while the pointer is literally over that child, so a label that
  fades in this way blinks on and off as the cursor crosses it. Put
  `initial="rest" animate="rest" whileHover="hover"` on the parent and give
  children `variants={{ rest: …, hover: … }}` — Framer propagates the label.
- **Put `transition-all` on a `motion.*` element.** CSS and the spring then
  both drive `transform`. Name the properties instead:
  `transition-[border-color,box-shadow]`.
- **Animate layout properties on hover** (`gap`, `margin`, `padding`, `width`).
  Every frame forces a reflow. Animate `transform`/`translate` and `opacity`.
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
