export interface LifeTimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "education" | "milestone" | "internship" | "project";
}

export const lifeTimeline: LifeTimelineEvent[] = [
  {
    year: "2020",
    title: "SSC — MS Creative School",
    description: "Completed Class 10 with a strong foundation in mathematics and science.",
    type: "education",
  },
  {
    year: "2021",
    title: "Intermediate (MPC) — MS Junior College",
    description:
      "Pursued Mathematics, Physics, and Chemistry while developing interest in programming and logic.",
    type: "education",
  },
  {
    year: "2023",
    title: "B.Tech CSE — SNIST",
    description:
      "Joined Sreenidhi Institute of Science and Technology to pursue Computer Science Engineering.",
    type: "education",
  },
  {
    year: "2024",
    title: "Smart India Hackathon — National Finalist",
    description:
      "Built a geolocation-based attendance tracker and reached the national finals.",
    type: "milestone",
  },
  {
    year: "2024",
    title: "AI & ML Certifications",
    description:
      "Completed IIIT Hyderabad AI/ML fundamentals and expanded skills in TensorFlow and PyTorch.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "The Origami AI — Startup Founder",
    description:
      "Founded an AI tech startup at theorigamiai.com, combining entrepreneurship with applied AI.",
    type: "project",
  },
  {
    year: "2025",
    title: "Computer Vision & NLP Projects",
    description:
      "Shipped ANPR with OpenCV, YOLOv8 object detection, and an AI-powered call center assistant.",
    type: "project",
  },
  {
    year: "2026",
    title: "Software Development Internship",
    description:
      "Seeking an internship to contribute to impactful, scalable engineering projects in industry.",
    type: "milestone",
  },
];
