"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalFlagship() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const gridLinesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        const gridLines = gridLinesRef.current;
        if (!section || !content || !gridLines) return;

        // Animate content fading in and moving up
        gsap.fromTo(content,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 1,
                }
            }
        );

        // Animate tactical grid lines expanding
        gsap.fromTo(gridLines,
            { scaleY: 0 },
            {
                scaleY: 1,
                duration: 2,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[120vh] w-full flex items-center bg-transparent py-32 px-6 md:px-24">

            {/* Tactical Grid Overlay behind content */}
            <div
                ref={gridLinesRef}
                className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5E5E5]/20 to-transparent origin-top"
            />

            <div ref={contentRef} className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left side: Typographic Core */}
                <div className="flex flex-col gap-8">
                    <div className="font-mono text-xs tracking-[0.3em] text-[#E5E5E5]/40 uppercase flex items-center gap-4">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        Module 01: Digital Flagship
                    </div>

                    <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[var(--color-aethos-silver)] leading-tight">
                        We don't build pages; <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E5E5E5]/30">
                            We architect spatial worlds.
                        </span>
                    </h2>

                    <p className="text-[#E5E5E5]/60 text-lg font-light leading-relaxed max-w-md">
                        Specialized in high-performance WebGL, custom software integrations, and enterprise-grade architecture. Your brand deserves more than a standard template.
                    </p>

                    <div className="pt-8">
                        <MagneticButton className="border-[#E5E5E5]/40">
                            Initialize Architecture
                        </MagneticButton>
                    </div>
                </div>

                {/* Right side: Abstract UI Representation (Simulated 3D HUD) */}
                <div className="relative h-[500px] w-full border border-[#E5E5E5]/10 bg-black/20 backdrop-blur-xl flex items-center justify-center overflow-hidden mix-blend-screen isolate">
                    {/* The "HUD" Scanner elements - Simplified */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] text-[#E5E5E5]/30 tracking-widest uppercase">
                        ARCHITECTURE: SPATIAL <br /> INTEGRATION: SEAMLESS
                    </div>

                    {/* Clean UI Reticle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#E5E5E5]/10 rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 border border-[#E5E5E5]/20 rounded-full" />
                        <div className="absolute w-[200%] h-[1px] bg-[#E5E5E5]/5 rotate-45" />
                        <div className="absolute w-[200%] h-[1px] bg-[#E5E5E5]/5 -rotate-45" />
                    </div>

                    <p className="absolute bottom-1/4 uppercase font-mono tracking-[0.5em] text-xs text-[#E5E5E5]/50 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                        AETHOS ENGINE
                    </p>
                </div>

            </div>
        </section>
    );
}
