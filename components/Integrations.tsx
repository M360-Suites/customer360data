import { Reveal, Eyebrow } from "./Reveal";
import { Lock, ShieldCheck, Server, FileCheck2 } from "lucide-react";

const tools = ["Salesforce", "HubSpot", "BigQuery", "Snowflake", "Meta Ads", "Google Ads", "Twilio", "Africa's Talking", "Zapier", "Power BI", "Tableau", "Postgres"];
const security = [
  { icon: ShieldCheck, t: "Consent management", d: "Capture, store and honour opt-ins across every channel." },
  { icon: Lock, t: "Encryption everywhere", d: "AES-256 at rest and TLS 1.2+ in transit." },
  { icon: Server, t: "Regional data residency", d: "Deploy in-region to meet local data-protection laws." },
  { icon: FileCheck2, t: "Audit-ready", d: "Role-based access and complete activity logs." },
];

export default function Integrations() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow num="07">Integrations & Trust</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">Plays well with your stack. Protects your customers.</h2>
          <p className="mt-5 text-lg text-navy/70 leading-relaxed">Open APIs and hundreds of connectors mean no rip-and-replace. Enterprise-grade security means you can trust every record.</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tools.map((t) => (
            <div key={t} className="bg-white border border-slate-200 rounded-lg h-16 flex items-center justify-center text-sm font-semibold text-navy/60 hover:text-navy hover:border-gold transition">
              {t}
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {security.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.07}>
              <div className="h-full bg-white rounded-xl border border-slate-200 p-6">
                <s.icon size={22} strokeWidth={1.5} className="text-gold" />
                <h3 className="mt-4 font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-navy/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
