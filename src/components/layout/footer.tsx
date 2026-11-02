"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, ShieldCheck, Lock, MessageSquare } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/social-icons";
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
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50 text-slate-800 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Standard Normal Balanced Spacing */}
      <div className="container-main pt-14 md:pt-16 lg:pt-20 pb-6 md:pb-8 relative z-10">
        
        {/* Balanced 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          
          {/* Column 1 & 2: Brand & Contact Info */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6 lg:pr-10">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2.5 group w-fit">
                <Logo className="h-7 w-auto text-slate-900 opacity-95 group-hover:opacity-100 transition-opacity" />
                <span
                  className="text-2xl font-bold tracking-tight text-slate-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  iINFYNITE
                </span>
              </Link>
              
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                We build custom software that grows businesses. From high-converting websites and native apps to AI automation and enterprise SaaS, we engineer solutions that drive real revenue.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-red-500 shrink-0" />
                <span>Pune Camp, Pune, Maharashtra 🇮🇳</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-600 shrink-0" />
                <a href="mailto:iinfynite0@gmail.com" className="hover:text-blue-600 transition-colors duration-200">iinfynite0@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-emerald-600 shrink-0" />
                <a href="tel:9588617714" className="hover:text-emerald-600 transition-colors duration-200">+91 95886 17714</a>
              </div>

              {/* Official Company Social Links */}
              <div className="pt-4 flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/company/113274914/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-all duration-200 shadow-xs group"
                >
                  <LinkedinIcon size={15} className="text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
                  <span>LinkedIn Page</span>
                </a>
                <a
                  href="https://github.com/imuzax/iInfynite-Live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-all duration-200 shadow-xs group"
                >
                  <GithubIcon size={15} className="text-slate-900 group-hover:scale-110 transition-transform shrink-0" />
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columns 3, 4, 5: Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="lg:col-span-1 flex flex-col">
              <h4
                className="text-sm font-semibold text-slate-900 tracking-wide mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 md:mt-14 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} iINFYNITE. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Engineered for Revenue Growth in Pune 🇮🇳</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-700 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-blue-600" /> 100% IP Ownership
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Lock size={14} className="text-amber-600" /> NDA Protected
            </span>
            <span className="text-slate-300">•</span>
            <a
              href="https://wa.me/919588617714"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
            >
              <MessageSquare size={14} /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
