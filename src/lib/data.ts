import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    title: "UniSchedule",
    description: "A comprehensive university scheduling platform designed to streamline course management and student timetables.",
    tags: ["Next.js", "TypeScript", "Automation"],
    link: "/work/unischedule"
  },
  {
    title: "EMOVISTA",
    description: "An advanced emotional analysis system utilizing computer vision and deep learning to interpret human expressions in real-time.",
    tags: ["Deep Learning", "Computer Vision", "Python"],
    link: "/work/emovista"
  }
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Three.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Python", category: "ai" },
  { name: "TensorFlow", category: "ai" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "tools" }
];

export const siteConfig = {
    title: "Nohan Baloch",
    description: "Specialized in high-performance architectures and intelligent systems using the most advanced tools in the industry.",
    footerText: `© ${new Date().getFullYear()} Nohan Baloch. All rights reserved.`
}
