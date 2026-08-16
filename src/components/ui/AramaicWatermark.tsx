import { cn } from "@/lib/utils";

// Real, well-documented biblical Aramaic phrases — not invented text.
export const ARAMAIC_PHRASES = {
  maranatha: "מרנא תא", // "Our Lord, come" — 1 Corinthians 16:22
  talithaKoum: "טליתא קומי", // "Little girl, arise" — Mark 5:41
};

export function AramaicWatermark({
  text,
  className,
  rotate = 0,
}: {
  text: string;
  className?: string;
  rotate?: number;
}) {
  return (
    <p
      aria-hidden
      className={cn("aramaic-text pointer-events-none select-none whitespace-nowrap", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {text}
    </p>
  );
}
