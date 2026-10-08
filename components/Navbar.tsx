"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Industries", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200"
          : "bg-navy/95 backdrop-blur-md border-white/10"
      }`}
    >
      <nav aria-label="Main" className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center text-gold text-[11px] font-bold">
            360
          </span>
          <span className={`text-lg font-bold tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>
            Customer360Data
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-navy/70 hover:text-navy" : "text-white/75 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className={`px-5 h-10 inline-flex items-center rounded-md text-sm font-semibold transition hover:opacity-90 ${
              scrolled ? "bg-navy text-white" : "bg-white text-navy"
            }`}
          >
            Request a Demo
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`md:hidden ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white border-t border-slate-200 px-6 py-5 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-navy font-medium border-b border-slate-100"
              >
                {l.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setOpen(false)} className="mt-4 h-11 inline-flex items-center justify-center rounded-md bg-navy text-white font-semibold">
              Request a Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-left" />
    </header>
  );
}
