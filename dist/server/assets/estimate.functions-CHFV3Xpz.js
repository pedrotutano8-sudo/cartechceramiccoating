import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-UXsNc_XW.js";
import { z } from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
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
  message: z.string().max(2e3).optional().or(z.literal(""))
});
const TO_EMAIL = "detailingcartech@gmail.com";
const sendEstimate_createServerFn_handler = createServerRpc({
  id: "ed691c89cfa336051bf83f7d2c9e3ce37150b416e3cc7f6541014c5114529492",
  name: "sendEstimate",
  filename: "src/lib/estimate.functions.ts"
}, (opts) => sendEstimate.__executeServer(opts));
const sendEstimate = createServerFn({
  method: "POST"
}).inputValidator((data) => EstimateSchema.parse(data)).handler(sendEstimate_createServerFn_handler, async ({
  data
}) => {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    throw new Error("Email service not configured");
  }
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
      "X-Connection-Api-Key": RESEND_API_KEY
    },
    body: JSON.stringify({
      from: "CarTech Website <onboarding@resend.dev>",
      to: [TO_EMAIL],
      reply_to: data.email || void 0,
      subject: `Novo orçamento: ${data.name} - ${data.vehicle}`,
      html
    })
  });
  if (!res.ok) {
    const errBody = await res.text();
    console.error("Resend error:", res.status, errBody);
    throw new Error(`Failed to send email (${res.status})`);
  }
  return {
    success: true
  };
});
export {
  sendEstimate_createServerFn_handler
};
