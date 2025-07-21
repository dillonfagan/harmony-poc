# GitHub Copilot Instructions for harmony-poc Monorepo

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** DaisyUI v5

## Project Structure
- `apps/consumer/` — Main Next.js app (App Router)
- `libs/` — Shared libraries
- `supabase/` — Backend integration

## Coding Guidelines
- Use Next.js App Router conventions (e.g., `app/` directory, layouts, route groups).
- Prefer DaisyUI v5 components and utility classes for UI.
- Use Tailwind CSS for custom styling and responsive design.
- Keep React components small and focused.
- Use TypeScript for all code (including props and state).
- Use DaisyUI's `dock`, `navbar`, `card`, `badge`, and `progress` components where appropriate.
- For forms, use DaisyUI form elements (`input`, `select`, `textarea`, `button`).
- For navigation, use Next.js `Link` and DaisyUI `navbar` or `dock`.
- For SSR, use server components and Next.js data fetching patterns.
- For client-side hooks (e.g., `usePathname`), mark components with `"use client"`.

## File Naming & Organization
- Place pages in `app/` using Next.js conventions.
- Place shared UI components in `components/`.
- Place business logic in `lib/`.
- Use descriptive filenames and keep files concise.

## DaisyUI Usage
- Use DaisyUI v5 classes for all UI elements.
- Prefer DaisyUI's built-in components over custom styling when possible.
- Use DaisyUI's responsive classes for mobile-first design.

## Tailwind Usage
- Use Tailwind utility classes for layout, spacing, and responsiveness.
- Extend Tailwind config as needed in `tailwind.config.mjs`.

## General Best Practices
- Write clean, readable, and maintainable code.
- Use semantic HTML and accessible components.
- Document complex logic with comments.
- Keep components and functions small and reusable.

---

For more details, see the Next.js, Tailwind CSS, and DaisyUI documentation.
