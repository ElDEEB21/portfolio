# Abdulrahman Eldeeb · Portfolio

[![Website](https://img.shields.io/badge/Live-eldeeb21.github.io/portfolio-7ee787?style=flat-square&logo=github)](https://eldeeb21.github.io/portfolio/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/ElDEEB21/portfolio/deploy.yml?branch=main&style=flat-square&label=Build)](https://github.com/ElDEEB21/portfolio/actions)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vitest](https://img.shields.io/badge/Vitest-4-6e9f18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> Personal portfolio & interactive CV — built with Next.js, statically exported and deployed to GitHub Pages.

[Live site](https://eldeeb21.github.io/portfolio/) · [CV / Resume](https://eldeeb21.github.io/portfolio/cv) · [GitHub](https://github.com/ElDEEB21)

---

## Overview

A dark-themed portfolio website showcasing backend engineering work, competitive programming achievements, and teaching experience. Designed to serve as both a professional portfolio and a downloadable CV.

**Highlights:**

- Animated section entries triggered on scroll via Framer Motion
- Built-in PDF viewer for the CV / resume
- Responsive layout with smooth scroll navigation
- Statically exported for fast, reliable hosting on GitHub Pages
- Comprehensive test suite covering data integrity, components, and pages

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) · `output: "export"` |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 · PostCSS |
| **Animations** | Framer Motion 12 (scroll-triggered `whileInView`) |
| **Icons** | Lucide React |
| **Fonts** | Inter (sans) · JetBrains Mono (mono) via `next/font/google` |
| **Testing** | Vitest 4 · React Testing Library · jsdom |
| **Linting** | ESLint 9 · `eslint-config-next` |
| **Deployment** | GitHub Pages (via GitHub Actions) |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

> [!NOTE]
> The site runs locally without `basePath`. When deployed to GitHub Pages, the build process sets `NEXT_PUBLIC_BASE_PATH=/portfolio` so all assets resolve under the subdirectory.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Webpack) |
| `npm run build` | Production build (static export to `./out`) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run all tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout: fonts, metadata, Header
│   ├── page.tsx             # Home page (assembles all sections)
│   ├── globals.css          # Tailwind base + custom theme + animations
│   └── cv/
│       └── page.tsx         # CV / resume page with PDF viewer
├── components/
│   ├── hero.tsx             # Landing section: intro, photo, CTAs
│   ├── about.tsx            # Bio, education, stats, certifications
│   ├── experience.tsx       # Timeline of work experience
│   ├── skills.tsx           # Three-column skill categories
│   ├── competitive-programming.tsx  # CP achievements
│   ├── projects.tsx         # Project cards grid
│   ├── header.tsx           # Sticky nav + mobile drawer
│   ├── footer.tsx           # Terminal-style footer
│   └── icons.tsx            # GitHub / LinkedIn SVG icons
├── data/
│   └── profile.ts           # All portfolio content + TypeScript types
└── app (tests)
    └── cv (tests)
```

All component tests live in `__tests__/` subdirectories alongside their source files.

---

## Content

All portfolio data is managed from a single file: [`src/data/profile.ts`](src/data/profile.ts).  
Edit this file to update bio text, experience entries, skills, projects, or competitive programming stats.

### Adding a Project

Add an object to the `projects` array in `profile.ts`:

```ts
{
  name: "Project name",
  description: "Short description",
  tech: ["Django", "React"],
  repo: "https://github.com/ElDEEB21/project-repo",
  highlight: true,     // shows "Featured" badge
}
```

### Customizing Skills

Edit the `skills` object — three categories (`technical`, `domain`, `soft`). Each category renders as a column of pill badges.

---

## Deployment

The site is deployed to **GitHub Pages** via a GitHub Actions workflow (`.github/workflows/deploy.yml`).

**Workflow:**
1. Triggered on push to `main` or manually via `workflow_dispatch`
2. Installs dependencies with `npm ci`
3. Builds with `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build`
4. Uploads the `./out` directory as a Pages artifact
5. Deploys using `actions/deploy-pages@v4`

> [!TIP]
> To deploy your own fork, enable GitHub Pages in your repository settings (Source: GitHub Actions).  
> Update `NEXT_PUBLIC_BASE_PATH` in the workflow file if you deploy under a different path.

---

## Testing

Tests validate data integrity, component rendering, and page structure.

```bash
npm test           # Run once
npm run test:watch # Watch mode
```

**What's covered:**

- Profile data fields exist and are non-empty
- All components render their expected content (headings, text, links)
- Navigation links point to correct routes
- Footer renders current year and correct social URLs
- CV page renders PDF viewer and download buttons

Mocks are set up for `next/navigation`, `next/font/google`, `IntersectionObserver`, and `ResizeObserver` (required by Framer Motion).

---

## Architecture Notes

- **Static export**: `output: "export"` generates a fully static site. No Node.js server is needed at runtime.
- **Base path strategy**: The `basePath` is driven by the `NEXT_PUBLIC_BASE_PATH` environment variable — empty in development, `/portfolio` in production. This keeps local dev simple while ensuring correct asset resolution on GitHub Pages.
- **Client components**: All section components use `"use client"` for Framer Motion scroll animations. The root `layout.tsx` remains a server component for metadata and font loading.
- **PDF viewer**: Uses the native `<object>` element with an `<iframe>` fallback, styled inside a browser-window mockup.
