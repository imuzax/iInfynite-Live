"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, Layers, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionsData, getAllCategories, SolutionItem } from "@/lib/solutions-data";

export function SolutionsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => ["All", ...getAllCategories()], []);

  const filteredSolutions = useMemo(() => {
    return solutionsData.filter((item: SolutionItem) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.problem.toLowerCase().includes(query) ||
        item.solution.toLowerCase().includes(query) ||
        item.industry.toLowerCase().includes(query) ||
        item.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-24 md:pt-32 pb-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container-main">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/80 mb-6 font-medium">
              <Sparkles size={14} className="text-white animate-pulse" />
              100+ Proven Software Architectures
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready Business Solutions Engine
            </h1>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t reinvent the wheel or risk your budget on unproven experiments. Explore our library of 100+ battle-tested software architectures, AI workflows, and industry platforms engineered for rapid deployment and revenue growth.
            </p>
          </div>
        </FadeIn>

        {/* Search Bar */}
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto mb-10 px-2">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search by industry, problem, feature, or tech (e.g., 'WhatsApp', 'Hospital', 'AI', 'Billing')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl pl-13 pr-6 py-4 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all shadow-2xl focus:bg-[#111]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white bg-white/10 px-2.5 py-1 rounded-md transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Category Pills */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 md:mb-16 max-w-6xl mx-auto px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                    : "bg-[#111] text-white/60 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat} {cat === "All" ? `(${solutionsData.length})` : `(${solutionsData.filter((s) => s.category === cat).length})`}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 px-2 border-b border-white/5 pb-4">
          <div className="text-sm font-medium text-white/50">
            Showing <span className="text-white font-semibold">{filteredSolutions.length}</span> solution{filteredSolutions.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && <span> in <span className="text-white underline decoration-white/30">{selectedCategory}</span></span>}
            {searchQuery && <span> matching &ldquo;<span className="text-white">{searchQuery}</span>&rdquo;</span>}
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-400" /> 100% Customisable</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-blue-400" /> IP Ownership Guaranteed</span>
          </div>
        </div>

        {/* Solutions Grid */}
        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((solution, i) => (
              <FadeIn key={solution.slug} delay={(i % 6) * 0.05}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="premium-card p-6 sm:p-7 flex flex-col h-full group hover:border-white/25 transition-all duration-200 relative overflow-hidden"
                >
                  {/* Top badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-white/70 uppercase tracking-wider">
                      {solution.industry}
                    </span>
                    <span className="text-xs text-white/40 font-mono group-hover:text-white/70 transition-colors flex items-center gap-1">
                      Explore <ArrowRight size={12} className="text-blue-400 transition-colors" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-white transition-colors leading-snug">
                    {solution.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {solution.shortDescription}
                  </p>

                  {/* Problem / Solution Highlight Box */}
                  <div className="bg-[#111] border border-white/5 rounded-xl p-3.5 mb-6 space-y-2 text-xs">
                    <div className="flex items-start gap-2 text-red-400/90">
                      <span className="font-semibold shrink-0 mt-0.5">Problem:</span>
                      <span className="text-white/60 line-clamp-1">{solution.problem}</span>
                    </div>
                    <div className="flex items-start gap-2 text-green-400/90">
                      <span className="font-semibold shrink-0 mt-0.5">Solution:</span>
                      <span className="text-white/70 line-clamp-1">{solution.solution}</span>
                    </div>
                  </div>

                  {/* Tech stack footer */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mt-auto">
                    {solution.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] text-white/50 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {solution.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-white/40">
                        +{solution.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0a0a0a] rounded-3xl border border-white/5 max-w-2xl mx-auto my-12">
            <Layers className="mx-auto text-white/20 mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">No exact solution match found</h3>
            <p className="text-sm text-white/50 max-w-md mx-auto mb-6">
              We couldn&apos;t find an off-the-shelf blueprint for &ldquo;{searchQuery}&rdquo;. However, we build 100% custom software tailored to any business requirement!
            </p>
            <Link href="/contact" className="btn-primary text-sm px-6 py-3 rounded-full">
              Request Custom Build <ArrowRight size={14} />
            </Link>
          </div>
        )}

        {/* Bottom Custom Build CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#111] via-[#0f0f0f] to-[#111] border border-white/10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="max-w-2xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-white mb-4">
                <Zap size={14} className="text-yellow-400" /> Need something completely custom?
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                If You Can Imagine It, We Can Build It.
              </h2>
              <p className="text-sm sm:text-base text-white/60 mb-8 leading-relaxed">
                Whether you need to integrate proprietary legacy hardware, build an AI agent trained on your internal company wiki, or architect a complex multi-region SaaS, our engineering team brings your exact vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary text-sm px-8 py-3.5 rounded-full bg-white text-black hover:bg-white/90 w-full sm:w-auto font-semibold"
                >
                  Book Free Technical Consultation
                </Link>
                <Link
                  href="/projects"
                  className="btn-secondary text-sm px-8 py-3.5 rounded-full w-full sm:w-auto"
                >
                  View Client Case Studies
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
