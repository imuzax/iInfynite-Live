"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = ["All", "Web Development", "App Development", "Graphic Design", "Custom Software"];

const projects = [
  {
    title: "Velocity Luxe App",
    slug: "velocity-luxe-app",
    category: "App Development",
    description: "Premium e-commerce mobile experience with 3D UI elements.",
    color: "from-blue-500/20 to-purple-500/20",
    imageUrl: "/ecommerce-mockup.png",
  },
  {
    title: "Data Analytics Dashboard",
    slug: "data-analytics-dashboard",
    category: "Custom Software",
    description: "Sophisticated IT solutions portfolio analytics and monitoring.",
    color: "from-green-500/20 to-emerald-500/20",
    imageUrl: "/dashboard-mockup.png",
  },
  {
    title: "Brand Identity Suite",
    slug: "brand-identity-suite",
    category: "Graphic Design",
    description: "Complete brand overhaul including logo, typography, color palette, and marketing materials.",
    color: "from-orange-500/20 to-pink-500/20",
  },
  {
    title: "SaaS Dashboard",
    slug: "saas-dashboard",
    category: "Web Development",
    description: "Real-time analytics dashboard for a SaaS product with advanced data visualization.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Food Delivery App",
    slug: "food-delivery-app",
    category: "App Development",
    description: "On-demand food delivery app with real-time tracking, ratings, and restaurant management.",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Inventory Management System",
    slug: "inventory-management-system",
    category: "Custom Software",
    description: "Custom ERP system for warehouse inventory tracking with barcode scanning and reporting.",
    color: "from-violet-500/20 to-indigo-500/20",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              title="Our Projects"
              subtitle="A showcase of solutions we've crafted for businesses like yours."
              gradient
            />
          </FadeIn>

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
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
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
        </div>
      </section>
    </div>
  );
}
