/**
 * ADAPT ME: the only kit file you edit per project.
 *
 * Map the project's data files (src/data/business.ts, src/data/products.ts) onto the kit. Copy facts from those files;
 * never type a new fact here. If the data file doesn't have it (city, address, phone, real email, socials), leave it out
 * and ask the owner.
 */
import { business } from "@/data/business";
import { products } from "@/data/products";
import type { BusinessFacts, BusinessType, Locale, OgImage, PageEntry, ServiceFact } from "./types";

/**
 * Origin used when NEXT_PUBLIC_SITE_URL isn't set: the *.vercel.app URL while it's a preview.
 * business.ts has no siteUrl, so this is the live preview host.
 * On launch set NEXT_PUBLIC_SITE_URL=https://www.client.com in Vercel instead of editing this.
 */
export const FALLBACK_URL: string = "https://trl-boyz.vercel.app";

/** Languages that have their OWN URL. This site is English only. */
export const LOCALES: Locale[] = ["en"];
export const DEFAULT_LOCALE: Locale = "en";

/** 1200x630 JPG in public/: the backs of the three real colorway photos from data/products.ts. */
export const OG_IMAGE: OgImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: `Backs of the ${products[0].name} in ${products[0].colorways.map((c) => c.name).join(", ")}, printed "${business.tagline}"`,
};

/**
 * TRL BOYZ is an online-only streetwear label ("No stores" in business.ts), so the true schema.org type is
 * OnlineStore, not a LocalBusiness subtype. business.ts has no city, street, phone or social links, and its email is an
 * example.com placeholder, so none of those are published. The address below is required by the kit's type only;
 * it is never rendered (the store node is built in ./store.ts without it).
 */
export const facts: BusinessFacts = {
  name: business.name,
  type: "OnlineStore" as BusinessType,
  description: business.description,
  address: { locality: "", region: "" },
  image: [OG_IMAGE.url],
  logo: "/images/logo/trl-boyz-logo.jpg",
};

/** A clothing label sells products, not services: Product nodes come from data/products.ts (./store.ts). */
export const services: ServiceFact[] = [];

/** Every indexable URL. Leave out thank-you, invoice, handoff and preview-only pages. */
export const pages: PageEntry[] = [
  { path: "/" },
  { path: "/shop" },
  ...products.map((p) => ({ path: `/product/${p.slug}` })),
  { path: "/about" },
  { path: "/contact" },
];
