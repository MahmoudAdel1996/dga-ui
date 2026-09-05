import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubPages ? '/dga-ui' : '');
const isExport = isGithubPages;

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: isExport ? 'export' : undefined,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    // Explicitly set the workspace root to avoid multi-lockfile warnings
    root: new URL('.', import.meta.url).pathname,
  },
  images: {
    // Don't optimize external images to avoid preload warnings
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default withMDX(config);
