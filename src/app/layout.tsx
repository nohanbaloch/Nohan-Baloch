import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nohan Baloch | AI Engineer & Frontend Developer",
  description: "Portfolio of Nohan Baloch, an AI major specializing in Deep Learning, ML, and Modern Web Development.",
  keywords: ["Nohan Baloch", "AI Engineer", "Deep Learning", "Machine Learning", "Frontend Developer", "Python", "Next.js"],
  openGraph: {
    title: "Nohan Baloch | AI Engineer & Frontend Developer Portfolio",
    description: "Showcase of AI projects and web engineering excellence by Nohan Baloch.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-inter antialiased bg-background text-foreground`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
