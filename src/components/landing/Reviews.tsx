import { Star, BadgeCheck } from "lucide-react";

const reviews = [
  { quote: "Yan was professional, on time, and treated my car like his own. The result was incredible.", name: "Mike R.", area: "Sarasota" },
  { quote: "Mobile service made this so easy. They came to my house, did amazing work, and the price was fair.", name: "Sarah L.", area: "Lakewood Ranch" },
  { quote: "Another level of care. I'll be using Car Tech for every vehicle I own going forward.", name: "David T.", area: "Longboat Key" },
];

export function Reviews() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Social Proof
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            What Sarasota Drivers Are Saying
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="flex flex-col rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-foreground">"{r.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.area}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <BadgeCheck className="h-4 w-4 text-gold" />
                  Verified Google Review
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
