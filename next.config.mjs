/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  output: "export",
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/accessible": { page: "/accessible" },
      "/inaccessible": { page: "/inaccessible" },
    };
  },
  //   distDir: ".next",
};

export default nextConfig;
