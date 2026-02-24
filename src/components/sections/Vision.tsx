"use client";

import { motion } from "framer-motion";

export default function Vision() {
    return (
        <section className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 bg-background z-10 flex flex-col justify-center items-center overflow-hidden">

            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter uppercase mb-12">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Long</span> Game
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="space-y-8 font-sans text-xl md:text-3xl font-light text-foreground/80 leading-relaxed"
                >
                    <p>
                        The next generation of companies won&apos;t be built by managers. They will be built by technical founders who understand infrastructure from the ground up.
                    </p>
                    <p>
                        I am obsessively focused on the intersection of <strong className="font-medium text-foreground">finance</strong>, <strong className="font-medium text-foreground">data</strong>, and <strong className="font-medium text-foreground">scalable architecture</strong>. The goal isn&apos;t just to write code; it&apos;s to build systems that act as compounding leverage.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-24 inline-block"
                >
                    <div className="w-[2px] h-32 bg-gradient-to-b from-accent to-transparent mx-auto" />
                </motion.div>
            </div>
        </section>
    );
}
