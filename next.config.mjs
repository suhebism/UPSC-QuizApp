// import withPWA from 'next-pwa';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',  // For static site generation
//   images: {
//     unoptimized: true,  // Disable image optimization for static export
//     domains: ['images.unsplash.com'],
//   },
// };

// export default withPWA({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV !== 'production',  // Enable PWA only in production
// })(nextConfig);


import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['images.unsplash.com'],
  },
  // Here is where you should set the export configuration
  // Ensure to use this only if you are exporting for static site generation
  // output: 'export', // This is for next 13 or above with the new app directory
};

export default withPWA({
  dest: 'public', // PWA files destination
  register: true, // Register service worker
  skipWaiting: true, // Skip waiting for service worker activation
  disable: process.env.NODE_ENV !== 'production', // Enable PWA only in production
})(nextConfig);
