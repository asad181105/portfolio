export type ProjectCategory =
  | "Web Development"
  | "AI/ML"
  | "Full Stack"
  | "Research"
  | "Hackathons";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  thumbnail: string;
  images: string[];
  github?: string;
  live?: string;
  embedUrl?: string;
  embedMode?: "iframe" | "preview";
  featured?: boolean;
  year: string;
  highlights: string[];
}

export const GITHUB_PROFILE =
  "https://github.com/asad181105?tab=repositories";

export const projects: Project[] = [
  {
    slug: "the-origami-ai",
    title: "The Origami AI — AI Tech Startup",
    description:
      "Founder-led AI technology startup building intelligent products and scalable solutions for real-world problems.",
    longDescription:
      "The Origami AI is my AI tech startup where I combine entrepreneurship with software engineering and applied artificial intelligence. From product vision to deployment, I focus on shipping practical AI-powered tools and platforms that solve meaningful problems for users and businesses.",
    category: "Full Stack",
    technologies: ["Python", "AI/ML", "LLMs", "Next.js", "Product Development"],
    thumbnail: "https://theorigamiai.com/opengraph-image",
    images: [
      "https://theorigamiai.com/opengraph-image",
    ],
    live: "https://theorigamiai.com",
    embedUrl: "https://theorigamiai.com",
    embedMode: "iframe",
    github: "https://github.com/asad181105/origami",
    featured: true,
    year: "2025",
    highlights: [
      "Founded and built an AI-focused technology startup",
      "End-to-end product development from idea to live platform",
      "Combining entrepreneurship with applied AI and engineering",
    ],
  },
  {
    slug: "feel-by-good-mind",
    title: "FEEL by GoodMind — Mental Wellness Event Platform",
    description:
      "Live web platform for FEEL, Telangana's largest mental wellness event by GoodMind Care Foundation.",
    longDescription:
      "FEEL is the flagship annual mental health awareness initiative by GoodMind Care Foundation — reaching millions online and thousands of in-person attendees across Hyderabad. This site promotes the festival experience including speaker lineups, stall bookings, event highlights, and registration for India's growing mental wellness movement.",
    category: "Web Development",
    technologies: ["Next.js", "React", "Vercel", "UI/UX", "Event Platform"],
    thumbnail: "https://feelbygoodmind.vercel.app/opengraph-image",
    images: [
      "https://feelbygoodmind.vercel.app/opengraph-image",
    ],
    live: "https://www.instagram.com/goodmind.app/reels/",
    embedUrl: "https://feelbygoodmind.vercel.app",
    embedMode: "preview",
    github: "https://github.com/asad181105/we_feel",
    featured: true,
    year: "2025",
    highlights: [
      "Event platform for Telangana's largest mental wellness festival",
      "Registration, stalls, speakers, and event highlights in one experience",
      "Deployed live on Vercel with a polished public-facing UI",
    ],
  },
  {
    slug: "trueskin",
    title: "TrueSkin — Skincare & Beauty Platform",
    description:
      "Live skincare and beauty web application focused on personalized skin wellness experiences.",
    longDescription:
      "TrueSkin is a deployed web application in the skincare and beauty space, built to deliver a modern digital experience around skin wellness, product discovery, and user engagement through a responsive, production-ready interface.",
    category: "Web Development",
    technologies: ["React", "Next.js", "Web App", "UI/UX", "Vercel"],
    thumbnail: "https://trueskin.app/opengraph-image",
    images: [
      "https://trueskin.app/opengraph-image",
    ],
    live: "https://trueskin.app",
    embedUrl: "https://trueskin.app",
    embedMode: "preview",
    github: GITHUB_PROFILE,
    featured: true,
    year: "2025",
    highlights: [
      "Production skincare platform at trueskin.app",
      "Responsive web experience for beauty and skin wellness",
      "Live deployment with real users and brand presence",
    ],
  },
  {
    slug: "chocobucks",
    title: "Chocobucks — Chocolate & Beverage Platform",
    description:
      "Production web platform for Chocobucks — a modern digital experience for chocolate and beverage commerce.",
    longDescription:
      "Chocobucks is a live web application built to showcase products, brand identity, and a polished customer-facing experience. Developed with modern frontend tooling and deployed for real-world use at chocobucks.com.",
    category: "Web Development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    thumbnail: "https://chocobucks.com/opengraph-image",
    images: ["https://chocobucks.com/opengraph-image"],
    live: "https://chocobucks.com",
    embedUrl: "https://chocobucks.com",
    embedMode: "preview",
    github: "https://github.com/asad181105/chocobucks",
    featured: true,
    year: "2026",
    highlights: [
      "Live production site at chocobucks.com",
      "Modern responsive UI for product and brand showcase",
      "Built and deployed with Next.js on Vercel",
    ],
  },
  {
    slug: "hybridpillars",
    title: "Hybrid Pillars — Business Web Platform",
    description:
      "Live business website for Hybrid Pillars — professional web presence with modern design and deployment.",
    longDescription:
      "Hybrid Pillars is a deployed business web platform at hybridpillars.com, focused on clean UX, responsive layouts, and a production-ready frontend built with contemporary web technologies.",
    category: "Web Development",
    technologies: ["Next.js", "React", "TypeScript", "UI/UX", "Vercel"],
    thumbnail: "https://hybridpillars.com/opengraph-image",
    images: ["https://hybridpillars.com/opengraph-image"],
    live: "https://hybridpillars.com",
    embedUrl: "https://hybridpillars.com",
    embedMode: "preview",
    github: "https://github.com/asad181105/hybridpillars",
    featured: true,
    year: "2025",
    highlights: [
      "Live business platform at hybridpillars.com",
      "Professional brand-focused web experience",
      "Production deployment with scalable frontend stack",
    ],
  },
  {
    slug: "anpr-opencv",
    title: "Automatic Number Plate Detection using OpenCV",
    description:
      "Real-time vehicle number plate detection and OCR pipeline with over 90% text extraction accuracy.",
    longDescription:
      "Addressed the challenge of automated vehicle number identification by developing a real-time detection system using OpenCV and image preprocessing techniques. Engineered a complete OCR pipeline with Tesseract to segment and extract alphanumeric characters from localized plates, improving recognition in noisy and low-light conditions. Delivered over 90% text extraction accuracy, showcasing skills in computer vision, optical character recognition, and scalable software development.",
    category: "AI/ML",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Image Processing"],
    thumbnail:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    ],
    github: "https://github.com/asad181105/Automatic-Number-Plate-Detection-using-OpenCV-",
    year: "2025",
    highlights: [
      "Real-time plate detection with OpenCV and preprocessing",
      "Tesseract OCR pipeline for noisy and low-light conditions",
      "90%+ text extraction accuracy",
    ],
  },
  {
    slug: "ai-call-center-assistant",
    title: "AI-Powered Call Center Assistant",
    description:
      "Voice-enabled call center assistant using Python, Flask, Speech API, and LLMs for automated customer support.",
    longDescription:
      "Solved the need for automating customer support interactions by developing an AI-powered call center assistant using Python, Flask, and Google Speech-to-Text API. Built a voice-enabled backend system capable of converting real-time speech to text, processing queries, and delivering dynamic responses via natural language logic. Enhanced support efficiency and reduced response time, demonstrating practical skills in natural language processing, speech recognition, and cloud-based APIs.",
    category: "AI/ML",
    technologies: ["Python", "Flask", "Google Speech-to-Text", "LLMs", "NLP"],
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
    ],
    github: GITHUB_PROFILE,
    year: "2025",
    highlights: [
      "Real-time speech-to-text with Google Speech API",
      "LLM-powered dynamic response generation",
      "Reduced support response time with voice automation",
    ],
  },
  {
    slug: "yolov8-object-detection",
    title: "Object Detection Using YOLOv8",
    description:
      "AI-powered real-time object detection system using YOLOv8 and ONNX for image and video analysis.",
    longDescription:
      "Built an AI-powered object detection system using YOLOv8 and ONNX in Python for real-time image and video analysis. Optimized and deployed the model to accurately detect and classify multiple objects with high performance. Demonstrated skills in computer vision, deep learning, and model deployment within a Python-based development environment.",
    category: "AI/ML",
    technologies: ["Python", "YOLOv8", "ONNX", "Computer Vision", "Deep Learning"],
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    ],
    github: "https://github.com/asad181105/object-detection-using-yolov8",
    year: "2025",
    highlights: [
      "Real-time detection with YOLOv8 and ONNX optimization",
      "Multi-object classification on images and video streams",
      "End-to-end model deployment in Python",
    ],
  },
  {
    slug: "ai-medical-diagnostic-tool",
    title: "AI Diagnostic Tool for Medical Reports & X-rays",
    description:
      "Hackathon project for AI-assisted analysis of medical reports and X-ray imaging data.",
    longDescription:
      "Built at AI Hack Day SNIST (Feb 2025). Developed an AI diagnostic tool to assist with medical report analysis and X-ray interpretation, applying machine learning to support faster clinical decision workflows in a hackathon setting.",
    category: "Hackathons",
    technologies: ["Python", "Machine Learning", "Medical AI", "Computer Vision"],
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    ],
    github: GITHUB_PROFILE,
    year: "2025",
    highlights: [
      "AI Hack Day SNIST — Feb 2025",
      "Medical report and X-ray analysis pipeline",
      "Applied ML for diagnostic assistance",
    ],
  },
  {
    slug: "geolocation-attendance-tracker",
    title: "Geolocation-Based Attendance Tracker",
    description:
      "Smart India Hackathon national finalist project for location-verified attendance tracking.",
    longDescription:
      "Reached Smart India Hackathon national finals (Mar 2024) with a geolocation-based attendance tracking system designed for accurate, scalable attendance verification using location data and robust backend logic.",
    category: "Hackathons",
    technologies: ["Python", "Geolocation", "Mobile/Web", "System Design"],
    thumbnail:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80",
    ],
    github: GITHUB_PROFILE,
    year: "2024",
    highlights: [
      "Smart India Hackathon — National Finalist",
      "Location-verified attendance system",
      "Built for real-world institutional deployment",
    ],
  },
  {
    slug: "mri-annotation-platform",
    title: "Medical Image Annotation Platform for MRI Data",
    description:
      "TechXellerate Hackathon project at BITS Pilani for structured MRI image labeling.",
    longDescription:
      "Participated in TechXellerate Hackathon at BITS Pilani (Apr 2024) and built a medical image annotation platform for MRI data to streamline labeling workflows for machine learning model training.",
    category: "Hackathons",
    technologies: ["Python", "Medical Imaging", "Annotation UI", "ML Pipeline"],
    thumbnail:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
    ],
    github: GITHUB_PROFILE,
    year: "2024",
    highlights: [
      "TechXellerate Hackathon — BITS Pilani",
      "MRI data annotation workflow",
      "Supports ML training pipelines",
    ],
  },
  {
    slug: "innovasia-ai-call-center",
    title: "AI-Based Call Service Center & Chatbot",
    description:
      "Innovasia Hackathon build combining AI call automation with conversational chatbot support.",
    longDescription:
      "Built at Innovasia Hackathon (Oct 2024). Developed an AI-based call service center and chatbot system to automate customer interactions using speech and natural language processing techniques.",
    category: "Hackathons",
    technologies: ["Python", "NLP", "Chatbot", "Speech AI", "Flask"],
    thumbnail:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    ],
    github: GITHUB_PROFILE,
    year: "2024",
    highlights: [
      "Innovasia Hackathon — Oct 2024",
      "AI call center + chatbot integration",
      "Automated customer support flows",
    ],
  },
  {
    slug: "construction-progress-calculator",
    title: "Construction Progress Calculator",
    description:
      "Innovasia Hackathon tool for tracking and calculating construction project progress.",
    longDescription:
      "Built at Innovasia Hackathon (Oct 2024). Created a construction progress calculator to help teams measure, visualize, and report project completion metrics efficiently.",
    category: "Hackathons",
    technologies: ["Python", "Data Processing", "Web App", "Analytics"],
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    ],
    github: GITHUB_PROFILE,
    year: "2024",
    highlights: [
      "Innovasia Hackathon — Oct 2024",
      "Progress tracking and calculation engine",
      "Practical construction industry use case",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Web Development",
  "AI/ML",
  "Full Stack",
  "Research",
  "Hackathons",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
