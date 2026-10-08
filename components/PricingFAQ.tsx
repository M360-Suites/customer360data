"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";

const plans = [
  { name: "Essentials", desc: "For teams building their first unified customer view.", price: "Custom", note: "tailored to your profile volume", pts: ["Unified, identity-resolved profiles", "Core data connectors", "Segmentation & audience sync", "Onboarding & email support"] },
  { name: "Growth", desc: "For scaling teams focused on retention and ROI.", price: "Custom", note: "based on profiles", pts: ["Unlimited connectors", "Consumer Research (USSD, SMS, Web, WhatsApp)", "Predictive churn & LTV", "Journey orchestration", "Priority support"], featured: true },
  { name: "Enterprise", desc: "For banks, telcos and large FMCG groups.", price: "Custom", note: "annual agreement", pts: ["Dedicated environment & residency", "Data Marketplace access", "SSO, RBAC & audit logs", "Dedicated success manager", "99.9% uptime SLA"] },
];

const faqs = [
  ["What is a Customer Data Platform?", "A CDP collects customer data from every source, resolves it into one profile per person, and makes it available to marketing, product and analytics tools in real time."],
  ["How does Consumer Research work?", "You design a survey once and deliver it over USSD, SMS, WhatsApp or Web. Responses are tied to the customer profile automatically, so you can segment and act on them immediately."],
  ["Do we need cookies?", "No. Customer360Data is built on first-party, consented data, so your audiences are not affected by cookie deprecation."],
  ["How long does implementation take?", "Most teams connect their first sources and see unified profiles within weeks, supported by our onboarding team."],
  ["Is our data secure?", "Yes. Data is encrypted at rest and in transit, access is role-based and audited, and regional hosting is available."],
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="08">Pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">Start small. Scale with your customers.</h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={`h-full rounded-xl p-8 border ${p.featured ? "bg-navy text-white border-navy" : "bg-white border-slate-200"}`}>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-white/70" : "text-navy/70"}`}>{p.desc}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className={`text-sm mb-1 ${p.featured ? "text-white/60" : "text-navy/50"}`}>{p.note}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.pts.map((x) => (
                    <li key={x} className="flex gap-2 text-sm"><Check size={16} strokeWidth={2} className="text-gold mt-0.5 shrink-0" /> {x}</li>
                  ))}
                </ul>
                <a href="#demo" className={`mt-8 h-11 inline-flex w-full items-center justify-center rounded-md font-semibold hover:opacity-90 transition ${p.featured ? "bg-white text-navy" : "bg-navy text-white"}`}>
                  Talk to Sales
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section id="faq" className="bg-mist py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrow num="09">FAQ</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Questions, answered.</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(([q, a], i) => (
              <div key={q}>
                <button
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left font-semibold"
                >
                  {q}
                  <span className="text-gold text-2xl leading-none">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="pb-5 text-navy/70 leading-relaxed">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
