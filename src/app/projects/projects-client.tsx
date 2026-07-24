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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-glass-bg border border-glass-border text-muted hover:text-foreground hover:border-glass-hover"
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
              <GlassCard className="group cursor-pointer h-full">
                <div className="h-48 rounded-xl bg-glass-bg border border-white/5 overflow-hidden mb-5 relative group-hover:border-white/10 transition-colors">
                  {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-foreground/20" style={{ fontFamily: "var(--font-heading)" }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-new">{project.category}</span>
                </div>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted group-hover:text-accent transition-colors">
                  View Details
                  <ExternalLink size={14} />
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
