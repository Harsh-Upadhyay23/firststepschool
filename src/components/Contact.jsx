import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; 

const Contact = () => {
  const [butterflies, setButterflies] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  const [stars, setStars] = useState([]);
  const [clouds, setClouds] = useState([]);

  // Generate random butterflies, bubbles, and stars
  useEffect(() => {
    const generateButterflies = () => {
      const newButterflies = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
      }));
      setButterflies(newButterflies);
    };

    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 12 }, (_, i) => ({
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
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 3 + Math.random() * 4,
      }));
      setStars(newStars);
    };

    const generateClouds = () => {
      const newClouds = Array.from({ length: 15 }, (_, i) => ({
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

  const contactInfo = [
    {
      icon: '📞',
      title: "Call Us",
      details: ["+91 73875 81257", "+91 99870 46650"],
      color: "from-blue-500 to-purple-500",
      animation: "bounce"
    },
    {
      icon: '✉️',
      title: "Email Us",
      details: ["upawan15011996@gmail.com"],
      color: "from-purple-500 to-pink-500",
      animation: "pulse"
    },
    {
      icon: '📍',
      title: "Visit Us",
      details: ["1st floor, Jivdani Sai Apartment", "Near Daund Bunglow, Nagindaspada", "Nallasopara (East) - 401209"],
      color: "from-pink-500 to-red-500",
      animation: "tada"
    },
    {
      icon: '🕒',
      title: "School Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "from-red-500 to-yellow-500",
      animation: "heartBeat"
    }
  ];

  const faqs = [
    {
      question: "What is the admission process?",
      answer: "Simply schedule a visit, meet our team, and complete the enrollment form. We'll guide you through each step."
    },
    {
      question: "Do you provide meals?",
      answer: "Yes! We provide nutritious, balanced meals and snacks prepared in our hygienic kitchen with parent input on dietary requirements."
    },
    {
      question: "What safety measures do you have?",
      answer: "CCTV monitoring, secure entry systems, first-aid trained staff, and comprehensive safety protocols ensure your child's wellbeing."
    },
    {
      question: "How do you communicate with parents?",
      answer: "Regular parent-teacher meetings, daily reports, monthly newsletters, and a parent app keep you connected with your child's progress."
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden relative">
      {/* Magical Background Elements */}
      {butterflies.map((butterfly) => (
        <Butterfly key={butterfly.id} {...butterfly} />
      ))}

      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}

      {stars.map((star) => (
        <TwinkleStar key={star.id} {...star} />
      ))}

      {clouds.map((cloud) => (
        <FloatingCloud key={cloud.id} {...cloud} />
      ))}

      {/* Floating Hearts */}
      <div className="absolute top-1/3 left-1/4 animate-bounce text-4xl text-red-400 opacity-60" style={{ animationDelay: '1s' }}>💕</div>
      <div className="absolute top-2/3 right-1/3 animate-bounce text-3xl text-pink-400 opacity-70" style={{ animationDelay: '3s' }}>💖</div>
      <div className="absolute bottom-1/3 left-2/3 animate-bounce text-5xl text-red-300 opacity-50" style={{ animationDelay: '5s' }}>💝</div>

      {/* Additional stars scattered throughout */}
      <div className="absolute top-10 left-10 text-3xl text-yellow-300 animate-ping" style={{ animationDelay: '0.5s' }}>⭐</div>
      <div className="absolute top-20 right-20 text-2xl text-yellow-300 animate-ping" style={{ animationDelay: '1.2s' }}>⭐</div>
      <div className="absolute top-40 left-1/4 text-3xl text-yellow-300 animate-ping" style={{ animationDelay: '2.1s' }}>⭐</div>
      <div className="absolute top-60 right-1/3 text-4xl text-yellow-300 animate-ping" style={{ animationDelay: '0.8s' }}>⭐</div>
      <div className="absolute bottom-40 left-20 text-3xl text-yellow-300 animate-ping" style={{ animationDelay: '1.7s' }}>⭐</div>
      <div className="absolute bottom-20 right-10 text-2xl text-yellow-300 animate-ping" style={{ animationDelay: '2.5s' }}>⭐</div>

      {/* Additional clouds scattered throughout */}
      <div className="absolute top-15 left-20 text-5xl opacity-40 animate-float" style={{ animationDelay: '3s' }}>☁️</div>
      <div className="absolute top-25 right-30 text-6xl opacity-30 animate-float" style={{ animationDelay: '5s' }}>☁️</div>
      <div className="absolute top-50 left-10 text-4xl opacity-50 animate-float" style={{ animationDelay: '2s' }}>☁️</div>
      <div className="absolute bottom-30 right-20 text-5xl opacity-40 animate-float" style={{ animationDelay: '4s' }}>☁️</div>
      <div className="absolute bottom-10 left-30 text-6xl opacity-30 animate-float" style={{ animationDelay: '6s' }}>☁️</div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full text-blue-800 font-medium mb-6 shadow-md"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-blue-800"
          >
            Ready to Begin Your Child's
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Amazing Journey?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            We'd love to meet you and your little one! Visit us to see our facilities
            and learn how First Step can nurture your child's growth and development.
          </motion.p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl text-white mb-4 mx-auto`}
              >
                {info.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-center text-blue-800 mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    className="text-center text-gray-700"
                  >
                    {detail}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>




        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-2">
            Frequently Asked Questions
          </h3>
          <p className="text-center text-gray-700 mb-8">
            Quick answers to common parent questions
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What teaching methods do you follow?",
                answer: "We follow play-based and activity-driven learning, focusing on creativity, social skills, and overall development."
              },
              {
                question: "Do you organize events or celebrations?",
                answer: "Yes, we celebrate festivals, birthdays, and cultural events to encourage social bonding and learning."
              },
              {
                question: "Is there a uniform?",
                answer: "Yes, children are required to wear the school uniform for regular classes and events."
              },
              {
                question: "How can parents communicate with teachers?",
                answer: "Parents can connect with teachers during scheduled meetings or by prior appointment. Updates are also shared through phone and messages."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    className="mr-3 text-2xl"
                  >
                    ❓
                  </motion.span>
                  {faq.question}
                </h4>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Call to Action */}
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-5xl mb-6"
          >
            🌟
          </motion.div>
          <h3 className="text-3xl font-bold text-blue-800 mb-4">
            Join the First Step Family Today!
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Give your child the best start in life. Our caring team is ready to welcome you both
            into our nurturing learning community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+917387581257"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/917387581257?text=Hello%20I%20am%20interested%20in%20admission%20query."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp Us
            </motion.a>
            <motion.a
              href="https://maps.app.goo.gl/Gv4i9vHjt3k2VNfy9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-500 text-blue-500 py-4 px-8 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <span className="mr-2">📍</span>
              Get Directions
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0, -12px, 0); }
          70% { transform: translate3d(0, -7px, 0); }
          90% { transform: translate3d(0, -3px, 0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes tada {
          0% { transform: scale(1); }
          10%, 20% { transform: scale(0.9) rotate(-3deg); }
          30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
          40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
          100% { transform: scale(1) rotate(0); }
        }
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.1); }
          70% { transform: scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animate-tada {
          animation: tada 2s infinite;
        }
        .animate-heartBeat {
          animation: heartBeat 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;