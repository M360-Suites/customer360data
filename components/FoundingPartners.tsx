import { Reveal, Eyebrow } from "./Reveal";
import { Handshake, Tag, Compass, UserCheck } from "lucide-react";

const perks = [
  { icon: Handshake, t: "White-glove onboarding", d: "Work directly with our solutions engineers to connect your first sources and launch your first journey." },
  { icon: Tag, t: "Founding pricing, locked in", d: "Early partners keep preferential pricing as the platform grows." },
  { icon: Compass, t: "Shape the roadmap", d: "Your feedback directly influences what we build next — from new connectors to research templates." },
  { icon: UserCheck, t: "Dedicated success manager", d: "A named expert focused on your retention and ROI goals, not a ticket queue." },
];

const timeline = [
  { w: "Weeks 1–2", t: "Connect", d: "Link CRM, mobile, web and telco sources. Map your data and consent." },
  { w: "Weeks 3–6", t: "Unify", d: "Identity-resolved profiles go live. Launch your first consumer research study." },
  { w: "Weeks 7–12", t: "Activate", d: "Sync audiences, run retention journeys and measure the lift." },
];

export default function FoundingPartners() {
  return (
    <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="10" dark>Founding Partner Program</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Be one of the first. <span className="text-gold">Help us build it with you.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            We&apos;re onboarding a select group of banks, FMCG brands and telcos. Founding partners get hands-on support,
            preferred terms and a direct line to the team building Customer360Data.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="h-full rounded-xl bg-navy-card border border-white/10 p-6 hover:border-gold/50 hover:-translate-y-1 transition">
                <p.icon size={24} strokeWidth={1.5} className="text-gold" />
                <h3 className="mt-4 font-bold text-white">{p.t}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-white">Your first 90 days</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {timeline.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.12}>
                <div className="border-t-2 border-gold pt-4">
                  <div className="text-xs font-semibold tracking-widest uppercase text-gold">{s.w}</div>
                  <div className="mt-1 text-lg font-bold text-white">{s.t}</div>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <a href="#demo" className="mt-12 inline-flex h-12 items-center px-7 rounded-md bg-white text-navy font-semibold hover:opacity-90 transition">
            Apply as a Founding Partner
          </a>
        </div>
      </div>
    </section>
  );
}
