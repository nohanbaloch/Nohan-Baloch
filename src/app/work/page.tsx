import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";

import { projects } from "@/lib/data";

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Selected <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-muted">
            Exploring the boundaries of what's possible at the intersection of 
            Artificial Intelligence and modern web engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
