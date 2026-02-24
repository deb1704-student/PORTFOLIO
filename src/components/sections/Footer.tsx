"use client";

import { motion } from "framer-motion";
import MagneticLink from "@/components/ui/MagneticLink";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const containerVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <footer className="relative w-full py-24 px-4 md:px-12 lg:px-24 bg-background z-10 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full min-h-[60vh]">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-heading text-2xl tracking-widest uppercase mb-4 text-foreground/80">
                            Open to New Opportunities
                        </h3>
                        <p className="font-sans text-foreground/50 max-w-sm font-light">
                            Currently looking for roles where I can build sophisticated, high-performance systems from the ground up, with a focus on impact and scale.
                        </p>
                    </motion.div>

                    <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 font-sans text-lg tracking-wide uppercase"
                    >
                        <motion.li variants={itemVariants}>
                            <MagneticLink className="inline-block hoverable">
                                <a href="mailto:hello@debanjandas.com" className="flex items-center gap-2 group text-foreground/80 hover:text-accent transition-colors">
                                    <Mail size={16} /> <span>Email</span> <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </MagneticLink>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <MagneticLink className="inline-block hoverable">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group text-foreground/80 hover:text-accent transition-colors">
                                    <Github size={16} /> <span>GitHub</span> <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </MagneticLink>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <MagneticLink className="inline-block hoverable">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group text-foreground/80 hover:text-accent transition-colors">
                                    <Linkedin size={16} /> <span>LinkedIn</span> <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </MagneticLink>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <MagneticLink className="inline-block hoverable">
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group text-foreground/80 hover:text-accent transition-colors">
                                    <Twitter size={16} /> <span>X (Twitter)</span> <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </MagneticLink>
                        </motion.li>
                    </motion.ul>
                </div>

                {/* Bottom Section - Massive Typography */}
                <div className="mt-auto pt-32 w-full text-center">
                    <motion.a
                        href="mailto:hello@debanjandas.com"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="group block w-full hoverable"
                    >
                        <h2 className="font-heading font-bold text-[15vw] leading-none tracking-tighter uppercase text-center w-full text-foreground/10 group-hover:text-foreground transition-colors duration-700">
                            Let&apos;s Talk
                        </h2>
                    </motion.a>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-foreground/40 text-xs font-sans tracking-widest uppercase gap-4">
                        <p>© {new Date().getFullYear()} Debanjan Das. All Rights Reserved.</p>
                        <p>Designed with Intent. Built for Scale.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
