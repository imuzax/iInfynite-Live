import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Rocket,
  TrendingUp,
  Cog,
  Command,
  Zap,
  Shield,
  Search,
  Globe,
  Settings,
  Star,
  Users,
  Play
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlobalPreloader } from "@/components/ui/preloader";

export default function HomePage() {
  return (
    <>
      <GlobalPreloader />
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-main text-center relative z-10 pt-32 pb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
              New Feature: Enterprise Solutions
              <ArrowRight size={12} className="ml-1" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] mb-6 max-w-5xl mx-auto text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineering the future of IT solutions
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              A premium IT agency delivering high-performance websites, native applications, and digital growth strategies for modern teams.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm px-8 py-3 rounded-full bg-white text-black hover:bg-white/90">
                Start a Project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== EMPOWERING TEAMS ====== */}
      <section className="py-24 relative">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Empowering teams worldwide</h2>
              <p className="text-white/50 text-sm">Join hundreds of forward-thinking startups and enterprises scaling their operations with us.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Web Development", icon: Code2, text: "High-performance websites and web apps built with cutting-edge technologies." },
              { title: "App Development", icon: Smartphone, text: "Native and cross-platform mobile apps that users love." },
              { title: "Digital Growth", icon: TrendingUp, text: "SEO, marketing, and analytics to scale your digital presence." }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 group h-full">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                    <item.icon size={18} className="text-white/70 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-white/40 group-hover:text-white/70 transition-colors">
                    <ArrowRight size={12} /> Read more
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SMALL TEAMS GRID ====== */}
      <section className="py-32 relative border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Features</div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Small teams waste hours<br />switching between tools</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Command, title: "Custom Software", text: "Tailored solutions built exactly to your business requirements." },
              { icon: Zap, title: "Startup Acceleration", text: "From idea to MVP — we help startups launch faster and smarter." },
              { icon: Shield, title: "Enterprise Security", text: "Bank-grade security protocols implemented in every product." },
              { icon: Search, title: "SEO Optimization", text: "Rank higher and drive organic traffic to your platform." },
              { icon: Globe, title: "Global Reach", text: "Multilingual support and CDN integration for global audiences." },
              { icon: Settings, title: "Automated Workflows", text: "Streamline operations with custom API integrations." }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden h-full">
                  {/* Subtle hover glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-white/0 group-hover:bg-white/5 rounded-full blur-2xl transition-all duration-500" />
                  
                  <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 relative z-10">
                    <item.icon size={20} className="text-white/70" />
                  </div>
                  <h3 className="text-base font-medium text-white mb-2 relative z-10">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed relative z-10">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LARGE FEATURE BLOCKS ====== */}
      <section className="py-24 relative">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 md:p-12 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                <div className="text-xs text-white/40 uppercase tracking-widest mb-4 relative z-10">Integration</div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 relative z-10">Works With the Tools<br />You Already Use</h3>
                <p className="text-white/50 text-sm mb-12 max-w-sm relative z-10">Seamlessly connect your existing tech stack with our custom APIs and integrations.</p>
                
                <div className="mt-auto flex justify-center relative z-10">
                  <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center bg-[#111] shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                    <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <Command size={20} className="text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 md:p-12 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none" />
                <div className="text-xs text-white/40 uppercase tracking-widest mb-4 relative z-10">Scale</div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 relative z-10">Loved by Teams That<br />Scale Fast</h3>
                <p className="text-white/50 text-sm mb-12 max-w-sm relative z-10">We build architectures that handle millions of requests without breaking a sweat.</p>
                
                <div className="mt-auto flex justify-end relative z-10">
                  <div className="w-64 h-40 rounded-2xl bg-[#151515] border border-white/10 shadow-2xl flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <Play size={16} className="text-white/70 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== OUR PROCESS ====== */}
      <section className="py-24 relative border-t border-white/5">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Our Process</div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">How we turn ideas into reality</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Discovery", text: "We start by diving deep into your vision, understanding your market, and defining project requirements." },
              { num: "02", title: "Design", text: "Our team crafts intuitive, beautiful, and user-centric interfaces tailored to your brand identity." },
              { num: "03", title: "Development", text: "We build robust, scalable architectures using the latest technologies and clean code practices." },
              { num: "04", title: "Launch", text: "Rigorous testing, smooth deployment, and ongoing support to ensure long-term success." }
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 h-full relative group">
                  <div className="text-4xl font-bold text-white/5 mb-6 group-hover:text-white/10 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CONTACT & CONNECT ====== */}
      <section className="py-32 relative border-t border-white/5 overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="container-main relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Let's Connect</div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-white/50 text-sm max-w-2xl mx-auto">Have a project in mind or just want to say hi? We would love to hear from you. Let's discuss how we can help you achieve your digital goals.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <FadeIn delay={0.1}>
              <div className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
                <h3 className="text-xl font-medium text-white mb-8 relative z-10">Contact Information</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Globe size={18} className="text-white/70" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">Location</div>
                      <div className="text-sm text-white/50">Pune Camp</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Search size={18} className="text-white/70" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">Email</div>
                      <a href="mailto:iinfynite0@gmail.com" className="text-sm text-white/50 hover:text-white transition-colors">iinfynite0@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Smartphone size={18} className="text-white/70" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">Phone</div>
                      <a href="tel:9588617714" className="text-sm text-white/50 hover:text-white transition-colors">9588617714</a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form Placeholder / CTA */}
            <FadeIn delay={0.2}>
              <div className="p-10 rounded-3xl bg-[#0f0f0f] border border-white/10 flex flex-col h-full relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
                <h3 className="text-xl font-medium text-white mb-8 relative z-10">Send us a message</h3>
                
                <form className="space-y-4 relative z-10 flex-1 flex flex-col">
                  <input type="text" placeholder="Name (e.g. Muzaffar Hussain)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors" />
                  <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"></textarea>
                  <button type="button" className="w-full py-3 rounded-xl bg-white text-black hover:bg-white/90 text-sm font-medium transition-colors mt-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="py-32 relative">
        <div className="container-main">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Reviews</div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Loved by Teams That Scale Fast</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { text: "iInfynite transformed our idea into a beautiful product. Their attention to detail is unmatched.", author: "Rahul S.", role: "CEO, TechStart" },
              { text: "Working with iInfynite was seamless. They delivered on time and exceeded our expectations.", author: "Priya P.", role: "Founder, DesignHub" },
              { text: "The team at iInfynite is incredibly talented. Our app performance improved 3x after their optimization.", author: "Amit K.", role: "CTO, CloudSync" },
              { text: "Best IT agency we've ever worked with. Clean code and stunning designs.", author: "Sarah M.", role: "Product Manager" },
              { text: "They scaled our backend infrastructure effortlessly to handle millions of requests.", author: "John D.", role: "Engineering Lead" },
              { text: "A premium experience from start to finish. Highly recommended for ambitious startups.", author: "Michael T.", role: "Founder" }
            ].map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} className="fill-white/70 text-white/70" />)}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">"{review.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Users size={14} className="text-white/50" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">{review.author}</div>
                      <div className="text-[10px] text-white/40">{review.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
