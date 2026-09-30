import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarGroupProps = {
  images: string[];
  /** Avatar diameter in px. */
  size?: number;
  /** Text for the trailing count bubble, e.g. "26+". */
  extra?: string;
  extraTone?: "lime" | "dark";
  className?: string;
};

/** Overlapping stack of round avatars with an optional "+N" bubble. */
export function AvatarGroup({ images, size = 24, extra, extraTone = "lime", className }: AvatarGroupProps) {
  const overlap = Math.round(size * 0.3);

  return (
    <div className={cn("flex items-center", className)}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size * 2}
          height={size * 2}
          className="relative rounded-full ring-1 ring-white"
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -overlap, zIndex: i }}
        />
      ))}
      {extra && (
        <span
          className={cn(
            "relative grid place-items-center rounded-full leading-none font-medium ring-1 ring-white",
            extraTone === "lime" ? "bg-lime text-ink" : "bg-[#1e1e1e] text-white",
          )}
          style={{
            width: size,
            height: size,
            marginLeft: -overlap,
            zIndex: images.length,
            fontSize: Math.max(10, size * 0.42),
          }}
        >
          {extra}
        </span>
      )}
    </div>
  );
}
