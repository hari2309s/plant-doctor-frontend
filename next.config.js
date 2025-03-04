const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly set the base path for GitHub Pages
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  // Configure asset prefix for GitHub Pages
  assetPrefix: process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
    : '',
  images: {
    domains: ["plant-doctor-hxptp783pkkz.deno.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plant-doctor-hxptp783pkkz.deno.dev",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Ensure images in public/ load properly
  },
  trailingSlash: true, // Ensures static files are accessible
  output: 'export', // Ensures Next.js generates a static build
  env: {
    PLANT_DOCTER_LOCAL_API_BASE_URL: "http://localhost:8000",
    PLANT_DOCTER_API_BASE_URL: "https://plant-doctor-hxptp783pkkz.deno.dev"
  },
  webpack(config) {
    // Adding alias for '@' to point to 'src' directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
};

module.exports = nextConfig;
