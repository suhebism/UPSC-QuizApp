import localFont from "next/font/local";
import "./globals.css";
import ClientLoader from '../components/ClientLoader';
import PageTransition from "@/components/PageTransition";
import { AnimatePresence, motion } from "framer-motion";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PWA NextJS",
  description: "It's a simple progressive web application made with NextJS",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden overscroll-none`}>
        {/* <PageTransition> */}
        {/* <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          > */}
          <ClientLoader>
          {children}
          </ClientLoader>
          {/* </motion.div>
          </AnimatePresence> */}
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
