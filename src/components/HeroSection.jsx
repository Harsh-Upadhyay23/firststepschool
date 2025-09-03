import React from 'react';
import { motion } from "framer-motion";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative z-10 container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              A Magical World of
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mt-2"
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
              Learning & Fun <motion.span
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >✨</motion.span>
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.span
              className="text-gray-800"
            >
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
            <motion.span
              className="text-gray-800"
            >
              where imagination takes flight{' '}
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              🚀
            </motion.span>
            <motion.span
              className="text-gray-800"
            >
              , stars twinkle above{' '}
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              🌟
            </motion.span>
            <motion.span
              className="text-gray-800"
            >
              , and every child discovers the joy of learning through play, music, art & stories.
            </motion.span>
          </motion.p>

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

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
                🌈
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;