# Project Context

## Snapshot

Personal portfolio for Kent Cyrem Patasin, built as a Vite + React single-page app. The site presents a dark, grid-framed developer identity with animated hero typography, project cards, a full projects index, case-study pages, tech stack marquee, about/certification content, and a footer with character artwork.

## Product Intent

- Show Kent Cyrem Patasin as a front-end developer focused on web development, prototyping, wireframing, and UI/UX design.
- Make the first screen memorable through a large animated ASCII-style "CYREM" wordmark, strong mono typography, and restrained editorial layout.
- Give projects enough structure for browsing, filtering, and deeper case-study reading without becoming a generic portfolio template.
- Keep the tone technical, personal, and slightly experimental.

## Tech Stack

- Runtime: React 19 with Vite 7.
- Routing: `react-router-dom` with routes for home, all projects, and project case studies.
- Animation/media: Framer Motion, Lottie React, Three.js-powered ASCII text, custom reveal/decrypt components.
- Icons/assets: local SVG icons, Lottie JSON icons, character/vector art, project skeleton SVGs, PDF CV.
- Styling: plain CSS files colocated by page/component, with global tokens in `src/styles/index.css`.

## App Structure

- `src/main.jsx`: app entry, browser router, navigation, scroll manager, route definitions.
- `src/pages/Home.jsx`: home composition: Hero, Project, TechStack, About, Footer.
- `src/pages/Projects.jsx`: project listing with category/status filters, search suggestions, and latest/oldest sorting.
- `src/pages/ProjectCaseStudy.jsx`: route wrapper for project case studies.
- `src/components/Sections`: home sections and section-level CSS.
- `src/components/UI`: reusable interface and animation pieces such as project cards, buttons, ASCII text, reveal/decrypt text.
- `src/components/project/case-study`: case-study layout components.
- `src/data`: project and certification data; project slugs drive `/projects/:slug`.
- `src/state`: scroll memory and one-shot animation registry.
- `src/assets`: images, logos, icons, Lottie data, and CV.

## Core Routes

- `/`: home page.
- `/projects`: full project index.
- `/projects/:slug`: project case-study detail.

## Content Model

Projects live in `src/data/projectsData.js` and currently include:

- K-Wise: AI System, in progress, has case study.
- Kitsune: Prototype, completed, has case study.
- HUBITS: Management System, in progress.
- ITS Explorer: Website, in progress.
- PC Wise - PC Builder: Website, coming soon.

Case-study details are stored separately in `src/data/projectCaseStudies.js`.

## Behavioral Notes

- Navigation is fixed and becomes translucent/blurred after scrolling.
- Home scroll position is saved in session storage and restored by `ScrollManager`.
- Logo click clears saved home scroll and returns to the top/home route.
- Section nav links scroll on the home route or navigate home first, then scroll.
- Home and project page entrance animations are session-aware through `animationRegistry`.
- Project cards use `categoryColor` as a CSS custom property for hover borders and visual gradients.
- The hero name hover shows a cursor-following picture overlay with viewport clamping.

## Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start local Vite dev server.
- `npm run build`: production build.
- `npm run lint`: ESLint check.
- `npm run preview`: preview production build.

## Current Documentation Map

- `README.md`: currently Vite-template oriented and should be rewritten when project-facing documentation matters.
- `PROJECT_CONTEXT.md`: this file; use as the fast onboarding map.
- `DESIGN_SYSTEM.md`: visual language, tokens, component rules, and implementation guidance.

## Maintenance Guidelines

- Add new projects through `src/data/projectsData.js`; add case-study content in `src/data/projectCaseStudies.js` when `hasCaseStudy` is true.
- Keep project category names aligned with the filters in `src/pages/Projects.jsx`.
- Prefer global CSS tokens from `src/styles/index.css` for new colors, spacing, borders, fonts, and motion values.
- Preserve the portfolio's bordered grid language: page gutters, hairline vertical rails, flat dark surfaces, and sharp/low-radius controls.
- Avoid introducing marketing-style hero cards, soft blobs, heavy gradients, or unrelated illustration styles.
