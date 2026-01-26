"use client";

import { motion } from "framer-motion";
import { AnimatedShape } from "@/components/animated-shape";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border">


      {/* Decorative labels */}
      <motion.div
        className="absolute top-6 left-6 font-mono text-xs tracking-wider text-pink/70"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Machine Learning and Data Visualization
      </motion.div>

      <motion.div
        className="absolute top-6 right-6 font-mono text-2xl font-bold text-pink"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        A7
      </motion.div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24">
        {/* Top decorative panel */}
        <motion.div
          className="absolute top-20 left-6 hidden bg-pink px-6 py-4 md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="font-serif text-3xl text-navy-dark">Rob Alvarez</span>
        </motion.div>

        {/* Main headline */}
        <div className="relative z-10 text-center">
          <motion.div
            className="mb-4 inline-block border border-pink bg-pink px-8 py-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl font-black uppercase tracking-tighter text-navy-dark md:text-5xl lg:text-6xl">
              Machine Learning
            </h1>
          </motion.div>

          <motion.h2
            className="mb-6 text-3xl font-black uppercase tracking-tighter text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            & Data Visualization
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building intelligent systems through deep learning, neural networks,
            and advanced data analytics with production-ready implementations.
          </motion.p>

          {/* Labels */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="border border-pink bg-pink px-4 py-2 font-mono text-xl font-bold text-navy-dark">
              A8
            </span>
            <span className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Bold Grid
            </span>
            <span className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Clean Geometry
            </span>
          </motion.div>
        </div>

        {/* Saturn shape - right side */}
        <motion.div
          className="absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatedShape type="saturn" size={180} />
        </motion.div>

        {/* Hemisphere shape - bottom left */}
        <motion.div
          className="absolute bottom-20 left-10 hidden md:block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AnimatedShape type="hemisphere" size={150} delay={0.5} />
        </motion.div>

        {/* Star decorations */}
        <AnimatedShape
          type="star"
          size={16}
          className="absolute top-40 right-1/4"
          delay={1}
        />
        <AnimatedShape
          type="star"
          size={12}
          className="absolute bottom-1/3 left-1/4"
          delay={1.2}
        />
        <AnimatedShape
          type="star"
          size={20}
          className="absolute top-1/3 left-1/3"
          delay={1.4}
        />

        {/* Bottom grid section indicator */}
        <motion.div
          className="absolute bottom-6 right-6 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="h-16 w-16 border border-pink/30">
            <div className="grid h-full w-full grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border border-pink/20" />
              ))}
            </div>
          </div>
          <span className="font-serif text-2xl text-pink/70">Data Science</span>
        </motion.div>

        {/* Diagonal line decoration */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 opacity-50"
          viewBox="0 0 100 100"
        >
          <line x1="0" y1="100" x2="100" y2="0" stroke="var(--pink)" strokeWidth="1" />
          <line x1="0" y1="70" x2="70" y2="0" stroke="var(--pink)" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
