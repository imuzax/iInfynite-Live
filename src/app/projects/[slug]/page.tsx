import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Briefcase,
  Clock,
  Code,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const fallbackProjectsDetails = [
  {
    title: "Velocity Luxe App",
    slug: "velocity-luxe-app",
    category: "Mobile Apps",
    description: "Premium e-commerce mobile experience with 3D UI elements.",
    fullDescription: "A next-generation e-commerce mobile application featuring immersive 3D product previews, lightning-fast checkout flows, and tailored AI recommendations.",
    clientName: "Luxe Retail Group",
    timeline: "6 Weeks",
    role: "Mobile Architect & Designer",
    techStack: "React Native, Three.js, Node.js, GraphQL",
    challenges: "Rendering smooth 60fps 3D product models on mid-tier mobile devices without battery drain.",
    solution: "Optimized GLTF mesh geometries and implemented lazy-loading 3D canvas rendering with React Native Three.js bridge.",
    imageUrl: "/ecommerce-mockup.png",
    liveUrl: "https://github.com/imuzax/iInfynite-Live",
    createdAt: new Date("2026-01-15"),
  },
  {
    title: "Data Analytics Dashboard",
    slug: "data-analytics-dashboard",
    category: "Custom Software",
    description: "Sophisticated IT solutions portfolio analytics and monitoring.",
    fullDescription: "An enterprise-grade business intelligence dashboard providing real-time infrastructure monitoring, cloud cost analytics, and automated reporting.",
    clientName: "Infynite Cloud Ops",
    timeline: "4 Weeks",
    role: "Lead Full Stack Engineer",
    techStack: "Next.js 15, Tailwind CSS, Recharts, PostgreSQL, Prisma",
    challenges: "Processing and visualizing over 50,000 real-time telemetry events per minute with zero UI latency.",
    solution: "Implemented WebSocket streaming coupled with Web Worker data aggregation and virtualized chart rendering.",
    imageUrl: "/dashboard-mockup.png",
    liveUrl: "https://github.com/imuzax/iInfynite-Live",
    createdAt: new Date("2026-01-20"),
  },
  {
    title: "Hirotix — AI Recruitment & ATS Platform",
    slug: "hirotix-ai-recruitment-platform",
    category: "AI Solutions",
    description: "Enterprise-grade AI Recruitment Engine featuring automated resume NLP parsing, semantic candidate scoring, and video interview simulations.",
    fullDescription: "An end-to-end AI-powered Applicant Tracking System (ATS) built with microservices. Features automated resume parsing with LLMs, real-time candidate ranking, interactive AI chat assistants, and multi-tenant recruiter dashboards.",
    clientName: "Hirotix Enterprise",
    timeline: "2 Months",
    role: "Full-Stack Architect & AI Engineer",
    techStack: "Java Spring Boot, Python FastAPI, Docker Compose, MySQL, Next.js UI",
    challenges: "Achieving sub-second semantic scoring on high-volume resume uploads and managing containerized microservices.",
    solution: "Implemented asynchronous Python AI pipelines paired with a robust Java Spring Boot backend and automated Docker orchestration.",
    imageUrl: "/hirotix-mockup.png",
    liveUrl: "https://github.com/imuzax/Hirotix",
    createdAt: new Date("2026-02-01"),
  },
  {
    title: "HoerHilfePlus — Hearing Aid Landing Page",
    slug: "hoerhilfeplus",
    category: "Web & Healthcare",
    description: "Healthcare Landing Page for the German Market. Specialized high-conversion affiliate solution for AURIS PRO invisible hearing aids.",
    fullDescription: "Specialized German healthcare landing page engineered for high-ticket affiliate marketing of AURIS PRO hearing aids. Features medical-grade typography, trust badges, responsive pricing tables, and seamless checkout redirects.",
    clientName: "CozeyMaison / German Healthcare Affiliate",
    timeline: "2 Weeks",
    role: "Lead UI/UX Designer & Developer",
    techStack: "HTML5, CSS3, Inter Typography, Responsive Flexbox/Grid",
    challenges: "Creating a trustworthy, accessible interface tailored for elderly German demographics while maintaining high conversion rates and GDPR compliance.",
    solution: "Implemented high-contrast visual elements, clear German copywriting, instant order redirects, and optimized packshot product showcases.",
    imageUrl: "/projects/hoerhilfeplus.png",
    liveUrl: "https://hoerhilfeplus.com",
    createdAt: new Date("2026-02-10"),
  },
  {
    title: "SolarKraftPro — Balkonkraftwerk Portal",
    slug: "solarkraftpro",
    category: "Web & CleanTech",
    description: "Premium Solar Power (Balkonkraftwerk) Landing Page for the German Market. Features real-time ROI savings calculator and Solakon ONE integration.",
    fullDescription: "A state-of-the-art green technology affiliate landing page targeting the booming German balcony solar market (Balkonkraftwerk). Educates homeowners and tenants on energy savings with custom ROI calculators and direct Solakon equipment partnerships.",
    clientName: "Solakon Germany Partner Network",
    timeline: "3 Weeks",
    role: "Lead Web Architect",
    techStack: "HTML5, Modern CSS3 Grid, Inter Typography, Interactive JS Calculator",
    challenges: "Explaining complex technical specifications (inverters, bifacial solar panels, wattage regulations) in an engaging, easy-to-understand format.",
    solution: "Designed interactive feature highlights, clear visual savings diagrams, and direct one-click purchasing links to Solakon partner stores.",
    imageUrl: "/projects/solarkraftpro.png",
    liveUrl: "https://solarkraftpro.com",
    createdAt: new Date("2026-02-15"),
  },
  {
    title: "FootSprings — UK Athletic Footwear",
    slug: "footsprings",
    category: "Web & E-Commerce",
    description: "Premium Footwear Affiliate Landing Page for the UK Market. Features the 'Aura Glass' design system promoting On Cloud 6 waterproof running shoes.",
    fullDescription: "Modern UK e-commerce affiliate landing page utilizing the custom 'Aura Glass' design system. Engineered to promote high-performance footwear campaigns in partnership with Footlocker UK, featuring dynamic size selectors and interactive galleries.",
    clientName: "Footlocker UK Affiliate Partner",
    timeline: "3 Weeks",
    role: "Frontend Architect & Designer",
    techStack: "HTML5, CSS3 Glassmorphism, Outfit Typography, Vanilla JS",
    challenges: "Building an interactive product showcase without heavy framework dependencies to achieve 100/100 Lighthouse performance.",
    solution: "Developed custom lightweight JavaScript image carousels, responsive modal dialogs, and clean affiliate UTM tracking links.",
    imageUrl: "/projects/footsprings.png",
    liveUrl: "https://footsprings.com",
    createdAt: new Date("2026-02-20"),
  },
  {
    title: "StiefelStyle — Luxury Fashion Footwear",
    slug: "stiefelstyle",
    category: "Web & E-Commerce",
    description: "Luxury Fashion Landing Page for the German Market. Custom solution for high-end winter footwear retail featuring Valentino Snowish fur boots.",
    fullDescription: "An ultra-premium fashion affiliate showcase designed specifically for the German market, promoting high-end designer footwear like Valentino Garavani Snowish fur ankle boots. Uses elegant Playfair Display typography and smooth hover transitions.",
    clientName: "Valentino Garavani Affiliate Campaign",
    timeline: "2 Weeks",
    role: "Lead UI/UX & Frontend Developer",
    techStack: "HTML5, CSS3, Playfair Display, CSS Grid, Thron CDN Integration",
    challenges: "Capturing the luxury brand aesthetic of haute couture while ensuring fast page load times and seamless affiliate link tracking.",
    solution: "Designed a minimalist, editorial-style layout with high-resolution image zoom, interactive specification cards, and direct checkout buttons.",
    imageUrl: "/projects/stiefelstyle.png",
    liveUrl: "https://stiefelstyle.com",
    createdAt: new Date("2026-02-25"),
  },
  {
    title: "SchuhWelt24 — Sneaker Storefront",
    slug: "schuhwelt24",
    category: "Web & E-Commerce",
    description: "Premium Sneaker Affiliate Landing Page for the German Market. Showcasing Asics Sportstyle GEL-NYC with Zalando integration.",
    fullDescription: "A localized German affiliate e-commerce platform dedicated to trending sneaker releases. Built to drive targeted traffic to Zalando Germany with high-resolution packshots and comprehensive German product reviews.",
    clientName: "Zalando Germany Affiliate Program",
    timeline: "2 Weeks",
    role: "Full Stack Designer & Developer",
    techStack: "HTML5, CSS3 Glassmorphism, Outfit Typography, Zalando API Integration",
    challenges: "Adapting international sneaker trends to German consumer preferences and strict e-commerce transparency laws (Impressum/Datenschutz).",
    solution: "Built an intuitive German interface complete with full legal compliance pages, transparent affiliate disclosures, and high-speed image loading.",
    imageUrl: "/projects/schuhwelt24.png",
    liveUrl: "https://schuhwelt24.com",
    createdAt: new Date("2026-03-01"),
  },
];

export default async function ProjectDetailPage(props: PageProps) {
  const { slug } = await props.params;

  let project = null;
  try {
    project = await prisma.project.findUnique({
      where: { slug },
    });
  } catch {
    project = null;
  }

  if (!project) {
    const fallbackMatch = fallbackProjectsDetails.find((p) => p.slug === slug);
    if (fallbackMatch) {
      project = {
        id: fallbackMatch.slug,
        title: fallbackMatch.title,
        slug: fallbackMatch.slug,
        category: fallbackMatch.category,
        description: fallbackMatch.description,
        fullDescription: fallbackMatch.fullDescription,
        clientName: fallbackMatch.clientName,
        timeline: fallbackMatch.timeline,
        role: fallbackMatch.role,
        techStack: fallbackMatch.techStack,
        challenges: fallbackMatch.challenges,
        solution: fallbackMatch.solution,
        imageUrl: fallbackMatch.imageUrl,
        liveUrl: fallbackMatch.liveUrl,
        createdAt: fallbackMatch.createdAt,
      };
    }
  }

  if (!project) {
    notFound();
  }

  const techStackArray = project.techStack
    ? project.techStack.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <div className="pt-28 md:pt-36 pb-24 relative overflow-hidden bg-white text-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="container-main max-w-5xl px-4">
        {/* Back Link */}
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to All Projects & Case Studies
          </Link>
        </FadeIn>

        {/* Title & Metadata */}
        <FadeIn delay={0.1}>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1">
                <Calendar size={13} />
                {new Date(project.createdAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </FadeIn>

        {/* Main Case Study Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Sticky Sidebar: Project Snapshot */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              
              {/* Image Preview */}
              <FadeIn delay={0.2}>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden relative border border-slate-200 bg-slate-100 shadow-sm">
                  {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-5xl font-bold text-slate-300" style={{ fontFamily: "var(--font-heading)" }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </FadeIn>

              {/* Specs Card */}
              <FadeIn delay={0.3}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                    Project Snapshot
                  </h3>

                  {project.clientName && (
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                        <User size={13} /> Client Context
                      </div>
                      <div className="text-sm font-medium text-slate-800">{project.clientName}</div>
                    </div>
                  )}

                  {project.role && (
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                        <Briefcase size={13} /> Agency Role
                      </div>
                      <div className="text-sm font-medium text-slate-800">{project.role}</div>
                    </div>
                  )}

                  {project.timeline && (
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                        <Clock size={13} /> Project Timeline
                      </div>
                      <div className="text-sm font-medium text-slate-800">{project.timeline}</div>
                    </div>
                  )}

                  {techStackArray.length > 0 && (
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                        <Code size={13} /> Tech Stack & Tools
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {techStackArray.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-700 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className="pt-4 border-t border-slate-100">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Case Study Narrative */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <FadeIn delay={0.3}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <h2 className="text-xl font-bold mb-4 text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                  Project Overview & Objectives
                </h2>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                  {project.fullDescription || project.description}
                </div>
              </div>
            </FadeIn>

            {/* Challenges */}
            {project.challenges && (
              <FadeIn delay={0.4}>
                <div className="p-8 rounded-3xl bg-amber-50/60 border border-amber-200 shadow-xs">
                  <h2 className="text-lg font-bold mb-3 text-amber-900 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                    <ShieldCheck size={20} className="text-amber-600" />
                    Key Technical & Business Challenges
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                    {project.challenges}
                  </p>
                </div>
              </FadeIn>
            )}

            {/* Architectural Solution */}
            {project.solution && (
              <FadeIn delay={0.5}>
                <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200 shadow-xs">
                  <h2 className="text-lg font-bold mb-3 text-emerald-900 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    Our Engineering & Architectural Solution
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                    {project.solution}
                  </p>
                </div>
              </FadeIn>
            )}

            {/* Key Deliverables & Outcomes */}
            <FadeIn delay={0.6}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Engineering Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-mono uppercase text-blue-600 font-semibold mb-1">Performance</div>
                    <div className="text-lg font-bold text-slate-900 mb-1">Sub-second Speed</div>
                    <p className="text-xs text-slate-500">Optimized bundle size, image pipelines, and responsive rendering.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-mono uppercase text-emerald-600 font-semibold mb-1">Ownership</div>
                    <div className="text-lg font-bold text-slate-900 mb-1">100% Code Transfer</div>
                    <p className="text-xs text-slate-500">Clean Git commits, comprehensive README documentation, and zero vendor lock-in.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Closing CTA */}
        <FadeIn delay={0.7}>
          <div className="mt-20 text-center p-10 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Want Similar Engineering & Design For Your Product?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              We can help you architect, design, and deploy a production-ready solution in as little as 2 to 4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-sm px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-100 shadow-md inline-flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919588617714?text=Hi%2C%20I%20saw%20your%20case%20studies%20and%20would%20like%20to%20discuss%20a%20project."
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