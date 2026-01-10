import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - explicitly requested by Next.js dev server warning
  allowedDevOrigins: ["192.168.1.43"],
};

export default nextConfig;
