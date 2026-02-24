"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import TiltCard from "@/components/ui/TiltCard";

export default function Education() {
    return (
        <section
            id="education"
            aria-label="Education"
            className="relative w-full py-32 px-4 md:px-12 lg:px-24 bg-background z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex items-center gap-4"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <GraduationCap size={24} className="text-accent" />
                    </motion.div>
                    <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tighter uppercase">
                        Education
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <TiltCard
                                className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-colors duration-500 overflow-hidden h-full"
                                tiltStrength={6}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                                <span className="inline-block font-mono text-xs text-accent/80 tracking-wider mb-4 relative z-[2]">
                                    {item.period}
                                </span>

                                <h3 className="font-heading text-xl md:text-2xl uppercase tracking-tight font-medium text-foreground group-hover:text-accent transition-colors duration-300 mb-2 relative z-[2]">
                                    {item.degree}
                                </h3>

                                <p className="font-sans text-foreground/70 mb-4 relative z-[2]">
                                    {item.institution}
                                </p>

                                {item.details && (
                                    <p className="font-sans text-sm text-foreground/50 font-light leading-relaxed border-t border-white/5 pt-4 mt-4 relative z-[2]">
                                        {item.details}
                                    </p>
                                )}
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
