import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { GothicWatermark } from "@/components/ui/GothicWatermark";
import { AramaicWatermark, ARAMAIC_PHRASES } from "@/components/ui/AramaicWatermark";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "About | TRL BOYZ" };

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <BloodSplatter variant={2} className="pointer-events-none absolute -right-16 -top-12 w-72 rotate-12 sm:w-96" opacity={0.3} />
      <BloodSplatter variant={3} className="pointer-events-none absolute -bottom-20 -left-14 w-64 -rotate-12 sm:w-80" opacity={0.25} />
      <GothicWatermark
        text="Requiescat In Pace"
        className="absolute bottom-6 right-6 text-2xl sm:text-3xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.talithaKoum}
        rotate={-8}
        className="absolute left-4 top-6 text-2xl opacity-30 sm:text-3xl"
      />

      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <span className="terminal-label font-terminal text-xs uppercase tracking-[0.15em] text-red">
            The Story
          </span>
          <h1 className="font-gothic drip-underline mt-4 text-5xl text-paper sm:text-6xl">TRL BOYZ</h1>
          <p className="mt-10 text-balance text-lg leading-relaxed text-paper/70">{business.description}</p>

          <div className="mt-14 border-t border-line pt-10">
            <p className="font-horror text-balance text-lg leading-relaxed text-red sm:text-xl">
              Wear it while your heart still beats.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/images/logo/trl-boyz-logo.jpg"
            alt="TRL BOYZ brand artwork"
            width={1300}
            height={1300}
            className="w-full drop-shadow-[0_0_40px_rgba(224,36,47,0.15)]"
            priority
          />
        </div>
      </Container>
    </div>
  );
}
