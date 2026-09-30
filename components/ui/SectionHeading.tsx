import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({ title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <h2 className="font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px] lg:text-[44px]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-[1.7] text-muted sm:text-[17px]",
            align === "center" && "mx-auto max-w-[940px]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
