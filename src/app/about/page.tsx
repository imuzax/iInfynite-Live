import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Code2,
  Terminal,
  Layers,
  Cpu,
  Users
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/social-icons";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us — Engineering Culture, Mission & Team",
  description:
    "Learn about iINFYNITE — a growing full-service digital agency in Pune. Discover our engineering philosophy, mission, values, and cross-functional team.",
};

const agencyValues = [
  {
    icon: Target,
    title: "Engineering Rigor",
    description:
      "We write modular, type-safe, and scalable code that stands up to heavy production traffic. No shortcuts, no spaghetti code, and no technical debt passed onto the client.",
  },
  {
    icon: Eye,
    title: "Design Precision",
    description:
      "Aesthetics must serve function. Every pixel, typography scale, and button interaction we craft is intentionally designed to build user trust and maximize conversion rates.",
  },
  {
    icon: Heart,
    title: "Radical Transparency",
    description:
      "No account-manager telephone games. You collaborate directly with senior architects and designers, review weekly working demos, and retain 100% IP ownership.",
  },
];

interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedin: string | null;
  github: string | null;
  isFounder: boolean;
}

const fallbackTeam: TeamMemberItem[] = [
  {
    id: "founder",
    name: "Muzammil Shaikh",
    role: "Founder & CEO",
    bio: "Visionary tech leader with 8+ years of experience building high-ticket enterprise SaaS, AI automation pipelines, and scalable cloud architectures.",
    photoUrl: "/team/founder.jpg",
    linkedin: "https://linkedin.com/in/muzammil-shaikh",
    github: "https://github.com/imuzax",
    isFounder: true,
  },
  {
    id: "team-lead",
    name: "Rahul Deshmukh",
    role: "Team Lead & Senior Architect",
    bio: "Full-stack architecture specialist driving technical delivery, cloud migrations, and high-performance React/Next.js systems.",
    photoUrl: "/team/team-lead.jpg",
    linkedin: "https://linkedin.com/in/rahul-deshmukh",
    github: null,
    isFounder: false,
  },
  {
    id: "uiux-lead",
    name: "Priya Sharma",
    role: "Lead UI/UX & Product Designer",
    bio: "Award-winning product designer crafting premium user interfaces, design systems, and conversion-focused digital journeys.",
    photoUrl: "/team/uiux-lead.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma",
    github: null,
    isFounder: false,
  },
  {
    id: "ai-engineer",
    name: "Vikramaditya Patil",
    role: "Senior AI / MLOps Engineer",
    bio: "Specializing in custom LLM integration, workflow automation, and predictive data modeling for enterprise clients.",
    photoUrl: "/team/ai-engineer.jpg",
    linkedin: "https://linkedin.com/in/vikram-patil",
    github: null,
    isFounder: false,
  },
  {
    id: "mobile-lead",
    name: "Ananya Iyer",
    role: "Lead Mobile Engineer (iOS/Android)",
    bio: "Expert in React Native and Flutter, building ultra-smooth native mobile experiences with 99.9% crash-free rates.",
    photoUrl: "/team/mobile-lead.jpg",
    linkedin: "https://linkedin.com/in/ananya-iyer",
    github: null,
    isFounder: false,
  },
  {
    id: "client-success",
    name: "Siddharth Mehta",
    role: "VP of Client Success & Growth",
    bio: "Ensuring seamless agency communication, transparent agile delivery, and strategic revenue growth for our partners.",
    photoUrl: "/team/client-success.jpg",
    linkedin: "https://linkedin.com/in/siddharth-mehta",
    github: null,
    isFounder: false,
  },
];

export default async function AboutPage() {
  let dbTeam: TeamMemberItem[] = [];
  try {
    const fetched = await prisma.teamMember.findMany();
    if (fetched && fetched.length > 0) {
      dbTeam = fetched.map(m => ({
        id: m.id,
        name: m.name,
        role: m.role,
        bio: m.bio || "",
        photoUrl: m.photoUrl,
        linkedin: m.linkedin,
        github: m.github,
        isFounder: m.isFounder,
      }));
    }
  } catch {
    dbTeam = [];
  }

  const teamList = dbTeam.length > 0 ? dbTeam : fallbackTeam;
  const sortedTeam = [...teamList].sort((a, b) => {
    if (a.isFounder && !b.isFounder) return -1;
    if (!a.isFounder && b.isFounder) return 1;
    return 0;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 relative overflow-hidden bg-white text-slate-900">
      
      {/* Background ambient glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ====== 1. HERO & AGENCY STORY ====== */}
      <section className="container-main mb-16 md:mb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 mb-6 shadow-xs">
              <Sparkles size={14} className="text-blue-600" />
              Who We Are & What Drives Us
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We are <span className="gradient-text">iINFYNITE</span>. A Full-Service Digital Agency Built for Growth.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              Headquartered in Pune Camp, India, iINFYNITE was founded on a simple premise: modern businesses need software that looks stunning, loads instantly, and directly accelerates revenue.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-sm text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Our Story: Replacing Bureaucracy with High-Velocity Delivery
              </h3>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Most companies face a frustrating dilemma when seeking digital partners: freelance developers can be unreliable and lack design polish, while traditional IT consultancy firms charge bloated retainers and drown projects in endless change requests.
                </p>
                <p>
                  We built iINFYNITE as the antidote. We operate as an integrated product studio and engineering powerhouse. Our multidisciplinary team combines award-winning UI/UX design, full-stack web and mobile engineering, custom SaaS architecture, and artificial intelligence automation into a unified, high-speed delivery pipeline.
                </p>
                <p>
                  Whether working with early-stage founders in the UK and Germany or scaling enterprise businesses in India, we deliver battle-tested digital platforms that convert visitors, automate daily workflows, and give brands an unfair technological advantage.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== 2. CORE PHILOSOPHY & VALUES ====== */}
      <section className="container-main mb-20 md:mb-28">
        <SectionHeading
          title="Our Working Philosophy"
          subtitle="Four core commitments that define every project we accept, every line of code we ship, and every relationship we build."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agencyValues.map((val, idx) => (
            <FadeIn key={val.title} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600 shadow-xs">
                  <val.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ====== 3. AGENCY WORKING PROCESS ====== */}
      <section className="py-16 md:py-24 border-y border-slate-200 bg-slate-50/60 mb-20 md:mb-28">
        <div className="container-main">
          <SectionHeading
            title="How We Deliver Results"
            subtitle="Our 4-phase agile engineering journey ensures zero miscommunication and guaranteed delivery dates."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Phase 1",
                title: "Deep Scoping & Architecture",
                desc: "We dissect your business model, interview stakeholders, and construct interactive wireframes and database schemas before writing a single line of code.",
              },
              {
                step: "Phase 2",
                title: "UI/UX & Design System",
                desc: "Our design team crafts bespoke, high-converting interfaces in Figma, ensuring cohesive visual branding and effortless user flow navigation.",
              },
              {
                step: "Phase 3",
                title: "Agile Sprints & Weekly Demos",
                desc: "We develop in rapid weekly sprints. You test a real staging build every Friday, ensuring continuous alignment and rapid feedback loops.",
              },
              {
                step: "Phase 4",
                title: "Deployment & 100% IP Transfer",
                desc: "We deploy to secure cloud servers, transfer full source code and database ownership, conduct team training, and activate 24/7 SLA maintenance.",
              },
            ].map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs h-full flex flex-col">
                  <span className="text-xs font-mono font-bold uppercase text-blue-600 mb-3">{p.step}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. AUTHENTIC TEAM SHOWCASE ====== */}
      <section className="container-main mb-20 md:mb-28">
        <FadeIn>
          <SectionHeading
            title="The Leadership & Engineering Team"
            subtitle="Experienced developers, product architects, and designers committed to building your digital breakthrough."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sortedTeam.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.1} className="h-full">
              <div className="rounded-3xl overflow-hidden h-full flex flex-col border border-slate-200 hover:border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group">
                
                {/* Photo Area */}
                <div className="w-full aspect-[4/3] bg-slate-100 relative overflow-hidden border-b border-slate-200 shrink-0">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-slate-300 bg-slate-50">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  {member.isFounder && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white text-[11px] font-bold tracking-widest uppercase shadow-md">
                      Founder & CEO
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-7 flex flex-col flex-grow text-left">
                  <h3
                    className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-semibold mb-4 tracking-wide">
                    {member.role}
                  </p>

                  {member.bio && (
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-normal">
                      {member.bio}
                    </p>
                  )}

                  <div className="pt-4 border-t border-slate-200 mt-auto flex items-center justify-between gap-3 flex-wrap">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <LinkedinIcon size={15} className="text-blue-600 shrink-0" />
                        <span>LinkedIn Profile</span>
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">Team Member</span>
                    )}

                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      >
                        <GithubIcon size={15} className="text-slate-900 shrink-0" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ====== 5. HEADQUARTERS & GLOBAL FOOTPRINT ====== */}
      <section className="container-main mb-16 md:mb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-4">
                <MapPin size={14} className="text-red-500" /> Pune Camp Headquarters
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Rooted in Pune, Engineering for the Globe.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Our primary engineering hub is located in Pune Camp, Maharashtra, India. From here, our engineers collaborate across global timezones—working with startups and digital agencies in the UK, Germany, USA, and the Middle East.
              </p>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-red-500 shrink-0" />
                  <span>Pune Camp, Pune, Maharashtra 411001, India 🇮🇳</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-blue-600 shrink-0" />
                  <a href="mailto:iinfynite0@gmail.com" className="hover:text-blue-600 font-medium">iinfynite0@gmail.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-emerald-600 shrink-0" />
                  <a href="tel:9588617714" className="hover:text-emerald-600 font-medium">+91 95886 17714</a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Agency Operational Standards</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Timezone Compatibility:</strong> Overlapping business hours with UK (GMT), Europe (CET), and US (EST).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Communication Channels:</strong> Instant collaboration via private Slack channel, WhatsApp group, or Microsoft Teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Enterprise Security:</strong> Git version control with branch protection, encrypted secrets, and staging environment sandboxes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. CLOSING CTA ====== */}
      <section className="container-main text-center">
        <FadeIn>
          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Looking for a Dedicated Digital Agency Partner?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Whether you need to outsource an entire product engineering roadmap or accelerate your startup with a dedicated sprint team, let&apos;s schedule a 30-minute discovery session.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-sm px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-100 shadow-md inline-flex items-center gap-2"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary text-sm px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium inline-flex items-center gap-2 border border-slate-700"
              >
                <span>View Our Projects</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}