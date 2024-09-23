// components/ClientLoader.js
'use client';  // Mark this as a client-side component

import { useState, useEffect } from 'react';
import Loader from './Loader';

const ClientLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    const handleRouteChange = () => {
      handleStart();
      setTimeout(() => {
        handleComplete();
      }, 500); // Simulate loading for a brief period
    };

    // Listen for popstate event to detect route changes
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};

export default ClientLoader;
