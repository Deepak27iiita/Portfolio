import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 600); // Add a small delay for smooth fadeout
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-4">
        {/* Animated logo */}
        <motion.div
          className="w-16 h-16 mb-8 relative flex items-center justify-center rounded-xl bg-[#0a0f0d] border border-[#1D9E75]/30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <span className="text-[#1D9E75] text-xl font-bold font-display">DS</span>
          <div className="absolute inset-0 rounded-xl border border-[#1D9E75] opacity-30 blur-sm scale-110" />
        </motion.div>

        {/* Text and Percentage */}
        <div className="flex justify-between items-center w-full mb-2 font-mono text-xs text-gray-400">
          <span className="animate-pulse">BOOTING PORTFOLIO ENGINE...</span>
          <span className="text-[#1D9E75] font-bold">{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#111b17] rounded-full overflow-hidden border border-[#1D9E75]/10">
          <motion.div
            className="h-full bg-[#1D9E75]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Backlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#1D9E75]/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      </div>
    </motion.div>
  );
}
