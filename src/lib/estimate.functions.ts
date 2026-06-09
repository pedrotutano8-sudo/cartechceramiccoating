import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { appendLeadToSheet } from "./sheets";

const EstimateSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  email: z.string().email().max(200).optional().or(z.literal("")),
  vehicle: z.string().min(1).max(300),
  service: z.string().max(100).optional().or(z.literal("")),
  goal: z.string().max(200).optional().or(z.literal("")),
  timeline: z.string().max(100).optional().or(z.literal("")),
  address: z.string().min(1).max(500),
  message: z.string().max(2000).optional().or(z.literal("")),
  gclid: z.string().max(200).optional().or(z.literal("")),
});

const TO_EMAIL = "detailingcartech@gmail.com";

export const sendEstimate = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => EstimateSchema.parse(data))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error("Email service not configured");
    }

    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `
      <h2>Novo pedido de or&ccedil;amento - CarTech</h2>
      <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
        <tr><td><b>Nome:</b></td><td>${esc(data.name)}</td></tr>
        <tr><td><b>Telefone:</b></td><td>${esc(data.phone)}</td></tr>
        <tr><td><b>E-mail:</b></td><td>${esc(data.email || "-")}</td></tr>
        <tr><td><b>Ve&iacute;culo:</b></td><td>${esc(data.vehicle)}</td></tr>
        <tr><td><b>Servi&ccedil;o:</b></td><td>${esc(data.service || "-")}</td></tr>
        <tr><td><b>Objetivo:</b></td><td>${esc(data.goal || "-")}</td></tr>
        <tr><td><b>Prazo:</b></td><td>${esc(data.timeline || "-")}</td></tr>
        <tr><td><b>Endere&ccedil;o/CEP:</b></td><td>${esc(data.address)}</td></tr>
        <tr><td valign="top"><b>Mensagem:</b></td><td>${esc(data.message || "-")}</td></tr>
      </table>
    `;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "CarTech Website <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: data.email || undefined,
        subject: `Novo orçamento: ${data.name} - ${data.vehicle}`,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Resend error:", res.status, errBody);
      throw new Error(`Failed to send email (${res.status})`);
    }

    // Salvar lead no Google Sheets (não bloqueia se falhar)
    await appendLeadToSheet({
      name: data.name,
      phone: data.phone,
      email: data.email || "",
      vehicle: data.vehicle,
      service: data.service || "",
      address: data.address,
      gclid: data.gclid || "",
    });

    return { success: true };
  });
