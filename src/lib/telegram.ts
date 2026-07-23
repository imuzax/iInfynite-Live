export async function sendTelegramMessage(text: string): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram credentials not configured");
    return false;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();
    return data.ok === true;
  } catch (error) {
    console.error("Telegram send failed:", error);
    return false;
  }
}

export function formatLeadMessage(lead: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return [
    `🔔 <b>New Lead — iInfynite</b>`,
    ``,
    `👤 <b>Name:</b> ${lead.name}`,
    `📧 <b>Email:</b> ${lead.email}`,
    `📋 <b>Subject:</b> ${lead.subject}`,
    `💬 <b>Message:</b>`,
    lead.message,
    ``,
    `🕐 ${timestamp}`,
  ].join("\n");
}
