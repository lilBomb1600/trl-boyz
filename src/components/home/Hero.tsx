"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SpinViewer } from "@/components/product/SpinViewer";
import { Container } from "@/components/ui/Container";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { GothicWatermark } from "@/components/ui/GothicWatermark";
import { products } from "@/data/products";

export function Hero() {
  const featured = products[0];
  const colorway = featured.colorways[0];

  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
      <BloodSplatter variant={1} className="pointer-events-none absolute -left-10 -top-10 w-64 sm:w-80" opacity={0.35} />
      <BloodSplatter variant={2} className="pointer-events-none absolute -right-6 top-1/3 w-40 rotate-45 sm:w-56" opacity={0.25} />
      <GothicWatermark
        text="Memento Mori"
        className="absolute bottom-2 right-4 text-3xl sm:text-4xl lg:text-5xl"
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
