"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, ShoppingCart, Building2, Check } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const cases = [
  {
    id: "fin",
    tab: "Financial Services",
    icon: Landmark,
    desc: "Deliver superior customer experience for Banks with a combination of Customer Data Platform (CDP) and Communication Platform as a Service (CPaaS).",
    points: [
      "Single customer view across accounts, cards, mobile money and loans",
      "Trigger-based SMS, USSD and WhatsApp alerts and offers",
      "Early-warning churn and dormancy models for retail banking",
      "Consent-aware data sharing that supports regulatory compliance",
    ],
    metric: ["+30%", "cross-sell conversion"],
  },
  {
    id: "fmcg",
    tab: "FMCG / Retail",
    icon: ShoppingCart,
    desc: "Unlock insights to drive product distribution and uptake, utilizing a 360-degree view of the African consumer.",
    points: [
      "Understand who buys what, where, and why — down to region and outlet",
      "Run USSD and WhatsApp pulse surveys on new product launches",
      "Loyalty and promotion engines tied to real purchase behaviour",
      "Direct-to-consumer audiences without depending on cookies",
    ],
    metric: ["2×", "faster launch insight"],
  },
  {
    id: "realestate",
    tab: "Real Estate",
    icon: Building2,
    desc: "Give developers, agents and property managers a 360-degree view of every buyer, tenant and investor — so the right enquiry gets the right follow-up at the right moment.",
    points: [
      "Capture leads from portals, WhatsApp, site visits and agents into one profile",
      "Score leads and predict purchase or rental intent",
      "Automate viewing reminders, offers and renewal journeys",
      "Survey buyers and residents via WhatsApp, SMS and USSD on satisfaction and demand",
    ],
    metric: ["2×", "faster lead follow-up"],
  },
];

export default function UseCases() {
  const [a, setA] = useState(0);
  const c = cases[a];
  return (
    <section id="solutions" className="bg-mist py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="05">Industries</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">Made for how Africa&apos;s industries work.</h2>
        </Reveal>

        <div role="tablist" aria-label="Industries" className="mt-10 flex flex-wrap gap-2 border-b border-slate-300">
          {cases.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={a === i}
              onClick={() => setA(i)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 -mb-px transition ${
                a === i ? "border-gold text-navy" : "border-transparent text-navy/50 hover:text-navy"
              }`}
            >
              <x.icon size={18} strokeWidth={1.5} /> {x.tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-10 grid lg:grid-cols-3 gap-6"
          >
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-8 lg:p-10">
              <h3 className="text-2xl font-bold">{c.tab}</h3>
              <p className="mt-3 text-lg text-navy/70 leading-relaxed">{c.desc}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-navy/80">
                    <Check size={18} strokeWidth={2} className="text-gold shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-xl p-8 lg:p-10 text-white flex flex-col justify-between">
              <c.icon size={32} strokeWidth={1.5} className="text-gold" />
              <div className="mt-10">
                <div className="text-6xl font-extrabold">{c.metric[0]}</div>
                <div className="mt-2 text-white/70">{c.metric[1]}</div>
                <div className="mt-4 text-xs text-white/40">Typical outcome for customers in this sector.</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
