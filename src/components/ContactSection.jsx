import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <section className="relative z-10 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="grid lg:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Contact Information */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Visit Our Magical Campus! 🏫
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
                whileHover={cardHover}
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg mb-2">Our Location:</p>
                  <p className="text-gray-600">1st floor shop No.12, Jivdani Sai Appartament,</p>
                  <p className="text-gray-600">Near Daund Bunglow, Nagindaspada,</p>
                  <p className="text-gray-600">Nallasopara (East) 401209</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-blue-100"
                whileHover={cardHover}
                variants={itemVariants}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg mb-2">Call us:</p>
                  <p className="text-gray-600 text-xl font-medium">7387581257 | 9987046650</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-pink-100"
                whileHover={cardHover}
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg mb-2">Hours:</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-pink-200 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-bl-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-tr-full opacity-10"></div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Ready to Begin the Journey? 🚀
              </motion.h3>
              
              <motion.p 
                className="mb-8 text-gray-600 text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Join the First Step family and watch your child bloom!
              </motion.p>
              
              <motion.button
                onClick={() => {
                  window.open(
                    "https://wa.me/917387581257?text=Hello%20I%20would%20like%20to%20schedule%20a%20visit%20to%20the%20school.",
                    "_blank"
                  );
                }}
                className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(to right, #ec4899, #8b5cf6)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Schedule a Visit 📅
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;