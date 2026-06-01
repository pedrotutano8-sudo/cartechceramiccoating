import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

// TODO: Replace with your real webhook endpoint.
const WEBHOOK_URL = "https://example.com/webhook/placeholder";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, form_name: "ceramic_coating_lp" }),
        mode: "no-cors",
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "submit_success",
        form_name: "ceramic_coating_lp",
      });

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please call (941) 278-0127.");
    }
  }

  const inputClass =
    "w-full rounded-md border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40";

  return (
    <section id="estimate" className="bg-navy py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Free Estimate
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Protect Your Investment?
          </h2>
          <p className="mt-4 text-white/80">
            Get a free, no-obligation on-site inspection and quote.
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
                <select name="service" className={inputClass} defaultValue="Not sure">
                  <option>Ceramic Coating</option>
                  <option>Paint Correction</option>
                  <option>Both</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Address or ZIP *
                </label>
                <input required name="address" className={inputClass} />
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
                "Request Free Estimate"
              )}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-destructive">{errorMsg}</p>
            )}

            <p className="pt-2 text-center text-sm text-muted-foreground">
              Or call{" "}
              <a href="tel:+19412780127" className="font-semibold text-foreground underline">
                (941) 278-0127
              </a>{" "}
              — ask for Yan
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
