import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        const progress = prev / 100;
        const increment = progress < 0.3 
          ? 1.2 
          : progress < 0.7 
            ? 2.5 
            : 1.8;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-50 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.83, 0, 0.17, 1] 
              }
            }}
          >
            {/* 3D Sphere Animation */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <motion.div
                className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 shadow-xl"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                }}
                animate={{
                  rotateX: [0, 180, 360],
                  rotateY: [0, 180, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-0 rounded-full opacity-20 bg-white" />
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white border-opacity-10"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
              
              <motion.div
                className="absolute text-center z-10"
                animate={{
                  scale: [1, 1.03, 1],
                  y: [0, -5, 0],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-4xl font-bold text-white tracking-tighter drop-shadow-md">GS</div>
              </motion.div>
            </div>

            {/* Loading Text and Percentage - Now placed below */}
            <div className="mt-12 flex flex-col items-center">
              <motion.div
                className="text-sm text-gray-600 mb-2"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                LOADING
              </motion.div>
              
              <motion.div
                className="text-2xl font-bold text-gray-800"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                {percentage}%
              </motion.div>
            </div>

            {/* Progress Bar - Simplified and placed at bottom */}
            <div className="w-64 mt-8">
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gray-700"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isLoading && children}
    </>
  );
};

export default Loader;

