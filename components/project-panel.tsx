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
  analysisUrl?: string;
  dashboardUrl?: string;
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
          className="group relative cursor-pointer border border-border bg-card p-4 pt-8 transition-colors hover:border-pink hover:bg-pink/5 sm:p-6 sm:pt-6"
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
            <div className="absolute top-2 left-4 font-mono text-[10px] text-muted-foreground sm:left-6 sm:top-3 sm:text-xs">
              {project.dateTag}
            </div>
          )}

          {/* Code label */}
          <div className={`absolute top-2 right-2 font-mono text-[10px] text-pink sm:right-3 sm:top-3 sm:text-xs ${project.dateTag ? '' : ''}`}>
            {project.code}
          </div>

          {/* Content */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="mb-1 text-base font-bold tracking-tight text-foreground sm:text-lg">
                {project.name}
              </h3>
              <p className="text-xs text-muted-foreground sm:text-sm">{project.description}</p>
            </div>

            <Separator className="bg-border" />

            <div className="grid grid-cols-1 gap-2 font-mono text-xs sm:grid-cols-2">
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

      <DialogContent className="max-h-[85vh] max-w-[95vw] overflow-y-auto scrollbar-hidden border-pink bg-navy-dark p-4 text-foreground sm:max-w-2xl sm:p-6">
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
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="border border-border p-3 sm:p-4">
              <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Dataset
              </h4>
              <p className="text-sm text-foreground sm:text-base">{project.dataset}</p>
              {project.datasetDescription && (
                <p className="mt-1 text-xs text-muted-foreground">{project.datasetDescription}</p>
              )}
            </div>
            <div className="border border-border p-3 sm:p-4">
              <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {project.modelLabel || 'Model'}
              </h4>
              <p className="text-sm text-foreground sm:text-base">{project.model}</p>
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

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            className="border-border text-foreground hover:border-pink hover:bg-pink/10 bg-transparent"
            asChild
          >
            <a href={project.analysisUrl || "#"} target="_blank" rel="noopener noreferrer">
              View Notebook
            </a>
          </Button>
          <Button className="bg-pink text-navy-dark hover:bg-pink-dark" asChild>
            <a href={project.dashboardUrl || "#"} target="_blank" rel="noopener noreferrer">
              View Dashboard
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
