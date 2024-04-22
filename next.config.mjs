/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
    basePath: '/blog',
    output: "export",
    images: { unoptimized: true },
};

export default nextConfig;
