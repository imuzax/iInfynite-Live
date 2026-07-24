"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

async function requireAuth() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function getProjects() {
  return prisma.project.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findUnique({ where: { slug } });
}

export async function getProjectCategories() {
  const projects = await prisma.project.findMany({
    select: { category: true },
    distinct: ["category"],
  });
  return projects.map((p) => p.category);
}

export async function createProject(formData: FormData) {
  await requireAuth();

  const title = formData.get("title") as string;

  await prisma.project.create({
    data: {
      title,
      slug: slugify(title),
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      fullDescription: (formData.get("fullDescription") as string) || "",
      imageUrl: formData.get("imageUrl") as string,
      liveUrl: (formData.get("liveUrl") as string) || null,
    },
  });

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
}

export async function updateProject(id: string, formData: FormData) {
  await requireAuth();

  const title = formData.get("title") as string;

  await prisma.project.update({
    where: { id },
    data: {
      title,
      slug: slugify(title),
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      fullDescription: (formData.get("fullDescription") as string) || "",
      imageUrl: formData.get("imageUrl") as string,
      liveUrl: (formData.get("liveUrl") as string) || null,
    },
  });

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
}

export async function deleteProject(id: string) {
  await requireAuth();

  await prisma.project.delete({ where: { id } });

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  revalidatePath("/");
}
