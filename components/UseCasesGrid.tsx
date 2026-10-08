"use client";

import { motion } from "framer-motion";
import { Megaphone, UserRoundPlus, LineChart, ClipboardList, Check } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const cases = [
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    desc: "Plan, personalise and measure campaigns across every channel from one audience layer.",
    points: ["Segment on behaviour, value and predicted intent", "Orchestrate SMS, WhatsApp, email and in-app messages", "Measure ROI by campaign and channel"],
  },
  {
    icon: UserRoundPlus,
    title: "Customer Acquisition & Retention",
    desc: "Win the right customers, onboard them well and keep them longer.",
    points: ["Resolve every first touch to a single profile", "Predict churn and trigger win-back journeys", "Spot cross-sell and loyalty moments"],
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    desc: "Turn unified data into decisions with dashboards, AI and ML your teams can trust.",
    points: ["Customer lifetime value and propensity models", "Self-serve dashboards and warehouse sync", "Governed, consented and auditable data"],
  },
  {
    icon: ClipboardList,
    title: "Consumer Research",
    desc: "Collect real-time feedback and market insight at scale and attach it to the customer profile.",
    points: ["Surveys over USSD, SMS, Web and WhatsApp", "NPS, CSAT, concept and product tests", "Responses feed segments and reports instantly"],
  },
];

export default function UseCasesGrid() {
  return (
    <section id="use-cases" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="04">Use Cases</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Four ways teams put the platform to work.
          </h2>
          <p className="mt-5 text-lg text-navy/70 leading-relaxed">
            Each use case runs on the same unified profile, so insight from one instantly improves the others.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid md:grid-cols-2 gap-5"
        >
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-slate-200 bg-mist p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-navy text-white flex items-center justify-center">
                  <c.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="text-gold font-bold">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{c.title}</h3>
              <p className="mt-2 text-navy/70 leading-relaxed">{c.desc}</p>
              <ul className="mt-5 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-navy/80">
                    <Check size={16} strokeWidth={2} className="shrink-0 mt-0.5 text-gold" /> {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
