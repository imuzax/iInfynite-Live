import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "p-6",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        hover ? "glass-card" : "glass-card-static",
        padding,
        className
      )}
    >
      {children}
    </div>
  );
}
