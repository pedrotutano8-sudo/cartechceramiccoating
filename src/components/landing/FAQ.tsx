import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does ceramic coating last?",
    a: "Professional-grade ceramic coatings typically last 2 to 5 years depending on the product, vehicle use, and maintenance. We'll recommend the right option for your driving habits.",
  },
  {
    q: "Do I need paint correction before ceramic coating?",
    a: "In nearly every case, yes. Applying ceramic coating over uncorrected paint locks in swirl marks, scratches, and oxidation permanently. We always inspect first and recommend correction when needed.",
  },
  {
    q: "How long does the service take?",
    a: "Paint correction plus ceramic coating typically takes 1 to 2 full days depending on vehicle size and paint condition. We work at your home or wherever your vehicle is parked.",
  },
  {
    q: "What's the price for ceramic coating?",
    a: "Pricing depends on vehicle size, current paint condition, and the coating package you select. We provide a free on-site inspection and transparent quote — no obligation. Call us at (941) 278-0127 or request a free estimate below.",
  },
  {
    q: "Do you really come to my location?",
    a: "Yes. Car Tech is fully mobile. We bring all equipment, products, and lighting to your driveway, garage, or carport — across Sarasota and surrounding areas.",
  },
];

export function FAQ() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Answers before you call.
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
