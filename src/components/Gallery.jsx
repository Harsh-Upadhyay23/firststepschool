import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  // Sample media data
  const galleryMedia = [
    { type: 'image', src: '/gallery/image1.jpg', caption: 'Art & Craft Time! 🎨' },
    { type: 'image', src: '/gallery/image2.jpg', caption: 'Story Time Adventures 📚' },
    { type: 'image', src: '/gallery/image3.jpg', caption: 'Playground Fun! 🎪' },
    { type: 'image', src: '/gallery/image4.jpg', caption: 'Learning Through Play 🧩' },
    { type: 'image', src: '/gallery/image5.jpg', caption: 'Music & Dance 🎵' },
    { type: 'image', src: '/gallery/image6.jpg', caption: 'Outdoor Activities 🌳' },
    { type: 'video', src: '/gallery/video1.mp4', caption: 'Daily Activities Video 🎬' },
    { type: 'video', src: '/gallery/video2.mp4', caption: 'Sports Day Highlights ⚽' },
    { type: 'image', src: '/gallery/image7.jpg', caption: 'Science Experiments 🔬' },
    { type: 'image', src: '/gallery/image8.jpg', caption: 'Birthday Celebrations 🎂' },
    { type: 'image', src: '/gallery/image9.jpg', caption: 'Cultural Programs 🎭' },
    { type: 'image', src: '/gallery/image10.jpg', caption: 'Annual Day Performance 🌟' },
  ];

  // Autoplay videos when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      videoRefs.current.forEach((video, index) => {
        if (video && galleryMedia[index].type === 'video') {
          video.muted = true;
          video.play().catch(e => console.log("Autoplay prevented:", e));
        }
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const openModal = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % galleryMedia.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(galleryMedia[nextIndex]);
    setIsPlaying(false);
  };

  const prevMedia = () => {
    const prevIndex = currentIndex === 0 ? galleryMedia.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedMedia(galleryMedia[prevIndex]);
    setIsPlaying(false);
  };

  // Function to handle video play in modal
  const togglePlay = () => {
    if (selectedMedia.type === 'video') {
      const video = document.querySelector('.modal-video');
      if (video) {
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-yellow-200 relative overflow-hidden">
      {/* Floating geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-random opacity-20 ${
              i % 4 === 0 ? 'bg-white rounded-full' :
              i % 4 === 1 ? 'bg-pink-300 rounded-lg transform rotate-45' :
              i % 4 === 2 ? 'bg-purple-300 rounded-full' :
              'bg-blue-300 transform rotate-12'
            }`}
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full animate-particle-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${Math.random() * 8 + 6}s`
            }}
          />
        ))}
      </div>
      
      {/* Rainbow divider with wave animation */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 animate-wave"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header with enhanced animations */}
        <div className="text-center mb-16 animate-slide-in-from-top">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-6 animate-gradient-x py-3">
            Our Magical Moments 
            <Sparkles className="inline-block animate-sparkle ml-3 text-purple-600" size={48} />
          </h1>
          <p className="text-xl text-gray-700 mb-4 animate-fade-in-delayed">
            Capturing precious memories of learning, playing & growing together! 
          </p>
          
          {/* Animated icon row */}
          <div className="flex justify-center space-x-6 mb-8">
            <Star className="w-8 h-8 text-yellow-500 animate-spin-slow" />
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce-rhythm" />
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg animate-wiggle-continuous" />
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 transform rotate-45 animate-pulse-slow" />
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-scale-bounce" />
            <Sparkles className="w-8 h-8 text-indigo-500 animate-twinkle" />
          </div>
          
          {/* Enhanced decorative border */}
          <div className="max-w-2xl mx-auto h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full animate-gradient-flow mb-8 shadow-lg"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryMedia.map((media, index) => (
            <div
              key={index}
              className="group relative bg-white p-3 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer border-4 border-transparent hover:border-pink-300 animate-fade-in-up hover:animate-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(media, index)}
            >
              {/* Floating sparkles on hover */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="animate-sparkle-float">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl">
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    alt={media.caption}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                ) : (
                  <div className="relative w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={media.src}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white drop-shadow-lg animate-pulse-play" />
                    </div>
                  </div>
                )}
                
                {/* Overlay with floating geometric shapes */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Floating shapes */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute animate-float-shapes ${
                        i % 3 === 0 ? 'w-3 h-3 bg-pink-300 rounded-full' :
                        i % 3 === 1 ? 'w-2 h-2 bg-yellow-300 transform rotate-45' :
                        'w-2 h-2 bg-blue-300 rounded-full'
                      }`}
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`
                      }}
                    />
                  ))}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white font-semibold text-sm text-center animate-slide-up">{media.caption}</p>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <div className="p-2 text-center">
                <p className="font-semibold text-gray-700 text-sm transition-colors duration-300 group-hover:text-purple-600">{media.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-modal-appear">
          <div className="relative max-w-4xl max-h-full w-full animate-modal-scale">
            {/* Media content */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl relative animate-glow-subtle">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 bg-black/70 text-white hover:bg-black/90 transition-all duration-300 rounded-full p-2 hover:scale-110 animate-pulse-subtle"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 hover:scale-110 animate-float-left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 hover:scale-110 animate-float-right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.caption}
                  className="w-full max-h-[70vh] object-contain animate-image-reveal"
                />
              ) : (
                <div className="relative">
                  <video
                    src={selectedMedia.src}
                    className="w-full max-h-[70vh] object-contain modal-video"
                    muted={true}
                    autoPlay
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <div 
                      className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                      onClick={togglePlay}
                    >
                      <button
                        className="bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-300 animate-play-button-pulse hover:scale-110"
                      >
                        <Play className="w-12 h-12 text-purple-600" />
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Caption */}
              <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 animate-caption-slide">
                <h3 className="text-xl font-bold text-center text-gray-800">
                  {selectedMedia.caption}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0) scaleX(1); }
          33% { transform: translateX(-10px) scaleX(1.1); }
          66% { transform: translateX(10px) scaleX(0.9); }
        }
        @keyframes sparkle {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 1; }
          25% { transform: rotate(90deg) scale(1.2); opacity: 0.7; }
          50% { transform: rotate(180deg) scale(0.8); opacity: 1; }
          75% { transform: rotate(270deg) scale(1.1); opacity: 0.8; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        @keyframes bounceRhythm {
          0%, 100% { transform: translateY(0) scale(1); }
          25% { transform: translateY(-10px) scale(1.1); }
          50% { transform: translateY(-20px) scale(1); }
          75% { transform: translateY(-5px) scale(0.95); }
        }
        @keyframes wiggleContinuous {
          0%, 100% { transform: rotate(-5deg) scale(1); }
          25% { transform: rotate(5deg) scale(1.05); }
          50% { transform: rotate(-3deg) scale(1); }
          75% { transform: rotate(3deg) scale(0.98); }
        }
        @keyframes scaleBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatRandom {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(-3deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(2deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        @keyframes particleFloat {
          0% { transform: translateY(0px) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes slideInFromTop {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInDelayed {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.6), 0 0 40px rgba(236, 72, 153, 0.3); }
        }
        @keyframes sparkleFloat {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }
        @keyframes floatShapes {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes modalAppear {
          0% { opacity: 0; backdrop-filter: blur(0px); }
          100% { opacity: 1; backdrop-filter: blur(10px); }
        }
        @keyframes modalScale {
          0% { transform: scale(0.8) rotate(-1deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes glowSubtle {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.2); }
        }
        @keyframes pulseSubtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes floatLeft {
          0%, 100% { transform: translateX(0) translateY(-50%); }
          50% { transform: translateX(-5px) translateY(-50%); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateX(0) translateY(-50%); }
          50% { transform: translateX(5px) translateY(-50%); }
        }
        @keyframes imageReveal {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes playButtonPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(147, 51, 234, 0); }
        }
        @keyframes captionSlide {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulsePlay {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 1.5s ease-in-out infinite; }
        .animate-bounce-rhythm { animation: bounceRhythm 2s ease-in-out infinite; }
        .animate-wiggle-continuous { animation: wiggleContinuous 1.5s ease-in-out infinite; }
        .animate-scale-bounce { animation: scaleBounce 1s ease-in-out infinite; }
        .animate-gradient-flow { 
          background-size: 200% 200%;
          animation: gradientFlow 4s ease infinite;
        }
        .animate-float-random { animation: floatRandom 8s ease-in-out infinite; }
        .animate-particle-float { animation: particleFloat 12s linear infinite; }
        .animate-slide-in-from-top { animation: slideInFromTop 0.8s ease-out; }
        .animate-fade-in-delayed { 
          animation: fadeInDelayed 1s ease-out 0.3s both;
        }
        .animate-glow:hover { animation: glow 2s ease-in-out infinite; }
        .animate-sparkle-float { animation: sparkleFloat 2s ease-in-out infinite; }
        .animate-float-shapes { animation: floatShapes 4s ease-in-out infinite; }
        .animate-slide-up { animation: slideUp 0.3s ease-out; }
        .animate-modal-appear { animation: modalAppear 0.3s ease-out; }
        .animate-modal-scale { animation: modalScale 0.4s ease-out; }
        .animate-glow-subtle { animation: glowSubtle 3s ease-in-out infinite; }
        .animate-pulse-subtle { animation: pulseSubtle 2s ease-in-out infinite; }
        .animate-float-left { animation: floatLeft 2s ease-in-out infinite; }
        .animate-float-right { animation: floatRight 2s ease-in-out infinite; }
        .animate-image-reveal { animation: imageReveal 0.5s ease-out; }
        .animate-play-button-pulse { animation: playButtonPulse 2s infinite; }
        .animate-caption-slide { animation: captionSlide 0.5s ease-out 0.2s both; }
        .animate-pulse-play { animation: pulsePlay 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Gallery;