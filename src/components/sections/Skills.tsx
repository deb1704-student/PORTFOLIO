"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="relative w-full py-32 px-4 md:px-12 lg:px-24 bg-background z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-heading font-medium text-4xl md:text-6xl tracking-tighter uppercase mb-16 text-center">
                    Technical Arsenal
                </h2>

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
                                className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/50 transition-colors duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <h3 className="font-heading text-xl uppercase tracking-widest text-foreground/80 mb-6 group-hover:text-accent transition-colors duration-300">
                                    {title}
                                </h3>

                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    {items.map((skill) => (
                                        <motion.li
                                            key={skill}
                                            variants={itemVariants}
                                            className="flex items-center gap-3 font-sans font-light text-foreground/70"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors duration-300" />
                                            {skill}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
