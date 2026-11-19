import type { NextConfig } from "next";

// The GitHub Pages workflow sets GITHUB_PAGES=true to build a static export
// (no server). Vercel builds without it and keeps the full server features.
const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export",
        // No server on Pages, so images are served as-is
        images: { unoptimized: true },
        // Emit projects/3/index.html so Pages serves /projects/3 directly
        trailingSlash: true,
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
