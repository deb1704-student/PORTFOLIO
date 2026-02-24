"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Vision() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);
    const orbOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0.15, 0]);
    const ringScale = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 1.5]);
    const ringOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.3, 0]);

    return (
        <section ref={ref} className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 bg-background z-10 flex flex-col justify-center items-center overflow-hidden">

            {/* Animated gradient orb */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none"
                style={{ scale: orbScale, opacity: orbOpacity }}
            />

            {/* Pulse ring */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full border border-accent/20 pointer-events-none"
                style={{ scale: ringScale, opacity: ringOpacity }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full border border-accent-blue/10 pointer-events-none"
                style={{ scale: useTransform(scrollYProgress, [0.15, 0.55], [0.2, 1.3]), opacity: ringOpacity }}
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter uppercase mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0, duration: 0.6 }}
                            className="inline-block"
                        >
                            The{" "}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.8 }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue"
                        >
                            Long
                        </motion.span>{" "}
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-block"
                        >
                            Game
                        </motion.span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 font-sans text-xl md:text-3xl font-light text-foreground/80 leading-relaxed"
                >
                    <p>
                        The next generation of companies won&apos;t be built by managers. They will be built by <motion.strong className="font-medium text-foreground inline-block" whileInView={{ color: ["#FAFAFA", "#00F0FF", "#FAFAFA"] }} viewport={{ once: true }} transition={{ duration: 2, delay: 1 }}>technical founders</motion.strong> who understand infrastructure from the ground up.
                    </p>
                    <p>
                        I am obsessively focused on the intersection of <strong className="font-medium text-foreground">finance</strong>, <strong className="font-medium text-foreground">data</strong>, and <strong className="font-medium text-foreground">scalable architecture</strong>. The goal isn&apos;t just to write code; it&apos;s to build systems that act as compounding leverage.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-24 inline-block origin-top"
                >
                    <div className="w-[2px] h-32 bg-gradient-to-b from-accent to-transparent mx-auto" />
                </motion.div>
            </div>
        </section>
    );
}
