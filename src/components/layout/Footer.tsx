import Link from "next/link";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-2xl tracking-wide text-paper">TRL.BOYZ</p>
          <p className="mt-2 max-w-sm text-sm text-paper/50">{business.tagline}</p>
        </div>
        <nav className="flex gap-6 text-xs font-semibold uppercase tracking-[0.15em] text-paper/60">
          <Link href="/shop" className="hover:text-paper">Shop</Link>
          <Link href="/about" className="hover:text-paper">About</Link>
          <Link href="/contact" className="hover:text-paper">Contact</Link>
        </nav>
      </Container>
      <Container className="mt-10 border-t border-line pt-6">
        <p className="text-[11px] uppercase tracking-[0.15em] text-paper/30">© {new Date().getFullYear()} TRL BOYZ. All rights reserved.</p>
      </Container>
    </footer>
  );
}
