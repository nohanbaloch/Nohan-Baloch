"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  liveLink?: string;
  image?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  liveLink,
  className,
}: ProjectCardProps) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-accent/30 h-full",
          className
        )}
      >
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest text-accent px-2 py-1 rounded bg-accent/10 border border-accent/20"
              >
                {tag}
              </span>
            ))}
            {liveLink && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-white px-2 py-1 rounded bg-green-500/20 border border-green-500/40 animate-pulse">
                Live
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
            {title}
          </h3>
          
          <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
            {description}
          </p>
        </div>

        {/* Subtle Glow Effect */}
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </Link>
  );
}
