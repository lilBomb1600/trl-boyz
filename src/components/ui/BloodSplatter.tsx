const transforms: Record<number, string> = {
  1: "rotate(0deg) scaleX(1)",
  2: "rotate(180deg) scaleX(-1)",
  3: "rotate(90deg) scaleX(1)",
};

export function BloodSplatter({
  variant = 1,
  className = "",
  opacity = 0.85,
}: {
  variant?: 1 | 2 | 3;
  className?: string;
  opacity?: number;
}) {
  return (
    <img
      src="/images/textures/blood-drip-alpha.png"
      alt=""
      aria-hidden
      className={className}
      style={{ opacity, transform: transforms[variant] }}
    />
  );
}
