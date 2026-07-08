# Styles & Tokens

All values live in `src/styles/theme.css` as CSS variables, mapped to Tailwind
utilities via the `@theme inline` block (Tailwind v4 token syntax). Always reference
the token name (`bg-accent`, `text-text-subdued`, `border-border-default`, etc.) —
never a raw hex value or pixel size.

## Typography

* Font family: `Sarabun` (UI text) · `Roboto Mono` (code/data), set via
  `--font-family` / `--font-family-code`.
* Base size: 16px (`--font-size`).
* Scale:

  | Token | Size | Use |
  |---|---|---|
  | `--text-4xl` | 40px | h1 |
  | `--text-xl` | 24px | h2 |
  | `--text-lg` | 18px | h3 |
  | `--text-base` | 14px | h4, body |
  | `--text-sm` | 12px | label, caption |

* Weights: `--font-weight-normal` (400, body) and `--font-weight-medium` (600,
  headings/labels/emphasis) only. No 700+ bold weight in the system.

## Color tokens

| Group | Tokens |
|---|---|
| Brand | `brand-red` (logo only), `brand-neutral`, `brand-gray` |
| Background | `background-default/subdued/disabled/hover/invert/dimmed/overlay/on-surface` |
| Surface | `surface-default/subdued/hover/pressed/disabled` |
| Border | `border-default/interactive/disabled/focus/error/accent` |
| Text | `text-default/subdued/disabled/interactive/interactive-hover/error/invert` |
| Icon | `icon-default/subdued/interactive/interactive-hover/disabled/invert/error/success` |
| Interactive | `interactive-default/hover/pressed/disabled` (brand blue `#0077DB`) |
| Semantic | `success`, `error`, `warning`, `info` — each as `-default` / `-bg` / `-border` |
| Status (compact) | `positive`, `negative`, `caution` — each as base + `-bg` |
| Tier badges | `tier-gold`, `tier-silver`, `tier-bronze`, `tier-new` — each as `-bg` + `-text` |
| Social | `social-x`, `-facebook`, `-youtube`, `-twitch`, `-tiktok`, `-snapchat`, `-pinterest`, `-linkedin`, `-whatsapp`, `-line`, `-wechat`, `-bestbuy` |
| AI surfaces | `ai-background`, `ai-foreground`, `ai-border`, `ai-accent` (purple) — AI-generated content only |
| Buttons | `button-primary`, `button-primary-hover`, `button-disabled`, `button-disabled-foreground`, `button-focus-ring` |
| Sidebar | `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-accent`, `sidebar-border`, `sidebar-ring`, `sidebar-panel`, `sidebar-icon-active`, `sidebar-icon-active-bg` |
| Charts | `chart-1` … `chart-5`, used in series order |
| shadcn aliases | `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring` — these map onto the tokens above for compatibility with the Radix/shadcn primitives |

All color tokens have a `.dark` override in the same file — every new color use must
resolve correctly in both light and dark mode without a separate dark-mode branch in
component code.

## Spacing

`--spacing-xs` 4px · `--spacing-sm` 8px · `--spacing-md` 12px · `--spacing-base` 16px ·
`--spacing-lg` 24px · `--spacing-xl` 32px · `--spacing-2xl` 48px · `--spacing-3xl` 64px.

## Radius

`--radius-xs` 2px · `--radius-sm` 4px · `--radius-md` 6px · `--radius` (default) 8px ·
`--radius-lg` 12px · `--radius-xl` 16px · `--radius-2xl` 24px · `--radius-button`
9999px (fully pill-shaped — all buttons) · `--radius-checkbox` 3px.

## Elevation

`--elevation-xs/sm/md/lg/xl` — use `sm` for cards/dropdowns, `lg`/`xl` only for
modals and slideouts. Tailwind v4 mapping exposes `sm` as `drop-shadow-sm`.

## Border width

`--border-width-thin` 1px (default) · `-medium` 2px · `-thick` 3px.
