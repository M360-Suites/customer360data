"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Database, Store, Warehouse, ShoppingBag, MessageSquare, MessageCircle, BellRing, ClipboardList, LayoutPanelTop } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const supply = [
  { icon: Smartphone, label: "Mobile" },
  { icon: Globe, label: "Digital" },
  { icon: Database, label: "CRM" },
  { icon: Store, label: "Point of sale" },
  { icon: Warehouse, label: "Data warehouse" },
  { icon: ShoppingBag, label: "Data Marketplace" },
];
const experience = [
  { icon: MessageSquare, label: "SMS" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: BellRing, label: "In-app & pop-up notifications" },
  { icon: ClipboardList, label: "Surveys (USSD, SMS, Web, WhatsApp)" },
  { icon: LayoutPanelTop, label: "RCS" },
];

function Flow({ reverse = false }: { reverse?: boolean }) {
  return (
    <motion.div
      aria-hidden
      className={`hidden md:block flex-1 h-0.5 min-w-6 bg-[length:12px_2px] ${
        reverse ? "bg-[linear-gradient(to_right,transparent_50%,#C59B27_50%)]" : "bg-[linear-gradient(to_right,#C59B27_50%,transparent_50%)]"
      }`}
      animate={{ backgroundPositionX: reverse ? ["0px", "-24px"] : ["0px", "24px"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default function PlatformFlow() {
  return (
    <section id="platform" className="bg-mist py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Eyebrow num="02">The Platform</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            From every data source to every customer moment.
          </h2>
          <p className="mt-5 text-lg text-navy/70 leading-relaxed">
            Customer360Data provides unified customer profiles and AI-driven predictions, enabling informed decisions
            that drive revenue and operational efficiency.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-[1fr_1.15fr_1fr] gap-10 md:gap-6 items-center">
          {/* Data supply */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-navy/50 mb-4">Data supply</div>
            <ul className="space-y-3">
              {supply.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="flex flex-1 md:flex-none md:w-52 items-center gap-3 rounded-full bg-white border border-slate-200 px-4 h-12 text-sm font-medium">
                    <s.icon size={16} strokeWidth={1.5} className="text-gold" /> {s.label}
                  </span>
                  <Flow />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Core */}
          <Reveal delay={0.2}>
            <div className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-navy/50 mb-4">
              Data management & analytics
            </div>
            <div className="relative rounded-2xl bg-white border border-slate-200 p-3 shadow-xl">
              <div className="absolute -inset-3 rounded-[28px] border-t-2 border-b-2 border-gold/60 pointer-events-none" />
              <div className="rounded-lg bg-navy px-4 py-2.5 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              <div className="p-4 flex gap-4 items-center">
                <motion.div
                  animate={{ boxShadow: ["0 0 0 0 rgba(197,155,39,0.5)", "0 0 0 16px rgba(197,155,39,0)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 shrink-0 rounded-full bg-gold flex items-center justify-center font-extrabold text-navy"
                >
                  360°
                </motion.div>
                <div className="flex-1 space-y-2">
                  <div className="h-2.5 rounded bg-navy/80 w-3/4" />
                  <div className="h-2 rounded bg-slate-200 w-full" />
                  <div className="h-2 rounded bg-slate-200 w-5/6" />
                </div>
              </div>
              <div className="px-4 pb-4 grid grid-cols-3 gap-2 text-center">
                {["Identity resolution", "AI predictions", "Segments"].map((t) => (
                  <div key={t} className="rounded-md bg-mist py-2 text-[11px] font-semibold text-navy/70">{t}</div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Experience */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-navy/50 mb-4 md:text-right">
              Real-time customer experience
            </div>
            <ul className="space-y-3">
              {experience.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Flow reverse />
                  <span className="flex flex-1 md:flex-none md:w-64 items-center gap-3 rounded-full bg-white border border-slate-200 px-4 h-12 text-sm font-medium">
                    <s.icon size={16} strokeWidth={1.5} className="text-gold shrink-0" /> {s.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
