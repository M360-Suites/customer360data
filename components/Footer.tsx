import { Mail, Phone, MapPin } from "lucide-react";

const cols = [
  { h: "Product", l: ["Features", "Pricing", "Integrations", "Consumer Research"] },
  { h: "Resources", l: ["Case Studies", "Blog", "API Docs", "Help Center"] },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center text-gold text-[11px] font-bold">360</span>
            <span className="text-lg font-bold text-white">Customer360Data</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            The enterprise Customer Data Platform that unifies customer data, powers consumer research and drives retention across Africa.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> All Systems Operational
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h3 className="text-white font-semibold mb-4">{c.h}</h3>
            <ul className="space-y-2 text-sm">
              {c.l.map((x) => (
                <li key={x}><a href="#" className="hover:text-gold transition">{x}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Mail size={16} strokeWidth={1.5} className="mt-0.5" /> hello@customer360data.com</li>
            <li className="flex gap-2"><Phone size={16} strokeWidth={1.5} className="mt-0.5" /> +234 000 000 0000</li>
            <li className="flex gap-2"><MapPin size={16} strokeWidth={1.5} className="mt-0.5" /> Lagos, Nigeria</li>
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <a href="#" className="hover:text-gold">LinkedIn</a>
            <a href="#" className="hover:text-gold">X</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-xs flex flex-wrap justify-between gap-2">
        <span>&copy; 2026 Customer360Data. All rights reserved.</span>
        <span>Privacy · Terms · Security</span>
      </div>
    </footer>
  );
}
