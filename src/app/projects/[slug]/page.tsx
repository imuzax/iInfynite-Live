import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User, Briefcase, Clock, Code } from "lucide-react";
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

  const techStackArray = project.techStack 
    ? project.techStack.split(",").map(t => t.trim()).filter(Boolean)
    : [];

  return (
    <div className="pt-32 pb-24">
      <section className="section-padding">
        <div className="container-main max-w-5xl">
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

          {/* Title & Meta */}
          <FadeIn delay={0.1}>
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="badge badge-new">{project.category}</span>
                <span className="text-muted text-sm flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(project.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>
          </FadeIn>

          {/* Hero image */}
          <FadeIn delay={0.2}>
            <div className="h-64 md:h-[400px] rounded-3xl overflow-hidden mb-16 relative">
              {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                  <span className="text-8xl font-bold text-foreground/10" style={{ fontFamily: "var(--font-heading)" }}>
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: At a Glance */}
            <div className="lg:col-span-1 space-y-6">
              <FadeIn delay={0.3}>
                <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 sticky top-32">
                  <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-4">At a Glance</h3>
                  <div className="space-y-6">
                    {project.clientName && (
                      <div>
                        <div className="text-xs text-muted uppercase tracking-wider mb-1 flex items-center gap-2"><User size={14} /> Client</div>
                        <div className="font-medium">{project.clientName}</div>
                      </div>
                    )}
                    {project.role && (
                      <div>
                        <div className="text-xs text-muted uppercase tracking-wider mb-1 flex items-center gap-2"><Briefcase size={14} /> Role</div>
                        <div className="font-medium">{project.role}</div>
                      </div>
                    )}
                    {project.timeline && (
                      <div>
                        <div className="text-xs text-muted uppercase tracking-wider mb-1 flex items-center gap-2"><Clock size={14} /> Timeline</div>
                        <div className="font-medium">{project.timeline}</div>
                      </div>
                    )}
                    {project.liveUrl && (
                      <div>
                        <div className="text-xs text-muted uppercase tracking-wider mb-2 flex items-center gap-2"><ExternalLink size={14} /> Live Link</div>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center gap-1">
                          Visit Project <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>

                  {techStackArray.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <div className="text-xs text-muted uppercase tracking-wider mb-4 flex items-center gap-2"><Code size={14} /> Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {techStackArray.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Case Study Content */}
            <div className="lg:col-span-2 space-y-12">
              <FadeIn delay={0.4}>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Project Overview</h2>
                <div className="prose prose-invert prose-p:text-muted prose-p:leading-relaxed max-w-none whitespace-pre-wrap">
                  {project.fullDescription || "No detailed description available."}
                </div>
              </FadeIn>

              {project.challenges && (
                <FadeIn delay={0.5}>
                  <div className="p-8 rounded-2xl bg-danger/5 border border-danger/20">
                    <h2 className="text-xl font-bold mb-4 text-danger-light" style={{ fontFamily: "var(--font-heading)" }}>The Challenge</h2>
                    <p className="text-muted leading-relaxed whitespace-pre-wrap">{project.challenges}</p>
                  </div>
                </FadeIn>
              )}

              {project.solution && (
                <FadeIn delay={0.6}>
                  <div className="p-8 rounded-2xl bg-success/5 border border-success/20">
                    <h2 className="text-xl font-bold mb-4 text-success-light" style={{ fontFamily: "var(--font-heading)" }}>The Solution</h2>
                    <p className="text-muted leading-relaxed whitespace-pre-wrap">{project.solution}</p>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>

          {/* CTA */}
          <FadeIn delay={0.7}>
            <div className="mt-24 text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready to build something amazing?</h2>
              <p className="text-muted mb-8 max-w-xl mx-auto">Let's discuss how we can bring your ideas to life with the same level of care and expertise.</p>
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
