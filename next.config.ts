import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.sefiles.net" },
      { protocol: "https", hostname: "images2.giant-bicycles.com" },
      { protocol: "https", hostname: "spokesandsports.com" },
      { protocol: "https", hostname: "assets.woom.com" },
    ],
  },
};

export default nextConfig;
