"use client";

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { projects } from "@/data/content";

export default function Projects() {
    return (
        <section className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 bg-background z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
                    <h2 className="font-heading font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase">
                        Selected <br /> Works
                    </h2>
                    <p className="font-sans text-foreground/60 max-w-sm uppercase tracking-widest text-sm">
                        A curated selection of systems and infrastructure built for scale.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start"
                        >
                            {/* Left Side: Number and Meta */}
                            <div className="hidden md:flex flex-col w-1/5 shrink-0 self-stretch sticky top-32">
                                <span className="font-heading text-4xl text-foreground/20 font-bold mb-8">
                                    {project.id}
                                </span>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-foreground/60 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full flex flex-col gap-6 relative">
                                <div className="flex justify-between items-start w-full">
                                    <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter font-medium group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/20 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 hoverable">
                                        <MoveUpRight size={24} />
                                    </a>
                                </div>

                                <p className="font-sans text-xl md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
                                    {project.summary}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-white/10 pt-8">
                                    <div>
                                        <h4 className="font-heading uppercase tracking-widest text-xs text-accent mb-3">Problem</h4>
                                        <p className="font-sans text-foreground/60 text-sm leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-heading uppercase tracking-widest text-xs tracking-widest text-accent mb-3">Architecture</h4>
                                        <p className="font-sans text-foreground/60 text-sm leading-relaxed">{project.architecture}</p>
                                    </div>
                                </div>

                                {/* Mobile Meta (Hidden on Desktop) */}
                                <div className="flex md:hidden flex-wrap gap-2 mt-8">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-foreground/60">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
