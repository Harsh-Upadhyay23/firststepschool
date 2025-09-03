import React from "react";
import { motion } from "framer-motion";
import flyer from "../assets/flyer.jpg"; // flyer image jo aapne diya tha

const Home = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="relative text-center p-10">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={flyer}
          alt="School Flyer"
          className="mx-auto rounded-3xl shadow-2xl w-4/5 md:w-2/3 border-8 border-white"
        />
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 mt-8"
        >
          First Step Pre Primary School
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-xl md:text-2xl text-gray-700"
        >
          Nurturing Little Minds, Building Big Futures 🌈
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition"
        >
          🚀 Apply Now
        </motion.button>
      </section>

      {/* Admission Info */}
      <section className="p-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-70 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">
            Admissions Open 2025-26 🎉
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Play Group • Nursery • Jr. Kg • Sr. Kg
          </p>
          <p className="text-2xl font-bold text-green-700">
            Pay Only ₹100 & Get Admission FREE
          </p>
          <p className="mt-4 text-lg text-gray-800">
            🎒 Free School Bag • 📚 Free Books • 🎁 Welcome Kit
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="p-12">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          Why Parents Love Us 💖
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Expert Teachers", emoji: "👩‍🏫", color: "from-pink-200 to-yellow-200" },
            { title: "Fun Activities", emoji: "🎨", color: "from-green-200 to-blue-200" },
            { title: "Safe Campus", emoji: "🛡️", color: "from-purple-200 to-pink-200" },
            { title: "Play-Based Learning", emoji: "🧩", color: "from-yellow-200 to-green-200" },
            { title: "Parent Updates", emoji: "📢", color: "from-blue-200 to-pink-200" },
            { title: "Affordable Fees", emoji: "💰", color: "from-orange-200 to-yellow-200" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${item.color} p-8 rounded-3xl shadow-xl text-center`}
            >
              <div className="text-5xl">{item.emoji}</div>
              <h3 className="mt-4 text-2xl font-bold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-12 text-center bg-gradient-to-r from-blue-100 to-yellow-100">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">Contact Us 📞</h2>
        <p className="text-xl font-semibold">7387581257 / 9987046650</p>
        <p className="mt-2 text-lg">
          1st Floor, Shop No.12, Jivdani Sai Appartment, <br />
          Near Daund Bunglow, Nagindaspada, Nallasopara (East) 401209
        </p>
      </section>
    </div>
  );
};

export default Home;
