"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function getContent(key: string) {
  const content = await prisma.siteContent.findUnique({ where: { key } });
  return content?.value || "";
}

export async function getAllContent() {
  return prisma.siteContent.findMany();
}

export async function updateContent(key: string, value: string) {
  await requireAuth();

  await prisma.siteContent.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });

  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/admin/content");
}
