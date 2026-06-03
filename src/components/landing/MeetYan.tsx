import { MapPin, Wrench, ShieldCheck } from "lucide-react";
import portrait from "@/assets/IMG_0731.PNG.asset.json";
import detail1 from "@/assets/IMG_0532.PNG.asset.json";
import detail2 from "@/assets/IMG_6561.jpg.asset.json";
import detail3 from "@/assets/IMG_8436.jpg.asset.json";

export function MeetYan() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src={portrait.url}
              alt="Yan, owner of Car Tech Mobile Detailing, polishing a black SUV in Sarasota"
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 hidden rounded-lg bg-gold px-4 py-3 text-foreground-deep shadow-xl sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider">Owner & Lead Detailer</p>
              <p className="text-lg font-bold leading-tight">Yan</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
              Meet Your Detailer
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Hi, I'm Yan — owner of Car Tech.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I built Car Tech because I was tired of seeing rushed jobs and locked-in
                imperfections. Every vehicle I work on, I treat like my own — same
                lighting, same prep, same patience.
              </p>
              <p>
                When I show up at your driveway, you talk to me — not a call center. I
                inspect your paint with you, walk you through what it actually needs, and
                only do the work that's right for your car.
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                Based in Sarasota — mobile across the area
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="h-4 w-4 text-gold" />
                Pro-grade products: Rupes, Menzerna, ceramic systems
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-gold" />
                Insured, transparent, no upsells
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
          <img
            src={detail1.url}
            alt="Applying Menzerna polish to a Rupes pad before paint correction"
            className="aspect-square w-full rounded-lg object-cover ring-1 ring-border"
            loading="lazy"
          />
          <img
            src={detail2.url}
            alt="Burgundy Corvette being detailed in a Sarasota driveway"
            className="aspect-square w-full rounded-lg object-cover ring-1 ring-border"
            loading="lazy"
          />
          <img
            src={detail3.url}
            alt="Close-up of paint correction in progress on a black vehicle roof"
            className="aspect-square w-full rounded-lg object-cover ring-1 ring-border"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
