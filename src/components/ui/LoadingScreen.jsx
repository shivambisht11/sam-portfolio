import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
    >
      <div className="relative w-full max-w-md px-10">
        <div className="flex justify-between items-end mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-xs uppercase tracking-[0.5em] text-slate-500 mb-2 font-medium">Portfolio</div>
            <div className="text-4xl font-display font-bold">
              <span className="text-white">SHIVAM</span>
              <span className="text-slate-600 font-light ml-2">BISHT</span>
            </div>
          </motion.div>
          <motion.div 
            className="text-7xl font-display font-bold tabular-nums text-white/10 absolute right-10 bottom-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.round(progress)}
          </motion.div>
        </div>

        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        
        <div className="mt-6 flex justify-between items-center">
            <motion.div 
                className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading Experience
            </motion.div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-medium">
                {Math.round(progress)}%
            </div>
        </div>
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
