import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/dga-ui' : '',
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
