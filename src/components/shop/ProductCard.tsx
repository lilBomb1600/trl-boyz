import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const primary = product.colorways[0];

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-ink-soft">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <SmartImage src={primary.front} alt={`${product.name} — ${primary.name}`} ready={primary.ready} icon="shirt" sizes="(min-width: 1024px) 360px, 90vw" />
        </div>
        <div className="absolute right-3 top-3 flex gap-1.5">
          {product.colorways.map((c) => (
            <span key={c.id} className="h-4 w-4 rounded-full border border-paper/40" style={{ background: c.hex }} />
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-display text-lg tracking-wide text-paper">{product.name}</h3>
        <span className="text-sm text-paper/70">${product.price}</span>
      </div>
    </Link>
  );
}
