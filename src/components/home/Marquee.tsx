export function Marquee({ text }: { text: string }) {
  const item = (
    <span className="mx-6 inline-flex items-center font-display text-lg tracking-wide text-ink sm:text-xl">
      {text}
      <span className="mx-6 text-red">◆</span>
    </span>
  );

  return (
    <div className="overflow-hidden border-y-2 border-ink bg-paper py-3">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
