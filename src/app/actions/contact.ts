"use server";

import { prisma } from "@/lib/prisma";
import { sendTelegramMessage, formatLeadMessage } from "@/lib/telegram";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(
  _prevState: { success?: boolean; error?: string } | undefined,
  formData: FormData
) {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors
        ? Object.values(parsed.error.flatten().fieldErrors).flat().join(", ")
        : "Invalid form data",
    };
  }

  try {
    // Save to database
    await prisma.lead.create({
      data: parsed.data,
    });

    // Send Telegram notification
    const telegramText = formatLeadMessage(parsed.data);
    await sendTelegramMessage(telegramText);

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
