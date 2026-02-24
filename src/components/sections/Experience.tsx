"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import { experience } from "@/data/content";
import { useRef } from "react";

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Animated timeline progress
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            id="experience"
            aria-label="Work experience"
            className="relative w-full py-32 px-4 md:px-12 lg:px-24 bg-background z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase"
                    >
                        Experience
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center gap-4 text-accent"
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold">
                            Where I&apos;ve Built
                        </span>
                        <MoveRight size={16} />
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Static Track */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/5" />
                    {/* Glowing Animated Progress Line */}
                    <motion.div
                        className="absolute left-0 md:left-8 top-0 w-px origin-top"
                        style={{
                            height: lineHeight,
                            background: "linear-gradient(to bottom, #00F0FF, #0076FF)",
                            boxShadow: "0 0 8px rgba(0,240,255,0.4), 0 0 20px rgba(0,240,255,0.15)",
                        }}
                    />

                    <div className="flex flex-col gap-20">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="group relative pl-8 md:pl-24"
                            >
                                {/* Timeline Dot with pulse */}
                                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                                    <div className="w-3 h-3 rounded-full border-2 border-white/20 bg-background group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300 relative z-10" />
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-accent/30 -m-1"
                                        initial={{ scale: 1, opacity: 0 }}
                                        whileInView={{ scale: [1, 2.5, 1], opacity: [0, 0.4, 0] }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: index * 0.15 + 0.3 }}
                                    />
                                </div>

                                {/* Period Badge */}
                                <span className="inline-block font-mono text-xs text-accent/80 tracking-wider mb-3">
                                    {item.period}
                                </span>

                                {/* Role & Company */}
                                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                                    {item.role}
                                </h3>
                                <p className="font-sans text-lg text-foreground/70 mt-1">
                                    {item.company}
                                </p>

                                {/* Description */}
                                <p className="font-sans text-foreground/70 font-light leading-relaxed mt-4 max-w-2xl">
                                    {item.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {item.tech.map((t, i) => (
                                        <motion.span
                                            key={t}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                                            className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-foreground/70 group-hover:border-accent/30 group-hover:text-accent/80 transition-colors duration-300"
                                        >
                                            {t}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
