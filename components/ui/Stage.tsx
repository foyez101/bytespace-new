import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type StageProps = {
  /** Design canvas width in px (the Figma frame width). */
  width: number;
  /** Design canvas height in px. */
  height: number;
  /** Width the canvas must fit into before scaling down (defaults to `width`). */
  fit?: number;
  /** On phones, fit this narrower central slice instead (crops the sides). */
  fitMobile?: number;
  className?: string;
  children?: ReactNode;
};

/**
 * A fixed-size canvas that scales down with its container.
 * Children are positioned in plain design pixels (as measured in Figma);
 * the whole composition shrinks uniformly on smaller screens.
 */
export function Stage({ width, height, fit, fitMobile, className, children }: StageProps) {
  const vars = {
    "--stage-w": `${width}px`,
    "--stage-h": `${height}px`,
    "--stage-fit": `${fit ?? width}px`,
    ...(fitMobile ? { "--stage-fit-sm": `${fitMobile}px` } : {}),
  } as CSSProperties;

  return (
    <div className={cn("stage", className)}>
      <div className="stage__frame" style={vars}>
        {children && <div className="stage__content">{children}</div>}
      </div>
    </div>
  );
}

type PlacedProps = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  z?: number;
  className?: string;
  children: ReactNode;
};

/** Absolutely places a child on a Stage using design-pixel coordinates. */
export function Placed({ x, y, w, h, z, className, children }: PlacedProps) {
  return (
    <div
      className={cn("absolute", className)}
      style={{ left: x, top: y, width: w, height: h, zIndex: z }}
    >
      {children}
    </div>
  );
}
