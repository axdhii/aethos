"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "High-Spec 3D Web",
        desc: "Spatial architecture and WebGL environments built for extreme performance and absolute visual authority.",
        specs: ["Custom Shaders", "60fps Fluid Dynamics", "Edge Delivered"],
    },
    {
        title: "Proprietary ERPs",
        desc: "Bespoke resource planning systems modeled strictly around your organization's internal operational logistics.",
        specs: ["Internal Dominance", "Encrypted Data", "Modular Scaling"],
    },
    {
        title: "Custom Software",
        desc: "High-throughput APIs, headless infrastructure, and integrated pipelines that remove bottlenecks entirely.",
        specs: ["Headless CMS", "Data Sovereignty", "Zero Latency"],
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Pin the section and animate cards horizontally
            gsap.to(cardsRef.current, {
                xPercent: -100 * (cardsRef.current.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (cardsRef.current.length - 1),
                    start: "top top",
                    end: () => `+=${containerRef.current?.offsetWidth || 0}`,
                },
            });

            // Assemble/Disassemble animation for each card
            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                const contentElements = card.querySelectorAll('.card-content');

                gsap.fromTo(contentElements,
                    {
                        rotateX: 45,
                        z: -100,
                        opacity: 0,
                        scale: 0.8
                    },
                    {
                        rotateX: 0,
                        z: 0,
                        opacity: 1,
                        scale: 1,
                        stagger: 0.1,
                        ease: "circ.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "left center",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden bg-[var(--color-aethos-obsidian)] text-[var(--color-aethos-silver)] perspective-1000">

            <div className="absolute top-10 left-10 z-20 font-mono text-sm tracking-widest opacity-50 uppercase">
        // 01. The Spec
            </div>

            <div className="flex pl-[10vw]">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => { cardsRef.current[index] = el; }}
                        className="card-container w-[80vw] flex-shrink-0 pr-[10vw] flex flex-col justify-center translate-z-0"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="card-content border border-[#E5E5E5]/10 bg-white/[0.02] backdrop-blur-xl p-12 lg:p-24 shadow-2xl">
                            <h2 className="text-4xl lg:text-7xl font-light tracking-tight mb-6">
                                {service.title}
                            </h2>
                            <p className="text-xl text-[#E5E5E5]/60 mb-12 max-w-2xl">
                                {service.desc}
                            </p>

                            <div className="flex gap-4 border-t border-[#E5E5E5]/10 pt-8 mt-8">
                                {service.specs.map((spec, sIdx) => (
                                    <div key={sIdx} className="text-xs font-mono uppercase tracking-widest text-[#E5E5E5]/40 py-2 px-4 border border-[#E5E5E5]/10 rounded-full">
                                        {spec}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
