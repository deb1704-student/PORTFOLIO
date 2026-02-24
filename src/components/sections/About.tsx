"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { MoveRight } from "lucide-react";

export default function About() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const words = textRef.current.innerText.split(" ");
        textRef.current.innerHTML = "";

        // Wrap each word so GSAP can animate them individually
        words.forEach((word) => {
            const span = document.createElement("span");
            span.innerText = word + " ";
            span.style.opacity = "0.2";
            span.style.color = "var(--foreground)";
            span.style.transition = "opacity 0.1s ease";
            textRef.current?.appendChild(span);
        });

        const spans = textRef.current.querySelectorAll("span");

        const tween = gsap.to(spans, {
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                end: "bottom 80%",
                scrub: true,
            },
            opacity: 1,
            stagger: 0.1,
            ease: "none",
        });

        return () => {
            // Only kill the ScrollTrigger instance created by this component
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, []);

    return (
        <section
            ref={container}
            id="about"
            aria-label="About me"
            className="relative w-full min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 py-32 bg-background z-10"
        >
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Column - Eyebrow */}
                <div className="md:w-1/4 pt-4">
                    <div className="flex items-center gap-4 text-accent mb-8">
                        <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold">The Philosophy</span>
                        <MoveRight size={16} />
                    </div>
                </div>

                {/* Right Column - Highlight Text */}
                <div className="md:w-3/4">
                    <h2
                        ref={textRef}
                        className="font-heading font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.2] md:leading-[1.15] tracking-tight uppercase"
                    >
                        I build products structured for the long game. Prioritizing scalable systems, clean architecture, and relentless execution over temporary trends. Engineering with a founder&apos;s mindset.
                    </h2>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 font-sans border-t border-white/10 pt-12">
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4 font-heading uppercase tracking-wide">Builder First</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">
                                Engineering isn&apos;t just about writing code; it&apos;s about solving real-world problems. I approach every architectural decision from a product perspective, ensuring that technology serves the business, not the other way around.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4 font-heading uppercase tracking-wide">FinTech Focus</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">
                                Fascinated by the intersection of finance and technology. I strive to build scalable, fault-tolerant infrastructure that handles complex transactions natively and securely.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
