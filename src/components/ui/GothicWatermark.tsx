import { cn } from "@/lib/utils";

export function GothicWatermark({ text, className }: { text: string; className?: string }) {
  return (
    <p
      aria-hidden
      className={cn(
        "font-gothic pointer-events-none select-none whitespace-nowrap text-red/25",
        className
      )}
    >
      {text}
    </p>
  );
}
