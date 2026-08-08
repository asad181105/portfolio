export interface AIRoadmapNode {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  tools?: string[];
}

export const aiLearningTimeline = [
  {
    year: "2023",
    title: "Python & Computing Foundations",
    description: "Joy of Computing using Python (NPTEL) and core programming fundamentals.",
  },
  {
    year: "2024",
    title: "AI & ML Fundamentals",
    description: "IIIT Hyderabad certification in artificial intelligence and machine learning.",
  },
  {
    year: "2024",
    title: "Computer Vision Projects",
    description: "OpenCV ANPR, YOLOv8 object detection, and ONNX model deployment.",
  },
  {
    year: "2024",
    title: "NLP & Speech Systems",
    description: "AI call center assistant with Flask, Speech-to-Text, and LLM response logic.",
  },
  {
    year: "2025",
    title: "Applied AI Products",
    description: "Medical AI diagnostics, startup products at The Origami AI, and hackathon builds.",
  },
];

export const modelsExplored = [
  "YOLOv8",
  "ONNX Runtime",
  "TensorFlow",
  "PyTorch",
  "Tesseract OCR",
  "OpenCV Pipelines",
  "LLMs for NLP",
];

export const aiTools = [
  "Python",
  "OpenCV",
  "TensorFlow",
  "PyTorch",
  "Flask",
  "Google Speech-to-Text",
  "REST APIs",
  "ONNX",
];

export const aiRoadmap: AIRoadmapNode[] = [
  {
    id: "1",
    title: "Foundations",
    description: "Python, DSA, and computing basics",
    status: "completed",
    tools: ["Python", "C", "Java", "SQL"],
  },
  {
    id: "2",
    title: "Machine Learning",
    description: "Supervised learning and model training",
    status: "completed",
    tools: ["TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    id: "3",
    title: "Computer Vision",
    description: "Detection, OCR, and deployment",
    status: "completed",
    tools: ["OpenCV", "YOLOv8", "ONNX"],
  },
  {
    id: "4",
    title: "NLP & Speech",
    description: "LLMs, speech APIs, and chatbots",
    status: "in-progress",
    tools: ["Flask", "Speech API", "LLMs"],
  },
  {
    id: "5",
    title: "Production AI",
    description: "Scalable systems and startup products",
    status: "in-progress",
    tools: ["The Origami AI", "Distributed Systems"],
  },
];

export const aiExperiments = [
  {
    title: "ANPR with OpenCV + Tesseract",
    description: "90%+ OCR accuracy on localized plates in noisy and low-light conditions.",
  },
  {
    title: "YOLOv8 Real-Time Detection",
    description: "Optimized ONNX deployment for multi-object image and video analysis.",
  },
  {
    title: "AI Call Center Assistant",
    description: "Voice-to-text pipeline with NLP-driven dynamic customer support responses.",
  },
];

export const aiFutureGoals = [
  "Deepen expertise in scalable ML systems and distributed computing",
  "Ship production AI features through The Origami AI",
  "Contribute to impactful software engineering teams as an intern",
  "Expand research in NLP, information retrieval, and computer vision",
];
