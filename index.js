import packageJson from './package.json' with { type: 'json' };

export const version = packageJson.version;
export const cssPath = './css/dga-ui.css';
export const minCssPath = './css/dga-ui.min.css';

export default {
  version,
  cssPath,
  minCssPath,
};
