import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no server). cacheComponents and
  // partialPrefetching need a server, so they stay off.
  output: "export",
  images: { unoptimized: true },
  // Emit projects/3/index.html so GitHub Pages serves /projects/3 directly
  trailingSlash: true,
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
