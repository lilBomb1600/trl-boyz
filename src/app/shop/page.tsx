import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Shop | TRL BOYZ" };

export default function ShopPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
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
