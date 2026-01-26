"use client";

import { motion } from "framer-motion";
import { AnimatedShape } from "@/components/animated-shape";
import { Separator } from "@/components/ui/separator";

const focusAreas = [
  {
    code: "ML_01",
    title: "Deep Learning",
    description:
      "Neural network architectures including CNNs, RNNs, Transformers, and attention mechanisms for complex pattern recognition tasks.",
  },
  {
    code: "ML_02",
    title: "Computer Vision",
    description:
      "Image classification, object detection, semantic segmentation, and generative models for visual data processing.",
  },
  {
    code: "DV_01",
    title: "Data Visualization",
    description:
      "Creating compelling and interactive data visualizations to communicate complex information clearly and effectively.",
  },
  {
    code: "DV_02",
    title: "Data Storytelling",
    description:
      "Transforming complex datasets into engaging narratives that drive decisions and inspire action.",
  },
];

export function AboutSection() {
  return (
    <section className="relative border-b border-border py-24">
      {/* Section labels */}
      <div className="absolute top-6 left-6 font-mono text-xs text-pink">ABOUT</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground">
        SECTION_01
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 grid gap-8 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="bg-pink px-3 py-1 font-mono text-sm text-navy-dark">A20</span>
              <Separator className="flex-1 bg-border" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Focus Areas & Expertise
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground">
              Specializing in end-to-end machine learning pipelines, from data collection
              and preprocessing to model deployment and monitoring in production environments.
            </p>
          </div>
        </motion.div>

        {/* Focus areas grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.code}
              className="group relative border border-border bg-card p-6 transition-colors hover:border-pink hover:bg-pink/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Corner markers */}
              <div className="absolute -top-px -left-px h-3 w-3 border-t border-l border-pink opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -top-px -right-px h-3 w-3 border-t border-r border-pink opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-pink opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-pink opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Code label */}
              <div className="absolute top-3 right-3 font-mono text-xs text-pink">
                {area.code}
              </div>

              {/* Arrow indicator */}
              <motion.div
                className="absolute bottom-3 right-3 opacity-0 transition-opacity group-hover:opacity-100"
                initial={{ x: -5 }}
                whileHover={{ x: 0 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--pink)"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>

              <div className="pr-12">
                <h3 className="mb-2 text-lg font-bold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative banner */}
        <motion.div
          className="mt-16 border border-border bg-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
            <div className="flex items-center gap-6">
              <div className="hidden md:block">
                <AnimatedShape type="saturn" size={100} delay={0.5} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Geometric Grids Sharp Contrast
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                  Dynamic Shape <span className="text-pink">A20</span>
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-serif text-4xl text-pink">Machine Learning</span>
              <div className="hidden h-20 w-px bg-border md:block" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground [writing-mode:vertical-lr]">
                Next Grid
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
