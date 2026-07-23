import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const members = await prisma.teamMember.findMany();
  return NextResponse.json(members);
}
