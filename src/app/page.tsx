"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Building2,
  Lock,
  MessageSquare,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Bot,
  BarChart3,
  Globe,
  Award,
  Check,
  Briefcase,
  ArrowUpRight,
  ShieldAlert
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionsData } from "@/lib/solutions-data";

// Clean FAQ Data focused on Business Trust & Transparency
const faqItems = [
  {
    q: "Why should we choose iInfynite over traditional IT agencies or freelancers?",
    a: "Traditional agencies focus on jargon and billable hours, while freelancers often lack enterprise reliability and support. At iInfynite, we operate as your dedicated engineering partner. We focus 100% on solving your core business problem and increasing your revenue, delivering clean, scalable software with rapid sprint turnaround and direct senior engineer access."
  },
  {
    q: "Who owns the Intellectual Property (IP) and source code once the project is completed?",
    a: "You do, 100%. Upon project completion and final settlement, we transfer full source code ownership, administrative credentials, and intellectual property rights directly to your company. There are no vendor lock-ins or recurring licensing fees for your own code."
  },
  {
    q: "How do you protect our confidential business ideas and proprietary data?",
    a: "We sign a strict, legally binding Non-Disclosure Agreement (NDA) before our very first discovery call. All client architectures, customer data, and business workflows are protected with enterprise-grade security protocols."
  },
  {
    q: "What is your typical project delivery timeline and process?",
    a: "Because we utilize modular engineering and our library of 100+ proven architecture blueprints, we can deploy robust custom MVPs in as little as 2 to 4 weeks, and comprehensive enterprise platforms in 6 to 12 weeks. You receive weekly demo links to track real progress every step of the way."
  },
  {
    q: "Do you provide post-launch technical maintenance and cloud scaling support?",
    a: "Yes! We offer 24/7 Service Level Agreements (SLAs), cloud server monitoring, security patching, and ongoing feature enhancements. We keep your platform running smoothly at 99.9% uptime so you can focus entirely on sales and daily operations."
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const topSolutions = solutionsData.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-[#050507]">
      {/* ====== 1. AUTHORITATIVE HERO SECTION ====== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-20 md:pt-32 md:pb-24">
        {/* Subtle, calm ambient background glow - Zero eye fatigue */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-emerald-600/[0.05] rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="container-main text-center relative z-10 px-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-xs sm:text-sm font-medium text-white/90 mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>We Don&apos;t Build Portfolios. We Build Revenue Engines.</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 max-w-5xl mx-auto text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Build Software That <span className="gradient-text">Grows Businesses.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* Clean, authoritative service category pill bar */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-white/80 max-w-3xl mx-auto mb-6 uppercase tracking-wider font-mono">
              <span className="px-3 py-1 rounded bg-white/[0.06] border border-white/10">Websites</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded bg-white/[0.06] border border-white/10">Mobile Apps</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded bg-white/[0.06] border border-white/10">AI Automation</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded bg-white/[0.06] border border-white/10">SaaS</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded bg-white/[0.06] border border-white/10">Custom Software</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Clients don&apos;t care about complex technical jargon; they care if you can solve their operational bottlenecks and drive sales. We architect high-converting digital platforms and automated systems engineered for speed, reliability, and measurable ROI.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-16">
              <Link
                href="/contact"
                className="btn-primary text-sm sm:text-base px-9 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary text-sm sm:text-base px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Case Studies</span>
                <ExternalLink size={14} className="text-white/60" />
              </Link>
            </div>
          </FadeIn>

          {/* Stable, Clean Business Impact Summary Dashboard */}
          <FadeIn delay={0.4}>
            <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0a0a0d] border border-white/15 shadow-2xl relative text-left">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Client Value Guarantee
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Engineered For Real Business Growth</h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white/60 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <MapPin size={14} className="text-red-400" /> Pune Camp HQ 🇮🇳 • Global Standards
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-[#111116] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3 text-white/50">
                    <span className="text-xs font-semibold uppercase font-mono">Conversion Speed</span>
                    <Zap size={16} className="text-yellow-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">&lt; 0.8s Load</div>
                  <p className="text-xs text-white/60 leading-relaxed">Lightning fast pages that rank #1 on Google and turn visitors into buyers.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#111116] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3 text-white/50">
                    <span className="text-xs font-semibold uppercase font-mono">Manual Labor Saved</span>
                    <Bot size={16} className="text-emerald-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">20+ Hrs/Wk</div>
                  <p className="text-xs text-white/60 leading-relaxed">AI chatbots and custom workflow automation handle repetitive daily tasks 24/7.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#111116] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3 text-white/50">
                    <span className="text-xs font-semibold uppercase font-mono">Code Ownership</span>
                    <ShieldCheck size={16} className="text-blue-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100% Client Owns</div>
                  <p className="text-xs text-white/60 leading-relaxed">Zero vendor lock-in. Full source code and IP rights transferred upon completion.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== 2. CLEAN TRUST & SECURITY RIBBON ====== */}
      <section className="py-10 border-y border-white/10 bg-[#07070a]">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center text-xs sm:text-sm font-semibold text-white/80">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
              <span>100% IP & Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Lock size={18} className="text-blue-400 shrink-0" />
              <span>Strict NDA Confidentiality</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock size={18} className="text-yellow-400 shrink-0" />
              <span>Rapid Agile Sprints (2–4 Weeks)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award size={18} className="text-purple-400 shrink-0" />
              <span>Dedicated 24/7 Technical Support SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. CORE SERVICES (CLEAN, STABLE, BUSINESS-OUTCOME FOCUSED) ====== */}
      <section className="py-16 md:py-24 relative">
        <div className="container-main">
          <SectionHeading
            title="How We Transform Your Business"
            subtitle="We engineer tailored digital solutions designed to capture market share, streamline daily operations, and maximize revenue—without technical complexity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Business Websites & Landing Pages",
                icon: Globe,
                outcome: "Capture Leads & Drive Sales",
                desc: "Your website should not be a static brochure. We build high-converting landing pages, corporate websites, and e-commerce portals engineered for speed, trust, and customer conversion."
              },
              {
                title: "Custom Mobile App Development",
                icon: Smartphone,
                outcome: "Engage Customers Anywhere",
                desc: "We build intuitive, reliable iOS and Android native mobile applications that give your users a seamless 5-star digital experience and keep them coming back to your brand."
              },
              {
                title: "AI Chatbots & Workflow Automation",
                icon: Bot,
                outcome: "Save 20+ Hours of Manual Work",
                desc: "Stop wasting hours on repetitive tasks. We build 24/7 AI customer support bots, lead qualification agents, and custom internal workflow automations trained on your exact business data."
              },
              {
                title: "Custom Software (ERP/CRM/HRMS)",
                icon: Layers,
                outcome: "Replace Messy Spreadsheets",
                desc: "Outgrow rigid, generic software. We engineer custom CRM systems, billing portals, inventory trackers, and staff management dashboards tailored exactly to how your business operates."
              },
              {
                title: "SaaS Platform Development",
                icon: Code2,
                outcome: "Launch Your Recurring Revenue Product",
                desc: "Have an innovative software idea? We turn your concept into a robust, scalable Software-as-a-Service (SaaS) platform with built-in subscription billing, user roles, and admin controls."
              },
              {
                title: "Digital Growth & Speed Optimization",
                icon: TrendingUp,
                outcome: "Rank #1 & Reduce Customer Drop-off",
                desc: "Slow websites lose money. We audit your existing platforms, fix technical SEO bottlenecks, optimize loading speeds to under 1 second, and refine conversion funnels for maximum ROI."
              }
            ].map((srv, idx) => (
              <FadeIn key={srv.title} delay={idx * 0.08}>
                <div className="p-7 rounded-3xl bg-[#0c0c10] border border-white/10 hover:border-white/25 hover:bg-[#111116] transition-all duration-300 flex flex-col h-full group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200 shadow-sm">
                      <srv.icon size={22} className="text-white/80 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      {srv.outcome}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed mb-8 flex-1">
                    {srv.desc}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/70 group-hover:text-white mt-auto transition-colors">
                    <span>Learn How We Implement This</span>
                    <ArrowRight size={16} className="text-blue-400 transition-colors" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. THE 100+ READY SOLUTIONS ENGINE (STABLE CENTERPIECE) ====== */}
      <section className="py-16 md:py-24 border-y border-white/10 bg-[#08080c] relative">
        <div className="container-main">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#111118] to-[#0a0a0f] border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white mb-4 uppercase tracking-wider">
                <Sparkles size={14} className="text-yellow-400" /> Proven Industry Blueprints
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Why Start From Scratch When We Already Have Your Blueprint?
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
                Don&apos;t risk your budget on unproven experiments. We have engineered over 100 ready-to-deploy software architectures across 10 major industries. We take these proven frameworks and customize them 100% to your unique business workflow.
              </p>
            </div>

            {/* Clean 3-Column Preview of Top Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {topSolutions.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="p-6 rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-white/30 transition-all flex flex-col group"
                >
                  <div className="text-xs font-mono uppercase text-blue-400 font-semibold mb-2">{sol.industry}</div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">{sol.title}</h4>
                  <p className="text-xs text-white/60 line-clamp-2 mb-6 flex-1 leading-relaxed">{sol.shortDescription}</p>
                  <div className="flex items-center justify-between text-xs font-semibold text-white/70 pt-3 border-t border-white/10 group-hover:text-white transition-colors">
                    <span>View Blueprint</span>
                    <ArrowUpRight size={14} className="text-blue-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Elegant Industry Pill Tag Cloud (Replacing Emojis) */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 font-mono">Deep Expertise Across 10 Major Industries:</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Healthcare & Clinics", "E-Commerce & Retail", "AI & Workflow Automation",
                    "SaaS Platforms", "Real Estate & Solar", "ERP & Business Ops",
                    "FinTech & Billing", "Logistics & Supply Chain", "Hospitality & Travel", "Education & EdTech"
                  ].map((ind) => (
                    <span key={ind} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href="/solutions"
                  className="btn-primary text-sm px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 inline-flex items-center gap-2 shadow-lg whitespace-nowrap"
                >
                  <span>Explore All 100+ Solutions</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 5. HOW WE WORK (TRANSPARENT 4-STEP TIMELINE) ====== */}
      <section className="py-16 md:py-24 relative">
        <div className="container-main">
          <SectionHeading
            title="Our Transparent Delivery Process"
            subtitle="We replace traditional software development chaos with a structured, transparent 4-step engineering journey designed for rapid speed and zero surprises."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Roadmap",
                desc: "We analyze your core business problem, target customers, and revenue goals to map out exact technical specifications and milestone deliverables."
              },
              {
                step: "02",
                title: "UI/UX & Architecture",
                desc: "Our designers craft stunning, high-converting interfaces while senior architects design secure database schemas and scalable server logic."
              },
              {
                step: "03",
                title: "Agile Sprint Dev",
                desc: "We build your software in weekly agile sprints, sharing live demo links every week so you track real progress and provide feedback early."
              },
              {
                step: "04",
                title: "Launch & 24/7 SLA",
                desc: "We deploy smoothly to secure cloud servers, transfer 100% code ownership, train your staff, and provide 24/7 dedicated monitoring."
              }
            ].map((st, idx) => (
              <FadeIn key={st.step} delay={idx * 0.1}>
                <div className="p-7 rounded-3xl bg-[#0b0b0e] border border-white/10 flex flex-col h-full relative overflow-hidden group hover:border-white/20 transition-all duration-200">
                  <div className="text-4xl font-bold font-mono text-white/15 mb-6 group-hover:text-white/30 transition-colors">
                    {st.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white">
                    {st.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">
                    {st.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 6. WHY BRANDS TRUST IINFYNITE (CLEAN 4-PILLAR STRUCTURE) ====== */}
      <section className="py-16 md:py-24 border-y border-white/10 bg-[#07070a]">
        <div className="container-main">
          <SectionHeading
            title="Why Leading Founders Partner With iInfynite"
            subtitle="We built our agency to solve the common frustrations businesses experience with typical IT vendors and unreliable freelancers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "100% Revenue & ROI Focused",
                desc: "We don't get distracted by shiny tech fads. Every button, workflow, and database query we design is optimized to increase user conversion and reduce your operational costs.",
                icon: TrendingUp
              },
              {
                title: "Zero Tech Jargon",
                desc: "We communicate in clear, honest business English. You will never be confused by technical buzzwords. You will always know exactly what we are building and why.",
                icon: MessageSquare
              },
              {
                title: "Direct Engineer Access",
                desc: "You work directly with the senior engineers and architects building your software—not middlemen, junior trainees, or account executives who slow down communication.",
                icon: Users
              },
              {
                title: "Fixed Milestone Pricing",
                desc: "No hidden fees, unexpected billable hours, or scope creep surprises. Everything is agreed upon upfront with transparent, milestone-based deliverables.",
                icon: CheckCircle2
              }
            ].map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/90">
                    <pillar.icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">
                    {pillar.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 7. CLEAN FAQ SECTION (ADDRESSING CLIENT HESITATIONS) ====== */}
      <section className="py-16 md:py-24 relative">
        <div className="container-main max-w-4xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our engineering standards, IP ownership, confidentiality NDAs, and delivery schedules."
          />

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={idx} delay={idx * 0.06}>
                  <div
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="p-6 sm:p-7 rounded-2xl bg-[#0b0b0f] border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.q}
                      </h3>
                      <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-white text-black" : "text-white/60"}`}>
                        <ChevronDown size={16} />
                      </div>
                    </div>
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-white/10 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                        {item.a}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== 8. HIGH-CONVERTING CONTACT CTA SECTION (PUNE CAMP HQ) ====== */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/[0.08] rounded-full blur-[150px] pointer-events-none" />
        <div className="container-main relative z-10">
          <FadeIn>
            <div className="p-8 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-b from-[#101016] via-[#0c0c10] to-[#101016] border border-white/20 shadow-2xl text-center relative overflow-hidden">
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white mb-6 uppercase tracking-wider font-mono">
                  <MapPin size={14} className="text-red-400" /> Pune Camp HQ 🇮🇳 • Global Clients
                </div>
                <h2
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Ready to Turn Your Vision Into a <span className="gradient-text">Market Leader?</span>
                </h2>
                <p className="text-base sm:text-lg text-white/70 mb-10 leading-relaxed font-light">
                  Whether you need a high-converting website, a custom mobile app, or an autonomous AI workflow, let&apos;s schedule a 30-minute technical consultation. Zero obligation, zero technical jargon—just honest engineering advice.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="btn-primary text-base px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 w-full sm:w-auto shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Schedule Free Technical Call</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/919588617714?text=Hi%2C%20I%20visited%20your%20website%20and%20am%20interested%20in%20discussing%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#18181f] hover:bg-[#22222a] border border-white/15 text-white font-medium text-center flex items-center justify-center gap-2 text-sm transition-all shadow-lg"
                  >
                    <MessageSquare size={16} className="text-green-400" /> Chat on WhatsApp Now
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-white/10 text-xs sm:text-sm text-white/60">
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-blue-400" /> Pune Camp, Pune, MH 🇮🇳</span>
                  <span className="flex items-center gap-2"><Mail size={16} className="text-blue-400" /> iinfynite0@gmail.com</span>
                  <span className="flex items-center gap-2"><Phone size={16} className="text-emerald-400" /> +91 95886 17714</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
