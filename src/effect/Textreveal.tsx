"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "./cn";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(100); // Show full revealText initially
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(width);
    }
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(100); // Reset to full reveal
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    const clientX = event.touches[0].clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      ref={cardRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] w-full max-w-4xl rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="relative flex items-center overflow-hidden min-h-[10rem] sm:min-h-[12rem] md:min-h-[16rem]">
        {/* Reveal text layer */}
        <motion.div
          style={{ width: "100%" }}
          animate={{
            opacity: widthPercentage > 0 ? 1 : 0,
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          transition={{ duration: isMouseOver ? 0 : 0.4 }}
          className="absolute bg-[#1d1c20] z-20 will-change-transform"
        >
          <p
            style={{ textShadow: "4px 4px 15px rgba(0,0,0,0.5)" }}
            className="text-lg sm:text-3xl md:text-4xl py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
          >
            {revealText}
          </p>
        </motion.div>

        {/* Drag line */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={{ duration: isMouseOver ? 0 : 0.4 }}
          className="h-full w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        {/* Main text */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-lg sm:text-3xl md:text-4xl py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

// Title
export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg sm:text-xl mb-2", className)}>
      {children}
    </h2>
  );
};

// Description
export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm sm:text-base", className)}>
      {children}
    </p>
  );
};

// Stars background
const Stars = () => {
  const generateRandom = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random(),
    duration: Math.random() * 10 + 10,
  });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {Array.from({ length: 80 }).map((_, i) => {
        const { top, left, opacity, duration } = generateRandom();
        return (
          <motion.span
            key={i}
            initial={{ opacity }}
            animate={{
              top,
              left,
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "50%",
              zIndex: 1,
            }}
          />
        );
      })}
    </div>
  );
};

// ✅ Proper memoization here
const MemoizedStars = memo(Stars);
