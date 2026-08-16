import Image from "next/image";

type Puff = { top: string; left: string; size: number; anim: "smoke-drift-a" | "smoke-drift-b"; duration: number; delay: number };

// Positioned over the two smoke-plume regions of the illustration (upper-left and upper-right).
const puffs: Puff[] = [
  { top: "2%", left: "8%", size: 90, anim: "smoke-drift-a", duration: 6, delay: 0 },
  { top: "8%", left: "18%", size: 70, anim: "smoke-drift-b", duration: 7, delay: 1.2 },
  { top: "1%", left: "27%", size: 60, anim: "smoke-drift-a", duration: 5.5, delay: 2.4 },
  { top: "3%", left: "68%", size: 85, anim: "smoke-drift-b", duration: 6.5, delay: 0.6 },
  { top: "9%", left: "78%", size: 65, anim: "smoke-drift-a", duration: 5.8, delay: 1.8 },
  { top: "1%", left: "87%", size: 55, anim: "smoke-drift-b", duration: 7.2, delay: 3 },
];

export function AnimatedSmokeLogo({ className }: { className?: string }) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Image
        src="/images/logo/trl-boyz-logo.jpg"
        alt="TRL BOYZ brand artwork"
        width={1300}
        height={1300}
        className="w-full drop-shadow-[0_0_40px_rgba(224,36,47,0.15)]"
        priority
      />
      {puffs.map((p, i) => (
        <span
          key={i}
          className="smoke-puff"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `${p.anim} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
