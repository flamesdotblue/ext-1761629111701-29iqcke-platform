import { Scissors, Razor, Palette, Sparkles, Check } from 'lucide-react';

const services = [
  {
    title: 'Precision Cut',
    desc: 'Tailored cuts for all hair types with expert consultation.',
    price: '$45',
    icon: Scissors,
  },
  {
    title: 'Clipper & Beard Line-up',
    desc: 'Clean clipper work, edges, and finish for a sharp look.',
    price: '$35',
    icon: Razor,
  },
  {
    title: 'Color & Highlights',
    desc: 'Dimensional color, balayage, or gloss to refresh your tone.',
    price: 'from $95',
    icon: Palette,
  },
  {
    title: 'Blowout & Style',
    desc: 'Smooth, bouncy finish with long-lasting shine.',
    price: '$40',
    icon: Sparkles,
  },
];

const tiers = [
  {
    name: 'Essential',
    price: '$75',
    features: ['Wash + Cut', 'Quick style', 'Take-home tips'],
  },
  {
    name: 'Signature',
    price: '$145',
    features: ['Consultation', 'Cut + Treatment', 'Blowout style'],
    highlighted: true,
  },
  {
    name: 'Luxe Color',
    price: '$220',
    features: ['Custom color', 'Gloss + Bond builder', 'Finish & style'],
  },
];

const ServicesPricing = () => {
  return (
    <section id="services" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Services & Pricing</h2>
          <p className="mt-3 text-neutral-600">Transparent pricing and handcrafted results. Book by phone for the best availability.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{s.title}</h3>
                  <span className="text-sm font-semibold text-neutral-900">{s.price}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                tier.highlighted ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-white'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full border border-neutral-700 bg-white/10 px-3 py-1 text-xs backdrop-blur">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className={`mt-1 text-3xl font-bold ${tier.highlighted ? 'text-white' : 'text-neutral-900'}`}>{tier.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 ${tier.highlighted ? 'text-white' : 'text-neutral-900'}`} />
                    <span className={tier.highlighted ? 'text-white/90' : 'text-neutral-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+1234567890"
                className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${
                  tier.highlighted
                    ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                Call to Book
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPricing;
