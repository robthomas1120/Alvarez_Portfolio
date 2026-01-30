"use client";

import { motion } from "framer-motion";
import { AnimatedShape } from "@/components/animated-shape";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border">


      {/* Decorative labels */}
      <motion.div
        className="absolute top-4 left-4 font-mono text-[10px] tracking-wider text-pink/70 sm:left-6 sm:top-6 sm:text-xs"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="hidden sm:inline">Machine Learning and Data Visualization</span>
        <span className="sm:hidden">ML & Data Viz</span>
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 font-mono text-xl font-bold text-pink sm:right-6 sm:top-6 sm:text-2xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        A7
      </motion.div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-24">
        {/* Top decorative panel - Rob Alvarez name */}
        <motion.div
          className="absolute left-4 top-14 bg-pink px-4 py-2 sm:left-6 sm:top-20 sm:px-6 sm:py-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="font-serif text-xl text-navy-dark sm:text-3xl">Rob Alvarez</span>
        </motion.div>

        {/* Main headline */}
        <div className="relative z-10 text-center">
          <motion.div
            className="mb-4 inline-block border border-pink bg-pink px-4 py-4 sm:px-8 sm:py-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-2xl font-black uppercase tracking-tighter text-navy-dark sm:text-3xl md:text-5xl lg:text-6xl">
              Machine Learning
            </h1>
          </motion.div>

          <motion.h2
            className="mb-4 text-2xl font-black uppercase tracking-tighter text-foreground sm:mb-6 sm:text-3xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            & Data Visualization
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl px-2 text-base text-muted-foreground sm:px-0 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building intelligent systems through deep learning, neural networks,
            and advanced data analytics with production-ready implementations.
          </motion.p>

          {/* Navigation buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#dataviz"
              className="group flex cursor-pointer items-center gap-2 border border-pink bg-pink px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-navy-dark shadow-lg shadow-pink/20 transition-all hover:scale-105 hover:bg-pink/90 hover:shadow-xl hover:shadow-pink/30"
            >
              Data Viz
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="#ml"
              className="group flex cursor-pointer items-center gap-2 border border-border bg-navy-light/50 px-6 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground shadow-lg transition-all hover:scale-105 hover:border-pink hover:text-pink hover:shadow-xl"
            >
              ML
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
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
          className="absolute bottom-4 right-4 hidden items-center gap-4 sm:bottom-6 sm:right-6 sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="h-12 w-12 border border-pink/30 sm:h-16 sm:w-16">
            <div className="grid h-full w-full grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="border border-pink/20" />
              ))}
            </div>
          </div>
          <span className="font-serif text-xl text-pink/70 sm:text-2xl">Data Science</span>
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
