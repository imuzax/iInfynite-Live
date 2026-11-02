import { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Palette,
  Rocket,
  TrendingUp,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
  Workflow,
  Search,
  Layout,
  Database,
  Cpu,
  ShieldCheck,
  Clock,
  Users,
  Target,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Agency Services — Web, Mobile, AI, SaaS & Design",
  description:
    "Explore iINFYNITE's end-to-end agency capabilities: Website Development, Mobile Apps, UI/UX Design, Custom Software, SaaS Engineering, AI Automation, and Digital Growth.",
};

const serviceDepartments = [
  {
    department: "01. Product Design & Brand Identity",
    summary: "Visual design systems, high-converting interfaces, and distinctive brand identities that establish authority and trust.",
    accent: "blue",
    services: [
      {
        id: "ui-ux-design",
        title: "UI/UX Design & Design Systems",
        icon: Layout,
        whoNeedsIt: "Startups building a new product or companies with clunky software that causes high customer churn.",
        description: "We design clean, intuitive user journeys that simplify complex software. From deep user research to clickable Figma prototypes and comprehensive design tokens.",
        includes: [
          "Interactive Figma Prototypes & Wireframes",
          "Comprehensive Multi-Platform Design Systems",
          "User Journey Mapping & Information Architecture",
          "Usability Testing & Conversion Flow Optimization",
        ],
        technologies: ["Figma", "Design Tokens", "Tailwind Design Systems", "Protopie"],
      },
      {
        id: "branding-identity",
        title: "Branding & Visual Identity Design",
        icon: Palette,
        whoNeedsIt: "Founders launching a new venture or brands needing a modern, premium corporate image.",
        description: "A brand is more than a logo. We create distinctive visual languages, typography pairings, color systems, and brand guidelines that set you apart in crowded markets.",
        includes: [
          "Primary & Secondary Logomarks",
          "Brand Typography & Color Architecture",
          "Investor Pitch Decks & Sales Collateral",
          "Brand Style Guidelines & Asset Packages",
        ],
        technologies: ["Vector Illustration", "Adobe Suite", "Typography Design", "Brand Guidelines"],
      },
      {
        id: "graphic-design",
        title: "Graphic Design & Marketing Creatives",
        icon: Sparkles,
        whoNeedsIt: "Companies running digital advertising campaigns, social marketing, or industry events.",
        description: "High-impact visual assets engineered to capture attention, stop social scrolling, and clearly communicate your value proposition.",
        includes: [
          "High-CTR Paid Ad Creatives (Meta, Google, LinkedIn)",
          "Social Media Visual Templates",
          "Brochures, One-Pagers & Whitepapers",
          "Custom Vector Icons & Product Illustrations",
        ],
        technologies: ["Photoshop", "Illustrator", "Figma", "Digital Publishing"],
      },
    ],
  },
  {
    department: "02. Web & Mobile App Development",
    summary: "Production-grade digital platforms engineered for speed, responsiveness, high conversion, and seamless cross-device performance.",
    accent: "indigo",
    services: [
      {
        id: "web-development",
        title: "Website & Landing Page Development",
        icon: Code2,
        whoNeedsIt: "Businesses needing a high-performance web presence that converts traffic into paying clients.",
        description: "We build responsive, ultra-fast websites using Next.js and Tailwind CSS. Structured for SEO dominance, perfect Core Web Vitals, and effortless content updates.",
        includes: [
          "Next.js 16 (App Router) Architecture",
          "Server-Side Rendering (SSR) & Static Generation",
          "100/100 Google Core Web Vitals Optimization",
          "Headless CMS Integration (Sanity, Strapi, Prisma)",
        ],
        technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "web-applications",
        title: "Full-Stack Web Application Development",
        icon: Layers,
        whoNeedsIt: "Companies requiring complex web tools, customer portals, or interactive web applications.",
        description: "Dynamic web apps designed to handle intricate business workflows, secure authentication, real-time data synchronization, and heavy computational logic.",
        includes: [
          "Full-Stack TypeScript Architecture",
          "Secure JWT & Session Authentication (OAuth)",
          "Real-Time WebSockets & Background Jobs",
          "Relational Database Modeling & Indexing",
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis"],
      },
      {
        id: "mobile-apps",
        title: "Mobile App Development (iOS & Android)",
        icon: Smartphone,
        whoNeedsIt: "Businesses expanding their digital service directly into their customers' pockets.",
        description: "We build buttery-smooth 60fps mobile applications using React Native and Flutter, minimizing delivery time while maintaining full native performance and device capabilities.",
        includes: [
          "Native iOS & Android Deployment",
          "Push Notification Pipelines (APNs / FCM)",
          "Biometric Authentication & Offline Sync",
          "App Store & Google Play Launch Management",
        ],
        technologies: ["React Native", "Flutter", "Expo", "iOS Swift", "Android Kotlin"],
      },
      {
        id: "ecommerce-development",
        title: "E-Commerce & High-Ticket Funnels",
        icon: TrendingUp,
        whoNeedsIt: "Direct-to-consumer (D2C) brands, retailers, and high-ticket service companies selling online.",
        description: "Fast, frictionless shopping experiences designed to maximize Average Order Value (AOV) and reduce cart abandonment across mobile and desktop.",
        includes: [
          "Custom Storefronts & Headless Commerce",
          "Multi-Currency Payment Gateways (Stripe, Razorpay)",
          "Automated Inventory, Shipping & Tax Sync",
          "1-Click Checkout & Abandoned Cart Recovery",
        ],
        technologies: ["Next.js Commerce", "Shopify Storefront API", "Stripe", "Razorpay"],
      },
    ],
  },
  {
    department: "03. Custom Software & SaaS Engineering",
    summary: "Tailor-made software platforms that replace disorganized spreadsheets, automate company operations, and generate recurring revenue.",
    accent: "purple",
    services: [
      {
        id: "custom-software",
        title: "Custom Software (ERP, CRM & Operations)",
        icon: Database,
        whoNeedsIt: "Businesses that have outgrown off-the-shelf software and need tools mapped to their exact operations.",
        description: "We engineer bespoke internal management portals, custom CRM dashboards, inventory trackers, and staff scheduling systems tailored 100% to your workflows.",
        includes: [
          "Granular Role-Based Access Control (RBAC)",
          "Automated PDF Invoicing & Audit Logs",
          "Legacy Data Migration & Schema Cleansing",
          "Custom Reporting & Management KPI Dashboards",
        ],
        technologies: ["PostgreSQL", "Node.js", "Docker", "Tailwind UI", "Prisma"],
      },
      {
        id: "saas-development",
        title: "SaaS Platform Development & MVP Launch",
        icon: Rocket,
        whoNeedsIt: "Founders with software ideas who need a reliable engineering partner to launch an MVP quickly.",
        description: "We transform ideas into scalable multi-tenant SaaS products with built-in subscription management, organization accounts, usage billing, and administrative tooling.",
        includes: [
          "Multi-Tenant Database Isolation",
          "Automated Stripe Billing & Tiered Plans",
          "User Invitation & Team Workspaces",
          "Superadmin Health & Subscription Analytics",
        ],
        technologies: ["Next.js", "PostgreSQL", "Stripe Billing", "AWS / Vercel"],
      },
      {
        id: "api-automation",
        title: "API Integration & Business Automation",
        icon: Workflow,
        whoNeedsIt: "Companies juggling disconnected apps and losing hours every week to manual data entry.",
        description: "We bridge your existing software ecosystem (CRMs, accounting tools, messaging platforms, payment processors) using robust, fault-tolerant webhooks and custom APIs.",
        includes: [
          "Third-Party API Integrations (WhatsApp, Zapier, Google)",
          "Automated Webhook Receivers & Retries",
          "Microservice Architecture & Middleware",
          "Zero-Downtime Data Synchronization",
        ],
        technologies: ["REST APIs", "GraphQL", "Webhooks", "Node.js", "Python"],
      },
    ],
  },
  {
    department: "04. AI Integration & Digital Growth",
    summary: "Leveraging cutting-edge large language models and technical marketing strategies to multiply output and drive qualified customer acquisition.",
    accent: "emerald",
    services: [
      {
        id: "ai-solutions",
        title: "AI Integration & Autonomous LLM Agents",
        icon: Bot,
        whoNeedsIt: "Companies seeking to automate repetitive support, extract document insights, or build smart AI features.",
        description: "We deploy private, secure AI solutions trained on your company data. From 24/7 intelligent customer care assistants to automated semantic resume parsers and content generators.",
        includes: [
          "Custom Retrieval-Augmented Generation (RAG)",
          "Multi-Turn Customer Support AI Agents",
          "Document & Contract Parsing Pipelines",
          "OpenAI, Claude, and Open-Source LLM Fine-Tuning",
        ],
        technologies: ["OpenAI API", "Claude 3.5 Sonnet", "LangChain", "Vector DBs", "Python"],
      },
      {
        id: "seo-optimization",
        title: "Search Engine Optimization (SEO & Core Web Vitals)",
        icon: Search,
        whoNeedsIt: "Businesses wanting consistent, predictable organic leads from Google without paying for every click.",
        description: "We implement advanced technical SEO: dynamic JSON-LD schema markup, canonical tag architectures, semantic HTML structure, and server-side rendering for top search rankings.",
        includes: [
          "Technical Site Architecture & Schema.org Markup",
          "Lighthouse 95+ Core Web Vitals Optimization",
          "Automated XML Sitemaps & Robots Configuration",
          "Targeted On-Page Keyword Structuring",
        ],
        technologies: ["Technical SEO", "Google Search Console", "Lighthouse", "Schema.org"],
      },
      {
        id: "digital-growth",
        title: "Digital Growth & Conversion Optimization (CRO)",
        icon: TrendingUp,
        whoNeedsIt: "Businesses with active website traffic that is not converting into enough qualified leads or sales.",
        description: "We analyze user drop-off points, streamline checkout funnels, run heatmaps, and test messaging to consistently lower customer acquisition costs (CAC).",
        includes: [
          "User Funnel & Drop-Off Drop Audits",
          "Call-to-Action (CTA) Placement & Microcopy",
          "Analytics Tracking (Google Analytics 4, Meta Pixel)",
          "Lead Capture Optimization & Instant CRM Sync",
        ],
        technologies: ["GA4", "Hotjar", "UTM Attribution", "A/B Testing"],
      },
    ],
  },
];

const engagementModels = [
  {
    title: "Fixed-Scope Project Delivery",
    bestFor: "Well-defined projects with specific feature sets and clear deadlines.",
    features: [
      "Fixed timeline and transparent milestone payments",
      "Exact technical specifications agreed upfront",
      "Weekly live demos and staging link updates",
      "Full 30-day post-launch warranty with zero-cost bug fixes",
    ],
  },
  {
    title: "Dedicated Agency Sprint Team",
    bestFor: "Startups and growing companies needing continuous feature iterations.",
    features: [
      "Dedicated senior full-stack developers and UI/UX designers",
      "Direct Slack/WhatsApp collaboration channel",
      "Flexible scope adjustments with agile bi-weekly sprints",
      "Predictable monthly retainer with zero long-term lock-in",
    ],
  },
  {
    title: "Architecture & Code Audit",
    bestFor: "Existing platforms struggling with slow load times, bugs, or scale limits.",
    features: [
      "Comprehensive code quality and security vulnerability audit",
      "Database query profiling and performance tuning",
      "Core Web Vitals and SEO audit with actionable report",
      "Architectural roadmap for cloud scaling and cost reduction",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20 relative overflow-hidden bg-white text-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ====== 1. SERVICES HERO ====== */}
      <section className="container-main mb-16 md:mb-24 text-center px-4">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 mb-6 shadow-xs">
            <Sparkles size={14} className="text-blue-600" />
            13 Core Engineering & Creative Capabilities
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            End-to-End Digital Capabilities Engineered For <span className="gradient-text">Measurable Growth.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t offer disconnected one-off tasks. We provide cohesive, full-service digital execution—from strategic product design and native mobile apps to enterprise cloud backends and autonomous AI systems.
          </p>
        </FadeIn>
      </section>

      {/* ====== 2. SERVICES BY DEPARTMENT ====== */}
      <section className="container-main space-y-20 md:space-y-28">
        {serviceDepartments.map((dept, deptIdx) => (
          <div key={dept.department} className="relative">
            <FadeIn>
              <div className="border-b border-slate-200 pb-6 mb-10">
                <div className="text-xs font-mono font-semibold uppercase text-blue-600 tracking-wider mb-2">
                  Practice Discipline
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {dept.department}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
                  {dept.summary}
                </p>
              </div>
            </FadeIn>

            {/* Grid of Distinct Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {dept.services.map((srv, srvIdx) => {
                const IconComponent = srv.icon;
                return (
                  <FadeIn key={srv.id} delay={srvIdx * 0.1}>
                    <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full group shadow-xs">
                      
                      {/* Top Icon & Title */}
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComponent size={22} />
                      </div>

                      <h3
                        className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {srv.title}
                      </h3>

                      {/* Who needs it badge */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-4 leading-relaxed">
                        <strong className="text-slate-900 block font-semibold mb-0.5">Who Needs This:</strong>
                        {srv.whoNeedsIt}
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                        {srv.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                        <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                          What&apos;s Included:
                        </div>
                        <ul className="space-y-1.5">
                          {srv.includes.map((inc) => (
                            <li key={inc} className="text-xs text-slate-700 flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-slate-100">
                        {srv.technologies.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA Link */}
                      <Link
                        href={`/contact?service=${encodeURIComponent(srv.title)}`}
                        className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors mt-auto"
                      >
                        <span>Request Proposal For This Service</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* ====== 3. ENGAGEMENT MODELS ====== */}
      <section className="container-main mt-24 md:mt-32">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm relative overflow-hidden">
          <SectionHeading
            title="Flexible Engagement Models"
            subtitle="Choose the working model that fits your company's stage, roadmap, and operational budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, i) => (
              <FadeIn key={model.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {model.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 italic">
                    Best for: {model.bestFor}
                  </p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {model.features.map((feat) => (
                      <li key={feat} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all text-center"
                  >
                    Discuss This Model
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. CLOSING SERVICES CTA ====== */}
      <section className="container-main mt-20 md:mt-28 text-center">
        <FadeIn>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Have a Custom Requirement or Unique Tech Stack?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Our engineers and designers have built everything from bespoke healthcare compliance systems to high-speed algorithmic trading monitors. Let&apos;s evaluate your technical requirements together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-sm px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-100 shadow-md inline-flex items-center gap-2"
              >
                <span>Book Technical Scoping Call</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919588617714?text=Hi%20iINFYNITE%20team%2C%20I%20want%20to%20discuss%20a%20project%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium inline-flex items-center gap-2 border border-slate-700"
              >
                <MessageSquare size={16} className="text-emerald-400" /> WhatsApp Direct
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}