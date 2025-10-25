import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['images.unsplash.com'], 
    unoptimized: true, 
}

}
module.exports = nextConfig
