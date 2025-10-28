import { Star, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-96 w-96 rounded-full bg-rose-200 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm ring-1 ring-neutral-200">
            <span className="flex -space-x-2 overflow-hidden pr-2">
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=80&auto=format&fit=crop" alt="client" />
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop" alt="client" />
              <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=80&auto=format&fit=crop" alt="client" />
            </span>
            Loved by 1k+ clients
          </p>
          <h1 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Elevate your look with precision cuts and modern color
          </h1>
          <p className="mt-4 max-w-xl text-base text-neutral-600 md:text-lg">
            Aura Salon blends craft, comfort, and care. From timeless trims to bold transformations, our stylists deliver effortless style tailored to you.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              <Calendar className="h-4 w-4" /> Call to Book
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 ring-1 ring-neutral-200 transition hover:bg-neutral-50">
              View Services
            </a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-neutral-600">
            <div className="flex items-center text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            5.0 from 500+ reviews
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1600&auto=format&fit=crop"
              alt="Modern salon interior"
              className="h-full w-full object-cover"
            />
          </div>
          <div id="gallery" className="mt-4 grid grid-cols-3 gap-3">
            <img className="h-28 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1640000013087-842012285d30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHlsZSUyMDF8ZW58MHwwfHx8MTc2MTYyOTE5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Style 1" />
            <img className="h-28 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop" alt="Style 2" />
            <img className="h-28 w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1715764454613-4b8ca351a718?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHlsZSUyMDN8ZW58MHwwfHx8MTc2MTYyOTE5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Style 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
