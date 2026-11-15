/**
 * Project-specific JSON-LD for an online-only label (no address, so the kit's LocalBusiness node doesn't fit).
 * Built with the kit's own helpers (jsonLdGraph cleans empty fields and refuses placeholder text).
 * Facts come only from src/data/business.ts and src/data/products.ts through ./config.ts.
 */
import { business } from "@/data/business";
import type { Product } from "@/data/products";
import { facts } from "./config";
import { SITE_URL, absoluteUrl } from "./env";
import { BUSINESS_ID, jsonLdGraph, websiteNode } from "./jsonld";

export function storeNode() {
  return {
    "@type": facts.type,
    "@id": BUSINESS_ID,
    name: facts.name,
    url: `${SITE_URL}/`,
    slogan: business.tagline,
    description: facts.description,
    image: facts.image?.map(absoluteUrl),
    logo: facts.logo ? absoluteUrl(facts.logo) : undefined,
  };
}

/** The site-wide graph for the root layout: the store + the website. */
export function siteJsonLd() {
  return jsonLdGraph(storeNode(), websiteNode());
}

/** One Product per product page, with the price shown on the page ($ = USD) and the real colorway photos. */
export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/product/${product.slug}`);
  return jsonLdGraph({
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.description,
    url,
    image: product.colorways.filter((c) => c.ready).flatMap((c) => [absoluteUrl(c.front), absoluteUrl(c.back)]),
    color: product.colorways.map((c) => c.name),
    brand: { "@type": "Brand", name: facts.name },
    offers: {
      "@type": "Offer",
      url,
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      seller: { "@id": BUSINESS_ID },
    },
  });
}
