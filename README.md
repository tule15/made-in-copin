# MADE IN COPIN
> Bộ Skill AI thiết kế UI/UX cho Copin Analyzer — dark mode · Bloomberg terminal · data-first

Clone repo này để AI tự động generate giao diện đúng ADN Copin chỉ với 1 câu lệnh.

---

## Yêu cầu

| Thứ | Ghi chú |
|-----|---------|
| [Claude Code](https://claude.ai/code) | CLI chạy AI — bắt buộc |
| Font **ABC Social Mono** | Hỏi AI nếu chưa có, sẽ dùng JetBrains Mono thay thế |
| Node.js + React project | Nơi đặt code được generate |

---

## Cách dùng

**1. Clone repo vào folder project:**
```bash
git clone https://github.com/tule15/made-in-copin .copin-design
```

**2. Mở folder trong Claude Code:**
```bash
cd your-react-project
claude
```

**3. Ra lệnh thiết kế:**
```
/design tôi muốn thiết kế màn hình scan insider wallet trên Hyperliquid
```

AI sẽ tự động:
1. Phân tích yêu cầu
2. Hỏi clarifying questions nếu cần
3. Đề xuất layout + component plan
4. Generate code React/TypeScript/styled-components
5. Tự kiểm tra theo Validation Checklist

---

## Cấu trúc repo

```
MADE IN COPIN/
├── .claude/
│   └── commands/
│       └── design.md       ← Master prompt — AI chạy khi dùng /design
├── src/
│   └── theme/
│       └── tokens.ts       ← Token constants (colors, font, spacing...)
├── resources/
│   ├── design-tokens.md    ← Token reference compact
│   └── figma-sources.md    ← Figma source & cách truy cập
├── screens/                ← Ví dụ screens đã generate (tham khảo)
├── components/             ← Ví dụ components đã generate (tham khảo)
├── SKILL.md                ← Design system spec đầy đủ (auto-load)
└── CLAUDE.md               ← Project context (auto-load)
```

---

## Design System

| Thuộc tính | Giá trị |
|---|---|
| App | app.copin.io |
| Font chính | ABC Social Mono → fallback JetBrains Mono |
| Theme | Dark only |
| Stack | React + TypeScript + styled-components |
| Aesthetic | Bloomberg Terminal · TradingView — flat, dense, data-first |
| Skill version | v5.1.0 |

---

## Ví dụ lệnh

```
/design màn hình Trader Explorer với filter theo protocol và timeframe

/design panel Copy Trade form cho Trader Profile page

/design dashboard tổng quan portfolio với PnL chart và open positions table

/design màn hình scan whale wallet trên GMX — hiển thị top traders by volume 24h
```

---

*Last updated: March 2026 · Skill v5.1.0*
*Source: Figma Component Canvas (1:439) + app.copin.io*
