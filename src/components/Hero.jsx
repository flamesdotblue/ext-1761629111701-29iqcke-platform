import { Phone, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(600px_circle_at_20%_20%,#ef4444,transparent_40%),radial-gradient(500px_circle_at_80%_10%,#ec4899,transparent_40%),radial-gradient(500px_circle_at_60%_80%,#22d3ee,transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 text-neutral-300 text-xs mb-6">
            <Star size={14} className="text-amber-400" /> Award-winning stylists
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Crafted Cuts. Effortless Color. Pure Confidence.
          </h1>
          <p className="mt-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
            Step into Luxe Locks—your neighborhood destination for precision cuts, dimensional color, and healthy hair care. From classic to creative, we shape styles that fit your life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-neutral-900 font-medium hover:opacity-90 transition">
              Book an Appointment
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-5 py-3 rounded-md border border-neutral-800 text-neutral-200 hover:bg-neutral-900 transition">
              Explore Services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-neutral-300">
            <div className="flex -space-x-2">
              <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 ring-2 ring-neutral-950" />
              <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 ring-2 ring-neutral-950" />
              <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 ring-2 ring-neutral-950" />
            </div>
            <p className="text-sm">Trusted by 1,200+ happy clients</p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between backdrop-blur-md bg-neutral-900/50 border-t border-neutral-800">
              <div>
                <p className="text-sm text-neutral-300">Call to consult your look</p>
                <p className="font-medium">(555) 012-3456</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-neutral-900 font-medium hover:opacity-90 transition">
                <Phone size={16} /> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
