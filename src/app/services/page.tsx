import { Metadata } from "next";
import {
  Code2,
  Smartphone,
  Palette,
  Rocket,
  TrendingUp,
  Cog,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore iInfynite's comprehensive IT services — web development, app development, graphic design, startup acceleration, digital growth, and custom software.",
};

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Smartphone,
  Palette,
  Rocket,
  TrendingUp,
  Cog,
};

const services = [
  {
    icon: "Code2",
    title: "Web Development",
    description:
      "We build fast, responsive, and SEO-optimized websites using modern frameworks like Next.js, React, and Tailwind CSS. From landing pages to complex web applications, we deliver pixel-perfect solutions.",
    features: ["Next.js / React", "Responsive Design", "SEO Optimization", "Performance Tuning"],
  },
  {
    icon: "Smartphone",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android. We use React Native and Flutter for efficient multi-platform delivery.",
    features: ["iOS & Android", "React Native / Flutter", "Push Notifications", "App Store Deployment"],
  },
  {
    icon: "Palette",
    title: "Graphic Design",
    description:
      "From brand identity to social media creatives, our design team creates visuals that communicate your brand story effectively and leave lasting impressions.",
    features: ["Brand Identity", "UI/UX Design", "Social Media Graphics", "Marketing Collateral"],
  },
  {
    icon: "Rocket",
    title: "Startup Acceleration",
    description:
      "From validating your idea to building your MVP and beyond — we provide the technical expertise and strategic guidance startups need to launch faster.",
    features: ["MVP Development", "Technical Consulting", "Pitch Deck Design", "Go-to-Market Strategy"],
  },
  {
    icon: "TrendingUp",
    title: "Digital Growth",
    description:
      "Data-driven digital marketing strategies including SEO, social media management, paid ads, and analytics to scale your online presence and drive measurable results.",
    features: ["SEO Strategy", "Social Media", "Google Ads", "Analytics & Reporting"],
  },
  {
    icon: "Cog",
    title: "Custom Software",
    description:
      "Bespoke software solutions designed and built to solve your unique business challenges. We handle everything from requirement analysis to deployment and maintenance.",
    features: ["Custom CRM/ERP", "API Development", "Database Design", "Cloud Deployment"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              title="Our Services"
              subtitle="End-to-end digital solutions to power your business growth."
              gradient
            />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <FadeIn key={service.title} delay={index * 0.1}>
                  <GlassCard className="h-full group">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Icon size={28} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs px-3 py-1 rounded-full border border-glass-border text-muted"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>

          {/* CTA */}
          <FadeIn delay={0.4}>
            <div className="text-center mt-16">
              <GlassCard hover={false} className="inline-block">
                <p className="text-muted mb-4">
                  Have a specific requirement? Let&apos;s discuss.
                </p>
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                  <ArrowRight size={16} />
                </Link>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
