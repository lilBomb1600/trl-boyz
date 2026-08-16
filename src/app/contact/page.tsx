import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { AramaicWatermark, ARAMAIC_PHRASES } from "@/components/ui/AramaicWatermark";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "Contact | TRL BOYZ" };

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <BloodSplatter variant={2} className="pointer-events-none absolute -bottom-10 -right-10 w-56 rotate-180 sm:w-72" opacity={0.28} />
      <BloodSplatter variant={1} className="pointer-events-none absolute -left-12 -top-8 w-48 rotate-[70deg] sm:w-60" opacity={0.22} />
      <BloodSplatter variant={3} className="pointer-events-none absolute bottom-1/4 left-1/3 w-32 sm:w-40" opacity={0.15} />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.talithaKoum}
        rotate={6}
        className="absolute right-8 top-8 text-2xl opacity-30 sm:text-3xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.maranatha}
        rotate={-11}
        className="absolute bottom-10 left-6 text-xl opacity-20 sm:text-2xl"
      />
      <Container className="relative max-w-xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-red">Contact</span>
        <h1 className="mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">Get At Us</h1>
        <p className="mt-6 text-sm leading-relaxed text-paper/60">
          Questions about an order, a drop, or a collab? Reach out.
        </p>
        <a
          href={`mailto:${business.email}`}
          className="mt-8 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-lg text-paper transition-colors hover:border-paper"
        >
          <Mail className="h-5 w-5" />
          {business.email}
        </a>
      </Container>
    </div>
  );
}
