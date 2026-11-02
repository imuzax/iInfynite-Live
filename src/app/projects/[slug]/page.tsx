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
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8"
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
                <span className="text-slate-500 text-sm flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(project.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: Sticky Sidebar with Image & Details */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <FadeIn delay={0.2}>
                  <div className="h-64 rounded-2xl overflow-hidden relative border border-slate-200 bg-slate-100">
                    {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <span className="text-6xl font-bold text-slate-300" style={{ fontFamily: "var(--font-heading)" }}>
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-semibold mb-6 border-b border-slate-100 pb-4 text-slate-900">At a Glance</h3>
                    <div className="space-y-6">
                      {project.clientName && (
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-2"><User size={14} /> Client</div>
                          <div className="font-medium text-slate-800">{project.clientName}</div>
                        </div>
                      )}
                      {project.role && (
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-2"><Briefcase size={14} /> Role</div>
                          <div className="font-medium text-slate-800">{project.role}</div>
                        </div>
                      )}
                      {project.timeline && (
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-2"><Clock size={14} /> Timeline</div>
                          <div className="font-medium text-slate-800">{project.timeline}</div>
                        </div>
                      )}
                      {project.liveUrl && (
                        <div className="pt-2">
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm"
                          >
                            🚀 View Live Website <ExternalLink size={16} />
                          </a>
                        </div>
                      )}
                    </div>

                    {techStackArray.length > 0 && (
                      <div className="mt-8 pt-8 border-t border-slate-100">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2"><Code size={14} /> Technologies</div>
                        <div className="flex flex-wrap gap-2">
                          {techStackArray.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Right Column: Case Study Content */}
            <div className="lg:col-span-2 space-y-12">
              <FadeIn delay={0.4}>
                <h2 className="text-2xl font-bold mb-4 text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>Project Overview</h2>
                <div className="prose text-slate-600 leading-relaxed max-w-none whitespace-pre-wrap">
                  {project.fullDescription || "No detailed description available."}
                </div>
              </FadeIn>

              {project.challenges && (
                <FadeIn delay={0.5}>
                  <div className="p-8 rounded-2xl bg-red-50/70 border border-red-200">
                    <h2 className="text-xl font-bold mb-4 text-red-700" style={{ fontFamily: "var(--font-heading)" }}>The Challenge</h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{project.challenges}</p>
                  </div>
                </FadeIn>
              )}

              {project.solution && (
                <FadeIn delay={0.6}>
                  <div className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                    <h2 className="text-xl font-bold mb-4 text-emerald-700" style={{ fontFamily: "var(--font-heading)" }}>The Solution</h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{project.solution}</p>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>

          {/* CTA */}
          <FadeIn delay={0.7}>
            <div className="mt-24 text-center p-12 rounded-3xl bg-slate-50 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>Ready to build something amazing?</h2>
              <p className="text-slate-600 mb-8 max-w-xl mx-auto">Let's discuss how we can bring your ideas to life with the same level of care and expertise.</p>
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
