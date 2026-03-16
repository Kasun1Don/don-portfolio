# don-portfolio

Personal portfolio built with Next.js, Tailwind CSS v4, and shadcn/ui.

## Project Structure

```
don-portfolio/
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles + Tailwind v4 theme + shadcn CSS vars
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   └── lib/
│       └── utils.ts            # cn() utility (clsx + tailwind-merge)
├── components.json             # shadcn/ui config
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs          # Tailwind v4 PostCSS plugin
└── tsconfig.json               # Path alias: @/* -> src/*
```

## Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: Bun
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (new-york style)
- **Language**: TypeScript

## Notes

- shadcn components live in `src/components/ui/` — add new ones with `bunx shadcn@latest add <component>`
