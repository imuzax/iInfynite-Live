"use client";

import { useState } from "react";
import { Upload, Copy, Trash2, Check, Image as ImageIcon } from "lucide-react";

interface UploadedFile {
  url: string;
  name: string;
}

export default function AdminMediaPage() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Upload failed");
      } else {
        setFiles((prev) => [{ url: data.url, name: file.name }, ...prev]);
      }
    } catch {
      setError("Upload failed. Make sure Vercel Blob is configured.");
    } finally {
      setUploading(false);
    }
  };

  const handleCopy = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDelete = async (url: string) => {
    if (!confirm("Delete this image?")) return;

    try {
      await fetch("/api/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      setFiles((prev) => prev.filter((f) => f.url !== url));
    } catch {
      setError("Failed to delete image.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        Media Upload
      </h1>
      <p className="text-muted text-sm mb-8">
        Upload images to Vercel Blob storage. Copy URLs to use in projects and team members.
      </p>

      {/* Upload area */}
      <div className="admin-card mb-8">
        <label className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-glass-border rounded-xl cursor-pointer hover:border-accent/50 transition-colors">
          <Upload size={32} className="text-muted mb-3" />
          <span className="text-sm text-muted mb-1">
            {uploading ? "Uploading..." : "Click to upload an image"}
          </span>
          <span className="text-xs text-muted">
            JPEG, PNG, WebP, GIF, SVG — Max 4MB
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>

        {error && (
          <div className="mt-4 p-3 rounded-xl bg-danger/10 text-danger text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Uploaded files */}
      {files.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Uploaded Images (This Session)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => (
              <div key={file.url} className="admin-card">
                <div className="h-40 rounded-xl bg-glass-bg flex items-center justify-center mb-3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <p className="text-sm font-medium truncate mb-2">{file.name}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy(file.url)}
                    className={`flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      copied === file.url
                        ? "bg-success/10 text-success"
                        : "bg-glass-bg text-muted hover:text-foreground"
                    }`}
                  >
                    {copied === file.url ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy URL</>}
                  </button>
                  <button
                    onClick={() => handleDelete(file.url)}
                    className="px-3 py-2 rounded-lg text-xs bg-glass-bg text-muted hover:text-danger transition-colors"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {files.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon size={48} className="text-muted/30 mx-auto mb-4" />
          <p className="text-muted text-sm">No images uploaded in this session.</p>
          <p className="text-muted text-xs mt-1">
            Upload images above to get shareable URLs for projects and team photos.
          </p>
        </div>
      )}
    </div>
  );
}
