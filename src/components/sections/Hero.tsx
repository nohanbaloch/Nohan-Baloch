"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    animate(".hero-text-item", {
      translateY: [20, 0],
      opacity: [0, 1],
      delay: stagger(100),
      easing: "easeOutExpo",
      duration: 1200,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <div ref={containerRef}>
          <div className="hero-text-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for Projects
          </div>
          
          <h1 className="hero-text-item text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Building <br />
            <span className="text-gradient">Intelligent</span> Future
          </h1>
          
          <p className="hero-text-item text-lg text-muted max-w-lg mb-8">
            Hello, I'm <span className="text-white font-bold">Nohan Baloch</span>. 
            An AI major dedicated to <span className="text-accent">Deep Learning</span> and 
            Modern Frontend Engineering. Solving complex problems with technical excellence.
          </p>
          
          <div className="hero-text-item flex flex-wrap gap-4 mb-12">
            <Link 
              href="/work" 
              className="group px-8 py-4 rounded-xl bg-accent text-background font-bold flex items-center gap-2 hover:neon-shadow transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-xl glass font-bold text-foreground hover:bg-white/10 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>
          
          <div className="hero-text-item flex items-center gap-6">
            <a 
              href="https://github.com/nohanbaloch" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="text-muted hover:text-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:hello@example.com" 
              aria-label="Send Email"
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="hero-text-item relative hidden md:block">
          <div className="relative w-[450px] h-[450px] rounded-[40px] overflow-hidden border border-white/10 glass neon-shadow">
            <Image 
              src="/profile.png" 
              alt="Nohan Baloch" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="450px"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
