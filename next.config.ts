import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - explicitly requested by Next.js dev server warning
  allowedDevOrigins: ["localhost:3000", "192.168.1.43:3000", "192.168.1.45:3000"],
};

export default nextConfig;
