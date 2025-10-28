import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h4 className="font-semibold">Luxe Locks Salon</h4>
          <p className="mt-2 text-neutral-300 text-sm">
            We create elevated, wearable hair with techniques that respect your hair’s health.
          </p>
          <div className="mt-4 flex items-center gap-3 text-neutral-300 text-sm">
            <a aria-label="Instagram" href="#" className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-900 transition">
              <Instagram size={16} />
            </a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-900 transition">
              <Facebook size={16} />
            </a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-900 transition">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-medium tracking-tight">Visit Us</h5>
          <div className="mt-3 space-y-2 text-sm text-neutral-300">
            <p className="flex items-center gap-2"><MapPin size={16} /> 123 Salon Ave, Suite 2, Cityville</p>
            <p className="flex items-center gap-2"><Clock size={16} /> Tue–Sat: 9am–7pm · Sun–Mon: Closed</p>
            <a href="tel:+15550123456" className="flex items-center gap-2 hover:text-white transition">
              <Phone size={16} /> (555) 012-3456
            </a>
          </div>
        </div>

        <div id="book">
          <h5 className="font-medium tracking-tight">Book Now</h5>
          <p className="mt-3 text-sm text-neutral-300">Tell us about your hair goals and preferred time. We’ll confirm shortly.</p>
          <form className="mt-4 grid gap-3">
            <input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:border-neutral-600" placeholder="Full name" />
            <input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:border-neutral-600" placeholder="Email or phone" />
            <select className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:border-neutral-600">
              <option>Precision Haircut</option>
              <option>Custom Color</option>
              <option>Highlights & Balayage</option>
              <option>Event Styling</option>
            </select>
            <button type="button" className="mt-1 inline-flex justify-center px-4 py-2 rounded-md bg-white text-neutral-900 font-medium hover:opacity-90 transition">
              Request Appointment
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Luxe Locks Salon. All rights reserved.
      </div>
    </footer>
  );
}
