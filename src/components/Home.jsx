import React, { useState, useEffect } from 'react';
import { Star, Heart, Phone, MapPin, BookOpen, Users, Award, Sun, Clock, Calendar, Music, Palette, Utensils, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import HeroSection from './HeroSection';


const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [butterflies, setButterflies] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  const [stars, setStars] = useState([]);
  const [clouds, setClouds] = useState([]);

  // Generate random butterflies, bubbles, and stars
  useEffect(() => {
    const generateButterflies = () => {
      const newButterflies = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
      }));
      setButterflies(newButterflies);
    };

    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 20 + Math.random() * 15,
        size: 0.5 + Math.random() * 1.5,
      }));
      setBubbles(newBubbles);
    };

    const generateStars = () => {
      const newStars = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 3 + Math.random() * 4,
      }));
      setStars(newStars);
    };
    
    const generateClouds = () => {
      const newClouds = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 30 + Math.random() * 20,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.4,
      }));
      setClouds(newClouds);
    };
    
    generateButterflies();
    generateBubbles();
    generateStars();
    generateClouds();
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Play-Based Learning",
      description: "Fun activities that make learning exciting for little minds"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Small Class Sizes",
      description: "Individual attention for every precious child"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Qualified Teachers",
      description: "Experienced educators who love working with children"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Safe Environment",
      description: "A secure, loving space where children thrive"
    },
    {
      icon: <Music className="w-8 h-8 text-pink-500" />,
      title: "Music & Movement",
      description: "Rhythm and dance to develop coordination and creativity"
    },
    {
      icon: <Palette className="w-8 h-8 text-yellow-500" />,
      title: "Art Exploration",
      description: "Creative expression through various art mediums"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      message: "My daughter loves going to First Step! The teachers are so caring and patient.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      message: "Amazing school with great facilities. My son has learned so much here!",
      rating: 5
    },
    {
      name: "Sunita Patel",
      message: "The play-based learning approach is perfect for young children. Highly recommend!",
      rating: 5
    },
    {
      name: "Amit Verma",
      message: "The progress my child has made in just a few months is remarkable. Thank you!",
      rating: 5
    }
  ];

  const dailyActivities = [
    { time: "8:00-9:00 AM", activity: "Welcome & Free Play", icon: "🧸" },
    { time: "9:00-9:30 AM", activity: "Circle Time", icon: "🔄" },
    { time: "9:30-10:15 AM", activity: "Learning Activities", icon: "📚" },
    { time: "10:15-10:45 AM", activity: "Snack Time", icon: "🍎" },
    { time: "10:45-11:30 AM", activity: "Outdoor Play", icon: "🌳" },
    { time: "11:30-12:00 PM", activity: "Art & Creativity", icon: "🎨" },
    { time: "12:00-12:30 PM", activity: "Story Time", icon: "📖" },
    { time: "12:30-1:00 PM", activity: "Lunch & Departure", icon: "🍽️" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const Butterfly = ({ x, y, delay, duration }) => (
    <div
      className="absolute opacity-70 animate-bounce"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div className="text-2xl animate-pulse">🦋</div>
    </div>
  );

  const Bubble = ({ x, y, delay, duration, size }) => (
    <div
      className="absolute animate-pulse opacity-50"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `scale(${size})`,
      }}
    >
      <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full animate-float opacity-60"></div>
    </div>
  );

  const TwinkleStar = ({ x, y, delay, duration }) => (
    <div
      className="absolute animate-ping"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div className="text-yellow-300 text-xl">⭐</div>
    </div>
  );

  const FloatingCloud = ({ x, y, delay, duration, size, opacity }) => (
    <div
      className="absolute animate-float"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `scale(${size})`,
        opacity: opacity,
      }}
    >
      <div className="text-5xl">☁️</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 via-green-200 to-yellow-200 overflow-hidden relative">
      {/* Magical Background Elements */}
      
      {/* Multiple Rainbow Arcs - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 border-8 border-red-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-32 -left-32 w-80 h-80 border-8 border-orange-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-44 -left-44 w-64 h-64 border-8 border-yellow-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute top-56 -left-56 w-48 h-48 border-8 border-green-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-68 -left-68 w-32 h-32 border-8 border-blue-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '40s' }}></div>
        <div className="absolute top-80 -left-80 w-16 h-16 border-8 border-purple-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
        
        {/* Right side rainbow */}
        <div className="absolute top-20 -right-20 w-96 h-96 border-8 border-pink-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '22s' }}></div>
        <div className="absolute top-32 -right-32 w-80 h-80 border-8 border-red-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '27s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-44 -right-44 w-64 h-64 border-8 border-orange-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '32s' }}></div>
      </div>

      {/* Floating Butterflies */}
      {butterflies.map((butterfly) => (
        <Butterfly key={butterfly.id} {...butterfly} />
      ))}

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <TwinkleStar key={star.id} {...star} />
      ))}
      
      {/* Floating Clouds */}
      {clouds.map((cloud) => (
        <FloatingCloud key={cloud.id} {...cloud} />
      ))}

      {/* Magical Rainbow Trail - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 opacity-30 animate-pulse"></div>
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-3 bg-gradient-to-r from-purple-400 via-pink-400 via-red-400 via-orange-400 via-yellow-400 via-green-400 to-blue-400 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="hidden md:block absolute bottom-1/4 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-orange-400 via-red-400 via-purple-400 to-pink-400 opacity-25 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Floating Hearts */}
      <div className="absolute top-1/3 left-1/4 animate-bounce text-4xl text-red-400 opacity-60" style={{ animationDelay: '1s' }}>💕</div>
      <div className="absolute top-2/3 right-1/3 animate-bounce text-3xl text-pink-400 opacity-70" style={{ animationDelay: '3s' }}>💖</div>
      <div className="absolute bottom-1/3 left-2/3 animate-bounce text-5xl text-red-300 opacity-50" style={{ animationDelay: '5s' }}>💝</div>

      {/* Magical Sun with Rays */}
      <div className="absolute top-8 right-8">
        <Sun className="w-20 h-20 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute -top-2 -left-2 w-24 h-24 border-4 border-yellow-300 rounded-full animate-ping opacity-30"></div>
      </div>

      {/* Additional stars scattered throughout */}
      <div className="absolute top-10 left-10 text-3xl text-yellow-300 animate-ping" style={{ animationDelay: '0.5s' }}>⭐</div>
      <div className="absolute top-20 right-20 text-2xl text-yellow-300 animate-ping" style={{ animationDelay: '1.2s' }}>⭐</div>
      <div className="absolute top-40 left-1/4 text-3xl text-yellow-300 animate-ping" style={{ animationDelay: '2.1s' }}>⭐</div>
      <div className="absolute top-60 right-1/3 text-4xl text-yellow-300 animate-ping" style={{ animationDelay: '0.8s' }}>⭐</div>
      <div className="absolute bottom-40 left-20 text-3xl text-yellow-300 animate-ping" style={{ animationDelay: '1.7s' }}>⭐</div>
      <div className="absolute bottom-20 right-10 text-2xl text-yellow-300 animate-ping" style={{ animationDelay: '2.5s' }}>⭐</div>
      <div className="absolute top-1/2 left-1/2 text-4xl text-yellow-300 animate-ping" style={{ animationDelay: '0.3s' }}>⭐</div>
      <div className="absolute bottom-1/3 right-1/4 text-3xl text-yellow-300 animate-ping" style={{ animationDelay: '1.9s' }}>⭐</div>

      {/* Additional clouds scattered throughout */}
      <div className="absolute top-15 left-20 text-5xl opacity-40 animate-float" style={{ animationDelay: '3s' }}>☁️</div>
      <div className="absolute top-25 right-30 text-6xl opacity-30 animate-float" style={{ animationDelay: '5s' }}>☁️</div>
      <div className="absolute top-50 left-10 text-4xl opacity-50 animate-float" style={{ animationDelay: '2s' }}>☁️</div>
      <div className="absolute bottom-30 right-20 text-5xl opacity-40 animate-float" style={{ animationDelay: '4s' }}>☁️</div>
      <div className="absolute bottom-10 left-30 text-6xl opacity-30 animate-float" style={{ animationDelay: '6s' }}>☁️</div>
      <div className="absolute top-2/3 left-2/3 text-5xl opacity-50 animate-float" style={{ animationDelay: '1s' }}>☁️</div>
      <div className="absolute bottom-1/4 right-1/3 text-4xl opacity-40 animate-float" style={{ animationDelay: '3.5s' }}>☁️</div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6 leading-tight">
              A Magical World of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                {" "}
                Learning & Fun ✨
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to <b>First Step</b> 🌈 where imagination takes flight 🚀,
              stars twinkle above 🌟, and every child discovers the joy of
              learning through play, music, art & stories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                🌟 Explore Our World
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                🎥 Watch Video Tour
              </button>
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
      {/* <HeroSection/> */}

      {/* Rainbow Dividers Throughout - Hidden on mobile */}
      <div className="relative z-10 hidden md:block">
        <div className="h-4 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 animate-pulse"></div>
        <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 via-red-400 via-orange-400 via-yellow-400 via-green-400 to-blue-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* About Us Section */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">About First Step 🏫</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
             At First Step, we believe that early childhood is a precious journey of growth and discovery. Our caring and inspiring environment helps children build confidence, curiosity, and creativity while developing a strong foundation for the future. With the right guidance, every child here takes their first step towards a lifelong love of learning and success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Our Mission</h3>
              <p className="text-gray-700">To provide a safe, nurturing, and stimulating environment where children can take their first steps toward a lifetime of learning.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Our Vision</h3>
              <p className="text-gray-700">To be the leading preschool that sets the foundation for children to become confident, compassionate, and curious learners.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl mb-4">💫</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Our Philosophy</h3>
              <p className="text-gray-700">We believe that every child is unique and deserves an education that nurtures their individual strengths and interests.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-pink-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Why Choose First Step? 🌟</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer a magical learning experience that sets us apart from other preschools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">A Day at First Step 📅</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our daily schedule is designed to balance structured learning with creative play.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            <div className="grid gap-4">
              {dailyActivities.map((activity, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-3xl mr-4">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-800">{activity.time}</h3>
                    <p className="text-gray-700">{activity.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 bg-gradient-to-br from-purple-100 via-pink-100 via-blue-100 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Happy Parents, Happy Children 
          </h2>
          <div className="text-center text-6xl mb-12">💕🌟💖✨💝</div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300 border-4 border-transparent bg-clip-padding" style={{ backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #f0932b, #eb4d4b, #6c5ce7)' }}>
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-8 italic font-medium">
                "{testimonials[currentSlide].message}"
              </p>
              <p className="font-bold text-purple-800 text-lg">
                - {testimonials[currentSlide].name}
              </p>
            </div>
          </div>
        </div>
      </section>

     <section className="relative z-10 py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">Glimpses of Joy 📸</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6"></div>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Moments of laughter, learning, and discovery at First Step.
      </p>
    </div>

    {/* Image Grid - Only 4 Images */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((item) => (
        <motion.div 
          key={item}
          className="aspect-square rounded-xl shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={`/public/gallery/image${item}.jpg`}  // images: img1.jpg → img4.jpg
            alt={`Gallery ${item}`} 
            className="w-full h-full object-cover"

          />
        </motion.div>
      ))}
    </div>

    {/* Button */}
    <div  className="text-center mt-8">
      <Link to="/gallery">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          View Full Gallery 🖼️
        </button>
      </Link>
    </div>
  </div>
</section>



      {/* Multiple Rainbow Dividers - Hidden on mobile */}
      <div className="relative z-10 hidden md:block">
        <div className="h-3 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
        <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 to-blue-500"></div>
        <div className="h-4 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 via-pink-500 via-red-500 via-orange-500 to-yellow-500 animate-pulse"></div>
      </div>

      {/* Contact & Location */}
      <section className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Our Magical Campus! 🏫</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 mt-1 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Our Location:</p>
                    <p>1st floor shop No.12, Jivdani Sai Appartament,</p>
                    <p>Near Daund Bunglow, Nagindaspada,</p>
                    <p>Nallasopara (East) 401209</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Call us:</p>
                    <p>7387581257 | 9987046650</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Hours:</p>
                    <p>Monday - Friday: 8:00 AM - 1:00 PM</p>
                    <p>Saturday: 9:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Ready to Begin the Journey? 🚀</h3>
                <p className="mb-6">Join the First Step family and watch your child bloom!</p>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Schedule a Visit 📅
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2025 First Step Pre Primary English School. Made with 💖 for little dreamers.
          </p>
         
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Home;