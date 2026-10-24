# Portfolio

Personal portfolio site for Malik Usman, AI Automation Engineer. A single-page React app covering services, experience, tech stack, and contact details.

## Features

- Hero, About, Services, Specialisms, How It Works, Experience, Tech Stack, and Contact sections
- Animated particle background (Three.js), GSAP and Framer Motion transitions, and a scrolling tech marquee
- All copy lives in one file, `src/data/content.ts`, so the site is edited without touching components

## Tech Stack

React 19, TypeScript, Vite, Three.js, GSAP, Framer Motion, React Icons

## Getting Started

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (typecheck and production build), `npm run preview`.

## Project Structure

```
src/
  components/   Section components (Hero, About, Services, Experience, ...)
  data/         content.ts, the site's text and data
  styles/       Per-section CSS
```
