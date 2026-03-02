"use client";

import { motion } from "framer-motion";
import { ProjectPanel } from "@/components/project-panel";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    id: "ml1",
    name: "PetVision: Real-Time Species Classifier",
    code: "ML_01",
    dateTag: "Jan 2026 – Feb 2026",
    subtitle: "Real-time cat vs. dog classifier built with transfer learning and live webcam inference.",
    dataset: "Cats vs. Dogs (Keras Directory)",
    datasetDescription: "275 training / 70 validation images across two classes.",
    model: "MobileNetV2",
    modelLabel: "MODEL ARCHITECTURE",
    description: "Deep learning computer vision application identifying cats and dogs in real-time.",
    longDescription:
      "End-to-end ML pipeline: trained on Google Colab using MobileNetV2 transfer learning, then deployed locally for real-time webcam inference.",
    metrics: [
      { label: "Validation Accuracy", value: "100%", tooltip: "Model accuracy on validation set" },
      { label: "Training Epochs", value: "10", tooltip: "Number of training cycles" },
      { label: "Latency", value: "< 100ms", tooltip: "Inference speed on consumer hardware" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Google Colab"],
    features: [
      "Transfer Learning via MobileNetV2 (ImageNet weights)",
      "Real-time webcam inference with OpenCV",
      "Data augmentation to reduce overfitting",
      "Binary classification with Sigmoid + Binary Crossentropy",
      "Portable local deployment script",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
  {
    id: "ml2",
    name: "NeuroDigit: Interactive Handwriting Recognition",
    code: "ML_02",
    dateTag: "Jan 2026 – Feb 2026",
    subtitle: "Custom CNN trained on raw MNIST binary files with a Tkinter GUI for real-time digit recognition.",
    dataset: "MNIST Handwritten Digits (Raw Binary)",
    datasetDescription: "60,000 training / 10,000 test images of digits 0–9, parsed manually from .idx3-ubyte files.",
    model: "Custom CNN (Conv2D + MaxPooling2D)",
    modelLabel: "MODEL ARCHITECTURE",
    description: "Real-time digit classification using a custom CNN and interactive GUI.",
    longDescription:
      "Covers the full ML lifecycle: binary dataset parsing, CNN design, confusion matrix evaluation, and a Human-in-the-Loop desktop interface.",
    metrics: [
      { label: "Accuracy", value: "99.5%", tooltip: "Model accuracy on test set" },
      { label: "Training Loss", value: "0.014", tooltip: "Final loss after training" },
      { label: "Output Classes", value: "10", tooltip: "Digits 0-9" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "TensorFlow/Keras", "Tkinter", "NumPy", "Matplotlib", "OpenCV", "Pillow"],
    features: [
      "Manual binary parsing of raw MNIST files",
      "Custom CNN achieving >99% accuracy",
      "Tkinter canvas GUI for live digit drawing",
      "Confusion matrix for misclassification analysis",
      "Real-time image resizing and normalization",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
  {
    id: "ml3",
    name: "SentinelSMS - \"Ham or Spam\" Classifier",
    code: "ML_03",
    dateTag: "Feb 2026",
    subtitle: "NLP pipeline with a Naive Bayes classifier and Streamlit UI for real-time Ham/Spam detection.",
    dataset: "SMS Spam Collection (CSV)",
    datasetDescription: "5,574 messages labeled as Ham (0) or Spam (1).",
    model: "Multinomial Naive Bayes (MNB)",
    modelLabel: "MODEL ARCHITECTURE",
    description: "End-to-end NLP application for real-time SMS classification.",
    longDescription:
      "Full NLP pipeline using TF-IDF Vectorization and Multinomial Naive Bayes to classify SMS messages as Ham or Spam with high precision.",
    metrics: [
      { label: "Overall Accuracy", value: "97%", tooltip: "Model accuracy on test set" },
      { label: "Spam Precision", value: "100%", tooltip: "Zero false positives in testing" },
      { label: "Ham F1-Score", value: "0.98", tooltip: "Balance between precision and recall for Ham" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Joblib", "Google Colab"],
    features: [
      "Scikit-Learn Pipeline with zero data leakage",
      "TF-IDF vectorization with stop-word filtering",
      "Raw dataset cleaning and label encoding",
      "Reproducible 80/20 train-test split",
      "Streamlit UI with real-time confidence scores",
    ],
    analysisUrl: "#",
    dashboardUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="ml" className="relative border-b border-border py-16 pt-12 sm:py-24 sm:pt-24">
      {/* Section labels */}
      <div className="absolute top-4 left-4 font-mono text-xs text-pink sm:left-6 sm:top-6">ML</div>
      <div className="absolute top-4 right-4 hidden font-mono text-xs text-muted-foreground sm:right-6 sm:top-6 sm:block">
        SECTION_03
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
            <span className="bg-pink px-3 py-1 font-mono text-sm text-navy-dark">ML</span>
            <Separator className="max-w-32 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Machine Learning Projects
            </span>
          </div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Machine Learning Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Production-ready ML projects spanning computer vision and natural language processing.
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

