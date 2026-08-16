import type { Metadata } from "next";
import { Rubik_Wet_Paint, Space_Mono, Inter, Nosifer, Pirata_One, Noto_Serif_Hebrew } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/layout/CartProvider";
import { CartDrawer } from "@/components/layout/CartDrawer";

const drip = Rubik_Wet_Paint({ subsets: ["latin"], weight: "400", variable: "--font-drip" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const horror = Nosifer({ subsets: ["latin"], weight: "400", variable: "--font-horror" });
const gothic = Pirata_One({ subsets: ["latin"], weight: "400", variable: "--font-gothic" });
// Real Aramaic script (Hebrew square script — the same alphabet biblical Aramaic was written in)
const aramaic = Noto_Serif_Hebrew({ subsets: ["hebrew"], weight: ["500", "700"], variable: "--font-aramaic" });

export const metadata: Metadata = {
  title: "TRL BOYZ | Making Money Instead Of Friends",
  description: "TRL BOYZ streetwear — heavyweight tees, dripped-out graphics. Drag to spin, see the fit from every side.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${drip.variable} ${mono.variable} ${inter.variable} ${horror.variable} ${gothic.variable} ${aramaic.variable} h-full`}>
      <body className="grain scanlines flex min-h-full flex-col bg-ink text-paper antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
