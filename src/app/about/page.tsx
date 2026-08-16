import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "About | TRL BOYZ" };

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-red">About</span>
        <h1 className="drip-underline mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">TRL BOYZ</h1>
        <p className="mt-10 text-balance text-lg leading-relaxed text-paper/70">{business.description}</p>
      </Container>
    </div>
  );
}
