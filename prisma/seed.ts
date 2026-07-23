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
    { title: "E-Commerce Platform", slug: "e-commerce-platform", category: "Web Development", description: "A full-featured online store with payment integration.", imageUrl: "/placeholder.png" },
    { title: "Fitness Tracking App", slug: "fitness-tracking-app", category: "App Development", description: "Cross-platform fitness app with workout tracking.", imageUrl: "/placeholder.png" },
    { title: "Brand Identity Suite", slug: "brand-identity-suite", category: "Graphic Design", description: "Complete brand overhaul including logo and typography.", imageUrl: "/placeholder.png" },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
  console.log("✅ Projects seeded");

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
