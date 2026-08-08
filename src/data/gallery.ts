export interface GalleryItem {
  id: string;
  title: string;
  category: "events" | "projects" | "hackathons" | "college";
  image: string;
  aspect?: "tall" | "wide" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Developer Workspace",
    category: "projects",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    aspect: "wide",
  },
  {
    id: "2",
    title: "Hackathon Team",
    category: "hackathons",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    aspect: "square",
  },
  {
    id: "3",
    title: "AI Visualization",
    category: "projects",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    aspect: "tall",
  },
  {
    id: "4",
    title: "College Tech Fest",
    category: "college",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    aspect: "wide",
  },
  {
    id: "5",
    title: "Coding Session",
    category: "projects",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd95375aa9?w=600&q=80",
    aspect: "square",
  },
  {
    id: "6",
    title: "Workshop Presentation",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1475721027785-f64ecc933b6f?w=600&q=80",
    aspect: "tall",
  },
  {
    id: "7",
    title: "Project Demo Day",
    category: "college",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    aspect: "wide",
  },
  {
    id: "8",
    title: "Team Collaboration",
    category: "hackathons",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    aspect: "square",
  },
  {
    id: "9",
    title: "Neural Network Art",
    category: "projects",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    aspect: "tall",
  },
  {
    id: "10",
    title: "Campus Innovation Lab",
    category: "college",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    aspect: "square",
  },
  {
    id: "11",
    title: "Conference Talk",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1505373877847-8d25f39d466a?w=600&q=80",
    aspect: "wide",
  },
  {
    id: "12",
    title: "Late Night Build",
    category: "hackathons",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    aspect: "tall",
  },
];
