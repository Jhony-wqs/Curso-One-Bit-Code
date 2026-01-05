import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {hostname: 'www.apple.com'}
    ]
  }
};

export default nextConfig;
