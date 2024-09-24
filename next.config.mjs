import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Un-comment this to enable static export
    images: {
      unoptimized: false,  // You can adjust this for optimization needs
      domains: ['images.unsplash.com'],
    }
};

export default withPWA({
    dest: "public",         // Destination directory for PWA files
    register: true,         // Register the service worker
    skipWaiting: true,      // Skip waiting for service worker activation
    disable: process.env.NODE_ENV === "development"  // Disable PWA in development
})(nextConfig);
