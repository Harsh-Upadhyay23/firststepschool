// PeekingGirl.jsx
import React, { useState, useEffect } from "react";

export default function PeekingGirl() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let timeout;

    // Hide on scroll
    const handleScroll = () => {
      setIsHidden(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsHidden(false), 2000); // 2s baad wapas
    };

    // Hide on cursor near girl
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const screenHeight = window.innerHeight;

      // Agar cursor left bottom corner ke paas hai (0-200px X, bottom 200px Y)
      if (clientX < 200 && clientY > screenHeight - 200) {
        setIsHidden(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setIsHidden(false), 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        .peek-show {
          transform: translateX(-35%); /* bahar face+hand */
          transition: transform 0.25s ease-in-out; /* Fast show */
        }
        .peek-hide {
          transform: translateX(-65%); /* andar chhupi */
          transition: transform 0.25s ease-in-out; /* Fast hide */
        }
      `}</style>

      <div
        className="
          fixed bottom-0 left-0 z-[9999]
          pointer-events-none select-none
        "
        aria-hidden="true"
      >
        <img
          src="/home/girl.webp"  // Public folder path
          alt="Peeking Girl"
          className={`
            block
            h-[160px] sm:h-[200px] md:h-[240px]
            origin-bottom-left
            will-change-transform
            drop-shadow-lg
            ${isHidden ? "peek-hide" : "peek-show"}
          `}
        />
      </div>
    </>
  );
}
