// service-worker.js — gerado pelo Mini SK em 18/11/2026, 18:46:46
// Não precisa mexer: ele guarda sozinho o que o app usa.
const PREFIXO = 'sk-meu-chat-';
const CACHE = PREFIXO + 'mwmnir03';
// Lista feita automaticamente (para funcionar sem internet logo após instalar)
const GUARDAR = [
  "./",
  "./css/app.css",
  "./docs/cacabug.md",
  "./docs/laboratorio.md",
  "./docs/meuchat.md",
  "./docs/minisk.md",
  "./docs/sk-juridico-html.md",
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
  "./js/00-base.js",
  "./js/10-banco.js",
  "./js/12-nuvem.js",
  "./js/14-entrada.js",
  "./js/20-provedores.js",
  "./js/30-memoria.js",
  "./js/33-contextos.js",
  "./js/34-guia.js",
  "./js/35-jeito.js",
  "./js/36-gasto.js",
  "./js/37-arquivos.js",
  "./js/38-codigos.js",
  "./js/39-qr.js",
  "./js/40-voz.js",
  "./js/41-pronto.js",
  "./js/42-testar.js",
  "./js/43-links.js",
  "./js/44-docs.js",
  "./js/45-mesa.js",
  "./js/50-internet.js",
  "./js/60-previa.js",
  "./js/70-texto.js",
  "./js/80-chat.js",
  "./js/85-config.js",
  "./js/87-cofre.js",
  "./js/90-backup.js",
  "./js/95-ponte-lab.js",
  "./js/99-app.js",
  "./js/lib/cofre-arquivo.js",
  "./js/lib/guia-maikon.js",
  "./js/lib/guia-versoes.js",
  "./js/lib/jszip.min.js",
  "./js/lib/nuvem-neon.js",
  "./js/nuvem-embutida.js",
  "./LEIA-ME.txt",
  "./manifest.json",
  "./README.md",
  "./sw.js"
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
