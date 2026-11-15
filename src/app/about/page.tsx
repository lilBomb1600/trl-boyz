import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { Container } from "@/components/ui/Container";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { GothicWatermark } from "@/components/ui/GothicWatermark";
import { AramaicWatermark, ARAMAIC_PHRASES } from "@/components/ui/AramaicWatermark";
import { AnimatedSmokeLogo } from "@/components/ui/AnimatedSmokeLogo";
import { business } from "@/data/business";

export const metadata = pageMetadata(pageCopy.about);

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <BloodSplatter variant={2} className="pointer-events-none absolute -right-16 -top-12 w-72 rotate-12 sm:w-96" opacity={0.3} />
      <BloodSplatter variant={3} className="pointer-events-none absolute -bottom-20 -left-14 w-64 -rotate-12 sm:w-80" opacity={0.25} />
      <BloodSplatter variant={1} className="pointer-events-none absolute -left-10 top-1/3 w-40 rotate-[110deg] sm:w-56" opacity={0.18} />
      <BloodSplatter variant={2} className="pointer-events-none absolute bottom-6 right-1/4 w-32 rotate-[300deg] sm:w-44" opacity={0.2} />
      <GothicWatermark
        text="Requiescat In Pace"
        className="absolute bottom-6 right-6 text-2xl sm:text-3xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.talithaKoum}
        rotate={-8}
        className="absolute left-4 top-6 text-2xl opacity-30 sm:text-3xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.maranatha}
        rotate={11}
        className="absolute bottom-24 left-8 text-xl opacity-20 sm:text-2xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.talithaKoum}
        rotate={-15}
        className="absolute right-10 top-1/2 text-lg opacity-15 sm:text-xl"
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

        <AnimatedSmokeLogo className="relative mx-auto w-full max-w-md" />
      </Container>
    </div>
  );
}
