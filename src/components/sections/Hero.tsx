"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticLink from "@/components/ui/MagneticLink";
import TextScramble from "@/components/ui/TextScramble";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

  // Floating shapes parallax
  const shape1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const shape1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const shape2Rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative h-screen w-full flex flex-col justify-center px-4 md:px-12 lg:px-24 overflow-hidden bg-background">

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: gridOpacity }}
      >
        <div className="absolute inset-0 hero-grid" />
      </motion.div>

      {/* Abstract Background Gradient Mesh - parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity, scale: bgScale }}>
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent-blue/20 rounded-full blur-[100px] mix-blend-screen" />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-24 h-24 md:w-32 md:h-32 border border-accent/10 z-[1]"
        style={{ y: shape1Y, rotate: shape1Rotate }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[25%] w-16 h-16 md:w-20 md:h-20 rounded-full border border-accent-blue/15 z-[1]"
        style={{ y: shape2Y, rotate: shape2Rotate }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[5%] w-3 h-3 rounded-full bg-accent/30 z-[1]"
        style={{ y: shape3Y }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[8%] w-2 h-2 rounded-full bg-accent-blue/40 z-[1]"
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Decorative cross */}
      <motion.div
        className="absolute top-[25%] left-[60%] z-[1] text-accent/10 text-4xl font-light select-none"
        style={{ y: shape2Y }}
      >
        +
      </motion.div>

      {/* Main Content */}
      <motion.div className="z-10 w-full" style={{ y: nameY }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] font-heading font-bold text-foreground tracking-tighter uppercase"
            >
              <TextScramble text="Debanjan" delay={300} speed={35} />
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] font-heading font-bold text-foreground tracking-tighter uppercase md:ml-[15%]"
            >
              <TextScramble text="Das" delay={600} speed={50} />
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 md:max-w-xl md:ml-auto md:mr-24"
          style={{ y: subtitleY }}
        >
          <p className="font-sans text-xl md:text-2xl font-light text-foreground/80 tracking-wide leading-relaxed">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="inline-block"
            >
              Building Systems.
            </motion.span>{" "}
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="inline-block"
            >
              Thinking in Products.
            </motion.span>{" "}
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="inline-block text-accent"
            >
              Future FinTech Founder.
            </motion.span>
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-4 md:left-12 lg:left-24 z-20 hoverable"
      >
        <MagneticLink>
          <div className="flex flex-col items-center justify-center gap-4 cursor-pointer text-foreground/60 hover:text-accent transition-colors duration-300">
            <span className="font-sans text-xs uppercase tracking-widest rotate-90 mb-8 font-medium">
              Explore
            </span>
            <div className="p-3 rounded-full border border-foreground/20 hover:border-accent transition-colors">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowDown size={18} />
              </motion.div>
            </div>
          </div>
        </MagneticLink>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
}
