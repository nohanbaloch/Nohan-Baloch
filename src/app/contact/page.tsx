"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <main className="min-h-screen pt-32 px-6">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="text-gradient">Innovate</span> Together
          </h1>
          <p className="text-xl text-muted">
            Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-12 rounded-3xl border border-accent/20 bg-accent/5 backdrop-blur-sm text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold italic">Message Received!</h2>
            <p className="text-muted text-lg">
              Thank you for reaching out. I'll review your inquiry and contact you shortly.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 rounded-xl glass font-bold"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-muted mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent/50 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-muted mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent/50 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-bold uppercase tracking-widest text-muted mb-2">Interest</label>
                <select 
                  id="interest"
                  aria-label="Select your project interest"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent/50 outline-none transition-all appearance-none"
                >
                  <option className="bg-background">AI Development</option>
                  <option className="bg-background">Web Architecture</option>
                  <option className="bg-background">Full-Stack Project</option>
                  <option className="bg-background">Consulting</option>
                </select>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-muted mb-2">Message</label>
                <textarea 
                  required
                  rows={8}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent/50 outline-none transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-2xl bg-accent text-background font-bold flex items-center justify-center gap-2 hover:neon-shadow transition-all"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
