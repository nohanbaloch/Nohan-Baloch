import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const posts = [
  {
    title: "The Future of AI in Web Engineering",
    date: "Jan 5, 2026",
    excerpt: "How generative AI and intelligent models are reshaping the way we build and maintain web applications.",
    slug: "future-of-ai",
    tags: ["AI", "Architecture"]
  },
  {
    title: "Scaling MERN Applications for Enterprise",
    date: "Dec 20, 2025",
    excerpt: "Best practices for ensuring your MERN stack can handle millions of users without breaking a sweat.",
    slug: "scaling-mern",
    tags: ["MERN", "Performance"]
  },
  {
    title: "Three.js: Beyond the Basics",
    date: "Dec 12, 2025",
    excerpt: "Advanced shaders and performance optimizations for complex 3D web experiences.",
    slug: "threejs-advanced",
    tags: ["3D", "Performance"]
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Technical <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted">
            Sharing my thoughts on AI, web performance, and the future of software engineering.
          </p>
        </div>

        <div className="space-y-12 mb-24">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-accent px-2 py-1 bg-accent/10 rounded">
                  {post.tags[0]}
                </span>
                <span className="text-muted text-sm">{post.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-muted text-lg mb-6 max-w-2xl">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-accent font-bold group/btn">
                Read Article
                <MoveRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
