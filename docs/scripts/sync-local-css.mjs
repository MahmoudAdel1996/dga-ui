// Copies the locally-built sdga-ui CSS + fonts into public/ so the Preview
// iframe (docs/public/preview-frame.html) can load it in development
// instead of the published `sdga-ui@latest` CDN build. Run via
// `npm run use:local` after `npm run build-css` in the repo root has
// produced fresh output.
//
// The CSS's @font-face rules use paths relative to the stylesheet
// (`../fonts/...`), same as the published package's css/ + fonts/ layout —
// so the copy must keep css/ and fonts/ as siblings under one folder rather
// than flattening the CSS into public/'s root.
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.resolve(__dirname, '../node_modules/sdga-ui');
const destRoot = path.resolve(__dirname, '../public/sdga-ui-local');

if (!existsSync(path.join(pkgRoot, 'css/dga-ui.css'))) {
  console.warn(`[sync-local-css] skipped — ${pkgRoot}/css/dga-ui.css not found (run "npm run build-css" in the repo root first)`);
  process.exit(0);
}

mkdirSync(destRoot, { recursive: true });
cpSync(path.join(pkgRoot, 'css'), path.join(destRoot, 'css'), { recursive: true });
cpSync(path.join(pkgRoot, 'fonts'), path.join(destRoot, 'fonts'), { recursive: true });
console.log(`[sync-local-css] copied ${pkgRoot}/{css,fonts} -> ${destRoot}`);
