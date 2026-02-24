# Technical Requirements Document: Debanjan Das Digital Identity Platform

## 1. System Architecture & Tech Stack

This project will be built as a modern, high-performance web application designed for flexibility, smooth animations, and future scalability.

### Core Stack
*   **Framework**: Next.js (App Router recommended for modern data fetching and layouts)
*   **Styling**: Tailwind CSS (for utility-first, rapid UI development and easy theming)
*   **Animations**: 
    *   Framer Motion (for complex UI transitions, page routing, and state-based animations)
    *   GSAP (GreenSock) (for advanced, timeline-based scroll animations and parallax effects)
*   **3D / Advanced Rendering (Optional but recommended for Hero/Projects)**: WebGL / Three.js (for image distortion and abstract background effects)
*   **Deployment**: Vercel (seamless Next.js integration, edge caching)

## 2. Design System & Global Styles

The application must enforce a strict, premium design aesthetic focused on high contrast and dramatic typography.

### 2.1 Color Palette (Premium Dark Mode)
*   **Primary Background**: Deep Charcoal / Off-Black (`#0D0D0D`)
*   **Primary Text**: Crisp White (`#FAFAFA`)
*   **Accents**: Electric Blue or Neon Cyan (to be used sparingly for hover states, subtle gradients, and glowing effects)
*   **Surface / Cards**: Slightly lighter shades of charcoal (e.g., `#1A1A1A`) with subtle border treatments (glassmorphism or 1px hairline borders).

### 2.2 Typography
*   **Display / Headers**: Ultra-bold Geometric Sans-Serif (e.g., *Clash Display*, *Syne*) or modern high-contrast Serif, scaled aggressively up (e.g., `text-6xl` to `text-9xl`).
*   **Body / UI / Metadata**: Clean, structured Sans-Serif (e.g., *Inter*, *Monument Grotesk*) with wide tracking (`tracking-wide` or `tracking-widest`).

### 2.3 Visual Rhythm & Grid
*   Implement a rigorous 12-column grid system, but intentionally break it for expansive, asymmetrical layouts.
*   Extensive use of whitespace/padding (e.g., `py-32` or `py-48` section dividers).

## 3. Core Component Specifications

### 3.1 Global Elements
*   **Custom Cursor**: A div element tracking mouse coordinates, altering state (expanding, shrinking, morphing into an arrow) based on hovered elements (e.g., data-attributes on links/images).
*   **Smooth Scrolling**: Implement Lenis or similar smooth scroll library to ensure 60fps buttery scrolling experience vital for the "cinematic" feel.

### 3.2 Hero Section (The Hook)
*   **Content**: "DEBANJAN DAS" (Massive Typography). Headline: "Building Systems. Thinking in Products. Future FinTech Founder."
*   **Visuals**: Dark abstract background (Three.js subtle animation or dark gradient mesh).
*   **Interactions**: Animated staggered text intro on load. "Scroll down" magnetic indicator.

### 3.3 About Section (Builder Philosophy)
*   **Content**: Statement on building products, startup ambition, and long-term thinking.
*   **Interactions**: Text highlighting effect driven by scroll position (e.g., using GSAP ScrollTrigger to change text opacity line-by-line).

### 3.4 Projects Section (Selected Works)
*   **Structure**: Case-study teasers, not standard dense grids. Full-width or asymmetrical cards.
*   **Data Model per Project**: Problem Statement, Why it matters, Architecture, Tech Stack, Links (Deployment/GitHub), Screenshots, Key Learning.
*   **Interactions**:
    *   Hovering over project titles reveals full-bleed background images/video snippets.
    *   WebGL-based image distortion on scroll (if applicable).

### 3.5 Skills Section
*   **Structure**: Clean, minimal, icon-driven grid categorization.
*   **Categories**: Core Engineering, DSA, OOP, Full-Stack, Databases, AI/Data.
*   **Visuals**: No generic progress bars. Subtle glowing borders or monochrome icons that highlight accent colors on hover.

### 3.6 Vision Section ("The Long Game")
*   **Content**: Focus on FinTech interest, infrastructure, and scalable systems.
*   **Typography**: Distinct typographical treatment to differentiate from the About section, heavily leaning into the "Founder" persona.

### 3.7 GitHub Integration
*   **Implementation**: Use GitHub GraphQL API or an existing open-source contribution graph component (e.g., react-github-calendar) custom-styled to fit the dark theme.
*   **Data**: Show contribution graph and pin key repositories.

### 3.8 Footer Section
*   **Content**: Massive typography "Let's Talk" or "Get in Touch". Contact links (Email, GitHub, LinkedIn, X).
*   **Interactions**: Magnetic hover links (cursor pulls toward the center of the text link).

## 4. Development & Project Structure (Next.js App Router)

```text
/
├── app/
│   ├── layout.tsx         # Global layout (Lenis wrapper, Cursor component, Nav, Footer)
│   ├── page.tsx           # Main landing page assembling sections
│   ├── globals.css        # Tailwind imports, custom cursor CSS, font definitions
│   └── fonts/             # Local font files
├── components/
│   ├── ui/                # Reusable UI elements (Buttons, Typography, MagneticLink)
│   ├── sections/          # Hero, About, ProjectsList, Skills, Vision
│   ├── animations/        # Reusable Framer Motion/GSAP wrappers (FadeIn, RevealText)
│   └── 3d/                # Three.js / R3F canvases
├── data/
│   └── content.ts         # Static data for projects, skills, and copy
├── lib/                   # Utility functions, GitHub API fetchers
└── public/
    └── images/            # Project shots, abstract backgrounds
```

## 5. Performance & Non-Functional Requirements
*   **Image Optimization**: All images must use Next.js `<Image />` component with `priority` for above-the-fold content and `lazy` loading for the rest.
*   **SEO**: Implement custom `metadata` in `app/layout.tsx` targeting "Software Engineer", "FinTech Builder", "Debanjan Das Portfolio".
*   **Responsiveness**: Mobile-first design using Tailwind breakpoints (`md:`, `lg:`). The complex hover interactions must gracefully degrade on touch devices (often mapping to tap/intersection observer events instead).

## 6. Future Extensibility Map
*   The architecture should anticipate a `/blog` or `/notes` route using MDX for future "Founder Notes" and "Technical Essays".
*   Data structures should be loosely coupled so they can be easily migrated from static `data/content.ts` to a Headless CMS (like Sanity or Supabase) when the portfolio scales.
