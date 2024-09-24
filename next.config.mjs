import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enabling React strict mode for better debugging in dev
  images: {
    unoptimized: false,  // Enabling image optimization
    domains: ['images.unsplash.com'],  // Whitelisted domains for images
  },
};

export default withPWA({
  dest: 'public',  // PWA files destination
  register: true,  // Register service worker
  skipWaiting: true,  // Skip waiting for service worker activation
  disable: process.env.NODE_ENV !== 'production',  // Disable PWA in all environments except production
})(nextConfig);
