import { Reveal, Eyebrow } from "./Reveal";
import { Unplug, Layers, CheckCircle2, XCircle } from "lucide-react";

const problems = [
  "Customer records scattered across CRM, core banking, billing, POS and survey tools",
  "Duplicate and conflicting profiles for the same person across SIMs, devices and channels",
  "Campaigns built on stale lists and third-party cookies that are disappearing",
  "No feedback loop — you know what customers did, but never why",
];
const solutions = [
  "One identity-resolved profile per customer, updated in real time",
  "Open APIs and pre-built connectors that ingest web, mobile, CRM, offline and telco data",
  "First-party audiences you own and can activate without cookies",
  "Built-in consumer research over USSD, SMS, Web and WhatsApp closes the “why” gap",
];

export default function ProblemSolution() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="01">The Challenge</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Your customers leave data everywhere. <span className="text-navy/50">Your teams see fragments.</span>
          </h2>
          <p className="mt-5 text-lg text-navy/70 leading-relaxed">
            When customer data is trapped in disparate tools, every team works from a different version of the truth.
            Profiles stay incomplete, personalisation stays generic, and customers quietly churn to whoever understands
            them better.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-xl border border-slate-200 bg-mist p-8 lg:p-10">
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6">
                <Unplug size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold">Break Down Data Silos</h3>
              <p className="mt-3 text-navy/70 leading-relaxed">
                Disconnected systems create incomplete profiles and missed opportunities at every stage of the customer lifecycle.
              </p>
              <ul className="mt-6 space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-navy/80">
                    <XCircle size={18} strokeWidth={1.5} className="shrink-0 mt-0.5 text-navy/40" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-xl bg-navy p-8 lg:p-10 text-white">
              <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center mb-6">
                <Layers size={22} strokeWidth={1.5} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold">A Unified Platform for Clean, Complete Customer Data</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                Customer360Data simplifies data integration, eliminates silos, and delivers identity-resolved, real-time
                customer profiles every team can trust.
              </p>
              <ul className="mt-6 space-y-3">
                {solutions.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-white/85">
                    <CheckCircle2 size={18} strokeWidth={1.5} className="shrink-0 mt-0.5 text-gold" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
