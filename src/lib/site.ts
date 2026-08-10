const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://mohammedasad.dev";

export const siteConfig = {
  name: "Mohammed Asad",
  title: "Mohammed Asad — Aspiring Software Engineering Intern",
  description:
    "Final-year B.Tech Computer Science student at SNIST skilled in software engineering, data science, and data analytics. Building AI products, web platforms, and real-world solutions through startups, hackathons, and hands-on projects.",
  url: siteUrl,
  ogImage: "/hero.jpg",
  favicon: "/favicon.png",
  email: "asadmohammed181105@gmail.com",
  phone: "+91 82475 79990",
  location: "Hyderabad, India",
  birthDate: "18 November 2005",
  college: "Sreenidhi Institute of Science and Technology (SNIST)",
  role: "Final-year B.Tech CSE · Aspiring Software Engineering Intern",
  professionalSummary:
    "Final-year B.Tech Computer Science student at SNIST with a strong foundation in software engineering, data science, and data analytics. I build production-ready web applications and AI-driven products — from founding The Origami AI to delivering platforms like FEEL and TrueSkin. Experienced in Python, machine learning, computer vision, and full-stack development through startups, hackathons, and competitive programming. Seeking a software development internship to contribute to impactful, data-informed engineering projects.",
  links: {
    linkedin: "https://linkedin.com/in/asad1811",
    mentorPick: "https://mentorpick.com",
    leetcode: "https://leetcode.com",
    startup: "https://theorigamiai.com",
    github: "https://github.com/asad181105?tab=repositories",
  },
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const education = [
  {
    degree: "Bachelor of Engineering (CSE)",
    institution: "Sreenidhi Institute of Science and Technology",
    period: "2023 — Present",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "MS Junior College",
    period: "2021 — 2023",
  },
  {
    degree: "SSC (Class 10)",
    institution: "MS Creative School",
    period: "2020 — 2021",
  },
] as const;

export const strengths = [
  "Strong analytical and problem-solving skills",
  "Ability to work collaboratively in teams",
  "Passion for learning and building impactful software",
  "Self-driven and eager to contribute to open-ended projects",
] as const;
