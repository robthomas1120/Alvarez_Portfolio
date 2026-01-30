"use client";

import { motion } from "framer-motion";
import { ProjectPanel } from "@/components/project-panel";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    id: "dv1",
    name: "Student Performance Analytics Dashboard",
    code: "VIZ_01",
    dateTag: "Jan 2025 – Apr 2025",
    subtitle: "Academic performance insights from a Data Analyst internship at UST",
    dataset: "Student Academic Performance Data",
    datasetDescription: "Multi-semester student grades across colleges, courses, subjects, and students",
    model: "Trend, Gap & Drill-down Analysis",
    modelLabel: "INSIGHT ENGINE",
    description:
      "Interactive dashboards for analyzing student performance across colleges, courses, and individual students with drill-down capabilities.",
    longDescription:
      "A comprehensive student performance analytics platform developed during a Data Analyst internship at UST. Features interactive dashboards built with Looker Studio for exploring academic data across multiple granularity levels—from college-wide trends down to individual student performance. Includes trend analysis, gap identification, and at-risk student identification using cleaned and standardized datasets.",
    metrics: [
      { label: "Students analyzed", value: "30K+", tooltip: "Total students in dataset" },
      { label: "Subjects tracked", value: "100+", tooltip: "Academic subjects covered" },
      { label: "All Colleges", value: "✓", tooltip: "Coverage across all colleges" },
      { label: "Dashboards built", value: "5+", tooltip: "Interactive dashboards created" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Excel", "Tableau Prep", "Looker Studio"],
    features: [
      "Interactive dashboards across colleges, courses, and individual students",
      "Drill-down analysis (college → course → student)",
      "Trend, gap, and at-risk student identification",
      "Cleaned and standardized datasets using Tableau Prep",
      "Actionable insights provided to faculty",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
  {
    id: "dv2",
    name: "Metro Manila Traffic Analytics Dashboard",
    code: "VIZ_02",
    dateTag: "Sep 2025 – Present",
    subtitle: "Data-driven traffic monitoring and violation analysis platform for MMDA, integrating camera analytics, system performance evaluation, and decision-ready dashboards.",
    dataset: "Metro Manila Traffic Camera Analytics",
    datasetDescription: "Large-scale traffic camera data covering vehicle detection, plate recognition, and traffic violations across Metro Manila.",
    model: "Trend, Gap & Drill-down Analysis",
    modelLabel: "INSIGHT ENGINE",
    description:
      "Performance dashboards for traffic cameras across Metro Manila with drill-down analysis by location, time, and violation type.",
    longDescription:
      "A comprehensive traffic analytics platform developed for MMDA, featuring performance dashboards that monitor traffic cameras across Metro Manila. Includes accuracy monitoring for plate recognition and violation detection, identification of system gaps and false positives, and executive-ready Power BI dashboards supporting operational and policy decision-making.",
    metrics: [
      { label: "Plate Recognition", value: "97%", tooltip: "Plate recognition accuracy" },
      { label: "Violation Validity", value: "90%", tooltip: "Violation validity rate" },
      { label: "Valid Violations", value: "87%", tooltip: "Valid violations captured" },
      { label: "Camera Uptime", value: "99%", tooltip: "System uptime" },
      { label: "Locations", value: "100+", tooltip: "Locations covered" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "SQL", "Power BI"],
    features: [
      "Performance dashboards for traffic cameras across Metro Manila",
      "Drill-down analysis by location, time, and violation type",
      "Accuracy monitoring for plate recognition and violation detection",
      "Identification of system gaps, false positives, and improvement areas",
      "Data-driven insights communicated through executive-ready Power BI dashboards",
      "Analytics supporting operational and policy decision-making for MMDA",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
  {
    id: "dv3",
    name: "AromaData: Urban Cafe Analytics",
    code: "VIZ_03",
    dateTag: "Jan 2026 – Jan 2026",
    subtitle: "An end-to-end data engineering and visualization pipeline that transforms fragmented, 'dirty' retail logs into high-fidelity business intelligence dashboards.",
    dataset: "Transactional Retail Logs (Kaggle)",
    datasetDescription: "Raw retail transaction data requiring extensive cleaning and normalization.",
    model: "ELT Pipeline & Normalization",
    modelLabel: "PROCESS",
    description:
      "Data engineering pipeline transforming dirty retail data into actionable business intelligence dashboards.",
    longDescription:
      "A comprehensive data engineering and visualization project that demonstrates the full data lifecycle—from ingesting messy, fragmented retail logs to delivering polished, interactive business intelligence dashboards. Features automated schema validation, relational data modeling, and advanced drill-down analytics in Looker Studio.",
    metrics: [
      { label: "Data Quality", value: "99.8%", tooltip: "Post-cleaning data accuracy" },
      { label: "Records", value: "12K+", tooltip: "Processed transaction records" },
      { label: "Latency", value: "< 2s", tooltip: "Dashboard drill-down speed" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "SQL", "Looker Studio", "Pandas", "Data Cleaning"],
    features: [
      "Automated Schema Validation: Programmatic handling of null values, date inconsistencies, and currency formatting errors",
      "Advanced Drill-Down Analytics: Interactive Looker Studio dashboards allowing for deep-dives into regional and product-level performance",
      "Relational Data Modeling: Converting flat CSV files into optimized SQL tables for efficient querying",
      "Anomaly Detection: Identifying and flagging outlier transactions and 'UNKNOWN' data points for manual review",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
];

export function DataVizProjectsSection() {
  return (
    <section id="dataviz" className="relative border-b border-border py-16 pt-12 sm:py-24 sm:pt-24">
      {/* Section labels */}
      <div className="absolute top-4 left-4 font-mono text-xs text-pink sm:left-6 sm:top-6">DATA VIZ</div>
      <div className="absolute top-4 right-4 hidden font-mono text-xs text-muted-foreground sm:right-6 sm:top-6 sm:block">
        SECTION_02
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="bg-pink px-3 py-1 font-mono text-sm text-navy-dark">VIZ</span>
            <Separator className="max-w-32 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Data Visualization Projects
            </span>
          </div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Data Visualization
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Interactive visualization tools and dashboards for exploring complex datasets,
            from real-time analytics to immersive 3D experiences.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectPanel key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
