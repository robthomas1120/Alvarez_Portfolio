"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Cell,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Training Loss Data
const trainingData = [
  { epoch: 1, loss: 2.5, val_loss: 2.8 },
  { epoch: 2, loss: 2.1, val_loss: 2.4 },
  { epoch: 3, loss: 1.7, val_loss: 2.0 },
  { epoch: 4, loss: 1.4, val_loss: 1.7 },
  { epoch: 5, loss: 1.1, val_loss: 1.4 },
  { epoch: 6, loss: 0.9, val_loss: 1.2 },
  { epoch: 7, loss: 0.7, val_loss: 1.0 },
  { epoch: 8, loss: 0.5, val_loss: 0.8 },
  { epoch: 9, loss: 0.4, val_loss: 0.7 },
  { epoch: 10, loss: 0.3, val_loss: 0.6 },
];

// Scatter Plot Data - Feature Distribution
const scatterData = [
  { x: 10, y: 30, cluster: 0 },
  { x: 15, y: 35, cluster: 0 },
  { x: 20, y: 25, cluster: 0 },
  { x: 25, y: 40, cluster: 0 },
  { x: 12, y: 28, cluster: 0 },
  { x: 50, y: 70, cluster: 1 },
  { x: 55, y: 65, cluster: 1 },
  { x: 60, y: 75, cluster: 1 },
  { x: 52, y: 68, cluster: 1 },
  { x: 58, y: 72, cluster: 1 },
  { x: 80, y: 20, cluster: 2 },
  { x: 85, y: 25, cluster: 2 },
  { x: 90, y: 15, cluster: 2 },
  { x: 82, y: 22, cluster: 2 },
  { x: 88, y: 18, cluster: 2 },
];

const clusterColors = ["#f0b5d4", "#8888ff", "#44ffaa"];

// Heatmap Data - Confusion Matrix
const heatmapData = [
  [85, 10, 5],
  [8, 82, 10],
  [7, 8, 85],
];

const lineChartConfig = {
  loss: { label: "Training Loss", color: "#f0b5d4" },
  val_loss: { label: "Validation Loss", color: "#8888ff" },
};

const scatterChartConfig = {
  cluster0: { label: "Cluster A", color: "#f0b5d4" },
  cluster1: { label: "Cluster B", color: "#8888ff" },
  cluster2: { label: "Cluster C", color: "#44ffaa" },
};

export function ChartSection() {
  return (
    <motion.section
      className="relative border border-border bg-card p-6 md:p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section label */}
      <div className="absolute top-3 left-3 font-mono text-xs text-pink">VISUALIZATIONS</div>
      <div className="absolute top-3 right-3 font-mono text-xs text-muted-foreground">
        DATA_SECTION_03
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Data Visualizations
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Interactive visualizations showcasing model training progress, feature distributions,
          and performance metrics across different ML experiments.
        </p>

        <Tabs defaultValue="training" className="w-full">
          <TabsList className="mb-6 grid w-full max-w-md grid-cols-3 bg-navy-mid">
            <TabsTrigger
              value="training"
              className="font-mono text-xs data-[state=active]:bg-pink data-[state=active]:text-navy-dark"
            >
              LOSS CURVE
            </TabsTrigger>
            <TabsTrigger
              value="scatter"
              className="font-mono text-xs data-[state=active]:bg-pink data-[state=active]:text-navy-dark"
            >
              CLUSTERS
            </TabsTrigger>
            <TabsTrigger
              value="heatmap"
              className="font-mono text-xs data-[state=active]:bg-pink data-[state=active]:text-navy-dark"
            >
              CONFUSION
            </TabsTrigger>
          </TabsList>

          <TabsContent value="training" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-border p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-mono text-sm text-foreground">Training & Validation Loss</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-pink" />
                    <span className="font-mono text-xs text-muted-foreground">Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-[#8888ff]" />
                    <span className="font-mono text-xs text-muted-foreground">Validation</span>
                  </div>
                </div>
              </div>
              <ChartContainer config={lineChartConfig} className="h-[300px] w-full">
                <LineChart data={trainingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-line)" />
                  <XAxis
                    dataKey="epoch"
                    stroke="var(--pink)"
                    tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                    axisLine={{ stroke: "var(--border)" }}
                  />
                  <YAxis
                    stroke="var(--pink)"
                    tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                    axisLine={{ stroke: "var(--border)" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="loss"
                    stroke="#f0b5d4"
                    strokeWidth={2}
                    dot={{ fill: "#f0b5d4", r: 4 }}
                    activeDot={{ r: 6, fill: "#f0b5d4" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="val_loss"
                    stroke="#8888ff"
                    strokeWidth={2}
                    dot={{ fill: "#8888ff", r: 4 }}
                    activeDot={{ r: 6, fill: "#8888ff" }}
                  />
                </LineChart>
              </ChartContainer>
            </motion.div>
          </TabsContent>

          <TabsContent value="scatter" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-border p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-mono text-sm text-foreground">K-Means Cluster Distribution</h3>
                <div className="flex gap-4">
                  {["A", "B", "C"].map((label, i) => (
                    <div key={label} className="flex items-center gap-2">
                      <div
                        className="h-2 w-2"
                        style={{ backgroundColor: clusterColors[i] }}
                      />
                      <span className="font-mono text-xs text-muted-foreground">
                        Cluster {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <ChartContainer config={scatterChartConfig} className="h-[300px] w-full">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-line)" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Feature 1"
                    stroke="var(--pink)"
                    tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                    axisLine={{ stroke: "var(--border)" }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Feature 2"
                    stroke="var(--pink)"
                    tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                    axisLine={{ stroke: "var(--border)" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Scatter name="Data Points" data={scatterData}>
                    {scatterData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={clusterColors[entry.cluster]} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ChartContainer>
            </motion.div>
          </TabsContent>

          <TabsContent value="heatmap" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-border p-4"
            >
              <div className="mb-4">
                <h3 className="font-mono text-sm text-foreground">Confusion Matrix</h3>
                <p className="font-mono text-xs text-muted-foreground">
                  Multi-class Classification Results
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Y-axis label */}
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-xs text-muted-foreground">
                    Actual
                  </div>
                  {/* X-axis label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground">
                    Predicted
                  </div>
                  {/* Matrix */}
                  <div className="grid grid-cols-3 gap-1">
                    {heatmapData.map((row, i) =>
                      row.map((value, j) => {
                        const intensity = value / 100;
                        return (
                          <motion.div
                            key={`${i}-${j}`}
                            className="flex h-20 w-20 items-center justify-center border border-border font-mono text-sm md:h-24 md:w-24"
                            style={{
                              backgroundColor: `rgba(240, 181, 212, ${intensity})`,
                              color: intensity > 0.5 ? "#0a0a2e" : "#f0b5d4",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: (i * 3 + j) * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {value}%
                          </motion.div>
                        );
                      })
                    )}
                  </div>
                  {/* Row labels */}
                  <div className="absolute -left-8 top-0 flex h-full flex-col justify-around">
                    {["A", "B", "C"].map((label) => (
                      <span key={label} className="font-mono text-xs text-muted-foreground">
                        {label}
                      </span>
                    ))}
                  </div>
                  {/* Column labels */}
                  <div className="absolute -top-6 left-0 flex w-full justify-around">
                    {["A", "B", "C"].map((label) => (
                      <span key={label} className="font-mono text-xs text-muted-foreground">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
