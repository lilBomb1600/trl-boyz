"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/70"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-line bg-ink"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="font-display text-xl tracking-wide text-paper">CART</h2>
              <button onClick={closeCart} aria-label="Close cart" className="text-paper/60 hover:text-paper">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <p className="text-sm text-paper/50">Your cart is empty.</p>
              ) : (
                <ul className="space-y-5">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start justify-between gap-3 border-b border-line pb-5">
                      <div>
                        <p className="font-display text-sm tracking-wide text-paper">{item.name}</p>
                        <p className="mt-1 text-xs text-paper/50">
                          {item.colorwayName} · Size {item.size} · Qty {item.qty}
                        </p>
                        <p className="mt-1 text-sm text-paper/80">${item.price * item.qty}</p>
                      </div>
                      <button onClick={() => removeItem(i)} aria-label="Remove item" className="text-paper/40 hover:text-red">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-line px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-sm text-paper/70">
                <span>Subtotal</span>
                <span className="text-paper">${subtotal}</span>
              </div>
              <button
                disabled={items.length === 0}
                onClick={() => alert("Checkout isn't wired up yet — this is a demo build. Connect a payment provider to go live.")}
                className="w-full bg-paper py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-85 disabled:opacity-30"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
