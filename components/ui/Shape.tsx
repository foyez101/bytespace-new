import Image from "next/image";
import { cn } from "@/lib/cn";

/** Intrinsic sizes of the 3D decoration renders in /public/images/shapes. */
const shapes = {
  "lime-cone": [251, 276],
  "lime-cylinder": [164, 301],
  "lime-pyramid": [126, 139],
  "lime-spiral-a": [195, 269],
  "lime-spiral-b": [192, 160],
  "lime-spiral-c": [164, 170],
  "lime-torus": [205, 188],
  "lime-torus-half": [239, 129],
  "white-cone": [115, 154],
  "white-cylinder": [170, 301],
  "white-pyramid": [126, 139],
  "white-spiral-lg": [191, 250],
  "white-spiral-sm": [116, 123],
  "white-torus": [239, 219],
} as const;

export type ShapeName = keyof typeof shapes;

type ShapeProps = {
  name: ShapeName;
  /** Position on the parent Stage, in design px. */
  x: number;
  y: number;
  /** Rendered width in design px (defaults to intrinsic width). */
  w?: number;
  className?: string;
};

/** Decorative 3D render positioned on a Stage. */
export function Shape({ name, x, y, w, className }: ShapeProps) {
  const [iw, ih] = shapes[name];
  const width = w ?? iw;
  return (
    <Image
      src={`/images/shapes/${name}.png`}
      alt=""
      aria-hidden
      width={iw}
      height={ih}
      className={cn("pointer-events-none absolute select-none", className)}
      style={{ left: x, top: y, width, height: (width * ih) / iw }}
    />
  );
}
