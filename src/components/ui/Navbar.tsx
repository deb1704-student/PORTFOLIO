"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    // Track scroll position for background blur
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Intersection Observer for active section highlighting
    useEffect(() => {
        const sectionIds = navLinks
            .filter((l) => l.href.startsWith("#"))
            .map((l) => l.href.slice(1));

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            if (!href.startsWith("#")) return; // let Next.js handle route links
            e.preventDefault();
            const el = document.getElementById(href.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            }
        },
        []
    );

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                    scrolled
                        ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-heading text-lg font-bold tracking-widest uppercase text-foreground hoverable"
                    >
                        DD.
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive =
                                link.href.startsWith("#") &&
                                activeSection === link.href.slice(1);
                            const isRoute = !link.href.startsWith("#");

                            return (
                                <li key={link.label}>
                                    {isRoute ? (
                                        <Link
                                            href={link.href}
                                            className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-accent transition-colors duration-300 hoverable"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={(e) =>
                                                handleNavClick(e, link.href)
                                            }
                                            className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 hoverable ${
                                                isActive
                                                    ? "text-accent"
                                                    : "text-foreground/70 hover:text-accent"
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground/80 hover:text-accent transition-colors hoverable"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: 0.1,
                                    },
                                },
                            }}
                            className="flex flex-col items-center gap-8"
                        >
                            {navLinks.map((link) => {
                                const isRoute = !link.href.startsWith("#");
                                return (
                                    <motion.li
                                        key={link.label}
                                        variants={{
                                            hidden: { y: 30, opacity: 0 },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeOut",
                                                },
                                            },
                                        }}
                                    >
                                        {isRoute ? (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="font-heading text-4xl uppercase tracking-tight text-foreground/80 hover:text-accent transition-colors duration-300"
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                onClick={(e) =>
                                                    handleNavClick(
                                                        e,
                                                        link.href
                                                    )
                                                }
                                                className="font-heading text-4xl uppercase tracking-tight text-foreground/80 hover:text-accent transition-colors duration-300"
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
