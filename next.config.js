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
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/:path*`
          : "https://plant-doctor-hxptp783pkkz.deno.dev/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
