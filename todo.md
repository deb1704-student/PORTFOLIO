# Eraf Portfolio - Feature Implementation Todo List

This document breaks down the features outlined in the PRD, Design Document, and Technical Document into actionable, step-by-step tasks.

## 1. Project Initialization & Setup
- [ ] Initialize Next.js app with App Router (`npx create-next-app@latest`).
- [ ] Install utility libraries: Tailwind CSS, Framer Motion, and GSAP.
- [ ] Install and configure Lenis (or similar) for smooth 60fps scrolling.
- [ ] Add custom fonts (e.g., Clash Display/Syne for headers, Inter/Monument Grotesk for body) in `app/fonts`.
- [ ] Configure `tailwind.config.js` with premium dark mode palette:
  - Background: Deep Charcoal / Off-Black (`#0D0D0D`)
  - Text: Crisp White (`#FAFAFA`), Accents: Electric Blue/Neon Cyan.
- [ ] Create basic site structure (`app/layout.tsx`, `app/page.tsx`).
- [ ] Implement a global wrapper for Lenis smooth scroll within the layout.
- [ ] Build a robust custom cursor component (tracks mouse, morphs on hover).

## 2. Hero Section (The Hook)
- [ ] Create the layout structure for the massive "DEBANJAN DAS" typography.
- [ ] Implement abstract background visuals (Three.js/WebGL or subtle CSS gradient mesh).
- [ ] Animate staggered text/intro sequences on initial load using Framer Motion/GSAP.
- [ ] Write down headline content: "Building Systems. Thinking in Products. Future FinTech Founder."
- [ ] Add a "scroll down" magnetic indicator with a subtle bounce/pull animation.

## 3. About Section (Builder Philosophy)
- [ ] Draft content reflecting structural, long-term product thinking over emotional statements.
- [ ] Design an expansive, high-contrast typographic layout.
- [ ] Implement text highlighting effect on scroll (using GSAP ScrollTrigger to alter text opacity).

## 4. Projects Section (Selected Works)
- [ ] Model data structure for projects (Problem Statement, Architecture, Stack, Links, Screenshots).
- [ ] Build base case-study UI card component (asymmetrical, full-width layouts).
- [ ] Implement hover interactions: reveal full-bleed background images or video snippets when hovering over titles.
- [ ] (Advanced) Add WebGL-based image distortion effects on scroll for project covers.
- [ ] Ensure project details properly frame the project as a mini-startup, not an assignment.

## 5. Skills Section
- [ ] Group skills into specific domains: Core Engineering, DSA, OOP, Full-Stack, Databases, AI/Data.
- [ ] Build a minimalistic, icon-driven grid layout.
- [ ] Replace standard progress bars with subtle hover treatments (e.g., glowing borders, monochrome to accent color transitions).

## 6. Vision Section (The Long Game)
- [ ] Draft targeted content about FinTech interest, building systems, and scalable infrastructure.
- [ ] Build a distinct typography-focused component to visually separate it from the About section.
- [ ] Implement custom scroll animations to emphasize "Founder" positioning.

## 7. GitHub Integration
- [ ] Integrate GitHub GraphQL API (or open-source component like `react-github-calendar`).
- [ ] Style the contribution graph natively with the dark theme colors.
- [ ] Create a UI sub-section to showcase highlighted/pinned repositories.

## 8. Footer Section (The Final Statement)
- [ ] Implement massive typography for the "Let's Talk" / "Get in Touch" call to action.
- [ ] Build a `MagneticLink` reusable component.
- [ ] Lay out primary contact methods (Email, GitHub, LinkedIn, X) utilizing the magnetic link component.

## 9. Polish, Performance & SEO
- [ ] Optimize all assets and implement Next.js `<Image />` component with `priority` vs. `lazy` loading.
- [ ] Add explicit SEO metadata in `app/layout.tsx` targeting "Software Engineer", "FinTech Builder", and "Debanjan Das Portfolio".
- [ ] Refine responsive design points (`md:`, `lg:` breakpoints) ensuring elements fall back gracefully on mobile (e.g., tap interactions instead of hover).
- [ ] Test framerates during intensive animations to ensure a buttery-smooth 60fps experience.
