import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mehrtek | Architecting Intelligent Systems",
  description: "Mehrtek specializes in high-performance AI architectures, deep learning systems, and modern web engineering.",
  keywords: ["Mehrtek", "AI Engineer", "Deep Learning", "Machine Learning", "System Architecture", "Python", "Next.js"],
  openGraph: {
    title: "Mehrtek | Architecting Intelligent Systems",
    description: "Specialized in high-performance architectures and intelligent systems using the most advanced tools in the industry.",
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
