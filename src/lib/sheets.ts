const SPREADSHEET_ID = "1LbTWDEb32TOkNeS9Dsr8LKOahPuJV047R2uh8nj8Ems";
const SHEET_NAME = "Página1";

async function getAccessToken(): Promise<string> {
  const credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  };

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj: object) =>
    Buffer.from(JSON.stringify(obj)).toString("base64url");

  const signingInput = `${encode(header)}.${encode(payload)}`;

  // Import private key
  const keyData = credentials.private_key
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");

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
      assertion: jwt,
    }),
  });

  const tokenData = (await tokenRes.json()) as { access_token: string };
  return tokenData.access_token;
}

export async function appendLeadToSheet(lead: {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  address: string;
  gclid: string;
}) {
  try {
    console.log("[Sheets] Iniciando append para lead:", lead.name);
    console.log("[Sheets] GOOGLE_CLIENT_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL ? "OK" : "MISSING");
    console.log("[Sheets] GOOGLE_PRIVATE_KEY:", process.env.GOOGLE_PRIVATE_KEY ? "OK" : "MISSING");
    const token = await getAccessToken();
    console.log("[Sheets] Token obtido com sucesso");
    const date = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

    const values = [[
      date,
      lead.name,
      lead.phone,
      lead.email || "-",
      lead.vehicle,
      lead.service || "-",
      lead.address,
      lead.gclid || "-",
      "Lead",
    ]];

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:I:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
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
