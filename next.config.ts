import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(
      "/home/baibhavmandal/Project/freelanceWork/the-old-mirchi-biriyani"
    ), // This ensures it uses the correct directory
  },
};

export default nextConfig;
