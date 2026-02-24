"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { useRef } from "react";

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
    const contentX = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <motion.div
            ref={cardRef}
            className="group relative"
        >
            {/* Glow backdrop on hover */}
            <div
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
                style={{ background: `radial-gradient(600px circle, ${project.color}08, transparent 70%)` }}
            />

            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                {/* Left Side: Number and Meta */}
                <div className="hidden md:flex flex-col w-1/5 shrink-0 self-stretch sticky top-32">
                    <motion.span
                        className="font-heading text-7xl font-bold mb-8 transition-colors duration-500"
                        style={{ color: `${project.color}22` }}
                        whileHover={{ color: `${project.color}66` }}
                    >
                        {project.id}
                    </motion.span>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.stack.map((tech, i) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                                className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-foreground/70 group-hover:border-accent/40 group-hover:text-accent transition-all duration-300"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full flex flex-col gap-6 relative">
                    {/* Project Image with parallax zoom */}
                    <motion.div
                        className="relative w-full aspect-video rounded-2xl overflow-hidden bg-card border border-white/5 mb-2"
                        style={{ opacity: imageOpacity }}
                    >
                        <motion.div
                            className="absolute inset-0"
                            style={{ scale: imageScale }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}05, transparent)` }}
                            />
                            {/* Animated scan line */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-px"
                                style={{ background: `linear-gradient(to right, transparent, ${project.color}40, transparent)` }}
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span
                                className="font-heading text-[8rem] md:text-[12rem] font-bold uppercase tracking-tighter opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 select-none"
                                style={{ color: project.color }}
                            >
                                {project.id}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div style={{ x: contentX, opacity: contentOpacity }}>
                        <div className="flex justify-between items-start w-full">
                            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter font-medium group-hover:text-accent transition-colors duration-300">
                                {project.title}
                            </h3>
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} project`}
                                className="p-4 rounded-full border border-white/20 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 hoverable"
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MoveUpRight size={24} />
                            </motion.a>
                        </div>

                        <p className="font-sans text-xl md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl mt-6">
                            {project.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="font-heading uppercase tracking-widest text-xs text-accent mb-3">Problem</h4>
                                <p className="font-sans text-foreground/70 text-sm leading-relaxed">{project.problem}</p>
                            </div>
                            <div>
                                <h4 className="font-heading uppercase text-xs tracking-widest text-accent mb-3">Architecture</h4>
                                <p className="font-sans text-foreground/70 text-sm leading-relaxed">{project.architecture}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile Meta */}
                    <div className="flex md:hidden flex-wrap gap-2 mt-8">
                        {project.stack.map(tech => (
                            <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-foreground/70">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" aria-label="Selected projects" className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 bg-background z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase"
                    >
                        Selected <br /> Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-sans text-foreground/70 max-w-sm uppercase tracking-widest text-sm"
                    >
                        A curated selection of systems and infrastructure built for scale.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
