import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Star, Award, ShieldCheck, Sparkles, Droplets, Shield, Crown, Search, Lightbulb, Ban, Wrench, BadgeCheck, ChevronDown, CheckCircle2, Loader2 } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useRouter, isRedirect } from "@tanstack/react-router";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, a as createServerFn } from "./server-6hdNdPm7.js";
import { z } from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
function useServerFn(serverFn) {
  const router = useRouter();
  return React.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const url$6 = "/__l5e/assets-v1/09200dc3-2fb5-412a-b095-8bd7c60d3927/cartech-logo.png";
const logo = {
  url: url$6
};
function StickyHeader() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`,
      children: /* @__PURE__ */ jsx("div", { className: "bg-navy text-primary-foreground shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("img", { src: logo.url, alt: "Car Tech Mobile Detailing", className: "h-9 w-auto sm:h-10" }) }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+19412780127",
            className: "inline-flex items-center gap-2 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-foreground-deep transition-colors hover:bg-gold-soft sm:px-4 sm:text-base",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Call (941) 278-0127" }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Call Now" })
            ]
          }
        )
      ] }) })
    }
  );
}
const url$5 = "/__l5e/assets-v1/8cd5c6ad-a27b-47d3-96d8-cf6a41a43073/IMG_1904.jpg";
const heroImg = {
  url: url$5
};
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden bg-hero-gradient text-primary-foreground", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: heroImg.url,
        alt: "Yan performing paint correction on a black Corvette in Sarasota",
        className: "absolute inset-0 h-full w-full object-cover opacity-40",
        loading: "eager"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-16 md:pb-24 md:pt-24", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: logo.url,
          alt: "Car Tech Mobile Detailing logo",
          className: "mb-6 h-14 w-auto sm:h-16 md:h-20"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-gold-soft backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
        "Sarasota, FL · Mobile Service"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl", children: [
        "Premium Ceramic Coating & Paint Correction —",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "In Your Driveway" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl", children: "Mobile service across Sarasota, FL. Pro-grade products. Years of detailing expertise. We come to you." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+19412780127",
            className: "inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-base font-semibold text-foreground-deep shadow-lg shadow-black/30 transition-transform hover:scale-[1.02] hover:bg-gold-soft sm:text-lg",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
              "Call (941) 278-0127"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#estimate",
            className: "inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-lg",
            children: "Schedule a Free Paint Inspection"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }),
          /* @__PURE__ */ jsx("span", { children: "5-Star Rated" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden text-white/30 sm:inline", children: "•" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gold" }),
          /* @__PURE__ */ jsx("span", { children: "Mobile Service" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden text-white/30 sm:inline", children: "•" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-gold" }),
          /* @__PURE__ */ jsx("span", { children: "Years of Experience" })
        ] })
      ] })
    ] })
  ] });
}
const items$1 = [
  {
    icon: ShieldCheck,
    title: "Long-Lasting Protection",
    body: "Years of paint shield against UV, contaminants, and minor scratches."
  },
  {
    icon: Sparkles,
    title: "Showroom Shine",
    body: "Deep gloss finish that makes paint look glass-smooth."
  },
  {
    icon: Droplets,
    title: "Easier to Maintain",
    body: "Hydrophobic surface repels water, dirt, and road grime."
  }
];
function Benefits() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Why Ceramic Coating" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "Engineered to outlast wax, sealants, and weekend detailing." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: items$1.map(({ icon: Icon, title, body }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group rounded-xl border border-border bg-card p-8 transition-all hover:border-gold hover:shadow-lg",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold text-foreground", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: body })
        ]
      },
      title
    )) })
  ] }) });
}
const url$4 = "/__l5e/assets-v1/79c4d77a-ab9e-48a9-99b5-76b2cbb3bb38/IMG_8434.jpg";
const beforeAfterImg = {
  url: url$4
};
function PaintCorrection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-navy py-20 text-primary-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Paint Correction" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl md:text-5xl", children: "Restore Your Paint Before We Coat It" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-white/80", children: [
        /* @__PURE__ */ jsx("p", { children: "Paint correction is the critical step before coating. We remove swirl marks, oxidation, light scratches, and water spots — returning your paint to its truest state before sealing it with ceramic." }),
        /* @__PURE__ */ jsx("p", { className: "border-l-2 border-gold pl-4 text-white", children: "Applying coating without correction locks in imperfections forever." }),
        /* @__PURE__ */ jsx("p", { children: "Every job starts with a thorough inspection under proper lighting so we can recommend the exact level of correction your paint needs — nothing more, nothing less." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: beforeAfterImg.url,
          alt: "Real paint correction result on a black vehicle — top half shows swirl marks and oxidation, bottom half shows a deep, mirror-like finish after correction",
          className: "aspect-[4/3] w-full rounded-xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-4 rounded-md bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur", children: "Before" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-4 rounded-md bg-gold px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground-deep", children: "After" })
    ] })
  ] }) });
}
const packages = [
  {
    icon: Shield,
    name: "Essential Protection",
    tagline: "For newer vehicles or paint in good condition.",
    points: [
      "Paint decontamination wash",
      "Light single-stage polish",
      "Professional-grade ceramic protection"
    ]
  },
  {
    icon: Sparkles,
    name: "Paint Correction + Ceramic Coating",
    tagline: "For swirl marks, oxidation, water spots, or dull paint.",
    featured: true,
    points: [
      "Multi-stage decontamination",
      "Machine paint correction",
      "Premium ceramic coating application"
    ]
  },
  {
    icon: Crown,
    name: "Premium Multi-Step + Multi-Layer Coating",
    tagline: "For black vehicles, luxury cars, and high-end finishes.",
    points: [
      "Deep multi-step paint correction",
      "Multiple layers of ceramic coating",
      "Highest-tier protection and gloss"
    ]
  }
];
function Packages() {
  return /* @__PURE__ */ jsx("section", { id: "packages", className: "bg-secondary py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Ceramic Coating Packages" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "Three levels of protection — built around your paint." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Every package starts with a free on-site paint inspection. Final pricing depends on vehicle size and paint condition." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: packages.map(({ icon: Icon, name, tagline, points, featured }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col rounded-xl border bg-card p-8 transition-all ${featured ? "border-gold shadow-xl ring-1 ring-gold/40" : "border-border hover:border-gold"}`,
        children: [
          featured && /* @__PURE__ */ jsx("span", { className: "mb-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground-deep", children: "Most Popular" }),
          /* @__PURE__ */ jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold text-foreground", children: name }),
          /* @__PURE__ */ jsx("p", { className: "mb-5 text-sm text-muted-foreground", children: tagline }),
          /* @__PURE__ */ jsx("ul", { className: "mb-6 flex-1 space-y-2 text-sm text-foreground", children: points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }),
            /* @__PURE__ */ jsx("span", { children: p })
          ] }, p)) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#estimate",
              className: "mt-auto inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-foreground",
              children: "Request a Quote"
            }
          )
        ]
      },
      name
    )) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-8 text-center text-sm text-muted-foreground", children: [
      "Ceramic coating packages typically start at",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "$900+" }),
      " depending on vehicle size, paint condition, and level of correction needed."
    ] })
  ] }) });
}
const steps = [
  { n: "01", title: "Free On-Site Inspection", body: "We come to your location and assess your vehicle's paint condition." },
  { n: "02", title: "Custom Quote", body: "Transparent pricing based on your vehicle's size, condition, and the package you choose." },
  { n: "03", title: "Paint Correction & Prep", body: "Multi-stage polish, decontamination, and surface prep." },
  { n: "04", title: "Ceramic Coating Application", body: "Professional-grade coating, applied in a controlled environment in your garage or carport." }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Our Process" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "Methodical. Mobile. Meticulous." })
    ] }),
    /* @__PURE__ */ jsx("ol", { className: "grid gap-8 md:grid-cols-4 md:gap-6", children: steps.map((s) => /* @__PURE__ */ jsxs("li", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-card font-bold text-foreground", children: s.n }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold text-foreground", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: s.body })
    ] }, s.n)) })
  ] }) });
}
const items = [
  {
    icon: Search,
    title: "We inspect the paint before quoting",
    body: "No guesswork. We assess your paint in person, under proper lighting, before recommending anything."
  },
  {
    icon: Lightbulb,
    title: "We tell you what can and can't be corrected",
    body: "Honest expectations up front — you'll know exactly what the final result will look like before we start."
  },
  {
    icon: Ban,
    title: "We never coat contaminated or damaged paint",
    body: "Applying ceramic over swirls, oxidation, or contamination locks them in forever. We prep it right or we don't coat it."
  },
  {
    icon: Wrench,
    title: "Professional prep, products, and process",
    body: "Proper lighting, machine polishing, full decontamination, and pro-grade coatings — not consumer-grade sprays."
  }
];
function ProperPrep() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Why Proper Prep Matters" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "Ceramic coating is only as good as the prep underneath it." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "A premium service shouldn't feel like a gamble. Here's how we remove the risk before a drop of coating ever touches your paint." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: items.map(({ icon: Icon, title, body }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex gap-4 rounded-xl border border-border bg-card p-6",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gold", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-1.5 text-base font-semibold text-foreground", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: body })
          ] })
        ]
      },
      title
    )) })
  ] }) });
}
const url$3 = "/__l5e/assets-v1/d46d95d5-0dfa-4247-a483-328c03c85f0b/IMG_0731.PNG";
const portrait = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/70f1ea7d-2a28-43dc-8b85-d45e1b8916f1/IMG_0532.PNG";
const detail1 = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/f4b7bd44-1607-40c1-9f51-653608f42852/IMG_6561.jpg";
const detail2 = {
  url: url$1
};
const url = "/__l5e/assets-v1/dcc3b4a2-f73a-4bd5-ae87-fc758d46a45c/IMG_8436.jpg";
const detail3 = {
  url
};
function MeetYan() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: portrait.url,
            alt: "Yan, owner of Car Tech Mobile Detailing, polishing a black SUV in Sarasota",
            className: "aspect-[4/5] w-full rounded-xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -right-4 hidden rounded-lg bg-gold px-4 py-3 text-foreground-deep shadow-xl sm:block", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider", children: "Owner & Lead Detailer" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-bold leading-tight", children: "Yan" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Meet Your Detailer" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "Hi, I'm Yan — owner of Car Tech." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: "I built Car Tech because I was tired of seeing rushed jobs and locked-in imperfections. Every vehicle I work on, I treat like my own — same lighting, same prep, same patience." }),
          /* @__PURE__ */ jsx("p", { children: "When I show up at your driveway, you talk to me — not a call center. I inspect your paint with you, walk you through what it actually needs, and only do the work that's right for your car." })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-8 space-y-3 text-sm text-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gold" }),
            "Based in Sarasota — mobile across the area"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Wrench, { className: "h-4 w-4 text-gold" }),
            "Pro-grade products: Rupes, Koch Chemie, ceramic systems"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-gold" }),
            "Insured, transparent, no upsells"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-3 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: detail1.url,
          alt: "Applying Menzerna polish to a Rupes pad before paint correction",
          className: "aspect-square w-full rounded-lg object-cover ring-1 ring-border",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: detail2.url,
          alt: "Burgundy Corvette being detailed in a Sarasota driveway",
          className: "aspect-square w-full rounded-lg object-cover ring-1 ring-border",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: detail3.url,
          alt: "Close-up of paint correction in progress on a black vehicle roof",
          className: "aspect-square w-full rounded-lg object-cover ring-1 ring-border",
          loading: "lazy"
        }
      )
    ] })
  ] }) });
}
const reviews = [
  { quote: "Yan was professional, on time, and treated my car like his own. The result was incredible.", name: "Mike R.", area: "Sarasota" },
  { quote: "Mobile service made this so easy. They came to my house, did amazing work, and the price was fair.", name: "Sarah L.", area: "Lakewood Ranch" },
  { quote: "Another level of care. I'll be using Car Tech for every vehicle I own going forward.", name: "David T.", area: "Longboat Key" }
];
function Reviews() {
  return /* @__PURE__ */ jsx("section", { className: "bg-secondary py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Social Proof" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "What Sarasota Drivers Are Saying" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: reviews.map((r) => /* @__PURE__ */ jsxs("article", { className: "flex flex-col rounded-xl bg-card p-6 shadow-sm ring-1 ring-border", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "mb-6 flex-1 text-foreground", children: [
        '"',
        r.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: r.name }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: r.area }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsx(BadgeCheck, { className: "h-4 w-4 text-gold" }),
          "Verified Google Review"
        ] })
      ] })
    ] }, r.name)) })
  ] }) });
}
const areas = [
  "Sarasota",
  "Longboat Key",
  "Bird Key",
  "Harbor Acres",
  "Casey Key",
  "Lakewood Ranch",
  "Downtown Sarasota",
  "Osprey",
  "The Oaks Club"
];
function Areas() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Coverage" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "Mobile Service Across the Gulf Coast" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3", children: areas.map((a) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3", children: [
      /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gold" }),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: a })
    ] }, a)) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const faqs = [
  {
    q: "How long does ceramic coating last?",
    a: "Professional-grade ceramic coatings typically last 2 to 5 years depending on the product, vehicle use, and maintenance. We'll recommend the right option for your driving habits."
  },
  {
    q: "Do I need paint correction before ceramic coating?",
    a: "In nearly every case, yes. Applying ceramic coating over uncorrected paint locks in swirl marks, scratches, and oxidation permanently. We always inspect first and recommend correction when needed."
  },
  {
    q: "How long does the service take?",
    a: "Paint correction plus ceramic coating typically takes 1 to 2 full days depending on vehicle size and paint condition. We work at your home or wherever your vehicle is parked."
  },
  {
    q: "What's the price for ceramic coating?",
    a: "Ceramic coating packages typically start at $900+ depending on vehicle size, paint condition, and the level of correction needed. We provide a free on-site paint inspection and transparent quote — no obligation. Call or text us at (941) 278-0127."
  },
  {
    q: "Do you really come to my location?",
    a: "Yes. Car Tech is fully mobile. We bring all equipment, products, and lighting to your driveway, garage, or carport — across Sarasota and surrounding areas."
  }
];
function FAQ() {
  return /* @__PURE__ */ jsx("section", { className: "bg-secondary py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "FAQ" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: "Answers before you call." })
    ] }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxs(
      AccordionItem,
      {
        value: `item-${i}`,
        className: "rounded-lg border border-border bg-card px-5",
        children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-foreground hover:no-underline", children: f.q }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
        ]
      },
      i
    )) })
  ] }) });
}
var createSsrRpc = (functionId) => {
  const url2 = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url: url2,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const EstimateSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  email: z.string().email().max(200).optional().or(z.literal("")),
  vehicle: z.string().min(1).max(300),
  service: z.string().max(100).optional().or(z.literal("")),
  goal: z.string().max(200).optional().or(z.literal("")),
  timeline: z.string().max(100).optional().or(z.literal("")),
  address: z.string().min(1).max(500),
  message: z.string().max(2e3).optional().or(z.literal("")),
  gclid: z.string().max(200).optional().or(z.literal(""))
});
const sendEstimate = createServerFn({
  method: "POST"
}).inputValidator((data) => EstimateSchema.parse(data)).handler(createSsrRpc("ed691c89cfa336051bf83f7d2c9e3ce37150b416e3cc7f6541014c5114529492"));
function EstimateForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const gclidRef = useRef("");
  const send = useServerFn(sendEstimate);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid") || sessionStorage.getItem("gclid") || "";
    if (gclid) sessionStorage.setItem("gclid", gclid);
    gclidRef.current = gclid;
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const payload = Object.fromEntries(formData.entries());
    try {
      await send({
        data: {
          name: payload.name ?? "",
          phone: payload.phone ?? "",
          email: payload.email ?? "",
          vehicle: payload.vehicle ?? "",
          service: payload.service ?? "",
          goal: payload.goal ?? "",
          timeline: payload.timeline ?? "",
          address: payload.address ?? "",
          message: payload.message ?? "",
          gclid: gclidRef.current
        }
      });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "submit_success",
        form_name: "ceramic_coating_lp"
      });
      setStatus("success");
      formEl.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Algo deu errado. Por favor, ligue para (941) 278-0127.");
    }
  }
  const inputClass = "w-full rounded-md border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40";
  return /* @__PURE__ */ jsx("section", { id: "estimate", className: "bg-navy py-20 text-primary-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-gold", children: "Free Paint Inspection" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl md:text-5xl", children: "Schedule a Free Paint Inspection" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/80", children: "We come on-site, inspect your paint under proper lighting, and give you a transparent quote — no obligation. Packages typically start at $900+." })
    ] }),
    status === "success" ? /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-8 text-center text-foreground shadow-xl", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "mx-auto mb-4 h-12 w-12 text-gold" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl font-bold text-foreground", children: "Request received." }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-muted-foreground", children: "We'll be in touch shortly. For urgent requests, call us directly." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:+19412780127",
          className: "inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-semibold text-foreground-deep hover:bg-gold-soft",
          children: "Call (941) 278-0127"
        }
      )
    ] }) : /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "space-y-4 rounded-xl bg-card p-6 text-foreground shadow-xl sm:p-8",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Name *" }),
              /* @__PURE__ */ jsx("input", { required: true, name: "name", className: inputClass })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Phone *" }),
              /* @__PURE__ */ jsx("input", { required: true, name: "phone", type: "tel", className: inputClass })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Email" }),
            /* @__PURE__ */ jsx("input", { name: "email", type: "email", className: inputClass })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Vehicle (Year, Make, Model) *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                name: "vehicle",
                placeholder: "2023 Porsche 911",
                className: inputClass
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Service Interest" }),
              /* @__PURE__ */ jsxs("select", { name: "service", className: inputClass, defaultValue: "Ceramic Coating", children: [
                /* @__PURE__ */ jsx("option", { children: "Ceramic Coating" }),
                /* @__PURE__ */ jsx("option", { children: "Paint Correction" }),
                /* @__PURE__ */ jsx("option", { children: "Both" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Address or ZIP *" }),
              /* @__PURE__ */ jsx("input", { required: true, name: "address", className: inputClass })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Main goal" }),
              /* @__PURE__ */ jsxs("select", { name: "goal", className: inputClass, defaultValue: "Long-term paint protection", children: [
                /* @__PURE__ */ jsx("option", { children: "Long-term paint protection" }),
                /* @__PURE__ */ jsx("option", { children: "Restore shine & remove swirl marks" }),
                /* @__PURE__ */ jsx("option", { children: "Protect a new vehicle" }),
                /* @__PURE__ */ jsx("option", { children: "Make maintenance easier" }),
                /* @__PURE__ */ jsx("option", { children: "Not sure yet" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Timeline" }),
              /* @__PURE__ */ jsxs("select", { name: "timeline", className: inputClass, defaultValue: "This week", children: [
                /* @__PURE__ */ jsx("option", { children: "As soon as possible" }),
                /* @__PURE__ */ jsx("option", { children: "This week" }),
                /* @__PURE__ */ jsx("option", { children: "This month" }),
                /* @__PURE__ */ jsx("option", { children: "Just researching" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium text-foreground", children: "Message" }),
            /* @__PURE__ */ jsx("textarea", { name: "message", rows: 3, className: inputClass })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: status === "submitting",
              className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-base font-bold text-foreground-deep transition-colors hover:bg-gold-soft disabled:opacity-60",
              children: status === "submitting" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }),
                " Sending…"
              ] }) : "Schedule My Free Paint Inspection"
            }
          ),
          status === "error" && /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-destructive", children: errorMsg }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2 pt-2 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:+19412780127",
                className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold",
                children: "Call (941) 278-0127"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "sms:+19412780127?&body=Hi%20Yan%2C%20I%27d%20like%20a%20ceramic%20coating%20quote.",
                className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold",
                children: "Text Yan for a Quote"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Prefer messaging? Text us — most replies within the hour." })
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-navy-deep py-12 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: "Car Tech Mobile Detailing" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/60", children: "Sarasota, FL" }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "tel:+19412780127",
          className: "mt-4 inline-flex items-center gap-2 text-gold hover:text-gold-soft",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            "(941) 278-0127"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 text-sm font-semibold uppercase tracking-wider text-gold", children: "Service Area" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-white/70", children: "Sarasota · Longboat Key · Bird Key · Harbor Acres · Casey Key · Lakewood Ranch · Downtown Sarasota · Osprey · The Oaks Club" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:text-right", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://cartechmobiledetailing.com",
          className: "text-sm text-white/70 hover:text-gold",
          children: "cartechmobiledetailing.com"
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs text-white/50", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Car Tech Mobile Detailing. All rights reserved."
      ] })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(StickyHeader, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Benefits, {}),
    /* @__PURE__ */ jsx(PaintCorrection, {}),
    /* @__PURE__ */ jsx(Packages, {}),
    /* @__PURE__ */ jsx(ProperPrep, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(MeetYan, {}),
    /* @__PURE__ */ jsx(Reviews, {}),
    /* @__PURE__ */ jsx(Areas, {}),
    /* @__PURE__ */ jsx(FAQ, {}),
    /* @__PURE__ */ jsx(EstimateForm, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
