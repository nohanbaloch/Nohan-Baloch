import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import InteractiveScene from "@/components/three/InteractiveScene";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InteractiveScene />
      <Hero />
      
      <section className="py-24 px-6 relative border-t border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expert <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Specialized in high-performance architectures and intelligent systems 
              using the most advanced tools in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React", "Next.js", "TypeScript", "Node.js", 
              "Python", "TensorFlow", "FastAPI", "MongoDB",
              "Three.js", "Docker", "AWS", "PostgreSQL"
            ].map(skill => (
              <div key={skill} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center gap-4 group hover:border-accent/40 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:neon-shadow transition-all duration-300">
                  <span className="text-accent font-bold text-xs">{skill.charAt(0)}</span>
                </div>
                <span className="font-bold text-sm tracking-widest uppercase">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted text-lg">
                A collection of high-impact projects ranging from AI-powered applications 
                to scalable full-stack ecosystem.
              </p>
            </div>
            <a href="/work" className="text-accent font-bold hover:underline mb-2 transition-all">View all work &rarr;</a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} ANTIGRAVITY. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
