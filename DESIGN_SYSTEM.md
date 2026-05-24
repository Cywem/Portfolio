# Design System

## Design Direction

The portfolio uses a dark terminal-editorial system: flat black surfaces, cream mono text, gray construction lines, oversized display moments, and small bright accent states. It should feel like a personal front-end lab: precise, slightly raw, readable, and interactive.

## Foundations

### Color Tokens

Use the CSS variables in `src/styles/index.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#151515` | Primary page and card surface |
| `--color-bg-deep` | `#0F0E0C` | Case-study/deeper background |
| `--color-bg-raised` | `#1A1A1A` | Subtle raised panels |
| `--color-bg-muted` | `#2A2926` | Quiet chip/card fills |
| `--color-text` | `#F4F2E7` | Primary text |
| `--color-text-muted` | `#84837F` | Body copy, metadata, inactive controls |
| `--color-rule` | `#4C4C4A` | Main hairline grid/borders |
| `--color-rule-strong` | `#84837F` | Active borders and input outlines |
| `--color-accent-cyan` | `#66EECC` | Primary project/accent state |
| `--color-accent-cyan-soft` | `#96F0E5` | About active tab and soft cyan hover |
| `--color-accent-blue` | `#2FA8FF` | Download/status action |
| `--color-accent-orange` | `#F26C37` | Website category |
| `--color-accent-red` | `#FF6B6B` | Prototype category |
| `--color-accent-yellow` | `#FEE21D` | Management System category |
| `--color-accent-purple` | `#C584F6` | Secondary action/coming soon |
| `--color-accent-green` | `#55D263` | Success/live link accent |

### Typography

- Primary font: `Space Mono`. Use for body text, navigation, metadata, buttons, and technical labels.
- Display font: `Bayon`. Use for section titles, page titles, project titles, and large footer display type.
- Weight pattern: `400` for most text; `700` for emphasis, nav logo, hero subtitle, highlighted skills, and metadata emphasis.
- Text transform: uppercase for nav, badges, controls, marquee labels, page/section labels.
- Letter spacing: keep `0` by default; only existing footer label uses spaced text.

Suggested scale:

- Caption: `12px`.
- Metadata/chips: `14px`.
- Body: `16px`.
- Navigation and compact labels: `18px`.
- Hero/body large: `20px`.
- Project card title: `46px`.
- Section title: `64px`.
- Page/case title: `92px`.
- Display/ASCII/footer: use responsive clamps or large fixed sizes tied to the viewport.

### Layout

- Outer page gutter: `64px` desktop.
- Inner content gutter: `32px`.
- Primary rhythm: `8, 12, 16, 24, 32, 48, 64, 84, 128`.
- Main layout motif: bordered vertical rails on content containers, often with `border-left` and `border-right`.
- Sections should feel like full-width bands with framed inner content, not floating cards.
- Use CSS grid for project collections; default home project grid is 3 columns, then 2, then 1.

### Borders, Radius, Shadow

- Default border: `1px solid --color-rule`.
- Strong border: `1px solid --color-rule-strong`.
- Dashed borders are reserved for marquee/technical-divider moments.
- Radius should stay tight: `2px` for icon wells, `4px` for buttons/chips, `8px` max for cards or media frames.
- Avoid soft shadows. When needed, use very subtle colored glow only around accent-specific case-study elements.

### Motion

- Standard transition: `0.3s ease`.
- Entrances: opacity + `translateY(20px)` with `0.3s ease-out` or longer hero sequence delays.
- Hover states: border color changes, small scale for social icons, directional arrow movement, subtle gradient fills.
- Marquees and ASCII effects are signature motion; keep them smooth and respect `prefers-reduced-motion`.

## Components

### Navigation

- Fixed top bar, transparent at top, `rgba(21, 21, 21, 0.7)` with blur after scroll.
- Desktop height: `72px`.
- Logo/social group left; page anchors right.
- Use abbreviated reveal labels for external links (`LNKDN`, `GTHB`) and plain uppercase page labels.
- Preserve left/right rails inside `.nav-container`.

### Hero

- First viewport anchor is the animated ASCII "CYREM" wordmark.
- Job title uses bold `Space Mono`, not `Bayon`, to keep it technical.
- Summary is centered, muted, max-width about `560px`; key skills use cream/bold.
- Download button is blue with dark icon well.
- Hover portrait overlay is circular, cream border, fixed to cursor with viewport clamping.

### Project Cards

- Surface: `--color-bg`, border: `--color-rule`, min-height about `517px`.
- Visual area height: `300px`; content padding: `32px`.
- Category color drives hover border, visual gradient, arrow border, and metadata color.
- Title uses `Bayon` at card-title scale.
- Body copy remains muted `Space Mono`.
- Card arrow stays hidden until hover.

### Filters and Search

- Filters are square-ish bordered text buttons with uppercase mono labels.
- Active category states use category accent backgrounds with dark text.
- Search uses dark fill, strong gray border, icon left, mono input text.
- Suggestions should look like attached command-palette rows: same surface, strong border, muted/cream hover.

### Tech Stack Marquee

- Section has dashed top/bottom borders.
- Badges use hard rectangular frames, icon + oversized uppercase mono name.
- Keep generous horizontal spacing so motion feels deliberate.

### About

- Left side is sticky navigation with bordered tabs.
- Active tab uses soft cyan fill with dark text and dark square indicator.
- Right side uses long vertical rhythm and section headings in `Bayon`.
- Certification and experience cards stay grid-like, bordered, and compact.

### Case Studies

- Use deeper dark background only where hierarchy needs it.
- Header is split between title column and details column, separated by borders.
- Technology pills use rounded capsule shape but stay small and technical.
- Use category accent sparingly for links, tags, callouts, and key visual borders.

## Implementation Rules

- New styles should use tokens from `src/styles/index.css` before adding new raw hex values.
- If adding a new category, add a named accent token and align `projectsData`, filter styles, and card colors.
- Prefer flat surfaces, rails, hairline borders, and mono labels over decorative cards.
- Keep UI text short and functional; the visual language already explains the site.
- Do not introduce broad purple/blue gradients, beige palettes, large rounded cards, soft orbs, or generic SaaS hero layouts.
