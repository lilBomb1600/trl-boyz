"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function SignUpGate({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  // A portal is required here: the trigger lives inside the sticky header,
  // which has backdrop-blur — that establishes a containing block for
  // fixed-position descendants in Chromium, so without a portal the modal
  // gets trapped inside the ~64px header box instead of centering on the viewport.
  useEffect(() => setMounted(true), []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  function close() {
    setOpen(false);
    setSubmitted(false);
    setEmail("");
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>{trigger}</button>

      {mounted &&
        createPortal(
          <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-50 bg-black/80"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.18 }}
              className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 border border-black/20 shadow-2xl"
            >
              {/* fake OS title bar */}
              <div className="flex items-center justify-between bg-paper px-3 py-2 font-terminal text-[11px] text-ink">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red" />
                  <span>file · edit · session · terminal — tty.trlboyz_core_01</span>
                </div>
                <button onClick={close} aria-label="Close" className="text-ink/60 hover:text-ink">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* form panel */}
              <div className="bg-[#e9e6df] px-6 py-8 sm:px-10 sm:py-10">
                {submitted ? (
                  <div className="text-center">
                    <p className="font-horror text-2xl text-red">You&apos;re In.</p>
                    <p className="font-terminal mt-4 text-xs uppercase tracking-[0.1em] text-ink/60">
                      We&apos;ll reach out when the next one drops.
                    </p>
                    <button
                      onClick={close}
                      className="font-terminal mt-8 border border-ink/30 px-6 py-2.5 text-xs uppercase tracking-[0.1em] text-ink hover:bg-ink hover:text-paper"
                    >
                      [close]
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <p className="font-terminal mb-6 text-xs uppercase tracking-[0.15em] text-ink/50">
                      //trlboyz_core/join_the_list
                    </p>
                    <label className="font-terminal block text-xs font-bold uppercase tracking-[0.1em] text-ink">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email address"
                      className="mt-2 w-full border-b border-ink/40 bg-transparent pb-2 text-sm text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
                    />
                    <p className="mt-6 text-[11px] leading-relaxed text-ink/45">
                      No spam. Just word when a new drop goes live — and when it&apos;s gone.
                    </p>
                    <button
                      type="submit"
                      className="font-terminal mt-8 w-full border border-ink bg-ink py-3 text-xs uppercase tracking-[0.15em] text-paper hover:bg-transparent hover:text-ink"
                    >
                      [submit]
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
