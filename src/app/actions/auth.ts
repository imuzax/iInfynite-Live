"use server";

import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { compare, hash } from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(
  _prevState: { error?: string } | undefined,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    let user = await prisma.adminUser.findUnique({
      where: { email },
    });

    // Auto-setup first admin if DB is empty (e.g. seed script failed)
    if (!user) {
      const defaultEmail = process.env.ADMIN_EMAIL || "muzax@iinfynite.com";
      const defaultPass = process.env.ADMIN_PASSWORD || "M041105h";
      
      if (email === defaultEmail && password === defaultPass) {
        const hashedPassword = await hash(password, 10);
        user = await prisma.adminUser.create({
          data: { email, password: hashedPassword },
        });
      } else {
        return { error: "Invalid credentials" };
      }
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return { error: "Invalid credentials" };
    }

    await createSession(user.id, user.email);
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Something went wrong. Please try again." };
  }

  redirect("/admin/dashboard");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/admin/login");
}
