"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function getTeamMembers() {
  return prisma.teamMember.findMany();
}

export async function createTeamMember(formData: FormData) {
  await requireAuth();

  await prisma.teamMember.create({
    data: {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      bio: (formData.get("bio") as string) || null,
      photoUrl: formData.get("photoUrl") as string,
      linkedin: (formData.get("linkedin") as string) || null,
      isFounder: formData.get("isFounder") === "true",
    },
  });

  revalidatePath("/admin/team");
  revalidatePath("/about");
}

export async function updateTeamMember(id: string, formData: FormData) {
  await requireAuth();

  await prisma.teamMember.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      bio: (formData.get("bio") as string) || null,
      photoUrl: formData.get("photoUrl") as string,
      linkedin: (formData.get("linkedin") as string) || null,
      isFounder: formData.get("isFounder") === "true",
    },
  });

  revalidatePath("/admin/team");
  revalidatePath("/about");
}

export async function deleteTeamMember(id: string) {
  await requireAuth();

  await prisma.teamMember.delete({ where: { id } });

  revalidatePath("/admin/team");
  revalidatePath("/about");
}
