import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
      {
        protocol: 'http',
        hostname: 'ugandanmenus.com',
      },
    ],
  },
};

export default nextConfig;
