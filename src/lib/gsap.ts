import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once at import time
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
