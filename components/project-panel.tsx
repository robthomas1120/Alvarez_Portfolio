"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MetricBadge } from "@/components/metric-badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ProjectMetric {
  label: string;
  value: string | number;
  tooltip?: string;
}

interface ProjectData {
  id: string;
  name: string;
  code: string;
  dataset: string;
  datasetDescription?: string;
  model: string;
  modelLabel?: string;
  description: string;
  longDescription: string;
  subtitle?: string;
  dateTag?: string;
  metrics: ProjectMetric[];
  metricsLabel?: string;
  technologies: string[];
  features: string[];
}

interface ProjectPanelProps {
  project: ProjectData;
  index: number;
}

export function ProjectPanel({ project, index }: ProjectPanelProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className="group relative cursor-pointer border border-border bg-card p-6 transition-colors hover:border-pink hover:bg-pink/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Corner markers */}
          <div className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-pink opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-pink opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-pink opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-pink opacity-0 transition-opacity group-hover:opacity-100" />

          {/* Date tag (top-left) */}
          {project.dateTag && (
            <div className="absolute top-3 left-6 font-mono text-xs text-muted-foreground">
              {project.dateTag}
            </div>
          )}

          {/* Code label */}
          <div className={`absolute top-3 right-3 font-mono text-xs text-pink ${project.dateTag ? '' : ''}`}>
            {project.code}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-lg font-bold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>

            <Separator className="bg-border" />

            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <div>
                <span className="text-muted-foreground">DATASET:</span>
                <p className="text-foreground">{project.dataset}</p>
              </div>
              <div>
                <span className="text-muted-foreground">{project.modelLabel || 'MODEL'}:</span>
                <p className="text-foreground">{project.model}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.metrics.slice(0, 3).map((metric) => (
                <MetricBadge
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  variant="highlight"
                  compact
                />
              ))}
            </div>
          </div>

          {/* Animated indicator */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-pink"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl border-pink bg-navy-dark text-foreground">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <span className="border border-pink bg-pink/10 px-2 py-1 font-mono text-xs text-pink">
              {project.code}
            </span>
            <DialogTitle className="text-xl font-bold">{project.name}</DialogTitle>
          </div>
          {project.subtitle && (
            <p className="text-sm text-pink/80 italic">{project.subtitle}</p>
          )}
          {project.dateTag && (
            <p className="text-xs font-mono text-muted-foreground">{project.dateTag}</p>
          )}
          <DialogDescription className="text-muted-foreground">
            {project.longDescription}
          </DialogDescription>
        </DialogHeader>

        <Separator className="bg-border" />

        <div className="space-y-6">
          {/* Dataset & Model */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border p-4">
              <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Dataset
              </h4>
              <p className="text-foreground">{project.dataset}</p>
              {project.datasetDescription && (
                <p className="mt-1 text-xs text-muted-foreground">{project.datasetDescription}</p>
              )}
            </div>
            <div className="border border-border p-4">
              <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {project.modelLabel || 'Model'}
              </h4>
              <p className="text-foreground">{project.model}</p>
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {project.metricsLabel || 'Performance Metrics'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <MetricBadge
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  tooltip={metric.tooltip}
                  variant="highlight"
                />
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-2 py-1 font-mono text-xs text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="h-1 w-1 bg-pink" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            className="border-border text-foreground hover:border-pink hover:bg-pink/10 bg-transparent"
          >
            View Code
          </Button>
          <Button className="bg-pink text-navy-dark hover:bg-pink-dark">
            Live Demo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
