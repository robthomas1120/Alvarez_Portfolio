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
    subtitle: "Academic performance analytics built during a Data Analyst internship at UST.",
    dataset: "Student Academic Performance Data",
    datasetDescription: "Multi-semester grades across colleges, courses, and students.",
    model: "Trend, Gap & Drill-down Analysis",
    modelLabel: "INSIGHT ENGINE",
    description:
      "Interactive dashboards for analyzing student performance across colleges, courses, and individual students with drill-down capabilities.",
    longDescription:
      "Built during a UST internship, this Looker Studio platform visualizes academic data from college-wide trends down to individual students, with trend analysis, gap identification, and at-risk flagging.",
    metrics: [
      { label: "Students analyzed", value: "30K+", tooltip: "Total students in dataset" },
      { label: "Subjects tracked", value: "100+", tooltip: "Academic subjects covered" },
      { label: "All Colleges", value: "✓", tooltip: "Coverage across all colleges" },
      { label: "Dashboards built", value: "5+", tooltip: "Interactive dashboards created" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Excel", "Tableau Prep", "Looker Studio"],
    features: [
      "Drill-down dashboards from college → course → student level",
      "Trend and gap analysis with at-risk student flagging",
      "Data cleaned and standardized via Tableau Prep",
      "Insights delivered directly to faculty",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
  {
    id: "dv2",
    name: "Metro Manila Traffic Analytics Dashboard",
    code: "VIZ_02",
    dateTag: "Sep 2025 – Present",
    subtitle: "Traffic monitoring and violation analytics platform for MMDA with executive-ready Power BI dashboards.",
    dataset: "Metro Manila Traffic Camera Analytics",
    datasetDescription: "Traffic camera data covering plate recognition, vehicle detection, and violations across Metro Manila.",
    model: "Trend, Gap & Drill-down Analysis",
    modelLabel: "INSIGHT ENGINE",
    description:
      "Performance dashboards for traffic cameras across Metro Manila with drill-down analysis by location, time, and violation type.",
    longDescription:
      "Built for MMDA, this Power BI platform monitors traffic cameras across Metro Manila — tracking plate recognition accuracy, violation validity, system gaps, and false positives to support operational and policy decisions.",
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
      "Drill-down dashboards by location, time, and violation type",
      "Accuracy monitoring for plate recognition and violation detection",
      "Flags system gaps, false positives, and improvement areas",
      "Executive-ready Power BI reports for MMDA decision-making",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
  {
    id: "dv3",
    name: "AromaData: Urban Cafe Analytics",
    code: "VIZ_03",
    dateTag: "Jan 2026 – Jan 2026",
    subtitle: "ELT pipeline turning messy retail logs into clean, interactive Looker Studio BI dashboards.",
    dataset: "Transactional Retail Logs (Kaggle)",
    datasetDescription: "Raw retail transaction data requiring cleaning and normalization.",
    model: "ELT Pipeline & Normalization",
    modelLabel: "PROCESS",
    description:
      "Data engineering pipeline transforming dirty retail data into actionable business intelligence dashboards.",
    longDescription:
      "Full data lifecycle project — ingests messy retail logs, applies automated schema validation and relational modeling, and delivers interactive Looker Studio BI dashboards with drill-down analytics.",
    metrics: [
      { label: "Data Quality", value: "99.8%", tooltip: "Post-cleaning data accuracy" },
      { label: "Records", value: "12K+", tooltip: "Processed transaction records" },
      { label: "Latency", value: "< 2s", tooltip: "Dashboard drill-down speed" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "SQL", "Looker Studio", "Pandas", "Data Cleaning"],
    features: [
      "Schema Validation: Automated handling of nulls, date inconsistencies, and currency errors",
      "Drill-Down Analytics: Looker Studio dashboards for regional and product-level deep-dives",
      "Relational Modeling: Flat CSVs converted into optimized SQL tables",
      "Anomaly Detection: Flags outlier transactions and 'UNKNOWN' data points for review",
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
            Data Visualization Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Interactive dashboards and analytics tools for exploring complex real-world datasets.
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
