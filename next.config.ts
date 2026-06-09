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
  // Tambahkan baris ini untuk mematikan Turbopack secara eksplisit saat build di Vercel
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
