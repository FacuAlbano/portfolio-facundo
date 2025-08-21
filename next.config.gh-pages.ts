import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para export estático (GitHub Pages)
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Configuración de compilación
  experimental: {
    optimizeCss: process.env.NODE_ENV === 'production',
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Configuración de compresión
  compress: true,
  
  // Configuración de powered by
  poweredByHeader: false,
  
  // Configuración de react strict mode
  reactStrictMode: true,
};

export default nextConfig;
