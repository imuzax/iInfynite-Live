"use server";

import { sendTelegramMessage } from "@/lib/telegram";
import { getSession } from "@/lib/session";

async function requireAuth() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function sendTestTelegramMessage() {
  await requireAuth();

  const result = await sendTelegramMessage(
    "✅ <b>iInfynite Test Message</b>\n\nYour Telegram integration is working correctly!\n\nTimestamp: " +
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  );

  return { success: result };
}
