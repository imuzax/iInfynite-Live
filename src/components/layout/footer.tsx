"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, ShieldCheck, Lock, MessageSquare } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  {
    title: "Core Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps (iOS/Android)", href: "/services" },
      { label: "AI Solutions & Agents", href: "/services" },
      { label: "Custom Software (ERP/CRM)", href: "/services" },
      { label: "SaaS Platform Dev", href: "/services" },
      { label: "Digital Growth & SEO", href: "/services" },
    ],
  },
  {
    title: "Ready Solutions (100+)",
    links: [
      { label: "Explore All 100+ Blueprints", href: "/solutions" },
      { label: "Healthcare & Medical", href: "/solutions" },
      { label: "E-Commerce & Retail", href: "/solutions" },
      { label: "AI & Workflow Automation", href: "/solutions" },
      { label: "FinTech & Billing Engines", href: "/solutions" },
      { label: "Logistics & Supply Chain", href: "/solutions" },
    ],
  },
  {
    title: "Agency & Support",
    links: [
      { label: "About iInfynite", href: "/about" },
      { label: "Case Studies & ROI", href: "/projects" },
      { label: "Our Delivery Process", href: "/#contact" },
      { label: "Schedule Tech Call", href: "/contact" },
      { label: "24/7 SLA Portal", href: "/contact" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();

  // Don't show footer on admin pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050507] text-white overflow-hidden">
      {/* Subtle Ambient Glow - Calm, Zero Noise */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-main py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Brand & HQ Column (5 cols on desktop) - Clean vertical flow without internal borders */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pr-6">
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                <Logo className="h-7 w-auto text-white opacity-95 group-hover:opacity-100 transition-opacity" />
                <span
                  className="text-2xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  iInfynite
                </span>
              </Link>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Systems Operational • 99.9% Uptime SLA</span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed max-w-sm font-light">
                We build software that grows businesses. From high-converting websites and native mobile apps to AI automation and enterprise SaaS, we engineer solutions that drive measurable revenue and operational speed.
              </p>
            </div>

            <div className="space-y-3 pt-2 max-w-sm">
              <div className="flex items-center gap-3 text-sm text-white/90 font-medium">
                <MapPin size={16} className="text-red-400 shrink-0" />
                <span>Pune Camp, Pune, Maharashtra 🇮🇳</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:iinfynite0@gmail.com" className="hover:text-white transition-colors duration-200">iinfynite0@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <a href="tel:9588617714" className="hover:text-white transition-colors duration-200">+91 95886 17714</a>
              </div>
            </div>
          </div>

          {/* Link Columns (7 cols on desktop) - Perfectly aligned at the top without clutter or jumping arrows */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-2 lg:pt-0">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h4
                  className="text-xs font-bold text-white/80 mb-5 uppercase tracking-wider font-mono"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-200 block py-0.5 font-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Separated by ONE single clean top border */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} iInfynite. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Engineered for Revenue Growth.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 text-white/70 font-medium">
              <ShieldCheck size={14} className="text-blue-400" /> 100% IP Ownership
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-white/70 font-medium">
              <Lock size={14} className="text-yellow-400" /> Strict NDA Protected
            </span>
            <span>•</span>
            <a
              href="https://wa.me/919588617714"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-200"
            >
              <MessageSquare size={14} /> Direct WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
