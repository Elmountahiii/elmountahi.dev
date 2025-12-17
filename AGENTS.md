# Agent Guidelines

## Commands
- **Dev:** `npm run dev`
- **Build:** `npm run build` (runs tsc & vite build)
- **Lint:** `npm run lint` (runs eslint)
- **Test:** No testing framework is currently configured.

## Code Style & Conventions
- **Stack:** React 19, TypeScript, Vite, Tailwind CSS 4.
- **Components:** Functional components. Place shared types in `src/types.ts`.
- **Styling:** Use Tailwind CSS utility classes exclusively.
- **Naming:** PascalCase for components (`MyComponent.tsx`). camelCase for functions/vars.
- **Imports:** Group external libraries first, then internal components/assets.
- **Structure:** Keep components small and focused. One component per file.
- **Formatting:** Match existing indentation (appears to be tabs). Run `npm run lint` to verify.
- **Types:** Strict TypeScript usage. Avoid `any`.
