import React from "react";
import Threadeffect from "../effect/Threadeffect.jsx";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animations
import { TextRevealCard } from "../effect/Textreveal.js";

function Hero() {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <section className="pt-28 min-h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TextRevealCard
            text={
              <>
                <span className="text-4xl sm:text-5xl font-bold">
                  Welcome to PixelFusion
                </span>
              </>
            }
            revealText={
              <>
                <span className="text-4xl sm:text-5xl font-bold">
                  Welcome to PixelFusion
                </span>
                <br />
              </>
            }
          />
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-lg md:text-xl text-white max-w-xl mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xl sm:text-2xl text-[#e0e0e0] font-medium">
            Where creativity meets cutting-edge tech.
          </span>
          <br />
          <span className="text-xl sm:text-2xl text-[#e0e0e0] font-medium">
            Building experiences that move minds and markets.
          </span>
        </motion.p>

        <Threadeffect />

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop} // Trigger scroll to top on click
          className="mt-10 bg-white text-black p-4 rounded-full shadow-md hover:scale-110 transition duration-300 hover:bg-yellow-400 hover:text-white"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </section>
    </div>
  );
}

export default Hero;
