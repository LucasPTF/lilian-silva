const fs = require("node:fs");
const path = require("node:path");
const { angles, checkoutUrl } = require("../src/content.cjs");

const root = path.resolve(__dirname, "..");
const required = ["a1/index.html", "a2/index.html", "a3/index.html", "obrigado/index.html"];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

for (const file of required) {
  const fullPath = path.join(root, "dist", file);
  if (!fs.existsSync(fullPath)) fail(`Rota ausente: ${file}`);
}

const sales = Object.keys(angles).map((route) => fs.readFileSync(path.join(root, "dist", route, "index.html"), "utf8"));
for (const [index, html] of sales.entries()) {
  if (!html.includes(checkoutUrl)) fail(`Checkout ausente em a${index + 1}`);
  if (!html.includes("R$ 29,90")) fail(`Preço ausente em a${index + 1}`);
  if (!html.includes("Garantia de 7 dias")) fail(`Garantia ausente em a${index + 1}`);
  if (/Ângulo A[123]/i.test(html)) fail(`Identificação de ângulo ainda presente em a${index + 1}`);
}

const normalized = sales.map((html) => html
  .replaceAll(angles.a1.title, "ANGLE_TITLE").replaceAll(angles.a2.title, "ANGLE_TITLE").replaceAll(angles.a3.title, "ANGLE_TITLE")
  .replaceAll(angles.a1.support, "ANGLE_SUPPORT").replaceAll(angles.a2.support, "ANGLE_SUPPORT").replaceAll(angles.a3.support, "ANGLE_SUPPORT")
  .replaceAll(angles.a1.cta, "ANGLE_CTA").replaceAll(angles.a2.cta, "ANGLE_CTA").replaceAll(angles.a3.cta, "ANGLE_CTA")
  .replaceAll("/a1", "/ANGLE").replaceAll("/a2", "/ANGLE").replaceAll("/a3", "/ANGLE")
);
if (!(normalized[0] === normalized[1] && normalized[1] === normalized[2])) fail("As páginas de venda diferem fora da hero.");

const filesToScan = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else filesToScan.push(full);
  }
}
walk(root);
for (const file of filesToScan) {
  if (![".html", ".css", ".js", ".cjs", ".json", ".md", ".txt"].includes(path.extname(file))) continue;
  const buffer = fs.readFileSync(file);
  if (buffer.includes(Buffer.from([0xe2, 0x80, 0x93])) || buffer.includes(Buffer.from([0xe2, 0x80, 0x94]))) {
    fail(`Caractere proibido encontrado em ${path.relative(root, file)}`);
  }
}

if (!process.exitCode) console.log("Validação concluída. Rotas, oferta, igualdade estrutural e caracteres estão corretos.");
