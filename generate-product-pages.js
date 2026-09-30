/* ═══════════════════════════════════════════════════════════════════
   GENERADOR DE PÁGINAS POR PRODUCTO — Florería María Lidia
   ─────────────────────────────────────────────────────────────────
   Se ejecuta SOLO en el build de Vercel (buildCommand en vercel.json).
   Lee js/catalogo.json y genera una página liviana por producto en
   /p/<id>.html, con Open Graph propio (foto real del producto) para
   que la vista previa de WhatsApp muestre la foto correcta.

   No hace falta correrlo a mano ni tocarlo: cada vez que editás
   catalogo.json y subís el cambio, Vercel lo vuelve a generar solo.
   ═══════════════════════════════════════════════════════════════════ */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const catalogo = JSON.parse(fs.readFileSync(path.join(ROOT, "js/catalogo.json"), "utf-8"));

const SITIO = catalogo.sitio.replace(/\/$/, "");

function stripTags(s) {
  return String(s).replace(/<[^>]+>/g, "");
}
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function template({ title, desc, shareUrl, imageUrl, alt, redirectUrl, name }) {
  return `<!doctype html>
<html lang="es-AR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${shareUrl}">
<meta name="robots" content="noindex, follow">

<meta property="og:type" content="website">
<meta property="og:url" content="${shareUrl}">
<meta property="og:site_name" content="Florería María Lidia">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:locale" content="es_AR">
<meta property="og:image" content="${imageUrl}">
<meta property="og:image:alt" content="${alt}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${imageUrl}">

<link rel="icon" href="/favicon.ico">
<style>
  body{font-family:-apple-system,system-ui,sans-serif;background:#faf8f5;color:#3a352f;
       display:flex;min-height:100vh;align-items:center;justify-content:center;
       margin:0;padding:24px;text-align:center}
  a{color:#7a8d6f;font-weight:600}
  img{max-width:280px;border-radius:12px;margin-bottom:16px}
</style>
<!-- OJO: a propósito NO hay <meta http-equiv="refresh">. El rastreador de
     WhatsApp/Facebook sigue ese tipo de redirección antes de leer el Open
     Graph y termina tomando la foto genérica de productos.html. La
     redirección va SOLO por JS (no la ejecutan los rastreadores, pero sí
     cualquier navegador real, y es instantánea). -->
<script>location.replace("${redirectUrl}");</script>
</head>
<body>
  <div>
    <img src="${imageUrl}" alt="${alt}">
    <p>Redirigiendo a <strong>${name}</strong>…</p>
    <p><a href="${redirectUrl}">Tocá acá si no redirige automáticamente</a></p>
  </div>
</body>
</html>
`;
}

const outDir = path.join(ROOT, "p");
fs.mkdirSync(outDir, { recursive: true });

// Limpia páginas viejas de productos que ya no existen (renombrados/eliminados)
for (const f of fs.readdirSync(outDir)) {
  if (f.endsWith(".html")) fs.unlinkSync(path.join(outDir, f));
}

let count = 0;
for (const p of catalogo.productos) {
  if (!p.id) {
    console.warn(`[generate-product-pages] Producto sin "id", se omite: ${p.name}`);
    continue;
  }
  const img = p.cover || p.imgs[0];
  const imageUrl = `${SITIO}/${img}`;
  const desc = esc(stripTags(p.desc));
  const name = esc(p.name);
  const title = `${name} — Florería María Lidia`;
  const alt = esc(p.alt || p.name);
  const shareUrl = `${SITIO}/p/${p.id}`;
  const redirectUrl = `${SITIO}/productos.html?p=${encodeURIComponent(p.id)}#${p.cat}`;

  const html = template({ title, desc, shareUrl, imageUrl, alt, redirectUrl, name });
  fs.writeFileSync(path.join(outDir, `${p.id}.html`), html, "utf-8");
  count++;
}

console.log(`[generate-product-pages] ${count} páginas generadas en /p`);
