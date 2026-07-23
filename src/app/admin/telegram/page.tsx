"use client";

import { useState, useTransition } from "react";
import { sendTestTelegramMessage } from "@/app/actions/telegram";
import { Send, CheckCircle, XCircle, Bot, MessageSquare, Info } from "lucide-react";

export default function AdminTelegramPage() {
  const [result, setResult] = useState<{ success: boolean } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleTestMessage = () => {
    startTransition(async () => {
      const res = await sendTestTelegramMessage();
      setResult(res);
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        Telegram Integration
      </h1>
      <p className="text-muted text-sm mb-8">
        Manage your Telegram notification settings for instant lead alerts.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Card */}
        <div className="admin-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Bot size={22} className="text-accent" />
            </div>
            <div>
              <h2 className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Bot Configuration
              </h2>
              <p className="text-xs text-muted">Environment variable status</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3 rounded-xl bg-glass-bg">
              <span className="text-sm">TELEGRAM_BOT_TOKEN</span>
              <span className={`badge ${process.env.NEXT_PUBLIC_HAS_TELEGRAM === "true" ? "badge-closed" : "badge-new"}`}>
                {process.env.NEXT_PUBLIC_HAS_TELEGRAM === "true" ? "Set" : "Check .env"}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-glass-bg">
              <span className="text-sm">TELEGRAM_CHAT_ID</span>
              <span className={`badge ${process.env.NEXT_PUBLIC_HAS_TELEGRAM === "true" ? "badge-closed" : "badge-new"}`}>
                {process.env.NEXT_PUBLIC_HAS_TELEGRAM === "true" ? "Set" : "Check .env"}
              </span>
            </div>
          </div>

          <button
            onClick={handleTestMessage}
            disabled={isPending}
            className="btn-primary w-full disabled:opacity-50"
          >
            {isPending ? (
              "Sending..."
            ) : (
              <>
                <Send size={16} />
                Send Test Message
              </>
            )}
          </button>

          {result && (
            <div
              className={`mt-4 p-3 rounded-xl flex items-center gap-2 text-sm ${
                result.success
                  ? "bg-success/10 text-success"
                  : "bg-danger/10 text-danger"
              }`}
            >
              {result.success ? (
                <><CheckCircle size={16} /> Test message sent successfully!</>
              ) : (
                <><XCircle size={16} /> Failed to send. Check your bot token and chat ID.</>
              )}
            </div>
          )}
        </div>

        {/* Setup Guide */}
        <div className="admin-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Info size={22} className="text-accent" />
            </div>
            <div>
              <h2 className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                Setup Guide
              </h2>
              <p className="text-xs text-muted">How to configure Telegram</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted">
            <div className="flex gap-3">
              <span className="text-accent font-bold">1.</span>
              <p>Open Telegram, search for <strong className="text-foreground">@BotFather</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent font-bold">2.</span>
              <p>Send <code className="text-accent bg-glass-bg px-1 rounded">/newbot</code> and follow the instructions to create a bot</p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent font-bold">3.</span>
              <p>Copy the <strong className="text-foreground">API Token</strong> and set it as <code className="text-accent bg-glass-bg px-1 rounded">TELEGRAM_BOT_TOKEN</code> in your .env file</p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent font-bold">4.</span>
              <p>To get your Chat ID, send any message to your bot, then visit: <code className="text-accent bg-glass-bg px-1 rounded text-xs break-all">https://api.telegram.org/bot&lt;TOKEN&gt;/getUpdates</code></p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent font-bold">5.</span>
              <p>Set the chat ID as <code className="text-accent bg-glass-bg px-1 rounded">TELEGRAM_CHAT_ID</code> in your .env file</p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent font-bold">6.</span>
              <p>Click <strong className="text-foreground">&ldquo;Send Test Message&rdquo;</strong> to verify everything works</p>
            </div>
          </div>

          <div className="mt-6 p-3 rounded-xl bg-accent/5 flex items-start gap-2">
            <MessageSquare size={16} className="text-accent mt-0.5 shrink-0" />
            <p className="text-xs text-muted">
              On Vercel, set these values in <strong className="text-foreground">Project Settings → Environment Variables</strong>. Never commit tokens to git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
