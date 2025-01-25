import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  eslint: {
    // Ignore ESLint errors in both development and production
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'lib', 'utils', 'app'], // Directories to ignore
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  }
};


export default nextConfig;
