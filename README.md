# HireIQ AI — Frontend

The frontend shell for **HireIQ AI**, an AI-powered hiring platform built for
recruitment agencies and organizations. This is a UI-only scaffold: no
authentication logic, no data fetching, no business logic. It's meant as the
foundation to build features on top of.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix primitives + CVA)
- **next-themes** for light/dark mode
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects
to `/dashboard`.

## Project structure

```
app/
├── (auth)/                  Route group for unauthenticated pages
│   ├── layout.tsx           Split branding/form auth shell
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── forgot-password/page.tsx
├── (dashboard)/             Route group for the authenticated app shell
│   ├── layout.tsx           Sidebar + topbar shell
│   ├── dashboard/page.tsx   Overview with KPI cards
│   ├── candidates/page.tsx
│   ├── jobs/page.tsx
│   ├── interviews/page.tsx
│   ├── messages/page.tsx
│   ├── reports/page.tsx
│   └── settings/page.tsx
├── layout.tsx                Root layout: fonts + ThemeProvider
├── globals.css                Design tokens (light + dark)
└── page.tsx                   Redirects "/" → "/dashboard"

components/
├── ui/                        shadcn/ui primitives (button, card, input, …)
├── layout/                    Sidebar, Topbar, MobileNav, NavItem
├── theme/                     ThemeProvider, ThemeToggle
└── shared/                    Logo, PageHeader, StatCard, EmptyState

lib/
├── utils.ts                   cn() class-merging helper
└── nav-config.ts               Single source of truth for sidebar nav

types/
└── index.ts                    Shared UI types
```

## Design system

Route groups `(auth)` and `(dashboard)` split unauthenticated and
authenticated layouts without affecting the URL structure — this is the
standard App Router pattern for multi-shell SaaS apps.

Color, type, and layout tokens live in `app/globals.css` as CSS variables and
are mapped into Tailwind via `tailwind.config.ts`, following the shadcn/ui
convention. This makes theming (including dark mode) a matter of swapping CSS
variable values, not component code.

- **Typography** — Manrope for display/headings, Inter for UI and body text,
  JetBrains Mono available for tabular or ID-style data.
- **Brand accent** — a "signal" blue used for primary actions and active
  states, plus a small "spark" amber reserved for AI-related highlights
  (e.g. match scores, notifications).
- **Sidebar** — a fixed ink-navy surface independent of light/dark mode, so
  the product keeps a consistent identity regardless of theme.

## Adding shadcn/ui components

The project already includes `components.json`, so the shadcn/ui CLI works
out of the box:

```bash
npx shadcn@latest add dialog
```

## Notes

- All pages are UI only — forms don't submit anywhere, nav items point to
  real routes but pages render static/empty states, and the user in the
  topbar/sidebar is hardcoded sample data.
- Wire up real authentication, data fetching, and state management as a
  separate step.
