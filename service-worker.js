// service-worker.js — gerado pelo Mini SK em 18/11/2026, 18:47:00
// Não precisa mexer: ele guarda sozinho o que o app usa.
const PREFIXO = 'sk-meuchat-pc-';
const CACHE = PREFIXO + 'mwmnj1wm';
// Lista feita automaticamente (para funcionar sem internet logo após instalar)
const GUARDAR = [
  "./",
  "./app/css/app.css",
  "./app/docs/cacabug.md",
  "./app/docs/laboratorio.md",
  "./app/docs/meuchat.md",
  "./app/docs/minisk.md",
  "./app/docs/sk-juridico-html.md",
  "./app/favicon.ico",
  "./app/icons/apple-touch-icon.png",
  "./app/icons/icon-16.png",
  "./app/icons/icon-32.png",
  "./app/icons/icon-48.png",
  "./app/icons/icon-72.png",
  "./app/icons/icon-96.png",
  "./app/icons/icon-128.png",
  "./app/icons/icon-144.png",
  "./app/icons/icon-152.png",
  "./app/icons/icon-180.png",
  "./app/icons/icon-192.png",
  "./app/icons/icon-384.png",
  "./app/icons/icon-512.png",
  "./app/icons/icon.svg",
  "./app/icons/maskable-192.png",
  "./app/icons/maskable-512.png",
  "./app/icons/maskable.svg",
  "./app/index.html",
  "./app/js/00-base.js",
  "./app/js/10-banco.js",
  "./app/js/12-nuvem.js",
  "./app/js/14-entrada.js",
  "./app/js/20-provedores.js",
  "./app/js/30-memoria.js",
  "./app/js/33-contextos.js",
  "./app/js/34-guia.js",
  "./app/js/35-jeito.js",
  "./app/js/36-gasto.js",
  "./app/js/37-arquivos.js",
  "./app/js/38-codigos.js",
  "./app/js/39-qr.js",
  "./app/js/40-voz.js",
  "./app/js/41-pronto.js",
  "./app/js/42-testar.js",
  "./app/js/43-links.js",
  "./app/js/44-docs.js",
  "./app/js/45-mesa.js",
  "./app/js/50-internet.js",
  "./app/js/60-previa.js",
  "./app/js/70-texto.js",
  "./app/js/80-chat.js",
  "./app/js/85-config.js",
  "./app/js/87-cofre.js",
  "./app/js/90-backup.js",
  "./app/js/95-ponte-lab.js",
  "./app/js/99-app.js",
  "./app/js/lib/cofre-arquivo.js",
  "./app/js/lib/guia-maikon.js",
  "./app/js/lib/guia-versoes.js",
  "./app/js/lib/jszip.min.js",
  "./app/js/lib/nuvem-neon.js",
  "./app/js/nuvem-embutida.js",
  "./app/LEIA-ME.txt",
  "./app/manifest.json",
  "./app/README.md",
  "./app/service-worker.js",
  "./app/sw.js",
  "./electron/instalar.nsh",
  "./electron/main.cjs",
  "./electron/navegador.html",
  "./electron/ponte.cjs",
  "./electron/preload-nav.cjs",
  "./electron/preload.cjs",
  "./electron/saude.cjs",
  "./electron/terminal.cjs",
  "./electron/voz.cjs",
  "./favicon.ico",
  "./icons/apple-touch-icon.png",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/maskable.svg",
  "./index.html",
  "./LEIA-ME.md",
  "./manifest.json",
  "./package.json",
  "./PLANO.md",
  "./RECEITA.md"
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(GUARDAR.map((u) => c.add(u).catch(() => null)))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primeiro a internet (sempre a versão nova); sem internet, a cópia guardada.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }
      // Igual ao Workbox da Replit: página que não existe (rota do app) abre o index
      if (res.status === 404 && req.mode === 'navigate') return caches.match('./').then((r) => r || fetch('./'));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});
