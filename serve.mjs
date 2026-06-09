import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

import handler from "./dist/server/server.js";

const PORT = process.env.PORT || 3000;
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const clientDir = join(__dirname, "dist/client");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
};

function toWebRequest(req) {
  const proto = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = `${proto}://${host}${req.url}`;

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v) headers.set(k, Array.isArray(v) ? v.join(", ") : v);
  }

  if (req.method === "GET" || req.method === "HEAD") {
    return Promise.resolve(new Request(url, { method: req.method, headers }));
  }

  return new Promise((resolve) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () =>
      resolve(new Request(url, { method: req.method, headers, body: Buffer.concat(chunks) }))
    );
  });
}

const server = createServer(async (req, res) => {
  const urlPath = req.url.split("?")[0];
  const filePath = join(clientDir, urlPath === "/" ? "index.html" : urlPath);

  if (urlPath !== "/" && existsSync(filePath) && statSync(filePath).isFile()) {
    const mime = MIME[extname(filePath)] || "application/octet-stream";
    res.setHeader("Content-Type", mime);
    if (extname(filePath) === ".js" || extname(filePath) === ".css") {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
    createReadStream(filePath).pipe(res);
    return;
  }

  // Proxy Lovable CDN assets
  if (urlPath.startsWith("/__l5e/")) {
    try {
      const cdnUrl = `https://car-tech-magic.lovable.app${req.url}`;
      const cdnRes = await fetch(cdnUrl);
      res.statusCode = cdnRes.status;
      cdnRes.headers.forEach((v, k) => res.setHeader(k, v));
      const buf = await cdnRes.arrayBuffer();
      res.end(Buffer.from(buf));
    } catch (err) {
      console.error("CDN proxy error:", err);
      res.statusCode = 502;
      res.end("CDN proxy error");
    }
    return;
  }

  try {
    const webReq = await toWebRequest(req);
    const webRes = await handler.fetch(webReq, process.env, {});

    res.statusCode = webRes.status;
    webRes.headers.forEach((v, k) => res.setHeader(k, v));

    const body = await webRes.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
