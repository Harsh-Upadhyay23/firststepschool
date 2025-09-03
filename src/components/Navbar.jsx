import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ React Router Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="School Logo" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
            <h1 className="text-2xl font-extrabold tracking-wide text-white drop-shadow-sm">
              First Step School
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-semibold">
            <li>
              <Link to="/home" className="hover:text-yellow-100 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/20">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-100 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/20">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-yellow-100 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/20">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/activities" className="hover:text-yellow-100 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/20">
                Activities
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-100 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/20">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg focus:outline-none hover:bg-white/20 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="w-8 h-8 text-purple-700" />
          </button>
        </div>

        {/* School branding */}
        <div className="px-6 py-4 border-b border-white/30">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="School Logo" className="w-10 h-10 rounded-full border-2 border-purple-400 shadow-md" />
            <h2 className="text-xl font-bold text-purple-700">First Step School</h2>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <div className="px-6 py-8 space-y-6">
          <Link 
            to="/home" 
            className="block text-xl font-semibold text-purple-700 hover:text-pink-600 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/40 border-l-4 border-transparent hover:border-pink-400"
            onClick={() => setIsOpen(false)}
          >
            🏠 Home
          </Link>
          <Link 
            to="/gallery" 
            className="block text-xl font-semibold text-purple-700 hover:text-pink-600 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/40 border-l-4 border-transparent hover:border-pink-400"
            onClick={() => setIsOpen(false)}
          >
            🖼️ Gallery
          </Link>
          <Link 
            to="/programs" 
            className="block text-xl font-semibold text-purple-700 hover:text-pink-600 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/40 border-l-4 border-transparent hover:border-pink-400"
            onClick={() => setIsOpen(false)}
          >
            📚 Programs
          </Link>
          <Link 
            to="/activities" 
            className="block text-xl font-semibold text-purple-700 hover:text-pink-600 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/40 border-l-4 border-transparent hover:border-pink-400"
            onClick={() => setIsOpen(false)}
          >
            🎉 Activities
          </Link>
          <Link 
            to="/contact" 
            className="block text-xl font-semibold text-purple-700 hover:text-pink-600 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/40 border-l-4 border-transparent hover:border-pink-400"
            onClick={() => setIsOpen(false)}
          >
            📞 Contact
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-6 left-6 text-4xl opacity-20">
          ⭐🌈🎨
        </div>
        <div className="absolute bottom-20 right-6 text-3xl opacity-20">
          🚀🎭🎪
        </div>
      </div>
    </>
  );
};

export default Navbar;
