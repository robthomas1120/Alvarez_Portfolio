"use client";

import { motion } from "framer-motion";
import { ProjectPanel } from "@/components/project-panel";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    id: "dv1",
    name: "Real-time Analytics Dashboard",
    code: "VIZ_01",
    dataset: "Live Streaming Data",
    model: "D3.js + WebSocket",
    description:
      "Interactive dashboard visualizing real-time metrics with animated transitions and drill-down capabilities.",
    longDescription:
      "A comprehensive real-time analytics dashboard built with D3.js and WebSocket connections for live data streaming. Features include animated transitions, interactive drill-downs, customizable time ranges, and responsive layouts optimized for various screen sizes.",
    metrics: [
      { label: "FPS", value: "60", tooltip: "Consistent frame rate" },
      { label: "Latency", value: "50ms", tooltip: "Data to render time" },
      { label: "Charts", value: "12+", tooltip: "Visualization types" },
    ],
    technologies: ["D3.js", "WebSocket", "React", "Canvas API", "SVG"],
    features: [
      "Live data streaming with WebSocket",
      "Smooth animated transitions between states",
      "Interactive tooltips and legends",
      "Export to PNG/SVG/PDF formats",
    ],
  },
  {
    id: "dv2",
    name: "Geospatial Mapping Platform",
    code: "VIZ_02",
    dataset: "OpenStreetMap + Custom",
    model: "Mapbox GL + Deck.gl",
    description:
      "Large-scale geospatial visualization with clustering, heatmaps, and 3D terrain rendering.",
    longDescription:
      "An advanced geospatial visualization platform capable of rendering millions of data points efficiently. Combines Mapbox GL for base maps with Deck.gl for high-performance WebGL-powered overlays including heatmaps, hexbin aggregations, and 3D extrusions.",
    metrics: [
      { label: "Points", value: "10M+", tooltip: "Rendered data points" },
      { label: "Layers", value: "15", tooltip: "Overlay layer types" },
      { label: "Zoom", value: "0-22", tooltip: "Zoom level range" },
    ],
    technologies: ["Mapbox GL", "Deck.gl", "Turf.js", "GeoJSON", "PostGIS"],
    features: [
      "GPU-accelerated point clustering",
      "3D terrain and building extrusions",
      "Custom shader-based heatmaps",
      "Isochrone and route visualization",
    ],
  },
  {
    id: "dv3",
    name: "Network Graph Explorer",
    code: "VIZ_03",
    dataset: "Knowledge Graphs",
    model: "Force-directed Layout",
    description:
      "Interactive network visualization for exploring complex relationships and hierarchies.",
    longDescription:
      "A sophisticated network graph visualization tool designed for exploring complex relational data. Uses force-directed layouts with WebGL acceleration for smooth interactions with large graphs containing thousands of nodes and edges.",
    metrics: [
      { label: "Nodes", value: "50K", tooltip: "Maximum node count" },
      { label: "Edges", value: "200K", tooltip: "Maximum edge count" },
      { label: "Layouts", value: "8", tooltip: "Layout algorithms" },
    ],
    technologies: ["Sigma.js", "Graphology", "WebGL", "Web Workers", "IndexedDB"],
    features: [
      "Multiple layout algorithms",
      "Community detection visualization",
      "Path finding and highlighting",
      "Node clustering and grouping",
    ],
  },
  {
    id: "dv4",
    name: "Financial Data Visualization",
    code: "VIZ_04",
    dataset: "Market Data APIs",
    model: "TradingView + Custom",
    description:
      "Professional-grade financial charts with technical indicators and pattern recognition.",
    longDescription:
      "A comprehensive financial visualization suite featuring candlestick charts, technical indicators, and pattern recognition overlays. Supports real-time data feeds and historical analysis with customizable timeframes and drawing tools.",
    metrics: [
      { label: "Indicators", value: "50+", tooltip: "Technical indicators" },
      { label: "Timeframes", value: "15", tooltip: "Chart timeframes" },
      { label: "Symbols", value: "10K+", tooltip: "Supported instruments" },
    ],
    technologies: ["Lightweight Charts", "TA-Lib", "WebSocket", "IndexedDB", "Canvas"],
    features: [
      "Real-time price streaming",
      "Custom indicator scripting",
      "Pattern recognition overlays",
      "Multi-chart synchronized views",
    ],
  },
  {
    id: "dv5",
    name: "Scientific Data Plotter",
    code: "VIZ_05",
    dataset: "Research Datasets",
    model: "Plotly + Observable",
    description:
      "Publication-ready scientific visualizations with statistical annotations and error bars.",
    longDescription:
      "A scientific plotting library designed for researchers and data scientists. Produces publication-quality figures with support for statistical annotations, error bars, confidence intervals, and LaTeX labels. Exports to vector formats for print.",
    metrics: [
      { label: "Plot Types", value: "40+", tooltip: "Visualization types" },
      { label: "Export", value: "6", tooltip: "Export formats" },
      { label: "Themes", value: "12", tooltip: "Publication themes" },
    ],
    technologies: ["Plotly", "Observable Plot", "LaTeX", "SVG", "PDF Export"],
    features: [
      "Statistical annotation overlays",
      "Error bars and confidence bands",
      "LaTeX mathematical labels",
      "Vector export for publication",
    ],
  },
  {
    id: "dv6",
    name: "3D Data Visualization Engine",
    code: "VIZ_06",
    dataset: "Volumetric Data",
    model: "Three.js + WebGPU",
    description:
      "Immersive 3D visualizations for volumetric data, point clouds, and scientific simulations.",
    longDescription:
      "A cutting-edge 3D visualization engine leveraging Three.js and WebGPU for rendering complex volumetric data, point clouds, and scientific simulations. Supports VR/AR viewing modes and collaborative exploration.",
    metrics: [
      { label: "Vertices", value: "100M", tooltip: "Maximum vertex count" },
      { label: "FPS", value: "60", tooltip: "Target frame rate" },
      { label: "VR", value: "Yes", tooltip: "VR support" },
    ],
    technologies: ["Three.js", "WebGPU", "WebXR", "WASM", "Compute Shaders"],
    features: [
      "Volume rendering with transfer functions",
      "Point cloud streaming and LOD",
      "VR/AR immersive viewing",
      "GPU-accelerated particle systems",
    ],
  },
];

export function DataVizProjectsSection() {
  return (
    <section className="relative border-b border-border py-24">
      {/* Section labels */}
      <div className="absolute top-6 left-6 font-mono text-xs text-pink">DATA VISUALIZATIONS</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground">
        SECTION_02
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
            <span className="bg-pink px-3 py-1 font-mono text-sm text-navy-dark">VIZ</span>
            <Separator className="max-w-32 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Data Visualization Projects
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Data Visualization
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Interactive visualization tools and dashboards for exploring complex datasets,
            from real-time analytics to immersive 3D experiences.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectPanel key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
