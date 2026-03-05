"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function MagneticButton({
    children,
    className = "",
    onClick,
    type = "button",
    disabled = false
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current || disabled) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate distance from center of the button
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Magnetic pull strength
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            type={type}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            disabled={disabled}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`group relative overflow-hidden bg-transparent border border-[#E5E5E5]/20 text-[var(--color-aethos-silver)] py-4 px-8 font-mono text-sm tracking-[0.2em] uppercase transition-colors duration-500 hover:border-white ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
        >
            {/* Base text */}
            <div className="relative z-10">{children}</div>

            {/* Fluid fill hover state */}
            <motion.div
                className="absolute inset-x-0 bottom-0 bg-white"
                initial={{ height: "0%" }}
                whileHover={{ height: "100%" }}
                transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            />

            {/* Invert text color on hover. Handled via mix-blend-mode for ultra high-end look */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference pointer-events-none">
                {children}
            </div>
        </motion.button>
    );
}
