"use client";

import { useState } from "react";
import { SpinViewer } from "@/components/product/SpinViewer";
import { useCart } from "@/components/layout/CartProvider";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

const sizes = ["S", "M", "L", "XL", "XXL"];

export function ProductDetail({ product }: { product: Product }) {
  const [colorwayId, setColorwayId] = useState(product.colorways[0].id);
  const [size, setSize] = useState<string | null>(null);
  const { addItem, openCart } = useCart();

  const colorway = product.colorways.find((c) => c.id === colorwayId) ?? product.colorways[0];

  function handleAddToCart() {
    if (!size) return;
    addItem({
      slug: product.slug,
      name: product.name,
      colorwayId: colorway.id,
      colorwayName: colorway.name,
      size,
      price: product.price,
    });
  }

  return (
    <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
      <SpinViewer
        front={colorway.front}
        back={colorway.back}
        frontAlt={`${product.name} — ${colorway.name} — front`}
        backAlt={`${product.name} — ${colorway.name} — back`}
        ready={colorway.ready}
        accent={colorway.hex}
      />

      <div>
        <h1 className="font-display text-4xl tracking-wide text-paper sm:text-5xl">{product.name}</h1>
        <p className="mt-3 text-xl text-paper/80">${product.price}</p>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">{product.description}</p>

        <div className="mt-9">
          <p className="font-terminal mb-3 text-xs uppercase tracking-[0.1em] text-paper/50">
            Color — {colorway.name}
          </p>
          <div className="flex gap-3">
            {product.colorways.map((c) => (
              <button
                key={c.id}
                onClick={() => setColorwayId(c.id)}
                aria-label={c.name}
                className={cn(
                  "h-9 w-9 rounded-full border-2 transition-transform",
                  c.id === colorwayId ? "scale-110 border-paper" : "border-transparent hover:scale-105"
                )}
                style={{ background: c.hex }}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-terminal mb-3 text-xs uppercase tracking-[0.1em] text-paper/50">Size</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={cn(
                  "h-11 min-w-11 border px-3 text-sm font-semibold transition-colors",
                  s === size
                    ? "border-paper bg-paper text-ink"
                    : "border-line text-paper/70 hover:border-paper/60"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!size}
          className="glitch-hover font-terminal mt-10 w-full bg-red py-4 text-center text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30 sm:w-auto sm:px-14"
        >
          {size ? `[add_to_cart]` : `[select_size]`}
        </button>
      </div>
    </div>
  );
}
