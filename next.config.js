/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/GiftExchange",
  assetPrefix: "/GiftExchange/",
  trailingSlash: true,
  images: { unoptimized: true }
};
module.exports = nextConfig;
