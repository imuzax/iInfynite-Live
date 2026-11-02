"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string;
  liveUrl?: string | null;
}

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filter */}
      <FadeIn delay={0.2}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <Link href={`/projects/${project.slug}`}>
              <GlassCard className="group cursor-pointer h-full flex flex-col hover:border-blue-400">
                <div className="h-48 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden mb-5 relative shrink-0">
                  {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-slate-300" style={{ fontFamily: "var(--font-heading)" }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-new">{project.category}</span>
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-1 text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
                    View Details
                    <ExternalLink size={14} />
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-sm flex items-center gap-1.5 z-10"
                    >
                      🚀 Live Site
                    </a>
                  )}
                </div>
              </GlassCard>
            </Link>
          </FadeIn>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center text-muted py-12">
          No projects found in this category.
        </div>
      )}
    </>
  );
}
