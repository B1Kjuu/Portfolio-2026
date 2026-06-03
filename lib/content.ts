import type { StaticImageData } from "next/image"; 
import P3KCARS from "../app/tech/assets/P3KCARS.png";
import PTSI from "../app/tech/assets/PTSI.png";
import RESORTIFYPH from "../app/tech/assets/RESORTIFYPH.png";
import IIA from "../app/tech/assets/IIA.png";
import HIKESAFE from "../app/tech/assets/HIKESAFE.png";
import HIKESAFEWEB from "../app/tech/assets/HIKESAFEWEB.png";
import EASYJOURNAL from "../app/tech/assets/EASYJOURNAL.png";
import INTERFACE2026 from "../app/tech/assets/INTERFACE2026.png";
import OLDPORTFOLIO from "../app/tech/assets/OLDPORTFOLIO.png";

export type TechProject = {
  title: string;
  description: string;
  note: string;
  image: string | StaticImageData;
  demoLink?: string;
  ghLink?: string;
};

export const techStats = [
  { value: "3+", label: "live products and portfolio builds" },
  { value: "90+", label: "Lighthouse scores targeted in production" },
  { value: "Full-stack", label: "React, Node, UI systems, and deployment" },
];

export const techProjects: TechProject[] = [
  {
    title: "P3KCARS",
    description: "Public website with responsive UI and clean navigation.",
    note: "Frontend build with a polished user-facing experience.",
    image: P3KCARS, 
    demoLink: "https://p3kcars.com",
  },
  {
    title: "PTSI",
    description: "Company site deployed to Firebase Hosting.",
    note: "Deployed with a lightweight, reliable web stack.",
    image: PTSI,
    demoLink: "https://ptsi-ca79a.web.app",
  },
  {
    title: "RESORTIFYPH",
    description: "Resort booking platform (under development).",
    note: "Designed to feel fast on mobile and desktop.",
    image: RESORTIFYPH,
    demoLink: "https://resortifyph.me",
  },
  {
    title: "IIA",
    description: "Organization website: content, resources, and membership info.",
    note: "Built to centralize event and org information.",
    image: IIA,
    demoLink: "https://iia-p.org",
  },
  {
    title: "HIKESAFE APP",
    description: "Safety-focused hiking app; code available on GitHub.",
    note: "This App is built using React Native, used for offline communication",
    image: HIKESAFE,
    ghLink: "https://github.com/B1kjuu/hikesafenew",
  },
  {
    title: "HIKESAFE WEBSITE",
    description: "Official Website of HIKESAFE. Showcasing our Thesis.",
    note: "Developed to showcase our thesis project.",
    image: HIKESAFEWEB,
    demoLink: "https://hike-safe-website-6lktg4co8-jubikks-projects.vercel.app",
  },
  {
    title: "EASYJOURNAL",
    description: "Simple journaling app; repository with implementation details.",
    note: "A lightweight personal writing tool.",
    image: EASYJOURNAL,
    ghLink: "https://github.com/B1kjuu/EasyJournal",
  },
  {
    title: "INTERFACE 2026",
    description: "A seminar website for INTERFACE 2026 with speaker profiles, roadmap, and registration details.",
    note: "Bridges the event content into a polished seminar experience.",
    image: INTERFACE2026,
    demoLink: "https://interface-2026-six.vercel.app",
  },
  {
    title: "OLD PORTFOLIO",
    description: "Archived Old Portfolio, forked from a template",
    note: "Templated Portfolio from one of the trending templates",
    image: OLDPORTFOLIO,
    demoLink: "https://b1-kjuu-portfolio.vercel.app/editing",
  },
];

export const techSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML5",
  "Python",
];

export const editorStats = [
  { value: "Story-first", label: "visual edits with pacing and mood" },
  { value: "Photo + video", label: "color, framing, retouching, and motion" },
  { value: "Social-ready", label: "formatting for reels, shorts, and campaigns" },
];

export type EditorItem = {
  type: "folder" | "video";
  title: string;
  description?: string;
  note?: string;
  videoUrl?: string;
  items?: EditorItem[];
};

export const editorProjects : EditorItem[] = [
{
    type: "folder",
    title: "UGC",
    items: [
      {
        type: "video",
        title: "King's Media Test",
        description: "Documentary-style assessment emphasizing pacing and visual hooks.",
        note: "High-retention focus.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/reels/retention/kings-media.mp4"
      },
      {
        type: "video",
        title: "Event Reel",
        description: "Fast-paced highlight edit with rhythm-driven transitions.",
        note: "Social delivery.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/reels/retention/event-reel.mp4"
      }
    ]
  },
  {
    type: "folder",
    title: "VFX & Compositing",
    items: [
      {
        type: "video",
        title: "Fusion 3D Track",
        description: "Complex visual effects pipeline integrating 3D camera tracking and node graph setups.",
        note: "DaVinci Resolve Studio.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/reels/vfx/fusion-track.mp4"
      }
    ]
  },
  {
    type: "folder",
    title: "Social UGC",
    items: [
      {
        type: "video",
        title: "Human Dynamix Promo",
        description: "Movement specialist brand content optimized for mobile engagement.",
        note: "Vertical 9:16.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/reels/ugc/human-dynamix.mp4"
      }
    ]
  },
  {
    type: "video",
    title: "Standalone Master Cut",
    description: "A direct video file sitting on the main desktop.",
    note: "4K Master.",
    videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/reels/master-cut.mp4"
  }
];

export const editorTools = [
  "Adobe Premiere Pro",
  "Adobe Photoshop",
  "Affinity",
  "Lightroom",
  "DaVinci Resolve",
  "Canva",
  "CapCut",
  "Figma",
];
