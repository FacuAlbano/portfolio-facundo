import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para desarrollo local
  reactStrictMode: true,
  
  // Solucionar warning de workspace root
  outputFileTracingRoot: __dirname,
  
  // Configuración de imágenes
  images: {
    domains: [],
  },
  
  // Configuración experimental
  experimental: {
    // Habilitar características experimentales si es necesario
  },
};

export default nextConfig;
