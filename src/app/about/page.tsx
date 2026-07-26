import { Metadata } from "next";
import { Target, Eye, Heart, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

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

export default async function AboutPage() {
  const teamMembers = await prisma.teamMember.findMany();
  
  // Sort so Founder appears first, followed by other team members uniformly
  const sortedTeam = [...teamMembers].sort((a, b) => {
    if (a.isFounder && !b.isFounder) return -1;
    if (!a.isFounder && b.isFounder) return 1;
    return 0;
  });

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

          {/* Unified Team Members Grid (All members uniform and equal size) */}
          {sortedTeam.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {sortedTeam.map((member, index) => (
                <FadeIn key={member.id} delay={index * 0.1} className="h-full">
                  <GlassCard className="p-0 overflow-hidden h-full flex flex-col group border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                    {/* Uniform Photo Area */}
                    <div className="w-full aspect-[4/3] bg-black/60 relative overflow-hidden border-b border-white/10 shrink-0">
                      {member.photoUrl ? (
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-muted bg-white/5">
                          {member.name.charAt(0)}
                        </div>
                      )}
                      {member.isFounder && (
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-accent/40 text-accent text-[11px] font-bold tracking-widest uppercase shadow-xl">
                          Founder & CEO
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-7 flex flex-col flex-grow text-left">
                      <h3
                        className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-accent text-sm font-semibold mb-4 tracking-wide">
                        {member.role}
                      </p>

                      {member.bio && (
                        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow font-light line-clamp-4">
                          {member.bio}
                        </p>
                      )}

                      <div className="pt-4 border-t border-white/10 mt-auto flex items-center justify-between">
                        {member.linkedin ? (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-accent transition-colors duration-200"
                          >
                            <ExternalLink size={15} className="text-accent" /> Connect on LinkedIn
                          </a>
                        ) : (
                          <span className="text-xs text-muted/40 font-light">iINFYNITE Team</span>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          )}
          
          {teamMembers.length === 0 && (
            <div className="text-center py-20 text-muted">
              Team members will appear here soon.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
