import { Metadata } from "next";
import { Target, Eye, Heart, ExternalLink, Linkedin } from "lucide-react";
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
  
  const founders = teamMembers.filter((m) => m.isFounder);
  const others = teamMembers.filter((m) => !m.isFounder);

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

          {/* Founders Section (Prominent) */}
          {founders.length > 0 && (
            <div className="mb-20 space-y-8 max-w-5xl mx-auto">
              {founders.map((founder, i) => (
                <FadeIn key={founder.id} delay={i * 0.1}>
                  <div className="glass-card-static rounded-3xl p-8 md:p-12 border border-accent/20 bg-accent/5">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                      <div className="md:col-span-5">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                          {founder.photoUrl ? (
                            <img src={founder.photoUrl} alt={founder.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-muted">
                              {founder.name.charAt(0)}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-black text-xs font-bold mb-6 tracking-widest uppercase">
                          Founder
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                          {founder.name}
                        </h3>
                        <p className="text-xl text-accent mb-6 font-medium">{founder.role}</p>
                        
                        {founder.bio && (
                          <div className="prose prose-invert prose-p:text-muted prose-p:leading-relaxed mb-8 whitespace-pre-wrap text-lg">
                            {founder.bio}
                          </div>
                        )}
                        
                        {founder.linkedin && (
                          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                            <Linkedin size={18} /> Connect on LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Other Team Members Grid */}
          {others.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {others.map((member, index) => (
                <FadeIn key={member.id} delay={index * 0.1}>
                  <GlassCard className="text-center h-full flex flex-col items-center p-8">
                    <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10 bg-black mb-6 shrink-0 shadow-lg">
                      {member.photoUrl ? (
                        <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-muted">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
                    
                    {member.bio && (
                      <p className="text-muted text-sm line-clamp-3 mb-6">
                        {member.bio}
                      </p>
                    )}
                    
                    <div className="mt-auto">
                      {member.linkedin ? (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors">
                          <Linkedin size={16} /> LinkedIn
                        </a>
                      ) : (
                        <span className="text-sm text-muted/50 invisible">No LinkedIn</span>
                      )}
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
