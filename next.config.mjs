import withPWA from 'next-pwa';

// Temporarily disable PWA
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Static export requires unoptimized images
  },
};

export default withPWA({
  dest: 'public', // PWA files destination
  register: true, // Register service worker
  skipWaiting: true, // Skip waiting for service worker activation
  disable: process.env.NODE_ENV !== 'production', // Disable PWA in non-production environments
})(nextConfig);
