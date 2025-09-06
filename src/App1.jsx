import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";          
import AdmissionInfo from "./components/AdmissionInfo"; 
import Contact from "./components/Contact";   
import ScrollToTop from "./components/ScrollToTop";
import Programs from "./components/Programs"

import Gallery from "./components/Gallery";
import ScrollUp from "./components/ScrollUp";
import ActivitiesPage from "./components/ActivitiesPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollUp/>
        <ScrollToTop /> 
      {/* Background Component */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
      
      </div>

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
      <Footer/>
    </Router>
  );
}

export default App;
