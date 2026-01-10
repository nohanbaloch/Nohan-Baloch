import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "src/content/blog");
const WORK_CONTENT_PATH = path.join(process.cwd(), "src/content/work");

export function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data,
    content,
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(BLOG_CONTENT_PATH)) return [];
  return fs.readdirSync(BLOG_CONTENT_PATH).filter(f => f.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ""));
}

export function getWorkBySlug(slug: string) {
  const fullPath = path.join(WORK_CONTENT_PATH, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data,
    content,
  };
}

export function getAllWorkSlugs() {
  if (!fs.existsSync(WORK_CONTENT_PATH)) return [];
  return fs.readdirSync(WORK_CONTENT_PATH).filter(f => f.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ""));
}
