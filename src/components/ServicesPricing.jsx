import { Scissors, Palette, Sparkles, Check, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Precision Haircut',
    desc: 'Tailored cut with wash, scalp massage, and blowout finish.',
    price: '$45+',
  },
  {
    icon: Palette,
    name: 'Custom Color',
    desc: 'Single process or glaze to enhance tone and shine.',
    price: '$80+',
  },
  {
    icon: Sparkles,
    name: 'Highlights & Balayage',
    desc: 'Lived-in dimension or high-impact brightness.',
    price: '$150+',
  },
  {
    icon: Star,
    name: 'Event Styling',
    desc: 'Polished blowout, curls, or updo for special moments.',
    price: '$70+',
  },
];

const packages = [
  {
    title: 'Essential Glow',
    price: '$120',
    features: [
      'Cut + Classic Blowout',
      'Hydration treatment',
      'Home-care pro tips',
    ],
    highlight: false,
  },
  {
    title: 'Color Refresh',
    price: '$210',
    features: [
      'Custom color + Gloss',
      'Bond repair treatment',
      'Blowout & style finish',
    ],
    highlight: true,
  },
  {
    title: 'The Makeover',
    price: '$320',
    features: [
      'Transformation color/balayage',
      'Haircut & luxury blowout',
      'Take-home mask',
    ],
    highlight: false,
  },
];

export default function ServicesPricing() {
  return (
    <section id="services" className="py-16 sm:py-20 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-sm text-rose-300/90 font-medium tracking-wide">Our Craft</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Services and Pricing</h2>
          <p className="mt-3 text-neutral-300">Transparent pricing for expertly delivered services. Final quotes may vary by hair length, density, and technique.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, name, desc, price }) => (
            <div key={name} className="group rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/70 transition p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-neutral-800 group-hover:bg-neutral-700 transition">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-sm text-neutral-300">{desc}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-neutral-100">{price}</span>
              </div>
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-14">
          <h3 className="text-2xl font-semibold tracking-tight">Packages</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.title}
                className={`relative rounded-2xl border ${p.highlight ? 'border-rose-400/60' : 'border-neutral-800'} bg-neutral-900/50 p-6`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-6 text-xs px-2 py-0.5 rounded-full bg-rose-500 text-white">Most Popular</span>
                )}
                <h4 className="text-lg font-medium">{p.title}</h4>
                <p className="mt-2 text-3xl font-semibold">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#book" className={`mt-5 inline-flex justify-center w-full px-4 py-2 rounded-md font-medium transition ${p.highlight ? 'bg-white text-neutral-900 hover:opacity-90' : 'border border-neutral-700 hover:bg-neutral-800'}`}>
                  Book Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
