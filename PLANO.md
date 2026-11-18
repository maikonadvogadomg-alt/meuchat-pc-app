# 📋 Plano do projeto: meuchat-pc

_Gerado em 18/11/2026, 18:46:10 — sem IA, lendo os arquivos._

## 📊 Visão geral
| Item | Valor |
|---|---|
| Arquivos | 59 |
| Linhas | 5.022 |
| Telas/páginas | 2 |
| Rotas do backend | 0 |
| Chamadas do app | 0 |
| Tabelas do banco | 0 |
| Variáveis de ambiente | 6 |

**Linguagens:** JavaScript (42), Markdown (7), Imagem (2), HTML (2), Outros (2), JSON (2), YAML (1), CSS (1)

## 💡 O que fazer (em ordem)
1. 🧹 Tirar a Replit de 4 arquivo(s) (🏗️ Preparar → Fazer tudo)
2. 🔐 Criar um .env.example com: DADOS_EM, LOCALAPPDATA, PONTE_BASE, PONTE_CODIGO, PONTE_PORTA, TESTE_SAIR (os valores você coloca no servidor, nunca no código)
3. 🚫 Criar .gitignore (não mandar node_modules ao GitHub)

## 🚀 Por onde começa
- `app/index.html`

## ⌨️ Comandos (package.json)
| Pasta | Comando | O que roda |
|---|---|---|
| . | `npm run programa` | `electron .` |
| . | `npm run exe` | `electron-builder --win nsis portable --x64 --publish never` |

## 📱 Telas e páginas
| Endereço | Arquivo |
|---|---|
| `app/index.html` | app/index.html |
| `electron/navegador.html` | electron/navegador.html |

## 🖥️ Rotas do backend
_Nenhum encontrado._

## 📡 O que o app pede ao servidor
_Nenhum encontrado._

## 🔌 O que falta no backend
✅ Tudo que o app chama tem rota no projeto (ou o app não usa servidor).

## 🗄️ Banco de dados
_Nenhuma tabela encontrada._

## 🔐 Variáveis de ambiente (configurar no servidor)
- `DADOS_EM`
- `LOCALAPPDATA`
- `PONTE_BASE`
- `PONTE_CODIGO`
- `PONTE_PORTA`
- `TESTE_SAIR`

_Só os nomes. Os valores (chaves, senhas) nunca vão no código nem no GitHub._

## 🤖 IA usada
- generativelanguage.googleapis.com
- api.groq.com
- console.groq.com
- openrouter.ai
- api.openai.com
- platform.openai.com
- api.anthropic.com
- console.anthropic.com

## 🌐 Serviços de fora que ele acessa
- abcdxyz.supabase.co
- aistudio.google.com
- api-dashboard.search.brave.com
- api.anthropic.com
- api.deepseek.com
- api.github.com
- api.groq.com
- api.openai.com
- api.perplexity.ai
- api.search.brave.com
- api.tavily.com
- app.tavily.com
- cdn.jsdelivr.net
- cdn.tailwindcss.com
- console.anthropic.com
- console.groq.com
- generativelanguage.googleapis.com
- github.com
- google.serper.dev
- meuchat.local
- ollama.com
- openrouter.ai
- platform.deepseek.com
- platform.openai.com
- r.jina.ai
- raw.github.com
- raw.githubusercontent.com
- serper.dev
- stuartk.com
- stuk.github.io
- unpkg.com
- www.perplexity.ai
- xxxx.supabase.co

## 📦 Peças principais (dependências)
`msedge-tts` · `ws`

## 🧹 Arquivos com coisa da Replit
- app/js/14-entrada.js
- app/js/33-contextos.js
- app/js/lib/guia-maikon.js
- app/js/lib/guia-versoes.js

## 🔁 Roteiro para recriar fora da Replit
1. Importar o projeto no Mini SK e tocar em 🏗️ Preparar → ✅ Fazer tudo (tira a Replit, cria os arquivos que faltam).
2. Não tem backend: o site sozinho basta (Netlify ou GitHub Pages).
3. Variáveis: cadastrar 6 variável(is) no servidor (lista acima).
4. Testar a prévia; se der erro, 🤖 Mandar os erros para a IA.
5. App: 📲 Instalável (PWA), 📦 APK ou 🖥️ Desktop (.exe) pelo 🏗️ Preparar.

## 🌳 Árvore de arquivos
```
├─ 📁 .github/
│  └─ 📁 workflows/
│     └─ programa-exe.yml
├─ 📁 app/
│  ├─ 📁 css/
│  │  └─ app.css
│  ├─ 📁 docs/
│  │  ├─ cacabug.md
│  │  ├─ laboratorio.md
│  │  ├─ meuchat.md
│  │  ├─ minisk.md
│  │  └─ sk-juridico-html.md
│  ├─ 📁 icons/
│  │  ├─ icon-192.png
│  │  └─ icon-512.png
│  ├─ 📁 js/
│  │  ├─ 📁 lib/
│  │  │  ├─ cofre-arquivo.js
│  │  │  ├─ guia-maikon.js
│  │  │  ├─ guia-versoes.js
│  │  │  ├─ jszip.min.js
│  │  │  └─ nuvem-neon.js
│  │  ├─ 00-base.js
│  │  ├─ 10-banco.js
│  │  ├─ 12-nuvem.js
│  │  ├─ 14-entrada.js
│  │  ├─ 20-provedores.js
│  │  ├─ 30-memoria.js
│  │  ├─ 33-contextos.js
│  │  ├─ 34-guia.js
│  │  ├─ 35-jeito.js
│  │  ├─ 36-gasto.js
│  │  ├─ 37-arquivos.js
│  │  ├─ 38-codigos.js
│  │  ├─ 39-qr.js
│  │  ├─ 40-voz.js
│  │  ├─ 41-pronto.js
│  │  ├─ 42-testar.js
│  │  ├─ 43-links.js
│  │  ├─ 44-docs.js
│  │  ├─ 45-mesa.js
│  │  ├─ 50-internet.js
│  │  ├─ 60-previa.js
│  │  ├─ 70-texto.js
│  │  ├─ 80-chat.js
│  │  ├─ 85-config.js
│  │  ├─ 87-cofre.js
│  │  ├─ 90-backup.js
│  │  ├─ 95-ponte-lab.js
│  │  ├─ 99-app.js
│  │  └─ nuvem-embutida.js
│  ├─ index.html
│  ├─ LEIA-ME.txt
│  ├─ manifest.json
│  ├─ README.md
│  └─ sw.js
├─ 📁 electron/
│  ├─ instalar.nsh
│  ├─ main.cjs
│  ├─ navegador.html
│  ├─ ponte.cjs
│  ├─ preload-nav.cjs
│  ├─ preload.cjs
│  ├─ saude.cjs
│  ├─ terminal.cjs
│  └─ voz.cjs
├─ LEIA-ME.md
└─ package.json
```
