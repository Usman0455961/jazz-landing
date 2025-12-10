import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Output standalone for production deployment
  output: 'standalone',
};

export default nextConfig;
