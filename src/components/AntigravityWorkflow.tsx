"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AntigravityWorkflow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const coreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !coreRef.current) return;

        const ctx = gsap.context(() => {
            // Pin the section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: "+=150%", // How long to stay pinned
                },
            });

            // The line draws down
            tl.to(".progress-line", {
                height: "100%",
                ease: "none",
                duration: 2,
            });

            // Show steps as line passes
            tl.to(".step-1", { opacity: 1, x: 0, duration: 0.5 }, 0.2);
            tl.to(".step-2", { opacity: 1, x: 0, duration: 0.5 }, 0.8);
            tl.to(".step-3", { opacity: 1, x: 0, duration: 0.5 }, 1.4);

            // Pulse the core at the end
            tl.to(coreRef.current, {
                scale: 1.2,
                boxShadow: "0 0 60px 20px rgba(229,229,229,0.3)",
                duration: 0.5,
                yoyo: true,
                repeat: 1,
            }, 2);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex bg-[var(--color-aethos-obsidian)] text-[var(--color-aethos-silver)] overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="absolute top-10 right-10 z-20 font-mono text-sm tracking-widest opacity-50 uppercase text-right">
        // 02. Antigravity Execution
            </div>

            {/* The Central Axis */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E5E5E5]/10 -translate-x-1/2">
                <div className="progress-line w-full bg-[#E5E5E5] h-0 shadow-[0_0_10px_#E5E5E5]" />
            </div>

            <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col justify-evenly px-4">

                {/* Steps */}
                <div className="step-1 flex w-1/2 justify-end pr-16 opacity-0 translate-x-12">
                    <div className="text-right max-w-md">
                        <h3 className="text-2xl font-mono tracking-widest mb-4">I. ARCHITECTURE</h3>
                        <p className="text-[#E5E5E5]/60 text-lg font-light leading-relaxed">
                            We bypass standard templates. Every project begins with mapping out your custom data flow, 3D requirements, and core business logic into a single cohesive blueprint.
                        </p>
                    </div>
                </div>

                <div className="step-2 flex w-1/2 self-end pl-16 opacity-0 -translate-x-12">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-mono tracking-widest mb-4">II. DEVELOPMENT</h3>
                        <p className="text-[#E5E5E5]/60 text-lg font-light leading-relaxed">
                            We build proprietary software engines, headless infrastructure, and deeply integrated corporate portals concurrently with spatial UI elements, ensuring uncompromised speed.
                        </p>
                    </div>
                </div>

                <div className="step-3 flex w-1/2 justify-end pr-16 opacity-0 translate-x-12">
                    <div className="text-right max-w-md">
                        <h3 className="text-2xl font-mono tracking-widest mb-4">III. DEPLOYMENT</h3>
                        <p className="text-[#E5E5E5]/60 text-lg font-light leading-relaxed">
                            The final product is a hyper-optimized digital entity. A bespoke, highly-performant system that scales effortlessly and establishes absolute technical authority.
                        </p>
                    </div>
                </div>

            </div>

            {/* The Final Core Node */}
            <div
                ref={coreRef}
                className="absolute left-1/2 bottom-[10%] w-4 h-4 rounded-full bg-white -translate-x-1/2 translate-y-1/2 z-10"
            />
        </section>
    );
}
