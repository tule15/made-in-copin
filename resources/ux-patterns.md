# UX Patterns — Copin Design System

> Composition recipes cho các pattern hay gặp nhất trong Copin.
> Load file này khi cần gen full screen hoặc section phức tạp.
> Visual specs → SKILL.md · Principles → design-context.md

---

## PATTERN 1 · Filter Bar

Xuất hiện ở: Trader Explorer, Open Interest, Live Trades, Copier Ranking.

```
[Search SM] [Protocol pills] [Timeframe tabs] [Filter button] [Sort dropdown]
```

**Exact composition:**
```
Container: h:52px · bg n-7 · border-bottom 1px n-4 · px:16px · gap:8px · flex align-center

① Search
   Search component · h:36px · w:200px · placeholder "Search trader..."
   Icon MagnifyingGlass 16px n-3 · clear × appears when has value

② Protocol pills (multi-select)
   OutlineActive/OutlineInactive SM · flex gap:4px
   Selected: border primary-1 · text primary-1 · bg tint-primary
   Unselected: border n-4 · text n-3
   Max show 4-5 · overflow → "+ N more" Dropdown

③ Timeframe tabs
   Tab Minimal · items: 1D · 7D · 30D · 60D · ALL
   Active: text n-1 · underline primary-1 2px
   Gap: 0 · no background

④ Filter button
   GhostWhite SM · [Funnel 16px] [FILTER]
   Has active filters → text primary-1 + FunnelSimple icon + count Badge

⑤ Sort dropdown
   Trigger 1 style: [label n-3 "Sort:"] [value primary-1] [CaretDown]
   Menu: list of sort options · active → primary-1 checkmark
```

**Interaction flow:**
```
User types in Search → results filter instantly (debounce 300ms)
User clicks Protocol pill → toggles Active/Inactive → results filter
User changes Timeframe → active tab updates → data reloads → skeleton
User opens Filter → Drawer Bottom (mobile) / Popover (desktop)
Active filters count: badge on Filter button shows count · click to clear all
```

---

## PATTERN 2 · Data Table Row

Xuất hiện ở: mọi table trong Copin (Trader Explorer, Position History, Copy Trade list).

```
[Rank] [Trader info] [Metrics...] [Actions]
```

**Exact composition:**
```
Row: h:48px · bg transparent · hover bg rgba(78,174,253,0.08) · border-bottom 1px rgba(49,56,86,0.5)
Active row: bg rgba(78,174,253,0.12) · border-left 2px primary-1

① Rank cell — LEFT align · w:48px
   Body Regular n-2 · "#1" format
   Top 10%: color gradient-7

② Trader info cell — LEFT align
   [Avatar 32px] [Name Body Bold n-1] [protocol logo 16px]
   Wallet: Caption n-3 monospace below name (truncated)

③ Metric cells — RIGHT align · all numbers
   Value: Body Regular n-1
   Signed numbers: DecoratedText (green-1 / red-2)
   Sub-label: Caption n-3 uppercase below value
   Sparkline: ~80×32px · rightmost metric column

④ Action cell — RIGHT align · visible on row hover
   [GhostWhite ICON SM] [GhostWhite ICON SM] [DotsThreeVertical GhostWhite]
   Icons: Star (watchlist) · Bell (alert) · more options
   Opacity 0 default → 1 on row hover (transition 150ms)
```

**States:**
```
Default:   transparent bg · actions hidden
Hover:     bg rgba(78,174,253,0.08) · actions fade in
Selected:  bg rgba(78,174,253,0.12) · border-left 2px primary-1
Loading:   Skeleton rows · shimmer animation
Empty:     NoDataFound centered in table body
```

---

## PATTERN 3 · Form Panel

Xuất hiện ở: Copy Trade setup, Backtest config, Alert config.

```
[Section Header]
[InputField rows]
[Divider]
[Action buttons]
```

**Exact composition:**
```
Container: bg n-6 · border 1px n-4 (or right-panel in layout)

① Section Header
   h:40px · [Icon 16px n-2] [TITLE Body Bold n-1] · border-bottom 1px n-4

② Form fields — stacked, gap:16px · px:16px · py:16px
   Each field:
   [InputLabel Caption n-2] ← [hint/available n-3 right]
   [InputField MD h:40px]
   [Error Caption red-2 mt:4px] ← only when error

   Special fields:
   Amount + token: [InputField] [Dropdown token selector suffix]
   Slider: InputRange below InputField showing same value
   Toggle: SwitchInput h:40px

③ Divider: 1px n-4 · mx:0

④ Footer buttons — px:16px · py:12px · flex gap:8px · justify-end
   [Cancel GhostWhite] [Submit Normal]
   Danger action: [Cancel GhostWhite] [DangerFill]
```

**Validation flow:**
```
User blurs field → validate → show error inline (Caption red-2 below field)
Submit with errors → shake form · scroll to first error · focus first error field
Success → Toast SUCCESS + reset form or close panel
Loading state → Submit button shows spinner · disabled opacity 0.4
```

---

## PATTERN 4 · Settings Panel

Xuất hiện ở: User settings, Copy trade settings, notification preferences.

```
[Section Header]
[SwitchInput rows]
[Divider]
[Value edit rows (EditInput)]
```

**Exact composition:**
```
Container: bg n-6 · border-right 1px n-4 (sidebar) or full section

① Section Header — border-bottom 1px n-4

② SwitchInput rows — stacked · no gap · each border-bottom 1px n-4
   h:48px · px:16px
   [Icon 16px n-3] [Label Body n-1] [sublabel Caption n-3] ... [Switch right]
   Hover: bg n-5

③ EditInput rows — for editable values
   h:48px · px:16px · border-bottom 1px n-4
   [Label Caption n-3] ... [value primary-1 Body] [✎ n-3 on hover]
   Click → transforms to InputField inline

④ Danger zone (bottom of panel)
   Divider + [Alert ERROR] if critical
   [DangerFill button] — right aligned
```

---

## PATTERN 5 · Stat / KPI Card

Xuất hiện ở: Trader Profile stats bar, Dashboard KPI, Position summary.

**2-column (compact):**
```
┌─────────────┬─────────────┐
│ AVG ROI     │ WIN RATE    │
│ +20.6%      │ 68.88%      │
│ (green-1)   │ (n-1)       │
└─────────────┴─────────────┘
border-right 1px n-4 between cells · no outer border
```

**4-column (stats bar):**
```
[PnL] [ROI] [Win Rate] [MDD] ← each: Label Caption n-3 · Value Body Bold n-1/semantic
Container: bg n-7 · border-bottom 1px n-4 · h:64px · px:24px · gap:24px
```

**Single featured stat:**
```
[label Caption n-3 uppercase]
[Value h4 Bold · semantic color]
[sub Caption n-3: "vs last period" + signed change]
```

---

## PATTERN 6 · Trader Profile Action Row

```
[AI] [ALERT] [COMPARE] [BACKTEST] ········· [COPY TRADER]
```

**Exact composition:**
```
Container: flex · gap:8px · align-center · py:12px · px:16px

Left group (secondary actions):
  ANALYZE WITH AI: OutLinePri SM · gradient-1 border · icon gradient-1
  ALERT:           GhostWhite SM · [Bell 16px] [ALERT]
  COMPARE:         GhostWhite SM · [ArrowsLeftRight 16px] [COMPARE]
  BACKTEST:        GhostWhite SM · [ChartLine 16px] [BACKTEST]

Right (spacer flex:1, then primary):
  COPY TRADER:     Normal SM · fixed right · [Lightning 16px] [COPY TRADER]
```

---

## PATTERN 7 · Modal — Confirm Destructive

```
[Title]
[Warning message]
[Input to confirm (optional)]
[Cancel] [Danger action]
```

**Exact composition:**
```
Modal SM (max-w:480px)
Header: [WarningCircle 20px red-2] [Title H4 n-1] · border-bottom 1px n-4
Body:
  Alert ERROR block → explains what will be lost
  [InputField] if confirm by typing name/phrase (irreversible only)
Footer: [Cancel OutLineWhite] [DangerFill "DELETE" / "REMOVE"]
```

**Rule:** Confirm modal = ONLY for permanently destructive actions (delete, remove copy, disconnect).
Never for: toggle, edit, pause, add to favorites.

---

## PATTERN 8 · Mobile Filter Drawer

```
[Header: Filter + clear all]
[Filter groups as Accordions]
[Footer: Apply button]
```

**Exact composition:**
```
Drawer Bottom · max-h:80vh · radius 8px top corners

Header: h:52px · px:16px
  [× GhostWhite left] [FILTER Body Bold n-1 center] [CLEAR ALL TextPrimary right]

Body: overflow-y auto · scrollbar 6px
  Each filter group: Accordion
    Header: [Label Body Bold n-1] [count Badge] [ChevronDown]
    Content: Radio group OR Checkbox list OR Tab Minimal
  gap:0 · divider between groups

Footer: px:16px · py:16px · border-top 1px n-4 · sticky bottom
  [APPLY FILTERS Normal LG · block width 100%]
  [count Badge on button: "Apply (12 results)"]
```

---

## PATTERN 9 · Empty States

```
Khi nào hiện: table no results · filter returns 0 · initial load error
```

**No results (filter applied):**
```
NoDataFound centered · py:64px
Icon: MagnifyingGlass 32px n-3
Title: "No traders found" Body Bold n-2
Sub: "Try adjusting your filters" Body n-3
CTA: [CLEAR FILTERS OutLinePri SM]
```

**No data yet (first time):**
```
NoDataFound centered · py:64px
Icon: relevant feature icon 32px n-3
Title: "No [items] yet" Body Bold n-2
Sub: Short onboarding message n-3
CTA: [Primary action Normal SM] ← if actionable
```

**Error / network fail:**
```
NoDataFound centered · py:64px
Icon: WarningCircle 32px red-2
Title: "Failed to load" Body Bold n-2
Sub: "Please try again" n-3
CTA: [RETRY GhostWhite SM]
```

---

## PATTERN 10 · Loading States

**When to use each:**

| Scenario | Loading UI |
|---|---|
| Table initial load | Skeleton rows (4-8 rows) · shimmer |
| Table paginating / filtering | Overlay spinner on table · opacity 0.5 |
| Button action in progress | Button spinner + disabled · opacity 0.4 |
| Panel/card loading | Skeleton blocks matching layout |
| Chart loading | Skeleton rect matching chart area |
| Single value refreshing | Inline spinner 12px next to value |

**Skeleton specs:**
```
bg: n-5 · shimmer: rgba(252,252,253,0.05) sweep 1.5s infinite
Text skeleton: h:14px · radius 2px · w varies (60-80% of container)
Match actual layout dimensions exactly (prevents layout shift on load)
```

---

## INTERACTION FLOWS

### Flow A: Copy Trade Setup
```
1. Trader Profile → [COPY TRADER] Normal
2. Drawer Right MD opens (slide-in 200ms)
3. Form: Amount InputField → leverage EditInput → max positions GroupInput
4. [COPY TRADER] Normal → loading state
5. Success → Toast "Copy trade activated" · Drawer closes
6. Error → Alert ERROR in drawer body · form stays open
```

### Flow B: Filter + Sort Table
```
1. User opens page → table loads with Skeleton
2. Data arrives → rows appear (no animation)
3. User types in Search → debounce 300ms → rows filter
4. User changes Timeframe tab → active tab updates → table reloads
5. User opens Filter → Drawer/Popover → selects → [APPLY]
6. Table shows Skeleton briefly → filtered results
7. Empty → NoDataFound with [CLEAR FILTERS]
```

### Flow C: Edit Settings Value
```
1. Settings row shows [Label] [value primary-1] [✎ hidden]
2. Hover row → bg n-5 · ✎ icon appears (n-3)
3. Click value or ✎ → transforms to InputField in place
4. User types → [Save GhostPrimary] [× cancel] appear
5. Blur without saving → reverts to display mode
6. Save → Loading (spinner) → Success → back to display with new value
7. Error → InputField stays open · error text below
```

### Flow D: Confirm Destructive
```
1. User clicks [REMOVE COPY] DangerFill
2. Modal SM opens (scale 0.95→1.0 · 200ms)
3. Alert ERROR explains consequences
4. [DELETE] DangerFill → loading → closes modal → Toast "Removed"
5. [Cancel] → modal closes · no changes
```

---

*UX Patterns v1.0 · March 2026 · Copin Design System*
*Sync với SKILL.md v5.3.0 + Storybook source*
