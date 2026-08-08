export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "nptel-python",
    title: "Joy of Computing using Python",
    issuer: "NPTEL",
    credentialUrl:
      "https://vasavicollegeofenginee-my.sharepoint.com/:b:/g/personal/1602-22-733-069_vce_ac_in/ERq6bbiztG5Fh242X-mSjQMBLEs_8CWxQhCrrWWgCDyynw?e=6Wizpm",
  },
  {
    id: "iiit-aiml",
    title: "Fundamentals of Artificial Intelligence & Machine Learning",
    issuer: "IIIT Hyderabad",
    credentialUrl:
      "https://vasavicollegeofenginee-my.sharepoint.com/:b:/g/personal/1602-22-733-069_vce_ac_in/EYse_JOq8ThIv8zT-OsXV8cBFaO83p5IXNjBIur3mQjqzQ?e=8R9Tr0",
  },
  {
    id: "drone-robotics",
    title: "Drone and Robotics Bootcamp",
    issuer: "Industry Bootcamp",
    credentialUrl:
      "https://drive.google.com/file/d/1UbdoufeUYuMmkTW2syts45XsChEnwGyb/view?usp=drive_link",
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding",
    issuer: "Professional Certificate",
    credentialUrl:
      "https://drive.google.com/file/d/15gDdrreyL3CTxj0LpuHb2S40Ki0iaFMK/view?usp=drive_link",
  },
];
