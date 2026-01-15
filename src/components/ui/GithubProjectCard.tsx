"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  stars?: number;
  forks?: number;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  stars,
  forks,
  className,
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-accent/30 h-full flex flex-col",
          className
        )}
      >
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest text-accent px-2 py-1 rounded bg-accent/10 border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors capitalize">
            {title.replace(/-/g, " ")}
          </h3>
          
          <p className="text-muted text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
            {description}
          </p>

          {(stars !== undefined || forks !== undefined) && (
             <div className="flex items-center gap-4 text-muted text-xs font-bold pt-4 border-t border-white/10 mt-auto">
                {stars !== undefined && (
                    <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" /> {stars}
                    </div>
                )}
                {forks !== undefined && (
                    <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" /> {forks}
                    </div>
                )}
             </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
