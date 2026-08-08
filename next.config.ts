import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "theorigamiai.com",
      },
      {
        protocol: "https",
        hostname: "feelbygoodmind.vercel.app",
      },
      {
        protocol: "https",
        hostname: "trueskin.app",
      },
      {
        protocol: "https",
        hostname: "chocobucks.com",
      },
      {
        protocol: "https",
        hostname: "www.chocobucks.com",
      },
      {
        protocol: "https",
        hostname: "hybridpillars.com",
      },
      {
        protocol: "https",
        hostname: "www.hybridpillars.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/skills", destination: "/projects#skills", permanent: true },
      { source: "/experience", destination: "/projects#experience", permanent: true },
      { source: "/ai-journey", destination: "/projects", permanent: true },
      { source: "/gallery", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
