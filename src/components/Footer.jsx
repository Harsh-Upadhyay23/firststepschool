import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-white py-6">
      <div className="container mx-auto px-4 text-center space-y-3">
        
        <p className="text-lg font-semibold flex flex-wrap items-center justify-center gap-2">
          © 2025 First Step Pre Primary English School. Made with 
          <Heart className="w-5 h-5 text-red-200 animate-pulse" fill="red" />
          for little dreamers.
        </p>

        <div className="flex items-center justify-center gap-3 text-base">
          <span>Crafted by <strong>Harsh Upadhyay</strong></span>
          <a
            href="https://github.com/Harsh-Upadhyay23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-yellow-100 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
