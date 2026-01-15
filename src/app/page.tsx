import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import InteractiveScene from "@/components/three/InteractiveScene";
import ProjectCard from "@/components/ui/ProjectCard";
import Footer from "@/components/layout/Footer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { projects, skills, siteConfig } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InteractiveScene />
      <Hero />
      
      <section className="py-24 px-6 relative border-t border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <Reveal width="100%">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Expert <span className="text-gradient">Stack</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl">
                {siteConfig.description}
              </p>
            </div>
          </Reveal>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map(skill => (
              <StaggerItem key={skill.name}>
                <TiltCard className="h-full">
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center gap-4 group hover:border-accent/40 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:neon-shadow transition-all duration-300">
                      <span className="text-accent font-bold text-xs">{skill.name.charAt(0)}</span>
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase">{skill.name}</span>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal width="100%">
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
              <Link href="/work" className="text-accent font-bold hover:underline mb-2 transition-all">View all work &rarr;</Link>
            </div>
          </Reveal>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <StaggerItem key={idx}>
                <ProjectCard {...project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  );
}
