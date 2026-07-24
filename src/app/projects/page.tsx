import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { prisma } from "@/lib/prisma";
import { ProjectsClient } from "./projects-client";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Filter out placeholder projects from frontend view if necessary
  // The user requested to remove projects without images
  const validProjects = projects.filter(
    (p) => p.imageUrl && p.imageUrl !== "/placeholder.png"
  );

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              title="Our Projects"
              subtitle="A showcase of solutions we've crafted for businesses like yours."
              gradient
            />
          </FadeIn>

          <ProjectsClient projects={validProjects} />
        </div>
      </section>
    </div>
  );
}
