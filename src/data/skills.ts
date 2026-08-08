export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 82 },
      { name: "C", level: 80 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 82 },
      { name: "Shell Scripting", level: 72 },
    ],
  },
  {
    id: "fundamentals",
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "Object Oriented Programming", level: 85 },
      { name: "Operating Systems", level: 78 },
      { name: "Software Design", level: 80 },
      { name: "System Design", level: 72 },
    ],
  },
  {
    id: "ai",
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Data Science", level: 84 },
      { name: "Data Analytics", level: 82 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Information Retrieval", level: 75 },
      { name: "TensorFlow", level: 78 },
      { name: "PyTorch", level: 76 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Eclipse", level: 75 },
      { name: "REST APIs", level: 84 },
      { name: "SQL / NoSQL", level: 82 },
      { name: "Unix / Linux", level: 78 },
    ],
  },
];

export const radarData = [
  { subject: "Programming", A: 86, fullMark: 100 },
  { subject: "DSA", A: 88, fullMark: 100 },
  { subject: "AI/ML", A: 82, fullMark: 100 },
  { subject: "Systems", A: 76, fullMark: 100 },
  { subject: "Web Dev", A: 78, fullMark: 100 },
  { subject: "Tools", A: 85, fullMark: 100 },
];

export const floatingTech = [
  "Python",
  "Java",
  "C",
  "SQL",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "YOLOv8",
  "Flask",
  "Git",
  "DSA",
  "Machine Learning",
  "Data Science",
  "Data Analytics",
];
