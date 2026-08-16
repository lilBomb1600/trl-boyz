import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ProductCard } from "@/components/shop/ProductCard";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";
import { business } from "@/data/business";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee text={business.tagline} />

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

      <section className="border-t border-line py-20 sm:py-24">
        <Container className="max-w-2xl text-center">
          <span className="stamp inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red">
            Limited Run
          </span>
          <p className="mt-8 text-balance font-display text-2xl leading-snug tracking-wide text-paper sm:text-3xl">
            {business.description}
          </p>
        </Container>
      </section>
    </>
  );
}
