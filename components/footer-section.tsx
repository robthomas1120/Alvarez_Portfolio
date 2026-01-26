"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { AnimatedShape } from "@/components/animated-shape";

const systemInfo = [
  { label: "Framework", value: "Next.js 16" },
  { label: "Runtime", value: "Node.js" },
  { label: "Language", value: "TypeScript" },
  { label: "Styling", value: "Tailwind CSS" },
  { label: "Animation", value: "Framer Motion" },
  { label: "Charts", value: "Recharts" },
];

const links = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border bg-navy-mid">
      {/* Section label */}
      <div className="absolute top-6 left-6 font-mono text-xs text-pink">SYSTEM_INFO</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground">
        FOOTER_V1.0
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-pink p-3">
                <span className="font-serif text-2xl text-navy-dark">ML</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">ML and Data Visualization Portfolio</h3>
                <p className="font-mono text-xs text-muted-foreground">v2.0.26</p>
              </div>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Production-ready machine learning solutions with clean, geometric design
              principles. Built for scalability and performance.
            </p>
            <div className="flex gap-4">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="border border-border px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-pink hover:bg-pink/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* System readout */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              System Configuration
            </h4>
            <div className="border border-border bg-navy-dark p-6">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {systemInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="border-l-2 border-pink/30 pl-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-mono text-sm text-foreground">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <Separator className="my-6 bg-border" />

              {/* Status indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse bg-green-400" />
                  <span className="font-mono text-xs text-muted-foreground">
                    All systems operational
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-pink" />
                  <span className="font-mono text-xs text-muted-foreground">
                    GPU: Active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-[#8888ff]" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Models: Loaded
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 ML Portfolio. Designed with geometric precision.
          </p>
          <div className="flex items-center gap-4">
            <AnimatedShape type="star" size={12} delay={0.5} />
            <span className="font-mono text-xs text-pink">CLEAN_GEOMETRY</span>
            <AnimatedShape type="star" size={12} delay={0.7} />
            <span className="font-mono text-xs text-pink">BOLD_GRID</span>
            <AnimatedShape type="star" size={12} delay={0.9} />
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-pink/30" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-pink/30" />
    </footer>
  );
}
