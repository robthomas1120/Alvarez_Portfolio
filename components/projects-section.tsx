"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export function ProjectsSection() {
  return (
    <section className="relative border-b border-border py-24">
      {/* Section labels */}
      <div className="absolute top-6 left-6 font-mono text-xs text-pink">ML</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground">
        SECTION_03
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="bg-pink px-3 py-1 font-mono text-sm text-navy-dark">ML</span>
            <Separator className="max-w-32 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Machine Learning Projects
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Machine Learning Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A collection of production-ready machine learning implementations spanning
            computer vision, natural language processing, and time series analysis.
          </p>
        </motion.div>

        {/* Coming Soon placeholder */}
        <motion.div
          className="flex flex-col items-center justify-center border border-dashed border-border py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 border border-pink bg-pink/10 px-4 py-2">
            <span className="font-mono text-sm text-pink">COMING SOON</span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-foreground">Projects in Development</h3>
          <p className="max-w-md text-center text-sm text-muted-foreground">
            Machine learning projects are currently being developed. Check back soon for updates on computer vision, NLP, and predictive modeling work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

