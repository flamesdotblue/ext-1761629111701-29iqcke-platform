import { Scissors } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-neutral-100">
          <div className="p-2 rounded-md bg-gradient-to-tr from-pink-500 to-rose-400">
            <Scissors size={18} className="-rotate-12" />
          </div>
          <span className="font-semibold tracking-tight">Luxe Locks Salon</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#book" className="px-3 py-1.5 rounded-md bg-white text-neutral-900 font-medium hover:opacity-90 transition">Book Now</a>
        </nav>
      </div>
    </header>
  );
}
