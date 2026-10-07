import { Reveal } from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="demo" className="bg-mist py-24 lg:py-32">
      <Reveal className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Ready to Build a Unified Customer View?</h2>
        <p className="mt-5 text-xl text-navy/70">Connect with a Customer360Data expert to learn more.</p>
        <a href="#" className="mt-10 inline-flex h-14 items-center px-10 rounded-md bg-navy text-white text-lg font-semibold hover:opacity-90 transition">
          Request a Demo
        </a>
        <p className="mt-4 text-sm text-navy/50">Our team will get back to you within one business day.</p>
      </Reveal>
    </section>
  );
}
