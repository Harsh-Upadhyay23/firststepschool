// import React, { useEffect, useRef, useState } from "react";
// import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

// const ButterflyFollower = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const butterflyRef = useRef(null);

//   // Motion values for smooth following
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Spring config (smooth following)
//   const springConfig = { stiffness: 50, damping: 15, mass: 0.5 };

//   // Smooth spring animations
//   const springX = useSpring(mouseX, springConfig);
//   const springY = useSpring(mouseY, springConfig);

//   // Floating offset (butterfly always stays a bit away)
//   const butterflyX = useTransform(
//     springX,
//     (value) => value + Math.sin(Date.now() * 0.001) * 30 + 40 // +40 = extra gap from cursor
//   );
//   const butterflyY = useTransform(
//     springY,
//     (value) => value + Math.cos(Date.now() * 0.001) * 25 - 40 // -40 = stays slightly above
//   );

//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const newX = e.clientX;
//       const newY = e.clientY;

//       mouseX.set(newX);
//       mouseY.set(newY);

//       if (mousePosition.x !== 0 && mousePosition.y !== 0) {
//         const deltaX = newX - mousePosition.x;
//         const deltaY = newY - mousePosition.y;
//         const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//         setRotation(angle);
//       }

//       setMousePosition({ x: newX, y: newY });
//       setIsVisible(true);
//     };

//     const handleMouseLeave = () => setIsVisible(false);
//     const handleMouseEnter = () => setIsVisible(true);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);
//     window.addEventListener("mouseenter", handleMouseEnter);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//       window.removeEventListener("mouseenter", handleMouseEnter);
//     };
//   }, [mousePosition, mouseX, mouseY]);

//   return (
//     <>
//       {/* 🦋 Butterfly */}
//       <motion.div
//         ref={butterflyRef}
//         className="fixed pointer-events-none z-[9999] w-40 h-40" // w-28 h-28 => bigger size
//         style={{
//           x: butterflyX,
//           y: butterflyY,
//           left: -48, // adjusted offset for bigger size
//           top: -48,
//         }}
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{
//           scale: isVisible ? 1 : 0,
//           opacity: isVisible ? 1 : 0,
//           rotate: rotation,
//         }}
//         transition={{
//           scale: { type: "spring", stiffness: 300, damping: 20 },
//           opacity: { duration: 0.3 },
//           rotate: { type: "spring", stiffness: 100, damping: 10 },
//         }}
//       >
//         <motion.img
//           src="/home/fly.gif" // ✅ public/home/fly.gif
//           alt="butterfly"
//           className="w-full h-full object-contain z-50"
//           animate={{
//             scale: [1, 1.15, 1], // little bigger scaling
//             rotate: [0, 10, -10, 0],
//           }}
//           transition={{
//             duration: 0.8,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//       </motion.div>
//     </>
//   );
// };

// export default ButterflyFollower;

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";

const ButterflyFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const butterflyRef = useRef(null);

  // Motion values for smooth following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config (smooth following)
  const springConfig = { stiffness: 50, damping: 15, mass: 0.5 };

  // Smooth spring animations
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Floating offset (desktop only)
  const butterflyX = useTransform(
    springX,
    (value) => value + Math.sin(Date.now() * 0.001) * 30 + 40
  );
  const butterflyY = useTransform(
    springY,
    (value) => value + Math.cos(Date.now() * 0.001) * 25 - 40
  );

  const [rotation, setRotation] = useState(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () =>
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );
    setIsMobile(checkMobile());
  }, []);

  // 🖥️ Desktop: follow cursor
  useEffect(() => {
    if (isMobile) return; // Skip on mobile

    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;

      mouseX.set(newX);
      mouseY.set(newY);

      if (mousePosition.x !== 0 && mousePosition.y !== 0) {
        const deltaX = newX - mousePosition.x;
        const deltaY = newY - mousePosition.y;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle);
      }

      setMousePosition({ x: newX, y: newY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mousePosition, mouseX, mouseY, isMobile]);

  // 📱 Mobile: continuous random flying
  const [mobilePos, setMobilePos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    if (!isMobile) return;

    setIsVisible(true); // always visible on mobile

    const interval = setInterval(() => {
      const newX = Math.random() * (window.innerWidth - 120);
      const newY = Math.random() * (window.innerHeight - 120);
      setMobilePos({ x: newX, y: newY });
      setRotation(Math.random() * 360); // Random rotation
    }, 2500); // every 2.5s

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      {/* 🦋 Butterfly */}
      <motion.div
        ref={butterflyRef}
        className="fixed pointer-events-none z-[9999] w-32 h-32"
        style={
          isMobile
            ? { x: mobilePos.x, y: mobilePos.y }
            : {
                x: butterflyX,
                y: butterflyY,
                left: -48,
                top: -48,
              }
        }
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
          rotate: rotation,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.3 },
          rotate: { type: "spring", stiffness: 100, damping: 10 },
          x: { type: "spring", stiffness: 30, damping: 20 },
          y: { type: "spring", stiffness: 30, damping: 20 },
        }}
      >
        <motion.img
          src="/home/fly.gif"
          alt="butterfly"
          className="w-full h-full object-contain z-50"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
};

export default ButterflyFollower;
