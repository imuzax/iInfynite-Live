import { Metadata } from "next";
import { Target, Eye, Heart, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about iInfynite — our story, mission, and the talented team behind your next digital transformation.",
};

const values = [
  { icon: Target, title: "Mission", description: "To empower businesses with innovative digital solutions that drive measurable growth and lasting impact." },
  { icon: Eye, title: "Vision", description: "To become the most trusted digital partner for startups and businesses worldwide." },
  { icon: Heart, title: "Values", description: "Quality over quantity. Transparency in every interaction. Innovation at every step. Client success is our success." },
];

const team = [
  { name: "Founder", role: "CEO & Lead Developer", initials: "F" },
  { name: "Designer", role: "UI/UX Lead", initials: "D" },
  { name: "Developer", role: "Full-Stack Engineer", initials: "E" },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              title="About iInfynite"
              subtitle="We're a passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences."
              gradient
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <GlassCard className="max-w-3xl mx-auto" hover={false}>
              <p className="text-muted leading-relaxed text-center">
                Founded with a vision to bridge the gap between great ideas and
                exceptional digital execution, iInfynite has been helping
                startups and businesses transform their digital presence. We
                believe every business deserves a premium online experience,
                regardless of size. Our approach combines cutting-edge technology
                with thoughtful design to deliver solutions that not only look
                stunning but perform exceptionally well.
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.15}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon size={26} className="text-accent" />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              title="Meet the Team"
              subtitle="The talented people behind iInfynite."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.15}>
                <GlassCard className="text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-heading)" }}>
                      {member.initials}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-muted text-sm mb-3">{member.role}</p>
                  <button className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-hover transition-colors">
                    <ExternalLink size={14} />
                    LinkedIn
                  </button>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
