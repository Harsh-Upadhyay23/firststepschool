import React, { useState, useEffect } from 'react';
import { ChevronUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down and track progress
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.pageYOffset;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
          }}
          whileHover={{ 
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Circular progress background */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 301.6 }}
              animate={{ strokeDashoffset: 301.6 - (301.6 * scrollProgress) / 100 }}
              transition={{ duration: 0.2 }}
              style={{ strokeDasharray: 301.6 }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9A8B" />
                <stop offset="50%" stopColor="#f9ca24" />
                <stop offset="100%" stopColor="#6c5ce7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main button content */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
            {/* Sparkle effects */}
            <motion.div
              className="absolute -top-1 -right-1 text-yellow-300"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity }
              }}
            >
              <Sparkles size={10} fill="currentColor" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-1 -left-1 text-pink-200"
              animate={{ 
                rotate: -360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Sparkles size={8} fill="currentColor" />
            </motion.div>
            
            {/* Chevron icon */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUp size={18} className="text-white font-bold" />
            </motion.div>
            
            {/* Tooltip showing scroll percentage */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
              {Math.round(scrollProgress)}% scrolled
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-blue-600 rotate-45"></div>
            </div>
          </div>
          
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white opacity-30"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollUp;