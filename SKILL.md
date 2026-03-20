---
name: copin-design-system
description: >
  Design, generate, and review UI/UX for Copin Analyzer (app.copin.io) following
  the official Copin Design System. Activate when: (1) user asks to design or build
  screens for Copin, (2) generating React/TypeScript components that follow Copin style,
  (3) reviewing/auditing Copin UI code, (4) user mentions "Copin", "copin design",
  "Bloomberg terminal style", "dark trading UI", or "crypto dashboard dark".
version: 5.3.0
updated: 2026-03-20
---

# Copin Design System Skill

> Dark mode only · Bloomberg Terminal aesthetic · Data-first · app.copin.io

```
P1 Data is the Hero      — show truth, remove decoration, data always wins
P2 Flat by Default       — border-radius:0, panels share 1px border, no shadow/gap
P3 Built for Focus       — density intentional, 1 primary CTA, animation=state only
P4 Color Speaks First    — green=profit, red=loss, orange=warning. Never decorative.
P5 Depth = Hierarchy     — n-7 page → n-6 panel → n-5 hover/focused ONLY
P6 Unmistakably Copin    — ABC Social Mono, electric blue primary, flat terminal
```

---

## 4 · DESIGN TOKENS

### 4.1 Typography

**Main UI — ABC Social Mono** (ask user first, fallback: JetBrains Mono)
**Weights: 400 (Regular) and 700 (Bold) ONLY. Never 500 or 600.**

| Token | Size | Weight | Line-H | Letter-S |
|-------|------|--------|--------|----------|
| `h1` | 48px | 700 | 52px | -2px |
| `h2` | 40px | 700 | 48px | -2px |
| `h3` | 32px | 700 | 40px | -2px |
| `h4` | 28px | 700 | 36px | -1px |
| `h5` | 24px | 700 | 32px | -1px |
| `head` | 20px | 700 | 28px | 0 |
| `large-bold` | 16px | 700 | 24px | 0 |
| `large` | 16px | 400 | 24px | 0 |
| `body-bold` | 14px | 700 | 20px | 0 |
| `body` | 14px | 400 | 20px | 0 |
| `caption-bold` | 12px | 700 | 18px | 0 |
| `caption` | 12px | 400 | 18px | 0 |
| `small-bold` | 10px | 700 | 16px | 0 |
| `small` | 10px | 400 | 16px | 0 |

**DEFAULT text = body 14px/400. DEFAULT bold = body 14px/700.**

> Copin AI interfaces only: use Manrope font, weights 400/600 (not 700).

### 4.2 Color Palette

```css
--n-7: #0B0E18;   /* page background */
--n-6: #101423;   /* panel / sidebar / card surface */
--n-5: #1F2232;   /* hover / active / focused input bg ONLY */
--n-4: #313856;   /* borders / dividers */
--n-3: #777E90;   /* placeholder / disabled / muted */
--n-2: #C0C0C9;   /* secondary text / labels */
--n-1: #EAE5E3;   /* primary text (warm off-white) */

--primary-1: #4EAEFD;
--primary-2: #97CFFD;   /* hover state */
--primary-3: #2F9EEE;   /* pressed/active state */

--green-1: #38D060;  --green-2: #6DD488;  --green-3: #2B9948;
--red-1:   #FA7B70;  --red-2:   #FA5547;  --red-3:   #BC2B1F;
/* NOTE: red-2 = main loss/danger color · red-1 = hover lighter variant */
--orange-1: #FFC24B; --orange-2: #FCEFD1; --orange-3: #CB8D14;
--violet:   #C286F0; /* special tags, protocol highlights — KHÔNG dùng cho state/semantic */

--gradient-1: linear-gradient(135deg, #4EAEFD, #008CFF);
--gradient-3: linear-gradient(135deg, #272C43, #0B0D17);
--gradient-4: linear-gradient(135deg, #ABECA2, #2FB3FE, #6A8EEA, #A185F4); /* PREMIUM ONLY */
--gradient-7: linear-gradient(135deg, #FFC24B, #02FFE8);
```

### 4.3 Semantic Aliases

```css
--text-primary: var(--n-1);    --text-secondary: var(--n-2);
--text-muted:   var(--n-3);    --text-link:      var(--primary-1);
--text-profit:  var(--green-1); --text-loss:     var(--red-2);
--text-warning: var(--orange-1);

--bg-page: var(--n-7);  --bg-panel: var(--n-6);
--bg-raised: var(--n-5);  --bg-overlay: rgba(0,0,0,0.75);

--border-default: var(--n-4);
--border-subtle:  rgba(49,56,86,0.5);
--border-focus:   var(--primary-1);

--tint-profit:  rgba(56,208,96,0.10);   --tint-loss:    rgba(250,85,71,0.10);   /* red-2 tint */
--tint-warning: rgba(255,194,75,0.10);  --tint-primary: rgba(78,174,253,0.10);
```

### 4.4 Spacing

```
Scale (4px base): 2 · 4 · 6 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64px
Table cells: padding 10px 16px · row min-height 48px
```

### 4.5 Border Radius

```
Layout panels / containers : 0px      ← ALWAYS. No exceptions.
Input / EditInput           : 2px
Button                      : 2px      ← source: theme.ts `button: '2px'`
Badge / Tag                 : 4px
Dropdown / Tooltip / Widget : 4px
Modal / Drawer              : 8px
Extended cards              : 12–16px  (limited, non-layout use)
Avatar / Switch / Pill      : 9999px
```

### 4.6 Shadow

```css
/* Use ONLY on floating elements: modal, dropdown, tooltip */
--shadow-3: 0 8px 16px  rgba(119,126,144,0.10);  /* dropdown / tooltip */
--shadow-4: 0 16px 32px rgba(119,126,144,0.10);  /* modal */
--shadow-5: 0 32px 48px rgba(119,126,144,0.10);  /* overlay */
```

### 4.7 Scrollbars

> Scrollbars are UI chrome, not content. Keep them thin, low-contrast, and style consistently across Copin.

```
/* Scrollbar thickness — flexible */
--scrollbar-size: 4px;          /* default: compact, data-first */
/* ↑ Can increase to 6px for standalone scroll areas (modals, sidebars, drawers) */
--scrollbar-radius: 99px;       /* fully rounded thumb */

/* Track */
--scrollbar-track: rgba(255,255,255,0.00);  /* fully transparent */
--scrollbar-track-hover: rgba(255,255,255,0.04);

/* Thumb */
--scrollbar-thumb: rgba(255,255,255,0.15);  /* visible, low contrast */
--scrollbar-thumb-hover: rgba(78,174,253,0.24); /* primary-2 */
--scrollbar-thumb-active: rgba(78,174,253,0.40); /* primary-1 */
```

**Guidelines:**
- Default `--scrollbar-size: 4px` — prioritizes data density in data-heavy views (tables, charts, trade lists).
- Widen to `6px` only in isolated scroll containers where discoverability matters more than space (e.g. modal body, settings drawer).
- Use custom scrollbars for desktop web (WebKit/Pseudo-elements). For native scrollbars (macOS), ensure content doesn’t rely on always-visible rails.
- Thumb should be subtle (low opacity) at rest, gain contrast on hover/drag.
- Do not style scrollbars in a way that interferes with content legibility or interaction (no overlapping padding).

---

## 5 · LAYOUT RULES

### 5.1 Panel Model — THE most critical rule

```
WRONG (generic SaaS)              RIGHT (Copin terminal)
┌──────┐  ┌──────┐              ┌──────┬────────────┐
│ Card │  │ Card │              │Panel │ Panel      │
│ r:8px│  │shadow│              │ n-6  │ n-7        │
└──────┘  └──────┘              └──────┴────────────┘
gap + radius + shadow            shared 1px border, no gap

n-7 (page) → n-6 (panel) → n-5 (hover/active/focused)
             1px n-4 border separates panels
             NO gap · NO radius · NO shadow between panels
```

### 5.2 Page Layouts

**Trader Profile:**
```
[TOPBAR h:48px · n-7 · border-bottom 1px n-4]
[RECENTLY VIEWED · h:48px · n-7 · border-bottom 1px n-4]
  [Protocol logo 16px] [Trader name · n-2] [$Amount · n-1] [time · n-3] · max 5 items · click → navigate
[TRADER HEADER · n-6 · border-bottom 1px n-4]
  Avatar 40px | Name H4 Bold | Protocol badges | Action Row →
[STATS BAR · n-7 · border-bottom 1px n-4]
  Timeframe tabs | PnL | Win Rate | ROI | MDD | Trades
┌──────────┬──────────────────────┬─────────────────┐
│LEFT w:240│ CHART · n-7          │ RIGHT w:380 · n-6│
│ n-6      │ PnL line chart       │ Open Positions  │
│ Radar    │ Tab: History/Token   │ Copy Trade form │
│ Stats    │ border-right 1px n-4 │                 │
│ border-r │                      │                 │
└──────────┴──────────────────────┴─────────────────┘
[BOTTOM · full-width · Tab bar + Table]
```

**Explorer / Trader List:**
```
[TOPBAR · n-7 · border-bottom 1px n-4]
[FILTER BAR · border-bottom 1px n-4]
  Search | Protocol pills | Time tabs | Filter button | Sort
[TABLE HEADER · n-5 · Body Regular 14px · n-2]
[TABLE ROWS · transparent · hover rgba(78,174,253,0.08)]
  border-bottom: 1px rgba(49,56,86,0.5) per row
[PAGINATION · border-top 1px n-4 · h:48px · n-7]
```

**Backtesting:**
```
┌─────────────┬─────────────────────────────────────┐
│CONFIG · n-6 │ RESULTS · n-7                       │
│ w:320px     │ Candlestick chart                   │
│ Inputs      │  green arrow = LONG open            │
│ Leverage    │  red arrow   = SHORT open           │
│ Date range  │  white sq    = close                │
│ [Run] btn   │ Performance metrics table            │
└─────────────┴─────────────────────────────────────┘
```

### 5.3 Sidebar / Navigation

```
Width: 240px expanded · 60px collapsed · bg n-6 · border-right 1px n-4

Nav item default : h:40px · padding 0 16px · gap 12px · icon n-3 · text n-2
Nav item hover   : bg n-5 · icon n-2 · text n-1
Nav item active  : bg rgba(78,174,253,0.10) · icon primary-1 · text n-1
                   border-left: 2px solid primary-1

Collapsed: icon only · tooltip on hover shows label
```

### 5.4 Navbar (Top Navigation)

**Source: Figma · Menu section · Navbar component**

```
Shared:  bg n-7 · border-bottom 1px n-4 · font ABC Social Mono
Layout:  [Logo] [Nav Links ─────────────────────] [Right Zone]

Default  h:54px  desktop  logged-in   full nav + wallet + premium
Login    h:52px  desktop  logged-out  full nav + LOGIN button (Normal SM)
Tablet   h:54px  ≤1024px  —           logo + search + wallet + hamburger
Mobile   h:56px  ≤768px   —           icon-only logo + search + wallet + hamburger
```

**Logo:**
```
[Copin circular icon · 24px] [COPIN · Body Bold 14px · n-1] · gap 8px · padding-left 16px
```

**Nav Links (desktop only):**
```
Items:  TRADER EXPLORER · OPEN INTEREST · TRADER BOARD · COPIER RANKING
        REFERRAL · LIVE TRADES · PERP EXPLORER [Beta] · More ▾

Each:   h full navbar · padding 0 12px · Caption Bold 12px · uppercase
Color:  default n-2 · hover n-1 · active n-1 + border-bottom 2px primary-1 (no bg)

Beta badge: bg rgba(78,174,253,0.12) · border 1px rgba(78,174,253,0.3) · text primary-1 10px · radius 4px
More ▾:     ChevronDown 12px · rotates 180° open · menu bg n-6 · border n-4 · radius 4px · shadow-3
```

**Right Zone:**
```
Search trigger:
  [MagnifyingGlass 14px · n-3] [SEARCH · 12px · n-3] [⌘K · bg n-5 · 10px · radius 2px]
  h:32px · padding 0 12px · border 1px n-4 · radius 4px · hover: border n-2

Wallet (logged in):
  [address truncated · 14px · n-1] [ChevronDown · n-3] → opens account dropdown
  Below: [Crown 12px · gradient-4] [Premium · 10px · gradient-4] — PREMIUM ONLY

Login CTA (logged out):
  "LOGIN" · Normal SM · bg primary-1 · text n-7 · h:32px · radius 4px · uppercase
```

**Responsive:**
```
Tablet: nav links hidden · hamburger (List icon 20px · GhostWhite) · opens drawer
Mobile: logo icon-only · search icon-only · hamburger
```

---

## 6 · COMPONENTS

### Button

```
Sizes: LG(52px/16px) · MD(40px/14px) [DEFAULT] · SM(32px/13px) · XSM(24px/12px)
Radius: 2px always. Icon-only: border-radius 50%.
Font-weight: 700 · text-transform: uppercase
Disabled: opacity 0.4 (all types)

— FILL VARIANTS —
Normal (PRIMARY):  bg primary-1 · text n-7 · hover bg primary-2
White:             bg n-1 · text n-7
Info:              bg tint-primary · text primary-1 · border primary-1
Warning:           bg orange-2 · text orange-3
Success:           bg green-2 · text green-3 (tint)
DangerFill:        bg red-2 · text n-7 · hover bg red-1

— OUTLINE VARIANTS —
OutLinePri:        border+text primary-1 · hover bg tint-primary
OutLineWhite:      border n-4 · text n-1 · hover border n-2
OutlineDanger:     border+text red-2 · hover bg tint-loss
OutlineActive:     border primary-1 · text primary-1 · bg tint-primary  ← selected state
OutlineInactive:   border n-4 · text n-3                                ← unselected state

— GHOST VARIANTS —
GhostPrimary:      text primary-1 · hover bg tint-primary
GhostWhite:        text n-1 · hover bg rgba(252,252,253,0.08)
GhostDanger:       text red-2 · hover bg tint-loss
GhostWarning:      text orange-1 · hover bg tint-warning
GhostSuccess:      text green-1 · hover bg tint-profit
GhostActive:       text n-1 · bg n-5                                    ← active toggle
GhostInactive:     text n-3                                             ← inactive toggle

— TEXT VARIANTS —
Text:              no bg · no border · inherit font-size · p: 0
TextPrimary:       text primary-1 · no bg · no border · p: 0

— USAGE —
Normal     → primary CTA, max 1 per section
OutLine    → secondary alongside Normal
Ghost      → table inline actions
DangerFill → irreversible actions ONLY (requires confirm modal)
Text/TextPrimary → link-style inline actions
```

### Data Table

```
Header:     bg n-5 · Body Regular 14px · color n-2
Rows:       bg transparent · hover rgba(78,174,253,0.08)
Active row: bg rgba(78,174,253,0.12) · border-left 2px primary-1
Divider:    1px solid rgba(49,56,86,0.5) per row
No striped rows. No border-radius.

Alignment:  Text/Name → LEFT · Numbers → RIGHT [critical] · Status → center
Padding:    16px horizontal · 10px vertical · min-height 48px
Sortable:   [Label n-2] [sort-icon n-3] · active: n-1
Cell text:  Body Regular 14px · n-1
Metric label (sub-label, unit, tag inside cell): Caption Regular 12px · uppercase · n-3
```

### Input System

```
InputField   → form fields with label + hint + full border box
InputInline  → trading UI, blends into layout, underline only
EditInput    → inline editable value, looks like text until clicked
GroupInput   → filter builder with chained segments
Search       → global search · icon + field + clear · h:40px · radius 4px
```

**InputLabel:**
```
Caption 12px · n-2 · margin-bottom 4px
Right slot: "Available: $500.05" (green-1) or hint (n-3) · Error: label → red-2
```

**InputField:**
```
MD: h:40px · pad 8px 12px · radius 2px · font 12px monospace
SM: h:32px · pad 6px 10px · radius 2px
bg: n-7 all states · focused → n-5
border: default/filled n-4 · hover n-3 · focused primary-1 · error red-2 · disabled n-4 opacity 0.5
outline: none · box-shadow: none (always)
```

**InputInline:**
```
bg transparent · border-bottom 1px n-4 · radius 0
Focused: border-bottom STAYS n-4 (never changes color) ← critical
Error: border-bottom red-2
Suffix: token selector [icon+name+chevron] · MAX link orange-1 uppercase
```

**EditInput:**
```
Rest:    [label n-2] [value primary-1] [✎ n-3 — on hover]
Hover:   value → primary-2 · icon → n-1
Editing: InputField style (h:40px · border primary-1 · bg n-5 · radius 2px)
```

**GroupInput:**
```
All segments: border-bottom 1px n-4 · radius 0
Focused segment ONLY → border-bottom primary-1 · Error ONLY → red-2
[Protocol ▾] [Operator ▾] [Value ___] [Unit n-3]
```

### Tabs

```
Large (h:48px / 14px): main page navigation
Small (h:40px / 12px): sub-navigation
Minimal:               protocol/timeframe switcher — NO LINE variant

States:
  Default: color n-3 · no bg
  Hover:   color n-2 · no bg  ← subtle lift, no underline on hover
  Active:  color n-1 · border-bottom 2px primary-1 · no bg fill
Font-weight: Bold for BOTH active and inactive (prevents layout shift)
Label: UPPERCASE · optional icon 14px · optional count Regular 12px

Overflow: scrollable header, hidden scrollbar · fade overlay on right edge
```

### Dropdown

```
Trigger 1: [label n-3] [value primary-1] [chevron] — inline, borderless
Trigger 2: [icon] [label n-1 Bold] [chevron] — inline, borderless
Trigger 3: border box h:40px · bg n-6 · border n-4 → open: border primary-1 + bg n-5

Menu: bg n-6 · border 1px n-4 · radius 4px · shadow-3 · max-h 240px
      animation: fade + translateY(-4px→0) 150ms
Items: h:36px · hover bg n-5 · selected text primary-1
Chevron: rotate 180deg open · Checkbox variant: stays OPEN for multi-select

States:
  Closed:   trigger shows current value · chevron 0deg
  Open:     menu appears below (or above if no space) · chevron 180deg · trigger border primary-1
  Item hover: bg n-5 · text n-1
  Selected:   text primary-1 · checkmark icon right (multi: checkbox checked)
  Disabled: opacity 0.4 · pointer-events none
```

### Badge / Status

```
Protocol pill:  bg n-5 · border n-4 · text n-2 · protocol logo 16px
Leverage:       bg rgba(255,194,75,0.12) · text orange-1 · border orange-3
LONG:           bg rgba(56,208,96,0.12)  · text green-1
SHORT:          bg rgba(250,85,71,0.12)  · text red-2
Status Active:  green tint+border · Paused: orange · Stopped: red
Premium:        gradient-4 text (ONLY for premium-gated UI)
Percentile:     Top 10% → gradient-7 · Top 25% → green-1 · Top 50% → n-2 · Bottom → red-2
All badges: border-radius 4px · Caption Bold 12px
```

### Modal

```
backdrop: rgba(0,0,0,0.75) + blur(4px)
dialog:   bg n-6 · border 1px n-4 · radius 8px · padding 24px · shadow-4
sizes:    max-width 480 / 640 / 800px
header:   H4 n-1 + 1px n-4 divider + close GhostWhite top-right
footer:   right-aligned · gap 8px · [Cancel GhostWhite] [Action Normal/Danger]
animation: fade + scale(0.95→1.0) 200ms ease
```

### Tooltip

```
bg n-5 · border 1px n-4 · radius 4px · shadow-3
show delay: 300ms · hide: 100ms · animation: 150ms fade

Simple: pad 8px 12px · max-w 160px · Caption Regular n-1
Rich:   pad 12px · max-w 240px
        [icon 14px] [Title Caption Bold n-1]
        [Body Caption n-2] mt:4px · [CTA Caption Bold primary-1 uppercase] mt:8px right
```

### Alert

```
Anatomy: [icon 16px] [Title Caption Bold] [Body Caption n-2] [CTA optional]

INFO:      bg rgba(78,174,253,0.08)  · border rgba(78,174,253,0.2)  · title n-1
INFO BOLD: bg rgba(78,174,253,0.12)  · border primary-1             · title primary-1
WARNING:   bg rgba(255,194,75,0.08)  · border rgba(255,194,75,0.2)  · accent orange-1
ERROR:     bg rgba(250,85,71,0.08)   · border rgba(250,85,71,0.2)   · accent red-2
SUCCESS:   bg rgba(56,208,96,0.08)   · border rgba(56,208,96,0.2)   · accent green-1
```

### Checkbox / Radio / Switch / SwitchInput

```
Checkbox 16×16px · radius 2px:
  Unchecked: bg n-7 · border n-4 · Hover: border n-2
  Checked: bg primary-1 · checkmark n-7 · Indeterminate: dash n-7
  Use: multi-select · NOT for mutually exclusive → use Radio

Radio 16×16px · radius 9999px:
  Unselected: border n-4 · Hover: border n-2
  Selected: border primary-1 · inner dot 8px primary-1
  Use: single-choice · NOT for on/off → use Switch

Switch 28×16px track · 12×12px thumb:
  OFF: track n-4 · thumb n-1 · ON: track primary-1 · 150ms ease
  Use: binary on/off immediate · disabled: opacity 0.4

SwitchInput (labeled switch row):
  Layout: [Label Body n-1 left] [Switch right] · flex justify-between · h:40px
  Loading state: spinner replaces switch thumb · opacity 0.6
  With label: Caption n-3 below label text · mt:2px
  Use: settings panels, feature toggles with inline label — NOT bare Switch
  disabled: opacity 0.4 · pointer-events none
```

### Section Header

```
[Icon 16px · n-2] [TITLE · Body Regular 14px · n-1]   [Action → · Caption Bold · primary-1]
Height: 40px · padding 0 16px · border-bottom 1px n-4 · bg n-6
Icon: Phosphor 16px · n-2 (not primary, not white)
```

### DecoratedText (Signed Numbers)

```
Dùng cho: mọi số tài chính có dấu +/- (PnL, ROI, change %)

Positive: color green-1 · prefix "+" · suffix optional (%, x, $)
Negative: color red-2   · prefix "-"
Zero:     color n-2     · no prefix
Undefined/null: color n-3 · display "–"

Variants:
  SignedText    → Body 14px (default) · dùng trong table cells
  SignedCaption → Caption 12px · dùng trong sub-labels
  ValueText     → larger, feature-level display (Body Bold or Head)

Kèm icon (optional):
  Positive: ArrowUp / TrendUp · green-1 · size match text
  Negative: ArrowDown / TrendDown · red-2 · size match text
```

### Stats Bar (KPI compact)

```
2 or 4-column grid · each cell: [Label Caption n-3] above · [Value body-bold n-1/semantic] below
Gap: 16–24px between cells

  AVG ROI      AVG VOL     WIN RATE    MDD
  +20.6%       $202        68.88%      -0.2%
  (green-1)    (n-1)       (n-1)       (red-2)
```

### Progress Bar

```
Height: 4px · border-radius: 0 · bg: n-5
Fill: primary-1 (default) · green-1 (safe) · orange-1 (≥70%) · red-2 (≥90%)
Label row above: [Label Caption n-3] [Value Caption Bold n-1] right-aligned
```

### Distribution Bar

```
Two segments: [LONG % · green-1] [SHORT % · red-2] · height 4px · no gap · radius 0
Label above: [Label n-3] [Long % Bold green-1] [Short % Bold red-2]
Label below: [Long $ · green-1 · Caption] left | [Short $ · red-2 · Caption] right
```

### Sparkline

```
Table rows · ~80×32px · no axes/labels/border
Line 1.5px · green-1 positive · red-2 negative · fill area 15% opacity
```

### Trader Profile — Action Row

```
[ANALYZE WITH AI] [ALERT] [COMPARE TRADER] [BACKTEST] [COPY TRADER]
ANALYZE WITH AI: gradient-1 icon · OutLinePri gradient border
ALERT/COMPARE/BACKTEST: GhostWhite · icon 16px + text · UPPERCASE
COPY TRADER: Normal (primary CTA) · All SM (32px) · gap 8px
```

### Drawer

```
Placements: Right (default) · Left · Bottom
bg: n-6 · border (shared side) 1px n-4 · no radius on layout edge
  Right/Left drawer: full viewport height · border-left/right 1px n-4
  Bottom drawer: full viewport width · border-top 1px n-4 · radius 8px top corners

Sizes:
  Right:  w: 320px (SM) · 480px (MD) · 640px (LG)
  Bottom: h: auto (hug content) · max-h 80vh

Header: [Title Body Bold n-1] [× GhostWhite top-right] · border-bottom 1px n-4 · h:52px · px:24px
Body:   px:24px · py:16px · overflow-y auto · scrollbar 6px
Footer (optional): border-top 1px n-4 · px:24px · py:16px · right-aligned buttons

Backdrop: rgba(0,0,0,0.65) · blur(5px) · z-index 1005
Animation: slide-in 200ms ease (translateX for R/L, translateY for bottom)
Back button variant: [← Back · GhostWhite] in header instead of close ×
```

### Divider

```
Horizontal: 1px solid n-4 · full width · my: 16px default
Dashed:     1px dashed n-4
Custom color: via color prop (n-5, n-3, primary-1)
No vertical divider — use border-right/left on panels instead
```

### NoDataFound (Empty State)

```
Center-aligned in container · py: 40px
[Icon 32px · n-3] (Warning or relevant icon)
[Title Body Bold · n-2] "No data found" / custom message
[Sub Body Regular · n-3] optional helper text
[CTA button · optional] — OutLinePri SM

Không có illustration/image — terminal aesthetic, text only
```

### CustomTag

```
Anatomy: [dot · optional] [label · Caption Bold 12px] [tooltip trigger · optional]
bg: tint của color (rgba 10–15% opacity) · border: 1px solid color (30% opacity)
border-radius: 4px · px:8px · py:2px · h:20px

Preset colors: primary-1 (default) · green-1 · orange-1 · red-2 · n-3
Dot variant: filled circle 6px left of label · color matches tag color
Multiple tags: gap 4px · wrap allowed
Tooltip: Rich tooltip on hover (see Tooltip spec)
```

### ActiveDot

```
Size: 6px circle · radius 50% · no border
Colors:
  Active/Online:  green-1 · optional pulse animation
  Warning/Paused: orange-1
  Inactive:       n-4
  Error:          red-2

Placement: absolute top-right of Avatar (offset -1px -1px)
           or inline next to status label (gap 6px)
With Tooltip: show status text on hover (300ms delay)
```

### Supporting Components

```
Avatar:     24/32/40/48px · radius 50% · fallback gradient-1 bg + n-7 initials
Icons:      Phosphor outline 12/16/18/20/24px · filled 16–40px brand/token
            Protocol logos: 16/18/24px circular · bg n-5 if no own bg
Carousel:   indicators (active primary-1 · rest n-4) · GhostWhite nav arrows
Pagination: current bg tint-primary · border primary-1 · text primary-1
            others GhostWhite · border n-4 · text n-2
Skeleton:   bg n-5 · shimmer rgba(252,252,253,0.05) sweep
Toast:      bg n-5 · border 1px n-4 · radius 4px · shadow-3 · 3s auto-dismiss
            bottom-right · [icon] [message n-1] [× GhostWhite]
```

---

## 7 · ICON SIZE PAIRING

```
12px  caption 10–12px    dense tables, helper text
16px  body 14px          buttons, inputs, rows  ← DEFAULT
18px  large 16px         filter bars, prominent labels
20px  h5 24px            section icons, feature headers
24px  h4+ 28px+          hero stats, topbar brand

Rule: never mix icon and text sizes differing by more than one step.
```

### Phosphor React — Import & Common Icons

```tsx
import { IconName } from "@phosphor-icons/react"
// weight="regular" (default outline) | "fill" | "bold" | "duotone"

// Sort & Filter
ArrowsDownUp      // sortable column — unsorted state
ArrowUp           // sort ascending
ArrowDown         // sort descending
Funnel            // filter (NOT "Filter" — wrong name)
FunnelSimple      // filter badge/active indicator

// Navigation & Actions
CaretDown  CaretUp  CaretRight  CaretLeft   // dropdowns, accordion
ArrowLeft  ArrowRight                        // back/forward
ArrowSquareOut                               // external link
DotsThreeVertical  DotsThree                // more options menu
X                                           // close / clear input

// Data & Trading
ChartLine         // performance chart
ChartBar          // volume / bar chart
TrendUp  TrendDown // trend direction (use green-1 / red-2)
ArrowCircleUp  ArrowCircleDown              // long / short signal
Swap                                        // swap / trade action
Lightning                                   // fast copy / instant

// Wallet & Identity
Wallet            // wallet balance
Copy              // copy address
Eye  EyeSlash     // show/hide value
Star              // watchlist / favorite

// Status & Feedback
CheckCircle       // success
Warning           // caution (orange)
WarningCircle     // error / loss alert (red-2)
Info              // tooltip trigger
Bell              // notification
Gear              // settings
MagnifyingGlass   // search input

// Trader / Profile
Trophy            // leaderboard / ranking
Users             // copy trader count
UserCircle        // trader avatar fallback
```

---

## 8 · DATA DISPLAY

### Financial Numbers

```
Positive → green-1 · "+" prefix · ▲ icon
Negative → red-2   · "-" prefix · ▼ icon
Zero     → n-2     · no prefix  · no icon

USD:    $1,234,567.89  or  $1.23M / $4.56B
%:      +12.34%
Crypto: 0.00123456 BTC  (6 decimal places)
Ratio:  1.23x

Tables: numbers ALWAYS right-aligned
```

### Chart Colors

```
Line:        green-1 positive · red-2 negative · fill 15% opacity
             grid rgba(49,56,86,0.5) · axis n-3 · zero-line n-4
Radar:       fill rgba(78,174,253,0.15) · stroke primary-1 2px
             axes: Avg ROI · Volume · Win Rate · Drawdown · Frequency · Speed
Bar:         green-1 positive · red-2 negative
Heatmap:     5 levels n-5 → primary-1 at 80%
Bubble:      green LONG · red SHORT · size = open interest
Candlestick: green up · red down · white square = close
```

### Data Patterns

```
Wallet: 0x1234...5678 · monospace · primary-1 · click→copy→toast
Time:   "2 hours ago" / "Feb 28, 2026" · n-2 · Caption
Rank:   # position + gradient-7 for top 10%
Logos:  stacked -4px overlap · max 3 then "+N" badge
Lifecycle: Open → Increase → Decrease → Modified Margin → Close / Liquidated
```

---

## 9 · RULES & CONSTRAINTS

### Absolute Rules (never break)

```
R01  border-radius: 0 on ALL layout panels and containers
R02  No box-shadow on panels, sections, or static elements
R03  No gap between adjacent panels — share 1px border
R04  Green = profit/long ONLY · Red = loss/short ONLY · No exceptions
R05  gradient-4 = PREMIUM features ONLY
R06  Font weight: 400 or 700 only
R07  Font sizes: defined scale only (no 11/13/15/18/20px)
R08  All inputs: outline:none + no box-shadow, always
R09  Numbers in tables: right-aligned + always +/- prefix + semantic color
R10  n-5 background = hover/active/focused ONLY, not base panels
R11  Monospace font everywhere in main UI (sans-serif = always wrong)
R12  Confirm dialog = irreversible actions ONLY (not favorites/settings)
R13  Loss/danger color = red-2 (#FA5547) · red-1 (#FA7B70) = hover only
R14  Button radius = 2px (NOT 4px) · Badge/Tag/Dropdown = 4px
```

### Common AI Mistakes → Corrections

| AI generates | Correct |
|---|---|
| `border-radius: 8px` on layout | `border-radius: 0` |
| `box-shadow` on stat cards | shadow on modal/tooltip only |
| Green "Confirm" button | Normal type (primary-1 blue) |
| Red heading for danger zone | Red = loss/short data only |
| `red-1` for loss text | use `red-2` (#FA5547) — `red-1` (#FA7B70) is hover/lighter variant |
| `font-weight: 500/600` | 400 or 700 only |
| `font-size: 13px/15px` | snap to 12px or 14px |
| InputInline border changes on focus | border-bottom stays n-4 always |
| All GroupInput segments highlight | only focused segment changes |
| n-5 as panel background | panel bg = n-6 |
| Sans-serif font | ABC Social Mono always |
| Confirm modal for favorites | no confirm for reversible actions |

---

## 10 · COMPONENT DECISION GUIDE

> Quick-reference: which component for which context. Resolve ambiguity before generating.
> Detailed compositions → `resources/ux-patterns.md`

### 10.1 Input — chọn loại nào?

| Scenario | Dùng | Không dùng |
|---|---|---|
| Form field với label + hint + validation | `InputField` | InputInline |
| Nhập giá/số lượng trong trade panel | `InputInline` | InputField |
| Giá trị hiển thị, click để sửa | `EditInput` | Modal chỉ để sửa 1 field |
| Nhiều tiêu chí filter liên kết nhau | `GroupInput` | nhiều InputField rời |
| Tìm kiếm toàn trang | `Search` | InputField |
| Textarea / ghi chú dài | `InputField (textarea)` | InputInline |

### 10.2 Button — chọn variant nào?

| Context | Dùng | Không dùng |
|---|---|---|
| CTA chính của section — max 1 | `Normal` | 2+ Normal trong 1 section |
| Action phụ kèm Normal | `OutLinePri` | GhostWhite (quá mờ bên cạnh Normal) |
| Action inline trong table row | `GhostWhite` | Normal (quá nặng) |
| Toggle filter bật/tắt | `OutlineActive` / `OutlineInactive` | Normal hoặc Tab |
| Xóa / hành động không thể undo | `DangerFill` + confirm modal | GhostDanger standalone |
| Cảnh báo hủy bỏ không undo | `OutlineDanger` | DangerFill (quá mạnh) |
| Action phụ nguy hiểm trong table row | `GhostDanger` | DangerFill |
| Link inline trong câu chữ | `TextPrimary` | OutLinePri |
| Icon-only action | `GhostWhite` size ICON (radius 50%) | Normal icon |

**Button hierarchy trong 1 section:**
```
[Normal] [OutLinePri] [GhostWhite] [GhostWhite]
  ↑ tối đa 1    ↑ ≤2          ↑ nhiều OK
```

### 10.3 Selection — chọn control nào?

| Scenario | Dùng | Không dùng |
|---|---|---|
| Chọn nhiều trong list | `Checkbox` | Radio |
| Chọn 1 trong N tĩnh (N ≤ 5) | `Radio group` | Dropdown |
| Chọn 1 trong N dynamic / N > 5 | `Dropdown (Select)` | Radio |
| Multi-select N > 6 options | `Dropdown multi (checkbox)` | Checkbox list |
| Bật/tắt tức thì (không có label) | `Switch` | Checkbox |
| Bật/tắt với label mô tả | `SwitchInput` | bare Switch |
| Lọc theo category ≤ 6 options | `Tab Minimal` hoặc `OutlineActive pills` | Dropdown |
| Lọc theo category > 6 options | `Dropdown` | Tab (không scroll được) |

### 10.4 Overlay — Modal vs Drawer?

| Scenario | Dùng | Không dùng |
|---|---|---|
| Confirm action không thể undo | `Modal SM (480px)` | Drawer |
| Form đơn giản ≤ 5 fields | `Modal MD (640px)` | Drawer |
| Form phức tạp hoặc nhiều steps | `Drawer Right MD/LG` | Modal |
| Filter panel — mobile/tablet | `Drawer Bottom/Right` | Modal |
| Detail view phụ không rời page | `Drawer Right` | New page |
| Thông tin bổ sung nhanh | `Tooltip Rich` | Modal |
| Notification / feedback tức thì | `Toast` | Modal |

### 10.5 Disclosure — Tab vs Dropdown vs Accordion?

| Scenario | Dùng | Không dùng |
|---|---|---|
| Switch nội dung trang chính | `Tab Large (h:48)` | Dropdown |
| Switch sub-section trong panel | `Tab Small (h:40)` | Accordion |
| Switch timeframe / protocol / network | `Tab Minimal` | Tab Large |
| Chọn 1 giá trị từ danh sách | `Dropdown (Select)` | Tab |
| Section có thể thu gọn | `Accordion` | Tab |
| Context menu actions | `Dropdown` | Tab |

### 10.6 Feedback — loại nào?

| Scenario | Dùng |
|---|---|
| Validation error của field | `InputField error state` + label red-2 |
| Thông báo lỗi cấp section | `Alert ERROR` |
| Thông báo thành công sau action | `Toast SUCCESS` (3s auto-dismiss) |
| Cảnh báo trước khi action nguy hiểm | `Alert WARNING` trong modal |
| Info contextual, không critical | `Tooltip Rich` |
| Progress dài (upload, sync) | `ProgressBar` + Toast khi done |
| Empty list / no results | `NoDataFound` |

---

## 11 · OUTPUT FORMAT

```
Stack:  React + TypeScript + styled-components
Never:  Tailwind · CSS modules · inline styles · hardcoded hex values
Import: from '@/theme/tokens' — see src/theme/tokens.ts
```

---

## WORKFLOW — Figma Design

```
Bước 1  DECIDE    SKILL.md §10 Decision Guide + resources/ux-patterns.md
                  → Chọn đúng component và variant trước khi mở Figma

Bước 2  VERIFY    https://copin-storybook.netlify.app
                  → Tìm component, xem tất cả stories/variants
                  → Note exact prop names, tất cả interaction states
                  → Storybook = ground truth cho visual output

Bước 3  FIND      figma_search_components() trong Figma file
                  → Match tên Storybook với tên Figma component

Bước 4  READ      figma_get_component_details(nodeId)
                  → Đọc properties, variants, boolean toggles

Bước 5  REFERENCE figma_get_screenshot() trên 1–2 màn hình tương tự
                  → Lấy visual DNA: spacing, density, layout thực tế

Bước 6  BUILD     figma_instantiate_component() — REUSE FIRST
                  → Instantiate component với đúng properties từ bước 4
                  → Bind text styles + color styles (không manual fill)
                  → Chỉ build from scratch nếu không có component sẵn
```

**Rule tuyệt đối:** Không bao giờ vẽ tay thứ gì đã có sẵn trong Figma library.
**Storybook** là bước bắt buộc trước khi ra quyết định dùng variant/state nào.

---

## WORKFLOW — Code Generation

```
Component đơn   → SKILL.md §4–§9 đủ
Full screen      → SKILL.md + resources/ux-patterns.md (load pattern tương ứng)
Giải thích chọn → SKILL.md §10 Decision Guide
Principles sâu  → resources/design-context.md
Token code       → src/theme/tokens.ts
```

---

## REFERENCES

```
Decision Guide : SKILL.md §10
Storybook      : https://copin-storybook.netlify.app   ← verify trước khi build
UX Patterns    : resources/ux-patterns.md
Design context : resources/design-context.md
Figma Canvas   : Component Page (ID: 1:439)
Token file     : src/theme/tokens.ts
Product        : https://app.copin.io  ·  https://docs.copin.io
```

---

*Copin Design System Skill v5.3.0 · March 2026 · + Decision Guide + UX Patterns*
