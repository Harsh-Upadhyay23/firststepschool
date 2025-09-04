import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Enhanced Video Modal Component
const VideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative bg-black rounded-2xl overflow-hidden w-full max-w-4xl mx-4 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
              }
            }}
            exit={{ 
              scale: 0.9, 
              opacity: 0,
              transition: { duration: 0.2 }
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Professional Close Button */}
            <motion.button
              className="absolute -top-12 right-0 text-white text-3xl z-10 bg-gray-800 bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
              onClick={handleClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3 }
              }}
            >
              ×
            </motion.button>
            
            {/* Professional Video Container */}
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                autoPlay
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/gallery/welcome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Loading/Play overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5 
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-10 h-10 text-blue-600 ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="text-center md:text-left">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-blue-900 font-extrabold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <span className="text-5xl md:text-7xl">FIRST STEP</span>
              </motion.div>

              <motion.div
                className="text-blue-800 text-xl md:text-3xl font-semibold mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Pre Primary English School
              </motion.div>

              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mt-4"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 3,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% auto' }}
              >
                A Magical World of Learning & Fun
                <motion.span
                  animate={{ rotate: [0, 15, 0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  ✨
                </motion.span>
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.span className="text-gray-800">
                Welcome to{' '}
              </motion.span>
              <motion.b 
                className="text-blue-600"
                animate={{ textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)"
                ]}}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              >
                First Step
              </motion.b>{' '}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                🌈
              </motion.span>{' '}
              <motion.span className="text-gray-800">
                where imagination takes flight{' '}
              </motion.span>
              <motion.span
                className="inline-block"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              >
                🚀
              </motion.span>
              <motion.span className="text-gray-800">
                , stars twinkle above{' '}
              </motion.span>
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                🌟
              </motion.span>
              <motion.span className="text-gray-800">
                , and every child discovers the joy of learning through play, music, art & stories.
              </motion.span>
            </motion.p>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  🌟
                </motion.span>{' '}
                Explore Our World
              </motion.button>

              <motion.button 
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                whileHover={{ 
                  backgroundColor: "#3b82f6",
                  color: "white",
                  scale: 1.05
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={() => setIsVideoOpen(true)}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  🎥
                </motion.span>{' '}
                Watch Video Tour
              </motion.button>
            </div>
          </div>

          {/* RIGHT SIDE: PROGRAMS CARD */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link to="/programs">
              <div className="bg-gradient-to-br from-yellow-200 to-pink-200 p-6 rounded-3xl shadow-2xl transform hover:rotate-1 hover:scale-105 transition-all duration-500">
                <div className="bg-white p-5 rounded-2xl text-center">
                  <motion.h3 
                    className="text-2xl font-bold text-blue-800 mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, 0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                      className="inline-block mr-2"
                    >
                      🎓
                    </motion.span>
                    Our Programs
                  </motion.h3>

                  <div className="space-y-3">
                    {[
                      "Play Group",
                      "Nursery",
                      "Junior KG",
                      "Senior KG",
                    ].map((program, index) => (
                      <motion.div
                        key={program}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg font-semibold text-md shadow-md flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.2, 
                          duration: 0.5,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(255, 228, 225, 0.5)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.span
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                          className="mr-2"
                        >
                          ✨
                        </motion.span>
                        {program}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    className="absolute -top-2 -right-2 text-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  >
                    ⭐
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 text-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </>
  );
};

export default HeroSection;