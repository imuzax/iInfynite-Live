"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, ArrowUpRight, Phone, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
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
    <footer className="relative z-10 border-t border-white/10 bg-[#040406] overflow-hidden">
      {/* Top Radiant Glowing Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
      
      {/* Subtle Bottom Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & HQ Column (5 cols on large desktop) */}
          <div className="lg:col-span-5 lg:pr-8 flex flex-col justify-between">
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

              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6 font-light">
                We build software that grows businesses. From high-converting websites and native apps to AI automation and enterprise SaaS, we engineer solutions that drive measurable revenue and operational speed.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 max-w-sm">
              <div className="flex items-center gap-3 text-sm text-white/90 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-red-400" />
                </div>
                <span>Pune Camp, Pune, Maharashtra 🇮🇳</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-blue-400" />
                </div>
                <a href="mailto:iinfynite0@gmail.com" className="hover:text-white transition-colors">iinfynite0@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-emerald-400" />
                </div>
                <a href="tel:9588617714" className="hover:text-white transition-colors">+91 95886 17714</a>
              </div>
            </div>
          </div>

          {/* Link Columns with Subtle Separator Borders (7 cols on large desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:border-l lg:border-white/10 lg:pl-10 pt-4 lg:pt-0">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h4
                  className="text-xs font-bold text-white mb-5 uppercase tracking-wider font-mono border-b border-white/10 pb-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center justify-between group py-0.5"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Divider and Security Badges */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
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
              <Sparkles size={14} className="text-yellow-400" /> Strict NDA Protected
            </span>
            <span>•</span>
            <a
              href="https://wa.me/919588617714"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageSquare size={14} /> Direct WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
