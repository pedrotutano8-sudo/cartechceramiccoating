import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-6hdNdPm7.js";
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
const SPREADSHEET_ID = "1LbTWDEb32TOkNeS9Dsr8LKOahPuJV047R2uh8nj8Ems";
const SHEET_NAME = "Página1";
async function getAccessToken() {
  const credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
  };
  const now = Math.floor(Date.now() / 1e3);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const signingInput = `${encode(header)}.${encode(payload)}`;
  const keyData = credentials.private_key.replace("-----BEGIN PRIVATE KEY-----", "").replace("-----END PRIVATE KEY-----", "").replace(/\s/g, "");
  const binaryKey = Buffer.from(keyData, "base64");
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    Buffer.from(signingInput)
  );
  const jwt = `${signingInput}.${Buffer.from(signature).toString("base64url")}`;
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt
    })
  });
  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}
async function appendLeadToSheet(lead) {
  try {
    console.log("[Sheets] Iniciando append para lead:", lead.name);
    console.log("[Sheets] GOOGLE_CLIENT_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL ? "OK" : "MISSING");
    console.log("[Sheets] GOOGLE_PRIVATE_KEY:", process.env.GOOGLE_PRIVATE_KEY ? "OK" : "MISSING");
    const token = await getAccessToken();
    console.log("[Sheets] Token obtido com sucesso");
    const date = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/New_York" });
    const values = [[
      date,
      lead.name,
      lead.phone,
      lead.email || "-",
      lead.vehicle,
      lead.service || "-",
      lead.address,
      lead.gclid || "-",
      "Lead"
    ]];
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:I:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ values })
      }
    );
    if (!res.ok) {
      const err = await res.text();
      console.error("[Sheets] Erro ao salvar:", res.status, err);
    } else {
      console.log("[Sheets] Lead salvo com sucesso!");
    }
  } catch (err) {
    console.error("[Sheets] Exceção:", err);
  }
}
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
  await appendLeadToSheet({
    name: data.name,
    phone: data.phone,
    email: data.email || "",
    vehicle: data.vehicle,
    service: data.service || "",
    address: data.address,
    gclid: data.gclid || ""
  });
  return {
    success: true
  };
});
export {
  sendEstimate_createServerFn_handler
};
