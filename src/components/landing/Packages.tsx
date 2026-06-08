import { Shield, Sparkles, Crown } from "lucide-react";

const packages = [
  {
    icon: Shield,
    name: "Essential Protection",
    tagline: "For newer vehicles or paint in good condition.",
    points: [
      "Paint decontamination wash",
      "Light single-stage polish",
      "Professional-grade ceramic protection",
    ],
  },
  {
    icon: Sparkles,
    name: "Paint Correction + Ceramic Coating",
    tagline: "For swirl marks, oxidation, water spots, or dull paint.",
    featured: true,
    points: [
      "Multi-stage decontamination",
      "Machine paint correction",
      "Premium ceramic coating application",
    ],
  },
  {
    icon: Crown,
    name: "Premium Multi-Step + Multi-Layer Coating",
    tagline: "For black vehicles, luxury cars, and high-end finishes.",
    points: [
      "Deep multi-step paint correction",
      "Multiple layers of ceramic coating",
      "Highest-tier protection and gloss",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Ceramic Coating Packages
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Three levels of protection — built around your paint.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every package starts with a free on-site paint inspection. Final pricing
            depends on vehicle size and paint condition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map(({ icon: Icon, name, tagline, points, featured }) => (
            <div
              key={name}
              className={`flex flex-col rounded-xl border bg-card p-8 transition-all ${
                featured
                  ? "border-gold shadow-xl ring-1 ring-gold/40"
                  : "border-border hover:border-gold"
              }`}
            >
              {featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground-deep">
                  Most Popular
                </span>
              )}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{name}</h3>
              <p className="mb-5 text-sm text-muted-foreground">{tagline}</p>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-foreground">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#estimate"
                className="mt-auto inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-foreground"
              >
                Request a Quote
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Ceramic coating packages typically start at{" "}
          <span className="font-semibold text-foreground">$900+</span> depending on
          vehicle size, paint condition, and level of correction needed.
        </p>
      </div>
    </section>
  );
}
