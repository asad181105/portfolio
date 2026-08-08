export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "internship" | "opensource" | "competition" | "certification" | "college";
}

export const experienceTimeline: TimelineItem[] = [
  {
    id: "1",
    title: "AI Hack Day SNIST — Participant",
    organization: "AI Diagnostic Tool for Medical Reports & X-rays",
    period: "Feb 2025",
    description:
      "Built an AI diagnostic tool for analyzing medical reports and X-ray images as part of SNIST's AI Hack Day.",
    type: "competition",
  },
  {
    id: "2",
    title: "Innovasia Hackathon — Participant",
    organization: "AI Call Service Center, Chatbot & Construction Progress Calculator",
    period: "Oct 2024",
    description:
      "Developed AI-based call service center solutions, chatbot automation, and a construction progress calculator in a competitive hackathon environment.",
    type: "competition",
  },
  {
    id: "3",
    title: "TechXellerate Hackathon — Participant",
    organization: "BITS Pilani — Medical Image Annotation Platform",
    period: "Apr 2024",
    description:
      "Created a medical image annotation platform for MRI data to support structured labeling and model training workflows.",
    type: "competition",
  },
  {
    id: "4",
    title: "Smart India Hackathon — National Finalist",
    organization: "Geolocation-Based Attendance Tracker",
    period: "Mar 2024",
    description:
      "Reached the national finals with a geolocation-based attendance tracking system designed for scalable, real-world deployment.",
    type: "competition",
  },
  {
    id: "5",
    title: "Joy of Computing using Python",
    organization: "NPTEL",
    period: "Certification",
    description: "Completed NPTEL certification covering Python programming fundamentals and computational thinking.",
    type: "certification",
  },
  {
    id: "6",
    title: "Fundamentals of AI & Machine Learning",
    organization: "IIIT Hyderabad",
    period: "Certification",
    description:
      "Certified in core artificial intelligence and machine learning concepts from IIIT Hyderabad.",
    type: "certification",
  },
  {
    id: "7",
    title: "Drone and Robotics Bootcamp",
    organization: "Industry Bootcamp",
    period: "Certification",
    description: "Hands-on bootcamp covering robotics fundamentals, drone systems, and embedded problem-solving.",
    type: "certification",
  },
  {
    id: "8",
    title: "Vibe Coding",
    organization: "Professional Certificate",
    period: "Certification",
    description: "Completed certification focused on modern development workflows and AI-assisted engineering.",
    type: "certification",
  },
  {
    id: "9",
    title: "Competitive Programming",
    organization: "MentorPick & LeetCode",
    period: "Ongoing",
    description:
      "Solved 80+ problems on MentorPick and actively practices algorithmic problem-solving on LeetCode.",
    type: "college",
  },
];

export const achievementStats = [
  { label: "CP Problems Solved", value: 80, suffix: "+" },
  { label: "Hackathons", value: 4, suffix: "" },
  { label: "Certifications", value: 4, suffix: "" },
  { label: "Projects Built", value: 11, suffix: "+" },
];
