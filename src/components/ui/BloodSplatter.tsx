"use client";

import { useId } from "react";

type Drop = { cx: number; cy: number; rx: number; ry: number; rot: number };

// Deterministic pseudo-random spatter fields (no Math.random — stays identical between server/client render)
const fields: Record<number, Drop[]> = {
  1: [
    { cx: 130, cy: 90, rx: 46, ry: 40, rot: 12 },
    { cx: 95, cy: 60, rx: 14, ry: 10, rot: -20 },
    { cx: 175, cy: 55, rx: 10, ry: 22, rot: 60 },
    { cx: 60, cy: 110, rx: 8, ry: 16, rot: 100 },
    { cx: 200, cy: 100, rx: 12, ry: 8, rot: -40 },
    { cx: 40, cy: 70, rx: 6, ry: 6, rot: 0 },
    { cx: 215, cy: 140, rx: 5, ry: 12, rot: 70 },
    { cx: 150, cy: 150, rx: 9, ry: 18, rot: 140 },
    { cx: 100, cy: 155, rx: 6, ry: 6, rot: 0 },
    { cx: 20, cy: 40, rx: 5, ry: 9, rot: 40 },
    { cx: 190, cy: 30, rx: 4, ry: 4, rot: 0 },
    { cx: 240, cy: 80, rx: 6, ry: 10, rot: -30 },
    { cx: 70, cy: 20, rx: 4, ry: 8, rot: 100 },
    { cx: 130, cy: 30, rx: 5, ry: 5, rot: 0 },
  ],
  2: [
    { cx: 60, cy: 60, rx: 30, ry: 26, rot: -10 },
    { cx: 100, cy: 90, rx: 10, ry: 20, rot: 60 },
    { cx: 30, cy: 100, rx: 8, ry: 14, rot: 120 },
    { cx: 90, cy: 40, rx: 6, ry: 6, rot: 0 },
    { cx: 15, cy: 50, rx: 5, ry: 10, rot: 30 },
    { cx: 120, cy: 60, rx: 4, ry: 8, rot: 80 },
    { cx: 50, cy: 20, rx: 4, ry: 4, rot: 0 },
    { cx: 105, cy: 110, rx: 5, ry: 9, rot: 150 },
  ],
  3: [
    { cx: 120, cy: 100, rx: 40, ry: 34, rot: 8 },
    { cx: 170, cy: 70, rx: 12, ry: 22, rot: -50 },
    { cx: 70, cy: 130, rx: 9, ry: 16, rot: 110 },
    { cx: 190, cy: 120, rx: 7, ry: 12, rot: 20 },
    { cx: 50, cy: 70, rx: 6, ry: 11, rot: 60 },
    { cx: 200, cy: 40, rx: 5, ry: 5, rot: 0 },
    { cx: 30, cy: 40, rx: 5, ry: 9, rot: -30 },
    { cx: 150, cy: 160, rx: 6, ry: 6, rot: 0 },
    { cx: 100, cy: 40, rx: 4, ry: 8, rot: 90 },
  ],
};

export function BloodSplatter({
  variant = 1,
  className = "",
  opacity = 0.55,
}: {
  variant?: 1 | 2 | 3;
  className?: string;
  opacity?: number;
}) {
  const filterId = useId();
  const drops = fields[variant];

  return (
    <svg viewBox="0 0 260 200" className={className} aria-hidden style={{ opacity }}>
      <defs>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.09" numOctaves="2" seed={variant * 7} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`} fill="var(--color-red)">
        {drops.map((d, i) => (
          <ellipse key={i} cx={d.cx} cy={d.cy} rx={d.rx} ry={d.ry} transform={`rotate(${d.rot} ${d.cx} ${d.cy})`} />
        ))}
      </g>
    </svg>
  );
}
