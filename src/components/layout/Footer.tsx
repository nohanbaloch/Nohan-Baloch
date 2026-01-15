import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted text-sm">
          {siteConfig.footerText}
        </p>
        <div className="flex gap-8 text-sm text-muted">
          <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
