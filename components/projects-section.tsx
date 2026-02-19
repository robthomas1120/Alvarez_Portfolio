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
  {
    id: "ml2",
    name: "NeuroDigit: Interactive Handwriting Recognition",
    code: "ML_02",
    dateTag: "Jan 2026 – Feb 2026",
    subtitle: "An end-to-end computer vision project featuring a custom-trained CNN and a Tkinter-based GUI for real-time digit classification.",
    dataset: "MNIST Handwritten Digits (Raw Binary)",
    datasetDescription: "Consists of 60,000 training and 10,000 test images of digits 0–9. Manually parsed .idx3-ubyte files using Python's struct module.",
    model: "Custom CNN (Conv2D + MaxPooling2D)",
    modelLabel: "MODEL ARCHITECTURE",
    description: "Real-time digit classification using a custom CNN and interactive GUI.",
    longDescription:
      "This project showcases the full machine learning lifecycle: manual parsing of binary datasets, architectural design of a CNN, rigorous evaluation via confusion matrices, and the development of a 'Human-in-the-Loop' desktop application.",
    metrics: [
      { label: "Accuracy", value: "99.5%", tooltip: "Model accuracy on test set" },
      { label: "Training Loss", value: "0.014", tooltip: "Final loss after training" },
      { label: "Output Classes", value: "10", tooltip: "Digits 0-9" },
    ],
    metricsLabel: "Performance Metrics",
    technologies: ["Python", "TensorFlow/Keras", "Tkinter", "NumPy", "Matplotlib", "OpenCV", "Pillow"],
    features: [
      "Manual Byte-Stream Parsing: Developed custom functions using the struct library to unpack high-endian binary data from raw MNIST source files.",
      "CNN Engineering: Engineered a sequential model featuring Conv2D and MaxPooling2D layers to achieve high-precision accuracy of over 99%.",
      "Interactive Desktop Interface: Built a Tkinter GUI that allows users to draw digits on a digital canvas for live inference.",
      "Advanced Evaluation: Implemented a Confusion Matrix visualization to identify specific digit-to-digit misclassifications.",
      "Data Preprocessing Pipeline: Integrated real-time image resizing (280px to 28px) and normalization to match the training distribution.",
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

