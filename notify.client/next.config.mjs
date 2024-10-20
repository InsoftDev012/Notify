/** @type {import('next').NextConfig} */

import { SITE } from "./src/config.js";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = "./src";
    return config;
  },
  rewrites: async () => {
    const target = process.env.ASPNETCORE_HTTPS_PORT
      ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
      : process.env.ASPNETCORE_URLS?.split(";")[0] || "https://localhost:7123";

    return [
      {
        source: "/weatherforecast",
        destination: `${target}/weatherforecast`,
      },
    ];
  },
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== "/" ? SITE.basePathname : "",

  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
