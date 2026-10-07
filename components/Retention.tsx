import { Reveal, Eyebrow } from "./Reveal";
import { UserPlus, Zap, Repeat, TrendingUp } from "lucide-react";

const stages = [
  { n: "01", icon: UserPlus, title: "Acquire", text: "Capture every first touch — web, USSD, store, agent — and resolve it to a single profile from day one." },
  { n: "02", icon: Zap, title: "Activate", text: "Trigger personalised onboarding in the customer's preferred channel so first value arrives fast." },
  { n: "03", icon: Repeat, title: "Retain", text: "Predict churn early, listen through research, and launch automated win-back journeys before customers leave." },
  { n: "04", icon: TrendingUp, title: "Grow", text: "Spot cross-sell and upsell moments, reward loyalty and build audiences that expand lifetime value." },
];

const stats = [
  ["30%", "average lift in campaign ROI"],
  ["2.4×", "faster time to insight"],
  ["25%", "reduction in customer churn"],
  ["360°", "view of every consumer"],
];

export default function Retention() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="04">Customer Retention</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Built to win customers — and keep them.
          </h2>
          <p className="mt-5 text-lg text-navy/70 leading-relaxed">
            Acquisition is expensive; loyalty is profitable. Customer360Data supports the whole lifecycle so you spend less
            winning back customers and more growing the ones you have.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-slate-200 p-7 hover:shadow-lg hover:-translate-y-1 transition">
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold">{s.n}</span>
                  <s.icon size={22} strokeWidth={1.5} className="text-navy/60" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-navy/70 leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
          {stats.map(([a, b]) => (
            <div key={b} className="bg-mist p-8 text-center">
              <div className="text-4xl font-extrabold text-navy">{a}</div>
              <div className="mt-2 text-sm text-navy/60">{b}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-navy/40 text-center">Illustrative figures based on typical customer outcomes.</p>
      </div>
    </section>
  );
}
