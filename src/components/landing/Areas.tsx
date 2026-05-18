import { MapPin } from "lucide-react";

const areas = [
  "Sarasota", "Longboat Key", "Bird Key",
  "Harbor Acres", "Casey Key", "Lakewood Ranch",
  "Downtown Sarasota", "Osprey", "The Oaks Club",
];

export function Areas() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Coverage
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            Mobile Service Across the Gulf Coast
          </h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {areas.map((a) => (
            <li key={a} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="font-medium text-navy">{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
