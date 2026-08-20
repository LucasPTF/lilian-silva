const fs = require("node:fs");
const path = require("node:path");
const { angles } = require("../src/content.cjs");
const { salesPage, thankYouPage } = require("../src/render.cjs");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "assets"), { recursive: true });

for (const [route, angle] of Object.entries(angles)) {
  const routeDir = path.join(dist, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), salesPage(angle, `/${route}`), "utf8");
}

const thankDir = path.join(dist, "obrigado");
fs.mkdirSync(thankDir, { recursive: true });
fs.writeFileSync(path.join(thankDir, "index.html"), thankYouPage(), "utf8");

const rootHtml = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=/a1"><title>Lilian Silva</title></head><body><p><a href="/a1">Abrir a página do guia</a></p></body></html>`;
fs.writeFileSync(path.join(dist, "index.html"), rootHtml, "utf8");

fs.copyFileSync(path.join(root, "src", "styles.css"), path.join(dist, "assets", "styles.css"));
for (const file of fs.readdirSync(path.join(root, "src", "assets"))) {
  fs.copyFileSync(path.join(root, "src", "assets", file), path.join(dist, "assets", file));
}

console.log("Site compilado em dist com as rotas /a1, /a2, /a3 e /obrigado.");
