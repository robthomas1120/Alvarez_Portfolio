"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedShapeProps {
  type: "saturn" | "hemisphere" | "orbit" | "star";
  className?: string;
  size?: number;
  delay?: number;
}

export function AnimatedShape({
  type,
  className = "",
  size = 100,
  delay = 0,
}: AnimatedShapeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  if (type === "saturn") {
    return (
      <motion.div
        ref={ref}
        className={`relative ${className}`}
        style={{ width: size, height: size, y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay }}
      >
        {/* Planet body */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink"
          style={{
            width: size * 0.5,
            height: size * 0.5,
            borderRadius: "50%",
          }}
        />
        {/* Ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-pink"
          style={{
            width: size,
            height: size * 0.3,
            borderRadius: "50%",
            rotate,
          }}
        />
        {/* Second ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-pink/50"
          style={{
            width: size * 1.2,
            height: size * 0.35,
            borderRadius: "50%",
          }}
        />
      </motion.div>
    );
  }

  if (type === "hemisphere") {
    return (
      <motion.div
        ref={ref}
        className={`relative ${className}`}
        style={{ width: size, height: size * 0.6, y }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
      >
        <svg
          viewBox="0 0 200 120"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wireframe hemisphere */}
          <ellipse
            cx="100"
            cy="100"
            rx="90"
            ry="30"
            stroke="var(--pink)"
            strokeWidth="2.5"
          />
          {/* Vertical lines */}
          {[...Array(9)].map((_, i) => {
            const x = 20 + i * 20;
            const height = Math.sqrt(1 - Math.pow((x - 100) / 90, 2)) * 80;
            return (
              <path
                key={`v-${i}`}
                d={`M ${x} 100 Q ${x} ${100 - height} ${x} ${100 - height}`}
                stroke="var(--pink)"
                strokeWidth="1.5"
                opacity="0.5"
              />
            );
          })}
          {/* Horizontal arcs */}
          {[20, 40, 60].map((offset, i) => (
            <ellipse
              key={`h-${i}`}
              cx="100"
              cy={100 - offset}
              rx={90 * Math.cos(Math.asin(offset / 80))}
              ry={30 * Math.cos(Math.asin(offset / 80))}
              stroke="var(--pink)"
              strokeWidth="1.5"
              opacity="0.5"
            />
          ))}
        </svg>
      </motion.div>
    );
  }

  if (type === "orbit") {
    return (
      <motion.div
        ref={ref}
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay }}
      >
        <motion.div
          className="absolute inset-0 border border-pink/50"
          style={{ borderRadius: "50%", rotate }}
        />
        <div
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-pink"
          style={{ borderRadius: "50%" }}
        />
      </motion.div>
    );
  }

  if (type === "star") {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="var(--pink)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
        </svg>
      </motion.div>
    );
  }

  return null;
}
