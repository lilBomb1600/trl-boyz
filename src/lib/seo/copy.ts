/**
 * Per-page titles and meta descriptions (LAUNCH-STANDARD.md section A): 50-60 character titles, 120-160 character
 * descriptions, real facts only (all from src/data/business.ts and src/data/products.ts). The label is online-only with
 * no city in the data, so titles lead with the brand instead of "{Service} in {City}, CA".
 * pageMetadata() adds " | TRL BOYZ" to a title that doesn't already name the label.
 */
import type { Product } from "@/data/products";

export const HOME_DESCRIPTION =
  "TRL BOYZ streetwear out of the Bay: heavyweight cotton tees with a dripped graphic, made once with no restocks. Drag each shirt to spin it and see every side.";

export const pageCopy = {
  home: {
    title: "TRL BOYZ Streetwear Tees | Making Money Instead Of Friends",
    description: HOME_DESCRIPTION,
    path: "/",
  },
  shop: {
    title: "Shop TRL BOYZ Heavyweight Tees in Blue, Red and Gold Drip",
    description:
      "Everything TRL BOYZ has up right now: the heavyweight cotton TRL BOYZ Tee, $38, in Blue Drip, Red Drip and Gold Drip. No restocks: when it's gone, it's gone.",
    path: "/shop",
  },
  about: {
    title: "About TRL BOYZ: Streetwear Made Once, Out of the Bay",
    description:
      "TRL BOYZ makes every piece once: no stores, no restocks, just heavyweight cotton and a graphic that drips like it's still bleeding. Out of the Bay.",
    path: "/about",
  },
  contact: {
    title: "Contact TRL BOYZ About an Order, a Drop or a Collab",
    description:
      "Questions about a TRL BOYZ order, a drop or a collab? Reach out by email. Heavyweight streetwear tees out of the Bay, made once with no restocks.",
    path: "/contact",
  },
};

/** Hand-written copy per product slug; a product without an entry falls back to its own name, price and description. */
const productCopy: Record<string, { title: string; description: string }> = {
  "trl-boyz-tee": {
    title: "TRL BOYZ Tee: Heavyweight Cotton Drip Graphic Tee, $38",
    description:
      'TRL BOYZ Tee, $38: heavyweight cotton, TRL BOYZ tag on the chest and "Making Money Instead Of Friends" dripped across the back. Blue Drip, Red Drip, Gold Drip.',
  },
};

export function productPageCopy(product: Product) {
  const copy = productCopy[product.slug] ?? { title: `${product.name}, $${product.price}`, description: product.description };
  return { ...copy, path: `/product/${product.slug}` };
}
