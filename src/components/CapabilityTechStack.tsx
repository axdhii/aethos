"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TECH_STACK = [
    {
        name: "Next.js",
        description: "Edge Delivery & Sub-Second LCP",
        icon: (
            <svg viewBox="0 0 128 128" className="w-8 h-8 fill-current" aria-label="Next.js">
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L53.4 56.5 40.7 73.7 26.3 53.4l41.6-56.3L111 64c0 26-21 47-47 47-19.1 0-35.6-11.4-42.9-27.8l9.6-13.1c5.9 12.3 18.6 20.9 33.3 20.9 20.4 0 37-16.6 37-37 0-20.4-16.6-37-37-37S27 33.6 27 54H17C17 28 38 7 64 7s47 21 47 47c0 8.3-2.2 16.1-6 22.8L61.6 15 40.7 44.5l-6.2-8.4L64 0z" />
            </svg>
        ),
    },
    {
        name: "Three.js / WebGL",
        description: "Spatial Depth & High-Fidelity GPU Rendering",
        icon: (
            <svg viewBox="0 0 100 100" className="w-8 h-8 stroke-current fill-none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-label="Three.js">
                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
                <polyline points="50,10 50,50 90,70" />
                <polyline points="10,30 50,50 50,90" />
                <line x1="10" y1="70" x2="50" y2="50" />
            </svg>
        ),
    },
    {
        name: "PostgreSQL",
        description: "Relational Data Integrity & Sovereign Encryption",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="PostgreSQL">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
        ),
    }
];

export default function CapabilityTechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    return (
        <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            {/* Copy Side */}
            <div className="md:w-1/2 flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        The Technical Stack.
                    </h2>
                    <p className="text-lg text-[#E5E5E5]/70 leading-relaxed font-light">
                        We don't experiment with your business. We build on the world's most reliable frameworks: Next.js for speed, Three.js for depth, and PostgreSQL for data integrity.
                    </p>
                </motion.div>
            </div>

            {/* Grid Side */}
            <div className="md:w-1/2 w-full grid gap-4 grid-cols-1 md:grid-cols-1">
                {TECH_STACK.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                        className="group relative flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-white/[0.05] transition-all duration-500 ease-out"
                    >
                        {/* Hover glow background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

                        <div className="flex-shrink-0 text-[#E5E5E5]/50 group-hover:text-white transition-colors duration-500">
                            {tech.icon}
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-white font-medium text-lg tracking-wide">{tech.name}</h3>
                            <span className="text-sm font-light text-[#E5E5E5]/50">{tech.description}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
