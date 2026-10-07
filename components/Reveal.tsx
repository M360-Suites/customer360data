"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  num,
  children,
  dark = false,
}: {
  num?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase mb-5 ${
        dark ? "text-white/70" : "text-navy/60"
      }`}
    >
      <span className="h-px w-8 bg-gold" />
      {num && <span className="text-gold">{num}</span>}
      <span>{children}</span>
    </div>
  );
}
