const steps = [
  { n: "01", title: "Free On-Site Inspection", body: "We come to your location and assess your vehicle's paint condition." },
  { n: "02", title: "Custom Quote", body: "Transparent pricing based on your vehicle's size, condition, and the package you choose." },
  { n: "03", title: "Paint Correction & Prep", body: "Multi-stage polish, decontamination, and surface prep." },
  { n: "04", title: "Ceramic Coating Application", body: "Professional-grade coating, applied in a controlled environment in your garage or carport." },
];

export function Process() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Our Process
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Methodical. Mobile. Meticulous.
          </h2>
        </div>
        <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-card font-bold text-foreground">
                {s.n}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
