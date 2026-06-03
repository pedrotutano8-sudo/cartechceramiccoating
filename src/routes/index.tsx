import { createFileRoute } from "@tanstack/react-router";
import { StickyHeader } from "@/components/landing/StickyHeader";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { PaintCorrection } from "@/components/landing/PaintCorrection";
import { Process } from "@/components/landing/Process";
import { MeetYan } from "@/components/landing/MeetYan";
import { Reviews } from "@/components/landing/Reviews";
import { Areas } from "@/components/landing/Areas";
import { FAQ } from "@/components/landing/FAQ";
import { EstimateForm } from "@/components/landing/EstimateForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mobile Ceramic Coating & Paint Correction in Sarasota | Car Tech" },
      {
        name: "description",
        content:
          "Premium mobile ceramic coating and paint correction across Sarasota, Longboat Key, and Lakewood Ranch. Free on-site estimate. Call (941) 278-0127.",
      },
      {
        property: "og:title",
        content: "Mobile Ceramic Coating & Paint Correction in Sarasota | Car Tech",
      },
      {
        property: "og:description",
        content:
          "Premium mobile ceramic coating and paint correction across Sarasota. Free on-site estimate. Call (941) 278-0127.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        children: `{"@context":"https://schema.org","@type":"LocalBusiness","name":"Car Tech Mobile Detailing","telephone":"+1-941-278-0127","areaServed":["Sarasota","Longboat Key","Bird Key","Harbor Acres","Casey Key","Lakewood Ranch","Osprey"],"address":{"@type":"PostalAddress","addressLocality":"Sarasota","addressRegion":"FL","addressCountry":"US"},"url":"https://cartechmobiledetailing.com"}`,
        type: "application/ld+json",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <StickyHeader />
      <Hero />
      <Benefits />
      <PaintCorrection />
      <Process />
      <Reviews />
      <Areas />
      <FAQ />
      <EstimateForm />
      <Footer />
    </main>
  );
}
