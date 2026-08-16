export type Colorway = {
  id: string;
  name: string;
  hex: string;
  front: string;
  back: string;
  /** True once real product photos have been dropped into /public/images/products */
  ready: boolean;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
  colorways: Colorway[];
};

export const products: Product[] = [
  {
    slug: "trl-boyz-tee",
    name: "TRL BOYZ Tee",
    price: 38,
    description:
      "Heavyweight cotton tee with the TRL BOYZ tag on the chest and \"Making Money Instead Of Friends\" dripped across the back. Drag the shirt to spin it and check both sides before you buy.",
    colorways: [
      {
        id: "blue",
        name: "Blue Drip",
        hex: "#2f7fe0",
        front: "/images/products/trl-boyz-blue-front.png",
        back: "/images/products/trl-boyz-blue-back.png",
        ready: false,
      },
      {
        id: "red",
        name: "Red Drip",
        hex: "#e0242f",
        front: "/images/products/trl-boyz-red-front.png",
        back: "/images/products/trl-boyz-red-back.png",
        ready: false,
      },
      {
        id: "gold",
        name: "Gold Drip",
        hex: "#e3b02c",
        front: "/images/products/trl-boyz-gold-front.png",
        back: "/images/products/trl-boyz-gold-back.png",
        ready: false,
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
