const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tztqrwfrxgdnghfvdluj.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tztqrwfrxgdnghfvdluj.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Ensure images in public/ load properly
  },
  output: 'export', // Ensures Next.js generates a static build
  env: {
    PLANT_DOCTER_LOCAL_API_BASE_URL: "http://localhost:8000",
    PLANT_DOCTER_API_BASE_URL: "https://plant-doctor-xfgcdy9by14y.deno.dev",
    PLANT_DOCTOR_SUPABASE_STORAGE_BUCKET_URL: "https://tztqrwfrxgdnghfvdluj.supabase.co/storage/v1/object/sign/plant-doctor-plants-images"
  },
  webpack(config) {
    // Adding alias for '@' to point to 'src' directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
};

module.exports = nextConfig;
