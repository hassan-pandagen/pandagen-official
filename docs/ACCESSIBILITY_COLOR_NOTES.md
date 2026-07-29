# Accessibility color notes

This pass restores the standard semantic stone scale and chooses contrast by surface instead of redefining `stone-400` and `stone-500` globally.

## Approved pairs

| Use | Foreground / background | WCAG ratio |
| --- | --- | ---: |
| Muted normal text on white | `stone-600` / white | 7.63:1 |
| Muted normal text on stone-50 | `stone-600` / stone-50 | 7.30:1 |
| Muted normal text on paper (stone-100) | `stone-600` / stone-100 | 6.99:1 |
| Muted normal text on charcoal | `stone-400` / stone-900 | 6.93:1 |
| Muted normal text on midnight | `stone-400` / stone-950 | 7.83:1 |
| Strong supporting text on slate-900 | `stone-300` / slate-900 | 11.98:1 |
| Warm accent text on dark surfaces | `orange-300` / stone-900 | 10.37:1 |
| Error text on white | `red-600` / white | 4.83:1 |
| Success text on white | `emerald-700` / white | 5.48:1 |

`amber-600` / white is 3.19:1 and is reserved for meaningful icons such as rating stars, not normal-sized text. Decorative rules, separators, shadows, and background flourishes are not treated as information-bearing boundaries.

## Target sizing

Icon-only modal controls and small reset/footer links touched in this pass have a minimum 24px target. Primary buttons already exceed the WCAG 2.2 minimum.

## Verification residuals

The in-app browser surface was unavailable (`localhost:3000` could not be attached), so computed-style, responsive, and axe verification still needs a rendered rerun. The blog listing, search, and shared metadata components were remediated; one-off color utilities inside legacy long-form article bodies remain a separate rendered inventory.
