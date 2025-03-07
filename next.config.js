const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["plant-doctor-fyq6g8m5npzs.deno.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plant-doctor-fyq6g8m5npzs.deno.dev",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Ensure images in public/ load properly
  },
  output: 'export', // Ensures Next.js generates a static build
  env: {
    PLANT_DOCTER_LOCAL_API_BASE_URL: "http://localhost:8000",
    PLANT_DOCTER_API_BASE_URL: "https://plant-doctor-fyq6g8m5npzs.deno.dev"
  },
  webpack(config) {
    // Adding alias for '@' to point to 'src' directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
};

module.exports = nextConfig;
