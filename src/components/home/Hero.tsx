"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SpinViewer } from "@/components/product/SpinViewer";
import { Container } from "@/components/ui/Container";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { GothicWatermark } from "@/components/ui/GothicWatermark";
import { AramaicWatermark, ARAMAIC_PHRASES } from "@/components/ui/AramaicWatermark";
import { products } from "@/data/products";

export function Hero() {
  const featured = products[0];
  const colorway = featured.colorways[0];

  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
      <BloodSplatter variant={1} className="pointer-events-none absolute -left-10 -top-10 w-64 sm:w-80" opacity={0.35} />
      <BloodSplatter variant={2} className="pointer-events-none absolute -right-6 top-1/3 w-40 rotate-45 sm:w-56" opacity={0.25} />
      <BloodSplatter variant={3} className="pointer-events-none absolute -bottom-24 left-1/4 w-48 rotate-12 sm:w-64" opacity={0.2} />
      <BloodSplatter variant={1} className="pointer-events-none absolute right-1/4 top-4 w-32 rotate-[200deg] sm:w-44" opacity={0.18} />
      <BloodSplatter variant={2} className="pointer-events-none absolute bottom-8 -right-12 w-40 sm:w-52" opacity={0.22} />
      <GothicWatermark
        text="Memento Mori"
        className="absolute bottom-2 right-4 text-3xl sm:text-4xl lg:text-5xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.maranatha}
        rotate={-6}
        className="absolute left-2 top-24 text-3xl opacity-40 sm:text-4xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.talithaKoum}
        rotate={9}
        className="absolute bottom-12 left-1/3 text-2xl opacity-25 sm:text-3xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.maranatha}
        rotate={-14}
        className="absolute right-1/3 top-1/2 text-xl opacity-20 sm:text-2xl"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="terminal-label blink-cursor mb-4 text-xs uppercase tracking-[0.15em] text-red"
          >
            STATUS: LIVE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="drip-underline font-display text-[15vw] leading-[0.85] tracking-wide text-paper sm:text-7xl lg:text-8xl"
          >
            TRL
            <br />
            BOYZ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 max-w-sm text-sm leading-relaxed text-paper/60"
          >
            Making money instead of friends. Heavyweight tees, dripped-out graphics — no restocks you can count on.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9"
          >
            <Link
              href="/shop"
              className="glitch-hover font-terminal inline-block bg-paper px-8 py-3.5 text-xs uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-85"
            >
              [Shop Now]
            </Link>
          </motion.div>
        </div>

        <div>
          <SpinViewer
            front={colorway.front}
            back={colorway.back}
            frontAlt={`${featured.name} — ${colorway.name} — front`}
            backAlt={`${featured.name} — ${colorway.name} — back`}
            ready={colorway.ready}
            accent={colorway.hex}
          />
        </div>
      </Container>
    </section>
  );
}
