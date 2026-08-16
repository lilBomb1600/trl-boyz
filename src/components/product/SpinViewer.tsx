"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { RotateCw } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";

export function SpinViewer({
  front,
  back,
  frontAlt,
  backAlt,
  ready,
  accent,
}: {
  front: string;
  back: string;
  frontAlt: string;
  backAlt: string;
  ready: boolean;
  accent: string;
}) {
  const rotateY = useMotionValue(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const idle = animate(rotateY, [0, -12, 0, 12, 0], {
      duration: 3.4,
      ease: "easeInOut",
      repeat: hasInteracted ? 0 : Infinity,
    });
    return () => idle.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasInteracted]);

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    lastX.current = e.clientX;
    setHasInteracted(true);
    (e.target as Element).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;
    rotateY.set(rotateY.get() + delta * 0.6);
  }

  function onPointerUp() {
    if (!dragging.current) return;
    dragging.current = false;
    const current = rotateY.get();
    const nearest180 = Math.round(current / 180) * 180;
    animate(rotateY, nearest180, { type: "spring", stiffness: 120, damping: 16 });
  }

  return (
    <div className="select-none">
      <div
        className="relative mx-auto aspect-[4/5] w-full max-w-md cursor-grab touch-none active:cursor-grabbing"
        style={{ perspective: 1400 }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          aria-hidden
          className="absolute inset-x-8 bottom-2 h-10 rounded-full opacity-40 blur-2xl"
          style={{ background: accent }}
        />
        <motion.div className="relative h-full w-full" style={{ rotateY, transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
            <SmartImage src={front} alt={frontAlt} ready={ready} icon="shirt" sizes="480px" draggable={false} />
          </div>
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <SmartImage src={back} alt={backAlt} ready={ready} icon="shirt" sizes="480px" draggable={false} />
          </div>
        </motion.div>
      </div>
      <div className="font-terminal mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.1em] text-paper/50">
        <RotateCw className="h-3.5 w-3.5" />
        [drag_to_spin.exe] front / back
      </div>
    </div>
  );
}
