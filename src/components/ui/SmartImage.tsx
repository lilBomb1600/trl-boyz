import Image from "next/image";
import { ImageOff, Shirt } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  ready: boolean;
  icon?: "shirt" | "photo";
  sizes?: string;
  priority?: boolean;
  className?: string;
  draggable?: boolean;
};

export function SmartImage({ src, alt, ready, icon = "photo", sizes, priority, className, draggable }: Props) {
  if (!ready) {
    const Icon = icon === "shirt" ? Shirt : ImageOff;
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-ink-soft text-paper/25">
        <Icon className="h-10 w-10" strokeWidth={1.25} />
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em]">Photo coming soon</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      draggable={draggable}
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
