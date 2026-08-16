import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BloodSplatter } from "@/components/ui/BloodSplatter";
import { AramaicWatermark, ARAMAIC_PHRASES } from "@/components/ui/AramaicWatermark";
import { ProductDetail } from "@/components/product/ProductDetail";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: `${product.name} | TRL BOYZ` };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="relative overflow-hidden">
      <BloodSplatter variant={3} className="pointer-events-none absolute -left-14 -top-10 w-56 rotate-[130deg] sm:w-72" opacity={0.24} />
      <BloodSplatter variant={1} className="pointer-events-none absolute -right-10 bottom-1/4 w-44 rotate-[250deg] sm:w-56" opacity={0.2} />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.maranatha}
        rotate={-7}
        className="absolute right-6 top-6 text-2xl opacity-25 sm:text-3xl"
      />
      <AramaicWatermark
        text={ARAMAIC_PHRASES.talithaKoum}
        rotate={10}
        className="absolute bottom-8 left-8 text-xl opacity-20 sm:text-2xl"
      />
      <Container className="relative">
        <ProductDetail product={product} />
      </Container>
    </div>
  );
}
