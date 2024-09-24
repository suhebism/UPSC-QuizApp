// Import the PWA plugin
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ensure 'output' is set to 'export' for static generation
    // output: 'export',
    images: {
      unoptimized: false,
      domains: ['images.unsplash.com']
    }
};

// Export the config with PWA integration
export default withPWA({
    dest: 'public',         // Directory for PWA files
    register: process.env.NODE_ENV === 'production', // Only register the service worker in production
    skipWaiting: true,      // Activate the new service worker immediately
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
})(nextConfig);