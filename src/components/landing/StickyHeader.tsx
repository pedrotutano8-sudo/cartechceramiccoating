import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import logo from "@/assets/cartech-logo.png.asset.json";

export function StickyHeader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-navy text-primary-foreground shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <img src={logo.url} alt="Car Tech Mobile Detailing" className="h-9 w-auto sm:h-10" />
          </a>
          <a
            href="tel:+19412780127"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-foreground-deep transition-colors hover:bg-gold-soft sm:px-4 sm:text-base"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call (941) 278-0127</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
