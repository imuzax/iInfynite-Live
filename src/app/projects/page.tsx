import { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { prisma } from "@/lib/prisma";
import { ProjectsClient } from "./projects-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Case Studies & Featured Projects",
  description:
    "Explore iINFYNITE's portfolio of verified client projects: AI systems, native mobile apps, enterprise cloud dashboards, and high-conversion web platforms.",
};

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string;
  liveUrl: string | null;
  techStack: string;
}

const fallbackProjects: ProjectItem[] = [
  {
    id: "hirotix",
    title: "Hirotix — AI Recruitment & ATS Platform",
    slug: "hirotix-ai-recruitment-platform",
    category: "AI Solutions",
    description: "Enterprise applicant tracking system featuring asynchronous resume NLP parsing, semantic scoring algorithms, and multi-tenant recruiter pipelines.",
    imageUrl: "/hirotix-mockup.png",
    liveUrl: "https://github.com/imuzax/Hirotix",
    techStack: "Java Spring Boot, Python FastAPI, Docker, Next.js UI",
  },
  {
    id: "velocity-luxe",
    title: "Velocity Luxe — 3D E-Commerce Mobile App",
    slug: "velocity-luxe-app",
    category: "Mobile Apps",
    description: "Premium mobile commerce experience with 60fps 3D product previews, personalized AI recommendations, and instant checkout flows.",
    imageUrl: "/ecommerce-mockup.png",
    liveUrl: "https://github.com/imuzax/iInfynite-Live",
    techStack: "React Native, Three.js, Node.js, GraphQL",
  },
  {
    id: "data-dashboard",
    title: "Data Analytics & Cloud Infrastructure Dashboard",
    slug: "data-analytics-dashboard",
    category: "Custom Software",
    description: "Sophisticated IT solutions portfolio analytics and real-time infrastructure telemetry monitoring with zero UI latency.",
    imageUrl: "/dashboard-mockup.png",
    liveUrl: "https://github.com/imuzax/iInfynite-Live",
    techStack: "Next.js 15, Tailwind CSS, Recharts, PostgreSQL, Prisma",
  },
  {
    id: "solarkraftpro",
    title: "SolarKraftPro — Balkonkraftwerk Portal",
    slug: "solarkraftpro",
    category: "Web & E-Commerce",
    description: "German solar energy portal equipped with real-time ROI savings calculators, dynamic quotation flows, and partner store integration.",
    imageUrl: "/projects/solarkraftpro.png",
    liveUrl: "https://solarkraftpro.com",
    techStack: "HTML5, CSS3 Grid, Inter, Interactive JS Calculator",
  },
  {
    id: "hoerhilfeplus",
    title: "HoerHilfePlus — Hearing Aid Medical Page",
    slug: "hoerhilfeplus",
    category: "Web & Healthcare",
    description: "Healthcare landing page for the German market. High-conversion medical affiliate solution for AURIS PRO invisible hearing aids.",
    imageUrl: "/projects/hoerhilfeplus.png",
    liveUrl: "https://hoerhilfeplus.com",
    techStack: "HTML5, CSS3, Inter Typography, Responsive Flexbox/Grid",
  },
  {
    id: "stiefelstyle",
    title: "StiefelStyle — Luxury Fashion Footwear",
    slug: "stiefelstyle",
    category: "Web & E-Commerce",
    description: "Ultra-premium fashion showcase for the German market promoting high-end winter footwear with editorial aesthetics.",
    imageUrl: "/projects/stiefelstyle.png",
    liveUrl: "https://stiefelstyle.com",
    techStack: "HTML5, CSS3, Playfair Display, CSS Grid",
  },
  {
    id: "footsprings",
    title: "FootSprings — UK Athletic Footwear",
    slug: "footsprings",
    category: "Web & E-Commerce",
    description: "UK footwear affiliate platform utilizing the custom 'Aura Glass' design system and interactive product size selectors.",
    imageUrl: "/projects/footsprings.png",
    liveUrl: "https://footsprings.com",
    techStack: "HTML5, CSS3 Glassmorphism, Outfit Typography, Vanilla JS",
  },
  {
    id: "schuhwelt24",
    title: "SchuhWelt24 — Sneaker Storefront",
    slug: "schuhwelt24",
    category: "Web & E-Commerce",
    description: "Localized German affiliate storefront featuring Zalando API integration and full EU GDPR transparency compliance.",
    imageUrl: "/projects/schuhwelt24.png",
    liveUrl: "https://schuhwelt24.com",
    techStack: "HTML5, CSS3, Outfit Typography, Zalando API",
  },
];

export default async function ProjectsPage() {
  let dbProjects: ProjectItem[] = [];
  try {
    const fetched = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (fetched && fetched.length > 0) {
      dbProjects = fetched
        .filter((p) => p.imageUrl && p.imageUrl !== "/placeholder.png")
        .map((p) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          category: p.category,
          description: p.description,
          imageUrl: p.imageUrl,
          liveUrl: p.liveUrl,
          techStack: p.techStack || "",
        }));
    }
  } catch {
    dbProjects = [];
  }

  const projectsToDisplay = dbProjects.length > 0 ? dbProjects : fallbackProjects;

  return (
    <div className="pt-28 md:pt-36 pb-20 relative overflow-hidden bg-white text-slate-900">
      
      {/* Background ambient glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="container-main px-4">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 mb-6 shadow-xs">
              Verified Case Studies
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Featured Client Work & Case Studies
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore how we have engineered scalable digital products, automated systems, and high-converting storefronts across web, mobile, and AI domains.
            </p>
          </div>
        </FadeIn>

        <ProjectsClient projects={projectsToDisplay} />
      </section>
    </div>
  );
}