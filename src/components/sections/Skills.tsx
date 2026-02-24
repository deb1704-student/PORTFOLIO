"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import TiltCard from "@/components/ui/TiltCard";

export default function Skills() {
    return (
        <section id="skills" aria-label="Technical skills" className="relative w-full py-32 px-4 md:px-12 lg:px-24 bg-background z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading font-medium text-4xl md:text-6xl tracking-tighter uppercase mb-16 text-center"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => {
                        const title = category.charAt(0).toUpperCase() + category.slice(1);

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <TiltCard
                                    className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-colors duration-500 overflow-hidden h-full"
                                    tiltStrength={8}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                                    <h3 className="font-heading text-xl uppercase tracking-widest text-foreground/80 mb-6 group-hover:text-accent transition-colors duration-300 relative z-[2]">
                                        {title}
                                    </h3>

                                    <ul className="space-y-4 relative z-[2]">
                                        {items.map((skill, i) => (
                                            <motion.li
                                                key={skill}
                                                initial={{ opacity: 0, x: -15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                                                className="flex items-center gap-3 font-sans font-light text-foreground/70"
                                            >
                                                <motion.div
                                                    className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors duration-300"
                                                    whileHover={{ scale: 2.5 }}
                                                />
                                                {skill}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
