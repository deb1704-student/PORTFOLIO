"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="fixed left-0 top-0 bottom-0 z-50 w-[3px] hidden md:block">
            {/* Track */}
            <div className="absolute inset-0 bg-white/5" />
            {/* Progress */}
            <motion.div
                className="absolute top-0 left-0 w-full origin-top"
                style={{
                    scaleY,
                    height: "100%",
                    background:
                        "linear-gradient(to bottom, #00F0FF, #0076FF, #00F0FF)",
                }}
            />
            {/* Glow at tip */}
            <motion.div
                className="absolute left-0 w-3 h-3 -translate-x-[2px] rounded-full"
                style={{
                    top: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
                    y: "-50%",
                    background: "#00F0FF",
                    boxShadow: "0 0 12px 4px rgba(0,240,255,0.5)",
                    scaleY: 0, // hide initially
                }}
            />
        </div>
    );
}
