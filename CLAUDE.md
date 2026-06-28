# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

`sdga-ui` (published as `sdga-ui` on npm) is a Bootstrap 5.3 theme that applies a Saudi government design system (SDGA palette) on top of standard Bootstrap. It ships only compiled CSS and SCSS source files — no JavaScript components. Peer dependencies are `bootstrap` and `bootstrap-icons`.

## Commands

All commands run from the repo root unless noted.

```bash
# Compile SCSS → css/dga-ui.css (required before publish)
npm run build-css

# Watch for changes and recompile
npm run watch-css

# Format all JS/JSON/MD/CSS/SCSS files
npm run format

# Check formatting without writing
npm run format:check

# Release a patch version (builds CSS, syncs versions, commits, tags, pushes)
npm run version:patch
```

### Docs site (Next.js + Fumadocs, in `docs/`)

```bash
cd docs
npm run use:local   # installs local sdga-ui before dev
npm run dev         # starts Next.js dev server using local theme
npm run build       # production build
```

### Angular demo app (in `demo-angular/`)

```bash
cd demo-angular
npm start           # installs local sdga-ui then serves with ng serve -o
npm run build:prod  # installs from npm registry then builds for production
```

## Architecture

### Theme layering (the core mental model)

`theme/dga-ui.scss` is the single entry point compiled to `css/dga-ui.css`. It applies in this order:

1. **`theme/_fonts.scss`** — self-hosted IBM Plex Sans Arabic `@font-face` declarations
2. **`theme/_functions.scss`** — SCSS utility functions used by variables
3. **`theme/_variables.scss`** — imports two groups of variable files that run *before* Bootstrap:
   - **`theme/config/`** — foundational overrides: `_colors.scss`, `_typography.scss`, `_spacing.scss`, `_base.scss`, `_effects.scss`, `_radius.scss`
   - **`theme/components/`** — per-component Bootstrap variable overrides (buttons, forms, navbar, modals, etc.)
4. **`bootstrap/scss/bootstrap`** — Bootstrap source compiled with the overridden variables
5. **`theme/customizations/`** — post-Bootstrap CSS that adds SDGA-specific utilities, classes, and RTL fixes not achievable via Bootstrap variables alone

### Color system

`theme/config/_colors.scss` defines the full SDGA palette (SA green, Gold, Lavender, Error, Warning, Info, Success, Neutral) and maps them to Bootstrap semantic variables. `$primary` maps to `$sa-600` (dark green). The `$theme-colors` map is extended with all palette shades (e.g. `primary-100` through `primary-950`) so Bootstrap generates utility classes for every shade.

### RTL support

RTL is built in — importing `dga-ui.css` handles both LTR and RTL. Consumers add `dir="rtl"` to `<html>` and it works. No separate Bootstrap RTL import needed.

### Sub-workspaces

| Directory | Purpose |
|---|---|
| `theme/` | SCSS source — the publishable artifact |
| `css/` | Compiled output — committed and published |
| `fonts/` | IBM Plex Sans Arabic TTF files — published |
| `docs/` | Next.js documentation site (Fumadocs), deployed to GitHub Pages |
| `demo-angular/` | Angular 21 demo app, also deployed to GitHub Pages |

Both `docs/` and `demo-angular/` have their own `package.json` and `node_modules`. They reference the local package via `npm run use:local` (which runs `npm install --no-save file:..`) during development and switch to the npm registry for production builds.

### Release workflow

`npm run version:patch` does everything: builds CSS → bumps version in `package.json` → syncs that version into `docs/package.json` and `demo-angular/package.json` (`sdga-ui` dependency) → commits → tags → pushes. Two GitHub Actions workflows trigger on the resulting `v*` tag: `publish.yml` (npm publish via OIDC trusted publishing) and `deploy.yml` (builds the Angular demo from the freshly published npm package and deploys to GitHub Pages).

### Adding or modifying a component style

1. Add/edit Bootstrap variable overrides in `theme/components/_<component>.scss` (imported via `_variables.scss` *before* Bootstrap).
2. Add/edit post-Bootstrap customizations in `theme/customizations/_<component>.scss` (imported in `dga-ui.scss` *after* Bootstrap) for anything that can't be done with variables alone.
3. Run `npm run build-css` to verify compilation.
4. Update the corresponding MDX page in `docs/content/docs/components/` and test in the docs site or Angular demo with `npm run use:local`.
