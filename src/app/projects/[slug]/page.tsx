import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { notFound } from "next/navigation";

const projects: Record<
  string,
  { title: string; category: string; description: string; fullDescription: string; color: string; liveUrl?: string; date: string }
> = {
  "e-commerce-platform": {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online store with payment integration, inventory management, and analytics dashboard.",
    fullDescription:
      "We designed and built a complete e-commerce solution from the ground up. The platform features a modern storefront with advanced search and filtering, a secure checkout process with Stripe integration, and a comprehensive admin dashboard for order and inventory management. Built with Next.js for lightning-fast page loads and optimized SEO, the platform handles thousands of daily visitors with ease.",
    color: "from-blue-500/20 to-purple-500/20",
    liveUrl: "#",
    date: "2024-03-15",
  },
  "fitness-tracking-app": {
    title: "Fitness Tracking App",
    category: "App Development",
    description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features.",
    fullDescription:
      "A comprehensive fitness companion app built with React Native for seamless cross-platform performance. Features include custom workout creation with exercise libraries, detailed nutrition tracking with barcode scanning, progress analytics with beautiful charts, and social features for accountability. The app syncs with popular wearable devices and maintains offline functionality for gym sessions without WiFi.",
    color: "from-green-500/20 to-emerald-500/20",
    date: "2024-06-20",
  },
  "brand-identity-suite": {
    title: "Brand Identity Suite",
    category: "Graphic Design",
    description: "Complete brand overhaul including logo, typography, color palette, and marketing materials.",
    fullDescription:
      "A complete brand transformation project that included logo design iterations, typography selection, color palette development, and a comprehensive brand guidelines document. We also created all marketing collateral including business cards, letterheads, social media templates, and presentation decks. The new identity perfectly captures the client's innovative spirit while maintaining professional credibility.",
    color: "from-orange-500/20 to-pink-500/20",
    date: "2024-01-10",
  },
  "saas-dashboard": {
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Real-time analytics dashboard for a SaaS product with advanced data visualization.",
    fullDescription:
      "An enterprise-grade analytics dashboard built for a SaaS company serving thousands of B2B clients. Features include real-time data streaming with WebSocket connections, interactive charts and heatmaps, customizable report builder with export functionality, and role-based access control. The dashboard processes millions of data points daily while maintaining sub-second response times.",
    color: "from-cyan-500/20 to-blue-500/20",
    liveUrl: "#",
    date: "2024-09-05",
  },
  "food-delivery-app": {
    title: "Food Delivery App",
    category: "App Development",
    description: "On-demand food delivery app with real-time tracking, ratings, and restaurant management.",
    fullDescription:
      "A multi-sided marketplace connecting restaurants, delivery partners, and hungry customers. The customer app features restaurant discovery with smart filtering, real-time order tracking with live map updates, and an integrated rating system. The restaurant panel includes menu management, order processing, and sales analytics. Built with React Native and a Node.js microservices backend.",
    color: "from-red-500/20 to-orange-500/20",
    date: "2024-08-12",
  },
  "inventory-management-system": {
    title: "Inventory Management System",
    category: "Custom Software",
    description: "Custom ERP system for warehouse inventory tracking with barcode scanning and reporting.",
    fullDescription:
      "A custom-built enterprise resource planning system designed for a multi-warehouse logistics company. Key features include barcode and QR code scanning for rapid item processing, automated stock alerts and reorder triggers, comprehensive reporting with export capabilities, and integration with existing accounting software. The system reduced manual data entry by 80% and improved inventory accuracy to 99.5%.",
    color: "from-violet-500/20 to-indigo-500/20",
    date: "2024-04-25",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </FadeIn>

          {/* Hero image placeholder */}
          <FadeIn delay={0.1}>
            <div
              className={`h-64 md:h-80 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-8`}
            >
              <span
                className="text-6xl font-bold text-foreground/10"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
          </FadeIn>

          {/* Meta */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="badge badge-new">{project.category}</span>
              <div className="flex items-center gap-1 text-sm text-muted">
                <Calendar size={14} />
                {new Date(project.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  Live Preview
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </FadeIn>

          {/* Title & Description */}
          <FadeIn delay={0.3}>
            <h1
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <GlassCard hover={false} className="mb-8">
              <p className="text-muted leading-relaxed">
                {project.fullDescription}
              </p>
            </GlassCard>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.5}>
            <div className="text-center">
              <p className="text-muted mb-4">Like what you see?</p>
              <Link href="/contact" className="btn-primary">
                Start a Similar Project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
