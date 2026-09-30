import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "light" = white wordmark for blue backgrounds, "dark" = ink wordmark. */
  tone?: "light" | "dark";
  /** Show only the "b" mark (used on the auth screens). */
  markOnly?: boolean;
  className?: string;
};

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/images/brands/logo-mark.png"
        alt=""
        width={62}
        height={67}
        className={markOnly ? "h-[33px] w-auto" : "h-[31px] w-auto"}
      />
      {!markOnly && (
        <span
          className={cn(
            "font-display text-[23px] leading-none font-extrabold tracking-[-0.03em]",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
