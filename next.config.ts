import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.glb": { type: "asset" },
    },
  },
};

export default nextConfig;
