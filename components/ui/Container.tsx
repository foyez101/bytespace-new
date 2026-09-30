import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centers content on the 1200px content column used across the design. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1232px] px-4 sm:px-6", className)}>{children}</div>;
}
