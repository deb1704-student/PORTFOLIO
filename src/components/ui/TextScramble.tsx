"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface TextScrambleProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export default function TextScramble({
    text,
    delay = 0,
    speed = 40,
    className = "",
}: TextScrambleProps) {
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        const timeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        indexRef.current = 0;
        const targetLen = text.length;

        const interval = setInterval(() => {
            indexRef.current += 1;
            const resolved = indexRef.current;

            if (resolved > targetLen) {
                setDisplayed(text);
                clearInterval(interval);
                return;
            }

            let result = "";
            for (let i = 0; i < targetLen; i++) {
                if (i < resolved) {
                    result += text[i];
                } else if (text[i] === " ") {
                    result += " ";
                } else {
                    result += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }
            setDisplayed(result);
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    if (!started) {
        return (
            <span className={className}>
                {text.split("").map((c) => (c === " " ? " " : "\u00A0"))}
            </span>
        );
    }

    return <span className={className}>{displayed}</span>;
}
