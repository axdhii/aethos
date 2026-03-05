"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const singularityRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const svgLinesRef = useRef<(SVGPathElement | null)[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Prevent scrolling during preloader
        document.body.style.overflow = "hidden";

        // Setup initial SVG stroke states before animation
        svgLinesRef.current.forEach((path) => {
            if (!path) return;
            // Get exact path length for proper dash offset
            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });
        });

        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoaded(true);
                document.body.style.overflow = "auto";
            },
        });

        // 1. Draw the SVG lines mathematically (The Offset Animation)
        tl.to(svgLinesRef.current, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.1,
        })
            // 2. Singularity Expansion (Wait a moment, then flash)
            .to(singularityRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power4.inOut",
            }, "-=0.2")
            // 3. The Text Reveal from the light
            .to(textRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.4")
            // 4. The "Haptic" Flicker Effect
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.1,
                yoyo: true,
                repeat: 3,
                ease: "steps(1)", // digital binary feel
            })
            // 5. Fade out entire preloader
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
                display: "none",
            });

        return () => {
            document.body.style.overflow = "auto";
            tl.kill();
        };
    }, []);

    if (isLoaded) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-aethos-obsidian)]"
        >
            <div
                ref={singularityRef}
                className="absolute w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_40px_10px_rgba(255,255,255,0.8)] opacity-0 scale-0 origin-center mix-blend-screen"
                style={{ transform: 'scale(100)' }}
            />

            {/* 3D Wireframe Monogram Placeholder (SVG) */}
            <div className="relative z-10 flex flex-col items-center">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Wireframe A */}
                    <path ref={el => { svgLinesRef.current[0] = el; }} d="M50 10 L10 90 M50 10 L90 90 M25 60 L75 60" stroke="#E5E5E5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    {/* Internal structural lines for high-fidelity look */}
                    <path ref={el => { svgLinesRef.current[1] = el; }} d="M50 10 L50 90 M10 90 L90 90" stroke="#E5E5E5" strokeOpacity="0.3" strokeWidth="1" />
                </svg>

                <div ref={textRef} className="mt-8 text-sm font-mono tracking-[0.3em] text-[var(--color-aethos-silver)] uppercase opacity-0">
                    Initializing Engine
                </div>
            </div>
        </div>
    );
}
