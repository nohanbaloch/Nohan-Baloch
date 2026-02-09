export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  liveLink?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools";
}
