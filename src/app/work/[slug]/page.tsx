import { getWorkBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 px-6 pb-24">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center gap-2 text-muted hover:text-accent mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
        
        <div className="mb-16">
          <div className="flex flex-wrap gap-3 mb-6">
            {project.frontmatter.tags?.map((tag: string) => (
              <span key={tag} className="text-xs font-bold uppercase tracking-widest text-accent px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            {project.frontmatter.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {project.frontmatter.description}
          </p>
        </div>

        <div className="prose prose-invert prose-accent max-w-none border-t border-white/10 pt-16">
          <MDXRemote source={project.content} />
        </div>
      </div>
    </main>
  );
}
