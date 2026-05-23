# PetMouth — Next.js

Landing page sobre higiene bucal canina. Convertida do protótipo HTML/React para Next.js 14 (App Router) + TypeScript.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/
  layout.tsx       # html shell + fontes Google
  page.tsx         # composição da home
  globals.css      # design system completo (paleta, tipografia, componentes)
components/
  Icon.tsx         # set de ícones SVG inline
  Nav.tsx          # header com seção ativa + scroll suave  (client)
  Hero.tsx         # hero + selo + cards flutuantes
  Quiz.tsx         # diagnóstico interativo de 3 etapas      (client)
  HowTo.tsx        # timeline vertical de 5 passos
  Tips.tsx         # 6 cards de dicas
  Tutorial.tsx     # tutorial + mock de feed social
  Diagnostic.tsx   # galeria diagnóstica com badges
  Profile.tsx      # seletor por idade do pet               (client)
  Mitos.tsx        # flip cards mitos × verdades            (client)
  VetAlert.tsx     # 6 sinais para ir ao veterinário
  FinalCTA.tsx     # CTA final com kit
  Footer.tsx       # rodapé + selos de confiança
```

## Notas

- Componentes com estado (`Nav`, `Quiz`, `Profile`, `Mitos`) carregam o diretivo `"use client"`.
- Os demais são Server Components por padrão (zero JS no cliente).
- O CSS global em `app/globals.css` mantém o design system intacto — você pode migrar pra CSS Modules ou Tailwind depois.
- Placeholders de imagem usam padrões CSS — substitua pelos shots reais quando tiver.
# petmouth
