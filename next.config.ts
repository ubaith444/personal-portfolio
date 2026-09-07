import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app"
      }
    ]
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/
});

export default withMDX(nextConfig);
