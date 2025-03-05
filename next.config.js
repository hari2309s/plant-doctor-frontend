const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["plant-doctor-mwde68pnagep.deno.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plant-doctor-mwde68pnagep.deno.dev",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Ensure images in public/ load properly
  },
  output: 'export', // Ensures Next.js generates a static build
  env: {
    PLANT_DOCTER_LOCAL_API_BASE_URL: process.env.PLANT_DOCTER_LOCAL_API_BASE_URL,
    PLANT_DOCTER_API_BASE_URL: process.env.PLANT_DOCTER_API_BASE_URL
  },
  webpack(config) {
    // Adding alias for '@' to point to 'src' directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
};

module.exports = nextConfig;
