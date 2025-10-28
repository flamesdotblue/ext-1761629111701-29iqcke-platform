import { MapPin, Phone, Mail, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl tracking-tight">Visit Aura Salon</h3>
          <p className="mt-2 max-w-md text-neutral-600">
            125 Market Street, Suite 210, San Francisco, CA
          </p>
          <div className="mt-4 space-y-2 text-sm text-neutral-700">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Open Mon–Sat, 9am–7pm</p>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> +1 (234) 567-890</a>
            <a href="mailto:hello@aurasalon.com" className="flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> hello@aurasalon.com</a>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              <Camera className="h-4 w-4" /> Follow our work
            </a>
            <a href="tel:+1234567890" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 ring-1 ring-neutral-200 transition hover:bg-neutral-50">
              Book now
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200">
          <iframe
            title="Aura Salon Map"
            className="h-72 w-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.246848273209!2d-122.40362422353258!3d37.78797881207614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ec4f2d3d%3A0x1d8e9e7e1f1d8f0!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6">
        <p className="mx-auto max-w-6xl px-4 text-sm text-neutral-500">© {new Date().getFullYear()} Aura Salon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
