"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    chapter: string;
    title: string;
}

export default function SectionDivider({ chapter, title }: SectionDividerProps) {
    return (
        <div className="relative w-full py-16 md:py-24 px-4 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center gap-6 md:gap-12">
                {/* Chapter Number */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-mono text-xs text-accent/60 tracking-[0.3em] uppercase shrink-0"
                >
                    {chapter}
                </motion.span>

                {/* Animated Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 h-px origin-left"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(0,240,255,0.4), rgba(0,118,255,0.2), transparent)",
                    }}
                />

                {/* Title */}
                <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="font-heading text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/30 shrink-0"
                >
                    {title}
                </motion.span>
            </div>
        </div>
    );
}
