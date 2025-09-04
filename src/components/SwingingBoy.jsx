import React from "react";
import { motion } from "framer-motion";

const SwingingBoy = ({ className = "" }) => {
  return (
    <div className={`relative flex justify-center items-start ${className}`}>
      {/* Boy swinging */}
      <motion.img
        src="/home/boy.png"
        alt="Swinging Boy"
        className="w-40 h-auto origin-top pointer-events-none select-none"
        style={{ background: "transparent" }}
        animate={{
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SwingingBoy;
