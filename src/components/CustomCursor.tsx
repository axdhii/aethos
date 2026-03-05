"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Smooth spring physics for the trailing ring
    const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

    // Instant update for the core dot
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect if the device relies on touch
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsMobile(true);
            return;
        }
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Scale up cursor on interactive elements
            if (
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "a" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("interactive") ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* The sharp inner dot (instant) */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate3d(${mousePos.x - 4}px, ${mousePos.y - 4}px, 0)`,
                    transition: "opacity 0.15s ease",
                    opacity: isHovering ? 0 : 1
                }}
            />

            {/* The physics-driven outer ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
                    borderColor: isHovering ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)"
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
