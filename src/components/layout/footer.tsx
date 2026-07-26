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
    title: "Ready Solutions",
    links: [
      { label: "100+ Architecture Blueprints", href: "/solutions" },
      { label: "Healthcare & Clinics", href: "/solutions" },
      { label: "E-Commerce & Retail", href: "/solutions" },
      { label: "AI & Automation Engine", href: "/solutions" },
      { label: "ERP & Billing Systems", href: "/solutions" },
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
      { label: "24/7 Support Portal", href: "/contact" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();

  // Don't show footer on admin pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050507] text-white overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Standard Normal Balanced Spacing (pt-20 = 80px top gap, pb-8 = 32px bottom gap for clean copyright margin) */}
      <div className="container-main pt-14 md:pt-16 lg:pt-20 pb-6 md:pb-8 relative z-10">
        
        {/* Balanced 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          
          {/* Column 1 & 2: Brand & Contact Info (2 cols on desktop = 40% width) */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6 lg:pr-10">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2.5 group w-fit">
                <Logo className="h-7 w-auto text-white opacity-95 group-hover:opacity-100 transition-opacity" />
                <span
                  className="text-2xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  iInfynite
                </span>
              </Link>
              
              <p className="text-white/60 text-sm leading-relaxed max-w-sm font-light">
                We build custom software that grows businesses. From high-converting websites and native apps to AI automation and enterprise SaaS, we engineer solutions that drive real revenue.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-red-400 shrink-0" />
                <span>Pune Camp, Pune, Maharashtra 🇮🇳</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <a href="mailto:iinfynite0@gmail.com" className="hover:text-white transition-colors duration-200">iinfynite0@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-emerald-400 shrink-0" />
                <a href="tel:9588617714" className="hover:text-white transition-colors duration-200">+91 95886 17714</a>
              </div>
            </div>
          </div>

          {/* Columns 3, 4, 5: Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="lg:col-span-1 flex flex-col">
              <h4
                className="text-sm font-semibold text-white tracking-wide mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
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

        {/* Bottom Copyright Bar - Standard Normal 56px Top Margin */}
        <div className="mt-12 md:mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} iInfynite. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Engineered for Revenue Growth in Pune 🇮🇳</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-white/70 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-blue-400" /> 100% IP Ownership
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Lock size={14} className="text-yellow-400" /> NDA Protected
            </span>
            <span className="text-white/20">•</span>
            <a
              href="https://wa.me/919588617714"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-200"
            >
              <MessageSquare size={14} /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
