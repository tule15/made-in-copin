# CLAUDE.md — Copin Design System Project Context

> Tự động load khi mở conversation mới trong folder này.

---

## Mục đích dự án

Xây dựng bộ **SKILL.md** chuẩn cho Copin Design System — áp dụng cho nhiều side project của Copin. Mục tiêu: AI gen giao diện đạt **99% ADN Copin**.

---

## Cấu trúc folder

```
MADE IN COPIN/
├── .claude/
│   └── commands/
│       └── design.md       ← /design command — master prompt
├── src/
│   └── theme/
│       └── tokens.ts       ← Token constants (colors, font, spacing)
├── resources/
│   ├── design-context.md   ← Principles, anti-patterns, product context
│   └── figma-sources.md    ← Figma node IDs & cách truy cập
├── screens/                ← Ví dụ screens đã generate
│   ├── TraderExplorer/
│   └── TraderProfile/
├── components/             ← Ví dụ components đã generate
├── SKILL.md                ← Design system spec — auto-load (v5.1.0)
├── CLAUDE.md               ← File này
├── README.md               ← Entry point cho người dùng mới
└── CHANGELOG.md
```

---

## SKILL.md — Quyết định đã thống nhất

| Hạng mục | Giá trị |
|----------|---------|
| Stack | React + TypeScript + **styled-components** (không dùng Tailwind) |
| Theme | Dark mode only |
| Font | ABC Social Mono (hỏi user trước) / fallback JetBrains Mono |
| Button | `font-weight: 700 · text-transform: uppercase` |
| Font weights | 400 và 700 ONLY — không dùng 500/600 |
| Layout radius | `border-radius: 0` — tuyệt đối |
| Panel | Chia sẻ 1px border n-4 · không gap · không shadow |
| n-5 | Hover/active/focused ONLY — không làm base panel |
| Semantic colors | Green=profit/long · Red=loss/short · Orange=warning |
| Login button | Normal SM · "LOGIN" · bg primary-1 |

---

## Token budget

| File | ~Tokens | Load khi nào |
|------|---------|--------------|
| SKILL.md v5.1.0 | ~4,500 | Mọi conversation (auto) |
| CLAUDE.md | ~300 | Mọi conversation (auto) |
| resources/design-context.md | ~900 | Khi cần giải thích principles |
| src/theme/tokens.ts | ~400 | Khi gen code |
| .claude/commands/design.md | ~600 | Khi dùng /design |

---

## Figma MCP

- Active, kết nối Figma desktop
- Pages tham khảo: `🧧 Ver 4.0_2026`, `Ver 3.1..`
- Component Canvas: node `1:439`
- Navbar: node `16476:40419` (Menu section)
