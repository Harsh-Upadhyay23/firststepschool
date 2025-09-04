import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-white py-6">
      <div className="container mx-auto px-4 text-center space-y-3">

        {/* ---------- COPYRIGHT & HEART ---------- */}
        <p className="text-lg font-semibold flex flex-col sm:flex-row items-center justify-center gap-2">
          © 2025 First Step Pre Primary English School.
          <span className="flex items-center gap-1 justify-center">
            Made with 
            <Heart className="w-5 h-5 text-red-200 animate-pulse" fill="red" />
            for little dreamers.
          </span>
        </p>

        {/* ---------- DESIGNED & DEVELOPED BY WITH GITHUB ICON ---------- */}
        <p className="text-base flex items-center justify-center gap-2">
          Developed by{' '}
          <a
            href="https://github.com/Harsh-Upadhyay23"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-white hover:underline hover:text-gray-200 transition-colors duration-300 flex items-center gap-1"
          >
            Harsh-Upadhyay23
            <Github className="w-4 h-4" />
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
