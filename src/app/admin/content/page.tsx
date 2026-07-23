"use client";

import { useState, useTransition, useEffect } from "react";
import { updateContent } from "@/app/actions/content";
import { Save, Check } from "lucide-react";

const contentFields = [
  { key: "hero_heading", label: "Hero Heading", type: "text" },
  { key: "hero_tagline", label: "Hero Tagline", type: "text" },
  { key: "about_text", label: "About Text", type: "textarea" },
  { key: "contact_email", label: "Contact Email", type: "text" },
  { key: "contact_phone", label: "Contact Phone", type: "text" },
  { key: "footer_text", label: "Footer Description", type: "textarea" },
];

export default function AdminContentPage() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetch("/api/data/content")
      .then((r) => r.json())
      .then((data: { key: string; value: string }[]) => {
        const map: Record<string, string> = {};
        data.forEach((item) => { map[item.key] = item.value; });
        setValues(map);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const handleSave = (key: string) => {
    startTransition(async () => {
      await updateContent(key, values[key] || "");
      setSaved((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000);
    });
  };

  if (isLoading) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          Manage Content
        </h1>
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        Manage Content
      </h1>
      <p className="text-muted text-sm mb-8">
        Edit site-wide text content without touching code.
      </p>

      <div className="space-y-6">
        {contentFields.map((field) => (
          <div key={field.key} className="admin-card">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">{field.label}</label>
              <button
                onClick={() => handleSave(field.key)}
                disabled={isPending}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  saved[field.key]
                    ? "bg-success/10 text-success"
                    : "bg-accent/10 text-accent hover:bg-accent/20"
                }`}
              >
                {saved[field.key] ? (
                  <><Check size={12} /> Saved</>
                ) : (
                  <><Save size={12} /> Save</>
                )}
              </button>
            </div>
            {field.type === "textarea" ? (
              <textarea
                value={values[field.key] || ""}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                }
                className="input-glass"
                rows={4}
                placeholder={`Enter ${field.label.toLowerCase()}...`}
              />
            ) : (
              <input
                type="text"
                value={values[field.key] || ""}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                }
                className="input-glass"
                placeholder={`Enter ${field.label.toLowerCase()}...`}
              />
            )}
            <p className="text-xs text-muted mt-2">Key: <code className="text-accent">{field.key}</code></p>
          </div>
        ))}
      </div>
    </div>
  );
}
