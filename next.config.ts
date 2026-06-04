import type { NextConfig } from "next";

// GitHub Pages serves this as a *project site* under /<repo>, so in production
// the app must be built with a matching basePath. Local `next dev` keeps the
// root path so http://localhost:3000 works unchanged.
const repo = "suki-platform-play-store-requirements";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out that any static host can serve.
  output: "export",

  // Prefix every route and asset with the repo path when deployed to Pages.
  basePath: isProd ? `/${repo}` : "",

  // GitHub Pages has no Next.js image optimizer, so ship images as-is.
  images: { unoptimized: true },

  // Emit /privacy-policy/index.html instead of /privacy-policy.html so Pages
  // serves nested routes reliably.
  trailingSlash: true,
};

export default nextConfig;
