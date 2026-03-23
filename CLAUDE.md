# don-portfolio

## Environment

- You are using a unix shell directly (native MacOS)
- Using Chrome for testing

## Stack

- Framework: Next.js 16 (App Router), React 19, Bun runtime
- Styling: Tailwind CSS v4 + tw-animate-css
- Components: shadcn/ui (new-york style)
- Dark mode: next-themes (class-based)

## Coding standards

This project follows strict coding standards documented in /standards.md.
Read /standards.md before writing any code — these rules apply to every file, no exceptions.

## Coding conventions

This project follows strict conventions documented in /references.md.

Before writing or modifying any code, use a subagent to read /references.md
and return only the rules and examples relevant to the current task. Apply those patterns
to your implementation.

## Project Structure Tree

```
don-portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css       # Tailwind v4, @plugin tailwindcss-animate, tw-animate-css, shadcn theme tokens
│   │   ├── layout.tsx        # Geist (geist/font), next-themes, suppressHydrationWarning on html/body
│   │   └── page.tsx          # home page
│   ├── components/
│   │   └── ui/               # shadcn: badge, button, card, dropdown-menu, separator, tooltip
│   └── lib/
│       └── utils.ts          # cn() (clsx + tailwind-merge)
├── public/                   # static assets (SVGs, etc.)
├── .husky/                   # pre-commit, commit-msg (lint-staged + commitlint-style checks)
├── components.json           # shadcn/ui config
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── bun.lock
├── package.json
├── CLAUDE.md
├── standards.md              # coding standards
├── references.md             # coding conventions & patterns
├── kstack-audit.md           # stack audit notes (may be gitignored)
├── README.md
└── LICENSE
```
