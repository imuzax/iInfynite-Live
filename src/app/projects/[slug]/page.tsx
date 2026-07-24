import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage(props: PageProps) {
  const { slug } = await props.params;

  const project = await prisma.project.findUnique({
    where: { slug },
  });

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

          {/* Hero image or placeholder */}
          <FadeIn delay={0.1}>
            <div className="h-64 md:h-96 rounded-2xl bg-glass-bg border border-white/5 overflow-hidden mb-8 relative">
              {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-foreground/10" style={{ fontFamily: "var(--font-heading)" }}>
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Meta */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="badge badge-new">{project.category}</span>
              <div className="flex items-center gap-1 text-sm text-muted">
                <Calendar size={14} />
                {new Date(project.createdAt).toLocaleDateString("en-IN", {
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
              <p className="text-muted leading-relaxed whitespace-pre-wrap">
                {project.fullDescription || project.description}
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
