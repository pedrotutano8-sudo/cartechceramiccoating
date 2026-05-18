import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

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
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold sm:text-base">Car Tech</span>
            <span className="text-[10px] uppercase tracking-wider text-gold-soft sm:text-xs">
              Mobile Detailing
            </span>
          </div>
          <a
            href="tel:+19412780127"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft sm:px-4 sm:text-base"
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
