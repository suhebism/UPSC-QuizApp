import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['images.unsplash.com'],
  },
};

export default withPWA({
  register: true, // Register service worker
  skipWaiting: true, // Skip waiting for service worker activation
  disable: process.env.NODE_ENV !== 'production', // Enable PWA only in production
})(nextConfig);
