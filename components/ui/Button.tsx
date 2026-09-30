import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "lime" | "outline" | "white";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-[#c4ec0c]",
  outline: "border border-line bg-white text-ink hover:border-ink",
  white: "bg-white text-brand hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-base",
  md: "h-[46px] px-6 text-lg",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function buttonClasses({ variant = "lime", size = "md", className }: Omit<Common, "children">) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-normal whitespace-nowrap",
    "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({ variant, size, className, children, ...props }: Common & ComponentProps<"button">) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...props
}: Common & ComponentProps<typeof Link>) {
  return (
    <Link className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}
