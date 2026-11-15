import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { AramaicWatermark, ARAMAIC_PHRASES } from "@/components/ui/AramaicWatermark";
import { products } from "@/data/products";

export const metadata = pageMetadata(pageCopy.shop);

export default function ShopPage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-20">
      <BloodSplatter variant={1} className="pointer-events-none absolute -right-12 -top-8 w-56 rotate-90 sm:w-72" opacity={0.3} />
      <BloodSplatter variant={2} className="pointer-events-none absolute -bottom-16 -left-10 w-52 rotate-45 sm:w-64" opacity={0.24} />
      <BloodSplatter variant={3} className="pointer-events-none absolute right-1/4 bottom-0 w-36 sm:w-48" opacity={0.18} />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.maranatha}
        rotate={4}
        className="absolute bottom-4 left-4 text-2xl opacity-30 sm:text-3xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.talithaKoum}
        rotate={-9}
        className="absolute right-6 top-4 text-xl opacity-20 sm:text-2xl"
      />
      <Container className="relative">
        <h1 className="font-display text-4xl tracking-wide text-paper sm:text-5xl">Shop</h1>
        <p className="mt-3 max-w-md text-sm text-paper/50">Everything currently up. When it's gone, it's gone.</p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}
