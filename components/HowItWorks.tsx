"use client";

import { motion } from "framer-motion";
import { Plug, Fingerprint, Send } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Plug,
    title: "Connect & Collect",
    text: "Ingest data from all your sources (web, mobile, CRM, offline, telco data).",
    bullets: ["Batch, streaming and API ingestion", "Pre-built connectors, no-code mapping", "Consumer research responses captured automatically"],
  },
  {
    n: "02",
    icon: Fingerprint,
    title: "Unify & Enrich",
    text: "Create a single, identity-resolved customer profile and enrich it with AI-driven predictions and Consumer Research.",
    bullets: ["Deterministic + probabilistic matching", "Churn, LTV and propensity scores", "USSD, SMS, Web & WhatsApp survey insights"],
  },
  {
    n: "03",
    icon: Send,
    title: "Activate & Engage",
    text: "Sync profiles to your data warehouse or marketing tools to power personalized campaigns, recommendations, and real-time interactions.",
    bullets: ["One-click audience sync", "Real-time triggers & journeys", "Closed-loop measurement and retention reports"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="06">How We Work</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">From scattered data to lasting relationships in three steps.</h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-slate-200">
            <motion.div
              className="h-full bg-gold origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
              >
                <div className="relative w-12 h-12 rounded-full bg-white border-2 border-gold flex items-center justify-center">
                  <s.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="mt-6 text-gold font-bold text-sm">{s.n}</div>
                <h3 className="mt-1 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-navy/70 leading-relaxed">{s.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-navy/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="text-gold">→</span> {b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
