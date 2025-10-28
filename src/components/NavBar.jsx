import { Scissors, Phone } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
            <Scissors className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Aura Salon</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-neutral-600 transition hover:text-neutral-900">Services</a>
          <a href="#gallery" className="text-sm text-neutral-600 transition hover:text-neutral-900">Gallery</a>
          <a href="#contact" className="text-sm text-neutral-600 transition hover:text-neutral-900">Contact</a>
        </nav>
        <a
          href="tel:+1234567890"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
        >
          <Phone className="h-4 w-4" /> Book Now
        </a>
      </div>
    </header>
  );
};

export default NavBar;
