// Temporarily disable PWA
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Static export requires unoptimized images
  },
};

export default nextConfig;
