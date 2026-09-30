import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ChipProps = ComponentProps<"button"> & { active?: boolean };

/** Rounded filter pill ("Featured", "Music", ...). */
export function Chip({ active, className, children, ...props }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "h-[43px] rounded-full px-4 text-base whitespace-nowrap transition-colors",
        active ? "bg-lime text-ink" : "bg-chip text-ink-soft hover:bg-[#e8e8e8]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
