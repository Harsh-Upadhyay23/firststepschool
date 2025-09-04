import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const DailyScheduleSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const dailyActivities = [
    { time: "8:00 AM - 8:30 AM", activity: "Welcome Circle & Morning Songs", icon: "🌅" },
    { time: "8:30 AM - 9:15 AM", activity: "Creative Learning Time", icon: "🎨" },
    { time: "9:15 AM - 10:00 AM", activity: "Outdoor Play & Physical Activities", icon: "⚽" },
    { time: "10:00 AM - 10:30 AM", activity: "Snack Time & Social Skills", icon: "🍎" },
    { time: "10:30 AM - 11:15 AM", activity: "Story Time & Language Development", icon: "📚" },
    { time: "11:15 AM - 12:00 PM", activity: "Music & Movement", icon: "🎵" },
    { time: "12:00 PM - 1:00 PM", activity: "Lunch & Rest Time", icon: "🍽️" },
    { time: "1:00 PM - 1:45 PM", activity: "Art & Craft Activities", icon: "✂️" },
    { time: "1:45 PM - 2:30 PM", activity: "Math & Number Games", icon: "🔢" },
    { time: "2:30 PM - 3:00 PM", activity: "Goodbye Circle & Home Time", icon: "👋" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const sectionElement = document.getElementById('daily-schedule');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 25,
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const activityVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: [1, 1.3, 1.1],
      rotate: [0, 10, -10, 0],
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.section 
      id="daily-schedule"
      className="relative z-10 py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-5"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
      >
        📅
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 text-5xl opacity-5"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          delay: 1,
          ease: "easeInOut"
        }}
      >
        ⏰
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-4xl opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          delay: 2,
          ease: "easeInOut"
        }}
      >
        🎨
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-blue-800 mb-6 relative"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(30, 64, 175, 0.3)",
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(90deg, #1e40af, #7c3aed, #db2777, #1e40af)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Day at First Step
            </motion.span>
            <motion.span
              className="inline-block ml-3"
              animate={{
                rotate: [0, 15, 0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              📅
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isVisible ? 1 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5
            }}
            whileHover={{
              scaleY: 1.5,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed"
            whileHover={{
              scale: 1.02,
              color: "#374151",
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            Our daily schedule is designed to balance 
            <motion.span
              className="text-purple-600 font-bold"
              whileHover={{ scale: 1.1, color: "#7c3aed" }}
            > structured learning </motion.span>
            with 
            <motion.span
              className="text-pink-600 font-bold"
              whileHover={{ scale: 1.1, color: "#db2777" }}
            > creative play</motion.span>
            .
          </motion.p>
        </motion.div>

        {/* Activities Container */}
        <motion.div 
          className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50"
          variants={cardContainerVariants}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            y: -5,
            transition: { type: "spring", stiffness: 300, damping: 30 }
          }}
        >
          <div className="grid gap-6">
            <AnimatePresence>
              {dailyActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden"
                  variants={activityVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: hoveredIndex === index ? 1 : 0.95, 
                      opacity: hoveredIndex === index ? 1 : 0.6 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredIndex === index ? "100%" : "-100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="relative flex items-center p-6 rounded-2xl cursor-pointer"
                    whileHover={{
                      x: 15,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="text-5xl mr-6 relative"
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {activity.icon}
                      
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 text-5xl blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {activity.icon}
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div className="flex-1">
                      <motion.h3 
                        className="font-bold text-xl text-blue-800 mb-2"
                        whileHover={{
                          color: "#7c3aed",
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        {activity.time}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-700 text-lg font-medium"
                        whileHover={{
                          color: "#374151",
                          scale: 1.01,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        {activity.activity}
                      </motion.p>
                    </motion.div>

                    {/* Arrow Indicator */}
                    <motion.div
                      className="text-purple-500 text-2xl ml-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -10
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      →
                    </motion.div>
                  </motion.div>

                  {/* Bottom Border Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Floating Particles */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      scale: 0
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DailyScheduleSection;