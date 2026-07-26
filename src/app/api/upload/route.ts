import { NextRequest, NextResponse } from "next/server";
import { put, del } from "@vercel/blob";
import { getSession } from "@/lib/session";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPEG, PNG, WebP, GIF, SVG" },
        { status: 400 }
      );
    }

    // Validate file size (max 4MB)
    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum size: 4MB" },
        { status: 400 }
      );
    }

    // Tier 1: Try Vercel Blob if token is available
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const blob = await put(file.name, file, {
          access: "public",
          addRandomSuffix: true,
        });
        return NextResponse.json({ url: blob.url, source: "vercel-blob" });
      } catch (err) {
        console.warn("Vercel Blob upload failed, falling back to disk/base64:", err);
      }
    }

    // Read file buffer once for fallback tiers
    const buffer = Buffer.from(await file.arrayBuffer());

    // Tier 2: Try saving to local disk (public/uploads/) in non-read-only environments
    try {
      const uploadDir = path.join(process.cwd(), "public/uploads");
      await fs.mkdir(uploadDir, { recursive: true });
      
      const ext = file.name.split(".").pop() || "jpg";
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
      const filePath = path.join(uploadDir, fileName);
      
      await fs.writeFile(filePath, buffer);
      return NextResponse.json({ url: `/uploads/${fileName}`, source: "local-disk" });
    } catch (diskError) {
      console.warn("Local disk write failed (serverless read-only filesystem), falling back to Base64 Data URI in database:", diskError);
    }

    // Tier 3: Guaranteed Serverless Fallback (Base64 Data URI saved directly to PostgreSQL)
    const base64String = buffer.toString("base64");
    const dataUrl = `data:${file.type};base64,${base64String}`;
    return NextResponse.json({ url: dataUrl, source: "database-base64" });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed unexpectedly." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    await del(url);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}
