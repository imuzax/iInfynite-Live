import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  gradient = false,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-16", className)}>
      <h2
        className={cn(
          "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3",
          gradient && "gradient-text"
        )}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
