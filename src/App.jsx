import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";          
import AdmissionInfo from "./components/AdmissionInfo"; 
import Contact from "./components/Contact";   
import ScrollToTop from "./components/ScrollToTop";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import ScrollUp from "./components/ScrollUp";
import ActivitiesPage from "./components/ActivitiesPage";
import Footer from "./components/Footer";

// 🎨 Cute Preschool Loader Component
function FirstStepLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-yellow-100 to-blue-200">
      {/* School Title */}
      <h1 className="text-4xl font-extrabold text-pink-600 mb-6 animate-bounce">
        🏫 First Step Preschool
      </h1>

      {/* Animated bouncing balls */}
      <div className="flex space-x-3">
        <div className="w-5 h-5 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-yellow-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-lg text-gray-700 font-medium animate-pulse">
        Learning is Fun... Please wait 😊
      </p>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader ko 2 sec tak dikhane ke liye (ya tum assets load hone tak bhi use kar sakte ho)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Loader jab tak loading true hai
  if (loading) {
    return <FirstStepLoader />;
  }

  // Main Website
  return (
    <Router>
      <ScrollUp />
      <ScrollToTop /> 

      {/* Background Component */}
      <div className="fixed top-0 left-0 w-full h-full -z-10"></div>

      {/* Foreground Components */}
      <Navbar />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<AdmissionInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
