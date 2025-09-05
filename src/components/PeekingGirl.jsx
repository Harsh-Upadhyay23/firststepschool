// PeekingGirl.jsx
import React, { useState, useEffect } from "react";

export default function PeekingGirl() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Hide on scroll (only while scrolling)
    let scrollTimer;
    const handleScroll = () => {
      setIsHidden(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsHidden(false), 100); // jese hi scroll rukta hai turant bahar
    };

    // Hide on cursor near girl (only while cursor is close)
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const screenHeight = window.innerHeight;

      if (clientX < 200 && clientY > screenHeight - 200) {
        setIsHidden(true); // cursor paas → hide
      } else {
        setIsHidden(false); // cursor dur → turant show
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
          transition: transform 0.25s ease-in-out;
        }
        .peek-hide {
          transform: translateX(-65%); /* andar chhupi */
          transition: transform 0.25s ease-in-out;
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
          src="/home/girl.webp"
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
