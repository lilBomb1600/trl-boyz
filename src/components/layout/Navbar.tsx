"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useCart } from "./CartProvider";
import { SignUpGate } from "./SignUpGate";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide text-paper">
          TRL<span className="text-red">.</span>BOYZ
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="glitch-hover font-terminal text-xs uppercase tracking-[0.1em] text-paper/70 transition-colors hover:text-paper"
            >
              [{l.label}]
            </Link>
          ))}
          <SignUpGate
            trigger={
              <span className="glitch-hover font-terminal text-xs uppercase tracking-[0.1em] text-paper/70 transition-colors hover:text-paper">
                [Sign Up]
              </span>
            }
          />
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={openCart} aria-label="Open cart" className="relative text-paper/80 hover:text-paper">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" className="text-paper/80 sm:hidden">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-line sm:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-terminal py-2 text-sm uppercase tracking-[0.1em] text-paper/80"
              >
                [{l.label}]
              </Link>
            ))}
            <SignUpGate
              trigger={
                <span className="font-terminal block py-2 text-left text-sm uppercase tracking-[0.1em] text-paper/80">
                  [Sign Up]
                </span>
              }
            />
          </Container>
        </div>
      )}
    </header>
  );
}
