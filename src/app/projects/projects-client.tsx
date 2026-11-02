"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, Sparkles, Filter } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string;
  liveUrl?: string | null;
  techStack?: string | null;
}

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const rawCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...rawCategories];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter Pills */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 md:mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-md scale-102"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat} {cat === "All" ? `(${projects.length})` : `(${projects.filter((p) => p.category === cat).length})`}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Large Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {filtered.map((project, index) => {
          const techList = project.techStack
            ? project.techStack.split(",").map((t) => t.trim()).filter(Boolean)
            : [];

          return (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group h-full">
                
                {/* Large Preview Image Container */}
                <Link href={`/projects/${project.slug}`} className="block relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200 cursor-pointer">
                  {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-slate-300" style={{ fontFamily: "var(--font-heading)" }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </Link>

                {/* Content Area */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <div className="text-xs font-mono uppercase text-blue-600 font-semibold mb-2">
                    Case Study
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h2
                      className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  {techList.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {techList.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom Action Links */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 mt-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1"
                    >
                      <span>Read Case Study Breakdown</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Live Site</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </FadeIn>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
          <Filter size={32} className="mx-auto text-slate-400 mb-3" />
          <h3 className="text-lg font-bold text-slate-800 mb-1">No projects found in this category</h3>
          <p className="text-xs text-slate-500 mb-4">Try selecting &quot;All&quot; to view our full portfolio.</p>
          <button
            onClick={() => setActiveCategory("All")}
            className="btn-primary text-xs px-5 py-2"
          >
            Reset Filters
          </button>
        </div>
      )}
    </>
  );
}