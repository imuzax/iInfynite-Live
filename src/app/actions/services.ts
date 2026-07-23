"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function getServices() {
  return prisma.service.findMany({ orderBy: { order: "asc" } });
}

export async function createService(formData: FormData) {
  await requireAuth();

  await prisma.service.create({
    data: {
      title: formData.get("title") as string,
      icon: formData.get("icon") as string,
      description: formData.get("description") as string,
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}

export async function updateService(id: string, formData: FormData) {
  await requireAuth();

  await prisma.service.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      icon: formData.get("icon") as string,
      description: formData.get("description") as string,
      order: parseInt(formData.get("order") as string) || 0,
    },
  });

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}

export async function deleteService(id: string) {
  await requireAuth();

  await prisma.service.delete({ where: { id } });

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}
