# Design Context — Copin Design System
> Extended reference: principles, anti-patterns, product context.
> Load this when explaining design decisions or onboarding new contributors.

---

## Design Principles (full)

### P1 · Data is the Hero
*Show truth. Remove decoration. Data always wins.*

Every element must justify itself by serving data. Whitespace exists to aid reading speed, not aesthetics. Show bad numbers clearly — trust is built through transparency.
```
✓ -$172,726 in red-1, large, front and center
✓ Dense metric rows — no card padding to "breathe"
✗ Rounding numbers or using neutral color to soften negatives
✗ Large empty states with illustration art
```

### P2 · Flat by Default, Raised by Exception
*Panels + dividers. Cards only for floating elements.*

Layout regions use `border-radius: 0` and are separated by background color difference or `1px` divider lines. Box-shadow and border-radius appear **only** on genuinely floating elements: modal, dropdown, tooltip.
```
✓ Panels share a 1px border, no gap, no radius
✓ Modal: border + radius 8px + shadow (it truly floats)
✗ Stats section in rounded card with shadow
✗ Layout panels with border-radius > 0
```

### P3 · Built for Focus
*Remove friction between insight and decision.*

Density is intentional. One primary CTA per section. Confirm dialogs only for irreversible actions. Animation communicates state — never decoration.
```
✓ Inline EditInput for quick value changes (no modal needed)
✓ Confirm only for "Remove Copy Trade" (irreversible)
✗ Confirm dialog for "Add to Favorites" (reversible)
✗ Card hover scale animation "because it looks good"
```

### P4 · Color Speaks Before Words
*Green = profit. Red = loss. Yellow = warning. No exceptions.*

These three semantic colors are a language. A user scans a table and understands profit/loss before reading a number. Never use them for decoration or generic emphasis.
```
✓ Positive PnL → green-1 | Error border → red-1 | Leverage → orange-1
✗ Green "Confirm" button
✗ Red featured section header or danger-zone title
```

### P5 · Depth Signals Hierarchy
*n-7 = ground. n-6 = surface. n-5 = raised. Wrong layer = wrong message.*

The neutral scale is a spatial system. Layers are not interchangeable. Using the wrong layer breaks hierarchy and confuses what's interactive.
```
✓ Page: n-7 → Panel: n-6 → Hover/Active/Focused: n-5
✓ Input on focus: bg lifts to n-5 (feels active)
✗ n-5 as a regular panel background
✗ n-7 inside a card sitting on n-6 (inverts depth)
```

### P6 · Unmistakably Copin
*Terminal aesthetic. Reference the app, not a trend.*

ABC Social Mono everywhere. Electric blue primary. Flat panel layout. Inline patterns (underline input, inline edit). When in doubt, open app.copin.io.
```
✓ ABC Social Mono / monospace fallback for all UI text
✓ Flat panel layout matching Trader Profile structure
✗ Rounded card grid that looks like a SaaS dashboard
✗ Sans-serif font "because it looks cleaner"
```

---

## Product Context

```
Product  : Copin Analyzer — On-chain Copy Trading & Signals Platform
Type     : Web App · Crypto / DeFi Analytics Dashboard
Users    : Crypto traders, copy-trading followers, DeFi power users
URL      : https://app.copin.io
Docs     : https://docs.copin.io
Stack    : React + TypeScript + styled-components · Dark mode only
Feel     : Bloomberg Terminal / TradingView — dense, flat, monospace, data-first
NOT for  : Marketing pages, onboarding flows, or branding exercises
```

---

## Anti-Patterns — What Copin is NOT

```
NOT Notion / Linear
  ✗ Large whitespace buffers between sections
  ✗ Rounded card grids with soft shadows and gap spacing
  ✗ Humanist or serif typography for "approachability"

NOT Material Design
  ✗ Elevation shadows on content cards
  ✗ Floating Action Buttons (FAB)
  ✗ Ripple effects or Material color semantics (teal/pink/purple)
  ✗ Text fields with floating labels

NOT Generic SaaS Dashboard
  ✗ Gradient hero banners with illustration art
  ✗ Empty states with cheerful illustrations and copy
  ✗ Onboarding tooltip chains
  ✗ White/light background "cards" on a gray page

NOT Binance / Crypto-generic
  ✗ Yellow/black high-contrast brand colors
  ✗ Coin-specific color coding for decorative purposes
  ✗ Dense tables with zero breathing room and no hierarchy
```

**IS:** Bloomberg Terminal + TradingView — flat, dense, terminal, data-first.

---

*Source: Figma Component Canvas (1:439) + app.copin.io + docs.copin.io*
