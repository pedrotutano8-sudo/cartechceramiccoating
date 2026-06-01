import { ShieldCheck, Sparkles, Droplets } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Long-Lasting Protection",
    body: "Years of paint shield against UV, contaminants, and minor scratches.",
  },
  {
    icon: Sparkles,
    title: "Showroom Shine",
    body: "Deep gloss finish that makes paint look glass-smooth.",
  },
  {
    icon: Droplets,
    title: "Easier to Maintain",
    body: "Hydrophobic surface repels water, dirt, and road grime.",
  },
];

export function Benefits() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Why Ceramic Coating
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Engineered to outlast wax, sealants, and weekend detailing.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-gold hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
