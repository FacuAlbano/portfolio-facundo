import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para export estático (GitHub Pages)
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-facundo',
  assetPrefix: '/portfolio-facundo/',
  images: {
    unoptimized: true,
  },
  
  // Configuración de react strict mode
  reactStrictMode: true,
};

export default nextConfig;
