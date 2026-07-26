import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { hash } from "bcryptjs";

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
    {
      title: "Velocity Luxe App",
      slug: "velocity-luxe-app",
      category: "App Development",
      description: "Premium e-commerce mobile experience with 3D UI elements.",
      fullDescription: "A next-generation e-commerce mobile application featuring immersive 3D product previews, lightning-fast checkout flows, and tailored AI recommendations.",
      clientName: "Luxe Retail Group",
      timeline: "6 Weeks",
      role: "Mobile Architect & Designer",
      techStack: "React Native, Three.js, Node.js, GraphQL",
      challenges: "Rendering smooth 60fps 3D product models on mid-tier mobile devices without battery drain.",
      solution: "Optimized GLTF mesh geometries and implemented lazy-loading 3D canvas rendering.",
      imageUrl: "/ecommerce-mockup.png",
      liveUrl: "https://github.com/imuzax/iInfynite-Live",
    },
    {
      title: "Data Analytics Dashboard",
      slug: "data-analytics-dashboard",
      category: "Custom Software",
      description: "Sophisticated IT solutions portfolio analytics and monitoring.",
      fullDescription: "An enterprise-grade business intelligence dashboard providing real-time infrastructure monitoring, cloud cost analytics, and automated reporting.",
      clientName: "Infynite Cloud Ops",
      timeline: "4 Weeks",
      role: "Lead Full Stack Engineer",
      techStack: "Next.js 15, Tailwind CSS, Recharts, PostgreSQL, Prisma",
      challenges: "Processing and visualizing over 50,000 real-time telemetry events per minute with zero UI latency.",
      solution: "Implemented WebSocket streaming coupled with Web Worker data aggregation and virtualized chart rendering.",
      imageUrl: "/dashboard-mockup.png",
      liveUrl: "https://github.com/imuzax/iInfynite-Live",
    },
    {
      title: "HoerHilfePlus - Hearing Aid Landing Page",
      slug: "hoerhilfeplus",
      category: "Affiliate",
      description: "Healthcare Landing Page for the German Market. Specialized high-conversion affiliate solution for 'AURIS PRO' invisible hearing aids.",
      fullDescription: "Specialized German healthcare landing page engineered for high-ticket affiliate marketing of AURIS PRO hearing aids. Features medical-grade typography, trust badges, responsive pricing tables, and seamless checkout redirects.",
      clientName: "CozeyMaison / German Healthcare Affiliate",
      timeline: "2 Weeks",
      role: "Lead UI/UX Designer & Developer",
      techStack: "HTML5, CSS3, Inter Typography, Responsive Flexbox/Grid",
      challenges: "Creating a trustworthy, accessible interface tailored for elderly German demographics while maintaining high conversion rates and GDPR compliance.",
      solution: "Implemented high-contrast visual elements, clear German copywriting, instant order redirects, and optimized packshot product showcases.",
      imageUrl: "/projects/hoerhilfeplus.png",
      liveUrl: "https://hoerhilfeplus.com",
    },
    {
      title: "StiefelStyle - Luxury Fashion Footwear",
      slug: "stiefelstyle",
      category: "Affiliate",
      description: "Luxury Fashion Landing Page for the German Market. Custom solution for high-end winter footwear retail featuring Valentino Snowish fur boots.",
      fullDescription: "An ultra-premium fashion affiliate showcase designed specifically for the German market, promoting high-end designer footwear like Valentino Garavani Snowish fur ankle boots. Uses elegant Playfair Display typography and smooth hover transitions.",
      clientName: "Valentino Garavani Affiliate Campaign",
      timeline: "2 Weeks",
      role: "Lead UI/UX & Frontend Developer",
      techStack: "HTML5, CSS3, Playfair Display, CSS Grid, Thron CDN Integration",
      challenges: "Capturing the luxury brand aesthetic of haute couture while ensuring fast page load times and seamless affiliate link tracking.",
      solution: "Designed a minimalist, editorial-style layout with high-resolution image zoom, interactive specification cards, and direct checkout buttons.",
      imageUrl: "/projects/stiefelstyle.png",
      liveUrl: "https://stiefelstyle.com",
    },
    {
      title: "FootSprings - UK Athletic Footwear",
      slug: "footsprings",
      category: "Affiliate",
      description: "Premium Footwear Affiliate Landing Page for the UK Market. Features the 'Aura Glass' design system promoting On Cloud 6 waterproof running shoes.",
      fullDescription: "Modern UK e-commerce affiliate landing page utilizing the custom 'Aura Glass' design system. Engineered to promote high-performance footwear campaigns in partnership with Footlocker UK, featuring dynamic size selectors and interactive galleries.",
      clientName: "Footlocker UK Affiliate Partner",
      timeline: "3 Weeks",
      role: "Frontend Architect & Designer",
      techStack: "HTML5, CSS3 Glassmorphism, Outfit Typography, Vanilla JS",
      challenges: "Building an interactive product showcase without heavy framework dependencies to achieve 100/100 Lighthouse performance.",
      solution: "Developed custom lightweight JavaScript image carousels, responsive modal dialogs, and clean affiliate UTM tracking links.",
      imageUrl: "/projects/footsprings.png",
      liveUrl: "https://footsprings.com",
    },
    {
      title: "EliteeWalk - Urban Volt Footwear",
      slug: "eliteewalk",
      category: "Affiliate",
      description: "Elite Footwear Affiliate Landing Page for the UK Market. Features the vibrant 'Urban Volt' theme showcasing Nike Shox TL sneakers.",
      fullDescription: "Vibrant, street-style footwear affiliate landing page built for the UK demographic. Highlights iconic streetwear releases like the Nike Shox TL with high-energy typography, bold color contrasts, and optimized conversion funnels.",
      clientName: "Footlocker UK / Nike Affiliate",
      timeline: "2 Weeks",
      role: "UI Designer & Developer",
      techStack: "HTML5, Advanced CSS3, Montserrat Typography, Responsive UI",
      challenges: "Standing out in the competitive UK sneaker affiliate market with a memorable visual identity that appeals to Gen Z and streetwear enthusiasts.",
      solution: "Created the 'Urban Volt' dark-mode theme with neon accents, dynamic product specifications, and direct retailer checkout integration.",
      imageUrl: "/projects/eliteewalk.png",
      liveUrl: "https://eliteewalk.com",
    },
    {
      title: "VelocitySole - UK Footwear Affiliate",
      slug: "velocitysole",
      category: "Affiliate",
      description: "Premium Footwear Affiliate Landing Page for the UK Market. Engineered for high-conversion sneaker campaigns with Footlocker UK.",
      fullDescription: "A flagship sneaker affiliate platform built for the UK market, featuring curated footwear collections, detailed product breakdowns, and automated referral link attribution for top athletic brands.",
      clientName: "VelocitySole UK Partners",
      timeline: "3 Weeks",
      role: "Lead Frontend Developer",
      techStack: "HTML5, CSS3, Open Sans & Montserrat, UTM Attribution",
      challenges: "Maximizing click-through rates (CTR) to partner retail sites while maintaining an authentic, premium brand feel.",
      solution: "Integrated prominent, conversion-tested call-to-action buttons, trust guarantees, and lightning-fast WebP image delivery.",
      imageUrl: "/projects/velocitysole.png",
      liveUrl: "https://velocitysole.com",
    },
    {
      title: "SchuhWelt24 - Sneaker Storefront",
      slug: "schuhwelt24",
      category: "Affiliate",
      description: "Premium Sneaker Affiliate Landing Page for the German Market. Showcasing Asics Sportstyle GEL-NYC with Zalando integration.",
      fullDescription: "A localized German affiliate e-commerce platform dedicated to trending sneaker releases. Built to drive targeted traffic to Zalando Germany with high-resolution packshots and comprehensive German product reviews.",
      clientName: "Zalando Germany Affiliate Program",
      timeline: "2 Weeks",
      role: "Full Stack Designer & Developer",
      techStack: "HTML5, CSS3 Glassmorphism, Outfit Typography, Zalando API Integration",
      challenges: "Adapting international sneaker trends to German consumer preferences and strict e-commerce transparency laws (Impressum/Datenschutz).",
      solution: "Built an intuitive German interface complete with full legal compliance pages, transparent affiliate disclosures, and high-speed image loading.",
      imageUrl: "/projects/schuhwelt24.png",
      liveUrl: "https://schuhwelt24.com",
    },
    {
      title: "SolarKraftPro - Balkonkraftwerk Portal",
      slug: "solarkraftpro",
      category: "Affiliate",
      description: "Premium Solar Power (Balkonkraftwerk) Landing Page for the German Market. Features real-time ROI savings calculator and Solakon ONE integration.",
      fullDescription: "A state-of-the-art green technology affiliate landing page targeting the booming German balcony solar market (Balkonkraftwerk). Educates homeowners and tenants on energy savings with custom ROI calculators and direct Solakon equipment partnerships.",
      clientName: "Solakon Germany Partner Network",
      timeline: "3 Weeks",
      role: "Lead Web Architect",
      techStack: "HTML5, Modern CSS3 Grid, Inter Typography, Interactive JS Calculator",
      challenges: "Explaining complex technical specifications (inverters, bifacial solar panels, wattage regulations) in an engaging, easy-to-understand format.",
      solution: "Designed interactive feature highlights, clear visual savings diagrams, and direct one-click purchasing links to Solakon partner stores.",
      imageUrl: "/projects/solarkraftpro.png",
      liveUrl: "https://solarkraftpro.com",
    },
    {
      title: "Hirotix - AI Recruitment & ATS Platform",
      slug: "hirotix-ai-recruitment-platform",
      category: "AI Solutions",
      description: "Enterprise-grade AI Recruitment Engine featuring automated resume NLP parsing, semantic candidate scoring, and video interview simulations.",
      fullDescription: "An end-to-end AI-powered Applicant Tracking System (ATS) built with microservices. Features automated resume parsing with LLMs, real-time candidate ranking, interactive AI chat assistants, and multi-tenant recruiter dashboards.",
      clientName: "Hirotix Enterprise",
      timeline: "2 Months",
      role: "Full-Stack Architect & AI Engineer",
      techStack: "Java Spring Boot, Python FastAPI, Docker Compose, MySQL, Next.js UI",
      challenges: "Achieving sub-second semantic scoring on high-volume resume uploads and managing containerized microservices.",
      solution: "Implemented asynchronous Python AI pipelines paired with a robust Java Spring Boot backend and automated Docker orchestration.",
      imageUrl: "/hirotix-mockup.png",
      liveUrl: "https://github.com/imuzax/Hirotix",
    },
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
