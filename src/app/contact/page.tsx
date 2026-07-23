"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
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
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          placeholder="What's this about?"
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
