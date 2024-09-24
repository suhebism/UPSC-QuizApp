import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',   // Ensure 'export' for static generation
    images: {
      unoptimized: true, // Disable image optimization since it's incompatible with 'output: export'
      domains: ['images.unsplash.com']
    },
    // Specify fallback page for PWA to handle 404 in static exports
    trailingSlash: true,
    experimental: {
      // This experimental setting can help resolve issues with static exports and PWA in some versions
      appDir: false,
    }
};


export default withPWA({
  dest: 'public',
  // register: process.env.NODE_ENV === 'production', // Register SW in production
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development', // Disable PWA in dev
  fallbacks: {         // Provide fallbacks for PWA in static export
      document: '/_offline', // Static offline page
  },
})(nextConfig);
