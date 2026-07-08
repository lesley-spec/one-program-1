# Setup

How this kit's code is wired together — read this before generating components so
imports and config match the real project.

## Stack

* React 18 + TypeScript, built with Vite 6.
* Tailwind CSS v4 (via `@tailwindcss/vite` plugin, not the v3 PostCSS config) +
  `tailwind-merge` / `class-variance-authority` for variant-based components.
* Radix UI primitives wrapped as shadcn-style components in `src/app/components/ui`.
* `@mui/material` + `@emotion/*` are present for a small number of legacy widgets —
  prefer the Radix/shadcn primitives for anything new.
* `react-router` for routing, `recharts` for charts, `react-hook-form` for forms,
  `date-fns` + `react-day-picker` for dates, `sonner` for toasts, `lucide-react` for
  icons, `motion` for animation.

## Project layout

```
guidelines/        # this folder — Guidelines.md / setup.md / styles.md
src/
  app/
    components/     # feature components (DashboardView, LeftNav, AppShell, ...)
      ui/            # shared design-system primitives (button, card, dialog, ...)
      figma/         # Make-specific helpers (ImageWithFallback)
    pages/           # route-level pages
    routes.tsx       # route definitions
    App.tsx          # app entry / providers
  assets/
  imports/           # Figma-imported SVG/asset modules
  styles/
    fonts.css
    tailwind.css     # @import "tailwindcss" + theme wiring
    theme.css        # all design tokens (CSS variables), light + dark
    global.css       # element resets / base styles
    index.css         # imports the four files above, in order
  main.tsx
vite.config.ts
postcss.config.mjs
package.json
```

## Path aliases

`@` is aliased to `src/` (see `vite.config.ts`). Import shared UI as:

```ts
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/components/ui/utils";
```

## Asset imports

A custom Vite plugin (`figmaAssetResolver` in `vite.config.ts`) resolves
`figma:asset/<filename>` imports to `src/assets/<filename>`. When porting a Figma
asset reference into code, use that `figma:asset/...` import form rather than a
relative path — the resolver handles it.

`assetsInclude` is configured for `.svg` and `.csv` raw imports. Never add `.css`,
`.tsx`, or `.ts` to that list.

## Base path

The app is deployed to GitHub Pages under `/one-program-1/` (`base` in
`vite.config.ts`). Local dev runs through the same base path — links and asset URLs
should stay root-relative (`/...`) rather than hardcoding the base segment.

## Styling entry point

`src/styles/index.css` is the single stylesheet import chain:

```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
@import './global.css';
```

Don't add new global stylesheets outside this chain — add component-scoped styles
via Tailwind classes instead.
