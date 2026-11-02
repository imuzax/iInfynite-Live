"use client";

import { useActionState, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm } from "@/app/actions/contact";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
  ShieldCheck,
  Clock,
  Lock,
  ArrowRight,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/social-icons";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

function ContactFormContent() {
  const [state, action, pending] = useActionState(submitContactForm, undefined);
  const searchParams = useSearchParams();
  const [selectedInquiry, setSelectedInquiry] = useState("");
  const [subjectText, setSubjectText] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const solutionParam = searchParams.get("solution");

    if (serviceParam) {
      setSubjectText(`Inquiry regarding ${serviceParam}`);
      setSelectedInquiry("Custom Software / Enterprise IT");
    } else if (solutionParam) {
      setSubjectText(`Inquiry for blueprint: ${solutionParam}`);
      setSelectedInquiry("Custom Software / Enterprise IT");
    }
  }, [searchParams]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
      
      {/* Contact Form Container */}
      <div className="lg:col-span-7">
        <FadeIn delay={0.1}>
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
            {state?.success ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-xs">
                  <CheckCircle size={32} />
                </div>
                <h3
                  className="text-2xl font-bold text-slate-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Consultation Request Received!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out to iINFYNITE. A senior technical architect will review your project requirements and reply within <strong>24 hours</strong> with an initial scoping assessment.
                </p>
                <div className="pt-4">
                  <a
                    href="https://wa.me/919588617714?text=Hi%2C%20I%20just%20submitted%20the%20contact%20form%20on%20iinfynite.com%20and%20would%20like%20to%20connect%20with%20an%20architect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <MessageSquare size={14} />
                    <span>Want an immediate response? Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form action={action} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out the technical brief below. All inquiries are strictly protected under mutual NDA.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 font-mono"
                    >
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 font-mono"
                    >
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 font-mono"
                  >
                    Project Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={selectedInquiry}
                    onChange={(e) => setSelectedInquiry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">
                      Select project discipline...
                    </option>
                    <option value="Web & Mobile App Development">
                      📱 Web & Mobile App Development (iOS, Android, Next.js)
                    </option>
                    <option value="SaaS Platform & MVP Development">
                      🚀 SaaS Platform & MVP Development (Idea to Launch)
                    </option>
                    <option value="AI & Workflow Automation Solutions">
                      🤖 AI & Workflow Automation (LLMs, Custom Agents, RAG)
                    </option>
                    <option value="UI/UX & Graphic Design Systems">
                      🎨 UI/UX & Graphic Design Systems (Figma, Brand Identity)
                    </option>
                    <option value="E-Commerce & High-Ticket Funnels">
                      🛍️ E-Commerce & High-Ticket Funnels (Custom Storefronts, Stripe)
                    </option>
                    <option value="Custom Software / Enterprise IT">
                      ⚙️ Custom Software / Enterprise ERP / CRM
                    </option>
                    <option value="Architecture Audit & Speed Optimization">
                      ⚡ Architecture Audit, Security & Core Web Vitals
                    </option>
                    <option value="Other / General Partnership">
                      ✨ Other / General Agency Partnership
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 font-mono"
                  >
                    Subject / Goal Summary <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={subjectText}
                    onChange={(e) => setSubjectText(e.target.value)}
                    placeholder="e.g. Need high-converting web app and admin CRM for B2B logistics"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 font-mono"
                  >
                    Project Details & Scope <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your core business problem, current bottlenecks, desired timeline, or any specific technologies..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs resize-y"
                  />
                </div>

                {state?.error && (
                  <div className="text-red-600 text-xs bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
                    {state.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  {pending ? (
                    "Transmitting Brief..."
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Direct Contact & Agency Guarantees Sidebar */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Instant WhatsApp Quick Action */}
        <FadeIn delay={0.2}>
          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Instant WhatsApp Access</h4>
                <p className="text-xs text-slate-600">Direct line to our senior technical lead</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Prefer a rapid chat over a formal email? Connect with our engineering director directly on WhatsApp for immediate scoping questions.
            </p>
            <a
              href="https://wa.me/919588617714?text=Hi%20iINFYNITE%20team%2C%20I%20want%20to%20discuss%20a%20project%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Chat on WhatsApp Now</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>

        {/* Agency Contact Details */}
        <FadeIn delay={0.3}>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono border-b border-slate-100 pb-3">
              Official Headquarters & Contact
            </h4>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                <Mail size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Email Address</div>
                <a href="mailto:iinfynite0@gmail.com" className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                  iinfynite0@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                <Phone size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Direct Phone Line</div>
                <a href="tel:9588617714" className="text-sm font-semibold text-slate-800 hover:text-emerald-600 transition-colors">
                  +91 95886 17714
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 text-red-500">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Pune Camp Office</div>
                <div className="text-sm font-medium text-slate-800">
                  Pune Camp, Pune, Maharashtra 411001 🇮🇳
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/113274914/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-all shadow-2xs"
              >
                <LinkedinIcon size={14} className="text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/imuzax/iInfynite-Live"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-all shadow-2xs"
              >
                <GithubIcon size={14} className="text-slate-900" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Agency Guarantees Box */}
        <FadeIn delay={0.4}>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono mb-2">
              Our Agency Commitment
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-amber-600 shrink-0" />
                <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-blue-600 shrink-0" />
                <span>100% Source Code & Intellectual Property transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-emerald-600 shrink-0" />
                <span>Guaranteed initial response within 24 business hours</span>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>

    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 relative overflow-hidden bg-white text-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="container-main px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 mb-6 shadow-xs">
              <Sparkles size={14} className="text-blue-600" />
              Let&apos;s Build Something Extraordinary
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start Your Project Consultation
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have an idea, an upcoming launch, or an existing platform that needs high-velocity redesign and engineering? Let&apos;s schedule a 30-minute discovery consultation.
            </p>
          </div>
        </FadeIn>

        <Suspense fallback={<div className="text-center py-12 text-slate-400">Loading inquiry brief...</div>}>
          <ContactFormContent />
        </Suspense>
      </section>
    </div>
  );
}