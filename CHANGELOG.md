# CHANGELOG — Copin Design System Skill

Format: `[version] YYYY-MM-DD — tóm tắt thay đổi`

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
