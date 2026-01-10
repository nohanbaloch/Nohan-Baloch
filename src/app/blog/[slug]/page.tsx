import { getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/ui/Navbar";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 px-6 pb-24">
      <Navbar />
      <article className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="flex gap-4 mb-6">
            {post.frontmatter.tags?.map((tag: string) => (
              <span key={tag} className="text-xs font-bold uppercase tracking-widest text-accent">
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {post.frontmatter.title}
          </h1>
          <p className="text-muted">{post.frontmatter.date}</p>
        </div>

        <div className="prose prose-invert prose-accent max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
