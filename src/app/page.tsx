"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Building2,
  Database,
  Cloud,
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
  Terminal,
  ShieldAlert,
  Award
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionsData } from "@/lib/solutions-data";

// FAQ Data
const faqItems = [
  {
    q: "Why should we choose iInfynite over traditional IT agencies or freelancers?",
    a: "Traditional agencies focus on jargon and billable hours, while freelancers often lack enterprise scalability and reliability. At iInfynite, we operate as your dedicated engineering partner. We focus 100% on your business problem and revenue growth, delivering clean, battle-tested code with rapid sprint turnaround and direct engineer access."
  },
  {
    q: "Who owns the Intellectual Property (IP) and source code once the project is done?",
    a: "You do. 100%. Upon project completion and final settlement, we transfer full source code ownership, infrastructure credentials, and intellectual property rights directly to your company. No vendor lock-in, ever."
  },
  {
    q: "How do you protect our proprietary business ideas and confidential data?",
    a: "We sign a strict, legally binding Non-Disclosure Agreement (NDA) before our very first discovery call. All client architectures, data models, and business logic are treated with bank-grade security protocols."
  },
  {
    q: "What is your typical project delivery timeline?",
    a: "While timelines depend on project complexity, our modular engineering approach and 100+ ready solution architectures allow us to deploy MVPs in as little as 2 to 4 weeks, and comprehensive enterprise platforms in 6 to 12 weeks."
  },
  {
    q: "Do you provide post-launch maintenance, cloud scaling, and technical support?",
    a: "Yes! We offer 24/7 dedicated Service Level Agreements (SLAs), cloud infrastructure monitoring, security updates, and feature scaling so your platform runs smoothly at 99.9% uptime while you focus on sales and operations."
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featuredSolutions = solutionsData.slice(0, 6);

  return (
    <div className="relative overflow-hidden">
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
        {/* Apple-style subtle floating background blobs and slow rotating glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none animate-float-slow -z-10" />
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-purple-600/[0.05] rounded-full blur-[150px] pointer-events-none animate-pulse-glow -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.02] rounded-full blur-3xl pointer-events-none animate-spin-slow -z-10" />

        <div className="container-main text-center relative z-10 px-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-white/90 mb-8 shadow-lg hover:border-white/30 transition-all cursor-pointer group">
              <Sparkles size={14} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
              <span>We Don&apos;t Build Portfolios. We Build Revenue Engines.</span>
              <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 transition-transform" />
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
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-semibold text-white/80 max-w-3xl mx-auto mb-6 tracking-wide uppercase font-mono">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Websites</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Mobile Apps</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">AI Automation</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">SaaS</span>
              <span className="text-white/30">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Custom Software</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Clients don&apos;t care about tech jargon; they care if you can solve their operational bottlenecks and drive sales. We architect high-converting digital platforms engineered for speed, scalability, and market dominance.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-16">
              <Link
                href="/contact"
                className="btn-primary text-sm sm:text-base px-9 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

          {/* Premium Multi-Device & Workflow Illustration Banner */}
          <FadeIn delay={0.4}>
            <div className="max-w-5xl mx-auto p-4 sm:p-6 rounded-3xl bg-[#09090b]/80 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
                <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-blue-400 font-semibold">Web Engine</span>
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  </div>
                  <div className="text-xs font-semibold text-white">Next.js 16 Enterprise</div>
                  <div className="text-[11px] text-white/50 mt-1">100/100 Lighthouse Speed</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-purple-400 font-semibold">Mobile App</span>
                    <Smartphone size={14} className="text-purple-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">iOS & Android Native</div>
                  <div className="text-[11px] text-white/50 mt-1">60fps Smooth Animation</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">AI Workflow</span>
                    <Bot size={14} className="text-emerald-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">Autonomous Agents</div>
                  <div className="text-[11px] text-white/50 mt-1">24/7 Support & Sales Bot</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-yellow-400 font-semibold">SaaS Cloud</span>
                    <Database size={14} className="text-yellow-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">PostgreSQL & Prisma</div>
                  <div className="text-[11px] text-white/50 mt-1">99.9% Uptime SLA</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== 2. TRUSTED BY / STATS (VERIFIABLE GUARANTEES) ====== */}
      <section className="py-12 md:py-16 border-y border-white/10 section-bg-gradient relative">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeIn delay={0.05}>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <CheckCircle2 size={26} className="text-emerald-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">100% IP Ownership</div>
                <p className="text-xs text-white/50">Full source code & asset transfer upon project completion</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <ShieldCheck size={26} className="text-blue-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">NDA Protected</div>
                <p className="text-xs text-white/50">Strict legal confidentiality before our first discovery call</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <Zap size={26} className="text-yellow-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">Rapid MVPs</div>
                <p className="text-xs text-white/50">Launch custom scalable products in 2 to 4 weeks sprint</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                <div className="flex justify-center mb-2">
                  <Award size={26} className="text-purple-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">Pune Camp HQ</div>
                <p className="text-xs text-white/50">Dedicated engineering team with 24/7 technical SLA</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== 3. SERVICES SECTION (WITH ⭐⭐⭐⭐⭐ PREMIUM HOVER CARDS) ====== */}
      <section className="py-14 md:py-20 relative">
        <div className="container-main">
          <SectionHeading
            title="Core Engineering Services"
            subtitle="We engineer end-to-end digital solutions designed to capture market share, automate tedious workflows, and scale your revenue."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development & Portals",
                icon: Code2,
                color: "blue",
                desc: "High-converting corporate websites, custom web applications, e-commerce engines, and client portals built for extreme speed and SEO ranking.",
                tags: ["Next.js 16", "React", "Tailwind CSS", "TypeScript", "E-commerce", "High SEO"]
              },
              {
                title: "Mobile App Development",
                icon: Smartphone,
                color: "purple",
                desc: "Native iOS and Android mobile applications engineered for smooth 60fps animations, offline capabilities, and high user retention.",
                tags: ["iOS", "Android", "React Native", "Flutter", "Push Notifications", "App Store"]
              },
              {
                title: "AI Solutions & Automation",
                icon: Bot,
                color: "emerald",
                desc: "Custom AI chatbots, autonomous workflow agents, voice AI assistants, and internal knowledge bases trained on your company data.",
                tags: ["AI Agents", "Chatbots", "LLM Integration", "Voice AI", "RAG Pipeline", "24/7 Support"]
              },
              {
                title: "Custom Software (ERP/CRM)",
                icon: Layers,
                color: "amber",
                desc: "Bespoke enterprise software to replace fragmented spreadsheets. Custom CRM, HRMS, billing, inventory, and logistics platforms.",
                tags: ["Custom CRM", "ERP Systems", "Inventory", "Billing Engine", "Role Access", "API Hub"]
              },
              {
                title: "SaaS Platform Development",
                icon: Cloud,
                color: "blue",
                desc: "Turn your software idea into a recurring revenue SaaS. Multi-tenant architecture, Stripe/Razorpay billing, and super-admin dashboards.",
                tags: ["Multi-Tenant", "Stripe / Razorpay", "Admin Dashboard", "Scalable DB", "AWS/Vercel"]
              },
              {
                title: "Digital Growth & Acceleration",
                icon: TrendingUp,
                color: "purple",
                desc: "Technical SEO audits, conversion rate optimization (CRO), speed refactoring, and analytics integration to turn visitors into paying clients.",
                tags: ["Technical SEO", "Speed Audit", "CRO Funnels", "Analytics", "Core Web Vitals"]
              }
            ].map((srv, idx) => (
              <FadeIn key={srv.title} delay={idx * 0.08}>
                <div
                  className={`premium-card premium-card-${srv.color} p-7 flex flex-col h-full group relative cursor-pointer overflow-hidden`}
                >
                  {/* Subtle hover background glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500 pointer-events-none" />

                  {/* Icon Box with Rotate & Scale Animation */}
                  <div className="w-12 h-12 rounded-2xl bg-[#151518] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                    <srv.icon size={22} className="text-white/80 group-hover:text-black transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1 group-hover:text-white/80 transition-colors">
                    {srv.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mt-auto mb-6">
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] font-medium text-white/70 group-hover:border-white/20 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button Appear & Arrow Slide Right */}
                  <div className="flex items-center justify-between text-xs font-semibold text-white/50 group-hover:text-white pt-2 transition-colors">
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity">Explore Architecture</span>
                    <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. "BUILD ANYTHING" CENTERPIECE CONVERSION SECTION ====== */}
      <section className="py-14 md:py-20 border-y border-white/10 section-bg-gradient-alt relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/[0.08] rounded-full blur-[130px] pointer-events-none" />
        <div className="container-main relative z-10">
          <FadeIn>
            <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#09090c]/90 border border-white/20 shadow-2xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white mb-6 uppercase tracking-wider">
                  <Terminal size={14} className="text-blue-400" /> Full-Stack Engineering Expertise
                </div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  If You Can Imagine It, <span className="gradient-text">We Can Build It.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/70 mb-10 leading-relaxed font-light">
                  Have a complex legacy integration? Want to build a multi-region cloud marketplace? Need custom hardware IoT communication or a proprietary AI workflow? Our engineers specialize in solving tough technical challenges that make other agencies give up.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary text-sm sm:text-base px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 w-full sm:w-auto shadow-xl hover:scale-105 transition-all"
                  >
                    Discuss Your Custom Requirement
                  </Link>
                  <Link
                    href="/solutions"
                    className="btn-secondary text-sm sm:text-base px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    Browse 100+ Ready Blueprints
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== 5. INDUSTRIES WE TRANSFORM ====== */}
      <section className="py-14 md:py-20 relative">
        <div className="container-main">
          <SectionHeading
            title="Industries We Transform"
            subtitle="Deep domain expertise across 10 major vertical markets. We understand your industry compliance, user behavior, and revenue drivers."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
            {[
              { name: "Healthcare & Medical", count: "12 Solutions", icon: "🏥" },
              { name: "E-Commerce & Retail", count: "14 Solutions", icon: "🛍️" },
              { name: "AI & Automation", count: "11 Solutions", icon: "🤖" },
              { name: "SaaS & Dashboards", count: "10 Solutions", icon: "📊" },
              { name: "Real Estate & Solar", count: "9 Solutions", icon: "🏡" },
              { name: "ERP & Business Ops", count: "11 Solutions", icon: "⚙️" },
              { name: "FinTech & Billing", count: "10 Solutions", icon: "💳" },
              { name: "Logistics & Supply", count: "9 Solutions", icon: "🚚" },
              { name: "Hospitality & Travel", count: "8 Solutions", icon: "✈️" },
              { name: "Education & EdTech", count: "10 Solutions", icon: "🎓" }
            ].map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.04}>
                <Link
                  href="/solutions"
                  className="premium-card p-5 flex flex-col items-center text-center h-full group hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <span className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 block">{ind.icon}</span>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors leading-snug">{ind.name}</h4>
                  <span className="text-[11px] text-white/50 font-mono group-hover:text-white/80 transition-colors">{ind.count}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 6. FEATURED READY SOLUTIONS TEASER ====== */}
      <section className="py-14 md:py-20 border-y border-white/10 section-bg-gradient relative">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Turnkey Architectures</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Featured Ready Solutions
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white mt-4 md:mt-0 group transition-colors"
            >
              <span>Explore All 100+ Solutions Directory</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSolutions.map((sol, i) => (
              <FadeIn key={sol.slug} delay={i * 0.08}>
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="premium-card p-6 flex flex-col h-full group hover:border-white/30 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-white/70 uppercase">
                      {sol.industry}
                    </span>
                    <span className="text-xs text-white/40 font-mono group-hover:text-white flex items-center gap-1 transition-colors">
                      View Architecture <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-white/60 mb-6 line-clamp-2 leading-relaxed flex-1">
                    {sol.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 mt-auto">
                    {sol.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] text-white/50 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {sol.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-white/40">+{sol.techStack.length - 3} more</span>
                    )}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 7. OUR DELIVERY PROCESS (7-STEP TRANSPARENT TIMELINE) ====== */}
      <section className="py-14 md:py-20 relative">
        <div className="container-main">
          <SectionHeading
            title="Our Transparent Delivery Process"
            subtitle="We replace traditional development chaos with an agile 7-step engineering sprint designed for rapid speed and zero surprises."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery & Blueprint", text: "We analyze your business problem, target audience, and ROI goals to map out exact technical requirements." },
              { num: "02", title: "UI/UX & Architecture", text: "Our designers craft stunning wireframes while architects design scalable database schemas and API endpoints." },
              { num: "03", title: "Agile Sprint Dev", text: "We build your software in weekly sprints with regular demo links so you track real progress every step." },
              { num: "04", title: "QA & Security Audit", text: "Rigorous automated testing, security vulnerability scanning, and device responsiveness checks." },
              { num: "05", title: "Cloud Deployment", text: "Smooth zero-downtime deployment to secure cloud infrastructure (AWS / Vercel / GCP) with CDN setup." },
              { num: "06", title: "Team Training & Handover", text: "We train your staff on admin dashboards and transfer 100% source code ownership and credentials." },
              { num: "07", title: "Scale & 24/7 Support", text: "Dedicated SLA maintenance, server monitoring, and continuous feature scaling as your user base grows." }
            ].map((step, idx) => (
              <FadeIn key={step.num} delay={idx * 0.07}>
                <div className="premium-card p-6 md:p-7 flex flex-col h-full group hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                  <div className="text-3xl md:text-4xl font-bold text-white/10 mb-4 group-hover:text-white/30 transition-colors font-mono">
                    {step.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed flex-1">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
            {/* Step 8 Custom Callout Card */}
            <FadeIn delay={0.5}>
              <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex flex-col justify-center items-center text-center h-full group hover:border-white/40 transition-all shadow-xl">
                <Sparkles size={28} className="text-yellow-400 mb-3 animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Ready to Sprint?</h3>
                <p className="text-xs text-white/70 mb-4">Let&apos;s start Step 01 today with a free technical blueprint call.</p>
                <Link href="/contact" className="btn-primary text-xs px-6 py-2.5 rounded-full bg-white text-black font-semibold">
                  Book Step 01 Call
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== 8. WHY CHOOSE US (8 DIFFERENTIATORS) ====== */}
      <section className="py-14 md:py-20 border-y border-white/10 section-bg-gradient-alt relative">
        <div className="container-main">
          <SectionHeading
            title="Why Leading Brands Choose iInfynite"
            subtitle="We built our agency to solve the frustrations clients experience with typical IT vendors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Revenue & Growth Focused", desc: "We don't just write code; we design workflows specifically to increase conversions and cut operating costs.", icon: TrendingUp },
              { title: "Zero Tech Jargon", desc: "We communicate in clear, honest business terms. You always know what we are building and why.", icon: MessageSquare },
              { title: "Modern Tech Stack", desc: "We use cutting-edge tools like Next.js 16, React Native, and AI agents instead of outdated legacy platforms.", icon: Cpu },
              { title: "Clean Code & Documentation", desc: "Every project comes with clean, well-commented code and complete developer documentation for easy scaling.", icon: Code2 },
              { title: "Agile Speed & Transparency", desc: "Weekly demo links and shared tracking boards so you are never left wondering about project progress.", icon: Clock },
              { title: "Dedicated SLA Support", desc: "We don't disappear after launch. Our 24/7 technical monitoring ensures your platform stays online and fast.", icon: ShieldCheck },
              { title: "Fair & Transparent Terms", desc: "No hidden fees or unexpected billable hours. Clear milestone-based deliverables agreed upfront.", icon: CheckCircle2 },
              { title: "Direct Engineer Access", desc: "You work directly with the senior engineers building your software, not middlemen or account executives.", icon: Users }
            ].map((diff, i) => (
              <FadeIn key={diff.title} delay={i * 0.06}>
                <div className="premium-card p-6 flex flex-col h-full group hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <diff.icon size={18} className="text-white/80 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed flex-1">
                    {diff.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 9. TECHNOLOGY STACK GRID ====== */}
      <section className="py-14 md:py-20 relative">
        <div className="container-main">
          <SectionHeading
            title="Our Engineering Tech Stack"
            subtitle="We build on battle-tested, modern enterprise technologies guaranteed for security, speed, and long-term support."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { cat: "Frontend Web", tools: "Next.js 16 • React • Tailwind CSS v4 • TypeScript • Redux • Framer Motion" },
              { cat: "Backend & API", tools: "Node.js • Next.js Server API • Express • Python • GraphQL • REST APIs" },
              { cat: "Mobile Apps", tools: "React Native • Flutter • iOS Swift • Android Kotlin • Expo • PWA" },
              { cat: "AI & Automation", tools: "OpenAI GPT-4 • LangChain • Custom RAG • Pinecone Vector DB • Voice AI" },
              { cat: "Databases", tools: "PostgreSQL • MongoDB • Prisma ORM • Redis • Supabase • Firebase" },
              { cat: "Cloud & DevOps", tools: "Vercel Enterprise • AWS • Docker • GitHub Actions CI/CD • Cloudflare" },
              { cat: "E-Commerce & Billing", tools: "Stripe API • Razorpay • Shopify Headless • WooCommerce • Custom Cart" },
              { cat: "UI/UX & Design", tools: "Figma • Adobe Creative Suite • Responsive Design • Accessibility WCAG" }
            ].map((stack, i) => (
              <FadeIn key={stack.cat} delay={i * 0.05}>
                <div className="premium-card p-5 flex flex-col h-full group hover:border-white/25 hover:-translate-y-1 transition-all">
                  <h4 className="text-sm font-bold text-white mb-2 border-b border-white/10 pb-2.5 group-hover:text-accent transition-colors">
                    {stack.cat}
                  </h4>
                  <p className="text-xs text-white/60 font-mono leading-relaxed">
                    {stack.tools}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 10. FAQ ACCORDION SECTION ====== */}
      <section className="py-14 md:py-20 border-y border-white/10 section-bg-gradient relative">
        <div className="container-main max-w-4xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our engineering standards, IP ownership, NDAs, and delivery timelines."
          />

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="premium-card p-6 cursor-pointer group hover:border-white/25 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-white transition-colors">
                        {item.q}
                      </h3>
                      <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-white text-black" : "text-white/60"}`}>
                        <ChevronDown size={16} />
                      </div>
                    </div>
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-white/10 text-sm text-white/70 leading-relaxed animate-fadeIn">
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

      {/* ====== 11. FINAL CONTACT & BOOKING CTA SECTION ====== */}
      <section className="py-16 md:py-24 relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/[0.08] rounded-full blur-[140px] pointer-events-none" />
        <div className="container-main relative z-10">
          <FadeIn>
            <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#111] via-[#0c0c0f] to-[#111] border border-white/20 shadow-2xl relative overflow-hidden text-center group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white mb-6 uppercase tracking-wider">
                  <MapPin size={14} className="text-red-400" /> Pune Camp HQ 🇮🇳 • Global Clients
                </div>
                <h2
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Ready to Turn Your Vision Into a <span className="gradient-text">Market Leader?</span>
                </h2>
                <p className="text-base sm:text-lg text-white/70 mb-10 leading-relaxed font-light">
                  Whether you need a high-converting website, a custom mobile app, or an autonomous AI workflow, let&apos;s schedule a 30-minute technical consultation. Zero obligation, zero jargon — just honest engineering advice.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="btn-primary text-base px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 w-full sm:w-auto shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Schedule Free Technical Call</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/919588617714?text=Hi%2C%20I%20visited%20your%20website%20and%20am%20interested%20in%20discussing%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#18181b] hover:bg-[#222226] border border-white/15 text-white font-medium text-center flex items-center justify-center gap-2 text-sm transition-all shadow-lg"
                  >
                    <MessageSquare size={16} className="text-green-400" /> Chat on WhatsApp Now
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-white/10 text-xs text-white/50">
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> Pune Camp, Pune, MH 🇮🇳</span>
                  <span className="flex items-center gap-2"><Mail size={14} className="text-accent" /> iinfynite0@gmail.com</span>
                  <span className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +91 95886 17714</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
