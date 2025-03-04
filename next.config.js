/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  },
  env: {
    PLANT_DOCTER_LOCAL_API_BASE_URL: "http://localhost:8000",
    PLANT_DOCTER_API_BASE_URL: "https://plant-doctor-hxptp783pkkz.deno.dev"
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.PLANT_DOCTER_API_BASE_URL
          ? `${process.env.PLANT_DOCTER_API_BASE_URL}/:path*`
          : "https://plant-doctor-hxptp783pkkz.deno.dev/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
