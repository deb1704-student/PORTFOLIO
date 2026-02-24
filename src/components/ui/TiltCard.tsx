"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    tiltStrength?: number;
    glare?: boolean;
}

export default function TiltCard({
    children,
    className = "",
    tiltStrength = 10,
    glare = true,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -tiltStrength;
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * tiltStrength;
        setTilt({ x: rotateX, y: rotateY });

        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlarePos({ x: glareX, y: glareY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className={`relative ${className}`}
        >
            {children}
            {/* Glare overlay */}
            {glare && isHovered && (
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0,240,255,0.12) 0%, transparent 60%)`,
                    }}
                />
            )}
        </motion.div>
    );
}
