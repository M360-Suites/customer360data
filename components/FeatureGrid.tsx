"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, BarChart3, HeartHandshake, ClipboardList, ShoppingBag, Blocks, Check } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const features = [
  {
    title: "Marketing",
    icon: Megaphone,
    desc: "Drive targeted campaigns with advanced segmentation, personalized content, and omnichannel strategies.",
    points: ["Real-time & predictive segments", "Journeys across SMS, email, WhatsApp, push", "Attribution and ROI dashboards"],
  },
  {
    title: "Data",
    icon: BarChart3,
    desc: "Utilize robust analytics tools, AI, and ML to extract insights, optimize data workflows, and ensure data integrity.",
    points: ["Identity resolution & deduplication", "Churn, propensity and LTV models", "Governance, consent & audit trails"],
  },
  {
    title: "Customer Experience",
    icon: HeartHandshake,
    desc: "Enhance customer journeys with real-time insights, predictive analytics, and automated interactions.",
    points: ["Next-best-action recommendations", "Automated win-back and onboarding flows", "Unified view for support teams"],
  },
  {
    title: "Consumer Research",
    icon: ClipboardList,
    featured: true,
    desc: "Gather real-time consumer feedback and market insights at scale via USSD, SMS, Web, and WhatsApp to inform product updates and business intelligence.",
    points: ["Reach feature-phone and smartphone users", "Responses written straight to the profile", "NPS, CSAT, concept tests & market studies"],
  },
  {
    title: "Data Marketplace",
    icon: ShoppingBag,
    desc: "Aggregate, enrich, and activate first-party data. Create custom audiences and leverage segmented audiences without reliance on cookies.",
    points: ["Consent-based audience sharing", "Enrichment with partner & telco signals", "Lookalike and custom audience builder"],
  },
  {
    title: "Third-Party Integrations",
    icon: Blocks,
    desc: "Seamlessly integrate with your existing systems through open APIs. Build your way, with the tools that best serve you.",
    points: ["REST APIs, webhooks & SDKs", "Warehouse sync: BigQuery, Snowflake, Redshift", "Connectors for CRM, core banking, ad platforms"],
  },
];

const R = 38;
const pos = (i: number) => {
  const a = ((i * 60 - 90) * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};

export default function FeatureGrid() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % features.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const f = features[active];

  return (
    <section id="product" className="bg-ink py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="02" dark>What We Do</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Six capabilities. <span className="text-gold">One connected customer view.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Everything orbits the customer. Explore how each capability feeds a single, living profile — so every
            interaction feels personal and every customer has a reason to stay.
          </p>
        </Reveal>

        <div
          className="mt-14 grid lg:grid-cols-2 gap-12 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[520px] aspect-square"
          >
            {/* rotating dashed ring */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
                <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(197,155,39,0.35)" strokeWidth="0.25" strokeDasharray="1 2" />
                <circle cx="50" cy="50" r={R - 12} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.25" />
              </svg>
            </motion.div>

            {/* connection lines */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
              {features.map((_, i) => {
                const p = pos(i);
                return (
                  <motion.line
                    key={i}
                    x1="50" y1="50" x2={p.x} y2={p.y}
                    stroke={i === active ? "#C59B27" : "rgba(255,255,255,0.15)"}
                    strokeWidth={i === active ? 0.5 : 0.25}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
                  />
                );
              })}
            </svg>

            {/* core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {[0, 1].map((k) => (
                <motion.span
                  key={k}
                  className="absolute inset-0 rounded-full border border-gold"
                  animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: k * 1.5, ease: "easeOut" }}
                />
              ))}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold flex flex-col items-center justify-center text-navy shadow-[0_0_60px_rgba(197,155,39,0.35)]">
                <span className="text-3xl font-extrabold leading-none">360°</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase mt-1">Customer</span>
              </div>
            </div>

            {/* nodes */}
            {features.map((n, i) => {
              const p = pos(i);
              const on = i === active;
              return (
                <button
                  key={n.title}
                  aria-label={n.title}
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                >
                  <motion.span
                    animate={{ scale: on ? 1.2 : 1, y: [0, -4, 0] }}
                    transition={{ scale: { duration: 0.3 }, y: { duration: 4, repeat: Infinity, delay: i * 0.4 } }}
                    className={`flex w-14 h-14 sm:w-16 sm:h-16 rounded-full items-center justify-center border transition-colors ${
                      on ? "bg-white text-navy border-white shadow-[0_0_30px_rgba(255,255,255,0.35)]" : "bg-navy-card text-white/80 border-white/20 group-hover:border-gold"
                    }`}
                  >
                    <n.icon size={22} strokeWidth={1.5} />
                  </motion.span>
                  <span className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold tracking-wide ${on ? "text-gold" : "text-white/50"}`}>
                    {n.title}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Detail */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-navy-card border border-white/10 p-8 lg:p-10 min-h-[340px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gold text-navy flex items-center justify-center">
                    <f.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-gold">0{active + 1} / 06</div>
                    <h3 className="text-2xl font-bold text-white">{f.title}</h3>
                  </div>
                  {f.featured && (
                    <span className="ml-auto hidden sm:block text-[10px] font-bold tracking-widest uppercase text-gold border border-gold/50 rounded-full px-3 py-1">
                      Key differentiator
                    </span>
                  )}
                </div>
                <p className="mt-6 text-white/75 leading-relaxed">{f.desc}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-white/85">
                      <Check size={16} strokeWidth={2} className="shrink-0 mt-0.5 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex gap-2" role="tablist" aria-label="Capabilities">
              {features.map((n, i) => (
                <button
                  key={n.title}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={n.title}
                  onClick={() => setActive(i)}
                  className="relative h-1 flex-1 rounded-full bg-white/15 overflow-hidden"
                >
                  {i === active && (
                    <motion.span
                      key={`${active}-${paused}`}
                      className="absolute inset-y-0 left-0 bg-gold"
                      initial={{ width: paused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: paused ? 0 : 4.5, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
