"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const isHovering = useRef(false);

    // Detect touch device — skip cursor entirely
    useEffect(() => {
        const mq = window.matchMedia("(pointer: coarse)");
        setIsTouchDevice(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Use direct DOM manipulation instead of setState for performance
    useEffect(() => {
        if (isTouchDevice) return;
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            const size = isHovering.current ? 64 : 32;
            const offset = size / 2;
            cursor.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hovering =
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                !!target.closest("a") ||
                !!target.closest("button") ||
                target.classList.contains("hoverable");

            if (hovering !== isHovering.current) {
                isHovering.current = hovering;
                if (cursor) {
                    cursor.style.width = hovering ? "64px" : "32px";
                    cursor.style.height = hovering ? "64px" : "32px";
                    cursor.style.backgroundColor = hovering
                        ? "rgba(0, 240, 255, 0.2)"
                        : "rgba(255, 255, 255, 0.1)";
                    cursor.style.borderColor = hovering
                        ? "rgba(0, 240, 255, 0.8)"
                        : "rgba(255, 255, 255, 0.5)";
                }
            }
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseover", onMouseOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            style={{
                width: 32,
                height: 32,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                mixBlendMode: "difference",
                transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                willChange: "transform",
            }}
        />
    );
}
