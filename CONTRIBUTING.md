# Contributing to SDGA UI

Thank you for contributing! This library implements the **Saudi Digital Government Authority (SDGA) design system** on top of Bootstrap 5.3. To keep it consistent, every contribution must follow the rules below.

## The Golden Rule: Figma is the Source of Truth

All styles in this library must come from the official SDGA design references:

- **Figma:** [Components Library – Platforms Code & Community](https://www.figma.com/design/I2E5M7OWeToi3moSfwoRfH/Components-Library---Platforms-Code--Community-?node-id=1-1183&p=f&m=dev)
- **Design system docs:** [design.dga.gov.sa](https://design.dga.gov.sa/)

This means:

- ✅ **Do** implement components, variants, states, and tokens exactly as they appear in the Figma file (use Dev Mode to inspect values).
- ✅ **Do** cross-check behavior and usage guidance on [design.dga.gov.sa](https://design.dga.gov.sa/).
- ❌ **Don't** invent styles, variants, colors, spacing, or components that don't exist in the Figma file.
- ❌ **Don't** "improve" a component with your own design ideas — if you think something is missing or wrong in the design, open an issue first instead of styling it your way.
- ❌ **Don't** hardcode values that already exist as tokens — use the palette/typography/spacing/radius variables defined in `theme/config/`.

If a component exists in Bootstrap but **not** in the SDGA Figma file, leave it with default Bootstrap styling — do not create custom styling for it.

## How the Theme Is Structured

`theme/dga-ui.scss` is the single entry point. It layers in this order:

1. `theme/config/` — foundational tokens (colors, typography, spacing, radius, effects)
2. `theme/components/` — per-component **Bootstrap variable overrides** (run *before* Bootstrap)
3. `bootstrap/scss/bootstrap` — Bootstrap compiled with those variables
4. `theme/customizations/` — **post-Bootstrap CSS** for anything variables can't achieve (SDGA-specific classes, RTL fixes, utilities)

## Adding or Modifying a Component Style

1. **Check Figma first.** Locate the component in the Figma file and note its tokens (colors, spacing, radius, typography) in Dev Mode.
2. **Prefer variables over CSS.** Put Bootstrap variable overrides in `theme/components/_<component>.scss` (create it and import it from `theme/_variables.scss` if new).
3. **Use `theme/customizations/_<component>.scss`** only for what variables can't express. Import it in `theme/dga-ui.scss` *after* Bootstrap.
4. **Use existing tokens.** Reference the SDGA palette (`$sa-*`, `$gold-*`, `$lavender-*`, `$neutral-*`, semantic colors) and spacing/radius variables from `theme/config/` — never raw hex values or magic numbers that duplicate a token.
5. **Test RTL.** Every style must work in both `dir="ltr"` and `dir="rtl"`. Use logical properties (`margin-inline-start`, `padding-inline-end`, …) instead of left/right where possible.
6. **Build:** `npm run build-css` must compile without errors.
7. **Document:** update the matching MDX page in `docs/content/docs/components/` and verify it in the docs site (`cd docs && npm run use:local && npm run dev`).
8. **Format:** run `npm run format` before committing.

## Pull Request Checklist

- [ ] The style exists in the SDGA Figma file (link the specific Figma node/frame in the PR description)
- [ ] Uses existing tokens from `theme/config/` — no invented values
- [ ] Works in both LTR and RTL
- [ ] `npm run build-css` succeeds
- [ ] Docs page updated with a working example
- [ ] `npm run format` applied

PRs that introduce styles not present in the Figma file will be closed with a request to open a design issue instead.

## Development Commands

```bash
npm run build-css     # compile SCSS → css/dga-ui.css
npm run watch-css     # recompile on change
npm run format        # format all files
npm run format:check  # check formatting
```

Docs site: `cd docs && npm run use:local && npm run dev`
Angular demo: `cd demo-angular && npm start`

## Questions

Not sure whether something belongs in the library? Open an issue on [GitHub](https://github.com/MahmoudAdel1996/dga-ui/issues) before writing code.
