"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Play animation (draw line for 1.5s, then dot 0.4s, then fade out)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  // Avoid hydration mismatch by not rendering anything until client
  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <svg 
            width="50" 
            height="75" 
            viewBox="0 0 100 150" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dot on Top */}
            <motion.circle
              cx="50"
              cy="15"
              r="8"
              fill="white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4,
                delay: 1.2,
                ease: "backOut"
              }}
            />
            
            {/* Upright Infinity (figure 8) Path */}
            <motion.path
              d="M 50 80 
                 C 80 110, 80 140, 50 140 
                 C 20 140, 20 110, 50 80 
                 C 80 50, 80 30, 50 30 
                 C 20 30, 20 50, 50 80 Z"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
