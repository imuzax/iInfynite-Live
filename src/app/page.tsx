"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Users,
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
  Cpu,
  Workflow,
  Rocket,
  Search,
  Layout,
  Terminal,
  Database
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionsData } from "@/lib/solutions-data";

// Featured Case Studies (Verified Real Projects in Portfolio)
const featuredProjects = [
  {
    title: "Hirotix — AI Recruitment & ATS Platform",
    category: "AI & Custom Software",
    description: "Enterprise applicant tracking platform featuring asynchronous LLM resume parsing, semantic scoring algorithms, and multi-tenant recruiter pipelines.",
    image: "/hirotix-mockup.png",
    slug: "hirotix-ai-recruitment-platform",
    tags: ["Next.js", "Python FastAPI", "Docker", "NLP / LLM"],
    badge: "AI Enterprise",
    liveUrl: "https://github.com/imuzax/Hirotix",
  },
  {
    title: "Velocity Luxe — 3D E-Commerce Mobile App",
    category: "Mobile App Development",
    description: "Next-gen mobile commerce experience with 60fps 3D interactive product rendering, personalized AI recommendations, and single-tap checkout.",
    image: "/ecommerce-mockup.png",
    slug: "velocity-luxe-app",
    tags: ["React Native", "Three.js", "Node.js", "GraphQL"],
    badge: "Mobile App",
    liveUrl: "https://github.com/imuzax/iInfynite-Live",
  },
  {
    title: "Infynite Cloud Telemetry & Data Dashboard",
    category: "SaaS & Custom Software",
    description: "High-volume analytics dashboard processing 50,000+ telemetry events per minute with real-time WebSocket charts and infrastructure cost tracking.",
    image: "/dashboard-mockup.png",
    slug: "data-analytics-dashboard",
    tags: ["Next.js", "Tailwind CSS", "Recharts", "PostgreSQL"],
    badge: "Cloud SaaS",
    liveUrl: "https://github.com/imuzax/iInfynite-Live",
  },
  {
    title: "SolarKraftPro — CleanTech Energy Platform",
    category: "Web & High-Conversion Funnel",
    description: "German solar energy portal equipped with real-time ROI savings calculators, dynamic quotation flows, and partner store integration.",
    image: "/projects/solarkraftpro.png",
    slug: "solarkraftpro",
    tags: ["Next.js", "Tailwind CSS", "Interactive ROI", "CleanTech"],
    badge: "Web Platform",
    liveUrl: "https://solarkraftpro.com",
  },
];

// Agency Services Matrix (Structured by 4 Core Disciplines)
const agencyServicePillars = [
  {
    pillar: "Product Design & Branding",
    subtitle: "Creating memorable digital brand identities and high-converting user interfaces.",
    color: "blue",
    services: [
      {
        title: "UI/UX Design & Design Systems",
        icon: Layout,
        desc: "Wireframing, interactive Figma prototypes, cohesive component libraries, and conversion-tested user flows.",
        deliverables: ["Figma Design Systems", "User Journey Mapping", "Usability Testing", "Interactive Prototypes"],
      },
      {
        title: "Graphic Design & Brand Identity",
        icon: Palette,
        desc: "Distinct visual identities, logotypes, marketing collateral, pitch decks, and brand style guidelines that stand out.",
        deliverables: ["Logo & Visual Identity", "Pitch Decks", "Marketing Assets", "Brand Guidelines"],
      },
      {
        title: "High-Converting Landing Pages",
        icon: Globe,
        desc: "Precision-engineered landing pages built for speed and sales conversion, turning traffic into qualified paying customers.",
        deliverables: ["Copywriting Structure", "A/B Testing Ready", "< 1s Load Time", "CRM Form Capture"],
      },
    ],
  },
  {
    pillar: "Web & Mobile Engineering",
    subtitle: "Building responsive web platforms and fluid native mobile applications.",
    color: "indigo",
    services: [
      {
        title: "Modern Web App & Website Development",
        icon: Code2,
        desc: "Production-ready web applications built on Next.js, React, and TypeScript with server-side rendering and bulletproof SEO.",
        deliverables: ["Next.js / React 19", "Full-Stack TypeScript", "Scalable REST & GraphQL", "Enterprise Security"],
      },
      {
        title: "Mobile App Development (iOS & Android)",
        icon: Smartphone,
        desc: "Native and cross-platform mobile apps with buttery-smooth 60fps animations, offline sync, and push notification pipelines.",
        deliverables: ["React Native & Flutter", "App Store / Play Store", "Biometric Auth", "Push Notifications"],
      },
      {
        title: "E-Commerce & High-Ticket Funnels",
        icon: TrendingUp,
        desc: "Custom storefronts, headless commerce architectures, automated inventory sync, and seamless multi-currency payment checkout.",
        deliverables: ["Custom Storefronts", "Stripe / Razorpay", "Cart Optimization", "Order Management"],
      },
    ],
  },
  {
    pillar: "Custom Software & SaaS",
    subtitle: "Architecting bespoke enterprise portals, internal tools, and multi-tenant SaaS products.",
    color: "purple",
    services: [
      {
        title: "Custom CRM, ERP & Internal Dashboards",
        icon: Layers,
        desc: "Replace messy spreadsheets with bespoke internal management software tailored to your company's operational workflow.",
        deliverables: ["Role-Based Access (RBAC)", "Custom Workflows", "Automated Reporting", "Data Migration"],
      },
      {
        title: "SaaS Platform Architecture & Development",
        icon: Rocket,
        desc: "Turn your software idea into a multi-tenant subscription business with automated billing, analytics, and tenant isolation.",
        deliverables: ["Multi-Tenant Architecture", "Stripe Subscriptions", "User Onboarding", "Admin Control Panels"],
      },
      {
        title: "API Development & Cloud Infrastructure",
        icon: Database,
        desc: "Resilient microservices, serverless functions, database optimization, and CI/CD pipelines deployed to AWS and Vercel.",
        deliverables: ["PostgreSQL / Redis", "Docker & Kubernetes", "CI/CD Pipelines", "99.9% Uptime SLA"],
      },
    ],
  },
  {
    pillar: "AI Integration & Growth",
    subtitle: "Deploying autonomous AI agents, automated workflows, and data-driven growth strategies.",
    color: "emerald",
    services: [
      {
        title: "AI Chatbots & Intelligent Agents",
        icon: Bot,
        desc: "Custom AI agents trained on your business documents to handle 24/7 customer support, lead qualification, and internal queries.",
        deliverables: ["RAG / Vector Databases", "OpenAI & Anthropic", "Multi-Channel Bots", "Human Fallback"],
      },
      {
        title: "Business Process Automation",
        icon: Workflow,
        desc: "Connect your disparate tools (CRMs, email, payment gateways, databases) to eliminate hours of repetitive manual data entry.",
        deliverables: ["Automated Invoicing", "Webhook Integrations", "Email Sequences", "CRM Synchronization"],
      },
      {
        title: "SEO & Conversion Rate Optimization (CRO)",
        icon: Search,
        desc: "Technical SEO audits, Core Web Vitals optimization to 95+ scores, and funnel improvements that lower acquisition cost.",
        deliverables: ["Core Web Vitals Audit", "On-Page Schema", "Speed Optimization", "Conversion Funnels"],
      },
    ],
  },
];

// Tech Stack Categories
const techStackItems = [
  {
    category: "Frontend & Web",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Shadcn / UI"],
  },
  {
    category: "Mobile Apps",
    items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Expo", "Fastlane"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js / Express", "Python / FastAPI", "PostgreSQL", "Prisma ORM", "Redis", "Supabase"],
  },
  {
    category: "AI & Cloud Infrastructure",
    items: ["OpenAI / GPT-4o", "Claude 3.5 Sonnet", "LangChain / RAG", "Docker", "AWS / Vercel", "Stripe / Razorpay"],
  },
];

// Delivery Process
const deliverySteps = [
  {
    step: "01",
    phase: "Discovery & Strategy",
    timeline: "Days 1–5",
    desc: "We dive deep into your business model, target audience, and bottlenecks. We deliver an exact technical specification document, scope breakdown, and wireframe architecture.",
  },
  {
    step: "02",
    phase: "UI/UX & System Architecture",
    timeline: "Week 2",
    desc: "Our design team crafts modern, conversion-focused Figma prototypes while architects design secure database schemas, API contracts, and security policies.",
  },
  {
    step: "03",
    phase: "Agile Development Sprints",
    timeline: "Weeks 3–6",
    desc: "We write clean, modular code in weekly development sprints. You receive live preview staging links every Friday to test features and give real-time feedback.",
  },
  {
    step: "04",
    phase: "Deployment & Full IP Handover",
    timeline: "Final Week",
    desc: "We run rigorous QA, stress testing, and SEO audits before deploying to production. We transfer 100% source code, admin rights, and provide 24/7 SLA maintenance.",
  },
];

// Trust Pillars
const agencyPillars = [
  {
    title: "100% IP & Code Ownership",
    icon: ShieldCheck,
    desc: "You own every single line of code, design file, and database schema from day one. Zero vendor lock-in or recurring proprietary licensing fees.",
  },
  {
    title: "Strict NDA Confidentiality",
    icon: Lock,
    desc: "Your intellectual property and business ideas are protected by a legally binding Non-Disclosure Agreement signed before our discovery call.",
  },
  {
    title: "Direct Senior Engineer Access",
    icon: Terminal,
    desc: "Communicate directly with the senior architects and designers building your product—no account managers or communication delays.",
  },
  {
    title: "Rapid Sprints & Guaranteed Deadlines",
    icon: Clock,
    desc: "Using modular engineering and proven architecture patterns, we deliver custom MVPs in 2 to 4 weeks and enterprise platforms in 6 to 10 weeks.",
  },
];

// Business-Oriented FAQ
const faqItems = [
  {
    q: "Why should we partner with iINFYNITE instead of hiring individual freelancers or a legacy IT agency?",
    a: "Individual freelancers often lack the full-stack spectrum (design, mobile, backend, AI) and can disappear unexpectedly, while traditional agencies charge exorbitant retainers with months of bureaucratic overhead. At iINFYNITE, you get a dedicated, multidisciplinary agency team of senior engineers and designers with direct access, weekly live demos, fixed milestone pricing, and 100% IP ownership.",
  },
  {
    q: "Who owns the Intellectual Property (IP) and source code upon project completion?",
    a: "You do, 100%. Upon project milestone sign-off, all Git repositories, production credentials, Figma design files, and database schemas are handed over directly to your organization. You have complete freedom to scale, host, or modify the code independently.",
  },
  {
    q: "How do you ensure our confidential business idea and data remain secure?",
    a: "We sign a mutual, legally binding Non-Disclosure Agreement (NDA) before our very first technical discovery session. We follow enterprise security protocols, encryption at rest and in transit, and strictly enforce role-based access for development environments.",
  },
  {
    q: "What is your typical project delivery timeline and communication rhythm?",
    a: "For high-converting websites and MVPs, delivery typically ranges between 2 to 4 weeks. For complex multi-platform SaaS applications, ERPs, or AI pipelines, timelines range between 6 to 12 weeks. We conduct weekly sprint reviews with interactive demo links and maintain a dedicated Slack/WhatsApp channel for instant communication.",
  },
  {
    q: "Do you provide ongoing technical support and server maintenance after launch?",
    a: "Yes. Every project includes a 30-day post-launch warranty with zero-cost bug fixes. After that, we provide flexible Monthly Retainer SLAs that cover cloud infrastructure monitoring, database backups, security patches, speed optimization, and ongoing feature iterations.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePillarTab, setActivePillarTab] = useState(0);
  const topSolutions = solutionsData.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      
      {/* ====== 1. PREMIUM AGENCY HERO SECTION ====== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Subtle, soft ambient background glows - Zero eye fatigue */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-blue-500/[0.05] rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[150px] pointer-events-none -z-10" />

        <div className="container-main text-center relative z-10 px-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-xs sm:text-sm font-medium text-slate-800 mb-8 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-900">iINFYNITE Digital Agency</span>
              <span className="text-slate-300">•</span>
              <span>Engineering Digital Products & Revenue Engines</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 max-w-5xl mx-auto text-slate-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Build Premium Software That <span className="gradient-text">Scales Real Businesses.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              iINFYNITE is a full-service digital agency. We partner with ambitious founders, startups, and established enterprises to engineer high-converting web applications, native mobile apps, custom SaaS platforms, and autonomous AI automations.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-14">
              <Link
                href="/contact"
                className="btn-primary text-sm sm:text-base px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 w-full sm:w-auto shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary text-sm sm:text-base px-8 py-4 rounded-full w-full sm:w-auto bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore Featured Work</span>
                <ArrowUpRight size={15} className="text-slate-500" />
              </Link>
            </div>
          </FadeIn>

          {/* Visual Showcase: Agency Work Multi-Device Composition */}
          <FadeIn delay={0.4}>
            <div className="max-w-5xl mx-auto mt-6">
              <div className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-slate-100 to-slate-200/80 border border-slate-200 shadow-2xl shadow-slate-200/60">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  
                  {/* Card 1: Cloud & Analytics */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-blue-400 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Enterprise SaaS</span>
                      <BarChart3 size={18} className="text-blue-600" />
                    </div>
                    <div className="relative h-32 rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                      <Image
                        src="/dashboard-mockup.png"
                        alt="Enterprise Dashboard"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Real-Time Cloud Dashboards</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">High-throughput data visualization with sub-second WebSocket updates.</p>
                  </div>

                  {/* Card 2: Mobile Apps */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-indigo-400 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Native Mobile</span>
                      <Smartphone size={18} className="text-indigo-600" />
                    </div>
                    <div className="relative h-32 rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                      <Image
                        src="/ecommerce-mockup.png"
                        alt="Velocity Luxe Mobile"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Fluid iOS & Android Apps</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">60fps React Native & Flutter experiences with instant native checkout.</p>
                  </div>

                  {/* Card 3: AI & Automation */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-emerald-400 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">AI Intelligence</span>
                      <Bot size={18} className="text-emerald-600" />
                    </div>
                    <div className="relative h-32 rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                      <Image
                        src="/hirotix-mockup.png"
                        alt="Hirotix AI ATS"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Autonomous AI Systems</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">Custom LLM agents, semantic resume parsing, and automated workflows.</p>
                  </div>

                </div>

                {/* Bottom Bar inside showcase */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between px-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-slate-800">Production-Grade Engineering</span>
                    <span>— Designed, Tested, and Shipped from Pune HQ 🇮🇳</span>
                  </div>
                  <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1">
                    <span>View all case studies</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== 2. AGENCY TRUST & CREDIBILITY RIBBON ====== */}
      <section className="py-8 border-y border-slate-200 bg-slate-50/80">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center justify-center gap-2.5">
              <ShieldCheck size={18} className="text-blue-600 shrink-0" />
              <span>100% IP & Source Code Ownership</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <Lock size={18} className="text-amber-600 shrink-0" />
              <span>Strict Mutual NDA Protection</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <Clock size={18} className="text-emerald-600 shrink-0" />
              <span>Agile 2–4 Week MVP Turnaround</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <Award size={18} className="text-purple-600 shrink-0" />
              <span>Direct Senior Architect Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. AGENCY POSITIONING & INTRO ("WHO WE ARE") ====== */}
      <section className="py-16 md:py-24 relative">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  <Briefcase size={14} className="text-blue-600" /> Full-Service Digital Agency
                </div>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Bridging Creative Design with Deep Engineering Rigor.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Too many businesses get stuck between design studios that can&apos;t code complex backend logic and traditional IT companies that build clunky, outdated interfaces.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  At <strong className="text-slate-900 font-semibold">iINFYNITE</strong>, we integrate both worlds under one roof. Our multidisciplinary team of product designers, full-stack engineers, AI researchers, and growth marketers works cohesively to craft digital products that look world-class and perform flawlessly at scale.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-bold text-slate-900 mb-0.5">&lt; 0.8s</div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">Average Page Load</div>
                    <p className="text-[11px] text-slate-500">Engineered for Google Core Web Vitals to maximize organic SEO and conversions.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-bold text-slate-900 mb-0.5">100%</div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">IP & Code Transfer</div>
                    <p className="text-[11px] text-slate-500">Full source code ownership, database schemas, and admin keys handed to you.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Read about our agency story, values, and engineering culture</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-lg relative">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    How We Deliver Better Outcomes
                  </h3>

                  <div className="space-y-5">
                    {[
                      {
                        title: "Product-Led Thinking, Not Just Coding",
                        desc: "We don't just blindly execute tasks; we understand your business model, customer acquisition channels, and unit economics to build features that generate revenue.",
                      },
                      {
                        title: "Modern, Scalable Tech Stack",
                        desc: "We build with Next.js 16, React 19, TypeScript, PostgreSQL, and Docker. Clean architecture, automated testing, and zero legacy bloat.",
                      },
                      {
                        title: "Transparent Weekly Demos & Sprints",
                        desc: "Every Friday you test a live staging deployment. Zero surprises, zero radio silence. You see actual working software evolve weekly.",
                      },
                      {
                        title: "Direct Access to Senior Specialists",
                        desc: "No middlemen or junior account representatives. You collaborate directly with lead engineers, UI/UX designers, and tech architects.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ====== 4. CORE AGENCY SERVICES (12 CAPABILITIES IN 4 PILLARS) ====== */}
      <section className="py-16 md:py-24 border-t border-slate-200 bg-slate-50/50 relative">
        <div className="container-main">
          <SectionHeading
            title="Our Full-Service Capabilities"
            subtitle="From initial product concept and visual branding to enterprise-grade web development, mobile apps, and autonomous AI systems."
          />

          {/* Interactive Pillar Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto">
            {agencyServicePillars.map((p, idx) => (
              <button
                key={p.pillar}
                onClick={() => setActivePillarTab(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activePillarTab === idx
                    ? "bg-slate-900 text-white shadow-md scale-102"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {p.pillar}
              </button>
            ))}
          </div>

          {/* Active Pillar Showcase */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {agencyServicePillars[activePillarTab].pillar}
            </h3>
            <p className="text-sm text-slate-600">
              {agencyServicePillars[activePillarTab].subtitle}
            </p>
          </div>

          {/* Service Cards for Selected Pillar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {agencyServicePillars[activePillarTab].services.map((srv, idx) => (
              <FadeIn key={srv.title} delay={idx * 0.08}>
                <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full group shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <srv.icon size={22} />
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {srv.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {srv.desc}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">What We Deliver:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.deliverables.map((item) => (
                        <span key={item} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.title)}`}
                    className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors mt-auto"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="btn-secondary text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 bg-white border-slate-200 text-slate-800 hover:bg-slate-100 shadow-xs"
            >
              <span>Explore All 12 Agency Services in Detail</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 5. FEATURED PORTFOLIO & CASE STUDIES ====== */}
      <section className="py-16 md:py-24 relative">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                <Sparkles size={14} className="text-amber-500" /> Verified Client Work
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Featured Engineering & Design Case Studies
              </h2>
              <p className="text-base text-slate-600 mt-2 max-w-2xl">
                Real digital products engineered for actual businesses—showcasing architecture, user experience, and measurable business outcomes.
              </p>
            </div>

            <Link
              href="/projects"
              className="btn-secondary text-sm px-6 py-3 rounded-full shrink-0 inline-flex items-center gap-2 shadow-xs"
            >
              <span>View All Projects</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 2x2 Grid of Large Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <FadeIn key={project.slug} delay={idx * 0.1}>
                <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group h-full">
                  
                  {/* High Quality Preview Image Container */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-sm">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="text-xs font-mono uppercase text-blue-600 font-semibold mb-2">
                      {project.category}
                    </div>

                    <h3
                      className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight size={14} />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 6. EXPERTISE & TECHNOLOGY SHOWCASE ====== */}
      <section className="py-16 md:py-24 border-y border-slate-200 bg-slate-50/60 relative">
        <div className="container-main">
          <SectionHeading
            title="Our Modern Engineering Tech Radar"
            subtitle="We don't chase unstable hype. We choose battle-tested, high-performance technologies that ensure fast load times, rock-solid security, and effortless scaling."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackItems.map((category, idx) => (
              <FadeIn key={category.category} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm h-full">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                    <Cpu size={18} className="text-blue-600" />
                    <h3 className="font-bold text-slate-900 text-sm">{category.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {category.items.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check size={14} className="text-emerald-500 shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 7. THE 100+ READY SOLUTIONS ENGINE ====== */}
      <section className="py-16 md:py-24 relative">
        <div className="container-main">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                <Sparkles size={14} className="text-amber-500" /> Modular Architecture Blueprints
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Launch Months Faster With Our 100+ Turnkey Architectures.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Don&apos;t waste months reinventing basic login flows, database schemas, and billing engines from scratch. We leverage our library of 100+ proven software architectures and customize them 100% to your unique business workflow.
              </p>
            </div>

            {/* 3-Column Preview of Top Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {topSolutions.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col group shadow-xs"
                >
                  <div className="text-xs font-mono uppercase text-blue-600 font-semibold mb-2">{sol.industry}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{sol.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-6 flex-1 leading-relaxed">{sol.shortDescription}</p>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 pt-3 border-t border-slate-100 group-hover:text-blue-600 transition-colors">
                    <span>Explore Blueprint</span>
                    <ArrowUpRight size={14} className="text-blue-600 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Industry Tag Cloud & CTA */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 font-mono">Blueprints Ready Across 10 Key Industries:</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Healthcare & Clinics", "E-Commerce & Retail", "AI & Workflow Automation",
                    "SaaS Platforms", "Real Estate & Solar", "ERP & Business Ops",
                    "FinTech & Billing", "Logistics & Supply Chain", "Hospitality & Travel", "Education & EdTech"
                  ].map((ind) => (
                    <span key={ind} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href="/solutions"
                  className="btn-primary text-sm px-7 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 inline-flex items-center gap-2 shadow-md whitespace-nowrap"
                >
                  <span>Browse All 100+ Blueprints</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 8. TRANSPARENT 4-STEP WORKING PROCESS ====== */}
      <section className="py-16 md:py-24 border-y border-slate-200 bg-slate-50/50 relative">
        <div className="container-main">
          <SectionHeading
            title="Our Structured Engineering Process"
            subtitle="We replace traditional software development uncertainty with a clear, milestone-driven 4-step engineering roadmap designed for speed, precision, and complete transparency."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((st, idx) => (
              <FadeIn key={st.step} delay={idx * 0.1}>
                <div className="p-7 rounded-3xl bg-white border border-slate-200 flex flex-col h-full relative overflow-hidden group hover:border-slate-300 transition-all duration-200 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold font-mono text-slate-300 group-hover:text-blue-600 transition-colors">
                      {st.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold">
                      {st.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {st.phase}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {st.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 9. WHY CLIENTS PARTNER WITH IINFYNITE (4 PILLARS) ====== */}
      <section className="py-16 md:py-24 relative">
        <div className="container-main">
          <SectionHeading
            title="Why Ambitious Founders Choose iINFYNITE"
            subtitle="We built our agency model to eliminate the common pain points clients suffer with traditional IT shops: scope creep, radio silence, and vendor lock-in."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {agencyPillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className="flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 text-blue-600 shadow-xs">
                    <pillar.icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    {pillar.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 10. FAQ ACCORDION (BUSINESS CONFIDENCE & TRANSPARENCY) ====== */}
      <section className="py-16 md:py-24 border-t border-slate-200 bg-slate-50/50 relative">
        <div className="container-main max-w-4xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Direct, transparent answers regarding our intellectual property transfers, confidentiality agreements, timelines, and post-launch maintenance."
          />

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={idx} delay={idx * 0.06}>
                  <div
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 cursor-pointer transition-all duration-200 shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.q}
                      </h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}>
                        <ChevronDown size={16} />
                      </div>
                    </div>
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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

      {/* ====== 11. HIGH-CONVERTING CLOSING CTA ====== */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-blue-500/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="container-main relative z-10">
          <FadeIn>
            <div className="p-8 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl text-center relative overflow-hidden text-white">
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-slate-200 mb-6 uppercase tracking-wider font-mono border border-white/10">
                  <MapPin size={14} className="text-red-400" /> Pune Camp HQ 🇮🇳 • Global Clients
                </div>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Ready to Build Your Next <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Digital Breakthrough?</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal">
                  Whether you are launching a new startup MVP, modernizing an existing enterprise platform, or deploying autonomous AI automation, let&apos;s schedule a 30-minute discovery consultation. Zero obligation, 100% NDA protected.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="btn-primary text-base px-10 py-4 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-100 w-full sm:w-auto shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Schedule Free Technical Consultation</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/919588617714?text=Hi%20iINFYNITE%20team%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-center flex items-center justify-center gap-2 text-sm transition-all shadow-lg"
                  >
                    <MessageSquare size={16} className="text-emerald-400" /> Chat on WhatsApp Now
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-800 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-blue-400" /> Pune Camp, Pune, Maharashtra 🇮🇳</span>
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