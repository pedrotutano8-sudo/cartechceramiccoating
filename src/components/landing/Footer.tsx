import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold">Car Tech Mobile Detailing</div>
          <p className="mt-2 text-sm text-white/60">Sarasota, FL</p>
          <a
            href="tel:+19412780127"
            className="mt-4 inline-flex items-center gap-2 text-gold hover:text-gold-soft"
          >
            <Phone className="h-4 w-4" />
            (941) 278-0127
          </a>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            Service Area
          </div>
          <p className="text-sm text-white/70">
            Sarasota · Longboat Key · Bird Key · Harbor Acres · Casey Key · Lakewood
            Ranch · Downtown Sarasota · Osprey · The Oaks Club
          </p>
        </div>
        <div className="md:text-right">
          <a
            href="https://cartechmobiledetailing.com"
            className="text-sm text-white/70 hover:text-gold"
          >
            cartechmobiledetailing.com
          </a>
          <p className="mt-4 text-xs text-white/50">
            © {new Date().getFullYear()} Car Tech Mobile Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
