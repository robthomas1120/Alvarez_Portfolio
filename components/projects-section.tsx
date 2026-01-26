"use client";

import { motion } from "framer-motion";
import { ProjectPanel } from "@/components/project-panel";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    id: "1",
    name: "Image Classification Pipeline",
    code: "CV_01",
    dataset: "ImageNet-1K",
    model: "Vision Transformer (ViT-B/16)",
    description:
      "High-accuracy image classification system using state-of-the-art transformer architecture.",
    longDescription:
      "A production-ready image classification pipeline utilizing Vision Transformers trained on ImageNet-1K. The system achieves competitive accuracy while maintaining efficient inference times through optimized attention mechanisms and patch embedding strategies.",
    metrics: [
      { label: "Accuracy", value: "94.2%", tooltip: "Top-1 validation accuracy" },
      { label: "F1", value: "0.93", tooltip: "Macro F1 score" },
      { label: "Latency", value: "12ms", tooltip: "Average inference time" },
    ],
    technologies: ["PyTorch", "CUDA", "TorchVision", "Weights & Biases", "FastAPI"],
    features: [
      "Multi-GPU distributed training with gradient accumulation",
      "Mixed precision training for 2x speedup",
      "Automated hyperparameter tuning with Optuna",
      "Real-time inference API with batching support",
    ],
  },
  {
    id: "2",
    name: "Sentiment Analysis Engine",
    code: "NLP_01",
    dataset: "Twitter-140M",
    model: "RoBERTa-Large Fine-tuned",
    description:
      "Real-time sentiment classification for social media content with multi-language support.",
    longDescription:
      "An advanced NLP system for analyzing sentiment in social media posts. Built on RoBERTa-Large and fine-tuned on 140 million tweets, supporting multiple languages through multilingual embeddings.",
    metrics: [
      { label: "F1", value: "0.91", tooltip: "Weighted F1 score" },
      { label: "AUC", value: "0.96", tooltip: "Area under ROC curve" },
      { label: "Throughput", value: "1K/s", tooltip: "Predictions per second" },
    ],
    technologies: ["Transformers", "HuggingFace", "ONNX", "Redis", "Kubernetes"],
    features: [
      "Streaming inference for real-time analysis",
      "Model quantization for edge deployment",
      "A/B testing framework for model comparison",
      "Automated retraining pipeline",
    ],
  },
  {
    id: "3",
    name: "Time Series Forecasting",
    code: "TS_01",
    dataset: "M5 Competition",
    model: "Temporal Fusion Transformer",
    description:
      "Multi-horizon demand forecasting with interpretable attention-based predictions.",
    longDescription:
      "A sophisticated forecasting system using Temporal Fusion Transformers for multi-horizon predictions. Achieved top 2% ranking in the M5 Competition with interpretable outputs showing variable importance and temporal patterns.",
    metrics: [
      { label: "RMSE", value: "0.42", tooltip: "Root mean squared error" },
      { label: "MAPE", value: "8.3%", tooltip: "Mean absolute percentage error" },
      { label: "R²", value: "0.94", tooltip: "Coefficient of determination" },
    ],
    technologies: ["PyTorch Lightning", "Darts", "MLflow", "Airflow", "PostgreSQL"],
    features: [
      "Multi-variate and multi-horizon forecasting",
      "Interpretable attention weights visualization",
      "Automated feature engineering pipeline",
      "Confidence interval estimation",
    ],
  },
  {
    id: "4",
    name: "Anomaly Detection System",
    code: "AD_01",
    dataset: "NAB Benchmark",
    model: "Variational Autoencoder",
    description:
      "Unsupervised anomaly detection for industrial IoT sensor data streams.",
    longDescription:
      "An unsupervised anomaly detection system designed for industrial IoT applications. Uses Variational Autoencoders to learn normal operational patterns and detect anomalies in real-time sensor streams.",
    metrics: [
      { label: "Precision", value: "0.89", tooltip: "Detection precision" },
      { label: "Recall", value: "0.94", tooltip: "Anomaly recall rate" },
      { label: "Latency", value: "5ms", tooltip: "Detection latency" },
    ],
    technologies: ["TensorFlow", "Kafka", "InfluxDB", "Grafana", "Docker"],
    features: [
      "Real-time streaming anomaly detection",
      "Adaptive threshold calibration",
      "Multi-sensor correlation analysis",
      "Automated alerting and reporting",
    ],
  },
  {
    id: "5",
    name: "Recommendation Engine",
    code: "REC_01",
    dataset: "MovieLens-25M",
    model: "Neural Collaborative Filtering",
    description:
      "Hybrid recommendation system combining collaborative filtering with content features.",
    longDescription:
      "A hybrid recommendation engine that combines neural collaborative filtering with content-based features. Achieves state-of-the-art performance on MovieLens-25M while maintaining real-time serving capabilities.",
    metrics: [
      { label: "NDCG", value: "0.87", tooltip: "Normalized discounted cumulative gain" },
      { label: "HR@10", value: "0.72", tooltip: "Hit rate at 10" },
      { label: "Coverage", value: "85%", tooltip: "Item catalog coverage" },
    ],
    technologies: ["PyTorch", "FAISS", "Redis", "Spark", "gRPC"],
    features: [
      "Real-time personalization updates",
      "Cold-start handling with content features",
      "A/B testing with multi-armed bandits",
      "Diversity and novelty optimization",
    ],
  },
  {
    id: "6",
    name: "Object Detection API",
    code: "CV_02",
    dataset: "COCO 2017",
    model: "YOLO v8-Large",
    description:
      "Real-time object detection and tracking for autonomous systems applications.",
    longDescription:
      "A production-grade object detection system built on YOLO v8-Large, optimized for autonomous systems. Supports real-time tracking, multi-object detection, and segmentation with TensorRT acceleration.",
    metrics: [
      { label: "mAP", value: "0.56", tooltip: "Mean average precision @0.5:0.95" },
      { label: "FPS", value: "45", tooltip: "Frames per second on RTX 4090" },
      { label: "Objects", value: "80", tooltip: "COCO classes supported" },
    ],
    technologies: ["Ultralytics", "TensorRT", "OpenCV", "DeepSORT", "Flask"],
    features: [
      "Multi-object tracking with ID persistence",
      "Instance segmentation support",
      "TensorRT optimization for 3x speedup",
      "Streaming video inference",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section className="relative border-b border-border py-24">
      {/* Section labels */}
      <div className="absolute top-6 left-6 font-mono text-xs text-pink">PROJECTS</div>
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
