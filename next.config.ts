import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orlwatjkonvjtffduizr.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  // Mematikan compiler baru secara total agar tidak crash saat build CSS Tailwind v4
  experimental: {
    turbo: false
  } as any, 
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
