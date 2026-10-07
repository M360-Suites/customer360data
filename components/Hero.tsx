"use client";

import { motion } from "framer-motion";
import { ArrowRight, Fingerprint, Radio, Smartphone, MessageCircle, Globe, Database } from "lucide-react";
import { Eyebrow } from "./Reveal";

const sources = [
  { icon: Smartphone, label: "USSD / SMS" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Globe, label: "Web & App" },
  { icon: Database, label: "CRM / Telco" },
];

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow dark>Enterprise Customer Data Platform</Eyebrow>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
            Unify Your Data. Understand Your Customer. <span className="text-gold">Drive Growth.</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
            Unlock actionable insights, enhance marketing ROI, and create superior customer experiences with a unified,
            real-time customer data platform — built for Africa&apos;s mobile-first consumers, and designed to keep them
            coming back.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href="#demo" className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-white text-navy font-semibold hover:opacity-90 transition">
              Talk to Sales <ArrowRight size={18} strokeWidth={2} />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center h-12 px-7 rounded-md border border-white/25 text-white font-semibold hover:bg-white/5 transition">
              See How It Works
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/60">
            <li>✓ Tailored to your business</li>
            <li>✓ Live in weeks, not months</li>
            <li>✓ Privacy-first, cookie-free</li>
          </ul>
        </motion.div>

        {/* Dashboard visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-xl bg-navy-card border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-xs text-white/50">Unified Profile · Live</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Syncing
              </span>
            </div>

            <div className="p-5 space-y-5">
              {/* identity resolution */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="space-y-2">
                  {sources.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.12 }}
                      className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-xs text-white/80"
                    >
                      <s.icon size={14} strokeWidth={1.5} className="text-gold" /> {s.label}
                    </motion.div>
                  ))}
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <motion.span animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-full border border-gold" />
                  <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <Fingerprint size={20} className="text-navy" strokeWidth={2} />
                  </span>
                </div>
                <div className="rounded-lg bg-white p-3 text-navy">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">AO</span>
                    <div>
                      <div className="text-sm font-semibold leading-tight">Amina O.</div>
                      <div className="text-[11px] text-navy/60">Lagos · Retail Banking</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {["High LTV", "WhatsApp", "Salary Cust."].map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-mist font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Retention", "87%"],
                  ["Churn risk", "Low"],
                  ["NPS (USSD)", "+64"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-md bg-white/5 border border-white/10 p-3">
                    <div className="text-[11px] text-white/50">{k}</div>
                    <div className="text-xl font-bold text-white">{v}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-md bg-white/5 border border-white/10 p-3 space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/50"><Radio size={13} strokeWidth={1.5} /> Real-time events</div>
                {["Survey completed via USSD", "Loan offer opened on WhatsApp", "App login · Accra"].map((e, i) => (
                  <motion.div
                    key={e}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 + i * 0.25 }}
                    className="flex justify-between text-xs text-white/80"
                  >
                    <span>{e}</span><span className="text-white/40">just now</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
