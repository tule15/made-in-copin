# CHANGELOG — Copin Design System Skill

Format: `[version] YYYY-MM-DD — tóm tắt thay đổi`

---

## [5.3.0] 2026-03-20

### Added
- **§10 Component Decision Guide** — 6 decision tables giải quyết nhầm lẫn phổ biến nhất:
  - 10.1 Input System: InputField vs InputInline vs EditInput vs GroupInput vs Search
  - 10.2 Button Hierarchy: 19 variants với context rule + hierarchy diagram
  - 10.3 Selection Controls: Checkbox/Radio/Switch/SwitchInput/Dropdown/Tab Minimal
  - 10.4 Overlay: Modal vs Drawer vs Tooltip vs Toast — từng scenario cụ thể
  - 10.5 Disclosure: Tab Large/Small/Minimal vs Dropdown vs Accordion
  - 10.6 Feedback: Error/Success/Warning/Info — đúng component đúng timing
- **`resources/ux-patterns.md`** — 10 composition patterns + 4 interaction flows:
  - Pattern 1–10: Filter Bar, Data Table Row, Form Panel, Settings Panel, Stat Card, Action Row, Modal Confirm Destructive, Mobile Filter Drawer, Empty States (3 variants), Loading States
  - Flow A–D: Copy Trade Setup, Filter+Sort Table, Edit Settings Value, Confirm Destructive
- **`design.md` STEP 0.2** — Storybook verification bắt buộc trước khi ra quyết định variant/state
- **`design.md` STEP 0** — Đánh số lại 0.1–0.6, làm rõ thứ tự không được bỏ qua
- **WORKFLOW section** trong SKILL.md — tóm tắt 6 bước Figma + 2 bước Code cho mọi người dùng repo

### Changed
- `design.md` REFERENCES: bổ sung Storybook URL, ux-patterns.md, FIGMA WORKFLOW SUMMARY block
- §6 Tab: thêm state đầy đủ (Default n-3 / Hover n-2 / Active n-1+underline) + overflow behavior
- §6 Dropdown: thêm state matrix đầy đủ (Closed/Open/Item hover/Selected/Disabled)
- SKILL.md REFERENCES → tách thành WORKFLOW Figma + WORKFLOW Code + REFERENCES

---

## [5.2.3] 2026-03-20

### Added
- §6 SwitchInput (labeled switch row): layout, loading state, when-to-use vs bare Switch
- §6 CustomTag: anatomy, preset colors, dot variant, tooltip behavior
- §6 ActiveDot: sizes, color semantics, placement rules (Avatar overlay + inline)

---

## [5.2.2] 2026-03-20 — Storybook Sync

### Fixed (token values sai so với `colors.ts` thực tế)
- `--n-1`: `#FCFCFD` → `#EAE5E3` (warm off-white — actual `neutral1` dark mode)
- `--red-1`: `#FA5547` → `#FA7B70` (lighter, hover variant — align với code `red1`)
- `--red-2`: `#FA7B70` → `#FA5547` (main loss/danger color — align với code `red2`)
- Button radius: `4px` → `2px` (source: `theme.ts → button: '2px'`)
- Cascade fix: tất cả semantic references tới loss/danger/error đổi từ `red-1` → `red-2`
  (text-loss, badge SHORT, alert ERROR, input errors, progress bar, chart, sparkline, distribution bar, MDD stats, icon comments)

### Added
- `--primary-3: #2F9EEE` (pressed/active state)
- `--violet: #C286F0` (special tags, protocol highlights — không dùng cho semantic state)
- §6 DecoratedText (Signed Numbers): format số tài chính +/-, 3 variants, icon pairing
- §6 Drawer: Right/Left/Bottom placements, sizes, header/body/footer, animation
- §6 Divider: horizontal, dashed, custom color
- §6 NoDataFound: 3 variants (no results / first time / error)
- R13: Loss/danger color = red-2 (#FA5547) · red-1 (#FA7B70) = hover only
- R14: Button radius = 2px (NOT 4px) · Badge/Tag/Dropdown = 4px
- Typography: `head` token — 20px / 700 / 28px line-height
- Button variants: +11 variants (WHITE, INFO, SUCCESS, WARNING, TEXT, TEXT_PRIMARY, GHOST_WARNING, GHOST_SUCCESS, GHOST_ACTIVE, GHOST_INACTIVE, OUTLINE_ACTIVE, OUTLINE_INACTIVE)

### Confirmed unchanged (verified against source)
- Green: `#38D060 / #6DD488 / #2B9948` ✓
- Orange: `#FFC24B / #FCEFD1 / #CB8D14` ✓
- Primary: `#4EAEFD / #97CFFD` ✓

---

## [5.2.1] 2026-03-18

### Changed
- §4.7 Scrollbars: `--scrollbar-size` giảm từ `6px` → `4px` (default) — ưu tiên data density
- §4.7 Scrollbars: cho phép flexible lên `6px` với isolated scroll containers (modal, drawer, sidebar)

---

## [5.2.0] 2026-03-18

### Added
- §7 Phosphor React import snippet + danh sách icon chuẩn Copin (Sort/Filter, Trading, Navigation, Status, Trader/Profile)
  - Ghi chú tên đúng: `Funnel` (không phải `Filter`), `ArrowsDownUp` cho unsorted state
- §5 Data Table: `Cell text` — Body Regular 14px · n-1
- §5 Data Table: `Metric label` (sub-label, unit, tag inside cell) — Caption Regular 12px · uppercase · n-3

### Changed
- §5 Data Table Header: `Caption Bold uppercase` → `Body Regular 14px · n-2`
- §5 Section Header title: `Caption Bold · uppercase` → `Body Regular 14px · n-1`
- §4 Layout example (Trader Explorer): Table Header label cập nhật khớp rule mới

---

## [5.1.0] 2026-03-16

### Added
- YAML frontmatter — name, description, version, updated, skill activation triggers
- §5.4 Navbar — spec đầy đủ từ Figma (Menu section): responsive states (desktop/tablet/mobile), Login CTA, Right Zone (search, wallet, premium)
- §4.5 Border Radius — mở rộng thành bảng đầy đủ: input 2px · button/badge/tag 4px · modal 8px · avatar 9999px

### Changed
- Design Principles: từ §1 chi tiết với do/don't examples → rút gọn thành compact P1–P6 header block
- Section numbering: §1–§12 → §4–§11 (bỏ các section ít dùng)

### Removed
- §1 Design Principles do/don't examples (giữ lại P1–P6 essence)
- §2 Product Context section
- HOW TO USE table (per design decision)
- §10 Anti-patterns section

---

## [5.0.0] 2026-03-13

### Added
- §1 Design Principles P1–P6 — "why" layer với do/don't examples cho mỗi principle
- §2 Product Context — product type, users, feel, stack
- HOW TO USE table — role-based reading guide (AI Code Gen / Reviewer / Dev)
- §5.3 Sidebar/Navigation — width, states, active indicator spec
- Checkbox component — full 16×16px spec + states + when-to-use
- Radio component — full spec + khi nào dùng vs Checkbox
- Switch component — track/thumb spec + khi nào dùng
- §7 Icon Size Pairing guide — icon size x text size pairing table
- §10 Anti-patterns — "What Copin is NOT" (not Notion/Material/SaaS/Binance)
- InputLabel spec — caption 12px + right slot + error state
- InputInline states — full state breakdown, đặc biệt focus behavior
- EditInput hover behavior — rest/hover/editing/error states

### Changed
- Cấu trúc từ "PHASE X" → numbered sections (§1–§12) — gọn và rõ hơn
- Input System mở rộng với đầy đủ state specs cho tất cả 5 input types
- Validation Checklist: thêm Checkbox/Radio/Switch checks

---

## [4.4.0] 2026-03-13

### Added (từ Figma review — tăng độ chính xác UI ~78% → ~90%)
- Phase 4: Section Header pattern — icon + uppercase title + action link (primary-1)
- Phase 4: Stats Bar (KPI compact) — 2/4-column metric grid trong trader cards
- Phase 4: Sparkline — inline mini chart trong table rows (PNL OVERTIME column)
- Phase 4: Trader Profile Action Row — ANALYZE WITH AI · ALERT · COMPARE · BACKTEST · COPY

---

## [4.3.0] 2026-03-13

### Changed
- Phase 8: thay Tailwind Config bằng styled-components pattern (đúng stack Copin)
- Phase 8: thêm ví dụ Panel, PnlValue, Button với styled-components

---

## [4.2.0] 2026-03-13

### Removed
- Phase 6 Copin AI Subsystem — tách ra để dùng khi cần, không load mặc định

### Fixed
- Button: thêm `text-transform: uppercase` — label button luôn viết hoa

---

## [4.1.0] 2026-03-13

### Added
- Phase 7: Rules & Constraints — danh sách 12 Absolute Rules (R01–R12)
- Phase 7: Common AI Mistakes → Corrections table — 11 lỗi phổ biến + cách sửa
- Phase 9: Validation Checklist — 20 check items chia theo LAYOUT/TYPOGRAPHY/COLOR/DATA/COMPONENTS/ACCESSIBILITY

### Changed
- Phase 4 Input System: bổ sung `GroupInput` và `EditInput` với spec đầy đủ
- Phase 4 Tooltip: thêm Rich variant với icon + CTA
- Phase 4 Alert: tách INFO và INFO BOLD thành 2 variant riêng
- Phase 8: Thêm Tailwind Config section

### Fixed
- InputInline focus behavior: làm rõ border-bottom KHÔNG đổi màu khi focus
- GroupInput: chỉ segment đang focus thay đổi, không phải tất cả segments
- Confirm modal: chỉ dùng cho irreversible actions, không dùng cho favorites/settings

---

## [4.0.0] 2026-03-01

### Added
- Phase 6: Copin AI Subsystem — font Manrope, weights 400/600, AI container styles
- Phase 8: Output Format — React/TypeScript pattern + CSS Custom Properties

### Changed
- Cấu trúc skill chia thành 8 Phases rõ ràng
- Phase 2 Typography: thêm letter-spacing cho toàn bộ scale
- Phase 3 Layout: thêm Backtesting layout template
- Phase 5 Data Display: thêm Chart Colors section

### Removed
- Phần mô tả tự do → thay bằng token tables có cấu trúc

---

## [3.x] 2026-02 (trước khi có CHANGELOG)

> Các version trước không có ghi chép chi tiết.
> Biết từ commit history và Figma version history.

- v3.x: Skill dạng guidelines tự do, chưa có token tables
- v3.x: Chưa có Copin AI subsystem
- v3.x: Chưa có validation checklist

---

## Cách ghi CHANGELOG

```markdown
## [X.Y.Z] YYYY-MM-DD

### Added    ← tính năng / section mới
### Changed  ← thay đổi behavior / spec hiện có
### Fixed    ← sửa spec sai hoặc thiếu
### Removed  ← xóa bỏ nội dung cũ
```

**Semantic versioning:**
- `MAJOR` (X) — thay đổi cấu trúc lớn, phá vỡ backward compatibility
- `MINOR` (Y) — thêm component / section mới
- `PATCH` (Z) — fix spec, clarification, typo
