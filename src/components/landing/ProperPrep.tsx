import { Search, Lightbulb, Ban, Wrench } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "We inspect the paint before quoting",
    body: "No guesswork. We assess your paint in person, under proper lighting, before recommending anything.",
  },
  {
    icon: Lightbulb,
    title: "We tell you what can and can't be corrected",
    body: "Honest expectations up front — you'll know exactly what the final result will look like before we start.",
  },
  {
    icon: Ban,
    title: "We never coat contaminated or damaged paint",
    body: "Applying ceramic over swirls, oxidation, or contamination locks them in forever. We prep it right or we don't coat it.",
  },
  {
    icon: Wrench,
    title: "Professional prep, products, and process",
    body: "Proper lighting, machine polishing, full decontamination, and pro-grade coatings — not consumer-grade sprays.",
  },
];

export function ProperPrep() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Why Proper Prep Matters
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Ceramic coating is only as good as the prep underneath it.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A premium service shouldn't feel like a gamble. Here's how we remove the
            risk before a drop of coating ever touches your paint.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
