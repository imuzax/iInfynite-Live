"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/social-icons";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  const [state, action, pending] = useActionState(submitContactForm, undefined);

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              title="Get in Touch"
              subtitle="Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours."
              gradient
            />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <GlassCard hover={false}>
                  {state?.success ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} className="text-success" />
                      </div>
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Message Sent!
                      </h3>
                      <p className="text-muted">
                        Thanks for reaching out. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form action={action} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your name"
                            className="input-glass"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="input-glass"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-medium mb-2"
                        >
                          Inquiry / Industry Type <span className="text-accent">*</span>
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          defaultValue=""
                          className="input-glass bg-[#0a0a0a] w-full cursor-pointer appearance-none"
                          style={{
                            backgroundImage:
                              'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 1rem center",
                            backgroundSize: "1.2em",
                          }}
                        >
                          <option value="" disabled className="bg-[#0a0a0a] text-muted">
                            Select an Industry / Service Type...
                          </option>
                          <option value="Startup MVP & Acceleration" className="bg-[#0a0a0a] text-white">
                            🚀 Startup MVP & Acceleration (From Idea to Launch)
                          </option>
                          <option value="Web & Mobile App Development" className="bg-[#0a0a0a] text-white">
                            📱 Web & Mobile App Development (iOS, Android, SaaS)
                          </option>
                          <option value="AI & Automation Solutions" className="bg-[#0a0a0a] text-white">
                            🤖 AI & Automation Solutions (LLMs, Custom Agents, ATS)
                          </option>
                          <option value="Affiliate Landing Pages & Marketing" className="bg-[#0a0a0a] text-white">
                            🎯 Affiliate Landing Pages & Marketing (High-Conversion Funnels)
                          </option>
                          <option value="EdTech & Education Systems" className="bg-[#0a0a0a] text-white">
                            🎓 EdTech & Education Systems (LMS, Student & Faculty Portals)
                          </option>
                          <option value="Healthcare & Medical Tech" className="bg-[#0a0a0a] text-white">
                            🏥 Healthcare & Medical Tech (HIPAA/GDPR Compliant Systems)
                          </option>
                          <option value="E-Commerce & Retail Platforms" className="bg-[#0a0a0a] text-white">
                            🛍️ E-Commerce & Retail Platforms (Custom Storefronts, API Integrations)
                          </option>
                          <option value="Green Energy & Sustainability" className="bg-[#0a0a0a] text-white">
                            🌱 Green Energy & Sustainability (Solar ROI Calculators, Clean Tech)
                          </option>
                          <option value="Custom Software / Enterprise IT" className="bg-[#0a0a0a] text-white">
                            ⚙️ Custom Software / Enterprise IT (Cloud Architecture, DevOps)
                          </option>
                          <option value="Other / Custom Inquiry" className="bg-[#0a0a0a] text-white">
                            ✨ Other / Custom Inquiry
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          Specific Subject / Topic <span className="text-accent">*</span>
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          placeholder="e.g. Need an AI tutoring app for 10,000 students"
                          className="input-glass"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us about your project..."
                          className="input-glass"
                          rows={5}
                        />
                      </div>

                      {state?.error && (
                        <div className="text-danger text-sm bg-danger/10 px-4 py-3 rounded-xl">
                          {state.error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={pending}
                        className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {pending ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </GlassCard>
              </FadeIn>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Email</h4>
                      <p className="text-muted text-sm">iinfynite0@gmail.com</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.3}>
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Phone</h4>
                      <p className="text-muted text-sm">9588617714</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.4}>
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Location</h4>
                      <p className="text-muted text-sm">Pune Camp</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.45}>
                <GlassCard hover={false}>
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href="https://www.linkedin.com/company/113274914/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-xs font-semibold text-blue-400 hover:text-white transition-all duration-200"
                    >
                      <LinkedinIcon size={16} />
                      <span>LinkedIn Page</span>
                    </a>
                    <a
                      href="https://github.com/imuzax/iInfynite-Live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 hover:text-white transition-all duration-200"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub Repo</span>
                    </a>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.5}>
                <GlassCard hover={false} className="bg-accent/5">
                  <p className="text-sm text-muted leading-relaxed">
                    💬 We typically respond within <strong className="text-foreground">24 hours</strong>.
                    We look forward to discussing your next big idea!
                  </p>
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
