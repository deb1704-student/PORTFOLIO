# Eraf Portfolio Website - Design Document

## 1. Core Vision & Concept
**"A portfolio, but make it a statement."**
The goal of the Eraf personal website is to transcend a traditional scrolling portfolio and deliver a cinematic, living brand piece. It aims to fuse a clean, minimalist layout with highly playful interactions and a sharp visual rhythm. This design is built for designers who "don't do boring," prioritizing experience design as much as the content itself.

## 2. Design Aesthetic
*   **Theme:** Minimalist yet bold, combining high-end editorial vibes with dynamic digital experiences.
*   **Visual Rhythm:** Alternating pacing between expansive white/black space and dense, visually heavy interactions. 
*   **Vibe:** Sophisticated, playful, and confident.

## 3. Color Palette
The color scheme leans heavily on high contrast to allow the portfolio works to shine, while still maintaining a strong brand presence.
*   **Primary Background:** Deep Charcoal / Off-Black (`#0D0D0D`) or Crisp White (`#FAFAFA`) to offer a pristine canvas.
*   **Text Colors:** High Contrast—stark white on dark backgrounds, or off-black on light backgrounds.
*   **Accents:** Vibrant, punchy accent colors (e.g., Electric Blue, Neon Yellow, or distinct gradients) revealed during interactions (hover states, transitions) to inject the promised "playful" energy.

## 4. Typography
Typography is a crucial element, acting not just as copy, but as a structural design component over the "clean layout."
*   **Headers/Display:** A modern, high-contrast Serif (e.g., *Playfair Display*, *PP Editorial New*) or an ultra-bold Geometric Sans-Serif (e.g., *Clash Display*, *Syne*). Used aggressively large to make statements.
*   **Body:** A highly legible, structured Sans-Serif (e.g., *Inter*, *Monument Grotesk*) that complements the expressive header font. Clean, wide tracking for navigation and meta-data to create an editorial feel.

## 5. Key UI/UX Elements & Layout
### 5.1 Playful Interactions
*   **Custom Cursor:** A dynamic cursor that morphs based on the underlying content (e.g., expanding when hovering over a clickable project cover, turning into an arrow for navigation).
*   **Hover Reveals:** Text links or project titles that, when hovered over, reveal full-bleed background images or video snippets, creating immediate visual feedback.
*   **Scroll Animations:** Parallax scrolling on images and staggered fade-ins for typography to maintain a strong narrative flow from "hero to footer."

### 5.2 Sharp Visual Rhythm
*   **Grid System:** An underlying rigid grid that is intentionally broken by overlapping elements, asymmetrical project placements, or floating text, generating visual tension.
*   **Whitespace:** Expansive use of negative space to give each project room to breathe, effectively "framing" the work like a gallery.

## 6. Page Structure
### A. Hero Section (The Hook)
*   **Concept:** Impactful first impression with massive typography stating the site's thesis.
*   **Element:** A bold statement overlaying a subtle, abstract background animation or a high-quality personal reel/photo.
*   **Interaction:** A clearly defined, perhaps custom-animated, "scroll down" indicator that encourages exploration.

### B. Selected Works (The Core)
*   **Concept:** A curated showcase over a chaotic list.
*   **Element:** Instead of standard cards, projects are presented as large, full-width or asymmetrical case study teasers.
*   **Interaction:** Image distortion on scroll (using WebGL) or typography that outlines on hover, teasing the user to click deeper into the case study.

### C. About / Philosophy (The Brand Piece)
*   **Concept:** Integrating the designer's personality.
*   **Element:** A short, impactful manifesto or bio, paired with dynamic typography.
*   **Interaction:** Text that highlights or changes color as the user scrolls through it, reading like a live presentation.

### D. Footer (The Final Statement)
*   **Concept:** A bold close that leaves a lasting impression.
*   **Element:** Massive "Let's Talk" or "Get in Touch" typography, dominating the bottom viewport.
*   **Interaction:** Links that feature magnetic hover effects, pulling towards the user's cursor.

## 7. Technical Considerations
*   **Framework:** Recommended to use modern frameworks (React/Next.js or Vue/Nuxt.js) paired with WebGL/Three.js if advanced distortion effects are desired.
*   **Animation Library:** GSAP (GreenSock) for complex, timeline-based scroll animations and Framer Motion for UI transitions to ensure smooth performance.
*   **Performance:** Lazy loading of all high-res project imagery and videos to maintain a buttery-smooth 60fps scrolling experience, which is critical for making the site feel "alive."

---
*This document defines the overarching style, flow, and technical direction needed to capture the essence of the Eraf design philosophy.*
