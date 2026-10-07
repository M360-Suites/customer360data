import { Reveal, Eyebrow } from "./Reveal";
import { Smartphone, MessageSquare, Globe, MessageCircle } from "lucide-react";

const channels = [
  { icon: Smartphone, name: "USSD", text: "Zero-data, works on every handset. Ideal for reaching the unbanked and rural markets." },
  { icon: MessageSquare, name: "SMS", text: "Short, high-open-rate surveys with instant reply capture and opt-in management." },
  { icon: MessageCircle, name: "WhatsApp", text: "Conversational, rich-media research that feels like chatting with a friend." },
  { icon: Globe, name: "Web", text: "Branded survey pages and embedded widgets for apps, portals and email." },
];

export default function ConsumerResearch() {
  return (
    <section id="consumer-research" className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow num="03" dark>Consumer Research</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Don&apos;t just track behaviour. <span className="text-gold">Ask why.</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed">
            Run real-time consumer research at scale over USSD, SMS, Web and WhatsApp. Every answer lands directly on
            the unified customer profile, so product teams, marketers and executives act on the same live intelligence.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[["4", "channels"], ["Minutes", "to launch"], ["1", "profile"]].map(([a, b]) => (
              <div key={b} className="border-t border-gold pt-3">
                <div className="text-2xl font-bold text-white">{a}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{b}</div>
              </div>
            ))}
          </div>
          <a href="#demo" className="mt-10 inline-flex h-12 items-center px-7 rounded-md bg-white text-navy font-semibold hover:opacity-90 transition">
            Explore Consumer Research
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="h-full rounded-xl bg-navy-card border border-white/10 p-6 hover:border-gold/50 transition">
                <c.icon size={24} strokeWidth={1.5} className="text-gold" />
                <h3 className="mt-4 text-lg font-bold text-white">{c.name}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
