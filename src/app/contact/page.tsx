import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "Contact | TRL BOYZ" };

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-red">Contact</span>
        <h1 className="mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">Get At Us</h1>
        <p className="mt-6 text-sm leading-relaxed text-paper/60">
          Questions about an order, a drop, or a collab? Reach out.
        </p>
        <a
          href={`mailto:${business.email}`}
          className="mt-8 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-lg text-paper transition-colors hover:border-paper"
        >
          <Mail className="h-5 w-5" />
          {business.email}
        </a>
      </Container>
    </div>
  );
}
