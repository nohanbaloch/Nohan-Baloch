import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-12">
          AI Major <span className="text-gradient">& Engineer</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <p className="text-xl text-muted leading-relaxed">
              I'm <span className="text-foreground font-bold">Nohan Baloch</span>, currently 
              pursuing a Bachelor's degree in <span className="text-accent italic text-sm tracking-widest uppercase font-bold">Artificial Intelligence</span>. 
              My passion lies at the intersection of deep neural networks and modern web interfaces.
            </p>
            <p className="text-lg text-muted/80 leading-relaxed">
              As a front-end developer and AI student, I specialize in building 
              intelligent applications that are as intuitive as they are powerful. 
              I take pride in troubleshooting complex issues and architecting 
              clean solutions for difficult problems.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-accent text-sm">Capabilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Deep Learning & ML",
                  "Python Development",
                  "Front-end Engineering",
                  "Troubleshooting & Debugging",
                  "System Design",
                  "Problem Solving"
                ].map(skill => (
                  <div key={skill} className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glass mb-4">
              <Image 
                src="/profile.png" 
                alt="Nohan Baloch" 
                fill 
                className="object-cover"
                sizes="(max-w-768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h4 className="font-bold mb-4">Location</h4>
              <p className="text-muted">Global / Remote</p>
            </div>
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h4 className="font-bold mb-4">Availability</h4>
              <p className="text-muted">Available for Q1 2026</p>
            </div>
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
              <a href="/contact" className="inline-block w-full py-3 rounded-xl bg-accent text-background font-bold hover:neon-shadow transition-all">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
