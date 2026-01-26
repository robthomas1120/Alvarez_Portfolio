"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const gridOffsetX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const gridOffsetY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Main grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: gridOffsetX,
          y: gridOffsetY,
        }}
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-small"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="var(--grid-line)"
                strokeWidth="1.2"
              />
            </pattern>
            <pattern
              id="grid-large"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              <rect width="160" height="160" fill="url(#grid-small)" />
              <path
                d="M 160 0 L 0 0 0 160"
                fill="none"
                stroke="var(--grid-line)"
                strokeWidth="2.0"
              />
            </pattern>
          </defs>
          <rect width="200%" height="200%" fill="url(#grid-large)" />
        </svg>
      </motion.div>

      {/* Diagonal lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="var(--pink)"
          strokeWidth="1.5"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="var(--pink)"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="0"
          x2="100%"
          y2="50%"
          stroke="var(--pink)"
          strokeWidth="1.5"
        />
        <line
          x1="0"
          y1="50%"
          x2="50%"
          y2="100%"
          stroke="var(--pink)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Corner markers */}
      <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-pink opacity-30" />
      <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-pink opacity-30" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-pink opacity-30" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-pink opacity-30" />
    </div>
  );
}
