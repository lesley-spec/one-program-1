# Impact.com Brand UI — Design System Guidelines

This is the Impact.com partnership management dashboard (Engage, Discover, Optimize,
Protect, Insights, Briefing & Dashboards, Campaign Manager, Analytics, Transactions,
Content, Contracts). Use these rules when generating new screens or components so
they match the existing product.

See also: [setup.md](./setup.md) for project structure/imports, and
[styles.md](./styles.md) for the full typography/color/spacing token reference.

## General

* Build with flexbox/grid and Tailwind utility classes — avoid absolute positioning
  unless layering an overlay (modals, popovers, tooltips).
* Reuse the existing `src/app/components/ui/*` primitives (shadcn/Radix-based) before
  creating a new component from scratch.
* Light and dark mode must both work — never hardcode hex colors in components, always
  reference the design tokens in [styles.md](./styles.md).
* Keep the left navigation, top nav, and page shell consistent across views — new
  screens render inside `RootLayout` / `AppShell`, not as standalone pages.

## Components

### Button (`components/ui/button.tsx`)
* Variants: `default` (filled brand blue — primary action), `secondary` (filled
  muted — secondary action), `outline` (bordered — tertiary/cancel), `ghost`
  (no border/fill — toolbar/icon actions), `destructive` (red — delete/remove),
  `link` (text-only, underlined on hover).
* Sizes: `sm` (32px), `default` (36px), `lg` (44px), `icon` (36×36 square).
* One `default` (primary) button per section/card; pair with `outline` or `ghost`
  for secondary actions, never two primary buttons side by side.
* All buttons are pill-shaped (`rounded-button`) — never use square or slightly
  rounded buttons.

### Navigation
* Left nav (`LeftNav.tsx`) is icon + label, collapsible, with sections that expand
  to sub-items (e.g. "Partners", "Campaign Manager", "Analytics"). Active item uses
  `sidebar-icon-active` / `sidebar-icon-active-bg`.
* Top nav holds global search, notifications, checklist, help, account/spend, and
  avatar — keep it to icon buttons only, no text labels.

### Cards & tables
* Dashboard widgets are cards with `surface-default` background, `border-default`
  1px border, `radius` 8px, `elevation-sm`.
* Data tables (`ContractsTable`, `ImminentChangesTable`, etc.) use the shared
  `components/ui/table.tsx` primitives — don't build bespoke `<table>` markup.

### Status & badges
* Use `positive`/`negative`/`caution` token pairs for inline status text or pills,
  not raw green/red.
* Tier badges (gold/silver/bronze/new) always use the matching `tier-*-bg` /
  `tier-*-text` pair together — never mix tiers.

## Don't

* Don't use `brand-red` as a button or link color — it's reserved for the logo.
* Don't introduce a new font family or weight outside Sarabun (400/600) and Roboto
  Mono.
* Don't hardcode pixel colors — always go through the CSS variable / Tailwind token.
* Don't build a new modal/sheet pattern — use `dialog.tsx`, `sheet.tsx`, or
  `drawer.tsx` from `components/ui`.
