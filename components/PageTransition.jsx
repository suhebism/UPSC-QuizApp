'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },  // Initial state, off-screen to the left
  enter: { opacity: 1, x: 0, scale: 1 },        // Enter to the center and scale up
  exit: { opacity: 0, x: 100, scale: 0.9 },     // Exit off-screen to the right
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}  // Use the pathname to trigger animations
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
