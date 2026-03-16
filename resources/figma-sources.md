# Figma Sources — Tham chiếu & Cách truy cập

---

## File chính

| File | Node ID | Nội dung |
|------|---------|----------|
| Component Canvas | `1:439` | Toàn bộ Copin Design System |

---

## Sections trong Component Canvas (1:439)

```
Foundation          ← Colors, Typography, Spacing, Shadows
Buttons             ← Tất cả variants + states
Input               ← InputField, InputInline, EditInput, GroupInput, Search
Tabs                ← Large, Small, Minimal
Checkbox / Radio / Switch
Dropdown            ← 3 trigger types + menu
Label / Status / Tag ← Protocol pill, Leverage, Position badges
Tooltip             ← Simple + Rich variants
Alert               ← INFO, WARNING, ERROR, SUCCESS + BOLD variants
Menu
Table               ← Header, rows, states
Carousel
Icon Size           ← Phosphor 12/16/18/20/24px guidelines
Perp DEXs logo      ← Protocol logos 16/18/24px
Icon_Exchange
PerpDex Explorer    ← Explorer page layout
Icon set            ← Phosphor 500+ icons
```

---

## Cách dùng Figma MCP

```
# Lấy metadata tổng quan
→ get_metadata(nodeId: "1:439")

# Lấy design spec chi tiết của component
→ get_design_context(nodeId: "<node-id>")

# Screenshot component
→ get_screenshot(nodeId: "<node-id>")

# Lấy biến variables (colors, typography)
→ get_variable_defs()
```

---

## Variables đã confirm từ Figma

- **Colors**: n-7 → n-1, primary-1/2, semantic colors, gradients 1/3/4/7
- **Typography**: line-height + letter-spacing cho toàn bộ scale
- **Shadows**: 5 levels (shadow-1 → shadow-5)
- **Border Radius**: per component type

---

## Lưu ý

- Figma MCP cần Figma Desktop app đang mở file đúng
- Node ID format: `123:456` hoặc `123-456`
- Khi response quá lớn → dùng `get_design_context` trên node con cụ thể thay vì node cha
