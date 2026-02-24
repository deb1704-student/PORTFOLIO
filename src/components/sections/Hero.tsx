"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticLink from "@/components/ui/MagneticLink";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut", // safer than cubic-bezier array in strict TS
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-4 md:px-12 lg:px-24 overflow-hidden bg-background">
      
      {/* Abstract Background Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent-blue/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] font-heading font-bold text-foreground tracking-tighter uppercase"
            >
              Debanjan
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] font-heading font-bold text-foreground tracking-tighter uppercase md:ml-[15%]"
            >
              Das
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="mt-16 md:mt-24 md:max-w-xl md:ml-auto md:mr-24"
        >
          <p className="font-sans text-xl md:text-2xl font-light text-foreground/80 tracking-wide leading-relaxed">
            Building Systems. <br className="hidden md:block" />
            Thinking in Products. <br className="hidden md:block" />
            Future FinTech Founder.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-4 md:left-12 lg:left-24 z-20 hoverable"
      >
        <MagneticLink>
          <div className="flex flex-col items-center justify-center gap-4 cursor-pointer text-foreground/60 hover:text-accent transition-colors duration-300">
            <span className="font-sans text-xs uppercase tracking-widest rotate-90 mb-8 font-medium">
              Scroll
            </span>

            <div className="p-3 rounded-full border border-foreground/20 hover:border-accent">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown size={18} />
              </motion.div>
            </div>
          </div>
        </MagneticLink>
      </motion.div>
    </section>
  );
}