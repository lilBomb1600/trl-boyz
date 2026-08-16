import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ProductCard } from "@/components/shop/ProductCard";
import { Container } from "@/components/ui/Container";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { GothicWatermark } from "@/components/ui/GothicWatermark";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee text="THEY WON'T FIND YOUR BODY" />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl tracking-wide text-paper sm:text-4xl">Shop The Drop</h2>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">{products.length} item{products.length === 1 ? "" : "s"}</span>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-line py-20 sm:py-24">
        <BloodSplatter variant={3} className="pointer-events-none absolute -bottom-16 -left-16 w-72 sm:w-96" opacity={0.3} />
        <GothicWatermark
          text="Timor Mortis Conturbat Me"
          className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-lg sm:text-xl"
        />
        <Container className="relative max-w-2xl text-center">
          <span className="stamp inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red">
            Get It Before You Die
          </span>
          <p className="font-horror mt-10 text-balance text-xl leading-relaxed text-red sm:text-2xl">
            Every drop disappears without warning.
            <br />
            So will you.
          </p>
        </Container>
      </section>
    </>
  );
}
