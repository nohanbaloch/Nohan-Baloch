import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    title: "Retro Web OS",
    description: "A fully functional vintage-style operating system built for the web, featuring window management and native-feeling applications.",
    tags: ["Three.js", "React", "Systems Design"],
    link: "/work/retro-web-os",
    liveLink: "https://retro-web-os.vercel.app/"
  },
  {
    title: "Lexora PDF Reader",
    description: "A high-performance PDF manipulation and viewing system with optimized Go-based rendering engines.",
    tags: ["Go", "Fyne", "PDF Processing"],
    link: "/work/pdf-reader"
  },
  {
    title: "AURA",
    description: "A production-grade, local-first AI companion demonstrating cognitive-like behavior through advanced architecture.",
    tags: ["AI", "Python", "Cognitive Systems"],
    link: "/work/aura"
  },
  {
    title: "NeuralVision AI",
    description: "Enterprise-grade object detection platform processing 10k+ images/sec. Built with React, FastAPI, and TensorFlow.",
    tags: ["AI", "Computer Vision", "FastAPI"],
    link: "/work/neural-vision"
  },
  {
    title: "Autonomous Navigation",
    description: "A comprehensive navigation system for spacecraft and rovers, integrating perception, planning, and control modules.",
    tags: ["Robotics", "AI", "Computer Vision"],
    link: "/work/autonomous-navigation"
  },
  {
    title: "UniSchedule",
    description: "A comprehensive university scheduling platform designed to streamline course management and student timetables.",
    tags: ["Next.js", "TypeScript", "Automation"],
    link: "/work/unischedule",
    liveLink: "https://unischedule-mehrtek.vercel.app/"
  },
  {
    title: "EMOVISTA",
    description: "An advanced emotional analysis system utilizing computer vision and deep learning to interpret human expressions in real-time.",
    tags: ["Deep Learning", "Computer Vision", "Python"],
    link: "/work/emovista"
  },
  {
    title: "AstroPrediction",
    description: "Statistical and deep learning system for prediction and classification of celestial objects and events.",
    tags: ["Astrophysics", "Deep Learning", "Data Science"],
    link: "/work/astronomical-prediction"
  },
  {
    title: "Sensor-Web",
    description: "A specialized platform for real-time sensor data aggregation and visualization across distributed networks.",
    tags: ["IoT", "Web Sockets", "Visualization"],
    link: "/work/sensor-web"
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
