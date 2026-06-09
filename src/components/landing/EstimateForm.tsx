import { useState, useEffect, useRef, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { sendEstimate } from "@/lib/estimate.functions";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const gclidRef = useRef("");
  const send = useServerFn(sendEstimate);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid") || sessionStorage.getItem("gclid") || "";
    if (gclid) sessionStorage.setItem("gclid", gclid);
    gclidRef.current = gclid;
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

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
          gclid: gclidRef.current,
        },
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "submit_success",
        form_name: "ceramic_coating_lp",
      });

      setStatus("success");
      formEl.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Algo deu errado. Por favor, ligue para (941) 278-0127.");
    }
  }

  const inputClass =
    "w-full rounded-md border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40";

  return (
    <section id="estimate" className="bg-navy py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Free Paint Inspection
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Schedule a Free Paint Inspection
          </h2>
          <p className="mt-4 text-white/80">
            We come on-site, inspect your paint under proper lighting, and give you a
            transparent quote — no obligation. Packages typically start at $900+.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-xl bg-card p-8 text-center text-foreground shadow-xl">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-gold" />
            <h3 className="mb-2 text-2xl font-bold text-foreground">Request received.</h3>
            <p className="mb-6 text-muted-foreground">
              We'll be in touch shortly. For urgent requests, call us directly.
            </p>
            <a
              href="tel:+19412780127"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-semibold text-foreground-deep hover:bg-gold-soft"
            >
              Call (941) 278-0127
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl bg-card p-6 text-foreground shadow-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
                <input required name="name" className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Phone *</label>
                <input required name="phone" type="tel" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input name="email" type="email" className={inputClass} />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Vehicle (Year, Make, Model) *
              </label>
              <input
                required
                name="vehicle"
                placeholder="2023 Porsche 911"
                className={inputClass}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Service Interest
                </label>
                <select name="service" className={inputClass} defaultValue="Ceramic Coating">
                  <option>Ceramic Coating</option>
                  <option>Paint Correction</option>
                  <option>Both</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Address or ZIP *
                </label>
                <input required name="address" className={inputClass} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Main goal
                </label>
                <select name="goal" className={inputClass} defaultValue="Long-term paint protection">
                  <option>Long-term paint protection</option>
                  <option>Restore shine & remove swirl marks</option>
                  <option>Protect a new vehicle</option>
                  <option>Make maintenance easier</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Timeline
                </label>
                <select name="timeline" className={inputClass} defaultValue="This week">
                  <option>As soon as possible</option>
                  <option>This week</option>
                  <option>This month</option>
                  <option>Just researching</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <textarea name="message" rows={3} className={inputClass} />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-base font-bold text-foreground-deep transition-colors hover:bg-gold-soft disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                </>
              ) : (
                "Schedule My Free Paint Inspection"
              )}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-destructive">{errorMsg}</p>
            )}

            <div className="grid gap-2 pt-2 sm:grid-cols-2">
              <a
                href="tel:+19412780127"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold"
              >
                Call (941) 278-0127
              </a>
              <a
                href="sms:+19412780127?&body=Hi%20Yan%2C%20I%27d%20like%20a%20ceramic%20coating%20quote."
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold"
              >
                Text Yan for a Quote
              </a>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Prefer messaging? Text us — most replies within the hour.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
