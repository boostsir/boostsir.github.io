/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages with boostsir.github.io repository (no basePath needed)
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;