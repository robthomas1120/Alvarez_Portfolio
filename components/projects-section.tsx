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
    subtitle: "A deep learning-based computer vision application that identifies cats and dogs in real-time via webcam using transfer learning.",
    dataset: "Cats vs. Dogs (Keras Directory)",
    datasetDescription: "A curated collection of animal imagery partitioned into 275 training images and 70 validation images across two distinct classes.",
    model: "MobileNetV2",
    modelLabel: "MODEL ARCHITECTURE",
    description: "Deep learning computer vision application identifying cats and dogs in real-time.",
    longDescription:
      "This project demonstrates an end-to-end machine learning pipeline, from training a deep neural network in a cloud environment (Google Colab) to deploying the model locally for real-time inference. By leveraging transfer learning, the model achieves high accuracy even with a specialized dataset.",
    metrics: [
      { label: "Validation Accuracy", value: "100%", tooltip: "Model accuracy on validation set" },
      { label: "Training Epochs", value: "10", tooltip: "Number of training cycles" },
      { label: "Latency", value: "< 100ms", tooltip: "Inference speed on consumer hardware" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Google Colab"],
    features: [
      "Transfer Learning Implementation: Utilized the MobileNetV2 architecture (pre-trained on ImageNet) with frozen base layers to maximize feature extraction efficiency on a small dataset.",
      "Real-Time Computer Vision: Integrated OpenCV to capture live video feeds, perform frame-by-frame preprocessing, and overlay prediction labels dynamically.",
      "Data Augmentation Pipeline: Implemented ImageDataGenerator with random rotations and horizontal flips to improve model generalization and prevent overfitting.",
      "Binary Classification Optimization: Employed a Sigmoid activation function and Binary Crossentropy loss to achieve a definitive probability split between classes.",
      "Cross-Platform Deployment: Developed a portable inference script that reconstructs the model architecture locally to ensure compatibility across different Keras environments.",
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
            A collection of production-ready machine learning implementations spanning
            computer vision, natural language processing, and time series analysis.
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

