import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Layers, Cpu, Users, ShieldAlert, Sparkles, ArrowRight, Zap, Check } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { solutionsData, getSolutionBySlug } from "@/lib/solutions-data";

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);
  if (!solution) {
    return { title: "Solution Not Found | iInfynite" };
  }
  return {
    title: `${solution.title} | Proven Business Architecture | iInfynite`,
    description: `${solution.shortDescription} Custom engineered by iInfynite with 100% IP ownership, scalability, and fast delivery.`,
  };
}

export default async function SolutionDetailPage(props: PageProps) {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="pt-24 md:pt-32 pb-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container-main max-w-6xl">
        {/* Back navigation */}
        <FadeIn>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/50 hover:text-white transition-colors mb-8 md:mb-12"
          >
            <ArrowLeft size={16} />
            Back to 100+ Solutions Directory
          </Link>
        </FadeIn>

        {/* Hero Header */}
        <FadeIn delay={0.1}>
          <div className="mb-12 md:mb-16">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-white">
                {solution.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-white/60">
                Industry: {solution.industry}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {solution.title}
            </h1>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed font-light">
              {solution.shortDescription}
            </p>
          </div>
        </FadeIn>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Right/Main Column (Problem, Solution, Features) */}
          <div className="lg:col-span-2 space-y-10 order-2 lg:order-1">
            {/* The Problem Box */}
            <FadeIn delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#110505] border border-red-500/20 relative overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 text-red-400 font-semibold mb-4 text-sm sm:text-base">
                  <ShieldAlert size={20} className="text-red-500 shrink-0" />
                  The Business Bottleneck & Costly Problem
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {solution.problem}
                </p>
              </div>
            </FadeIn>

            {/* The iInfynite Solution Box */}
            <FadeIn delay={0.3}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#051109] border border-green-500/25 relative overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 text-green-400 font-semibold mb-4 text-sm sm:text-base">
                  <Sparkles size={20} className="text-green-500 shrink-0" />
                  The Engineered Solution by iInfynite
                </div>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
                  {solution.solution}
                </p>
              </div>
            </FadeIn>

            {/* Key Features & Architecture Breakdown */}
            <FadeIn delay={0.4}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-xl">
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2.5 border-b border-white/10 pb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Layers size={22} className="text-white/70" />
                  Core Features & Architecture Modules
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-[#111] border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-white/80 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Target Audience / Ideal Fit */}
            <FadeIn delay={0.5}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-xl flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Users size={24} className="text-white/70" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">Ideal Business Fit</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Designed specifically for: <span className="text-white font-medium">{solution.targetAudience}</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Left/Sidebar Column (Sticky Tech Stack & Consultation Card) */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-28 space-y-6">
              <FadeIn delay={0.3}>
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-white/15 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors" />

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 mb-6">
                    <Cpu size={16} className="text-white" />
                    Recommended Tech Stack
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {solution.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-[#151515] border border-white/10 text-xs font-medium text-white shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 pt-6 border-t border-white/10 text-xs text-white/60 mb-8">
                    <div className="flex items-center justify-between">
                      <span>IP Ownership:</span>
                      <span className="text-white font-semibold flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> 100% Client Owns</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Customization:</span>
                      <span className="text-white font-semibold">Bespoke to your needs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>NDA Protected:</span>
                      <span className="text-white font-semibold">Yes, Guaranteed</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href={`/contact?solution=${encodeURIComponent(solution.title)}`}
                      className="btn-primary w-full py-4 rounded-xl bg-white text-black font-semibold text-center block text-sm shadow-xl hover:bg-white/90"
                    >
                      Book Free Consultation
                    </Link>
                    <a
                      href={`https://wa.me/919588617714?text=Hi%2C%20I%20am%20interested%20in%20building%20the%20%2A${encodeURIComponent(solution.title)}%2A%20solution.%20Let's%20discuss%21`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-[#111] hover:bg-[#181818] border border-white/10 text-white font-medium text-center flex items-center justify-center gap-2 text-xs transition-colors"
                    >
                      Discuss on WhatsApp <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Quick trust box */}
              <FadeIn delay={0.4}>
                <div className="p-6 rounded-2xl bg-[#080808] border border-white/5 text-center">
                  <div className="text-xs text-white/50 leading-relaxed">
                    &ldquo;Clients don&apos;t care about jargon; they care about business growth. We build scalable software engineered to solve your exact operational challenges.&rdquo;
                  </div>
                  <div className="mt-3 text-xs font-semibold text-white/80">— iInfynite Engineering Team</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <FadeIn delay={0.6}>
          <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/15 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-white mb-4">
                <Zap size={14} className="text-yellow-400" /> Rapid Prototype & Launch
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Ready to Implement {solution.title}?
              </h2>
              <p className="text-sm sm:text-base text-white/60 mb-8 leading-relaxed">
                We customize this exact architecture for your business workflow, integrate your existing tools, and deploy to secure cloud infrastructure with dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/contact?solution=${encodeURIComponent(solution.title)}`}
                  className="btn-primary text-sm px-8 py-3.5 rounded-full bg-white text-black font-semibold w-full sm:w-auto"
                >
                  Schedule Technical Call
                </Link>
                <Link
                  href="/solutions"
                  className="btn-secondary text-sm px-8 py-3.5 rounded-full w-full sm:w-auto"
                >
                  Explore Other Solutions
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
