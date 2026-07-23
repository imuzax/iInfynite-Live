"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "App Development", href: "/services" },
      { label: "Graphic Design", href: "/services" },
      { label: "Digital Growth", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();

  // Don't show footer on admin pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative z-10 border-t border-glass-border">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Logo className="h-6 w-auto text-white opacity-90 group-hover:opacity-100 transition-opacity" />
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                iInfynite
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-md mb-6">
              We craft digital experiences that drive growth. From stunning
              websites to powerful apps, we bring your vision to life with
              precision and creativity.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} className="text-accent" />
                <span>Pune Camp</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Mail size={14} className="text-accent" />
                <a href="mailto:iinfynite0@gmail.com" className="hover:text-foreground transition-colors">iinfynite0@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Phone size={14} className="text-accent" />
                <a href="tel:9588617714" className="hover:text-foreground transition-colors">9588617714</a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4
                className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} iInfynite. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Crafted with passion in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
