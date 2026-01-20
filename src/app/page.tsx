import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import InteractiveScene from "@/components/three/InteractiveScene";
import ProjectCard from "@/components/ui/ProjectCard";
import Footer from "@/components/layout/Footer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

import { projects } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InteractiveScene />
      <Hero />
      


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
