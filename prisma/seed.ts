import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "muzax@iinfynite.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "M041105h";
  const hashedPassword = await hash(adminPassword, 10);

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword },
    create: { email: adminEmail, password: hashedPassword },
  });
  console.log(`✅ Admin user created: ${adminEmail}`);

  // Seed services
  const services = [
    { title: "Web Development", icon: "Code2", description: "High-performance websites and web apps built with cutting-edge technologies.", order: 1 },
    { title: "App Development", icon: "Smartphone", description: "Native and cross-platform mobile apps that users love.", order: 2 },
    { title: "Graphic Design", icon: "Palette", description: "Stunning visuals, branding, and UI/UX design that captivate audiences.", order: 3 },
    { title: "Startup Acceleration", icon: "Rocket", description: "From idea to MVP — we help startups launch faster and smarter.", order: 4 },
    { title: "Digital Growth", icon: "TrendingUp", description: "SEO, marketing, and analytics to scale your digital presence.", order: 5 },
    { title: "Custom Software", icon: "Cog", description: "Tailored solutions built exactly to your business requirements.", order: 6 },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.title.toLowerCase().replace(/\s+/g, "-") },
      update: service,
      create: { id: service.title.toLowerCase().replace(/\s+/g, "-"), ...service },
    });
  }
  console.log("✅ Services seeded");

  // Seed projects
  const projects = [
    { title: "Velocity Luxe App", slug: "velocity-luxe-app", category: "App Development", description: "Premium e-commerce mobile experience with 3D UI elements.", imageUrl: "/ecommerce-mockup.png" },
    { title: "Data Analytics Dashboard", slug: "data-analytics-dashboard", category: "Custom Software", description: "Sophisticated IT solutions portfolio analytics and monitoring.", imageUrl: "/dashboard-mockup.png" },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
  console.log("✅ Projects seeded");

  // Seed authentic Indian professional team members (only if not already present, preserving admin edits)
  const teamMembers = [
    {
      name: "Muzammil Shaikh",
      role: "Founder & CEO",
      bio: "Visionary tech leader with 8+ years of experience building high-ticket enterprise SaaS, AI automation pipelines, and scalable cloud architectures.",
      photoUrl: "/team/founder.jpg",
      linkedin: "https://linkedin.com/in/muzammil-shaikh",
      github: "https://github.com/imuzax",
      isFounder: true,
    },
    {
      name: "Rahul Deshmukh",
      role: "Team Lead & Senior Architect",
      bio: "Full-stack architecture specialist driving technical delivery, cloud migrations, and high-performance React/Next.js systems.",
      photoUrl: "/team/team-lead.jpg",
      linkedin: "https://linkedin.com/in/rahul-deshmukh",
      isFounder: false,
    },
    {
      name: "Priya Sharma",
      role: "Lead UI/UX & Product Designer",
      bio: "Award-winning product designer crafting premium user interfaces, design systems, and conversion-focused digital journeys.",
      photoUrl: "/team/uiux-lead.jpg",
      linkedin: "https://linkedin.com/in/priya-sharma",
      isFounder: false,
    },
    {
      name: "Vikramaditya Patil",
      role: "Senior AI / MLOps Engineer",
      bio: "Specializing in custom LLM integration, workflow automation, and predictive data modeling for enterprise clients.",
      photoUrl: "/team/ai-engineer.jpg",
      linkedin: "https://linkedin.com/in/vikram-patil",
      isFounder: false,
    },
    {
      name: "Ananya Iyer",
      role: "Lead Mobile Engineer (iOS/Android)",
      bio: "Expert in React Native and Flutter, building ultra-smooth native mobile experiences with 99.9% crash-free rates.",
      photoUrl: "/team/mobile-lead.jpg",
      linkedin: "https://linkedin.com/in/ananya-iyer",
      isFounder: false,
    },
    {
      name: "Siddharth Mehta",
      role: "VP of Client Success & Growth",
      bio: "Ensuring seamless agency communication, transparent agile delivery, and strategic revenue growth for our partners.",
      photoUrl: "/team/client-success.jpg",
      linkedin: "https://linkedin.com/in/siddharth-mehta",
      isFounder: false,
    },
  ];

  for (const member of teamMembers) {
    const existing = await prisma.teamMember.findFirst({ where: { name: member.name } });
    if (!existing) {
      await prisma.teamMember.create({ data: member });
    }
  }
  console.log("✅ Team members seeded");

  // Seed site content
  const content = [
    { key: "hero_heading", value: "We Build Digital Products That Drive Growth" },
    { key: "hero_tagline", value: "A premium freelance IT agency delivering stunning websites, powerful apps, and growth strategies." },
    { key: "about_text", value: "iInfynite bridges the gap between great ideas and exceptional digital execution." },
    { key: "contact_email", value: "hello@iinfynite.com" },
    { key: "contact_phone", value: "+91 XXXXX XXXXX" },
  ];

  for (const item of content) {
    await prisma.siteContent.upsert({
      where: { key: item.key },
      update: { value: item.value },
      create: item,
    });
  }
  console.log("✅ Site content seeded");

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
