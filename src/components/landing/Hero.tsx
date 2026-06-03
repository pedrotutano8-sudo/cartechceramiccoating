import { Phone, Star, MapPin, Award } from "lucide-react";
import heroImg from "@/assets/IMG_1904.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient text-primary-foreground">
      <img
        src={heroImg.url}
        alt="Yan performing paint correction on a black Corvette in Sarasota"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-16 md:pb-24 md:pt-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-gold-soft backdrop-blur-sm">
          <MapPin className="h-3 w-3" />
          Sarasota, FL · Mobile Service
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Premium Ceramic Coating & Paint Correction —{" "}
          <span className="text-gold">In Your Driveway</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl">
          Mobile service across Sarasota, FL. Pro-grade products. Years of detailing
          expertise. We come to you.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="tel:+19412780127"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-base font-semibold text-foreground-deep shadow-lg shadow-black/30 transition-transform hover:scale-[1.02] hover:bg-gold-soft sm:text-lg"
          >
            <Phone className="h-5 w-5" />
            Call (941) 278-0127
          </a>
          <a
            href="#estimate"
            className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-lg"
          >
            Get Free Estimate
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span>5-Star Rated</span>
          </div>
          <span className="hidden text-white/30 sm:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Mobile Service</span>
          </div>
          <span className="hidden text-white/30 sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-gold" />
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
